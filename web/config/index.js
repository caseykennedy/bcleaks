const settings = require.resolve('../src/hooks/useSiteSettings.tsx')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'BC Leaks', // Navigation and Site Title
  siteTitleAlt: 'BC Leaks', // Alternative Site title for SEO
  siteTitleShort: 'BC Leaks', // short_name for manifest
  siteHeadline: 'BC Leaks', // Headline for schema.org JSONLD
  siteUrl: 'http://orthoimplantcompany.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'BC Leaks',
  author: 'Casey Kennedy', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-56063719-7',

  // Manifest and Progress color
  themeColor: '#FFC907',
  backgroundColor: '#000000',

  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  // // Banner
  // // banner: settings.banner.asset.fluid.src,
  // banner: '',

  // siteTitle: settings.title, // Navigation and Site Title
  // siteTitleAlt: settings.titleAlt, // Alternative Site title for SEO
  // siteTitleShort: settings.titleShort, // short_name for manifest
  // siteHeadline: settings.headline, // Headline for schema.org JSONLD
  // siteUrl: 'http://orthoimplantcompany.com', // Domain of your site. No trailing slash!
  // siteLanguage: settings.language, // Language Tag on <html> element
  // siteLogo: settings.logo, // Used for SEO and manifest
  // siteDescription: settings.description,

  // author: settings.author, // Author for schema.org JSONLD

  // // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: settings.userTwitter, // Twitter Username
  // ogSiteName: settings.ogSiteName, // Facebook Site Name
  // ogLanguage: settings.ogLanguage, // og:language
  // googleAnalyticsID: settings.googleAnalyticsID,

  // // Manifest and Progress color
  // themeColor: settings.themeColor,
  // backgroundColor: settings.backgroundColor
}
