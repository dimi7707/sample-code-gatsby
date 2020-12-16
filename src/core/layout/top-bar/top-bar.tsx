import React from 'react';

import { LinkProps } from '@props/link';
import './top-bar.scss';
import { Nav, Navbar } from 'react-bootstrap';

export default function TopBar({ currentLanguage, urlCurrentVersion, urlTranslateVersion }): React.ReactElement {
  const enLangActive = currentLanguage !== undefined && currentLanguage === 'en';
  const spanishLink = currentLanguage === 'es'
    ? `${process.env.URL_ROOT_MYSELF}${urlCurrentVersion}`
    : `${process.env.URL_ROOT_MYSELF}${urlTranslateVersion}`;
  const englishLink = currentLanguage === 'en'
    ? `${process.env.URL_ROOT_MYSELF}${urlCurrentVersion}`
    : `${process.env.URL_ROOT_MYSELF}${urlTranslateVersion}`;

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
      label: 'En /',
      link: englishLink,
      isActive: enLangActive
    },
    {
      label: 'Es',
      link: spanishLink,
      isActive: !enLangActive
    }
  ] as LinkProps[];

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
