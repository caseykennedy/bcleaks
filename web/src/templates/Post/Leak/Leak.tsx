// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useQuery } from '@apollo/react-hooks'
import { RouteComponentProps } from '@reach/router'
import { formatDistanceToNowStrict } from 'date-fns'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading, Spinner } from 'theme-ui'

// Components
import Button from '../../../components/ui/Button'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import CommentList from '../CommentList'

// Data
import useSiteSettings from '../../../hooks/useSiteSettings'
import { GET_POSTS_BY_SLUG } from '../../../gql/query'

// ___________________________________________________________________

interface Props
  extends RouteComponentProps<{
    slug: string
  }> {}

type QueryData = {
  postsBySlug: FaunaDbPostShape[]
}

type QueryVars = {
  slug: string
}

const Leak: React.FC<Props> = ({ slug = '404' }) => {
  const siteSettings = useSiteSettings()
  const { loading, data, error } = useQuery<QueryData, QueryVars>(
    GET_POSTS_BY_SLUG,
    {
      variables: {
        slug: `${slug}`
      }
    }
  )
  // console.log(loading)
  // console.log(error)
  // console.log(data?.postsBySlug[0])

  return (
    <>
      <SEO
        article={true}
        title={`${data?.postsBySlug[0].title} | ${siteSettings.titleShort}`}
        desc={`${data?.postsBySlug[0].text}`}
        pathname={`/community/${slug}`}
      />
      <S.Leak>
        {loading || error ? (
          <Flex
            sx={{
              alignItems: 'center',
              bg: 'black',
              justifyContent: 'space-between',
              p: theme.gutter.axis,
              width: '100%'
            }}
          >
            loading... <Spinner p={3} />
          </Flex>
        ) : (
          <>
            <S.PageTitle p={theme.gutter.axis}>
              <Heading as="h4" color="white" mb={0} className="text--uppercase">
                {data?.postsBySlug[0].category}
              </Heading>
            </S.PageTitle>

            <Section bg="secondary" border={true} maxWidth={theme.leakWidth}>
              <Flex sx={{ justifyContent: 'space-between', mb: 4 }}>
                <Box as="p" color="text" className="text--small">
                  by {data?.postsBySlug[0].author}
                </Box>

                <Text as="p" color="tertiary" className="text--small">
                  {data?.postsBySlug[0].createdOn &&
                    formatDistanceToNowStrict(
                      new Date(data?.postsBySlug[0].createdOn),
                      {
                        addSuffix: true
                      }
                    )}
                </Text>
              </Flex>

              <Heading as="h1" mb={[5, 6]} className="text--lg">
                {data?.postsBySlug[0].title}
              </Heading>

              {data?.postsBySlug[0].text && (
                <Text as="p" pr={[0, 5]} className="text">
                  {data?.postsBySlug[0].text}
                </Text>
              )}

              {data?.postsBySlug[0].linkUrl && (
                <Box className="link-url">
                  <a
                    href={data?.postsBySlug[0].linkUrl}
                    rel="nofollow"
                    target="_blank"
                  >
                    {data?.postsBySlug[0].linkUrl}
                  </a>
                </Box>
              )}
            </Section>

            <CommentList slug={slug} />
          </>
        )}
      </S.Leak>
    </>
  )
}

export default Leak
