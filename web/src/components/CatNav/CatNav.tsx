// Category Nav Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

import usePostCategory from '../../hooks/usePostCategory'

// ___________________________________________________________________

type Props = {
  postType: 'articles' | 'videos'
}

const CatNav: React.FC<Props> = ({ postType }) => {
  const categories = usePostCategory()
  return (
    <S.CatNav px={theme.gutter.axis}>
      <Box className="inner">
        <Link to={`/${postType}`} partiallyActive={true}>
          <Box mr={6} className="criteria">
            All
          </Box>
        </Link>

        {categories.map((item, idx) => (
          <Link
            to={`/${postType}/${item.slug.current}`}
            partiallyActive={true}
            key={idx}
          >
            <Box mr={6} className="criteria">
              {item.title}
            </Box>
          </Link>
        ))}
      </Box>
    </S.CatNav>
  )
}

export default CatNav
