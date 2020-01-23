/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */

function setApi(baseUrl, path, makeRequestFn, RestApiConstructor) {
  const url = `${baseUrl}/${path}`;
  const makeRequest = makeRequestFn;

  return new RestApiConstructor(url, makeRequest);
}

function makeRequest(method, url, data = null, headers = {}, callback = () => {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.responseType = 'json';

  xhr.onload = ({ target }) => callback({ response: target.response, status: target.status });

  for (const i in headers) {
    xhr.setRequestHeader(i, headers[i]);
  }

  if (data) {
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}


function RestAPI(url, makeRequest) {
  this.get = () => (callback) => makeRequest(
    'GET',
    url,
    null,
    { 'Content-Type': 'application/json' },
    callback,
  );

  this.getById = (id) => (callback) => makeRequest(
    'GET',
    `${url}/${id}`,
    null,
    { 'Content-Type': 'application/json' },
    callback,
  );

  this.post = (data) => (callback) => makeRequest(
    'POST',
    url,
    data,
    { 'Content-Type': 'application/json' },
    callback,
  );

  this.delete = (id) => (callback) => makeRequest(
    'DELETE',
    `${url}/${id}`,
    null,
    { 'Content-Type': 'application/json' },
    callback,
  );

  this.update = (id, data) => (callback) => makeRequest(
    'PUT',
    `${url}/${id}`,
    data,
    { 'Content-Type': 'application/json' },
    callback,
  );
}
