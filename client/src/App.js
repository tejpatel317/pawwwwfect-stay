import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './Topbar';
import Home from "./Home";
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
      <BrowserRouter>
        <Topbar/>
          <Routes>
            <Route path="/"/>
              <Route index element={<Home/>} />
              <Route path="Login" element={<Login/>} />
              <Route path="Signup" element={<Signup/>} />
            <Route/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
