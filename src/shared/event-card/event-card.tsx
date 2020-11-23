import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { EventCardProps } from '@props/event-card';

export default function EventCard({
  label, title, description, day, fullDate, time, status
}: EventCardProps): React.ReactElement {
  return (
    <Card className="d-flex event-card">
      <div className="event-card-description">
        <div className="body-3">
          <span className="badge badge-primary">{label}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="event-card-schedule">
        <span className="body-2">{day}</span>
        <h4>{fullDate}</h4>
        <div>
          <ul>
            <li>Time: {time}</li>
            <li>Registration: {status}</li>
          </ul>
          <a href="/">
            See event 
            <FontAwesomeIcon className="ml-1" icon={faAngleDoubleRight} />
          </a>
        </div>
      </div>
    </Card>
  );
}
