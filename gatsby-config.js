const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: 'Rootstack',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'rootstack',
        fieldName: 'drupalsource',
        url: process.env.DRUPAL_GRAPHQL_API_URL,
        headers: {
          Authorization: `Basic: ${Buffer.from(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`).toString('base64')}`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['bootstrap/scss/bootstrap'],
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: process.env.BASE_URL_API,
        basicAuth: {
          username: process.env.BASIC_AUTH_USER,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
      },
    },
  ]
};
