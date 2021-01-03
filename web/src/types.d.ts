// TODO: More consistent naming / nesting

type ImageShape = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64: string
  tracedSVG: string
  srcWebp: string
  srcSetWebp: string
}

// Post shape
// ___________________________________________________________________

type PostShape = {
  posts: {
    edges: PostEdges[]
  }
}

type PostEdges = {
  node: PostQuery
}

type PostData = {
  post: PostQuery
}

type PostQuery = {
  title: string
  _rawExcerpt: string
  _rawBody: string
  _id: string
  publishedAt: string
  slug: {
    current: string
  }
  tags: {
    tag: string
  }[]
  figure: {
    alt: string
    asset: {
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
    caption: string
  }
  categories: {
    title: string
  }[]
  authors: PostAuthor
}

type PostAuthor = {
  name: string
  role: string
  avatar: {
    asset: {
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
}

type PostContextShape = {
  pageContext: {
    post: PostQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}
