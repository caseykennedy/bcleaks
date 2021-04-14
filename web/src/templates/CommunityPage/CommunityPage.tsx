// Community Page:

// ___________________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'
import { Box } from '../../components/ui'

// Components
import Section from '../../components/Section'
import LeakList from '../../components/LeakList'

// ___________________________________________________________________

const CommunityPage = () => {
  return (
    <S.CommunityPage>
      <Section>
        <Box width={[1, 1, 2 / 3]}>
          <LeakList />
        </Box>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage
