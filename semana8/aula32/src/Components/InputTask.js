import React, { Component } from 'react';
import Input from '@material-ui/core/Input';



class InputTask extends Component{
  constructor(props){
    super (props)
    this.state = {
        input: "",
    }
  }

  input = e =>{
    this.setState({input: e.target.value})
}

render(){
    
        return (
            <Input placeholder="Digite sua tarefa..."value={this.state.input} onChange={this.input} />
          );
    
    
}


}
export default InputTask;