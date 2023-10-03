import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Error page with navlink for return at home
 * @returns {JSX} - React component
 */
const Error = () => {
    return (
        <div className='Error'>
            <h1>⚠️ Erreur 404 ⚠️</h1>
            <NavLink to={"/"} className='link'>Retour page d'accueil</NavLink>
        </div>
    );
};

export default Error;