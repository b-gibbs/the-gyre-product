const queries = require('./src/utils/algolia');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Data ∩ Product',
    siteName: 'Product',
    description: `The intersection of data science and product management.`,
    author: `Bradley Gibbs`,
    twitterHandle: '@thegyre',
  },
  pathPrefix: '/product',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
      },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dnp-docs`,
        short_name: `dnp`,
        start_url: `/`,
        background_color: `#0E2339`,
        theme_color: `#0E2339`,
        display: `minimal-ui`,
        icon: `src/images/dp-logo-512.svg`,
      },
    },
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        subtitle: 'Product Management',
        baseUrl: 'https://thegyre.io',
        root: __dirname,
        description: 'The intersection of data science and product management',
        githubRepo: 'https://github.com/b-gibbs/the-gyre',
        defaultVersion: '1',
        trackingId: '',
        twitterHandle: 'in_the_gyre',
        spectrumHandle: 'data-product',
        algoliaApiKey: '',
        algoliaIndexName: '',
        youtubeUrl: '',
        logoLink: 'https://thegyre.io',
        navConfig: {
          'Home': {
            url: 'https://www.thegyre.io',
          },
          'Data Science': {
            url: 'https://www.thegyre.io/data',
          },
          'Blog': {
            url: 'https://www.thegyre.io/blog',
          },
          'Resources': {
            url: 'https://www.thegyre.io/resources',
          },
          Github: {
            url: 'https://github.com/b-gibbs/the-gyre',
          },
        },
        footerNavConfig: {

        },
        sidebarCategories: {
          null: [
            'index',
          ],
          Lifecycle: [
            'lifecycle/index',
          ],
          Tools: [
            'tools/index',
          ],
          Resources: [
            '[Recommended Reading](https://thegyre.io/resources/category/product)',
          ],
        },
      },
    },
  ],
}
