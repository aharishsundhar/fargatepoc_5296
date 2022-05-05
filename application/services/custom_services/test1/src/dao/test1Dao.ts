import * as mongoose from 'mongoose';
import test1Model from '../models/test1';
import { CustomLogger } from '../config/Logger'


export class test1Dao {
    private test1 = test1Model;
    constructor() { }
    
    public async GpCreate(test1Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test1Dao.ts: GpCreate');

    let temp = new test1Model(test1Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test1Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}