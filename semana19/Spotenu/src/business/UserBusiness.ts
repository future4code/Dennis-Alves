import {User} from "../model/User";
import {IdGenerator} from "../services/IdGenerator";
import {HashManager} from "../services/HashManager";
import {UserDatabase} from "../data/UserDataBase";


export class UserBusiness{
    public async  signup(
        name: string,
        nickname: string,
        email: string,
        password: string,
        role: string){
        const id = new IdGenerator().createID();
        const hashPassword = await new HashManager().hash(password)
        const approbation: boolean = true;
        const user = new User(
            id,
            name,
            nickname,
            email,
            hashPassword,
            approbation,
            role);
        await new UserDatabase().signupUserListener(user)
        return {id: id}
    }

    public async  adminSignup(
        name: string,
        nickname: string,
        email: string,
        password: string,
        role: string){
        const id = new IdGenerator().createID();
        const hashPassword = await new HashManager().hash(password)
        const approbation: boolean = true;
        console.log("role ", role)
        const user = new User(
            id,
            name,
            nickname,
            email,
            hashPassword,
            approbation,
            role);
        await new UserDatabase().signupUserAdmin(user)
        return {id: id}
    }
    public async login(login: string,password: string){
        const user = await new UserDatabase().getUserBynameOrNickname(login)
        const hashManager = new HashManager()
        const comparePassword = await hashManager.compare(password, user.password)

        if (!comparePassword) {
            throw new Error("Informação incorreta")
        }
        return {id: user.id}
    }
    public async getUserById(id: string){
        const user = await new UserDatabase().getUserById(id)
        return user
    }

    public async checkAdmin(id: string){
        const user = await new UserDatabase().getUserById(id)
        if(user.role === 'administrador'){
            return true
        }
        else {
            return false
        }
    }
    public async checkAdminOrBand(id: string){
        const user = await new UserDatabase().getUserById(id)
        if(user.role === 'administrador'|| user.role === 'banda'){
            return true
        }
        else {
            return false
        }
    }
}