import React from 'react';
import ImageProvider from '@core/providers/image-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Card({
  title, description, image, link
}: CardProps) {
  return (
    <div>
      <ImageProvider fileName={image} alt="" />
      <h5 className="text-center orange-text">{title}</h5>
      <div className="text-center">
        <span className="body-1">{description}</span>
        <br />
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
