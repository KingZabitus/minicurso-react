import { useState } from 'react';
import './Cabecalho.css';

export const Cabecalho = () => {
    const [contador, setContador] = useState(0);

    function atualizaContador() {
        setContador(contador + 1);
    }
    return (
        <div id='header'>
            <img src='/img/logo.png' id='logo' />
            <button id='button'
                onClick={atualizaContador}>
                Likes {contador}
            </button>
        </div>
    );
};