/* eslint-disable no-param-reassign */

function setApi(baseUrl, path, makeRequestFn, RestApiConstructor) {
  const url = `${baseUrl}/${path}`;
  const makeRequest = makeRequestFn;

  return new RestApiConstructor(url, makeRequest);
}

function makeRequest(method, url, data = null, callback = () => {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.responseType = 'json';

  xhr.onload = ({ target }) => callback({ response: target.response, status: target.status });

  if (data) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}


function RestAPI(url, makeRequest) {
  this.get = () => (callback) => makeRequest('GET', url, null, callback);
  this.getById = (id) => (callback) => makeRequest('GET', `${url}/${id}`, null, callback);
  this.post = (data) => (callback) => makeRequest('POST', url, data, callback);
  this.delete = (id) => (callback) => makeRequest('DELETE', `${url}/${id}`, null, callback);
  this.update = (id, data) => (callback) => makeRequest('PUT', `${url}/${id}`, data, callback);
}
