// Articles Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'
import Pill from '../../../components/ui/Pill'

import BlockContent from '../../../components/BlockContent'
import Featured from '../../../components/FeaturedArticles'
import CardLeak from '../../../components/CardLeak'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type CategoryShape = {
  categories: {
    title: string
  }[]
}

const Author: React.FC<{ author: PostAuthor }> = ({ author }) => {
  return (
    <S.Author>
      {/* <Img
        fluid={author.avatar.asset.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={author.name}
        className="author__img"
      /> */}
      <Box className="author__name">{author.name}</Box>
    </S.Author>
  )
}

const Articles = () => {
  const posts = usePost()
  return (
    <S.Articles border={false} overflow="hidden">
      <Flex
        justifyContent="space-between"
        width={1}
        className="articles__header"
      >
        <Heading fontFamily="display" className="text--lg  text--uppercase">
          Articles
        </Heading>
        <Link to={`/articles`}>View All</Link>
      </Flex>

      <Box width={1} overflow="hidden">
        <Featured />
      </Box>

      <Flex
        justifyContent="space-between"
        mt={8}
        width={1}
        className="articles__header"
      >
        <Heading
          as="h4"
          fontFamily="display"
          mb={0}
          className="text--uppercase"
        >
          Latest
        </Heading>
      </Flex>

      <Box width={[1, 1, 6 / 8]} className="articles__main">
        <Box>
          {posts.map(({ node: post }, idx) => (
            <CardLeak aspectRatio={3 / 2} post={post} inline={true} key={idx} />
          ))}
        </Box>
      </Box>
    </S.Articles>
  )
}

export default Articles
