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

// Fauna DB Post shape
// ___________________________________________________________________

type FaunaDataQuery = {
  data: FaunaDbPostShape
  ref: any
}

type FaunaDbPostData = {
  post: FaunaDbPostQuery
}

type VoterShape = { user: string; vote: number }

interface FaunaDbPostShape {
  author: string
  category: string
  createdOn: string
  linkUrl: string
  postType: string
  slug: string
  text: string
  title: string
  voters: VoterShape[]
  votes: number
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
  _rawExcerpt: string
  _rawBody: string
  _id: string
  authors: PostAuthor
  categories: {
    title: string
  }[]
  featured: boolean
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
  title: string
  publishedAt: string
  slug: {
    current: string
  }
  tags: {
    tag: string
  }[]
  sources: {
    title
    url
  }[]
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

// Video post shape
// ___________________________________________________________________

type VideoShape = {
  videos: {
    edges: PostEdges[]
  }
}

type VideoEdges = {
  node: PostQuery
}

type VideoData = {
  post: PostQuery
}

type VideoQuery = {
  videoUrl: string
  title: string
  _rawBody: string
  _id: string
  publishedAt: string
  slug: {
    current: string
  }
  tags: {
    tag: string
  }[]
  sources: {
    title
    url
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
  }
  categories: {
    title: string
  }[]
  authors: PostAuthor
}

type VideoAuthor = {
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

type VideoContextShape = {
  pageContext: {
    post: VideoQuery
    prev: {
      title: string
      slug: {
        current: string
      }
    }
    next: {
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Netlify Identity User Shape
// ___________________________________________________________________

type Token = {
  access_token: string
  expires_at: string | number
  expires_in: string | number
  refresh_token: string
  token_type: string
}

type UserShape = {
  aud: string
  audience?: any
  confirmed_at: string
  created_at: string
  updated_at: string
  invited_at: string
  recovery_sent_at: string
  email: string
  id: string
  role: string
  token?: Token
  url: string
  user_metadata: {
    avatar_url: string
    full_name: string
  }
}
