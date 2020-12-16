import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import logo from '@assets/images/logo-rootstack.png';

import { LinkProps } from '@props/link';

import './navigation-bar.scss';

const links = [
  {
    label: 'Services',
    link: '/'
  },
  {
    label: 'Products',
    link: '/'
  },
  {
    label: 'Solution',
    link: '/'
  },
  {
    label: 'Work',
    link: '/'
  },
  {
    label: 'Resources',
    link: '/'
  },
  {
    label: 'Company',
    link: '/'
  }
] as LinkProps[];

export default function NavigationBar(): React.ReactElement {
  const navBarLinks = links.map((linkElement: LinkProps) => (
    <Nav.Link
      key={`link-${linkElement.label}`}
      className="small font-weight-bold mr-2 text-center"
      href={linkElement.link}
    >
      <span className="pr-2">{linkElement.label}</span>
      <FontAwesomeIcon icon={faAngleDown} className="navigation-bar-orange-arrow" />
    </Nav.Link>
  ));

  return (
    <Navbar className="navigation-bar px-0" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="navbar-small-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          {navBarLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
