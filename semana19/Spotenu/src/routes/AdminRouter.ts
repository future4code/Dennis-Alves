import express from 'express';
import {AdminControler} from "../controler/AdminControler";


export const adminRouter = express.Router();

adminRouter.post("/signup", new AdminControler().signup);
adminRouter.get("/get_all_bands", new AdminControler().getAllBands);
adminRouter.post("/aprove_band",new AdminControler().aproveBand);
adminRouter.post("/create_genre", new AdminControler().addGenre);