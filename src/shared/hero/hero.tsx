import React from 'react';

import ImageProvider from '@core/providers/image-provider/image-provider';

import './hero.scss';

type HeroProps = {
  title: string,
  subtitle: string,
  backgroundImage: string,
  backgroundColor: object,
};

export default function Hero({
  title, subtitle, backgroundColor, backgroundImage
}: HeroProps) {
  return (
    <div className="hero" style={backgroundColor}>
      <div className="hero-container container">
        {backgroundImage && <ImageProvider fileName={backgroundImage} alt={title} />}
        <div className="hero-content d-flex flex-column justify-content-center">
          <h1 className="hero-title mb-2">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
