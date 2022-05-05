import * as mongoose from 'mongoose';
import test11Model from '../models/test11';
import { CustomLogger } from '../config/Logger'


export class test11Dao {
    private test11 = test11Model;
    constructor() { }
    
    public async GpCreate(test11Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test11Dao.ts: GpCreate');

    let temp = new test11Model(test11Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test11Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}