// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox } from '../components/ui'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../templates/HomePage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Index = () => {
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <>
      <SEO />
      <AnimatedBox>
        <HomePage />
      </AnimatedBox>
    </>
  )
}

export default Index

// ___________________________________________________________________
