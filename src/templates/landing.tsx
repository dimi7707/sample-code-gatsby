import React from 'react';
import { graphql } from 'gatsby';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Footer from '@core/layout/footer/footer';

export default function LandingTemplate() : React.ReactElement {
  return (
    <div>
      <TopBar
        currentLanguage="es"
        urlCurrentVersion="/"
        urlTranslateVersion="/"
      />
      <NavigationBar />
        <p>Dummy content</p>
      <Footer />
    </div>
  );
}
