import React from 'react'
import CitySearchBar from './CitySearchBar'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className='nav-bar'>
        <Link to="/">
        <img src="https://www.iconexperience.com/_img/i_collection_png/32x32/plain/home.png" alt="" className="nav-icon" />
        </Link>
        <Link to="/alerts">
        <img src="https://www.iconexperience.com/_img/i_collection_png/32x32/plain/information.png" alt="" className="nav-icon" />
        </Link>
        <CitySearchBar />
    </nav>
  )
}

export default Nav