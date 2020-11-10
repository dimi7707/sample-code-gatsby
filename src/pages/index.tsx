import React from 'react';

import Layout from '@core/layout/layout';
import SEO from '@core/seo/seo';

function indexContentPage(): React.ReactElement {
  return (
    <>
      <SEO title="Home" />
    </>
  );
}

export default function IndexPage(): React.ReactElement {
  return <Layout content={indexContentPage()} />;
}
