import { ref as S, computed as z, defineComponent as M, reactive as Q, resolveComponent as p, openBlock as v, createElementBlock as w, createVNode as t, Transition as U, withCtx as l, createCommentVNode as x, mergeProps as X, renderSlot as Y, unref as j, createBlock as T, createTextVNode as b, Fragment as L, renderList as Z, h as ee } from "vue";
import { V as te, t as ne, _ as oe } from "./View-x8nqHB5y.mjs";
import { I as le } from "./index-Bllz_Dlr.mjs";
function E(c, a) {
  if (a != 1) {
    const { Name: _, Type: g, Value: m, State: h } = c;
    if (g == 28)
      return {
        tag: _,
        showChild: h || 0
        // 制作组合时和电路元件定义的状态保持一致
      };
  }
}
const ae = () => {
  const c = S([]), a = S(0), _ = z(() => c.value[a.value]), g = (r) => {
    if (typeof r == "string") {
      const i = c.value.findIndex((u) => u.name === r);
      ~i ? a.value = i : console.warn("没有这个步骤: ", r);
    } else if (typeof r == "number") {
      const i = c.value.length - 1;
      if (i == -1) {
        a.value = 0;
        return;
      }
      const u = parseInt(r);
      u > i ? (a.value = i, console.warn("指定序号超出上限")) : u < 0 ? a.value = 0 : a.value = r;
    }
  };
  return {
    playList: c,
    currentStep: a,
    changePage: g,
    play: () => {
      if (console.log("play: ", _.value), _.value) {
        const { stateList: r, currentStateList: i, privatePropList: u } = _.value;
        r != null && r.length && r.forEach((d) => {
          const s = E(d, 0);
          if (s) {
            if (!s.tag && !s.id) {
              console.warn("更新参数必须要有标签名或ID：", s);
              return;
            }
            meta2d.setValue(s);
          }
        }), i != null && i.length && i.forEach((d) => {
          const s = E(d, 1);
          if (s) {
            if (!s.tag && !s.id) {
              console.warn("更新参数必须要有标签名或ID：", s);
              return;
            }
            meta2d.setValue(s);
          }
        }), u != null && u.length && u.forEach((d) => {
          if (d) {
            if (!d.id && !d.tag)
              return;
            meta2d.setValue(d);
          }
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
      g(a.value - 1);
    },
    next: () => {
      g(a.value + 1);
    },
    currentStepData: _
  };
}, re = { class: "app-page is--preview" }, ie = {
  key: 0,
  class: "left__panel"
}, se = {
  key: 0,
  class: "right__panel"
}, pe = /* @__PURE__ */ M({
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
      default: !0
    }
  },
  emits: ["ready"],
  setup(c, { emit: a }) {
    const _ = a, g = c, m = S(!0), h = Q([
      {
        label: "fullscreen",
        icon: "fullscreen",
        popup: "全屏",
        show: () => m.value
      },
      {
        label: "fit",
        icon: "rectangle",
        popup: "适应窗口",
        show: () => m.value
      },
      {
        label: "expand",
        icon: "menu-fold",
        popup: "展开侧边栏",
        show: () => m.value
      },
      {
        label: "collapse",
        icon: "menu-unfold",
        popup: "收起侧边栏",
        show: () => !m.value
      }
    ]), D = z(() => {
      var e;
      if (g.projectTreeData) return g.projectTreeData;
      if ((e = globalThis.__meta2d_env__) != null && e.projectTreeData)
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
    }), P = (o) => () => ee(le, {
      name: o
    }), C = (o) => {
      o == "fit" ? meta2d.fitView(!0, 20) : o == "fullscreen" && ne();
    }, V = ({ e: o, item: e }) => {
      e.label == "expand" ? m.value = !1 : e.label == "collapse" ? m.value = !0 : C(e.label);
    }, r = ({ e: o, node: e }) => {
      console.log("change node: ", e), e.value && fetch(e.value).then((f) => f.json()).then((f) => {
        f && (f.locked = 1, meta2d.open(f), meta2d.emit("clear"), meta2d.fitView());
      }).catch((f) => {
        console.log("err: ", f);
      });
    }, i = () => {
      meta2d == null || meta2d.resize();
    }, u = () => {
      meta2d == null || meta2d.resize();
    }, { playList: d, currentStepData: s, prev: B, next: N, play: A } = ae();
    d.value = [
      {
        name: "page1",
        description: "text1",
        // stateList: [
        //   {
        //     Name: "Switch",
        //     Type: 28,
        //     State: 0,
        //   },
        //   {
        //     Name: "继电器A",
        //     Type: 18,
        //     Value: 1, // 有电无电
        //   },
        // ],
        // currentStateList: [
        //   {
        //     name: "LineA",
        //     value: 1.1, // 电流值
        //   },
        // ],
        privatePropList: [
          {
            tag: "Switch",
            showChild: 1
          },
          {
            tag: "L32",
            lineWidth: 2
          }
        ]
      },
      {
        name: "page2",
        description: "text2",
        // stateList: [
        //   {
        //     Name: "Switch",
        //     Type: 28,
        //     State: 1,
        //   },
        //   {
        //     Name: "继电器",
        //     Type: 17,
        //     Value: 0,
        //   },
        // ],
        // currentStateList: [
        //   {
        //     name: "LineB",
        //     value: 1.1, // 电流值
        //   },
        // ],
        privatePropList: [
          {
            tag: "Switch",
            showChild: 1
          },
          {
            tag: "L32",
            lineWidth: 3
          }
        ]
      },
      {
        name: "page3",
        description: "text3",
        // stateList: [
        //   {
        //     Name: "Switch",
        //     Type: 28,
        //     State: 2,
        //   },
        //   {
        //     Name: "R",
        //     Type: 0,
        //     Value: 1,
        //   },
        // ],
        // currentStateList: [
        //   {
        //     name: "LineC",
        //     value: 1.1, // 电流值
        //   },
        // ],
        privatePropList: [
          {
            tag: "Switch",
            showChild: 1
          },
          {
            tag: "L32",
            lineWidth: 1
          }
        ]
      }
    ];
    const y = (o) => {
      switch (o) {
        case 0:
          B();
          break;
        case 1:
          N();
          break;
        case 2:
          A();
          break;
      }
    };
    return (o, e) => {
      const f = p("t-icon"), $ = p("t-col"), R = p("t-row"), I = p("t-divider"), W = p("t-tree"), F = p("t-list-item-meta"), O = p("t-list-item"), H = p("t-list"), J = p("t-empty"), k = p("t-button"), K = p("t-space"), q = p("t-sticky-item"), G = p("t-sticky-tool");
      return v(), w("div", re, [
        t(U, {
          name: "sidebar-transition",
          onAfterLeave: u,
          onAfterEnter: i
        }, {
          default: l(() => [
            m.value ? x("", !0) : (v(), w("div", ie, [
              t(R, { justify: "end" }, {
                default: l(() => [
                  t($, { span: 2 }, {
                    default: l(() => [
                      t(f, {
                        name: "fullscreen",
                        size: "large",
                        onClick: e[0] || (e[0] = (n) => C("fullscreen"))
                      })
                    ]),
                    _: 1
                  }),
                  t($, { span: 2 }, {
                    default: l(() => [
                      t(f, {
                        name: "rectangle",
                        size: "large",
                        onClick: e[1] || (e[1] = (n) => C("fit"))
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(I),
              t(W, {
                data: D.value,
                expandAll: "",
                activable: "",
                onClick: r
              }, null, 8, ["data"])
            ]))
          ]),
          _: 1
        }),
        t(te, X(o.$attrs, {
          preview: "",
          data: c.data,
          onReady: e[2] || (e[2] = (n) => _("ready", n))
        }), null, 16, ["data"]),
        c.showRightPanel ? (v(), w("div", se, [
          Y(o.$slots, "right-panel", {}, () => [
            j(d).length ? (v(), T(H, {
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
                        description: (n = j(s)) == null ? void 0 : n.description
                      }, null, 8, ["description"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })) : (v(), T(J, { key: 1 })),
            t(I),
            t(K, {
              direction: "vertical",
              align: "center"
            }, {
              default: l(() => [
                t(k, {
                  block: "",
                  theme: "primary",
                  variant: "base",
                  onClick: e[3] || (e[3] = (n) => y(0))
                }, {
                  default: l(() => e[9] || (e[9] = [
                    b("上一页")
                  ])),
                  _: 1
                }),
                t(k, {
                  block: "",
                  variant: "outline",
                  onClick: e[4] || (e[4] = (n) => y(1))
                }, {
                  default: l(() => e[10] || (e[10] = [
                    b("下一页")
                  ])),
                  _: 1
                }),
                t(k, {
                  block: "",
                  variant: "dashed",
                  onClick: e[5] || (e[5] = (n) => y(2))
                }, {
                  default: l(() => e[11] || (e[11] = [
                    b("播放")
                  ])),
                  _: 1
                }),
                t(k, {
                  block: "",
                  variant: "text",
                  onClick: e[6] || (e[6] = (n) => y(3))
                }, {
                  default: l(() => e[12] || (e[12] = [
                    b("暂停")
                  ])),
                  _: 1
                }),
                t(k, {
                  block: "",
                  variant: "text",
                  onClick: e[7] || (e[7] = (n) => y(4))
                }, {
                  default: l(() => e[13] || (e[13] = [
                    b("停止")
                  ])),
                  _: 1
                }),
                t(k, {
                  block: "",
                  variant: "dashed",
                  onClick: e[8] || (e[8] = (n) => y(5))
                }, {
                  default: l(() => e[14] || (e[14] = [
                    b("重播")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            })
          ], !0)
        ])) : x("", !0),
        c.showStickyTool ? (v(), T(G, {
          key: 1,
          type: "compact",
          placement: "left-bottom",
          style: { "z-index": "999" },
          onClick: V
        }, {
          default: l(() => [
            (v(!0), w(L, null, Z(h, (n) => (v(), w(L, {
              key: n.label
            }, [
              n.show() ? (v(), T(q, {
                key: 0,
                label: n.label,
                icon: P(n.icon),
                popup: n.popup
              }, null, 8, ["label", "icon", "popup"])) : x("", !0)
            ], 64))), 128))
          ]),
          _: 1
        })) : x("", !0)
      ]);
    };
  }
}), fe = /* @__PURE__ */ oe(pe, [["__scopeId", "data-v-2347e0de"]]);
export {
  fe as default
};
//# sourceMappingURL=Preview-BRIDvN0i.mjs.map
