// Filter Nav Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// ___________________________________________________________________

type Props = {
  resetFilteredItems: () => any
  setFilteredItems: (arg: string) => void
} & typeof defaultProps

const defaultProps = {}

// ___________________________________________________________________

const FilterNav: React.FC<Props> = ({
  resetFilteredItems,
  setFilteredItems
}) => {
  return (
    <S.FilterNav px={theme.gutter.axis}>
      <Box className="inner">
        <Box mr={6} className="criteria" onClick={resetFilteredItems}>
          All
        </Box>

        {criteria.map((filter, idx) => (
          <Box
            mr={6}
            className="criteria"
            onClick={() => setFilteredItems(filter.criteria)}
            key={idx}
          >
            {filter.criteria}
          </Box>
        ))}
      </Box>
    </S.FilterNav>
  )
}

export default FilterNav

// ___________________________________________________________________

FilterNav.defaultProps = defaultProps

const criteria = [
  {
    criteria: 'Altcoin'
  },
  {
    criteria: 'Bitcoin'
  },
  {
    criteria: 'Crypto Picks'
  },
  {
    criteria: 'DeFi'
  },
  {
    criteria: 'Ethereum'
  },
  {
    criteria: 'Investigations'
  }
]
