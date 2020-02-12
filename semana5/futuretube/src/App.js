import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      
     <header>
        
        <p id="brand">FutureTube</p>
        <input type="text" value="  buscar" id="busca"></input>
      </header>
      <main>
      <section className="container-menu-lateral">
            <a href="index.html"><p>Inicio</p></a>
            <a href=""><p>Em Alta</p></a>
            <a href=""><p>Incrições</p></a>
            <a href=""><p>Originais</p></a>
            <a href=""><p>Historico</p></a>
        </section>
        
        <section className="container-video">
            <a href="videos/media1.html" target="_blank"id="media1">
                <video src="http://soter.ninja/videos/1.mp4"></video><p>Media 1</p> </a>
            <a href="videos/media2.html" target="_blank"id="media2">
                <video src="http://soter.ninja/videos/2.mp4"></video><p>Media 2</p> </a>
            <a href="videos/media1.html" target="_blank"id="media3">
                <video src="http://soter.ninja/videos/3.mp4"></video><p>Media 3</p> </a>
            <a href="videos/media1.html" target="_blank"id="media4">
                <video src="http://soter.ninja/videos/4.mp4"></video><p>Media 4</p> </a>
            <a href="videos/media1.html" target="_blank"id="media5">
                <video src="http://soter.ninja/videos/5.mp4"></video><p>Media 5</p> </a>
            <a href="videos/media1.html" target="_blank"id="media6">
                <video src="http://soter.ninja/videos/6.mp4"></video><p>Media 6</p> </a>
            <a href="videos/media1.html" target="_blank"id="media7">
                <video src="http://soter.ninja/videos/7.mp4"></video><p>Media 7</p> </a>
            <a href="videos/media1.html" target="_blank"id="media8">
                <video src="http://soter.ninja/videos/8.mp4"></video><p>Media 8</p> </a>
            <a href="videos/media1.html" target="_blank"id="media9">
                <video src="http://soter.ninja/videos/9.mp4"></video><p>Media 9</p> </a>
            <a href="videos/media1.html" target="_blank"id="media10">
                <video src="http://soter.ninja/videos/10.mp4"></video><p>Media 10</p> </a>
        </section>
        
        </main>
        <footer>
          <p><h2>Melhor buscador de midias do universo</h2></p> 
        </footer>
    </div>
  );
}

export default App;
