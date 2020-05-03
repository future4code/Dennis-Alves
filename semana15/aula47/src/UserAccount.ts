import {Transaction} from "./Transaction";

export class UserAccount {
     balance: number;
     cpf: string;
     name: string;
     age: number;
     transaction: Transaction[];

    constructor( name: string,cpf: string, age: number) {
       this.balance = 0;
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transaction = [];
    }

    public getBalance () :number{
        return this.balance;
    }

    public addBalance(value: number) :void{
        this.balance += value;
    }
    public  addTransaction(transaction: Transaction):void{
        this.transaction.push(transaction)
    }
}