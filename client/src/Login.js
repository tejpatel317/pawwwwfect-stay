import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Login({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate('/')
      } else {
        r.json().then((err) => console.log(err.errors)); //FOR ERROR HANDLING LOGIC WILL BE ADDED LATER
      }
    });
  }

  return (
    <div>
      <div className="form-details">
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email"
              required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
          </Form.Group>
  
          <Form.Group controlId="formPassword">
            <Form.Label className="mt-2">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Button variant="dark" className="mt-3" type="submit">
            Sign Up
          </Button>
          <div className="text-center mt-3">Don't have an account? <Link to="/Signup">Sign Up</Link></div>
        </Form>
      </div>
    </div>
  )
}

export default Login