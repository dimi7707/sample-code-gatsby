import React from 'react';

import { BannerVideoProps } from '@props/banner-video';

import './banner.scss';

BannerVideo.defaultProps = {
  videoToLeft: true,
  widthVideo: 500,
  heightVideo: 314
};

export default function BannerVideo({
  title,
  description,
  urlPosterVideo,
  urlVideo,
  backgroundColor,
  videoToLeft,
  widthVideo,
  heightVideo
}: BannerVideoProps): React.ReactElement {
  const defaultClassBannerVideo = `${videoToLeft ? 'order-1 pr-2' : 'order-3 pl-2'} w-100`;

  return (
    <div className="d-flex justify-content-center w-75 mx-auto" style={backgroundColor}>
      <div className={`${defaultClassBannerVideo}`}>
        <iframe
          src={urlVideo}
          width={widthVideo || BannerVideo.defaultProps.widthVideo}
          height={heightVideo || BannerVideo.defaultProps.heightVideo}
        >
        </iframe>
      </div>
      <div className="mx-auto my-auto order-2">
        <h4>{title}</h4>
        <p className="body-2">{description}</p>
      </div>
    </div>
  );
}
