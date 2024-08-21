const bcrypt = require('bcrypt');

const users = require('../models/user');

class AuthService {
    async login(username, password) {
        const user = users.find(u => u.username === username);
        if (!user) throw new Error('User not found.');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Wrong password');

        return { message: 'Successful login', user: { username: user.username } };
    }
}

module.exports = new AuthService();
