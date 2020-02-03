
/* leitura de codigo
  ex.1
  a. array[]
  b. array[0,1,0,1,2,3]
  c. array[0,1,0,1,2,3,0,1,2,3,4,5]

  ex.2
  a.0
    2
    undefined
  b. caso a lista foçe uma array de numeros e o nome fosse comparado com outro numero funcionaria 
    normal pois a estrutura do codigo não esta dependendo so tipo da variavel

  ex.3
  a função escrita retorna uma array com dois elementos cujo a variavel resultadoA recebe o resultado de uma somatoria de x + 0, x vezes
  e o resultadoB recebe o resultado de uma multiplicação de 1 * x, x vezes
  recomendaria como ArraySomaComMultiplicacao como nome para essa função
*/

// escrita de codigo
// ex. 4
//a. 
/*
  function idadeCachorroParaHumano(idade){
    return idade * 7;
  }

  console.log(idadeCachorroParaHumano(prompt("Digite a idade do cachorro em anos para saber o equivalente em idade Humana.")))
*/
//b.
/*
  function dadosEstudante(nome,idade,endereço,estuda){
    let msg = "Eu sou "+ nome +", tenho "+ idade +" anos, "+ endereço;
      if(estuda === true){
        msg += ", e sou estudante."
        return msg;
      }
     else
      msg += ", e não sou estudante."
       return msg;
  }

  function simOuNao(valor){
    if(valor === "s"){
      return true;
    }
    else
    return false;
  }


  console.log(dadosEstudante(prompt("Digite o seu nome"),prompt("Digite a sua idade"),
  prompt("digite o seu endereço"),simOuNao(prompt("è estudante?(s ou n)"))))
*/
//ex. 5
/*
function seculo(ano){
  let seculo = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];
  let msg;
    
    if(ano%100 === 0){ // testa o ano para ver se um numero inteiro e maior que 1
      return msg = "O ano "+ ano +" pertence ao século "+ seculo[(ano/100)-1]
    }
    else //caso o ano / 100 não seja um inteiro ele vai ser convertido para e será usado para o indice do seculo
    return msg = "O ano "+ ano +" pertence ao século "+ seculo[parseInt(ano/100, 10)]
  
}
console.log(seculo(prompt("digite um ano para saber o seculo correspondente.")))
*/
// ex. 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// a.
function quantidade(array){
  return msg = array.length;
}
//b.
function parOuImpar(numero) {
  if(numero%2 === 0){
    return true;
  }
  else
    return false
}
//c.
/*
function qtdePar(Array){
  let qtde = 0;
  for(let i = 0 ;i < quantidade(array);i++){
    if(array[i]%2 === 0){
      qtde += 1;
    }
  }
  return qtde;
}
*/
//d.

function qtdePar(Array){
  let qtde = 0;
  for(let i = 0 ;i < quantidade(array);i++){
    if(parOuImpar(array[i])=== true){
      qtde += 1;
    }
  }
  return qtde;
}

console.log(quantidade(array),qtdePar(array),)