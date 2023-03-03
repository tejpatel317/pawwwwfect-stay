import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PetCard from './PetCard'

function OwnerPetCards({user}) {

  const ownerPetCards = user.owner.pets.map((pet) => {
    return (<Col key={pet.id} className="col-md-4 p-3"><PetCard pet={pet}/></Col>)
  })


  return (
    <Container className="p-0">
      <Row>
        {ownerPetCards}
      </Row>
    </Container>
  )
}

export default OwnerPetCards