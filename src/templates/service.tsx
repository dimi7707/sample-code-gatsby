import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

export default function ServiceTemplate({ data }) {
  return (
    <Container>
      <h1>I am inside Container</h1>
      <p>{data.service.body.processed}</p>
    </Container>
  );
}

export const query = graphql`
  query($id: String!) {
    service: nodeService(id: { eq: $id }) {
      body {
        processed
      }
      path {
        alias
        langcode
        pid
      }
    }
  }
`;
