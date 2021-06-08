// Article Category Page:

// ___________________________________________________________________

import React, { useState } from 'react'
import { graphql } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CardPost from '../../components/CardPost'
import CatNav from '../../components/CatNav'


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
  const [posts,] = useState(data.category.posts || [])
  return (
    <S.ArticleCategoryPage>
      <CatNav postType="articles" />

      <Section>
        <Heading
          as="h1"
          mb={0}
          sx={{ fontFamily: `display` }}
          className="text--lg  text--uppercase"
        >
          {data.category.title} articles
        </Heading>
      </Section>

      <Section border={true} pt={0}>
        <Flex>
          <Box sx={{ flex: [1, 1, 6 / 8], width: `100%` }}>
            {posts.map((post, idx) => (
              <CardPost
                aspectRatio={4 / 3}
                post={post}
                inline={true}
                key={idx}
              />
            ))}
          </Box>
        </Flex>
      </Section>
    </S.ArticleCategoryPage>
  )
}

export default ArticleCategoryPage

// ___________________________________________________________________

export const query = graphql`
  query ArticleCategoryTemplateQuery($id: String!) {
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
