"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserAccount_1 = require("./UserAccount");
const Transaction_1 = require("./Transaction");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeObjectToFile(accounts) {
        fs.writeFileSync(this.fileName, JSON.stringify(accounts, null, 2));
    }
    getObjectFromFIle() {
        const data = JSON.parse(fs.readFileSync(this.fileName).toString());
        const accounts = data.map((accountData) => {
            const account = new UserAccount_1.UserAccount(accountData.name, accountData.cpf, accountData.age);
            if (accountData.balance !== 0) {
                account.balance = accountData.balance;
            }
            if (accountData.transaction.length > 0) {
                accountData.transaction.forEach((data) => {
                    const transaction = new Transaction_1.Transaction(data.cpf, data.value, data.description);
                    account.addTransaction(transaction);
                });
            }
            return account;
        });
        return accounts;
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map