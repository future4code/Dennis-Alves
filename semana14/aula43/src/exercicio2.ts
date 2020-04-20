export function exercicio2(array: Array<number>): void{
    type arrayData = {
        Quantity: number,
        oddQuantity: number,
        arraySum: number
    }
    let oddQtde: number = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i]%2 !== 0){
            oddQtde ++
        }
    }
    const arrayResult: arrayData ={
        Quantity: array.length,
        oddQuantity: oddQtde,
        arraySum: array.reduce((a,b) => a + b,0)
    }


    console.log("exercicio 2")
    console.log(arrayResult)
}