import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PetContext } from './App'; 
import { BookingContext } from './App';
import { useNavigate } from 'react-router-dom';

function BookingForm({usersitter}) {
  const {pets} = useContext(PetContext)
  const {addBooking} = useContext(BookingContext)
  const [service, setService] = useState(usersitter.sitter.services[0].description)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedPets, setSelectedPets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (service !== 'Pet Boarding' && startDate) {
      setEndDate(startDate)
    }
  }, [service, startDate])

  useEffect(() => {
    if (service && startDate && endDate && selectedPets.length) {
      const serviceObj = usersitter.sitter.services.find((s) => s.description === service);
      if (serviceObj) {
        const rate = serviceObj.rate;
        const numDays = ((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        const numPets = selectedPets.length;
        setTotalPrice(Number(rate * numDays * numPets).toFixed(2))
      }
    } else {
      setTotalPrice(0);
    }
  }, [service, startDate, endDate, selectedPets]);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    const localStartDate = formatDate(startDate);
    const localEndDate = formatDate(endDate);

    e.preventDefault();
    fetch("/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pet_ids: selectedPets,
        sitter_id: usersitter.sitter.id,
        start_date: localStartDate,
        end_date: localEndDate,
        price: totalPrice,
        service_type: service,
        status: false,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newBooking) => addBooking(newBooking, usersitter.sitter.id));
        navigate('/Owner/Bookings');
      } else {
        r.json().then((error) => console.log(error))
      }
    });
  }


  return (
  <div className="border border-dark p-3">
    <Form onSubmit={handleSubmit}>
      <h2 class="text-center">Book Now</h2>
      <Form.Group controlId="formService">
        <Form.Label>Select a service</Form.Label>
        <Form.Select
          value={service}
          onChange={(event) => setService(event.target.value)}
          className="form-select"
        >
          {usersitter.sitter.services.map(service => (
            <option key={service.id} value={service.description}>{service.description}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="dates">
        <Form.Label>Dates</Form.Label>
        <div className="d-flex">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="form-control mr-2"
            required
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
              required
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
              disabled 
            />
          )}
        </div>
      </Form.Group>
      <Form.Group controlId="formPets">
        <Form.Label>Select pet(s)</Form.Label>
          {pets.map((pet) => (
            <Col xs={12} md={6} key={pet.id}>
              <Form.Check
                type="checkbox"
                id={pet.id}
                label={pet.name}
                checked={selectedPets.includes(pet.id)}
                onChange={(event) =>
                  setSelectedPets(
                    event.target.checked
                      ? [...selectedPets, pet.id]
                      : selectedPets.filter((petId) => petId !== pet.id)
                  )
                }
              />
            </Col>
        ))}
      </Form.Group>
      <div className="total-price">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
      <Button type="submit" variant="dark" className="mt-3 w-100" disabled={selectedPets.length === 0}>
        Book Service
      </Button>
    </Form>
  </div>
  )
}

export default BookingForm;