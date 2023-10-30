import React from 'react';
import PropTypes from "prop-types"

/**
 * Composant pour afficher une donnée clé.
 * @param {String} keyImg - URL de l'image associée à la donnée clé.
 * @param {(String | Number)} keyData - La valeur de la donnée clé (les calories sont une chaîne, le reste est un nombre).
 * @param {String} keyName - Le nom de la donnée clé.
 * @param {String} keyUnit - L'unité de mesure de la donnée clé.
 * @returns {JSX} Composant React.
 */
const OneKeyData = ({ keyImg, keyData, keyName, keyUnit }) => {

    return (
        <div className='OneKeyData'>
            <img src={keyImg} alt={keyImg} className='icon'></img>
            <div className='container-number-name'>
                <span className='number'>{keyData}</span>
                <span className='unit'>{keyUnit}</span>
                <span className='name'>{keyName}</span>

            </div>
        </div>
    );
};

OneKeyData.propTypes = {
    keyImg: PropTypes.string,
    keyData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    keyName: PropTypes.string,
    keyUnit: PropTypes.string
}

export default OneKeyData;