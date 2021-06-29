// Footer:
// TODO:

// ___________________________________________________________________

import * as React from 'react'
import { Link, withPrefix } from 'gatsby'

// utils
// import * as gtag from '../../utils/gtag'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Input } from 'theme-ui'
import Button from '../ui/Button'

import Icon from '../Icons'
import Symbol from '../Symbol'

// Assets
import checkUsOut from './assets/checkusout.svg'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const isBrowser = typeof window !== 'undefined'

const Bulletin = () => {
  return (
    <S.Bulletin>
      <Flex className="inner">
        <Box p={theme.gutter.axis} className="bulletin__newsletter">
          <Heading
            mb={3}
            sx={{ fontFamily: `Rubik` }}
            className="text--md  text--uppercase"
          >
            Join the newletter
          </Heading>
          <Box
            as="form"
            name="eOn Newsletter Signup Form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            sx={{ display: `flex` }}
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="form-name"
              value="eOn Newsletter Signup Form"
            />

            <label htmlFor="email" style={{ display: 'none' }}>
              Email address:
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required={true}
              className="form-control"
            />

            <button
              type="submit"
              value="Submit form"
              // onClick={() => {
              //   gtag.event({
              //     category: 'Submit form',
              //     action: 'Click',
              //     label: 'Footer newsletter sign up'
              //   })
              // }}
            >
              subscribe
            </button>
          </Box>

          <Text
            as="p"
            mt={3}
            sx={{ width: [`100%`, `100%`, `75%`] }}
            className="text--small"
          >
            By signing up, you agree to our <Link to={`/terms`}>Terms</Link> and
            that you have read our <Link to={`/terms`}>Privacy Policy</Link>.
          </Text>
        </Box>

        <Box p={theme.gutter.axis} className="bulletin__social">
          <Flex
            sx={{
              justifyContent: `space-between`,
              flexWrap: `wrap`,
              width: `100%`
            }}
          >
            <Box sx={{ width: `175px` }}>
              <img src={checkUsOut} alt="BC Leaks Podcast" />
            </Box>

            <Flex
              pl={4}
              sx={{ flexDirection: `column`, justifyContent: `flex-end` }}
            >
              <Icon name="youtube" color="white" />
              <Icon name="twitter" color="white" />
            </Flex>
          </Flex>

          {/* <Flex>
            <Box
              as="a"
              href="https://www.youtube.com/channel/UCHop-jpf-huVT1IYw79ymPw"
              target="_blank"
              mr={2}
              className="btn"
            >
              subscribe
            </Box>
            <Box
              as="a"
              href="https://www.youtube.com/channel/UCHop-jpf-huVT1IYw79ymPw"
              target="_blank"
              ml={2}
              className="btn"
            >
              follow
            </Box>
          </Flex> */}
        </Box>
      </Flex>
    </S.Bulletin>
  )
}

const Footer: React.FC = () => {
  // const isUserPath = isBrowser && location.pathname === withPrefix('/user')
  return (
    <>
      <Bulletin />
      <S.Footer as="footer">
        <Box>
          <a href="">FAQs</a>
          <br />
          <a href="">Terms &amp; Privacy</a>
        </Box>

        <Link
          to="/"
          className="logo-symbol"
          aria-label="BC Leaks, back to home"
        >
          <Symbol strokeWidth={1} />
        </Link>
      </S.Footer>
    </>
  )
}

export default Footer
