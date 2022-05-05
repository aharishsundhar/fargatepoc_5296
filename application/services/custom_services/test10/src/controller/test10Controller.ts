import { Request, Response } from 'express';
import { test10Service } from '../service/test10Service';
import { CustomLogger } from '../config/Logger'
let test10 = new test10Service();

export class test10Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test10.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test10Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test10Controller.ts: GpCreate');
    })}


}