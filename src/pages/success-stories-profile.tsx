import React from 'react';
import {
  Container
} from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';

export default function SuccessStoriesProfilePage(): React.ReactElement {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Hero
        title="Access"
        subTitle="Modern platforms & ease of use."
        backgroundImage="hero-for-success-stories.png"
        backgroundColor={{ background: 'transparent' }}
      />
      <Container className="mt-4">
        <h4>Client</h4>

      </Container>
    </div>
  );
}
