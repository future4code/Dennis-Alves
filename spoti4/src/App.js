import React, { Component } from 'react';
import './App.css';
import InputNameListContainer from './Components/AddPlayList'
import InputMusicContainer from './Components/AddMusic'
import Delete from './Components/DelPlayList'
import styled from 'styled-components'
import axios from 'axios'
const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"


const Head = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
const AllPlayListContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const ListWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:max-content;
`
const List = styled.div`
  display:flex;
  flex-direction:row;
  align-content:center;
  align-self:center;
`
const Edit = styled.i`
  margin-left: 20px;
`

class App extends Component{
  constructor(props){
    super (props)

      this.state = {
        render: 1,
        listId: "",
        nameList:"",
        playList: undefined,
        musicPlayList: undefined,
  
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
    const page = this.state.render
    
    switch(page){
      case 1:
        
        if(this.state.playList !== undefined && this.state.playList.result.quantity !== 0){
          
          return (
            <div class="App">
              <Head>
                <h3>Spoti4</h3><InputNameListContainer baseUrl={baseUrl}></InputNameListContainer>
              </Head>
             
             <AllPlayListContainer>
              <h2>Listas</h2>
               <ListWrapper>
                
                  {this.state.playList.result.list.map(list=>(
                        <List><b>{list.name}</b><Edit onClick={()=>this.listDetails(list.id,list.name)}>Editar</Edit> <Delete baseUrl={baseUrl} idList={list.id}></Delete> </List>
                        
                    ))}
               </ListWrapper>
                  
              </AllPlayListContainer>
            </div>
          )
        }
        else if(this.state.playList !== undefined){
      return (
        <div class="App">
         <InputNameListContainer baseUrl={baseUrl}></InputNameListContainer>       
            <AllPlayListContainer>
                <p>Nao existe nenhuma lista...</p>
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
    
      break;
      case 2:
     
        return (
          <div class="App">
              <h2> Lista: {this.state.nameList}</h2>
            <InputMusicContainer baseUrl={baseUrl} listId={this.state.listId} nameList={this.state.nameList}/>
            <span onClick={()=>this.setState({render: 1})}>voltar</span>
          </div>
        )
      break;

      default:
      
    }
    
  }
}

export default App;
