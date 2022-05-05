import * as mongoose from 'mongoose';
import test4Model from '../models/test4';
import { CustomLogger } from '../config/Logger'


export class test4Dao {
    private test4 = test4Model;
    constructor() { }
    
    public async GpCreate(test4Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test4Dao.ts: GpCreate');

    let temp = new test4Model(test4Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test4Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}