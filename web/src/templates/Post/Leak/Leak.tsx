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

interface IPostsBySlugData {
  postsBySlug: FaunaDbPostShape[]
}

interface IPostsBySlugVars {
  slug: string
}

const Leak: React.FC<Props> = ({ slug }) => {
  const siteSettings = useSiteSettings()
  const { loading, data, error } = useQuery<IPostsBySlugData, IPostsBySlugVars>(
    GET_POSTS_BY_SLUG,
    {
      variables: {
        slug: `${slug}`
      }
    }
  )
  console.log(loading)
  console.log(error)
  console.log(data?.postsBySlug[0])

  return loading ? (
    <Box>
      <Text as="p">loading...</Text>
    </Box>
  ) : (
    <>
      <SEO
        article={true}
        title={`${data?.postsBySlug[0].title} | ${
          siteSettings.titleShort
        }`}
        desc={`${data?.postsBySlug[0].text}`}
        pathname={`/community/${slug}`}
      />
      <S.Leak>
        <S.PageTitle p={theme.gutter.axis}>
          <Heading as="h4" color="white" mb={0} className="text--uppercase">
            {data?.postsBySlug[0].category}
          </Heading>
        </S.PageTitle>

        <Section bg="secondary" border={true} overflow="hidden">
          <Heading as="h3">{data?.postsBySlug[0].title}</Heading>
          <Text as="p">
            {data?.postsBySlug[0].createdOn &&
              moment(data?.postsBySlug[0].createdOn)
                .startOf('day')
                .fromNow()}
          </Text>

          {data?.postsBySlug[0].linkUrl && (
            <Box sx={{ width: `100%` }} className="link-url">
              <a href={data?.postsBySlug[0].linkUrl} rel="nofollow" target="_blank">
                {data?.postsBySlug[0].linkUrl}
              </a>
            </Box>
          )}

          {data?.postsBySlug[0].text && (
            <Text as="p" pr={[0, 5]} className="text">
              {data?.postsBySlug[0].text}
            </Text>
          )}
        </Section>
      </S.Leak>
    </>
  )
}

export default Leak
