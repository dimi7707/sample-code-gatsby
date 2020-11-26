import React from 'react';
import { Card } from 'react-bootstrap';

import { PresentationCardProps } from '@props/presentation-card';
import getSourceImage from '@shared/utility/get-source-image';

import './presentation-card.scss';

export default function PresentationCard({
  title, address, phoneNumber, link, backgroundImage
}: PresentationCardProps): React.ReactElement {
  const image = getSourceImage(backgroundImage);
  const stylePresentationCard = {
    backgroundImage: `url(${image.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <Card className="presentation-card" style={stylePresentationCard}>
      <Card.Body className="p-4">
        <h3 className="text-white">{title}</h3>
        <p className="small text-white w-75">{address}</p>
        <div className="d-flex">
          <ul>
            <li className="small text-sky-blue">Information</li>
            <li className="text-white small">{phoneNumber}</li>
          </ul>
          <div className="ml-auto">
            <a href={link.link}>{link.label}</a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
