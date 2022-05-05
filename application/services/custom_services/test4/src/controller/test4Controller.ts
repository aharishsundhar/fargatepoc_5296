import { Request, Response } from 'express';
import { test4Service } from '../service/test4Service';
import { CustomLogger } from '../config/Logger'
let test4 = new test4Service();

export class test4Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test4.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test4Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test4Controller.ts: GpCreate');
    })}


}