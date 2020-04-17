/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use('/api/photos', createProxyMiddleware({ target: 'http://3.22.220.73', changeOrigin: true }));

app.use('/api/property', createProxyMiddleware({ target: 'http://3.101.73.213', changeOrigin: true }));
app.use('/api/houseagents', createProxyMiddleware({ target: 'http://3.101.73.213', changeOrigin: true }));
app.use('/api/houseBooking', createProxyMiddleware({ target: 'http://3.101.73.213', changeOrigin: true }));
app.use('/api/contactagents', createProxyMiddleware({ target: 'http://3.101.73.213', changeOrigin: true }));

app.use('/api/neighborhoods', createProxyMiddleware({ target: 'http://13.57.48.245:3001', changeOrigin: true }));
app.use('/api/houses', createProxyMiddleware({ target: 'http://13.57.48.245:3001', changeOrigin: true }));
// app.use('/', createProxyMiddleware({ target: 'http://13.57.48.245:3001', changeOrigin: true }));


// app.use('/api/neighborhoods', createProxyMiddleware({ target: 'http://13.57.48.245', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));
