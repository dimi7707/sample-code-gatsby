import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';

import { PingPongProps } from '@props/ping-pong';
import ImageProvider from '@core/providers/image/image-provider';

import './ping-pong.scss';

PingPong.defaultProps = {
  imageToRight: false
};

export default function PingPong({
  title, textContent, buttonText, image, imageToRight
}: PingPongProps): React.ReactElement {
  const defaultClassCard = imageToRight
    ? 'ping-pong-text-section pb-2 left-decoration order-1'
    : 'ping-pong-text-section pb-2 right-decoration order-3';
  const defaultClassButton = imageToRight ? 'text-right pt-2' : 'text-left pt-2';

  return (
    <Container className="d-flex ping-pong">
      <Card className={defaultClassCard}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="pt-2">{textContent}</Card.Text>
          <div className={defaultClassButton}>
            <Button variant="primary" className="text-white">{buttonText}</Button>
          </div>
        </Card.Body>
      </Card>
      <div className="ping-pong-image-section order-2">
        <ImageProvider fileName={image} alt={title} className="" />
      </div>
    </Container>
  );
}
