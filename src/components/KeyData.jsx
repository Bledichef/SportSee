import PropTypes from "prop-types"
import React from 'react';
import OneKeyData from './OneKeyData';
import iconCalories from "../assets/calories-icon.png"
import iconProteines from "../assets/protein-icon.png"
import iconLipides from "../assets/lipide-icon.png"
import iconGlucides from "../assets/glucide-icon.png"

/**
 * Composant enfant de Profile et parent de OneKeyData.
 * Affiche les données clés.
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.keyData - Objet contenant toutes les données clés.
 * @returns {JSX} Composant React.
 */
const KeyData = ({ keyData }) => {
    if (!keyData || !keyData.sessions) {
        
        return <div>Données de sessions manquantes.</div>;
      }
    
    console.log("KeyData:", keyData);
    return (
        <div className='container-keyData'>
            <OneKeyData keyImg={iconCalories} keyData={keyData?.calorieCount.toLocaleString('en')} keyUnit="kCal" keyName={" Calories"} />
            <OneKeyData keyImg={iconProteines} keyData={keyData?.proteinCount} keyUnit="g" keyName=" Proteines" />
            <OneKeyData keyImg={iconGlucides} keyData={keyData?.carbohydrateCount} keyUnit="g" keyName=" Glucides" />
            <OneKeyData keyImg={iconLipides} keyData={keyData?.lipidCount} keyUnit="g" keyName=" Lipides" />
        </div>
    );
};

KeyData.propTypes = {
    keyData: PropTypes.object
}

export default KeyData;