import React from 'react'
import './ImagemPost.css'

function ImagemPost(props){   
    return(
        <div>
        <img className="imagem-post" src={props.imagem} />   
        </div>
    )

}

export default ImagemPost