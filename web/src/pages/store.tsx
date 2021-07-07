// Community page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Section from '../components/Section'

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
