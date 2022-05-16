import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = () => console.log('listening on ws://localhost:3000');

//express는 http를 다룸
//websocket 과는 다른 프로토콜

//express 서버로부터 서버를 만듦
const server = http.createServer(app);
//websocket 서버를 만듦
const wss = new WebSocket.Server({ server });
// 꼭 이렇게 해야되는 건 아님 (http & ws)
// 동일포트에서 http, ws 실행시키기 위함

function onSocketClose() {
	console.log('disconnected from the browser❌');
}

//가짜 db
const sockets = [];

// event
wss.on('connection', (socket) => {
	// 소켓 = 연결된 브라우저
	sockets.push(socket);
	socket['nickname'] = 'anonymous';
	console.log('connected to browser ✅');
	socket.on('close', onSocketClose);
	socket.on('message', (msg) => {
		const message = JSON.parse(msg.toString('utf-8'));

		if (message.type === 'new_message') {
			return sockets.forEach((aSocket) =>
				aSocket.send(`${socket.nickname} : ${message.payload}`)
			);
		}
		socket['nickname'] = message.payload;
	});
});

server.listen(3000, handleListen);
