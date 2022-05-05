import { Request, Response } from 'express';
import { test3Service } from '../service/test3Service';
import { CustomLogger } from '../config/Logger'
let test3 = new test3Service();

export class test3Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test3.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test3Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test3Controller.ts: GpCreate');
    })}


}