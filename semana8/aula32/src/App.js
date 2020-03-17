import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import TaskList from './Components/TaskList';
import InputTask from './Components/InputTask';
import Button from '@material-ui/core/Button';


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
        {id: 1, done:true, name:"teste1"},
        {id: 12, done:false, name:"teste2"},
        {id: 123, done:false, name:"teste3"},
      ],
    }
  }
  render(){
    return(
      <Content>
        <Wrapper>
            <InputTask></InputTask>
            <TaskList taskList={this.state.taskList} ></TaskList>
          <Options>
            <span>Marcar Todas Completas</span>
            <Button color="primary">Todas</Button>
            <Button color="primary">Pendentes</Button>
            <Button color="primary">Completas</Button>
            <span>Marcar Todas Completas</span>
          </Options>
        </Wrapper>
      </Content>
    )
  }
}
export default App;
