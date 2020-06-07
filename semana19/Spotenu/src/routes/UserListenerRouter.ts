import express from 'express';
import {UserListenerControler} from "../controler/UserListenerControler";

export const userListenerRouter = express.Router();

userListenerRouter.post("/signup", new UserListenerControler().signup);
userListenerRouter.get("/login", new UserListenerControler().login);