import * as mongoose from 'mongoose';
import entryModel from '../models/daomodels/entry';
import { CustomLogger } from '../config/Logger'


export class entryDao {
    private entry = entryModel;
    constructor() { }
    
    public async GpDelete(entryId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpDelete');

    

    
    
    
    this.entry.findByIdAndRemove(entryId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(entryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(entryData).forEach(
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
    this.entry.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(entryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpSearchForUpdate');

    

    
    
    
    this.entry.findOneAndUpdate({ _id: entryData._id }, entryData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(entryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpUpdate');

    

    
    
    
    this.entry.findOneAndUpdate({ _id: entryData._id }, entryData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(entryId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpGetNounById');

    

    
    
    
    this.entry.findById(entryId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpGetAllValues');

    

    
    
    
    this.entry.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(entryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpCreate');

    let temp = new entryModel(entryData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(entryData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into entryDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.entry.aggregate(([
                        { $match: { $and: [{ created_by: entryData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from entryDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}