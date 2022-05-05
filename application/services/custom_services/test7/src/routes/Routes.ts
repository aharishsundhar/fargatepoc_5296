import { Request, Response, NextFunction } from "express";
import { test7Controller } from '../controller/test7Controller';


export class Routes {
    private test7: test7Controller = new test7Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test7').post(this.test7.GpCreate);
     }

}