import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

type ImageProviderProps = {
  fileName: string;
  alt: string;
  className: string;
};

export default function ImageProvider({ className, fileName, alt }: ImageProviderProps) {
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

  return (<Img className={className} fluid={fluid} alt={alt} />);
}
