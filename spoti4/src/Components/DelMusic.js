import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Delete = styled.button`

`

class PlayListDetails extends Component{
    constructor(props){
        super (props)
        this.state={
            musicId: this.props.musicId, 
            listId: this.props.listId
        }
 }

    render(){
       <Delete onClick={}></Delete>     
    }

}
export default PlayListDetails;