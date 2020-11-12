import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { LinkProps } from '@props/link';
import { TopBarProps } from '@props/top-bar';

import './top-bar.scss';

export default function TopBar({ linkList }: TopBarProps): React.ReactElement {
  const topBarLinks = linkList.map((linkElement: LinkProps) => (
    <Col key={`top-bar-link-${linkElement.label}`} className={linkElement.isActive ? 'active' : ''}>
      <div className="text-center text-uppercase">
        <a href={linkElement.link}>{linkElement.label}</a>
      </div>
    </Col>
  ));
  return (
    <div className="top-bar">
      <Row className="top-bar-row">
        <Col xs={12} md={12 - linkList.length} />
        {topBarLinks}
      </Row>
      <div className="top-bar-divider" />
    </div>
  );
}
