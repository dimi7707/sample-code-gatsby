import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImageProvider from '@core/providers/image/image-provider';
import { SocialIcon } from '@shared/models/social-icon';
import { FooterProps } from '@props/footer';

import './footer.scss';

export default function Footer(): React.ReactElement {
  const footerData = {
    logo: 'logo-rootstack-footer.svg',
    backgroundColor: { background: '#04182e' },
    socialIconList: [
      {
        icon: 'facebook-square-brands.svg',
        link: '/'
      }
    ]
  } as FooterProps;

  const socialIcons = footerData.socialIconList.map((icon: SocialIcon) => (
    <a href={icon.link} key={`social-${icon.icon}`} className="footer-link-social-icon" >
      <ImageProvider fileName={icon.icon} className="" alt="" />
    </a>
  ));

  return (
    <footer className="footer pt-4" style={footerData.backgroundColor}>
      <Container className="container-fluid text-center text-md-left">
        <Row>
          <Col className="col-md-6 mt-md-0 mt-3">
            <ImageProvider fileName={footerData.logo} className="footer-main-logo" alt="" />
            <div className="footer-social-icons">
              {socialIcons}
            </div>
            <p className="footer-text-copyright small">
              Copyright © 2017 Rootstack. All Rights Reserved.
            </p>
          </Col>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <Col className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Panamá</h5>
            <ul className="list-unstyled">
              <li className="small">IPA Street. House #10, Hato Pintado,</li>
              <li className="small">Panama City, Panama.</li>
            </ul>
            <ul className="list-unstyled">
              <li className="small">+507 209 9002</li>
              <li className="small">+507 399 0129</li>
            </ul>
          </Col>
          <Col className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">USA</h5>
            <ul className="list-unstyled">
              <li className="small">4241 John&apos;s Light Dr. </li>
              <li className="small">Austin, Texas. </li>
              <li className="small">78727. USA.</li>
            </ul>
            <ul className="list-unstyled">
              <li className="small"> +1 215-883-4359</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
