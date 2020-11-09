import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ImageProvider = ({ fileName, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1800) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const { fluid } = allImageSharp.nodes.find((n) => n.fluid.originalName === fileName);
  return (
    <figure>
      <Img fluid={fluid} alt={alt} />
    </figure>
  );
};

ImageProvider.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageProvider;
