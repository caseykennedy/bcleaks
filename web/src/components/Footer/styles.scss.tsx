// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../ui'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  padding: ${theme.space[5]};

  background: ${theme.colors.black};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[7]};
  }
`

export const Nav = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${theme.mq.desktop} {

  }

  a {
    font-size: calc(${theme.fontSizes[2]});
    position: relative;
    transition: ${theme.transition.all};

    @media ${theme.mq.tablet} {
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`

export const Social = styled(Flex)`
  a {
    margin-left: ${theme.space[3]};

    &:first-child {
      margin-left: 0;
    }

    svg {
      fill: ${theme.colors.white};
    }

    &:hover {
      svg {
        fill: ${theme.colors.primary};
      }
    }
  }
`

