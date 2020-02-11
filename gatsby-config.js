module.exports = {
  siteMetadata: {
    title: `Data Science`,
    siteName: 'Data ∩ Product',
    subtitle: 'Data Science',
    description: `The intersection of data and product.`,
    author: `Bradley Gibbs`,
    twitterHandle: '@thegyre',
  },
  pathPrefix: '/data',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
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
        icon: `src/images/mark.svg`,
      },
    },
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        siteName: 'Sitename',
        subtitle: 'Data Science',
        baseUrl: 'https://thegyre.io',
        root: __dirname,
        description: 'The intersection of data science and product management',
        githubRepo: 'https://github.com/b-gibbs/the-gyre',
        defaultVersion: '1',
        trackingId: '',
        twitterHandle: '@thegyre',
        spectrumHandle: 'data-product',
        algoliaApiKey: '59cab148337f95b35039acdbd4564515',
        algoliaIndexName: 'P3ZGBS5QDA',
        youtubeUrl: '',
        logoLink: 'https://thegyre.io',
        navConfig: {
          'Home': {
            url: 'https://www.thegyre.io',
          },
          'Product Management': {
            url: 'https://www.thegyre.io/product',
          },
          'Blog': {
            url: 'https://www.thegyre.io/blog',
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
            'about',
          ],
          Data: [
            'data/index',
            'data/lifecycle',
            'data/machine-learning',
          ],
        },
      },
    },
  ],
}
