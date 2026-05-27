const https = require('https');

const options = {
  hostname: 'api.coingecko.com',
  path: '/api/v3/simple/price?ids=bitcoin,tether&vs_currencies=ngn',
  method: 'GET',
  headers: {
    'User-Agent': 'Node.js'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('CoinGecko Response:', JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});
req.end();
