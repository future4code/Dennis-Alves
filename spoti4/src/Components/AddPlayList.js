import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

const InputNameListContainer = styled.div`
    margin-left:15%;
    display:flex;
    flex-direction:row;
`
const Salvar = styled.p`
    margin: 0;
    margin-left:20Px;
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
    let nameList = {name: this.state.nameList} 
    if(nameList.name !==""){
        try{
        
            response = await axios.post(`${baseUrl}/playlists/createPlaylist`,nameList,{
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
    else{
        window.alert("Digite algo...!!!")
    }
    
}

    render(){
        return(
            <InputNameListContainer>
                <input placeholder="Nome da nova lista..." value={this.state.nameList} onChange={this.inputNameList}></input>
                <Salvar onClick={()=>this.addList(this.props.baseUrl)} >salvar</Salvar>
            </InputNameListContainer>
        )
        
    }

}
export default AddPlayList;