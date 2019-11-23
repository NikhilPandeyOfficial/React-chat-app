const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();

const router = require('./router');
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
	console.log('new member just joined');
	socket.on('disconnect', () => {
		console.log('member just left !!!!!!!!!');
	});
});

app.use(router);

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
