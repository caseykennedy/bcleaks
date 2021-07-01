// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import HomePage from '../templates/HomePage'
import CryptoTicker from '../components/CryptoTicker'

// ___________________________________________________________________

const Index = () => {
  return (
    <>
      <SEO />
      <CryptoTicker />
      <HomePage />
    </>
  )
}

export default Index
