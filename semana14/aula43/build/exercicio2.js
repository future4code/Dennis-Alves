"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicio1");
function cars(array, marca) {
    if (marca) {
        return exercicio1_1.estacionamento.filter(carro => carro.marca === marca);
    }
    return exercicio1_1.estacionamento;
}
const resultado = cars(exercicio1_1.estacionamento);
console.log(resultado);
//# sourceMappingURL=exercicio2.js.map