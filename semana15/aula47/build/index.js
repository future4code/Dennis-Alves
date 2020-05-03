"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const bank = new Bank_1.Bank();
console.log(bank.getAllAccounts());
bank.createAccount("testeError", "3333", "01/01/2010");
bank.addValueToAccount("2222", 10);
console.log(bank.getBalance("teste2", "2222"));
//# sourceMappingURL=index.js.map