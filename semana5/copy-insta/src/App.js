import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autor from './Components/Autor/Autor';
import Post from './Components/Post/Post';
import ImagemPost from './Components/ImagemPost/ImagemPost';
import Curtida from './Components/Curtida/Curtida';
import Comentarios from './Components/Comentarios/Comentarios';


function App() {
  return (
    <div className="App">
        <Post>
          <Autor nome="Eu" imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"/>
          <ImagemPost imagem="https://appsisecommerces3.s3.amazonaws.com/clientes/cliente6382/produtos/14498/Z4633.jpg"/>
          <Curtida />
          <Comentarios/>
        </Post>
    </div>
  );
}

export default App;
