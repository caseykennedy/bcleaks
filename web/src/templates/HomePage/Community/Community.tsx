// Community Section:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// Components
import Section from '../../../components/Section'
import LeakList from '../../../components/LeakList'

// ___________________________________________________________________

const Community = () => {
  return (
    <S.Community bg="black">
      <Section bg="" overflow="hidden">
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading fontFamily="display" className="text--lg  text--uppercase">
            Community Leaks
          </Heading>
          <Link to={`/community`}>View All</Link>
        </Flex>
      </Section>

      <Section>
        <Box width={[1, 1, 6 / 8]}>
          <LeakList />
        </Box>
      </Section>
    </S.Community>
  )
}

export default Community
