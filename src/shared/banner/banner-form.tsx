import React from 'react';
import {
  Container, Row, Col, Button, Form
} from 'react-bootstrap';

import { BannerFormProps } from '@props/banner-form';

import './banner.scss';

export default function BannerForm({
  title, subtitle, backgroundColor, buttonText
}: BannerFormProps): React.ReactElement {
  return (
    <div className="banner banner-form" style={backgroundColor}>
      <Container>
        <Row>
          <Col xs={12} md={2} />
          <Col xs={12} md={4}>
            <div>
              <h3>{title}</h3>
              <span>{subtitle}</span>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label className="text-uppercase">
                Email
                <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="text-muted" />
            </Form.Group>
          </Col>
          <Col xs={12} md={2} />
        </Row>
        <Row>
          <Col xs={12} md={2} />
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label className="text-uppercase">
                Name
                <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="text-muted" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-uppercase">
                Last name
                <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label className="text-uppercase">
                Company
                <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="text-muted" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-uppercase">
                Phone
                <span>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="text-muted" />
            </Form.Group>
          </Col>
          <Col xs={12} md={2} />
          <Col xs={12} md={2} />
          <Col xs={12} md={8}>
            <Form.Group>
              <Form.Label className="text-uppercase">
                Message
                <span>*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col xs={12} md={2} />
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="primary" className="text-uppercase">{buttonText}</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
