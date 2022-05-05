import { Request, Response } from 'express';
import {test8Dao} from '../dao/test8Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test8 = new test8Dao();

export class test8Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test8Service.ts: GpCreate')
     let  test8Data = req.body;
     test8.GpCreate(test8Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test8Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}