// Hero Component:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

import Button from '../../ui/Button'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  return (
    <S.Hero bg="black">
      <div className="hero-inner">
        <Box width={[1, 8 / 10]}>
          <div className="text--md">A fine day to live</div>
          <h1 className="t--uppercase">
            Welcome to BCLeaks, a new era in crypto news begins.
          </h1>
        </Box>
        <div className="hero-inner__meta">
          <Text as="p" color="tertiary">
            OCT 1, 2020 at 8:43 AM
            <br />
            Tyler Swope #BLOCKCHAIN #WATCHOUT
          </Text>
          <Button to="/">read</Button>
        </div>
      </div>
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
