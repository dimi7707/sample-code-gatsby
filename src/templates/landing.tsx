import React from 'react';
import { graphql } from 'gatsby';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Footer from '@core/layout/footer/footer';

import ComponentIdentifier from '@templates/util-templates/component-identifier';

export default function LandingTemplate({ data }: any) : React.ReactElement {
  const mainContent = data.nodePage.relationships.field_content;
  const contentToRender = [];
  mainContent.forEach((elementContent) => {
    contentToRender.push(
      ComponentIdentifier(
        elementContent.relationships.paragraph_type.label,
        elementContent.id, mainContent
      )
    );
  });

  return (
    <div>
      <TopBar
        currentLanguage={data.nodePage.path.langcode}
        urlCurrentVersion={`${data.nodePage.path.langcode}${data.nodePage.path.alias}`}
        urlTranslateVersion={data.nodePage.field_slug_translate_version}
      />
      <NavigationBar />
      {contentToRender.map((content) => (content))}
      <Footer />
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    nodePage: nodePage(id: { eq: $id }) {
      body {
        processed
        format
      }
      path {
        alias
        langcode
      }
      relationships {
        node_type {
          description
          name
          relationships {
            node__article {
              body {
                processed
              }
            }
          }
        }
      }
      title
    }
  }
`;
