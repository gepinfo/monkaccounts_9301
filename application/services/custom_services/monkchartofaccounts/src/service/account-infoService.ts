import { Request, Response } from 'express';
import {account-infoDao} from '../dao/account-infoDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let account-info = new account-infoDao();

export class account-infoService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpDelete')
     let  account-infoId = req.params.id;
     account-info.GpDelete(account-infoId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpSearch')
     let  account-infoData = req.query;
     account-info.GpSearch(account-infoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpSearchForUpdate')
     let  account-infoData = req.body;
     account-info.GpSearchForUpdate(account-infoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpUpdate')
     let  account-infoData = req.body;
     account-info.GpUpdate(account-infoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpGetNounById')
     let  account-infoId = req.params.id;
     account-info.GpGetNounById(account-infoId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpGetAllValues')
     
     account-info.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpCreate')
     let  account-infoData = req.body;
     account-info.GpCreate(account-infoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into account-infoService.ts: GpGetNounCreatedBy')
     let  account-infoData = { created_by: req.query.createdby };
     account-info.GpGetNounCreatedBy(account-infoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from account-infoService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}