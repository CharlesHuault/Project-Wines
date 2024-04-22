import React from 'react';
import Header from '../components/Header';
import SearchBlock from '../components/SearchBlock';


const Mymenu = () => {
    return (
        <div>
            <Header/>
            <div className='MyMenuBody'>
                <SearchBlock/>

            </div>
        </div>
    );
};

export default Mymenu;