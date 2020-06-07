import {GenreDatabase} from "../data/GenreDataBase";
import {IdGenerator} from "../services/IdGenerator";

export class GenreBusiness {
    public async createGenre(name: string) {
        const result = await new GenreDatabase().getGenreByName(name)
        if (result.length > 0){
            return false
        }
        else {
            const id = new IdGenerator().createID()
            await new GenreDatabase().createGenre(id,name)
            return true

        }
    }
    public async getAllGenres() {
        const result = await new GenreDatabase().getAllGenre()
        return result
    }
}