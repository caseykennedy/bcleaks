// Dashboard Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// ___________________________________________________________________

export const Dashboard = styled(Box)`
  .panel {
    background: ${theme.colors.background};
    border: ${theme.border};
    padding: ${theme.space[4]};
  }
`
