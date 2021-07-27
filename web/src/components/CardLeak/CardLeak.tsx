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
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { formatDistanceToNowStrict } from 'date-fns'
import { useIdentityContext } from 'react-netlify-identity-widget'
import { useQuery } from '@apollo/react-hooks'

// Utils
import api from '../../utils/api'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from 'theme-ui'

// Components
import Icon from '../Icons'

// Data
import useSiteSettings from '../../hooks/useSiteSettings'
import { GET_COMMENTS_BY_SLUG } from '../../gql/query'

// ___________________________________________________________________

type CardLeakProps = {
  post: FaunaDataQuery
}

type VoteCounterProps = {
  id: string
  onVote: any
  totalVotes: number
  voters: VoterShape[]
}

type QueryData = {
  getCommentsBySlug: {
    commentId: string
    slug: string
    date: string
    name: string
    comment: string
  }[]
}

type QueryVars = {
  slug: string
}

const VoteContext = createContext({})
const { Provider } = VoteContext

const MAXIMUM_USER_VOTE = 500000

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

  // Handle vote state
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
          className={`vote__arrow  vote__arrow--up  ${
            userVote === 1 ? 'active' : ''
          } ${hasVotedUp && 'active'}`}
          disabled={isLoggedIn && userVote !== 1 ? false : true}
          aria-label="upvote post"
        >
          <Icon name="arrow" />
        </button>

        <Flex className="vote__count">{voteTotal}</Flex>

        <button
          onClick={handleVoteDown}
          className={`vote__arrow  vote__arrow--down  ${
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

const CardLeak: React.FC<CardLeakProps> = ({ post }) => {
  // Destructure post
  const {
    author,
    category,
    createdOn,
    linkUrl,
    postType,
    slug,
    text,
    title,
    votes,
    voters
  } = post.data

  // Get site settings
  const site = useSiteSettings()

  // Query comments by slug
  const { loading, data, error } = useQuery<QueryData, QueryVars>(
    GET_COMMENTS_BY_SLUG,
    {
      variables: {
        slug: post.data.slug
      }
    }
  )

  // Setup state & constants
  const [totalVotes, setTotalVotes] = useState(0)
  const [isCopied, setIsCopied] = useState(false)

  const totalComments = data && data?.getCommentsBySlug.length
  const shareSlug = `${site.url}/${slug}`

  // Set total vote count
  const onVote = (countTotal: number) => {
    setTotalVotes(countTotal)
  }

  // Toggle share dropdown
  const [isShareActive, setShareActive] = useState(false)
  const ToggleShareDropdown = () => {
    setShareActive(!isShareActive)
  }

  // On copy share link
  const onCopyShareLink = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  // Highlight the category pill
  let pillColor
  if (category === 'Altcoin') {
    pillColor = theme.colors.blue
  } else if (category === 'Bitcoin') {
    pillColor = theme.colors.orange
  } else if (category === 'Crypto Picks') {
    pillColor = theme.colors.pink
  } else if (category === 'DeFi') {
    pillColor = theme.colors.yellow
  } else if (category === 'Ethereum') {
    pillColor = theme.colors.purple
  } else if (category === 'Investigations') {
    pillColor = theme.colors.gray
  } else {
    pillColor = theme.colors.tertiary
  }

  const Utilities = () => {
    return (
      <Flex className="utilities">
        <VoteCounter
          id={post.ref['@ref'].id}
          onVote={onVote}
          totalVotes={votes}
          voters={voters}
        />

        <Link to={`/community/${slug}`}>
          <Flex mr={4} className="utilities__item">
            <Icon name="comment" className="icon" />
            {totalComments} comments
          </Flex>
        </Link>

        <Flex
          mr={4}
          className="utilities__item  share"
          onClick={ToggleShareDropdown}
        >
          <Icon name="share" className="icon" />
          share
          <Box className={`share__dropdown  ${isShareActive && 'visible'}`}>
            <Box className="share__link">
              <CopyToClipboard text={shareSlug} onCopy={onCopyShareLink}>
                <span>
                  <Icon name="link" /> copy link
                </span>
              </CopyToClipboard>
            </Box>
            <Box className="share__link">
              <a href={`//twitter.com/share?url=${shareSlug}`} target="_blank">
                <Icon name="twitter" /> Twitter
              </a>
            </Box>
          </Box>
        </Flex>

        {isCopied && <Text sx={{ color: 'primary' }}>copied!</Text>}
      </Flex>
    )
  }

  return (
    <S.CardLeak>
      <Flex className="inner">
        <Box>
          <Flex className="meta">
            <Box>
              <Box as="span" bg={pillColor} className="category">
                c/
                <span className="text--uppercasee">{category}</span>
              </Box>
              {createdOn &&
                formatDistanceToNowStrict(new Date(createdOn), {
                  addSuffix: true
                })}{' '}
              by{' '}
              <Box as="span" color="text">
                {author}
              </Box>
            </Box>

            <a href={linkUrl} rel="nofollow" target="_blank">
              <Icon name="external-link" />
            </a>
          </Flex>

          <Text pr={[0, 5]} pb={1} className="title">
            <Link to={`/community/${slug}`}>{title}</Link>
          </Text>

          {text && (
            <Link to={`/community/${slug}`}>
              <Text as="p" pr={[0, 5]} className="text">
                {text}
              </Text>
            </Link>
          )}

          {linkUrl && (
            <Box sx={{ width: `100%` }} className="link-url">
              <a href={linkUrl} rel="nofollow" target="_blank">
                {linkUrl}
              </a>
            </Box>
          )}
        </Box>
        <Utilities />
      </Flex>
    </S.CardLeak>
  )
}

export default CardLeak
