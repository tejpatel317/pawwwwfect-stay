import React from 'react'
import PetForm from './PetForm'
import OwnerPetCards from './OwnerPetCards'


function OwnerPets({showPetForm}) {

  return (
    <div>
      {showPetForm ? <PetForm/> : <OwnerPetCards/>}
    </div>
)}

export default OwnerPets