import React from 'react';

import './layout.scss';
import '@styles/general.scss';

import Hero from '@shared/hero/hero';
import UtilityText from '@shared/utility-text/utility-text';

type HeroProps = {
  content: React.ReactElement;
};

export default function Layout({ content }: HeroProps): React.ReactElement {
  return (
    <>
      <Hero
        title="rootstack"
        subtitle="soy un subtitulo"
        backgroundImage={undefined}
        backgroundColor={{ background: 'red' }}
      />
      <div className="container">
        <UtilityText
          textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ut fugit
          repudiandae quia assumenda dolores labore, repellat modi aliquid minima consequatur
          corporis odio odit voluptatibus."
        />
        <main>{content}</main>
      </div>
    </>
  );
}
