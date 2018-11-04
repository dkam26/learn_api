import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DataSchema = new Schema({

  weatherConditions: String,
  windSpeed: String,
  humidity: String,
  date: String,
  location: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
});

const Data = mongoose.model('Data', DataSchema);
export default Data;
