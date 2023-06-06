import parseRequestURL from '../src/main.js';

describe('parseRequestURL', () => {
  it('should return the same config if no params and no data', () => {
    const config = {
      url: '/test/url',
    };

    const result = parseRequestURL(config);

    expect(result).toEqual(config);
  });

  it('should replace URL params with matching keys from the params object', () => {
    const config = {
      url: '/test/:param1/:param2',
      params: {
        param1: 'value1',
        param2: 'value2',
      },
    };

    const expected = {
      url: '/test/value1/value2',
      params: {},
    };

    const result = parseRequestURL(config);

    expect(result).toEqual(expected);
  });

  it('should replace URL params with matching keys from the data object if params is missing', () => {
    const config = {
      url: '/test/:param1/:param2',
      data: {
        param1: 'value1',
        param2: 'value2',
      },
    };

    const expected = {
      url: '/test/value1/value2',
      data: {},
    };

    const result = parseRequestURL(config);

    expect(result).toEqual(expected);
  });

  it('should not replace URL params if no matching keys are present in params or data', () => {
    const config = {
      url: '/test/:param1/:param2',
      params: {
        param3: 'value3',
      },
    };

    const expected = {
      url: '/test/:param1/:param2',
      params: {
        param3: 'value3',
      },
    };

    const result = parseRequestURL(config);

    expect(result).toEqual(expected);
  });

  it('should not replace URL param if there is no corresponding value in params or data', () => {
    const config = {
      url: '/test/:param1/:param2',
      params: {
        param1: 'value1',
        // param2 is missing
      },
    };

    const expected = {
      url: '/test/value1/:param2', // param2 is not replaced
      params: {
        // param1 is deleted
      },
    };

    const result = parseRequestURL(config);

    expect(result).toEqual(expected);
  });

  it('should replace URL params from params over data if both are present', () => {
    const config = {
      url: '/test/:param1',
      params: {
        param1: 'value1',
      },
      data: {
        param1: 'value2',
      },
    };

    const expected = {
      url: '/test/value1',
      params: {},
      data: {
        param1: 'value2',
      },
    };

    const result = parseRequestURL(config);

    expect(result).toEqual(expected);
  });
});
