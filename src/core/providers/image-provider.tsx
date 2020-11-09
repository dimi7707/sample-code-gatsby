import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

type imageProviderProps = {
  fileName: string;
  alt: string;
};

export default function ImageProvider({ fileName, alt }: imageProviderProps) {
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
}
