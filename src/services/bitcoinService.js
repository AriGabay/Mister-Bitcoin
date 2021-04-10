const axios = require('axios');
const URL_RATE = 'https://blockchain.info/tobtc?currency=USD&value=1';
const Url_Chart_Data = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';

export default {
  getRate,
  getMarketPrice,
};
async function getRate(coins) {
  return axios.get(URL_RATE).then((rate) => {
    if (!coins) coins = 100;
    return coins / rate.data;
  });
}

function getMarketPrice() {
  return axios.get(Url_Chart_Data).then((res) => {
    return res.data;
  });
}
