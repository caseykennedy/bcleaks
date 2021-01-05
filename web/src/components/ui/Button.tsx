// Button Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading, AnimatedBox } from '.'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type ButtonProps = {
  bg?: string
  color?: string
  fill?: string
}

const Button = styled(Flex)<ButtonProps>`
  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.space[2]} ${theme.space[4]};
  position: relative;
  width: 100%;

  color: ${p => (!p.color ? theme.colors.primary : p.color)};
  font-size: calc(${theme.fontSizes[2]});
  line-height: 2;
  text-transform: uppercase;

  background: ${p => p.bg};
  border: ${theme.border};
  border-color: ${p => (!p.color ? theme.colors.primary : p.color)};
  border-radius: ${theme.borderRadius};

  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.tablet} {
    width: initial;
  }

  span {
    background: ${p => (!p.color ? theme.colors.primary : p.color)};
    border-radius: ${theme.borderRadius};
    font-size: calc(${theme.fontSizes[1]});

    margin-right: ${theme.space[4]};
    margin-left: -7px;
    padding: calc(${theme.space[1]} * 1.25);

    position: relative;
    transform: scale(1.15);
    transition: ${theme.transition.all};

    @media ${theme.mq.tablet} {
      display: block;
    }

    @media ${theme.mq.desktop} {
    }

    svg {
      width: ${theme.space[4]};
      fill: ${p => (!p.fill ? theme.colors.black : p.fill)};

      @media ${theme.mq.desktop} {
        width: ${theme.space[4]};
      }
    }
  }

  &:hover {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};

    span {
      background: ${p => (!p.fill ? theme.colors.black : p.fill)};
      right: 0;

      svg {
        fill: ${p => (!p.fill ? theme.colors.primary : p.fill)};
      }
    }
  }

  &:disabled {
    background: ${theme.colors.tertiary};
    border-color: ${theme.colors.tertiary};
    color: ${theme.colors.white};
  }

  &:active {
    background: ${darken(0.1, theme.colors.primary)};
    color: ${theme.colors.black};
    border-color: ${darken(0.1, theme.colors.primary)};
  }

  .inner {
  }

  .smiley {
    display: block;
    margin-left: ${theme.space[3]};
  }
`

export default Button
