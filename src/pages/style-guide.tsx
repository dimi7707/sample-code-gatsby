import React from 'react';
import {
  Button,
  Table,
  Badge,
  Container,
  Row,
  Col,
  Form,
  Alert,
  Pagination
} from 'react-bootstrap';
import Layout from '../core/layout/layout';
import SEO from '../core/layout/seo';
import './styles/style-guide.scss';

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
              The settings are more understandable and the Odoo warnings are now integrated into
              the Odoobot. In the configuration, we find the documentation corresponding to each
              setting with a practical link and the permissions can be changed in the
              corresponding module. There are countless changes in the functions of each module.
            </p>
          </td>
        </tr>
      </tbody>
    </Table>
    <div className="custom-divider" />
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
          <td>
            <h1>H1</h1>
          </td>
          <td> .h1 / h1 </td>
          <td>
            <h1>How Can Software Development</h1>
          </td>
        </tr>
        <tr>
          <td>
            <h2>H2</h2>
          </td>
          <td> .h2 / h2 </td>
          <td>
            <h2>How Can Software Development </h2>
          </td>
        </tr>
        <tr>
          <td>
            <h3>H3</h3>
          </td>
          <td> .h3 / h3 </td>
          <td>
            <h3>How Can Software Development </h3>
          </td>
        </tr>
        <tr>
          <td>
            <h4>H4</h4>
          </td>
          <td> .h4 / h4 </td>
          <td>
            <h4>How Can Software Development </h4>
          </td>
        </tr>
        <tr>
          <td>
            <h5>H5</h5>
          </td>
          <td> .h5 / h5 </td>
          <td>
            <h5>How Can Software Development</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h6>H6</h6>
          </td>
          <td> .h6 / h6 </td>
          <td>
            <h6>How Can Software Development</h6>
          </td>
        </tr>
        <tr>
          <td>Body 1</td>
          <td> .body-1</td>
          <td>
            <div className="body-1">
              The settings are more understandable and the Odoo warnings are now integrated into
              the Odoobot. In the configuration, we find the documentation corresponding to each
              setting with a practical link and the permissions can be changed in the
              corresponding module. There are countless changes in the functions of each module.
            </div>
          </td>
        </tr>
        <tr>
          <td>Body 2</td>
          <td> .body-2</td>
          <td>
            <div className="body-2">
              The settings are more understandable and the Odoo warnings are now integrated into
              the Odoobot. In the configuration, we find the documentation corresponding to each
              setting with a practical link and the permissions can be changed in the
              corresponding module. There are countless changes in the functions of each module.
            </div>
          </td>
        </tr>
        <tr>
          <td>Body 3</td>
          <td> .body-3</td>
          <td>
            <div className="body-3">
              The settings are more understandable and the Odoo warnings are now integrated into
              the Odoobot. In the configuration, we find the documentation corresponding to each
              setting with a practical link and the permissions can be changed in the
              corresponding module. There are countless changes in the functions of each module.
            </div>
          </td>
        </tr>
        <tr>
          <td>Body 4</td>
          <td> .body-4</td>
          <td>
            <div className="body-4">
              The settings are more understandable and the Odoo warnings are now integrated into
              the Odoobot.
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
    <div className="custom-divider" />
    <h1>Colors</h1>
    <Container>
      <Row>
        <Col xs={12} md={4}>
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
        </Col>
        <Col xs={12} md={8}>
          <p className="body-2">Secondary colors</p>
          <ul className="horizontal-list">
            <li>
              <div className="frame-colors-secondary background-color-light-blue-1">#bdd9f0</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-light-blue-2">#e6edf3</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-melon">#fecfa2</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-light-orange text-white">#faaa5e</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-orange text-white">#e38000</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-green-apple text-white">#5cc70c</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-blue-alternative text-white">#3582cb</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-dark-blue text-white">#114b83</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-water-blue">#ddf4de</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-dark-green text-white">#177b1d</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-beige">#fef3f5</div>
            </li>
            <li>
              <div className="frame-colors-secondary background-color-pink text-white">#e14a63</div>
            </li>
          </ul>
        </Col>
      </Row>
      <p className="body-2">Grey scale</p>
      <Row>
        <Col xs={12} md={8}>
          <ul className="horizontal-list">
            <li>
              <div className="frame-grey-scale background-color-body text-white">#353535</div>
            </li>
            <li>
              <div className="frame-grey-scale background-color-warn-grey text-white">#757272</div>
            </li>
            <li>
              <div className="frame-grey-scale background-color-soft-grey">#e2e2e2</div>
            </li>
            <li>
              <div className="frame-grey-scale background-color-soft-grey-variant">#ecedf1</div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="custom-divider" />
    <h1>Buttons</h1>
    <p className="body-1">
      <span className="font-weight-bold"> Important: </span>
      Use always class
      <code> .shadow-none </code>
      to remove outline on buttons.
    </p>
    <p className="body-1">
      For example for the first button the variant (class) attributte would be:
      <code>primary shadow-none</code>
    </p>
    <div>
      <ul className="horizontal-list">
        <li>
          <Button variant="primary shadow-none">Button Default</Button>
        </li>
        <li>
          <Button variant="primary shadow-none btn-primary-permanent-hover">Button Hover</Button>
        </li>
        <li>
          <Button variant="primary shadow-none btn-primary-visited">Button Pressed</Button>
        </li>
      </ul>
    </div>
    <div>
      <ul className="horizontal-list">
        <li>
          <Button variant="secondary shadow-none">Button Default</Button>
        </li>
        <li>
          <Button variant="secondary shadow-none btn-secondary-permanent-hover">Button Hover</Button>
        </li>
        <li>
          <Button variant="secondary shadow-none btn-secondary-visited">Button Pressed</Button>
        </li>
      </ul>
    </div>
    <div className="custom-divider" />
    <h1>Form elements</h1>
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" className="shadow-none" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formBasicNameTwo" className="errorOnForm">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" className="shadow-none" placeholder="Enter name" />
            <Form.Text className="text-muted">
              This field is required
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category type</Form.Label>
            <Form.Control as="select" className="shadow-none">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" className="shadow-none" rows={3} />
          </Form.Group>
        </Col>
        <Col>
          <span className="body-2">Inputs with background</span>
          <div className="form-input-with-background">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" className="shadow-none" placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category type</Form.Label>
              <Form.Control as="select" className="shadow-none">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="mt-4">
            <span className="body-2">Pagination an carousel</span>
            <Container className="mt-4">
              <Row>
                <Col>
                  <ul className="style-carrousel">
                    <li />
                    <li className="active" />
                    <li />
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul className="style-carrousel-two">
                    <li />
                    <li className="active" />
                    <li />
                  </ul>
                </Col>
              </Row>
            </Container>
            <Pagination className="mt-4">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="custom-divider" />
    <h1>Alert messages</h1>
    <Alert variant="danger" dismissible>
      <span>Error!</span>
      Es necesario llenar todos los campos obligatorios del formulario.
    </Alert>
    <Alert variant="success" dismissible>
      <span>Enviado con éxito.</span>
      Usted se ha registrado para el proximo evento.
    </Alert>
  </Layout>
);

export default StyleGuidePage;
