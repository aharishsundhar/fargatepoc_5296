import { Request, Response, NextFunction } from "express";
import { test10Controller } from '../controller/test10Controller';


export class Routes {
    private test10: test10Controller = new test10Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test10').post(this.test10.GpCreate);
     }

}