import { Request, Response } from 'express';
import {test7Dao} from '../dao/test7Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test7 = new test7Dao();

export class test7Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test7Service.ts: GpCreate')
     let  test7Data = req.body;
     test7.GpCreate(test7Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test7Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}