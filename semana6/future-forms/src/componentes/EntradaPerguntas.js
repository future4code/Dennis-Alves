import React from 'react'

export default function EntradaPergunta(props){
    return(
        <div>
            <p>{props.pergunta}</p>
            <input onChange={props.onChange} value={props.value}/>
        </div>
    )
}