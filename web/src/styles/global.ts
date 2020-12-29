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

  /* Cursor */
  /* html,
  a,
  button {
    cursor: none;

    &:hover {
      cursor: none;
    }
  } */

  #drawer-root {
    position: relative;
    z-index: 100;
  }
`

export default GlobalStyles

// ___________________________________________________________________
