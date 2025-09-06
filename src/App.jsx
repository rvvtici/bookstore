import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Admin from './Components/Admin/Admin.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/login">teste</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
