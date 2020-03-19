import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import LinearIndeterminate from './LoadingBar'
import {toggleTask, deleteTask,filter} from '../Actions/index'
import styled from 'styled-components';

const List = styled.ul`
  list-style-type:none;
`


class TaskList extends React.Component {
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
                <Checkbox  color="primary" checked={task.done} onChange={()=>this.props.toggleTask(task.id)}/>
                {task.text}
                <IconButton
                onClick={()=> this.props.deleteTask(task.id)}><DeleteIcon /></IconButton>
              </li> 
             )}   
            </List>  
          </FormGroup>
        </FormControl>
      );
    }
    else{
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
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskList);