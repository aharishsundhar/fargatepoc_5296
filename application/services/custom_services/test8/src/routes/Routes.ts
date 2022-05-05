import { Request, Response, NextFunction } from "express";
import { test8Controller } from '../controller/test8Controller';


export class Routes {
    private test8: test8Controller = new test8Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test8').post(this.test8.GpCreate);
     }

}