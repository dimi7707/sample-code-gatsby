import React from 'react';

type UtilityProps = {
  textContent: string
};

export default function UtilityText({ textContent }: UtilityProps) {
  return (
    <section className="mt-4 pt-big-space pb-big-space">
      <p className="body-2 w-75 mx-auto text-center">{textContent}</p>
    </section>
  );
}
