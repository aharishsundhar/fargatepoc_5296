import * as mongoose from 'mongoose';
import test3Model from '../models/test3';
import { CustomLogger } from '../config/Logger'


export class test3Dao {
    private test3 = test3Model;
    constructor() { }
    
    public async GpCreate(test3Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test3Dao.ts: GpCreate');

    let temp = new test3Model(test3Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test3Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}