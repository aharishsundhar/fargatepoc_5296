import { Request, Response, NextFunction } from "express";
import { test3Controller } from '../controller/test3Controller';


export class Routes {
    private test3: test3Controller = new test3Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test3').post(this.test3.GpCreate);
     }

}