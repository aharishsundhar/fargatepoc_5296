
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test4Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name4: String
})

const test4Model = mongoose.model('test4', test4Schema, 'test4');
export default test4Model;
