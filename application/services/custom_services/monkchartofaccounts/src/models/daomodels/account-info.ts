
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const account-infoSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   account-name: String,
   account-id: String,
   description: String,
   tags: String,
   account-storage-created: Boolean
})

const account-infoModel = mongoose.model('account-info', account-infoSchema, 'account-info');
export default account-infoModel;
