"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(name, cpf, age) {
        this.balance = 0;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transaction = [];
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance += value;
    }
    addTransaction(transaction) {
        this.transaction.push(transaction);
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map