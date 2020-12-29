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

  padding: calc(${theme.space[3]}) ${theme.space[4]};
  width: 100%;

  color: ${p => (!p.color ? theme.colors.white : p.color)} !important;
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 500;
  letter-spacing: 1px;
  /* line-height: 1; */
  text-transform: uppercase;

  background: ${p => p.bg};
  border: ${theme.border};
  border-color: ${p => p.bg};

  cursor: pointer;
  outline: none;
  transition: ${theme.transition.all};
  white-space: nowrap;

  @media ${theme.mq.tablet} {
    width: initial;
  }

  span {
    font-size: calc(${theme.fontSizes[1]});

    margin-left: ${theme.space[4]};
    transition: ${theme.transition.all};

    position: relative;

    /* display: none; */

    @media ${theme.mq.tablet} {
      display: block;
      margin-left: ${theme.space[7]};
      /* right: ${theme.space[2]}; */
    }

    @media ${theme.mq.desktop} {
      margin-left: ${theme.space[9]};
    }

    svg {
      width: calc(${theme.space[4]} * 1.25);
      fill: ${theme.colors.white};

      @media ${theme.mq.desktop} {
        width: calc(${theme.space[5]} / 1);
      }
    }
  }

  &:hover {
    /* background: ${p => darken(0.05, p.bg)}; */
    color: ${theme.colors.white};

    span {
      right: 0;

      svg {
        fill: ${theme.colors.white};
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
