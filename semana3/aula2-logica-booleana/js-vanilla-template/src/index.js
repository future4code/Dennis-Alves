
  /*  // 1. Leia o código abaixo. Indique todas as mensagens impressas no console.
    a. false
    b. false
    c. true
    d.false
    e.boolean
    */

   /*2. Leia o código abaixo. 
    a. array é um objeto que se assemelha com um vetor que é composto 
    por espaços que pode ser utilizados como variaveis
    b. o primeiro indice de uma array é [0]
    c. o tamanho de uma array é determinado pelo indices colocadas  
    nele exemplo: uma array de 3 indice ficaria array = [1,2,3]
    d.
    I.undefined
    II. Null
    III. 11
    IV. 3 e 4
    V. 19 e 9
    VI. 3
    VII. 1
    */
   // escrita de codigo
  //1:
   let kelvin,fahrenheit,celsius;

   fahrenheit = 77;
   //a
   console.log(+fahrenheit +'º fahrenheit convertido para Kelvin é:',
   +((fahrenheit - 32) * 5/9 + 273.15)+"ºK");

    celsius = 80;
    //b
    console.log(+celsius +'º Celsius convertido para fahrenheit é:',
    +((celsius * (9/5)) + 32)+"ºF");

    celsius = 30;
    fahrenheit = (celsius * (9/5)) + 32;
    // c
    console.log(+celsius +'º Celsius convertido para fahrenheit é:',
    +((celsius * (9/5)) + 32)+"ºF"," e em Kelvin é: "
    +((fahrenheit - 32) * 5/9 + 273.15)+"ºK");
    // fim do ex 1

    //2:
	// a.
    let endereco = prompt("Qual é o seu endereço?");
    console.log("Resposta: ",endereco);
    // b.
    let cor = prompt("Qual é a sua cor favorita?");
    console.log("Resposta: ",cor);
	// Resposta: Azul
    //fim do ex 2

    //3:
    // Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar 
    // o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia
    // custa R$0.05. Faça um programa que receba o valor do salário mínimo e a quantidade de quilowatts 
    // consumida por uma residência.

    let salario = Number(prompt("Qual é o seu salario?"));
    let consumo = Number(prompt("Qual é o seu consumo em quilowatts ?"));
    let porcentagem = Number(prompt("Qual é a porcentagem de desconto?"));
    let qHora =0.05;
   // a e b
    console.log("o valor a ser pago pelo o consumo de "+consumo+" quilowatts é: R$"+(consumo*qHora)+
    " aplicando o desconto de "+porcentagem+"% fica: R$"+((consumo*qHora)-(consumo*qHora)*(porcentagem / 100)));
