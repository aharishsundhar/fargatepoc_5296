import * as mongoose from 'mongoose';
import test9Model from '../models/test9';
import { CustomLogger } from '../config/Logger'


export class test9Dao {
    private test9 = test9Model;
    constructor() { }
    
    public async GpCreate(test9Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test9Dao.ts: GpCreate');

    let temp = new test9Model(test9Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test9Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}