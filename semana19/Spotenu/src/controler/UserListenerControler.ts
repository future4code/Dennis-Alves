import {Request, Response} from "express";
import {UserBusiness} from "../business/UserBusiness";
import {Authenticator} from "../services/Authenticator";
import {UserRoleEnum} from "../model/UserRoles";

export class UserListenerControler {
    signup(req: Request, res: Response) {
        try {
            if (req.body.name === "") {
                throw new Error("Informe o nome.")
            }
            if (req.body.nickname === "") {
                throw new Error("Informe o nickname.")
            }
            if (!req.body.email.includes("@") || req.body.email === "" || req.body.email.length < 6) {
                throw new Error("Informe um email valido.")
            }
            if (req.body.password === "" || req.body.password.length < 6) {
                throw new Error("Informe uma senha valida.")
            }
            let role = ""
            if (req.body.role === "") {
                throw new Error("Informe o tipo do usuario.")
            }
            if (req.body.role === "pago") {
                role = UserRoleEnum.PAYD_LISTENER
            } else if (req.body.role === "gratis") {
                role = UserRoleEnum.UNPAYD_LISTENER
            }

            new UserBusiness().signup(
                req.body.name,
                req.body.nickname,
                req.body.email,
                req.body.password,
                role
            ).then((result) => {
                res.status(200).send({token: new Authenticator().generateToken({id: result.id})});
            })
        } catch (err) {
            res.status(400).send({err: err});
        }
    }
    async login(req: Request, res: Response){
        try{
            if (req.body.login === "") {
                throw new Error("Informe o nome ou o nickname.")
            }
            if (req.body.password === "") {
                throw new Error("Informe a senha.")
            }
            const userId = await new UserBusiness().login(req.body.login, req.body.password)

            const token = new Authenticator().generateToken(userId)
            if(token){
                res.status(200).send({token: token})
            }
        }catch(err){
            res.status(400).send({err: err});
        }
    }
}