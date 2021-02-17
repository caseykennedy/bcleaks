// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

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
