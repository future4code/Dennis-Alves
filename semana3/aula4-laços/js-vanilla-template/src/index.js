// inicio da lista de exercicios
// ex 1.
/*
  o codigo está utilizando da estrutura de repetição for para somar o valor de i em sum
  e imprimindo valor 105 apos o termino da funcao
*/
// ex 2.
/*
  a. o comando push adiciona um novo elemento apra a aarray
  b. 10,15,25,30
  c. numero = 3: 12,15,18,21,27,30
     numero = 4: 12

*/
// 3.
// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let copiaArray = []; // array auxiliar 
// Resposta a.

let max = null ; // não sei se é a melhor forma de de inciar uma variavel em js mas vamos lá
let min = 1000; // tem q ter um valor para ser comparado né?
for(let i = 0; i < array.length ; i++){
  if(min > array[i] ){
    min = array[i];
  }
  if(max < array[i] ){
    max = array[i];
  }
}
//"O maior número é 130 e o menor é 21"
  console.log("a: O maior número é "+max+" e o menor é "+min)


// Resposta item b.
for(let i = 0; i < array.length ; i++){
  copiaArray[i] = array[i] * 0.1; // multiplicar por 0.1 faz mais sentido quando utilizamos porcentagem mas dividir por 10 faria o mesmo efeito
}
//[8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]
  console.log("b. "+ copiaArray);
// Resposta item c.
copiaArray = []; // limpa a array 

for(let i = 0; i < array.length ; i++){
  if(array[i] % 10 == 0){
    copiaArray.push(array[i])
  }
}
  console.log("c. "+ copiaArray);
// [80, 30, 130, 40, 60, 70, 120, 90, 110] 

// Resposta item d.
let elemento = [];// como faz para mudar para char? existe esse tipo em js?
console.log("d:");
for(let i = 0; i < array.length ; i++){
  // a parte comentada é o meto mais obvio de se fazer oq se pede mas o detalhe da ultima virgula muda tudo
  //console.log("'O elemento do índex "+ i +" é "+ array[i] + "'") e
  if(i === (array.length) - 1){
    elemento.push('O elemento do índex '+ i +' é '+ array[i] )
  }
  else
    elemento.push('O elemento do índex '+ i +' é '+ array[i] +', ')
  }
  console.log(elemento)
  
// [ 'O elemento do índex 0 é 80',
//   'O elemento do índex 1 é 30',
//   'O elemento do índex 2 é 130',
//   'O elemento do índex 3 é 40',
//   'O elemento do índex 4 é 60',
//   'O elemento do índex 5 é 21',
//   'O elemento do índex 6 é 70',
//   'O elemento do índex 7 é 120',
//   'O elemento do índex 8 é 90',
//   'O elemento do índex 9 é 103',
//   'O elemento do índex 10 é 110',
//   'O elemento do índex 11 é 55' ]