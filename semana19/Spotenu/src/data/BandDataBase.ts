import { BaseDataBase } from "./BaseDatabase";
import {Band} from "../model/Band";

export class BandDatabase extends BaseDataBase {
    private static USER_TABLE_NAME = "user_spotnu"

    public async signupBand(band: Band): Promise<void> {
        await super.getConnection()
            .insert(band.data)
            .into(BandDatabase.USER_TABLE_NAME)
    }
    public async getAllBands(): Promise<any[]>{
       const bands = await super.getConnection()
            .select("*")
            .from(BandDatabase.USER_TABLE_NAME)
           .where({role: "banda"})
        return bands
    }
    public async aproveBand(id: string):Promise<void>{
        console.log(id)
        await super.getConnection().raw(`
            UPDATE ${BandDatabase.USER_TABLE_NAME}
            SET approbation = 1
            WHERE id = "${id}"
        `)
    }
}
