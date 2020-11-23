import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

type ImageProviderProps = {
  fileName: string;
  alt: string;
  className: string;
};

export default function ImageProvider({ className, fileName, alt }: ImageProviderProps) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(svg)/" }
        }
      ) {
        edges {
          node {
            base
            extension
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const { node } = allFile.edges.find((edge) => edge.node.base === fileName);

  if (!node.childImageSharp && node.extension === 'svg') {
    return (
      <img className={className} src={node.publicURL} alt={alt} />
    );
  }

  return (
    <Img
      className={className}
      fluid={node.childImageSharp.fluid}
      alt={alt}
    />
  );
}
