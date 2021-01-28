// Videos Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Videos = styled(Section)`
  .videos {
    &__header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;
    }
  }
`
