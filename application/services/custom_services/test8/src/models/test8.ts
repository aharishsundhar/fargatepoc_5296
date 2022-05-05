
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test8Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const test8Model = mongoose.model('test8', test8Schema, 'test8');
export default test8Model;
