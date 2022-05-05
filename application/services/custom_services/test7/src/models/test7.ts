
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test7Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const test7Model = mongoose.model('test7', test7Schema, 'test7');
export default test7Model;
