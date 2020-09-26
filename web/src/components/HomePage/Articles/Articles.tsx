// Articles Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Articles: React.FC<Props> = () => {
  return (
    <S.Articles>
      Articles
    </S.Articles>
  )
}

export default Articles

// ___________________________________________________________________

const defaultProps = {}

Articles.defaultProps = defaultProps
