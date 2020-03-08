import React,{Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'



const PlayListDetailsContainer = styled.div`

`
const PlayListDetailsWrapper = styled.div`

`

class PlayListDetails extends Component{
    constructor(props){
        super (props)
        
 }

    render(){
        
        if(this.props.playList !== undefined && this.props.playList.quantity === 0){
            return(             
                <PlayListDetailsContainer>
                    <PlayListDetailsWrapper>
                        <p>Não existe Musicas nessa play list!!! </p> 
                    </PlayListDetailsWrapper>    
                </PlayListDetailsContainer>
                           
            )
        }
        // <DelMusic musicId={music.id} listId={this.state.listId}></DelMusic>
        else if(this.props.playList !== undefined && this.props.playList.musics){
            return(             
                <div>
                    
                    {this.props.playList.musics.map(music =>(
                        <p>Nome : {music.name} Artista: {music.artist} url: {music.url} </p> 
                        
                    ))}
                </div>
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