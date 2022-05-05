import * as mongoose from 'mongoose';
import test2Model from '../models/test2';
import { CustomLogger } from '../config/Logger'


export class test2Dao {
    private test2 = test2Model;
    constructor() { }
    
    public async GpCreate(test2Data, callback){
    
    new CustomLogger().showLogger('info', 'Enter into test2Dao.ts: GpCreate');

    let temp = new test2Model(test2Data);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from test2Dao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}