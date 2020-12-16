import React from 'react';

import '@styles/base.scss';

export default function IndexPage(): React.ReactElement {
  return (
    <div className="mb-5">
      <h1>Demo 19 - 11 - 2020</h1>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/profile-manage-teams">Profile Manage teams</a>
        </li>
        <li>
          <a href="/profile-staff-augmentation">Profile staff augmentation</a>
        </li>
        <li>
          <a href="/profile-project-based">Profile project based</a>
        </li>
        <li>
          <a href="/success-stories">Success stories</a>
        </li>
      </ul>
    </div>
  );
}
