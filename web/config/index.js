const settings = require.resolve('../src/hooks/useSiteSettings.tsx')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  // Banner
  // banner: settings.banner.asset.fluid.src,
  banner: '',
  

  siteTitle: settings.title, // Navigation and Site Title
  siteTitleAlt: settings.titleAlt, // Alternative Site title for SEO
  siteTitleShort: settings.titleShort, // short_name for manifest
  siteHeadline: settings.headline, // Headline for schema.org JSONLD
  siteUrl: 'http://bcleaks.com', // Domain of your site. No trailing slash!
  siteLanguage: settings.language, // Language Tag on <html> element
  siteLogo: settings.logo, // Used for SEO and manifest
  siteDescription: settings.description,

  author: settings.author, // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: settings.userTwitter, // Twitter Username
  ogSiteName: settings.ogSiteName, // Facebook Site Name
  ogLanguage: settings.ogLanguage, // og:language

  googleTagID: 'GTM-',

  // Manifest and Progress color
  themeColor: settings.themeColor,
  backgroundColor: settings.backgroundColor
}
