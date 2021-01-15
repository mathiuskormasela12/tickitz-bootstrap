// Import all modules
import React from 'react';

// Import bootstrap component
import {
  Row
} from 'react-bootstrap';

// Import component
import Charts from './Charts';

export default function ChartByLocation() {
  return (
    <Row>
      <Charts />
      <Charts />
      <Charts />
      <Charts />
      <Charts />
      <Charts />
    </Row>
  );
}
