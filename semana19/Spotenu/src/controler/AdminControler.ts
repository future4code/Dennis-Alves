import {Request, Response} from "express";
import {UserBusiness} from "../business/UserBusiness";
import {Authenticator} from "../services/Authenticator";
import {UserRoleEnum} from "../model/UserRoles";
import {BandBusiness} from "../business/BandBusiness";
import {captureRejectionSymbol} from "events";
import {GenreBusiness} from "../business/GenreBusiness";

export class AdminControler {
     signup(req: Request, res: Response) {
        try {
            const userId =  new Authenticator().verifyToken(req.headers.authorization as string).id;
            const userRole =  new UserBusiness().checkAdmin(userId);

            if (!userRole){
                throw new Error("apenas administradores pode criar administradores.")
            }

            if (req.body.name === "") {
                throw new Error("Informe o nome.")
            }
            if (req.body.nickname === "") {
                throw new Error("Informe o nickname.")
            }
            if (!req.body.email.includes("@") || req.body.email === "" || req.body.email.length < 6) {
                throw new Error("Informe um email valido.")
            }
           if (req.body.password === "" || req.body.password.length < 10) {
                throw new Error("Informe uma senha valida.")
            }
            let role = UserRoleEnum.ADMIN

            new UserBusiness().adminSignup(
                req.body.name,
                req.body.nickname,
                req.body.email,
                req.body.password,
                role
            ).then((result) => {
                res.status(200).send({token: new Authenticator().generateToken({id: result.id})});
            })
        } catch (Error) {
            res.status(400).send({Error: Error});
        }
    }

    async getAllBands(req: Request, res: Response){
        try{
            const userId =  new Authenticator().verifyToken(req.headers.authorization as string).id;
            const userRole =  new UserBusiness().checkAdmin(userId);

            if (!userRole){
                throw new Error("apenas administradores podem ver essa lista de bandas.")
            }

            const bandBusiness = new BandBusiness()
            const bandList = await bandBusiness.getAllBands()

            if(bandList.length > 0){
                res.status(200).send({BandList: bandList});
            }
            else{
                res.status(200).send({BandList: "Vazia"});
            }
        }catch(err){
            res.status(400).send({Error: Error});
        }
    }

    async aproveBand(req: Request, res: Response){
        try{
            const userId =  new Authenticator().verifyToken(req.headers.authorization as string).id;
            const userRole =  new UserBusiness().checkAdmin(userId);
            const bandId = req.body.id
            if (req.body.id === "") {
                throw new Error("Informe um id de banda.")
            }
            if (!userRole){
                throw new Error("apenas administradores podem aprovar bandas.")
            }

            const bandBusiness = new BandBusiness()
            const bandList = await bandBusiness.aproveBand(bandId)

            if(bandList){
                res.status(200).send({status: bandList});
            }
            else{
                res.status(400).send({Erro: "deu zica"});
            }
        }catch(err){
            res.status(400).send({Error: Error});
        }
    }

    async addGenre(req: Request, res: Response){
        try{
            const userId =  new Authenticator().verifyToken(req.headers.authorization as string).id;
            const userRole =  new UserBusiness().checkAdmin(userId);
            const name = req.body.name
            if (req.body.name === "") {
                throw new Error("Informe um id de banda.")
            }
            if (!userRole){
                throw new Error("apenas administradores podem criar generos.")
            }
            const genre = await new GenreBusiness().createGenre(name)

            if(genre){
                res.status(200).send({status: "Genero criado"});
            }
            else{
                res.status(400).send({Erro: "Genero já existe"});
            }
        }catch(err){
            res.status(400).send({Error: Error});
        }
    }
}