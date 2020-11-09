import React from 'react';

import './layout.scss';

type HeroProps = {
  content: React.ReactElement;
};

export default function Layout({ content }: HeroProps): React.ReactElement {
  return (
    <>
      <div>
        <main>{content}</main>
      </div>
    </>
  );
}
