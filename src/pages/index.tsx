import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import Card from '@shared/card/card';
import WYSWYG from '@shared/wyswyg/wyswyg';
import Footer from '@core/layout/footer/footer';

export default function IndexPage(): React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
  is most convenient for your business. From managing a project from start to finish to
  providing the necessary talent to complete your team, we guarantee the most efficient
  workflow and exceptional results.`;
  return (
    <div className="servicepage">
      <TopBar
        currentLanguage="en"
        urlCurrentVersion="/"
        urlTranslateVersion="/"
      />
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
      <div className="mt-4 pt-4 pb-4">
        <IntroText sideDecoration text={textForIntro} />
      </div>
      <div className="pt-4 mt-4">
        <WYSWYG
          title="Benefits"
          textContent={`Do you need a team of qualified experts to lead and execute your next
            technology project? Rootstack quickl
            y takes care of the selection process from start
            to finish puts together the team that meets your specific tech profile requirements.
            This way, you can execute your project the way you need it with teams that work
            autonomously but communicate on your schedule. Access English-fluent talent and senior
            talent that works efficiently to deliver high-quality solutions
          `}
          image="img-profile-manage.png"
          imageToRight
          backgroundColor={{ background: 'transparent' }}
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
      <Footer />
    </div>
  );
}
