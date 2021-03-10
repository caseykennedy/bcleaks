// My Posts

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import fetch from 'node-fetch'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../../components/ui'

// ___________________________________________________________________

const MyPosts = () => {
  return (
    <S.MyPosts mt={theme.gutter.axis}>
      <Box className="title">My posts</Box>
      <Flex alignItems="center" color="quaternary" justifyContent="center" py={6}>
        You have no posts :(
      </Flex>
    </S.MyPosts>
  )
}

export default MyPosts
