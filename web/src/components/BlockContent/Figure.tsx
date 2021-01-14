import React from 'react'
import { buildImageObj } from '../../utils/helpers'
import { imageUrlFor } from '../../utils/image-url'

const Figure = (props: any) => {
  return (
    <figure>
      {props.asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={props.alt}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}

export default Figure