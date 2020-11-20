import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import HeroSlider from '@shared/hero-slider/hero-slider';
import IntroText from '@shared/text/intro-text';
import CardWithOutBorder from '@shared/card/card--without-border';
import Card from '@shared/card/card';
import Banner from '@shared/banner/banner';
import BannerVideo from '@shared/banner/banner-video';
import QuoteTypeTextSlider from '@shared/quote-type-text-slider/quote-type-text-slider';
import BannerAdvertising from '@shared/banner/banner-advertising';
import Footer from '@core/layout/footer/footer';

export default function HomePage(): React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
    is most convenient for your business. From managing a project from start to finish to 
    providing the necessary talent to complete your team, we guarantee the most efficient
    workflow and exceptional results.`;
  const heroList = [
    {
      title: 'With deep-rooted industry expertise',
      subTitle: 'We know how to revolutionize your technology needs with unique software solutions.',
      backgroundImage: 'hero-for-home.jpg',
      backgroundColor: { backgroundColor: 'transparent' },
      size: 'lg'
    },
    {
      title: 'With deep-rooted industry expertise',
      subTitle: 'We know how to revolutionize your technology needs with unique software solutions.',
      backgroundImage: 'hero-for-home.jpg',
      backgroundColor: { backgroundColor: 'transparent' },
      size: 'lg'
    },
    {
      title: 'With deep-rooted industry expertise',
      subTitle: 'We know how to revolutionize your technology needs with unique software solutions.',
      backgroundImage: 'hero-for-home.jpg',
      backgroundColor: { backgroundColor: 'transparent' },
      size: 'lg'
    }
  ];
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
      <HeroSlider list={heroList} />
      <h3 className="text-center mt-4 pt-4">We Deliver unparalleled solutions</h3>
      <div className="pt-4 mx-auto">
        <IntroText sideDecoration text={textForIntro} />
      </div>
      <h4 className="text-center mt-4 pt-4">Services</h4>
      <div className="pt-4 mx-auto">
        <IntroText text="We deliver world-class projects the way you need them." />
      </div>
      <Container className="mb-4 pb-4">
        <h4 className="text-center pb-4 pt-4 mt-4">What we offer</h4>
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
      <BannerVideo
        title="A+ Teams"
        description={`Our software engineers are creative, innovative and experts in their
          fields. We work with a diverse group of tech profiles certified in the latest
          technologies and methodologies. Our A+ talent truly sets us apart.`}
        urlVideo="https://www.youtube.com/embed/dHDXPW9heJo"
        backgroundColor={{ background: 'transparent' }}
      />
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
      <Container className="mt-4 pt-4 pb-4 mb-4">
        <Banner
          image="img-test-banner.jpg"
          altImage="Banner image"
          text="With Rootstack, work with a 
          team of highly experienced engineers."
          imageToLeft
          buttonText="Let's to talk"
        />
      </Container>
      <QuoteTypeTextSlider
        list={quoteTypeTextList}
      />
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
