import React from 'react';

export default function UtilityText(textContent: string) {
  return (
    <section className="text-center mt-4 pt-big-space pb-big-space">
      <p className="body-2 main-paragraph text-center">{ textContent}</p>
    </section>
  );
}
