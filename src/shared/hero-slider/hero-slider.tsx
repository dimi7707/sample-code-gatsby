import React from 'react';
import { Carousel } from 'react-bootstrap';

import Hero from '@shared/hero/hero';
import { HeroProps } from '@shared/props/hero';
import { HeroList } from '@shared/props/hero-list';

export default function HeroSlider({ list }: HeroList): React.ReactElement {
  const carouselItems = list.map((heroInfo: HeroProps, key: number) => (
    <Carousel.Item key={`carousel-${heroInfo.title}-${key * 2}`} interval={4000}>
      <Hero
        title={heroInfo.title}
        subTitle={heroInfo.subTitle}
        backgroundImage={heroInfo.backgroundImage}
        backgroundColor={heroInfo.backgroundColor}
        size={heroInfo.size}
      />
    </Carousel.Item>
  ));
  return (
    <Carousel>{carouselItems}</Carousel>
  );
}
