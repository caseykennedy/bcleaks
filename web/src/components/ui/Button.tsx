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
}

const Button = styled(Flex)<ButtonProps>`
  box-sizing: border-box;
  transition: ${theme.transition.all};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.space[2]} ${theme.space[4]};
  width: 100%;

  color: ${p => (!p.color ? theme.colors.white : p.color)};
  font-size: calc(${theme.fontSizes[2]});
  /* font-weight: 500; */
  text-transform: uppercase;

  background: ${p => p.bg};
  border: ${theme.border};
  border-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius};

  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.tablet} {
    width: initial;
  }

  span {
    font-size: calc(${theme.fontSizes[1]});

    margin-left: ${theme.space[5]};
    transition: ${theme.transition.all};

    position: relative;

    display: none;

    @media ${theme.mq.tablet} {
      display: block;
      right: ${theme.space[2]};
    }

    @media ${theme.mq.desktop} {

    }

    svg {
      width: ${theme.space[4]};
      fill: ${theme.colors.primary};

      @media ${theme.mq.desktop} {
        width: ${theme.space[4]};
      }
    }
  }

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.black};

    span {
      right: 0;

      svg {
        fill: ${theme.colors.black};
      }
    }
  }

  &:disabled {
    background: ${theme.colors.black};
    border-color: ${theme.colors.black};
    color: ${theme.colors.white};
  }

  &:active {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};
  }

  .inner {
  }

  .smiley {
    display: block;
    margin-left: ${theme.space[3]};
    /* width: calc(${theme.space[5]}); */
  }
`

export default Button
