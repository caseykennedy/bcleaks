// Hero Component:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

import Button from '../../../components/ui/Button'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../../components/ui'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  return (
    <S.Hero bg="black" pt={9}>
      <div className="hero__inner">
        <Box width={[1, 1 / 2]}>
          <Box width={[1]}>
            <Text mb={4} color="primary" className="text--sm">
              #featured
            </Text>
            <h2 className="text--uppercase">
              Welcome to BCLeaks, a new era in crypto news begins.
            </h2>
          </Box>
          <div className="meta">
            <Text as="p" color="tertiary" mb={0}>
              OCT 1, 2020 at 8:43 AM
              <br />
              Tyler Swope
            </Text>
            <Box>
              <Button>full article</Button>
            </Box>
          </div>
        </Box>
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
