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
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@models': path.resolve(__dirname, 'src/shared/models'),
        '@props': path.resolve(__dirname, 'src/shared/props')
      }
    }
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allNodePage {
          nodes {
            id
            path {
              alias
              langcode
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allNodePage.nodes.forEach(({ node }) => {

      createPage({
        path: `${node.path.langcode}${node.path.alias}`,
        component: path.resolve(`src/templates/landing.tsx`),
        context: {
          id: node.id,
        }
      });
    });
  });
};

const resolvePath = (urlAlias) => {
  const slug = urlAlias.substr(1, urlAlias.indexOf('/', 1) - 1);

  switch (slug) {
    case 'servicio':
      return 'service';
    default:
      return slug;
  }
};
