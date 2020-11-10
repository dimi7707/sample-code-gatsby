import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './hero.scss';

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundColor: object;
};

const getSourceImage = (fileName: string) => {
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
};

export default function Hero({
  title, subtitle, backgroundColor, backgroundImage
}: HeroProps): React.ReactElement {
  let styleHero = backgroundColor;

  if (backgroundImage) {
    const image = getSourceImage(backgroundImage);

    styleHero = {
      ...backgroundColor,
      backgroundImage: `url(${image.src})`
    };
  }

  return (
    <div
      className="hero"
      style={styleHero}
    >
      <div className="hero-container container">
        <div className="hero-content d-flex flex-column justify-content-center">
          <h1 className="hero-title mb-2 text-white">{title}</h1>
          <p className="hero-subtitle text-white">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
