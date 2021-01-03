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
  /* justify-content: flex-end; */

  ${p =>
    !p.inline ? `border: ${theme.border};` : `border-top: ${theme.border};`}
  border-color: ${p =>
    !p.inline ? theme.colors.background : darken(0.15, theme.colors.tertiary)};
  border-radius: ${p => (!p.inline ? theme.borderRadius : 0)};

  padding: ${p => (!p.inline ? 0 : `${theme.space[5]} 0`)};

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100%;
    margin-top: ${p => (!p.inline ? theme.space[4] : 0)};
    padding: ${p => (!p.inline ? theme.space[4] : `0 ${theme.space[4]} 0 0`)};

    @media ${theme.mq.tablet} {
      padding: ${p => (!p.inline ? theme.space[4] : `0 ${theme.space[6]} 0 0`)};
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
    border-radius: ${theme.borderRadius};

    width: 100%;

    position: relative;
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all 0.222s ease-in-out 0s;

    &:hover {
      border-color: ${theme.colors.primary};

      @media ${theme.mq.tablet} {
        transform: matrix(1, 0, 0, 1, 5, -5);
      }
    }
  }

  .title {
    font-size: calc(${theme.fontSizes[2]});
    margin: 0 0 ${theme.space[4]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]} / 1.25);
    }
  }

  .bg {
    position: relative;

    &::before {
      background: ${theme.colors.primary};
      border-radius: ${theme.borderRadius};
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
