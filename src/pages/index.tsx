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
      <h1>Demo 19 - 11 - 2020</h1>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/profile-manage-teams">Profile Manage teams</a>
        </li>
        <li>
          <a href="/profile-staff-augmentation">Profile staff augmentation</a>
        </li>
        <li>
          <a href="/profile-project-based">Profile project based</a>
        </li>
        <li>
          <a href="/success-stories">Success stories</a>
        </li>
      </ul>
    </div>
  );
}
