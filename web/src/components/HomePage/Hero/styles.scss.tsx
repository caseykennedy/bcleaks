// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled(Box)`
  background: ${theme.colors.black};
  margin-top: ${theme.space[3]};

  @media ${theme.mq.tablet} {
  }
`
