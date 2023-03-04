import React from 'react'
import { ListGroup, Image, Row, Col} from 'react-bootstrap';

function SitterListItem({user}) {

  const {
    first_name: firstName,
    last_name: lastName,
    city,
    state,
    zip_code: zipCode,
    sitter} = user;

  return (
    <ListGroup.Item>
      <Row>
        <Col xs={4}>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src={sitter.image} alt="Avatar" style={{ height: "100%", maxWidth: "100%" }} />
          </div>
        </Col>
        <Col xs={4}>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{fontWeight: "bold", fontSize: "1.2em"}}>{firstName} {lastName}</div>
            <div style={{fontSize: "1.2em"}}>{city}</div>
            <div style={{fontSize: "1.2em"}}>{state}</div>
            <div style={{fontSize: "1.2em"}}>{zipCode}</div>
            <p className="mt-3">To book an appointment with this pet sitter, click on"Book Now" and fill out the form.</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="d-flex justify-content-between mt-2">
            <div>
              <h4 className="mb-3">Service and Rates</h4>
              <ul className="list-unstyled">
                {sitter.services.map(service => (
                    <li key={service.id}>{`${service.description} - $${service.rate}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center flex-column mt-2">
            <button className="btn btn-dark w-100">Book Now</button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default SitterListItem