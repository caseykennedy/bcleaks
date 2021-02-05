// Video template

// ___________________________________________________________________

// Libraries
import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'
import { Grid } from 'theme-ui'
import Pill from '../../../components/ui/Pill'

// Components
import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import CardLeak from '../../../components/CardPost'
import CardSlider from '../../../components/CardSlider'
import PostMeta from '../../../components/PostMeta'
import Source from '../../../components/Source'
import Icon from '../../../components/Icons'
import Button from '../../../components/ui/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Hooks
import useVideo from '../../../hooks/useVideo'
import useSiteSettings from '../../../hooks/useSiteSettings'

// ___________________________________________________________________

const Video: React.FC<VideoContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const videos = useVideo()
  const siteSettings = useSiteSettings()
  return (
    <>
      <SEO
        article={true}
        banner={`${post.figure.asset.fluid.src}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/videos/${post.slug.current}`}
      />
      <S.Video>
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

        <Section border={true}>
          {post.videoUrl && (
            <ResponsiveEmbed src={post.videoUrl} allowFullScreen={true} />
          )}
        </Section>

        <Section bg="background" border={true}>
          <Flex flexDirection={[`column`, `row`]}>
            <Box flex={1} mb={4}>
              <Box className="utilities">
                <PostMeta
                  authors={post.authors}
                  categories={post.categories}
                  publishedAt={post.publishedAt}
                />

                {post.sources[0] && (
                  <Flex mt={5} mb={4}>
                    <AnchorLink offset={theme.headerHeight} href={`#sources`}>
                      <Button bg="transparent" color={theme.colors.tertiary}>
                        <Icon name="document" /> View Sources
                      </Button>
                    </AnchorLink>
                  </Flex>
                )}
              </Box>
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
          <Section border={true} maxWidth={theme.maxWidth} id="sources">
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
    </>
  )
}

export default Video

// ___________________________________________________________________
