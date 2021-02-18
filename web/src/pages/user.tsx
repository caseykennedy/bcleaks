import User from '../app'

export default User

// `src/user` is not "special", it is re-exported by `src/pages/user.js`
// and contains all the clientside dynamic App pages that we dont want to be statically generated.
// `src/pages/user.js` skips the static generation process because of `gatsby-plugin-create-client-paths`
// configured in `gatsby-config.js`
