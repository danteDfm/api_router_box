import express, {Application, json }  from "express";
import { mongoConnect } from "./database/mongod";
import apiRouter from "./routes";

export class Server{

    private PORT:number;
    private app:Application;

    constructor(){
        this.app = express();
        this.PORT = 3001;
        this.out();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

     dbConnection(){
         mongoConnect()
        .then(()=>{

            console.log('Conexion a base de datos realizada');
        })
        .catch(err =>{

            console.log(err);
        })
    }
    middlewares(){
        this.app.use(express.json());
    }
    routes(){

        apiRouter(this.app);
    }
    out(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    }

}