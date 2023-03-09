import React, {useState} from 'react'
import { ListGroup, Image, Row, Col, Modal, Button} from 'react-bootstrap';
import BookingForm from './BookingForm';

function SitterListItem({usersitter, user}) {

  const {
    first_name: firstName,
    last_name: lastName,
    city,
    state,
    zip_code: zipCode,
    sitter} = usersitter;

    const [showModal, setShowModal] = useState(false);

    const handleBookNow = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };


  return (
    <>
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
            <button className="btn btn-dark w-100" onClick={handleBookNow} disabled={user.owner.pets.length === 0}>
              {user.owner.pets.length === 0 ? "Add Pet to Book" : "BookNow"}
            </button>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Form</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-0 pt-0">
        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} className="mb-4">
          <Image src={sitter.image} alt="Avatar" style={{ height: 200, maxWidth: "100%" }} />
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <h4>{firstName} {lastName}</h4>
              <li>{city}</li>
              <li>{state}</li>
              <li>{zipCode}</li>
            </ul>
          </div>
          <div className="col-md-6 justify-content-end">
            <h4 className="mb-3">Service and Rates</h4>
            <ul className="list-unstyled">
              {sitter.services.map(service => (
                <li key={service.id}>{`${service.description} - $${service.rate}`}</li>
              ))}
            </ul>
          </div>
        </div>
      <BookingForm user={user} usersitter={usersitter}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default SitterListItem