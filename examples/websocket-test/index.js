const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// 加载 json 文件
const fs = require('fs');
const CurrentInfo = JSON.parse(fs.readFileSync('./le5le.json', 'utf8'));
const testData = {
  interMsgType: 3,
  data: {
    busName: 'ttt',
    msgType: 11, 
    msg: {
      value: 1,
      CurrentInfo
    },
  },
};

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
  setInterval(() => {
    // 1 ~ 3 的随机数
    testData.data.msg.value = Math.floor(Math.random() * 3) + 1;
    ws.send(JSON.stringify(testData));
  }, 1000);
});
