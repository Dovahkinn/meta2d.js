import ConfigList from './electric-config.json';
import { Pen } from '@meta2d/core';

const rotateAngelMap: {
  [key: string]: number;
} = {
  0: 0,
  1: 90,
  2: 180,
  3: 270,
};

const asymmetries = [
  'Vdc',
  'MultipleContact',
  'Switch',
  'Coil',
  'Contact',
  'Btn_SelfReset',
  'Btn_SelfLock',
  'Lamp',
  'duanluqi_wx',
  'Contactk',
  "Diode",
  "TerminalsXT",
  "CoilOnDelay",
  "R",
  "Knob_SelfLock",
];

function patchPosition(pen: Pen, config, item) {
  if (asymmetries.includes(config?.['元件类型'])) {
    pen.y -= pen.height / 2;
    pen.x -= pen.width / 2;
    return;
  }

  switch (config?.['元件类型']) {
    case 'Input':
      // 输入连接点在右侧

      if (pen.rotate == 0) {
        pen.x -= pen.width;
        pen.y -= pen.height / 2;
      } else if (pen.rotate === 90) {
        pen.x -= pen.width / 2;
      } else if (pen.rotate === 180) {
        pen.y -= pen.height / 2;
      } else if (pen.rotate === 270) {
        // 连接点朝下
        pen.y -= pen.height;
        pen.x -= pen.width / 2;
      }
      break;
    case 'Output':
      if (pen.rotate == 0) {
        pen.y -= pen.height / 2;
        pen.x -= pen.width;
      } else if (pen.rotate === 90) {
        pen.x -= pen.width / 2;
      } else if (pen.rotate === 180) {
        pen.y -= pen.height / 2;
      } else if (pen.rotate === 270) {
        // 连接点朝下
        pen.y -= pen.height;
        pen.x -= pen.width / 2;
      }

      break;
    case 'GND':
      // 位置在一边
      if (pen.rotate == 0) {
        pen.x -= pen.width / 2;
      } else if (pen.rotate === 90) {
        pen.y -= pen.height / 2;
      } else if (pen.rotate === 180) {
        pen.x -= pen.width / 2;
      } else if (pen.rotate === 270) {
        pen.y -= pen.height / 2;
        pen.x -= pen.width;
      }
      break;
  }
}

// json 解析
export const loadElectricJson = (data: any) => {
  readJSONFile((res: any) => {
    console.log('readJSONFile: ', res);
    if (res?.data) {
      meta2d.clear();
      const { Components, Paintings, Wires } = res.data;
      const penList: Pen[] = [];

      // 添加元件
      if (Components) {
        Components.forEach((item: any) => {
          const config = ConfigList.find((config) => {
            return (
              config['元件类型']?.toLocaleLowerCase() ==
              item.type?.toLocaleLowerCase()
            );
          });
          const has = meta2d.findOne(item.uuid);
          if (has) {
            // TODO: 可能更新
            return;
          }

          const pen = {
            id: item.uuid,
            name: 'rectangle',
            text: item.name,
            //   title: item.name,
            x: Number(item.posX),
            y: Number(item.posY),
            width: Number(config?.['宽度（X向）'] || 100),
            height: Number(config?.['高度（Y向）'] || 100),
            rotate: rotateAngelMap[item.rotateAngel] || 0,
            // fontSize: 10,
          };

          patchPosition(pen, config, item);

          console.log('add to meta2d: ', item, config, pen);
          penList.push(pen);
        });
      }

      // 设置连接线
      if (Wires) {
        // 连线 name 必须为 line。不同类型连线用 lineName 属性描述。例如： lineName:'curve'
        Wires.forEach((item) => {
          const has = meta2d.findOne(item.uuid);
          if (has) {
            // TODO: 可能更新
            return;
          }
          const { length = 0, anchors = [] } = calcLinePos(item);

          const pen = {
            type: 1,
            id: item.uuid,
            name: 'line',
            lineName: 'curve',
            text: item.name,
            //   title: item.name,
            x: Number(item.startX),
            y: Number(item.startY),
            width: length,
            height: length,
            anchors,
            // fontSize: 10,
          };
          penList.push(pen);
        });
      }

      if (Paintings) {
        Paintings.forEach((item) => {
          const has = meta2d.findOne(item.uuid);
          if (has) {
            // TODO: 可能更新
            return;
          }
          const pen = {
            id: item.uuid,
            name: 'rectangle',
            text: item.text,
            //   title: item.name,
            x: Number(item.posX),
            y: Number(item.posY),
            width: 200,
            height: 50,
            color: item.color,
            textAutoAdjust: true,
            borderWidth: 0,
          };
          penList.push(pen);
        });
      }

      meta2d.addPens(penList);
    }
  });
};

function calcLinePos(item: any) {
  const { startX, startY, endX, endY } = item;
  const length = Math.sqrt(
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
  );
  const anchors = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ];
  if (startX === endX) {
    anchors[1].x = 0;
  } else {
    anchors[1].y = 0;
  }
  // console.log('calcLinePos: ', item, length, anchors);
  return { length, anchors };
}

export const readJSONFile = (callback: Function | null = null) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async () => {
    if (!input.files || !input.files.length) return;
    const file = input.files[0];
    const { name, size, type } = file;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        const eventObj = { fileName: name, data };
        callback && callback(eventObj);
      } catch (error) {
        console.error(error);
      }
    };
    reader.readAsText(file);
  };
  input.click();
};
