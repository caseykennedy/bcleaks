// Community Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Community = styled(Box)`
  border-top: ${theme.border};

  .articles {
    &__header {
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${theme.space[4]};
      width: 100%;

      @media ${theme.mq.tablet} {
        margin-bottom: 0;
      }
    }
  }
`
