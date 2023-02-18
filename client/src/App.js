import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Topbar';
import Home from "./Home";
import Login from './Login';
import Signup from './Signup';


function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <div className="home-page">
      <Topbar user={user}/>
      {
        user ?
          (<Routes>
            <Route path="/"/>
            <Route index element={<Home/>} />
            <Route path="Login" element={<Login/>} />
            <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
          </Routes>)
        :
          (<Routes>
            <Route path="/"/>
            <Route index element={<Home/>} />
            <Route path="Login" element={<Login/>} />
            <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
          </Routes>)
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
