import { Request, Response } from 'express';
import { test1Service } from '../service/test1Service';
import { CustomLogger } from '../config/Logger'
let test1 = new test1Service();

export class test1Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test1.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test1Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test1Controller.ts: GpCreate');
    })}


}