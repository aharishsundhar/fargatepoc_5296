import { Request, Response } from 'express';
import { test7Service } from '../service/test7Service';
import { CustomLogger } from '../config/Logger'
let test7 = new test7Service();

export class test7Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test7.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test7Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test7Controller.ts: GpCreate');
    })}


}