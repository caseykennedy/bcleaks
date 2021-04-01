// MyPosts Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box } from '../../../../components/ui'

// ___________________________________________________________________

export const MyPosts = styled(Box)`
  background: ${theme.colors.black};
  border: ${theme.border};

  .title {
    background: ${theme.colors.black};
    border-bottom: ${theme.border};
    margin-bottom: ${theme.space[4]};
    padding: ${theme.space[4]};
  }
`

export const Post = styled(Box)`
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  margin-top: ${theme.space[4]};
  padding: ${theme.space[4]};

  transition: ${theme.transition.all};

  &:first-child {
    margin-top: 0;
  }

  &:hover {
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: transparent;
    border: ${theme.border};
    border-color: ${theme.colors.darkgray};

    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes[1]};
    text-transform: uppercase;

    margin: ${theme.space[6]} 0 0 0;
    padding: ${theme.space[2]} ${theme.space[4]};
    cursor: pointer;
    transition: ${theme.transition.all};
    /* width: 100%; */

    span {
      transform: rotate(45deg);
      margin-left: ${theme.space[6]};

      svg {
        fill: ${theme.colors.gray};
        width: 12px;
      }
    }

    &:hover {
      border-color: ${theme.colors.red};
      color: ${theme.colors.red};

      span svg {
        fill: ${theme.colors.red};
      }
    }
  }
`
