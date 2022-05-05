
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test6Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const test6Model = mongoose.model('test6', test6Schema, 'test6');
export default test6Model;
