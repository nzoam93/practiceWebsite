import React from 'react';
import "./Navigation.css"

const navigation = () => {
  return (
    <div>
        <nav id='nav-bar'>
          <div id='left-nav-bar'>
            <a className="left-nav-bar-ele" href="/">Gloria Zimet</a>
          </div>
          <div id='right-nav-bar'>
            <a className='right-nav-bar-ele' href="/">Home</a>
            <div className="right-nav-bar-ele dropdown">Appointments
              <a href="/appointments" className="dropdown-content">Appointments</a>
              <a href="/map-and-directions" className="dropdown-content">Map And Directions</a>
            </div>
            <a className='right-nav-bar-ele' href="/reflexolochi">Reflexolo-chi™</a>
            <a className='right-nav-bar-ele' href="/limiting-beliefs">Limiting Beliefs</a>
            <a className='right-nav-bar-ele' href="/about">About</a>
            <a className='right-nav-bar-ele' href="/classes">Classes</a>
          </div>
        </nav>
    </div>
  )
}

export default navigation
