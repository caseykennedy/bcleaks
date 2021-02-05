// Community page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Section from '../components/Section'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Data
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Store = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/store`} title={`Store | ${site.titleShort}`} />
      <Section>
        <h2>Store</h2>
      </Section>
    </>
  )
}

export default Store
