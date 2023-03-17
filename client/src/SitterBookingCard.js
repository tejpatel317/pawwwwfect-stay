import React, {useContext, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { UsersContext } from './App';
import { PetContext } from './App';
import { BookingContext } from './App';
import SitterBookingPets from './SitterBookingPets';

function SitterBookingCard({ booking }) {
  const {users} = useContext(UsersContext)
  const {pets} = useContext(PetContext)
  const { deleteBooking } = useContext(BookingContext);
  const [showPetModal, setShowPetModal] = useState(false);

  const { 
    id,
    sitter_id: sitterID, 
    start_date: startDate, 
    end_date: endDate,
    service_type: service,
    booking_pets: bookingPets,
    price, 
    status 
  } = booking;

  function parseLocalDateString(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  function handleDelete(){
    fetch(`/bookings/${id}`, {
      method: "DELETE",
      })
      .then((r) => {
        if (r.ok) {
          deleteBooking(id, sitterID)
        } else {
          r.json().then((err) => console.log(err));
        }
    });
  }

  const bookedPets = bookingPets.map(bookingPet => pets.find(pet => pet.id === bookingPet.pet_id));
  const userowner = users.find(user => user.owner && user.owner.id === bookedPets[0].owner_id);
  const petNames = bookedPets.map((pet, index) => (
    <React.Fragment key={index}>
      {pet.name}
      {index < bookedPets.length - 1 && <br />}
    </React.Fragment>
  ));
  const statusText = status ? 'ACCEPTED' : <Button className="btn-dark">ACCEPT</Button>;
  const formattedStartDate = parseLocalDateString(startDate).toLocaleDateString();
  const formattedEndDate = parseLocalDateString(endDate).toLocaleDateString();
  const formattedPhoneNumber = userowner.owner.emergency_contact_number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
  const statusStyle = status ? 'table-success' : 'table-primary';
  const isEndDatePassed = new Date(endDate) < new Date()
  const dateStyle = isEndDatePassed ? 'table-dark' : '';

  return (
    <>
      <tr className={`${dateStyle} ${statusStyle}`}>
        <td className="table-text">{userowner.first_name} {userowner.last_name}</td>
        <td className="table-text">{userowner.email}</td>
        <td className="table-text">
          <Button className="btn-success" onClick={() => setShowPetModal(true)}>VIEW PETS</Button>
          {showPetModal && (
            <SitterBookingPets bookingPets={bookingPets} onHide={() => setShowPetModal(false)} />
          )}
        </td>
        <td className="table-text">{service}</td>
        <td className="table-text">Start Date:<br />{formattedStartDate}<br />End Date:<br />{formattedEndDate}</td>
        <td className="table-text">{userowner.address}<br /> {userowner.city} {userowner.state} {userowner.zip_code}</td>
        <td className="table-text">{formattedPhoneNumber}</td>
        <td className="table-text">${price.toFixed(2)}</td>
        <td className="table-text">{statusText}</td>
        <td>
          <Button className="btn-secondary" onClick={handleDelete}>DELETE</Button>
        </td>
      </tr>
  </>
  );
}


export default SitterBookingCard;
