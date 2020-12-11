import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Footer from '@core/layout/footer/footer';

import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';
import WYSWYG from '@shared/wyswyg/wyswyg';
import Card from '@shared/card/card';

export default function ServiceTemplate({ data }) {
  const mainContent = data.service.relationships.field_content_main;
  const contentToRender = [];

  const identifyComponentType = (type, id) => {
    const componentData = mainContent.filter((c) => c.id === id)[0];

    switch (type) {
      case 'Hero':
        return (
          <Hero
            key={id}
            title={componentData.field_pg_title}
            subTitle={componentData.field_pg_subtitle}
            backgroundImage="hero-for-profile-manage-teams.png"
            backgroundColor={{ background: 'transparent' }}
            size="lg"
            color="#000000"
          />
        );
      case 'Texto':
        if (componentData.field_pg_title === 'Intro Text') {
          return (
            <div className="mt-4 pt-4 pb-4" key={id}>
              <IntroText
                sideDecoration
                text={componentData.field_pg_wysiwyg.value}
              />
            </div>
          );
        }
        return (
          <div className="pt-4 mt-4" key={id}>
            <WYSWYG
              key={id}
              title={componentData.field_pg_title}
              textContent={componentData.field_pg_wysiwyg.value}
              image="img-profile-manage.png"
              imageToRight
              backgroundColor={{ background: 'transparent' }}
            />
          </div>
        );
      case 'Cards':
        return (
          <Container className="mt-4 pt-4 mb-4 pb-4" key={id}>
            <h4 className="text-center pb-4">{componentData.field_pg_title}</h4>
            <Row>
              {componentData.relationships.field_pg_card.map(
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
              )}
            </Row>
          </Container>
        );
      default:
        return null;
    }
  };

  mainContent.forEach((c) => {
    contentToRender.push(identifyComponentType(c.relationships.paragraph_type.label, c.id));
  });

  return (
    <div>
      <TopBar />
      <NavigationBar />
      {contentToRender.map((C) => (C))}
      <Footer />
    </div>
  );
};

ServiceTemplate.propTypes = {
  data: PropTypes.string.isRequired
};

export const query = graphql`
  query($id: String!) {
    service: nodeService(id: { eq: $id }) {
      body {
        processed
      }
      path {
        alias
        langcode
        pid
      }
      relationships {
        field_content_main {
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
              paragraph_type {
                label
              }
            }
          }
          ... on paragraph__paragraph_wysiwyg {
            id
            field_pg_wysiwyg {
              value
            }
            field_pg_title
            relationships {
              paragraph_type {
                label
              }
            }
          }
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
              paragraph_type {
                label
              }
            }
          }                
        }
      }
    }
  }
`;
