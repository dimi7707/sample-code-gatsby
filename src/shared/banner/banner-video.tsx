import React from 'react';

import { BannerVideoProps } from '@props/banner-video';
import { Container } from 'react-bootstrap';

import './banner.scss';

BannerVideo.defaultProps = {
  videoToLeft: false,
  widthVideo: 500,
  heightVideo: 314
};

export default function BannerVideo({
  title,
  description,
  urlVideo,
  backgroundColor,
  videoToLeft,
  widthVideo,
  heightVideo
}: BannerVideoProps): React.ReactElement {
  const defaultClassBannerVideo = `${videoToLeft
    ? 'order-1 pr-2 video-wrap'
    : 'order-3 pl-2 video-wrap'} w-100`;

  return (
    <Container className="banner banner-video d-flex" style={backgroundColor}>
      <div className={`${defaultClassBannerVideo}`}>
        <iframe
          title={title}
          src={urlVideo}
          width={widthVideo || BannerVideo.defaultProps.widthVideo}
          height={heightVideo || BannerVideo.defaultProps.heightVideo}
          className="mt-4"
        />
      </div>
      <div className="mx-auto my-auto order-2">
        <h4>{title}</h4>
        <p className="body-2">{description}</p>
      </div>
    </Container>
  );
}
