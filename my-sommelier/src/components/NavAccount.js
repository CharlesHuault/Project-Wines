import React from 'react';
import { NavLink } from 'react-router-dom';


const NavAccount = () => {
    return (
        <div className='navaccount'>
            <ul className='isNotConnected'>
                <NavLink to='/login'><li>Connexion</li></NavLink>
            </ul>
            <ul className='isConnected'>
                <NavLink to='/account'><li>Mon Compte</li></NavLink>
                <NavLink to='/'><li>Déconnexion</li></NavLink>
            </ul>
        </div>
    );
};

export default NavAccount;