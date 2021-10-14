const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');
const morgan = require('morgan');

module.exports = app;

//logging middleware
app.use(morgan('dev'));

//parsing middleware
app.use(express.json());

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// );

app.get('/', (req, res) => {
  try {
    res.send('Jose');
  } catch (err) {
    console.log(err);
  }
});

//static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// error handling endware
app.use((err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
