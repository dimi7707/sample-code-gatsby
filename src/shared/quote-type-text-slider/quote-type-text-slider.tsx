import React from 'react';
import { Carousel } from 'react-bootstrap';

import QuoteTypeText from '@shared/text/quote-type-text';
import { QuoteTypeTextProps } from '@props/quote-type-text';
import { QuoteTypeTextList } from '@props/quote-type-text-list';

import './quote-type-text-slider.scss';

export default function QuoteTypeTextSlider({ list }: QuoteTypeTextList) : React.ReactElement {
  const carouselItems = list.map((quoteTypeTextElement: QuoteTypeTextProps, index: number) => (
    <Carousel.Item key={`carousel-${index * 2}`} interval={4000}>
      <QuoteTypeText
        quote={quoteTypeTextElement.quote}
        author={quoteTypeTextElement.author}
        position={quoteTypeTextElement.position}
      />
    </Carousel.Item>
  ));

  return (
    <Carousel className="quote-type-text-slider">{carouselItems}</Carousel>
  );
}
