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
    <div className={`${defaultClassIntoText} w-75 d-flex mx-auto my-auto`}>
      {sideDecoration && <div className="left-decorator mr-4"></div>}
      <div className="w-100">
        <p className="body-2 mx-auto text-center my-auto">{text}</p>
      </div>
      {sideDecoration && <div className="right-decorator ml-4"></div>}
    </div>
  );
}
