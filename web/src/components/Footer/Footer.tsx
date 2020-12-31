// Footer:
// TODO:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import Symbol from '../Symbol'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <S.Footer as="footer">
      <Link to="/" className="logo-symbol" aria-label="BC Leaks, back to home">
        <Symbol strokeWidth={1} />
      </Link>
    </S.Footer>
  )
}

export default Footer
