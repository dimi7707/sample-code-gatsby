import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import ImageProvider from '@core/providers/image/image-provider';
import { BoxProps } from '@shared/props/box';

import './box.scss';

Box.defaultProps = {
  iconType: false,
  className: '',
  link: {
    label: 'See more',
    link: '/'
  },
  hasBorder: false
};

export default function Box({ 
  iconType, image, title, className, link, hasBorder
}: BoxProps): React.ReactElement {
  let defaultClassBox = iconType ? 'box mx-auto' : 'box mx-auto w-100';
  if (hasBorder) {
    defaultClassBox = `${defaultClassBox} simple-border`;
  } 

  return (
    <div className={defaultClassBox}>
      <ImageProvider fileName={image} alt={title} className={`${className} mx-auto`} />
      {
        iconType
          && (
            <div className="text-center">
              <h6 className="text-center orange-text">{title}</h6>
              <a href={link.link} className="body-1">
                {link.label}
                <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
              </a>
            </div>
          )
      }
    </div>
  );
}
