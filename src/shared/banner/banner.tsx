import React from 'react';
import { Card, Button } from 'react-bootstrap';

import ImageProvider from '@core/providers/image/image-provider';

import getSourceImage from '@shared/utility/get-source-image';
import { BannerProps } from '@props/banner';

import './banner.scss';

Banner.defaultProps = {
  imageToLeft: false
};

export default function Banner({
  image, altImage, text, buttonText, imageToLeft
}: BannerProps): React.ReactElement {
  const bannerImageDefaultClass = `${imageToLeft ? 'order-1 banner-image' : 'order-3 banner-image'}`;
  let cardDefaultClass =  'order-2 border-0 my-auto text-white mb-md-0';
  cardDefaultClass = imageToLeft 
    ? `${cardDefaultClass} ml-md-n5` 
    : `${cardDefaultClass} mr-md-n5`;
  const imgBackgroundCard = getSourceImage('bg-standard-banner.png');
  const styleBackgroundCard = {
    backgroundImage: `url(${imgBackgroundCard.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="banner banner-standard d-flex">
      <div className={bannerImageDefaultClass}>
        <ImageProvider fileName={image} alt={altImage} className="" />
      </div>
      <Card className={cardDefaultClass} style={styleBackgroundCard}>
        <Card.Body>
          <Card.Text className="w-75 text-white">{text}</Card.Text>
          <Button variant="primary" className="shadow-none text-white float-right">
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
