import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '@core/seo/seo';

import IntroText from '@shared/text/intro-text';
import Card from '@shared/card/card';

import { CardProps } from '@props/card';

import '@styles/base.scss';

const entries = [
  {
    title: 'Soy el card 1',
    description: 'Soy el description del card',
    image: 'gatsby-astronaut.png',
    link: '/'
  }
] as CardProps[];

const cardsContent = entries.map((entry: CardProps, index: number) => (
  <Col
    key={index.valueOf()}
    xs={12}
    md={4}
  >
    <Card
      title={entry.title}
      description={entry.description}
      image={entry.image}
      link={entry.link}
    />
  </Col>
));

export default function IndexPage(): React.ReactElement {
  return (
    <div className="mb-5">
      <SEO title="Home" />

      <Container>
        <h3 className="text-center">We Deliver</h3>
        <IntroText
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ut fugit
          repudiandae quia assumenda dolores labore, repellat modi aliquid minima consequatur
          corporis odio odit voluptatibus."
        />
        <Row>
          {cardsContent}
        </Row>
      </Container>
    </div>
  );
}
