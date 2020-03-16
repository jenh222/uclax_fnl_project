import React, {useState, useEffect} from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);

    //Click Event
    const handleHamburgerClick = () => {
        if (showMenu === true) {
            updateShowMenu(false);
        } else {
            updateShowMenu(true);
        }
    }

    //Window Resize Event
    const handleWindowResize = () => {
        if (window.innerWidth < 769) {
            updateShowMenu(false);
        } else {
            updateShowMenu(true);
        }
    }

    //Only when components first mount
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
    },[]);

    return (
        <nav className='Nav'>
            <div className="logo">
                <img src={("../img/logo.svg")} alt="logo"/>
            </div>
            <div className="hamburger" onClick={handleHamburgerClick} >
                    <FontAwesomeIcon icon={faBars}/>
            </div>
            {
                showMenu && 
                <div className="links">
                    <NavLink to ='/' exact>Who We Are</NavLink>
                    <NavLink to ='/events'>Events</NavLink>
                    <NavLink to ='/contact'>Contact</NavLink>
                </div>
            }
        </nav>
    )
};

export default Nav;