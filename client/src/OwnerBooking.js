import React, {useContext} from 'react'
import {Container, Table} from 'react-bootstrap'
import OwnerBookingCard from './OwnerBookingCard.js'
import { BookingContext } from './App';

function OwnerBooking() {
  const {bookings} = useContext(BookingContext)


  const sortedExpandedBookings = bookings.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateB - dateA; 
  });

  console.log(sortedExpandedBookings)

  const ownerBookingCards = (sortedExpandedBookings.map((booking) => {
    return (<OwnerBookingCard booking={booking} key={booking.id}/>)
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
          {ownerBookingCards}
        </tbody>
      </Table>
    </Container>
  )
}

export default OwnerBooking