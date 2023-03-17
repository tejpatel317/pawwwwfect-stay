import React, { useState, useContext } from 'react';
import { Modal, Button, Table, Image } from 'react-bootstrap';
import { PetContext } from './App';

function SitterBookingPets({ bookingPets, onHide }) {
  const { pets } = useContext(PetContext);
  const bookedPets = bookingPets.map(bookingPet => pets.find(pet => pet.id === bookingPet.pet_id));

  console.log(bookedPets)

  return (
    <Modal show={true} onHide={onHide} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Pets for Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered hover className="table-light">
          <thead>
            <tr>
              <th>Image</th>  
              <th>Name</th>
              <th>Species</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {bookedPets.map((pet, index) => (
              <tr key={index}>
                <td className="table-text">  
                  <Image src={pet.image} alt={pet.name} rounded style={{ height: '200px' }} />
                </td>
                <td className="table-text">{pet.name}</td>
                <td className="table-text">{pet.species}</td>
                <td className="table-text">{pet.breed}</td>
                <td className="table-text">{pet.age}</td>
                <td className="table-text">{pet.weight} lbs</td>
                <td>{pet.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-dark" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SitterBookingPets;