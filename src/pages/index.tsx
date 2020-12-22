import React from 'react';

import TopBar from '@core/layout/top-bar/top-bar';
import NavigationBar from '@core/layout/navigation-bar/navigation-bar';
import Hero from '@shared/hero/hero';
import IntroText from '@shared/text/intro-text';

export default function IndexPage(): React.ReactElement {
  const textForIntro = `We provide end-to-end development services working with the model that
  is most convenient for your business. From managing a project from start to finish to
  providing the necessary talent to complete your team, we guarantee the most efficient
  workflow and exceptional results.`;
  return (
    <div className="home-page">
      <TopBar
        currentLanguage="en"
        urlCurrentVersion="/"
        urlTranslateVersion="/"
      />
      <NavigationBar />
      <Hero
        title="Managed Teams"
        subTitle={`Work with an autonomous team
        of experts and make your project
        a reality
        `}
        backgroundImage="hero-for-profile-manage-teams.png"
        backgroundColor={{ background: 'transparent' }}
        size="lg"
        color="black"
      />
      <div className="mt-4 pt-4 pb-4">
        <IntroText sideDecoration text={textForIntro} />
      </div>
    </div>
  );
}
