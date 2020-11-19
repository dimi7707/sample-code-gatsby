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


export default function SuccessStoriesPage(): React.ReactElement {
  const textForIntro = `Working with the latest technologies and methodologies, we create
    unique solutions that adapt perfectly to your particular needs. Check out our case
    studies and discover how we can help you with your digital journey`
  
    const quoteTypeTextList = [
      {
        quote: `“Thanks so much for the awesome customer service. So many companies, large and
          small, have a lot to learn from you. Great job!”`,
        author: 'Akyra Toriyama',
        position: 'Executive producer'
      },
      {
        quote: `“Thanks so much for the awesome customer service. So many companies, large and
          small, have a lot to learn from you. Great job!”`,
        author: 'Akyra Toriyama',
        position: 'Executive producer'
      },
      {
        quote: `“Thanks so much for the awesome customer service. So many companies, large and
          small, have a lot to learn from you. Great job!”`,
        author: 'Akyra Toriyama',
        position: 'Executive producer'
      }
    ];

  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Hero
        title="Success Stories"
        subTitle={`We have developed innovative & custom-made 
        solutions for our clients around the world.         
        `}
        backgroundImage="hero-for-success-stories.png"
        backgroundColor={{ background: 'transparent' }}
      />
      <div className="mt-4 pt-4 pb-4">
        <IntroText text={textForIntro} />
      </div>
      <PingPong 
        title="Tourism Authority Panama App"
        textContent={`The Tourism Authority of Panama or ATP is the governmental institution
          in charge of managing everything related to tourism within the country, and
          promoting the typical tourist sites and activities of Panama. And as such, they
          have a great weight on their shoulders, when it comes to national tourism.
        `}
        image="img-test-ping-pong.jpg"
        imageToRight
        buttonText="See more >>"
      />
      <Container>
        <Row className="mt-4 pt-4">
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
          <Col xs={12} md={3}>
            <Card
              title="Minfo"
              description="We built an innovative web app and a responsive website for KYC laws"
              image="img-for-succes-stories.png"
              link="/"
            />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="text-center">
            <Button variant="secondary">Load more</Button>
          </Col>
        </Row>
      </Container>
      <QuoteTypeTextSlider
        list={quoteTypeTextList}
      />
      <div className="pt-4 mt-4">
        <WYSWYG
          title="Some of the industries we work with"
          textContent={`We develop custom software outsourcing solutions across all
            industries—anything from robust platforms, interactive applications, automation
            systems to large-scale implementations and much more. Rootstack ensures your business
            leverages unique technology solutions to lead the market and exceed client
            expectation
          `}
          image="wyswyg-success-stories.png"
          imageToRight
          backgroundColor={{ background: 'transparent'}}
        />
      </div>
      <BannerAdvertising
        title="Ready to execute effective technology solutions?"
        buttonText="Let’s talk !"
        colorTitle={{ color: 'white' }}
        backgroundImage="test-banner-advertising.png"
        backgroundColor={{ background: 'transparent' }}
      />
      <Footer />
    </div>
  );
  
}
