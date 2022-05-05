
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test10Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const test10Model = mongoose.model('test10', test10Schema, 'test10');
export default test10Model;
