// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// ___________________________________________________________________

import React from 'react'

import IconStyle from './styles.scss'

// Icons
// TODO: alphabetize
import Hamburger from './SVG/Hamburger'
import Facebook from './SVG/Facebook'
import Instagram from './SVG/Instagram'
import Twitter from './SVG/Twitter'
import NextArrow from './SVG/NextArrow'
import Bag from './SVG/Bag'
import Carat from './SVG/Carat'


import Document from './SVG/Document'
import Download from './SVG/Download'
import ExternalLink from './SVG/ExternalLink'

import GridView from './SVG/GridView'
import ListView from './SVG/ListView'

import Pdf from './SVG/Pdf'
import Plus from './SVG/Plus'
import Pin from './SVG/Pin'

import Youtube from './SVG/Youtube'

// ___________________________________________________________________

type Props = {
  name: string
  className?: string
  color?: string
  fas?: string
}

const Icon: React.FC<Props> = ({ name, className, color, fas }) => {
  switch (name) {
    case 'arrow':
      return (
        <IconStyle color={color} className={className}>
          <NextArrow />
        </IconStyle>
      )
    case 'carat':
      return (
        <IconStyle color={color} className={className}>
          <Carat />
        </IconStyle>
      )
    case 'document':
      return (
        <IconStyle color={color} className={className}>
          <Document />
        </IconStyle>
      )
    case 'download':
      return (
        <IconStyle color={color} className={className}>
          <Download />
        </IconStyle>
      )
    case 'external-link':
      return (
        <IconStyle color={color} className={className}>
          <ExternalLink />
        </IconStyle>
      )
    case 'facebook':
      return (
        <IconStyle color={color} className={className}>
          <Facebook />
        </IconStyle>
      )
    case 'gridView':
      return (
        <IconStyle color={color} className={className}>
          <GridView />
        </IconStyle>
      )
    case 'hamburger':
      return (
        <IconStyle color={color} className={className}>
          <Hamburger />
        </IconStyle>
      )
    case 'instagram':
      return (
        <IconStyle color={color} className={className}>
          <Instagram />
        </IconStyle>
      )
    case 'bag':
      return (
        <IconStyle color={color} className={className}>
          <Bag />
        </IconStyle>
      )
    case 'listView':
      return (
        <IconStyle color={color} className={className}>
          <ListView />
        </IconStyle>
      )
    case 'pdf':
      return (
        <IconStyle color={color} className={className}>
          <Pdf />
        </IconStyle>
      )
    case 'plus':
      return (
        <IconStyle color={color} className={className}>
          <Plus />
        </IconStyle>
      )
    case 'pin':
      return (
        <IconStyle color={color} className={className}>
          <Pin />
        </IconStyle>
      )
    case 'twitter':
      return (
        <IconStyle color={color} className={className}>
          <Twitter />
        </IconStyle>
      )
    case 'youtube':
      return (
        <IconStyle color={color} className={className}>
          <Youtube />
        </IconStyle>
      )
    default:
      return (
        <IconStyle color={color} className="ico">
          <i className={fas ? `fas fa-${name}` : `fas fab fa-${name}`} />
        </IconStyle>
      )
  }
}

export default Icon

// ___________________________________________________________________
