const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('hello', 'hello');
    
    expect(login.mock.calls.length).toBe(1);
  });

  it('calls login() on UserClient twice regardless of success', async () => {
    await userService.login('hello', 'hello');
    await userService.login('hello', 'hello');
    
    expect(login.mock.calls.length).toBe(1);
  });
});

