import { Request, Response, NextFunction } from "express";
import { test1Controller } from '../controller/test1Controller';


export class Routes {
    private test1: test1Controller = new test1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test1').post(this.test1.GpCreate);
     }

}