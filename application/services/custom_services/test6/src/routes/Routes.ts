import { Request, Response, NextFunction } from "express";
import { test6Controller } from '../controller/test6Controller';


export class Routes {
    private test6: test6Controller = new test6Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test6').post(this.test6.GpCreate);
     }

}