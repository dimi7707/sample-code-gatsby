import React from 'react';

import { BannerVideoProps } from '@props/banner-video';
import { Container } from 'react-bootstrap';

import './banner.scss';

BannerVideo.defaultProps = {
  videoToLeft: false,
  widthVideo: 500,
  heightVideo: 314,
  frameDecorator: false
};

export default function BannerVideo({
  title,
  description,
  urlVideo,
  backgroundColor,
  videoToLeft,
  widthVideo,
  heightVideo,
  frameDecorator
}: BannerVideoProps): React.ReactElement {
  const defaultClassBannerVideo = `${videoToLeft
    ? 'order-1 pr-2 video-wrap'
    : 'order-3 pl-2 video-wrap'} w-100`;
  const defaultClassTextContent = frameDecorator 
    ? 'mx-auto mt-n2 order-2 item frame-decorator' 
    : 'mx-auto my-auto order-2 item';

  return (
    <div style={backgroundColor}>
      <Container className="banner banner-video item d-flex">
        <div className={`${defaultClassBannerVideo}`}>
          <iframe
            title={title}
            src={urlVideo}
            width={widthVideo || BannerVideo.defaultProps.widthVideo}
            height={heightVideo || BannerVideo.defaultProps.heightVideo}
            className="mt-4"
          />
        </div>
        <div className={defaultClassTextContent}>
          <h4>{title}</h4>
          <p className="body-2">{description}</p>
        </div>
      </Container>
    </div>
  );
}
