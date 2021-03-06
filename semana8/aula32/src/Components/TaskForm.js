import React from 'react';
import Input from '@material-ui/core/Input';
import { Button, FormGroup } from '@material-ui/core';
import { connect } from 'react-redux';
import { createTask } from '../Actions/index';

class TaskForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputText: "",
    }
  }

  onChangeInput = e =>{
    this.setState({inputText: e.target.value})
  }

  onClickAdd = () =>{ 
    this.props.createTask(this.state.inputText)
    this.setState({inputText: ""})
  }

  render(){
    return (
      <FormGroup>
        <Input value={this.state.inputText} onChange={this.onChangeInput} placeholder="Digite sua tarefa..." />
        <Button onClick={this.onClickAdd}>Adicionar</Button>
      </FormGroup>
        
      );
  }
 
}
const mapStateToProps = (state) =>{
  return{}
}

const mapDispatchToProps = (dispatch)=>{
  
  return {
    createTask: (text) =>  dispatch(createTask(text))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (TaskForm);