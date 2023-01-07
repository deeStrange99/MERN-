import React, { useState } from "react";



import MainHeader from "./MainHeader";

import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";


import './MainNavigation.css'
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";


const MainNavigation = props => {
    //controls the drawer visibility
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const  openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }



    return (

        //we using fragments because wecan not have two react components  
        <>{drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
            
                 <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}> 
                 {/* here we passing props from the CSSTransition in the Sidedrawer component */}
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                    {/* Navlink here is displaying navlinks vertically in the drawer */}
                </nav>
            </SideDrawer>
            
            {/* conditionally render the content */}



            <MainHeader>
                {/* this properties will be rendered in props children, tus props.childre is a place holder for below content */}
                <button className="main-navigation__menu-btn" onClick={ openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                    {/* span is for those three lines that represent drop down manue */}
                </button>

                <h1 className="main-navigation__title">
                    <Link to="/">YourPlace</Link>
                </h1>
                {/* to help in mobile view add a class  */}
                <nav className="main-navigation__header-nav">
                    {/*we have rendered navLinks instead of the three dots  */}
                    <NavLinks />
                    {/* ... */}
                </nav>
            </MainHeader>
        </>

    )
};

export default MainNavigation;