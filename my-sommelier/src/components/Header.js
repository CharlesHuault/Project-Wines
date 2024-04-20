import React from 'react';
import Navigation from './Navigation';
import '../styles/components/header.scss'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Hello'>
                <p>Bonjour nom_du_compte</p>
            </div>
            <Navigation/>
        </div>
    );
};

export default Header;