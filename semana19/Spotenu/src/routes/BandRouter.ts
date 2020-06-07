import express from 'express';
import {BandControler} from "../controler/BandControler";

export const bandRouter = express.Router();

bandRouter.post("/signup", new BandControler().signup);