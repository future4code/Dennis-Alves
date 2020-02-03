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
   // declaração de variaveis
   let usuario = [];
   let computador = [];
   let valUser,valComp  
   let textUser =""
   let textComp =""
   let cancel = false   // variavel usada para saida do while principal
   
   // o laço Do foi utilizado pois é preciso pelo menos uma entrada no laço caso contrario seria while
   do{
      for(let i = 0 ;i < 2; i++){ // preenche as arrays com as cartas
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
      }
      // verifica se o usuario ou computador esta com dois "A"
   }while(usuario[0].texto === "A" && usuario[1].texto === "A" || computador[0].texto === "A" && computador[1].texto === "A" ) 
   // preenche as variaveis com os valores totais
   valUser = usuario[0].valor + usuario[1].valor
   valComp = computador[0].valor + computador[1].valor

   // cria o texto com as cartas iniciais do usuario
   for(let i = 0 ;i < usuario.length; i++){
      textUser += usuario[i].texto
      textUser += " "
   }
   // cria o texto com as cartas iniciais computador
   for(let i = 0 ;i < computador.length; i++){
      textComp += computador[i].texto
      textComp += " "
   }
      
   // while principal
   while(valUser < 21 && cancel == false ){
      /*
         estrutura de repetição para verificar se o usuario esta com pontuação menor que 21
         verifica tb se foi atingida a pontuação de 21 para o usuario e é utilizado a variavel cancel
         para sair do loop
         caso o usuario esteja com menos q 21 vai para o while aux
       */

      if (confirm("Suas cartas são "+ textUser + " sua pontuação é: "+ valUser +
               " . A carta revelada do computador é "+ computador[0].texto+
	            "\n"+  
	            "Deseja comprar mais uma carta?")){

         usuario.push(comprarCarta())  // add uma nova carta ao usuario
         valUser += usuario[usuario.length -1].valor  // atualiza a pontuação
         textUser += usuario[usuario.length -1].texto // atualiza o texto
         textUser += " "  // coloca um espaço para ficar bunitinhu
         // verificação se o usuario ja atingiu 21 ponto
         if(valUser === 21){
            cancel = true  // caso sim ele ganhou então bora sair while e avisar ele
         }         
         //debugger; 
      }
      
      else // caso o usuario clique em cancelar 
         if (valUser != 21){ // se o usuario diferente de 21 vamos ver se o computador ganha
            cancel = true  // marcador para avisar q vai sair do while principal depois dele ser executado
            // while auxiliar
            while(valComp <= valUser){// verifica se apontuação do computador é menor que a do usuario
               computador.push(comprarCarta())  // aad carta ao computador
               valComp += computador[computador.length -1].valor // incrementa a pontução do computador com o valor da ultima carta
               textComp += usuario[usuario.length -1].texto  // incrementa o texto das cartas do computador com o texto da ultima carta
               textComp += " " // eu gosto das coisas bem formatadas *.*
               //debugger;
            }// sai do while auxiliar quando empatar ou pasar a pontuação do usuario
      }
   }// aprendei com o professor Bortot que programador que não comenta o codigo tem a mão cortada!!
      
   console.log("Suas cartas são "+ textUser+" . pontuação = "+ valUser+ "." )
   console.log("As do computador cartas são "+ textComp+" . pontuação ="+ valComp+ "." )

   if(valUser === valComp){ // achei que o usuario ganhar se empatar injusto ... deveria ser outra jogada ou definido por outra coisa
         console.log("O usuario ganhou!!") 
   }

   if (valComp > valUser) {// verifica se o usuario tem a maior pontuação
      if(valComp <=21){// caso a pontuação do usuario seja maior mas tenha passado de 21 ele perde
      console.log("O Computador ganhou!")
      }
      else// user wins!!!
      console.log("O usuario ganhou!")
   }

   if (valUser > valComp) {// verifica se o computador tem a maior pontuação
      if(valUser <=21){// caso a pontuação do computador seja maior mas tenha passado de 21 ele perde
      console.log("O usuário ganhou!")
      }
      else// user lose!!! T.T
      console.log("O Computador ganhou!")
   }
}
else// caso o usuario não esteja afim de jogar
console.log("O jogo acabou!!!")