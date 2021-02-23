// Community page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import CommunityPage from '../templates/CommunityPage'

// Data
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Community = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/community`} title={`Community | ${site.titleShort}`} />
      <CommunityPage />
    </>
  )
}

export default Community
