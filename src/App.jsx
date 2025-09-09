import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Database from "./Components/Database/Database.jsx";
import CreateDatabase from "./Components/Database/CreateDatabase.jsx";
import UpdateDatabase from "./Components/Database/UpdateDatabase.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/login">teste</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/database" element={<Database />} />
          <Route path="/create" element={<CreateDatabase />} />
          <Route path="/update/:id" element={<UpdateDatabase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
