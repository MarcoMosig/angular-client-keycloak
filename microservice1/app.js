const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
// Enable CORS support
app.use(cors());

const port = process.env.PORT || 3000;
const stocks = [
  {
    id: "549f700a-f9e7-40e0-8e2b-cd18dee9ed68",
    company: "Apple",
    picture: 'apc.jpg',
    wkn: "865985",
    isin: "US0378331005",
    symbol: "APC",
    sector: "Technologie",
    DIVe: "0,56",
    KGVe: 30.01,
    country: "USA",
    market_cap: 2.634,
    currency: "USD",
    price: 178
  },
  {
    id: "cc75a693-af53-456b-bb2e-564d3507b29e",
    company: "Caterpillar",
    picture: 'cat.jpg',
    wkn: "850598",
    isin: "US1491231015",
    symbol: "CAT",
    sector: "Maschinenbau",
    DIVe: "2.21",
    KGVe: 13.29,
    country: "USA",
    market_cap: 109,
    currency: "USD",
    price: 235
  },
  {
    id: "8ea80fe6-eeb7-4d59-bfc1-da5b6f15a3ff",
    company: "Walt Disney",
    picture: 'wdp.jpg',
    wkn: "855686",
    isin: "US2546871060",
    symbol: "WDP",
    sector: "Medien/Entertainment/ Freizeit",
    DIVe: "0.54",
    KGVe: 19.32,
    country: "USA",
    market_cap: 157,
    currency: "USD",
    price: 86.06
  },
  {
    id: "a74f1fe4-ac78-4034-af29-16ff071a3439",
    company: "3M",
    picture: 'mmm.jpg',
    wkn: "851745",
    isin: "US88579Y1010",
    symbol: "MMM",
    sector: "Metallverarbeitung",
    DIVe: "5.88",
    KGVe: 10.40,
    country: "USA",
    market_cap: 52.08,
    currency: "USD",
    price: 93.93
  },
]

app.get('/v1/stocks', function (req, res) {
  res.json(stocks);
});

app.get('/v1/stocks/search', (req, res, next) => {
  const filters = req.query;
  // If the filter exists...
  if (filters) {
    const filteredStocks = stocks.filter(stock => {
      let isValid = true;
      for (key in filters) {
       //console.log(key, stock[key].toLowerCase(), filters[key]);
        isValid = isValid && stock[key].toLowerCase() == filters[key];
      }
      return isValid;
    });
      // Sort the stocks by company field by default
    res.send(filteredStocks.sort((a, b) => a.company.localeCompare(b.company)));
  }
  res.status(404, "I dont have a result");
});


app.use('*', function (req, res) {
  res.send('Not found!');
});
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
