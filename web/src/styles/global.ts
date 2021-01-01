// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    background: ${theme.colors.black};
    
    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .img {
    width: 100%;
    height: 100%;
  }

  #drawer-root {
    position: relative;
    z-index: 100;
  }

  .headroom[style] {
    z-index: 999999 !important;
  }

  .swiper-container {
    overflow: visible;

    .swiper-wrapper {
      .swiper-slide {
        transition: ${theme.transition.all};
      }
    }

    .swiper-pagination {
      bottom: -${theme.space[7]};
      left: 0;
      text-align: left;

      @media ${theme.mq.tablet} {
        display: inherit;
      }

      &.swiper-pagination-bullets {
        .swiper-pagination-bullet {
          background: transparent;
          cursor: pointer;
          opacity: 0.75;

          color: ${theme.colors.primary};
          font-size: ${theme.fontSizes[2]};

          margin-right: ${theme.space[3]};
          padding: 0;
          height: auto;

          transition: opacity 0.222s ease-in-out 0s;

          &:hover {
            opacity: 1;
          }

          &-active {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`

export default GlobalStyles

// ___________________________________________________________________
