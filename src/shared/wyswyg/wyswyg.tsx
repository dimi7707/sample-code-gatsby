import React from 'react';
import { Container } from 'react-bootstrap';

import ImageProvider from '@core/providers/image/image-provider';
import { WhatYouSeeWhatYouGetProps } from '@props/what-you-see-what-you-get';

import './wyswyg.scss';

WYSWYG.defaultProps = {
  imageToRight: false,
  backgroundColor: { background: 'transparent' }
};

export default function WYSWYG({
  title, textContent, image, imageToRight, backgroundColor
}: WhatYouSeeWhatYouGetProps): React.ReactElement {
  const defaultClassImage = `${imageToRight ? 'order-3' : 'order-1'} w-50`;

  return (
    <div style={backgroundColor}>
      <Container className="wyswyg d-flex justify-content-md-between">
        <div className={`${defaultClassImage} wyswyg-item my-auto mx-auto pt-4 pb-4`}>
          <ImageProvider fileName={image} className="" alt="" />
        </div>
        <div className="order-2 wyswyg-item ml-4 mr-4 pt-4 pb-4">
          <h4>{title}</h4>
          <p className="body-2 mt-4">{textContent}</p>
        </div>
      </Container>
    </div>
  );
}
