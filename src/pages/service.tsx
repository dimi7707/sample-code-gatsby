import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import CardWithOutBorder from '@shared/card/card--without-border';
import Card from '@shared/card/card';
import Banner from '@shared/banner/banner';
import BannerForm from '@shared/banner-form/banner-form';

import '@styles/base.scss';

export default function ServicePage(): React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
  is most convenient for your business. From managing a project from start to finish to 
  providing the necessary talent to complete your team, we guarantee the most efficient
  workflow and exceptional results.`;
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Hero
        title="Services"
        subTitle="We can help you build your digital journey"
        backgroundImage="imagen-for-hero.png"
        backgroundColor={{ background: 'red' }}
      />
      <div className="mt-4 pt-4">
        <IntroText text={textForIntro} />
      </div>
      <div className="mt-4 pt-4">
        <Container>
          <h4 className="text-center pb-4">What we offer</h4>
          <Row>
            <Col xs={12} md={4}>
              <CardWithOutBorder 
                title="Staff Augmentation"
                description="Obtain the extra talent you need to make your next technology project a success"
                image="img-card-without-border.png"
                link="/"
              />
            </Col>
            <Col xs={12} md={4}>
              <CardWithOutBorder 
                title="Staff Augmentation"
                description="Obtain the extra talent you need to make your next technology project a success"
                image="img-card-without-border.png"
                link="/"
              />
            </Col>
            <Col xs={12} md={4}>
              <CardWithOutBorder 
                title="Staff Augmentation"
                description="Obtain the extra talent you need to make your next technology project a success"
                image="img-card-without-border.png"
                link="/"
              />
            </Col>
          </Row>          
        </Container>
      </div>
      <div className="mt-4 pt-4">
        <IntroText text={textForIntro} />
      </div>
      <Container className="mt-4 pt-4">
        <Banner
          image="img-test-banner.jpg"
          altImage="Banner image"
          text="Soy el texto del banner, esto solo es una prueba del componente"
          imageToLeft
          buttonText="Let's to talk"
        />
      </Container>
      <Container className="mt-4 pt-4 mb-4 pb-4">
        <h4 className="text-center pb-4">Success stories</h4>
        <Row>
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
      </Container>
      <BannerForm 
        title="Let's work together!"
        subtitle="We are ready to help you."
        backgroundColor={{ background: '#f9fafb' }}
        buttonText="Send"
      />
    </div>
  ); 
}
