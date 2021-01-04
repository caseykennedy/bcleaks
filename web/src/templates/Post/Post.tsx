// Post template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../components/ui'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'
import PrevNext from './PrevNext'
import CardLeak from '../../components/CardLeak'
import CardSlider from '../../components/CardSlider'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const PostTemplate: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const posts = usePost()
  return (
    <Layout>
      <SEO
        pathname={`/implants/${post.slug.current}`}
        title={`${post.title} | `}
        desc={`${post.title} | `}
        article={true}
      />
      <S.Post>
        <Section>
          <Box width={1} mb={5}>
            <Text
              as="p"
              fontSize={1}
              className="text--uppercase"
            >
              {post.publishedAt}
            </Text>

            <Heading as="h1" mb={4} className="text--xxl  text--uppercase">
              {post.title}
            </Heading>
            <Text fontSize={2} width={[1, 2 / 3]}>
              {post._rawExcerpt && (
                <BlockContent blocks={post._rawExcerpt || []} />
              )}
            </Text>
          </Box>

          <Flex flexDirection="column">
            <Box mb={6}>
              {post.figure && (
                <>
                  <Img
                    fluid={{
                      ...post.figure.asset.fluid,
                      aspectRatio: 16 / 9
                    }}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={post.figure.alt}
                    className="article__img"
                  />
                  {post.figure.caption && (
                    <Text color="tertiary" fontSize={0} mt={2}>
                      {post.figure.caption}
                    </Text>
                  )}
                </>
              )}
            </Box>

            <Flex flexDirection={[`column`, `row`]}>
              <Box flex={1}>
                <Text
                  as="p"
                  color={theme.colors.tertiary}
                  className="meta  text--small"
                >
                  <Text as="span" color="white" mb={0}>
                    {post.publishedAt}
                  </Text>
                  by {post.authors && post.authors.name} in{' '}
                  <Link to={``}>
                    <Box as="span" color="primary">
                      {post.categories && post.categories[0].title}
                    </Box>
                  </Link>
                </Text>
              </Box>

              <Box flex={[1, 2]}>
                <Text color="#ccc" fontFamily="sans" letterSpacing={0}>
                  {post._rawBody && (
                    <BlockContent blocks={post._rawBody || []} />
                  )}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Section>

        <Section border={true} overflow="hidden">
          <Heading
            as="h4"
            color="tertiary"
            fontFamily="display"
            className="text--uppercase"
          >
            Related
          </Heading>
          <Box width={1}>
            <CardSlider pagination={true} slidesPerView={3}>
              {posts.map(({ node: post }, idx) => (
                <Box key={idx}>
                  <CardLeak post={post} small={true} />
                </Box>
              ))}
            </CardSlider>
          </Box>
        </Section>
        {/* <PrevNext pageContext={pageContext} /> */}
      </S.Post>
    </Layout>
  )
}

export default PostTemplate

// ___________________________________________________________________
