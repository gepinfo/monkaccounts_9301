import { Request, Response } from 'express';
import {entryDao} from '../dao/entryDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let entry = new entryDao();

export class entryService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpDelete')
     let  entryId = req.params.id;
     entry.GpDelete(entryId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpSearch')
     let  entryData = req.query;
     entry.GpSearch(entryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpSearchForUpdate')
     let  entryData = req.body;
     entry.GpSearchForUpdate(entryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpUpdate')
     let  entryData = req.body;
     entry.GpUpdate(entryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpGetNounById')
     let  entryId = req.params.id;
     entry.GpGetNounById(entryId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpGetAllValues')
     
     entry.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpCreate')
     let  entryData = req.body;
     entry.GpCreate(entryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into entryService.ts: GpGetNounCreatedBy')
     let  entryData = { created_by: req.query.createdby };
     entry.GpGetNounCreatedBy(entryData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from entryService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}