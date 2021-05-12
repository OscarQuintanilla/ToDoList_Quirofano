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

const PORT = process.env.PORT || 5000;
app.listen(PORT);