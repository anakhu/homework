describe('utils.js', function() {
  describe('buildUrl -> should build an endpoint url out of received arguments', function() {
    const config = {
      proxy: 'someProxy',
      api: 'someApi',
      key: 'someKey',
    };

    const data = {
      latitude: '23',
      longitude: '23',
      tomorrow: 'numberOfSeconds'
    };

    it('Base test', function() {
      const result = buildUrl(config, data);
      expect(result).toMatch('someProxy/someApi/someKey/23,23,numberOfSeconds');
    });
  });

  describe('getTomorrowSec -> should return the number of seconds that will have passed by tomorrow', function() {
    it('Base test', function() {
      let today = new Date();
      let tommorow = getTomorrowSec();
      expect(Math.round(today / 1000 - tommorow)).toBeLessThan(0);
    });
  });

  describe('buildRequestData -> should return an object', function() {
    it("Base test", function() {
      const testData = {
        longitude: '10',
        latitude: '10',
      };
      const result = buildRequestData(testData);
      expect(result).toEqual(jasmine.any(Object));
      expect(result.tomorrow).not.toBe(null);
      expect(Object.keys(result).length).toBe(3);
    });
  });
});
