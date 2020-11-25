import React from 'react';
import {
  Container, Row, Col, Form, Button
} from 'react-bootstrap';

export default function FormSales(): React.ReactElement {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Developing a project
            </Form.Label>
            <Form.Control as="select">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              First name
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Last name
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Email
            </Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Company
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Phone
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Country
            </Form.Label>
            <Form.Control as="select">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Form.Group>
            <Form.Label className="text-uppercase small">
              Message
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Form.Check
            type="radio"
            label="I accept to subscribe to the newsletter"
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" className="text-uppercase text-white pl-4 pr-4">
            SEND
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
