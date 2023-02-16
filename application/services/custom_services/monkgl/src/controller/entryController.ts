import { Request, Response } from 'express';
import { entryService } from '../service/entryService';
import { CustomLogger } from '../config/Logger'
let entry = new entryService();

export class entryController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    entry.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into entryController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from entryController.ts: GpGetNounCreatedBy');
    })}


}