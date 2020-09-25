// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'

// Theme + ui
import theme from '../../../config/theme'
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from '../ui'

import Symbol from '../Symbol'
import Lettermark from '../Lettermark'
import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Overlay from '../Overlay'
import Icon from '../Icons'

import Typist from 'react-typist'

import {
  IdentityModal,
  useIdentityContext
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const cursorProps = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
}

const GetDate = () => {
  const d = new Date()
  const days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ]
  const months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ]
  return (
    <>
      {days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()},{' '}
      {d.getFullYear()}
    </>
  )
}

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

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
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/app/profile')}
        onSignup={user => navigate('/app/profile')}
        aria-label="Log in"
      />

      <S.Header as="header">
        <S.Utilities>
          <Box color="tertiary">
            <GetDate />
          </Box>
          <Box>
            <button onClick={() => setDialog(true)}>log in</button>
            <button onClick={() => setDialog(true)}>sign up</button>
          </Box>
        </S.Utilities>

        <S.Logo>
          <Link
            to="/"
            className="logo-symbol"
            aria-label="BC Leaks, back to home"
          >
            <Symbol />
          </Link>
          <div className="logo-lettermark">
            <Lettermark />
          </div>
        </S.Logo>

        <S.Menu>
          <div className="page-title">Good evening.</div>
          <div className="nav-outer">
            <S.Toggle onClick={toggleModal} aria-label="toggle menu">
              <Icon name="hamburger" color="black" />
            </S.Toggle>
            <Navigation />
          </div>
        </S.Menu>
      </S.Header>
    </>
  )
}

export default Header
