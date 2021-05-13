const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const keys = require('./config/keys');

require('./models/User');
require('./models/List');
require('./models/Category');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
mongoose.connect(keys.mongoURI);

require('./routes/routesCategory')(app);
require('./routes/routesList')(app);
require('./routes/routesUser')(app);

if (process.env.NODE_ENV === 'production') {

  //Help to serve production assests like main.js
  app.use(express.static('client/build'));


  //Manage the routes for the clients
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);