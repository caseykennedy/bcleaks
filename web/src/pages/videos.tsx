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

// Data
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Videos = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/videos`} title={`Videos | ${site.titleShort}`} />
      <VideosPage />
    </>
  )
}

export default Videos
