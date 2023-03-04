import React from 'react'
import { ListGroup } from 'react-bootstrap';
import SitterListItem from './SitterListItem';

function SittersList({users}) {

  const sitterListItems = users.filter(((user) => user.sitter)).map((user) => {
    return (<SitterListItem key={user.id} user={user}/>)
  })

  return (
    <ListGroup>
      {sitterListItems}
    </ListGroup>
  )
}

export default SittersList