export class Transaction {
    cpf: string;
    value: number;
    description: string;
    constructor(cpf: string, value: number, description: string){
        this.cpf = cpf;
        this.value = value;
        this.description = description;
    }
}