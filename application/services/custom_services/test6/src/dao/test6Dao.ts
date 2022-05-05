import * as mongoose from 'mongoose';
import test6Model from '../models/test6';
import { CustomLogger } from '../config/Logger'


export class test6Dao {
    private test6 = test6Model;
    constructor() { }
    
    public async GpCreate(test6Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test6Dao.ts: GpCreate');

    let temp = new test6Model(test6Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test6Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}