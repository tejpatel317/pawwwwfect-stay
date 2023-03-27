import React, {useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
import { PetContext } from './App';

function PetCard({ pet }) {
  const { id, name, species, breed, age, weight, description, image } = pet;
  const {deletePet} = useContext(PetContext)

  function handleDelete(){
    fetch(`/pets/${id}`, {
      method: "DELETE",
      })
      .then((r) => {
        if (r.ok) {
          deletePet(id)
        } else {
          r.json().then((err) => {
            const errorMessages = err.errors;
            const errorMessage = errorMessages.join("\n");
            alert(errorMessage);
          }); 
        }
    });
  }

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
          Description: {description}
          <br />
        </Card.Text>
        <Button variant="dark" onClick={handleDelete}>
          Remove Pet
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;