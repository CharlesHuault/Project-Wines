import React from 'react';
import Navigation from './Navigation';
import '../styles/components/header.scss'

const Header = () => {
    return (
        <div className='Header'>
            <div >
                <p className='isNotConnected'>Bienvenue</p>
                <p className='isConnected'>Bonjour nom_du_compte</p>
            </div>
            <Navigation/>
        </div>
    );
};

export default Header;