const nock = require('nock');

beforeEach(() => {
  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=USD')
    .reply(200, {
      'base': 'USD',
      'rates': {
        'EUR': 0.890 //changed the rate to take a more recent one here
      }
    });

  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=EUR')
    .reply(200, {
      'base': 'EUR',
      'rates': {
        'USD': 1.1124
      }
    });

  nock('https://blockchain.info')
    .get('/ticker')
    .reply(200, {
      'USD': {
        '15m': 8944.49,
        'last': 8944.49,
        'buy': 8944.49,
        'sell': 8944.49,
        'symbol': '$'
      },
      'EUR': {
        '15m': 8048.11,
        'last': 8048.11,
        'buy': 8048.11,
        'sell': 8048.11,
        'symbol': '€'
      }
    });
});

describe('currency', () => {
  test('should convert 1 USD to EUR', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'USD', to:'EUR'})).toBe(0.890) // according to the exchange rate API, usd to eur = 1/1.124= 0.889679, so 0.890 once we round it
    );
  });

  test('should convert 1 USD to USD', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'USD', to:'USD'})).toBe(1)
    );
  });

  test('should convert 1 EUR to USD', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'USD', to:'EUR'})).toBe(1.124)
    );
  });

  test('should convert 1 BTC to USD', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'BTC', to:'USD'})).toBe(8944.49) //the rates keep changing (last one was around 6077) so I kept the old ones
    );
  });

  test('should convert 1 BTC to EUR', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'BTC', to:'EUR'})).toBe(8048.11) //the rates keep changing (last one was around 5000) so I kept the old ones
    );
  });

  test('should convert (with default values) without arguments', async () => {
    throw new Error(
      expect(await currency({})).toBe(0.00011180067281644902) // same as before, with the default values
    );
  });

  test('should convert with amount only as argument', async () => {
    throw new Error(
      expect(await currency({amount:'1'})).toBe(0.00011180067281644902) //still using the default values
    );
  });

  test('should convert with amount and (from) currency only as arguments', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'USD'})).toBe(0.00011180067281644902) //still using the default values
    );
  });

  test('should return errors message for unknown `from` or `to` currency value', async () => {
    throw new Error(
      expect(await currency({amount:'1', from:'EU', to:'FR'})).toThrowError('Error : unknown currency values. Please specify valid `from` and/or `to` currency values!')
    );
  });
});
