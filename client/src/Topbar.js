import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Topbar({user, setUser}) {
  const location = useLocation();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

return (
  <div className="row">
    <Navbar className="px-4">
      {
        user ?
        (
          <Container>
            <div className="col-6">
              <h3>{user.first_name}</h3>
            </div>
            <div className="col-6">
              <Nav className="justify-content-end">
                <Link to="/">
                  <button className="btn btn-lg btn-dark" onClick={handleLogoutClick}>Logout</button>
                </Link>
              </Nav>
            </div>
          </Container>
        )
        :
        (
          <>
            <div className="col-6">
              <Link to="/" className="navbar-brand mx-5">
                <img src="https://cdn-icons-png.flaticon.com/512/7174/7174741.png" width="50" height="50" alt="Logo"/>
                <h2 className="d-inline align-middle ml-2 text-black">Pawwww<span className="text-light">fect Stay</span></h2>
              </Link>
            </div>
            <div className="col-6">
              <Nav className="justify-content-end">
                <NavLink to="/Login" className={`navbar-link ${location.pathname === "/Login" ? "active-topbar" : ""}`}>
                  Login
                </NavLink>
                <NavLink to="/Signup" className={`navbar-link ${location.pathname === "/Signup" ? "active-topbar" : ""}`}>
                  Signup
                </NavLink>
              </Nav>
            </div>
          </>
        )
      }
    </Navbar>
  </div>
)
}

export default Topbar