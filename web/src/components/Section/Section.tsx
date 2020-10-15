// Section:
// Global Section component

// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import { Box, Flex } from '../ui'
import styled from 'styled-components'

// Theme
import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  bg?: string
  border?: boolean
  children: React.ReactNode
  className?: string
  color?: string
  pt?: number | number[] | string | string[]
  pb?: number | number[] | string | string[]
  pr?: number | number[] | string | string[]
  pl?: number | number[] | string | string[]
  id?: string
  width?: number | number[] | string | string[]
  overflow?: string
}

const Section: React.FC<Props> = ({
  bg,
  border,
  children,
  className,
  color,
  pt,
  pb,
  pr,
  pl,
  id,
  width,
  overflow
}) => (
  <S.Section
    as="section"
    border={border}
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    id={id}
    width={width}
    overflow={overflow}
    className={className}
  >
    <Box pr={pr} pl={pl} className="section__inner">
      {children}
    </Box>
  </S.Section>
)

export default Section

// ___________________________________________________________________

const defaultProps = {
  pt: theme.gutter.y,
  pb: theme.gutter.y,
  pr: theme.gutter.x,
  pl: theme.gutter.x,
  width: 1
}

Section.defaultProps = defaultProps
