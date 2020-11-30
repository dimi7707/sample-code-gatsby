import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '@core/seo/seo';
import IntroText from '@shared/text/intro-text';
import Card from '@shared/card/card';
import { CardProps } from '@props/card';

import '@styles/base.scss';

const entries = [
  {
    title: 'I am card 1',
    description: 'I am card description',
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
        <h3 className="text-center">I am test...</h3>
        <IntroText
          text="lorem ipsum.... this is a lorem ipsum"
        />
        <Row>
          {cardsContent}
        </Row>
      </Container>
    </div>
  );
}
