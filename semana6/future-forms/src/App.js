import React from 'react';
import './App.css';
import PrimeiraEtapa from './componentes/PrimeiraEtapa';
import SegundaEtapa from './componentes/SegundaEtapa';
import TerceiraEtapa from './componentes/TerceiraEtapa';
import UltimaEtapa from './componentes/UltimaEtapa';

class App extends React.Component {
    constructor(props){
      super(props) 
      this.state = {
        etapa: 1
      }
    }

    mostraEtapa = () =>{
      switch (this.state.etapa){
        case 1: return <PrimeiraEtapa/>
        case 2: return <SegundaEtapa/>
        case 3: return <TerceiraEtapa/>
        case 4: return <UltimaEtapa/>
        default:
          return <PrimeiraEtapa/>
      }
    }

    mudarEtapa =()=>{
      this.setState({etapa: this.state.etapa + 1})
    }

    render(){
      return(
        <div>
          {this.mostraEtapa()}
          {this.state.etapa < 4 &&(
            <button onClick={this.mudarEtapa}>Proxima etapa</button>
          )}
          
        </div>
      )
    }

}

export default App;
