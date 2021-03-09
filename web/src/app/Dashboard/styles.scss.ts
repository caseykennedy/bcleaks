// Dashboard Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// ___________________________________________________________________

export const Dashboard = styled(Box)`
  background: ${theme.colors.background};

  .panel {
    background: ${theme.colors.black};
    border: ${theme.border};

    .title {
      background: ${theme.colors.black};
      border-bottom: ${theme.border};
      margin-bottom: ${theme.space[4]};
      padding: ${theme.space[4]};
    }
  }
`
