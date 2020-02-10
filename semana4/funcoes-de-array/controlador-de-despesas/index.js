class Despesa{
    constructor(valor,tipo,descricao){
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

const arrayDespesas =[]

function printLista(){
    document.getElementById("lista-despesas").innerHTML = ""
    limparFiltroDespesas();
    const listaDespesa =  document.getElementById("lista-despesas")
     arrayDespesas.forEach((item)=>{
        listaDespesa.innerHTML += "<h2>Valor: "+ item.valor +"</h2>",
        listaDespesa.innerHTML += "<p>Tipo:"+ item.tipo +"</p>",
        listaDespesa.innerHTML += "<h4>Descrição: "+ item.descricao +"</h4>"
     }
        
    )
}
function ordenar(){

    arrayDespesas.sort((menor,maior)=>{ 
       return maior.valor - menor.valor
    })
    printLista()
}
function filtrarDespesas(){
    document.getElementById("lista-despesas").innerHTML = ""
    const filtroDespesa = document.getElementById("lista-despesas")
    const minimo = Number(document.getElementById("valor-minimo").value)
    const max = Number(document.getElementById("valor-max").value)
    const tipo = String(document.getElementById("filtro-tipo").value)

    if(minimo === ""){
        alert("digite um valor minimo")
        return printLista()
    }
    else if(tipo === "nada"){
        alert("Digite um Tipo")
        return printLista()
    }
    else if(max === ""){
        alert("Digite um valor maximo")
        return printLista()
    }
    
    let arrayFiltro = arrayDespesas.filter((item)=>{
        return (item.valor >= minimo) 
    })

    arrayFiltro = arrayFiltro.filter((item)=>{
        return (item.valor <= max) 
    })
    arrayFiltro = arrayFiltro.filter((item)=>{
        return (item.tipo === tipo) 
    })

    arrayFiltro.forEach((item)=>{
        filtroDespesa.innerHTML += "<h2>"+ item.valor +"</h2>",
        filtroDespesa.innerHTML += "<p>"+ item.tipo +"</p>",
        filtroDespesa.innerHTML += "<h4>"+ item.descricao +"</h4>"
    })        

}

function limparFiltroDespesas(){
    document.getElementById("valor-minimo").value = ""
    document.getElementById("entrada-tipo").value = "nada"
    document.getElementById("valor-max").value = ""
}
function limparCadDespesas(){
    document.getElementById("entrada-valor").value = ""
    document.getElementById("entrada-tipo").value = "nada"
    document.getElementById("descricao").value = ""
}
 function cadastrarDespesas(){

     const novaDespesa = new Despesa(
         Number(document.getElementById("entrada-valor").value),
         document.getElementById("entrada-tipo").value,
         document.getElementById("descricao").value
         );

         if(novaDespesa.valor === ""){
            alert("digite um valor")
            return
        }
        else if(novaDespesa.tipo === "nada"){
            alert("Digite um Tipo")
            return
        }
        else if(novaDespesa.descricao === ""){
            alert("Digite um texto")
            return
        }   

        arrayDespesas.push(novaDespesa); 

        limparCadDespesas();

        total();
        console.log(arrayDespesas)
        printLista()
 }

 function total(){
    let total = 0 
    /*
     arrayDespesas.forEach((item)=>{
         
         total += item.valor
     })
     */
    
        
     total = arrayDespesas.reduce((soma,atual)=>{
        return soma + atual.valor
     },0)
     
     document.getElementById("total").innerHTML = "R$ " + total
    

     
}