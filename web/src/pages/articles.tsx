// Articles page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ArticlesPage from '../templates/ArticlesPage'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Articles = () => {
  const site = useSiteSettings()
  return (
    <Layout>
      <SEO pathname={`/articles`} title={`Articles | ${site.titleShort}`} />
      <ArticlesPage />
    </Layout>
  )
}

export default Articles
