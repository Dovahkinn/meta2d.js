import { ref as C, computed as I, defineComponent as M, reactive as Q, resolveComponent as s, openBlock as u, createElementBlock as b, createVNode as t, Transition as U, withCtx as l, createCommentVNode as w, mergeProps as W, renderSlot as X, unref as D, createBlock as T, createTextVNode as k, Fragment as j, renderList as Y, h as Z } from "vue";
import { V as ee, t as te, _ as ne } from "./View-CJKj3XLh.mjs";
import { I as ae } from "./index-DyLGM4AC.mjs";
const le = () => {
  const c = C([]), i = C(0), f = I(() => c.value[i.value]), v = (o) => {
    if (typeof o == "string") {
      const r = c.value.findIndex((m) => m.name === o);
      ~r ? i.value = r : console.warn("没有这个步骤: ", o);
    } else if (typeof o == "number") {
      const r = c.value.length - 1;
      if (r == -1) {
        i.value = 0;
        return;
      }
      const m = parseInt(o);
      m > r ? (i.value = r, console.warn("指定序号超出上限")) : m < 0 ? i.value = 0 : i.value = o;
    }
  };
  return {
    playList: c,
    currentStep: i,
    changePage: v,
    play: () => {
      if (console.log("play: ", f.value, meta2d.data()), f.value) {
        const { stateList: o, currentStateList: r } = f.value;
        o != null && o.length && o.forEach((m) => {
        }), r != null && r.length && r.forEach((m) => {
        });
      }
    },
    pause: () => {
    },
    stop: () => {
    },
    replay: () => {
    },
    prev: () => {
      v(i.value - 1);
    },
    next: () => {
      v(i.value + 1);
    },
    currentStepData: f
  };
}, oe = { class: "app-page is--preview" }, re = {
  key: 0,
  class: "left__panel"
}, se = {
  key: 0,
  class: "right__panel"
}, ie = /* @__PURE__ */ M({
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
    }
  },
  emits: ["ready"],
  setup(c, { emit: i }) {
    const f = i, v = c, d = C(!0), x = Q([
      {
        label: "fullscreen",
        icon: "fullscreen",
        popup: "全屏",
        show: () => d.value
      },
      {
        label: "fit",
        icon: "rectangle",
        popup: "适应窗口",
        show: () => d.value
      },
      {
        label: "expand",
        icon: "menu-fold",
        popup: "展开侧边栏",
        show: () => d.value
      },
      {
        label: "collapse",
        icon: "menu-unfold",
        popup: "收起侧边栏",
        show: () => !d.value
      }
    ]), S = I(() => {
      var e;
      if (v.projectTreeData) return v.projectTreeData;
      if ((e = globalThis.__meta2d_env__) != null && e.projectTreeData)
        return globalThis.__meta2d_env__.projectTreeData;
      let a = localStorage.getItem("meta2d");
      return a ? [
        {
          label: "默认",
          value: "",
          children: [
            {
              label: `meta2d.${JSON.parse(a).template}`,
              value: ""
            }
          ]
        }
      ] : [];
    }), h = (a) => () => Z(ae, {
      name: a
    }), g = (a) => {
      a == "fit" ? meta2d.fitView(!0, 20) : a == "fullscreen" && te();
    }, L = ({ e: a, item: e }) => {
      e.label == "expand" ? d.value = !1 : e.label == "collapse" ? d.value = !0 : g(e.label);
    }, o = ({ e: a, node: e }) => {
      console.log("change node: ", e), e.value && fetch(e.value).then((p) => p.json()).then((p) => {
        p && (p.locked = 1, meta2d.open(p), meta2d.emit("clear"), meta2d.fitView());
      }).catch((p) => {
        console.log("err: ", p);
      });
    }, r = () => {
      meta2d == null || meta2d.resize();
    }, m = () => {
      meta2d == null || meta2d.resize();
    }, { playList: $, currentStepData: P, prev: A, next: B, play: z } = le();
    $.value = [
      {
        name: "page1",
        description: "text1",
        stateList: [
          {
            Name: "Switch",
            Type: 0,
            State: 0
          },
          {
            Name: "继电器A",
            Type: 18,
            Value: 1
            // 有电无电
          }
        ],
        currentStateList: [
          {
            name: "LineA",
            value: 1.1
            // 电流值
          }
        ]
      },
      {
        name: "page2",
        description: "text2",
        stateList: [
          {
            Name: "Switch",
            Type: 0,
            State: 1
          },
          {
            Name: "继电器",
            Type: 17,
            Value: 0
          }
        ],
        currentStateList: [
          {
            name: "LineB",
            value: 1.1
            // 电流值
          }
        ]
      },
      {
        name: "page3",
        description: "text3",
        stateList: [
          {
            Name: "Switch",
            Type: 0,
            State: 2
          },
          {
            Name: "R",
            Type: 0,
            Value: 1
          }
        ],
        currentStateList: [
          {
            name: "LineC",
            value: 1.1
            // 电流值
          }
        ]
      }
    ];
    const _ = (a) => {
      switch (a) {
        case 0:
          A();
          break;
        case 1:
          B();
          break;
        case 2:
          z();
          break;
      }
    };
    return (a, e) => {
      const p = s("t-icon"), N = s("t-col"), E = s("t-row"), V = s("t-divider"), R = s("t-tree"), F = s("t-list-item-meta"), O = s("t-list-item"), H = s("t-list"), J = s("t-empty"), y = s("t-button"), K = s("t-space"), q = s("t-sticky-item"), G = s("t-sticky-tool");
      return u(), b("div", oe, [
        t(U, {
          name: "sidebar-transition",
          onAfterLeave: m,
          onAfterEnter: r
        }, {
          default: l(() => [
            d.value ? w("", !0) : (u(), b("div", re, [
              t(E, { justify: "end" }, {
                default: l(() => [
                  t(N, { span: 2 }, {
                    default: l(() => [
                      t(p, {
                        name: "fullscreen",
                        size: "large",
                        onClick: e[0] || (e[0] = (n) => g("fullscreen"))
                      })
                    ]),
                    _: 1
                  }),
                  t(N, { span: 2 }, {
                    default: l(() => [
                      t(p, {
                        name: "rectangle",
                        size: "large",
                        onClick: e[1] || (e[1] = (n) => g("fit"))
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(V),
              t(R, {
                data: S.value,
                expandAll: "",
                activable: "",
                onClick: o
              }, null, 8, ["data"])
            ]))
          ]),
          _: 1
        }),
        t(ee, W(a.$attrs, {
          preview: "",
          data: c.data,
          onReady: e[2] || (e[2] = (n) => f("ready", n))
        }), null, 16, ["data"]),
        c.showRightPanel ? (u(), b("div", se, [
          X(a.$slots, "right-panel", {}, () => [
            D($).length ? (u(), T(H, {
              key: 0,
              split: !0
            }, {
              default: l(() => [
                t(O, null, {
                  default: l(() => {
                    var n;
                    return [
                      t(F, {
                        title: "内容",
                        description: (n = D(P)) == null ? void 0 : n.description
                      }, null, 8, ["description"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })) : (u(), T(J, { key: 1 })),
            t(V),
            t(K, {
              direction: "vertical",
              align: "center"
            }, {
              default: l(() => [
                t(y, {
                  block: "",
                  theme: "primary",
                  variant: "base",
                  onClick: e[3] || (e[3] = (n) => _(0))
                }, {
                  default: l(() => e[9] || (e[9] = [
                    k("上一页")
                  ])),
                  _: 1
                }),
                t(y, {
                  block: "",
                  variant: "outline",
                  onClick: e[4] || (e[4] = (n) => _(1))
                }, {
                  default: l(() => e[10] || (e[10] = [
                    k("下一页")
                  ])),
                  _: 1
                }),
                t(y, {
                  block: "",
                  variant: "dashed",
                  onClick: e[5] || (e[5] = (n) => _(2))
                }, {
                  default: l(() => e[11] || (e[11] = [
                    k("播放")
                  ])),
                  _: 1
                }),
                t(y, {
                  block: "",
                  variant: "text",
                  onClick: e[6] || (e[6] = (n) => _(3))
                }, {
                  default: l(() => e[12] || (e[12] = [
                    k("暂停")
                  ])),
                  _: 1
                }),
                t(y, {
                  block: "",
                  variant: "text",
                  onClick: e[7] || (e[7] = (n) => _(4))
                }, {
                  default: l(() => e[13] || (e[13] = [
                    k("停止")
                  ])),
                  _: 1
                }),
                t(y, {
                  block: "",
                  variant: "dashed",
                  onClick: e[8] || (e[8] = (n) => _(5))
                }, {
                  default: l(() => e[14] || (e[14] = [
                    k("重播")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            })
          ], !0)
        ])) : w("", !0),
        c.showStickyTool ? (u(), T(G, {
          key: 1,
          type: "compact",
          placement: "left-bottom",
          style: { "z-index": "999" },
          onClick: L
        }, {
          default: l(() => [
            (u(!0), b(j, null, Y(x, (n) => (u(), b(j, {
              key: n.label
            }, [
              n.show() ? (u(), T(q, {
                key: 0,
                label: n.label,
                icon: h(n.icon),
                popup: n.popup
              }, null, 8, ["label", "icon", "popup"])) : w("", !0)
            ], 64))), 128))
          ]),
          _: 1
        })) : w("", !0)
      ]);
    };
  }
}), de = /* @__PURE__ */ ne(ie, [["__scopeId", "data-v-8efe0e03"]]);
export {
  de as default
};
//# sourceMappingURL=Preview-DrMeDEh9.mjs.map
