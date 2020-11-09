import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Hero from '@shared/hero/hero';

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
      <Hero
        title={title}
        subtitle={title}
        backgroundImage={undefined}
        backgroundColor={{ background: 'red' }}
      />
      <div>
        <main>{content}</main>
      </div>
    </>
  );
}
