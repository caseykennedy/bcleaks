// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'

import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'

// Components
import Symbol from '../Symbol'
import Lettermark from '../Lettermark'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'
import GetDate from '../GetDate'

import Typist from 'react-typist'

import {
  IdentityModal,
  useIdentityContext
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation portal
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => {
    setNavOpen(!isNavOpen)
    // gtag.event({
    //   category: 'Header utilities',
    //   action: 'Click',
    //   label: 'Header hamburger toggle'
    // })
  }

  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  return (
    <>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => navigate('/app/profile')}
        onSignup={() => navigate('/app/profile')}
        aria-label="Log in"
      />

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav open={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>

      <S.Utilities px={theme.gutter.axis} py={2}>
        <Flex className="date">
          <GetDate />
        </Flex>

        <Flex className="account">
          <button onClick={() => setDialog(true)}>log in</button>
          <button onClick={() => setDialog(true)}>sign up</button>
        </Flex>
      </S.Utilities>

      <S.Header as="header">
        <Flex className="inner">
          <S.Toggle onClick={toggleMenu} aria-label="toggle menu">
            <HamburgerMenu
              isOpen={!isNavOpen ? false : true}
              menuClicked={toggleMenu}
              width={32}
              height={12}
              strokeWidth={1.5}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.333}
            />
          </S.Toggle>

          <Link
            to="/"
            className="logo-symbol"
            aria-label="BC Leaks, back to home"
          >
            <S.Logo>
              <Box className="logo-symbol">
                <Symbol />
              </Box>
              <Flex className="logo-lettermark">
                <Lettermark />
              </Flex>
            </S.Logo>
          </Link>

          <S.Menu>
            <Navigation />
          </S.Menu>
        </Flex>
      </S.Header>
    </>
  )
}

export default Header

const cursorProps = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
}
