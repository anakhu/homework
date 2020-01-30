const REQUEST_CONFIG = {
  proxy: 'https://cors-anywhere.herokuapp.com',
  api: 'https://api.darksky.net/forecast',
  key: 'bc42ea325247cf608683d5cb0b6393fe',
};

function buildUrl({ proxy, api, key }, { latitude, longitude, tomorrow }) {
  return `${proxy}/${api}/${key}/${latitude},${longitude},${tomorrow}`;
}

function buildRequestData({ latitude, longitude }) {
  const tomorrow = getTomorrowSec();

  return {
    latitude,
    longitude,
    tomorrow,
  };
}

function getTomorrowSec() {
  const today = new Date();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) / 1000;

  return tomorrow;
}

// export { REQUEST_CONFIG, buildUrl, buildRequestData };
