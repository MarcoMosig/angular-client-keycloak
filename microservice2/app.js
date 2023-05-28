const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
// Enable CORS support
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/v1/healthcheck', function (req, res) {
  res.json({message: 'I am healthy - Microservice 2'});
});

app.use('*', function (req, res) {
  res.send('Not found!');
});
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
