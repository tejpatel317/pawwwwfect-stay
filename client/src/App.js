import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Topbar';
import Home from "./Home";
import Login from './Login';
import Signup from './Signup';
import OwnerHeader from './OwnerHeader';
import OwnerHome from './OwnerHome';
import OwnerBooking from './OwnerBooking';
import OwnerPets from './OwnerPets';
import OwnerMessages from './OwnerMessages';
import OwnerAccount from './OwnerAccount';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false);
  const [showPetForm, setPetShowForm] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/users")
      .then((r) => r.json())
      .then((users) => {
        setUsers(users)
        setLoading(false)});
  }, []);

  console.log(users)

  function updateUser(updatedUser) {
    setUser(updatedUser)
    setPetShowForm(!showPetForm)
  }

  console.log(user)

  if (loading) {
    return <div className="home-page"></div>;
  }

  return (
    <BrowserRouter>
    <div className="home-page">
      <Topbar user={user} setUser={setUser}/>
      {
        user ?
          <>
          <OwnerHeader showPetForm={showPetForm} setPetShowForm={setPetShowForm}/>
            <Routes>
              <Route path="/Owner/Home" element={<OwnerHome users={users} user={user}/>}/>
              <Route path="/Owner/Bookings" element={<OwnerBooking/>}/>
              <Route path="/Owner/Pets" element={<OwnerPets showPetForm={showPetForm} user={user} updateUser={updateUser}/>}/>
              <Route path="/Owner/Messages" element={<OwnerMessages/>}/>
              <Route path="/Owner/Account" element={<OwnerAccount user={user}/>}/>
            </Routes>
          </>
        :
          (<Routes>
            <Route path="/"/>
            <Route index element={<Home/>} />
            <Route path="Login" element={<Login setUser={setUser}/>} />
            <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
          </Routes>)
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
