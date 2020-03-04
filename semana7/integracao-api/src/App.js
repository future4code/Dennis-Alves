import React from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'

const Render = styled.div`
  display: flex;
  flex-direction: column;
  
`

const Container = styled.div`
 border:solid 2px black;
 
 display:flex;
 flex-direction:column;
 align-self:center;
 justify-content: space-between;
 height: max-content;
 width: 250px;

`
const ContainerLista = styled.div`
align-self:center;
`
const BotaoEntrada = styled.button`
  align-self: flex-start;
  margin: 5px;
`

const Item = styled.ul`
 text-decoration: none;
  width: 100%;
  padding:0;
  
`
const ContainerItem = styled.div`
  display:flex;
  justify-content:space-between;
`
const Nome = styled.span`
 
`

const ContainerNome = styled.div`
 margin:5%;
 display:flex;
 flex-direction:column;
 width:80%;
 margin-left:10%;
`
const ContainerEmail = styled.div`
margin:5%;
 display:flex;
 flex-direction:column;
 width:80%;
 margin-left:10%;
`
const BotaoLista = styled.button`
  align-self: flex-start;
  margin: 5px;
`
const BotaoSalvar = styled.button`
  width: 40%;
  align-self:center;
  margin: 5%;
  
`

const EntradaNome = styled.input`

`
const EntradaEmail = styled.input`

`
var baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api/users"

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      dados: [],
      msgErro: undefined,
      render: 0,
      id:"",
      nome:"",
      email:""
    }
  }
  
  componentDidMount(){
    this.getDados()
  }
  
  entradaNome = e =>{
    this.setState({nome: e.target.value})
  }

  entradaEmail = e =>{
    this.setState({email: e.target.value})
  }

  getDados = () =>{
    
    const request = axios.get(`${baseUrl}/getAllUsers`, {
      headers: {
        "api-token": "Dennis"
      }
    })
    request.then((response)=>{
      this.setState({dados: response.data.result})
    }).catch((erro)=>{
      this.setState({msgErro: "Ocorreu um erro"})
    })

  }
  criaUsuario = () =>{
    
    const enviaDados = {
      name: this.state.nome,
      email: this.state.email
    }
    
    const request = axios.post(`${baseUrl}/createUser`,enviaDados, {
      headers: {
        "api-token": "Dennis"
      }
    })
    request.then((response)=>{
      window.alert("Dados enviados com sucesso")
      this.setState({
        nome: "",
        email: ""
      })
      this.getDados()
    }).catch((erro)=>{
      this.setState({msgErro: "Ocorreu um erro na hora de enviar"})
    })
  }
  deletaUsuario = (id) =>{
    if(prompt("Tem certeza de que deseja deletar?") === "s"){
     
      const request = axios.delete(`${baseUrl}/deleteUser?id=${id}`, {
        headers: {
          "api-token": "Dennis"
        }
      })
      request.then((response)=>{
        window.alert("usuario deletado!")
        this.setState({
          dados: [],
          render: 1
        })
        this.getDados()
      }).catch((erro)=>{
        window.alert("não foi possivel deletar o usuario")
        console.log(erro)
      })
    }
    
  }
  mostrarUsuario = (id)=>{
    const request = axios.get(`${baseUrl}/getUser/${id}`,{
      headers: {
        "api-token": "Dennis"
      }
    })

    request.then((response)=>{
      
      this.setState({
        id: response.data.result.id,
        nome: response.data.result.name,
        email: response.data.result.email
      })
      this.getDados()
    }).catch((erro)=>{
      window.alert("não foi possivel carregar o usuario o usuario")
      console.log(erro)
    })

  }

  vaiPraEntrada=()=>{
    
    const opcao = 0;
    this.setState({render: opcao})
  }

  vaiPraLista=()=>{
    
    const opcao = 1;
    this.setState({render: opcao})
    this.getDados()
  }

  vaiParaDetalhes=(id)=>{
    const opcao = 2;
    this.setState({render: opcao})
    this.mostrarUsuario(id)

  }

  

  render(){
      
      switch(this.state.render){
        case 0:
          return(
            <Render>
              <BotaoLista onClick={this.vaiPraLista}>ir para a lista</BotaoLista>
              <Container>
                <ContainerNome>
                  <label>Nome:</label>
                  <EntradaNome value={this.state.nome} onChange={this.entradaNome}></EntradaNome>
                </ContainerNome>
                <ContainerEmail>
                  <label>Email:</label>
                  <EntradaEmail value={this.state.email} onChange={this.entradaEmail}></EntradaEmail>
                </ContainerEmail>
                <BotaoSalvar onClick={this.criaUsuario}>Salvar</BotaoSalvar>
              </Container>
            </Render>
          )
        break;

        case 1:
          return (
            <Render>
              <BotaoEntrada onClick={this.vaiPraEntrada}>volta para entrada</BotaoEntrada>
              <ContainerLista>
                <h2>Usuários Cadastrados:</h2>
                {this.state.dados.map(dados =>(
                  <Item key={dados.id}>
                    <ContainerItem>
                      <Nome onClick={()=>this.vaiParaDetalhes(dados.id)}>{dados.name}</Nome> <spam onClick={()=>this.deletaUsuario(dados.id)}>deleta</spam>
                    </ContainerItem>
                  <hr></hr>
                </Item>
                ))}
              </ContainerLista>
              
            </Render>
            )
        break
        case 2:
          return (
            <Render>
              <BotaoEntrada onClick={this.vaiPraLista}>volta para lista</BotaoEntrada>
              <ContainerLista>
                <h2>Detalhes do Usuário: {this.state.nome}</h2>
            
                 <ContainerItem>
                  <Nome>{this.state.nome}</Nome> {this.state.email}<spam onClick={()=>this.deletaUsuario(this.state.id)}>deleta</spam>
                 </ContainerItem>
                  
              </ContainerLista>
              
            </Render>
            )
        break


      }
      
      
      }

}

export default App;
