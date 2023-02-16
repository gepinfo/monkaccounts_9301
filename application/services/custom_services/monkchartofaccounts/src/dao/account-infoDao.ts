import * as mongoose from 'mongoose';
import account-infoModel from '../models/daomodels/account-info';
import { CustomLogger } from '../config/Logger'


export class account-infoDao {
    private account-info = account-infoModel;
    constructor() { }
    
    public async GpDelete(account-infoId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpDelete');

    

    
    
    
    this.account-info.findByIdAndRemove(account-infoId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(account-infoData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(account-infoData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.account-info.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(account-infoData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpSearchForUpdate');

    

    
    
    
    this.account-info.findOneAndUpdate({ _id: account-infoData._id }, account-infoData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(account-infoData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpUpdate');

    

    
    
    
    this.account-info.findOneAndUpdate({ _id: account-infoData._id }, account-infoData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(account-infoId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpGetNounById');

    

    
    
    
    this.account-info.findById(account-infoId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpGetAllValues');

    

    
    
    
    this.account-info.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(account-infoData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpCreate');

    let temp = new account-infoModel(account-infoData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(account-infoData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into account-infoDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.account-info.aggregate(([
                        { $match: { $and: [{ created_by: account-infoData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from account-infoDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}