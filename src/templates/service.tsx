import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Footer from '@core/layout/footer/footer';

import ComponentIdentifier from '@templates/util-templates/component-identifier';

ServiceTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default function ServiceTemplate({ data }) {
  const mainContent = data.service.relationships.field_content_main;
  const contentToRender = [];
  mainContent.forEach((c) => {
    contentToRender.push(ComponentIdentifier(c.relationships.paragraph_type.label, c.id, mainContent));
  });

  return (
    <div>
      <TopBar currentLanguage={data.service.path.langcode} />
      <NavigationBar />
      {contentToRender.map((C) => (C))}
      <Footer />
    </div>
  );
}

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
