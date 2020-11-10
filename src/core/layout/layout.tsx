import React from 'react';

import './layout.scss';

import Hero from '@shared/hero/hero';

type HeroProps = {
  content: React.ReactElement;
};

export default function Layout({ content }: HeroProps): React.ReactElement {
  return (
    <>
      <div>
        <Hero
          title="rootstack"
          subtitle="soy un subtitulo"
          backgroundImage={undefined}
          backgroundColor={{ background: 'red' }}
        />
        <main>{content}</main>
      </div>
    </>
  );
}
