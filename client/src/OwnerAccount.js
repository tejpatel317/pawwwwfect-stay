import React from 'react';
import { Form } from 'react-bootstrap';


function OwnerAccount({user}) {

  const {
    email,
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    address,
    city,
    state,
    zip_code: zipCode,
    owner: {
      emergency_contact_number: emergencyPhoneNumber,
    }} = user;
  
  return (
    <div>
      <div className="form-details">
        <Form>  
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder={email}
              disabled
          />
        </Form.Group>
  
          <Form.Group controlId="formFirstName">
            <Form.Label className="mt-2">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={firstName}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formLastName">
            <Form.Label className="mt-2">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={lastName}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formPhoneNumber">
            <Form.Label className="mt-2">Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder={phoneNumber}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formAddress">
            <Form.Label className="mt-2">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder={address}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formCity">
            <Form.Label className="mt-2">City</Form.Label>
            <Form.Control
              type="text"
              placeholder={city}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formState">
            <Form.Label className="mt-2">State</Form.Label>
            <Form.Control
              type="text"
              placeholder={state}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formZipCode">
            <Form.Label className="mt-2">Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder={zipCode}
              disabled
            />
          </Form.Group>
  
          <Form.Group controlId="formEmergencyPhoneNumber">
            <Form.Label className="mt-2">Emergency Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder={emergencyPhoneNumber}
              disabled
            />
            </Form.Group>
        </Form>
      </div>
    </div>
    )
}

export default OwnerAccount