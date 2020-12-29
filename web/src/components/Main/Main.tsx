// Page Title

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  bg?: string
}

const Main = styled(Flex)<Props>`
  flex-direction: column;
  padding: ${theme.space[6]} ${theme.space[4]};

  background: ${p => !p.bg ? theme.colors.background : p.bg};
  border-top: ${theme.border};
  border-right: none;

  @media ${theme.mq.sm} {
    border-right: ${theme.border};
  }
`

export default Main
