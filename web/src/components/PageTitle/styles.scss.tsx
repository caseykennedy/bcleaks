// Filter Nav Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

// ___________________________________________________________________

export const PageTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  border-bottom: ${theme.border};
  width: 100%;

  .pillbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    border-left: ${theme.border};
    margin-left: ${theme.space[4]};
    padding: ${theme.space[2]} 0 ${theme.space[2]} ${theme.space[2]};
    width: 100%;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[3]} 0 ${theme.space[3]} ${theme.space[3]};
    }
  }
`
