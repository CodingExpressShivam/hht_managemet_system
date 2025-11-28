/* server.js - minimal */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const usersRouter = require('./routes/users');
const issueRouter = require('./routes/issue');
const submitRouter = require('./routes/submit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', usersRouter);
app.use('/api/issue', issueRouter);
app.use('/api/submit', submitRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`HHT backend running on port ${PORT}`);
});
