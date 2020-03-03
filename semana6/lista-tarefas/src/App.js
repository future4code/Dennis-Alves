import React from 'react';

import styled from "styled-components";
import './Style.css'

const ListaDeTarefa = styled.ul`

`;

const Tarefa = styled.li`
  text-decoration: ${ ({ estado }) => (estado ? "line-through" : "none")};;
  margin-right: 5px;
`;

const EntradaContainer = styled.div`

`;
const ContainerListaTarefas = styled.div`
  display:flex;
  flex-direction:column;
`;
const ContainerTarefa = styled.div`
  display:flex;
  justify-content: space-between;

`;
const ContainerBotao = styled.div`

`;
const InputBusca = styled.input` 
  margin-bottom: 5px;
  width: 200px;
`;
const ContainerFooter = styled.div`
  display: flex;
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listaTarefas: [],
      entradaValor: "",
      filtro: "",
      filtroString:""
    };
  }

  componentDidUpdate() {
      localStorage.setItem("listaTarefas", JSON.stringify(this.state.listaTarefas));
  }

  componentDidMount() {
      const listaTarefasString = localStorage.getItem("listaTarefas")
      const listaTarefas = JSON.parse(listaTarefasString)
      this.setState({ listaTarefas })
  }

  entradaDeValor = e =>{
    this.setState({entradaValor: e.target.value})
  }
  filtroString = e =>{
    this.setState({filtroString: e.target.value})
  }

  addTarefa =()=>{
    
    const tarefa = {
      id: Date.now(),
      texto: this.state.entradaValor,
      completa:false
    }
    
    this.setState({
      listaTarefas: [... (this.state.listaTarefas||[]), tarefa],
      entradaValor:""
    })
  }
 
  filtro = e =>{
    this.setState({filtro: e.target.value})
  }
  separarListaTarefaCompleta(filtroString){
  
    let listaCompleta 
    
    if(this.state.filtro ===""){
      listaCompleta = this.state.listaTarefas
    }
    else{
      listaCompleta = this.state.listaTarefas.filter(tarefa =>{
        if( this.state.filtro ==="completas" && tarefa.completa){
          return tarefa 
        }
        else if( this.state.filtro ==="pendentes" && !tarefa.completa){
          return tarefa 
        }
      })
    }
    if(filtroString !== "") {
      listaCompleta = listaCompleta.filter(tarefa =>{
        return tarefa.texto.includes(filtroString)
      })
      return listaCompleta
    }
    else{
      return listaCompleta 
    }
    
  }
  mudarEstadoTarefa = id =>{
    
    const bufferListaTarefa = this.state.listaTarefas.map(tarefa => {
      if (tarefa.id === id) {

        tarefa.completa = !tarefa.completa
        return tarefa
        
      }
      return tarefa
    })

    this.setState({ listaTarefas: bufferListaTarefa });
  }

  deletaTarefa(id){
    
    const listaFiltroId = this.state.listaTarefas.filter(tarefa =>{
        return tarefa.id !== id
      }) 
     this.setState({
      listaTarefas: listaFiltroId
     })
      

  }
  editar(id){
    const listaTarefasEdit = this.state.listaTarefas.map(tarefa =>{
      if(tarefa.id === id){
        tarefa.texto = prompt("editando a tarefa:" + tarefa.texto)
        return tarefa
      }
      else{
        return tarefa
      }
    }) 
   this.setState({
    listaTarefas: listaTarefasEdit
   })
  }

  deletarTudo(){
    this.setState({
      listaTarefas: []
     })
  }

  ordemCrescente(){
    
    const ordem = this.state.listaTarefas.sort(function(a,b)
    { 
      if(a.texto < b.texto) { return -1; }
      if(a.texto > b.texto) { return 1; }
      return 0;
    })
    
    this.setState({
      listaTarefas: ordem
    })
  }

  ordemDecrescente(){
    
    const ordem = this.state.listaTarefas.sort(function(a,b)
    { 
      if(a.texto > b.texto) { return -1; }
      if(a.texto < b.texto) { return 1; }
      return 0;
    })
    
    this.setState({
      listaTarefas: ordem
    })
  }

  render() {
    
    const renderListaCompleta = this.separarListaTarefaCompleta(this.state.filtroString)

    
    if(renderListaCompleta){
      return (
      <div className="app">
        <h1>Lista de tarefas</h1>
        <EntradaContainer>
          <input value={this.state.entradaValor} onChange={this.entradaDeValor} />
          <button onClick={this.addTarefa}>Adicionar</button>
        </EntradaContainer>
        <br />
        <InputBusca value={this.state.filtroString} onChange={this.filtroString} placeholder=" Busca..." />
        <EntradaContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.filtro}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </EntradaContainer>
        <ContainerListaTarefas>
        <h2>Tarefas completas</h2>
          <ListaDeTarefa>
            {renderListaCompleta.map(tarefa =>{
              if(tarefa.completa) 
              return(
              <ContainerTarefa>
                <Tarefa estado={tarefa.completa} onClick={() => this.mudarEstadoTarefa(tarefa.id)}>
                  {tarefa.texto} 
                </Tarefa>
                <ContainerBotao>
                  <button onClick={() => this.deletaTarefa(tarefa.id)}>Deletar</button>
                  <button onClick={() => this.editar(tarefa.id)}>Editar</button>
                </ContainerBotao>
                
              </ContainerTarefa>
              )
            })}
          </ListaDeTarefa>
          <h2>Tarefas Incompletas</h2>
          <ListaDeTarefa>
            {renderListaCompleta.map(tarefa =>{
              if(!tarefa.completa) 
              return(
              <ContainerTarefa>
                <Tarefa estado={tarefa.completa} onClick={() => this.mudarEstadoTarefa(tarefa.id)}>
                  {tarefa.texto} 
                </Tarefa>
                <ContainerBotao>
                  <button onClick={() => this.deletaTarefa(tarefa.id)}>Deletar</button>
                  <button onClick={() => this.editar(tarefa.id)}>Editar</button>
                </ContainerBotao>
              </ContainerTarefa>
              )
            })}
          </ListaDeTarefa>

        </ContainerListaTarefas>
        <ContainerFooter>
          <button onClick={()=>this.deletarTudo()}>Limpar</button>
          <button onClick={()=>this.ordemCrescente()}>Ordem Crescente</button>
          <button onClick={()=>this.ordemDecrescente()}>Ordem Decrescente</button>
        </ContainerFooter>
        
        
        
      </div>
    );
    }
    else{
      return (
        <div className="app">
          <h1>Lista de tarefas</h1>
          <EntradaContainer>
            <input value={this.state.entradaValor} onChange={this.entradaDeValor} />
            <button onClick={this.addTarefa}>Adicionar</button>
          </EntradaContainer>
          <br />
  
          <EntradaContainer>
            <label>Filtro</label>
            <select value={this.state.filtro} onChange={this.filtro}>
              <option value="">Nenhum</option>
              <option value="pendentes">Pendentes</option>
              <option value="completas">Completas</option>
            </select>
          </EntradaContainer>
        </div>
      );
    }
    
  }
}

export default App;
