import React from 'react';
import { Container } from 'react-bootstrap';

import ImageProvider from '@core/providers/image/image-provider';
import { WhatYouSeeWhatYouGetProps } from '@props/what-you-see-what-you-get';

WhatYouSeeWhatYouGet.defaultProps = {
  imageToRight: false,
  backgroundColor: { background: 'transparent' }
};

export default function WhatYouSeeWhatYouGet({
  title, textContent, image, imageToRight, backgroundColor
}: WhatYouSeeWhatYouGetProps): React.ReactElement {
  const defaultClassImage = `${imageToRight ? 'order-3' : 'order-1'} w-50`;

  return (
    <div style={backgroundColor}>
      <Container className="d-flex justify-content-md-between flex-wrap">
        <div className={defaultClassImage}>
          <ImageProvider fileName={image} className="" alt="" />
        </div>
        <div className="order-2">
          <h4>{title}</h4>
          {textContent}
        </div>
      </Container>
    </div>
  );
}
