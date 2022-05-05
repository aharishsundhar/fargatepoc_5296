import { Request, Response } from 'express';
import {test3Dao} from '../dao/test3Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test3 = new test3Dao();

export class test3Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test3Service.ts: GpCreate')
     let  test3Data = req.body;
     test3.GpCreate(test3Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test3Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}