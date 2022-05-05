import * as mongoose from 'mongoose';
import test7Model from '../models/test7';
import { CustomLogger } from '../config/Logger'


export class test7Dao {
    private test7 = test7Model;
    constructor() { }
    
    public async GpCreate(test7Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test7Dao.ts: GpCreate');

    let temp = new test7Model(test7Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test7Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}