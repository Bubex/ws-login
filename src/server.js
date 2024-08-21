const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const rpc = require('./utils/rpc');
const authRoutes = require('./routes/auth-routes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use('/auth', authRoutes);

rpc.initialize(wss);

server.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
