import React from 'react';
import SwitchButton from '../components/SwitchButton';
import ButtonUser from '../components/ButtonUser';
import { userList } from '../utils/const/userList';



/**
 * Page d'accueil du site.
 * Permet aux utilisateurs de sélectionner leur numéro d'utilisateur pour consulter leurs performances.
 * @returns {JSX} Composant React - Page d'accueil.
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