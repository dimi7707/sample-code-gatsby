import React from 'react';

import Layout from '@core/layout/layout';
import SEO from '@core/seo/seo';

function NotFoundPageContent(): React.ReactElement {
  return (
    <>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
}

export default function NotFoundPage(): React.ReactElement {
  return <Layout content={NotFoundPageContent()} />;
}
