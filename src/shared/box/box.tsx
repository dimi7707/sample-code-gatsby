import React from 'react';

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
  iconType, image, title, className, hasBorder
}: BoxProps): React.ReactElement {
  let defaultClassBox = 'box mx-auto text-center';
  if (hasBorder) {
    defaultClassBox = `${defaultClassBox} simple-border`;
  }

  return (
    <div className={defaultClassBox}>
      <ImageProvider fileName={image} alt={title} className={`${className} mx-auto`} />
      {
        iconType
          && (
            <div className="text-center mx-auto mt-4">
              <h6>{title}</h6>
            </div>
          )
      }
    </div>
  );
}
