// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../components/Section'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// ___________________________________________________________________

export const Post = styled.div`
  background: ${theme.colors.black};
  
  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};
  }
`
