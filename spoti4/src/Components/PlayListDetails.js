import React,{Component} from 'react';
import styled from 'styled-components'
import Delete from './DelMusic'


const PlayListDetailsContainer = styled.div`
display:flex;
flex-direction:column;
background-color: lightgrey;
height:max-content;

`
const PlayListDetailsWrapper = styled.div`
display:flex;
margin:15px;
flex-direction:column;
align-content:center;
align-self:center;


`
const TitleContainer = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;

`
const Title = styled.p`
margin-right:10px;

`
const Player = styled.audio`
    display:flex;
    align-self:center;
`

class PlayListDetails extends Component{
    constructor(props){
        super (props)
      this.state={
          listId: this.props.listId,
      }  
 }

 
    render(){
        
        if(this.props.playList !== undefined && this.props.playList.quantity === 0){
            return(             
                
                    <PlayListDetailsWrapper>
                        <p>Não existe Musicas nessa play list!!! </p> 
                    </PlayListDetailsWrapper>    
                
                           
            )
        }
        // <DelMusic musicId={music.id} listId={this.state.listId}></DelMusic>
        else if(this.props.playList !== undefined && this.props.playList.musics){
             
            return(             
                <PlayListDetailsContainer>
                    
                    {this.props.playList.musics.map(music =>(
                        <PlayListDetailsWrapper>
                        <TitleContainer> <Title>Artista: {music.artist}</Title> <p> Musica: {music.name}</p> <Delete musicId={music.id} listId={this.state.listId}></Delete></TitleContainer>
                        <Player
                            controls
                            src={music.url}>
                                Your browser does not support the
                                <code>audio</code> element.
                        </Player>
                        
                    </PlayListDetailsWrapper>                        
                    ))}
                </PlayListDetailsContainer>
            )
        }
        else{
            return(
                <div>
                    Carregando...
                </div>
            )
        }
        
        
    }

}
export default PlayListDetails;