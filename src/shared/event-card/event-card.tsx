import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { EventCardProps } from '@props/event-card';

import './event-card.scss';

export default function EventCard({ event }: EventCardProps): React.ReactElement {
  return (
    <Card className="event-card event-card-standard">
      <Card.Body className="d-flex p-0">
        <div className="event-card-description p-3">
          <div className="body-3">
            <span className="badge badge-secondary pl-4 pr-4">{event.label}</span>
          </div>
          <h3 className="mt-3">{event.title}</h3>
          <p className="mt-4 body-2">{event.description}</p>
        </div>
        <div className="event-card-schedule pt-2">
          <span className="body-2 pl-2">{event.dayWeek}</span>
          <h4 className="mt-2 pl-2">{`${event.day} ${event.month}, ${event.year}`}</h4>
          <div className="event-card-see-event mt-3 p-3">
            <ul className="pl-0">
              <li>
                Time:
                <span className="ml-1">{`${event.startTime} to ${event.endTime}`}</span>
              </li>
              <li>
                Registration:
                <span className="ml-1">{event.status}</span>
              </li>
            </ul>
            <a href="/">
              See event
              <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
