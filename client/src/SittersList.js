import React, {useContext} from 'react'
import { ListGroup } from 'react-bootstrap';
import { UsersContext } from './App';
import { BookingContext } from './App';
import SitterListItem from './SitterListItem';

function SittersList() {
  const {users} = useContext(UsersContext)
  
  const sitterListItems = users.filter(((usersitter) => usersitter.sitter)).map((usersitter) => {
    return (<SitterListItem key={usersitter.id} usersitter={usersitter}/>)
  })

  return (
    <ListGroup>
      {sitterListItems}
    </ListGroup>
  )
}

export default SittersList