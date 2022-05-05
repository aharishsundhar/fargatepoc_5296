import { Request, Response, NextFunction } from "express";
import { test9Controller } from '../controller/test9Controller';


export class Routes {
    private test9: test9Controller = new test9Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test9').post(this.test9.GpCreate);
     }

}