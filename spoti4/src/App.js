import React, { Component } from 'react';
import './App.css';
import InputNameListContainer from './Components/AddPlayList'
import InputMusicContainer from './Components/AddMusic'
import Delete from './Components/DelPlayList'
import styled from 'styled-components'
import axios from 'axios'
const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

const AllPlayListContainer = styled.div`

`
class App extends Component{
  constructor(props){
    super (props)

      this.state = {
        render: 1,
        listId: "",
        nameList:"",
        playList: undefined,
  
      }
  }
  componentDidMount(){
    this.getAllPlayLists(baseUrl)
  }

  getAllPlayLists = async (baseUrl) => {

    try{
       const response = await axios.get(`${baseUrl}/playlists/getAllPlaylists`,{
               headers: {    
                   "auth": "Dennis"
               }
           })
           
           this.setState({playList: response.data})
           
    }catch(error){
        
        console.log(error)
    }
}


listDetails = (id,nameList)=>{
  this.setState({render: 2, listId: id,nameList: nameList})
}

  render(){
    
    console.log(this.state.playList)
    console.log(this.state.render)
    const page = this.state.render
    
    switch(page){
      case 1:
        
        if(this.state.playList !== undefined && this.state.playList.result.quantity !== 0){
          
          return (
            <div>
             <InputNameListContainer baseUrl={baseUrl}></InputNameListContainer>
             <AllPlayListContainer>
                  {this.state.playList.result.list.map(list=>(
                        <p><b onClick={()=>this.listDetails(list.id,list.name)}>{list.name}</b> <Delete baseUrl={baseUrl} idList={list.id}></Delete> </p> 
                    ))}
              </AllPlayListContainer>
            </div>
          )
        }
        else if(this.state.playList !== undefined){
      return (
        <div>
         <InputNameListContainer baseUrl={baseUrl}></InputNameListContainer>       
            <AllPlayListContainer>
                <p>Nao existe nenhum item na lista ainda</p>
            </AllPlayListContainer>
        </div>
          )
        }
      else{
        return(
          <div>
            carregando...
          </div>
        )
      }
    
      break
      case 2:
        console.log(this.state.listId)
        
      return (
        <div> 
          <InputMusicContainer baseUrl={baseUrl} listId={this.state.listId} nameList={this.state.nameList}>
            
          </InputMusicContainer>
             
        </div>
      );
      break
    }
    
  }
}

export default App;
