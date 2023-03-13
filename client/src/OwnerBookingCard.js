import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { UsersContext } from './App';
import { PetContext } from './App';

function OwnerBookingCard({ booking }) {
  const {users} = useContext(UsersContext)
  const {pets} = useContext(PetContext)

  const { 
    id, 
    pet_id: petID, 
    sitter_id: sitterID, 
    start_date: startDate, 
    end_date: endDate,
    service_type: service,
    price, 
    status 
  } = booking;

  const usersitter = users.filter(user => user.sitter).find(user => user.sitter.id === sitterID);

  const pet = pets.find(pets => pets.id === petID);
  const statusText = status ? 'Accept' : 'Pending';
  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();
  const formattedPhoneNumber = usersitter.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
  const statusStyle = status ? 'table-success' : 'table-primary';
  const isEndDatePassed = new Date(endDate) < new Date()
  const dateStyle = isEndDatePassed ? 'table-dark' : '';

  return (
    <tr className={`${dateStyle} ${statusStyle}`}>
      <td className="table-text">{usersitter.first_name} {usersitter.last_name}</td>
      <td className="table-text">{usersitter.email}</td>
      <td className="table-text">{pet.name}</td>
      <td className="table-text">{service}</td>
      <td className="table-text">Start Date:<br />{formattedStartDate}<br />End Date:<br />{formattedEndDate}</td>
      <td className="table-text">{usersitter.address}<br /> {usersitter.city} {usersitter.state} {usersitter.zip_code}</td>
      <td className="table-text">{formattedPhoneNumber}</td>
      <td className="table-text">${price.toFixed(2)}</td>
      <td className="table-text">{statusText}</td>
      <td>
        <Button className="btn-secondary">DELETE</Button>
      </td>
    </tr>
  );
}


export default OwnerBookingCard;
