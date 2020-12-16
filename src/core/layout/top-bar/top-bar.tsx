import React from 'react';

import { LinkProps } from '@props/link';
import './top-bar.scss';
import { Nav, Navbar } from 'react-bootstrap';

const links = [
  {
    label: 'Events',
    link: '/',
    isActive: false
  },
  {
    label: 'Contact us',
    link: '/',
    isActive: true
  },
  {
    label: 'En / Es',
    link: '/',
    isActive: false
  }
] as LinkProps[];

export default function TopBar(): React.ReactElement {
  return (
    <Navbar collapseOnSelect expand="lg" className="top-bar p-0">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {links.map((link: LinkProps) => (
            <Nav.Link
              key={link.label}
              className={link.isActive ? 'active text-white small' : 'small'}
              href={link.link}
            >
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
