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

export const UserPost = styled(Box)`
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  margin-top: ${theme.space[4]};
  padding: ${theme.space[4]};

  transition: ${theme.transition.all};

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    border-color: ${theme.colors.primary};
  }
`
