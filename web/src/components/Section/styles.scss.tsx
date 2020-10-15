// Section Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../config/theme'
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Section = styled(Box)<{ border?: boolean; overflow?: string }>`
  border-top: ${p => (!p.border ? 'none' : `${theme.border}`)};
  position: relative;
  overflow: ${p => (!p.overflow ? 'visible' : p.overflow)};

  .section__inner {
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    width: 100%;
  }
`
