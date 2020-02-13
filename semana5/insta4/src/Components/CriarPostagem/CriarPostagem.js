import React from 'react'
import Post from '../Post/Post'

class CriarPost extends React.Component{
    constructor(props){
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
                <input className="nome"/>
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



export default CriarPost