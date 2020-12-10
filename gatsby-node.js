/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
        '@core': path.resolve(__dirname, 'src/core'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@models': path.resolve(__dirname, 'src/shared/models'),
        '@props': path.resolve(__dirname, 'src/shared/props')
      }
    }
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const serviceTemplate = path.resolve(`src/templates/service.js`)
  return graphql(
    `
      {
        services: allNodeService {
          edges {
            node {
              body {
                processed
              }
              id
              path {
                langcode
                alias
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.services.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: serviceTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
};
