import React, { useContext } from 'react';
import { ModeContext } from '../utils/context';

/**
 * Bouton de commutation entre le mode Mock et le mode API.
 * @returns {JSX} Composant React.
 */

const SwitchButton = () => {
    const { toogleMode, mode } = useContext(ModeContext);

    return (
        <div>
            <button className='buttonSwitch' onClick={toogleMode}>
                👉🏻 Cliquez ici pour Changer de  {mode === 'api' ? "Mock" : "Source Data"}
            </button>
        </div>
    );
};

export default SwitchButton;
