/*exercicios de interpretação de codigo
1. a função conversorDeMoeda recebe um valor par ser convertido em dolar, a cotação do dolar é recebida
pela const cotacao atraves de um prompt a const meuDinheiro recebe oresultado função om o valor 100 e depois é
impresso no console log

2. a função investeDinheiro recebe duas variaveis que são a tipoDeInvestimento e valor, dentro da função é criado uma
variavel let valorAposInvestimento que será usado para receber o resultado das operações realizadas dentro do switch
esse switch recebe o tipoDeInvestimento para definer o case e realizar a operação e retornar valorAposInvestimento,
a const novoMontante recebe o retorno da função investeDinheiro com os paremetros ações e 150 que no caso ira retornar
valor(150)*1.1
a const segundoMontante recebe o retorno da função investeDinheiro com os paremetros Tesouro Direto e 200 que nocaso ira
retornar a menssagem de alerta TIPO DE INVESTIMENTO INFORMADO INCORRETO ambas constantes serão impressas pelo console log

3.o codigo desse exercicio faz a verificação de numeros pares em uma laço de repetição for, durante a verificação a array1
recebe os elementos par de numeros e a array2 recebe o restante dos elementos. depois é impresso o tamanho de cada array por console log:
Quantidade total de números14
6
8

4.esse codigo faz a verificação se numero é maior e se menor em um laço de repetição for, a variavel let numero1 recebe infinity 
que deve se tratar de um valor infinito (não me recorod dessa funçao ser mostrada em aula) no laço for é criado let numero para
ser usado como indice de repetições e ele é usado como compração no primerio e segundo if do laço, no primeiro é comparado se numero 
é menor que numero1  e no segundo if é comparadose numero é maior de numero2 durante a execução do for, no final é impresso por console log:
-10
1590

*/

/*Exercícios de Lógica de Programação
1.  podemos usar for,for each e while

for (let i = 0; i < array.length; i++) {
    array[i];  
}

array.forEach(elementoDoIndice => {
    console.log(elementoDoIndice)
});

let i = 0
while(i < array.length){
    console.log(array.lenght)
    i++
}
2.
a)false
b)true
c)true
d)true
e)true

3. o codigo não funciona pois não tem o valor na variavel quantidadeDeNumerosPares e nem o a checagem para numeros par e 
falta incrementar i

const quantidadeDeNumerosPares = prompt("digite um numero")
let i = 0

while(i <= quantidadeDeNumerosPares) {
    if(i%2 = 0){
        console.log(i)
        i++
    }

  
}
4. 
const a = prompt("digite um numero")
const b = prompt("digite um numero")
const c = prompt("digite um numero")

if(a === b && a === c){
    console.log("Equilatero")
}
else if(a === b || a === c){
    console.log("Isósceles")
}
else{
    console.log("Escaleno")
}

5. 
const a = prompt("digite um numero")
const b = prompt("digite um numero")

if( a > b ){
    console.log("o maior é: " + a)
}

else{
    console.log("o maior é: " + b)
}

if( a % b === 0 ){
    console.log(a+ "não é divisivel por " + b)
}
else{
    console.log(a+ "é divisivel por " + b)
}

if( b % a === 0 ){
    console.log(b+ "não é divisivel por " + a)
}
else{
    console.log(b+ "é divisivel por " + a)
}
if(( a-b )< 0){
    console.log("a diferença entre eles é " + ((a-b)*-1))
}
else{
    console.log("a diferença entre eles é " + (a-b))
}
*/

/*Exercícios de Funções
1.
const arr =[2,4,1,78,3,43,49,-2,7]
function ordenar(array){
       
    array.sort((menor,maior)=>{ 
       return maior - menor
    })
    console.log("o segundo maior é: "+array[2]+ " e o segundo menor é:" +array[array.length -2] )
}
ordenar(arr)
2. 
const alerta =()=>{alert("Hello Future4");}
alerta()    

*/

