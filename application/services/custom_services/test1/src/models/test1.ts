
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name1: String
})

const test1Model = mongoose.model('test1', test1Schema, 'test1');
export default test1Model;
