// Profile Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Profile = styled(Flex)`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;

  border: ${theme.border};

  @media ${theme.mq.tablet} {
    position: sticky;
    top: calc(${theme.headerHeight} + ${theme.space[5]});
  }

  .title {
    background: ${theme.colors.black};
    border-bottom: ${theme.border};
    padding: ${theme.space[4]};
  }

  .content {
    padding: ${theme.space[4]};
  }

  .btn {
    &--logout {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`
