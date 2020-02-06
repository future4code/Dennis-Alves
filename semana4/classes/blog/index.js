
class Post{
    constructor(titulo,autor,texto){
    this.titulo = titulo
    this.autor = autor
    this.texto = texto
    }   
}
const arrayPost = []

function printPost(){
    document.getElementById("post-article").innerHTML = ""
    for(let i = 0; i < arrayPost.length;i++){
        const articlePost = document.getElementById("post-article")
        articlePost.innerHTML += "<h2>"+ arrayPost[i].titulo +"</h2>"
        articlePost.innerHTML += "<p>"+ arrayPost[i].texto +"</p>"
        articlePost.innerHTML += "<h4>"+ arrayPost[i].autor +"</h4>"
        
    }
}

function addPost(){
    
    const titulo = document.getElementById("titulo").value
    const autor = document.getElementById("autor").value
    const texto = document.getElementById("texto").value

    const novoPost = new Post(titulo,autor,texto)
    if(titulo === ""){
        alert("digite um titulo")
        return
    }
    else if(autor === ""){
        alert("Digite um autor")
        return
    }
    else if(texto === ""){
        alert("Digite um texto")
        return
    }
    
    arrayPost.push(novoPost)
    
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("texto").value = ""
    console.log(arrayPost)
    printPost();
    
}


