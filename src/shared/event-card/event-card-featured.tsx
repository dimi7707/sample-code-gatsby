import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { EventCardProps } from '@props/event-card';
import ImageProvider from '@core/providers/image/image-provider';

import './event-card.scss';

export default function EventCardFeatured({
  label, title, description, day, month, dayWeek, startTime, endTime, status, image
}: EventCardProps): React.ReactElement {
  return (
    <Card className="event-card event-card-featured">
      <Card.Body className="d-flex p-0">
        <div className="event-card-description pl-5 pb-4 pt-3">
          <div className="body-2">
            <span className="badge badge-secondary pl-4 pr-4">{label}</span>
          </div>
          <h2 className="mt-3">{title}</h2>
          <p className="mt-4 body-2 w-75">{description}</p>
        </div>
        <div className="event-card-shedule text-center">
          <div className="event-card-schedule-calendar pt-2 pb-2">
            <p className="mb-0 h6 text-white">{dayWeek}</p>
            <p className="mb-0 display-4">{day}</p>
            <p className="mb-0 h6 text-white">{month}</p>
          </div>
          <ul className="pl-0 text-md-left mt-4">
            <li>
              Time:
              <span className="ml-1">{`${startTime} to ${endTime}`}</span>
            </li>
            <li>
              Registration:
              <span className="ml-1">{`${status}`}</span>
            </li>
          </ul>
          <Button variant="primary" className="text-white mb-4">
            See event
            <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
          </Button>
        </div>
        <div className="event-card-image w-100">
          <ImageProvider fileName={image} alt="" className="" />
        </div>
      </Card.Body>
    </Card>
  );
}
