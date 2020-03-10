import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Delete = styled.div`
margin-left:15px;
`
const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"
class DelPlayList extends Component{
    constructor(props){
        super (props)     
 }
 delList = async (baseUrl,idList)=>{
  
    try{
        await axios.delete(`${baseUrl}/playlists/deletePlaylist?playlistId=${idList}`,{
           headers: {    
               "auth": "Dennis"
           }
       })
       window.alert("lista deletada!!")
       window.location.reload(true);
    }catch(error){
        console.log(error)
    }
  }

    render(){
        return(
            <Delete onClick={()=>this.delList(baseUrl,this.props.idList)}>Remove</Delete> 
        )
           
    }

}
export default DelPlayList;