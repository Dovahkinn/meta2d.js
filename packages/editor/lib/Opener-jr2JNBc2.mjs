import { defineComponent as U, ref as M, reactive as A, onMounted as O, onUnmounted as D, resolveComponent as w, createElementBlock as W, openBlock as v, Fragment as F, createElementVNode as q, createVNode as u, normalizeClass as E, withCtx as f, unref as d, createBlock as k, createCommentVNode as J, createTextVNode as L } from "vue";
import { M as R, F as y, G as V, H as _, I as z, W as x, j as T, J as $, K as G, L as K, N as Q, O as X, Q as Y, R as Z, T as ee, U as te, X as se, Y as ae, Z as oe, _ as P, A as ne } from "./pathAnimate-CGf_anjp.mjs";
import { u as le } from "./Preview-z6I9jeGn.mjs";
const re = /* @__PURE__ */ U({
  __name: "ViewCopy",
  props: {
    preview: {
      type: Boolean,
      default: !1
    },
    data: {
      type: Object
    },
    customWsHandler: {
      type: Function
    },
    isOpener: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["ready"],
  setup(p, { expose: C, emit: N }) {
    const o = p, h = {
      rule: !1,
      drawingLineName: "line",
      rotateCursor: "rotate.cur"
    }, b = M(!1);
    let r = A({
      id: "",
      Name: "",
      fault: 0,
      State: 0
    });
    const n = N;
    let l, c;
    O(() => {
      c = new R("meta2d-sub", h), globalThis.meta2d = globalThis.mainMeta2d, y($()), V(G()), y(K()), _(Q()), y(X()), y(Y()), _(Z()), z(), _(ee()), _(te()), y(se()), _(ae()), V(oe());
      const e = o.data;
      if (e) {
        const { resolver: a } = T(e);
        if (o.preview) {
          e.locked = 1, e.lockState && (e.locked = e.lockState);
          const s = (e.msgTypes || []).map((t) => Number(t)).filter((t) => !isNaN(t)), i = e.onMessageJsCode;
          e.wsUrl && (l = x.getInstance(e.wsUrl, {
            busName: e.busName,
            msgTypes: s,
            enableLog: !1,
            onReady: () => {
              console.log("%c连接成功！", "color: green; font-weight: bold;"), l.subscribe(e.busName, s, (t) => {
                console.log("response: ", t);
                try {
                  i ? new Function("data", i)(t) : o.customWsHandler ? o.customWsHandler(t, meta2d) : a(t);
                } catch (m) {
                  console.log("error: ", m);
                }
              });
            }
          }), l.connect());
        } else
          e.locked = 0;
        c.open(e), n("ready", c);
      }
    });
    const S = (e) => {
      const { resolver: a } = T(e);
      if (e.wsUrl) {
        e.locked = 1;
        const s = (e.msgTypes || []).map((t) => Number(t)).filter((t) => !isNaN(t)), i = e.onMessageJsCode;
        l = x.getInstance(e.wsUrl, {
          busName: e.busName,
          msgTypes: s,
          enableLog: !1,
          onReady: () => {
            console.log("%c连接成功！", "color: green; font-weight: bold;"), l.subscribe(e.busName, s, (t) => {
              try {
                i ? new Function("data", i)(t) : o.customWsHandler ? o.customWsHandler(t, meta2d) : a(t);
              } catch (m) {
                console.log("error: ", m);
              }
            });
          }
        }), l.connect();
      }
    }, H = (e, a) => {
      let s = localStorage.getItem("meta2d");
      (o.data || s) && (s = o.data || JSON.parse(s)), s.wsUrl, s.wsUrl && a === "setting" && (l.sendMessage(s.busName, 3e3, {
        Name: e.Name,
        Type: 28,
        State: e.State
      }), c.setValue({ id: e.id, showChild: e.State }, { render: !1 }));
    }, I = () => {
      let e = o.data;
      e.wsUrl && l.sendMessage(e.busName, 1002, {});
    }, B = () => {
      b.value = !1;
    }, j = (e) => {
      b.value = !1, H(r, "setting");
    };
    return C({
      reconnectWebSocket: S,
      Sendrequestsyn: I
    }), D(() => {
      c.destroy(!0), l && l.close();
    }), (e, a) => {
      const s = w("t-input"), i = w("t-form-item"), t = w("t-form"), m = w("t-dialog");
      return v(), W(F, null, [
        q("div", {
          id: "meta2d-sub",
          class: E({ "is--preview": p.preview, "is--opener": p.isOpener })
        }, null, 2),
        u(m, {
          visible: b.value,
          "close-btn": !0,
          "on-confirm": j,
          "cancel-btn": "取消",
          "on-close": B
        }, {
          header: f(() => a[3] || (a[3] = [
            L("设置")
          ])),
          body: f(() => [
            u(t, {
              ref: "form",
              data: d(r)
            }, {
              default: f(() => [
                u(i, {
                  label: "ID",
                  name: "id",
                  disabled: ""
                }, {
                  default: f(() => [
                    u(s, {
                      placeholder: "请输入内容",
                      modelValue: d(r).id,
                      "onUpdate:modelValue": a[0] || (a[0] = (g) => d(r).id = g),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                u(i, {
                  label: "名称",
                  name: "Name"
                }, {
                  default: f(() => [
                    u(s, {
                      placeholder: "请输入内容",
                      modelValue: d(r).Name,
                      "onUpdate:modelValue": a[1] || (a[1] = (g) => d(r).Name = g),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(r).State != -1 ? (v(), k(i, {
                  key: 0,
                  label: "设置状态值",
                  name: "State"
                }, {
                  default: f(() => [
                    u(s, {
                      placeholder: "请输入",
                      modelValue: d(r).State,
                      "onUpdate:modelValue": a[2] || (a[2] = (g) => d(r).State = g),
                      disabled: d(r).fault == 1
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                })) : J("", !0)
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["visible"])
      ], 64);
    };
  }
}), ce = /* @__PURE__ */ P(re, [["__scopeId", "data-v-2e18c7a1"]]), ie = { class: "app-page is--opener" }, de = /* @__PURE__ */ U({
  __name: "Opener",
  props: {
    url: {
      type: String,
      required: !0
    }
  },
  emits: ["ready"],
  setup(p, { emit: C }) {
    const N = p, o = M(null), h = (n, l) => {
      const { tasks: c } = le(n, l);
      setTimeout(async () => {
        for (const S of c)
          await S();
      });
    };
    N.url && (globalThis.mainMeta2d = globalThis.meta2d, fetch(N.url).then((n) => n.json()).then((n) => {
      o.value = n;
    }).catch((n) => {
      console.log("opener: fetch error: ", n);
    }));
    const { extendOn: b } = ne();
    O(() => {
      meta2d == null || meta2d.resize(), b();
    });
    const r = (n) => {
      console.log("opener ready: ", n), n.fitView(!0, 20), h(o.value, n);
    };
    return (n, l) => {
      const c = w("t-empty");
      return v(), W("div", ie, [
        o.value ? (v(), k(ce, {
          key: 0,
          preview: "",
          isOpener: "",
          data: o.value,
          onReady: r
        }, null, 8, ["data"])) : (v(), k(c, { key: 1 }))
      ]);
    };
  }
}), pe = /* @__PURE__ */ P(de, [["__scopeId", "data-v-8f65e257"]]);
export {
  pe as default
};
//# sourceMappingURL=Opener-jr2JNBc2.mjs.map
