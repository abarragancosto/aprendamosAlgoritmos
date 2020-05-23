const WebSocket = require('ws');
module.exports = function sendMessageToWebSocket(message) {
	const ws = new WebSocket('wss://k7ufl4i82h.execute-api.eu-west-3.amazonaws.com/Prod');
	ws.on('open', function open() {
		console.log('opened');
		const payload = {"message": "sendmessage", "data": message};
		ws.send(JSON.stringify(payload));
		ws.close()
	});

};



