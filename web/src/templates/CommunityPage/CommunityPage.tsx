// Community Page:

// ___________________________________________________________________

import React, { useState } from 'react'

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

const CommunityPage = () => {
  const posts = usePost()

  // Filter posts
  const [items, setItems] = useState(posts)
  // const [pillActive, setPillActive] = useState(false)
  const setFilteredItems = (category: string) => {
    setItems(
      posts.filter(item => {
        if (item.node.categories[0].title.includes(category)) {
          return item
        }
        if (
          item.node.categories[1] &&
          item.node.categories[1].title.includes(category)
        ) {
          return item
        }
      })
    )
  }
  // Reset / Show all
  const resetFilteredItems = () => {
    setItems(posts)
  }
  return (
    <S.CommunityPage>
      <Section>
        <Box width={[1, 1, 6 / 8]}>
          {items.map(({ node: post }, idx) => (
            <CardLeak aspectRatio={4 / 3} post={post} key={idx} />
          ))}
        </Box>
      </Section>
    </S.CommunityPage>
  )
}

export default CommunityPage
