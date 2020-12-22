import React from 'react';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';

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
    </div>
  );
}
