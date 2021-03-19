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
import { Link } from 'gatsby'
import moment from 'moment'
import { useIdentityContext } from 'react-netlify-identity-widget'

// Utils
import api from '../../utils/api'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

type CardLeakProps = {
  aspectRatio?: number
  post: FaunaDataQuery
  small?: boolean
  video?: boolean
}

// ___________________________________________________________________

const MediumClapContext = createContext({})
const { Provider } = MediumClapContext

const VoteCounter: React.FC<{
  id: string
  onVote: any
  totalVotes: number
  voters: VoterShape[]
}> = ({ id, onVote, totalVotes, voters }) => {
  const initialState = {
    userVote: 0,
    voteTotal: totalVotes,
    isClicked: false,
    isUpVote: false,
    isDownVote: false
  }

  const { isLoggedIn, user } = useIdentityContext()
  let username: string
  if (isLoggedIn) {
    username = user!.user_metadata.full_name
  } else {
    username = ''
  }

  const MAXIMUM_USER_VOTE = 50000000
  const [voteState, setVoteState] = useState(initialState)
  const { userVote, voteTotal, isClicked } = voteState
  const [{ voteRef, voteCountRef, voteTotalRef }, setRefState] = useState<{
    voteRef: any
    voteCountRef: any
    voteTotalRef: any
  }>({})

  // const hasMatch = voters.filter(function(value) {
  //   return value.recordId == valueId
  // })

  const setRef = useCallback(node => {
    if (node !== null) {
      setRefState(prevRefState => ({
        ...prevRefState,
        [node.dataset.refkey]: node
      }))
    }
  }, [])

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
        voters: [{ user: username, vote: userVote - 1 }]
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

  const componentJustMounted = useRef<boolean>(true)
  useEffect(() => {
    if (!componentJustMounted.current) {
      onVote(voteState)
    }
    componentJustMounted.current = false
  }, [userVote, onVote])

  const memoizedValue = useMemo(
    () => ({
      ...voteState,
      setRef
    }),
    [voteState, setRef]
  )

  return (
    <Provider value={memoizedValue}>
      <Flex className="vote">
        <button
          onClick={handleVoteUp}
          className={`vote-arrow  vote-arrow--up  ${userVote === 1 ? 'active' : ''}`}
          disabled={isLoggedIn && userVote !== 1 ? false : true}
          aria-label="upvote post"
        >
          <Icon name="arrow" />
        </button>

        <Flex className="vote-count">{voteTotal}</Flex>

        <button
          onClick={handleVoteDown}
          className={`vote-arrow  vote-arrow--down  ${userVote === -1 ? 'active' : ''}`}
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
  if (post.data.category === 'altcoin') {
    pillColor = theme.colors.blue
  } else if (post.data.category === 'bitcoin') {
    pillColor = theme.colors.orange
  } else if (post.data.category === 'defi') {
    pillColor = theme.colors.yellow
  } else if (post.data.category === 'ethereum') {
    pillColor = theme.colors.purple
  }

  return (
    <S.CardLeak>
      <Flex className="content">
        <Box>
          <Box className="meta">
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

          <Text className="title">{post.data.title && post.data.title}</Text>

          {post.data.linkUrl && (
            <Box width={[3 / 4, 1 / 2]} className="link-url">
              <Link to={`#`}>{post.data.linkUrl && post.data.linkUrl}</Link>
              <Icon name="external-link" />
            </Box>
          )}

          {post.data.text && (
            <Text as="p" className="text">
              {post.data.text}
            </Text>
          )}
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
