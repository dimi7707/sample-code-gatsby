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
  const bannerImageDefaultClass = `${imageToLeft ? 'order-1 banner-image' : 'order-3 banner-image'}`;
  const cardDefaultClass = `${ imageToLeft ? 
    'order-2 my-auto ml-md-n5' : 
    'order-2 my-auto mr-md-n5'}`;

  return (
    <div className="banner banner-standard d-flex">
      <div className={bannerImageDefaultClass}>
        <ImageProvider fileName={image} alt={altImage} className="" />
      </div>
      <Card className={cardDefaultClass}>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" className="shadow-none float-right text-white">
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
