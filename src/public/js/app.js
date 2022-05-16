const messageList = document.querySelector('ul');
const messageForm = document.querySelector('#message');
const nickForm = document.querySelector('#nick');
// backend랑 연결해달라고 말함
const socket = new WebSocket(`ws://${window.location.host}`); // 모바일에서도 찾을 수 있도록 !
// 소켓 = 서버로의 연결

function makeMessage(type, payload) {
	const msg = { type, payload };
	return JSON.stringify(msg);
}

socket.addEventListener('open', () => {
	console.log('connected to server ✅');
});

socket.addEventListener('message', (message) => {
	const li = document.createElement('li');
	li.innerText = message.data;
	messageList.append(li);
});

socket.addEventListener('close', () => {
	console.log('disconnected to server ❌');
});

function handleSubmit(e) {
	e.preventDefault();
	const input = messageForm.querySelector('input');
	socket.send(makeMessage('new_message', input.value));
	input.value = '';
}

function handleNick(e) {
	e.preventDefault();
	const input = nickForm.querySelector('input');
	socket.send(makeMessage('nickname', input.value));
	if (input.value.length > 0) alert('you saved your nickname 🐾');
	input.value = '';
}
messageForm.addEventListener('submit', handleSubmit);
nickForm.addEventListener('submit', handleNick);
