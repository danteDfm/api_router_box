import mongoose from "mongoose";

export  function mongoConnect(){
     return mongoose.connect('mongodb://127.0.0.1:27017/urlBox');
}

