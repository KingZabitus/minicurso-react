import './Cartao.css';

export function Cartao({ img, nome, funcao }) {
    return (
        <div id='container'>
            <img id='imgpj' src={img}></img>
            <h1 id='nome'>{nome}</h1>
            <p id='cargo'>{funcao}</p>
        </div>
    );
}