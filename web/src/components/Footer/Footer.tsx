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
import { Box, Flex, Heading, Text } from '../ui'
import Button from '../ui/Button'
import { Input } from 'theme-ui'

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
        <Box
          px={theme.gutter.axis}
          py={[5, 5, 6]}
          className="bulletin__newsletter"
        >
          <Heading fontFamily="Rubik" className="text--md  text--uppercase">
            Join the newletter
          </Heading>
          <Flex
            as="form"
            name="eOn Newsletter Signup Form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
          </Flex>

          <Text as="p" mt={3} width={[1, 1, 2 / 3]} className="text--small">
            By signing up, you agree to our <Link to={`/terms`}>Terms</Link> and
            that you have read our <Link to={`/terms`}>Privacy Policy</Link>.
          </Text>
        </Box>

        <Box px={theme.gutter.axis} py={[5, 5, 6]} className="bulletin__social">
          <Flex width={1} justifyContent="space-between" mb={4} flexWrap="wrap">
            <Box
              as="img"
              width="175px"
              src={checkUsOut}
              alt="BC Leaks Podcast"
            />

            <Flex flexDirection="column" justifyContent="flex-end" pl={4}>
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

const Social = () => {
  return (
    <S.Social>
      <Flex className="inner">
        <Box px={theme.gutter.axis} py={[5, 5, 6]} className="social__links">
          <Flex width={1} justifyContent="space-between" mb={4} flexWrap="wrap">
            <Box
              as="img"
              width="175px"
              src={checkUsOut}
              alt="BC Leaks Podcast"
            />

            <Flex justifyContent="flex-end" pl={4}>
              youtube
              <br />
              twitter
            </Flex>
          </Flex>

          <Flex>
            <button>subscribe</button>
            <button>Follow</button>
          </Flex>
        </Box>

        <Flex px={theme.gutter.axis} py={[5, 5, 6]} className="social__podcast">
          <Box mr={6}>
            <Heading fontFamily="Rubik" className="text--md  text--uppercase">
              Support us
            </Heading>
            <Text as="p">Donate to our hard-hitting crypto news outlet.</Text>

            <Flex>
              <Button bg="transparent" color={theme.colors.primary}>
                <Icon name="arrow" /> Donate
              </Button>
            </Flex>
          </Box>

          <Box>
            {/* <Box as="img" width="300px" src={podFig} alt="BC Leaks Podcast" /> */}
          </Box>
        </Flex>
      </Flex>
    </S.Social>
  )
}

const Footer: React.FC = () => {
  const isUserPath = isBrowser && location.pathname === withPrefix('/user')
  return (
    <>
      {!isUserPath && <Bulletin />}
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
