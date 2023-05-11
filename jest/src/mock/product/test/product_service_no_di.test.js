const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true }, 
    { item: 'Banana', available: false }
  ]);
  ProductClient.mockImplementation(() => {
    // ProductClient mocking 할거야!
    // 대상은 fetchItems!
    return {
      fetchItems
    }
  })

  let productService;

  beforeEach(() => {
    productService = new ProductService();

    // 수동적으로 mockClear 해주거나 config에서 clearMocks: true로 설정해야 한다.
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([{ item: 'Milk', available: true }]);
    expect(items.length).toBe(1);
  });

  it('how many times mock called: mock clear', async () => {
    await productService.fetchAvailableItems();

    expect(fetchItems).toHaveBeenCalledTimes(1);
  })
});