import {BaseDataBase} from "./BaseDatabase";

export class GenreDatabase extends BaseDataBase {
    private static GENRE_TABLE_NAME = "genre_spotnu"

    public async getGenreByName(genre: string): Promise<any> {
        const response = await super.getConnection()
            .select("*")
            .from(GenreDatabase.GENRE_TABLE_NAME)
            .where({name: genre})

        return response
    }

    public async createGenre(id: string, name: string): Promise<void> {
        await super.getConnection().raw(`
        INSERT INTO ${GenreDatabase.GENRE_TABLE_NAME} (id,name)
        VALUES ("${id}","${name}")
        `)
    }
    public async getAllGenre():Promise<any> {
        const response = await super.getConnection()
            .select("*")
            .from(GenreDatabase.GENRE_TABLE_NAME)

        return response
    }
}
