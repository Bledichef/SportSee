import PropTypes from "prop-types"
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {Array} userList - props of component parent Home / infos about users (name and id) 
 * @returns {JSX} - React component
*/
const ButtonUser = ({ userList }) => {

    return (
        <div className='ButtonUser'>
            {
                userList.map((user) => (
                    <Link to={"/user/" + user.id} key={user.id}>
                        <button className='button' key={user.id}>Utilisateur {user.id}</button>
                    </Link>
                ))
            }

        </div>
    );
};

ButtonUser.propTypes = {
    userList: PropTypes.array
}


export default ButtonUser;