// Privacy page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import VideosPage from '../templates/VideosPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Videos = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO pathname={`/videos`} title={`Videos | ${site.titleShort}`} />
      <VideosPage />
    </Layout>
  )
}

export default Videos
