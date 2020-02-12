import React from 'react';
import logo from './logo.svg';
import './App.css';
import dennis from './imagens/dennis.jpg';
import arrow from './imagens/arrow.png';
import Corpo from './componentes/corpo/corpo';
import ItemGrande from './componentes/itemGrande/itemGrande';
import ItemPequeno from './componentes/itemPequeno/itemPequeno';
import BotaoGraf from './componentes/botaoGraf/botaoGraf';

function App() {
  return (
    <div className="App">
      <Corpo nome="Dados Pessoais">
        <ItemGrande nome="Dennis Alves" resumo="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Congue quisque egestas diam in arcu cursus euismod. 
          Euismod in pellentesque massa placerat duis ultricies.
        " imagem={dennis}/>
        <ItemPequeno imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
        titulo="Tuma:" texto="Sagan"/>
        <BotaoGraf texto="botao" imagem={arrow}/>
      </Corpo>
    </div>
  );
}

export default App;
