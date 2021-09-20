// Community Page:

// ___________________________________________________________________

import React from 'react'
import { RouteComponentProps } from '@reach/router'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import LeakList from '../../components/LeakList'

// ___________________________________________________________________

interface Props extends RouteComponentProps {}

const CommunityPage: React.FC<Props> = () => {
  return (
    <S.CommunityPage>
      <Flex p={theme.gutter.axis}>
        <Box mr={[0, 5]} sx={{ flex: 1 }}>
          <LeakList />
        </Box>
        <Box
          sx={{
            border: theme.border,
            display: [`none`, `none`, `block`],
            p: 4,
            width: [`312px`]
          }}
        >
          <Text as="p" sx={{ color: 'darkgray', fontSize: 2 }}>
            Your ad here.
          </Text>
        </Box>
      </Flex>
    </S.CommunityPage>
  )
}

export default CommunityPage
