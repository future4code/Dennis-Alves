import React from 'react'
import discurtida from'./favorite-white.png'
import curtida from'./favorite.png'
import './Curtida.css'

class Curtida extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            curtida:false,
            numeroCurtida: 0,
            imagem: {discurtida}
        }
    }
    curtir = () =>{
        const numeroAtual = this.state.numeroCurtida;
        if(this.state.curtida){ 
            this.setState({
                curtida: false,
                numeroCurtida: numeroAtual - 1,
                imagem:{discurtida}
            })
        }
        else{
            this.setState({
                curtida:true,
                numeroCurtida: numeroAtual + 1,
                imagem:{curtida}
            })
        }
        
    }
    render(){
        return(
            <div className="curtida">
                <button onClick={this.curtir}className="botao-curtir"><img className="icone" src={this.state.imagem}/></button>{this.state.numeroCurtida}    
            </div>
        )
    }
}
export default Curtida