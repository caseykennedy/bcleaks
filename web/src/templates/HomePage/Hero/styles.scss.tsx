// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Hero = styled(Section)`
  background: ${theme.colors.black};

  h1 a:hover {
  }

  .hero__inner {
    .meta {
      display: flex;
      justify-content: space-between;
      width: 1;
    }
  }
`
