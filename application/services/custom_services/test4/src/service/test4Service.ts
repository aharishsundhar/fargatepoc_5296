import { Request, Response } from 'express';
import {test4Dao} from '../dao/test4Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test4 = new test4Dao();

export class test4Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test4Service.ts: GpCreate')
     let  test4Data = req.body;
     test4.GpCreate(test4Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test4Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}