import React from "react";
import MainHeader from "./MainHeader";

import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";


import './MainNavigation.css'


const MainNavigation = props => {
    return <MainHeader>
        {/* this properties will be rendered in props children, tus props.childre is a place holder for below content */}
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
            {/* span is for those three lines that represent drop down manue */}
        </button>

        <h1 className="main-navigation__title">
           <Link to="/">YourPlaces</Link> 
        </h1>
        <nav>
             {/*we have rendered navLinks instead of the three dots  */}
            <NavLinks /> 
            {/* ... */}
        </nav>
    </MainHeader>
};

export default MainNavigation;