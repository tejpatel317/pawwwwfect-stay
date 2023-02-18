import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [role, setRole] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [bio, setBio] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [rate, setRate] = useState('');
  const [services, setServices] = useState([]);
  const [availableServices, setAvailableServices] = useState([
    { value: 'Pet Boarding', label: 'Pet Boarding' },
    { value: 'Pet Sitting', label: 'Pet Sitting' },
    { value: 'Pet Activity', label: 'Pet Activity' },
  ]);

  const handleAddService = (event) => {
    event.preventDefault();
    if (!selectedService || !rate) return;
    if (services.some((service) => service.service === selectedService)) return;
    setServices([...services, { service: selectedService, rate: rate }]);
    setAvailableServices(availableServices.filter((service) => service.value !== selectedService));
    setSelectedService('');
    setRate('');
  };

  const handleRemoveService = (index) => {
    const serviceToRemove = services[index];
    setServices(services.filter((_, i) => i !== index));
    setAvailableServices([...availableServices, { value: serviceToRemove.service, label: serviceToRemove.service }]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
  <div className="home-page">
    <div className="form-details">
      <Form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p>It's free and only takes minutes</p>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="mt-2">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPasswordConfirmation">
          <Form.Label className="mt-2">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            placeholder="Confirm password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Label className="mt-2">First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Enter first name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label className="mt-2">Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Enter last name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label className="mt-2">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Enter phone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label className="mt-2">Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Enter address"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label className="mt-2">City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city"
            required
          />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label className="mt-2">State</Form.Label>
          <Form.Control
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
            placeholder="Enter state"
            required
          />
        </Form.Group>

        <Form.Group controlId="formZipCode">
          <Form.Label className="mt-2">Zip Code</Form.Label>
          <Form.Control
            type="text"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            placeholder="Enter zip code"
            required
          />
        </Form.Group>

        <Form.Group controlId="formRole">
          <Form.Label className="mt-2">Select Role</Form.Label>
          <Form.Control 
            as="select" 
            value={role} 
            onChange={(event) => {
            setRole(event.target.value);
            setServices([]);
            }}>
            <option value="">Select a role</option>
            <option value="sitter">Sitter</option>
            <option value="owner">Owner</option>
          </Form.Control>
        </Form.Group>

        {role === 'owner' && (
        <>
          <Form.Group controlId="formEmergencyPhoneNumber">
          <Form.Label className="mt-2">Emergency Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={emergencyPhoneNumber}
            onChange={(event) => setEmergencyPhoneNumber(event.target.value)}
            placeholder="Enter emergency phone number"
            required={role === "owner"}
            disabled={role !== "owner"}
          />
          </Form.Group>
        </>
        )}

        {role === 'sitter' && (
        <>
          <Form.Group controlId="formBio">
            <Form.Label className="mt-2">Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              placeholder="Tell us about yourself"
              required={role === "sitter"}
              disabled={role !== "sitter"}
            />
          </Form.Group>

          <Form.Group controlId="formServices">
            <div>
              <Table className="mt-2" striped bordered hover>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Rate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.service}</td>
                  <td>{service.rate}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveService(index)}>Remove</Button>
                  </td>
                </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <Form.Label className="mt-2">
                      Service:
                      <select className="form-select" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
                        <option value="">Select </option>
                        {availableServices.map((service) => (
                          <option key={service.value} value={service.value}>{service.label}</option>
                        ))}
                      </select>
                    </Form.Label>
                  </td>
                  <td>
                    <Form.Label className="mt-2">
                      Rate:
                      <input className="form-control" type="number" value={rate} onChange={(event) => setRate(event.target.value)} />
                    </Form.Label>
                  </td>
                  <td>
                   <Button className="btn btn-primary" onClick={handleAddService}>Add</Button>
                  </td>
                </tr>
              </tfoot>
              </Table>
            </div>
          </Form.Group>
        </>
        )}
        <Button variant="dark" className="mt-3" type="submit">
          Sign Up
        </Button>
        <div className="text-center mt-3">
         Already have an account? <Link to="/Login">Login here</Link>
        </div>
      </Form>
    </div>
  </div>
  )
}
export default Signup;