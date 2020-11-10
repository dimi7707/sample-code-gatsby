import React from 'react';

import './layout.scss';
import '@styles/general.scss';

import Hero from '@shared/hero/hero';
import Card from '@shared/card/card';
import { Container, Row, Col } from 'react-bootstrap';

type HeroProps = {
  content: React.ReactElement;
};

export default function Layout({ content }: HeroProps): React.ReactElement {
  const cards = [
    {
      id: 1,
      title: 'Soy el card 1'
    },
    {
      id: 2,
      title: 'Soy el card 2'
    },
    {
      id: 3,
      title: 'Soy el card 3'
    }
  ];
  const cardsContent = cards.map((cardElement) => (
    <Col key={cardElement.id} xs={12} md={4}>
      <Card
        title={cardElement.title}
        description="Soy el description del card"
        image="gatsby-astronaut.png"
        link="/"
      />
    </Col>
  ));
  return (
    <>
      <div>
        <Hero
          title="rootstack"
          subtitle="soy un subtitulo"
          backgroundImage={undefined}
          backgroundColor={{ background: 'red' }}
        />
        <Container>
          <Row>
            {cardsContent}
          </Row>
        </Container>
        <main>{content}</main>
      </div>
    </>
  );
}
