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
import Img from 'gatsby-image/withIEPolyfill'

import moment from 'moment'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

import Icon from '../Icons'

// ___________________________________________________________________

type CardLeakProps = {
  aspectRatio?: number
  post: {
    data: {
      _id: string
      linkUrl: string
      author: string
      text: string
      category: string
      createdOn: string
      postType: string
      title: string
      votes: number
    }
  }
  small?: boolean
  video?: boolean
}

// ___________________________________________________________________

const MediumClapContext = createContext({})
const { Provider } = MediumClapContext

const VoteCounter: React.FC<{ onVote: any; totalVotes: number }> = ({
  onVote,
  totalVotes
}) => {
  const initialState = {
    userVote: 0,
    voteTotal: totalVotes,
    isClicked: false,
    isUpVote: false,
    isDownVote: false
  }

  const MAXIMUM_USER_VOTE = 50000000
  const [voteState, setVoteState] = useState(initialState)
  const { userVote, voteTotal, isClicked } = voteState
  const [{ voteRef, voteCountRef, voteTotalRef }, setRefState] = useState<{
    voteRef: any
    voteCountRef: any
    voteTotalRef: any
  }>({})

  const setRef = useCallback(node => {
    if (node !== null) {
      setRefState(prevRefState => ({
        ...prevRefState,
        [node.dataset.refkey]: node
      }))
    }
  }, [])

  const handleVoteUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setVoteState({
      userVote: Math.min(userVote + 1, MAXIMUM_USER_VOTE),
      voteTotal: userVote < MAXIMUM_USER_VOTE ? voteTotal + 1 : voteTotal,
      isClicked: true,
      isDownVote: false,
      isUpVote: true
    })
  }
  const handleVoteDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setVoteState({
      userVote: Math.min(userVote - 1, MAXIMUM_USER_VOTE),
      voteTotal: userVote < MAXIMUM_USER_VOTE ? voteTotal - 1 : voteTotal,
      isClicked: true,
      isDownVote: true,
      isUpVote: false
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
          className={`vote-arrow  vote-arrow--up`}
          disabled={userVote !== 1 ? false : true}
          aria-label="upvote post"
        >
          <Icon name="arrow" />
        </button>

        <Flex className="vote-count">{voteTotal}</Flex>

        <button
          onClick={handleVoteDown}
          className="vote-arrow  vote-arrow--down"
          disabled={userVote !== -1 ? false : true}
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

  let pillColor
  if (post.data.category === 'altcoin') {
    pillColor = theme.colors.blue
  } else if (post.data.category === 'bitcoin') {
    pillColor = theme.colors.orange
  } else if (post.data.category === 'defi') {
    pillColor = theme.colors.yellow
  } else if (post.data.category === 'Ethereum') {
    pillColor = theme.colors.purple
  }

  const currentDate = new Date().toLocaleString()
  console.log('DATE', currentDate)

  return (
    // <Link to={`/${pagePrefix}/${post.data.slug.current && post.data.slug.current}`}>
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

          <Text as="p" className="title">
            {post.data.title && post.data.title}
          </Text>

          {post.data.linkUrl && (
            <Box width={[3 / 4, 1 / 2]} className="link-url">
              <Link to={`#`}>{post.data.linkUrl && post.data.linkUrl}</Link>
              <Icon name="external-link" />
            </Box>
          )}
        </Box>

        <Flex className="utilities">
          <VoteCounter onVote={onVote} totalVotes={totalVotes} />

          <Flex mr={5} className="comments">
            comments
          </Flex>

          <Flex className="share">share</Flex>
        </Flex>
      </Flex>

      {post.data.linkUrl && (
        <Box className="figure">
          {/* {post.data.figure.asset.fluid && (
        <Img
          fluid={{
            ...post.data.figure.asset.fluid,
            aspectRatio: `${aspectRatio}`
          }}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={post.data.title}
        />
      )} */}
          <img src={post.data.linkUrl} alt="alt" height="100%" width="100%" />
        </Box>
      )}
    </S.CardLeak>
    // </Link>
  )
}

export default CardLeak
