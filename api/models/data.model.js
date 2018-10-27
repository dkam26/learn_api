import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  weatherConditions: String,
  windSpeed: String,
  humidity: String,
  location: String,
  date: Date,
});

const Data = mongoose.model('Data', DataSchema);
export default Data;
