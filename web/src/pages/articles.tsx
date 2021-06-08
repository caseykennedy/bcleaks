// Articles page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import ArticlesPage from '../templates/ArticlesPage'

// Data
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Articles = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/articles`} title={`Articles | ${site.titleShort}`} />
      <ArticlesPage />
    </>
  )
}

export default Articles