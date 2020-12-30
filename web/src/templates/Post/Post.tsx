// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + UI
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../components/ui'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'
import PrevNext from './PrevNext'

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
        article={true}
      />

      <Section>
        <Box width={1} mb={5}>
          <Text as="p" fontSize={1} fontWeight={500}>
            {post.publishedAt}
          </Text>
        </Box>

        <Flex flexDirection="column">
          <Box>
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

          <Box>
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
