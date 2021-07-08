// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { RouteComponentProps } from '@reach/router'
import moment from 'moment'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from 'theme-ui'

// Components
import Button from '../../../components/ui/Button'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'

// Data
import useSiteSettings from '../../../hooks/useSiteSettings'
import { GET_POSTS_BY_SLUG } from '../../../gql/query'

// ___________________________________________________________________

interface Props
  extends RouteComponentProps<{
    slug: string
  }> {}

const Leak: React.FC<Props> = ({ slug }) => {
  const siteSettings = useSiteSettings()
  const { loading, data, error } = useQuery(GET_POSTS_BY_SLUG, {
    variables: {
      slug: `${slug}`
    }
  })
  console.log(loading)
  console.log(error)
  console.log(data)

  const pageContext = data.getPostsBySlug[0]

  return (
    <>
      <SEO
        article={true}
        title={`${pageContext.title && pageContext.title} | ${
          siteSettings.titleShort
        }`}
        desc={`${pageContext.text && pageContext.text}`}
        pathname={`/community/${slug}`}
      />
      <S.Leak>
        <S.PageTitle p={theme.gutter.axis}>
          <Heading as="h4" color="white" mb={0} className="text--uppercase">
            {pageContext.category && pageContext.category}
          </Heading>
        </S.PageTitle>

        <Section bg="secondary" border={true} overflow="hidden">
          <Heading as="h3">{pageContext.title && pageContext.title}</Heading>
          <Text as="p">
            {pageContext.createdOn &&
              moment(pageContext.createdOn)
                .startOf('day')
                .fromNow()}
          </Text>
          
          {pageContext.linkUrl && (
            <Box sx={{ width: `100%` }} className="link-url">
              <a href={pageContext.linkUrl} rel="nofollow" target="_blank">
                {pageContext.linkUrl}
              </a>
            </Box>
          )}

          {pageContext.text && (
            <Text as="p" pr={[0, 5]} className="text">
              {pageContext.text}
            </Text>
          )}
        </Section>
      </S.Leak>
    </>
  )
}

export default Leak
