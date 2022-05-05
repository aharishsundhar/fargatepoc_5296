import { Request, Response } from 'express';
import { test9Service } from '../service/test9Service';
import { CustomLogger } from '../config/Logger'
let test9 = new test9Service();

export class test9Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test9.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test9Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test9Controller.ts: GpCreate');
    })}


}