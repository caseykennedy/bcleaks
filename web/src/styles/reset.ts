// Global reset

// ___________________________________________________________________

// Core
import { css } from 'styled-components'
import { normalize } from 'styled-normalize'

const Reset = css`
  ${normalize}

  ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; /* for remove highlight */
  }
`

export default Reset
