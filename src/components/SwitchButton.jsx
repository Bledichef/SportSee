import React, { useContext } from 'react';
import { ModeContext } from '../utils/context';

const SwitchButton = () => {
    const { toogleMode, mode } = useContext(ModeContext);

    return (
        <div>
            <button className='buttonSwitch' onClick={toogleMode}>
                👉🏻 Cliquez ici pour passer en mode {mode === 'api' ? "Mock" : "API"}
            </button>
        </div>
    );
};

export default SwitchButton;
