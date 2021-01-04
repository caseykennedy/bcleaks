// Video template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import ResponsiveEmbed from 'react-responsive-embed'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from '../../../components/ui'

// Components
import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import PrevNext from '../PrevNext'
import CardLeak from '../../../components/CardLeak'
import CardSlider from '../../../components/CardSlider'

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
        <Section>
          <Flex flexDirection="column">
            <Box mb={6}>
              {post.videoUrl && (
                <ResponsiveEmbed
                  src={post.videoUrl}
                  allowFullScreen={true}
                />
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
            </Flex>
          </Flex>

          <Box width={1} mt={5}>
            <Heading as="h1" mb={4} className="text--xxl  text--uppercase">
              {post.title}
            </Heading>
            <Text fontSize={2} width={[1, 2 / 3]}>
              {post._rawExcerpt && (
                <BlockContent blocks={post._rawExcerpt || []} />
              )}
            </Text>
          </Box>
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
              {videos.map(({ node: post }, idx) => (
                <Box key={idx}>
                  <CardLeak post={post} small={true} video={true} />
                </Box>
              ))}
            </CardSlider>
          </Box>
        </Section>
        {/* <PrevNext pageContext={pageContext} /> */}
      </S.Video>
    </Layout>
  )
}

export default Video

// ___________________________________________________________________
