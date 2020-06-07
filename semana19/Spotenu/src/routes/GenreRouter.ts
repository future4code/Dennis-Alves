import express from 'express';
import {GenreControler} from "../controler/GenreControler";


export const genreRouter = express.Router();

genreRouter.get("/get_genres", new GenreControler().getAllGenres );