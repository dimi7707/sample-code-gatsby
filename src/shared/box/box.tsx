import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import ImageProvider from '@core/providers/image/image-provider';
import { BoxProps } from '@shared/props/box';

import './box.scss';

export default function Box({ iconType, image, title }: BoxProps): React.ReactElement {
  return (
    <div className="box mx-auto">
      <ImageProvider fileName={image} alt={title} className="" />
      {
        iconType
          && (
            <div className="text-center">
              <h6 className="text-center orange-text">{title}</h6>
              <a href="/" className="body-1">
                See more
                <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
              </a>
            </div>
          )
      }
    </div>
  );
}
