import React, {useContext} from 'react'
import {Container, Table} from 'react-bootstrap'
import SitterBookingCard from './SitterBookingCard';
import { BookingContext } from './App';

function SitterBookings() {
  const {bookings} = useContext(BookingContext)


  const sortedBookings = bookings.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA; 
  });

  const sitterBookingCards = (sortedBookings.map((booking) => {
    return (<SitterBookingCard booking={booking} key={booking.id}/>)
  }))


  return (
    <Container className="mt-5 p-0">
      <Table striped bordered hover variant="primary">
        <thead className="bg-dark text-dark">
          <tr>
            <th>Sitter</th>
            <th>Email</th>
            <th>Pet</th>
            <th>Service Type</th>
            <th>Dates</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sitterBookingCards}
        </tbody>
      </Table>
    </Container>
  )
}

export default SitterBookings