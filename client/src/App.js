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
import OwnerAccount from './OwnerAccount';

export const PetContext = React.createContext();
export const UserContext = React.createContext();
export const BookingContext = React.createContext();
export const UsersContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([])
  const [bookings, setBookings] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [showPetForm, setPetShowForm] = useState(true);
  const [userFetchStatus, setUserFetchStatus] = useState("idle");
  const [dataLoading, setDataLoading] = useState(true);
  
  useEffect(() => {
    if (userFetchStatus === "completed") {
      return;
    }
  
    const fetchUser = async () => {
      setLoading(true);
      const response = await fetch("/me");
  
      if (response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        setUser(null);
      }
  
      setUserFetchStatus("completed");
      setLoading(false);
    };
  
    fetchUser();
  }, [userFetchStatus]);
  
  useEffect(() => {
    if (!user) {
      setPets([]);
      setBookings([]);
      setUsers([]);
      setDataLoading(false);
      return;
    }
  
    const fetchData = async () => {
      setDataLoading(true);
  
      Promise.all([
        fetch(`/pets`),
        fetch(`/bookings`),
        fetch(`/users`),
      ])
        .then(([petsResponse, bookingsResponse, usersResponse]) => {
          return Promise.all([
            petsResponse.json(),
            bookingsResponse.json(),
            usersResponse.json(),
          ]);
        })
        .then(([pets, bookings, users]) => {
          console.log(bookings)
          setPets(pets);
          setBookings(bookings);
          setUsers(users);
        })
        .catch((error) => {
          console.log("HELLO");
        })
        .finally(() => {
          setDataLoading(false);
        });
    };
  
    fetchData();
  }, [user]);

  function updatePets(newPet) {
    setPets([...pets, newPet])
    setPetShowForm(!showPetForm)
  }

  function updateBookings(newBooking, sitterID) {
    setBookings([...bookings, newBooking])
    const newUsers = users.map((user) => {
      if (user.sitter?.id === sitterID) {
        const newSitter = { ...user.sitter };
        newSitter.bookings = [...newSitter.bookings, newBooking];
        return { ...user, sitter: newSitter };
      }
      return user;
    });
    setUsers(newUsers);
  }

  if (loading || dataLoading) {
    return <div className="home-page"></div>;
  }

  console.log({bookings: bookings})
  console.log({users: users})
  console.log({pets: pets})

  return (
    <BrowserRouter>
      <PetContext.Provider value={{pets, updatePets}}>
      <UserContext.Provider value={{user}}>
      <BookingContext.Provider value={{bookings, updateBookings}}>
      <UsersContext.Provider value={{users}}>
        <div className="home-page">
          <Topbar user={user} setUser={setUser}/>
          {
            user ?
              <>
              <OwnerHeader showPetForm={showPetForm} setPetShowForm={setPetShowForm}/>
                <Routes>
                  <Route path="/Owner/Home" element={<OwnerHome/>}/>
                  <Route path="/Owner/Bookings" element={<OwnerBooking/>}/>
                  <Route path="/Owner/Pets" element={<OwnerPets showPetForm={showPetForm}/>}/>
                  <Route path="/Owner/Account" element={<OwnerAccount/>}/>
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
      </UsersContext.Provider>
      </BookingContext.Provider>
      </UserContext.Provider>
      </PetContext.Provider>
    </BrowserRouter>
  );
}

export default App;
