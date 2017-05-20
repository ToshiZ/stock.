import * as mongoose from 'mongoose';

const unionSchema = new mongoose.Schema({
  name: String,
  city: String
});

const Union = mongoose.model('Union', unionSchema);

export default Union;
