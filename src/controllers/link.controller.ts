import { Request, Response } from "express";
import { LinkQuerieService } from "../services/link.service";

const objLink = new LinkQuerieService();

export class LinkController{

    public static routeSaveLink(req:Request, res:Response){

        if(!req.body){
            res.status(401).json('data vaci');
        }   

        objLink.saveLink(req.body);
        
        res.status(201).json('create successfully');

    }
    public static async routeFindLink(req:Request, res:Response){

        const dataLink = await objLink.findLink();

        if(!dataLink){
            res.status(401).json('base de datos vacia');
        }
        res.status(201).json(dataLink);

    }

}