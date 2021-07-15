// Comment Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Comment = styled(Box)`
  border: ${theme.border};

  .meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space[3]};

    border-bottom: ${theme.border};
    color: ${theme.colors.tertiary};
    font-family: 'Suisse';

    &__user {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.gray};
    text-decoration: underline;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${theme.colors.primary};
      /* border: ${theme.border}; */
      border-radius: 999px;
      margin-right: ${theme.space[2]};
      height: 8px;
      width: 8px;
    }
  }
  }
`
