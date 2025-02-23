import { defineComponent as x, computed as n, createElementBlock as r, openBlock as l, normalizeStyle as c, toDisplayString as p } from "vue";
const u = /* @__PURE__ */ x({
  __name: "Text",
  props: {
    text: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    console.log("xxxxxxxxxxxxx: ", t);
    const o = n(() => ({
      color: t.textColor,
      height: t.height
    }));
    return (s, a) => (l(), r("div", {
      class: "extend__text",
      style: c(o.value)
    }, p(t.text), 5));
  }
});
export {
  u as default
};
//# sourceMappingURL=Text-B9n3RzJM.mjs.map
