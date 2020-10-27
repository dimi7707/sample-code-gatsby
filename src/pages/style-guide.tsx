import React from 'react';
import { Link } from 'gatsby';
import Layout from '../core/layout/layout';
import Image from '../core/layout/image';
import { Button, Table, Badge, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import SEO from '../core/layout/seo';
import './styles/style-guide.scss';
import  AlertDanger  from '@core/components/alert/alert-danger'; 

const StyleGuidePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Typography</h1>
    <Table className="custom-table-style-guide">
      <thead>
        <tr>
          <th>
            <Badge variant="secondary" className="customBadgeHeader">Type</Badge>
          </th>
          <th>
            <Badge variant="secondary" className="customBadgeHeader">Preview</Badge>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h2 className="pt-4 pl-2">Aa</h2>
            <h3 className="pl-2">Roboto</h3>
          </td>
          <td>
            <p className="big-typography">
              Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Ñn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </p>
            <p className="big-typography">1234567890 !@#$%^&()</p>
            <p className="standard-typography"> 
              The settings are more understandable and the Odoo warnings are now integrated into the Odoobot. In the
              configuration, we find the documentation corresponding to each setting with a practical link and the 
              permissions can be changed in the corresponding module. There are countless changes in the functions 
              of each module.
            </p>
          </td>
        </tr>
      </tbody>
    </Table>
    <div className="custom-divider"></div>
    <h1>Font size</h1>
    <Table className="custom-table-style-guide">
    <thead>
      <tr>
        <th>
          <Badge variant="secondary" className="customBadgeHeader">Title</Badge>
        </th>
        <th>
        <Badge variant="secondary" className="customBadgeHeader">Class name / tag</Badge>
        </th>
        <th>
          <Badge variant="secondary" className="customBadgeHeader">Preview</Badge>
        </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td><h1>H1</h1></td>
          <td> .h1 / h1 </td>
          <td> <h1>How Can Software Development </h1></td>
        </tr>
        <tr>
          <td><h2>H2</h2></td>
          <td> .h2 / h2 </td>
          <td> <h2>How Can Software Development </h2></td>
        </tr>
        <tr>
          <td><h3>H3</h3></td>
          <td> .h3 / h3 </td>
          <td> <h3>How Can Software Development </h3></td>
        </tr>
        <tr>
          <td><h4>H4</h4></td>
          <td> .h4 / h4 </td>
          <td> <h4>How Can Software Development </h4></td>
        </tr>
        <tr>
          <td><h5>H5</h5></td>
          <td> .h5 / h5 </td>
          <td> <h5>How Can Software Development </h5></td>
        </tr>
        <tr>
          <td><h6>H6</h6></td>
          <td> .h6 / h6 </td>
          <td><h6>How Can Software Development </h6></td>
        </tr>
        <tr>
          <td>Body 1</td>
          <td> .body-1</td>
          <td>
            <div className="body-1">
              The settings are more understandable and the Odoo warnings are now integrated into the Odoobot. 
              In the configuration, we find the documentation corresponding to each setting with a practical
              link and the permissions can be changed in the corresponding module. There are countless changes
              in the functions of each module.
            </div>
          </td>
        </tr>
        <tr>
          <td>Body 2</td>
          <td> .body-2</td>
          <td>
            <div className="body-2">
              The settings are more understandable and the Odoo warnings are now integrated into the Odoobot. 
              In the configuration, we find the documentation corresponding to each setting with a practical
              link and the permissions can be changed in the corresponding module. There are countless changes
              in the functions of each module.
            </div>
          </td>
        </tr>
        <tr>
          <td>Body 3</td>
          <td> .body-3</td>
          <td>
            <div className="body-3">
              The settings are more understandable and the Odoo warnings are now integrated into the Odoobot. 
              In the configuration, we find the documentation corresponding to each setting with a practical
              link and the permissions can be changed in the corresponding module. There are countless changes
              in the functions of each module.
            </div>
          </td>
        </tr>
        <tr>
          <td>Body 4</td>
          <td> .body-4</td>
          <td>
            <div className="body-4">
              The settings are more understandable and the Odoo warnings are now integrated into the Odoobot.
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
    <div className="custom-divider"></div>
    <h1>Colors</h1>
    <div>
      <p className="body-2">Primary colors</p>
      <ul className="horizontal-list">
        <li>
          <div className="frame-colors background-color-primary">#fa8f04</div>
        </li>
        <li>
          <div className="frame-colors background-color-secondary">#1466b4</div>
        </li>
        <li>
          <div className="frame-colors background-color-tertiary">#0a233c</div>
        </li>
      </ul>
    </div>
    <div>
      <p className="body-2">Secondary colors</p>
      <ul className="horizontal-list">
        <li>
          <div className="frame-colors-secondary background-color-light-blue-1">#bdd9f0</div>
        </li>
        <li>
          <div className="frame-colors-secondary background-color-light-blue-2">#e6edf3</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#fecfa2</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#faaa5e</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#e38000</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#5cc70c</div>
        </li>
      </ul>
      <ul className="horizontal-list">
        <li>
          <div className="frame-colors-secondary">#3582cb</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#114b83</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#ddf4de</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#177b1d</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#fef3f5</div>
        </li>
        <li>
          <div className="frame-colors-secondary">#e14a63</div>
        </li>
      </ul>
    </div>
    <div className="custom-divider"></div>
    <h1>Buttons</h1>
    <div>
      <ul className="horizontal-list">
        <li>
          <Button variant="primary">Button Default</Button>
        </li>
        <li>
          <Button variant="primary btn-primary-permanent-hover">Button Hover</Button>
        </li>
        <li>
          <Button variant="primary btn-primary-visited">Button Pressed</Button>
        </li>
      </ul>
    </div>
    <div>
      <ul className="horizontal-list">
        <li>
          <Button variant="secondary">Button Default</Button>
        </li>
        <li>
          <Button variant="secondary btn-secondary-permanent-hover">Button Hover</Button>
        </li>
        <li>
          <Button variant="primary btn-secondary-visited">Button Pressed</Button>
        </li>
      </ul>
    </div>
    <div className="custom-divider"></div>
    <h1>Form elements</h1>
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="errorOnForm">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              This field is required
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category type</Form.Label>
            <Form.Control as="select">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Col>
        <Col>
          <span className="body-2">Inputs with background</span>
          <div className="form-input-with-background">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category type</Form.Label>
              <Form.Control as="select">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </Form.Control>
            </Form.Group>

          </div>
        </Col>
      </Row>
    </Container>
    <div className="custom-divider"></div>
    <h1>Alert messages</h1>
    <AlertDanger></AlertDanger>
    
    
  </Layout>
);

export default StyleGuidePage;
