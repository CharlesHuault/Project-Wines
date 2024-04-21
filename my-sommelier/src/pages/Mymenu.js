import React from 'react';
import Navigation from '../components/Navigation';


const Mymenu = () => {
    return (
        <div className='Header'>
            <div className='Hello'>
                <p>Bonjour nom_du_compte</p>
            </div>
            <Navigation/>
        </div>
    );
};

export default Mymenu;