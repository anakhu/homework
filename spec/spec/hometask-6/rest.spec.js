describe('rest.js', function() {

  describe('RestAPI.get()', function() {
    let restApi = setApi('http://localhost:3000', 'employees', makeRequest, RestAPI);

    let request;
    let requestResponse;
    let requestStatus;

    const success = {
      response: {
        employees: [
          {
            firstName: 'Ann',
            lastName: 'Smith',
            email: 'ann@mail.ru',
            id: 1
          },
          {
            firstName: 'Max',
            lastName: 'Brown',
            email: 'max@mail.ru',
            id: 1
          },
          ]
        },
      status: 200 
    }

    beforeEach(function (done) {

      jasmine.Ajax.install();

      let req = restApi.get();

      req(({response, status}) => {
        requestResponse = response;
        requestStatus = status;
      })

      request = jasmine.Ajax.requests.mostRecent();

      request.respondWith(success);

      done();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    
    it('sends the request to the right end point', function(done) {
      expect(request.url).toBe('http://localhost:3000/employees');
      done();
    });

    it('sends the correct type of request', function(done) {
      expect(request.method).toBe('GET');
      done();
    });

    it('returns callback and expected response', function(done) {
      expect(requestResponse).toEqual(success.response);
      expect(requestStatus).toEqual(success.status);
      done();
    });
  });

  describe('RestAPI.post()', function() {
    let restApi = setApi('http://localhost:3000', 'employees', makeRequest, RestAPI);

    let request;
    let requestResponse;
    let requestStatus;

    const success = {
      response: {},
      status: 201, 
    }

    beforeEach(function (done) {

      jasmine.Ajax.install();

      let req = restApi.post({
        firstName: 'Max',
        lastName: 'Brown',
        email: 'max@mail.ru',
        id: 1,
      });

      req(({response, status}) => {
        requestResponse = response;
        requestStatus = status;
      })

      request = jasmine.Ajax.requests.mostRecent();

      request.respondWith(success);

      done();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    
    it('sends the request to the right end point', function(done) {
      expect(request.url).toBe('http://localhost:3000/employees');
      done();
    });

    it('sends the correct type of request', function(done) {
      expect(request.method).toBe('POST');
      done();
    });

    it('returns callback and expected response', function(done) {
      expect(requestResponse).toEqual({});
      expect(requestStatus).toEqual(success.status);
      done();
    });
  });

  describe('RestAPI.delete()', function() {
    let restApi = setApi('http://localhost:3000', 'employees', makeRequest, RestAPI);

    let request;
    let requestResponse;
    let requestStatus;

    const success = {
      response: {},
      status: 200, 
    }

    beforeEach(function (done) {

      jasmine.Ajax.install();

      let req = restApi.delete(1);

      req(({response, status}) => {
        requestResponse = response;
        requestStatus = status;
      })

      request = jasmine.Ajax.requests.mostRecent();

      request.respondWith(success);

      done();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    
    it('sends the request to the right end point', function(done) {
      expect(request.url).toBe('http://localhost:3000/employees/1');
      done();
    });

    it('sends the correct type of request', function(done) {
      expect(request.method).toBe('DELETE');
      done();
    });

    it('returns callback and expected response', function(done) {
      expect(requestResponse).toEqual({});
      expect(requestStatus).toEqual(success.status);
      done();
    });
  });

  describe('RestAPI.update()', function() {
    let restApi = setApi('http://localhost:3000', 'employees', makeRequest, RestAPI);

    let request;
    let requestResponse;
    let requestStatus;

    const success = {
      response: {},
      status: 200, 
    }

    beforeEach(function (done) {

      jasmine.Ajax.install();

      let req = restApi.update(2, {firstName: 'Max',
        lastName: 'Brown',
        email: 'max@mail.ru',
        id: 1,
    });

      req(({response, status}) => {
        requestResponse = response;
        requestStatus = status;
      })

      request = jasmine.Ajax.requests.mostRecent();

      request.respondWith(success);

      done();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });
    
    it('sends the request to the right end point', function(done) {
      expect(request.url).toBe('http://localhost:3000/employees/2');
      done();
    });

    it('sends the correct type of request', function(done) {
      expect(request.method).toBe('PUT');
      done();
    });

    it('returns callback and expected response', function(done) {
      expect(requestResponse).toEqual({});
      expect(requestStatus).toEqual(success.status);
      done();
    });
  }); 
});
