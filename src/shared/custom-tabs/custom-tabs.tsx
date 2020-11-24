import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Formsales from '@shared/form/form-sales';

import './custom-tabs.scss';

export default function CustomTabs(): React.ReactElement {
  return (
    <Tabs defaultActiveKey="sales" className="custom-tabs">
      <Tab eventKey="sales" title="Sales" className="p-5">
        <Formsales />
      </Tab>
      <Tab eventKey="support" title="Support" className="p-5">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo quidem culpa
          deleniti modi. Alias voluptatibus dolores molestiae impedit nobis ipsum incidunt
          consectetur, sequi dolorum officiis eligendi, quisquam numquam quia!
        </p>
      </Tab>
    </Tabs>
  );
}
