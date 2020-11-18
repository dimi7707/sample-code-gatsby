import React from 'react';

import { QuoteTypeTextProps } from '@props/quote-type-text';

import './text.scss';

export default function QuoteTypeText({
  quote, author, position
}: QuoteTypeTextProps): React.ReactElement {
  return (
    <div className="text text-quote-type-text d-flex flex-column text-center">
      <span className="text-quote-type-text-marks">““</span>
      <h4>Testimonials</h4>
      <p className="body-2 mx-auto w-50 pb-4">{`"${quote}"`}</p>
      <span className="text-quote-type-text-author">{author}</span>
      <span className="text-quote-type-text-position">{position}</span>
    </div>
  );
}
