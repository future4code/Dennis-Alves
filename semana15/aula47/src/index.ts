import {Bank} from "./Bank";

 const bank = new Bank();


console.log(bank.getAllAccounts())
bank.createAccount("testeError","3333","01/01/2010")
bank.addValueToAccount("2222",10)

console.log(bank.getBalance("teste2","2222"))