// Leak List:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'
// Utils
import api from '../../utils/api'
import isLocalHost from '../../utils/isLocalHost'
// Context
import StoreContext from '../../context/StoreContext'
// ui
import { Flex, Grid, Spinner } from 'theme-ui'
// Components
import CardLeak from '../../components/CardLeak'

// ___________________________________________________________________

const LeakList = () => {
  const { state, dispatch } = useContext(StoreContext)
  const [isLoading, setIsLoading] = useState(true)

  const fetchFaunaData = async () => {
    try {
      api.readAll().then((posts: FaunaDataQuery[]) => {
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
        const sortedLeaks = posts.sort(
          (a, b) => b.ref['@ref'].id - a.ref['@ref'].id
        )
        dispatch({
          type: 'FETCH_FAUNA_POSTS',
          payload: sortedLeaks
        })
        setIsLoading(false)
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchFaunaData()
  }, [])

  return !isLoading ? (
    <>
      <Grid columns={1} gap={4}>
        {state.posts.map((post, idx) => (
          <CardLeak post={post} key={idx} />
        ))}
      </Grid>
    </>
  ) : (
    <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      loading... <Spinner py={3} />
    </Flex>
  )
}

export default LeakList
