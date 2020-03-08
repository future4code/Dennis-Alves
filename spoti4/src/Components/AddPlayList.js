import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

const InputNameListContainer = styled.div`

`

class AddPlayList extends Component{
    constructor(props){
        super (props)
    
    this.state = {
        nameList: ""
            
        
    }
 }
 inputNameList = e =>{
    this.setState({nameList: e.target.value})
}

addList = async (baseUrl)=>{

    let response = []
    let namelist = {name: this.state.nameList} 
    
    try{
        
        response = await axios.post(`${baseUrl}/playlists/createPlaylist`,namelist,{
            headers: {    
                "auth": "Dennis"
            }
        })
        this.setState({nameList:""})
        window.alert("lista adicionada")
        window.location.reload(true);
        console.log(response)

    }catch(error){
        window.alert("Esse nome ja existe!!!")
        this.setState({nameList:""})
        console.log(error)
    }
}

    render(){
        return(
            <InputNameListContainer>
                <input value={this.state.nameList} onChange={this.inputNameList}></input>
                <button onClick={()=>this.addList(this.props.baseUrl)} >salvar</button>
            </InputNameListContainer>
        )
        
    }

}
export default AddPlayList;