const express = require('express')
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('*', (req, res) => {
  res.send(`Hello from ${req.url}`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
