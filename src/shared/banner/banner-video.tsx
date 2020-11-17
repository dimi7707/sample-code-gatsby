import React from 'react';

import { BannerVideoProps } from '@props/banner-video';
import { Container } from 'react-bootstrap';

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
    <Container className="banner d-flex" style={backgroundColor}>
      <div className={`${defaultClassBannerVideo}`}>
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
      <div className="my-auto mx-auto order-2">
        <h4>{title}</h4>
        <p className="body-2">{description}</p>
      </div>
    </Container>
  );
}
