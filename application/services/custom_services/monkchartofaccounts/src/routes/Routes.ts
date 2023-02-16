import { Request, Response, NextFunction } from "express";
import { account-infoController } from '../controller/account-infoController';


export class Routes {
    private account-info: account-infoController = new account-infoController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/account-info/:id').delete(this.account-info.GpDelete);
app.route('/account-info/get/search').get(this.account-info.GpSearch);
app.route('/account-info/get/update').put(this.account-info.GpSearchForUpdate);
app.route('/account-info').put(this.account-info.GpUpdate);
app.route('/account-info/:id').get(this.account-info.GpGetNounById);
app.route('/account-info').get(this.account-info.GpGetAllValues);
app.route('/account-info').post(this.account-info.GpCreate);
app.route('/account-info/userid/created_by').get(this.account-info.GpGetNounCreatedBy);
     }

}