const bcrypt = require('bcrypt');

const users = require('../models/user');

class AuthService {
    async login(username, password) {
        const user = users.find(u => u.username === username);
        if (!user) throw new Error('Usuário não encontrado.');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Senha inválida.');

        return { message: 'Login bem-sucedido', user: { username: user.username } };
    }
}

module.exports = new AuthService();
