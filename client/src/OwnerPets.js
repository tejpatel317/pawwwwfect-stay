import React from 'react'
import PetForm from './PetForm'
import OwnerPetCards from './OwnerPetCards'


function OwnerPets({showPetForm, user, updateUser}) {

  return (
    <div>
      {showPetForm ? <PetForm updateUser={updateUser}/> : <OwnerPetCards user={user}/>}
    </div>
)}

export default OwnerPets