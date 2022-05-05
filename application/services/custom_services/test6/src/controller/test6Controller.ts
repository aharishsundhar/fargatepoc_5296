import { Request, Response } from 'express';
import { test6Service } from '../service/test6Service';
import { CustomLogger } from '../config/Logger'
let test6 = new test6Service();

export class test6Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test6.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test6Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test6Controller.ts: GpCreate');
    })}


}