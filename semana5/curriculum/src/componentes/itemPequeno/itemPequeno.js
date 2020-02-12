import React from 'react'
import './itemPequeno.css'
import PropTypes from 'prop-types'

function ItemPequeno(props){
    return(
        <div className="item-pequeno">
            <img className="imagem-item-pequeno" src={props.imagem} />
            <p className="titulo"><strong>{ props.titulo }</strong></p>
            <p className="texto" >{ props.texto }</p>

        </div>
    )
}

ItemPequeno.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}

export default ItemPequeno