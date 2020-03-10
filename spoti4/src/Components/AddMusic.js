import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import PlayListDetails from './PlayListDetails'
const InputMusicContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const InputMusicWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    width: 250px;
    margin-top:20px;
`
const ImputWrapperNome = styled.div`
    display:flex;
    flex-direction:column;

`

const ImputWrapperArtist = styled.div`
    display:flex;
    flex-direction:column;
`

const ImputWrapperUrl  = styled.div`
    display:flex;
    flex-direction:column;

`

class AddMusic extends Component{
    constructor(props){
        super (props)
    
    this.state = {
        playList: undefined,
        name:"",
        artist:"",
        url:"",
        baseUrl:this.props.baseUrl,
        listId:this.props.listId,
        nameList:"",

        
    }
 }

inputName = e =>{
    this.setState({name: e.target.value})
}

inputArtist = e =>{
    this.setState({artist: e.target.value})
}
inputUrl= e =>{
    this.setState({url: e.target.value})
}
componentDidMount(){
    
    this.getMusicList(this.props.baseUrl,this.props.listId,this.props.nameList)
}

getMusicList = async (baseUrl,id,nameList) =>{
    
    this.setState({baseUrl: baseUrl, listId: id, nameList: nameList})
    console.log(this.state.listName)
    try{
        const response = await axios.get(`${baseUrl}/playlists/getPlaylistMusics/${id}`,{
                headers: {    
                    "auth": "Dennis"
                }
            })
            this.setState({playList: response.data.result})
     }catch(error){
         
         console.log(error)
     }
}

addMusic = async (baseUrl,id,nameList)=>{
    this.setState({nameList: nameList})
    
    let paramRepeated = false
    let response = []
    let music = { 
        playlistId: id, 
        music: { 
        name: this.state.name, 
        artist: this.state.artist,
        url: this.state.url
        }
    } 
        console.log(this.state.playList)
        
      if(this.state.playList.quantity !== 0){
        if(this.state.playList.musics.every(musics =>{return musics.name === this.state.name})) {
            paramRepeated = true
            window.alert("Essa musica já existe!!!")
            this.setState({name:"", artist:"", url:""})
          }
    
          else if(this.state.playList.musics.every(musics =>{return musics.url === this.state.url})){
            paramRepeated = true
            alert("Essa Url já existe!!!")
            this.setState({name:"", artist:"", url:""})
          }
      }
      
        
     if(!paramRepeated){
            try{
        
                response = await axios.put(`${baseUrl}/playlists/addMusicToPlaylist`,music,{
                    headers: {    
                        "auth": "Dennis"
                    }
                })
                this.setState({name:"", artist:"", url:""})
                window.alert("Musica adicionada")
                this.componentDidMount()
            }catch(error){
                if(this.state.name ===""){
                    window.alert("Digite um nome da para a musica!!!")
                }
                else if(this.state.artist ===""){
                    window.alert("Digite um nome para o artista!!!")
                }
                else if(this.state.url ===""){
                    window.alert("Digite uma url !!!")
                }
                else{
                    window.alert("Esse nome ja existe!!!")
                }
                
                this.setState({name:"", artist:"", url:""})
                console.log(error)
            }   


        }  
}

    render(){
        
        return(    
                          
                <InputMusicContainer>
                    <PlayListDetails playList={this.state.playList} listId={this.state.listId}/>
                    <InputMusicWrapper>
                        <h4>Adicionar nova musica.</h4>
                        <ImputWrapperNome>Nome <input value={this.state.name} onChange={this.inputName}/></ImputWrapperNome>
                        <ImputWrapperArtist>Artista <input value={this.state.artist} onChange={this.inputArtist}/></ImputWrapperArtist>
                        <ImputWrapperUrl>Url <input value={this.state.url} onChange={this.inputUrl}/></ImputWrapperUrl>    
                    </InputMusicWrapper>
                    <p onClick={()=>this.addMusic(this.props.baseUrl,this.props.listId,this.props.nameList)} >Salvar</p>
                </InputMusicContainer>
            
        )
        
    }

}
export default AddMusic;