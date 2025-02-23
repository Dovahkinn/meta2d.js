import { ref as j, defineComponent as re, computed as N, defineAsyncComponent as oe, onMounted as he, onBeforeUnmount as Ce, resolveComponent as T, createBlock as q, openBlock as D, normalizeStyle as ce, withCtx as V, resolveDynamicComponent as Se, mergeProps as se, withDirectives as xe, createElementBlock as Q, createCommentVNode as J, createVNode as h, Fragment as Z, renderList as ye, createTextVNode as ge, toDisplayString as be, vShow as Ee, useCssVars as Ae, reactive as Te, createElementVNode as De, Transition as Pe, unref as je, renderSlot as Ve, h as Be } from "vue";
import { f as O, b as Me, h as G, e as P, x as ae, y as ne, E as z, n as Fe, _ as ie, z as Re, d as ve, A as Ne, V as Oe, B as Ie } from "./pathAnimate-CGf_anjp.mjs";
import { M as Le, I as $e } from "./index-B0jrlxAg.mjs";
const We = (d = {}) => {
  const { presetScriptsConfig: y = {} } = d || {}, {
    columns: e = [],
    scripts: R = [],
    style: u,
    ...p
  } = y || {}, v = j([]);
  let i = {};
  if (u) {
    const {
      evenRowBackgroundColor: x,
      oddRowBackgroundColor: b,
      textColor: f,
      backgroundImageUrl: s
    } = u;
    i = {
      "--td-bg-color-secondarycontainer": b,
      "--td-bg-color-container": x,
      "--td-text-color-primary": f || "#FFFFFF",
      "--td-text-color-placeholder": f || "#FFFFFF",
      "--table-background-image-url": `url(${s || ""})`
    }, s && !x && (i["--td-bg-color-container"] = "transparent"), s && !b && (i["--td-bg-color-secondarycontainer"] = "transparent");
  }
  return {
    columns: e,
    tableLogData: v,
    tableProps: p,
    tableStyle: i
  };
};
function le(d, y, e) {
  e || (e = globalThis.meta2d);
  const R = {
    0: "startAnimate",
    1: "pauseAnimate",
    2: "stopAnimate"
  }, u = [];
  y != null && y.length && y.forEach((v) => {
    const i = e.find(v);
    i && u.push(...i);
  });
  const p = R[d];
  p && (u.forEach((v) => {
    if (Array.isArray(v.pathFrames)) {
      let i = v.pathAnimateControl;
      (!i || !i.play) && (v.pathAnimateControl = Fe(v, v.pathFrames), i = v.pathAnimateControl), d == 0 ? i.isPaused.value ? i.resume() : i.play() : d == 1 ? i.pause() : d == 2 && i.stop();
    }
  }), e[p](u));
}
const ze = (d = {}, y) => {
  let e = globalThis.meta2d;
  y && (e = y);
  const { presetScriptsConfig: R = {} } = d || {}, { scripts: u = [] } = R || {}, p = [];
  return Array.isArray(u) && u.forEach((v, i) => {
    const { handlers: x = [], duration: b = 3e3, rowPropList: f = [] } = v;
    if (Array.isArray(x) && x.length) {
      let s = (c) => {
        console.log(
          "default custom message handler: ",
          c,
          v,
          s._cbs
        ), s._cache = c, s._cbs.length && (s._cbs.forEach((m) => {
          setTimeout(() => {
            m(c);
          }, b);
        }), s._cbs = []);
      };
      s._cbs = [], e || globalThis.meta2d ? (e || globalThis.meta2d).on(
        O.CustomMessage,
        s
      ) : setTimeout(() => {
        (e || globalThis.meta2d).on(
          O.CustomMessage,
          s
        );
      }, 1e3);
      const a = () => {
        e || (e = globalThis.meta2d);
        const c = [], m = [];
        return x.forEach((r) => {
          const { target: E, action: F, value: B = {}, where: S } = r, I = () => {
            if (Array.isArray(E))
              switch (F) {
                case z.SetProps:
                  E.forEach((k) => {
                    e.setValue(
                      {
                        tag: k,
                        ...B
                      },
                      {
                        render: !1
                      }
                    );
                  }), e.render();
                  break;
                case z.StartAnimate:
                  le("0", E, e);
                  break;
                case z.PauseAnimate:
                  le("1", E, e);
                  break;
                case z.StopAnimate:
                  le("2", E, e);
                  break;
                case z.Dialog:
                  e.canvas.dialog.show(B, r.params);
                  break;
                case P.DialogClose:
                  e.canvas.dialog.hide(), ae(ne.ExternalCall, r);
                  break;
                case P.AnimateReverse:
                  E.forEach((k) => {
                    e.find(k).forEach((H) => {
                      const { id: $, animateReverse: W } = H;
                      e.setValue(
                        {
                          id: $,
                          animateReverse: !W
                        },
                        {
                          render: !1
                        }
                      );
                    });
                  });
                  break;
                case P.Video:
                  ae(ne.ExternalCall, r);
                  break;
                case P.ScriptEnd:
                  globalThis.meta2d.emit(
                    O.CustomMessage,
                    {
                      type: G.ScriptEnded,
                      key: r.name || r.id
                    }
                  );
                  break;
                case P.ShowMeta2D:
                  ae(ne.ExternalCall, r);
                  break;
                case P.GoToView:
                  if (typeof B == "string") {
                    const k = e.findOne(B);
                    k && e.gotoView(k);
                  }
                  break;
                default:
                  console.warn("unknown action:", F, r);
                  break;
              }
          };
          if (S && S.type == O.CustomMessage && ![null, void 0, ""].includes(S.value) && S.key) {
            const k = new Promise((L) => {
              if (S.value === G.VideoEnded) {
                const H = ({ type: $, key: W }) => {
                  console.log(
                    "-------------- custom message: ",
                    $,
                    W,
                    r
                  ), $ == G.VideoEnded && W == S.key && (L(I()), e.off(
                    O.CustomMessage,
                    s
                  ));
                };
                s._cbs.push(H);
              } else if (S.value === G.ScriptEnded) {
                const H = ({ type: $, key: W }) => {
                  $ == G.ScriptEnded && W == S.key && (L(I()), e.off(
                    O.CustomMessage,
                    s
                  ));
                };
                s._cbs.push(H);
              }
            });
            m.push(k), console.log(
              "asasas ----------------",
              r,
              s._cbs
            );
          } else
            c.push(Promise.resolve(I()));
        }), [c, m];
      }, n = () => {
        const [c, m] = a();
        return s._cache && s._cbs.length && s._cbs.forEach((r) => {
          setTimeout(() => {
            r(s._cache);
          }, b);
        }), new Promise((r) => {
          setTimeout(() => {
            const E = {
              sid: Me()
            };
            Array.isArray(f) && f.length && f.forEach((F) => {
              const { prop: B, value: S } = F;
              B && (E[B] = S);
            }), Promise.all([...c, ...m]).then((F) => {
              r(E);
            });
          }, b);
        });
      };
      p.push(n);
    }
  }), {
    tasks: p
  };
}, He = /* @__PURE__ */ re({
  __name: "ExtendDialog",
  props: {},
  setup(d) {
    const y = j(!1), e = j({}), R = N(() => {
      var a;
      return (a = e.value) == null ? void 0 : a.mode;
    }), u = N(() => {
      var a;
      return (a = e.value) == null ? void 0 : a.width;
    }), p = N(() => {
      var a;
      return (a = e.value) == null ? void 0 : a.title;
    }), v = N(() => {
      var a;
      switch ((a = e.value) == null ? void 0 : a.action) {
        case P.Video:
          return oe(() => import("./Video-Ebt5XAJx.mjs"));
        case P.ShowMeta2D:
          return oe(() => import("./Opener-jr2JNBc2.mjs"));
        case P.ShowText:
          return oe(() => import("./Text-B9n3RzJM.mjs"));
      }
      return null;
    }), i = N(() => {
      var r;
      const { url: a, text: n, textColor: c, ...m } = e.value || {};
      switch ((r = e.value) == null ? void 0 : r.action) {
        case P.Video:
          return a || console.error("video url is required"), {
            src: a
          };
        case P.ShowMeta2D:
          return {
            url: a
          };
        case P.ShowText:
          return {
            text: n,
            textColor: c,
            height: m.height
          };
      }
    }), x = (a) => {
      console.log("dialog action params: ", a);
      const { params: n = {}, id: c } = a;
      n && typeof n == "object" && (n.id = c, e.value = n), y.value = ((n == null ? void 0 : n.action) || (a == null ? void 0 : a.action)) != P.DialogClose;
    };
    he(() => {
      meta2d.on(O.Dialog, x);
    }), Ce(() => {
      meta2d.off(O.Dialog, x);
    });
    const b = (a, n) => {
      var c;
      meta2d.emit(O.CustomMessage, {
        type: G.VideoEnded,
        url: (n == null ? void 0 : n.src) || (n == null ? void 0 : n.url),
        key: (c = e.value) == null ? void 0 : c.id
      });
    }, f = (a) => {
      var n;
      ((n = e.value) == null ? void 0 : n.action) == P.Video && b(a, e.value);
    }, s = N(() => {
      var a, n, c, m, r, E, F, B, S, I, k, L;
      return {
        "--td-bg-color-container": ((a = e.value) == null ? void 0 : a.backgroundColor) || "white",
        "--td-text-color-primary": ((n = e.value) == null ? void 0 : n.titleColor) || ((c = e.value) == null ? void 0 : c.textColor) || "black",
        "--td-text-color-secondary": ((m = e.value) == null ? void 0 : m.titleColor) || ((r = e.value) == null ? void 0 : r.textColor) || "black",
        // 自定义的变量
        "--extend-dialog-bg-image": `url(${((E = e.value) == null ? void 0 : E.backgroundImageUrl) || ""})`,
        "--extend-dialog-header-margin-top": ((F = e.value) == null ? void 0 : F.headerMarginTop) || "0px",
        "--extend-dialog-content-padding-bottom": ((B = e.value) == null ? void 0 : B.contentPaddingBottom) || "16px",
        // 控制栏
        "--vjs-control-bar-background-color": ((S = e.value) == null ? void 0 : S.controlBarBackgroundColor) || "black",
        "--vjs-play-control-color": ((I = e.value) == null ? void 0 : I.controlColor) || "white",
        "--vjs-play-progress-bar-color": ((k = e.value) == null ? void 0 : k.controlPlayProgressBarColor) || "white",
        "--vjs-load-progress-bar-color": ((L = e.value) == null ? void 0 : L.controlLoadProgressBarColor) || "#73859f80"
      };
    });
    return (a, n) => {
      const c = T("t-dialog");
      return D(), q(c, {
        visible: y.value,
        "onUpdate:visible": n[0] || (n[0] = (m) => y.value = m),
        dialogClassName: "extend-action__dialog",
        header: p.value,
        closeOnEscKeydown: "",
        footer: !1,
        mode: R.value,
        width: u.value,
        destroyOnClose: "",
        style: ce(s.value),
        onCloseBtnClick: f
      }, {
        default: V(() => [
          (D(), q(Se(v.value), se(i.value, { onEnded: b }), null, 16))
        ]),
        _: 1
      }, 8, ["visible", "header", "mode", "width", "style"]);
    };
  }
}), Ue = /* @__PURE__ */ ie(He, [["__scopeId", "data-v-fb69005a"]]), Qe = /* @__PURE__ */ re({
  __name: "MultipleDataForm",
  props: {
    config: {
      type: Object
      // default: () => ({
      //     label: '',
      //     labelTextColor: '',
      //     options: [],
      //     submitButtonText: '',
      //     resetButtonText: '',
      // })
    }
  },
  emits: ["submit", "reset", "change"],
  setup(d, { emit: y }) {
    const e = d, R = N(() => {
      const {
        labelTextColor: b = "white",
        selectBackgroundColor: f = "",
        selectPopupBackgroundColor: s = "",
        selectBorderColor: a = "",
        selectHoverBackgroundColor: n = "",
        buttonSubmitBackgroundColor: c = "",
        buttonResetBackgroundColor: m = ""
      } = e.config || {};
      return {
        // display: props.config ? 'block' : 'none',
        // 表单背景
        backgroundColor: "transparent",
        "--td-text-color-primary": b || "white",
        "--td-text-color-placeholder": "white",
        // 下拉框
        "--td-bg-color-specialcomponent": f || "#13345d",
        // 选择框背景
        "--td-border-level-2-color": a || "#709ec0",
        "--td-brand-color-focus": a || "#709ec0",
        "--td-bg-color-container": s || "#26588d",
        // 选择框弹出层
        "--td-bg-color-container-hover": n || "#528bce",
        "--td-brand-color-light": n || "#528bce",
        "--td-text-color-disabled": a || "#709ec0",
        // 空提示文字
        // 按钮
        "--td-brand-color": m || "#204D87",
        "--td-warning-color-active": c || "#5D5437",
        "--td-warning-color": c || "#5D5437"
      };
    }), u = j({
      data: ""
    }), p = y, v = () => {
      var f;
      if (!((f = e.config) != null && f.dataMap)) {
        Le.warning("数据映射不存在"), console.error("数据映射不存在, 请在 multipleDataConfig 中配置 dataMap 参数");
        return;
      }
      if (!u.value.data) {
        i();
        return;
      }
      const b = e.config.dataMap[u.value.data] || {};
      p("submit", u.value.data, b), b && (meta2d.open(b), meta2d.emit("clear"), meta2d.fitView());
    }, i = () => {
      u.value.data = "", p("reset"), meta2d.clear();
    }, x = (b) => {
      p("change", b);
    };
    return (b, f) => {
      const s = T("t-option"), a = T("t-select"), n = T("t-form-item"), c = T("t-button"), m = T("t-form");
      return xe((D(), Q("div", {
        class: "multiple-data__form",
        style: ce(R.value)
      }, [
        d.config && d.config.options ? (D(), q(m, {
          key: 0,
          class: "demo-form-inline",
          layout: "inline"
        }, {
          default: V(() => [
            h(n, {
              label: d.config.label || "分系统选择"
            }, {
              default: V(() => [
                h(a, {
                  modelValue: u.value.data,
                  "onUpdate:modelValue": f[0] || (f[0] = (r) => u.value.data = r),
                  clearable: "",
                  popupProps: {
                    attach: ".multiple-data__form"
                  },
                  style: { width: "240px" },
                  onChange: x
                }, {
                  default: V(() => [
                    (D(!0), Q(Z, null, ye(d.config.options, (r) => (D(), q(s, {
                      key: r.value,
                      label: r.label,
                      value: r.value
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"]),
            h(n, { labelWidth: "0px" }, {
              default: V(() => [
                h(c, {
                  theme: "warning",
                  onClick: v,
                  style: { "margin-right": "16px" }
                }, {
                  default: V(() => [
                    ge(be(d.config.submitButtonText || "搜索"), 1)
                  ]),
                  _: 1
                }),
                h(c, {
                  theme: "primary",
                  onClick: i
                }, {
                  default: V(() => [
                    ge(be(d.config.resetButtonText || "重置"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : J("", !0)
      ], 4)), [
        [Ee, !!d.config]
      ]);
    };
  }
}), qe = /* @__PURE__ */ ie(Qe, [["__scopeId", "data-v-60642e98"]]), Je = {
  key: 0,
  class: "left__panel"
}, Ge = {
  key: 0,
  class: "right__panel"
}, Ke = /* @__PURE__ */ re({
  __name: "Preview",
  props: {
    data: {
      type: Object
    },
    projectTreeData: {
      type: Array
    },
    showStickyTool: {
      type: Boolean,
      default: !0
    },
    showRightPanel: {
      type: Boolean,
      default: !1
    },
    rightPanelWidth: {
      type: Number,
      default: 400
    },
    // 内置的多系统切换下拉框
    // * 不设置则不启用
    multipleDataConfig: {
      type: Object || void 0
      // default: { label: string, options: [] },
    },
    // * 后台更新模式，用于一个项目包含多张电路的情形
    enableBackgroundUpdate: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["ready"],
  setup(d, { emit: y }) {
    var me;
    Ae((o) => ({
      "55f05584": ke.value
    }));
    const e = j(null), R = y, u = d, p = j(!0), v = Te([
      {
        label: "fullscreen",
        icon: "fullscreen",
        popup: "全屏",
        show: () => p.value
      },
      {
        label: "fit",
        icon: "rectangle",
        popup: "适应窗口",
        show: () => p.value
      },
      {
        label: "expand",
        icon: "menu-fold",
        popup: "展开侧边栏",
        show: () => p.value
      },
      {
        label: "collapse",
        icon: "menu-unfold",
        popup: "收起侧边栏",
        show: () => !p.value
      }
    ]), i = () => globalThis.navigator.userAgent.includes("Electron"), x = j([]), b = j(null), f = Re(), s = j([]), a = j([]), n = j({}), c = j({}), m = j([]), r = (o) => {
      const {
        columns: l,
        tableProps: t,
        tableStyle: g
      } = We(o), { tasks: A } = ze(o, globalThis.meta2d);
      return s.value = l, n.value = t, c.value = g, setTimeout(async () => {
        for (const _ of A) {
          const w = await _();
          w && A.length && a.value.push(w);
        }
      }), function() {
      };
    }, E = (o, l) => {
      if (l) {
        F(), K();
        const t = r(l);
        m.value.push(t);
      }
    }, F = () => {
      if (m.value.length > 0) {
        for (const o of m.value)
          o();
        m.value.length = 0;
      }
      a.value = [];
    }, { extendOn: B } = Ne();
    he(() => {
      var o, l;
      if (i())
        (o = globalThis.versions) != null && o.projectListSync && globalThis.versions.projectListSync("list.json").then((t) => {
          var g;
          if (console.log("projectListSync res: ", t), Array.isArray(t))
            if (x.value = t, t.length > 0) {
              if (((g = t[0].children) == null ? void 0 : g.length) > 0) {
                const A = t[0].children[0];
                if (A.json) {
                  const _ = ve(A.json);
                  _.locked = 1, _.lockState && (_.locked = _.lockState), meta2d.open(_), meta2d.fitView(), K(), localStorage.setItem("meta2d", JSON.stringify(A.json)), e.value && (e.value.Sendrequestsyn(), e.value.reconnectWebSocket(_)), r(_);
                }
              }
            } else
              meta2d.clear();
        }).catch((t) => {
          console.log("projectListSync err: ", t), meta2d.clear();
        });
      else
        try {
          const t = (l = f == null ? void 0 : f.query) == null ? void 0 : l["open-file"];
          t && fetch(t).then((g) => g.json()).then((g) => {
            g.locked = 1, g.lockState && (g.locked = g.lockState), meta2d.open(g), meta2d.emit("clear"), meta2d.fitView(), K(), r(g);
          });
        } catch (t) {
          console.log("open file error: ", t);
        }
      meta2d == null || meta2d.resize(), B();
    });
    const S = N(() => {
      var l;
      if (i())
        return x.value;
      if (u.projectTreeData) return u.projectTreeData;
      if ((l = globalThis.__meta2d_env__) != null && l.projectTreeData)
        return globalThis.__meta2d_env__.projectTreeData;
      let o = localStorage.getItem("meta2d");
      return o ? [
        {
          label: "默认",
          value: "",
          children: [
            {
              label: `meta2d.${JSON.parse(o).template}`,
              value: ""
            }
          ]
        }
      ] : [];
    }), I = (o) => () => Be($e, {
      name: o
    }), k = (o) => {
      o == "fit" ? meta2d.fitView(!0, 20) : o == "fullscreen" ? Ie() : o == "refresh" && (console.log("refresh同步一下数据"), e.value && e.value.Sendrequestsyn());
    }, L = ({ e: o, item: l }) => {
      l.label == "expand" ? p.value = !1 : l.label == "collapse" ? p.value = !0 : k(l.label);
    }, H = ({ e: o, node: l }) => {
      if (console.log("change node=== ", l), i()) {
        if (l.data.json) {
          const t = ve(l.data.json);
          t.locked = 1, meta2d.open(t), meta2d.emit("clear"), meta2d.fitView(), K(), e.value && e.value.reconnectWebSocket(l.data.json);
        }
        return;
      }
      l.value && fetch(l.value).then((t) => t.json()).then((t) => {
        t && (t.locked = 1, meta2d.open(t), meta2d.emit("clear"), meta2d.fitView(), K());
      }).catch((t) => {
        console.log("err: ", t);
      });
    }, $ = () => {
      meta2d == null || meta2d.resize();
    }, W = () => {
      meta2d == null || meta2d.resize();
    };
    let ue, ee = [];
    const _e = (o) => {
      const l = ee.find((t) => t.Name === o.Name);
      if (l) {
        const { id: t, tag: g, ...A } = o;
        Object.assign(l, A);
        return;
      } else
        ee.push(o);
    }, de = (o) => {
      if (!o) return;
      const { id: l, tag: t, action: g, value: A, ..._ } = o, w = A || _, U = meta2d.find(l || t || _.Name);
      switch (g) {
        case z.StartAnimate:
          meta2d.startAnimate(U);
          break;
        case z.PauseAnimate:
          meta2d.pauseAnimate(U);
          break;
        case z.StopAnimate:
          meta2d.stopAnimate(U);
          break;
        default:
          U.forEach((M) => {
            var X;
            if (w.id = M.id, "showChild" in M && ((X = M.Ecomponents) == null ? void 0 : X.length) > 0) {
              const [C, pe] = M.Ecomponents;
              if (C === "off" || C === "on") {
                const te = C === "off" && pe === "1" || C === "on" && pe === "0";
                let Y;
                te ? Y = [1, 0] : Y = [0, 1], w.showChild = Y.indexOf(o.State);
              } else {
                const te = M.Ecomponents.slice(1);
                if (C >= 3) {
                  const Y = te.indexOf(o.State.toString());
                  w.showChild = Y;
                }
              }
            }
            o.Value == 1 ? (w.color = "rgb(255, 0, 0)", w.lineWidth = 2, w.animateColor = "rgb(255, 0, 0)", meta2d.startAnimate([M])) : (meta2d.stopAnimate([M]), w.color = "rgb(0, 0, 128)", w.lineWidth = 2), console.log("_props: ", w), meta2d.setValue(w, { render: !1 });
          });
          break;
      }
    }, K = () => {
      meta2d && ee.forEach((o) => {
        console.log("state: ", o), de(o);
      });
    };
    u.enableBackgroundUpdate && (ue = (o) => {
      const { busName: l, msg: t, msgType: g } = o || {};
      if (console.log("ws msg: ", o), t) {
        const { id: A, tag: _, action: w, value: U, ...M } = t;
        if (!M) {
          console.warn("无法识别目标图元：", o);
          return;
        }
        _e(t), meta2d.find(A || _ || M.Name).length && (de(t), meta2d.render());
      }
    });
    const ke = N(() => `${u.rightPanelWidth}px`);
    let we = localStorage.getItem("meta2d"), fe;
    try {
      fe = JSON.parse(we), !i() && !((me = f == null ? void 0 : f.query) != null && me["open-file"]) && r(u.data || fe);
    } catch {
    }
    return (o, l) => {
      const t = T("t-icon"), g = T("t-col"), A = T("t-row"), _ = T("t-divider"), w = T("t-tree"), U = T("t-table"), M = T("t-sticky-item"), X = T("t-sticky-tool");
      return D(), Q(Z, null, [
        De("div", {
          class: "app-page is--preview",
          style: ce({
            paddingTop: u.multipleDataConfig ? "50px" : "0px"
          })
        }, [
          h(qe, {
            config: d.multipleDataConfig,
            onSubmit: E,
            onReset: F
          }, null, 8, ["config"]),
          h(Pe, {
            name: "sidebar-transition",
            onAfterLeave: W,
            onAfterEnter: $
          }, {
            default: V(() => [
              p.value ? J("", !0) : (D(), Q("div", Je, [
                h(A, {
                  justify: "end",
                  style: { cursor: "pointer" }
                }, {
                  default: V(() => [
                    h(g, { span: 2 }, {
                      default: V(() => [
                        h(t, {
                          name: "fullscreen",
                          size: "large",
                          onClick: l[0] || (l[0] = (C) => k("fullscreen"))
                        })
                      ]),
                      _: 1
                    }),
                    h(g, { span: 2 }, {
                      default: V(() => [
                        h(t, {
                          name: "rectangle",
                          size: "large",
                          onClick: l[1] || (l[1] = (C) => k("fit"))
                        })
                      ]),
                      _: 1
                    }),
                    h(g, { span: 2 }, {
                      default: V(() => [
                        h(t, {
                          name: "refresh",
                          size: "large",
                          onClick: l[2] || (l[2] = (C) => k("refresh"))
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                h(_),
                h(w, {
                  data: S.value,
                  expandAll: "",
                  activable: "",
                  onClick: H
                }, null, 8, ["data"])
              ]))
            ]),
            _: 1
          }),
          h(Oe, se(o.$attrs, {
            preview: "",
            data: d.data,
            customWsHandler: je(ue),
            onReady: l[3] || (l[3] = (C) => R("ready", C)),
            ref_key: "childComponentRef",
            ref: e
          }), null, 16, ["data", "customWsHandler"]),
          d.showRightPanel || n.value.show ? (D(), Q("div", Ge, [
            Ve(o.$slots, "right-panel", {}, () => [
              s.value.length ? (D(), q(U, se({
                key: 0,
                ref_key: "tableRef",
                ref: b,
                class: "table-flex-right",
                "row-key": "sid",
                data: a.value,
                columns: s.value,
                "active-row-type": "single"
              }, n.value, { style: c.value }), null, 16, ["data", "columns", "style"])) : J("", !0)
            ], !0)
          ])) : J("", !0),
          d.showStickyTool ? (D(), q(X, {
            key: 1,
            type: "compact",
            placement: "left-bottom",
            style: { "z-index": "999" },
            onClick: L
          }, {
            default: V(() => [
              (D(!0), Q(Z, null, ye(v, (C) => (D(), Q(Z, {
                key: C.label
              }, [
                C.show() ? (D(), q(M, {
                  key: 0,
                  label: C.label,
                  icon: I(C.icon),
                  popup: C.popup
                }, null, 8, ["label", "icon", "popup"])) : J("", !0)
              ], 64))), 128))
            ]),
            _: 1
          })) : J("", !0)
        ], 4),
        h(Ue)
      ], 64);
    };
  }
}), Xe = /* @__PURE__ */ ie(Ke, [["__scopeId", "data-v-05f488aa"]]), tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" }));
export {
  tt as P,
  ze as u
};
//# sourceMappingURL=Preview-z6I9jeGn.mjs.map
