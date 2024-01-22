import { linkModel } from "../models/schemas/links.schema";
import { Linki } from "../models/interfaces/link.interface";

export class LinkQuerieService{

    async saveLink(dataLink:Linki){

        try{

            const link = new linkModel(dataLink);
            const resMongo = await link.save();
            console.log(resMongo);

        }catch(err:any){

            err = err as Error;

            throw new Error(err);
        }

    }
    async findLink(){

        try{

            const links = await linkModel.find();
            
            return links;

        }catch(err:any){

            err = err as Error;

            throw new Error(err);
        }

    }


}