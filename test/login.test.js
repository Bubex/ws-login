let chai;
let expect;
let AuthController;

before(async () => {
  chai = await import('chai');
  expect = chai.expect;
  AuthController = (await import('../src/controllers/auth-controller.js')).default;
});

describe('AuthController Login', () => {
  it('must successfully log in with valid credentials', async () => {
    const req = {
      params: {
        username: 'user1',
        password: 'password1'
      }
    };

    const result = await AuthController.login(req);

    expect(result).to.have.property('message', 'Successful login');
    expect(result).to.have.property('user');
    expect(result.user).to.have.property('username', 'user1');
  });

  it('should fail when logging in with invalid password', async () => {
    const req = {
      params: {
        username: 'user1',
        password: 'wrongpassword'
      }
    };

    try {
      await AuthController.login(req);
    } catch (error) {
      expect(error.message).to.equal('Wrong password');
    }
  });

  it('should fail to login with invalid user', async () => {
    const req = {
      params: {
        username: 'invaliduser',
        password: 'password1'
      }
    };

    try {
      await AuthController.login(req);
    } catch (error) {
      expect(error.message).to.equal('User not found.');
    }
  });
});
