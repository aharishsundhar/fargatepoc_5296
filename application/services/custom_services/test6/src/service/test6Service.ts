import { Request, Response } from 'express';
import {test6Dao} from '../dao/test6Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test6 = new test6Dao();

export class test6Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test6Service.ts: GpCreate')
     let  test6Data = req.body;
     test6.GpCreate(test6Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test6Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}