import React from 'react';
import ImageProvider from '@core/providers/image-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;

};<Card title="soy una mierda" description="que arrechera" image="gatsby-astronaut.png"  link="/" />

export default function Card({
  title, description, image, link
}: CardProps) {
  return (
    <div>
      <ImageProvider fileName={image} alt="" />
        <h6 className="text-center orange-text">{title}</h6>
        <div className="text-center">
          <span className="body-2">{description}</span>
          <br />
          <a href={link} className="body-1">
            See more
            <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
          </a>
        </div>
    </div>
  );
}
