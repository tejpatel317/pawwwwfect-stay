import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { PetContext } from './App';

function PetForm() {
  const {updatePets} = useContext(PetContext)

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        species,
        breed,
        age,
        weight,
        image,
        description,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newPet) => updatePets(newPet));
      } else {
      // handle form submission errors
      }
    });
  }

  return (
  <div className="form-details">
    <Form onSubmit={handleSubmit}>
      <h2>Add Pet</h2>

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter pet name"
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formSpecies">
        <Form.Label>Species</Form.Label>
        <Form.Control
          type="text"
          value={species}
          onChange={(event) => setSpecies(event.target.value)}
          placeholder="Enter pet species"
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formBreed">
        <Form.Label>Breed</Form.Label>
        <Form.Control
          type="text"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          placeholder="Enter pet breed"
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="Enter pet age"
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="number"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
          placeholder="Enter pet weight in lbs"
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="Enter pet image URL"
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter pet description"
          required
          className="form-control"
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="mt-3">
        Add Pet
      </Button>
    </Form>
  </div>
  )
}

export default PetForm;