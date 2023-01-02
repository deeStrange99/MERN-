import React from "react";

import { NavLink } from "react-router-dom";

import './NavLinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
            {/* exact is the exact start of the list of navlinks */}
        </li>
        <li>
            <NavLink to="/ul/places">MY PLACES</NavLink> 
            {/* dummy url link cause for now till authentication */}
        </li>
        <li>
            <NavLink to="/places/new">ADD PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
            {/* we will add route later */}
        </li>
    </ul>

    // now that we have this links we can now use them in the MainNavigation
    // NOTE: SOME ROUTES ARE NOT YET REGISTERED IN THE APP.JS
}

export default NavLinks;