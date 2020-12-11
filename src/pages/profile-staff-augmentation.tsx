import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Footer from '@core/layout/footer/footer';

import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import Card from '@shared/card/card';
import Banner from '@shared/banner/banner';
import WYSWYG from '@shared/wyswyg/wyswyg';
import BannerAdvertising from '@shared/banner/banner-advertising';

export default function ProfileStaffAugmentation() : React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
  is most convenient for your business. From managing a project from start to finish to 
  providing the necessary talent to complete your team, we guarantee the most efficient
  workflow and exceptional results.`;
  return (
    <div className="servicepage">
      <TopBar />
      <NavigationBar />
      <Hero
        title="IT Staff Augmentation"
        subTitle="Scale your team with the expert talent you need"
        backgroundImage="hero-image-profile-staff.png"
        backgroundColor={{ background: 'transparent' }}
        size="lg"
        color="#0000"
      />
      <div className="mt-4 pt-4">
        <IntroText sideDecoration text={textForIntro} />
      </div>
      <div className="mt-4 pt-4">
        <WYSWYG
          title="Benefits"
          textContent={`Do you need a team of qualified experts to lead and execute your next
            technology project? Rootstack quickly takes care of the selection process from
            start to finish puts together the team that meets your specific tech profile
            requirements. This way, you can execute your project the way you need it with
            teams that work autonomously but communicate on your schedule. Access 
            English-fluent talent and senior talent that
            works efficiently to deliver high-quality solutions.
            With our Managed Team services, obtain high-performing teams to boost your 
            projects and work with the deep-rooted industry expertise you need to thrive in
            your digital journey.
          `}
          image="img-profile-manage.png"
          imageToRight
          backgroundColor={{ background: 'transparent' }}
        />
      </div>
      <Container className="mt-4 pb-4 pt-4">
        <Banner
          image="img-test-banner.jpg"
          altImage="Banner image"
          text="Soy el texto del banner, esto solo es una prueba del componente"
          imageToLeft
          buttonText="Let's to talk"
        />
      </Container>
      <div className="mt-4">
        <WYSWYG
          title="How it works"
          textContent={`Do you need a team of qualified experts to lead and execute your next
            technology project? Rootstack quickly takes care of the selection process from
            start to finish puts together the team that meets your specific tech profile
            requirements. This way, you can execute your project the way you need it with
            teams that work autonomously but communicate on your schedule. Access 
            English-fluent talent and senior talent that
            works efficiently to deliver high-quality solutions.
            With our Managed Team services, obtain high-performing teams to boost your 
            projects and work with the deep-rooted industry expertise you need to thrive in
            your digital journey.
          `}
          image="image-test-how-it-works.png"
          imageToRight
          backgroundColor={{ background: '#f6f6f6' }}
        />
      </div>
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
