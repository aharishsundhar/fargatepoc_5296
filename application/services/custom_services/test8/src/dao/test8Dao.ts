import * as mongoose from 'mongoose';
import test8Model from '../models/test8';
import { CustomLogger } from '../config/Logger'


export class test8Dao {
    private test8 = test8Model;
    constructor() { }
    
    public async GpCreate(test8Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test8Dao.ts: GpCreate');

    let temp = new test8Model(test8Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test8Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}