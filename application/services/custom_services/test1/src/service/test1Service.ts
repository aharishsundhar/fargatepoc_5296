import { Request, Response } from 'express';
import {test1Dao} from '../dao/test1Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test1 = new test1Dao();

export class test1Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test1Service.ts: GpCreate')
     let  test1Data = req.body;
     test1.GpCreate(test1Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test1Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}