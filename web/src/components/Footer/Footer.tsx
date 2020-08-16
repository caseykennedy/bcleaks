// Footer:
// TODO:

// ___________________________________________________________________

import * as React from 'react'

// Theme + UI
import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <S.Footer as="footer">
      Footer
    </S.Footer>
  )
}

export default Footer
