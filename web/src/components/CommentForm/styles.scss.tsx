// Comment Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const CommentForm = styled(Box)`
  .btn {
    span svg {
      width: 8px;
    }
  }

  form {
    input,
    textarea,
    select {
      background: transparent;
      border: 0;
      border: ${theme.border};

      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]} 0;
      padding: ${theme.space[2]} ${theme.space[2]};
      width: 100%;

      &:focus {
        border-color: ${theme.colors.primary};
        outline: none;
      }

      &::placeholder {
        color: ${theme.colors.tertiary};
      }
    }
  }
`
