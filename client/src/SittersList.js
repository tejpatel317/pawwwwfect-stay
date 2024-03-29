import React from 'react'
import { ListGroup } from 'react-bootstrap';
import SitterListItem from './SitterListItem';

function SittersList({filteredUsers}) {
  
  const sitterListItems = filteredUsers.filter(((usersitter) => usersitter.sitter)).map((usersitter) => {
    return (<SitterListItem key={usersitter.id} usersitter={usersitter}/>)
  })

  return (
    <ListGroup>
      {sitterListItems}
    </ListGroup>
  )
}

export default SittersList