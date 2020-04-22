const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

switch (operation) {
    case "sum":
        console.log(`o resultado da soma é : ${firstNumber + secondNumber}`)
        break
    case "sub":
        console.log(`o resultado da subtração é : ${firstNumber - secondNumber}`)
        break
    case "mult":
        console.log(`o resultado da multiplicação é : ${firstNumber * secondNumber}`)
        break
    case "div":
        console.log(`o resultado da divisão é : ${firstNumber / secondNumber}`)
        break
    default:
        break
}