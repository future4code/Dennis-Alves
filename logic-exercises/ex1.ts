

function a(array: number[]) {
    let result = {sum:0,quantity:0,multiplication:0}
    result.sum = array.reduce((a,b) => a + b)
    result.quantity = array.length
    result.multiplication = array.reduce((a,b) => a * b)

    return result
}

function b(array: number[]) {
    let result = {biggest:0, smallest:0}
    result.biggest = array.reduce(function(a,b) {
        return (a > b) ? a : b
    })
    result.smallest = array.reduce(function(a,b) {
        return (a < b) ? a : b
    })
    return result
}