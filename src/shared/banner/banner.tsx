import React from 'react';
import { Card, Button } from 'react-bootstrap';

import ImageProvider from '@core/providers/image/image-provider';

import { BannerProps } from '@props/banner';

import './banner.scss';

Banner.defaultProps = {
  imageToLeft: false
};

export default function Banner({
  image, altImage, text, buttonText, imageToLeft
}: BannerProps): React.ReactElement {
  const bannerImageDefaultClass = `${imageToLeft ? 'order-1 mr-n4' : 'order-3 ml-n40'} w-50`;

  return (
    <div className="banner d-flex">
      <div className={bannerImageDefaultClass}>
        <ImageProvider fileName={image} alt={altImage} className="banner-image" />
      </div>
      <Card className="order-2 h-50 my-auto">
        <Card.Body>
          <Card.Text>{text}</Card.Text>
          <Button variant="secondary" className="shadow-none float-right">
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
