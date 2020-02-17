import React from 'react'
import EntradaPergunta from './EntradaPerguntas'
import Opcoes from './Opcoes'

class PrimeiraEtapa extends React.Component{
    render(){
        return (
            <div>
                <h2>Etapa 1 - Dados Gerais</h2>
                <EntradaPergunta pergunta={"1 - Qual o seu nome?"}/>
                <EntradaPergunta pergunta={"2 - Qual sua idade?"}/>
                <EntradaPergunta pergunta={"3 - Qual seu email?"}/>
                <Opcoes pergunta={"4 - Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
            </div>
        )
    }
}

export default PrimeiraEtapa;