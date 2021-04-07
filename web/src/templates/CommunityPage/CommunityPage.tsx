// Community Page:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'
// Context
import StoreContext from '../../context/StoreContext'
// Utils
import api from '../../utils/api'
import isLocalHost from '../../utils/isLocalHost'
// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../../components/ui'
// Components
import Section from '../../components/Section'
import CardLeak from '../../components/CardLeak'

// ___________________________________________________________________

const LeakList = () => {
  const { state, dispatch } = useContext(StoreContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFaunaData = async () => {
      try {
        api.readAll().then((posts: FaunaDataQuery[] | any) => {
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
          }
          dispatch({
            type: 'FETCH_FAUNA_POSTS',
            payload: posts
          })
        })
      } catch (e) {
        console.log(e)
      }
      setIsLoading(false)
    }
    fetchFaunaData()
  }, [])

  return !isLoading ? (
    <>
      {state.posts.map((post, idx) => (
        <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
      ))}
    </>
  ) : (
    <Box>loading...</Box>
  )
}

const CommunityPage = () => {
  return (
    <S.CommunityPage>
      <Section>
        <Box width={[1, 1, 2 / 3]}>
          <LeakList />
        </Box>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage
