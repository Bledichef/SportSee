import React from 'react';
import SwitchButton from '../components/SwitchButton';
import ButtonUser from '../components/ButtonUser';
import { userList } from '../utils/const/userList';



/**
 * Page Home 
 * @returns {JSX} - React component - Page
 */
const Home = () => {

    return (
        <div className='Home'>
          
            <div className='button-user'>
                <div className='text'>🥇 Pour consulter vos performances 🥇, <br />Veuillez sélectionner votre numéro d'utilisateur : </div>
                <ButtonUser userList={userList} />
            </div>
            <div className='button-switch'>
                <SwitchButton />
            </div>
        </div>

    );
};
console.log(userList)
export default Home;