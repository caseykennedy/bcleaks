// Section:
// Global Section component

// ___________________________________________________________________

// Core
import * as React from 'react'

// Components
import { Box, Flex } from '../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  bg?: string
  border?: boolean
  children: React.ReactNode
  className?: string
  color?: string
  maxWidth?: number | number[] | string | string[]
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  id?: string
  overflow?: string
}

const Section: React.FC<Props> = ({
  bg,
  border,
  children,
  className,
  color,
  maxWidth,
  pt,
  pb,
  pr,
  pl,
  id,
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
    overflow={overflow}
    width={1}
    className={className}
  >
    <Box
      pr={pr}
      pl={pl}
      mr="auto"
      maxWidth={maxWidth ? maxWidth : theme.maxWidth}
    >
      {children}
    </Box>
  </S.Section>
)

export default Section

// ___________________________________________________________________

const defaultProps = {
  pt: theme.gutter.vertical,
  pb: theme.gutter.vertical,
  pr: theme.gutter.axis,
  pl: theme.gutter.axis
}

Section.defaultProps = defaultProps
