import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { BannerVideoProps } from '@props/banner-video';

import './banner-video.scss';

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
  return (
    <div className="banner-video" style={backgroundColor}>
      <Container>
        <Row>
          <Col xs={12} md={6} className="my-auto">
            {
              (videoToLeft === undefined || videoToLeft)
                ? (
                  <video
                    poster={urlPosterVideo}
                    width={widthVideo || BannerVideo.defaultProps.widthVideo}
                    height={heightVideo || BannerVideo.defaultProps.heightVideo}
                    controls
                  >
                    <source src={urlVideo} type="video/mp4" />
                    <track kind="captions" />
                  </video>
                )
                : (
                  <div className="banner-video-text">
                    <h4>{title}</h4>
                    <p className="body-2">{description}</p>
                  </div>
                )
            }
          </Col>
          <Col xs={12} md={6} className="my-auto">
            {
              (videoToLeft === undefined || videoToLeft)
                ? (
                  <div className="banner-video-text">
                    <h4>{title}</h4>
                    <p className="body-2">{description}</p>
                  </div>
                ) : (
                  <video
                    poster={urlPosterVideo}
                    width={widthVideo || BannerVideo.defaultProps.widthVideo}
                    height={heightVideo || BannerVideo.defaultProps.heightVideo}
                    controls
                  >
                    <source src={urlVideo} type="video/mp4" />
                    <track kind="captions" />
                  </video>
                )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
