import React from 'react';
import '../styles/components/searchblock.scss'

const SearchBlock = () => {
    return (
        <div className='SearchBlock'>
            <div className='SearchBar'>
                <input type="text" placeholder='Rechercher'></input>
            </div>
            <div className='Price'>
                <p>Tarifs</p>
            </div>
            <div className='Color'>
                <p>Couleur</p>
                <ul>
                    <li><input type="checkbox" name="Rouge" id="FilterCheckbox"/>Rouge</li>
                    <li><input type="checkbox" name="Blanc" id="FilterCheckbox" />Blanc</li>
                    <li><input type="checkbox" name="Rosé" id="FilterCheckbox" />Rosé</li>
                </ul>
            </div>
            <div className='GrowingPolitic'>
                <p>Type de Culture</p>
                <ul>

                </ul>
            </div>
            <div className='Origin'>
                <p>Appellation</p>
                <ul>

                </ul>
            </div>
            <div className='Caracteristics'>
                <p>Caractéristiques</p>
                <ul>

                </ul>
            </div>
            <div className='Seeds'>
                <p>Cépages</p>
                <ul>

                </ul>
            </div>
            <div className='Company'>
                <p>Accords</p>
                <ul>

                </ul>
            </div>
        </div>
    );
};

export default SearchBlock;