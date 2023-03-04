import { useState } from 'react';
import { Form, Button, ListGroup, Image, Row, Col} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function OwnerHome() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [service, setService] = useState('Pet Boarding');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-4 search-form">
          <h3 className="text-center">Search For A Booking</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="service">
              <Form.Label className="search-label">Service</Form.Label>
              <Form.Control
                as="select"
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                <option value="Pet Boarding">Pet Boarding</option>
                <option value="Pet Sitting">Pet Sitting</option>
                <option value="Pet Activity">Pet Activity</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label className="search-label">City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Enter city"
                required
              />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label className="search-label">State</Form.Label>
              <Form.Control
                type="text"
                value={state}
                onChange={(event) => setState(event.target.value)}
                placeholder="Enter state"
                required
              />
            </Form.Group>
            <Form.Group controlId="dates">
              <Form.Label className="search-label">Dates</Form.Label>
              <div className="d-flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start Date"
                  className="form-control mr-2"
                />
                {service !== 'Pet Sitting' && service !== 'Pet Activity' && (
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    className="form-control"
                  />
                )}
                {(service === 'Pet Sitting' || service === 'Pet Activity') && (
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={startDate}
                    placeholderText="End Date"
                    className="form-control"
                  />
                )}
              </div>
            </Form.Group>
            <Button type="submit" variant="dark" className="mt-3 w-100">
              Search
            </Button>
          </Form>
        </div>
        <div className="col-md-8 pt-4 px-5">
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={4}>
                  <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg" alt="Avatar" style={{ height: "100%", maxWidth: "100%" }} />
                  </div>
                </Col>
                <Col xs={4}>
                  <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{fontWeight: "bold", fontSize: "1.2em"}}>John Doe</div>
                    <div style={{fontSize: "1.2em"}}>New York City</div>
                    <div style={{fontSize: "1.2em"}}>New York</div>
                    <div style={{fontSize: "1.2em"}}>07024</div>
                    <p className="mt-3">To book an appointment with this pet sitter, click on"Book Now" and fill out the form.</p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <h4 className="mb-3">Service and Rates</h4>
                      <ul className="list-unstyled">
                        <li>Pet Boarding - $20</li>
                        <li>Pet Sitting - $10</li>
                        <li>Pet Activity - $5</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center flex-column mt-2">
                    <button className="btn btn-dark w-100">Book Now</button>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs={4}>
                  <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg" alt="Avatar" style={{ height: "100%", maxWidth: "100%" }} />
                  </div>
                </Col>
                <Col xs={4}>
                  <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{fontWeight: "bold", fontSize: "1.2em"}}>John Doe</div>
                    <div style={{fontSize: "1.2em"}}>New York City</div>
                    <div style={{fontSize: "1.2em"}}>New York</div>
                    <div style={{fontSize: "1.2em"}}>07024</div>
                    <p className="mt-3">To book an appointment with this pet sitter, click on"Book Now" and fill out the form.</p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <h4 className="mb-3">Service and Rates</h4>
                      <ul className="list-unstyled">
                        <li>Pet Boarding - $20</li>
                        <li>Pet Sitting - $10</li>
                        <li>Pet Activity - $5</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center flex-column mt-2">
                    <button className="btn btn-dark w-100">Book Now</button>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs={4}>
                  <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg" alt="Avatar" style={{ height: "100%", maxWidth: "100%" }} />
                  </div>
                </Col>
                <Col xs={4}>
                  <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{fontWeight: "bold", fontSize: "1.2em"}}>John Doe</div>
                    <div style={{fontSize: "1.2em"}}>New York City</div>
                    <div style={{fontSize: "1.2em"}}>New York</div>
                    <div style={{fontSize: "1.2em"}}>07024</div>
                    <p className="mt-3">To book an appointment with this pet sitter, click on"Book Now" and fill out the form.</p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <h4 className="mb-3">Service and Rates</h4>
                      <ul className="list-unstyled">
                        <li>Pet Boarding - $20</li>
                        <li>Pet Sitting - $10</li>
                        <li>Pet Activity - $5</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center flex-column mt-2">
                    <button className="btn btn-dark w-100">Book Now</button>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs={4}>
                  <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg" alt="Avatar" style={{ height: "100%", maxWidth: "100%" }} />
                  </div>
                </Col>
                <Col xs={4}>
                  <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{fontWeight: "bold", fontSize: "1.2em"}}>John Doe</div>
                    <div style={{fontSize: "1.2em"}}>New York City</div>
                    <div style={{fontSize: "1.2em"}}>New York</div>
                    <div style={{fontSize: "1.2em"}}>07024</div>
                    <p className="mt-3">To book an appointment with this pet sitter, click on"Book Now" and fill out the form.</p>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <h4 className="mb-3">Service and Rates</h4>
                      <ul className="list-unstyled">
                        <li>Pet Boarding - $20</li>
                        <li>Pet Sitting - $10</li>
                        <li>Pet Activity - $5</li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center flex-column mt-2">
                    <button className="btn btn-dark w-100">Book Now</button>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}


export default OwnerHome