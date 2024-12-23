import { parseSvg } from '@meta2d/svg';
import { deepClone } from '@meta2d/core';
import { describe } from 'node:test';

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
    // 处理svg数据父节点
    if (pen.name == 'combine' && !pen.parentId) {
      pen.description = penConfig?.name;
      if (penConfig?.data?.anchors && manual) {
        penConfig.data.anchors.forEach((anchor) => {
          //! 报错
          // meta2d.addAnchor(pen, anchor);
          if (pen.anchors) {
            const newId = pen.anchors.length;
            anchor.id = newId;
            pen.anchors.push(anchor);
          } else {
            pen.anchors = [anchor]
          }
        });
      }
    }
  });

  //console.log('svg to pens: ', pens, penConfig);
  // 可使用 dragStart or meta2d.canvas.addCaches
  if (manual) {
    meta2d.canvas.addCaches = deepClone(pens);
  }
  return pens;
}
// 处理导入svg的数据
export function parseSvgStr1(svgString: string, penConfig: any, manual = true) {
  if (!svgString) return [];
  // 若是文件，可通过 ajax 请求得到字符串
  // 得到一个组合后的 combine 画笔们，但父节点未拥有 x, y
  
  const pens = parseSvg(svgString);
  console.log('传入的SVG===== ', pens, '以前的图元数据=====',penConfig);
  // 拿到之前的图元父节点进行组装吧
  const parent = pens.find(
    (v) => v.name == 'combine' && !v.parentId,
  );
  Object.assign(parent, {
    id:penConfig?.id,
    x: penConfig?.x,
    y: penConfig?.y,
    description: penConfig?.description,
    text: penConfig?.text,
    withh: penConfig?.width,
    height: penConfig?.height,
    showChild: penConfig?.showChild,
    //rotate: rotateAngelMap[item.rotateAngel] || 0, // 跟预期不一致
    tags: penConfig?.tags,
  });
  //处理子节点数据
  pens.forEach((pen) => {
    if(pen.name !=='combine'){
      pen.parentId = penConfig?.id;
    }
    // if (pen.anchors?.length > 0) {
    //   parent.anchors = pen.anchors;
    // }
  });

  //console.log('svg to pens: ', pens, penConfig);
  // 可使用 dragStart or meta2d.canvas.addCaches
  console.log('重新组装的图元数据=====' , pens, '以前的图元数据=====',penConfig);
  
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
