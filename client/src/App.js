import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Topbar';
import Home from "./Home";
import Login from './Login';
import Signup from './Signup';


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setLoading(false)
        });
      }
    });
  }, []);

  if (loading) {
    return <div className="home-page"></div>;
  }

  return (
    <BrowserRouter>
    <div className="home-page">
      <Topbar user={user}/>
      {
        user ?
          (<Routes>
            <Route path="/"/>
            <Route index element={<Home/>} />
            <Route path="Login" element={<Login setUser={setUser}/>} />
            <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
          </Routes>)
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
