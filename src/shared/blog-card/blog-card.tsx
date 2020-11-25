import React from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ImageProvider from '@core/providers/image/image-provider';
import { BlogCardProps } from '@props/blog-card';

import './blog-card.scss';

export default function BlogCard({
  image, title, fullDate, tags, shortText, link
}: BlogCardProps): React.ReactElement {
  return (
    <Card className="blog-card">
      <ImageProvider fileName={image} className="card-img-top" alt="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ul className="pl-0">
            <li className="blog-card-hightlight-date">{fullDate}</li>
            <li className="blog-card-tags">
              Tags:
              <span className="ml-1">{tags}</span>
            </li>
          </ul>
        <Card.Text>
          <span>{shortText}</span>
        </Card.Text>
        <div className="blog-card-see-more text-right">
          <a href={link.link}>
            {link.label}
            <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}
