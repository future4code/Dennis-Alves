import {exercicio1} from './exercicio1'
import {exercicio2} from './exercicio2'
import {exercicio3} from './exercicio3'
import {exercicio4} from './exercicio4'

const array: Array<number> =[2,3,4,5,6,7,8]

export type post ={
    autor: string,
    post:string
}
const post1: post ={
    autor: "jaum",post:'oi'
}, post2: post ={
    autor: 'jaum',post:'oieee'
}, post3: post ={
    autor: 'zé',post:'oi sussa?'
}, post4: post ={
    autor: 'zé',post:'oi bl?'
}, post5: post ={
    autor: 'jaum',post:'tarrrde!'
}


const arrayPost: Array<post> = [post1,post2,post3,post4,post5]


exercicio1(2,3)
exercicio2(array)
exercicio3(arrayPost,"zé")
exercicio4(1453,"")