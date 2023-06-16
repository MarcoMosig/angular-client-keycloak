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
    { company: "Apple",
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
    { company: "Caterpillar",
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
    { company: "Walt Disney",
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
    { company: "3M",
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
  res.json(stocks);
});

app.use('*', function (req, res) {
  res.send('Not found!');
});
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
