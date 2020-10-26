// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'
import PrevNext from './PrevNext'

// UI
import { Box, Flex, Text, Heading } from '../../components/ui'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  console.log('—————|— post —|—————')
  console.log(post)
  return (
    <Layout>
      <SEO
        pathname={`/implants/${post.slug.current}`}
        title={`${post.title} | `}
        desc={`${post.title} | `}
        individual={false}
      />
      <Section>
        <Box width={1} mb={5}>
          <Text as="p" fontSize={1} fontWeight={500}>
            {post.publishedAt}
          </Text>
        </Box>
        <Flex>
          <Box flex={1} mr={6}>
            {post.figure && (
              <Img
                fluid={post.figure.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
                className="article__img"
              />
            )}
          </Box>
          <Box flex={1}>
            <Heading as="h4" mb={4} className="text--xl">
              {post.title}
            </Heading>
            {post._rawBody && <BlockContent blocks={post._rawBody || []} />}
          </Box>
        </Flex>
      </Section>
      {/* <PrevNext pageContext={pageContext} /> */}
    </Layout>
  )
}

export default PostTemplate

// ___________________________________________________________________
