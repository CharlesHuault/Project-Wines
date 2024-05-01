import React from 'react';
import "../styles/components/definitionstextblock.scss"

const DefinitionsTextBlock = () => {
    return (
        <div className='DefTextBlock'>
            <h2>Définitions des filtres:</h2>

            <div>
                <h3>Boisé</h3>
                <p>Se dit d’un vin dont l’odeur rappelle les fûts de chêne (fûts neufs) dans lesquels il a été élevé. Les amateurs parlent d’arôme de pain grillé, de torréfaction et de vanille.</p>
                <h3>Herbacé</h3>
                <p>Cet adjectif péjoratif décrit un vin qui dégage un parfum végétal, souvent dû à un manque de maturité du raisin.</p>
            </div>
        </div>
    );
};

export default DefinitionsTextBlock;