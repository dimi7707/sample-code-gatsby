import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SEO from '@core/seo/seo';
import IntroText from '@shared/text/intro-text';
import Card from '@shared/card/card';
import { CardProps } from '@props/card';
import GraphqlDataServices from '@core/services/graphql-data-services';

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

export default function IndexPage() {
  const dataService = new GraphqlDataServices();
  const data = dataService.getAllLandingPages();

  return (
    <div className="mb-5">
      <SEO title="Home" />

      <Container>
        <h3 className="text-center">{data.allNodeArticle.nodes[0].title}</h3>
        <IntroText
          text={data.allNodeArticle.nodes[0].body.processed}
        />
        <Row>
          {cardsContent}
        </Row>
      </Container>
    </div>
  );
}
