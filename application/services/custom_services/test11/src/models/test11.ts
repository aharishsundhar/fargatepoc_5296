
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test11Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const test11Model = mongoose.model('test11', test11Schema, 'test11');
export default test11Model;
