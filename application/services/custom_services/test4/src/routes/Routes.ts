import { Request, Response, NextFunction } from "express";
import { test4Controller } from '../controller/test4Controller';


export class Routes {
    private test4: test4Controller = new test4Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test4').post(this.test4.GpCreate);
     }

}