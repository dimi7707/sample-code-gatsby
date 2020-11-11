import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { LinkProps } from '@props/link';

import './hero.scss';

type HeroProps = {
  title: string;
  subTitle: string;
  backgroundImage: string;
  backgroundColor: object;
  size?: string;
  link?: LinkProps;
};

Hero.defaultProps = {
  size: '',
  link: undefined
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
  title, subTitle, link, size, backgroundColor, backgroundImage
}: HeroProps): React.ReactElement {
  let styleHero = backgroundColor;

  if (backgroundImage) {
    const image = getSourceImage(backgroundImage);

    styleHero = {
      ...backgroundColor,
      backgroundImage: `url(${image.src})`
    };
  }

  const heroClass = (size) ? `hero-${size}` : 'hero';

  return (
    <div
      className={heroClass}
      style={styleHero}
    >
      <Container className="hero-container">
        <div className="hero-content d-flex flex-column justify-content-center">
          <h1 className="hero-title mb-2 text-white">{title}</h1>
          <p className="hero-subtitle text-white">{subTitle}</p>
          {link && <Link to={link.link}>{link.label}</Link>}
        </div>
      </Container>
    </div>
  );
}
