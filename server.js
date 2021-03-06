const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

//Load environment variables
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const app = express();

//Body Parser
app.use(express.json());

//import Route files
const bootcamps = require('./routes/bootcamps');

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

//Error Handler
app.use(errorHandlery);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} made on port ${PORT}`.yellow.bold
  )
);

//Handle the unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server and exit process
  server.close(() => process.exit(1));
});
