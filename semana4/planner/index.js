    let linhaLista = 1;
  
    
    for(let i = 0; i < 24; i++){
        document.getElementById("horario").innerHTML += "<option value="+ i +">"+ i +":00</option>"
    }
    
    

function addTarefa(){
    const entradaTarefa = document.getElementById("nova-tarefa")
    const tarefa = entradaTarefa.value
    const entradaSemana = document.getElementById("dia-da-semana")
    const semana = entradaSemana.value
    const entradaHorario = document.getElementById("horario")
    const horario = entradaHorario.value
    
    if(tarefa === ""){
        alert("a tarefa não pode estar vazia!!")
    }
    else{
        const listaDeTarefas = document.getElementById("lista-"+ semana)

        listaDeTarefas.innerHTML += "<li class='linha-lista' id='linhaLista-"+ linhaLista +
        "' onclick='addStrike(this.id)'> Horario: "+ horario + ":00 Tarefa: "+ tarefa + "</li>"
        linhaLista++
        entradaTarefa.value = ""
    }
}

function addStrike(id){
    const text = document.getElementById(id)
    text.style.setProperty("text-decoration", "line-through")
}

function apagarTarefas(){
    const lista = document.getElementsByTagName("ul")
    for(let i = 0;i < lista.length; i++){
        lista[i].parentNode.removeChild(lista[i]);
    }
}