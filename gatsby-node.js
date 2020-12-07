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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type LandingPage implements Node {
      joinedAt: Date
    }
  `
  createTypes(typeDefs)
};
