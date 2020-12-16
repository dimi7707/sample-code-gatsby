import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import Banner from '@shared/banner/banner';
import Card from '@shared/card/card';
import WYSWYG from '@shared/wyswyg/wyswyg';
import BannerAdvertising from '@shared/banner/banner-advertising';
import Footer from '@core/layout/footer/footer';

export default function ProfileProjectBased(): React.ReactElement {
  const servicesPages = useStaticQuery(graphql`
    query {
      allNodeService {
        nodes {
          body {
            format
            processed
            summary
            value
          }
          relationships {
            field_content_main {
              ... on paragraph__paragraph_cards {
                id
                field_pg_title
                relationships {
                  field_pg_card {
                    field_pg_title
                    field_pg_wysiwyg {
                      value
                      processed
                    }
                    relationships {
                      field_pg_image {
                        name
                        relationships {
                          field_media_image {
                            uri {
                              url
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on paragraph__paragraph_hero {
                id
                field_pg_title
                field_pg_subtitle
                relationships {
                  field_pg_background {
                    name
                    relationships {
                      field_media_image {
                        uri {
                          url
                          value
                        }
                      }
                    }
                  }
                }
              }
              ... on paragraph__paragraph_wysiwyg {
                field_pg_title
                field_pg_wysiwyg {
                  value
                  processed
                }
              }
            }
          }
          title
        }
      }
    }
  `).allNodeService.nodes[0];
  const contentMain = servicesPages.relationships.field_content_main;
  const successStoriesCards = contentMain[2].relationships.field_pg_card.map(
    (contentForCard, index) => (
      <Col xs="12" md="3" key={`card-${index * 2}`}>
        <Card
          title={contentForCard.field_pg_title}
          description={contentForCard.field_pg_wysiwyg.value}
          image="img-for-succes-stories.png"
          link="/"
        />
      </Col>
    )
  );

  return (
    <div className="servicepage">
      <TopBar />
      <NavigationBar />
      <Hero
        title={contentMain[0].field_pg_title}
        subTitle={servicesPages.relationships.field_content_main[0].field_pg_subtitle}
        backgroundImage="hero-for-profile-manage-teams.png"
        backgroundColor={{ background: 'transparent' }}
        size="lg"
        color="#000000"
      />
      <div className="mt-4 pt-4 pb-4">
        <IntroText sideDecoration text={contentMain[1].field_pg_wysiwyg.value} />
      </div>
      <div className="pt-4 mt-4">
        <WYSWYG
          title="Benefits"
          textContent={`Do you need a team of qualified experts to lead and execute your next
            technology project? Rootstack quickly takes care of the selection process from start
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
      <Container className="mt-4 pt-4">
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
        <h4 className="text-center pb-4">{contentMain[2].field_pg_title}</h4>
        <Row>
          {successStoriesCards}
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
