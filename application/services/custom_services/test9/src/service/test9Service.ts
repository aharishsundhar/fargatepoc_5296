import { Request, Response } from 'express';
import {test9Dao} from '../dao/test9Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test9 = new test9Dao();

export class test9Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test9Service.ts: GpCreate')
     let  test9Data = req.body;
     test9.GpCreate(test9Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test9Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}