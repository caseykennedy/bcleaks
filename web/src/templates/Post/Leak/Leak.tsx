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
import Layout from '../../../components/Layout'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import CardLeak from '../../../components/CardPost'
import CardSlider from '../../../components/CardSlider'
import Icon from '../../../components/Icons'
import PostMeta from '../../../components/PostMeta'
import Source from '../../../components/Source'

// Data
import usePost from '../../../hooks/usePost'
import useSiteSettings from '../../../hooks/useSiteSettings'

// ___________________________________________________________________

const Leak: React.FC<{ pageContext: FaunaDbPostData }> = ({ pageContext }) => {
  const post = pageContext.post
  const siteSettings = useSiteSettings()

  console.log('community context', post)
  return (
    <>
      <SEO
        article={true}
        banner={`${post.linkUrl}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/articles/${post.slug}`}
      />
      <S.Leak>
        {post.category && (
          <S.PageTitle px={theme.gutter.axis}>
            <Heading as="h4" color="white" mb={0} className="text--uppercase">
              {post.category}
            </Heading>

            <Flex className="pillbox">
              <Pill my={[1, 2]}>
                <span>#HODL</span>
              </Pill>
            </Flex>
          </S.PageTitle>
        )}

        <Section bg="black" border={true}>
          <Box width={1} mb={0}>
            <Text as="p" className="text--small  text--uppercase">
              {post.createdOn && post.createdOn}
            </Text>

            <Heading as="h1" mb={4} className="text--xxl  text--uppercase">
              {post.title && post.title}
            </Heading>
          </Box>
        </Section>

        <Box bg="black" width={1}>
          <Box width={1} maxWidth={theme.maxWidth}>
            img
          </Box>
        </Box>

        <Section border={true}>
          <Flex flexDirection="column">
            <Flex flexDirection={[`column`, `row`]} position="relative">
              <Box flex={[1, 2]} width={1}>
                <Text color="lightgray" fontFamily="sans">
                  {post.text && post.text}
                </Text>
              </Box>
            </Flex>
          </Flex>
          <a id="sources" />
        </Section>

        <Section bg="secondary" border={true} overflow="hidden">
          <Heading
            as="h4"
            color="tertiary"
            fontFamily="display"
            className="text--uppercase"
          >
            Related
          </Heading>
        </Section>
        {/* <PrevNext pageContext={pageContext} /> */}
      </S.Leak>
    </>
  )
}

export default Leak

// ___________________________________________________________________
