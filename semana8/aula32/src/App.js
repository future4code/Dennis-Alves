import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import TaskList from './Components/TaskList';
import InputTask from './Components/TaskForm';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import Toolbar from './Components/ToolBar'
import rootReduce from './Reducers'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import thunk from 'redux-thunk'
const Wrapper = styled.div`

display:flex;
flex-direction:column;
justify-content:center;

`

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const store = createStore(rootReduce,applyMiddleware(thunk));

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
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
          <Wrapper>
              <InputTask></InputTask>
              <TaskList taskList={this.state.taskList} ></TaskList>
              <Toolbar></Toolbar>
          </Wrapper>
          </MuiThemeProvider>
        </Provider>   
    )
   
    
  }
}
export default App;
