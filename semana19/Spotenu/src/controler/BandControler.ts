import {Request, Response} from "express";
import {Authenticator} from "../services/Authenticator";
import {UserRoleEnum} from "../model/UserRoles";
import {BandBusiness} from "../business/BandBusiness";

export class BandControler {
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
            if (req.body.description === "") {
                throw new Error("Informe uma descrição.")
            }
            if (req.body.password === "" || req.body.password.length < 6) {
                throw new Error("Informe uma senha valida.")
            }
            let role = UserRoleEnum.BAND


            new BandBusiness().bandSignup(
                req.body.name,
                req.body.nickname,
                req.body.email,
                req.body.description,
                req.body.password,
                role
            ).then((result) => {
                res.status(200).send({status:"salvo com sucesso"});
            })
        } catch (err) {
            res.status(400).send({err: err});
        }
    }
}