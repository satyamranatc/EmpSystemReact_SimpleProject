import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        <h2>NavBar</h2>
        <ul>
            <li><Link to = {"/"} >Home</Link></li>
            <li><Link to = {"/dashbaord"} >Dashboard</Link></li>
            <li><Link to = {"/admin"} >Admin</Link></li>
        </ul>
    </nav>
  )
}
