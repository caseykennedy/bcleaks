// Article Category Page:

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import FeaturedArticles from '../../components/FeaturedArticles'
import FilterNav from '../../components/FilterNav'

// Data
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

type Props = {
  data: {
    category: {
      description: any
      title: any
      posts: PostQuery[]
    }
  }
  pageContext: {
    id: string
  }
}

const ArticleCategoryPage: React.FC<Props> = ({ pageContext, data }) => {
  const [posts, setPosts] = useState(data.category.posts)
  console.log(pageContext)
  console.log(data)

  return (
    <S.ArticleCategoryPage>
      {/* <FeaturedArticles bg={theme.colors.black} post={heroPost} /> */}

      {/* <FilterNav
        setFilteredItems={setFilteredItems}
        resetFilteredItems={resetFilteredItems}
      /> */}

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
            Latest Articles | {data.category.title}
          </Heading>
        </Flex>

        <Box width={[1, 1, 6 / 8]}>
          {posts.map((post, idx) => (
            <CardPost aspectRatio={4 / 3} post={post} inline={true} key={idx} />
          ))}
        </Box>
      </Section>
    </S.ArticleCategoryPage>
  )
}

export default ArticleCategoryPage

// ___________________________________________________________________

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityPostCategory(id: { eq: $id }) {
      description
      title
      posts {
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
    }
  }
`