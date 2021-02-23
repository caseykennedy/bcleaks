// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Elements
import { AnimatedBox } from '../components/ui'

// Components
import SEO from '../components/SEO'
import HomePage from '../templates/HomePage'

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
