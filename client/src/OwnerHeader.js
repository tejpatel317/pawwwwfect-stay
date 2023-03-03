import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBed, faDog, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Button } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

function OwnerHeader({showPetForm, setPetShowForm}) {
  const location = useLocation();

  return (
    <div className="header">
        <Container className="mt-2 mb-5">
          <div className="iconlist">
              <NavLink to="/Owner/Home" className={`iconitem ${location.pathname === "/Owner/Home" ? "active-icon" : ""}`}>
                <FontAwesomeIcon icon={faHome}/>
                <span>Home</span>
              </NavLink>
              <NavLink to="/Owner/Bookings" className={`iconitem ${location.pathname === "/Owner/Bookings" ? "active-icon" : ""}`}>
                <FontAwesomeIcon icon={faBed}/>
                <span>Bookings</span>
              </NavLink>
              <NavLink to="/Owner/Pets" className={`iconitem ${location.pathname === "/Owner/Pets" ? "active-icon" : ""}`}>
                <FontAwesomeIcon icon={faDog}/>
                <span>Pets</span>
              </NavLink>
              <NavLink to="/Owner/Messages" className={`iconitem ${location.pathname === "/Owner/Messages" ? "active-icon" : ""}`}>
                <FontAwesomeIcon icon={faMessage}/>
                <span>Messages</span>
              </NavLink>
              <NavLink to="/Owner/Account" className={`iconitem ${location.pathname === "/Owner/Account" ? "active-icon" : ""}`}>
                <FontAwesomeIcon icon={faUser}/>
                <span>Account</span>
              </NavLink>
          </div>
          <h1 className="ownerhomemaintext mt-3 text-dark">Welcome to your pet owner dashboard!</h1>
          <p className="ownerhomedesctext my-4">Here you can view and manage all of your bookings and find the perfect sitter for your furry friend. We match you with experienced and trustworthy sitters in your area who are eager to care for your pet while you're away. We take great care to ensure that your pet receives the attention it deserves. To do this, we only allow our sitters to book one appointment at a time. This ensures that your pet receives the personalized care and attention they need, without being overlooked in a crowded or busy environment.</p>
          {location.pathname === '/Owner/Pets' && (
            <Button variant="dark" size="lg" className="w-25 mx-auto" onClick={() => setPetShowForm(!showPetForm)}>
              {showPetForm ? 'Click Here To Show Pets' : 'Click Here To Add Pets'}
            </Button>
          )}
        </Container>
    </div>
  )
}

export default OwnerHeader