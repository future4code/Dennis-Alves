import * as moment from "moment"
moment.locale("pt-br")

export class Student implements User{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public hobbies: string[]
    ) {}

    public getAge(): number {
        return moment().diff(this.birthDate, "years");
    }
 }