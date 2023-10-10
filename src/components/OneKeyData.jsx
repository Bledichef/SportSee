import React from 'react';
import PropTypes from "prop-types"

/**
 * 
 * @param {String} keyImg - props contains all img 
 * @param {(String | Number)} keyData - props contains all keyData (keyData of calories is a string, the rest is a number) 
 * @param {String} keyName - props contains all the name
 * @param {String} keyUnit - props contains all the unit
 * @returns {JSX} - React component 
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