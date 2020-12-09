import { graphql, useStaticQuery } from 'gatsby';

export default function getServicesPages<ServicePage>(): Promise<ServicePage> {
  const servicePages = useStaticQuery(graphql`
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
  `).allNodeService.nodes;
  return new Promise((resolve) => resolve(servicePages));
}
