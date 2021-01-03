// TopArticles Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../Section'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const TopArticles = styled(Box)`
  .videos {
    &__header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;
    }
  }

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};
  }
`
