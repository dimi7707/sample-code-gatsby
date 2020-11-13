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
  const bannerImageDefaultClass = `${imageToLeft ? 'order-1' : 'order-3'} w-100`;

  return (
    <div className="banner d-flex">
      <div className={bannerImageDefaultClass}>
        <ImageProvider fileName={image} alt={altImage} className="banner-image" />
      </div>
      <Card className="order-2">
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
