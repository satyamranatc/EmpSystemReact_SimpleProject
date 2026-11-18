import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id = "Home">
        <div id="heroSection">
          <video autoPlay muted loop id= "BGVideo" src="/public/bg.mp4"></video>
            <div id="content">
                <h1>The Employee Hub</h1>
                <h3>Mange All Your Employees Here in One Go</h3>
                <p>We Are Soliving the Unsaid Problems</p>
                <button><Link to={"/admin"} >Get Started</Link></button>
            </div>
        </div>
    </div>
  )
}
