import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   if(confirm("Deseja Jogar? sim ou não")){
      // variaveis para uso
      let usuario = [];
      let computador = [];
      let valUser,valComp
      
      // preechimento das arrays com as cartas
      for(let i = 0 ;i < 2; i++){
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
      }
      
      // transferencia dos valores totais para sua variaveis
      valUser = usuario[0].valor + usuario[1].valor
      valComp = computador[0].valor + computador[1].valor

      console.log("Usuário - cartas: "+ usuario[0].texto+" "+ usuario[1].texto + "  - pontuação " + valUser )

      console.log("Computador - cartas: "+ computador[0].texto+" "+ computador[1].texto + "  - pontuação " + valComp )

      // verificação de quem ganhou
      if (valUser > valComp) {
         console.log("O Usuário ganhou!")
      }
      if (valUser < valComp){
         console.log("O Computador ganhou!")
      }
      if(valUser === valComp)
         console.log("Empate!") 
   }
   else
   console.log("O jogo acabou!!!") 