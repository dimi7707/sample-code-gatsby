import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import ImageProvider from '@core/providers/image/image-provider';

import { CardProps } from '@props/card';

export default function Card({
  title, description, image, link
}: CardProps): React.ReactElement {
  return (
    <div>
      <ImageProvider className="card-image" fileName={image} alt={title} />
      <h5 className="card-title text-center">{title}</h5>
      <div className="card-content text-center">
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          <span className="custom-text-secondary">
            See more
            <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
          </span>
        </a>
      </div>
    </div>
  );
}
