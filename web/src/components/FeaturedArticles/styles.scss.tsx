// Videos Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Featured = styled(Box)`
  .videos {
    &__header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;
    }
  }
`
