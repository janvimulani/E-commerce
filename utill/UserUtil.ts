
import  path from "path"
import{IUser} from "../models/IUser";
const jsonfile = require('jsonfile')

export class UserUtil{
    private static usersJsonpath = path.join(__dirname,"..","db","users.json");
    
    public static getAllUserFromDB():Promise<IUser[]>{
        console.log("inside util",this.usersJsonpath);
        return new Promise((resolve,reject) => {
           jsonfile.readFile(this.usersJsonpath, (err:any, data:any )=>{
            if(err){
                console.log("reject");
                reject(err);
            }else{
                console.log("resolve");
                resolve(data);
            }
           })
        
        })
    }
}