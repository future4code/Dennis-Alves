
// ex 1
/*
  o codigo pede um numero para o usuario e depois testa o numero para ver se é par ou impar
  basedo no resto da divisão do numero por 2, caso sejá o resto o numero é par e caso 
  diferente de 0 impar
*/

// ex 2
/*
  a. o codigo serve apra determinar o valor de frutas usando switch como estrutura de
  descisao.
  b. "O proço da fruta Maçã é R$2.25"
  c. 24.55
  d. "O preço da fruta  Pêra  é  R$  5"
*/

// ex 3
/*
  o erro é de variavel não definida devido ae erro de escopo dela (mensagem)
*/

// ex 4
//a.
// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let numero2 = Number(prompt("Digite o segundo numero: "))
/*
   if(numero1 > numero2){
     console.log("O primeiro numero é maior que o segundo numero : " + numero1 + " " + numero2)
   }
   else{
     console.log("O segundo numero é maior que o primeiro numero : " + numero2 + " " + numero1)
  }
  */
// quando os numeros são iguai ele imprime o conteudo do else

//b. c.
/*
let numero1 = Number(prompt("Digite o primeiro numero: "))
let numero2 = Number(prompt("Digite o segundo numero: "))
let numero3 = Number(prompt("Digite o terceiro numero: "))

  if(numero1 === numero2 && numero1 === numero3){ // if adicionado para o ex c
    console.log("voce digitou 3 numeros iguais, digite pelo menos um numero diferente")
    if(numero1 > numero2 && numero1 > numero3){
      if(numero3 > numero2){
        console.log("Os numeros digitados foram :" + numero1 + " , " + numero2 + " , " + numero3 +
        " A ordem Decrecente fica:  " + numero1 + " , " + numero3 + " , " + numero2)
      }
      else
      console.log("Os numeros digitados foram :" + numero1 + " , " + numero2 + " , " + numero3 +
      " A ordem Decrecente fica:  " + numero1 + " , " + numero2 + " , " + numero3)
    }
    
    if(numero2 > numero1 && numero2 > numero3){
      if(numero3 > numero1){
        console.log("Os numeros digitados foram :" + numero1 + " , " + numero2 + " , " + numero3 +
        " A ordem Decrecente fica:  " + numero2 + " , " + numero3 + " , " + numero1)
      }
      else
      console.log("Os numeros digitados foram :" + numero1 + " , " + numero2 + " , " + numero3 +
      " A ordem Decrecente fica:  " + numero2 + " , " + numero1 + " , " + numero3)
    }

    if(numero3 > numero1 && numero3 > numero2){
      if(numero1 > numero2){
        console.log("Os numeros digitados foram :" + numero1 + " , " + numero2 + " , " + numero3 +
        " A ordem Decrecente fica:  " + numero3 + " , " + numero1 + " , " + numero2)
      }
      else
      console.log("Os numeros digitados foram :" + numero1 + " , " + numero2 + " , " + numero3 +
      " A ordem Decrecente fica:  " + numero3 + " , " + numero2 + " , " + numero1)
    }
  }
*/
  // b. quando os numeros são iguai imprime nada!
  // c. quando tem dois numeros igual não imprime nada!!

// Ex. 5
  let escolha = prompt("Possue esqueleto? (s para sim e n para não)")
  
  
     if(escolha == "s"){
      escolha = prompt("Tem sangue quente? (s para sim e n para não)")
        if(escolha == "s"){
        escolha = prompt("tem penas? (s para sim e n para não)")
          if(escolha == "s"){
            console.log("é ave!!")
          }
          else
          escolha = prompt("é racional? (s para sim e n para não)")
          if(escolha == "s"){
            console.log("é Humano!!")
          }
           else
            console.log("é mamifero não humano!!") 
        }

        else if(escolha == "n"){

          escolha = prompt("respira pela pele? (s para sim e n para não)")
          
          if(escolha == "s"){
            console.log("é Anfibio")
          }
            else if(escolha == "n"){
              escolha = prompt("respira por branquias? (s para sim e n para não)")
              if(escolha == "s"){
               console.log("é Peixe")
             }
              else
              console.log("é Reptil")
            }
        }
     }
      else if(escolha == "n"){
        console.log(" é um invertebrado!!")
      }
      
  