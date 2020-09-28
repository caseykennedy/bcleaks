// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  background: ${theme.colors.black};
  margin-top: ${theme.space[3]};
  padding: ${theme.space[7]} 0;
  width: 100%;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[8]} 0;
  }

  .hero-inner {
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 0 ${theme.space[5]};

    @media ${theme.mq.tablet} {
      padding: 0 ${theme.space[6]};
    }
  }
`
