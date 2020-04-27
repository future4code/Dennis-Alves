import * as fs from 'fs'
import {UserAccount} from "./UserAccount";
import {Transaction} from "./Transaction";


export class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }
  writeObjectToFile(accounts: UserAccount[]) {
    fs.writeFileSync(this.fileName, JSON.stringify(accounts, null, 2))
  }

  getObjectFromFIle(): UserAccount [] {
    const data = JSON.parse(fs.readFileSync(this.fileName).toString());

    const accounts: UserAccount[] = data.map((accountData: any) => {
        const account: UserAccount = new UserAccount(accountData.name,accountData.cpf,accountData.age)
            if(accountData.balance !== 0){
              account.balance = accountData.balance
            }
            if(accountData.transaction.length > 0){
              accountData.transaction.forEach((data: any) => {
                const transaction: Transaction = new Transaction(data.cpf,data.value,data.description)
                account.addTransaction(transaction);
              })
            }

        return account
    })

      return accounts
  }
}
