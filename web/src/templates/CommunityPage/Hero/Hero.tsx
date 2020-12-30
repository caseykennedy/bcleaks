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
    <S.Hero bg="black">
      <div className="hero-inner">
        <Box width={[1, 8 / 10]}>
          <div className="text--md">A fine day to live</div>
          <h1 className="text--uppercase">
            Welcome to BCLeaks, a new era in crypto news begins.
          </h1>
        </Box>
        <div className="hero-inner__meta">
          <Text as="p" color="tertiary">
            OCT 1, 2020 at 8:43 AM
            <br />
            Tyler Swope #BLOCKCHAIN #WATCHOUT
          </Text>
          <Box>
            <Button>full article</Button>
          </Box>
        </div>
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