/*Exercícios de Objetos
1. arrays são vetores onde podemos adicionar variaveis dessa forma temos uma unica variaveis com varios itens 
objetos são estruturas para representar dados mais complexos, usamos objetos apra fazer abstraçoes e colocar
suas propriedades e metodos em uma unica estrutura. 

2.
function criaRetangulo (lado1,lado2){
    const retangulo = {
        lagura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }
    return retangulo
}
3.
const filmeFavorito ={
    titulo: "", 
    ano: "", 
    diretor: "", 
    atoresAtrizes: []   
}
function filme(){
    filmeFavorito.titulo = prompt("Digite o titulo")
    filmeFavorito.ano = prompt("Digite o ano")
    filmeFavorito.diretor = prompt("Digite o diretor")
    filmeFavorito.atoresAtrizes.push(prompt("digite o nome do ator/atriz"))
    filmeFavorito.atoresAtrizes.push(prompt("digite o nome do ator/atriz"))
    while(prompt("deseja adicionar mais atores/atrizes? (s ou n)") === "s"){
        filmeFavorito.atoresAtrizes.push(prompt("digite o nome do ator/atriz"))
    }
    let listaAtor = " " 
    filmeFavorito.atoresAtrizes.forEach(ator => {
        listaAtor += ator+ ", " 
    });
    console.log("Venha assistir ao filme: "+ filmeFavorito.titulo+", de "+ filmeFavorito.ano +
    ", dirigido por "+ filmeFavorito.diretor +" e estrelado por " + listaAtor )
}4.
class Pessoa{
    constructor(nome,idade,email,endereco){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.endereco = endereco
    }
    
}
 const pessoa = new Pessoa("dennis",36,"dennis@gmail.com","rua da minha casa numero aleatorio")

function anonimizarPessoa(){
    const novaPessoa = new Pessoa(pessoa.nome,pessoa.idade,pessoa.email,pessoa.endereco)
    novaPessoa.nome = "ANÔNIMO "
    return novaPessoa
}
 */
/*Exercícios de Funções de array
 1. 
 const lista =[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a
function maiorDeIdade(array){
    const novaLista = array.filter((item)=>{
        return (item.idade >= 20)
    })
    return novaLista
}
//b
function menorDeIdade(array){
    const novaLista = array.filter((item)=>{
        return (item.idade < 20)
    })
    return novaLista
}
2.
const array = [1, 2, 3, 4, 5, 6]

function multiplicaPor2(arr){
    
    const mult =[]
     arr.forEach((numero) =>{
        mult.push(numero * 2)
    })
    return mult
}

function multiplicaPor3(arr){
    const mult = []
    arr.forEach(numero =>{
        mult.push(String((numero * 3)))
    })
    return mult
}

function parOuImpar(arr){
    const mult =[]
     arr.forEach(numero =>{
        if(numero%2 === 0){
            mult.push(String(numero) + " é Par")
        }
        else{
            mult.push(String(numero) + " é Impar")
        }
        
    })
    return mult
}
3. 
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//a. 
function comPermicao(array){
    const novaLista = array.filter((item)=>{
        return ((item.altura >= 1.5)&&(item.idade > 14)&&(item.idade < 80))
    })
    return novaLista
}
//b. 
function semPermicao(array){
    const novaLista = array.filter((item)=>{
        return !((item.altura >= 1.5)&&(item.idade > 14)&&(item.idade < 80))
    })
    return novaLista
}
4.
const consultas = [
 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
 ]
 //a. 
 function emailNaoCancelado(array){
     const novaLista = array.filter((item)=>{
         return item.cancelada === true
     })
     const email =[]

     novaLista.forEach((consulta) => {
        let texto =""
         texto += "Olá, " 
         if(consulta.genero === "feminino" ){
             texto += "Sra."
          }
         else if(consulta.genero === "masculino"){
             texto += "Sr." 
          }
 
          texto += consulta.nome +". Estamos enviando esta mensagem para"
          if(consulta.genero === "feminino" ){
             texto += " lembrá-la "
          }
         else if(consulta.genero === "masculino"){
             texto += " lembrá-lo" 
          }
         texto += " da sua consulta no dia "+ consulta.dataDaConsulta +". Por favor, acuse o recebimento deste e-mail."
         email.push(texto)
     });
     return email
 }
//b. 
 function emailCancelado(array){
    const novaLista = array.filter((item)=>{
        return item.cancelada === false
    })
    const email =[]

    novaLista.forEach((consulta) => {
       let texto =""
        texto += "Olá, " 
        if(consulta.genero === "feminino" ){
            texto += "Sra."
         }
        else if(consulta.genero === "masculino"){
            texto += "Sr." 
         }

         texto += consulta.nome +". Infelizmente, sua consulta marcada para o dia "+
          consulta.dataDaConsulta +". foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la"
        email.push(texto)
    });
    return email
}
5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]
function atualizarSaldo(array){
    array.forEach(cliente => {
       const compras = cliente.compras.reduce((soma,atual)=>{
           return soma + atual
       },0)

        cliente.saldoTotal -= compras
    });
}
 */
