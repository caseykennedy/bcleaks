// Card Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Box, Flex } from '.'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Card = styled(Flex)<{ inline?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${p => (!p.inline ? `column` : `row-reverse`)};

  border-bottom: ${theme.border};
  padding: ${p => (!p.inline ? 0 : `${theme.space[5]} 0`)};

  /* border-radius: ${p => (!p.inline ? theme.borderRadius : 0)}; */

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: ${p =>
      !p.inline
        ? `${theme.space[4]} ${theme.space[3]}`
        : `0 ${theme.space[4]} 0 0`};

    @media ${theme.mq.tablet} {
      padding: ${p =>
        !p.inline
          ? `${theme.space[5]} ${theme.space[3]}`
          : `0 ${theme.space[5]} 0 0`};
    }
  }

  a {
    flex: 1;
    width: 100%;
  }

  .figure {
    background: ${theme.colors.secondary};
    border: ${theme.border};
    border-color: transparent;

    width: 100%;

    position: relative;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all 0.222s ease-in-out 0s;
  }

  &:hover {
    .figure {
      border-color: ${theme.colors.primary};

      @media ${theme.mq.tablet} {
        transform: matrix(1, 0, 0, 1, 5, -5);
      }
    }
  }

  .title {
    padding-bottom: ${theme.space[4]};

    &--small {
      font-size: calc(${theme.fontSizes[2]});
      margin: 0 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[3]} / 1.25);
      }
    }
  }

  .bg {
    position: relative;

    &::before {
      background: ${theme.colors.primary};
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }

  .horizontal {
  }
`

export default Card
