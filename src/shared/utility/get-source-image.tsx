import { graphql, useStaticQuery } from 'gatsby';

export default function getSourceImage(fileName: string) {
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

  const { fluid } = allImageSharp.nodes.find((node) => node.fluid.originalName === fileName);

  return fluid;
}
