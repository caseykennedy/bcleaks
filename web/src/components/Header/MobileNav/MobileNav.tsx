// MobileNav:
// Mobile Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Text } from '../../ui'

// ___________________________________________________________________

type LinkProps = {
  item: any
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  open: boolean
}

// ___________________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  // console.log('—————|— Navigation —|—————')
  // console.log(item.subPage)

  return (
    <S.NavLink style={transition}>
      <Box className="nav-mobile-sub">
        <Link to={item.link} className="nav-mobile__link">
          {item.name}
        </Link>
      </Box>
    </S.NavLink>
  )
}

const MobileNav: React.FC<NavLinksProps> = ({ open }) => {
  const navTransitions = useTransition(open ? data : [], item => item.name, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    trail: 160,
    unique: true
  })
  return (
    <S.MobileNav>
      {navTransitions.map(({ item, key, props }) => (
        <NavLink
          key={key}
          transition={props}
          handleExitOnClick={() => close()}
          item={item}
        />
      ))}
    </S.MobileNav>
  )
}

export default MobileNav

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
]
