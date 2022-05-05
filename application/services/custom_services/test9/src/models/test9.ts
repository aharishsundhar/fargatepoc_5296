
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test9Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const test9Model = mongoose.model('test9', test9Schema, 'test9');
export default test9Model;
