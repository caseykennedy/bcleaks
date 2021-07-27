// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'
import * as S from './styles.scss'

// Icons
import Carat from './SVG/Carat'
import Comment from './SVG/Comment'
import Document from './SVG/Document'
import Download from './SVG/Download'
import ExternalLink from './SVG/ExternalLink'
import Facebook from './SVG/Facebook'
import GridView from './SVG/GridView'
import Hamburger from './SVG/Hamburger'
import Instagram from './SVG/Instagram'
import Link from './SVG/Link'
import ListView from './SVG/ListView'
import Logout from './SVG/Logout'
import NextArrow from './SVG/NextArrow'
import Pdf from './SVG/Pdf'
import Plus from './SVG/Plus'
import Pin from './SVG/Pin'
import Share from './SVG/Share'
import Twitter from './SVG/Twitter'
import Youtube from './SVG/Youtube'

// ___________________________________________________________________

type Props = {
  className?: string
  color?: string
  fas?: string
  name: string
}

const Icon: React.FC<Props> = ({ className, color, fas, name }) => {
  switch (name) {
    case 'arrow':
      return (
        <S.Icon color={color} className={className}>
          <NextArrow />
        </S.Icon>
      )
    case 'carat':
      return (
        <S.Icon color={color} className={className}>
          <Carat />
        </S.Icon>
      )
    case 'comment':
      return (
        <S.Icon color={color} className={className}>
          <Comment />
        </S.Icon>
      )
    case 'document':
      return (
        <S.Icon color={color} className={className}>
          <Document />
        </S.Icon>
      )
    case 'download':
      return (
        <S.Icon color={color} className={className}>
          <Download />
        </S.Icon>
      )
    case 'external-link':
      return (
        <S.Icon color={color} className={className}>
          <ExternalLink />
        </S.Icon>
      )
    case 'facebook':
      return (
        <S.Icon color={color} className={className}>
          <Facebook />
        </S.Icon>
      )
    case 'gridView':
      return (
        <S.Icon color={color} className={className}>
          <GridView />
        </S.Icon>
      )
    case 'hamburger':
      return (
        <S.Icon color={color} className={className}>
          <Hamburger />
        </S.Icon>
      )
    case 'instagram':
      return (
        <S.Icon color={color} className={className}>
          <Instagram />
        </S.Icon>
      )
    case 'link':
      return (
        <S.Icon color={color} className={className}>
          <Link />
        </S.Icon>
      )
    case 'listView':
      return (
        <S.Icon color={color} className={className}>
          <ListView />
        </S.Icon>
      )
    case 'login':
      return (
        <S.Icon color={color} className={className}>
          <Logout />
        </S.Icon>
      )
    case 'logout':
      return (
        <S.Icon color={color} className={className}>
          <Logout />
        </S.Icon>
      )
    case 'pdf':
      return (
        <S.Icon color={color} className={className}>
          <Pdf />
        </S.Icon>
      )
    case 'plus':
      return (
        <S.Icon color={color} className={className}>
          <Plus />
        </S.Icon>
      )
    case 'pin':
      return (
        <S.Icon color={color} className={className}>
          <Pin />
        </S.Icon>
      )
    case 'share':
      return (
        <S.Icon color={color} className={className}>
          <Share />
        </S.Icon>
      )
    case 'twitter':
      return (
        <S.Icon color={color} className={className}>
          <Twitter />
        </S.Icon>
      )
    case 'youtube':
      return (
        <S.Icon color={color} className={className}>
          <Youtube />
        </S.Icon>
      )
    default:
      return (
        <S.Icon color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </S.Icon>
      )
  }
}

export default Icon

// ___________________________________________________________________
