// Section Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

// ___________________________________________________________________

export const Section = styled(Box)<{ border?: boolean; overflow?: string }>`
  border-top: ${p => (!p.border ? 'none' : `${theme.border}`)};
  position: relative;
  overflow: ${p => (!p.overflow ? 'visible' : p.overflow)};
`
