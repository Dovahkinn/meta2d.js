const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// 加载 json 文件
const fs = require('fs');
// const CurrentInfo = JSON.parse(fs.readFileSync('./le5le.json', 'utf8'));
const testData = {
  interMsgType: 3,
  data: {
    busName: 'BUS_UE_WEB_SYNC',
    msgType: 104,
    msg: {
      value: 1,
      //CurrentInfo
      CameraID: 'Video1',
    },
  },
};

const testPosData = {
  interMsgType: 3,
  data: {
    busName: 'BUS_UE_WEB_SYNC',
    msgType: 103,
    msg: {
      stationId: '10001',
      PersonList: [
        {
          PersonID: '1001',
          PersonName: '小明',
          Location: '2400,1000,1000',
          Rotation: '0,0,0',
        },
        {
          PersonID: '1002',
          PersonName: '小红',
          Location: '2400,1000,1000',
          Rotation: '0,0,0',
        },
        {
          PersonID: '1003',
          PersonName: '小黄',
          Location: '2400,500,1000',
          Rotation: '0,0,0',
        },
        {
          PersonID: '1004',
          PersonName: '小蓝',
          Location: '3500,857,1000',
          Rotation: '0,0,0',
        },
        {
          PersonID: '1005',
          PersonName: '小绿',
          Location: '-1540,400,1000',
          Rotation: '0,0,0',
        },
      ],
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

  setInterval(() => {
    // ws.send(JSON.stringify(testPosData));
  }, 2000);

});
