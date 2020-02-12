import React from 'react'
import './Autor.css'
import PropTypes from 'prop-types'

function Autor(props){
    return(
        <div className="autor">
            <img className="imagem-autor" src={props.imagem} />
            <p className="nome">{ props.nome }</p>

        </div>
    )
}

Autor.propTypes = {
    nome: PropTypes.string.isRequired
}

export default Autor