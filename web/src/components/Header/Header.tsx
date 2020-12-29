// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex } from '../ui'

import Symbol from '../Symbol'
import Lettermark from '../Lettermark'
import Navigation from './Navigation'
import Icon from '../Icons'

import Typist from 'react-typist'

import {
  IdentityModal,
  useIdentityContext
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css' // delete if you want to bring your own CSS

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

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
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate('/app/profile')}
        onSignup={user => navigate('/app/profile')}
        aria-label="Log in"
      />

      <S.Header as="header">
        <S.Utilities>
          <Flex className="utilities__inner">
            <div className="page-title">
              <GetDate />
            </div>

            <Flex className="account">
              <button onClick={() => setDialog(true)}>log in</button>
              <button onClick={() => setDialog(true)}>sign up</button>
            </Flex>
          </Flex>
        </S.Utilities>

        <Flex className="header__inner">
          <S.Logo>
            <Link
              to="/"
              className="logo-symbol"
              aria-label="BC Leaks, back to home"
            >
              <Symbol />
            </Link>
            {/* <div className="logo-lettermark">
                <Lettermark />
              </div> */}
          </S.Logo>
          
          <S.Menu>
            <Box>
              <S.Toggle onClick={toggleModal} aria-label="toggle menu">
                <Icon name="hamburger" color="black" />
              </S.Toggle>
              <Navigation />
            </Box>
            <Box>search</Box>
            <Box>search</Box>
            <Box>search</Box>
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
