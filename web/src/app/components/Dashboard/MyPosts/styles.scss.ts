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
