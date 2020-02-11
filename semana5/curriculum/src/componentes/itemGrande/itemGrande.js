import React from 'react'
import './itemGrande.css'
import PropTypes from 'prop-types'

function ItemGrande(props){
    return(
        <div className="item-grande">
            <img className="imagem-item-grande" src={props.imagem} />
            <h3 className="nome">{ props.nome }</h3>
            <p className="resumo">{ props.resumo }</p>

        </div>
    )
}

ItemGrande.propTypes = {
    nome: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired
}

export default ItemGrande