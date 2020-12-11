import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

LandingTemplate.propTypes = {
  data: PropTypes.string.isRequired
};

export default function LandingTemplate({ data }) {
  return (
    <div>
      I am landing page template
      {' '}
      {data.landingPage.body.processed}
    </div>
  );
}

export const query = graphql`
  query($id: String!) {  
    landingPage: nodeLandingPage(id: { eq: $id }) {
      id
      body {
        processed
        summary
      }
      path {
        alias
      }
    }
  }
`;
