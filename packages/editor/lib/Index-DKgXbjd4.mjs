import { inject as pl, defineComponent as pe, reactive as Ie, ref as le, onMounted as Ce, resolveComponent as c, openBlock as g, createElementBlock as D, Fragment as X, createElementVNode as V, createVNode as e, withCtx as l, createTextVNode as J, renderList as ae, createBlock as E, toDisplayString as ve, createCommentVNode as re, normalizeStyle as fl, withDirectives as _e, vShow as Ae, renderSlot as Pe, shallowRef as vl, unref as j, shallowReactive as Be, isRef as we, computed as ge, watch as Ze, onUnmounted as Ee, createSlots as gl, nextTick as Qe, mergeProps as ye, normalizeProps as Se, guardReactiveProps as Le, normalizeClass as cl, withModifiers as He } from "vue";
import { c as xe, g as bl, u as el, l as wl, P as Ge, r as hl, d as Ve, p as yl, _ as ce, s as Je, E as ue, C as Vl, a as Cl, b as Fe, W as xl, e as kl, f as Me, h as Sl, S as he, i as $l, j as Ul, k as Re, m as _l, V as Al } from "./View-CJKj3XLh.mjs";
import { M as Oe, V as Ll, N as ll, I as Il, B as Pl } from "./index-DyLGM4AC.mjs";
const Ol = "/favicon.ico";
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Xe;
(function(s) {
  s.pop = "pop", s.push = "push";
})(Xe || (Xe = {}));
var Ye;
(function(s) {
  s.back = "back", s.forward = "forward", s.unknown = "";
})(Ye || (Ye = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var qe;
(function(s) {
  s[s.aborted = 4] = "aborted", s[s.cancelled = 8] = "cancelled", s[s.duplicated = 16] = "duplicated";
})(qe || (qe = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Tl = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Rl() {
  return pl(Tl);
}
var tl = { exports: {} };
(function(s, m) {
  (function(S, t) {
    t();
  })(xe, function() {
    function S(v, p) {
      return typeof p > "u" ? p = { autoBom: !1 } : typeof p != "object" && (console.warn("Deprecated: Expected third argument to be a object"), p = { autoBom: !p }), p.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(v.type) ? new Blob(["\uFEFF", v], { type: v.type }) : v;
    }
    function t(v, p, f) {
      var I = new XMLHttpRequest();
      I.open("GET", v), I.responseType = "blob", I.onload = function() {
        i(I.response, p, f);
      }, I.onerror = function() {
        console.error("could not download file");
      }, I.send();
    }
    function k(v) {
      var p = new XMLHttpRequest();
      p.open("HEAD", v, !1);
      try {
        p.send();
      } catch {
      }
      return 200 <= p.status && 299 >= p.status;
    }
    function x(v) {
      try {
        v.dispatchEvent(new MouseEvent("click"));
      } catch {
        var p = document.createEvent("MouseEvents");
        p.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), v.dispatchEvent(p);
      }
    }
    var n = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof xe == "object" && xe.global === xe ? xe : void 0, w = n.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), i = n.saveAs || (typeof window != "object" || window !== n ? function() {
    } : "download" in HTMLAnchorElement.prototype && !w ? function(v, p, f) {
      var I = n.URL || n.webkitURL, $ = document.createElement("a");
      p = p || v.name || "download", $.download = p, $.rel = "noopener", typeof v == "string" ? ($.href = v, $.origin === location.origin ? x($) : k($.href) ? t(v, p, f) : x($, $.target = "_blank")) : ($.href = I.createObjectURL(v), setTimeout(function() {
        I.revokeObjectURL($.href);
      }, 4e4), setTimeout(function() {
        x($);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(v, p, f) {
      if (p = p || v.name || "download", typeof v != "string") navigator.msSaveOrOpenBlob(S(v, f), p);
      else if (k(v)) t(v, p, f);
      else {
        var I = document.createElement("a");
        I.href = v, I.target = "_blank", setTimeout(function() {
          x(I);
        });
      }
    } : function(v, p, f, I) {
      if (I = I || open("", "_blank"), I && (I.document.title = I.document.body.innerText = "downloading..."), typeof v == "string") return t(v, p, f);
      var $ = v.type === "application/octet-stream", O = /constructor/i.test(n.HTMLElement) || n.safari, W = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((W || $ && O || w) && typeof FileReader < "u") {
        var N = new FileReader();
        N.onloadend = function() {
          var H = N.result;
          H = W ? H : H.replace(/^data:[^;]*;/, "data:attachment/file;"), I ? I.location.href = H : location = H, I = null;
        }, N.readAsDataURL(v);
      } else {
        var d = n.URL || n.webkitURL, h = d.createObjectURL(v);
        I ? I.location = h : location.href = h, I = null, setTimeout(function() {
          d.revokeObjectURL(h);
        }, 4e4);
      }
    });
    n.saveAs = i.saveAs = i, s.exports = i;
  });
})(tl);
var Nl = tl.exports;
const Dl = /* @__PURE__ */ bl(Nl), El = { class: "app-header header__top" }, Fl = { class: "logo" }, Ml = { class: "logo" }, zl = { class: "logo" }, jl = ["href"], Wl = { class: "app-header header__bottom" }, Bl = {
  class: "l-icon",
  "aria-hidden": "true"
}, Hl = ["xlink:href"], Gl = ["onClick"], Jl = {
  class: "l-icon",
  "aria-hidden": "true"
}, Xl = ["xlink:href"], Yl = {
  class: "l-icon",
  "aria-hidden": "true"
}, ql = ["xlink:href"], Kl = ["onClick"], Zl = {
  class: "l-icon",
  "aria-hidden": "true"
}, Ql = ["xlink:href"], et = {
  class: "l-icon",
  "aria-hidden": "true"
}, lt = ["xlink:href"], tt = ["onClick"], at = {
  class: "l-icon",
  "aria-hidden": "true"
}, nt = ["xlink:href"], ot = /* @__PURE__ */ pe({
  __name: "Header",
  emits: ["view"],
  setup(s, { emit: m }) {
    const S = m;
    Rl();
    const t = Ie({
      home: "https://le5le.com",
      helps: [
        {
          name: "产品介绍",
          url: "https://doc.le5le.com/document/118756411"
        },
        {
          name: "快速上手",
          url: "https://doc.le5le.com/document/119363000"
        },
        {
          name: "使用手册",
          url: "https://doc.le5le.com/document/118764244"
        },
        {
          name: "快捷键",
          url: "https://doc.le5le.com/document/119620214",
          divider: !0
        }
      ]
    }), k = le(!1), x = (L, b = {}) => {
      b && b.trigger === "confirm" ? (n(), k.value = !1) : k.value = L;
    }, n = (L) => {
      wl();
    }, w = le(!1), i = le(0);
    Ce(() => {
      const L = setInterval(() => {
        meta2d && (clearInterval(L), v(meta2d.store.data.scale), meta2d.on("scale", v));
      }, 200);
    });
    const v = (L) => {
      i.value = Math.round(L * 100);
    }, p = () => {
      w.value ? (w.value = !1, meta2d.finishDrawLine(), meta2d.drawLine(), meta2d.store.options.disableAnchor = !0) : (w.value = !0, meta2d.drawLine(meta2d.store.options.drawingLineName), meta2d.store.options.disableAnchor = !1);
    }, f = Ie([
      { name: "曲线", icon: "#l-curve2", value: "curve" },
      { name: "线段", icon: "#l-polyline", value: "polyline" },
      { name: "直线", icon: "#l-line", value: "line" },
      { name: "脑图曲线", icon: "#l-mind", value: "mind" }
    ]), I = le("line"), $ = (L) => {
      var b;
      I.value = L, meta2d && (meta2d.store.options.drawingLineName = L, meta2d.canvas.drawingLineName && (meta2d.canvas.drawingLineName = L), (b = meta2d.store.active) == null || b.forEach((r) => {
        meta2d.updateLineType(r, L);
      }));
    }, O = le(""), W = [
      { icon: "#l-line", value: "" },
      { icon: "#l-from-triangle", value: "triangle" },
      { icon: "#l-from-diamond", value: "diamond" },
      { icon: "#l-from-circle", value: "circle" },
      { icon: "#l-from-lineDown", value: "lineDown" },
      { icon: "#l-from-lineUp", value: "lineUp" },
      { icon: "#l-from-triangleSolid", value: "triangleSolid" },
      { icon: "#l-from-diamondSolid", value: "diamondSolid" },
      { icon: "#l-from-circleSolid", value: "circleSolid" },
      { icon: "#l-from-line", value: "line" }
    ], N = le(""), d = [
      { icon: "#l-line", value: "" },
      { icon: "#l-to-triangle", value: "triangle" },
      { icon: "#l-to-diamond", value: "diamond" },
      { icon: "#l-to-circle", value: "circle" },
      { icon: "#l-to-lineDown", value: "lineDown" },
      { icon: "#l-to-lineUp", value: "lineUp" },
      { icon: "#l-to-triangleSolid", value: "triangleSolid" },
      { icon: "#l-to-diamondSolid", value: "diamondSolid" },
      { icon: "#l-to-circleSolid", value: "circleSolid" },
      { icon: "#l-to-line", value: "line" }
    ], h = (L) => {
      O.value = L, meta2d.store.data.fromArrow = L, meta2d.store.active && (meta2d.store.active.forEach((b) => {
        b.type === Ge.Line && (b.fromArrow = L, meta2d.setValue(
          {
            id: b.id,
            fromArrow: b.fromArrow
          },
          {
            render: !1
          }
        ));
      }), meta2d.render());
    }, H = (L) => {
      N.value = L, meta2d.store.data.toArrow = L, meta2d.store.active && (meta2d.store.active.forEach((b) => {
        b.type === Ge.Line && (b.toArrow = L, meta2d.setValue(
          {
            id: b.id,
            toArrow: b.toArrow
          },
          {
            render: !1
          }
        ));
      }), meta2d.render());
    }, oe = () => {
      meta2d.open({ name: "新建项目", pens: [] });
    };
    function T(L) {
      return new Promise((b, r) => {
        const q = new FileReader();
        q.onload = () => {
          b(q.result);
        }, q.onerror = r, q.readAsText(L);
      });
    }
    const C = () => {
      const L = document.createElement("input");
      L.type = "file", L.onchange = async (b) => {
        const r = b.target;
        if (r.files && r.files[0]) {
          const q = await T(r.files[0]);
          try {
            meta2d.open(JSON.parse(q)), meta2d.fitView();
          } catch (R) {
            console.log(R);
          }
        }
      }, L.click();
    }, u = () => {
      const L = meta2d.data();
      Dl.saveAs(
        new Blob([JSON.stringify(L)], {
          type: "text/plain;charset=utf-8"
        }),
        `${L.name || "le5le.meta2d"}.json`
      );
    }, B = () => {
      let L = meta2d.store.data.name;
      L && (L += ".png"), meta2d.downloadPng(L);
    };
    function z(L, b) {
      var q;
      let r = L;
      for (; r && r.parentId; ) {
        const R = r;
        r = b.pens[r.parentId];
        const Z = (q = r == null ? void 0 : r.calculative) == null ? void 0 : q.showChild;
        if (Z != null && r.children[Z] !== R.id)
          return !1;
      }
      return !0;
    }
    const ee = () => {
      if (!C2S) {
        Oe.error("请先加载乐吾乐官网下的canvas2svg.js");
        return;
      }
      const L = meta2d.getRect();
      L.x -= 10, L.y -= 10;
      const b = new C2S(L.width + 20, L.height + 20);
      b.textBaseline = "middle";
      for (const Q of meta2d.store.data.pens)
        Q.visible == !1 || !z(Q, meta2d.store) || meta2d.renderPenRaw(b, Q, L);
      let r = b.getSerializedSvg();
      meta2d.store.data.background ? (r = r.replace("{{bk}}", ""), r = r.replace(
        "{{bkRect}}",
        `<rect x="0" y="0" width="100%" height="100%" fill="${meta2d.store.data.background}"></rect>`
      )) : (r = r.replace("{{bk}}", ""), r = r.replace("{{bkRect}}", "")), r = r.replace(/--le5le--/g, "&#x");
      const q = window.URL || window, R = new Blob([r]), Z = q.createObjectURL(R), se = document.createElement("a");
      se.setAttribute(
        "download",
        `${meta2d.store.data.name || "le5le.meta2d"}.svg`
      ), se.setAttribute("href", Z);
      const me = document.createEvent("MouseEvents");
      me.initEvent("click", !0, !0), se.dispatchEvent(me);
    }, K = () => {
      meta2d.undo();
    }, P = () => {
      meta2d.redo();
    }, y = () => {
      meta2d.cut();
    }, A = () => {
      meta2d.copy();
    }, F = () => {
      meta2d.paste();
    }, U = () => {
      meta2d.activeAll();
    }, a = () => {
      meta2d.delete();
    }, { saveBlueprintShow: Y } = el(!0), _ = (L) => {
      if (L == "svg") {
        hl((b) => {
          yl(b.data);
        });
        return;
      }
      if (L == "save") {
        Y();
        return;
      }
      meta2d.toggleAnchorMode();
    }, G = (L, b) => {
      var q;
      L.stopPropagation();
      let r;
      b === "text" ? r = {
        text: "text",
        width: 100,
        height: 20,
        name: "text"
      } : b === "line" && (r = {
        anchors: [
          { id: "0", x: 1, y: 0 },
          { id: "1", x: 0, y: 1 }
        ],
        width: 100,
        height: 100,
        name: "line",
        lineName: "line",
        type: 1
      }), L.dataTransfer ? (q = L.dataTransfer) == null || q.setData("Meta2d", JSON.stringify(r)) : meta2d.canvas.addCaches = Ve([r]);
    }, ne = () => {
      meta2d.scale(1), meta2d.centerView();
    }, te = () => {
      meta2d.fitView();
    }, fe = () => {
      meta2d.stopAnimate();
      const L = meta2d.data();
      localStorage.setItem("meta2d", JSON.stringify(L)), S("view", L), globalThis.$_meta2d_singleton && window.open(`/preview?r=${Date.now()}&id=${L._id || ""}`, "_blank");
    }, M = (L) => {
      if (L == "none") {
        meta2d.inactive();
        return;
      }
      const r = meta2d.data().pens.filter((R) => L ? R.type === L : R.type != 1), q = [];
      r.forEach((R) => {
        meta2d.findOne(R.id) && q.push(meta2d.findOne(R.id));
      }), meta2d.active(q);
    };
    return (L, b) => {
      const r = c("t-dropdown-item"), q = c("t-dropdown-menu"), R = c("t-dropdown"), Z = c("t-tooltip"), se = c("t-popconfirm"), me = c("t-icon");
      return g(), D(X, null, [
        V("div", El, [
          b[27] || (b[27] = V("a", {
            class: "logo",
            href: "https://doc.le5le.com/document/119359590",
            target: "_blank"
          }, [
            V("img", { src: Ol }),
            V("span", null, "Meta2D")
          ], -1)),
          e(R, {
            minColumnWidth: 200,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              b[12] || (b[12] = V("a", null, " 文件 ", -1)),
              e(q, null, {
                default: l(() => [
                  e(r, { onClick: oe }, {
                    default: l(() => b[10] || (b[10] = [
                      V("a", null, "新建文件", -1)
                    ])),
                    _: 1
                  }),
                  e(r, {
                    onClick: C,
                    divider: "true"
                  }, {
                    default: l(() => b[11] || (b[11] = [
                      V("a", null, "打开文件", -1)
                    ])),
                    _: 1
                  }),
                  e(r, { divider: "true" }, {
                    default: l(() => [
                      V("a", { onClick: u }, "下载JSON文件")
                    ]),
                    _: 1
                  }),
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: B }, "下载为PNG")
                    ]),
                    _: 1
                  }),
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: ee }, "下载为SVG")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(R, {
            minColumnWidth: 180,
            maxHeight: 500,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              b[20] || (b[20] = V("a", null, " 编辑 ", -1)),
              e(q, null, {
                default: l(() => [
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: K }, b[13] || (b[13] = [
                        V("div", { class: "flex" }, [
                          J(" 撤销 "),
                          V("span", { class: "flex-grow" }),
                          J(" Ctrl + Z ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(r, { divider: "true" }, {
                    default: l(() => [
                      V("a", { onClick: P }, b[14] || (b[14] = [
                        V("div", { class: "flex" }, [
                          J(" 恢复 "),
                          V("span", { class: "flex-grow" }),
                          J(" Ctrl + Y ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: y }, b[15] || (b[15] = [
                        V("div", { class: "flex" }, [
                          J(" 剪切 "),
                          V("span", { class: "flex-grow" }),
                          J(" Ctrl + X ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: A }, b[16] || (b[16] = [
                        V("div", { class: "flex" }, [
                          J(" 复制 "),
                          V("span", { class: "flex-grow" }),
                          J(" Ctrl + C ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(r, { divider: "true" }, {
                    default: l(() => [
                      V("a", { onClick: F }, b[17] || (b[17] = [
                        V("div", { class: "flex" }, [
                          J(" 粘贴 "),
                          V("span", { class: "flex-grow" }),
                          J(" Ctrl + V ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: U }, b[18] || (b[18] = [
                        V("div", { class: "flex" }, [
                          J(" 全选 "),
                          V("span", { class: "flex-grow" }),
                          J(" Ctrl + A ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(r, null, {
                    default: l(() => [
                      V("a", { onClick: a }, b[19] || (b[19] = [
                        V("div", { class: "flex" }, [
                          J("删除 "),
                          V("span", { class: "flex-grow" }),
                          J(" DELETE")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          V("a", Fl, [
            V("span", {
              onClick: b[0] || (b[0] = (Q) => _())
            }, "添加/删除锚点")
          ]),
          e(R, {
            minColumnWidth: 200,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              b[24] || (b[24] = V("a", null, " 批量选择图元 ", -1)),
              e(q, null, {
                default: l(() => [
                  e(r, {
                    onClick: b[1] || (b[1] = (Q) => M())
                  }, {
                    default: l(() => b[21] || (b[21] = [
                      V("a", null, "节点", -1)
                    ])),
                    _: 1
                  }),
                  e(r, {
                    onClick: b[2] || (b[2] = (Q) => M(1)),
                    divider: "true"
                  }, {
                    default: l(() => b[22] || (b[22] = [
                      V("a", null, "连线", -1)
                    ])),
                    _: 1
                  }),
                  e(r, {
                    onClick: b[3] || (b[3] = (Q) => M("none"))
                  }, {
                    default: l(() => b[23] || (b[23] = [
                      V("a", null, "取消", -1)
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          V("a", Ml, [
            e(Z, { content: "选择 .svg 文件导入，单击画布摆放到鼠标指针位置" }, {
              default: l(() => [
                V("span", {
                  onClick: b[4] || (b[4] = (Q) => _("svg"))
                }, "导入 SVG")
              ]),
              _: 1
            })
          ]),
          e(se, {
            visible: k.value,
            theme: "default",
            content: "是否导入 ElectricEditor 生成的 JSON 文件?",
            onVisibleChange: x
          }, {
            default: l(() => b[25] || (b[25] = [
              V("a", { class: "logo" }, [
                V("span", null, "导入")
              ], -1)
            ])),
            _: 1
          }, 8, ["visible"]),
          V("a", zl, [
            V("span", {
              onClick: b[5] || (b[5] = (Q) => _("save"))
            }, "保存图纸")
          ]),
          e(R, {
            minColumnWidth: 180,
            maxHeight: 500,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              b[26] || (b[26] = V("a", null, " 帮助 ", -1)),
              e(q, null, {
                default: l(() => [
                  (g(!0), D(X, null, ae(t.helps, (Q) => (g(), E(r, {
                    divider: Q.divider
                  }, {
                    default: l(() => [
                      Q.url ? (g(), D("a", {
                        key: 0,
                        href: Q.url,
                        target: "_blank"
                      }, ve(Q.name), 9, jl)) : re("", !0)
                    ]),
                    _: 2
                  }, 1032, ["divider"]))), 256))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        V("div", Wl, [
          e(Z, { content: "撤销" }, {
            default: l(() => [
              (g(), D("svg", {
                class: "l-icon",
                "aria-hidden": "true",
                onClick: K
              }, b[28] || (b[28] = [
                V("use", { "xlink:href": "#l-undo" }, null, -1)
              ])))
            ]),
            _: 1
          }),
          e(Z, { content: "重做" }, {
            default: l(() => [
              (g(), D("svg", {
                class: "l-icon",
                "aria-hidden": "true",
                onClick: P
              }, b[29] || (b[29] = [
                V("use", { "xlink:href": "#l-redo" }, null, -1)
              ])))
            ]),
            _: 1
          }),
          e(Z, { content: "直线" }, {
            default: l(() => [
              V("span", {
                draggable: !0,
                onDragstart: b[6] || (b[6] = (Q) => G(Q, "line")),
                onClick: b[7] || (b[7] = (Q) => G(Q, "line"))
              }, [
                e(me, { name: "slash" })
              ], 32)
            ]),
            _: 1
          }),
          e(Z, { content: "文字" }, {
            default: l(() => [
              V("span", {
                draggable: !0,
                onDragstart: b[8] || (b[8] = (Q) => G(Q, "text")),
                onClick: b[9] || (b[9] = (Q) => G(Q, "text"))
              }, b[30] || (b[30] = [
                V("svg", {
                  class: "l-icon",
                  "aria-hidden": "true"
                }, [
                  V("use", { "xlink:href": "#l-text" })
                ], -1)
              ]), 32)
            ]),
            _: 1
          }),
          e(Z, { content: "连线" }, {
            default: l(() => [
              (g(), D("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 1024 1024",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: p,
                style: fl({
                  color: w.value ? " #1677ff" : ""
                })
              }, b[31] || (b[31] = [
                V("path", {
                  d: "M192 64a128 128 0 0 1 123.968 96H384a160 160 0 0 1 159.68 149.504L544 320v384a96 96 0 0 0 86.784 95.552L640 800h68.032a128 128 0 1 1 0 64.064L640 864a160 160 0 0 1-159.68-149.504L480 704V320a96 96 0 0 0-86.784-95.552L384 224l-68.032 0.064A128 128 0 1 1 192 64z m640 704a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM192 128a64 64 0 1 0 0 128 64 64 0 0 0 0-128z",
                  fill: "currentColor"
                }, null, -1)
              ]), 4))
            ]),
            _: 1
          }),
          e(R, {
            minColumnWidth: 160,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var Q;
              return [
                V("a", null, [
                  (g(), D("svg", Bl, [
                    V("use", {
                      "xlink:href": (Q = f.find((ie) => ie.value === I.value)) == null ? void 0 : Q.icon
                    }, null, 8, Hl)
                  ]))
                ]),
                e(q, null, {
                  default: l(() => [
                    (g(!0), D(X, null, ae(f, (ie) => (g(), E(r, null, {
                      default: l(() => [
                        V("div", {
                          class: "flex middle",
                          onClick: (Ue) => $(ie.value)
                        }, [
                          J(ve(ie.name) + " ", 1),
                          b[32] || (b[32] = V("span", { class: "flex-grow" }, null, -1)),
                          (g(), D("svg", Jl, [
                            V("use", {
                              "xlink:href": ie.icon
                            }, null, 8, Xl)
                          ]))
                        ], 8, Gl)
                      ]),
                      _: 2
                    }, 1024))), 256))
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          }),
          e(R, {
            minColumnWidth: 160,
            maxHeight: 560,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var Q;
              return [
                V("a", null, [
                  (g(), D("svg", Yl, [
                    V("use", {
                      "xlink:href": (Q = W.find((ie) => ie.value === O.value)) == null ? void 0 : Q.icon
                    }, null, 8, ql)
                  ]))
                ]),
                e(q, null, {
                  default: l(() => [
                    (g(), D(X, null, ae(W, (ie) => e(r, null, {
                      default: l(() => [
                        V("div", {
                          class: "flex middle",
                          style: { height: "30px" },
                          onClick: (Ue) => h(ie.value)
                        }, [
                          (g(), D("svg", Zl, [
                            V("use", {
                              "xlink:href": ie.icon
                            }, null, 8, Ql)
                          ]))
                        ], 8, Kl)
                      ]),
                      _: 2
                    }, 1024)), 64))
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          }),
          e(R, {
            minColumnWidth: 160,
            maxHeight: 560,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var Q;
              return [
                V("a", null, [
                  (g(), D("svg", et, [
                    V("use", {
                      "xlink:href": (Q = d.find((ie) => ie.value === N.value)) == null ? void 0 : Q.icon
                    }, null, 8, lt)
                  ]))
                ]),
                e(q, null, {
                  default: l(() => [
                    (g(), D(X, null, ae(d, (ie) => e(r, null, {
                      default: l(() => [
                        V("div", {
                          class: "flex middle",
                          style: { height: "30px" },
                          onClick: (Ue) => H(ie.value)
                        }, [
                          (g(), D("svg", at, [
                            V("use", {
                              "xlink:href": ie.icon
                            }, null, 8, nt)
                          ]))
                        ], 8, tt)
                      ]),
                      _: 2
                    }, 1024)), 64))
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          }),
          b[33] || (b[33] = V("div", { style: { width: "64px" } }, null, -1)),
          _e(V("div", { style: { "line-height": "40px" } }, ve(i.value) + "%", 513), [
            [Ae, i.value > 0]
          ]),
          e(Z, {
            content: "100%视图",
            placement: "bottom"
          }, {
            default: l(() => [
              V("a", { onClick: ne }, [
                e(me, { name: "refresh" })
              ])
            ]),
            _: 1
          }),
          e(Z, {
            content: "窗口大小",
            placement: "bottom"
          }, {
            default: l(() => [
              V("a", {
                onClick: te,
                style: { "margin-left": "-16px" }
              }, [
                e(me, { name: "fullscreen-exit" })
              ])
            ]),
            _: 1
          }),
          b[34] || (b[34] = V("div", { style: { width: "36px" } }, null, -1)),
          e(Z, { content: "运行查看" }, {
            default: l(() => [
              e(me, {
                name: "play-circle-stroke",
                onClick: fe
              })
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
}), dt = /* @__PURE__ */ ce(ot, [["__scopeId", "data-v-69d457b7"]]);
let be = 1;
const st = 2, Ke = 1e-6;
let de = [], $e = !1, al = !1;
const De = ["line", "polyline"];
function it(s) {
  window.meta2d.on("mouseup", je), window.meta2d.on("mousedown", ze), window.meta2d.on("add", dl), window.meta2d.on("active", ol), al = s, window.meta2d.on("opened", nl);
}
function rt(s) {
  ze(), je(s);
}
function nl() {
  al && rt(void 0);
}
function ol() {
  $e = !0;
}
function dl() {
  $e = !0;
}
function ze() {
  $e = !0;
}
function ut(s) {
  let m = [], S = [];
  const k = (s ? window.meta2d.store.active : window.meta2d.store.data.pens).filter((x) => x);
  for (let x = 0; x < k.length; x++) {
    const n = k[x];
    if (n.type === 1 && De.indexOf(n.lineName) !== -1)
      S.push(n);
    else if (n.connectedLines && n.connectedLines.length > 0)
      for (let i = 0; i < n.connectedLines.length; i++) {
        const v = n.connectedLines[i];
        S.push(window.meta2d.find(v.lineId)[0]);
      }
    const w = window.meta2d.store.data.pens.filter((i) => i.intersectLines && i.intersectLines.findIndex((v) => v.id === n.id) !== -1);
    S.push(...w);
  }
  S = S.filter((x) => x);
  for (let x = 0; x < S.length; x++) {
    const n = S[x];
    if (n.intersectLines = [], S[x] && S[x].calculative && (m = S[x].calculative.worldAnchors, m.length > 2)) {
      for (let w = 0; w < m.length; w++) {
        const i = m[w];
        (i.next || i.prev) && (m.splice(w, 1), w--);
      }
      window.meta2d.canvas.initLineRect(n);
    }
  }
}
function je(s) {
  $e && ($e = !1, setTimeout(() => {
    const S = (s ? window.meta2d.store.active : window.meta2d.store.data.pens).filter((n) => n).reverse();
    let t = [], k = [];
    for (let n = 0; n < S.length; n++) {
      const w = S[n];
      if (w.type === 1 && De.indexOf(w.lineName) !== -1) {
        if (w.connectedLines)
          for (let i = 0; i < w.connectedLines.length; i++) {
            const v = w.connectedLines[i];
            let p = w.anchors.find((f) => f.id === v.anchor);
            if (p && p.penId) {
              let f = window.meta2d.findOne(v.lineId);
              if (!f)
                continue;
              if (f.connectedLines && f.connectedLines.length > 0) {
                let I = f.connectedLines.findIndex(($) => $.anchor === v.lineAnchor);
                f.connectedLines.splice(I, 1);
              }
              w.connectedLines.splice(i, 1), i--;
            }
          }
        t.push(w);
      } else if (w.type !== 1 && w.connectedLines && w.connectedLines.length > 0)
        for (let i = 0; i < w.connectedLines.length; i++) {
          const v = w.connectedLines[i];
          t.push(window.meta2d.find(v.lineId)[0]);
        }
      k = window.meta2d.store.data.pens.filter((i) => i.intersectLines && i.intersectLines.findIndex((v) => v.id === w.id) !== -1), t.unshift(...k);
    }
    const x = window.meta2d.store.data.pens.filter((n) => n.type === 1 && De.indexOf(n.lineName) !== -1);
    ut(s), t = t.filter((n) => n);
    for (let n = 0; n < t.length; n++) {
      const w = t[n].calculative.worldAnchors.filter((i) => !i.next && !i.prev);
      de = [];
      for (let i = 0; i < w.length; i++)
        if (i !== w.length - 1) {
          const v = w[i], p = w[i + 1];
          for (let f = 0; f < x.length; f++) {
            be = 3, be += x[f].lineWidth / t[n].lineWidth * t[n].lineWidth, be *= window.meta2d.store.data.scale;
            const I = x[f].calculative.worldAnchors.filter(($) => !$.next && !$.prev);
            for (let $ = 0; $ < I.length; $++)
              if ($ !== I.length - 1) {
                const O = I[$], W = I[$ + 1], { onLine1: N, onLine2: d, x: h, y: H } = gt(v.x, v.y, p.x, p.y, O.x, O.y, W.x, W.y);
                if (N && d) {
                  if (x[f].intersectLines && x[f].intersectLines.findIndex((z) => z.id === t[n].id && z.fromAnchorIndex === $ && z.toAnchorIndex === i) !== -1)
                    continue;
                  t[n].intersectLines ? t[n].intersectLines.findIndex((z) => z.id === x[f].id && z.fromAnchorIndex === i && z.toAnchorIndex === $) === -1 && t[n].intersectLines.push({ fromAnchorIndex: i, toAnchorIndex: $, id: x[f].id }) : (t[n].intersectLines = [], t[n].intersectLines.push({ fromAnchorIndex: i, toAnchorIndex: $, id: x[f].id }));
                  const { a: oe, b: T, c: C } = vt(v, p), u = ft({ radius: be, x: h, y: H }, { p1: v, p2: p });
                  if (u.length === 2) {
                    let B = 1;
                    oe !== 0 ? B = T / oe : B = H;
                    const z = Math.sqrt(be * be / (B * B + 1)), ee = B * z;
                    let K = { x: 0, y: 0 }, P = { x: 0, y: 0 };
                    -B < 0 ? (K.x = u[0].x - z, K.y = u[0].y - ee, P.x = u[1].x - z, P.y = u[1].y - ee) : (K.x = u[0].x + z, K.y = u[0].y + ee, P.x = u[1].x + z, P.y = u[1].y + ee);
                    let y = { x: 0, y: 0, id: "" };
                    for (let U = 0; U < w.length; U++)
                      if (U !== w.length - 1) {
                        const a = w[U], Y = w[U + 1];
                        if (pt(a, Y, { x: h, y: H }, st)) {
                          y.x = a.x, y.y = a.y, y.id = a.id;
                          break;
                        }
                      }
                    const A = {
                      id: Je(),
                      penId: t[n].id,
                      x: u[0].x,
                      y: u[0].y,
                      intersect: !0,
                      hidden: !0,
                      locked: 2,
                      lastAnchorIndex: y.id,
                      brotherId: "",
                      next: {
                        penId: t[n].id,
                        x: K.x,
                        y: K.y
                      },
                      prev: {
                        penId: t[n].id,
                        x: u[0].x,
                        y: u[0].y
                      },
                      prevNextType: 1
                      /* Bilateral */
                    }, F = {
                      id: Je(),
                      penId: t[n].id,
                      x: u[1].x,
                      y: u[1].y,
                      intersect: !0,
                      hidden: !0,
                      locked: 2,
                      brotherId: "",
                      lastAnchorIndex: y.id,
                      next: {
                        penId: t[n].id,
                        x: u[1].x,
                        y: u[1].y
                      },
                      prev: {
                        penId: t[n].id,
                        x: P.x,
                        y: P.y
                      },
                      prevNextType: 1
                      /* Bilateral */
                    };
                    A.brotherId = F.id, F.brotherId = A.id, de.push(A, F);
                  }
                }
              }
          }
        }
      if (de.length > 0) {
        de.sort((O, W) => {
          if (O.lastAnchorIndex === W.lastAnchorIndex) {
            const N = w.find((d) => d.id === O.lastAnchorIndex);
            return N ? ke(O.x, O.y, N.x, N.y) - ke(W.x, W.y, N.x, N.y) : -1;
          } else
            return -1;
        });
        let i = [], v = [], p = -1;
        for (let O = 0, W = de.length; O < W; O++) {
          const N = de[O];
          if (i.indexOf(N.id) !== -1)
            continue;
          const d = de.find((h) => h.id === N.brotherId);
          i.push(N.id, d.id);
          for (let h = O + 1; h < W; h++) {
            const H = de[h], oe = de.find((T) => T.id === H.brotherId);
            if (i.push(H.id, oe.id), N.brotherId !== H.id)
              if (ke(N.x, N.y, H.x, H.y) < be * 2 && ke(N.x, N.y, H.x, H.y) > Ke) {
                p = 1, v.indexOf(N.id) === -1 && v.push(N.id, d.id);
                const T = de.find((C) => C.id === H.brotherId);
                v.indexOf(H.id) === -1 && v.push(H.id, T.id);
              } else {
                if (p === 1) {
                  p = -1;
                  const T = i.findIndex((u) => u === H.id);
                  i.splice(T, 1);
                  const C = i.findIndex((u) => u === H.brotherId);
                  i.splice(C, 1);
                  break;
                }
                break;
              }
          }
        }
        for (let O = 0; O < de.length; O++) {
          const W = de[O];
          v.indexOf(W.id) !== -1 && (de.splice(O, 1), O--);
        }
        for (let O = 0, W = de.length; O < W; O++) {
          const N = de[O];
          for (let d = O + 1; d < W; d++) {
            const h = de[d];
            if (ke(N.x, N.y, h.x, h.y) <= Ke) {
              de.splice(d, 1);
              let H = de.findIndex((oe) => oe.id === h.brotherId);
              H !== -1 && de.splice(H, 1), d--, W = de.length;
            }
          }
        }
        let f = -1, I = -1, $ = 0;
        for (let O = 0; O < de.length; O++) {
          const W = de[O];
          f === -1 || f !== -1 && f !== W.lastAnchorIndex ? (I = t[n].calculative.worldAnchors.findIndex((d) => d.id === W.lastAnchorIndex), $ = 0) : f === W.lastAnchorIndex && $++, t[n].calculative.worldAnchors.findIndex((d) => d.x === W.x && d.y === W.y && d.penId === W.penId) === -1 && (t[n].calculative.worldAnchors.splice(I + $ + 1, 0, W), f = W.lastAnchorIndex);
        }
        window.meta2d.canvas.updateLines(t[n]), window.meta2d.canvas.initLineRect(t[n]);
      }
    }
    window.meta2d.render();
  }, 0));
}
function mt() {
  window.meta2d.off("mouseup", je), window.meta2d.off("mousedown", ze), window.meta2d.off("add", dl), window.meta2d.off("active", ol), window.meta2d.off("opened", nl), de = [];
}
function pt(s, m, S, t) {
  const k = (m.x - s.x) * (m.x - s.x) + (m.y - s.y) * (m.y - s.y);
  if (k == 0) return !1;
  const x = ((S.x - s.x) * (m.x - s.x) + (S.y - s.y) * (m.y - s.y)) / k;
  if (x < 0)
    return Math.sqrt((s.x - S.x) * (s.x - S.x) + (s.y - S.y) * (s.y - S.y)) <= t;
  if (0 <= x && x <= 1) {
    const n = ((s.y - S.y) * (m.x - s.x) - (s.x - S.x) * (m.y - s.y)) / k;
    return Math.abs(n) * Math.sqrt(k) <= t;
  } else
    return Math.sqrt((m.x - S.x) * (m.x - S.x) + (m.y - S.y) * (m.y - S.y)) <= t;
}
function ft(s, m) {
  let S, t, k, x, n, w, i, v, p, f;
  return p = {}, f = {}, p.x = m.p2.x - m.p1.x, p.y = m.p2.y - m.p1.y, f.x = m.p1.x - s.x, f.y = m.p1.y - s.y, S = p.x * f.x + p.y * f.y, t = 2 * (p.x * p.x + p.y * p.y), S *= -2, k = Math.sqrt(S * S - 2 * t * (f.x * f.x + f.y * f.y - s.radius * s.radius)), isNaN(k) ? [] : (x = (S - k) / t, n = (S + k) / t, i = {}, v = {}, w = [], x <= 1 && x >= 0 && (i.x = m.p1.x + p.x * x, i.y = m.p1.y + p.y * x, w[0] = i), n <= 1 && n >= 0 && (v.x = m.p1.x + p.x * n, v.y = m.p1.y + p.y * n, w[w.length] = v), w);
}
function vt(s, m) {
  const S = m.y - s.y, t = s.x - m.x, k = S * s.x + t * s.y;
  return { a: S, b: t, c: k };
}
function ke(s, m, S, t) {
  let k = S - s, x = t - m;
  return Math.sqrt(x * x + k * k);
}
function gt(s, m, S, t, k, x, n, w) {
  let i, v, p, f, I, $ = {
    x: null,
    y: null,
    onLine1: !1,
    onLine2: !1
  };
  return i = (w - x) * (S - s) - (n - k) * (t - m), i == 0 || (v = m - x, p = s - k, f = (n - k) * v - (w - x) * p, I = (S - s) * v - (t - m) * p, v = f / i, p = I / i, $.x = s + v * (S - s), $.y = m + v * (t - m), v > 0 && v < 1 && ($.onLine1 = !0), p > 0 && p < 1 && ($.onLine2 = !0)), $;
}
const Te = /* @__PURE__ */ pe({
  __name: "PropsTab",
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: Number,
      default: 1
    }
  },
  emits: ["change"],
  setup(s, { emit: m }) {
    const t = le(s.defaultValue), k = m, x = (n) => {
      k("change", n);
    };
    return (n, w) => {
      const i = c("t-tab-panel"), v = c("t-tabs");
      return g(), E(v, {
        value: t.value,
        "onUpdate:value": w[0] || (w[0] = (p) => t.value = p),
        onChange: x
      }, {
        default: l(() => [
          (g(!0), D(X, null, ae(s.tabs, (p, f) => (g(), E(i, {
            key: f,
            value: p.value,
            label: p.label
          }, {
            default: l(() => [
              Pe(n.$slots, p.slot)
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 3
      }, 8, ["value"]);
    };
  }
}), ct = /* @__PURE__ */ pe({
  __name: "CodeEditor",
  props: {},
  emits: ["confirm"],
  setup(s, { expose: m, emit: S }) {
    const t = S, k = le(!1), x = ($) => {
      k.value = !1, t("confirm", p.value);
    }, n = ($) => {
      console.log("关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发", $);
    }, w = ($) => {
      console.log("点击了取消按钮", $);
    };
    m({
      open: ($) => {
        k.value = !0, p.value = $;
      }
    });
    const v = {
      automaticLayout: !0,
      formatOnType: !0,
      formatOnPaste: !0
    }, p = le("// some code..."), f = vl(), I = ($) => f.value = $;
    return ($, O) => {
      const W = c("t-space"), N = c("t-dialog");
      return g(), E(N, {
        visible: k.value,
        "onUpdate:visible": O[1] || (O[1] = (d) => k.value = d),
        header: "JavaScript",
        width: "50%",
        "on-cancel": w,
        "on-close": n,
        "on-confirm": x
      }, {
        default: l(() => [
          e(W, {
            direction: "vertical",
            style: { width: "100%" }
          }, {
            default: l(() => [
              O[2] || (O[2] = V("code", null, "function(data: any) { // data 为 MessageBus 消息里的 data 对象", -1)),
              e(j(Ll), {
                value: p.value,
                "onUpdate:value": O[0] || (O[0] = (d) => p.value = d),
                theme: "vs-dark",
                options: v,
                style: { height: "50vh" },
                onMount: I
              }, null, 8, ["value"]),
              O[3] || (O[3] = V("code", null, "}", -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
}), bt = /* @__PURE__ */ ce(ct, [["__scopeId", "data-v-ff6d5876"]]), wt = /* @__PURE__ */ pe({
  __name: "MessageHandlers",
  props: {
    wsMsgFields: {
      type: Array,
      default: () => []
    },
    wsMsgHandlers: {
      type: Array,
      default: () => []
    }
  },
  emits: ["change"],
  setup(s, { emit: m }) {
    const t = le(s.wsMsgHandlers), k = () => {
      t.value.push({
        id: Cl(),
        action: ue.SetProps,
        params: {
          tags: [],
          ids: []
        },
        value: {},
        where: {
          key: "",
          value: "",
          comparison: ""
        }
      });
    }, x = (P) => {
      t.value.splice(t.value.indexOf(P), 1), w();
    }, n = m, w = () => {
      n("change", t.value);
    }, i = [
      {
        label: "更改属性",
        value: ue.SetProps
      },
      {
        label: "执行动画",
        value: ue.StartAnimate
      },
      {
        label: "暂停动画",
        value: ue.PauseAnimate
      },
      {
        label: "停止动画",
        value: ue.StopAnimate
      }
    ], v = [
      {
        label: "背景颜色",
        value: "background"
      },
      {
        label: "颜色",
        value: "color"
      },
      {
        label: "文字",
        value: "text"
      },
      {
        label: "进度",
        value: "progress"
      },
      {
        label: "显示",
        value: "visible"
      },
      {
        label: "状态",
        value: "showChild"
      }
    ], p = le([]), f = () => {
      if (p.value.length >= 6) {
        Oe.warning("最多只能添加6个属性");
        return;
      }
      p.value.push({
        prop: "",
        value: ""
      });
    }, I = (P, y) => {
      const A = p.value.indexOf(P);
      p.value.splice(A, 1), $(y);
    }, $ = (P) => {
      const y = {};
      p.value.forEach((A) => {
        y[A.prop] = A.value;
      }), P.value = y, n("change", t.value), console.log("prop change: ", P, t.value);
    }, O = (P) => {
      const y = t.value[Number(P)];
      y.value && typeof y.value == "object" && (p.value = Object.keys(y.value).map((A) => ({
        prop: A,
        value: y.value[A]
      })));
    }, W = [
      {
        label: "大于",
        value: ">"
      },
      {
        label: "大于等于",
        value: ">="
      },
      {
        label: "小于",
        value: "<"
      },
      {
        label: "小于等于",
        value: "<="
      },
      {
        label: "等于",
        value: "="
      },
      {
        label: "不等于",
        value: "!="
      }
    ], N = le(!1), d = (P) => {
      H([P]), N.value = !0;
    }, h = Be({
      tags: [],
      ids: [],
      id: ""
    }), H = (P) => {
      if (!P.length) return;
      const y = JSON.parse(JSON.stringify(t.value[P[0]]));
      y && (h.tags = y.params.tags, h.ids = T(y.params.ids), h.id = y.id, O(P), z());
    }, oe = Vl.map((P) => ({
      label: P.释义,
      value: P.元件类型
    }));
    function T(P) {
      return P.filter((y) => !!meta2d.findOne(y));
    }
    const C = () => {
      N.value = !1;
      const P = t.value.find(
        (y) => y.id === h.id
      );
      P && (P.params.tags = h.tags, P.params.ids = T(h.ids), w());
    }, u = Be({
      value: []
    }), B = [
      {
        title: "ID",
        colKey: "id",
        type: "multiple"
      },
      {
        title: "图元名称",
        colKey: "name"
      },
      {
        title: "标签",
        colKey: "tags"
      },
      {
        title: "文字",
        colKey: "text"
      },
      {
        title: "描述",
        colKey: "description"
      }
    ], z = () => {
      const P = meta2d.data();
      if (h) {
        if (h._tag) {
          u.value = meta2d.find(h._tag);
          return;
        } else if (h.tags.length) {
          const y = [];
          h.tags.forEach((F) => {
            const U = meta2d.find(F);
            y.push(...U);
          });
          const A = [...new Set(y)];
          setTimeout(() => {
            u.value = A;
          }, 1e3);
          return;
        }
      }
      setTimeout(() => {
        u.value = P.pens;
      }, 1e3);
    }, ee = (P, y) => {
      h.ids = P;
    }, K = () => {
      if (h.ids.length) {
        const P = h.ids.map((y) => meta2d.findOne(y)).filter((y) => !!y);
        meta2d.active(P);
      } else
        meta2d.active(u.value);
    };
    return (P, y) => {
      const A = c("t-button"), F = c("t-select"), U = c("t-form-item"), a = c("t-col"), Y = c("t-icon"), _ = c("t-row"), G = c("t-input"), ne = c("t-form"), te = c("t-collapse-panel"), fe = c("t-collapse"), M = c("t-tooltip"), L = c("t-table"), b = c("t-drawer");
      return g(), D(X, null, [
        e(A, {
          block: "",
          theme: "primary",
          onClick: k
        }, {
          default: l(() => y[3] || (y[3] = [
            J("添加处理器")
          ])),
          _: 1
        }),
        e(fe, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: H
        }, {
          default: l(() => [
            (g(!0), D(X, null, ae(t.value, (r, q) => (g(), E(te, {
              key: q,
              header: "处理器"
            }, {
              headerRightContent: l(() => [
                e(A, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (R) => x(r)
                }, {
                  default: l(() => [
                    e(Y, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(ne, { labelAlign: "left" }, {
                  default: l(() => [
                    e(U, { label: "行为" }, {
                      default: l(() => [
                        e(F, {
                          modelValue: r.action,
                          "onUpdate:modelValue": (R) => r.action = R,
                          options: i,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(U, { label: "目标" }, {
                      default: l(() => [
                        e(A, {
                          variant: "text",
                          theme: "primary",
                          onClick: (R) => d(q)
                        }, {
                          default: l(() => y[4] || (y[4] = [
                            J("选择目标图元")
                          ])),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    r.action === j(ue).SetProps ? (g(), D(X, { key: 0 }, [
                      e(_, { justify: "start" }, {
                        default: l(() => [
                          e(a, { span: 5 }, {
                            default: l(() => y[5] || (y[5] = [
                              V("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(a, { span: 5 }, {
                            default: l(() => y[6] || (y[6] = [
                              V("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(a, { span: 2 }, {
                            default: l(() => [
                              e(A, {
                                variant: "text",
                                onClick: f
                              }, {
                                default: l(() => [
                                  e(Y, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (g(!0), D(X, null, ae(p.value, (R, Z) => (g(), E(_, {
                        key: Z,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(a, { span: 5 }, {
                            default: l(() => [
                              e(F, {
                                modelValue: R.prop,
                                "onUpdate:modelValue": (se) => R.prop = se,
                                options: v,
                                onChange: (se) => $(r)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(a, { span: 5 }, {
                            default: l(() => [
                              e(G, {
                                modelValue: R.value,
                                "onUpdate:modelValue": (se) => R.value = se,
                                onChange: (se) => $(r)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(a, { span: 2 }, {
                            default: l(() => [
                              e(A, {
                                variant: "text",
                                onClick: (se) => I(R, r)
                              }, {
                                default: l(() => [
                                  e(Y, { name: "delete" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ], 64)) : re("", !0),
                    e(U, { label: "字段名" }, {
                      default: l(() => [
                        e(F, {
                          modelValue: r.where.key,
                          "onUpdate:modelValue": (R) => r.where.key = R,
                          options: s.wsMsgFields,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 2
                    }, 1024),
                    e(U, { label: "条件" }, {
                      default: l(() => [
                        e(F, {
                          modelValue: r.where.comparison,
                          "onUpdate:modelValue": (R) => r.where.comparison = R,
                          options: W,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(U, { label: "值" }, {
                      default: l(() => [
                        e(G, {
                          modelValue: r.where.value,
                          "onUpdate:modelValue": (R) => r.where.value = R,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        }),
        e(b, {
          visible: N.value,
          "onUpdate:visible": y[2] || (y[2] = (r) => N.value = r),
          header: "选择图元",
          size: "40%",
          "on-confirm": C,
          "close-btn": !0
        }, {
          default: l(() => [
            j(h) ? (g(), E(_, {
              key: 0,
              gutter: 10,
              style: { height: "100%" }
            }, {
              default: l(() => [
                e(a, {
                  span: 4,
                  style: { height: "100%" }
                }, {
                  default: l(() => [
                    e(ne, { "label-align": "top" }, {
                      default: l(() => [
                        e(U, {
                          label: "电路元件",
                          name: "name"
                        }, {
                          default: l(() => [
                            e(F, {
                              modelValue: j(h).tags,
                              "onUpdate:modelValue": y[0] || (y[0] = (r) => j(h).tags = r),
                              options: j(oe),
                              placeholder: "按标签选择",
                              multiple: "",
                              minCollapsedNum: 10,
                              clearable: ""
                            }, null, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        e(U, {
                          label: "图元标签",
                          name: "tag"
                        }, {
                          default: l(() => [
                            e(G, {
                              modelValue: j(h)._tag,
                              "onUpdate:modelValue": y[1] || (y[1] = (r) => j(h)._tag = r),
                              placeholder: "输入自定义的标签进行查询，不做保存",
                              clearable: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        e(U, null, {
                          default: l(() => [
                            e(A, {
                              block: "",
                              onClick: z
                            }, {
                              default: l(() => y[7] || (y[7] = [
                                J("查询")
                              ])),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        e(U, null, {
                          default: l(() => [
                            e(M, { content: "符合条件的图元数量大时，会出现卡顿" }, {
                              default: l(() => [
                                e(A, {
                                  block: "",
                                  theme: "warning",
                                  onClick: K
                                }, {
                                  default: l(() => y[8] || (y[8] = [
                                    J("选中图元")
                                  ])),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e(a, {
                  span: 7,
                  style: { height: "100%" }
                }, {
                  default: l(() => [
                    j(h) ? (g(), E(L, {
                      key: 0,
                      class: "meta-table",
                      "row-key": "id",
                      columns: B,
                      data: j(u).value,
                      "selected-row-keys": j(h).ids,
                      scroll: { type: "virtual", rowHeight: 48, bufferSize: 30 },
                      style: { height: "100%" },
                      onSelectChange: ee
                    }, null, 8, ["data", "selected-row-keys"])) : re("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : re("", !0)
          ]),
          _: 1
        }, 8, ["visible"])
      ], 64);
    };
  }
}), ht = { class: "props-panel" }, yt = { class: "props-panel" }, Vt = /* @__PURE__ */ pe({
  __name: "FileProps",
  setup(s) {
    const m = Ie({
      name: "",
      background: void 0,
      color: void 0,
      lineCross: !1,
      wsUrl: "",
      busName: "",
      msgTypes: [],
      backgroundImage: "",
      grid: !1,
      gridSize: 10,
      gridRotate: void 0,
      gridColor: void 0,
      rule: !0,
      ruleColor: void 0,
      wsMsgFields: [],
      wsMsgHandlers: []
    }), S = Ie({
      grid: !1,
      gridSize: 10,
      gridRotate: void 0,
      gridColor: void 0,
      rule: !0
    }), t = [
      {
        label: "图纸",
        value: 1,
        slot: "pen-props"
      },
      {
        label: "结构",
        value: 2,
        slot: "struct-props"
      },
      {
        label: "通信",
        value: 3,
        slot: "comm-props"
      }
    ];
    Ce(() => {
      const T = meta2d.data();
      m.name = T.name || "", m.background = T.background, m.color = T.color, m.lineCross = T.lineCross, m.backgroundImage = T.backgroundImage, m.grid = T.grid, m.gridSize = T.gridSize, m.gridRotate = T.gridRotate, m.gridColor = T.gridColor, m.rule = T.rule, m.ruleColor = T.ruleColor, m.bkImage = T.bkImage, m.wsUrl = T.wsUrl, m.busName = T.busName, m.msgTypes = T.msgTypes || [], m.onMessageJsCode = T.onMessageJsCode, m.wsMsgFields = T.wsMsgFields || [], m.wsMsgHandlers = T.wsMsgHandlers || [], Object.assign(S, meta2d.getOptions());
    });
    const k = (T) => {
      m.lineCross ? it(!0) : mt(), Object.assign(meta2d.store.data, m), meta2d.store.patchFlagsBackground = !0, meta2d.setGrid({
        grid: m.grid,
        gridSize: m.gridSize,
        gridRotate: m.gridRotate,
        gridColor: m.gridColor
      }), meta2d.setRule({
        rule: m.rule,
        ruleColor: m.ruleColor
      }), T == "bkImage" && meta2d.setBackgroundImage(m.bkImage), meta2d.render();
    }, x = le(), { uploadValue: n, sizeLimit: w, headers: i } = Fe(), v = (T) => {
      var C;
      console.log("upload success: ", T), T.response && (m.bkImage = T.response.url || ((C = T.response.data) == null ? void 0 : C.fileurl), k("bkImage"));
    }, p = (T) => {
      console.log("upload fail: ", T);
    }, f = (T) => {
      const C = m[T];
      if (T == "wsUrl" && !(C != null && C.startsWith("ws://"))) {
        m[T] = "";
        return;
      }
      Object.assign(meta2d.store.data, m);
    }, { resolver: I } = kl(m), $ = () => {
      const T = m.msgTypes.map((B) => Number(B)).filter((B) => !isNaN(B)), C = xl.getInstance(m.wsUrl, {
        busName: m.busName,
        msgTypes: T,
        enableLog: !1,
        onReady: () => {
          console.log("%c连接成功！", "color: green; font-weight: bold;"), ll.success({
            title: "连接成功！"
          });
        }
      });
      C.connect();
      const u = m.onMessageJsCode;
      C.subscribe(m.busName, T, (B) => {
        try {
          u ? new Function("data", u)(B) : I(B);
        } catch (z) {
          console.log("error: ", z);
        }
      });
    }, O = le(), W = () => {
      O.value && O.value.open(m.onMessageJsCode);
    }, N = (T) => {
      m.onMessageJsCode = T, f("onMessageJsCode");
    }, d = () => {
      m.wsMsgFields.push({
        label: "",
        value: ""
      });
    }, h = (T) => {
      m.wsMsgFields.splice(T, 1);
    }, H = () => {
      f("wsMsgFields");
    }, oe = (T) => {
      console.log("handlers: ", T), m.wsMsgHandlers = T, f("wsMsgHandlers");
    };
    return (T, C) => {
      const u = c("t-input"), B = c("t-form-item"), z = c("t-divider"), ee = c("t-switch"), K = c("t-input-number"), P = c("t-color-picker"), y = c("t-upload"), A = c("t-tooltip"), F = c("t-form"), U = c("t-tag-input"), a = c("t-button"), Y = c("t-space"), _ = c("t-collapse-panel"), G = c("t-icon"), ne = c("t-col"), te = c("t-row"), fe = c("t-collapse");
      return g(), D("div", null, [
        e(Te, { tabs: t }, {
          "pen-props": l(() => [
            V("div", ht, [
              e(F, { "label-align": "left" }, {
                default: l(() => [
                  e(B, {
                    label: "名称",
                    name: "name"
                  }, {
                    default: l(() => [
                      e(u, {
                        modelValue: m.name,
                        "onUpdate:modelValue": C[0] || (C[0] = (M) => m.name = M),
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z),
                  e(B, {
                    label: "网格",
                    name: "grid"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: m.grid,
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => m.grid = M),
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "网格大小",
                    name: "gridSize"
                  }, {
                    default: l(() => [
                      e(K, {
                        modelValue: m.gridSize,
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => m.gridSize = M),
                        min: 0,
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "网格角度",
                    name: "gridRotate"
                  }, {
                    default: l(() => [
                      e(K, {
                        modelValue: m.gridRotate,
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => m.gridRotate = M),
                        modelModifiers: { number: !0 },
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "网格颜色",
                    name: "gridColor"
                  }, {
                    default: l(() => [
                      e(P, {
                        class: "w-full",
                        modelValue: m.gridColor,
                        "onUpdate:modelValue": C[4] || (C[4] = (M) => m.gridColor = M),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z),
                  e(B, {
                    label: "标尺",
                    name: "rule"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: m.rule,
                        "onUpdate:modelValue": C[5] || (C[5] = (M) => m.rule = M),
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "标尺颜色",
                    name: "ruleColor"
                  }, {
                    default: l(() => [
                      e(P, {
                        class: "w-full",
                        modelValue: m.ruleColor,
                        "onUpdate:modelValue": C[6] || (C[6] = (M) => m.ruleColor = M),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z),
                  e(B, {
                    label: "背景颜色",
                    name: "background"
                  }, {
                    default: l(() => [
                      e(P, {
                        class: "w-full",
                        modelValue: m.background,
                        "onUpdate:modelValue": C[7] || (C[7] = (M) => m.background = M),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "图元默认颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(P, {
                        class: "w-full",
                        modelValue: m.color,
                        "onUpdate:modelValue": C[8] || (C[8] = (M) => m.color = M),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        clearable: "",
                        "color-modes": ["monochrome"],
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, { label: "背景图片" }, {
                    default: l(() => [
                      e(y, {
                        ref_key: "uploadRef",
                        ref: x,
                        modelValue: j(n),
                        "onUpdate:modelValue": C[9] || (C[9] = (M) => we(n) ? n.value = M : null),
                        action: T.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: j(i),
                        name: "object",
                        sizeLimit: j(w),
                        theme: "image",
                        tips: "请选择单张小于1MB的图片上传",
                        accept: "image/*",
                        onFail: p,
                        onSuccess: v
                      }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "背景图片地址",
                    name: "bkImage"
                  }, {
                    default: l(() => [
                      e(u, {
                        modelValue: m.bkImage,
                        "onUpdate:modelValue": C[10] || (C[10] = (M) => m.bkImage = M),
                        clearable: "",
                        onChange: C[11] || (C[11] = (M) => k("bkImage"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(B, {
                    label: "连线相交弯曲",
                    name: "lineCross"
                  }, {
                    default: l(() => [
                      e(A, { content: "当直线或折线两两相交时，其中相交的交点会自动弯曲显示" }, {
                        default: l(() => [
                          e(ee, {
                            modelValue: m.lineCross,
                            "onUpdate:modelValue": C[12] || (C[12] = (M) => m.lineCross = M),
                            onChange: k
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          "struct-props": l(() => [
            Pe(T.$slots, "struct", {}, void 0, !0)
          ]),
          "comm-props": l(() => [
            V("div", yt, [
              e(fe, {
                defaultExpandAll: "",
                class: "meta-collapse"
              }, {
                default: l(() => [
                  e(_, {
                    value: "0",
                    header: "WebSocket"
                  }, {
                    default: l(() => [
                      e(F, {
                        data: m,
                        "label-align": "left",
                        size: "small",
                        labelWidth: "80px"
                      }, {
                        default: l(() => [
                          e(B, {
                            label: "地址",
                            name: "wsUrl"
                          }, {
                            default: l(() => [
                              e(u, {
                                modelValue: m.wsUrl,
                                "onUpdate:modelValue": C[13] || (C[13] = (M) => m.wsUrl = M),
                                clearable: "",
                                placeholder: "ws:// 开头，不符合则不保存",
                                onBlur: C[14] || (C[14] = (M) => f("wsUrl"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(B, {
                            label: "消息名称",
                            name: "busName"
                          }, {
                            default: l(() => [
                              e(u, {
                                modelValue: m.busName,
                                "onUpdate:modelValue": C[15] || (C[15] = (M) => m.busName = M),
                                clearable: "",
                                onChange: C[16] || (C[16] = (M) => f("busName"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(B, {
                            label: "消息类型",
                            name: "msgTypes"
                          }, {
                            default: l(() => [
                              e(U, {
                                modelValue: m.msgTypes,
                                "onUpdate:modelValue": C[17] || (C[17] = (M) => m.msgTypes = M),
                                clearable: "",
                                placeholder: "消息类型, 数字, 回车添加",
                                onChange: C[18] || (C[18] = (M) => f("msgTypes"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(z),
                          e(Y, null, {
                            default: l(() => [
                              e(a, { onClick: $ }, {
                                default: l(() => C[19] || (C[19] = [
                                  J("测试连接")
                                ])),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ]),
                    _: 1
                  }),
                  e(_, { header: "消息处理代码" }, {
                    default: l(() => [
                      e(a, {
                        block: "",
                        onClick: W
                      }, {
                        default: l(() => C[20] || (C[20] = [
                          J("编辑代码")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(_, { header: "消息状态字段" }, {
                    headerRightContent: l(() => [
                      e(A, {
                        content: "用于消息处理器的触发条件",
                        placement: "top-right"
                      }, {
                        default: l(() => [
                          e(a, { variant: "text" }, {
                            default: l(() => [
                              e(G, { name: "help" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    default: l(() => [
                      e(a, {
                        block: "",
                        onClick: d
                      }, {
                        default: l(() => C[21] || (C[21] = [
                          J("新增")
                        ])),
                        _: 1
                      }),
                      C[22] || (C[22] = V("br", null, null, -1)),
                      (g(!0), D(X, null, ae(m.wsMsgFields, (M, L) => (g(), E(te, {
                        key: L,
                        justify: "start",
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(ne, { span: 10 }, {
                            default: l(() => [
                              e(u, {
                                modelValue: M.value,
                                "onUpdate:modelValue": (b) => M.value = b,
                                onChange: H
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024),
                          e(ne, { span: 2 }, {
                            default: l(() => [
                              e(a, {
                                variant: "text",
                                onClick: (b) => h(L)
                              }, {
                                default: l(() => [
                                  e(G, { name: "delete" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 1
                  }),
                  e(_, { header: "消息处理队列" }, {
                    headerRightContent: l(() => [
                      e(A, {
                        content: "【消息处理代码】存在时，此处的设置无效",
                        placement: "top-right"
                      }, {
                        default: l(() => [
                          e(a, { variant: "text" }, {
                            default: l(() => [
                              e(G, { name: "help" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    default: l(() => [
                      e(wt, {
                        wsMsgFields: m.wsMsgFields,
                        wsMsgHandlers: m.wsMsgHandlers,
                        onChange: oe
                      }, null, 8, ["wsMsgFields", "wsMsgHandlers"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 3
        }),
        e(bt, {
          ref_key: "codeEditor",
          ref: O,
          onConfirm: N
        }, null, 512)
      ]);
    };
  }
}), Ct = /* @__PURE__ */ ce(Vt, [["__scopeId", "data-v-8604542d"]]), xt = [
  { x: -10, duration: 100 },
  { x: 10, duration: 80 },
  { x: -10, duration: 50 },
  { x: 10, duration: 30 },
  { x: 0, duration: 300 }
], kt = [
  { y: -10, duration: 100 },
  { y: 10, duration: 80 },
  { y: -10, duration: 50 },
  { y: 10, duration: 30 },
  { y: 0, duration: 300 }
], St = [
  {
    duration: 100,
    rotate: -10
  },
  {
    duration: 100,
    rotate: 10
  },
  {
    duration: 100,
    rotate: 0
  }
], $t = [
  {
    duration: 100,
    scale: 0.8
  },
  {
    duration: 400,
    scale: 1
  },
  {
    duration: 100,
    scale: 1.2
  }
], Ut = [
  {
    duration: 1e3,
    rotate: 360
  }
], _t = [
  {
    duration: 1e3,
    rotate: -360
  }
], At = [
  //   {
  //     duration: 1000,
  //     progress: 0.5,
  //   },
  {
    duration: 2e3,
    progress: 1
  }
], Lt = [
  {
    duration: 1e3,
    color: "green"
  },
  {
    duration: 2e3,
    color: "red"
  }
], sl = [
  {
    label: "上下跳动",
    value: "moveYFrames"
  },
  {
    label: "左右跳动",
    value: "moveXFrames"
  },
  {
    label: "心跳",
    value: "scaleFrames"
  },
  {
    label: "摇摆",
    value: "rotateXFrames"
  },
  {
    label: "旋转",
    value: "rotateFrames"
  },
  {
    label: "反向旋转",
    value: "rotateFrames2"
  },
  {
    label: "进度",
    value: "processFrames"
  },
  {
    label: "自定义",
    value: "x-custom"
  }
], il = [
  {
    label: "水流",
    value: 0
  },
  {
    label: "水珠滚动",
    value: 1
  },
  {
    label: "圆点",
    value: 2
  },
  {
    label: "箭头",
    value: 3
  },
  {
    label: "水滴",
    value: 4
  }
], rl = {
  moveXFrames: xt,
  moveYFrames: kt,
  rotateXFrames: St,
  scaleFrames: $t,
  processFrames: At,
  colorFrames: Lt,
  rotateFrames: Ut,
  rotateFrames2: _t
}, It = { class: "props-panel__editor" }, Pt = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, Ot = /* @__PURE__ */ pe({
  __name: "PropEditor",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    statusList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["propChange"],
  setup(s, { emit: m }) {
    const S = m, t = (x) => {
      S("propChange", x);
    }, k = (x) => {
      S("propChange", x);
    };
    return (x, n) => {
      const w = c("t-input-number"), i = c("t-form-item"), v = c("t-color-picker"), p = c("t-option"), f = c("t-select"), I = c("t-slider"), $ = c("t-divider"), O = c("t-switch"), W = c("t-input"), N = c("t-form");
      return g(), D("div", It, [
        e(N, { "label-align": "left" }, {
          default: l(() => [
            e(i, {
              label: "时长(ms)",
              name: "duration"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.duration,
                  "onUpdate:modelValue": n[0] || (n[0] = (d) => s.data.duration = d),
                  min: 0,
                  onChange: n[1] || (n[1] = (d) => t("duration"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "颜色",
              name: "color"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.color,
                  "onUpdate:modelValue": n[2] || (n[2] = (d) => s.data.color = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[3] || (n[3] = (d) => t("color"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "浮动颜色",
              name: "hoverColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.hoverColor,
                  "onUpdate:modelValue": n[4] || (n[4] = (d) => s.data.hoverColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[5] || (n[5] = (d) => t("hoverColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "选中颜色",
              name: "activeColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.activeColor,
                  "onUpdate:modelValue": n[6] || (n[6] = (d) => s.data.activeColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[7] || (n[7] = (d) => t("activeColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "背景",
              name: "background"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.background,
                  "onUpdate:modelValue": n[8] || (n[8] = (d) => s.data.background = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[9] || (n[9] = (d) => t("background"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "线条",
              name: "dash"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.dash,
                  "onUpdate:modelValue": n[10] || (n[10] = (d) => s.data.dash = d),
                  onChange: n[11] || (n[11] = (d) => t("dash"))
                }, {
                  default: l(() => [
                    (g(), E(p, {
                      key: 0,
                      value: 0,
                      label: "实线"
                    })),
                    (g(), E(p, {
                      key: 1,
                      value: 1,
                      label: "虚线"
                    }))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "线条宽度",
              name: "lineWidth"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.lineWidth,
                  "onUpdate:modelValue": n[12] || (n[12] = (d) => s.data.lineWidth = d),
                  onChange: n[13] || (n[13] = (d) => t("lineWidth"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "圆角",
              name: "borderRadius"
            }, {
              default: l(() => [
                e(w, {
                  min: 0,
                  max: 1,
                  step: 0.01,
                  modelValue: s.data.borderRadius,
                  "onUpdate:modelValue": n[14] || (n[14] = (d) => s.data.borderRadius = d),
                  onChange: n[15] || (n[15] = (d) => t("borderRadius"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "不透明度",
              name: "globalAlpha"
            }, {
              default: l(() => [
                e(I, {
                  modelValue: s.data.globalAlpha,
                  "onUpdate:modelValue": n[16] || (n[16] = (d) => s.data.globalAlpha = d),
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: n[17] || (n[17] = (d) => t("globalAlpha"))
                }, null, 8, ["modelValue"]),
                V("span", Pt, ve(s.data.globalAlpha), 1)
              ]),
              _: 1
            }),
            e(i, {
              label: "阴影颜色",
              name: "shadowColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.shadowColor,
                  "onUpdate:modelValue": n[18] || (n[18] = (d) => s.data.shadowColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[19] || (n[19] = (d) => t("shadowColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "阴影模糊",
              name: "shadowBlur"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.shadowBlur,
                  "onUpdate:modelValue": n[20] || (n[20] = (d) => s.data.shadowBlur = d),
                  min: 0,
                  onChange: n[21] || (n[21] = (d) => t("shadowBlur"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "阴影X偏移",
              name: "shadowOffsetX"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.shadowOffsetX,
                  "onUpdate:modelValue": n[22] || (n[22] = (d) => s.data.shadowOffsetX = d),
                  onChange: n[23] || (n[23] = (d) => t("shadowOffsetX"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "阴影Y偏移",
              name: "shadowOffsetY"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.shadowOffsetY,
                  "onUpdate:modelValue": n[24] || (n[24] = (d) => s.data.shadowOffsetY = d),
                  onChange: n[25] || (n[25] = (d) => t("shadowOffsetY"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e($),
            e(i, {
              label: "文字阴影",
              name: "textHasShadow"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.textHasShadow,
                  "onUpdate:modelValue": n[26] || (n[26] = (d) => s.data.textHasShadow = d),
                  onChange: n[27] || (n[27] = (d) => t("textHasShadow"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "文本",
              name: "text"
            }, {
              default: l(() => [
                e(W, {
                  modelValue: s.data.text,
                  "onUpdate:modelValue": n[28] || (n[28] = (d) => s.data.text = d),
                  clearable: "",
                  onChange: n[29] || (n[29] = (d) => t("text"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "字体",
              name: "fontSize"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.fontSize,
                  "onUpdate:modelValue": n[30] || (n[30] = (d) => s.data.fontSize = d),
                  onChange: n[31] || (n[31] = (d) => t("fontSize"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "文字颜色类型",
              name: "textType"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.textType,
                  "onUpdate:modelValue": n[32] || (n[32] = (d) => s.data.textType = d),
                  onChange: n[33] || (n[33] = (d) => t("textType"))
                }, {
                  default: l(() => [
                    e(p, {
                      key: "hex",
                      value: 0,
                      label: "纯色"
                    }),
                    e(p, {
                      key: "rgb",
                      value: 1,
                      label: "线性渐变"
                    }),
                    e(p, {
                      key: "rgba",
                      value: 2,
                      label: "径向渐变"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            [1, 2].includes(s.data.textType) ? (g(), E(i, {
              key: 0,
              label: "文字渐变",
              name: "textGradientColors"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.textGradientColors,
                  "onUpdate:modelValue": n[34] || (n[34] = (d) => s.data.textGradientColors = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["linear-gradient"],
                  clearable: "",
                  onChange: n[35] || (n[35] = (d) => t("textGradientColors"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (g(), E(i, {
              key: 1,
              label: "文字颜色",
              name: "textColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.textColor,
                  "onUpdate:modelValue": n[36] || (n[36] = (d) => s.data.textColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[37] || (n[37] = (d) => t("textColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })),
            e(i, {
              label: "文本风格",
              name: "fontStyle"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.fontStyle,
                  "onUpdate:modelValue": n[38] || (n[38] = (d) => s.data.fontStyle = d),
                  onChange: n[39] || (n[39] = (d) => t("fontStyle"))
                }, {
                  default: l(() => [
                    e(p, {
                      key: "normal",
                      value: "normal",
                      label: "常规"
                    }),
                    e(p, {
                      key: "italic",
                      value: "italic",
                      label: "斜体"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "文本粗细",
              name: "fontWeight"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.fontWeight,
                  "onUpdate:modelValue": n[40] || (n[40] = (d) => s.data.fontWeight = d),
                  onChange: n[41] || (n[41] = (d) => t("fontWeight"))
                }, {
                  default: l(() => [
                    e(p, {
                      key: "normal",
                      value: "normal",
                      label: "常规"
                    }),
                    e(p, {
                      key: "bold",
                      value: "bold",
                      label: "加粗"
                    }),
                    e(p, {
                      key: "lighter",
                      value: "lighter",
                      label: "更细"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "换行",
              name: "whiteSpace"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.whiteSpace,
                  "onUpdate:modelValue": n[42] || (n[42] = (d) => s.data.whiteSpace = d),
                  onChange: n[43] || (n[43] = (d) => t("whiteSpace"))
                }, {
                  default: l(() => [
                    e(p, {
                      key: "normal",
                      value: "normal",
                      label: "常规"
                    }),
                    e(p, {
                      key: "nowrap",
                      value: "nowrap",
                      label: "不换行"
                    }),
                    e(p, {
                      key: "pre-line",
                      value: "pre-line",
                      label: "换行符换行"
                    }),
                    e(p, {
                      key: "break-all",
                      value: "break-all",
                      label: "永远换行"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "超出省略",
              name: "ellipsis"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.ellipsis,
                  "onUpdate:modelValue": n[44] || (n[44] = (d) => s.data.ellipsis = d),
                  onChange: n[45] || (n[45] = (d) => t("ellipsis"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "下划线",
              name: "textDecoration"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.textDecoration,
                  "onUpdate:modelValue": n[46] || (n[46] = (d) => s.data.textDecoration = d),
                  onChange: n[47] || (n[47] = (d) => t("textDecoration"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "下划线颜色",
              name: "textDecorationColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.textDecorationColor,
                  "onUpdate:modelValue": n[48] || (n[48] = (d) => s.data.textDecorationColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[49] || (n[49] = (d) => t("textDecorationColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "删除线",
              name: "textStrickout"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.textStrickout,
                  "onUpdate:modelValue": n[50] || (n[50] = (d) => s.data.textStrickout = d),
                  onChange: n[51] || (n[51] = (d) => t("textStrickout"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "删除线颜色",
              name: "textStrickoutColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.textStrickoutColor,
                  "onUpdate:modelValue": n[52] || (n[52] = (d) => s.data.textStrickoutColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[53] || (n[53] = (d) => t("textStrickoutColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "文字水平对齐",
              name: "textAlign"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.textAlign,
                  "onUpdate:modelValue": n[54] || (n[54] = (d) => s.data.textAlign = d),
                  onChange: n[55] || (n[55] = (d) => t("textAlign"))
                }, {
                  default: l(() => [
                    e(p, {
                      key: "left",
                      value: "left",
                      label: "左对齐"
                    }),
                    e(p, {
                      key: "center",
                      value: "center",
                      label: "居中"
                    }),
                    e(p, {
                      key: "right",
                      value: "right",
                      label: "右对齐"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "文字垂直对齐",
              name: "textBaseline"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.textBaseline,
                  "onUpdate:modelValue": n[56] || (n[56] = (d) => s.data.textBaseline = d),
                  onChange: n[57] || (n[57] = (d) => t("textBaseline"))
                }, {
                  default: l(() => [
                    e(p, {
                      key: "top",
                      value: "top",
                      label: "顶部对齐"
                    }),
                    e(p, {
                      key: "middle",
                      value: "middle",
                      label: "居中"
                    }),
                    e(p, {
                      key: "bottom",
                      value: "bottom",
                      label: "底部对齐"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e($),
            e(i, {
              label: "宽",
              name: "width"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.width,
                  "onUpdate:modelValue": n[58] || (n[58] = (d) => s.data.width = d),
                  onChange: n[59] || (n[59] = (d) => k("width"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "高",
              name: "height"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.height,
                  "onUpdate:modelValue": n[60] || (n[60] = (d) => s.data.height = d),
                  onChange: n[61] || (n[61] = (d) => k("height"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "旋转角度",
              name: "rotate"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.rotate,
                  "onUpdate:modelValue": n[62] || (n[62] = (d) => s.data.rotate = d),
                  onChange: n[63] || (n[63] = (d) => t("rotate"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e($),
            e(i, {
              label: "进度",
              name: "progress"
            }, {
              default: l(() => [
                e(w, {
                  modelValue: s.data.progress,
                  "onUpdate:modelValue": n[64] || (n[64] = (d) => s.data.progress = d),
                  step: 0.1,
                  min: 0,
                  max: 1,
                  onChange: n[65] || (n[65] = (d) => t("progress"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "进度颜色",
              name: "progressColor"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.progressColor,
                  "onUpdate:modelValue": n[66] || (n[66] = (d) => s.data.progressColor = d),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: n[67] || (n[67] = (d) => t("progressColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "渐变颜色",
              name: "progressGradientColors"
            }, {
              default: l(() => [
                e(v, {
                  class: "w-full",
                  modelValue: s.data.progressGradientColors,
                  "onUpdate:modelValue": n[68] || (n[68] = (d) => s.data.progressGradientColors = d),
                  "show-primary-color-preview": !1,
                  clearable: "",
                  format: "CSS",
                  "color-modes": ["linear-gradient"],
                  onChange: n[69] || (n[69] = (d) => t("progressGradientColors"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "垂直进度",
              name: "verticalProgress"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.verticalProgress,
                  "onUpdate:modelValue": n[70] || (n[70] = (d) => s.data.verticalProgress = d),
                  onChange: n[71] || (n[71] = (d) => t("verticalProgress"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "反向进度",
              name: "reverseProgress"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.reverseProgress,
                  "onUpdate:modelValue": n[72] || (n[72] = (d) => s.data.reverseProgress = d),
                  onChange: n[73] || (n[73] = (d) => t("reverseProgress"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "水平翻转",
              name: "flipX"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.flipX,
                  "onUpdate:modelValue": n[74] || (n[74] = (d) => s.data.flipX = d),
                  onChange: n[75] || (n[75] = (d) => t("flipX"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(i, {
              label: "垂直翻转",
              name: "flipY"
            }, {
              default: l(() => [
                e(O, {
                  modelValue: s.data.flipY,
                  "onUpdate:modelValue": n[76] || (n[76] = (d) => s.data.flipY = d),
                  onChange: n[77] || (n[77] = (d) => t("flipY"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e($),
            s.data.penName == "combine" ? (g(), E(i, {
              key: 2,
              label: "状态",
              name: "status"
            }, {
              default: l(() => [
                e(f, {
                  modelValue: s.data.showChild,
                  "onUpdate:modelValue": n[78] || (n[78] = (d) => s.data.showChild = d),
                  onChange: n[79] || (n[79] = (d) => t("showChild"))
                }, {
                  default: l(() => [
                    (g(!0), D(X, null, ae(s.statusList, (d, h) => (g(), E(p, {
                      key: d.value,
                      value: h,
                      label: d.label
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })) : re("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}), ul = /* @__PURE__ */ ce(Ot, [["__scopeId", "data-v-af6e329a"]]), Tt = /* @__PURE__ */ pe({
  __name: "EventEditor",
  props: {
    defaultEventsValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["change"],
  setup(s, { emit: m }) {
    const t = le(
      s.defaultEventsValue
    ), k = [
      {
        label: "单击",
        value: "click"
      },
      {
        label: "双击",
        value: "dblclick"
      },
      {
        label: "鼠标按下",
        value: "mousedown"
      },
      {
        label: "鼠标抬起",
        value: "mouseup"
      },
      {
        label: "鼠标进入",
        value: "enter"
      },
      {
        label: "鼠标离开",
        value: "leave"
      }
      //   {
      //     label: "选中",
      //     value: "active",
      //   },
      //   {
      //     label: "取消选中",
      //     value: "inactive",
      //   },
    ], x = [
      {
        label: "打开链接",
        value: ue.Link
      },
      {
        label: "更改属性",
        value: ue.SetProps
      },
      {
        label: "执行动画",
        value: ue.StartAnimate
      },
      {
        label: "暂停动画",
        value: ue.PauseAnimate
      },
      {
        label: "停止动画",
        value: ue.StopAnimate
      }
      //   {
      //     label: "执行JS代码",
      //     value: EventAction.JS,
      //   },
      //   {
      //     label: "执行全局函数",
      //     value: EventAction.GlobalFn,
      //   },
      //   {
      //     label: "发送消息",
      //     value: EventAction.Emit,
      //   },
      //   {
      //     label: "播放视频",
      //     value: EventAction.StartVideo,
      //   },
      //   {
      //     label: "暂停视频",
      //     value: EventAction.PauseVideo,
      //   },
      //   {
      //     label: "停止视频",
      //     value: EventAction.StopVideo,
      //   },
      //   {
      //     label: "发送图元数据",
      //     value: EventAction.SendPropData,
      //   },
      //   {
      //     label: "发送绑定变量",
      //     value: EventAction.SendVarData,
      //   },
    ], n = () => {
      t.value.push({
        name: "",
        action: 0,
        value: "",
        params: "",
        where: {}
      });
    }, w = (N) => {
      t.value = t.value.filter((d) => d !== N);
    }, i = m, v = () => {
      i("change", t.value);
    }, p = [
      {
        label: "背景颜色",
        value: "background"
      },
      {
        label: "颜色",
        value: "color"
      },
      {
        label: "文字",
        value: "text"
      },
      {
        label: "进度",
        value: "progress"
      },
      {
        label: "显示",
        value: "visible"
      },
      {
        label: "状态",
        value: "showChild"
      }
    ], f = le([]), I = () => {
      if (f.value.length >= 6) {
        Oe.warning("最多只能添加6个属性");
        return;
      }
      f.value.push({
        prop: "",
        value: ""
      });
    }, $ = (N) => {
      const d = f.value.indexOf(N);
      f.value.splice(d, 1);
    }, O = (N) => {
      const d = {};
      f.value.forEach((h) => {
        d[h.prop] = h.value;
      }), N.value = d, i("change", t.value);
    }, W = (N) => {
      const d = t.value[Number(N)];
      d.value && typeof d.value == "object" && (f.value = Object.keys(d.value).map((h) => ({
        prop: h,
        value: d.value[h]
      })));
    };
    return (N, d) => {
      const h = c("t-button"), H = c("t-select"), oe = c("t-form-item"), T = c("t-input"), C = c("t-col"), u = c("t-icon"), B = c("t-row"), z = c("t-form"), ee = c("t-collapse-panel"), K = c("t-collapse");
      return g(), D(X, null, [
        d[3] || (d[3] = V("br", null, null, -1)),
        e(h, {
          block: "",
          theme: "primary",
          onClick: n
        }, {
          default: l(() => d[0] || (d[0] = [
            J("添加事件")
          ])),
          _: 1
        }),
        e(K, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: W
        }, {
          default: l(() => [
            (g(!0), D(X, null, ae(t.value, (P) => (g(), E(ee, { header: "事件" }, {
              headerRightContent: l(() => [
                e(h, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (y) => w(P)
                }, {
                  default: l(() => [
                    e(u, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(z, { labelAlign: "left" }, {
                  default: l(() => [
                    e(oe, { label: "事件类型" }, {
                      default: l(() => [
                        e(H, {
                          modelValue: P.name,
                          "onUpdate:modelValue": (y) => P.name = y,
                          options: k,
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(oe, { label: "事件行为" }, {
                      default: l(() => [
                        e(H, {
                          modelValue: P.action,
                          "onUpdate:modelValue": (y) => P.action = y,
                          options: x,
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    P.action === j(ue).Link ? (g(), E(oe, {
                      key: 0,
                      label: "链接地址"
                    }, {
                      default: l(() => [
                        e(T, {
                          modelValue: P.value,
                          "onUpdate:modelValue": (y) => P.value = y,
                          clearable: "",
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : re("", !0),
                    P.action === j(ue).SetProps ? (g(), D(X, { key: 1 }, [
                      e(oe, { label: "目标" }, {
                        default: l(() => [
                          e(T, {
                            modelValue: P.params,
                            "onUpdate:modelValue": (y) => P.params = y,
                            placeholder: "可输入目标图元的ID/Tag",
                            clearable: "",
                            onChange: v
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      e(B, { justify: "start" }, {
                        default: l(() => [
                          e(C, { span: 5 }, {
                            default: l(() => d[1] || (d[1] = [
                              V("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(C, { span: 5 }, {
                            default: l(() => d[2] || (d[2] = [
                              V("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(C, { span: 2 }, {
                            default: l(() => [
                              e(h, {
                                variant: "text",
                                onClick: I
                              }, {
                                default: l(() => [
                                  e(u, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (g(!0), D(X, null, ae(f.value, (y, A) => (g(), E(B, {
                        key: A,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(C, { span: 5 }, {
                            default: l(() => [
                              e(H, {
                                modelValue: y.prop,
                                "onUpdate:modelValue": (F) => y.prop = F,
                                options: p,
                                onChange: (F) => O(P)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(C, { span: 5 }, {
                            default: l(() => [
                              e(T, {
                                modelValue: y.value,
                                "onUpdate:modelValue": (F) => y.value = F,
                                onChange: (F) => O(P)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(C, { span: 2 }, {
                            default: l(() => [
                              e(h, {
                                variant: "text",
                                onClick: (F) => $(y)
                              }, {
                                default: l(() => [
                                  e(u, { name: "delete" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ], 64)) : re("", !0),
                    [
                      j(ue).PauseAnimate,
                      j(ue).StopAnimate,
                      j(ue).StartAnimate
                    ].includes(P.action) ? (g(), E(oe, {
                      key: 2,
                      label: "目标"
                    }, {
                      default: l(() => [
                        e(T, {
                          modelValue: P.value,
                          "onUpdate:modelValue": (y) => P.value = y,
                          placeholder: "可输入目标图元的ID/Tag",
                          clearable: "",
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : re("", !0)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024))), 256))
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), Rt = { class: "" }, Nt = { class: "props-panel" }, Dt = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, Et = { class: "props-panel" }, Ft = { class: "props-panel" }, Mt = { class: "props-panel" }, zt = /* @__PURE__ */ pe({
  __name: "PenProps",
  setup(s) {
    const m = ge(() => [
      {
        label: "图元",
        value: 1,
        slot: "pen"
      },
      {
        label: "图片",
        value: 2,
        slot: "image"
      },
      {
        label: "动效",
        value: 3,
        slot: "animate"
      },
      {
        label: "结构",
        value: 4,
        slot: "struct"
      },
      {
        label: "数据",
        value: 5,
        slot: "data"
      },
      {
        label: "事件",
        value: 6,
        slot: "event"
      }
    ].filter((U) => U.slot == "image" ? t.value.name == U.slot : !0)), { selections: S } = Me(), t = le(), k = le(), x = le(1), n = ge(() => {
      var U;
      return ((U = t.value) == null ? void 0 : U.name) == "line";
    });
    Ce(() => {
      x.value = 1, w();
    });
    const w = () => {
      t.value = S.pen || {}, t.value.globalAlpha == null && (t.value.globalAlpha = 1), t.value.tags || (t.value.tags = []), k.value = meta2d.getPenRect(t.value), x.value == 2 && (["image"].includes(t.value.name) || (x.value = 1));
    }, i = ge(() => {
      var U;
      return ((U = t.value) == null ? void 0 : U.name) != "combine" ? [] : t.value.children.map((a, Y) => ({
        label: `状态${Y + 1}`,
        value: a
      }));
    }), v = (U = !1) => {
      U ? meta2d.startAnimate(t.value.id) : meta2d.stopAnimate(t.value.id);
    }, p = le(!1), f = le([]), I = () => {
      f.value = Ve(t.value.frames || []), p.value = !0;
    }, $ = () => {
      console.log("custom frames: ", f.value), t.value.frames = Ve(f.value), p.value = !1, Qe(() => {
        f.value = [];
      });
    }, O = () => {
      f.value.push({
        duration: 100,
        globalAlpha: 1,
        penName: t.value.name
      });
    }, W = (U) => {
      const a = f.value.indexOf(U);
      a > -1 && f.value.splice(a, 1);
    }, N = Ze(() => {
      var U;
      return (U = S.pen) == null ? void 0 : U.id;
    }, w), d = [void 0, [5, 5]], h = (U) => {
      const a = { id: t.value.id };
      if (a[U] = t.value[U], U === "dash" && (a.lineDash = d[a[U]]), U == "animateType") {
        console.log("animate type: ", a);
        const Y = a.animateType, _ = rl[Y];
        a.frames = _;
      }
      meta2d.setValue(a, { render: !0 });
    }, H = (U) => {
      const a = { id: t.value.id };
      a[U] = k.value[U], meta2d.setValue(a, { render: !0 });
    }, oe = () => {
      meta2d.top(), meta2d.render();
    }, T = () => {
      meta2d.bottom(), meta2d.render();
    }, C = () => {
      meta2d.up(), meta2d.render();
    }, u = () => {
      meta2d.down(), meta2d.render();
    };
    Ee(() => {
      N();
    });
    const B = le(), { uploadValue: z, sizeLimit: ee, headers: K } = Fe(), P = (U) => {
      var a;
      console.log("upload success: ", U), U.response && (t.value.image = U.response.url || ((a = U.response.data) == null ? void 0 : a.fileurl), h("image"));
    }, y = (U) => {
      console.log("upload fail: ", U);
    }, A = () => {
      Sl(t.value.id).then((U) => {
        console.log("copy id: ", U), Oe.success({ content: "复制成功" });
      });
    }, F = (U) => {
      t.value.events = U;
    };
    return (U, a) => {
      const Y = c("t-color-picker"), _ = c("t-form-item"), G = c("t-option"), ne = c("t-select"), te = c("t-input-number"), fe = c("t-slider"), M = c("t-divider"), L = c("t-switch"), b = c("t-input"), r = c("t-button"), q = c("t-space"), R = c("t-form"), Z = c("t-upload"), se = c("t-tag"), me = c("t-icon"), Q = c("t-tag-input"), ie = c("t-collapse-panel"), Ue = c("t-collapse"), ml = c("t-drawer");
      return g(), D("div", Rt, [
        t.value ? (g(), E(Te, {
          key: 0,
          tabs: m.value,
          defaultValue: x.value
        }, gl({
          pen: l(() => [
            V("div", Nt, [
              e(R, { "label-align": "left" }, {
                default: l(() => [
                  e(_, {
                    label: "颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.color,
                        "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value.color = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[1] || (a[1] = (o) => h("color"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "浮动颜色",
                    name: "hoverColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.hoverColor,
                        "onUpdate:modelValue": a[2] || (a[2] = (o) => t.value.hoverColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[3] || (a[3] = (o) => h("hoverColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "选中颜色",
                    name: "activeColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.activeColor,
                        "onUpdate:modelValue": a[4] || (a[4] = (o) => t.value.activeColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[5] || (a[5] = (o) => h("activeColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "背景",
                    name: "background"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.background,
                        "onUpdate:modelValue": a[6] || (a[6] = (o) => t.value.background = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[7] || (a[7] = (o) => h("background"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "线条",
                    name: "dash"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.dash,
                        "onUpdate:modelValue": a[8] || (a[8] = (o) => t.value.dash = o),
                        onChange: a[9] || (a[9] = (o) => h("dash"))
                      }, {
                        default: l(() => [
                          (g(), E(G, {
                            key: 0,
                            value: 0,
                            label: "实线"
                          })),
                          (g(), E(G, {
                            key: 1,
                            value: 1,
                            label: "虚线"
                          }))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "线条宽度",
                    name: "lineWidth"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.lineWidth,
                        "onUpdate:modelValue": a[10] || (a[10] = (o) => t.value.lineWidth = o),
                        onChange: a[11] || (a[11] = (o) => h("lineWidth"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "圆角",
                    name: "borderRadius"
                  }, {
                    default: l(() => [
                      e(te, {
                        min: 0,
                        max: 1,
                        step: 0.01,
                        modelValue: t.value.borderRadius,
                        "onUpdate:modelValue": a[12] || (a[12] = (o) => t.value.borderRadius = o),
                        onChange: a[13] || (a[13] = (o) => h("borderRadius"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "不透明度",
                    name: "globalAlpha"
                  }, {
                    default: l(() => [
                      e(fe, {
                        modelValue: t.value.globalAlpha,
                        "onUpdate:modelValue": a[14] || (a[14] = (o) => t.value.globalAlpha = o),
                        min: 0,
                        max: 1,
                        step: 0.01,
                        onChange: a[15] || (a[15] = (o) => h("globalAlpha"))
                      }, null, 8, ["modelValue"]),
                      V("span", Dt, ve(t.value.globalAlpha), 1)
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "阴影颜色",
                    name: "shadowColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.shadowColor,
                        "onUpdate:modelValue": a[16] || (a[16] = (o) => t.value.shadowColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[17] || (a[17] = (o) => h("shadowColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "阴影模糊",
                    name: "shadowBlur"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.shadowBlur,
                        "onUpdate:modelValue": a[18] || (a[18] = (o) => t.value.shadowBlur = o),
                        min: 0,
                        onChange: a[19] || (a[19] = (o) => h("shadowBlur"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "阴影X偏移",
                    name: "shadowOffsetX"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.shadowOffsetX,
                        "onUpdate:modelValue": a[20] || (a[20] = (o) => t.value.shadowOffsetX = o),
                        onChange: a[21] || (a[21] = (o) => h("shadowOffsetX"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "阴影Y偏移",
                    name: "shadowOffsetY"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.shadowOffsetY,
                        "onUpdate:modelValue": a[22] || (a[22] = (o) => t.value.shadowOffsetY = o),
                        onChange: a[23] || (a[23] = (o) => h("shadowOffsetY"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(M),
                  e(_, {
                    label: "文字阴影",
                    name: "textHasShadow"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.textHasShadow,
                        "onUpdate:modelValue": a[24] || (a[24] = (o) => t.value.textHasShadow = o),
                        onChange: a[25] || (a[25] = (o) => h("textHasShadow"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "文本",
                    name: "text"
                  }, {
                    default: l(() => [
                      e(b, {
                        modelValue: t.value.text,
                        "onUpdate:modelValue": a[26] || (a[26] = (o) => t.value.text = o),
                        clearable: "",
                        onChange: a[27] || (a[27] = (o) => h("text"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "字体",
                    name: "fontSize"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.fontSize,
                        "onUpdate:modelValue": a[28] || (a[28] = (o) => t.value.fontSize = o),
                        onChange: a[29] || (a[29] = (o) => h("fontSize"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "文字颜色类型",
                    name: "textType"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.textType,
                        "onUpdate:modelValue": a[30] || (a[30] = (o) => t.value.textType = o),
                        onChange: a[31] || (a[31] = (o) => h("textType"))
                      }, {
                        default: l(() => [
                          e(G, {
                            key: "hex",
                            value: 0,
                            label: "纯色"
                          }),
                          e(G, {
                            key: "rgb",
                            value: 1,
                            label: "线性渐变"
                          }),
                          e(G, {
                            key: "rgba",
                            value: 2,
                            label: "径向渐变"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  [1, 2].includes(t.value.textType) ? (g(), E(_, {
                    key: 0,
                    label: "文字渐变",
                    name: "textGradientColors"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.textGradientColors,
                        "onUpdate:modelValue": a[32] || (a[32] = (o) => t.value.textGradientColors = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["linear-gradient"],
                        clearable: "",
                        onChange: a[33] || (a[33] = (o) => h("textGradientColors"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : (g(), E(_, {
                    key: 1,
                    label: "文字颜色",
                    name: "textColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.textColor,
                        "onUpdate:modelValue": a[34] || (a[34] = (o) => t.value.textColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[35] || (a[35] = (o) => h("textColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })),
                  e(_, {
                    label: "文本风格",
                    name: "fontStyle"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.fontStyle,
                        "onUpdate:modelValue": a[36] || (a[36] = (o) => t.value.fontStyle = o),
                        onChange: a[37] || (a[37] = (o) => h("fontStyle"))
                      }, {
                        default: l(() => [
                          e(G, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(G, {
                            key: "italic",
                            value: "italic",
                            label: "斜体"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "文本粗细",
                    name: "fontWeight"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.fontWeight,
                        "onUpdate:modelValue": a[38] || (a[38] = (o) => t.value.fontWeight = o),
                        onChange: a[39] || (a[39] = (o) => h("fontWeight"))
                      }, {
                        default: l(() => [
                          e(G, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(G, {
                            key: "bold",
                            value: "bold",
                            label: "加粗"
                          }),
                          e(G, {
                            key: "lighter",
                            value: "lighter",
                            label: "更细"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "换行",
                    name: "whiteSpace"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.whiteSpace,
                        "onUpdate:modelValue": a[40] || (a[40] = (o) => t.value.whiteSpace = o),
                        onChange: a[41] || (a[41] = (o) => h("whiteSpace"))
                      }, {
                        default: l(() => [
                          e(G, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(G, {
                            key: "nowrap",
                            value: "nowrap",
                            label: "不换行"
                          }),
                          e(G, {
                            key: "pre-line",
                            value: "pre-line",
                            label: "换行符换行"
                          }),
                          e(G, {
                            key: "break-all",
                            value: "break-all",
                            label: "永远换行"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "超出省略",
                    name: "ellipsis"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.ellipsis,
                        "onUpdate:modelValue": a[42] || (a[42] = (o) => t.value.ellipsis = o),
                        onChange: a[43] || (a[43] = (o) => h("ellipsis"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "下划线",
                    name: "textDecoration"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.textDecoration,
                        "onUpdate:modelValue": a[44] || (a[44] = (o) => t.value.textDecoration = o),
                        onChange: a[45] || (a[45] = (o) => h("textDecoration"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "下划线颜色",
                    name: "textDecorationColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.textDecorationColor,
                        "onUpdate:modelValue": a[46] || (a[46] = (o) => t.value.textDecorationColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[47] || (a[47] = (o) => h("textDecorationColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "删除线",
                    name: "textStrickout"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.textStrickout,
                        "onUpdate:modelValue": a[48] || (a[48] = (o) => t.value.textStrickout = o),
                        onChange: a[49] || (a[49] = (o) => h("textStrickout"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "删除线颜色",
                    name: "textStrickoutColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.textStrickoutColor,
                        "onUpdate:modelValue": a[50] || (a[50] = (o) => t.value.textStrickoutColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[51] || (a[51] = (o) => h("textStrickoutColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "文字水平对齐",
                    name: "textAlign"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.textAlign,
                        "onUpdate:modelValue": a[52] || (a[52] = (o) => t.value.textAlign = o),
                        onChange: a[53] || (a[53] = (o) => h("textAlign"))
                      }, {
                        default: l(() => [
                          e(G, {
                            key: "left",
                            value: "left",
                            label: "左对齐"
                          }),
                          e(G, {
                            key: "center",
                            value: "center",
                            label: "居中"
                          }),
                          e(G, {
                            key: "right",
                            value: "right",
                            label: "右对齐"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "文字垂直对齐",
                    name: "textBaseline"
                  }, {
                    default: l(() => [
                      e(ne, {
                        modelValue: t.value.textBaseline,
                        "onUpdate:modelValue": a[54] || (a[54] = (o) => t.value.textBaseline = o),
                        onChange: a[55] || (a[55] = (o) => h("textBaseline"))
                      }, {
                        default: l(() => [
                          e(G, {
                            key: "top",
                            value: "top",
                            label: "顶部对齐"
                          }),
                          e(G, {
                            key: "middle",
                            value: "middle",
                            label: "居中"
                          }),
                          e(G, {
                            key: "bottom",
                            value: "bottom",
                            label: "底部对齐"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(M),
                  e(_, {
                    label: "X",
                    name: "x"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: k.value.x,
                        "onUpdate:modelValue": a[56] || (a[56] = (o) => k.value.x = o),
                        onChange: a[57] || (a[57] = (o) => H("x"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "Y",
                    name: "y"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: k.value.y,
                        "onUpdate:modelValue": a[58] || (a[58] = (o) => k.value.y = o),
                        onChange: a[59] || (a[59] = (o) => H("y"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "宽",
                    name: "width"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: k.value.width,
                        "onUpdate:modelValue": a[60] || (a[60] = (o) => k.value.width = o),
                        onChange: a[61] || (a[61] = (o) => H("width"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "高",
                    name: "height"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: k.value.height,
                        "onUpdate:modelValue": a[62] || (a[62] = (o) => k.value.height = o),
                        onChange: a[63] || (a[63] = (o) => H("height"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "锁定宽高比",
                    name: "ratio"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.ratio,
                        "onUpdate:modelValue": a[64] || (a[64] = (o) => t.value.ratio = o),
                        onChange: a[65] || (a[65] = (o) => h("ratio"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "旋转角度",
                    name: "rotate"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.rotate,
                        "onUpdate:modelValue": a[66] || (a[66] = (o) => t.value.rotate = o),
                        onChange: a[67] || (a[67] = (o) => h("rotate"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(M),
                  e(_, {
                    label: "进度",
                    name: "progress"
                  }, {
                    default: l(() => [
                      e(te, {
                        modelValue: t.value.progress,
                        "onUpdate:modelValue": a[68] || (a[68] = (o) => t.value.progress = o),
                        step: 0.1,
                        min: 0,
                        max: 1,
                        onChange: a[69] || (a[69] = (o) => h("progress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "进度颜色",
                    name: "progressColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.progressColor,
                        "onUpdate:modelValue": a[70] || (a[70] = (o) => t.value.progressColor = o),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: a[71] || (a[71] = (o) => h("progressColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "渐变颜色",
                    name: "progressGradientColors"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: t.value.progressGradientColors,
                        "onUpdate:modelValue": a[72] || (a[72] = (o) => t.value.progressGradientColors = o),
                        "show-primary-color-preview": !1,
                        clearable: "",
                        format: "CSS",
                        "color-modes": ["linear-gradient"],
                        onChange: a[73] || (a[73] = (o) => h("progressGradientColors"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "垂直进度",
                    name: "verticalProgress"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.verticalProgress,
                        "onUpdate:modelValue": a[74] || (a[74] = (o) => t.value.verticalProgress = o),
                        onChange: a[75] || (a[75] = (o) => h("verticalProgress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "反向进度",
                    name: "reverseProgress"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.reverseProgress,
                        "onUpdate:modelValue": a[76] || (a[76] = (o) => t.value.reverseProgress = o),
                        onChange: a[77] || (a[77] = (o) => h("reverseProgress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "水平翻转",
                    name: "flipX"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.flipX,
                        "onUpdate:modelValue": a[78] || (a[78] = (o) => t.value.flipX = o),
                        onChange: a[79] || (a[79] = (o) => h("flipX"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "垂直翻转",
                    name: "flipY"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.flipY,
                        "onUpdate:modelValue": a[80] || (a[80] = (o) => t.value.flipY = o),
                        onChange: a[81] || (a[81] = (o) => h("flipY"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(M),
                  t.value.name == "combine" && t.value.showChild != null ? (g(), D(X, { key: 2 }, [
                    e(_, {
                      label: "状态",
                      name: "status"
                    }, {
                      default: l(() => [
                        e(ne, {
                          modelValue: t.value.showChild,
                          "onUpdate:modelValue": a[82] || (a[82] = (o) => t.value.showChild = o),
                          onChange: a[83] || (a[83] = (o) => h("showChild"))
                        }, {
                          default: l(() => [
                            (g(!0), D(X, null, ae(i.value, (o, We) => (g(), E(G, {
                              key: o.value,
                              value: We,
                              label: o.label
                            }, null, 8, ["value", "label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(M)
                  ], 64)) : re("", !0),
                  e(q, { size: "4px" }, {
                    default: l(() => [
                      e(r, { onClick: oe }, {
                        default: l(() => a[114] || (a[114] = [
                          J("置顶")
                        ])),
                        _: 1
                      }),
                      e(r, { onClick: T }, {
                        default: l(() => a[115] || (a[115] = [
                          J("置底")
                        ])),
                        _: 1
                      }),
                      e(r, { onClick: C }, {
                        default: l(() => a[116] || (a[116] = [
                          J("上一层")
                        ])),
                        _: 1
                      }),
                      e(r, { onClick: u }, {
                        default: l(() => a[117] || (a[117] = [
                          J("下一层")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          animate: l(() => [
            V("div", Ft, [
              e(R, { "label-align": "left" }, {
                default: l(() => [
                  n.value ? (g(), D(X, { key: 0 }, [
                    e(_, {
                      label: "动画效果",
                      name: "lineAnimateType"
                    }, {
                      default: l(() => [
                        e(ne, {
                          modelValue: t.value.lineAnimateType,
                          "onUpdate:modelValue": a[89] || (a[89] = (o) => t.value.lineAnimateType = o),
                          onChange: a[90] || (a[90] = (o) => h("lineAnimateType"))
                        }, {
                          default: l(() => [
                            (g(!0), D(X, null, ae(j(il), (o) => (g(), E(G, {
                              key: o.value,
                              value: o.value,
                              label: o.label
                            }, null, 8, ["value", "label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "反向流动",
                      name: "reverse"
                    }, {
                      default: l(() => [
                        e(L, {
                          modelValue: t.value.animateReverse,
                          "onUpdate:modelValue": a[91] || (a[91] = (o) => t.value.animateReverse = o),
                          onChange: a[92] || (a[92] = (o) => h("animateReverse"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "线宽",
                      name: "animateLineWidth"
                    }, {
                      default: l(() => [
                        e(te, {
                          modelValue: t.value.animateLineWidth,
                          "onUpdate:modelValue": a[93] || (a[93] = (o) => t.value.animateLineWidth = o),
                          onChange: a[94] || (a[94] = (o) => h("animateLineWidth"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "速度",
                      name: "animateSpan"
                    }, {
                      default: l(() => [
                        e(te, {
                          modelValue: t.value.animateSpan,
                          "onUpdate:modelValue": a[95] || (a[95] = (o) => t.value.animateSpan = o),
                          min: 1,
                          max: 5,
                          onChange: a[96] || (a[96] = (o) => h("animateSpan"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "颜色",
                      name: "color"
                    }, {
                      default: l(() => [
                        e(Y, {
                          class: "w-full",
                          modelValue: t.value.animateColor,
                          "onUpdate:modelValue": a[97] || (a[97] = (o) => t.value.animateColor = o),
                          "show-primary-color-preview": !1,
                          format: "CSS",
                          "color-modes": ["monochrome"],
                          onChange: a[98] || (a[98] = (o) => h("animateColor"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "动画发光",
                      name: "animateShadow"
                    }, {
                      default: l(() => [
                        e(L, {
                          modelValue: t.value.animateShadow,
                          "onUpdate:modelValue": a[99] || (a[99] = (o) => t.value.animateShadow = o),
                          onChange: a[100] || (a[100] = (o) => h("animateShadow"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "发光颜色",
                      name: "animateShadowColor"
                    }, {
                      default: l(() => [
                        e(Y, {
                          class: "w-full",
                          modelValue: t.value.animateShadowColor,
                          "onUpdate:modelValue": a[101] || (a[101] = (o) => t.value.animateShadowColor = o),
                          "show-primary-color-preview": !1,
                          format: "CSS",
                          "color-modes": ["monochrome"],
                          onChange: a[102] || (a[102] = (o) => h("animateShadowColor"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ], 64)) : (g(), D(X, { key: 1 }, [
                    e(_, {
                      label: "动画效果",
                      name: "animateType"
                    }, {
                      default: l(() => [
                        e(ne, {
                          modelValue: t.value.animateType,
                          "onUpdate:modelValue": a[103] || (a[103] = (o) => t.value.animateType = o),
                          onChange: a[104] || (a[104] = (o) => h("animateType"))
                        }, {
                          default: l(() => [
                            (g(!0), D(X, null, ae(j(sl), (o) => (g(), E(G, {
                              key: o.value,
                              value: o.value,
                              label: o.label
                            }, null, 8, ["value", "label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    t.value.animateType == "x-custom" ? (g(), E(_, {
                      key: 0,
                      label: "自定义动画帧"
                    }, {
                      default: l(() => [
                        e(r, {
                          variant: "text",
                          theme: "primary",
                          onClick: I
                        }, {
                          default: l(() => a[118] || (a[118] = [
                            J("编辑 ")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : re("", !0)
                  ], 64)),
                  e(_, {
                    label: "自动播放",
                    name: "autoPlay"
                  }, {
                    default: l(() => [
                      e(L, {
                        modelValue: t.value.autoPlay,
                        "onUpdate:modelValue": a[105] || (a[105] = (o) => t.value.autoPlay = o),
                        onChange: a[106] || (a[106] = (o) => h("autoPlay"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(M),
                  e(q, null, {
                    default: l(() => [
                      e(r, {
                        onClick: a[107] || (a[107] = (o) => v(!0))
                      }, {
                        default: l(() => a[119] || (a[119] = [
                          J("播放")
                        ])),
                        _: 1
                      }),
                      e(r, {
                        onClick: a[108] || (a[108] = (o) => v())
                      }, {
                        default: l(() => a[120] || (a[120] = [
                          J("停止")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          struct: l(() => [
            Pe(U.$slots, "struct", { pen: t.value }, void 0, !0)
          ]),
          data: l(() => [
            V("div", Mt, [
              e(R, { "label-align": "left" }, {
                default: l(() => [
                  e(_, {
                    label: "ID",
                    name: "data"
                  }, {
                    default: l(() => [
                      e(se, {
                        maxWidth: "100%",
                        style: { flex: "1", width: "0" }
                      }, {
                        default: l(() => [
                          J(ve(t.value.id), 1)
                        ]),
                        _: 1
                      }),
                      e(r, {
                        theme: "primary",
                        variant: "text",
                        style: { "margin-left": "10px" },
                        onClick: A
                      }, {
                        default: l(() => [
                          e(me, { name: "copy" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "描述",
                    name: "description"
                  }, {
                    default: l(() => [
                      e(b, {
                        modelValue: t.value.description,
                        "onUpdate:modelValue": a[109] || (a[109] = (o) => t.value.description = o),
                        maxlength: "50",
                        clearable: "",
                        onChange: a[110] || (a[110] = (o) => h("description"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(_, {
                    label: "标签",
                    name: "tags"
                  }, {
                    default: l(() => [
                      e(Q, {
                        modelValue: t.value.tags,
                        "onUpdate:modelValue": a[111] || (a[111] = (o) => t.value.tags = o),
                        clearable: "",
                        placeholder: "按回车添加标签，最多10个",
                        max: 10,
                        onChange: a[112] || (a[112] = (o) => h("tags"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          event: l(() => [
            e(Tt, {
              defaultEventsValue: t.value.events,
              onChange: F
            }, null, 8, ["defaultEventsValue"])
          ]),
          _: 2
        }, [
          ["image"].includes(t.value.name) ? {
            name: "image",
            fn: l(() => [
              V("div", Et, [
                e(R, { "label-align": "left" }, {
                  default: l(() => [
                    e(_, {
                      label: "图片上传",
                      name: "image"
                    }, {
                      default: l(() => [
                        e(Z, {
                          ref_key: "uploadRef",
                          ref: B,
                          modelValue: j(z),
                          "onUpdate:modelValue": a[84] || (a[84] = (o) => we(z) ? z.value = o : null),
                          action: U.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                          headers: j(K),
                          name: "object",
                          sizeLimit: j(ee),
                          theme: "image",
                          tips: "请选择单张小于1MB的图片上传",
                          accept: "image/*",
                          onFail: y,
                          onSuccess: P
                        }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "图片地址",
                      name: "image"
                    }, {
                      default: l(() => [
                        e(b, {
                          modelValue: t.value.image,
                          "onUpdate:modelValue": a[85] || (a[85] = (o) => t.value.image = o),
                          clearable: "",
                          onChange: a[86] || (a[86] = (o) => h("image"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(_, {
                      label: "保持比例",
                      name: "imageRatio"
                    }, {
                      default: l(() => [
                        e(L, {
                          modelValue: t.value.imageRatio,
                          "onUpdate:modelValue": a[87] || (a[87] = (o) => t.value.imageRatio = o),
                          onChange: a[88] || (a[88] = (o) => h("imageRatio"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["tabs", "defaultValue"])) : re("", !0),
        e(ml, {
          visible: p.value,
          "onUpdate:visible": a[113] || (a[113] = (o) => p.value = o),
          header: "自定义动画帧",
          size: "20%",
          onConfirm: $
        }, {
          default: l(() => [
            e(r, {
              block: "",
              theme: "primary",
              onClick: O
            }, {
              default: l(() => a[121] || (a[121] = [
                J("新增动画帧")
              ])),
              _: 1
            }),
            e(Ue, {
              class: "meta-collapse",
              "expand-mutex": ""
            }, {
              default: l(() => [
                (g(!0), D(X, null, ae(f.value, (o) => (g(), E(ie, { header: "动画帧" }, {
                  headerRightContent: l(() => [
                    e(r, {
                      size: "small",
                      variant: "outline",
                      theme: "danger",
                      style: { marginLeft: "8px" },
                      onClick: (We) => W(o)
                    }, {
                      default: l(() => [
                        e(me, { name: "delete" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: l(() => [
                    e(ul, {
                      data: o,
                      statusList: i.value
                    }, null, 8, ["data", "statusList"])
                  ]),
                  _: 2
                }, 1024))), 256))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["visible"])
      ]);
    };
  }
}), jt = /* @__PURE__ */ ce(zt, [["__scopeId", "data-v-a409ae57"]]), Wt = { class: "props-panel" }, Bt = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, Ht = { class: "props-panel" }, Gt = /* @__PURE__ */ pe({
  __name: "PensProps",
  setup(s) {
    const m = [
      {
        label: "图元组",
        value: 1,
        slot: "pen-props"
      },
      {
        label: "结构",
        value: 2,
        slot: "struct-props"
      },
      {
        label: "动效",
        value: 3,
        slot: "animation-props"
      }
    ], { selections: S } = Me(), t = le({
      globalAlpha: 1
    }), k = le();
    Ce(() => {
      x();
    });
    const x = () => {
      k.value = meta2d.getPenRect(t.value);
    }, n = ge(() => {
      var C;
      return (C = S.pens) == null ? void 0 : C.every((u) => u.type === 1);
    }), w = ge(() => {
      var C;
      return (C = S.pens) == null ? void 0 : C.every((u) => !u.type);
    }), i = ge(() => {
      var C;
      return ((C = S.pens) == null ? void 0 : C.length) || 0;
    }), v = Ze(() => S.pens, x), p = [void 0, [5, 5]], f = (C) => {
      var u;
      if ((u = S.pens) != null && u.length) {
        const B = t.value[C];
        S.pens.forEach((z) => {
          const ee = { id: z.id };
          if (ee[C] = B, C === "dash")
            ee.lineDash = p[ee[C]];
          else if (C == "animateType") {
            const K = ee.animateType, P = rl[K];
            ee.frames = P;
          }
          meta2d.setValue(ee, { render: !1 });
        }), meta2d.render();
      }
    }, I = (C = !1) => {
      var u;
      (u = S.pens) == null || u.forEach((B) => {
        C ? meta2d.startAnimate(B.id) : meta2d.stopAnimate(B.id);
      });
    }, $ = [
      { label: "左对齐", value: "left", icon: "format-vertical-align-left" },
      { label: "右对齐", value: "right", icon: "format-vertical-align-right" },
      { label: "顶部对齐", value: "top", icon: "format-horizontal-align-top" },
      {
        label: "底部对齐",
        value: "bottom",
        icon: "format-horizontal-align-bottom"
      },
      { label: "垂直居中", value: "center", icon: "format-vertical-align-center" },
      {
        label: "水平居中",
        value: "middle",
        icon: "format-horizontal-align-center"
      }
    ], O = (C) => {
      const u = S.pens;
      u != null && u.length && meta2d.alignNodes(C.value, u);
    };
    Ee(() => {
      v();
    });
    const W = le(!1), N = le([]), d = () => {
      N.value = Ve(t.value.frames || []), W.value = !0;
    }, h = () => {
      t.value.frames = Ve(N.value), f("frames"), W.value = !1, Qe(() => {
        N.value = [];
      });
    }, H = () => {
      N.value.push({
        duration: 100,
        globalAlpha: 1
      });
    }, oe = (C) => {
      const u = N.value.indexOf(C);
      u > -1 && N.value.splice(u, 1);
    }, T = () => {
      meta2d.inactive();
    };
    return (C, u) => {
      const B = c("t-input"), z = c("t-form-item"), ee = c("t-color-picker"), K = c("t-option"), P = c("t-select"), y = c("t-input-number"), A = c("t-slider"), F = c("t-divider"), U = c("t-icon"), a = c("t-button"), Y = c("t-collapse-panel"), _ = c("t-collapse"), G = c("t-tooltip"), ne = c("t-space"), te = c("t-form"), fe = c("t-alert"), M = c("t-switch"), L = c("t-statistic"), b = c("t-drawer");
      return g(), E(Te, { tabs: m }, {
        "pen-props": l(() => [
          V("div", Wt, [
            t.value ? (g(), E(te, {
              key: 0,
              "label-align": "left"
            }, {
              default: l(() => [
                e(z, {
                  label: "文本",
                  name: "text"
                }, {
                  default: l(() => [
                    e(B, {
                      modelValue: t.value.text,
                      "onUpdate:modelValue": u[0] || (u[0] = (r) => t.value.text = r),
                      onChange: u[1] || (u[1] = (r) => f("text"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(z, {
                  label: "颜色",
                  name: "color"
                }, {
                  default: l(() => [
                    e(ee, {
                      class: "w-full",
                      modelValue: t.value.color,
                      "onUpdate:modelValue": u[2] || (u[2] = (r) => t.value.color = r),
                      "show-primary-color-preview": !1,
                      format: "CSS",
                      "color-modes": ["monochrome"],
                      onChange: u[3] || (u[3] = (r) => f("color"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(z, {
                  label: "背景",
                  name: "background"
                }, {
                  default: l(() => [
                    e(ee, {
                      class: "w-full",
                      modelValue: t.value.background,
                      "onUpdate:modelValue": u[4] || (u[4] = (r) => t.value.background = r),
                      "show-primary-color-preview": !1,
                      format: "CSS",
                      "color-modes": ["monochrome"],
                      onChange: u[5] || (u[5] = (r) => f("background"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(z, {
                  label: "线条",
                  name: "dash"
                }, {
                  default: l(() => [
                    e(P, {
                      modelValue: t.value.dash,
                      "onUpdate:modelValue": u[6] || (u[6] = (r) => t.value.dash = r),
                      onChange: u[7] || (u[7] = (r) => f("dash"))
                    }, {
                      default: l(() => [
                        (g(), E(K, {
                          key: 0,
                          value: 0,
                          label: "实线"
                        })),
                        (g(), E(K, {
                          key: 1,
                          value: 1,
                          label: "虚线"
                        }))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(z, {
                  label: "圆角",
                  name: "borderRadius"
                }, {
                  default: l(() => [
                    e(y, {
                      min: 0,
                      max: 1,
                      step: 0.01,
                      modelValue: t.value.borderRadius,
                      "onUpdate:modelValue": u[8] || (u[8] = (r) => t.value.borderRadius = r),
                      onChange: u[9] || (u[9] = (r) => f("borderRadius"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(z, {
                  label: "不透明度",
                  name: "globalAlpha"
                }, {
                  default: l(() => [
                    e(A, {
                      modelValue: t.value.globalAlpha,
                      "onUpdate:modelValue": u[10] || (u[10] = (r) => t.value.globalAlpha = r),
                      min: 0,
                      max: 1,
                      step: 0.01,
                      onChange: u[11] || (u[11] = (r) => f("globalAlpha"))
                    }, null, 8, ["modelValue"]),
                    V("span", Bt, ve(t.value.globalAlpha), 1)
                  ]),
                  _: 1
                }),
                e(F),
                e(z, {
                  label: "文字水平对齐",
                  name: "textAlign"
                }, {
                  default: l(() => [
                    e(P, {
                      modelValue: t.value.textAlign,
                      "onUpdate:modelValue": u[12] || (u[12] = (r) => t.value.textAlign = r),
                      onChange: u[13] || (u[13] = (r) => f("textAlign"))
                    }, {
                      default: l(() => [
                        e(K, {
                          key: "left",
                          value: "left",
                          label: "左对齐"
                        }),
                        e(K, {
                          key: "center",
                          value: "center",
                          label: "居中"
                        }),
                        e(K, {
                          key: "right",
                          value: "right",
                          label: "右对齐"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(z, {
                  label: "文字垂直对齐",
                  name: "textBaseline"
                }, {
                  default: l(() => [
                    e(P, {
                      modelValue: t.value.textBaseline,
                      "onUpdate:modelValue": u[14] || (u[14] = (r) => t.value.textBaseline = r),
                      onChange: u[15] || (u[15] = (r) => f("textBaseline"))
                    }, {
                      default: l(() => [
                        e(K, {
                          key: "top",
                          value: "top",
                          label: "顶部对齐"
                        }),
                        e(K, {
                          key: "middle",
                          value: "middle",
                          label: "居中"
                        }),
                        e(K, {
                          key: "bottom",
                          value: "bottom",
                          label: "底部对齐"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F),
                e(_, {
                  "expand-icon": "",
                  borderless: "",
                  defaultExpandAll: ""
                }, {
                  default: l(() => [
                    e(Y, {
                      value: "0",
                      header: "对齐"
                    }, {
                      default: l(() => [
                        (g(), D(X, null, ae($, (r, q) => e(a, {
                          key: q,
                          shape: "square",
                          variant: "outline",
                          style: { "margin-right": "4px" },
                          onClick: (R) => O(r)
                        }, {
                          default: l(() => [
                            e(U, {
                              name: r.icon
                            }, null, 8, ["name"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e(F),
                e(ne, null, {
                  default: l(() => [
                    e(G, { content: "清空高亮图元" }, {
                      default: l(() => [
                        e(a, { onClick: T }, {
                          default: l(() => u[37] || (u[37] = [
                            J("取消选中")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : re("", !0)
          ])
        ]),
        "struct-props": l(() => [
          Pe(C.$slots, "struct", { pen: t.value }, void 0, !0)
        ]),
        "animation-props": l(() => [
          V("div", Ht, [
            n.value || w.value ? (g(), E(te, {
              key: 0,
              "label-width": "80px",
              "label-align": "left"
            }, {
              default: l(() => [
                e(ne, { style: { width: "100%" } }, {
                  default: l(() => [
                    e(fe, {
                      theme: "warning",
                      title: "批量修改所有图元的动画",
                      message: "执行了操作后才会修改"
                    })
                  ]),
                  _: 1
                }),
                e(F),
                w.value ? (g(), D(X, { key: 0 }, [
                  e(z, {
                    label: "动画效果",
                    name: "animateType"
                  }, {
                    default: l(() => [
                      e(P, {
                        modelValue: t.value.animateType,
                        "onUpdate:modelValue": u[16] || (u[16] = (r) => t.value.animateType = r),
                        onChange: u[17] || (u[17] = (r) => f("animateType"))
                      }, {
                        default: l(() => [
                          (g(!0), D(X, null, ae(j(sl), (r) => (g(), E(K, {
                            key: r.value,
                            value: r.value,
                            label: r.label
                          }, null, 8, ["value", "label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  t.value.animateType == "x-custom" ? (g(), E(z, {
                    key: 0,
                    label: "自定义动画帧"
                  }, {
                    default: l(() => [
                      e(a, {
                        variant: "text",
                        theme: "primary",
                        onClick: d
                      }, {
                        default: l(() => u[38] || (u[38] = [
                          J("编辑 ")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : re("", !0)
                ], 64)) : n.value ? (g(), D(X, { key: 1 }, [
                  e(z, {
                    label: "动画效果",
                    name: "lineAnimateType"
                  }, {
                    default: l(() => [
                      e(P, {
                        modelValue: t.value.lineAnimateType,
                        "onUpdate:modelValue": u[18] || (u[18] = (r) => t.value.lineAnimateType = r),
                        onChange: u[19] || (u[19] = (r) => f("lineAnimateType"))
                      }, {
                        default: l(() => [
                          (g(!0), D(X, null, ae(j(il), (r) => (g(), E(K, {
                            key: r.value,
                            value: r.value,
                            label: r.label
                          }, null, 8, ["value", "label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z, {
                    label: "反向流动",
                    name: "reverse"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.animateReverse,
                        "onUpdate:modelValue": u[20] || (u[20] = (r) => t.value.animateReverse = r),
                        onChange: u[21] || (u[21] = (r) => f("animateReverse"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z, {
                    label: "线宽",
                    name: "animateLineWidth"
                  }, {
                    default: l(() => [
                      e(y, {
                        modelValue: t.value.animateLineWidth,
                        "onUpdate:modelValue": u[22] || (u[22] = (r) => t.value.animateLineWidth = r),
                        onChange: u[23] || (u[23] = (r) => f("animateLineWidth"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z, {
                    label: "速度",
                    name: "animateSpan"
                  }, {
                    default: l(() => [
                      e(y, {
                        modelValue: t.value.animateSpan,
                        "onUpdate:modelValue": u[24] || (u[24] = (r) => t.value.animateSpan = r),
                        min: 1,
                        max: 5,
                        onChange: u[25] || (u[25] = (r) => f("animateSpan"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z, {
                    label: "颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(ee, {
                        class: "w-full",
                        modelValue: t.value.animateColor,
                        "onUpdate:modelValue": u[26] || (u[26] = (r) => t.value.animateColor = r),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        onChange: u[27] || (u[27] = (r) => f("animateColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z, {
                    label: "动画发光",
                    name: "animateShadow"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.animateShadow,
                        "onUpdate:modelValue": u[28] || (u[28] = (r) => t.value.animateShadow = r),
                        onChange: u[29] || (u[29] = (r) => f("animateShadow"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(z, {
                    label: "发光颜色",
                    name: "animateShadowColor"
                  }, {
                    default: l(() => [
                      e(ee, {
                        class: "w-full",
                        modelValue: t.value.animateShadowColor,
                        "onUpdate:modelValue": u[30] || (u[30] = (r) => t.value.animateShadowColor = r),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        onChange: u[31] || (u[31] = (r) => f("animateShadowColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ], 64)) : re("", !0),
                e(z, {
                  label: "自动播放",
                  name: "autoPlay"
                }, {
                  default: l(() => [
                    e(M, {
                      modelValue: t.value.autoPlay,
                      "onUpdate:modelValue": u[32] || (u[32] = (r) => t.value.autoPlay = r),
                      onChange: u[33] || (u[33] = (r) => f("autoPlay"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F),
                V("div", null, [
                  e(L, {
                    title: "图元总数",
                    value: i.value,
                    trend: "increase",
                    color: "orange"
                  }, null, 8, ["value"])
                ]),
                e(ne, null, {
                  default: l(() => [
                    e(G, { content: "对大量图元执行动画时存在性能问题，请谨慎操作" }, {
                      default: l(() => [
                        e(a, {
                          onClick: u[34] || (u[34] = (r) => I(!0))
                        }, {
                          default: l(() => u[39] || (u[39] = [
                            J("播放")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    e(G, { content: "" }, {
                      default: l(() => [
                        e(a, {
                          onClick: u[35] || (u[35] = (r) => I())
                        }, {
                          default: l(() => u[40] || (u[40] = [
                            J("停止")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : (g(), E(fe, {
              key: 1,
              theme: "error"
            }, {
              default: l(() => u[41] || (u[41] = [
                J(" 只能对同一类型的图元批量设置动画 ")
              ])),
              _: 1
            })),
            e(b, {
              visible: W.value,
              "onUpdate:visible": u[36] || (u[36] = (r) => W.value = r),
              header: "自定义动画帧",
              size: "20%",
              onConfirm: h
            }, {
              default: l(() => [
                e(a, {
                  block: "",
                  theme: "primary",
                  onClick: H
                }, {
                  default: l(() => u[42] || (u[42] = [
                    J("新增动画帧")
                  ])),
                  _: 1
                }),
                e(_, {
                  class: "meta-collapse",
                  "expand-mutex": ""
                }, {
                  default: l(() => [
                    (g(!0), D(X, null, ae(N.value, (r) => (g(), E(Y, { header: "动画帧" }, {
                      headerRightContent: l(() => [
                        e(a, {
                          size: "small",
                          variant: "outline",
                          theme: "danger",
                          style: { marginLeft: "8px" },
                          onClick: (q) => oe(r)
                        }, {
                          default: l(() => [
                            e(U, { name: "delete" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: l(() => [
                        e(ul, { data: r }, null, 8, ["data"])
                      ]),
                      _: 2
                    }, 1024))), 256))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["visible"])
          ])
        ]),
        _: 3
      });
    };
  }
}), Jt = /* @__PURE__ */ ce(Gt, [["__scopeId", "data-v-5a044bf3"]]), Xt = ["onClick"], Yt = { class: "tdesign-demo-block-row" }, Ne = /* @__PURE__ */ pe({
  __name: "Structure",
  props: {},
  setup(s) {
    let m = le(meta2d.data());
    const S = ge(() => {
      const w = m.value.pens;
      return w.filter((i) => {
        if (!i.parentId) {
          if (i.children) {
            const v = [];
            i.children.forEach((p) => {
              const f = w.find((I) => I.id === p);
              f && v.push(f);
            }), i.list = v;
          }
          return !0;
        }
      });
    }), t = () => {
      m.value = meta2d.data();
    };
    Ce(() => {
      meta2d.on("add", t), meta2d.on("delete", t), meta2d.on("clear", t);
    }), Ee(() => {
      meta2d.off("add", t), meta2d.off("delete", t);
    });
    const k = (w, i) => {
      const v = {
        1: "git-commit",
        combine: "folder",
        image: "image"
      }, p = v[i.data.type] || v[i.data.name] || "rectangle";
      return w(Il, { name: p });
    }, x = (w) => {
      w.data.visible = w.data.visible === !1, w.setData(w.data), meta2d.setValue({
        id: w.data.id,
        visible: w.data.visible
      });
    }, n = (w) => {
      const i = meta2d.findOne(w.data.id);
      i && (meta2d.active([i]), meta2d.render(), meta2d.gotoView(i));
    };
    return (w, i) => {
      const v = c("t-icon"), p = c("t-tree");
      return g(), E(p, {
        hover: "",
        line: "",
        "expand-all": "",
        data: S.value,
        keys: { label: "name", value: "id", children: "list" },
        icon: k,
        scroll: {
          rowHeight: 34,
          bufferSize: 30,
          threshold: 50,
          type: "virtual"
        },
        style: { padding: "10px", height: "100%" }
      }, {
        label: l(({ node: f }) => [
          V("span", {
            onClick: (I) => n(f)
          }, ve(f.label) + " - " + ve(f.data.text || f.data.description || f.value), 9, Xt)
        ]),
        operations: l(({ node: f }) => [
          V("div", Yt, [
            e(v, {
              name: f.data.visible !== !1 ? "browse" : "browse-off",
              onClick: (I) => x(f)
            }, null, 8, ["name", "onClick"])
          ])
        ]),
        _: 1
      }, 8, ["data"]);
    };
  }
}), qt = {
  key: 0,
  class: "app-props"
}, Kt = /* @__PURE__ */ pe({
  __name: "Props",
  setup(s) {
    const { selections: m } = Me(), S = ge(() => [he.File, he.Pen, he.Pens].includes(
      m.mode
    ));
    return (t, k) => S.value ? (g(), D("div", qt, [
      _e(e(Ct, ye({
        key: "file",
        class: "props__file"
      }, t.$attrs), {
        struct: l(() => [
          e(Ne, Se(Le(t.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ae, j(m).mode === j(he).File]
      ]),
      _e(e(jt, ye({
        key: "pen",
        class: "props__pen"
      }, t.$attrs), {
        struct: l(() => [
          e(Ne, Se(Le(t.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ae, j(m).mode === j(he).Pen]
      ]),
      _e(e(Jt, ye({
        key: "pens",
        class: "props__pens"
      }, t.$attrs), {
        struct: l(() => [
          e(Ne, Se(Le(t.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ae, j(m).mode === j(he).Pens]
      ])
    ])) : re("", !0);
  }
}), Zt = /* @__PURE__ */ ce(Kt, [["__scopeId", "data-v-5839971c"]]), Qt = [
  {
    name: "基本形状",
    show: !0,
    list: [
      {
        name: "正方形",
        icon: "l-rect",
        id: 1,
        data: {
          width: 100,
          height: 100,
          name: "square"
        }
      },
      {
        name: "矩形",
        icon: "l-rectangle",
        id: 2,
        data: {
          width: 200,
          height: 50,
          borderRadius: 0.1,
          name: "rectangle"
        }
      },
      {
        name: "圆",
        icon: "l-circle",
        id: 3,
        data: {
          width: 100,
          height: 100,
          name: "circle"
        }
      },
      {
        name: "三角形",
        icon: "l-triangle",
        id: 4,
        data: {
          width: 100,
          height: 100,
          name: "triangle"
        }
      },
      {
        name: "菱形",
        icon: "l-diamond",
        id: 5,
        data: {
          width: 100,
          height: 100,
          name: "diamond"
        }
      },
      {
        name: "五边形",
        icon: "l-pentagon",
        id: 6,
        data: {
          width: 100,
          height: 100,
          name: "pentagon"
        }
      },
      {
        name: "六边形",
        icon: "l-hexagon",
        id: 7,
        data: {
          width: 100,
          height: 100,
          name: "hexagon"
        }
      },
      {
        name: "五角星",
        icon: "l-pentagram",
        id: 8,
        data: {
          width: 100,
          height: 100,
          name: "pentagram"
        }
      },
      {
        name: "左箭头",
        icon: "l-arrow-left",
        id: 9,
        data: {
          width: 120,
          height: 60,
          name: "leftArrow"
        }
      },
      {
        name: "右箭头",
        icon: "l-arrow-right",
        id: 10,
        data: {
          width: 120,
          height: 60,
          name: "rightArrow"
        }
      },
      {
        name: "双向箭头",
        icon: "l-twoway-arrow",
        id: 11,
        data: {
          width: 150,
          height: 60,
          name: "twowayArrow"
        }
      },
      {
        name: "云",
        icon: "l-cloud",
        id: 13,
        data: {
          width: 100,
          height: 100,
          name: "cloud"
        }
      },
      {
        name: "消息框",
        icon: "l-msg",
        id: 14,
        data: {
          textTop: -0.1,
          width: 100,
          height: 100,
          name: "message"
        }
      },
      {
        name: "文件",
        icon: "l-file",
        id: 15,
        data: {
          width: 80,
          height: 100,
          name: "file"
        }
      },
      {
        name: "立方体",
        icon: "l-cube",
        id: 18,
        data: {
          width: 60,
          height: 100,
          name: "cube",
          z: 0.25,
          props: {
            custom: [
              {
                key: "z",
                label: "Z",
                type: "number",
                min: 0,
                placeholder: "<= 1 即宽度的比例"
              },
              {
                key: "backgroundFront",
                label: "前背景色",
                type: "color"
              },
              {
                key: "backgroundUp",
                label: "顶背景色",
                type: "color"
              },
              {
                key: "backgroundRight",
                label: "右背景色",
                type: "color"
              }
            ]
          }
        }
      },
      {
        name: "人",
        icon: "l-people",
        id: 19,
        data: {
          width: 70,
          height: 100,
          name: "people"
        }
      },
      {
        name: "图片",
        icon: "l-picture",
        id: 20,
        data: {
          width: 100,
          height: 100,
          name: "image",
          image: "/favicon.ico"
          // crossOrigin: 'undefined', // 没啥用
        }
      }
    ]
  },
  {
    name: "流程图",
    show: !1,
    list: [
      {
        name: "开始/结束",
        icon: "l-flow-start",
        id: 21,
        data: {
          text: "开始/结束",
          width: 120,
          height: 40,
          borderRadius: 0.5,
          name: "rectangle"
        }
      },
      {
        name: "流程",
        icon: "l-rectangle",
        id: 22,
        data: {
          text: "流程",
          width: 120,
          height: 40,
          name: "rectangle"
        }
      },
      {
        name: "判定",
        icon: "l-diamond",
        id: 23,
        data: {
          text: "判定",
          width: 120,
          height: 60,
          name: "diamond"
        }
      },
      {
        name: "数据",
        icon: "l-flow-data",
        id: 24,
        data: {
          text: "数据",
          width: 120,
          height: 50,
          name: "flowData",
          offsetX: 0.14
        }
      },
      {
        name: "准备",
        icon: "l-flow-ready",
        id: 25,
        data: {
          text: "准备",
          width: 120,
          height: 50,
          name: "hexagon"
        }
      },
      {
        name: "子流程",
        icon: "l-flow-subprocess",
        id: 26,
        data: {
          text: "子流程",
          width: 120,
          height: 50,
          name: "flowSubprocess"
        }
      },
      {
        name: "数据库",
        icon: "l-db",
        id: 27,
        data: {
          text: "数据库",
          width: 80,
          height: 120,
          name: "flowDb"
        }
      },
      {
        name: "文档",
        icon: "l-flow-document",
        id: 28,
        data: {
          text: "文档",
          width: 120,
          height: 100,
          name: "flowDocument"
        }
      },
      {
        name: "内部存储",
        icon: "l-internal-storage",
        id: 29,
        data: {
          text: "内部存储",
          width: 120,
          height: 80,
          name: "flowInternalStorage"
        }
      },
      {
        name: "外部存储",
        icon: "l-extern-storage",
        id: 30,
        data: {
          text: "外部存储",
          width: 120,
          height: 80,
          name: "flowExternStorage"
        }
      },
      {
        name: "队列",
        icon: "l-flow-queue",
        id: 31,
        data: {
          text: "队列",
          width: 100,
          height: 100,
          name: "flowQueue"
        }
      },
      {
        name: "手动输入",
        icon: "l-flow-manually",
        id: 32,
        data: {
          text: "手动输入",
          width: 120,
          height: 80,
          name: "flowManually"
        }
      },
      {
        name: "展示",
        icon: "l-flow-display",
        id: 33,
        data: {
          text: "展示",
          width: 120,
          height: 80,
          name: "flowDisplay"
        }
      },
      {
        name: "并行模式",
        icon: "l-flow-parallel",
        id: 34,
        data: {
          text: "并行模式",
          width: 120,
          height: 50,
          name: "flowParallel"
        }
      },
      {
        name: "注释",
        icon: "l-flow-comment",
        id: 35,
        data: {
          text: "注释",
          width: 100,
          height: 100,
          name: "flowComment"
        }
      }
    ]
  },
  {
    name: "活动图",
    show: !1,
    list: [
      {
        name: "开始",
        icon: "l-inital",
        id: 36,
        data: {
          text: "",
          width: 30,
          height: 30,
          name: "circle",
          background: "#555",
          lineWidth: 0
        }
      },
      {
        name: "结束",
        icon: "l-final",
        id: 37,
        data: {
          width: 30,
          height: 30,
          name: "activityFinal"
        }
      },
      {
        name: "活动",
        icon: "l-action",
        id: 38,
        data: {
          text: "活动",
          width: 120,
          height: 50,
          borderRadius: 0.25,
          name: "rectangle"
        }
      },
      {
        name: "决策/合并",
        icon: "l-diamond",
        id: 39,
        data: {
          text: "决策/合并",
          width: 120,
          height: 50,
          name: "diamond"
        }
      },
      {
        name: "垂直泳道",
        icon: "l-swimlane-v",
        id: 40,
        data: {
          text: "垂直泳道",
          width: 200,
          height: 500,
          name: "swimlaneV",
          textBaseline: "top",
          textTop: 20,
          // textHeight: ,
          lineTop: 0.08
        }
      },
      {
        name: "水平泳道",
        icon: "l-swimlane-h",
        id: 41,
        data: {
          text: "水平泳道",
          width: 500,
          height: 200,
          name: "swimlaneH",
          textWidth: 0.01,
          textLeft: 0.04,
          textAlign: "left",
          lineLeft: 0.08
        }
      },
      {
        name: "垂直分岔/汇合",
        icon: "l-fork-v",
        id: 42,
        data: {
          text: "垂直分岔/汇合",
          width: 10,
          height: 150,
          name: "forkV",
          fillStyle: "#555",
          strokeStyle: "transparent"
        }
      },
      {
        name: "水平分岔/汇合",
        icon: "l-fork",
        id: 43,
        data: {
          text: "水平分岔/汇合",
          width: 150,
          height: 10,
          name: "forkH",
          fillStyle: "#555",
          strokeStyle: "transparent"
        }
      }
    ]
  },
  {
    name: "时序图和类图",
    show: !1,
    list: [
      {
        name: "生命线",
        icon: "l-lifeline",
        id: 44,
        data: {
          text: "生命线",
          width: 150,
          height: 400,
          textHeight: 50,
          name: "lifeline"
        }
      },
      {
        name: "激活",
        icon: "l-focus",
        id: 45,
        data: {
          text: "激活",
          width: 12,
          height: 200,
          name: "sequenceFocus"
        }
      },
      {
        name: "简单类",
        icon: "l-simple-class",
        id: 46,
        data: {
          text: "Topolgoy",
          width: 270,
          height: 200,
          textHeight: 200,
          name: "simpleClass",
          textAlign: "center",
          textBaseline: "top",
          textTop: 10,
          list: [
            {
              text: `- name: string
+ setName(name: string): void`
            }
          ]
        }
      },
      {
        name: "类",
        icon: "l-class",
        id: 47,
        data: {
          text: "Topolgoy",
          width: 270,
          height: 200,
          textHeight: 200,
          name: "interfaceClass",
          textAlign: "center",
          textBaseline: "top",
          textTop: 10,
          list: [
            {
              text: "- name: string"
            },
            {
              text: "+ setName(name: string): void"
            }
          ]
        }
      }
    ]
  },
  {
    name: "故障树",
    show: !1,
    list: [
      {
        name: "与门",
        icon: "l-ANDmen",
        data: {
          name: "andGate",
          width: 100,
          height: 150
        }
      },
      {
        name: "基本事件",
        icon: "l-jibenshijian",
        data: {
          name: "basicEvent",
          width: 100,
          height: 150
        }
      },
      {
        name: "未展开事件",
        icon: "l-weizhankaishijian",
        data: {
          name: "unexpandedEvent",
          width: 100,
          height: 150
        }
      },
      {
        name: "优先AND门",
        icon: "l-youxianANDmen",
        data: {
          name: "priorityAndGate",
          width: 100,
          height: 150
        }
      },
      {
        name: "禁止门",
        icon: "l-jinzhimen",
        data: {
          name: "forbiddenGate",
          width: 100,
          height: 150
        }
      },
      {
        name: "事件",
        icon: "l-shijian",
        data: {
          name: "event",
          width: 100,
          height: 150
        }
      },
      {
        name: "开关事件",
        icon: "l-kaiguanshijian",
        data: {
          name: "switchEvent",
          width: 100,
          height: 150
        }
      },
      {
        name: "条件事件",
        icon: "l-tiaojianshijian",
        data: {
          name: "conditionalEvent",
          width: 150,
          height: 100
        }
      },
      {
        name: "转移符号",
        icon: "l-zhuanyifuhao",
        data: {
          name: "transferSymbol",
          width: 100,
          height: 150
        }
      },
      {
        name: "或门",
        icon: "l-ORmen",
        data: {
          name: "orGate",
          width: 100,
          height: 150
        }
      },
      {
        name: "异或门",
        icon: "l-yihuomen",
        data: {
          name: "xorGate",
          width: 100,
          height: 150
        }
      },
      {
        name: "表决门",
        icon: "l-biaojuemen",
        data: {
          name: "votingGate",
          width: 100,
          height: 150
        }
      }
    ]
  },
  {
    name: "脑图",
    show: !0,
    list: [
      {
        name: "主题",
        icon: "l-zhuti",
        data: {
          text: "主题",
          width: 200,
          height: 50,
          name: "mindNode",
          borderRadius: 0.5
        }
      },
      {
        name: "子主题",
        icon: "l-zizhuti",
        data: {
          text: "子主题",
          width: 160,
          height: 40,
          name: "mindLine"
        }
      }
    ]
  }
], ea = { class: "graphics" }, la = ["onDragstart"], ta = ["src"], aa = {
  key: 1,
  class: "l-icon",
  "aria-hidden": "true"
}, na = ["xlink:href"], oa = ["onDragstart"], da = ["src"], sa = {
  key: 1,
  class: "l-icon",
  "aria-hidden": "true"
}, ia = ["xlink:href"], ra = /* @__PURE__ */ pe({
  __name: "Graphics",
  setup(s) {
    const m = ge(() => {
      const x = [];
      return $l.forEach((n) => {
        const w = n.name.split("-");
        let i = "其他";
        w.length > 1 && (i = w[0]);
        const v = x.find((p) => p.name == i);
        v ? v.children.push(n) : x.push({
          name: i,
          children: [n]
        });
      }), x;
    }), S = [
      ...Qt,
      {
        name: "电路元件分组",
        show: !0,
        style: "group",
        list: m.value
      },
      {
        name: "电路元件组合(包含状态)",
        show: !0,
        style: "group",
        list: Ul
      }
    ];
    function t(x, n) {
      if (!x || !n) return;
      const w = [], i = [x];
      for (; i.length; ) {
        const v = i.shift();
        w.push(v);
        for (const p of n)
          p.parentId == v.id && i.push(p);
      }
      return w;
    }
    const k = (x, n) => {
      var w;
      if (n) {
        if (x.stopPropagation(), n.icon.endsWith("svg"))
          if (n.type == "combine-json") {
            console.log("load json: ", n, Re);
            const i = Re.pens.find((p) => {
              if (p.description == n.name && !p.parentId)
                return !0;
            }), v = t(i, Re.pens);
            console.log("combine pens: ", i, v), v && (n.data = Ve(v));
          } else {
            _l(n.icon, n);
            return;
          }
        console.log("elem: ", n), x instanceof DragEvent ? (w = x.dataTransfer) == null || w.setData("Meta2d", JSON.stringify(n.data)) : meta2d.canvas.addCaches = [n.data];
      }
    };
    return (x, n) => {
      const w = c("t-tag"), i = c("t-tooltip"), v = c("t-collapse-panel"), p = c("t-collapse");
      return g(), D("div", ea, [
        e(p, { defaultValue: [0, 6] }, {
          default: l(() => [
            (g(), D(X, null, ae(S, (f) => e(v, {
              header: f.name,
              key: f.name,
              class: cl({
                "has--group": f.style == "group"
              })
            }, {
              default: l(() => [
                f.style === "group" ? (g(), E(p, {
                  key: 0,
                  header: f.name
                }, {
                  default: l(() => [
                    (g(!0), D(X, null, ae(f.list, (I) => (g(), E(v, {
                      class: "is--subpanel",
                      header: I.name
                    }, {
                      headerRightContent: l(() => [
                        e(w, { theme: "success" }, {
                          default: l(() => [
                            J(ve(I.children.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: l(() => [
                        (g(!0), D(X, null, ae(I.children, ($) => (g(), D("div", {
                          key: $.name,
                          class: "graphic",
                          draggable: !0,
                          onDragstart: (O) => k(O, $)
                        }, [
                          e(i, {
                            content: $.name
                          }, {
                            default: l(() => {
                              var O;
                              return [
                                (O = $.icon) != null && O.endsWith("svg") ? (g(), D("img", {
                                  key: 0,
                                  src: $.icon,
                                  style: { width: "100%", height: "48px" }
                                }, null, 8, ta)) : (g(), D("svg", aa, [
                                  V("use", {
                                    "xlink:href": "#" + $.icon
                                  }, null, 8, na)
                                ]))
                              ];
                            }),
                            _: 2
                          }, 1032, ["content"])
                        ], 40, la))), 128))
                      ]),
                      _: 2
                    }, 1032, ["header"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["header"])) : (g(!0), D(X, { key: 1 }, ae(f.list, (I) => (g(), D("div", {
                  key: I.name,
                  class: "graphic",
                  draggable: !0,
                  onDragstart: ($) => k($, I)
                }, [
                  e(i, {
                    content: I.name
                  }, {
                    default: l(() => {
                      var $;
                      return [
                        ($ = I.icon) != null && $.endsWith("svg") ? (g(), D("img", {
                          key: 0,
                          class: "icon__image",
                          src: I.icon,
                          alt: "",
                          srcset: ""
                        }, null, 8, da)) : (g(), D("svg", sa, [
                          V("use", {
                            "xlink:href": "#" + I.icon
                          }, null, 8, ia)
                        ])),
                        V("p", null, ve(I.name), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["content"])
                ], 40, oa))), 128))
              ]),
              _: 2
            }, 1032, ["header", "class"])), 64))
          ]),
          _: 1
        })
      ]);
    };
  }
}), ua = /* @__PURE__ */ ce(ra, [["__scopeId", "data-v-4ad49cf5"]]), ma = { class: "panel__wrapper" }, pa = { class: "panel__wrapper" }, fa = /* @__PURE__ */ pe({
  __name: "GraphicsManager",
  props: {},
  setup(s) {
    const m = [
      {
        label: "图纸",
        value: 1,
        slot: "diagrams",
        code: "paper"
      },
      {
        label: "内置组件",
        value: 2,
        slot: "graphics"
      },
      {
        label: "我的组件",
        value: 3,
        slot: "my-pens",
        code: "component"
      }
    ], S = le(2), {
      blueprintList: t,
      componentList: k,
      visible: x,
      folderName: n,
      showAddFolder: w,
      deleteMyPen: i,
      confirm: v,
      close: p,
      selectMode: f,
      selectType: I,
      deleteFolder: $,
      getTree: O,
      fileName: W,
      saveImageComponent: N
    } = el(), d = (y) => {
      const A = m.find((F) => F.value === y);
      if (A && A.code) {
        const F = A.code;
        O(F);
      }
    }, h = ge(() => {
      let y = [];
      return I.value == "paper" ? y = t.value : y = k.value, y.map((A) => ({
        label: A.dictName,
        value: A.id
      }));
    }), { uploadValue: H, headers: oe, sizeLimit: T, handleFail: C } = Fe();
    let u = null;
    const B = (y) => {
      console.log("set folder: ", y), u = y;
    }, z = (y) => {
      var A, F, U;
      if (y.response) {
        const Y = {
          name: "image",
          image: y.response.url || ((A = y.response.data) == null ? void 0 : A.fileurl),
          relativePath: (F = y.response.data) == null ? void 0 : F.relativePath,
          fileName: (U = y.response.data) == null ? void 0 : U.fileName,
          width: 100,
          height: 100,
          x: 100,
          y: 100
        };
        N(u, Y);
      }
    }, ee = async (y, A) => {
      var U;
      if (!A || !A.data)
        return;
      y.stopPropagation();
      let F;
      try {
        typeof A.data == "string" ? F = JSON.parse(A.data) : typeof A.data == "object" && (F = A.data);
      } catch (a) {
        console.log("dragStart error: ", a);
      }
      F && (y instanceof DragEvent ? (U = y.dataTransfer) == null || U.setData("Meta2d", JSON.stringify(F)) : meta2d.canvas.addCaches = [F]);
    }, K = (y) => {
      console.log("addDiagram: ", y), y.children || (y.children = []), meta2d.clear(), meta2d.emit("clear");
    }, P = (y) => {
      const A = ll("warning", {
        content: "系统可能不会保存您所做的更改，是否继续？",
        title: "提示",
        placement: "top-right",
        duration: 0,
        closeBtn: !0,
        footer(F) {
          return F(
            "div",
            {
              style: "text-align: right"
            },
            [
              F(
                Pl,
                {
                  onClick: () => {
                    let U;
                    try {
                      U = JSON.parse(y.data);
                    } catch (a) {
                      console.log("open diagram error: ", a);
                    }
                    meta2d.open(U), meta2d.emit("clear"), meta2d.fitView(), A.then((a) => {
                      a.close(), meta2d.render(!0);
                    });
                  }
                },
                "确定"
              )
            ]
          );
        }
      });
    };
    return (y, A) => {
      const F = c("t-icon"), U = c("t-button"), a = c("t-tooltip"), Y = c("t-popconfirm"), _ = c("t-image"), G = c("t-col"), ne = c("t-row"), te = c("t-empty"), fe = c("t-collapse-panel"), M = c("t-collapse"), L = c("t-upload"), b = c("t-input"), r = c("t-select"), q = c("t-dialog");
      return g(), D(X, null, [
        e(Te, {
          modelValue: S.value,
          "onUpdate:modelValue": A[3] || (A[3] = (R) => S.value = R),
          tabs: m,
          onChange: d
        }, {
          graphics: l(() => [
            e(ua)
          ]),
          diagrams: l(() => [
            V("div", ma, [
              e(U, {
                block: "",
                variant: "outline",
                onClick: A[0] || (A[0] = (R) => j(w)("paper"))
              }, {
                default: l(() => [
                  e(F, {
                    name: "add",
                    slot: "icon"
                  }),
                  A[8] || (A[8] = J(" 新建目录 "))
                ]),
                _: 1
              }),
              A[9] || (A[9] = V("br", null, null, -1)),
              j(t).length ? (g(), E(M, {
                key: 0,
                defaultExpandAll: ""
              }, {
                default: l(() => [
                  (g(!0), D(X, null, ae(j(t), (R) => (g(), E(fe, {
                    value: R.id,
                    header: R.dictName
                  }, {
                    headerRightContent: l(() => [
                      e(a, { content: "新建图纸，将清空画布" }, {
                        default: l(() => [
                          e(U, {
                            size: "small",
                            variant: "outline",
                            style: { marginLeft: "8px" },
                            onClick: (Z) => K(R)
                          }, {
                            default: l(() => [
                              e(F, { name: "chart-add" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      e(a, { content: "删除目录" }, {
                        default: l(() => [
                          e(Y, {
                            theme: "danger",
                            content: "操作后无法恢复, 确定要删除吗?",
                            onConfirm: (Z) => j($)(R, "paper")
                          }, {
                            default: l(() => [
                              e(U, {
                                size: "small",
                                variant: "outline",
                                theme: "danger",
                                style: { marginLeft: "8px" }
                              }, {
                                default: l(() => [
                                  e(F, { name: "delete" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onConfirm"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    default: l(() => [
                      R.data.length ? (g(), E(ne, {
                        key: 0,
                        gutter: [10, 10]
                      }, {
                        default: l(() => [
                          (g(!0), D(X, null, ae(R.data, (Z, se) => (g(), E(G, {
                            key: se,
                            span: 6,
                            onClick: (me) => P(Z)
                          }, {
                            default: l(() => [
                              e(a, { content: "单击打开图纸" }, {
                                default: l(() => [
                                  e(_, {
                                    overlayTrigger: "hover",
                                    src: Z.cover,
                                    fit: "contain",
                                    style: { width: "100px", height: "100px" }
                                  }, {
                                    overlayContent: l(() => [
                                      e(Y, {
                                        theme: "danger",
                                        content: "操作后无法恢复, 确定要删除吗?",
                                        onConfirm: (me) => j(i)(Z, "paper")
                                      }, {
                                        default: l(() => [
                                          e(U, {
                                            size: "small",
                                            variant: "outline",
                                            theme: "danger",
                                            style: { float: "right" },
                                            onClick: He(() => null, ["stop"])
                                          }, {
                                            default: l(() => [
                                              e(F, { name: "delete" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onConfirm"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]))), 128))
                        ]),
                        _: 2
                      }, 1024)) : (g(), E(te, {
                        key: 1,
                        description: ""
                      }))
                    ]),
                    _: 2
                  }, 1032, ["value", "header"]))), 256))
                ]),
                _: 1
              })) : (g(), E(te, {
                key: 1,
                description: ""
              }))
            ])
          ]),
          "my-pens": l(() => [
            V("div", pa, [
              e(U, {
                block: "",
                variant: "outline",
                onClick: A[1] || (A[1] = (R) => j(w)("component"))
              }, {
                default: l(() => [
                  e(F, {
                    name: "add",
                    slot: "icon"
                  }),
                  A[10] || (A[10] = J(" 新建目录 "))
                ]),
                _: 1
              }),
              A[11] || (A[11] = V("br", null, null, -1)),
              j(k).length ? (g(), E(M, {
                key: 0,
                defaultExpandAll: ""
              }, {
                default: l(() => [
                  (g(!0), D(X, null, ae(j(k), (R) => (g(), E(fe, {
                    value: R.id,
                    header: R.dictName
                  }, {
                    headerRightContent: l(() => [
                      e(L, {
                        ref_for: !0,
                        ref: "uploadRef",
                        modelValue: j(H),
                        "onUpdate:modelValue": A[2] || (A[2] = (Z) => we(H) ? H.value = Z : null),
                        action: y.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: j(oe),
                        sizeLimit: j(T),
                        name: "object",
                        theme: "custom",
                        accept: "image/*",
                        style: { display: "inline-flex" },
                        onFail: j(C),
                        onSuccess: z
                      }, {
                        default: l(() => [
                          e(a, { content: "请选择单张小于1MB的图片上传" }, {
                            default: l(() => [
                              e(U, {
                                size: "small",
                                variant: "outline",
                                style: { marginLeft: "8px" },
                                onClick: (Z) => B(R)
                              }, {
                                default: l(() => [
                                  e(F, { name: "upload" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "action", "headers", "sizeLimit", "onFail"]),
                      e(a, { content: "删除目录" }, {
                        default: l(() => [
                          e(Y, {
                            theme: "danger",
                            content: "操作后无法恢复, 确定要删除吗?",
                            onConfirm: (Z) => j($)(R, "component")
                          }, {
                            default: l(() => [
                              e(U, {
                                size: "small",
                                variant: "outline",
                                theme: "danger",
                                style: { marginLeft: "8px" }
                              }, {
                                default: l(() => [
                                  e(F, { name: "delete" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["onConfirm"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    default: l(() => [
                      R.data.length ? (g(), E(ne, {
                        key: 0,
                        gutter: [10, 10]
                      }, {
                        default: l(() => [
                          (g(!0), D(X, null, ae(R.data, (Z, se) => (g(), E(G, {
                            key: se,
                            span: 6,
                            draggable: !0,
                            onDragstart: (me) => ee(me, Z)
                          }, {
                            default: l(() => [
                              e(a, {
                                content: Z.name
                              }, {
                                default: l(() => [
                                  e(_, {
                                    src: Z.cover,
                                    overlayTrigger: "hover",
                                    fit: "contain",
                                    style: { width: "100px", height: "100px" }
                                  }, {
                                    overlayContent: l(() => [
                                      e(Y, {
                                        theme: "danger",
                                        content: "操作后无法恢复, 确定要删除吗?",
                                        onConfirm: (me) => j(i)(Z, "component")
                                      }, {
                                        default: l(() => [
                                          e(U, {
                                            size: "small",
                                            variant: "outline",
                                            theme: "danger",
                                            style: { float: "right" },
                                            onClick: He(() => null, ["stop"])
                                          }, {
                                            default: l(() => [
                                              e(F, { name: "delete" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onConfirm"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"])
                                ]),
                                _: 2
                              }, 1032, ["content"])
                            ]),
                            _: 2
                          }, 1032, ["onDragstart"]))), 128))
                        ]),
                        _: 2
                      }, 1024)) : (g(), E(te, { key: 1 }))
                    ]),
                    _: 2
                  }, 1032, ["value", "header"]))), 256))
                ]),
                _: 1
              })) : (g(), E(te, {
                key: 1,
                description: ""
              }))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        e(q, {
          visible: j(x),
          "onUpdate:visible": A[7] || (A[7] = (R) => we(x) ? x.value = R : null),
          header: j(f) ? "选择目录" : "新建目录",
          onConfirm: j(v),
          onClosed: j(p)
        }, {
          default: l(() => [
            j(f) ? (g(), D(X, { key: 1 }, [
              e(r, {
                modelValue: j(n),
                "onUpdate:modelValue": A[5] || (A[5] = (R) => we(n) ? n.value = R : null),
                options: h.value
              }, null, 8, ["modelValue", "options"]),
              A[12] || (A[12] = V("br", null, null, -1)),
              e(b, {
                modelValue: j(W),
                "onUpdate:modelValue": A[6] || (A[6] = (R) => we(W) ? W.value = R : null),
                placeholder: "请输入图纸/组件名称"
              }, null, 8, ["modelValue"])
            ], 64)) : (g(), E(b, {
              key: 0,
              modelValue: j(n),
              "onUpdate:modelValue": A[4] || (A[4] = (R) => we(n) ? n.value = R : null),
              placeholder: "请输入目录名称",
              maxlength: "20",
              clearable: ""
            }, null, 8, ["modelValue"]))
          ]),
          _: 1
        }, 8, ["visible", "header", "onConfirm", "onClosed"])
      ], 64);
    };
  }
}), va = /* @__PURE__ */ ce(fa, [["__scopeId", "data-v-46eee7b7"]]), ga = { class: "app-page" }, ca = { class: "designer" }, ba = /* @__PURE__ */ pe({
  __name: "Index",
  emits: ["view", "ready"],
  setup(s, { emit: m }) {
    let S;
    function t() {
      S && clearTimeout(S), S = setTimeout(() => {
        const i = meta2d.data();
        localStorage.setItem("meta2d", JSON.stringify(i)), S = void 0;
      }, 100);
    }
    const k = m, x = (i) => {
      k("view", i);
    }, n = le(!1), w = (i) => {
      k("ready", i), n.value = !0;
    };
    return Ce(() => {
      meta2d.on("scale", t), meta2d.on("add", t), meta2d.on("opened", t), meta2d.on("undo", t), meta2d.on("redo", t), meta2d.on("add", t), meta2d.on("delete", t), meta2d.on("rotatePens", t), meta2d.on("translatePens", t);
    }), (i, v) => (g(), D("div", ga, [
      n.value ? (g(), E(dt, ye({ key: 0 }, i.$attrs, { onView: x }), null, 16)) : re("", !0),
      V("div", ca, [
        e(va, Se(Le(i.$attrs)), null, 16),
        e(Al, ye(i.$attrs, { onReady: w }), null, 16),
        n.value ? (g(), E(Zt, Se(ye({ key: 0 }, i.$attrs)), null, 16)) : re("", !0)
      ])
    ]));
  }
}), Va = /* @__PURE__ */ ce(ba, [["__scopeId", "data-v-7081acbb"]]);
export {
  Va as default
};
//# sourceMappingURL=Index-DKgXbjd4.mjs.map
