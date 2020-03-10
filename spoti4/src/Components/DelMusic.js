import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"
const Delete = styled.p`
    color:red;
    margin-left:10px;
    width:max-content;
`

class DelMusic extends Component{
    constructor(props){
        super (props)

 }

 delMusic = async (musicId,listId)=>{
    try{
        await axios.delete(`${baseUrl}/playlists/removeMusicFromPlaylist?playlistId=${listId}&musicId=${musicId}`,{
           headers: {    
               "auth": "Dennis"
           }
       })
       window.alert("Musica deletada!!")
       window.location.reload(true);
    }catch(error){
        console.log(error)
    }
  }
 
    render(){
        return(
            <Delete onClick={()=>this.delMusic(this.props.musicId,this.props.listId)}>Remove</Delete>
        )
            
    }

}
export default DelMusic;