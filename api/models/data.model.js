import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  weatherConditions: String,
  windSpeed: String,
  humidity: String,
  location: String,
  date: Date,
});

const Data = mongoose.model('Data', DataSchema);
export default Data;
