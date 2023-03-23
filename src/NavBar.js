import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plantform">Plant Form</NavLink>
            <NavLink to="/allplants">All Plants</NavLink>
            <NavLink to="/trees">Trees</NavLink>
            <NavLink to="/shrubs">Shrubs</NavLink>
            <NavLink to="/grasses">Grasses</NavLink>
            <NavLink to="/herbs">Herbs</NavLink>
        </nav>
    )
}

export default NavBar