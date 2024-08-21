const authService = require('../services/auth-service');

class AuthController {
    async login(request) {
        const { username, password } = request.params;
        return authService.login(username, password);
    }
}

module.exports = new AuthController();
