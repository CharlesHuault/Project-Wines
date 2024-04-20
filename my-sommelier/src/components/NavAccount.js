import React from 'react';
import { NavLink } from 'react-router-dom';


const NavAccount = () => {
    return (
        <div className='navaccount'>
            <ul>
                <NavLink to='/account'><li>Mon Compte</li></NavLink>
                <NavLink to='/login'><li>Connexion</li></NavLink>
            </ul>
        </div>
    );
};

export default NavAccount;