import { Request, Response } from 'express';
import {test10Dao} from '../dao/test10Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test10 = new test10Dao();

export class test10Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test10Service.ts: GpCreate')
     let  test10Data = req.body;
     test10.GpCreate(test10Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test10Service.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}