// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from '../ui'
import './login.css'

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

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  const { isLoggedIn, logoutUser } = useIdentityContext()
  const { user }: any = useIdentityContext()
  // Navigation portal
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => {
    setNavOpen(!isNavOpen)
  }
  const [dialog, setDialog] = React.useState(false)

  return (
    <>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={() => navigate('/user')}
        onSignup={() => navigate('/user')}
        aria-label="Log in"
      />

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav open={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>

      <S.Utilities px={theme.gutter.axis} py={1}>
        {!isLoggedIn ? (
          <Flex className="date">
            <GetDate />
          </Flex>
        ) : (
          <Flex className="user">
            <Typist cursor={cursorProps}>
              Howdy, {user.user_metadata.full_name}!
            </Typist>
          </Flex>
        )}
        <Flex className="account">
          {!isLoggedIn ? (
            <>
              <button onClick={() => setDialog(true)}>log in</button>
              <button onClick={() => setDialog(true)}>sign up</button>
            </>
          ) : (
            <>
              <Link
                to={`/user`}
                activeClassName="active"
                partiallyActive={true}
              >
                Dashboard
              </Link>
              <a
                onClick={async event => {
                  event.preventDefault()
                  await logoutUser()
                  navigate(`/`)
                }}
              >
                Logout
              </a>
            </>
          )}
        </Flex>
      </S.Utilities>

      <S.Header as="header" pl={theme.gutter.axis}>
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
              <Box className="logo-symbol" onClick={() => setNavOpen(false)}>
                <Symbol />
              </Box>
              <Flex className="logo-lettermark">
                <Text
                  fontSize={`calc(${theme.fontSizes[2]} * 1.25)`}
                  letterSpacing={-1}
                >
                  BLOCKCHAIN LEAKS
                </Text>
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
  hideWhenDone: true,
  hideWhenDoneDelay: 1000
}
