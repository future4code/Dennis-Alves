import React from 'react'
import './botaGraf.css'
import PropTypes from 'prop-types'

function BotaoGraf(props){
    return(
        <div className="botao-grafico">
            <button className="botao"><img className="icone" src={props.imagem}/><p className="texto-botao">{props.texto}</p></button>

        </div>
    )
}

BotaoGraf.propTypes = {
    texto: PropTypes.string.isRequired
}

export default BotaoGraf