const authController = require('../controllers/auth-controller');

const methods = {
    'auth.login': async (params) => {
        return authController.login({ params });
    }
};

function initialize(wss) {
    wss.on('connection', (ws) => {
        ws.on('message', async (message) => {
            const { method, params, id } = JSON.parse(message);
            
            if (methods[method]) {
                try {
                    const result = await methods[method](params);
                    ws.send(JSON.stringify({ id, result }));
                } catch (error) {
                    ws.send(JSON.stringify({ id, error: error.message }));
                }
            }
        });
    });
}

module.exports = { initialize };
