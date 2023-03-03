import React from 'react';
import { Card } from 'react-bootstrap';

function PetCard({ pet }) {
  const { name, species, breed, age, weight, description, image } = pet;

  return (
    <Card>
      <Card.Img variant="top" src={image} alt="PetImage" style={{ height: '200px' }}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Species: {species}<br />
          Breed: {breed}<br />
          Age: {age}<br />
          Weight: {weight} lbs<br />
          Description: {description}<br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PetCard;