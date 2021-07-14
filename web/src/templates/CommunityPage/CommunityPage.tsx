// Community Page:

// ___________________________________________________________________

import React from 'react'
import { RouteComponentProps } from '@reach/router'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// Components
import Section from '../../components/Section'
import LeakList from '../../components/LeakList'

// ___________________________________________________________________

interface Props extends RouteComponentProps {}

const CommunityPage: React.FC<Props> = () => {
  return (
    <S.CommunityPage>
      <Flex p={theme.gutter.axis}>
        <Box mr={[0, 0]} sx={{ flex: 1 }}>
          <LeakList />
        </Box>
        {/* <Box sx={{ display: [`none`, `none`, `block`], width: [`312px`] }} /> */}
      </Flex>
    </S.CommunityPage>
  )
}

export default CommunityPage
