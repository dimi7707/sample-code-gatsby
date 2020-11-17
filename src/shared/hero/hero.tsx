import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

import { HeroProps } from '@props/hero';
import getSourceImage from '@shared/utility/get-source-image';

import './hero.scss';

Hero.defaultProps = {
  color: 'text-white',
  size: 'md',
  link: undefined
};

export default function Hero({
  title, subTitle, link, size, color, backgroundColor, backgroundImage
}: HeroProps): React.ReactElement {
  let styleHero = backgroundColor;

  if (backgroundImage) {
    const image = getSourceImage(backgroundImage);

    styleHero = {
      ...backgroundColor,
      backgroundImage: `url(${image.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
  }

  const heroDefaultClass = 'hero d-flex align-items-center';
  const heroContentDefaultClass = 'hero-content';
  const heroTitleDefaultClass = 'hero-title mb-2';
  const heroSubTitleDefaultClass = 'hero-subtitle';

  return (
    <div
      className={`${heroDefaultClass} ${size}`}
      style={styleHero}
    >
      <Container>
        <div className={`${heroContentDefaultClass}`}>
          <h1 className={`${heroTitleDefaultClass} ${color}`}>{title}</h1>
          <p className={`${heroSubTitleDefaultClass} ${color}`}>{subTitle}</p>

          {link && <Link to={link.link}>{link.label}</Link>}
        </div>
      </Container>
    </div>
  );
}
