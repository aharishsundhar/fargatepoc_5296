import { Request, Response } from 'express';
import {test11Dao} from '../dao/test11Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test11 = new test11Dao();

export class test11Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test11Service.ts: GpCreate')
     let  test11Data = req.body;
     test11.GpCreate(test11Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test11Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}