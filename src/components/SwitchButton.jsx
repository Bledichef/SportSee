import React from 'react';
import { useContext } from "react";
import { urlMock } from '../utils/const/urlMock';
import { ModeContext } from "../utils/context"

const SwitchButton = () => {

    //import ModeContext and use toogleMode and mode with useContext
    const { toogleMode, mode } = useContext(ModeContext)

    return (
        <div >
            <button className='buttonSwitch' onClick={toogleMode}>👉🏻 Cliquez ici pour passer sur les données {mode === urlMock ? " de l'API" : " Mockées"}</button>
        </div>
    );
};

export default SwitchButton;