// Hero Component:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Hero: React.FC<Props> = () => {
  return (
    <S.Hero as="section" px={theme.gutter.x} py={theme.gutter.y}>
      Hero
    </S.Hero>
  )
}

export default Hero

// ___________________________________________________________________

const defaultProps = {}

Hero.defaultProps = defaultProps
