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

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

import Icon from '../Icons'

// ___________________________________________________________________

type PostShape = {
  id: number
  title: string
  body: string
  votes: number
  category: string
  user: string
}

type CardLeakProps = {
  aspectRatio?: number
  post: PostShape
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
  const [totalVotes, setTotalVotes] = useState(post.votes)
  const onVote = (countTotal: number) => {
    setTotalVotes(countTotal)
  }
  return (
    // <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
    <S.CardLeak>
      <Flex className="content">
        <Box>
          <Text as="p" color="gray" fontFamily="sans" className="text--small">
            <Box as="span" className="category">
              c/
              <Box as="span" className="text--uppercasee">
                {post.category && post.category}
              </Box>
            </Box>{' '}
            8 hrs ago by{' '}
            <Box as="span" className="text--underline">
              u/{post.user && post.user}
            </Box>
          </Text>
          <Heading className={`title  ${!small ? `text--md` : `title--small`}`}>
            {post.title && post.title}
          </Heading>
          <Link to={`#`}>
            <Text color="primary" fontSize={[0, 1]}>
              youtu.be/p0mNQx...
            </Text>
          </Link>
        </Box>

        <Flex className="utilities">
          <VoteCounter onVote={onVote} totalVotes={totalVotes} />

          <Flex mr={5} className="comments">
            comments
          </Flex>

          <Flex className="share">share</Flex>
        </Flex>
      </Flex>

      <Box flex={1}>
        <Box className="bg">
          <Box className="figure">
            {/* {post.figure.asset.fluid && (
              <Img
                fluid={{
                  ...post.figure.asset.fluid,
                  aspectRatio: `${aspectRatio}`
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
              />
            )} */}
            img
          </Box>
        </Box>
      </Box>
    </S.CardLeak>
    // </Link>
  )
}

export default CardLeak
