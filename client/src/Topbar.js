import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function Topbar() {

return (
  <div class="row">
    <Navbar className="bg-cf7cf5" variant="light">
      <div className="col-6">
        <Link to="/" className="navbar-brand mx-5">
          <img src="https://cdn-icons-png.flaticon.com/512/7174/7174741.png" width="50" height="50" alt="Logo"/>
          <h2 className="d-inline align-middle ml-2 text-black">Pawwww<span className="text-light">fect Stay</span></h2>
        </Link>
      </div>
      <div className="col-6">
        <Nav className="justify-content-end">
          <NavLink to="/Login" className="navbar-link">Login</NavLink>
          <NavLink to="/Signup" className="navbar-link">Signup</NavLink>
        </Nav>
      </div>
    </Navbar>
  </div>
)
}

export default Topbar