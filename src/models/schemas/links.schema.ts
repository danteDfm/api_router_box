import { Schema, model } from "mongoose";
import { Linki } from "../interfaces/link.interface";


const linkSchema = new Schema <Linki>({

    nombre:String, 
    link:String, 
    descripcion:String,
    categoria:String

});


export const linkModel = model('links', linkSchema);

