import React from 'react'
import EntradaPergunta from './EntradaPerguntas'
import Opcoes from './Opcoes'

class TerceiraEtapa extends React.Component{
    render(){
        return(
            <div>
                <h2>Etapa 3 - informações gerais de ensino</h2>

                <EntradaPergunta pergunta={"1 - Por que você não terminou um curso de graduação?"}/>
                <Opcoes pergunta={"2 - Você fez algum curso complementar?"}
                       opcoes={[
                        "Não fiz curso complementar", 
                        "Curso técnico", 
                        "Curso de inglês"
                       ]} 
                />
            </div>
        )
    }
}
export default TerceiraEtapa;