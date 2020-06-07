import {IdGenerator} from "../services/IdGenerator";
import {HashManager} from "../services/HashManager";
import {BandDatabase} from "../data/BandDataBase";
import {Band} from "../model/Band";

export class BandBusiness {
    public async bandSignup(
        name: string,
        nickname: string,
        email: string,
        description: string,
        password: string,
        role: string) {
        const id = new IdGenerator().createID();
        const hashPassword = await new HashManager().hash(password)
        const approbation: boolean = false;
        const band = new Band(
            id,
            name,
            nickname,
            email,
            description,
            hashPassword,
            approbation,
            role);
        await new BandDatabase().signupBand(band)
        return {id: id}
    }

    public async getAllBands(){
        const bands = await new BandDatabase().getAllBands()
        const formatedBand =[]
            for (let i = 0; i < bands.length; i++) {
                formatedBand.push({
                    name: bands[i].name,
                    nickname: bands[i].nickname,
                    email: bands[i].email,
                    approbation: bands[i].approbation
                })
            }
        return formatedBand
    }
    public async aproveBand(id:string) {

        const bands = await new BandDatabase().getAllBands()

        for(let i = 0; i < bands.length; i++) {
            if(bands[i].id === id) {
                if(bands[i].approbation){
                    return "a banda ja está aprovada"
                }
                else{
                    await new BandDatabase().aproveBand(bands[i].id)
                    return "banda aprovada!!!"
                }
            }
        }
        return "a banda invalida ou inexistente"
    }
}