"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const Transaction_1 = require("./Transaction");
const JSONFileManager_1 = require("./JSONFileManager");
const moment = require("moment");
moment.locale("pt-br");
class Bank {
    constructor() {
        this.fileManager = new JSONFileManager_1.JSONFileManager("bankData.json");
        this.accounts = this.fileManager.getObjectFromFIle();
    }
    saveAccounts() {
        this.fileManager.writeObjectToFile(this.accounts);
    }
    createAccount(name, cpf, age) {
        const actualAge = moment().diff(moment(age, "DD-MM-YYYY"), 'years');
        if (actualAge < 18) {
            console.log("a idade deve ser superior ou igual a 18 anos para criar uma conta");
        }
        else {
            const account = new UserAccount_1.UserAccount(name, cpf, actualAge);
            this.accounts.push(account);
            this.saveAccounts();
        }
    }
    getAllAccounts() {
        return this.accounts;
    }
    getBalance(name, cpf) {
        return this.accounts.filter((account) => {
            return account.cpf === cpf && account.name === name;
        });
    }
    addValueToAccount(cpf, value) {
        this.accounts.forEach((account) => {
            if (account.cpf === cpf) {
                const transaction = new Transaction_1.Transaction(cpf, value, "deposit");
                account.addBalance(value);
                account.addTransaction(transaction);
                console.log("deposito efetuado!");
            }
        });
        this.saveAccounts();
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map