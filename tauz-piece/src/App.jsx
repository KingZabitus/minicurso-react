import { Cartao } from "./components/Cartao/Cartao";
import { Cabecalho } from "./components/Cabecalho/Navbar.jsx";
import './style.css';

function App() {


  return (
    <>
      <Cabecalho />
      <div id="listapj">
        <Cartao
          img='/img/spider.png'
          nome='Spider D. Goonie'
          funcao='Capitão dos Estrelas Cadentes'
        />
        <Cartao
          img='/img/folcalors.png'
          nome='Furina "Folcalors" Antonieux'
          funcao='Artilheira e Primeira Imediata'
        />
        <Cartao
          img='/img/cezar.png'
          nome='Cezar Planet'
          funcao='Carpinteiro'
        />
        <Cartao
          img='/img/riccardo.png'
          nome='Riccardo Idaten'
          funcao='Navegador'
        />
        <Cartao
          img='/img/tameke.png'
          nome='Tameke'
          funcao='Cozinheiro'
        />
        <Cartao
          img='/img/santana.png'
          nome='Imediato Santana'
          funcao='Navegador e Cozinheiro'
        />
        <Cartao
          img='/img/pidao.png'
          nome='Daz "Pidão" Bonez'
          funcao='Timoneiro'
        />
      </div>
    </>
  );
}

export default App;;;