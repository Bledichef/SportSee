import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModeContext } from "../utils/context";
import { urlApi } from '../utils/const/urlApi';

/**
 * Component "Button user" to display the button to change user
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.userList - La liste des utilisateurs.
 * @returns {JSX} Composant React.
 */

const ButtonUser = ({ userList }) => {
    const { mode } = useContext(ModeContext);

    const filteredUsers = mode === urlApi
        ? userList.filter(user => user.id === 12 || user.id === 18)
        : userList.filter(user => user.id === 10 || user.id === 20);

    return (
        <div className='ButtonUser'>
            {filteredUsers.map((user) => (
                <Link to={"/user/" + user.id} key={user.id}>
                    <button className='button' key={user.id}>Utilisateur {user.id}</button>
                </Link>
            ))}
        </div>
    );
};

export default ButtonUser;
