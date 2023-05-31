const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
// Enable CORS support
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/v1/stocks', function (req, res) {
  const stocks = [
    { symbol: 'AAPL', price: 100 },
    { symbol: 'CAT', price: 250 }
  ]
  res.json(stocks);
});

app.use('*', function (req, res) {
  res.send('Not found!');
});
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
