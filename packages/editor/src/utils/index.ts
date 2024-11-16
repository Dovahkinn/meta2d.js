import ConfigList from './electric-config.json';
import { Pen } from '@meta2d/core';
import { electricSvgList } from './svgConfigList.ts';
import { loadSvg } from './svgParser.ts';

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
  'Coil',
  'Contact',
  'Lamp',
  'Contactk',
  'Diode',
  'TerminalsXT',
  'CoilOnDelay',
  'R',
  'VProbe',
  'IProbe',
  'CoilOffDelay',
  'CoilOnDelay',
  'DoubleCoil',
  'TransformerNew',
];
// 初始位置在右边
const sideRightShapes = [
  'Btn_SelfReset',
  'Btn_SelfLock',
  'Knob_SelfReset',
  'Knob_SelfLock',
];
function patchPosition(pen: Pen, config: any, item: any) {
  let rotate = rotateAngelMap[item.rotateAngel] || 0;
  // 特殊处理，和电路编辑器默认角度保持一致
  if (['Switch', 'MultipleContact'].includes(item.type)) {
    rotate -= 90;
  }

  // 补丁
  if (rotate) {
    setTimeout(() => {
      meta2d.setValue({
        id: pen.id,
        rotate: -rotate, // 电路编辑器默认是逆时针旋转
      });
    }, 100);
  }

  const penType = config?.['元件类型'] || item.type;
  // 对称元件
  if (asymmetries.includes(penType)) {
    pen.y -= pen.height / 2;
    pen.x -= pen.width / 2;
    return;
  } else if (sideRightShapes.includes(penType)) {
    if (!rotate) {
      pen.x += pen.width / 4;
      pen.y -= pen.height / 2;
    } else if (item.rotateAngel == '1') {
      pen.y -= pen.height - pen.width / 2;
      pen.x -= pen.width / 2;
    } else if (item.rotateAngel == '2') {
      pen.y -= pen.height / 2;
      pen.x -= pen.width;
    } else if (item.rotateAngel == '3') {
      pen.x -= pen.width / 2;
      pen.y -= pen.height/4;
    }

    return;
  }

  switch (penType) {
    case 'Input':
      // 输入连接点在右侧

      if (!pen.rotate) {
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
      if (!pen.rotate) {
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
      if (!rotate) {
        pen.x -= pen.width / 2;
      } else if (rotate === 90) {
        pen.y -= pen.height / 2;
      } else if (rotate === 180) {
        pen.x -= pen.width / 2;
      } else if (rotate === 270) {
        pen.y -= pen.height / 2;
        pen.x -= pen.width;
      }
      break;

    case 'ElectromagneticValve':
      if (!rotate) {
        pen.y -= pen.height / 2;
        pen.x -= pen.width / 1.5;
      } else if (item.rotateAngel == '1') {
        pen.x -= pen.width / 2;
        pen.y -= pen.height / 2.5;
      } else if (item.rotateAngel == '2') {
        pen.x -= pen.width / 2;
        pen.y -= pen.height / 2;
      } else if (item.rotateAngel == '3') {
        pen.x -= pen.width / 2;
        pen.y -= pen.height / 2;
      }
      break;
    case 'duanluqi_wx':
      if (!rotate) {
        pen.x += pen.width;
        pen.y -= pen.height / 2;
      } else if (item.rotateAngel == '1') {
        pen.y -= pen.height - pen.width / 2;
      } else if (item.rotateAngel == '2') {
        pen.x -= pen.width * 2;
        pen.y -= pen.height / 2;
      }
      break;
    case 'Switch':
      if (item.rotateAngel == '0') {
        pen.x -= pen.width / 2;
        pen.y -= pen.height / 1.5;
      } else if (item.rotateAngel == '1') {
        pen.x -= pen.width;
        pen.y -= pen.height / 2;
      } else if (item.rotateAngel == '2') {
        pen.x -= pen.width / 2;
        pen.y -= pen.height / 3;
      } else if (item.rotateAngel == '3') {
        pen.y -= pen.height / 2;
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
          const svgItem = electricSvgList.find((v) => {
            return (
              v.data.electricTypeCode == item.type ||
              v.data.tags?.includes(item.type)
            );
          });
          if (svgItem) {
            loadSvg(svgItem.data.image, svgItem, false).then((list) => {
              console.log('load svg: ', svgItem.name, svgItem);
              const parent = list.find(
                (v) => v.name == 'combine' && !v.parentId,
              );
              Object.assign(parent, {
                //id: item.uuid,
                text: item.name,
                x: Number(item.posX),
                y: Number(item.posY),
                //rotate: rotateAngelMap[item.rotateAngel] || 0, // 跟预期不一致
                tags: [item.type, item.name],
              });
              patchPosition(parent, config, item);
              if (svgItem.data.anchors) {
                parent.anchors = svgItem.data.anchors;
              }
              // 更新位置
              meta2d.addPens(list);
            });
          } else {
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
              tags: [item.type, item.name],
              // fontSize: 10,
            };

            patchPosition(pen, config, item);

            penList.push(pen);
          }

          // console.log('add to meta2d: ', item, config, pen);
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
            tags: [item.name],
            // fontSize: 10,
          };
          penList.push(pen);
        });
      }

      if (Paintings) {
        // 文本
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
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2),
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

export const readSVGFile = (callback: Function | null = null) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.svg';
  input.onchange = async () => {
    if (!input.files || !input.files.length) return;
    const file = input.files[0];
    const { name } = file;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = reader.result as string;
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

// 复制文本
export function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    // 使用现代API
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.error('复制失败：', err);
      });
  } else {
    // 兼容旧版方法
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(el);
    return new Promise((resolve, reject) => {
      if (successful) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
}
