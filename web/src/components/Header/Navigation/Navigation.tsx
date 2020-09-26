// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import Icon from '../../Icons'
import { Box } from '../../ui'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Link
          to={item.link}
          className="nav-link__title"
          activeClassName="active"
          partiallyActive={true}
          key={idx}
        >
          {item.name}
        </Link>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'videos',
    link: '/videos'
  },
  {
    name: 'articles',
    link: '/articles'
  },
  {
    name: 'community',
    link: '/community'
  },
  {
    name: 'store',
    link: '/store'
  }
  // {
  //   name: 'implants',
  //   subPage: [
  //     {
  //       name: 'External Fixation',
  //       link: '/implants/external-fixation'
  //     },
  //     {
  //       name: 'Hip Fractures',
  //       link: '/implants/hip-fractures'
  //     },
  //     {
  //       name: 'IM Nails',
  //       link: '/implants/im-nails'
  //     },
  //     {
  //       name: 'Plates and Screws',
  //       link: '/implants/plates-and-screws'
  //     },
  //     {
  //       name: 'Sports Medicine',
  //       link: '/implants/sports-medicine'
  //     },
  //   ]
  // },
]
