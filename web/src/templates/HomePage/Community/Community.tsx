// Community Section:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'

// Utils
import api from '../../../utils/api'
import isLocalHost from '../../../utils/isLocalHost'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// Components
import CardLeak from '../../../components/CardLeak'
import Section from '../../../components/Section'

// Context
import StoreContext from '../../../context/StoreContext'

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

const Community = () => {
  return (
    <S.Community bg="secondary">
      <Section bg="" overflow="hidden">
        <Flex
          justifyContent="space-between"
          width={1}
          className="articles__header"
        >
          <Heading fontFamily="display" className="text--lg  text--uppercase">
            Community Leaks
          </Heading>
          <Link to={`/community`}>View All</Link>
        </Flex>
      </Section>

      <Section>
        <Box width={[1, 1, 6 / 8]}>
          <LeakList />
        </Box>
      </Section>
    </S.Community>
  )
}

export default Community
