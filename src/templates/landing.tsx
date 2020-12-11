import React from 'react';
import { graphql } from 'gatsby';

const LandingTemplate = ({ data }) => (
  <div>
    I am landing page template {data.landingPage.body.processed}
  </div>
);

export default LandingTemplate;

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
