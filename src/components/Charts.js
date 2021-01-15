// Import all modules
import React, { useState } from 'react';

// Import bootstrap components
import { 
  Col, 
  Nav, 
  Card 
} from 'react-bootstrap';

function Charts () {
  const [selectedPage, setSelectedPage] = useState('Weekly');

  return (
    <Col md={4} className="mt-4">
      <div id="charts">
        <Card className="card-radius border-0">
          <Card.Body className="p-5">
            <h6 className="font-weight-bold">Avengers: End Game</h6>
            <Nav defaultActiveKey="weekly" onSelect={currentPage => setSelectedPage(currentPage)}>
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="weekly" className="text-muted">
                  <small>
                    Weekly
                  </small>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="monthly" className="text-muted">
                  <small>
                    Monthly
                  </small>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navbar-item">
                <Nav.Link eventKey="yearly" className="text-muted">
                  <small>
                    Yearly
                  </small>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {
              selectedPage === 'Weekly' ? '' : selectedPage === 'Monthly' ? '' : selectedPage === 'Yearly' ? '' : ''
            }
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default Charts;
