// Profile Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Profile = styled(Flex)`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;

  background: ${theme.colors.background};
  border: ${theme.border};

  .title {
    background: ${theme.colors.black};
    border-bottom: ${theme.border};
    padding: ${theme.space[4]};
  }

  .content {
    padding: ${theme.space[4]};
  }
`
