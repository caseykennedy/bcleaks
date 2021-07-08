// Community page

// Libraries
import React from 'react'
import { Router } from '@reach/router'

// Components
import SEO from '../../components/SEO'
import CommunityPage from '../../templates/CommunityPage'
import LeakPage from '../../templates/Post/Leak'

// Data
import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

const PublicRoute = (props: any) => <>{props.children}</>

const Community = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/community`} title={`Community | ${site.titleShort}`} />
      <Router>
        <CommunityPage path="/community" />
        <LeakPage path="/community/:slug" />
      </Router>
    </>
  )
}

export default Community
