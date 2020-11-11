import React from 'react';
import {
  Container, Card, Row, Col, Button
} from 'react-bootstrap';

import ImageProvider from '@core/providers/image/image-provider';

import { BannerProps } from '@props/banner';

import './banner.scss';

export default function Banner({
  image, altImage, text, buttonText, imageToLeft
}: BannerProps): React.ReactElement {
  return (
    <Container>
      <Row>
        <Col xs={1} md={1} />
        <Col xs={12} md={5}>
          {
            imageToLeft
              ? <ImageProvider fileName={image} alt={altImage} className="" />
              : (
                <Card>
                  <Card.Body>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="secondary" className="shadow-none float-right">
                      {buttonText}
                    </Button>
                  </Card.Body>
                </Card>
              )
          }
        </Col>
        <Col xs={12} md={5}>
          {
            imageToLeft
              ? (
                <Card>
                  <Card.Body>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="secondary" className="shadow-none float-right">
                      {buttonText}
                    </Button>
                  </Card.Body>
                </Card>
              )
              : <ImageProvider fileName={image} alt={altImage} className="" />
          }
        </Col>
        <Col xs={1} md={1} />
      </Row>
    </Container>
  );
}
