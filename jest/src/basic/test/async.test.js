const fetchProduct = require('../async.js');

describe('Async', () => {
  // done 방식
  it('async - done', (done) => {
    fetchProduct().then(item => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  // return 방식
  it('async - return', () => {
    return fetchProduct().then(item => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  // await 방식
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolved', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  });
  
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});