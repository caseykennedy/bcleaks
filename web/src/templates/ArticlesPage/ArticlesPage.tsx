// Videos Page:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'
import Button from '../../components/ui/Button'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import FeaturedArticles from '../../components/FeaturedArticles'
import FilterNav from '../../components/FilterNav'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

type Props = {
  data: PostShape
  pageContext: any
}

const ArticlesPage = ({ data, pageContext }: Props) => {
  const posts = usePost()
  const heroPost = posts[0].node

  // Filter posts
  const [items, setItems] = useState(data.posts.edges)
  // const [pillActive, setPillActive] = useState(false)
  const setFilteredItems = (category: string) => {
    setItems(
      posts.filter(item => {
        if (item.node.categories[0].title.includes(category)) {
          return item
        }
        if (
          item.node.categories[1] &&
          item.node.categories[1].title.includes(category)
        ) {
          return item
        }
      })
    )
  }
  // Reset / Show all
  const resetFilteredItems = () => {
    setItems(posts)
  }
  return (
    <S.ArticlesPage>
      <FeaturedArticles bg={theme.colors.black} post={heroPost} />

      <FilterNav
        setFilteredItems={setFilteredItems}
        resetFilteredItems={resetFilteredItems}
      />

      <Section>
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading
            as="h4"
            mb={0}
            fontFamily="display"
            className="text--uppercase"
          >
            Latest Articles
          </Heading>
        </Flex>

        <Box width={[1, 1, 6 / 8]}>
          {items.map(({ node: post }, idx) => (
            <CardPost aspectRatio={4 / 3} post={post} inline={true} key={idx} />
          ))}
        </Box>
      </Section>

      <Section>
        <S.Pagination width={[1, 1, 6 / 8]}>
          <Box flex={1} mr={3}>
            {pageContext.previousPagePath && (
              <Link to={pageContext.previousPagePath}>
                <Button>Previous</Button>
              </Link>
            )}
          </Box>
          <Box flex={1} ml={3}>
            <Link to={pageContext.nextPagePath}>
              <Button>Next</Button>
            </Link>
          </Box>
        </S.Pagination>
      </Section>
    </S.ArticlesPage>
  )
}

export default ArticlesPage

export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allSanityPost(
      sort: { order: DESC, fields: publishedAt }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          _rawExcerpt
          _rawBody
          _id
          publishedAt(formatString: "MMM. DD, YYYY | hh:mma")
          slug {
            current
          }
          tags {
            tag
          }
          featured
          figure {
            asset {
              fluid(maxWidth: 800) {
                srcWebp
                srcSetWebp
                srcSet
                src
                sizes
                base64
                aspectRatio
              }
            }
          }
          categories {
            title
          }
          authors {
            name
            role
            avatar {
              asset {
                fluid(maxWidth: 600) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
          sources {
            title
            url
          }
        }
        previous {
          slug {
            current
          }
          title
          _rawExcerpt
        }
        next {
          slug {
            current
          }
          title
          _rawExcerpt
        }
      }
    }
  }
`
