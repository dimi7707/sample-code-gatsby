import React from 'react';
import { graphql } from 'gatsby';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Footer from '@core/layout/footer/footer';

import ComponentIdentifier from '@templates/util-templates/component-identifier';

type LandingTemplateProps = {
  data: any
};

export default function LandingTemplate({ data }: LandingTemplateProps) : React.ReactElement {
  const mainContent = data.landingPage.relationships.field_content;
  const contentToRender = [];
  mainContent.forEach((c) => {
    contentToRender.push(
      ComponentIdentifier(c.relationships.paragraph_type.label, c.id, mainContent)
    );
  });

  return (
    <div>
      <TopBar
        currentLanguage={data.landingPage.path.langcode}
        urlCurrentVersion={`${data.landingPage.path.langcode}${data.landingPage.path.alias}`}
        urlTranslateVersion={data.landingPage.field_slug_translate_version}
      />
      <NavigationBar />
      {contentToRender.map((C) => (C))}
      <Footer />
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    landingPage: nodeLandingPage(id: { eq: $id }) {
      body {
        processed
      }
      path {
        alias
        langcode
      }
      field_slug_translate_version
      relationships {
        field_content {
          ... on paragraph__intro_text {
            id
            field_pg_wysiwyg {
              processed
            }
            field_pg_title
            field_side_decoration
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
                  processed
                }
                relationships {
                  field_pg_image {
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
          ... on paragraph__paragraph_hero_slider {
            id
            relationships {
              field_pg_slide {
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
                field_pg_title
                field_pg_subtitle
              }
              paragraph_type {
                label
              }
            }
          }
          ... on paragraph__paragraph_ping_pong {
            id
            relationships {
              paragraph_type {
                label
              }
              field_pg_feature {
                field_pg_title
                field_pg_wysiwyg {
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
            field_pg_title
          }
        }
      }
    }
  }
`;
