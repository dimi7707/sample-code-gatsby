import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import Card from '@shared/card/card';

export default function ComponentIdentifier(type: string, id: string, mainContent: any) {
  const componentData = mainContent.filter((content) => content.id === id)[0];
  switch (type) {
    case 'Hero':
      return (
        <Hero
          key={id}
          title={componentData.field_pg_title}
          subTitle={componentData.field_pg_subtitle}
          backgroundImage="hero-for-profile-manage-teams.png"
          backgroundColor={{ background: 'transparent' }}
          size="lg"
          color="#000000"
        />
      );
    case 'Intro text':
      return (
        <div className="mt-4 pt-4 pb-4" key={id}>
          <IntroText
            sideDecoration
            text={componentData.field_pg_wysiwyg.value}
          />
        </div>
      );
    case 'Cards':
      return (
        <Container className="mt-4 pt-4 mb-4 pb-4" key={id}>
          <h4 className="text-center pb-4">{componentData.field_pg_title}</h4>
          <Row>
            {componentData.relationships.field_pg_card.map(
              (contentForCard, index) => (
                <Col xs="12" md="3" key={`card-${index * 2}`}>
                  <Card
                    title={contentForCard.field_pg_title}
                    description={contentForCard.field_pg_wysiwyg.value}
                    image="img-for-succes-stories.png"
                    link="/"
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      );
    default:
      return (<span>Dummy component! It is just a test</span>);
  }
}
