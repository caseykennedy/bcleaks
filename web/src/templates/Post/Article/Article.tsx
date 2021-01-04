// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'

// Components
import Button from '../../../components/ui/Button'
import Pill from '../../../components/ui/Pill'
import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import PrevNext from '../PrevNext'
import CardLeak from '../../../components/CardLeak'
import CardSlider from '../../../components/CardSlider'
import Icon from '../../../components/Icons'
import PostMeta from '../../../components/PostMeta'

// Data
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const Article: React.FC<PostContextShape> = ({ pageContext }) => {
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
      <S.Article>
        {post.categories && (
          <S.PageTitle px={theme.gutter.axis} py={4}>
            <Heading as="h4" color="white" mb={0}>
              {post.categories[0].title}
            </Heading>
            {post.tags && (
              <Flex
                ml={4}
                pl={4}
                width={1}
                style={{ borderLeft: theme.border }}
              >
                {post.tags.map((item, idx) => (
                  <Pill key={idx}>
                    <span>#{item.tag}</span>
                  </Pill>
                ))}
              </Flex>
            )}
          </S.PageTitle>
        )}

        <Section border={true}>
          <Box width={1} mb={5}>
            <Text as="p" className="text--small  text--uppercase">
              {post.publishedAt}
            </Text>

            <Heading as="h1" mb={4} className="text--xxl  text--uppercase">
              {post.title}
            </Heading>

            <Flex flexDirection={[`column`, `row`]}>
              <Box flex={[1, 2]}>
                <Text fontSize={2}>
                  {post._rawExcerpt && (
                    <BlockContent blocks={post._rawExcerpt || []} />
                  )}
                </Text>
              </Box>

              <Flex flex={1} ml={8}>
                <Box>
                  <Button bg="transparent" color="primary">
                    Sources <Icon name="arrow" />
                  </Button>
                </Box>
              </Flex>
            </Flex>
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
              <Box flex={1} mb={4}>
                <PostMeta
                  authors={post.authors}
                  categories={post.categories}
                  publishedAt={post.publishedAt}
                />
              </Box>

              <Box flex={[1, 2]}>
                <Text color="#ccc" fontFamily="sans" letterSpacing={0}>
                  {post._rawBody && (
                    <BlockContent blocks={post._rawBody || []} />
                  )}
                </Text>

                <Box mt={6}>
                  {post.tags && (
                    <Flex mb={4} width={1}>
                      {post.tags.map((item, idx) => (
                        <Pill key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box>
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
      </S.Article>
    </Layout>
  )
}

export default Article

// ___________________________________________________________________
