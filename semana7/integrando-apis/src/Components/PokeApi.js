import React,{Component} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const baseUrl = "https://pokeapi.co/api/v2"

const PokemonWraper = styled.div`
display:flex;
flex-direction:column;
`
const PokemonSprite = styled.img`
     object-fit: contain;
     height:200px;
`
const PokemonStatsWrap = styled.div`
    margin:10px;
`
const PokemonTypeWraper = styled.div`
    margin:10px;
`
const PokemonMoveWraper =styled.div`
    display:flex; 
    width:40%;
    align-self:center;
    flex-direction: column;
`

class PokeApi extends Component{
    constructor(props){
        super(props);

        this.state = {
            allPokemons:[],
            selectedPokemonSprite:'',
            selectedPokemonStats:[],
        }
    }

    fetchAllPokemons = async () =>{
        
        try{

            const response = await axios.get(`${baseUrl}/pokemon?limit=151`)
            
            this.setState({
                allPokemons: response.data.results
            })
            
        }catch(error){
            console.log(error)
        }
        
    }

    componentDidMount(){
        this.fetchAllPokemons();
    }

    fetchPokemonDetails = async (event) =>{

        const pokemonDetailsUrl = event.target.value;
        let response = []
    
        
        try{
             response = await axios.get(pokemonDetailsUrl)

        }catch(error){
            console.log(error)
        }
        
        

        const photoUrl = response.data.sprites.front_default;
         
        this.setState({ 
            selectedPokemonSprite: photoUrl,
            selectedPokemonStats: response.data
        })
        
    }

    render(){
        const isPokemonSelected = this.state.selectedPokemonSprite !== '';
    
        
        return(
            <div>
                <select onChange={this.fetchPokemonDetails}>
                    <option>Selecione um Pokémon</option>
                    {this.state.allPokemons.map((pokemon) => (<option value={pokemon.url}>{pokemon.name}</option>))}
                </select>
                <hr/>
                { isPokemonSelected && 
                (
                    <PokemonWraper>
                        <PokemonSprite src={this.state.selectedPokemonSprite} alt="Foto do Pokémon" />
                        <PokemonStatsWrap>
                                <label>Nome: </label> {this.state.selectedPokemonStats.name}
                                
                           <PokemonTypeWraper>
                                Tipo: {this.state.selectedPokemonStats.types.map((types) => (types.type.name + " "))}
                           </PokemonTypeWraper>
                           
                        </PokemonStatsWrap>
                            
                        <PokemonMoveWraper>
                                Movimentos: <p> {this.state.selectedPokemonStats.moves.map((moves) => (moves.move.name + " , "))} </p>
                        </PokemonMoveWraper>
                        
                    </PokemonWraper>
                    
                )}
            </div>
        )
    }
}

export default PokeApi;