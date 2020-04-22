import  {post} from './listaDeExercicios'
export function exercicio3(post: Array<post>,autor: string) {
    const filteredArray: Array<post> = post.filter(post =>{
        if(post.autor === autor){
            return post
        }
    })
    console.log("exercicio 3")
    console.log(filteredArray)
}