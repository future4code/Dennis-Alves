import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const Content = styled.div`
display:flex;
justify-content:center;
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:35%;
margin: 15px;
`
const Options = styled.div`
display:flex;
justify-content:space-between;

`


class App extends Component{
  constructor(props){
    super (props)
    this.state={
      
      taskList: [
        {id: 1, done:false, name:"teste1"},
        {id: 12, done:false, name:"teste2"},
        {id: 123, done:false, name:"teste3"},
      ],
    }
  }
  render(){
    return(
      <Content>
        <Wrapper>
          <input placeholder="Digite sua tarefa..."></input>
          <div>{this.state.taskList.map(task=>(
            <p> <input type="checkbox" defaultChecked={task.done} onChange={this.changeCheck} />{task.name}</p>
          ))}</div>
          <Options>
              <p>Marcar Todas Como Completa</p>
              <p>Todas</p>
              <p>Pendentes</p>
              <p>Completas</p>
          </Options>
        </Wrapper>
      </Content>
    )
  }
}
export default App;
