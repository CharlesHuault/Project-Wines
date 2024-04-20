import React from 'react';
import NavBar from './NavBar';
import NavAccount from './NavAccount';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <NavBar />
            <NavAccount/>
        </div>
    );
};

export default Navigation;