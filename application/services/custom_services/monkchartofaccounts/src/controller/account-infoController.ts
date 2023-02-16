import { Request, Response } from 'express';
import { account-infoService } from '../service/account-infoService';
import { CustomLogger } from '../config/Logger'
let account-info = new account-infoService();

export class account-infoController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    account-info.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into account-infoController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from account-infoController.ts: GpGetNounCreatedBy');
    })}


}