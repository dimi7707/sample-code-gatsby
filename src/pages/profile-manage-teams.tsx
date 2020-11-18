import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import Banner from '@shared/banner/banner';
import Card from '@shared/card/card';
import Box from '@shared/box/box';
import BannerAdvertising from '@shared/banner/banner-advertising';
import Footer from '@core/layout/footer/footer';

export default function ProfileManageTeams(): React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
  is most convenient for your business. From managing a project from start to finish to 
  providing the necessary talent to complete your team, we guarantee the most efficient
  workflow and exceptional results.`;
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Hero
        title="Managed Teams"
        subTitle={`Work with an autonomous team 
        of experts and make your project 
        a reality 
        `}
        backgroundImage="hero-for-profile-manage-teams.png"
        backgroundColor={{ background: 'transparent' }}
        size="lg"
        color="black"
      />
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
      <Container className="pb-4 mb-4">
        <h4 className="text-center mt-4 pt-4">Areas of expertise</h4>
        <div className="d-flex justify-content-between flex-wrap mt-4 pt-4">
          <Box iconType title="Automatation" image="automatation.png" />
          <Box iconType title="Automatation" image="automatation.png" />
          <Box iconType title="Automatation" image="automatation.png" />
          <Box iconType title="Automatation" image="automatation.png" />
        </div>
        <div className="d-flex justify-content-between flex-wrap mt-4 pt-4">
          <Box iconType title="Automatation" image="automatation.png" />
          <Box iconType title="Automatation" image="automatation.png" />
          <Box iconType title="Automatation" image="automatation.png" />
          <Box iconType title="Automatation" image="automatation.png" />
        </div>
      </Container>
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
