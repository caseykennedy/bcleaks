// Card Leak

// ___________________________________________________________________

import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  createContext
} from 'react'
import moment from 'moment'
import { useIdentityContext } from 'react-netlify-identity-widget'

// Utils
import api from '../../utils/api'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from 'theme-ui'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

type CardLeakProps = {
  aspectRatio?: number
  post: FaunaDataQuery
  small?: boolean
  video?: boolean
}

type VoteCounterProps = {
  id: string
  onVote: any
  totalVotes: number
  voters: VoterShape[]
}

const MediumClapContext = createContext({})
const { Provider } = MediumClapContext

const MAXIMUM_USER_VOTE = 50000000

// ___________________________________________________________________

const VoteCounter: React.FC<VoteCounterProps> = ({
  id,
  onVote,
  totalVotes,
  voters
}) => {
  const initialState = {
    userVote: 0,
    voteTotal: totalVotes,
    isClicked: false,
    isUpVote: false,
    isDownVote: false
  }

  // Check if logged in
  const { isLoggedIn, user } = useIdentityContext()
  let username: string
  if (isLoggedIn) {
    username = user!.user_metadata.full_name
  } else {
    username = ''
  }

  const componentJustMounted = useRef<boolean>(true)
  const [voteState, setVoteState] = useState(initialState)
  const { userVote, voteTotal, isClicked, isUpVote, isDownVote } = voteState
  const [{ voteRef, voteCountRef, voteTotalRef }, setRefState] = useState<{
    voteRef: any
    voteCountRef: any
    voteTotalRef: any
  }>({})
  const [hasVotedUp, setHasVotedUp] = useState(false)
  const [hasVotedDown, setHasVotedDown] = useState(false)

  const setRef = useCallback(node => {
    if (node !== null) {
      setRefState(prevRefState => ({
        ...prevRefState,
        [node.dataset.refkey]: node
      }))
    }
  }, [])
  const memoizedValue = useMemo(
    () => ({
      ...voteState,
      setRef
    }),
    [voteState, setRef]
  )

  // Handle the up vote
  const handleVoteUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const voteUpReducer =
      userVote < MAXIMUM_USER_VOTE ? voteTotal + 1 : voteTotal
    setVoteState({
      userVote: Math.min(userVote + 1, MAXIMUM_USER_VOTE),
      voteTotal: voteUpReducer,
      isClicked: true,
      isDownVote: false,
      isUpVote: true
    })

    // update it!
    api
      .castVote(id, {
        votes: voteUpReducer,
        voters: voters.concat({ user: username, vote: userVote + 1 })
      })
      .then(response => {
        console.log('API response', response)
        // set app state
      })
      .catch(error => {
        console.log('ERROR')
        console.log('API error:', error)
      })
  }
  // Handle the down vote
  const handleVoteDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const voteDownReducer =
      userVote < MAXIMUM_USER_VOTE ? voteTotal - 1 : voteTotal
    setVoteState({
      userVote: Math.min(userVote - 1, MAXIMUM_USER_VOTE),
      voteTotal: voteDownReducer,
      isClicked: true,
      isDownVote: true,
      isUpVote: false
    })
    // update it!
    api
      .castVote(id, {
        votes: voteDownReducer,
        voters: voters.concat({ user: username, vote: userVote - 1 })
      })
      .then(response => {
        console.log('API response', response)
        // set app state
      })
      .catch(error => {
        console.log('ERROR')
        console.log('API error:', error)
      })
  }

  const checkHasVoted = () =>
    voters.filter(voter => {
      if (isLoggedIn) {
        if (voter.user === user!.user_metadata.full_name && voter.vote === 1) {
          setHasVotedUp(true)
        }
        if (voter.user === user!.user_metadata.full_name && voter.vote === -1) {
          setHasVotedDown(true)
        }
      }
    })

  useEffect(() => {
    if (!componentJustMounted.current) {
      onVote(voteState)
    }
    componentJustMounted.current = false
    checkHasVoted()
  }, [userVote, onVote])

  return (
    <Provider value={memoizedValue}>
      <Flex className="vote">
        <button
          onClick={handleVoteUp}
          className={`vote-arrow  vote-arrow--up  ${
            userVote === 1 ? 'active' : ''
          } ${hasVotedUp && 'active'}`}
          disabled={isLoggedIn && userVote !== 1 ? false : true}
          aria-label="upvote post"
        >
          <Icon name="arrow" />
        </button>

        <Flex className="vote-count">{voteTotal}</Flex>

        <button
          onClick={handleVoteDown}
          className={`vote-arrow  vote-arrow--down  ${
            userVote === -1 ? 'active' : ''
          } ${hasVotedDown && 'active'}`}
          disabled={isLoggedIn && userVote !== -1 ? false : true}
          aria-label="downvote post"
        >
          <Icon name="arrow" />
        </button>
      </Flex>
    </Provider>
  )
}

const CardLeak: React.FC<CardLeakProps> = ({
  aspectRatio,
  post,
  small,
  video
}) => {
  const [totalVotes, setTotalVotes] = useState(0)
  const onVote = (countTotal: number) => {
    setTotalVotes(countTotal)
  }

  // Highlight the category pill
  let pillColor
  if (post.data.category === 'Altcoin') {
    pillColor = theme.colors.blue
  } else if (post.data.category === 'Bitcoin') {
    pillColor = theme.colors.orange
  } else if (post.data.category === 'Crypto Picks') {
    pillColor = theme.colors.pink
  } else if (post.data.category === 'DeFi') {
    pillColor = theme.colors.yellow
  } else if (post.data.category === 'Ethereum') {
    pillColor = theme.colors.purple
  } else if (post.data.category === 'Investigations') {
    pillColor = theme.colors.gray
  } else {
    pillColor = theme.colors.tertiary
  }

  return (
    <S.CardLeak>
      <Flex className="content">
        <Box>
          <Flex className="meta">
            <Box>
              <Box as="span" bg={pillColor} className="category">
                c/
                <span className="text--uppercasee">
                  {post.data.category && post.data.category}
                </span>
              </Box>{' '}
              {post.data.createdOn &&
                moment(post.data.createdOn)
                  .startOf('day')
                  .fromNow()}{' '}
              <Box as="span" className="user">
                by u/{post.data.author && post.data.author}
              </Box>
            </Box>

            {post.data.linkUrl && (
              <a href={post.data.linkUrl} rel="nofollow" target="_blank">
                <Icon name="external-link" />
              </a>
            )}
          </Flex>

          <Text className="title">{post.data.title && post.data.title}</Text>

          {post.data.linkUrl && (
            <Box sx={{ width: `100%` }} className="link-url">
              <a href={post.data.linkUrl} rel="nofollow" target="_blank">
                {post.data.linkUrl}
              </a>
            </Box>
          )}

          {/* {post.data.text && (
            <Text as="p" className="text">
              {post.data.text}
            </Text>
          )} */}
        </Box>

        <Flex className="utilities">
          <VoteCounter
            id={post.ref['@ref'].id}
            // id="0101010101101100010"
            onVote={onVote}
            totalVotes={post.data.votes}
            voters={post.data.voters}
          />

          <Flex mr={5} className="comments">
            comments
          </Flex>

          <Flex className="share">share</Flex>
        </Flex>
      </Flex>

      {/* {post.data.linkUrl && (
        <Box className="figure">
          <img src={post.data.linkUrl} alt="alt" height="100%" width="100%" />
        </Box>
      )} */}
    </S.CardLeak>
  )
}

export default CardLeak
