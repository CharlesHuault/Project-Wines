import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navbar.scss'

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul className='isNotConnected'>
                <NavLink to='/definitions'><li>Définitions</li></NavLink>
            </ul>

            <ul className='isConnected'>
                <NavLink to='/' ><li>Ma Carte</li></NavLink>
                <NavLink to='/definitions'><li>Définitions</li></NavLink>
                <NavLink to='/modifications'><li>Modifications</li></NavLink>
            </ul>
        </div>
    );
};

export default NavBar;