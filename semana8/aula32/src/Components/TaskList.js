import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class TaskList extends Component{
  constructor(props){
    super (props)
    this.state = {
        taskList: [],
    }
  }
  componentDidMount(){
      
      this.setState({taskList: this.props.taskList})
  }
handleChange = id => {      
    const taskList = this.state.taskList
        taskList.forEach(task=>{
            if(task.id === id){
                if(task.done){
                    task.done = false
                }
                else{
                    task.done = true
                } 
            }
        })
        this.setState({taskList: taskList})
    };   
render(){
    
        return (
            <FormControl component="fieldset">
              
              <FormGroup>
              {this.state.taskList.map(task =>(
                   <FormControlLabel
                   control={<Checkbox  checked={task.done} onChange={()=>this.handleChange(task.id)} value={task.name} />}
                   label={task.name}
                 /> 
                ))}    
              </FormGroup>
            </FormControl>
          );
    
    
}

}export default TaskList;