// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'
import { Grid } from 'theme-ui'

// Components
import Button from '../../../components/ui/Button'
import Pill from '../../../components/ui/Pill'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import CardLeak from '../../../components/CardPost'
import CardSlider from '../../../components/CardSlider'
import Icon from '../../../components/Icons'
import PostMeta from '../../../components/PostMeta'
import Source from '../../../components/Source'
import PrevNext from '../PrevNext'

// Data
import usePost from '../../../hooks/usePost'
import useSiteSettings from '../../../hooks/useSiteSettings'

// ___________________________________________________________________

const Article: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const posts = usePost()
  const siteSettings = useSiteSettings()
  return (
    <>
      <SEO
        article={true}
        banner={`${post.figure.asset.fluid.src}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/articles/${post.slug.current}`}
      />
      <S.Article>
        {post.categories && (
          <S.PageTitle px={theme.gutter.axis}>
            <Heading as="h4" color="white" mb={0} className="text--uppercase">
              {post.categories[0].title}
            </Heading>

            {post.tags && (
              <Flex className="pillbox">
                {post.tags.slice(0, 3).map((item, idx) => (
                  <Pill my={[1, 2]} key={idx}>
                    <span>#{item.tag}</span>
                  </Pill>
                ))}
              </Flex>
            )}
          </S.PageTitle>
        )}

        <Section bg="black" border={true}>
          <Flex width={1}>
            <Box flex={[1, 0.75]} width={1} mb={0}>
              <Text as="p" className="text--small  text--uppercase">
                {post.publishedAt}
              </Text>

              <Heading as="h1" mb={4} className="text--xxl  text--uppercase">
                {post.title}
              </Heading>

              <Flex flexDirection={[`column`, `row`]}>
                <Box flex={[1, 2]}>
                  <Text fontFamily="sans" fontSize={2}>
                    {post._rawExcerpt && (
                      <BlockContent blocks={post._rawExcerpt || []} />
                    )}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Section>

        <Section bg="black" pt={0} pl={0} pb={0} pr={0}>
          <Flex width={1}>
            <Box flex={[1]} width={1} mb={0}>
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
                    <Text
                      as="figcaption"
                      color="tertiary"
                      fontSize={0}
                      p={theme.gutter.axis}
                    >
                      {post.figure.caption}
                    </Text>
                  )}
                </>
              )}
            </Box>
          </Flex>
        </Section>

        <Section border={true}>
          <Flex flexDirection="column">
            <Flex
              flexDirection={[`column`, `column`, `row`]}
              position="relative"
            >
              <Box flex={1} mb={4} width={1}>
                <Box className="utilities">
                  <PostMeta
                    authors={post.authors}
                    categories={post.categories}
                    publishedAt={post.publishedAt}
                  />

                  {post.sources[0] && (
                    <Flex mt={5}>
                      <AnchorLink
                        offset={theme.headerHeight}
                        href={`#sources`}
                        style={{ width: `100%` }}
                      >
                        <Button bg="transparent" color={theme.colors.tertiary}>
                          View Sources
                          <Icon name="document" />
                        </Button>
                      </AnchorLink>
                    </Flex>
                  )}
                </Box>
              </Box>

              <Box flex={[1, 2]} width={1}>
                <Text color="lightgray" fontFamily="sans">
                  {post._rawBody && (
                    <BlockContent blocks={post._rawBody || []} />
                  )}
                </Text>

                <Box mt={6}>
                  {post.tags && (
                    <Flex flexWrap="wrap" mb={4} width={1}>
                      {post.tags.map((item, idx) => (
                        <Pill mb={2} key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box>
              </Box>
            </Flex>
          </Flex>
          <a id="sources" />
        </Section>

        {post.sources[0] && (
          <Section border={true} maxWidth={theme.maxWidth}>
            <Heading
              as="h4"
              fontFamily="display"
              mb={5}
              className="text--uppercase"
            >
              Sources
            </Heading>

            <Grid columns={[1, 2, 4]} gap={6}>
              {post.sources.map((source, idx) => (
                <Source source={source} key={idx} />
              ))}
            </Grid>
          </Section>
        )}

        <Section bg="secondary" border={true} overflow="hidden">
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
              {posts.slice(0, 6).map(({ node: post }, idx) => (
                <Flex key={idx}>
                  <CardLeak post={post} small={true} />
                </Flex>
              ))}
            </CardSlider>
          </Box>
        </Section>
        <PrevNext pageContext={pageContext} />
      </S.Article>
    </>
  )
}

export default Article

// ___________________________________________________________________
