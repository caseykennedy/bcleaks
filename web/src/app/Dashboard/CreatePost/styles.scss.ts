// CreatePost Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from '../../../components/ui'

// ___________________________________________________________________

export const CreatePost = styled(Box)`
  background: ${theme.colors.background};
  border: ${theme.border};
  padding: ${theme.space[4]};
`
