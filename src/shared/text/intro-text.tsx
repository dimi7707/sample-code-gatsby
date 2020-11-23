import React from 'react';

type IntroTextProps = {
  text: string;
  sideDecoration?: boolean;
};

IntroText.defaultProps = {
  sideDecoration: false
};

export default function IntroText({ text, sideDecoration }: IntroTextProps): React.ReactElement {
  const defaultClassIntoText = sideDecoration ? 'side-decoration' : '';

  return (
    <div className={`${defaultClassIntoText} w-75 mx-auto`}>
      <p className="body-2 w-75 mx-auto text-center">{text}</p>
    </div>
  );
}
