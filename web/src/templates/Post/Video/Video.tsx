// Video template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import ResponsiveEmbed from 'react-responsive-embed'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'
import Pill from '../../../components/ui/Pill'

// Components
import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import CardLeak from '../../../components/CardLeak'
import CardSlider from '../../../components/CardSlider'
import PostMeta from '../../../components/PostMeta'

// Data
import useVideo from '../../../hooks/useVideo'

// ___________________________________________________________________

const Video: React.FC<VideoContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const videos = useVideo()
  console.log(post)
  return (
    <Layout>
      <SEO
        pathname={`/implants/${post.slug.current}`}
        title={`${post.title} | `}
        desc={`${post.title} | `}
        article={true}
      />
      <S.Video>
        {post.categories && (
          <S.PageTitle px={theme.gutter.axis} py={4}>
            <Heading as="h4" color="white" mb={0} className="text--uppercase">
              {post.categories[0].title}
            </Heading>
            {post.tags && (
              <Flex
                ml={4}
                pl={4}
                width={1}
                style={{ borderLeft: theme.border }}
              >
                {post.tags.slice(0, 3).map((item, idx) => (
                  <Pill key={idx}>
                    <span>#{item.tag}</span>
                  </Pill>
                ))}
              </Flex>
            )}
          </S.PageTitle>
        )}

        <Section border={true}>
          <Flex flexDirection="column">
            <Box mb={6}>
              {post.videoUrl && (
                <ResponsiveEmbed src={post.videoUrl} allowFullScreen={true} />
              )}
            </Box>
          </Flex>

          <Flex flexDirection={[`column`, `row`]}>
            <Box flex={1} mb={4}>
              <PostMeta
                authors={post.authors}
                categories={post.categories}
                publishedAt={post.publishedAt}
              />
            </Box>

            <Box flex={[1, 2]}>
              <Heading as="h1" mb={4} className="text--xl  text--uppercase">
                {post.title}
              </Heading>

              <Text color="lightgray" fontFamily="sans" letterSpacing={0}>
                {post._rawBody && <BlockContent blocks={post._rawBody || []} />}
              </Text>

              <Box mt={6}>
                {post.tags && (
                  <Flex flexWrap="wrap" mb={4} width={1}>
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
        </Section>

        {post.sources[0] && (
          <Section border={true} maxWidth={theme.maxWidth}>
            <Heading
              as="h4"
              color="tertiary"
              fontFamily="display"
              className="text--uppercase"
            >
              Sources
            </Heading>
            <Box width={1}>
              {post.sources.map((source, idx) => (
                <Box key={idx}>
                  <Heading as="h5">{source.title}</Heading>
                  <Text as="a" href={source.url} target="_blank">
                    {source.url}
                  </Text>
                </Box>
              ))}
            </Box>
          </Section>
        )}

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
              {videos.map(({ node: post }, idx) => (
                <Box key={idx}>
                  <CardLeak post={post} small={true} video={true} />
                </Box>
              ))}
            </CardSlider>
          </Box>
        </Section>
      </S.Video>
    </Layout>
  )
}

export default Video

// ___________________________________________________________________
