import {Request, Response} from "express";
import {UserBusiness} from "../business/UserBusiness";
import {Authenticator} from "../services/Authenticator";
import {GenreBusiness} from "../business/GenreBusiness";

export class GenreControler {

    async getAllGenres(req: Request, res: Response){
        try{
            const userId =  new Authenticator().verifyToken(req.headers.authorization as string).id;
            const userRole =  new UserBusiness().checkAdminOrBand(userId);

            if (!userRole){
                throw new Error("apenas administradores ou bandas podem visualizar generos.")
            }
            const genres = await new GenreBusiness().getAllGenres()

            if(genres.length > 0){
                res.status(200).send({generos: genres});
            }
            else{
                res.status(200).send({generos:"lista de generos vazia"});
            }
        }catch(err){
            res.status(400).send({Error: Error});
        }
    }
}