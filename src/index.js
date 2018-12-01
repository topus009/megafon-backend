const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../config.local');

const app = express();

const options = {
  promiseLibrary: require('bluebird'),
  useNewUrlParser: true
};

function setUpConnection () {
  const dbPath = 'mongodb://' + config.host + '/' + config.name;
  console.log(dbPath);
  mongoose.connect(dbPath, options);
};

setUpConnection();
app.use(bodyParser.json());
app.use(cors({origin: '*'}));
app.use('/api', require('./api'));

app.listen(config.port, () => {
  console.log('Server is up and running on port ' + config.port);
});
