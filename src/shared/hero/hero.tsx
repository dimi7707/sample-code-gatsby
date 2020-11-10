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
    <div className={backgroundImage ? 'hero position-relative' : 'hero'} style={backgroundColor}>
      {backgroundImage && <ImageProvider fileName={backgroundImage} alt={title} />}
      <div className={backgroundImage ? 'hero-container container position-absolute' : 'hero-container container'}>
        <div className="hero-content d-flex flex-column justify-content-center">
          <h1 className="hero-title mb-2 text-white">{title}</h1>
          <p className="hero-subtitle text-white">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
