// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'

// Theme + ui
import theme from '../../../config/theme'
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from '../ui'

import Logo from '../Logo'
import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Overlay from '../Overlay'
import Icon from '../Icons'



// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  return (
    <>
      {/* <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <NavLinks handleExit={() => setNavOpen(false)} isNavOpen={isNavOpen} />
      </Overlay> */}

      <S.Header as="header">
        <S.Logo className="logo--dark">
          <Heading as="h1">
            <Link to="/" aria-label="BC Leaks, back to home">
              BC Leaks
            </Link>
          </Heading>
        </S.Logo>

        <S.Tools>
          <S.Toggle onClick={toggleModal} aria-label="toggle menu">
            <Icon name="hamburger" color="black" />
          </S.Toggle>

          <S.Nav>
            {/* <Navigation /> */}
            Nav
          </S.Nav>
        </S.Tools>
      </S.Header>
    </>
  )
}

export default Header
