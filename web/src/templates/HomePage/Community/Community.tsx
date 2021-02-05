// Community Section:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// Components
import CardLeak from '../../../components/CardLeak'
import Section from '../../../components/Section'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

type Props = {}

const Community: React.FC<Props> = () => {
  const posts = usePost()
  return (
    <S.Community bg="secondary">
      <Section bg="" overflow="hidden">
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading fontFamily="display" className="text--lg  text--uppercase">
            Community Leaks
          </Heading>
          <Link to={`/articles`}>View All</Link>
        </Flex>
      </Section>

      <Section>
        <Box width={[1, 1, 6 / 8]}>
          {posts.map(({ node: post }, idx) => (
            <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
          ))}
        </Box>
      </Section>
    </S.Community>
  )
}

export default Community

// ___________________________________________________________________

const defaultProps = {}

Community.defaultProps = defaultProps
