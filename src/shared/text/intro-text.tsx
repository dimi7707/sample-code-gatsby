import React from 'react';

type IntroTextProps = {
  text: string;
};

export default function IntroText({ text }: IntroTextProps): React.ReactElement {
  return (
    <div className="mt-2">
      <p className="body-2 w-75 mx-auto text-center">{text}</p>
    </div>
  );
}
