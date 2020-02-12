import React from 'react'
import './corpo.css'

function Corpo(props){
    return(
        <div className="corpo">
            <h2 className="nome" >{ props.nome }</h2>
            { props.children }
        </div>
    )
}
export default Corpo