import React from 'react';

type UtilityProps = {
  text: string;
};

export default function UtilityText({ text }: UtilityProps): React.ReactElement {
  return (
    <div className="mt-4 pt-big-space pb-big-space">
      <p className="body-2 w-75 mx-auto text-center">{text}</p>
    </div>
  );
}
