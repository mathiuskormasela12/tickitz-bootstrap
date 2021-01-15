import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  Button, 
  InputGroup 
} from 'react-bootstrap';

export default function UserAccountSetting() {
    return (
      <React.Fragment>
        <div id="userprofile">
          <Card style={{ borderRadius: "1rem" }} className="border-0 my-4">
            <Container>
              <Card.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} className="bg-white pt-4">
                <span>Details Information</span>
              </Card.Header>
              <Card.Body>
                <Form className="mt-3">
                  <Row className="mb-4">
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value="Jonas" className="rounded p-3" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value="El Rodriguez" className="rounded p-3" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" value="jonasrodrigu123@gmail.com" className="rounded p-3" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Label>Phone Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text className="bg-white p-3">+62</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="tel" value="81445687121" className="rounded p-3" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Container>
          </Card>
          <Card style={{ borderRadius: "1rem" }} className="border-0 my-4">
            <Container>
              <Card.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} className="bg-white pt-4">
                <span>Account and Privacy</span>
              </Card.Header>
              <Card.Body>
                <Form className="mt-3">
                  <Row>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Write your password" className="rounded p-3" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm your password" className="rounded p-3" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Container>
          </Card>
          <div className="text-center">
            <Button variant="primary" type="submit" className="rounded-pill mt-2 py-3 w-50">Update changes</Button>
          </div>
        </div>
      </React.Fragment>
    );
}

  

