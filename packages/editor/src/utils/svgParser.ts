import { parseSvg } from '@meta2d/svg';
import { deepClone } from '@meta2d/core';

export function parseSvgStr(svgString: string, penConfig: any, manual = true) {
  if (!svgString) return [];
  // 若是文件，可通过 ajax 请求得到字符串
  // 得到一个组合后的 combine 画笔们，但父节点未拥有 x, y
  const pens = parseSvg(svgString);
  pens.forEach((pen) => {
    if (!pen.x) {
      pen.x = 0;
    }
    if (!pen.y) {
      pen.y = 0;
    }
    if (pen.name == 'combine' && !pen.parentId) {
      pen.description = penConfig?.name;
    }
  });

  console.log('svg to pens: ', pens, penConfig);
  // 可使用 dragStart or meta2d.canvas.addCaches
  if (manual) {
    meta2d.canvas.addCaches = deepClone(pens);
  }
  return pens;
}

export const loadSvg = (svgUrl: string, penConfig: any, manual = true) => {
  return fetch(svgUrl).then((res) => {
    const text = res.text();
    // 解析 svg 文本
    return text.then((svgString) => {
      // console.log("parseSvgStr: ", svgString);
      return parseSvgStr(svgString, penConfig, manual);
    });
  });
};
