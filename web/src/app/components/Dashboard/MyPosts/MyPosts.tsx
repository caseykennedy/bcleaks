// My Posts

// ___________________________________________________________________

import React, { useContext, useEffect, useState } from 'react'

// Utils
import api from '../../../../utils/api'
import isLocalHost from '../../../../utils/isLocalHost'
import { client, q } from '../../../../utils/faunaDb'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box, Text } from '../../../../components/ui'

import {
  IdentityModal,
  useIdentityContext
} from 'react-netlify-identity-widget'

// ___________________________________________________________________

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
//     return client.query(getAllPostDataQuery).then((data: any) => data)
//   })
//   .catch(error => console.warn('error', error.message))

const readFaunaWithApi = api.readAll().then((posts: FaunaDataQuery[] | any) => {
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
  return posts
})

const UserPosts = () => {
  const { user }: any = useIdentityContext()
  const [items, setItems] = useState<FaunaDataQuery[]>([])
  const userPosts = items.filter(item => {
    if (item.data.author.includes(user.user_metadata.full_name)) {
      return item
    }
  })

  useEffect(() => {
    // getFaunaPosts.then(results => setItems(results))
    readFaunaWithApi.then(posts => setItems(posts))
  }, [])

  return items.length <= 0 ? (
    <Box>Loading...</Box>
  ) : (
    <>
      {userPosts.map((post, idx) => (
        <S.UserPost key={idx}>
          <Text as="p" className="text--sm">
            {post.data.title}
          </Text>
        </S.UserPost>
      ))}
    </>
  )
}

const MyPosts = () => {
  return (
    <S.MyPosts mt={theme.gutter.axis}>
      <Box className="title">My posts</Box>
      <Box alignItems="center" color="quaternary" justifyContent="center" p={4}>
        <UserPosts />
      </Box>
    </S.MyPosts>
  )
}

export default MyPosts
