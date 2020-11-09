import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import './layout.scss';

type HeroProps = {
  content: React.ReactElement;
};

export default function Layout({ content }: HeroProps): React.ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = data.site.siteMetadata?.title || 'Title';

  return (
    <>
      <div>
        <main>{content}</main>
      </div>
    </>
  );
}
