// Elements:
// Box and Flex layout components using Styled System

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'
import { darken, transparentize } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

import {
  space,
  color,
  width,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  textAlign,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  maxWidth,
  display,
  position,
  overflow,
  SpaceProps,
  ColorProps,
  WidthProps,
  FlexProps,
  AlignSelfProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  TextAlignProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
  MaxWidthProps,
  DisplayProps,
  PositionProps,
  OverflowProps
} from 'styled-system'

// ___________________________________________________________________

// Box

type ElementProps = SpaceProps &
  WidthProps &
  ColorProps &
  FlexProps &
  AlignSelfProps &
  TextAlignProps &
  FontFamilyProps &
  FontSizeProps &
  MaxWidthProps &
  DisplayProps &
  PositionProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps &
  FontWeightProps &
  LineHeightProps &
  LetterSpacingProps &
  OverflowProps

export const Box = styled.div<ElementProps>`
  box-sizing: border-box;
  height: auto;
  /* transition: ${theme.transition.all}; */

  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`

Box.displayName = 'Box'

export const AnimatedBox = styled(animated.div)<ElementProps>`
  box-sizing: border-box;

  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`

AnimatedBox.displayName = 'AnimatedBox'

// Flexbox

export const Flex = styled.div<ElementProps>`
  display: flex;
  box-sizing: border-box;
  height: auto;

  ${space}
  ${width}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

Flex.displayName = 'Flex'

export const AnimatedFlex = styled(animated.div)<ElementProps>`
  display: flex;

  ${space}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`

AnimatedFlex.displayName = 'AnimatedFlex'

// Typography

export const Heading = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition: ${theme.transition.all};

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`

Heading.displayName = 'Heading'

// export const HeadingStroked = styled(Heading)<ElementProps>`
//   -webkit-text-fill-color: ${theme.colors.background};
//   -webkit-text-stroke-width: ${theme.strokeWidth};
//   -webkit-text-stroke-color: ${theme.colors.text};
// `

// Box.displayName = 'HeadingStroked'

export const Text = styled.div<ElementProps>`
  box-sizing: border-box;
  display: block;
  transition: ${theme.transition.all};

  ${space}
  ${color}
  ${textAlign}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${maxWidth}
  ${width}
`

Text.displayName = 'Text'

// ___________________________________________________________________
// End Component
