// Card Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from '.'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Card = styled(Flex)`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .figure {
    background: ${theme.colors.secondary};
    border: ${theme.border};
    border-color: transparent;
    margin-bottom: ${theme.space[4]};
    width: 100%;
    overflow: hidden;

    position: relative;
    transform: matrix(1, 0, 0, 1, 0, 0);
    top: 0;
    right: 0;

    transition: all 0.222s ease-in-out 0s;

    &:hover {
      @media ${theme.mq.tablet} {
        transform: matrix(1, 0, 0, 1, 4, -4);
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

  .hor {
    display: flex;
    flex-direction: row-reverse;
    border-top: ${theme.border};
    padding: ${theme.space[4]} 0;

    @media ${theme.mq.tablet} {
      flex-direction: row;
      padding: ${theme.space[5]} 0;
    }

    .figure {
      background: ${theme.colors.secondary};
      border: ${theme.border};
      border-color: transparent;
      border-radius: ${theme.borderRadius};
      width: 100%;
      overflow: hidden;

      transition: border-color ${theme.transition.global};

      &:hover {
        border-color: ${theme.colors.primary};
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: auto;
      padding-right: ${theme.space[5]};

      @media ${theme.mq.tablet} {
        padding-right: 0;
        padding-left: ${theme.space[5]};
      }
    }
  }
`

export default Card
