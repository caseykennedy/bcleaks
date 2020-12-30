// Community page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import CommunityPage from '../templates/CommunityPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Community = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO pathname={`/community`} title={`Community | ${site.titleShort}`} />
      <CommunityPage />
    </Layout>
  )
}

export default Community
