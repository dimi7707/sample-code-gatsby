import React from 'react';

import { BannerVideoProps } from '@props/banner-video';

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
    <div className="container d-flex banner-video" style={backgroundColor}>
      <div className={`${defaultClassBannerVideo} banner-video-video`}>
        <video
          poster={urlPosterVideo}
          width={widthVideo || BannerVideo.defaultProps.widthVideo}
          height={heightVideo || BannerVideo.defaultProps.heightVideo}
          controls
        >
          <source src={urlVideo} type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
      <div className="banner-video-text my-auto mx-auto order-2">
        <h4>{title}</h4>
        <p className="body-2">{description}</p>
      </div>
    </div>
  );
}
