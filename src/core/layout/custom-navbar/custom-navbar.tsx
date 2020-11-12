import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { LinkProps } from '@props/link';
import { NavbarProps } from '@props/navbar';

import './custom-navbar.scss';

export default function CustomNavbar({ image, linkList }: NavbarProps): React.ReactElement {
  const navBarLinks = linkList.map((linkElement: LinkProps) => (
    <Nav.Link key={`link-${linkElement.label}`} href={linkElement.link}>
      <span className="pr-2">{linkElement.label}</span>
      <FontAwesomeIcon icon={faAngleDown} className="orange-arrow" />
    </Nav.Link>
  ));
  return (
    <Navbar className="navbar py-0" expand="lg">
      <Navbar.Brand href="/">
        <img src={image} alt="logo" className="navbar-small-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">{navBarLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
