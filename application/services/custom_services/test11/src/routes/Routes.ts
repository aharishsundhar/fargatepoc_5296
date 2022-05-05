import { Request, Response, NextFunction } from "express";
import { test11Controller } from '../controller/test11Controller';


export class Routes {
    private test11: test11Controller = new test11Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test11').post(this.test11.GpCreate);
     }

}