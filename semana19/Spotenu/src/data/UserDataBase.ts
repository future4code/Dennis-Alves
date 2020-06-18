import { BaseDataBase } from "./BaseDatabase";
import {User} from "../model/User";

export class UserDatabase extends BaseDataBase {
    private static USER_TABLE_NAME = "user_spotnu"

    public async signupUserListener(
        user: User): Promise<void> {
        await super.getConnection()
            .insert(user.data)
            .into(UserDatabase.USER_TABLE_NAME)
    }
    public async signupUserAdmin(
        user: User): Promise<void> {
        await super.getConnection()
            .insert(user.data)
            .into(UserDatabase.USER_TABLE_NAME)
    }
    public async getUserById(id: string): Promise<any> {
        const user = await super.getConnection()
            .select("*")
            .from(UserDatabase.USER_TABLE_NAME)
            .where({ id })
        return user[0]
    }
    public async getUserBynameOrNickname(login: string): Promise<any> {
        const user = await super.getConnection()
            .select("*")
            .from(UserDatabase.USER_TABLE_NAME)
            .where({ name: login} )
            .orWhere({nickname: login})
        return user[0]
    }
}
