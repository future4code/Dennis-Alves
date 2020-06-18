
export class Band {

    constructor(
        private id: string,
        private name: string,
        private nickname: string,
        private email: string,
        private description:string,
        private password: string,
        private approbation: boolean,
        private role: string,
    ) {}

    get data(): any {
        const data = {
            id: this.id,
            name: this.name,
            nickname: this.nickname,
            email: this.email,
            description: this.description,
            password: this.password,
            approbation: this.approbation,
            role: this.role,
        }
        return data;
    }
}