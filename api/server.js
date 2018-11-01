import express from 'express';
const app = express();
import config from 'config';
import userRoutes from './routes/user.route';
import searchRoutes from './routes/search.route';
import dataRoutes from './routes/data.route';
const jsonParser = require('body-parser').json;
const morgan = require('morgan');
import cors from 'cors';

app.use(jsonParser());
app.use(morgan('dev'));

console.log(process.env.DBHost);
const mongoose = require('mongoose');
mongoose.connect(process.env.DBHost,
    {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', function(err) {
  console.error('connection error: ', err);
});
db.once('open', () =>{
  console.log('success');
});

if (config.util.getEnv('NODE_ENV') !== 'test') {
// use morgan to log at command line
  app.use(morgan('combined'));
// 'combined' outputs the Apache style LOGs
}
app.use(cors());
app.use('/ul', userRoutes);

app.use('/ul', dataRoutes);
app.use('/ul', searchRoutes);
// 404 error handler
app.use((req, res, next) =>{
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next)=>{
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});


const port = process.env.PORT || 3000;

const Server = app.listen(port, () =>{
  console.log('Express running ', port);
});

export default Server;
