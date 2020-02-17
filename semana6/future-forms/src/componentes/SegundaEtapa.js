import React from 'react'
import EntradaPergunta from './EntradaPerguntas'


class SegundaEtapa extends React.Component{
    render(){
        return(
            <div>
                <h2>Etapa 2 - informações do ensino superior</h2>
                <EntradaPergunta pergunta={"1 - Qual o curso?"}/>
                <EntradaPergunta pergunta={"2 - Qual a unidade de ensino"}/>
            </div>
        )
    }
}

export default SegundaEtapa