// Button Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Flex } from '.'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type ButtonProps = {
  bg?: string
  color?: string
  fill?: string
  width?: string
}

const Button = styled(Flex)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  border: ${theme.border};
  border-color: ${theme.colors.darkgray};

  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes[2]};
  text-transform: uppercase;

  padding: ${theme.space[4]};
  cursor: pointer;
  transition: ${theme.transition.all};

  height: ${theme.btnHeight};
  width: 100%;

  @media ${theme.mq.tablet} {
    width: ${p => (p.width ? p.width : '100%')};
  }

  span svg {
    fill: ${theme.colors.gray};
    stroke: ${theme.colors.gray};
    margin-left: ${theme.space[4]};
    width: 18px;
  }

  &--logout {
    span {
      transform: rotate(180deg);
    }
  }

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};

    span svg {
      stroke: ${theme.colors.primary};
    }
  }

  &:disabled {
    border-color: ${theme.colors.darkgray};
    color: ${theme.colors.darkgray};
    cursor: not-allowed;
    
    span svg {
      stroke: ${theme.colors.darkgray};
    }
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
