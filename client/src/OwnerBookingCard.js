import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { UsersContext } from './App';
import { PetContext } from './App';
import { BookingContext } from './App';

function OwnerBookingCard({ booking }) {
  const {users} = useContext(UsersContext)
  const {pets} = useContext(PetContext)
  const { deleteBooking } = useContext(BookingContext);

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
          r.json().then((err) => {
            const errorMessages = err.errors;
            const errorMessage = errorMessages.join("\n");
            alert(errorMessage);
          }); 
        }
    });
  }

  const usersitter = users.filter(user => user.sitter).find(user => user.sitter.id === sitterID);
  const bookedPets = bookingPets.map(bookingPet => pets.find(pet => pet.id === bookingPet.pet_id));
  const petNames = bookedPets.map((pet, index) => (
    <React.Fragment key={index}>
      {pet.name}
      {index < bookedPets.length - 1 && <br />}
    </React.Fragment>
  ));
  const statusText = status ? 'Accepted' : 'Pending';
  const formattedStartDate = parseLocalDateString(startDate).toLocaleDateString();
  const formattedEndDate = parseLocalDateString(endDate).toLocaleDateString();
  const formattedPhoneNumber = usersitter.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
  const statusStyle = status ? 'table-success' : 'table-primary';
  const isEndDatePassed = new Date(endDate) < new Date()
  const dateStyle = isEndDatePassed ? 'table-dark' : '';

  return (
    <tr className={`${dateStyle} ${statusStyle}`}>
      <td className="table-text">{usersitter.first_name} {usersitter.last_name}</td>
      <td className="table-text">{usersitter.email}</td>
      <td className="table-text">{petNames}</td>
      <td className="table-text">{service}</td>
      <td className="table-text">Start Date:<br />{formattedStartDate}<br />End Date:<br />{formattedEndDate}</td>
      <td className="table-text">{usersitter.address}<br /> {usersitter.city} {usersitter.state} {usersitter.zip_code}</td>
      <td className="table-text">{formattedPhoneNumber}</td>
      <td className="table-text">${price.toFixed(2)}</td>
      <td className="table-text">{statusText}</td>
      <td>
        <Button className="btn-secondary" onClick={handleDelete}>DELETE</Button>
      </td>
    </tr>
  );
}


export default OwnerBookingCard;
