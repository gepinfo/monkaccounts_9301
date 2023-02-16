import { Request, Response, NextFunction } from "express";
import { entryController } from '../controller/entryController';


export class Routes {
    private entry: entryController = new entryController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/entry/:id').delete(this.entry.GpDelete);
app.route('/entry/get/search').get(this.entry.GpSearch);
app.route('/entry/get/update').put(this.entry.GpSearchForUpdate);
app.route('/entry').put(this.entry.GpUpdate);
app.route('/entry/:id').get(this.entry.GpGetNounById);
app.route('/entry').get(this.entry.GpGetAllValues);
app.route('/entry').post(this.entry.GpCreate);
app.route('/entry/userid/created_by').get(this.entry.GpGetNounCreatedBy);
     }

}