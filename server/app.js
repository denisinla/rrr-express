const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// lets log
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// wildcard to always return index.html so react-router can actually route links properly.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
