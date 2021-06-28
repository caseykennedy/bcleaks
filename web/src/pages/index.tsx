// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import CryptoTicker from '../components/CryptoTicker'
import HomePage from '../templates/HomePage'

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
