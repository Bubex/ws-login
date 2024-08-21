const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    const request = {
        method: 'auth.login',
        params: { username: 'user1', password: 'password12' }
    };
    ws.send(JSON.stringify(request));
});

ws.on('message', (message) => {
    console.log('Resposta do servidor:', message);
});
