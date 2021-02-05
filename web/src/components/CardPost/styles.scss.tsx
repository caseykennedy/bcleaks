// Card Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const CardPost = styled(Flex)<{ inline?: boolean }>`
  display: flex;
  align-items: flex-start;
  /* justify-content: stretch; */
  flex-direction: ${p => (!p.inline ? `column` : `row-reverse`)};

  border-bottom: ${theme.border};
  padding: ${p => (!p.inline ? 0 : `${theme.space[4]} 0 0 0`)};

  @media ${theme.mq.tablet} {
    align-items: flex-end;
    flex-direction: ${p => (!p.inline ? `column` : `row`)};
    padding: ${p => (!p.inline ? 0 : `${theme.space[6]} 0 0 0`)};
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-right: ${p => (!p.inline ? theme.border : `none`)};
    border-left: ${p => (!p.inline ? theme.border : `none`)};

    height: 100%;
    padding: ${p =>
      !p.inline
        ? `${theme.space[3]} ${theme.space[3]}`
        : `0 ${theme.space[4]} ${theme.space[4]} 0`};

    @media ${theme.mq.tablet} {
      padding: ${p =>
        !p.inline
          ? `${theme.space[3]} ${theme.space[4]}`
          : `0 0 ${theme.space[5]} ${theme.space[5]}`};
    }

    .pillbox {
      display: none;
      margin-bottom: ${theme.space[6]};
      width: 100%;

      @media ${theme.mq.tablet} {
        display: flex;
      }
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
      transform: matrix(1, 0, 0, 1, 5, -5);
    }

    .title {
      color: ${theme.colors.primary};
    }
  }

  .title {
    color: ${theme.colors.white};
    /* font-family: ${theme.fonts.sans}; */
    font-size: calc(${theme.fontSizes[2]});
    line-height: ${theme.root.font.headingLineHeight};
    text-transform: uppercase;

    margin-bottom: ${theme.space[6]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
      -webkit-line-clamp: 2; /* number of lines to show */
      margin-bottom: ${theme.space[2]};
    }

    &--small {
      font-size: calc(${theme.fontSizes[2]});
      margin-bottom: ${theme.space[2]};

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
