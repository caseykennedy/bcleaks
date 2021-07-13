// Comment Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const CommentForm = styled(Box)`
  .btn {
    background: ${darken(0.1, theme.colors.primary)};
    border: none;
    border-color: ${theme.colors.primary};
    border-radius: 0;
    cursor: pointer;

    padding: ${theme.space[3]} ${theme.space[5]};
    text-transform: uppercase;

    transition: ${theme.transition.all};

    &:hover {
      background: ${theme.colors.primary};
    }

    &:disabled {
      background: ${theme.colors.gray};
      cursor: not-allowed;
    }

    @media ${theme.mq.desktop} {
      margin-top: 0;
    }
  }
`
