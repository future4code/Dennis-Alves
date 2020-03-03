import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post'
import CriarPost from './Components/CriarPostagem/CriarPostagem';

const post = [{
  imgUser:'d<awd',
  nomeUser:'<wd<awd',
  imgPost:'<aw<aw'
 }]
//return <Post imgUser={cadaPost.imgUser} nomeUser={cadaPost.nomeUser} imgPost={cadaPost.imgPost}/>
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      fotoPerfil: "",
      imagePost: ""
    }
  }
  criarPost = (e) =>{

    this.setState({
        nome: e.target.value,
        fotoPerfil: e.target.value,
        imagePost: e.target.value,
        
    })
}

  render(){
    return(
      <div className="container-form">
                
                <p>Nome:</p>
                <p>{this.state.nome}</p>
                <input type="text"className="nome" />
                <p>Foto Do Pefil</p>
                <input className="foto-perfil"/> 
                <p>Foto Do Post:</p>
                <input className="foto-post"/>
                <button className="criar-post" onClick={this.criaPost}>Postar</button>
                <p>{this.state.nome}</p>
                <Post nomeUser={this.state.nome}/>
            </div>
    )
    
  }
}
export default App;
