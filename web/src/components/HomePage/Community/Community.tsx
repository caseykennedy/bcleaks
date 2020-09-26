// Community Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../ui'
import theme from '../../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Community: React.FC<Props> = () => {
  return (
    <S.Community bg="secondary">
      Community
    </S.Community>
  )
}

export default Community

// ___________________________________________________________________

const defaultProps = {}

Community.defaultProps = defaultProps
