const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('New connection');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // 原样返给客户端
    ws.send(message.toString());
  });

  ws.send(
    JSON.stringify({
      tag: 'hello',
      fontColor: 'red',
      text: 'A websocket text.',
    })
  );
});