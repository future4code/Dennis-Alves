import {UserAccount} from "./UserAccount";
import {Transaction} from "./Transaction";
import {JSONFileManager} from "./JSONFileManager";
import * as moment from "moment"
moment.locale("pt-br")

 export class Bank{
    accounts: UserAccount[];
    fileManager : JSONFileManager = new JSONFileManager("bankData.json")
    constructor(){
        this.accounts = this.fileManager.getObjectFromFIle();
    }
    private saveAccounts():void{
         this.fileManager.writeObjectToFile(this.accounts)
     }
    public createAccount(name: string,cpf: string,age: string):void{
        const actualAge = moment().diff(moment(age, "DD-MM-YYYY"), 'years');
        if(actualAge < 18){
            console.log("a idade deve ser superior ou igual a 18 anos para criar uma conta")
        }
        else{
            const account = new UserAccount(name,cpf,actualAge);
            this.accounts.push(account);
            this.saveAccounts();
        }
    }
    public getAllAccounts():UserAccount[]{
        return this.accounts;
    }
    public  getBalance(name:string, cpf: string):UserAccount[]{
        return this.accounts.filter((account) =>{
            return account.cpf === cpf && account.name === name
        })
    }
    public addValueToAccount(cpf: string,value: number):void{
        this.accounts.forEach((account) =>{
            if(account.cpf === cpf){
                const transaction = new Transaction(cpf,value,"deposit")
                account.addBalance(value)
                account.addTransaction(transaction)
                console.log("deposito efetuado!")
            }
        })
        this.saveAccounts()


    }

}