import * as mongoose from 'mongoose';
import test10Model from '../models/test10';
import { CustomLogger } from '../config/Logger'


export class test10Dao {
    private test10 = test10Model;
    constructor() { }
    
    public async GpCreate(test10Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test10Dao.ts: GpCreate');

    let temp = new test10Model(test10Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test10Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}