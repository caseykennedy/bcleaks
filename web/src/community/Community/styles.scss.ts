// User Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// ___________________________________________________________________

export const User = styled(Flex)`
  background: ${theme.colors.black};

  .inner {
    margin-right: auto;
    max-width: ${theme.maxWidth};
    width: 100%;
  }
`

export const Aside = styled(Box)`
  background: ${theme.colors.black};
  border-bottom: ${theme.border};
  flex: 1;
  position: relative;

  @media ${theme.mq.tablet} {
    border-bottom: 0;
    border-left: ${theme.border};
  }
`
