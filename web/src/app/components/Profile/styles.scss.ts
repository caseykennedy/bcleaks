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

  .title {
    background: ${theme.colors.black};
    border-bottom: ${theme.border};
    padding: ${theme.space[4]};
  }

  .content {
    padding: ${theme.space[4]};
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: transparent;
    border: ${theme.border};
    border-color: ${theme.colors.darkgray};

    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes[2]};
    text-transform: uppercase;

    margin: ${theme.space[6]} 0 0 0;
    padding: ${theme.space[2]} ${theme.space[4]};
    cursor: pointer;
    transition: ${theme.transition.all};
    width: 100%;

    span svg {
      fill: ${theme.colors.gray};
    }

    &--logout {
      span {
        transform: rotate(180deg);
      }
    }

    &:hover {
      background: ${theme.colors.gray};
      border-color: ${theme.colors.gray};
      color: ${theme.colors.black};

      span svg {
        fill: ${theme.colors.black};
      }
    }
  }
`
