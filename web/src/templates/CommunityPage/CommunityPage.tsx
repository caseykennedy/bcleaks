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
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

type PostShape = {
  node: {
    data: {
      author: string
      title: string
      votes: number
    }
  }[]
}

const randomizeVotes = () => {
  return Math.floor((Math.random() * 50) + 37);
}

const CommunityPage = () => {
  const [items, setItems] = useState(posts)

  const [testData, setTestData] = React.useState(posts)
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
      setTestData(posts)
      console.log('all community posts', posts)
    })
  }, [])
  return (
    <S.CommunityPage>
      <Section>
        <Box width={[1, 1, 6 / 8]}>
          {testData.map((post, idx) => (
            <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
          ))}
        </Box>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage

// ___________________________________________________________________

const posts = [
  {
    id: 1,
    title: 'ChainLink to the moon!',
    body: 'I\'ve had a tough week and I\'m looking to get wasted and hit up some babes.',
    votes: randomizeVotes(),
    category: 'Rolla',
    user: 'kschoon'
  },
  {
    id: 2,
    title: 'Would Lightning McQueen buy car insurance or life insurance?',
    body: 'This question has been on my mind daily since I first fell in love with the Cars movies around 2006.',
    votes: randomizeVotes(),
    category: 'AskReddit',
    user: 'claymav'
  },
  {
    id: 3,
    title: 'How to get a job as a web developer?',
    body: 'I find web development incredibly fun but I\'m not sure where to go to get experience. Any ideas?',
    votes: randomizeVotes(),
    category: 'cscareerquestions',
    user: 'pdilly'
  },
  {
    id: 4,
    title: 'Just got my first cat over the weekend. Meet Skittles!',
    body: '(=ↀωↀ=)',
    votes: randomizeVotes(),
    category: 'aww',
    user: 'ramzo'
  },
];