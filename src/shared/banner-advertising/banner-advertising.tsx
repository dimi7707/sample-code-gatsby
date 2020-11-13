import React from 'react';
import { Button } from 'react-bootstrap';

import getSourceImage from '@shared/utility/get-source-image';
import { BannerAdvertisingProps } from '@props/banner-advertising';

import './banner-advertising.scss';

export default function BannerAdverstising({
  title, buttonText, colorTitle, backgroundColor, backgroundImage
}: BannerAdvertisingProps): React.ReactElement {
  let styleBannerAdvertising: object;
  if (backgroundColor) {
    styleBannerAdvertising = backgroundColor;
  }

  if (backgroundImage) {
    const image = getSourceImage(backgroundImage);

    styleBannerAdvertising = {
      ...backgroundColor,
      backgroundImage: `url(${image.src})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
  }

  return (
    <div className="banner-advertising d-flex align-items-center" style={styleBannerAdvertising}>
      <h3 className="pl-2 pr-2" style={colorTitle}>{title}</h3>
      <Button variant="primary" className="mt-4">{buttonText}</Button>
    </div>
  );
}
