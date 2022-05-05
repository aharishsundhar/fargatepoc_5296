import { Request, Response } from 'express';
import { test11Service } from '../service/test11Service';
import { CustomLogger } from '../config/Logger'
let test11 = new test11Service();

export class test11Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test11.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test11Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test11Controller.ts: GpCreate');
    })}


}