// ArticlesPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const ArticlesPage = styled(Box)`
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const Pagination = styled(Flex)`
  @media ${theme.mq.tablet} {
  }
`