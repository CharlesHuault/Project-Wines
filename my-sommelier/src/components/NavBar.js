import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to='/' ><li>Ma Carte</li></NavLink>
                <NavLink to='/definitions'><li>Définitions</li></NavLink>
                <NavLink to='/modifications'><li>Modifications</li></NavLink>
            </ul>
        </div>
    );
};

export default NavBar;