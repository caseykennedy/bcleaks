// Community Page:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'

// Utils
import api from '../../utils/api'
import isLocalHost from '../../utils/isLocalHost'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../components/ui'

// Components
import ImgMatch from '../../components/ImgMatch'
import Section from '../../components/Section'
import CardLeak from '../../components/CardLeak'

// Data
import useFaunaDb from '../../hooks/useFaunaDb'

// ___________________________________________________________________

const randomizeVotes = () => {
  return Math.floor(Math.random() * 50 + 37)
}

const CommunityPage = () => {
  const faunaDbPosts = useFaunaDb()
  const [items, setItems] = useState([])
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    api.readAll().then(posts => {
      if (posts.message === 'unauthorized') {
        if (isLocalHost()) {
          alert(
            'FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info'
          )
        } else {
          alert(
            'FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct'
          )
        }
        return false
      }
      setItems(posts)
      console.log('Fetched FaunaDb posts', posts)
    })
  }, [])
  return (
    <S.CommunityPage>
      <Section>
        <Box width={[1, 1, 6 / 8]}>
          {items.map((post, idx) => (
            <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
          ))}
        </Box>

        <Box width={[1, 1, 6 / 8]}>
          {faunaDbPosts.map(({ node: post }, idx) => (
            <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
          ))}
        </Box>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage

// ___________________________________________________________________
