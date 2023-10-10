import PropTypes from "prop-types"
import React from 'react';
import OneKeyData from './OneKeyData';
import iconCalories from "../assets/calories-icon.png"
import iconProteines from "../assets/protein-icon.png"
import iconLipides from "../assets/lipide-icon.png"
import iconGlucides from "../assets/glucide-icon.png"

/**
 * child component of Profile / Parent component of OneKeyData
 * @param {Object} keyData -  props of component parent Profile / object contains all key data
 * @returns {JSX} - React component
 */
const KeyData = ({ keyData }) => {

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