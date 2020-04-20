"use strict";
exports.__esModule = true;
function exercicio1(first, second) {
    var sum = first + second;
    var sub = first - second;
    var mult = first * second;
    var greater = undefined;
    if (first > second) {
        greater = "First Number";
    }
    else if (second > first) {
        greater = "Second Number";
    }
    console.log("Exercicio 1");
    console.log("sum: " + sum + " sub: " + sub + " mult: " + mult + " the greather number is: " + greater);
}
exports.exercicio1 = exercicio1;
