import React from 'react'
import './Comentarios.css'

class Comentario extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            mostrarComentarios:false,
            numeroComentario: 0,
            imagem: "./Imagens/comment_icon.svg"
        }
    }
    comentar = () =>{
        
        if(this.state.mostrarComentarios){   
            this.setState({
                mostrarComentarios:false
            })
        }
        else{
            this.setState({
                mostrarComentarios:true
            })
        }
        
    }
    addContador =()=>{
        const numeroAtual = this.state.numeroComentario;
        this.setState({
        numeroComentario: numeroAtual + 1,
        mostrarComentarios:false
        })
        
    }

    retornaEntradaComentario = () => {
        if(this.state.mostrarComentarios){
            return(<div className="container-comentario">
                 <input placeholder="Escreva seu comentário"></input><button onClick={this.addContador}>Comentar</button>
            </div>)
        } else {
            return
        }
    }
    render(){
        return(
            <div className="comentarios">
                <button onClick={this.comentar} className="botao-comentar">
                    <img className="icone" src={this.state.imagem}/>
                </button> {this.state.numeroComentario}
                {this.retornaEntradaComentario()}   
            </div>
        )
    }
}

export default Comentario