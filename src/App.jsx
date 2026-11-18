import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from "./components/NavBar"

import Home from "./pages/Home.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Admin from "./pages/Admin.jsx"

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/dashboard' element = {<Dashboard/>} />
          <Route path='/admin' element = {<Admin/>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
