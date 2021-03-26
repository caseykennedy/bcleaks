// Community Page:

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'

// Utils
import api from '../../utils/api'
import isLocalHost from '../../utils/isLocalHost'
import { client, q } from '../../utils/faunaDb'

// Theme
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../../components/ui'

// Components
import ImgMatch from '../../components/ImgMatch'
import Section from '../../components/Section'
import CardLeak from '../../components/CardLeak'

// ___________________________________________________________________

const GetFauna = () => {
  // const initialState: FaunaDataQuery[] | (() => FaunaDataQuery[]) = []
  const [items, setItems] = useState<FaunaDataQuery[]>([])

  // const getFaunaPosts = client
  //   .query(q.Paginate(q.Match(q.Ref('indexes/all_posts'))))
  //   .then(response => {
  //     const postsRefs = response.data
  //     // create new query
  //     // https://docs.fauna.com/fauna/current/api/fql/
  //     const getAllPostDataQuery = postsRefs.map((ref: any) => {
  //       return q.Get(ref)
  //     })
  //     // query the refs
  //     return client.query(getAllPostDataQuery).then(data => data)
  //   })
  //   .catch(error => console.warn('error', error.message))

  useEffect(() => {
    // getFaunaPosts.then(results => setItems(results))
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
        return false
      }
      setItems(posts)
      console.log('Netlify Fetched FaunaDb posts', posts)
    })
  }, [])

  return items.length === 0 ? (
    <Box>Loading...</Box>
  ) : (
    <>
      {items.map((post, idx) => (
        <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
      ))}
    </>
  )
}

const CommunityPage = () => {
  return (
    <S.CommunityPage>
      <Section>
        <Box width={[1, 1, 2 / 3]}>
          <GetFauna />
        </Box>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage
