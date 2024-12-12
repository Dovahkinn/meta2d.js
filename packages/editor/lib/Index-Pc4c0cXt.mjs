import { inject as pl, defineComponent as me, reactive as Ae, ref as le, onMounted as Ve, resolveComponent as b, openBlock as c, createElementBlock as R, Fragment as q, createElementVNode as y, createVNode as e, withCtx as l, createTextVNode as G, renderList as te, createBlock as D, toDisplayString as pe, createCommentVNode as re, normalizeStyle as fl, withDirectives as $e, vShow as Ue, renderSlot as Le, shallowRef as vl, unref as z, shallowReactive as We, isRef as ce, computed as fe, watch as qe, onUnmounted as Re, createSlots as gl, nextTick as Ke, mergeProps as we, normalizeProps as xe, guardReactiveProps as _e, normalizeClass as cl, withModifiers as je } from "vue";
import { c as ye, g as bl, u as Ze, l as wl, P as Be, r as hl, d as he, p as Vl, _ as ve, s as He, E as ue, C as yl, a as Cl, b as Ne, W as xl, e as kl, f as De, h as Sl, S as be, i as $l, j as Ul, k as Pe, m as _l, V as Al } from "./View-x8nqHB5y.mjs";
import { V as Ll, M as Fe, N as Qe, I as Il, B as Pl } from "./index-Bllz_Dlr.mjs";
const Tl = "/favicon.ico";
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Ge;
(function(s) {
  s.pop = "pop", s.push = "push";
})(Ge || (Ge = {}));
var Je;
(function(s) {
  s.back = "back", s.forward = "forward", s.unknown = "";
})(Je || (Je = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Xe;
(function(s) {
  s[s.aborted = 4] = "aborted", s[s.cancelled = 8] = "cancelled", s[s.duplicated = 16] = "duplicated";
})(Xe || (Xe = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Ol = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Rl() {
  return pl(Ol);
}
var el = { exports: {} };
(function(s, m) {
  (function(S, t) {
    t();
  })(ye, function() {
    function S(v, p) {
      return typeof p > "u" ? p = { autoBom: !1 } : typeof p != "object" && (console.warn("Deprecated: Expected third argument to be a object"), p = { autoBom: !p }), p.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(v.type) ? new Blob(["\uFEFF", v], { type: v.type }) : v;
    }
    function t(v, p, f) {
      var L = new XMLHttpRequest();
      L.open("GET", v), L.responseType = "blob", L.onload = function() {
        i(L.response, p, f);
      }, L.onerror = function() {
        console.error("could not download file");
      }, L.send();
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
    var n = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof ye == "object" && ye.global === ye ? ye : void 0, w = n.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), i = n.saveAs || (typeof window != "object" || window !== n ? function() {
    } : "download" in HTMLAnchorElement.prototype && !w ? function(v, p, f) {
      var L = n.URL || n.webkitURL, $ = document.createElement("a");
      p = p || v.name || "download", $.download = p, $.rel = "noopener", typeof v == "string" ? ($.href = v, $.origin === location.origin ? x($) : k($.href) ? t(v, p, f) : x($, $.target = "_blank")) : ($.href = L.createObjectURL(v), setTimeout(function() {
        L.revokeObjectURL($.href);
      }, 4e4), setTimeout(function() {
        x($);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(v, p, f) {
      if (p = p || v.name || "download", typeof v != "string") navigator.msSaveOrOpenBlob(S(v, f), p);
      else if (k(v)) t(v, p, f);
      else {
        var L = document.createElement("a");
        L.href = v, L.target = "_blank", setTimeout(function() {
          x(L);
        });
      }
    } : function(v, p, f, L) {
      if (L = L || open("", "_blank"), L && (L.document.title = L.document.body.innerText = "downloading..."), typeof v == "string") return t(v, p, f);
      var $ = v.type === "application/octet-stream", P = /constructor/i.test(n.HTMLElement) || n.safari, W = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((W || $ && P || w) && typeof FileReader < "u") {
        var O = new FileReader();
        O.onloadend = function() {
          var H = O.result;
          H = W ? H : H.replace(/^data:[^;]*;/, "data:attachment/file;"), L ? L.location.href = H : location = H, L = null;
        }, O.readAsDataURL(v);
      } else {
        var d = n.URL || n.webkitURL, h = d.createObjectURL(v);
        L ? L.location = h : location.href = h, L = null, setTimeout(function() {
          d.revokeObjectURL(h);
        }, 4e4);
      }
    });
    n.saveAs = i.saveAs = i, s.exports = i;
  });
})(el);
var Nl = el.exports;
const Dl = /* @__PURE__ */ bl(Nl), Fl = { class: "app-header header__top" }, El = { class: "logo" }, Ml = { class: "logo" }, zl = { class: "logo" }, Wl = ["href"], jl = { class: "app-header header__bottom" }, Bl = {
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
}, nt = ["xlink:href"], ot = /* @__PURE__ */ me({
  __name: "Header",
  emits: ["view"],
  setup(s, { emit: m }) {
    const S = m;
    Rl();
    const t = Ae({
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
    }), k = le(!1), x = (N, u = {}) => {
      u && u.trigger === "confirm" ? (n(), k.value = !1) : k.value = N;
    }, n = (N) => {
      wl();
    }, w = le(!1), i = le(0);
    Ve(() => {
      const N = setInterval(() => {
        meta2d && (clearInterval(N), v(meta2d.store.data.scale), meta2d.on("scale", v));
      }, 200);
    });
    const v = (N) => {
      i.value = Math.round(N * 100);
    }, p = () => {
      w.value ? (w.value = !1, meta2d.finishDrawLine(), meta2d.drawLine(), meta2d.store.options.disableAnchor = !0) : (w.value = !0, meta2d.drawLine(meta2d.store.options.drawingLineName), meta2d.store.options.disableAnchor = !1);
    }, f = Ae([
      { name: "曲线", icon: "#l-curve2", value: "curve" },
      { name: "线段", icon: "#l-polyline", value: "polyline" },
      { name: "直线", icon: "#l-line", value: "line" },
      { name: "脑图曲线", icon: "#l-mind", value: "mind" }
    ]), L = le("line"), $ = (N) => {
      var u;
      L.value = N, meta2d && (meta2d.store.options.drawingLineName = N, meta2d.canvas.drawingLineName && (meta2d.canvas.drawingLineName = N), (u = meta2d.store.active) == null || u.forEach((M) => {
        meta2d.updateLineType(M, N);
      }));
    }, P = le(""), W = [
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
    ], O = le(""), d = [
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
    ], h = (N) => {
      P.value = N, meta2d.store.data.fromArrow = N, meta2d.store.active && (meta2d.store.active.forEach((u) => {
        u.type === Be.Line && (u.fromArrow = N, meta2d.setValue(
          {
            id: u.id,
            fromArrow: u.fromArrow
          },
          {
            render: !1
          }
        ));
      }), meta2d.render());
    }, H = (N) => {
      O.value = N, meta2d.store.data.toArrow = N, meta2d.store.active && (meta2d.store.active.forEach((u) => {
        u.type === Be.Line && (u.toArrow = N, meta2d.setValue(
          {
            id: u.id,
            toArrow: u.toArrow
          },
          {
            render: !1
          }
        ));
      }), meta2d.render());
    }, ne = () => {
      meta2d.open({ name: "新建项目", pens: [] });
    };
    function T(N) {
      return new Promise((u, M) => {
        const K = new FileReader();
        K.onload = () => {
          u(K.result);
        }, K.onerror = M, K.readAsText(N);
      });
    }
    const C = () => {
      const N = document.createElement("input");
      N.type = "file", N.onchange = async (u) => {
        const M = u.target;
        if (M.files && M.files[0]) {
          const K = await T(M.files[0]);
          try {
            meta2d.open(JSON.parse(K)), meta2d.fitView();
          } catch (g) {
            console.log(g);
          }
        }
      }, N.click();
    }, r = () => {
      const N = meta2d.data();
      Dl.saveAs(
        new Blob([JSON.stringify(N)], {
          type: "text/plain;charset=utf-8"
        }),
        `${N.name || "le5le.meta2d"}.json`
      );
    }, j = () => {
      let N = meta2d.store.data.name;
      N && (N += ".png"), meta2d.downloadPng(N);
    }, F = () => {
      meta2d.undo();
    }, Q = () => {
      meta2d.redo();
    }, Z = () => {
      meta2d.cut();
    }, I = () => {
      meta2d.copy();
    }, V = () => {
      meta2d.paste();
    }, _ = () => {
      meta2d.activeAll();
    }, E = () => {
      meta2d.delete();
    }, { saveBlueprintShow: U } = Ze(!0), a = (N) => {
      if (N == "svg") {
        hl((u) => {
          Vl(u.data);
        });
        return;
      }
      if (N == "save") {
        U();
        return;
      }
      meta2d.toggleAnchorMode();
    }, J = (N, u) => {
      var K;
      N.stopPropagation();
      let M;
      u === "text" ? M = {
        text: "text",
        width: 100,
        height: 20,
        name: "text"
      } : u === "line" && (M = {
        anchors: [
          { id: "0", x: 1, y: 0 },
          { id: "1", x: 0, y: 1 }
        ],
        width: 100,
        height: 100,
        name: "line",
        lineName: "line",
        type: 1
      }), N.dataTransfer ? (K = N.dataTransfer) == null || K.setData("Meta2d", JSON.stringify(M)) : meta2d.canvas.addCaches = he([M]);
    }, A = () => {
      meta2d.scale(1), meta2d.centerView();
    }, X = () => {
      meta2d.fitView();
    }, ae = () => {
      meta2d.stopAnimate();
      const N = meta2d.data();
      localStorage.setItem("meta2d", JSON.stringify(N)), S("view", N), globalThis.$_meta2d_singleton && window.open(`/preview?r=${Date.now()}&id=${N._id || ""}`, "_blank");
    }, ee = (N) => {
      if (N == "none") {
        meta2d.inactive();
        return;
      }
      const M = meta2d.data().pens.filter((g) => N ? g.type === N : g.type != 1), K = [];
      M.forEach((g) => {
        meta2d.findOne(g.id) && K.push(meta2d.findOne(g.id));
      }), meta2d.active(K);
    };
    return (N, u) => {
      const M = b("t-dropdown-item"), K = b("t-dropdown-menu"), g = b("t-dropdown"), ie = b("t-tooltip"), B = b("t-popconfirm"), oe = b("t-icon");
      return c(), R(q, null, [
        y("div", Fl, [
          u[27] || (u[27] = y("a", {
            class: "logo",
            href: "https://doc.le5le.com/document/119359590",
            target: "_blank"
          }, [
            y("img", { src: Tl }),
            y("span", null, "Meta2D")
          ], -1)),
          e(g, {
            minColumnWidth: 200,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              u[12] || (u[12] = y("a", null, " 文件 ", -1)),
              e(K, null, {
                default: l(() => [
                  e(M, { onClick: ne }, {
                    default: l(() => u[10] || (u[10] = [
                      y("a", null, "新建文件", -1)
                    ])),
                    _: 1
                  }),
                  e(M, {
                    onClick: C,
                    divider: "true"
                  }, {
                    default: l(() => u[11] || (u[11] = [
                      y("a", null, "打开文件", -1)
                    ])),
                    _: 1
                  }),
                  e(M, { divider: "true" }, {
                    default: l(() => [
                      y("a", { onClick: r }, "下载JSON文件")
                    ]),
                    _: 1
                  }),
                  e(M, null, {
                    default: l(() => [
                      y("a", { onClick: j }, "下载为PNG")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(g, {
            minColumnWidth: 180,
            maxHeight: 500,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              u[20] || (u[20] = y("a", null, " 编辑 ", -1)),
              e(K, null, {
                default: l(() => [
                  e(M, null, {
                    default: l(() => [
                      y("a", { onClick: F }, u[13] || (u[13] = [
                        y("div", { class: "flex" }, [
                          G(" 撤销 "),
                          y("span", { class: "flex-grow" }),
                          G(" Ctrl + Z ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(M, { divider: "true" }, {
                    default: l(() => [
                      y("a", { onClick: Q }, u[14] || (u[14] = [
                        y("div", { class: "flex" }, [
                          G(" 恢复 "),
                          y("span", { class: "flex-grow" }),
                          G(" Ctrl + Y ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(M, null, {
                    default: l(() => [
                      y("a", { onClick: Z }, u[15] || (u[15] = [
                        y("div", { class: "flex" }, [
                          G(" 剪切 "),
                          y("span", { class: "flex-grow" }),
                          G(" Ctrl + X ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(M, null, {
                    default: l(() => [
                      y("a", { onClick: I }, u[16] || (u[16] = [
                        y("div", { class: "flex" }, [
                          G(" 复制 "),
                          y("span", { class: "flex-grow" }),
                          G(" Ctrl + C ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(M, { divider: "true" }, {
                    default: l(() => [
                      y("a", { onClick: V }, u[17] || (u[17] = [
                        y("div", { class: "flex" }, [
                          G(" 粘贴 "),
                          y("span", { class: "flex-grow" }),
                          G(" Ctrl + V ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(M, null, {
                    default: l(() => [
                      y("a", { onClick: _ }, u[18] || (u[18] = [
                        y("div", { class: "flex" }, [
                          G(" 全选 "),
                          y("span", { class: "flex-grow" }),
                          G(" Ctrl + A ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(M, null, {
                    default: l(() => [
                      y("a", { onClick: E }, u[19] || (u[19] = [
                        y("div", { class: "flex" }, [
                          G("删除 "),
                          y("span", { class: "flex-grow" }),
                          G(" DELETE")
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
          y("a", El, [
            y("span", {
              onClick: u[0] || (u[0] = (Y) => a())
            }, "添加/删除锚点")
          ]),
          e(g, {
            minColumnWidth: 200,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              u[24] || (u[24] = y("a", null, " 批量选择图元 ", -1)),
              e(K, null, {
                default: l(() => [
                  e(M, {
                    onClick: u[1] || (u[1] = (Y) => ee())
                  }, {
                    default: l(() => u[21] || (u[21] = [
                      y("a", null, "节点", -1)
                    ])),
                    _: 1
                  }),
                  e(M, {
                    onClick: u[2] || (u[2] = (Y) => ee(1)),
                    divider: "true"
                  }, {
                    default: l(() => u[22] || (u[22] = [
                      y("a", null, "连线", -1)
                    ])),
                    _: 1
                  }),
                  e(M, {
                    onClick: u[3] || (u[3] = (Y) => ee("none"))
                  }, {
                    default: l(() => u[23] || (u[23] = [
                      y("a", null, "取消", -1)
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          y("a", Ml, [
            e(ie, { content: "选择 .svg 文件导入，单击画布摆放到鼠标指针位置" }, {
              default: l(() => [
                y("span", {
                  onClick: u[4] || (u[4] = (Y) => a("svg"))
                }, "导入 SVG")
              ]),
              _: 1
            })
          ]),
          e(B, {
            visible: k.value,
            theme: "default",
            content: "是否导入 ElectricEditor 生成的 JSON 文件?",
            onVisibleChange: x
          }, {
            default: l(() => u[25] || (u[25] = [
              y("a", { class: "logo" }, [
                y("span", null, "导入")
              ], -1)
            ])),
            _: 1
          }, 8, ["visible"]),
          y("a", zl, [
            y("span", {
              onClick: u[5] || (u[5] = (Y) => a("save"))
            }, "保存图纸")
          ]),
          e(g, {
            minColumnWidth: 180,
            maxHeight: 500,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              u[26] || (u[26] = y("a", null, " 帮助 ", -1)),
              e(K, null, {
                default: l(() => [
                  (c(!0), R(q, null, te(t.helps, (Y) => (c(), D(M, {
                    divider: Y.divider
                  }, {
                    default: l(() => [
                      Y.url ? (c(), R("a", {
                        key: 0,
                        href: Y.url,
                        target: "_blank"
                      }, pe(Y.name), 9, Wl)) : re("", !0)
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
        y("div", jl, [
          e(ie, { content: "撤销" }, {
            default: l(() => [
              (c(), R("svg", {
                class: "l-icon",
                "aria-hidden": "true",
                onClick: F
              }, u[28] || (u[28] = [
                y("use", { "xlink:href": "#l-undo" }, null, -1)
              ])))
            ]),
            _: 1
          }),
          e(ie, { content: "重做" }, {
            default: l(() => [
              (c(), R("svg", {
                class: "l-icon",
                "aria-hidden": "true",
                onClick: Q
              }, u[29] || (u[29] = [
                y("use", { "xlink:href": "#l-redo" }, null, -1)
              ])))
            ]),
            _: 1
          }),
          e(ie, { content: "直线" }, {
            default: l(() => [
              y("span", {
                draggable: !0,
                onDragstart: u[6] || (u[6] = (Y) => J(Y, "line")),
                onClick: u[7] || (u[7] = (Y) => J(Y, "line"))
              }, [
                e(oe, { name: "slash" })
              ], 32)
            ]),
            _: 1
          }),
          e(ie, { content: "文字" }, {
            default: l(() => [
              y("span", {
                draggable: !0,
                onDragstart: u[8] || (u[8] = (Y) => J(Y, "text")),
                onClick: u[9] || (u[9] = (Y) => J(Y, "text"))
              }, u[30] || (u[30] = [
                y("svg", {
                  class: "l-icon",
                  "aria-hidden": "true"
                }, [
                  y("use", { "xlink:href": "#l-text" })
                ], -1)
              ]), 32)
            ]),
            _: 1
          }),
          e(ie, { content: "连线" }, {
            default: l(() => [
              (c(), R("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 1024 1024",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: p,
                style: fl({
                  color: w.value ? " #1677ff" : ""
                })
              }, u[31] || (u[31] = [
                y("path", {
                  d: "M192 64a128 128 0 0 1 123.968 96H384a160 160 0 0 1 159.68 149.504L544 320v384a96 96 0 0 0 86.784 95.552L640 800h68.032a128 128 0 1 1 0 64.064L640 864a160 160 0 0 1-159.68-149.504L480 704V320a96 96 0 0 0-86.784-95.552L384 224l-68.032 0.064A128 128 0 1 1 192 64z m640 704a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM192 128a64 64 0 1 0 0 128 64 64 0 0 0 0-128z",
                  fill: "currentColor"
                }, null, -1)
              ]), 4))
            ]),
            _: 1
          }),
          e(g, {
            minColumnWidth: 160,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var Y;
              return [
                y("a", null, [
                  (c(), R("svg", Bl, [
                    y("use", {
                      "xlink:href": (Y = f.find((de) => de.value === L.value)) == null ? void 0 : Y.icon
                    }, null, 8, Hl)
                  ]))
                ]),
                e(K, null, {
                  default: l(() => [
                    (c(!0), R(q, null, te(f, (de) => (c(), D(M, null, {
                      default: l(() => [
                        y("div", {
                          class: "flex middle",
                          onClick: (Se) => $(de.value)
                        }, [
                          G(pe(de.name) + " ", 1),
                          u[32] || (u[32] = y("span", { class: "flex-grow" }, null, -1)),
                          (c(), R("svg", Jl, [
                            y("use", {
                              "xlink:href": de.icon
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
          e(g, {
            minColumnWidth: 160,
            maxHeight: 560,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var Y;
              return [
                y("a", null, [
                  (c(), R("svg", Yl, [
                    y("use", {
                      "xlink:href": (Y = W.find((de) => de.value === P.value)) == null ? void 0 : Y.icon
                    }, null, 8, ql)
                  ]))
                ]),
                e(K, null, {
                  default: l(() => [
                    (c(), R(q, null, te(W, (de) => e(M, null, {
                      default: l(() => [
                        y("div", {
                          class: "flex middle",
                          style: { height: "30px" },
                          onClick: (Se) => h(de.value)
                        }, [
                          (c(), R("svg", Zl, [
                            y("use", {
                              "xlink:href": de.icon
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
          e(g, {
            minColumnWidth: 160,
            maxHeight: 560,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var Y;
              return [
                y("a", null, [
                  (c(), R("svg", et, [
                    y("use", {
                      "xlink:href": (Y = d.find((de) => de.value === O.value)) == null ? void 0 : Y.icon
                    }, null, 8, lt)
                  ]))
                ]),
                e(K, null, {
                  default: l(() => [
                    (c(), R(q, null, te(d, (de) => e(M, null, {
                      default: l(() => [
                        y("div", {
                          class: "flex middle",
                          style: { height: "30px" },
                          onClick: (Se) => H(de.value)
                        }, [
                          (c(), R("svg", at, [
                            y("use", {
                              "xlink:href": de.icon
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
          u[33] || (u[33] = y("div", { style: { width: "64px" } }, null, -1)),
          $e(y("div", { style: { "line-height": "40px" } }, pe(i.value) + "%", 513), [
            [Ue, i.value > 0]
          ]),
          e(ie, {
            content: "100%视图",
            placement: "bottom"
          }, {
            default: l(() => [
              y("a", { onClick: A }, [
                e(oe, { name: "refresh" })
              ])
            ]),
            _: 1
          }),
          e(ie, {
            content: "窗口大小",
            placement: "bottom"
          }, {
            default: l(() => [
              y("a", {
                onClick: X,
                style: { "margin-left": "-16px" }
              }, [
                e(oe, { name: "fullscreen-exit" })
              ])
            ]),
            _: 1
          }),
          u[34] || (u[34] = y("div", { style: { width: "36px" } }, null, -1)),
          e(ie, { content: "运行查看" }, {
            default: l(() => [
              e(oe, {
                name: "play-circle-stroke",
                onClick: ae
              })
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
}), dt = /* @__PURE__ */ ve(ot, [["__scopeId", "data-v-72d9ea32"]]);
let ge = 1;
const st = 2, Ye = 1e-6;
let se = [], ke = !1, ll = !1;
const Oe = ["line", "polyline"];
function it(s) {
  window.meta2d.on("mouseup", Me), window.meta2d.on("mousedown", Ee), window.meta2d.on("add", nl), window.meta2d.on("active", al), ll = s, window.meta2d.on("opened", tl);
}
function rt(s) {
  Ee(), Me(s);
}
function tl() {
  ll && rt(void 0);
}
function al() {
  ke = !0;
}
function nl() {
  ke = !0;
}
function Ee() {
  ke = !0;
}
function ut(s) {
  let m = [], S = [];
  const k = (s ? window.meta2d.store.active : window.meta2d.store.data.pens).filter((x) => x);
  for (let x = 0; x < k.length; x++) {
    const n = k[x];
    if (n.type === 1 && Oe.indexOf(n.lineName) !== -1)
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
function Me(s) {
  ke && (ke = !1, setTimeout(() => {
    const S = (s ? window.meta2d.store.active : window.meta2d.store.data.pens).filter((n) => n).reverse();
    let t = [], k = [];
    for (let n = 0; n < S.length; n++) {
      const w = S[n];
      if (w.type === 1 && Oe.indexOf(w.lineName) !== -1) {
        if (w.connectedLines)
          for (let i = 0; i < w.connectedLines.length; i++) {
            const v = w.connectedLines[i];
            let p = w.anchors.find((f) => f.id === v.anchor);
            if (p && p.penId) {
              let f = window.meta2d.findOne(v.lineId);
              if (!f)
                continue;
              if (f.connectedLines && f.connectedLines.length > 0) {
                let L = f.connectedLines.findIndex(($) => $.anchor === v.lineAnchor);
                f.connectedLines.splice(L, 1);
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
    const x = window.meta2d.store.data.pens.filter((n) => n.type === 1 && Oe.indexOf(n.lineName) !== -1);
    ut(s), t = t.filter((n) => n);
    for (let n = 0; n < t.length; n++) {
      const w = t[n].calculative.worldAnchors.filter((i) => !i.next && !i.prev);
      se = [];
      for (let i = 0; i < w.length; i++)
        if (i !== w.length - 1) {
          const v = w[i], p = w[i + 1];
          for (let f = 0; f < x.length; f++) {
            ge = 3, ge += x[f].lineWidth / t[n].lineWidth * t[n].lineWidth, ge *= window.meta2d.store.data.scale;
            const L = x[f].calculative.worldAnchors.filter(($) => !$.next && !$.prev);
            for (let $ = 0; $ < L.length; $++)
              if ($ !== L.length - 1) {
                const P = L[$], W = L[$ + 1], { onLine1: O, onLine2: d, x: h, y: H } = gt(v.x, v.y, p.x, p.y, P.x, P.y, W.x, W.y);
                if (O && d) {
                  if (x[f].intersectLines && x[f].intersectLines.findIndex((F) => F.id === t[n].id && F.fromAnchorIndex === $ && F.toAnchorIndex === i) !== -1)
                    continue;
                  t[n].intersectLines ? t[n].intersectLines.findIndex((F) => F.id === x[f].id && F.fromAnchorIndex === i && F.toAnchorIndex === $) === -1 && t[n].intersectLines.push({ fromAnchorIndex: i, toAnchorIndex: $, id: x[f].id }) : (t[n].intersectLines = [], t[n].intersectLines.push({ fromAnchorIndex: i, toAnchorIndex: $, id: x[f].id }));
                  const { a: ne, b: T, c: C } = vt(v, p), r = ft({ radius: ge, x: h, y: H }, { p1: v, p2: p });
                  if (r.length === 2) {
                    let j = 1;
                    ne !== 0 ? j = T / ne : j = H;
                    const F = Math.sqrt(ge * ge / (j * j + 1)), Q = j * F;
                    let Z = { x: 0, y: 0 }, I = { x: 0, y: 0 };
                    -j < 0 ? (Z.x = r[0].x - F, Z.y = r[0].y - Q, I.x = r[1].x - F, I.y = r[1].y - Q) : (Z.x = r[0].x + F, Z.y = r[0].y + Q, I.x = r[1].x + F, I.y = r[1].y + Q);
                    let V = { x: 0, y: 0, id: "" };
                    for (let U = 0; U < w.length; U++)
                      if (U !== w.length - 1) {
                        const a = w[U], J = w[U + 1];
                        if (pt(a, J, { x: h, y: H }, st)) {
                          V.x = a.x, V.y = a.y, V.id = a.id;
                          break;
                        }
                      }
                    const _ = {
                      id: He(),
                      penId: t[n].id,
                      x: r[0].x,
                      y: r[0].y,
                      intersect: !0,
                      hidden: !0,
                      locked: 2,
                      lastAnchorIndex: V.id,
                      brotherId: "",
                      next: {
                        penId: t[n].id,
                        x: Z.x,
                        y: Z.y
                      },
                      prev: {
                        penId: t[n].id,
                        x: r[0].x,
                        y: r[0].y
                      },
                      prevNextType: 1
                      /* Bilateral */
                    }, E = {
                      id: He(),
                      penId: t[n].id,
                      x: r[1].x,
                      y: r[1].y,
                      intersect: !0,
                      hidden: !0,
                      locked: 2,
                      brotherId: "",
                      lastAnchorIndex: V.id,
                      next: {
                        penId: t[n].id,
                        x: r[1].x,
                        y: r[1].y
                      },
                      prev: {
                        penId: t[n].id,
                        x: I.x,
                        y: I.y
                      },
                      prevNextType: 1
                      /* Bilateral */
                    };
                    _.brotherId = E.id, E.brotherId = _.id, se.push(_, E);
                  }
                }
              }
          }
        }
      if (se.length > 0) {
        se.sort((P, W) => {
          if (P.lastAnchorIndex === W.lastAnchorIndex) {
            const O = w.find((d) => d.id === P.lastAnchorIndex);
            return O ? Ce(P.x, P.y, O.x, O.y) - Ce(W.x, W.y, O.x, O.y) : -1;
          } else
            return -1;
        });
        let i = [], v = [], p = -1;
        for (let P = 0, W = se.length; P < W; P++) {
          const O = se[P];
          if (i.indexOf(O.id) !== -1)
            continue;
          const d = se.find((h) => h.id === O.brotherId);
          i.push(O.id, d.id);
          for (let h = P + 1; h < W; h++) {
            const H = se[h], ne = se.find((T) => T.id === H.brotherId);
            if (i.push(H.id, ne.id), O.brotherId !== H.id)
              if (Ce(O.x, O.y, H.x, H.y) < ge * 2 && Ce(O.x, O.y, H.x, H.y) > Ye) {
                p = 1, v.indexOf(O.id) === -1 && v.push(O.id, d.id);
                const T = se.find((C) => C.id === H.brotherId);
                v.indexOf(H.id) === -1 && v.push(H.id, T.id);
              } else {
                if (p === 1) {
                  p = -1;
                  const T = i.findIndex((r) => r === H.id);
                  i.splice(T, 1);
                  const C = i.findIndex((r) => r === H.brotherId);
                  i.splice(C, 1);
                  break;
                }
                break;
              }
          }
        }
        for (let P = 0; P < se.length; P++) {
          const W = se[P];
          v.indexOf(W.id) !== -1 && (se.splice(P, 1), P--);
        }
        for (let P = 0, W = se.length; P < W; P++) {
          const O = se[P];
          for (let d = P + 1; d < W; d++) {
            const h = se[d];
            if (Ce(O.x, O.y, h.x, h.y) <= Ye) {
              se.splice(d, 1);
              let H = se.findIndex((ne) => ne.id === h.brotherId);
              H !== -1 && se.splice(H, 1), d--, W = se.length;
            }
          }
        }
        let f = -1, L = -1, $ = 0;
        for (let P = 0; P < se.length; P++) {
          const W = se[P];
          f === -1 || f !== -1 && f !== W.lastAnchorIndex ? (L = t[n].calculative.worldAnchors.findIndex((d) => d.id === W.lastAnchorIndex), $ = 0) : f === W.lastAnchorIndex && $++, t[n].calculative.worldAnchors.findIndex((d) => d.x === W.x && d.y === W.y && d.penId === W.penId) === -1 && (t[n].calculative.worldAnchors.splice(L + $ + 1, 0, W), f = W.lastAnchorIndex);
        }
        window.meta2d.canvas.updateLines(t[n]), window.meta2d.canvas.initLineRect(t[n]);
      }
    }
    window.meta2d.render();
  }, 0));
}
function mt() {
  window.meta2d.off("mouseup", Me), window.meta2d.off("mousedown", Ee), window.meta2d.off("add", nl), window.meta2d.off("active", al), window.meta2d.off("opened", tl), se = [];
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
function Ce(s, m, S, t) {
  let k = S - s, x = t - m;
  return Math.sqrt(x * x + k * k);
}
function gt(s, m, S, t, k, x, n, w) {
  let i, v, p, f, L, $ = {
    x: null,
    y: null,
    onLine1: !1,
    onLine2: !1
  };
  return i = (w - x) * (S - s) - (n - k) * (t - m), i == 0 || (v = m - x, p = s - k, f = (n - k) * v - (w - x) * p, L = (S - s) * v - (t - m) * p, v = f / i, p = L / i, $.x = s + v * (S - s), $.y = m + v * (t - m), v > 0 && v < 1 && ($.onLine1 = !0), p > 0 && p < 1 && ($.onLine2 = !0)), $;
}
const Ie = /* @__PURE__ */ me({
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
      const i = b("t-tab-panel"), v = b("t-tabs");
      return c(), D(v, {
        value: t.value,
        "onUpdate:value": w[0] || (w[0] = (p) => t.value = p),
        onChange: x
      }, {
        default: l(() => [
          (c(!0), R(q, null, te(s.tabs, (p, f) => (c(), D(i, {
            key: f,
            value: p.value,
            label: p.label
          }, {
            default: l(() => [
              Le(n.$slots, p.slot)
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 3
      }, 8, ["value"]);
    };
  }
}), ct = /* @__PURE__ */ me({
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
    }, p = le("// some code..."), f = vl(), L = ($) => f.value = $;
    return ($, P) => {
      const W = b("t-space"), O = b("t-dialog");
      return c(), D(O, {
        visible: k.value,
        "onUpdate:visible": P[1] || (P[1] = (d) => k.value = d),
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
              P[2] || (P[2] = y("code", null, "function(data: any) { // data 为 MessageBus 消息里的 data 对象", -1)),
              e(z(Ll), {
                value: p.value,
                "onUpdate:value": P[0] || (P[0] = (d) => p.value = d),
                theme: "vs-dark",
                options: v,
                style: { height: "50vh" },
                onMount: L
              }, null, 8, ["value"]),
              P[3] || (P[3] = y("code", null, "}", -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
}), bt = /* @__PURE__ */ ve(ct, [["__scopeId", "data-v-ff6d5876"]]), wt = /* @__PURE__ */ me({
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
    }, x = (I) => {
      t.value.splice(t.value.indexOf(I), 1), w();
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
        Fe.warning("最多只能添加6个属性");
        return;
      }
      p.value.push({
        prop: "",
        value: ""
      });
    }, L = (I, V) => {
      const _ = p.value.indexOf(I);
      p.value.splice(_, 1), $(V);
    }, $ = (I) => {
      const V = {};
      p.value.forEach((_) => {
        V[_.prop] = _.value;
      }), I.value = V, n("change", t.value), console.log("prop change: ", I, t.value);
    }, P = (I) => {
      const V = t.value[Number(I)];
      V.value && typeof V.value == "object" && (p.value = Object.keys(V.value).map((_) => ({
        prop: _,
        value: V.value[_]
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
    ], O = le(!1), d = (I) => {
      H([I]), O.value = !0;
    }, h = We({
      tags: [],
      ids: [],
      id: ""
    }), H = (I) => {
      if (!I.length) return;
      const V = JSON.parse(JSON.stringify(t.value[I[0]]));
      V && (h.tags = V.params.tags, h.ids = T(V.params.ids), h.id = V.id, P(I), F());
    }, ne = yl.map((I) => ({
      label: I.释义,
      value: I.元件类型
    }));
    function T(I) {
      return I.filter((V) => !!meta2d.findOne(V));
    }
    const C = () => {
      O.value = !1;
      const I = t.value.find(
        (V) => V.id === h.id
      );
      I && (I.params.tags = h.tags, I.params.ids = T(h.ids), w());
    }, r = We({
      value: []
    }), j = [
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
    ], F = () => {
      const I = meta2d.data();
      if (h) {
        if (h._tag) {
          r.value = meta2d.find(h._tag);
          return;
        } else if (h.tags.length) {
          const V = [];
          h.tags.forEach((E) => {
            const U = meta2d.find(E);
            V.push(...U);
          });
          const _ = [...new Set(V)];
          setTimeout(() => {
            r.value = _;
          }, 1e3);
          return;
        }
      }
      setTimeout(() => {
        r.value = I.pens;
      }, 1e3);
    }, Q = (I, V) => {
      h.ids = I;
    }, Z = () => {
      if (h.ids.length) {
        const I = h.ids.map((V) => meta2d.findOne(V)).filter((V) => !!V);
        meta2d.active(I);
      } else
        meta2d.active(r.value);
    };
    return (I, V) => {
      const _ = b("t-button"), E = b("t-select"), U = b("t-form-item"), a = b("t-col"), J = b("t-icon"), A = b("t-row"), X = b("t-input"), ae = b("t-form"), ee = b("t-collapse-panel"), N = b("t-collapse"), u = b("t-tooltip"), M = b("t-table"), K = b("t-drawer");
      return c(), R(q, null, [
        e(_, {
          block: "",
          theme: "primary",
          onClick: k
        }, {
          default: l(() => V[3] || (V[3] = [
            G("添加处理器")
          ])),
          _: 1
        }),
        e(N, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: H
        }, {
          default: l(() => [
            (c(!0), R(q, null, te(t.value, (g, ie) => (c(), D(ee, {
              key: ie,
              header: "处理器"
            }, {
              headerRightContent: l(() => [
                e(_, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (B) => x(g)
                }, {
                  default: l(() => [
                    e(J, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(ae, { labelAlign: "left" }, {
                  default: l(() => [
                    e(U, { label: "行为" }, {
                      default: l(() => [
                        e(E, {
                          modelValue: g.action,
                          "onUpdate:modelValue": (B) => g.action = B,
                          options: i,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(U, { label: "目标" }, {
                      default: l(() => [
                        e(_, {
                          variant: "text",
                          theme: "primary",
                          onClick: (B) => d(ie)
                        }, {
                          default: l(() => V[4] || (V[4] = [
                            G("选择目标图元")
                          ])),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    g.action === z(ue).SetProps ? (c(), R(q, { key: 0 }, [
                      e(A, { justify: "start" }, {
                        default: l(() => [
                          e(a, { span: 5 }, {
                            default: l(() => V[5] || (V[5] = [
                              y("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(a, { span: 5 }, {
                            default: l(() => V[6] || (V[6] = [
                              y("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(a, { span: 2 }, {
                            default: l(() => [
                              e(_, {
                                variant: "text",
                                onClick: f
                              }, {
                                default: l(() => [
                                  e(J, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (c(!0), R(q, null, te(p.value, (B, oe) => (c(), D(A, {
                        key: oe,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(a, { span: 5 }, {
                            default: l(() => [
                              e(E, {
                                modelValue: B.prop,
                                "onUpdate:modelValue": (Y) => B.prop = Y,
                                options: v,
                                onChange: (Y) => $(g)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(a, { span: 5 }, {
                            default: l(() => [
                              e(X, {
                                modelValue: B.value,
                                "onUpdate:modelValue": (Y) => B.value = Y,
                                onChange: (Y) => $(g)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(a, { span: 2 }, {
                            default: l(() => [
                              e(_, {
                                variant: "text",
                                onClick: (Y) => L(B, g)
                              }, {
                                default: l(() => [
                                  e(J, { name: "delete" })
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
                        e(E, {
                          modelValue: g.where.key,
                          "onUpdate:modelValue": (B) => g.where.key = B,
                          options: s.wsMsgFields,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 2
                    }, 1024),
                    e(U, { label: "条件" }, {
                      default: l(() => [
                        e(E, {
                          modelValue: g.where.comparison,
                          "onUpdate:modelValue": (B) => g.where.comparison = B,
                          options: W,
                          onChange: w
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(U, { label: "值" }, {
                      default: l(() => [
                        e(X, {
                          modelValue: g.where.value,
                          "onUpdate:modelValue": (B) => g.where.value = B,
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
        e(K, {
          visible: O.value,
          "onUpdate:visible": V[2] || (V[2] = (g) => O.value = g),
          header: "选择图元",
          size: "40%",
          "on-confirm": C,
          "close-btn": !0
        }, {
          default: l(() => [
            z(h) ? (c(), D(A, {
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
                    e(ae, { "label-align": "top" }, {
                      default: l(() => [
                        e(U, {
                          label: "电路元件",
                          name: "name"
                        }, {
                          default: l(() => [
                            e(E, {
                              modelValue: z(h).tags,
                              "onUpdate:modelValue": V[0] || (V[0] = (g) => z(h).tags = g),
                              options: z(ne),
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
                            e(X, {
                              modelValue: z(h)._tag,
                              "onUpdate:modelValue": V[1] || (V[1] = (g) => z(h)._tag = g),
                              placeholder: "输入自定义的标签进行查询，不做保存",
                              clearable: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        e(U, null, {
                          default: l(() => [
                            e(_, {
                              block: "",
                              onClick: F
                            }, {
                              default: l(() => V[7] || (V[7] = [
                                G("查询")
                              ])),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        e(U, null, {
                          default: l(() => [
                            e(u, { content: "符合条件的图元数量大时，会出现卡顿" }, {
                              default: l(() => [
                                e(_, {
                                  block: "",
                                  theme: "warning",
                                  onClick: Z
                                }, {
                                  default: l(() => V[8] || (V[8] = [
                                    G("选中图元")
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
                    z(h) ? (c(), D(M, {
                      key: 0,
                      class: "meta-table",
                      "row-key": "id",
                      columns: j,
                      data: z(r).value,
                      "selected-row-keys": z(h).ids,
                      scroll: { type: "virtual", rowHeight: 48, bufferSize: 30 },
                      style: { height: "100%" },
                      onSelectChange: Q
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
}), ht = { class: "props-panel" }, Vt = { class: "props-panel" }, yt = /* @__PURE__ */ me({
  __name: "FileProps",
  setup(s) {
    const m = Ae({
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
    }), S = Ae({
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
    Ve(() => {
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
    }, x = le(), { uploadValue: n, sizeLimit: w, headers: i } = Ne(), v = (T) => {
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
    }, { resolver: L } = kl(m), $ = () => {
      const T = m.msgTypes.map((j) => Number(j)).filter((j) => !isNaN(j)), C = xl.getInstance(m.wsUrl, {
        busName: m.busName,
        msgTypes: T,
        enableLog: !1,
        onReady: () => {
          console.log("%c连接成功！", "color: green; font-weight: bold;"), Qe.success({
            title: "连接成功！"
          });
        }
      });
      C.connect();
      const r = m.onMessageJsCode;
      C.subscribe(m.busName, T, (j) => {
        try {
          r ? new Function("data", r)(j) : L(j);
        } catch (F) {
          console.log("error: ", F);
        }
      });
    }, P = le(), W = () => {
      P.value && P.value.open(m.onMessageJsCode);
    }, O = (T) => {
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
    }, ne = (T) => {
      console.log("handlers: ", T), m.wsMsgHandlers = T, f("wsMsgHandlers");
    };
    return (T, C) => {
      const r = b("t-input"), j = b("t-form-item"), F = b("t-divider"), Q = b("t-switch"), Z = b("t-input-number"), I = b("t-color-picker"), V = b("t-upload"), _ = b("t-tooltip"), E = b("t-form"), U = b("t-tag-input"), a = b("t-button"), J = b("t-space"), A = b("t-collapse-panel"), X = b("t-icon"), ae = b("t-col"), ee = b("t-row"), N = b("t-collapse");
      return c(), R("div", null, [
        e(Ie, { tabs: t }, {
          "pen-props": l(() => [
            y("div", ht, [
              e(E, { "label-align": "left" }, {
                default: l(() => [
                  e(j, {
                    label: "名称",
                    name: "name"
                  }, {
                    default: l(() => [
                      e(r, {
                        modelValue: m.name,
                        "onUpdate:modelValue": C[0] || (C[0] = (u) => m.name = u),
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F),
                  e(j, {
                    label: "网格",
                    name: "grid"
                  }, {
                    default: l(() => [
                      e(Q, {
                        modelValue: m.grid,
                        "onUpdate:modelValue": C[1] || (C[1] = (u) => m.grid = u),
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "网格大小",
                    name: "gridSize"
                  }, {
                    default: l(() => [
                      e(Z, {
                        modelValue: m.gridSize,
                        "onUpdate:modelValue": C[2] || (C[2] = (u) => m.gridSize = u),
                        min: 0,
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "网格角度",
                    name: "gridRotate"
                  }, {
                    default: l(() => [
                      e(Z, {
                        modelValue: m.gridRotate,
                        "onUpdate:modelValue": C[3] || (C[3] = (u) => m.gridRotate = u),
                        modelModifiers: { number: !0 },
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "网格颜色",
                    name: "gridColor"
                  }, {
                    default: l(() => [
                      e(I, {
                        class: "w-full",
                        modelValue: m.gridColor,
                        "onUpdate:modelValue": C[4] || (C[4] = (u) => m.gridColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F),
                  e(j, {
                    label: "标尺",
                    name: "rule"
                  }, {
                    default: l(() => [
                      e(Q, {
                        modelValue: m.rule,
                        "onUpdate:modelValue": C[5] || (C[5] = (u) => m.rule = u),
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "标尺颜色",
                    name: "ruleColor"
                  }, {
                    default: l(() => [
                      e(I, {
                        class: "w-full",
                        modelValue: m.ruleColor,
                        "onUpdate:modelValue": C[6] || (C[6] = (u) => m.ruleColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F),
                  e(j, {
                    label: "背景颜色",
                    name: "background"
                  }, {
                    default: l(() => [
                      e(I, {
                        class: "w-full",
                        modelValue: m.background,
                        "onUpdate:modelValue": C[7] || (C[7] = (u) => m.background = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "图元默认颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(I, {
                        class: "w-full",
                        modelValue: m.color,
                        "onUpdate:modelValue": C[8] || (C[8] = (u) => m.color = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        clearable: "",
                        "color-modes": ["monochrome"],
                        onChange: k
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, { label: "背景图片" }, {
                    default: l(() => [
                      e(V, {
                        ref_key: "uploadRef",
                        ref: x,
                        modelValue: z(n),
                        "onUpdate:modelValue": C[9] || (C[9] = (u) => ce(n) ? n.value = u : null),
                        action: T.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: z(i),
                        name: "object",
                        sizeLimit: z(w),
                        theme: "image",
                        tips: "请选择单张小于1MB的图片上传",
                        accept: "image/*",
                        onFail: p,
                        onSuccess: v
                      }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "背景图片地址",
                    name: "bkImage"
                  }, {
                    default: l(() => [
                      e(r, {
                        modelValue: m.bkImage,
                        "onUpdate:modelValue": C[10] || (C[10] = (u) => m.bkImage = u),
                        clearable: "",
                        onChange: C[11] || (C[11] = (u) => k("bkImage"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(j, {
                    label: "连线相交弯曲",
                    name: "lineCross"
                  }, {
                    default: l(() => [
                      e(_, { content: "当直线或折线两两相交时，其中相交的交点会自动弯曲显示" }, {
                        default: l(() => [
                          e(Q, {
                            modelValue: m.lineCross,
                            "onUpdate:modelValue": C[12] || (C[12] = (u) => m.lineCross = u),
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
            Le(T.$slots, "struct", {}, void 0, !0)
          ]),
          "comm-props": l(() => [
            y("div", Vt, [
              e(N, {
                defaultExpandAll: "",
                class: "meta-collapse"
              }, {
                default: l(() => [
                  e(A, {
                    value: "0",
                    header: "WebSocket"
                  }, {
                    default: l(() => [
                      e(E, {
                        data: m,
                        "label-align": "left",
                        size: "small",
                        labelWidth: "80px"
                      }, {
                        default: l(() => [
                          e(j, {
                            label: "地址",
                            name: "wsUrl"
                          }, {
                            default: l(() => [
                              e(r, {
                                modelValue: m.wsUrl,
                                "onUpdate:modelValue": C[13] || (C[13] = (u) => m.wsUrl = u),
                                clearable: "",
                                placeholder: "ws:// 开头，不符合则不保存",
                                onBlur: C[14] || (C[14] = (u) => f("wsUrl"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(j, {
                            label: "消息名称",
                            name: "busName"
                          }, {
                            default: l(() => [
                              e(r, {
                                modelValue: m.busName,
                                "onUpdate:modelValue": C[15] || (C[15] = (u) => m.busName = u),
                                clearable: "",
                                onChange: C[16] || (C[16] = (u) => f("busName"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(j, {
                            label: "消息类型",
                            name: "msgTypes"
                          }, {
                            default: l(() => [
                              e(U, {
                                modelValue: m.msgTypes,
                                "onUpdate:modelValue": C[17] || (C[17] = (u) => m.msgTypes = u),
                                clearable: "",
                                placeholder: "消息类型, 数字, 回车添加",
                                onChange: C[18] || (C[18] = (u) => f("msgTypes"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(F),
                          e(J, null, {
                            default: l(() => [
                              e(a, { onClick: $ }, {
                                default: l(() => C[19] || (C[19] = [
                                  G("测试连接")
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
                  e(A, { header: "消息处理代码" }, {
                    default: l(() => [
                      e(a, {
                        block: "",
                        onClick: W
                      }, {
                        default: l(() => C[20] || (C[20] = [
                          G("编辑代码")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(A, { header: "消息状态字段" }, {
                    headerRightContent: l(() => [
                      e(_, {
                        content: "用于消息处理器的触发条件",
                        placement: "top-right"
                      }, {
                        default: l(() => [
                          e(a, { variant: "text" }, {
                            default: l(() => [
                              e(X, { name: "help" })
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
                          G("新增")
                        ])),
                        _: 1
                      }),
                      C[22] || (C[22] = y("br", null, null, -1)),
                      (c(!0), R(q, null, te(m.wsMsgFields, (u, M) => (c(), D(ee, {
                        key: M,
                        justify: "start",
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(ae, { span: 10 }, {
                            default: l(() => [
                              e(r, {
                                modelValue: u.value,
                                "onUpdate:modelValue": (K) => u.value = K,
                                onChange: H
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024),
                          e(ae, { span: 2 }, {
                            default: l(() => [
                              e(a, {
                                variant: "text",
                                onClick: (K) => h(M)
                              }, {
                                default: l(() => [
                                  e(X, { name: "delete" })
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
                  e(A, { header: "消息处理队列" }, {
                    headerRightContent: l(() => [
                      e(_, {
                        content: "【消息处理代码】存在时，此处的设置无效",
                        placement: "top-right"
                      }, {
                        default: l(() => [
                          e(a, { variant: "text" }, {
                            default: l(() => [
                              e(X, { name: "help" })
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
                        onChange: ne
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
          ref: P,
          onConfirm: O
        }, null, 512)
      ]);
    };
  }
}), Ct = /* @__PURE__ */ ve(yt, [["__scopeId", "data-v-8604542d"]]), xt = [
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
], ol = [
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
], dl = [
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
], sl = {
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
}, Tt = /* @__PURE__ */ me({
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
      const w = b("t-input-number"), i = b("t-form-item"), v = b("t-color-picker"), p = b("t-option"), f = b("t-select"), L = b("t-slider"), $ = b("t-divider"), P = b("t-switch"), W = b("t-input"), O = b("t-form");
      return c(), R("div", It, [
        e(O, { "label-align": "left" }, {
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
                    (c(), D(p, {
                      key: 0,
                      value: 0,
                      label: "实线"
                    })),
                    (c(), D(p, {
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
                e(L, {
                  modelValue: s.data.globalAlpha,
                  "onUpdate:modelValue": n[16] || (n[16] = (d) => s.data.globalAlpha = d),
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: n[17] || (n[17] = (d) => t("globalAlpha"))
                }, null, 8, ["modelValue"]),
                y("span", Pt, pe(s.data.globalAlpha), 1)
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
                e(P, {
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
            [1, 2].includes(s.data.textType) ? (c(), D(i, {
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
            })) : (c(), D(i, {
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
                e(P, {
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
                e(P, {
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
                e(P, {
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
                e(P, {
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
                e(P, {
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
                e(P, {
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
                e(P, {
                  modelValue: s.data.flipY,
                  "onUpdate:modelValue": n[76] || (n[76] = (d) => s.data.flipY = d),
                  onChange: n[77] || (n[77] = (d) => t("flipY"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e($),
            s.data.penName == "combine" ? (c(), D(i, {
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
                    (c(!0), R(q, null, te(s.statusList, (d, h) => (c(), D(p, {
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
}), il = /* @__PURE__ */ ve(Tt, [["__scopeId", "data-v-af6e329a"]]), Ot = /* @__PURE__ */ me({
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
    }, w = (O) => {
      t.value = t.value.filter((d) => d !== O), v();
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
    ], f = le([]), L = () => {
      if (f.value.length >= 6) {
        Fe.warning("最多只能添加6个属性");
        return;
      }
      f.value.push({
        prop: "",
        value: ""
      });
    }, $ = (O) => {
      const d = f.value.indexOf(O);
      f.value.splice(d, 1);
    }, P = (O) => {
      const d = {};
      f.value.forEach((h) => {
        d[h.prop] = h.value;
      }), O.value = d, i("change", t.value);
    }, W = (O) => {
      const d = t.value[Number(O)];
      d.value && typeof d.value == "object" && (f.value = Object.keys(d.value).map((h) => ({
        prop: h,
        value: d.value[h]
      })));
    };
    return (O, d) => {
      const h = b("t-button"), H = b("t-select"), ne = b("t-form-item"), T = b("t-input"), C = b("t-col"), r = b("t-icon"), j = b("t-row"), F = b("t-form"), Q = b("t-collapse-panel"), Z = b("t-collapse");
      return c(), R(q, null, [
        d[3] || (d[3] = y("br", null, null, -1)),
        e(h, {
          block: "",
          theme: "primary",
          onClick: n
        }, {
          default: l(() => d[0] || (d[0] = [
            G("添加事件")
          ])),
          _: 1
        }),
        e(Z, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: W
        }, {
          default: l(() => [
            (c(!0), R(q, null, te(t.value, (I) => (c(), D(Q, { header: "事件" }, {
              headerRightContent: l(() => [
                e(h, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (V) => w(I)
                }, {
                  default: l(() => [
                    e(r, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(F, { labelAlign: "left" }, {
                  default: l(() => [
                    e(ne, { label: "事件类型" }, {
                      default: l(() => [
                        e(H, {
                          modelValue: I.name,
                          "onUpdate:modelValue": (V) => I.name = V,
                          options: k,
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(ne, { label: "事件行为" }, {
                      default: l(() => [
                        e(H, {
                          modelValue: I.action,
                          "onUpdate:modelValue": (V) => I.action = V,
                          options: x,
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    I.action === z(ue).Link ? (c(), D(ne, {
                      key: 0,
                      label: "链接地址"
                    }, {
                      default: l(() => [
                        e(T, {
                          modelValue: I.value,
                          "onUpdate:modelValue": (V) => I.value = V,
                          clearable: "",
                          onChange: v
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : re("", !0),
                    I.action === z(ue).SetProps ? (c(), R(q, { key: 1 }, [
                      e(ne, { label: "目标" }, {
                        default: l(() => [
                          e(T, {
                            modelValue: I.params,
                            "onUpdate:modelValue": (V) => I.params = V,
                            placeholder: "可输入目标图元的ID/Tag",
                            clearable: "",
                            onChange: v
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      e(j, { justify: "start" }, {
                        default: l(() => [
                          e(C, { span: 5 }, {
                            default: l(() => d[1] || (d[1] = [
                              y("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(C, { span: 5 }, {
                            default: l(() => d[2] || (d[2] = [
                              y("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(C, { span: 2 }, {
                            default: l(() => [
                              e(h, {
                                variant: "text",
                                onClick: L
                              }, {
                                default: l(() => [
                                  e(r, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (c(!0), R(q, null, te(f.value, (V, _) => (c(), D(j, {
                        key: _,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(C, { span: 5 }, {
                            default: l(() => [
                              e(H, {
                                modelValue: V.prop,
                                "onUpdate:modelValue": (E) => V.prop = E,
                                options: p,
                                onChange: (E) => P(I)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(C, { span: 5 }, {
                            default: l(() => [
                              e(T, {
                                modelValue: V.value,
                                "onUpdate:modelValue": (E) => V.value = E,
                                onChange: (E) => P(I)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(C, { span: 2 }, {
                            default: l(() => [
                              e(h, {
                                variant: "text",
                                onClick: (E) => $(V)
                              }, {
                                default: l(() => [
                                  e(r, { name: "delete" })
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
                      z(ue).PauseAnimate,
                      z(ue).StopAnimate,
                      z(ue).StartAnimate
                    ].includes(I.action) ? (c(), D(ne, {
                      key: 2,
                      label: "目标"
                    }, {
                      default: l(() => [
                        e(T, {
                          modelValue: I.value,
                          "onUpdate:modelValue": (V) => I.value = V,
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
}, Ft = { class: "props-panel" }, Et = { class: "props-panel" }, Mt = { class: "props-panel" }, zt = /* @__PURE__ */ me({
  __name: "PenProps",
  setup(s) {
    const m = fe(() => [
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
    ].filter((U) => U.slot == "image" ? t.value.name == U.slot : !0)), { selections: S } = De(), t = le(), k = le(), x = le(1), n = fe(() => {
      var U;
      return ((U = t.value) == null ? void 0 : U.name) == "line";
    });
    Ve(() => {
      x.value = 1, w();
    });
    const w = () => {
      t.value = S.pen || {}, t.value.globalAlpha == null && (t.value.globalAlpha = 1), t.value.tags || (t.value.tags = []), k.value = meta2d.getPenRect(t.value), x.value == 2 && (["image"].includes(t.value.name) || (x.value = 1));
    }, i = fe(() => {
      var U;
      return ((U = t.value) == null ? void 0 : U.name) != "combine" ? [] : t.value.children.map((a, J) => ({
        label: `状态${J + 1}`,
        value: a
      }));
    }), v = (U = !1) => {
      U ? meta2d.startAnimate(t.value.id) : meta2d.stopAnimate(t.value.id);
    }, p = le(!1), f = le([]), L = () => {
      f.value = he(t.value.frames || []), p.value = !0;
    }, $ = () => {
      console.log("custom frames: ", f.value), t.value.frames = he(f.value), p.value = !1, Ke(() => {
        f.value = [];
      });
    }, P = () => {
      f.value.push({
        duration: 100,
        globalAlpha: 1,
        penName: t.value.name
      });
    }, W = (U) => {
      const a = f.value.indexOf(U);
      a > -1 && f.value.splice(a, 1);
    }, O = qe(() => {
      var U;
      return (U = S.pen) == null ? void 0 : U.id;
    }, w), d = [void 0, [5, 5]], h = (U) => {
      const a = { id: t.value.id };
      if (a[U] = t.value[U], U === "dash" && (a.lineDash = d[a[U]]), U == "animateType") {
        console.log("animate type: ", a);
        const J = a.animateType, A = sl[J];
        a.frames = A;
      }
      meta2d.setValue(a, { render: !0 });
    }, H = (U) => {
      const a = { id: t.value.id };
      a[U] = k.value[U], meta2d.setValue(a, { render: !0 });
    }, ne = () => {
      meta2d.top(), meta2d.render();
    }, T = () => {
      meta2d.bottom(), meta2d.render();
    }, C = () => {
      meta2d.up(), meta2d.render();
    }, r = () => {
      meta2d.down(), meta2d.render();
    };
    Re(() => {
      O();
    });
    const j = le(), { uploadValue: F, sizeLimit: Q, headers: Z } = Ne(), I = (U) => {
      var a;
      console.log("upload success: ", U), U.response && (t.value.image = U.response.url || ((a = U.response.data) == null ? void 0 : a.fileurl), h("image"));
    }, V = (U) => {
      console.log("upload fail: ", U);
    }, _ = () => {
      Sl(t.value.id).then((U) => {
        console.log("copy id: ", U), Fe.success({ content: "复制成功" });
      });
    }, E = (U) => {
      t.value.events = U;
    };
    return (U, a) => {
      const J = b("t-color-picker"), A = b("t-form-item"), X = b("t-option"), ae = b("t-select"), ee = b("t-input-number"), N = b("t-slider"), u = b("t-divider"), M = b("t-switch"), K = b("t-input"), g = b("t-button"), ie = b("t-space"), B = b("t-form"), oe = b("t-upload"), Y = b("t-tag"), de = b("t-icon"), Se = b("t-tag-input"), rl = b("t-collapse-panel"), ul = b("t-collapse"), ml = b("t-drawer");
      return c(), R("div", Rt, [
        t.value ? (c(), D(Ie, {
          key: 0,
          tabs: m.value,
          defaultValue: x.value
        }, gl({
          pen: l(() => [
            y("div", Nt, [
              e(B, { "label-align": "left" }, {
                default: l(() => [
                  e(A, {
                    label: "颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "浮动颜色",
                    name: "hoverColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "选中颜色",
                    name: "activeColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "背景",
                    name: "background"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "线条",
                    name: "dash"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.dash,
                        "onUpdate:modelValue": a[8] || (a[8] = (o) => t.value.dash = o),
                        onChange: a[9] || (a[9] = (o) => h("dash"))
                      }, {
                        default: l(() => [
                          (c(), D(X, {
                            key: 0,
                            value: 0,
                            label: "实线"
                          })),
                          (c(), D(X, {
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
                  e(A, {
                    label: "线条宽度",
                    name: "lineWidth"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: t.value.lineWidth,
                        "onUpdate:modelValue": a[10] || (a[10] = (o) => t.value.lineWidth = o),
                        onChange: a[11] || (a[11] = (o) => h("lineWidth"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "圆角",
                    name: "borderRadius"
                  }, {
                    default: l(() => [
                      e(ee, {
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
                  e(A, {
                    label: "不透明度",
                    name: "globalAlpha"
                  }, {
                    default: l(() => [
                      e(N, {
                        modelValue: t.value.globalAlpha,
                        "onUpdate:modelValue": a[14] || (a[14] = (o) => t.value.globalAlpha = o),
                        min: 0,
                        max: 1,
                        step: 0.01,
                        onChange: a[15] || (a[15] = (o) => h("globalAlpha"))
                      }, null, 8, ["modelValue"]),
                      y("span", Dt, pe(t.value.globalAlpha), 1)
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "阴影颜色",
                    name: "shadowColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "阴影模糊",
                    name: "shadowBlur"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: t.value.shadowBlur,
                        "onUpdate:modelValue": a[18] || (a[18] = (o) => t.value.shadowBlur = o),
                        min: 0,
                        onChange: a[19] || (a[19] = (o) => h("shadowBlur"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "阴影X偏移",
                    name: "shadowOffsetX"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: t.value.shadowOffsetX,
                        "onUpdate:modelValue": a[20] || (a[20] = (o) => t.value.shadowOffsetX = o),
                        onChange: a[21] || (a[21] = (o) => h("shadowOffsetX"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "阴影Y偏移",
                    name: "shadowOffsetY"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: t.value.shadowOffsetY,
                        "onUpdate:modelValue": a[22] || (a[22] = (o) => t.value.shadowOffsetY = o),
                        onChange: a[23] || (a[23] = (o) => h("shadowOffsetY"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(u),
                  e(A, {
                    label: "文字阴影",
                    name: "textHasShadow"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.textHasShadow,
                        "onUpdate:modelValue": a[24] || (a[24] = (o) => t.value.textHasShadow = o),
                        onChange: a[25] || (a[25] = (o) => h("textHasShadow"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "文本",
                    name: "text"
                  }, {
                    default: l(() => [
                      e(K, {
                        modelValue: t.value.text,
                        "onUpdate:modelValue": a[26] || (a[26] = (o) => t.value.text = o),
                        clearable: "",
                        onChange: a[27] || (a[27] = (o) => h("text"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "字体",
                    name: "fontSize"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: t.value.fontSize,
                        "onUpdate:modelValue": a[28] || (a[28] = (o) => t.value.fontSize = o),
                        onChange: a[29] || (a[29] = (o) => h("fontSize"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "文字颜色类型",
                    name: "textType"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.textType,
                        "onUpdate:modelValue": a[30] || (a[30] = (o) => t.value.textType = o),
                        onChange: a[31] || (a[31] = (o) => h("textType"))
                      }, {
                        default: l(() => [
                          e(X, {
                            key: "hex",
                            value: 0,
                            label: "纯色"
                          }),
                          e(X, {
                            key: "rgb",
                            value: 1,
                            label: "线性渐变"
                          }),
                          e(X, {
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
                  [1, 2].includes(t.value.textType) ? (c(), D(A, {
                    key: 0,
                    label: "文字渐变",
                    name: "textGradientColors"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  })) : (c(), D(A, {
                    key: 1,
                    label: "文字颜色",
                    name: "textColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "文本风格",
                    name: "fontStyle"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.fontStyle,
                        "onUpdate:modelValue": a[36] || (a[36] = (o) => t.value.fontStyle = o),
                        onChange: a[37] || (a[37] = (o) => h("fontStyle"))
                      }, {
                        default: l(() => [
                          e(X, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(X, {
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
                  e(A, {
                    label: "文本粗细",
                    name: "fontWeight"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.fontWeight,
                        "onUpdate:modelValue": a[38] || (a[38] = (o) => t.value.fontWeight = o),
                        onChange: a[39] || (a[39] = (o) => h("fontWeight"))
                      }, {
                        default: l(() => [
                          e(X, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(X, {
                            key: "bold",
                            value: "bold",
                            label: "加粗"
                          }),
                          e(X, {
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
                  e(A, {
                    label: "换行",
                    name: "whiteSpace"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.whiteSpace,
                        "onUpdate:modelValue": a[40] || (a[40] = (o) => t.value.whiteSpace = o),
                        onChange: a[41] || (a[41] = (o) => h("whiteSpace"))
                      }, {
                        default: l(() => [
                          e(X, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(X, {
                            key: "nowrap",
                            value: "nowrap",
                            label: "不换行"
                          }),
                          e(X, {
                            key: "pre-line",
                            value: "pre-line",
                            label: "换行符换行"
                          }),
                          e(X, {
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
                  e(A, {
                    label: "超出省略",
                    name: "ellipsis"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.ellipsis,
                        "onUpdate:modelValue": a[42] || (a[42] = (o) => t.value.ellipsis = o),
                        onChange: a[43] || (a[43] = (o) => h("ellipsis"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "下划线",
                    name: "textDecoration"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.textDecoration,
                        "onUpdate:modelValue": a[44] || (a[44] = (o) => t.value.textDecoration = o),
                        onChange: a[45] || (a[45] = (o) => h("textDecoration"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "下划线颜色",
                    name: "textDecorationColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "删除线",
                    name: "textStrickout"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.textStrickout,
                        "onUpdate:modelValue": a[48] || (a[48] = (o) => t.value.textStrickout = o),
                        onChange: a[49] || (a[49] = (o) => h("textStrickout"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "删除线颜色",
                    name: "textStrickoutColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "文字水平对齐",
                    name: "textAlign"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.textAlign,
                        "onUpdate:modelValue": a[52] || (a[52] = (o) => t.value.textAlign = o),
                        onChange: a[53] || (a[53] = (o) => h("textAlign"))
                      }, {
                        default: l(() => [
                          e(X, {
                            key: "left",
                            value: "left",
                            label: "左对齐"
                          }),
                          e(X, {
                            key: "center",
                            value: "center",
                            label: "居中"
                          }),
                          e(X, {
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
                  e(A, {
                    label: "文字垂直对齐",
                    name: "textBaseline"
                  }, {
                    default: l(() => [
                      e(ae, {
                        modelValue: t.value.textBaseline,
                        "onUpdate:modelValue": a[54] || (a[54] = (o) => t.value.textBaseline = o),
                        onChange: a[55] || (a[55] = (o) => h("textBaseline"))
                      }, {
                        default: l(() => [
                          e(X, {
                            key: "top",
                            value: "top",
                            label: "顶部对齐"
                          }),
                          e(X, {
                            key: "middle",
                            value: "middle",
                            label: "居中"
                          }),
                          e(X, {
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
                  e(u),
                  e(A, {
                    label: "X",
                    name: "x"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: k.value.x,
                        "onUpdate:modelValue": a[56] || (a[56] = (o) => k.value.x = o),
                        onChange: a[57] || (a[57] = (o) => H("x"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "Y",
                    name: "y"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: k.value.y,
                        "onUpdate:modelValue": a[58] || (a[58] = (o) => k.value.y = o),
                        onChange: a[59] || (a[59] = (o) => H("y"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "宽",
                    name: "width"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: k.value.width,
                        "onUpdate:modelValue": a[60] || (a[60] = (o) => k.value.width = o),
                        onChange: a[61] || (a[61] = (o) => H("width"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "高",
                    name: "height"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: k.value.height,
                        "onUpdate:modelValue": a[62] || (a[62] = (o) => k.value.height = o),
                        onChange: a[63] || (a[63] = (o) => H("height"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "锁定宽高比",
                    name: "ratio"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.ratio,
                        "onUpdate:modelValue": a[64] || (a[64] = (o) => t.value.ratio = o),
                        onChange: a[65] || (a[65] = (o) => h("ratio"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "旋转角度",
                    name: "rotate"
                  }, {
                    default: l(() => [
                      e(ee, {
                        modelValue: t.value.rotate,
                        "onUpdate:modelValue": a[66] || (a[66] = (o) => t.value.rotate = o),
                        onChange: a[67] || (a[67] = (o) => h("rotate"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(u),
                  e(A, {
                    label: "进度",
                    name: "progress"
                  }, {
                    default: l(() => [
                      e(ee, {
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
                  e(A, {
                    label: "进度颜色",
                    name: "progressColor"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "渐变颜色",
                    name: "progressGradientColors"
                  }, {
                    default: l(() => [
                      e(J, {
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
                  e(A, {
                    label: "垂直进度",
                    name: "verticalProgress"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.verticalProgress,
                        "onUpdate:modelValue": a[74] || (a[74] = (o) => t.value.verticalProgress = o),
                        onChange: a[75] || (a[75] = (o) => h("verticalProgress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "反向进度",
                    name: "reverseProgress"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.reverseProgress,
                        "onUpdate:modelValue": a[76] || (a[76] = (o) => t.value.reverseProgress = o),
                        onChange: a[77] || (a[77] = (o) => h("reverseProgress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "水平翻转",
                    name: "flipX"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.flipX,
                        "onUpdate:modelValue": a[78] || (a[78] = (o) => t.value.flipX = o),
                        onChange: a[79] || (a[79] = (o) => h("flipX"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "垂直翻转",
                    name: "flipY"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.flipY,
                        "onUpdate:modelValue": a[80] || (a[80] = (o) => t.value.flipY = o),
                        onChange: a[81] || (a[81] = (o) => h("flipY"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(u),
                  t.value.name == "combine" && t.value.showChild != null ? (c(), R(q, { key: 2 }, [
                    e(A, {
                      label: "状态",
                      name: "status"
                    }, {
                      default: l(() => [
                        e(ae, {
                          modelValue: t.value.showChild,
                          "onUpdate:modelValue": a[82] || (a[82] = (o) => t.value.showChild = o),
                          onChange: a[83] || (a[83] = (o) => h("showChild"))
                        }, {
                          default: l(() => [
                            (c(!0), R(q, null, te(i.value, (o, ze) => (c(), D(X, {
                              key: o.value,
                              value: ze,
                              label: o.label
                            }, null, 8, ["value", "label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(u)
                  ], 64)) : re("", !0),
                  e(ie, { size: "4px" }, {
                    default: l(() => [
                      e(g, { onClick: ne }, {
                        default: l(() => a[114] || (a[114] = [
                          G("置顶")
                        ])),
                        _: 1
                      }),
                      e(g, { onClick: T }, {
                        default: l(() => a[115] || (a[115] = [
                          G("置底")
                        ])),
                        _: 1
                      }),
                      e(g, { onClick: C }, {
                        default: l(() => a[116] || (a[116] = [
                          G("上一层")
                        ])),
                        _: 1
                      }),
                      e(g, { onClick: r }, {
                        default: l(() => a[117] || (a[117] = [
                          G("下一层")
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
            y("div", Et, [
              e(B, { "label-align": "left" }, {
                default: l(() => [
                  n.value ? (c(), R(q, { key: 0 }, [
                    e(A, {
                      label: "动画效果",
                      name: "lineAnimateType"
                    }, {
                      default: l(() => [
                        e(ae, {
                          modelValue: t.value.lineAnimateType,
                          "onUpdate:modelValue": a[89] || (a[89] = (o) => t.value.lineAnimateType = o),
                          clearable: "",
                          onChange: a[90] || (a[90] = (o) => h("lineAnimateType"))
                        }, {
                          default: l(() => [
                            (c(!0), R(q, null, te(z(dl), (o) => (c(), D(X, {
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
                    e(A, {
                      label: "反向流动",
                      name: "reverse"
                    }, {
                      default: l(() => [
                        e(M, {
                          modelValue: t.value.animateReverse,
                          "onUpdate:modelValue": a[91] || (a[91] = (o) => t.value.animateReverse = o),
                          onChange: a[92] || (a[92] = (o) => h("animateReverse"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(A, {
                      label: "线宽",
                      name: "animateLineWidth"
                    }, {
                      default: l(() => [
                        e(ee, {
                          modelValue: t.value.animateLineWidth,
                          "onUpdate:modelValue": a[93] || (a[93] = (o) => t.value.animateLineWidth = o),
                          onChange: a[94] || (a[94] = (o) => h("animateLineWidth"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(A, {
                      label: "速度",
                      name: "animateSpan"
                    }, {
                      default: l(() => [
                        e(ee, {
                          modelValue: t.value.animateSpan,
                          "onUpdate:modelValue": a[95] || (a[95] = (o) => t.value.animateSpan = o),
                          min: 1,
                          max: 5,
                          onChange: a[96] || (a[96] = (o) => h("animateSpan"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(A, {
                      label: "颜色",
                      name: "color"
                    }, {
                      default: l(() => [
                        e(J, {
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
                    e(A, {
                      label: "动画发光",
                      name: "animateShadow"
                    }, {
                      default: l(() => [
                        e(M, {
                          modelValue: t.value.animateShadow,
                          "onUpdate:modelValue": a[99] || (a[99] = (o) => t.value.animateShadow = o),
                          onChange: a[100] || (a[100] = (o) => h("animateShadow"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(A, {
                      label: "发光颜色",
                      name: "animateShadowColor"
                    }, {
                      default: l(() => [
                        e(J, {
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
                  ], 64)) : (c(), R(q, { key: 1 }, [
                    e(A, {
                      label: "动画效果",
                      name: "animateType"
                    }, {
                      default: l(() => [
                        e(ae, {
                          modelValue: t.value.animateType,
                          "onUpdate:modelValue": a[103] || (a[103] = (o) => t.value.animateType = o),
                          clearable: "",
                          onChange: a[104] || (a[104] = (o) => h("animateType"))
                        }, {
                          default: l(() => [
                            (c(!0), R(q, null, te(z(ol), (o) => (c(), D(X, {
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
                    t.value.animateType == "x-custom" ? (c(), D(A, {
                      key: 0,
                      label: "自定义动画帧"
                    }, {
                      default: l(() => [
                        e(g, {
                          variant: "text",
                          theme: "primary",
                          onClick: L
                        }, {
                          default: l(() => a[118] || (a[118] = [
                            G("编辑 ")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : re("", !0)
                  ], 64)),
                  e(A, {
                    label: "自动播放",
                    name: "autoPlay"
                  }, {
                    default: l(() => [
                      e(M, {
                        modelValue: t.value.autoPlay,
                        "onUpdate:modelValue": a[105] || (a[105] = (o) => t.value.autoPlay = o),
                        onChange: a[106] || (a[106] = (o) => h("autoPlay"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(u),
                  e(ie, null, {
                    default: l(() => [
                      e(g, {
                        onClick: a[107] || (a[107] = (o) => v(!0))
                      }, {
                        default: l(() => a[119] || (a[119] = [
                          G("播放")
                        ])),
                        _: 1
                      }),
                      e(g, {
                        onClick: a[108] || (a[108] = (o) => v())
                      }, {
                        default: l(() => a[120] || (a[120] = [
                          G("停止")
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
            Le(U.$slots, "struct", { pen: t.value }, void 0, !0)
          ]),
          data: l(() => [
            y("div", Mt, [
              e(B, { "label-align": "left" }, {
                default: l(() => [
                  e(A, {
                    label: "ID",
                    name: "data"
                  }, {
                    default: l(() => [
                      e(Y, {
                        maxWidth: "100%",
                        style: { flex: "1", width: "0" }
                      }, {
                        default: l(() => [
                          G(pe(t.value.id), 1)
                        ]),
                        _: 1
                      }),
                      e(g, {
                        theme: "primary",
                        variant: "text",
                        style: { "margin-left": "10px" },
                        onClick: _
                      }, {
                        default: l(() => [
                          e(de, { name: "copy" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "描述",
                    name: "description"
                  }, {
                    default: l(() => [
                      e(K, {
                        modelValue: t.value.description,
                        "onUpdate:modelValue": a[109] || (a[109] = (o) => t.value.description = o),
                        maxlength: "50",
                        clearable: "",
                        onChange: a[110] || (a[110] = (o) => h("description"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(A, {
                    label: "标签",
                    name: "tags"
                  }, {
                    default: l(() => [
                      e(Se, {
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
            e(Ot, {
              defaultEventsValue: t.value.events,
              onChange: E
            }, null, 8, ["defaultEventsValue"])
          ]),
          _: 2
        }, [
          ["image"].includes(t.value.name) ? {
            name: "image",
            fn: l(() => [
              y("div", Ft, [
                e(B, { "label-align": "left" }, {
                  default: l(() => [
                    e(A, {
                      label: "图片上传",
                      name: "image"
                    }, {
                      default: l(() => [
                        e(oe, {
                          ref_key: "uploadRef",
                          ref: j,
                          modelValue: z(F),
                          "onUpdate:modelValue": a[84] || (a[84] = (o) => ce(F) ? F.value = o : null),
                          action: U.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                          headers: z(Z),
                          name: "object",
                          sizeLimit: z(Q),
                          theme: "image",
                          tips: "请选择单张小于1MB的图片上传",
                          accept: "image/*",
                          onFail: V,
                          onSuccess: I
                        }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                      ]),
                      _: 1
                    }),
                    e(A, {
                      label: "图片地址",
                      name: "image"
                    }, {
                      default: l(() => [
                        e(K, {
                          modelValue: t.value.image,
                          "onUpdate:modelValue": a[85] || (a[85] = (o) => t.value.image = o),
                          clearable: "",
                          onChange: a[86] || (a[86] = (o) => h("image"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(A, {
                      label: "保持比例",
                      name: "imageRatio"
                    }, {
                      default: l(() => [
                        e(M, {
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
            e(g, {
              block: "",
              theme: "primary",
              onClick: P
            }, {
              default: l(() => a[121] || (a[121] = [
                G("新增动画帧")
              ])),
              _: 1
            }),
            e(ul, {
              class: "meta-collapse",
              "expand-mutex": ""
            }, {
              default: l(() => [
                (c(!0), R(q, null, te(f.value, (o) => (c(), D(rl, { header: "动画帧" }, {
                  headerRightContent: l(() => [
                    e(g, {
                      size: "small",
                      variant: "outline",
                      theme: "danger",
                      style: { marginLeft: "8px" },
                      onClick: (ze) => W(o)
                    }, {
                      default: l(() => [
                        e(de, { name: "delete" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: l(() => [
                    e(il, {
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
}), Wt = /* @__PURE__ */ ve(zt, [["__scopeId", "data-v-300b090d"]]), jt = { class: "props-panel" }, Bt = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, Ht = { class: "props-panel" }, Gt = /* @__PURE__ */ me({
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
    ], { selections: S } = De(), t = le({
      globalAlpha: 1
    }), k = le();
    Ve(() => {
      x();
    });
    const x = () => {
      k.value = meta2d.getPenRect(t.value);
    }, n = fe(() => {
      var C;
      return (C = S.pens) == null ? void 0 : C.every((r) => r.type === 1);
    }), w = fe(() => {
      var C;
      return (C = S.pens) == null ? void 0 : C.every((r) => !r.type);
    }), i = fe(() => {
      var C;
      return ((C = S.pens) == null ? void 0 : C.length) || 0;
    }), v = qe(() => S.pens, x), p = [void 0, [5, 5]], f = (C) => {
      var r;
      if ((r = S.pens) != null && r.length) {
        const j = t.value[C];
        S.pens.forEach((F) => {
          const Q = { id: F.id };
          if (Q[C] = j, C === "dash")
            Q.lineDash = p[Q[C]];
          else if (C == "animateType") {
            const Z = Q.animateType, I = sl[Z];
            Q.frames = I;
          }
          meta2d.setValue(Q, { render: !1 });
        }), meta2d.render();
      }
    }, L = (C = !1) => {
      var r;
      (r = S.pens) == null || r.forEach((j) => {
        C ? meta2d.startAnimate(j.id) : meta2d.stopAnimate(j.id);
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
    ], P = (C) => {
      const r = S.pens;
      r != null && r.length && meta2d.alignNodes(C.value, r);
    };
    Re(() => {
      v();
    });
    const W = le(!1), O = le([]), d = () => {
      O.value = he(t.value.frames || []), W.value = !0;
    }, h = () => {
      t.value.frames = he(O.value), f("frames"), W.value = !1, Ke(() => {
        O.value = [];
      });
    }, H = () => {
      O.value.push({
        duration: 100,
        globalAlpha: 1
      });
    }, ne = (C) => {
      const r = O.value.indexOf(C);
      r > -1 && O.value.splice(r, 1);
    }, T = () => {
      meta2d.inactive();
    };
    return (C, r) => {
      const j = b("t-input"), F = b("t-form-item"), Q = b("t-color-picker"), Z = b("t-option"), I = b("t-select"), V = b("t-input-number"), _ = b("t-slider"), E = b("t-divider"), U = b("t-icon"), a = b("t-button"), J = b("t-collapse-panel"), A = b("t-collapse"), X = b("t-tooltip"), ae = b("t-space"), ee = b("t-form"), N = b("t-alert"), u = b("t-switch"), M = b("t-statistic"), K = b("t-drawer");
      return c(), D(Ie, { tabs: m }, {
        "pen-props": l(() => [
          y("div", jt, [
            t.value ? (c(), D(ee, {
              key: 0,
              "label-align": "left"
            }, {
              default: l(() => [
                e(F, {
                  label: "文本",
                  name: "text"
                }, {
                  default: l(() => [
                    e(j, {
                      modelValue: t.value.text,
                      "onUpdate:modelValue": r[0] || (r[0] = (g) => t.value.text = g),
                      onChange: r[1] || (r[1] = (g) => f("text"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F, {
                  label: "颜色",
                  name: "color"
                }, {
                  default: l(() => [
                    e(Q, {
                      class: "w-full",
                      modelValue: t.value.color,
                      "onUpdate:modelValue": r[2] || (r[2] = (g) => t.value.color = g),
                      "show-primary-color-preview": !1,
                      format: "CSS",
                      "color-modes": ["monochrome"],
                      onChange: r[3] || (r[3] = (g) => f("color"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F, {
                  label: "背景",
                  name: "background"
                }, {
                  default: l(() => [
                    e(Q, {
                      class: "w-full",
                      modelValue: t.value.background,
                      "onUpdate:modelValue": r[4] || (r[4] = (g) => t.value.background = g),
                      "show-primary-color-preview": !1,
                      format: "CSS",
                      "color-modes": ["monochrome"],
                      onChange: r[5] || (r[5] = (g) => f("background"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F, {
                  label: "线条",
                  name: "dash"
                }, {
                  default: l(() => [
                    e(I, {
                      modelValue: t.value.dash,
                      "onUpdate:modelValue": r[6] || (r[6] = (g) => t.value.dash = g),
                      onChange: r[7] || (r[7] = (g) => f("dash"))
                    }, {
                      default: l(() => [
                        (c(), D(Z, {
                          key: 0,
                          value: 0,
                          label: "实线"
                        })),
                        (c(), D(Z, {
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
                e(F, {
                  label: "线条宽度",
                  name: "lineWidth"
                }, {
                  default: l(() => [
                    e(V, {
                      modelValue: t.value.lineWidth,
                      "onUpdate:modelValue": r[8] || (r[8] = (g) => t.value.lineWidth = g),
                      onChange: r[9] || (r[9] = (g) => f("lineWidth"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F, {
                  label: "圆角",
                  name: "borderRadius"
                }, {
                  default: l(() => [
                    e(V, {
                      min: 0,
                      max: 1,
                      step: 0.01,
                      modelValue: t.value.borderRadius,
                      "onUpdate:modelValue": r[10] || (r[10] = (g) => t.value.borderRadius = g),
                      onChange: r[11] || (r[11] = (g) => f("borderRadius"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(F, {
                  label: "不透明度",
                  name: "globalAlpha"
                }, {
                  default: l(() => [
                    e(_, {
                      modelValue: t.value.globalAlpha,
                      "onUpdate:modelValue": r[12] || (r[12] = (g) => t.value.globalAlpha = g),
                      min: 0,
                      max: 1,
                      step: 0.01,
                      onChange: r[13] || (r[13] = (g) => f("globalAlpha"))
                    }, null, 8, ["modelValue"]),
                    y("span", Bt, pe(t.value.globalAlpha), 1)
                  ]),
                  _: 1
                }),
                e(E),
                e(F, {
                  label: "文字水平对齐",
                  name: "textAlign"
                }, {
                  default: l(() => [
                    e(I, {
                      modelValue: t.value.textAlign,
                      "onUpdate:modelValue": r[14] || (r[14] = (g) => t.value.textAlign = g),
                      onChange: r[15] || (r[15] = (g) => f("textAlign"))
                    }, {
                      default: l(() => [
                        e(Z, {
                          key: "left",
                          value: "left",
                          label: "左对齐"
                        }),
                        e(Z, {
                          key: "center",
                          value: "center",
                          label: "居中"
                        }),
                        e(Z, {
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
                e(F, {
                  label: "文字垂直对齐",
                  name: "textBaseline"
                }, {
                  default: l(() => [
                    e(I, {
                      modelValue: t.value.textBaseline,
                      "onUpdate:modelValue": r[16] || (r[16] = (g) => t.value.textBaseline = g),
                      onChange: r[17] || (r[17] = (g) => f("textBaseline"))
                    }, {
                      default: l(() => [
                        e(Z, {
                          key: "top",
                          value: "top",
                          label: "顶部对齐"
                        }),
                        e(Z, {
                          key: "middle",
                          value: "middle",
                          label: "居中"
                        }),
                        e(Z, {
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
                e(E),
                e(A, {
                  "expand-icon": "",
                  borderless: "",
                  defaultExpandAll: ""
                }, {
                  default: l(() => [
                    e(J, {
                      value: "0",
                      header: "对齐"
                    }, {
                      default: l(() => [
                        (c(), R(q, null, te($, (g, ie) => e(a, {
                          key: ie,
                          shape: "square",
                          variant: "outline",
                          style: { "margin-right": "4px" },
                          onClick: (B) => P(g)
                        }, {
                          default: l(() => [
                            e(U, {
                              name: g.icon
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
                e(E),
                e(ae, null, {
                  default: l(() => [
                    e(X, { content: "清空高亮图元" }, {
                      default: l(() => [
                        e(a, { onClick: T }, {
                          default: l(() => r[39] || (r[39] = [
                            G("取消选中")
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
          Le(C.$slots, "struct", { pen: t.value }, void 0, !0)
        ]),
        "animation-props": l(() => [
          y("div", Ht, [
            n.value || w.value ? (c(), D(ee, {
              key: 0,
              "label-width": "80px",
              "label-align": "left"
            }, {
              default: l(() => [
                e(ae, { style: { width: "100%" } }, {
                  default: l(() => [
                    e(N, {
                      theme: "warning",
                      title: "批量修改所有图元的动画",
                      message: "执行了操作后才会修改"
                    })
                  ]),
                  _: 1
                }),
                e(E),
                w.value ? (c(), R(q, { key: 0 }, [
                  e(F, {
                    label: "动画效果",
                    name: "animateType"
                  }, {
                    default: l(() => [
                      e(I, {
                        modelValue: t.value.animateType,
                        "onUpdate:modelValue": r[18] || (r[18] = (g) => t.value.animateType = g),
                        clearable: "",
                        onChange: r[19] || (r[19] = (g) => f("animateType"))
                      }, {
                        default: l(() => [
                          (c(!0), R(q, null, te(z(ol), (g) => (c(), D(Z, {
                            key: g.value,
                            value: g.value,
                            label: g.label
                          }, null, 8, ["value", "label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  t.value.animateType == "x-custom" ? (c(), D(F, {
                    key: 0,
                    label: "自定义动画帧"
                  }, {
                    default: l(() => [
                      e(a, {
                        variant: "text",
                        theme: "primary",
                        onClick: d
                      }, {
                        default: l(() => r[40] || (r[40] = [
                          G("编辑 ")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : re("", !0)
                ], 64)) : n.value ? (c(), R(q, { key: 1 }, [
                  e(F, {
                    label: "动画效果",
                    name: "lineAnimateType"
                  }, {
                    default: l(() => [
                      e(I, {
                        modelValue: t.value.lineAnimateType,
                        "onUpdate:modelValue": r[20] || (r[20] = (g) => t.value.lineAnimateType = g),
                        clearable: "",
                        onChange: r[21] || (r[21] = (g) => f("lineAnimateType"))
                      }, {
                        default: l(() => [
                          (c(!0), R(q, null, te(z(dl), (g) => (c(), D(Z, {
                            key: g.value,
                            value: g.value,
                            label: g.label
                          }, null, 8, ["value", "label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F, {
                    label: "反向流动",
                    name: "reverse"
                  }, {
                    default: l(() => [
                      e(u, {
                        modelValue: t.value.animateReverse,
                        "onUpdate:modelValue": r[22] || (r[22] = (g) => t.value.animateReverse = g),
                        onChange: r[23] || (r[23] = (g) => f("animateReverse"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F, {
                    label: "线宽",
                    name: "animateLineWidth"
                  }, {
                    default: l(() => [
                      e(V, {
                        modelValue: t.value.animateLineWidth,
                        "onUpdate:modelValue": r[24] || (r[24] = (g) => t.value.animateLineWidth = g),
                        onChange: r[25] || (r[25] = (g) => f("animateLineWidth"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F, {
                    label: "速度",
                    name: "animateSpan"
                  }, {
                    default: l(() => [
                      e(V, {
                        modelValue: t.value.animateSpan,
                        "onUpdate:modelValue": r[26] || (r[26] = (g) => t.value.animateSpan = g),
                        min: 1,
                        max: 5,
                        onChange: r[27] || (r[27] = (g) => f("animateSpan"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F, {
                    label: "颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(Q, {
                        class: "w-full",
                        modelValue: t.value.animateColor,
                        "onUpdate:modelValue": r[28] || (r[28] = (g) => t.value.animateColor = g),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        onChange: r[29] || (r[29] = (g) => f("animateColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F, {
                    label: "动画发光",
                    name: "animateShadow"
                  }, {
                    default: l(() => [
                      e(u, {
                        modelValue: t.value.animateShadow,
                        "onUpdate:modelValue": r[30] || (r[30] = (g) => t.value.animateShadow = g),
                        onChange: r[31] || (r[31] = (g) => f("animateShadow"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(F, {
                    label: "发光颜色",
                    name: "animateShadowColor"
                  }, {
                    default: l(() => [
                      e(Q, {
                        class: "w-full",
                        modelValue: t.value.animateShadowColor,
                        "onUpdate:modelValue": r[32] || (r[32] = (g) => t.value.animateShadowColor = g),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        onChange: r[33] || (r[33] = (g) => f("animateShadowColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ], 64)) : re("", !0),
                e(F, {
                  label: "自动播放",
                  name: "autoPlay"
                }, {
                  default: l(() => [
                    e(u, {
                      modelValue: t.value.autoPlay,
                      "onUpdate:modelValue": r[34] || (r[34] = (g) => t.value.autoPlay = g),
                      onChange: r[35] || (r[35] = (g) => f("autoPlay"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(E),
                y("div", null, [
                  e(M, {
                    title: "图元总数",
                    value: i.value,
                    trend: "increase",
                    color: "orange"
                  }, null, 8, ["value"])
                ]),
                e(ae, null, {
                  default: l(() => [
                    e(X, { content: "对大量图元执行动画时存在性能问题，请谨慎操作" }, {
                      default: l(() => [
                        e(a, {
                          onClick: r[36] || (r[36] = (g) => L(!0))
                        }, {
                          default: l(() => r[41] || (r[41] = [
                            G("播放")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    e(X, { content: "" }, {
                      default: l(() => [
                        e(a, {
                          onClick: r[37] || (r[37] = (g) => L())
                        }, {
                          default: l(() => r[42] || (r[42] = [
                            G("停止")
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
            })) : (c(), D(N, {
              key: 1,
              theme: "error"
            }, {
              default: l(() => r[43] || (r[43] = [
                G(" 只能对同一类型的图元批量设置动画 ")
              ])),
              _: 1
            })),
            e(K, {
              visible: W.value,
              "onUpdate:visible": r[38] || (r[38] = (g) => W.value = g),
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
                  default: l(() => r[44] || (r[44] = [
                    G("新增动画帧")
                  ])),
                  _: 1
                }),
                e(A, {
                  class: "meta-collapse",
                  "expand-mutex": ""
                }, {
                  default: l(() => [
                    (c(!0), R(q, null, te(O.value, (g) => (c(), D(J, { header: "动画帧" }, {
                      headerRightContent: l(() => [
                        e(a, {
                          size: "small",
                          variant: "outline",
                          theme: "danger",
                          style: { marginLeft: "8px" },
                          onClick: (ie) => ne(g)
                        }, {
                          default: l(() => [
                            e(U, { name: "delete" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: l(() => [
                        e(il, { data: g }, null, 8, ["data"])
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
}), Jt = /* @__PURE__ */ ve(Gt, [["__scopeId", "data-v-86a3cc64"]]), Xt = ["onClick"], Yt = { class: "tdesign-demo-block-row" }, Te = /* @__PURE__ */ me({
  __name: "Structure",
  props: {},
  setup(s) {
    let m = le(meta2d.data());
    const S = fe(() => {
      const w = m.value.pens;
      return w.filter((i) => {
        if (!i.parentId) {
          if (i.children) {
            const v = [];
            i.children.forEach((p) => {
              const f = w.find((L) => L.id === p);
              f && v.push(f);
            }), i.list = v;
          }
          return !0;
        }
      });
    }), t = () => {
      m.value = meta2d.data();
    };
    Ve(() => {
      meta2d.on("add", t), meta2d.on("delete", t), meta2d.on("clear", t);
    }), Re(() => {
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
      const v = b("t-icon"), p = b("t-tree");
      return c(), D(p, {
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
          y("span", {
            onClick: (L) => n(f)
          }, pe(f.label) + " - " + pe(f.data.text || f.data.description || f.value), 9, Xt)
        ]),
        operations: l(({ node: f }) => [
          y("div", Yt, [
            e(v, {
              name: f.data.visible !== !1 ? "browse" : "browse-off",
              onClick: (L) => x(f)
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
}, Kt = /* @__PURE__ */ me({
  __name: "Props",
  setup(s) {
    const { selections: m } = De(), S = fe(() => [be.File, be.Pen, be.Pens].includes(
      m.mode
    ));
    return (t, k) => S.value ? (c(), R("div", qt, [
      $e(e(Ct, we({
        key: "file",
        class: "props__file"
      }, t.$attrs), {
        struct: l(() => [
          e(Te, xe(_e(t.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ue, z(m).mode === z(be).File]
      ]),
      $e(e(Wt, we({
        key: "pen",
        class: "props__pen"
      }, t.$attrs), {
        struct: l(() => [
          e(Te, xe(_e(t.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ue, z(m).mode === z(be).Pen]
      ]),
      $e(e(Jt, we({
        key: "pens",
        class: "props__pens"
      }, t.$attrs), {
        struct: l(() => [
          e(Te, xe(_e(t.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ue, z(m).mode === z(be).Pens]
      ])
    ])) : re("", !0);
  }
}), Zt = /* @__PURE__ */ ve(Kt, [["__scopeId", "data-v-5839971c"]]), Qt = [
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
}, ia = ["xlink:href"], ra = /* @__PURE__ */ me({
  __name: "Graphics",
  setup(s) {
    const m = fe(() => {
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
            console.log("load json: ", n, Pe);
            const i = Pe.pens.find((p) => {
              if (p.description == n.name && !p.parentId)
                return !0;
            }), v = t(i, Pe.pens);
            console.log("combine pens: ", i, v), v && (n.data = he(v));
          } else {
            _l(n.icon, n);
            return;
          }
        console.log("elem: ", n), x instanceof DragEvent ? (w = x.dataTransfer) == null || w.setData("Meta2d", JSON.stringify(n.data)) : meta2d.canvas.addCaches = [n.data];
      }
    };
    return (x, n) => {
      const w = b("t-tag"), i = b("t-tooltip"), v = b("t-collapse-panel"), p = b("t-collapse");
      return c(), R("div", ea, [
        e(p, { defaultValue: [0, 6] }, {
          default: l(() => [
            (c(), R(q, null, te(S, (f) => e(v, {
              header: f.name,
              key: f.name,
              class: cl({
                "has--group": f.style == "group"
              })
            }, {
              default: l(() => [
                f.style === "group" ? (c(), D(p, {
                  key: 0,
                  header: f.name
                }, {
                  default: l(() => [
                    (c(!0), R(q, null, te(f.list, (L) => (c(), D(v, {
                      class: "is--subpanel",
                      header: L.name
                    }, {
                      headerRightContent: l(() => [
                        e(w, { theme: "success" }, {
                          default: l(() => [
                            G(pe(L.children.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: l(() => [
                        (c(!0), R(q, null, te(L.children, ($) => (c(), R("div", {
                          key: $.name,
                          class: "graphic",
                          draggable: !0,
                          onDragstart: (P) => k(P, $)
                        }, [
                          e(i, {
                            content: $.name
                          }, {
                            default: l(() => {
                              var P;
                              return [
                                (P = $.icon) != null && P.endsWith("svg") ? (c(), R("img", {
                                  key: 0,
                                  src: $.icon,
                                  style: { width: "100%", height: "48px" }
                                }, null, 8, ta)) : (c(), R("svg", aa, [
                                  y("use", {
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
                }, 1032, ["header"])) : (c(!0), R(q, { key: 1 }, te(f.list, (L) => (c(), R("div", {
                  key: L.name,
                  class: "graphic",
                  draggable: !0,
                  onDragstart: ($) => k($, L)
                }, [
                  e(i, {
                    content: L.name
                  }, {
                    default: l(() => {
                      var $;
                      return [
                        ($ = L.icon) != null && $.endsWith("svg") ? (c(), R("img", {
                          key: 0,
                          class: "icon__image",
                          src: L.icon,
                          alt: "",
                          srcset: ""
                        }, null, 8, da)) : (c(), R("svg", sa, [
                          y("use", {
                            "xlink:href": "#" + L.icon
                          }, null, 8, ia)
                        ])),
                        y("p", null, pe(L.name), 1)
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
}), ua = /* @__PURE__ */ ve(ra, [["__scopeId", "data-v-4ad49cf5"]]), ma = { class: "panel__wrapper" }, pa = { class: "panel__wrapper" }, fa = /* @__PURE__ */ me({
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
      selectType: L,
      deleteFolder: $,
      getTree: P,
      fileName: W,
      saveImageComponent: O
    } = Ze(), d = (V) => {
      const _ = m.find((E) => E.value === V);
      if (_ && _.code) {
        const E = _.code;
        P(E);
      }
    }, h = fe(() => {
      let V = [];
      return L.value == "paper" ? V = t.value : V = k.value, V.map((_) => ({
        label: _.dictName,
        value: _.id
      }));
    }), { uploadValue: H, headers: ne, sizeLimit: T, handleFail: C } = Ne();
    let r = null;
    const j = (V) => {
      console.log("set folder: ", V), r = V;
    }, F = (V) => {
      var _, E, U;
      if (V.response) {
        const J = {
          name: "image",
          image: V.response.url || ((_ = V.response.data) == null ? void 0 : _.fileurl),
          relativePath: (E = V.response.data) == null ? void 0 : E.relativePath,
          fileName: (U = V.response.data) == null ? void 0 : U.fileName,
          width: 100,
          height: 100,
          x: 100,
          y: 100
        };
        O(r, J);
      }
    }, Q = async (V, _) => {
      var U;
      if (!_ || !_.data)
        return;
      V.stopPropagation();
      let E;
      try {
        typeof _.data == "string" ? E = JSON.parse(_.data) : typeof _.data == "object" && (E = _.data);
      } catch (a) {
        console.log("dragStart error: ", a);
      }
      E && (V instanceof DragEvent ? (U = V.dataTransfer) == null || U.setData("Meta2d", JSON.stringify(E)) : meta2d.canvas.addCaches = [E]);
    }, Z = (V) => {
      console.log("addDiagram: ", V), V.children || (V.children = []), meta2d.clear(), meta2d.emit("clear");
    }, I = (V) => {
      const _ = Qe("warning", {
        content: "系统可能不会保存您所做的更改，是否继续？",
        title: "提示",
        placement: "top-right",
        duration: 0,
        closeBtn: !0,
        footer(E) {
          return E(
            "div",
            {
              style: "text-align: right"
            },
            [
              E(
                Pl,
                {
                  onClick: () => {
                    let U;
                    try {
                      U = JSON.parse(V.data);
                    } catch (a) {
                      console.log("open diagram error: ", a);
                    }
                    meta2d.open(U), meta2d.emit("clear"), meta2d.fitView(), _.then((a) => {
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
    return (V, _) => {
      const E = b("t-icon"), U = b("t-button"), a = b("t-tooltip"), J = b("t-popconfirm"), A = b("t-image"), X = b("t-col"), ae = b("t-row"), ee = b("t-empty"), N = b("t-collapse-panel"), u = b("t-collapse"), M = b("t-upload"), K = b("t-input"), g = b("t-select"), ie = b("t-dialog");
      return c(), R(q, null, [
        e(Ie, {
          modelValue: S.value,
          "onUpdate:modelValue": _[3] || (_[3] = (B) => S.value = B),
          tabs: m,
          onChange: d
        }, {
          graphics: l(() => [
            e(ua)
          ]),
          diagrams: l(() => [
            y("div", ma, [
              e(U, {
                block: "",
                variant: "outline",
                onClick: _[0] || (_[0] = (B) => z(w)("paper"))
              }, {
                default: l(() => [
                  e(E, {
                    name: "add",
                    slot: "icon"
                  }),
                  _[8] || (_[8] = G(" 新建目录 "))
                ]),
                _: 1
              }),
              _[9] || (_[9] = y("br", null, null, -1)),
              z(t).length ? (c(), D(u, {
                key: 0,
                defaultExpandAll: ""
              }, {
                default: l(() => [
                  (c(!0), R(q, null, te(z(t), (B) => (c(), D(N, {
                    value: B.id,
                    header: B.dictName
                  }, {
                    headerRightContent: l(() => [
                      e(a, { content: "新建图纸，将清空画布" }, {
                        default: l(() => [
                          e(U, {
                            size: "small",
                            variant: "outline",
                            style: { marginLeft: "8px" },
                            onClick: (oe) => Z(B)
                          }, {
                            default: l(() => [
                              e(E, { name: "chart-add" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      e(a, { content: "删除目录" }, {
                        default: l(() => [
                          e(J, {
                            theme: "danger",
                            content: "操作后无法恢复, 确定要删除吗?",
                            onConfirm: (oe) => z($)(B, "paper")
                          }, {
                            default: l(() => [
                              e(U, {
                                size: "small",
                                variant: "outline",
                                theme: "danger",
                                style: { marginLeft: "8px" }
                              }, {
                                default: l(() => [
                                  e(E, { name: "delete" })
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
                      B.data.length ? (c(), D(ae, {
                        key: 0,
                        gutter: [10, 10]
                      }, {
                        default: l(() => [
                          (c(!0), R(q, null, te(B.data, (oe, Y) => (c(), D(X, {
                            key: Y,
                            span: 6,
                            onClick: (de) => I(oe)
                          }, {
                            default: l(() => [
                              e(a, { content: "单击打开图纸" }, {
                                default: l(() => [
                                  e(A, {
                                    overlayTrigger: "hover",
                                    src: oe.cover,
                                    fit: "contain",
                                    style: { width: "100px", height: "100px" }
                                  }, {
                                    overlayContent: l(() => [
                                      e(J, {
                                        theme: "danger",
                                        content: "操作后无法恢复, 确定要删除吗?",
                                        onConfirm: (de) => z(i)(oe, "paper")
                                      }, {
                                        default: l(() => [
                                          e(U, {
                                            size: "small",
                                            variant: "outline",
                                            theme: "danger",
                                            style: { float: "right" },
                                            onClick: je(() => null, ["stop"])
                                          }, {
                                            default: l(() => [
                                              e(E, { name: "delete" })
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
                      }, 1024)) : (c(), D(ee, {
                        key: 1,
                        description: ""
                      }))
                    ]),
                    _: 2
                  }, 1032, ["value", "header"]))), 256))
                ]),
                _: 1
              })) : (c(), D(ee, {
                key: 1,
                description: ""
              }))
            ])
          ]),
          "my-pens": l(() => [
            y("div", pa, [
              e(U, {
                block: "",
                variant: "outline",
                onClick: _[1] || (_[1] = (B) => z(w)("component"))
              }, {
                default: l(() => [
                  e(E, {
                    name: "add",
                    slot: "icon"
                  }),
                  _[10] || (_[10] = G(" 新建目录 "))
                ]),
                _: 1
              }),
              _[11] || (_[11] = y("br", null, null, -1)),
              z(k).length ? (c(), D(u, {
                key: 0,
                defaultExpandAll: ""
              }, {
                default: l(() => [
                  (c(!0), R(q, null, te(z(k), (B) => (c(), D(N, {
                    value: B.id,
                    header: B.dictName
                  }, {
                    headerRightContent: l(() => [
                      e(M, {
                        ref_for: !0,
                        ref: "uploadRef",
                        modelValue: z(H),
                        "onUpdate:modelValue": _[2] || (_[2] = (oe) => ce(H) ? H.value = oe : null),
                        action: V.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: z(ne),
                        sizeLimit: z(T),
                        name: "object",
                        theme: "custom",
                        accept: "image/*",
                        style: { display: "inline-flex" },
                        onFail: z(C),
                        onSuccess: F
                      }, {
                        default: l(() => [
                          e(a, { content: "请选择单张小于1MB的图片上传" }, {
                            default: l(() => [
                              e(U, {
                                size: "small",
                                variant: "outline",
                                style: { marginLeft: "8px" },
                                onClick: (oe) => j(B)
                              }, {
                                default: l(() => [
                                  e(E, { name: "upload" })
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
                          e(J, {
                            theme: "danger",
                            content: "操作后无法恢复, 确定要删除吗?",
                            onConfirm: (oe) => z($)(B, "component")
                          }, {
                            default: l(() => [
                              e(U, {
                                size: "small",
                                variant: "outline",
                                theme: "danger",
                                style: { marginLeft: "8px" }
                              }, {
                                default: l(() => [
                                  e(E, { name: "delete" })
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
                      B.data.length ? (c(), D(ae, {
                        key: 0,
                        gutter: [10, 10]
                      }, {
                        default: l(() => [
                          (c(!0), R(q, null, te(B.data, (oe, Y) => (c(), D(X, {
                            key: Y,
                            span: 6,
                            draggable: !0,
                            onDragstart: (de) => Q(de, oe)
                          }, {
                            default: l(() => [
                              e(a, {
                                content: oe.name
                              }, {
                                default: l(() => [
                                  e(A, {
                                    src: oe.cover,
                                    overlayTrigger: "hover",
                                    fit: "contain",
                                    style: { width: "100px", height: "100px" }
                                  }, {
                                    overlayContent: l(() => [
                                      e(J, {
                                        theme: "danger",
                                        content: "操作后无法恢复, 确定要删除吗?",
                                        onConfirm: (de) => z(i)(oe, "component")
                                      }, {
                                        default: l(() => [
                                          e(U, {
                                            size: "small",
                                            variant: "outline",
                                            theme: "danger",
                                            style: { float: "right" },
                                            onClick: je(() => null, ["stop"])
                                          }, {
                                            default: l(() => [
                                              e(E, { name: "delete" })
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
                      }, 1024)) : (c(), D(ee, { key: 1 }))
                    ]),
                    _: 2
                  }, 1032, ["value", "header"]))), 256))
                ]),
                _: 1
              })) : (c(), D(ee, {
                key: 1,
                description: ""
              }))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        e(ie, {
          visible: z(x),
          "onUpdate:visible": _[7] || (_[7] = (B) => ce(x) ? x.value = B : null),
          header: z(f) ? "选择目录" : "新建目录",
          onConfirm: z(v),
          onClosed: z(p)
        }, {
          default: l(() => [
            z(f) ? (c(), R(q, { key: 1 }, [
              e(g, {
                modelValue: z(n),
                "onUpdate:modelValue": _[5] || (_[5] = (B) => ce(n) ? n.value = B : null),
                options: h.value
              }, null, 8, ["modelValue", "options"]),
              _[12] || (_[12] = y("br", null, null, -1)),
              e(K, {
                modelValue: z(W),
                "onUpdate:modelValue": _[6] || (_[6] = (B) => ce(W) ? W.value = B : null),
                placeholder: "请输入图纸/组件名称"
              }, null, 8, ["modelValue"])
            ], 64)) : (c(), D(K, {
              key: 0,
              modelValue: z(n),
              "onUpdate:modelValue": _[4] || (_[4] = (B) => ce(n) ? n.value = B : null),
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
}), va = /* @__PURE__ */ ve(fa, [["__scopeId", "data-v-46eee7b7"]]), ga = { class: "app-page" }, ca = { class: "designer" }, ba = /* @__PURE__ */ me({
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
    return Ve(() => {
      meta2d.on("scale", t), meta2d.on("add", t), meta2d.on("opened", t), meta2d.on("undo", t), meta2d.on("redo", t), meta2d.on("add", t), meta2d.on("delete", t), meta2d.on("rotatePens", t), meta2d.on("translatePens", t);
    }), (i, v) => (c(), R("div", ga, [
      n.value ? (c(), D(dt, we({ key: 0 }, i.$attrs, { onView: x }), null, 16)) : re("", !0),
      y("div", ca, [
        e(va, xe(_e(i.$attrs)), null, 16),
        e(Al, we(i.$attrs, { onReady: w }), null, 16),
        n.value ? (c(), D(Zt, xe(we({ key: 0 }, i.$attrs)), null, 16)) : re("", !0)
      ])
    ]));
  }
}), ya = /* @__PURE__ */ ve(ba, [["__scopeId", "data-v-7081acbb"]]);
export {
  ya as default
};
//# sourceMappingURL=Index-Pc4c0cXt.mjs.map
