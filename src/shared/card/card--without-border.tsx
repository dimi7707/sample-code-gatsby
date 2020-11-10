import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import ImageProvider from '@core/providers/image-provider';

import { CardProps } from '@props/card';

export default function Card({
  title, description, image, link
}: CardProps): React.ReactElement {
  return (
    <div>
      <ImageProvider fileName={image} alt={title} />
      <h5 className="text-center">{title}</h5>
      <div className="text-center">
        <p>{description}</p>
        <a href={link} className="body-1">
          <span className="custom-text-secondary">
            See more
            <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
          </span>
        </a>
      </div>
    </div>
  );
}
