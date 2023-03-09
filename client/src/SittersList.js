import React from 'react'
import { ListGroup } from 'react-bootstrap';
import SitterListItem from './SitterListItem';

function SittersList({users, user}) {

  const sitterListItems = users.filter(((usersitter) => usersitter.sitter)).map((usersitter) => {
    return (<SitterListItem key={usersitter.id} usersitter={usersitter} user={user}/>)
  })

  return (
    <ListGroup>
      {sitterListItems}
    </ListGroup>
  )
}

export default SittersList