import { Request, Response } from 'express';
import { test8Service } from '../service/test8Service';
import { CustomLogger } from '../config/Logger'
let test8 = new test8Service();

export class test8Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test8.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test8Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test8Controller.ts: GpCreate');
    })}


}