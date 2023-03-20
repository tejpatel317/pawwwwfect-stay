import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

function SitterHeader() {
  const location = useLocation();

  return (
    <div className="header">
        <Container className="mt-2 mb-5">
          <div className="iconlist">
            <NavLink to="/Sitter/Account" className={`iconitem ${location.pathname === "/Sitter/Account" ? "active-icon" : ""}`}>
              <FontAwesomeIcon icon={faUser}/>
              <span>Account</span>
            </NavLink>
            <NavLink to="/Sitter/Bookings" className={`iconitem ${location.pathname === "/Sitter/Bookings" ? "active-icon" : ""}`}>
              <FontAwesomeIcon icon={faBed}/>
              <span>Bookings</span>
            </NavLink>
          </div>
          <h1 className="ownerhomemaintext mt-3 text-dark">Welcome to your pet sitters dashboard!</h1>
          <p className="ownerhomedesctext my-4">Welcome to the Pet Sitter Dashboard. Using this platform, you will be able to manage all your booking requests and accept bookings for the services of your choice! We make sure that you will only have one request per date to ensure you do not have an overcrowded schedule. With this system, we hope that you can provide your undivided attention and care in every booking. Thank you for choosing our platform to showcase your love and care for pets. We are excited to connect you with pet owners in your area and help you build meaningful relationships with pets and owners to make for a Pawwwwfect Stay.</p>
        </Container>
    </div>
  )
}

export default SitterHeader