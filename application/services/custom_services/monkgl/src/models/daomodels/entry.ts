
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const entrySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   entry-name: String,
   account-id: String,
   account-name: String,
   description: String,
   currency-type: String,
   ammount: Number
})

const entryModel = mongoose.model('entry', entrySchema, 'entry');
export default entryModel;
