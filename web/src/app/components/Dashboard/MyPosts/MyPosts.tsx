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

import Icon from '../../../../components/Icons'

import {
  IdentityModal,
  useIdentityContext
} from 'react-netlify-identity-widget'

// ___________________________________________________________________

function getTodoId(post: FaunaDataQuery) {
  if (!post.ref) {
    return null
  }
  return post.ref['@ref'].id
  // return post.ref.value.id
}

const getFaunaPosts = client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_posts'))))
  .then(response => {
    const postsRefs = response.data
    // create new query
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllPostDataQuery = postsRefs.map((ref: any) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllPostDataQuery).then((data: any) => data)
  })
  .catch(error => console.warn('error', error.message))

const Posts = () => {
  const { user }: any = useIdentityContext()
  const [items, setItems] = useState<FaunaDataQuery[]>([])

  useEffect(() => {
    // getFaunaPosts.then((results: FaunaDataQuery[]) => {
    //   const filteredPosts = results.filter(item => {
    //     if (item.data.author.includes(user.user_metadata.full_name)) {
    //       return item
    //     }
    //   })
    //   setItems(filteredPosts)
    //   console.log(filteredPosts)
    // })

    api.readAll().then((fetchedPosts: FaunaDataQuery[]) => {
      if (fetchedPosts.message === 'unauthorized') {
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
      const filteredPosts = fetchedPosts.filter(item => {
        if (item.data.author.includes(user.user_metadata.full_name)) {
          return item
        }
      })
      setItems(filteredPosts)
    })
  }, [])

  const DeletePost: React.FC<{ postId: string }> = ({ postId }) => {
    const handleDeletePost = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault()

      // Optimistically remove todo from UI
      const filteredTodos = items.reduce(
        (acc, current) => {
          const currentId = getTodoId(current)
          if (currentId === postId) {
            // save item being removed for rollback
            acc.rollbackTodo = current
            return acc
          }
          // filter deleted todo out of the todos list
          acc.optimisticState = acc.optimisticState.concat(current)
          return acc
        },
        {
          rollbackTodo: {},
          optimisticState: []
        }
      )
      setItems(filteredTodos.optimisticState)
      console.log('deleted todos', filteredTodos.optimisticState)

      // delete it!
      api
        .delete(postId)
        .then(response => {
          console.log('API response', response)
        })
        .catch(error => {
          console.log('ERROR')
          console.log('API error:', error)
        })
    }

    return (
      <Box as="button" onClick={handleDeletePost}>
        delete
        <Icon name="plus" />
      </Box>
    )
  }

  return items.length === 0 ? (
    <Box>You have no posts :(</Box>
  ) : (
    <>
      {items.map((post, idx) => (
        <S.Post key={idx}>
          <Text as="p" className="text--sm">
            {post.data.title}
          </Text>
          <DeletePost
            postId={getTodoId(post)}
            // postId={post.ref.value.id}
          />
        </S.Post>
      ))}
    </>
  )
}

const MyPosts = () => {
  return (
    <S.MyPosts mt={theme.gutter.axis}>
      <Box className="title">My posts</Box>
      <Box alignItems="center" color="quaternary" justifyContent="center" p={4}>
        <Posts />
      </Box>
    </S.MyPosts>
  )
}

export default MyPosts
