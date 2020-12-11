import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import CardWithOutBorder from '@shared/card/card--without-border';
import Card from '@shared/card/card';
import Box from '@shared/box/box';
import Banner from '@shared/banner/banner';
import BannerForm from '@shared/banner/banner-form';
import BannerVideo from '@shared/banner/banner-video';
import Footer from '@core/layout/footer/footer';

import '@styles/base.scss';
import './service.scss';

export default function ServicePage(): React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
  is most convenient for your business. From managing a project from start to finish to 
  providing the necessary talent to complete your team, we guarantee the most efficient
  workflow and exceptional results.`;
  const boxesAreasExpertise = [
    {
      title: 'Automatation',
      image: 'mobile-app.svg'
    },
    {
      title: 'Web developer',
      image: 'flow.svg'
    },
    {
      title: 'Automatation',
      image: 'mobile-app.svg'
    },
    {
      title: 'Web developer',
      image: 'mobile-app.svg'
    }
  ];
  return (
    <div className="main-page-service">
      <TopBar />
      <NavigationBar />
      <Hero
        title="Services"
        subTitle="We can help you build your digital journey"
        backgroundImage="imagen-for-hero.png"
        backgroundColor={{ background: 'transparent' }}
      />
      <div className="mt-4 pt-4 mx-auto">
        <IntroText sideDecoration text={textForIntro} />
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
      <Container>
        <h4 className="text-center mt-4 pt-4">Areas of expertise</h4>
        <div className="d-flex justify-content-between flex-wrap mt-4 pt-4">
          {
            boxesAreasExpertise.map((box) => {
              return <Box iconType title={box.title} image={box.image} hasBorder />   
            })
          }
        </div>
        <div className="d-flex justify-content-between flex-wrap mt-4 pt-4">
          {
            boxesAreasExpertise.map((box) => {
              return <Box iconType title={box.title} image={box.image} hasBorder />   
            })
          }
        </div>
      </Container>
      <Container className="mt-4 pt-4">
        <Banner
          image="img-test-banner.jpg"
          altImage="Banner image"
          text="With Rootstack, work with a
            team of highly experienced engineers."
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
      <BannerVideo
        title="What set us apart"
        description="Para lograr que estas transacciones sean realizadas debemos integrar
        su sitio de comercio electrónico
        con un gateway de pago."
        urlVideo="https://www.youtube.com/embed/QFaFIcGhPoM"
        backgroundColor={{ background: '#f9fafb' }}
      />
      <BannerForm
        title="Let's work together!"
        subtitle="We are ready to help you."
        backgroundColor={{ background: '#f9fafb' }}
        buttonText="Send"
      />
      <Footer />
    </div>
  );
}
