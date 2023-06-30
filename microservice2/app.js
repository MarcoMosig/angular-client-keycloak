const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
// Enable CORS support
app.use(cors());

const stockprices = require("./data/data");

const port = process.env.PORT || 3001;

app.get('/v1/stock/:stockID/prices', (req, res, next) => {
  const stockID = req.params.stockID;
  if (stockID) {
    const filtered = stockprices.filter(stock => stock.id == stockID);
    res.send(filtered);
  }
  res.status(404, "I dont have a result");
});

app.use('*', function (req, res) {
  res.send('Not found!');
});
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
