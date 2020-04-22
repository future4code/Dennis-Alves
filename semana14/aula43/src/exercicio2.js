"use strict";
exports.__esModule = true;
function exercicio2(array) {
    var oddQtde = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddQtde++;
        }
    }
    var arrayResult = {
        Quantity: array.length,
        oddQuantity: oddQtde,
        arraySum: array.reduce(function (a, b) { return a + b; }, 0)
    };
    console.log("exercicio 2");
    console.log(arrayResult);
}
exports.exercicio2 = exercicio2;
