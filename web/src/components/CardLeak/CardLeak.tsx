// Card Leak

// ___________________________________________________________________

import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useContext,
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

type Props = {
  aspectRatio?: number
  post: PostQuery
  small?: boolean
  video?: boolean
}

const initialState = {
  vote: 0,
  voteTotal: 37,
  isClicked: false
}

const MediumClapContext = createContext({})
const { Provider } = MediumClapContext

const VoteCount: React.FC<{ onVote: any }> = ({ onVote }) => {
  const MAXIMUM_USER_CLAP = 50000000
  const [voteState, setVoteState] = useState(initialState)
  const { vote, voteTotal, isClicked } = voteState

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

  const handleVoteUp = () => {
    setVoteState({
      vote: Math.min(vote + 1, MAXIMUM_USER_CLAP),
      voteTotal: vote < MAXIMUM_USER_CLAP ? voteTotal + 1 : voteTotal,
      isClicked: true
    })
  }
  const handleVoteDown = () => {
    setVoteState({
      vote: Math.min(vote - 1, MAXIMUM_USER_CLAP),
      voteTotal: vote < MAXIMUM_USER_CLAP ? voteTotal - 1 : voteTotal,
      isClicked: true
    })
  }

  const componentJustMounted = useRef(true)

  useEffect(() => {
    if (!componentJustMounted.current) {
      onVote(voteState)
    }
    componentJustMounted.current = false
  }, [vote, onVote])

  const memoizedValue = useMemo(
    () => ({
      ...voteState,
      setRef
    }),
    [voteState, setRef]
  )

  // console.log(memoizedValue)

  return (
    <Provider value={memoizedValue}>
      <Flex className="vote">
        <button
          onClick={handleVoteUp}
          className={`vote-arrow  vote-arrow--up`}
          disabled={vote !== 1 ? false : true}
          aria-label="upvote post"
        >
          <Icon name="arrow" />
        </button>

        <Flex className="vote-count">{voteTotal}</Flex>

        <button
          onClick={handleVoteDown}
          className="vote-arrow  vote-arrow--down"
          disabled={vote !== -1 ? false : true}
          aria-label="downvote post"
        >
          <Icon name="arrow" />
        </button>
      </Flex>
    </Provider>
  )
}

const CardLeak: React.FC<Props> = ({ aspectRatio, post, small, video }) => {
  const [total, setTotal] = useState(0)

  const onVote = (countTotal: number) => {
    setTotal(countTotal)
  }
  return (
    // <Link to={`/${pagePrefix}/${post.slug.current && post.slug.current}`}>
    <S.CardLeak>
      <Flex className="content">
        <Box>
          <Text as="p" color="gray" fontFamily="sans" className="text--small">
            <Box as="span" className="category">
              c/BITCOIN
            </Box>{' '}
            Posted 8 hrs ago by{' '}
            <Box as="span" className="text--underline">
              u/cryptoproject
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
          <VoteCount onVote={onVote} />

          <Flex mr={5} className="comments">
            comments
          </Flex>

          <Flex className="share">share</Flex>
        </Flex>
      </Flex>

      <Box flex={1}>
        <Box className="bg">
          <Box className="figure">
            {post.figure.asset.fluid && (
              <Img
                fluid={{
                  ...post.figure.asset.fluid,
                  aspectRatio: `${aspectRatio}`
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
              />
            )}
          </Box>
        </Box>
      </Box>
    </S.CardLeak>
    // </Link>
  )
}

export default CardLeak

// ___________________________________________________________________

CardLeak.defaultProps = {
  aspectRatio: 16 / 9,
  small: false
}
