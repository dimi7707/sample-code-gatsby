import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from '@shared/hero/hero';
import UtilityText from '@shared/utility-text/utility-text';
import Card from '@shared/card/card';

import { CardProps } from '@props/card';

import '@styles/general.scss';
import './layout.scss';

type HeroProps = {
  content: React.ReactElement;
};

const entries = [
  {
    title: 'Soy el card 1',
    description: 'Soy el description del card',
    image: 'gatsby-astronaut.png',
    link: '/'
  }
] as CardProps[];

const cardsContent = entries.map((entry: CardProps, index: number) => (
  <Col key={index.valueOf()} xs={12} md={4}>
    <Card
      title={entry.title}
      description={entry.description}
      image={entry.image}
      link={entry.link}
    />
  </Col>
));

export default function Layout({ content }: HeroProps): React.ReactElement {
  return (
    <div className="mb-5">
      <Hero
        title="rootstack"
        subTitle="soy un subtitulo"
        backgroundImage={undefined}
        backgroundColor={{ background: 'red' }}
      />

      <div className="container">
        <UtilityText
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ut fugit
          repudiandae quia assumenda dolores labore, repellat modi aliquid minima consequatur
          corporis odio odit voluptatibus."
        />
        <Container>
          <Row>
            {cardsContent}
          </Row>
        </Container>
        <main>{content}</main>
      </div>
    </div>
  );
}
