import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import PingPong from '@shared/ping-pong/ping-pong';
import Banner from '@shared/banner/banner';
import Card from '@shared/card/card';
import Box from '@shared/box/box';
import WYSWYG from '@shared/wyswyg/wyswyg';
import QuoteTypeTextSlider from '@shared/quote-type-text-slider/quote-type-text-slider';
import BannerAdvertising from '@shared/banner/banner-advertising';
import Footer from '@core/layout/footer/footer';


export default function SuccessStoriesProfilePage(): React.ReactElement {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Hero
        title="Access"
        subTitle={`Modern platforms & ease of use.`}
        backgroundImage="hero-for-success-stories.png"
        backgroundColor={{ background: 'transparent' }}
      />
      <Container className="mt-4">
      <h4>Client</h4>

      </Container>
    </div>
  );
} 
