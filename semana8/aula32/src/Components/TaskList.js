import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import LinearIndeterminate from './LoadingBar'
import {toggleTask, delTask,filter, fetchTasks,changeToggle, delAllTasks} from '../Actions/index'
import styled from 'styled-components';


const List = styled.ul`
  list-style-type:none;
`


class TaskList extends React.Component {
  componentDidMount(){
    this.props.fetchTasks()
  }
  handleCheck=(e)=>{
    
    this.props.changeToggle(e.target.value) 
    // devido a propriedade do componente do material ui Checkbox quando a função de marcar como feita a tarefa se tornou recursiva
    // o ato de mudar o estado dela chama a função que muda o estado dela, a solução seria usar um botão e usar  onClick mas perde a 
    // utilidade desse componente achei que para o render  seria uma opção... mas não sei fazer isso... se possivel me da uma luz!!!
   
  }
  render(){
    console.log(this.props.taskList)
    
    if(this.props.taskList){
      return (
        <FormControl component="fieldset">
          
          <FormGroup>
            <List >
              {this.props.taskList.filter((task)=>{
                const filter = this.props.filter
                if(filter === "all"){
                  return true
                } 
                if(filter === "pending"){
                  return task.done === false
                } 
                if(filter === "completed"){
                   return task.done === true
                }
                return true
              }).map(task =>
              <li  key={task.id}>
                <Checkbox  color="primary" checked={task.done} value={task.id} onChange={this.handleCheck}/>
                {task.text}
                <IconButton
                onClick={()=> this.props.delTask(task.id)}><DeleteIcon /></IconButton>
              </li> 
             )}   
            </List>  
          </FormGroup>
        </FormControl>
      );
    }
    else{
      //this.componentDidMount()
      return(
        <LinearIndeterminate></LinearIndeterminate>
      )
      
    }
  }
  
}

const mapStateToProps = (state) =>{
  return{
    taskList: state.todos.todosList,
    filter: state.todos.filter
  }
}
const mapDispatchToProps = (dispatch) =>{
  
  return{
    toggleTask: (id) => dispatch(toggleTask(id)),
    delTask: (id) => dispatch(delTask(id)),
    changeToggle:(id) => dispatch(changeToggle(id)),
    fetchTasks: () => dispatch(fetchTasks()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskList);