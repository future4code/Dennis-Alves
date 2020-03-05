import React from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'

const Render = styled.div`
  display: flex;
  flex-direction: column;
  
`
const Nav = styled.div`
  display:flex;
  justify-content: space-between;

`
const ContainerBusca = styled.div`
  display:flex;
  flex-direction:row;
`
const ContainerNomeBusca = styled.div`
  margin:5px;
`
const ContainerEmailBusca = styled.div`
  margin:5px;
`
const BotaoBuscar = styled.button`
  margin:5px;
`
const ContainerEntrada = styled.div`
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
const BotaoEditar = styled.button`

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
      email:"",
      nomeEditar: "",
      emailEditar: ""
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
  entradaNomeEditar = e =>{
    this.setState({nomeEditar: e.target.value})
  }

  entradaEmailEditar = e =>{
    this.setState({emailEditar: e.target.value})
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
      window.alert("não foi possivel carregar o usuario")
      console.log(erro)
    })

  }
  editarUsuario=()=>{
    const data = {
      "user": {
        "id": this.state.id,
        "name": this.state.nomeEditar,
        "email": this.state.emailEditar
      }
    }

    if (data.user.email===""){
        data.user.email = this.state.email
    }
    if (data.user.name===""){
      data.user.name = this.state.nome
  }
    const request = axios.put(`${baseUrl}/editUser`,data,{
      headers: {
        "api-token": "Dennis"
      }
    
    })
    request.then((response)=>{
      window.alert(`usuario ${this.state.nome} Editado!`)
      this.vaiParaDetalhes(this.state.id)
      this.getDados()
    }).catch((erro)=>{
      window.alert("não foi possivel editar o usuario")
      console.log(erro)
    })
  }

  buscarUsario =()=>{
    
      const request = axios.get(`${baseUrl}/searchUsers?email=${this.state.email}&name=${this.state.nome}`,{
        headers: {
          "api-token": "Dennis"
        }
      })
      request.then((response)=>{
        this.setState({
          dados: response.data.result,
          nome: "",
          email: ""
        })
        
        if(this.state.dados.length === 0){
          window.alert("O usuario ou email não existe")
          this.setState({
            nome: "",
            email: ""
          })
          this.getDados()
        }

      }).catch((erro)=>{
        window.alert("não foi possivel carregar o usuario ")
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
    this.setState({
      id: "",
      nome: "",
      email: ""

    })
    this.getDados()
  }

  vaiParaDetalhes=(id)=>{
    const opcao = 2;
    this.setState({render: opcao})
    this.mostrarUsuario(id)

  }
  vaiParaEditar=(id)=>{
    const opcao = 3;
    this.setState({render: opcao})
    

  }

  

  render(){
      
      switch(this.state.render){
        case 0:
          return(
            <Render>
              <BotaoLista onClick={this.vaiPraLista}>ir para a lista</BotaoLista>
              <ContainerEntrada>
                <ContainerNome>
                  <label>Nome:</label>
                  <EntradaNome value={this.state.nome} onChange={this.entradaNome}/>
                </ContainerNome>
                <ContainerEmail>
                  <label>Email:</label>
                  <EntradaEmail value={this.state.email} onChange={this.entradaEmail}/>
                </ContainerEmail>
                <BotaoSalvar onClick={this.criaUsuario}>Salvar</BotaoSalvar>
              </ContainerEntrada>
            </Render>
          )
        break;

        case 1:
          return (
            <Render>
              <Nav>
                <BotaoEntrada onClick={this.vaiPraEntrada}>volta para entrada</BotaoEntrada>
                <ContainerBusca>
                  <ContainerNomeBusca>
                    <label>Nome: <EntradaNome value={this.state.nome} onChange={this.entradaNome}/></label>
                    
                  </ContainerNomeBusca>
                  <ContainerEmailBusca>
                    <label>Email: <EntradaEmail value={this.state.email} onChange={this.entradaEmail}/></label>
                    
                  </ContainerEmailBusca>
                  <BotaoBuscar onClick={this.buscarUsario}>Buscar</BotaoBuscar>
                </ContainerBusca>
              </Nav>
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
                  <BotaoEditar onClick={()=>this.vaiParaEditar(this.state.id)}>Editar</BotaoEditar> 
                 </ContainerItem>
                 
              </ContainerLista>
              
            </Render>
            )
        break
        case 3:
          return(
            <Render>
              <BotaoEntrada onClick={this.vaiPraLista}>volta para lista</BotaoEntrada>
              <ContainerLista>
                <h2>Editar Usuário:  {this.state.nome}</h2>
            
                 <ContainerItem>
                  <Nome>{this.state.nome}</Nome> {this.state.email}<spam onClick={()=>this.deletaUsuario(this.state.id)}>deleta</spam>

                 </ContainerItem>                  
              </ContainerLista>
              <ContainerEntrada>
                <ContainerNome>
                  <label>Nome:</label>
                  <EntradaNome value={this.state.nomeEditar} onChange={this.entradaNomeEditar}></EntradaNome>
                </ContainerNome>
                <ContainerEmail>
                  <label>Email:</label>
                  <EntradaEmail value={this.state.emailEditar} onChange={this.entradaEmailEditar}></EntradaEmail>
                </ContainerEmail>
                <BotaoSalvar onClick={this.editarUsuario}>Salvar</BotaoSalvar>
              </ContainerEntrada>
              
            </Render>
            
          )
        break

      }
      
      
      }

}

export default App;
