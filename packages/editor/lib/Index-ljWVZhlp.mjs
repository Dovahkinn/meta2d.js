import { defineComponent as ge, reactive as Ae, ref as ae, onMounted as Le, resolveComponent as b, createElementBlock as R, openBlock as i, Fragment as K, createElementVNode as x, createVNode as e, withCtx as l, createTextVNode as J, renderList as oe, createBlock as L, createCommentVNode as q, toDisplayString as ce, withDirectives as Oe, normalizeStyle as Al, vShow as Ne, watch as Be, renderSlot as Ge, shallowRef as Ul, unref as B, shallowReactive as nl, computed as Ve, isRef as xe, onUnmounted as Ze, createSlots as Sl, nextTick as il, mergeProps as _e, normalizeProps as Fe, guardReactiveProps as He, normalizeClass as _l, withModifiers as dl } from "vue";
import { g as Pl, c as Te, u as Ll, a as ml, l as $l, P as ul, r as Tl, d as Pe, p as Ml, _ as he, s as Ce, E as te, C as Fl, b as Ke, e as me, f as Re, h as ze, i as el, W as Il, j as Bl, k as Dl, m as je, n as El, o as Rl, S as Se, q as zl, t as Ol, v as Je, w as Nl, V as Hl } from "./pathAnimate-CGf_anjp.mjs";
import { V as Gl, M as ye, N as pl, I as jl, B as Yl } from "./index-B0jrlxAg.mjs";
const Wl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAUkUlEQVR42u2daYxcVXbHf91d3e3eXN1e2xs22AYKGJZhnTAwAwmZzMZkkg+ZfIiyaPIhk0T5EBFFkaJE+ZAPURRpFGWRokSKFJFIzMCMWYfNwAybMZhMgLbNYrCNsVldeIG23d358L+Pet1d7rrvVlW/9+qdn1QqbPq133L+55177rnngmEUmK60T8Aw2skE5S5k5z2xTwkYBVaZAIyOYYJyNzAELAWWAWVgObAaOAdYD6x1fx4HRkwARqaZ48H7gF73GQBWImNejwx6DXAesAIYAQbd94A7Zh4mACMVJihDffvrQ557BBnyGLAKWIe8+Epqxj4KLEHi6HafniTnYQIw2o7z4t3IuPuAfmS4ZWTQ65FBrwM2oDBl2H0G3WeJ+x0txQRgBOMMG2RH8c8AMu5lyMDHkFFvdH9ehbx4FKr0MtuDL5pdmgAML5yx9yLv3Yc8cj8y6Cg8WY08eGTcQ8iLL0FevC/t65iLCaDgnMWLl5DhLkeGvBwZ9SYUqixzfx5F3nwQee+u2HcuyM2JGs0Ry6bEY/B+ZOiR195ALV24hloGZYn77qcNcXiamAA6EGfs/dRy4KtRqLKWWsow+rtlKEYvpX3eaWACyBHOsEvIuKPMyCAKQ6LsyTnuO8qqRJ6+F3n/RR1kZh27ERnFzWqOIENejjx3NKO5Bhn9MhSjr0Ahij3PhNgNW2ScYUcefMh9l1FYEqUKo3x4ZPwl5MFL7tNRcXiamABaxFmyKX3U4vBV1GYyNyGDX468+HJq+XBjETEBBDBBuZdajjuqNxlFYUqUSVlDzeAHqXnvqCLR7n0GsIfgmFN0Fc1IllBl4Qpqs5eRJ9+IPHc04zmCRGHhSY4opABcHL4EGewIMvIxZOibUMgSpQzXICOPYvDoO1HRlZFNOkYAsRi8Bxlp5MH7UHgyjgaX4+4ThSej7lNGghhI+1qMxSPzAligbLZELQ4fpTZ1H4Un0cTPSmYXXZVin8xfv9FeMmUAsTg8MtBo8cMwMuL11CZ91iEDH0UhzHDs28ITw4vUBOCMvQ955jH3GaUWe0dxeDTwXEatFiWKwW3AaTRFywUQW/wQDzV6qS1fi1KEG6mtzVyKhDCMwpr+dpybYcylKSOboNyDctzRhM4otdg7ClHWovAlqi6Mwpxclc0anck8A4zF4d3MHjQOUgtJNqAwJZqyX0ltWn8YefBCVhca+aJrgnI/8txRHnwl8taRF4/ClKguxabrjY6hBNyJvPkwyoEPUmsjYSGK0dF0TVCeSfskDCMtLI1oFBoTgFFoTABGoTEBGIXGBGAUGhOAUWhMAEahMQEYhcYEYBQaE4BRaEwARqExARiFxgRgFBoTgFFoTABGoTEBGIXGBGAUGhOAUWhMAEahMQEYhcYEYBQaE4BRaEwARqExARiFxgRgFBoTgFFoSsCTC/z/bkwkEdbOXcRb24e21ZwGzgCn3acH7dG2yX0vGiXg1gYXa9Sw+9EcfWgzlGh72VXAucCFaH+JRd/ayh6o0TLc3hLRLp19qNP4OmTkW4Hzqe3zttx9+tM8ZxOAkYjYdrQRUfiyGhn2FmTsW4Dz0L4SA8jQe8lYSG0CMBrijD7ac3kJ2kTlAmAzcBGK3degDVbGyNEmKiYA4zPmePcuZMzr3ed8ZPTnI8OPDL2PjHn1JJgACk7Mu/ejTQy3AJfEPtEmhyN01v7LM8BbJoAC4ox+CG1Zuxm4HBn7ZWjTw8ir59azN2AG2AncZgIoABOUu5GHH0YpxxuA65G3X4k2SSyKLcwALwDfA3YW5aILyQTlJShuvwr4MnAdSkl2UiiTlFeA3wN2VKjO2F6+HYQLbfpRSvJG4NvAFe7PA2mfXwZ4G/hL4PkK1Rmwzaw7hgnKJeAa4DfQ7P6mtM8pY5wC/h64u0L1TPSXJoCc4zY6vwj4Y+CXUT6+UwevoUwDDwD/jWqQPsME0GZiufUu9+kDqFD9pAW/twx8F/hDYCPFGcgm5RDwd8C7UegTYQJoA7FYfAQVf40jL32x+/4LlIYL/f3dKIPzN8A3UErTqM8Z4D+Ixf1xTABNECv+6kEGP46yLJuBCorDN6CZ1KXu554F9jT5b1aAfwBuxp5hI14Gbgcm6/1Pu3kJiHn2UfdZj9KMFZRf34jCkiFUMzM3Fp8CflCheqyJf/9c9Dr/RYqdzvThNPL+r9fz/mACqIsLMXrQ/VmCZkzPQ559q/vv9ahMYJhafN+I/cCjTZzaEPBnaLBrxt+YV4E74lmfuZgAmFUaUEZ1LxupFX9dgLzuELWy3tDB5tPAG4Hn2AP8GvCb2HPz4TTwX8C7C/1QYW6kM/JoOV8JLdbYgEKXrWiAut793TitX6gxCdxVofpx4LlvRqnOpSndwrzxKvDjCtWphX6oowXgQploCd5KZNwXocKv89FqpSUoNdnuGvb9wPbAY7uA30GzuoYf9wKvNfqh3AugTp59AHn0C5CxX448+zhad5rWErz7gQ8Djx0HfguL+32ZAm6vUD3V6AdzKQAXD4+ieH0chQeXojCmgpbmReW8WZgceg+4K/BaS8j7r037InLEw8BLPj+YWQHEYvYoGzNELVaPPuOo0Cvry/BeBvacLRXXgJXALVh5gy+fAHegt0BDMiOA2KTSGDLqtcibX4KMfSvK0vTgn3bMApPANuBw4D25Brgy7YvIEXtIMNZadAHEDL0fDUDHUCamgmL2zSiEWYEMPjMiDeQD4OFA79+FKjtH0r6InDAN/BQ44Hu/F8W4nNEPIK8eX3O6FeXYx6iFOnnx7L78jMDcPwrxfintC8gRn6BU82nfA9oiAGfw3ciwtwA3AV9EtTGr0AA2757dhxPA3cCnSQ909/ArSASGHzuBF5Mc0FIjjA1c1wG/gl7f1yCD76XzvHsj3gCeQ6/mpCxFAuhL+yJywmngPiBRnVXLBOCMfwT4VeD30aRNkct0zwBPAPuSxv+xmd/r0r6IHHEQjbXOJDmoJQJwD2wtcBvw28jjF52TwP0+kzF16EGx/4a0LyInzKDQJ3GZedMCcMY/jtZbfpuUm51miJdQ+40QBoGvYbl/Xz4FtlWonkh6YCveAEPA3wK/TrYnoxaTKRSPJi59cA7lauBzaV9EjthLYJ1VUx5mgnIvWpP6Hcz447yNHkhI+NOHEghW9enHNCp9eDfk4GZfsZcBf4ImtAwRxaP/Fzj5NY7SxkVIE7eCD4CHQpsMBAvAteO4Da2WMmpMAg8Cx5Me6Ir8rsLCnyS8QhMNBpp5A1yK8vw2UJvNQfRKDqEEfB3L/ftyGjmbj0J/QZDxTlAeQquTLPSZzQzwCPB2YPhzAerhafhxCCUbQjfrSy4Al6W4DHtQ9agi738y6YFu9dr1qFTE8ONJ4M1AZwOEvQFKqBnT+rSvPoPsRV2HQ0oflgNfpdiz50k4hsKfxGus44QIYBmK/YtW19OIKeAx9FpOhHurbkX5f8OPN4FnCKuz+owQAdyIKjyN2RxH8ajXSqQ59KBGVyvSvoicMI3mWfZVqDb1ixIJYILyMCp2syzFfJ7Fcx1qHVagyS/L/ftxDLiHOZ2eQ/AWgHtNbwGuxcKfuZxG2Z+PAys/r0IhkOHHz9E66+DBb0SSN0APWtSyMe2rzyCHgEeTrESKMYAqP5enfRE54RQa/L7fTPYnIokARlD2x17T83keeaQQ1qDSB5tQ9OM99LYNcTbzSHLTL8O6E9RjBpXihm54cTUW/iRhF/DzVnh/8BSAq/q8FVvoUo/X0Cs5MROU+1DDW5tR92Ma9fxpanedOL5vgLXAL2Dhz1xmULvzo4HHX4zWTFtSwY83UbatJd4fPATgpuivRMVvxmyqwL0h4Y+r/PwSGgMYjYmczcFWhT/g9wYYRBWKts/sfN4AdgQeW0YbXdicih/HUIe9xHVWC+EjgE3IUxnz2UbgSiQ08P1C2heQIw4AT7bS+0MDAbjw5xbsNV2Pj4D7Qh6Iu6+3Yssek3B3hWpoe/mzclYBTFAGTc7cjMIgYzbPAK8HHrsaTX5Z7t+PD1CdVctZ6AF0oQUan0/76jPIp8BPIHkllit9uBYrKEzCDmB3O37xQgLoRfXp1ptyPtFsZEgpbh9qeTiW9kXkhFPI2bQ8/IGFBbAMlejaa3o+zwK7Awdky1D4Y7l/Pz4EftJos7tQ6hq3e01fj0IgYzZngB8m7UEJn93Xm7HwJwlPo5V2beFs3n0Q5agtSzGfPYTn/vtRQaHhx6fAnYFLTL2YJ4BYo9svYuHPXKZRx+fQ7Y4qqPTB8GMPegO0jbMZ+C1Y+FOPo8CPCCvG6sY6PidhGngc9VlqG/UE0IM6E9uetPN5E3gucPAbZX+sh6ofJ4EHKlQn2/mP1BPAldhruh4zqPQhtA3H51BDAcOPV1Dfn7YySwCu7v8rWN1/PQ4DDxGQ+4+VPpj392MGzfwm7veflLlvgBVo8sse1HyeA/YGhj/rUFbN8OMQcD9N9vzxYa4ALgMuT/vqM8hJNPMbsuFFNyonsdy/P7uA11pd+VmPzwTg0nTfwpbn1eMdYHtgProfJRWs9MGPT2iy43MS4m+Ac1HpgzGfZwjf7HoNdl+TELWYabv3BycA95r+MpoAM2ZzEriX8M2ub0BjAMOPx1C6eVGI3gDDqDWfdSaez27CN7seQctJbedMP44BD9DCrg+NiASwCRVpGbOZQlPxBwJbHm5FbQ+t8tOPV9EAeFHCH4Bu96BuwVrz1eMo4bORvSistD3U/DiNwp/9ixX/g94Ao2iDa2M+rxBe+TmIwkorKfHjGNrtsSUtD33pRp0JLkz76jPINIpHjwYe/3k0r2L48QLqsbqodKPY33LU83kHbcKQ2CNNUC6hsHI07YvICdNoorG53S4C6EYLNKzufzYzaO/ZicB49BxU+mwlJX4cQPH/ooY/IMO3Kfr5TAIPV6geTXqgm1O5Ai1+MRozgzI/oc6mKbqxQVo9jqDKzxD6kfe3ORU/JtFEY1O7PYZioU99HgH2Bx67CSt9SMJBtPIrFUwA8zmOirES5/5d+HMj1koyCY8D76QR/oAJoB570QA45IGMorp/C3/8OIoWvrS043MSTACzmUGpz9DShy1oyyMrffDjdeCFdrY9aYQJYDaTaMOLUwHHRuGPVdT6MYPGWgfSPAkTwGx2EV76MILW/VpWzY+TwI/a1fLQFxNAjRnUhDVx3b/jarTnl+HHC7Sp43MSTAA1DiIBhHR96EOD33LaF5ETTqMWM8fSPhETQI1mZiPXoNJnC3/8OITSn6mGP2ACiHNHhWpoMdbVqPGV4ceLwEtp5f7jmADEOwSWPrjtTr+FLXv0ZQa4K2Rr2XZgAhCPEN6G41zgprQvIEfsQ3MtmcAEIMO/k7C6/27UStKWk/oR5f7fS/tEIkwAmo18PjAeLSMBWDMxP6oEtphpF0UXwDTwKPB24PHnoQGw4cc+4NksDH4jii6A48C2kNlIV/vzTWwXzSQ8iNZaZIaiC6CZ2cgy1vE5CR8D92TJ+0OxBXAKxaOhm11fh3XTSMLTqM1MpiiyAN5B8X/IbGQ/GvzaLpp+TKIyk0Xv+tCIogpgBniJ8NKHaBNxK33w4wPgsbQrP+tRVAFMAj9oYjbyBuCStC8iRzyNHE7mKKoA9gFPhRzoJr++ga368uU0cP9itzz0pYgCmAYeJnz/2Yux3R6TsBuNtTJJEQVwFD2QxOGPa3n4JWBl2heRE6bRVqeZyv3HKaIA9gDPBA5+l6LwZyDti8gJVVRlm4nKz3oUTQBnkPdPXIwV2/Di2rQvIkfsBZ7K2uRXnKIJ4D3U8jykDUcX6vdvuX8/plHu/4O0T2QhiiaAZ4DdTSx7/CrFu2ehvIfCnzNpn8hCFOlhnkQLMRIvfHGpz6uxTtpJeAHYm+XwB4olgEPA44GzkQNo5ndZ2heRE04i75/p8AeKJYCfAa8lPcgNfqPNrm3yy4/DwPYslj7MpSgC+BS4m/CVSNcDG9O+iBzxNAHOJg2KIoCXgZ2BTViHUO7flj36ETmbzOb+4xRBAFHuP/FspAt/LkGbXRfhXrWCvWgAnFrH5yQU4aFWgUcCN7suoYUv69K+iJwwhcZaidvLp0URBLAL5f9DGEPhj+326MfHwD0E7K6TFkUQwH1o8XsIlwKXp30BOeJVtOFFLrw/dL4A9qNGTCEdn0to5tdKH/yYRoPf0A57qdDpAngKeKuJza5vwsIfX6I11plc+HI2OlkAUTou8f6zrvThKqz0IQm7gD15Cn+gswVwEHg08IEMoPBnJO2LyAmn0Fjrw7RPJCmdLID7gHcDjz0HbXhh+PE+8FDevD90rgA+QlvwJH4gsY7Pttm1P0+Q8m6PoXSqAF4EXgn0SGNIALbhhR8nkLPJ1eA3ohMFMIVaHiYOf1zpw4XYdkdJ2APsSHOz62boRAFUgTsDS3G70V6/Vvrgz3bgrbRPIpROFMBThD+QERT+GH5MAz+uUM30sseF6DQBnARub+J1fCNQSfsicsQuYEfaJ9EMnSaA3cBzIQdOUF4CfA2b+fUlGmudSvtEmqGTBDCFpuJDw59zUdNbW/boxwEyuOFFUjpJANHgNzQddxNqfGX48SQZ3PAiKZ0kgO0o/5+YCcp9wHew8MeXE8B/ojFXrukUARwB/p3whRjXAVekfRE5YRrF/qH9VTNFKe0TaAFn0EzkT0lY+uAmvkaA30WL343G7Af+ifBFRpmiEwTwIvD9CtXQB/IFVPlpg9/GfAz8Ix3i/SH/IdA+4K8I2OrUef+VwJ8Dq9O+kBxwAvhX4N8qVHOd+oyT1zfAFPC/wF+jMtyQsodh4E/RG8BYmCPAvwDfp0NCn4i8CWAKpTv/B/hn1Ok5kfE7zz8E/BHwB1jV59mYRpNcT6CY/8EK1dDOepklywKYQg/gOFpw8TZ6GNtQBeJkkjg0ZvhXAd/DdnqJM4XKmY+jVV1HgJ1oUdFzwLG8Vns2ooT6uGSBMyiNeQJ5+cNoVvcIKm0+DBxt4kGU0Cqv7wJ9qFtEUZlGa6ZPont9BN3rw8jZHAHez0Nz22b5f5GpAQrraWqAAAAAAElFTkSuQmCC";
var fl = { exports: {} };
(function(f, v) {
  (function(P, a) {
    a();
  })(Te, function() {
    function P(m, p) {
      return typeof p > "u" ? p = { autoBom: !1 } : typeof p != "object" && (console.warn("Deprecated: Expected third argument to be a object"), p = { autoBom: !p }), p.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(m.type) ? new Blob(["\uFEFF", m], { type: m.type }) : m;
    }
    function a(m, p, V) {
      var F = new XMLHttpRequest();
      F.open("GET", m), F.responseType = "blob", F.onload = function() {
        g(F.response, p, V);
      }, F.onerror = function() {
        console.error("could not download file");
      }, F.send();
    }
    function D(m) {
      var p = new XMLHttpRequest();
      p.open("HEAD", m, !1);
      try {
        p.send();
      } catch {
      }
      return 200 <= p.status && 299 >= p.status;
    }
    function C(m) {
      try {
        m.dispatchEvent(new MouseEvent("click"));
      } catch {
        var p = document.createEvent("MouseEvents");
        p.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), m.dispatchEvent(p);
      }
    }
    var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Te == "object" && Te.global === Te ? Te : void 0, c = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = o.saveAs || (typeof window != "object" || window !== o ? function() {
    } : "download" in HTMLAnchorElement.prototype && !c ? function(m, p, V) {
      var F = o.URL || o.webkitURL, S = document.createElement("a");
      p = p || m.name || "download", S.download = p, S.rel = "noopener", typeof m == "string" ? (S.href = m, S.origin === location.origin ? C(S) : D(S.href) ? a(m, p, V) : C(S, S.target = "_blank")) : (S.href = F.createObjectURL(m), setTimeout(function() {
        F.revokeObjectURL(S.href);
      }, 4e4), setTimeout(function() {
        C(S);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(m, p, V) {
      if (p = p || m.name || "download", typeof m != "string") navigator.msSaveOrOpenBlob(P(m, V), p);
      else if (D(m)) a(m, p, V);
      else {
        var F = document.createElement("a");
        F.href = m, F.target = "_blank", setTimeout(function() {
          C(F);
        });
      }
    } : function(m, p, V, F) {
      if (F = F || open("", "_blank"), F && (F.document.title = F.document.body.innerText = "downloading..."), typeof m == "string") return a(m, p, V);
      var S = m.type === "application/octet-stream", z = /constructor/i.test(o.HTMLElement) || o.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || S && z || c) && typeof FileReader < "u") {
        var I = new FileReader();
        I.onloadend = function() {
          var Z = I.result;
          Z = j ? Z : Z.replace(/^data:[^;]*;/, "data:attachment/file;"), F ? F.location.href = Z : location = Z, F = null;
        }, I.readAsDataURL(m);
      } else {
        var r = o.URL || o.webkitURL, k = r.createObjectURL(m);
        F ? F.location = k : location.href = k, F = null, setTimeout(function() {
          r.revokeObjectURL(k);
        }, 4e4);
      }
    });
    o.saveAs = g.saveAs = g, f.exports = g;
  });
})(fl);
var Ql = fl.exports;
const Jl = /* @__PURE__ */ Pl(Ql), Xl = { class: "app-header header__top" }, Kl = { class: "logo" }, ql = { class: "logo" }, Zl = { class: "logo" }, ea = ["href"], la = { class: "app-header header__bottom" }, aa = {
  class: "l-icon",
  "aria-hidden": "true"
}, ta = ["xlink:href"], oa = ["onClick"], na = {
  class: "l-icon",
  "aria-hidden": "true"
}, da = ["xlink:href"], ua = {
  class: "l-icon",
  "aria-hidden": "true"
}, ra = ["xlink:href"], sa = ["onClick"], ia = {
  class: "l-icon",
  "aria-hidden": "true"
}, ma = ["xlink:href"], pa = {
  class: "l-icon",
  "aria-hidden": "true"
}, fa = ["xlink:href"], va = ["onClick"], ga = {
  class: "l-icon",
  "aria-hidden": "true"
}, ca = ["xlink:href"], ba = /* @__PURE__ */ ge({
  __name: "Header",
  emits: ["view"],
  setup(f, { emit: v }) {
    var t, w;
    const P = v;
    Ll();
    const a = Ae({
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
    }), D = ae(!1), C = (n, d = {}) => {
      d && d.trigger === "confirm" ? (o(), D.value = !1) : D.value = n;
    }, o = (n) => {
      $l();
    }, c = ae(!1), g = ae(0);
    Le(() => {
      const n = setInterval(() => {
        meta2d && (clearInterval(n), m(meta2d.store.data.scale), meta2d.on("scale", m));
      }, 200);
    });
    const m = (n) => {
      g.value = Math.round(n * 100);
    }, p = () => {
      c.value ? (c.value = !1, meta2d.finishDrawLine(), meta2d.drawLine(), meta2d.store.options.disableAnchor = !0) : (c.value = !0, meta2d.drawLine(meta2d.store.options.drawingLineName), meta2d.store.options.disableAnchor = !1);
    }, V = Ae([
      { name: "曲线", icon: "#l-curve2", value: "curve" },
      { name: "线段", icon: "#l-polyline", value: "polyline" },
      { name: "直线", icon: "#l-line", value: "line" },
      { name: "脑图曲线", icon: "#l-mind", value: "mind" }
    ]), F = ae("line"), S = (n) => {
      var d;
      F.value = n, meta2d && (meta2d.store.options.drawingLineName = n, meta2d.canvas.drawingLineName && (meta2d.canvas.drawingLineName = n), (d = meta2d.store.active) == null || d.forEach((T) => {
        meta2d.updateLineType(T, n);
      }));
    }, z = ae(""), j = [
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
    ], I = ae(""), r = [
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
    ], k = (n) => {
      z.value = n, meta2d.store.data.fromArrow = n, meta2d.store.active && (meta2d.store.active.forEach((d) => {
        d.type === ul.Line && (d.fromArrow = n, meta2d.setValue(
          {
            id: d.id,
            fromArrow: d.fromArrow
          },
          {
            render: !1
          }
        ));
      }), meta2d.render());
    }, Z = (n) => {
      I.value = n, meta2d.store.data.toArrow = n, meta2d.store.active && (meta2d.store.active.forEach((d) => {
        d.type === ul.Line && (d.toArrow = n, meta2d.setValue(
          {
            id: d.id,
            toArrow: d.toArrow
          },
          {
            render: !1
          }
        ));
      }), meta2d.render());
    }, ee = ae(((w = (t = meta2d == null ? void 0 : meta2d.store) == null ? void 0 : t.options) == null ? void 0 : w.autoAnchor) || !0), X = (n) => {
      meta2d.store.options.autoAnchor = n;
    }, E = () => {
      meta2d.open({ name: "新建项目", pens: [] });
    };
    function s(n) {
      return new Promise((d, T) => {
        const W = new FileReader();
        W.onload = () => {
          d(W.result);
        }, W.onerror = T, W.readAsText(n);
      });
    }
    const h = () => {
      const n = document.createElement("input");
      n.type = "file", n.onchange = async (d) => {
        const T = d.target;
        if (T.files && T.files[0]) {
          const W = await s(T.files[0]);
          try {
            meta2d.open(JSON.parse(W)), meta2d.fitView();
          } catch (de) {
            console.log(de);
          }
        }
      }, n.click();
    }, G = () => {
      const n = meta2d.data();
      Jl.saveAs(
        new Blob([JSON.stringify(n)], {
          type: "text/plain;charset=utf-8"
        }),
        `${n.name || "le5le.meta2d"}.json`
      );
    }, Y = () => {
      let n = meta2d.store.data.name;
      n && (n += ".png"), meta2d.downloadPng(n);
    }, N = () => {
      meta2d.undo();
    }, $ = () => {
      meta2d.redo();
    }, A = () => {
      meta2d.cut();
    }, y = () => {
      meta2d.copy();
    }, M = () => {
      meta2d.paste();
    }, O = () => {
      meta2d.activeAll();
    }, Q = () => {
      meta2d.delete();
    }, { saveBlueprintShow: ue } = ml(!0), U = (n) => {
      if (n == "svg") {
        Tl((d) => {
          Ml(d.data);
        });
        return;
      }
      if (n == "save") {
        ue();
        return;
      }
      meta2d.toggleAnchorMode();
    }, _ = (n, d) => {
      var W;
      n.stopPropagation();
      let T;
      d === "text" ? T = {
        text: "text",
        width: 100,
        height: 20,
        name: "text"
      } : d === "line" && (T = {
        anchors: [
          { id: "0", x: 1, y: 0 },
          { id: "1", x: 0, y: 1 }
        ],
        width: 100,
        height: 100,
        name: "line",
        lineName: "line",
        type: 1
      }), n.dataTransfer ? (W = n.dataTransfer) == null || W.setData("Meta2d", JSON.stringify(T)) : meta2d.canvas.addCaches = Pe([T]);
    }, ne = () => {
      meta2d.scale(1), meta2d.centerView();
    }, re = () => {
      meta2d.fitView();
    }, fe = () => {
      meta2d.stopAnimate();
      const n = meta2d.data();
      localStorage.setItem("meta2d", JSON.stringify(n)), P("view", n), globalThis.$_meta2d_singleton && (location.hash ? window.open(`#/preview?r=${Date.now()}&id=${n._id || ""}`, "_blank") : window.open(`/preview?r=${Date.now()}&id=${n._id || ""}`, "_blank"));
    }, H = (n) => {
      if (n == "none") {
        meta2d.inactive();
        return;
      }
      const T = meta2d.data().pens.filter((de) => n ? de.type === n : de.type != 1), W = [];
      T.forEach((de) => {
        meta2d.findOne(de.id) && W.push(meta2d.findOne(de.id));
      }), meta2d.active(W);
    };
    return (n, d) => {
      const T = b("t-dropdown-item"), W = b("t-dropdown-menu"), de = b("t-dropdown"), se = b("t-tooltip"), ve = b("t-popconfirm"), be = b("t-icon"), De = b("t-switch");
      return i(), R(K, null, [
        x("div", Xl, [
          d[28] || (d[28] = x("a", {
            class: "logo",
            href: "",
            target: "_blank"
          }, [
            x("img", {
              src: Wl,
              alt: "logo"
            }),
            x("span", null, "图形编辑器")
          ], -1)),
          e(de, {
            minColumnWidth: 200,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              d[13] || (d[13] = x("a", null, " 文件 ", -1)),
              e(W, null, {
                default: l(() => [
                  e(T, { onClick: E }, {
                    default: l(() => d[11] || (d[11] = [
                      x("a", null, "新建文件", -1)
                    ])),
                    _: 1
                  }),
                  e(T, {
                    onClick: h,
                    divider: "true"
                  }, {
                    default: l(() => d[12] || (d[12] = [
                      x("a", null, "打开文件", -1)
                    ])),
                    _: 1
                  }),
                  e(T, { divider: "true" }, {
                    default: l(() => [
                      x("a", { onClick: G }, "下载JSON文件")
                    ]),
                    _: 1
                  }),
                  e(T, null, {
                    default: l(() => [
                      x("a", { onClick: Y }, "下载为PNG")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(de, {
            minColumnWidth: 180,
            maxHeight: 500,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              d[21] || (d[21] = x("a", null, " 编辑 ", -1)),
              e(W, null, {
                default: l(() => [
                  e(T, null, {
                    default: l(() => [
                      x("a", { onClick: N }, d[14] || (d[14] = [
                        x("div", { class: "flex" }, [
                          J(" 撤销 "),
                          x("span", { class: "flex-grow" }),
                          J(" Ctrl + Z ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(T, { divider: "true" }, {
                    default: l(() => [
                      x("a", { onClick: $ }, d[15] || (d[15] = [
                        x("div", { class: "flex" }, [
                          J(" 恢复 "),
                          x("span", { class: "flex-grow" }),
                          J(" Ctrl + Y ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(T, null, {
                    default: l(() => [
                      x("a", { onClick: A }, d[16] || (d[16] = [
                        x("div", { class: "flex" }, [
                          J(" 剪切 "),
                          x("span", { class: "flex-grow" }),
                          J(" Ctrl + X ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(T, null, {
                    default: l(() => [
                      x("a", { onClick: y }, d[17] || (d[17] = [
                        x("div", { class: "flex" }, [
                          J(" 复制 "),
                          x("span", { class: "flex-grow" }),
                          J(" Ctrl + C ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(T, { divider: "true" }, {
                    default: l(() => [
                      x("a", { onClick: M }, d[18] || (d[18] = [
                        x("div", { class: "flex" }, [
                          J(" 粘贴 "),
                          x("span", { class: "flex-grow" }),
                          J(" Ctrl + V ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(T, null, {
                    default: l(() => [
                      x("a", { onClick: O }, d[19] || (d[19] = [
                        x("div", { class: "flex" }, [
                          J(" 全选 "),
                          x("span", { class: "flex-grow" }),
                          J(" Ctrl + A ")
                        ], -1)
                      ]))
                    ]),
                    _: 1
                  }),
                  e(T, null, {
                    default: l(() => [
                      x("a", { onClick: Q }, d[20] || (d[20] = [
                        x("div", { class: "flex" }, [
                          J("删除 "),
                          x("span", { class: "flex-grow" }),
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
          x("a", Kl, [
            x("span", {
              onClick: d[0] || (d[0] = (le) => U())
            }, "添加/删除锚点")
          ]),
          e(de, {
            minColumnWidth: 200,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              d[25] || (d[25] = x("a", null, " 批量选择图元 ", -1)),
              e(W, null, {
                default: l(() => [
                  e(T, {
                    onClick: d[1] || (d[1] = (le) => H())
                  }, {
                    default: l(() => d[22] || (d[22] = [
                      x("a", null, "节点", -1)
                    ])),
                    _: 1
                  }),
                  e(T, {
                    onClick: d[2] || (d[2] = (le) => H(1)),
                    divider: "true"
                  }, {
                    default: l(() => d[23] || (d[23] = [
                      x("a", null, "连线", -1)
                    ])),
                    _: 1
                  }),
                  e(T, {
                    onClick: d[3] || (d[3] = (le) => H("none"))
                  }, {
                    default: l(() => d[24] || (d[24] = [
                      x("a", null, "取消", -1)
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          x("a", ql, [
            e(se, { content: "选择 .svg 文件导入，单击画布摆放到鼠标指针位置" }, {
              default: l(() => [
                x("span", {
                  onClick: d[4] || (d[4] = (le) => U("svg"))
                }, "导入 SVG")
              ]),
              _: 1
            })
          ]),
          e(ve, {
            visible: D.value,
            theme: "default",
            content: "是否导入 ElectricEditor 生成的 JSON 文件?",
            onVisibleChange: C
          }, {
            default: l(() => d[26] || (d[26] = [
              x("a", { class: "logo" }, [
                x("span", null, "导入")
              ], -1)
            ])),
            _: 1
          }, 8, ["visible"]),
          x("a", Zl, [
            x("span", {
              onClick: d[5] || (d[5] = (le) => U("save"))
            }, "保存图纸")
          ]),
          e(de, {
            minColumnWidth: 180,
            maxHeight: 500,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => [
              d[27] || (d[27] = x("a", null, " 帮助 ", -1)),
              e(W, null, {
                default: l(() => [
                  (i(!0), R(K, null, oe(a.helps, (le) => (i(), L(T, {
                    divider: le.divider
                  }, {
                    default: l(() => [
                      le.url ? (i(), R("a", {
                        key: 0,
                        href: le.url,
                        target: "_blank"
                      }, ce(le.name), 9, ea)) : q("", !0)
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
        x("div", la, [
          e(se, { content: "撤销" }, {
            default: l(() => [
              (i(), R("svg", {
                class: "l-icon",
                "aria-hidden": "true",
                onClick: N
              }, d[29] || (d[29] = [
                x("use", { "xlink:href": "#l-undo" }, null, -1)
              ])))
            ]),
            _: 1
          }),
          e(se, { content: "重做" }, {
            default: l(() => [
              (i(), R("svg", {
                class: "l-icon",
                "aria-hidden": "true",
                onClick: $
              }, d[30] || (d[30] = [
                x("use", { "xlink:href": "#l-redo" }, null, -1)
              ])))
            ]),
            _: 1
          }),
          e(se, { content: "直线" }, {
            default: l(() => [
              x("span", {
                draggable: !0,
                onDragstart: d[6] || (d[6] = (le) => _(le, "line")),
                onClick: d[7] || (d[7] = (le) => _(le, "line"))
              }, [
                d[31] || (d[31] = x("span", { style: { "margin-right": "-8px" } }, "直线", -1)),
                e(be, { name: "slash" })
              ], 32)
            ]),
            _: 1
          }),
          e(se, { content: "文字" }, {
            default: l(() => [
              x("span", {
                draggable: !0,
                onDragstart: d[8] || (d[8] = (le) => _(le, "text")),
                onClick: d[9] || (d[9] = (le) => _(le, "text"))
              }, d[32] || (d[32] = [
                x("svg", {
                  class: "l-icon",
                  "aria-hidden": "true"
                }, [
                  x("use", { "xlink:href": "#l-text" })
                ], -1)
              ]), 32)
            ]),
            _: 1
          }),
          e(se, {
            content: "钢笔",
            placement: "bottom"
          }, {
            default: l(() => [
              x("a", {
                style: Al({
                  color: c.value ? " #1677ff" : ""
                }),
                onClick: p
              }, [
                d[33] || (d[33] = J(" 钢笔 ")),
                e(be, { name: "pen" })
              ], 4)
            ]),
            _: 1
          }),
          e(de, {
            minColumnWidth: 160,
            maxHeight: 560,
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var le;
              return [
                x("a", null, [
                  d[34] || (d[34] = x("span", { class: "button__text" }, " 连线 ", -1)),
                  (i(), R("svg", aa, [
                    x("use", {
                      "xlink:href": (le = V.find((pe) => pe.value === F.value)) == null ? void 0 : le.icon
                    }, null, 8, ta)
                  ]))
                ]),
                e(W, null, {
                  default: l(() => [
                    (i(!0), R(K, null, oe(V, (pe) => (i(), L(T, null, {
                      default: l(() => [
                        x("div", {
                          class: "flex middle",
                          onClick: (we) => S(pe.value)
                        }, [
                          J(ce(pe.name) + " ", 1),
                          d[35] || (d[35] = x("span", { class: "flex-grow" }, null, -1)),
                          (i(), R("svg", na, [
                            x("use", {
                              "xlink:href": pe.icon
                            }, null, 8, da)
                          ]))
                        ], 8, oa)
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
          e(de, {
            minColumnWidth: 160,
            maxHeight: 560,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var le;
              return [
                x("a", null, [
                  d[36] || (d[36] = x("span", { class: "button__text" }, " 起点 ", -1)),
                  (i(), R("svg", ua, [
                    x("use", {
                      "xlink:href": (le = j.find((pe) => pe.value === z.value)) == null ? void 0 : le.icon
                    }, null, 8, ra)
                  ]))
                ]),
                e(W, null, {
                  default: l(() => [
                    (i(), R(K, null, oe(j, (pe) => e(T, null, {
                      default: l(() => [
                        x("div", {
                          class: "flex middle",
                          style: { height: "30px" },
                          onClick: (we) => k(pe.value)
                        }, [
                          (i(), R("svg", ia, [
                            x("use", {
                              "xlink:href": pe.icon
                            }, null, 8, ma)
                          ]))
                        ], 8, sa)
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
          e(de, {
            minColumnWidth: 160,
            maxHeight: 560,
            delay2: [10, 150],
            overlayClassName: "header-dropdown"
          }, {
            default: l(() => {
              var le;
              return [
                x("a", null, [
                  d[37] || (d[37] = x("span", { class: "button__text" }, " 终点 ", -1)),
                  (i(), R("svg", pa, [
                    x("use", {
                      "xlink:href": (le = r.find((pe) => pe.value === I.value)) == null ? void 0 : le.icon
                    }, null, 8, fa)
                  ]))
                ]),
                e(W, null, {
                  default: l(() => [
                    (i(), R(K, null, oe(r, (pe) => e(T, null, {
                      default: l(() => [
                        x("div", {
                          class: "flex middle",
                          style: { height: "30px" },
                          onClick: (we) => Z(pe.value)
                        }, [
                          (i(), R("svg", ga, [
                            x("use", {
                              "xlink:href": pe.icon
                            }, null, 8, ca)
                          ]))
                        ], 8, va)
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
          e(se, {
            content: "自动锚点",
            placement: "bottom"
          }, {
            default: l(() => [
              x("a", null, [
                e(De, {
                  modelValue: ee.value,
                  "onUpdate:modelValue": d[10] || (d[10] = (le) => ee.value = le),
                  onChange: X,
                  size: "small"
                }, null, 8, ["modelValue"])
              ])
            ]),
            _: 1
          }),
          d[40] || (d[40] = x("div", { style: { width: "64px" } }, null, -1)),
          Oe(x("div", { style: { "line-height": "40px" } }, ce(g.value) + "%", 513), [
            [Ne, g.value > 0]
          ]),
          e(se, {
            content: "100%视图",
            placement: "bottom"
          }, {
            default: l(() => [
              x("a", { onClick: ne }, [
                e(be, { name: "refresh" })
              ])
            ]),
            _: 1
          }),
          e(se, {
            content: "窗口大小",
            placement: "bottom"
          }, {
            default: l(() => [
              x("a", {
                onClick: re,
                style: { "margin-left": "-16px" }
              }, [
                d[38] || (d[38] = J(" 窗口大小 ")),
                e(be, { name: "fullscreen-exit" })
              ])
            ]),
            _: 1
          }),
          d[41] || (d[41] = x("div", { style: { width: "36px" } }, null, -1)),
          e(se, { content: "运行" }, {
            default: l(() => [
              x("a", { onClick: fe }, [
                d[39] || (d[39] = J(" 运行查看 ")),
                e(be, { name: "play-circle-stroke" })
              ])
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
}), Va = /* @__PURE__ */ he(ba, [["__scopeId", "data-v-ec8bff11"]]);
let ke = 1;
const ha = 2, rl = 1e-6;
let ie = [], Ie = !1, vl = !1;
const qe = ["line", "polyline"];
function wa(f) {
  window.meta2d.on("mouseup", al), window.meta2d.on("mousedown", ll), window.meta2d.on("add", bl), window.meta2d.on("active", cl), vl = f, window.meta2d.on("opened", gl);
}
function Ca(f) {
  ll(), al(f);
}
function gl() {
  vl && Ca(void 0);
}
function cl() {
  Ie = !0;
}
function bl() {
  Ie = !0;
}
function ll() {
  Ie = !0;
}
function ya(f) {
  let v = [], P = [];
  const D = (f ? window.meta2d.store.active : window.meta2d.store.data.pens).filter((C) => C);
  for (let C = 0; C < D.length; C++) {
    const o = D[C];
    if (o.type === 1 && qe.indexOf(o.lineName) !== -1)
      P.push(o);
    else if (o.connectedLines && o.connectedLines.length > 0)
      for (let g = 0; g < o.connectedLines.length; g++) {
        const m = o.connectedLines[g];
        P.push(window.meta2d.find(m.lineId)[0]);
      }
    const c = window.meta2d.store.data.pens.filter((g) => g.intersectLines && g.intersectLines.findIndex((m) => m.id === o.id) !== -1);
    P.push(...c);
  }
  P = P.filter((C) => C);
  for (let C = 0; C < P.length; C++) {
    const o = P[C];
    if (o.intersectLines = [], P[C] && P[C].calculative && (v = P[C].calculative.worldAnchors, v.length > 2)) {
      for (let c = 0; c < v.length; c++) {
        const g = v[c];
        (g.next || g.prev) && (v.splice(c, 1), c--);
      }
      window.meta2d.canvas.initLineRect(o);
    }
  }
}
function al(f) {
  Ie && (Ie = !1, setTimeout(() => {
    const P = (f ? window.meta2d.store.active : window.meta2d.store.data.pens).filter((o) => o).reverse();
    let a = [], D = [];
    for (let o = 0; o < P.length; o++) {
      const c = P[o];
      if (c.type === 1 && qe.indexOf(c.lineName) !== -1) {
        if (c.connectedLines)
          for (let g = 0; g < c.connectedLines.length; g++) {
            const m = c.connectedLines[g];
            let p = c.anchors.find((V) => V.id === m.anchor);
            if (p && p.penId) {
              let V = window.meta2d.findOne(m.lineId);
              if (!V)
                continue;
              if (V.connectedLines && V.connectedLines.length > 0) {
                let F = V.connectedLines.findIndex((S) => S.anchor === m.lineAnchor);
                V.connectedLines.splice(F, 1);
              }
              c.connectedLines.splice(g, 1), g--;
            }
          }
        a.push(c);
      } else if (c.type !== 1 && c.connectedLines && c.connectedLines.length > 0)
        for (let g = 0; g < c.connectedLines.length; g++) {
          const m = c.connectedLines[g];
          a.push(window.meta2d.find(m.lineId)[0]);
        }
      D = window.meta2d.store.data.pens.filter((g) => g.intersectLines && g.intersectLines.findIndex((m) => m.id === c.id) !== -1), a.unshift(...D);
    }
    const C = window.meta2d.store.data.pens.filter((o) => o.type === 1 && qe.indexOf(o.lineName) !== -1);
    ya(f), a = a.filter((o) => o);
    for (let o = 0; o < a.length; o++) {
      const c = a[o].calculative.worldAnchors.filter((g) => !g.next && !g.prev);
      ie = [];
      for (let g = 0; g < c.length; g++)
        if (g !== c.length - 1) {
          const m = c[g], p = c[g + 1];
          for (let V = 0; V < C.length; V++) {
            ke = 3, ke += C[V].lineWidth / a[o].lineWidth * a[o].lineWidth, ke *= window.meta2d.store.data.scale;
            const F = C[V].calculative.worldAnchors.filter((S) => !S.next && !S.prev);
            for (let S = 0; S < F.length; S++)
              if (S !== F.length - 1) {
                const z = F[S], j = F[S + 1], { onLine1: I, onLine2: r, x: k, y: Z } = Sa(m.x, m.y, p.x, p.y, z.x, z.y, j.x, j.y);
                if (I && r) {
                  if (C[V].intersectLines && C[V].intersectLines.findIndex((h) => h.id === a[o].id && h.fromAnchorIndex === S && h.toAnchorIndex === g) !== -1)
                    continue;
                  a[o].intersectLines ? a[o].intersectLines.findIndex((h) => h.id === C[V].id && h.fromAnchorIndex === g && h.toAnchorIndex === S) === -1 && a[o].intersectLines.push({ fromAnchorIndex: g, toAnchorIndex: S, id: C[V].id }) : (a[o].intersectLines = [], a[o].intersectLines.push({ fromAnchorIndex: g, toAnchorIndex: S, id: C[V].id }));
                  const { a: ee, b: X } = Ua(m, p), E = Aa({ radius: ke, x: k, y: Z }, { p1: m, p2: p });
                  if (E.length === 2) {
                    let s = 1;
                    ee !== 0 ? s = X / ee : s = Z;
                    const h = Math.sqrt(ke * ke / (s * s + 1)), G = s * h;
                    let Y = { x: 0, y: 0 }, N = { x: 0, y: 0 };
                    -s < 0 ? (Y.x = E[0].x - h, Y.y = E[0].y - G, N.x = E[1].x - h, N.y = E[1].y - G) : (Y.x = E[0].x + h, Y.y = E[0].y + G, N.x = E[1].x + h, N.y = E[1].y + G);
                    let $ = { x: 0, y: 0, id: "" };
                    for (let M = 0; M < c.length; M++)
                      if (M !== c.length - 1) {
                        const O = c[M], Q = c[M + 1];
                        if (ka(O, Q, { x: k, y: Z }, ha)) {
                          $.x = O.x, $.y = O.y, $.id = O.id;
                          break;
                        }
                      }
                    const A = {
                      id: Ce(),
                      penId: a[o].id,
                      x: E[0].x,
                      y: E[0].y,
                      intersect: !0,
                      hidden: !0,
                      locked: 2,
                      lastAnchorIndex: $.id,
                      brotherId: "",
                      next: {
                        penId: a[o].id,
                        x: Y.x,
                        y: Y.y
                      },
                      prev: {
                        penId: a[o].id,
                        x: E[0].x,
                        y: E[0].y
                      },
                      prevNextType: 1
                      /* Bilateral */
                    }, y = {
                      id: Ce(),
                      penId: a[o].id,
                      x: E[1].x,
                      y: E[1].y,
                      intersect: !0,
                      hidden: !0,
                      locked: 2,
                      brotherId: "",
                      lastAnchorIndex: $.id,
                      next: {
                        penId: a[o].id,
                        x: E[1].x,
                        y: E[1].y
                      },
                      prev: {
                        penId: a[o].id,
                        x: N.x,
                        y: N.y
                      },
                      prevNextType: 1
                      /* Bilateral */
                    };
                    A.brotherId = y.id, y.brotherId = A.id, ie.push(A, y);
                  }
                }
              }
          }
        }
      if (ie.length > 0) {
        ie.sort((z, j) => {
          if (z.lastAnchorIndex === j.lastAnchorIndex) {
            const I = c.find((r) => r.id === z.lastAnchorIndex);
            return I ? Me(z.x, z.y, I.x, I.y) - Me(j.x, j.y, I.x, I.y) : -1;
          } else
            return -1;
        });
        let g = [], m = [], p = -1;
        for (let z = 0, j = ie.length; z < j; z++) {
          const I = ie[z];
          if (g.indexOf(I.id) !== -1)
            continue;
          const r = ie.find((k) => k.id === I.brotherId);
          g.push(I.id, r.id);
          for (let k = z + 1; k < j; k++) {
            const Z = ie[k], ee = ie.find((X) => X.id === Z.brotherId);
            if (g.push(Z.id, ee.id), I.brotherId !== Z.id)
              if (Me(I.x, I.y, Z.x, Z.y) < ke * 2 && Me(I.x, I.y, Z.x, Z.y) > rl) {
                p = 1, m.indexOf(I.id) === -1 && m.push(I.id, r.id);
                const X = ie.find((E) => E.id === Z.brotherId);
                m.indexOf(Z.id) === -1 && m.push(Z.id, X.id);
              } else {
                if (p === 1) {
                  p = -1;
                  const X = g.findIndex((s) => s === Z.id);
                  g.splice(X, 1);
                  const E = g.findIndex((s) => s === Z.brotherId);
                  g.splice(E, 1);
                  break;
                }
                break;
              }
          }
        }
        for (let z = 0; z < ie.length; z++) {
          const j = ie[z];
          m.indexOf(j.id) !== -1 && (ie.splice(z, 1), z--);
        }
        for (let z = 0, j = ie.length; z < j; z++) {
          const I = ie[z];
          for (let r = z + 1; r < j; r++) {
            const k = ie[r];
            if (Me(I.x, I.y, k.x, k.y) <= rl) {
              ie.splice(r, 1);
              let Z = ie.findIndex((ee) => ee.id === k.brotherId);
              Z !== -1 && ie.splice(Z, 1), r--, j = ie.length;
            }
          }
        }
        let V = -1, F = -1, S = 0;
        for (let z = 0; z < ie.length; z++) {
          const j = ie[z];
          V === -1 || V !== -1 && V !== j.lastAnchorIndex ? (F = a[o].calculative.worldAnchors.findIndex((r) => r.id === j.lastAnchorIndex), S = 0) : V === j.lastAnchorIndex && S++, a[o].calculative.worldAnchors.findIndex((r) => r.x === j.x && r.y === j.y && r.penId === j.penId) === -1 && (a[o].calculative.worldAnchors.splice(F + S + 1, 0, j), V = j.lastAnchorIndex);
        }
        window.meta2d.canvas.updateLines(a[o]), window.meta2d.canvas.initLineRect(a[o]);
      }
    }
    window.meta2d.render();
  }, 0));
}
function xa() {
  window.meta2d.off("mouseup", al), window.meta2d.off("mousedown", ll), window.meta2d.off("add", bl), window.meta2d.off("active", cl), window.meta2d.off("opened", gl), ie = [];
}
function ka(f, v, P, a) {
  const D = (v.x - f.x) * (v.x - f.x) + (v.y - f.y) * (v.y - f.y);
  if (D == 0) return !1;
  const C = ((P.x - f.x) * (v.x - f.x) + (P.y - f.y) * (v.y - f.y)) / D;
  if (C < 0)
    return Math.sqrt((f.x - P.x) * (f.x - P.x) + (f.y - P.y) * (f.y - P.y)) <= a;
  if (0 <= C && C <= 1) {
    const o = ((f.y - P.y) * (v.x - f.x) - (f.x - P.x) * (v.y - f.y)) / D;
    return Math.abs(o) * Math.sqrt(D) <= a;
  } else
    return Math.sqrt((v.x - P.x) * (v.x - P.x) + (v.y - P.y) * (v.y - P.y)) <= a;
}
function Aa(f, v) {
  let P, a, D, C, o, c, g, m, p, V;
  return p = {}, V = {}, p.x = v.p2.x - v.p1.x, p.y = v.p2.y - v.p1.y, V.x = v.p1.x - f.x, V.y = v.p1.y - f.y, P = p.x * V.x + p.y * V.y, a = 2 * (p.x * p.x + p.y * p.y), P *= -2, D = Math.sqrt(P * P - 2 * a * (V.x * V.x + V.y * V.y - f.radius * f.radius)), isNaN(D) ? [] : (C = (P - D) / a, o = (P + D) / a, g = {}, m = {}, c = [], C <= 1 && C >= 0 && (g.x = v.p1.x + p.x * C, g.y = v.p1.y + p.y * C, c[0] = g), o <= 1 && o >= 0 && (m.x = v.p1.x + p.x * o, m.y = v.p1.y + p.y * o, c[c.length] = m), c);
}
function Ua(f, v) {
  const P = v.y - f.y, a = f.x - v.x, D = P * f.x + a * f.y;
  return { a: P, b: a, c: D };
}
function Me(f, v, P, a) {
  let D = P - f, C = a - v;
  return Math.sqrt(C * C + D * D);
}
function Sa(f, v, P, a, D, C, o, c) {
  let g, m, p, V, F, S = {
    x: null,
    y: null,
    onLine1: !1,
    onLine2: !1
  };
  return g = (c - C) * (P - f) - (o - D) * (a - v), g == 0 || (m = v - C, p = f - D, V = (o - D) * m - (c - C) * p, F = (P - f) * m - (a - v) * p, m = V / g, p = F / g, S.x = f + m * (P - f), S.y = v + m * (a - v), m > 0 && m < 1 && (S.onLine1 = !0), p > 0 && p < 1 && (S.onLine2 = !0)), S;
}
const Ye = /* @__PURE__ */ ge({
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
  setup(f, { emit: v }) {
    const P = f, a = ae(P.defaultValue);
    Be(() => P.defaultValue, (o) => {
      a.value = o;
    });
    const D = v, C = (o) => {
      D("change", o);
    };
    return (o, c) => {
      const g = b("t-tab-panel"), m = b("t-tabs");
      return i(), L(m, {
        value: a.value,
        "onUpdate:value": c[0] || (c[0] = (p) => a.value = p),
        onChange: C
      }, {
        default: l(() => [
          (i(!0), R(K, null, oe(f.tabs, (p, V) => (i(), L(g, {
            key: V,
            value: p.value,
            label: p.label
          }, {
            default: l(() => [
              Ge(o.$slots, p.slot)
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 3
      }, 8, ["value"]);
    };
  }
}), _a = /* @__PURE__ */ ge({
  __name: "CodeEditor",
  props: {},
  emits: ["confirm"],
  setup(f, { expose: v, emit: P }) {
    const a = P, D = ae(!1), C = (S) => {
      D.value = !1, a("confirm", p.value);
    }, o = (S) => {
      console.log("关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发", S);
    }, c = (S) => {
      console.log("点击了取消按钮", S);
    };
    v({
      open: (S) => {
        D.value = !0, p.value = S;
      }
    });
    const m = {
      automaticLayout: !0,
      formatOnType: !0,
      formatOnPaste: !0
    }, p = ae("// some code..."), V = Ul(), F = (S) => V.value = S;
    return (S, z) => {
      const j = b("t-space"), I = b("t-dialog");
      return i(), L(I, {
        visible: D.value,
        "onUpdate:visible": z[1] || (z[1] = (r) => D.value = r),
        header: "JavaScript",
        width: "50%",
        "on-cancel": c,
        "on-close": o,
        "on-confirm": C
      }, {
        default: l(() => [
          e(j, {
            direction: "vertical",
            style: { width: "100%" }
          }, {
            default: l(() => [
              z[2] || (z[2] = x("code", null, "function(data: any) { // data 为 MessageBus 消息里的 data 对象", -1)),
              e(B(Gl), {
                value: p.value,
                "onUpdate:value": z[0] || (z[0] = (r) => p.value = r),
                theme: "vs-dark",
                options: m,
                style: { height: "50vh" },
                onMount: F
              }, null, 8, ["value"]),
              z[3] || (z[3] = x("code", null, "}", -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
}), Pa = /* @__PURE__ */ he(_a, [["__scopeId", "data-v-ff6d5876"]]), La = /* @__PURE__ */ ge({
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
  setup(f, { emit: v }) {
    const a = ae(f.wsMsgHandlers), D = () => {
      a.value.push({
        id: Ke(),
        action: te.SetProps,
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
    }, C = ($) => {
      a.value.splice(a.value.indexOf($), 1), c();
    }, o = v, c = () => {
      o("change", a.value);
    }, g = [
      {
        label: "更改属性",
        value: te.SetProps
      },
      {
        label: "执行动画",
        value: te.StartAnimate
      },
      {
        label: "暂停动画",
        value: te.PauseAnimate
      },
      {
        label: "停止动画",
        value: te.StopAnimate
      }
    ], m = [
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
    ], p = ae([]), V = () => {
      if (p.value.length >= 6) {
        ye.warning("最多只能添加6个属性");
        return;
      }
      p.value.push({
        prop: "",
        value: ""
      });
    }, F = ($, A) => {
      const y = p.value.indexOf($);
      p.value.splice(y, 1), S(A);
    }, S = ($) => {
      const A = {};
      p.value.forEach((y) => {
        A[y.prop] = y.value;
      }), $.value = A, o("change", a.value);
    }, z = ($) => {
      const A = a.value[Number($)];
      A.value && typeof A.value == "object" && (p.value = Object.keys(A.value).map((y) => ({
        prop: y,
        value: A.value[y]
      })));
    }, j = [
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
    ], I = ae(!1), r = ($) => {
      Z([$]), I.value = !0;
    }, k = nl({
      tags: [],
      ids: [],
      id: ""
    }), Z = ($) => {
      if (!$.length) return;
      const A = JSON.parse(JSON.stringify(a.value[$[0]]));
      A && (k.tags = A.params.tags, k.ids = X(A.params.ids), k.id = A.id, z($), G());
    }, ee = Fl.map(($) => ({
      label: $.释义,
      value: $.元件类型
    }));
    function X($) {
      return $.filter((A) => !!meta2d.findOne(A));
    }
    const E = () => {
      I.value = !1;
      const $ = a.value.find(
        (A) => A.id === k.id
      );
      $ && ($.params.tags = k.tags, $.params.ids = X(k.ids), c());
    }, s = nl({
      value: []
    }), h = [
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
    ], G = () => {
      const $ = meta2d.data();
      if (k) {
        if (k._tag) {
          s.value = meta2d.find(k._tag);
          return;
        } else if (k.tags.length) {
          const A = [];
          k.tags.forEach((M) => {
            const O = meta2d.find(M);
            A.push(...O);
          });
          const y = [...new Set(A)];
          setTimeout(() => {
            s.value = y;
          }, 1e3);
          return;
        }
      }
      setTimeout(() => {
        s.value = $.pens;
      }, 1e3);
    }, Y = ($, A) => {
      k.ids = $;
    }, N = () => {
      if (k.ids.length) {
        const $ = k.ids.map((A) => meta2d.findOne(A)).filter((A) => !!A);
        meta2d.active($);
      } else
        meta2d.active(s.value);
    };
    return ($, A) => {
      const y = b("t-button"), M = b("t-select"), O = b("t-form-item"), Q = b("t-col"), ue = b("t-icon"), U = b("t-row"), _ = b("t-input"), ne = b("t-form"), re = b("t-collapse-panel"), fe = b("t-collapse"), H = b("t-tooltip"), t = b("t-table"), w = b("t-drawer");
      return i(), R(K, null, [
        e(y, {
          block: "",
          theme: "primary",
          onClick: D
        }, {
          default: l(() => A[3] || (A[3] = [
            J("添加处理器")
          ])),
          _: 1
        }),
        e(fe, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: Z
        }, {
          default: l(() => [
            (i(!0), R(K, null, oe(a.value, (n, d) => (i(), L(re, {
              key: d,
              header: "处理器"
            }, {
              headerRightContent: l(() => [
                e(y, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (T) => C(n)
                }, {
                  default: l(() => [
                    e(ue, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(ne, { labelAlign: "left" }, {
                  default: l(() => [
                    e(O, { label: "行为" }, {
                      default: l(() => [
                        e(M, {
                          modelValue: n.action,
                          "onUpdate:modelValue": (T) => n.action = T,
                          options: g,
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(O, { label: "目标" }, {
                      default: l(() => [
                        e(y, {
                          variant: "text",
                          theme: "primary",
                          onClick: (T) => r(d)
                        }, {
                          default: l(() => A[4] || (A[4] = [
                            J("选择目标图元")
                          ])),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    n.action === B(te).SetProps ? (i(), R(K, { key: 0 }, [
                      e(U, { justify: "start" }, {
                        default: l(() => [
                          e(Q, { span: 5 }, {
                            default: l(() => A[5] || (A[5] = [
                              x("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(Q, { span: 5 }, {
                            default: l(() => A[6] || (A[6] = [
                              x("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(Q, { span: 2 }, {
                            default: l(() => [
                              e(y, {
                                variant: "text",
                                onClick: V
                              }, {
                                default: l(() => [
                                  e(ue, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (i(!0), R(K, null, oe(p.value, (T, W) => (i(), L(U, {
                        key: W,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(Q, { span: 5 }, {
                            default: l(() => [
                              e(M, {
                                modelValue: T.prop,
                                "onUpdate:modelValue": (de) => T.prop = de,
                                options: m,
                                onChange: (de) => S(n)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(Q, { span: 5 }, {
                            default: l(() => [
                              e(_, {
                                modelValue: T.value,
                                "onUpdate:modelValue": (de) => T.value = de,
                                onChange: (de) => S(n)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(Q, { span: 2 }, {
                            default: l(() => [
                              e(y, {
                                variant: "text",
                                onClick: (de) => F(T, n)
                              }, {
                                default: l(() => [
                                  e(ue, { name: "delete" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ], 64)) : q("", !0),
                    e(O, { label: "字段名" }, {
                      default: l(() => [
                        e(M, {
                          modelValue: n.where.key,
                          "onUpdate:modelValue": (T) => n.where.key = T,
                          options: f.wsMsgFields,
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 2
                    }, 1024),
                    e(O, { label: "条件" }, {
                      default: l(() => [
                        e(M, {
                          modelValue: n.where.comparison,
                          "onUpdate:modelValue": (T) => n.where.comparison = T,
                          options: j,
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(O, { label: "值" }, {
                      default: l(() => [
                        e(_, {
                          modelValue: n.where.value,
                          "onUpdate:modelValue": (T) => n.where.value = T,
                          onChange: c
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
        e(w, {
          visible: I.value,
          "onUpdate:visible": A[2] || (A[2] = (n) => I.value = n),
          header: "选择图元",
          size: "40%",
          "on-confirm": E,
          "close-btn": !0
        }, {
          default: l(() => [
            B(k) ? (i(), L(U, {
              key: 0,
              gutter: 10,
              style: { height: "100%" }
            }, {
              default: l(() => [
                e(Q, {
                  span: 4,
                  style: { height: "100%" }
                }, {
                  default: l(() => [
                    e(ne, { "label-align": "top" }, {
                      default: l(() => [
                        e(O, {
                          label: "电路元件",
                          name: "name"
                        }, {
                          default: l(() => [
                            e(M, {
                              modelValue: B(k).tags,
                              "onUpdate:modelValue": A[0] || (A[0] = (n) => B(k).tags = n),
                              options: B(ee),
                              placeholder: "按标签选择",
                              multiple: "",
                              minCollapsedNum: 10,
                              clearable: ""
                            }, null, 8, ["modelValue", "options"])
                          ]),
                          _: 1
                        }),
                        e(O, {
                          label: "图元标签",
                          name: "tag"
                        }, {
                          default: l(() => [
                            e(_, {
                              modelValue: B(k)._tag,
                              "onUpdate:modelValue": A[1] || (A[1] = (n) => B(k)._tag = n),
                              placeholder: "输入自定义的标签进行查询，不做保存",
                              clearable: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        e(O, null, {
                          default: l(() => [
                            e(y, {
                              block: "",
                              onClick: G
                            }, {
                              default: l(() => A[7] || (A[7] = [
                                J("查询")
                              ])),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        e(O, null, {
                          default: l(() => [
                            e(H, { content: "符合条件的图元数量大时，会出现卡顿" }, {
                              default: l(() => [
                                e(y, {
                                  block: "",
                                  theme: "warning",
                                  onClick: N
                                }, {
                                  default: l(() => A[8] || (A[8] = [
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
                e(Q, {
                  span: 7,
                  style: { height: "100%" }
                }, {
                  default: l(() => [
                    B(k) ? (i(), L(t, {
                      key: 0,
                      class: "meta-table",
                      "row-key": "id",
                      columns: h,
                      data: B(s).value,
                      "selected-row-keys": B(k).ids,
                      scroll: { type: "virtual", rowHeight: 48, bufferSize: 30 },
                      style: { height: "100%" },
                      onSelectChange: Y
                    }, null, 8, ["data", "selected-row-keys"])) : q("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : q("", !0)
          ]),
          _: 1
        }, 8, ["visible"])
      ], 64);
    };
  }
}), $a = /* @__PURE__ */ ge({
  __name: "ScriptHandlers",
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    defaultScript: {
      type: Object,
      default: () => ({})
    },
    scripts: {
      type: Array
    }
  },
  emits: ["change"],
  setup(f, { emit: v }) {
    var G, Y;
    const P = f, a = ae(((G = P.defaultScript) == null ? void 0 : G.handlers) || []), D = () => {
      a.value.push({
        id: Ke(),
        action: te.SetProps,
        value: {},
        target: [],
        params: {},
        where: {
          type: Re.CustomMessage,
          value: null,
          key: null
        }
      });
    }, C = (N) => {
      a.value.splice(a.value.indexOf(N), 1), c();
    }, o = v, c = () => {
      var N, $;
      o("change", {
        sid: ((N = P.defaultScript) == null ? void 0 : N.sid) || Ke(),
        duration: (($ = P.defaultScript) == null ? void 0 : $.duration) || 3e3,
        rowPropList: X.value,
        handlers: a.value
      });
    }, g = [
      {
        label: "更改属性",
        value: te.SetProps
      },
      {
        label: "执行动画",
        value: te.StartAnimate
      },
      {
        label: "暂停动画",
        value: te.PauseAnimate
      },
      {
        label: "停止动画",
        value: te.StopAnimate
      },
      {
        label: "弹窗",
        value: te.Dialog
      },
      // ! 官方没有定义的扩展类型
      {
        label: "关闭弹窗",
        value: me.DialogClose
      },
      {
        label: "连线动画反向",
        value: me.AnimateReverse
      },
      {
        label: "视频",
        value: me.Video
      },
      {
        label: "执行结束",
        value: me.ScriptEnd
      },
      {
        label: "打开图纸",
        value: me.ShowMeta2D
      },
      {
        label: "聚焦",
        value: me.GoToView
      }
    ], m = [
      {
        label: "模态",
        value: "modal"
      },
      {
        label: "全屏",
        value: "full-screen"
      },
      {
        label: "非模态",
        value: "modeless"
      }
    ], p = [
      {
        label: "扩展事件",
        value: Re.CustomMessage
      }
    ], V = [
      {
        label: "视频播放结束",
        value: ze.VideoEnded
      },
      {
        label: "脚本结束",
        value: ze.ScriptEnded
      }
    ], F = ae([]), S = (N) => {
      if (Array.isArray(P.scripts)) {
        const $ = [];
        P.scripts.forEach((A) => {
          Array.isArray(A.handlers) && A.handlers.forEach((y) => {
            var M, O;
            y.action === me.Video && $.push({
              label: ((M = y.params) == null ? void 0 : M.title) || ((O = y.params) == null ? void 0 : O.url),
              value: y.id
            });
          });
        }), F.value = $;
      }
      c();
    }, z = [
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
    ], j = ae([]), I = () => {
      if (j.value.length >= 6) {
        ye.warning("最多只能添加6个属性");
        return;
      }
      j.value.push({
        prop: "",
        value: ""
      });
    }, r = (N, $) => {
      const A = j.value.indexOf(N);
      j.value.splice(A, 1), k($);
    }, k = (N) => {
      const $ = {};
      j.value.forEach((A) => {
        $[A.prop] = A.value;
      }), N.value = $, c();
    }, Z = (N) => {
      N.value && typeof N.value == "object" && (j.value = Object.keys(N.value).map(($) => ({
        prop: $,
        value: N.value[$]
      })));
    }, ee = (N) => {
      var y;
      if (!N.length || !a.value.length) return;
      let $ = N[0];
      if (P.fields.length && ($ -= 1), !a.value[$]) return;
      const A = JSON.parse(JSON.stringify(a.value[$]));
      A && (Z(A), ((y = A.where) == null ? void 0 : y.type) == Re.CustomMessage && S());
    }, X = ae(((Y = P.defaultScript) == null ? void 0 : Y.rowPropList) || []), E = () => {
      if (X.value.length >= P.fields.length) {
        ye.warning(`最多只能添加${P.fields.length}个属性`);
        return;
      }
      X.value.push({
        prop: "",
        value: ""
      });
    }, s = () => {
      c();
    }, h = (N) => {
      const $ = X.value.indexOf(N);
      X.value.splice($, 1), s();
    };
    return (N, $) => {
      const A = b("t-input-number"), y = b("t-form-item"), M = b("t-form"), O = b("t-button"), Q = b("t-col"), ue = b("t-icon"), U = b("t-row"), _ = b("t-select"), ne = b("t-input"), re = b("t-collapse-panel"), fe = b("t-tag-input"), H = b("t-color-picker"), t = b("t-collapse");
      return i(), R("div", null, [
        e(M, { labelAlign: "left" }, {
          default: l(() => [
            e(y, {
              label: "时长",
              name: "name"
            }, {
              default: l(() => [
                e(A, {
                  modelValue: f.defaultScript.duration,
                  "onUpdate:modelValue": $[0] || ($[0] = (w) => f.defaultScript.duration = w),
                  placeholder: "单位: ms",
                  onChange: c
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(O, {
          block: "",
          theme: "primary",
          onClick: D
        }, {
          default: l(() => $[1] || ($[1] = [
            J("添加脚本")
          ])),
          _: 1
        }),
        e(t, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: ee
        }, {
          default: l(() => [
            f.fields.length ? (i(), L(re, {
              key: 0,
              header: "数据"
            }, {
              default: l(() => [
                e(U, { justify: "start" }, {
                  default: l(() => [
                    e(Q, { span: 5 }, {
                      default: l(() => $[2] || ($[2] = [
                        x("div", null, "字段", -1)
                      ])),
                      _: 1
                    }),
                    e(Q, { span: 5 }, {
                      default: l(() => $[3] || ($[3] = [
                        x("div", null, "值", -1)
                      ])),
                      _: 1
                    }),
                    e(Q, { span: 2 }, {
                      default: l(() => [
                        e(O, {
                          variant: "text",
                          onClick: E
                        }, {
                          default: l(() => [
                            e(ue, { name: "add" })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (i(!0), R(K, null, oe(X.value, (w, n) => (i(), L(U, {
                  key: n,
                  justify: "start",
                  gutter: 4,
                  style: { "margin-bottom": "4px" }
                }, {
                  default: l(() => [
                    e(Q, { span: 5 }, {
                      default: l(() => [
                        e(_, {
                          modelValue: w.prop,
                          "onUpdate:modelValue": (d) => w.prop = d,
                          options: f.fields,
                          keys: { label: "title", value: "colKey" },
                          onChange: s
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 2
                    }, 1024),
                    e(Q, { span: 5 }, {
                      default: l(() => [
                        e(ne, {
                          modelValue: w.value,
                          "onUpdate:modelValue": (d) => w.value = d,
                          onChange: s
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(Q, { span: 2 }, {
                      default: l(() => [
                        e(O, {
                          variant: "text",
                          onClick: (d) => h(w)
                        }, {
                          default: l(() => [
                            e(ue, { name: "delete" })
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
            })) : q("", !0),
            (i(!0), R(K, null, oe(a.value, (w, n) => (i(), L(re, {
              key: n,
              header: `脚本-${w.id}`
            }, {
              headerRightContent: l(() => [
                e(O, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (d) => C(w)
                }, {
                  default: l(() => [
                    e(ue, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(M, { labelAlign: "left" }, {
                  default: l(() => [
                    e(y, { label: "行为" }, {
                      default: l(() => [
                        e(_, {
                          modelValue: w.action,
                          "onUpdate:modelValue": (d) => w.action = d,
                          options: g,
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    [
                      B(te).SetProps,
                      B(te).StartAnimate,
                      B(te).StopAnimate,
                      B(te).PauseAnimate,
                      B(me).AnimateReverse
                    ].includes(w.action) ? (i(), L(y, {
                      key: 0,
                      label: "目标"
                    }, {
                      default: l(() => [
                        e(fe, {
                          modelValue: w.target,
                          "onUpdate:modelValue": (d) => w.target = d,
                          placeholder: "标签或ID",
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : q("", !0),
                    w.action === B(te).SetProps ? (i(), R(K, { key: 1 }, [
                      e(U, { justify: "start" }, {
                        default: l(() => [
                          e(Q, { span: 5 }, {
                            default: l(() => $[4] || ($[4] = [
                              x("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(Q, { span: 5 }, {
                            default: l(() => $[5] || ($[5] = [
                              x("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(Q, { span: 2 }, {
                            default: l(() => [
                              e(O, {
                                variant: "text",
                                onClick: I
                              }, {
                                default: l(() => [
                                  e(ue, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (i(!0), R(K, null, oe(j.value, (d, T) => (i(), L(U, {
                        key: T,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(Q, { span: 5 }, {
                            default: l(() => [
                              e(_, {
                                modelValue: d.prop,
                                "onUpdate:modelValue": (W) => d.prop = W,
                                options: z,
                                onChange: (W) => k(w)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(Q, { span: 5 }, {
                            default: l(() => [
                              e(ne, {
                                modelValue: d.value,
                                "onUpdate:modelValue": (W) => d.value = W,
                                onChange: (W) => k(w)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(Q, { span: 2 }, {
                            default: l(() => [
                              e(O, {
                                variant: "text",
                                onClick: (W) => r(d, w)
                              }, {
                                default: l(() => [
                                  e(ue, { name: "delete" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ], 64)) : w.action === B(te).Dialog ? (i(), R(K, { key: 2 }, [
                      e(y, { label: "窗口标题" }, {
                        default: l(() => [
                          e(ne, {
                            modelValue: w.value,
                            "onUpdate:modelValue": (d) => w.value = d,
                            clearable: "",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      e(y, { label: "URL" }, {
                        default: l(() => [
                          e(ne, {
                            modelValue: w.params,
                            "onUpdate:modelValue": (d) => w.params = d,
                            clearable: "",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      w.extend ? (i(), L(y, {
                        key: 0,
                        label: "窗口宽度"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: w.extend.width,
                            "onUpdate:modelValue": (d) => w.extend.width = d,
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      w.extend ? (i(), L(y, {
                        key: 1,
                        label: "窗口高度"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: w.extend.height,
                            "onUpdate:modelValue": (d) => w.extend.height = d,
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      w.extend ? (i(), L(y, {
                        key: 2,
                        label: "X偏移"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: w.extend.x,
                            "onUpdate:modelValue": (d) => w.extend.x = d,
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      w.extend ? (i(), L(y, {
                        key: 3,
                        label: "Y偏移"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: w.extend.y,
                            "onUpdate:modelValue": (d) => w.extend.y = d,
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0)
                    ], 64)) : [B(me).Video, B(me).ShowMeta2D].includes(w.action) ? (i(), R(K, { key: 3 }, [
                      e(y, { label: "窗口标题" }, {
                        default: l(() => [
                          e(ne, {
                            modelValue: w.params.title,
                            "onUpdate:modelValue": (d) => w.params.title = d,
                            clearable: "",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      e(y, {
                        label: w.action == B(me).Video ? "视频URL" : "图纸URL"
                      }, {
                        default: l(() => [
                          e(ne, {
                            modelValue: w.params.url,
                            "onUpdate:modelValue": (d) => w.params.url = d,
                            clearable: "",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["label"]),
                      w.params ? (i(), L(y, {
                        key: 0,
                        label: "窗口宽度"
                      }, {
                        default: l(() => [
                          e(ne, {
                            modelValue: w.params.width,
                            "onUpdate:modelValue": (d) => w.params.width = d,
                            placeholder: "示例：320, '500px', '80%'",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      w.params ? (i(), L(y, {
                        key: 1,
                        label: "对话框类型"
                      }, {
                        default: l(() => [
                          e(_, {
                            modelValue: w.params.mode,
                            "onUpdate:modelValue": (d) => w.params.mode = d,
                            clearable: "",
                            options: m,
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      w.params ? (i(), R(K, { key: 2 }, [
                        e(y, { label: "标题栏上间距" }, {
                          default: l(() => [
                            e(ne, {
                              modelValue: w.params.headerMarginTop,
                              "onUpdate:modelValue": (d) => w.params.headerMarginTop = d,
                              placeholder: "示例：'10px'",
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "背景颜色" }, {
                          default: l(() => [
                            e(H, {
                              class: "w-full",
                              modelValue: w.params.backgroundColor,
                              "onUpdate:modelValue": (d) => w.params.backgroundColor = d,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "背景图片" }, {
                          default: l(() => [
                            e(ne, {
                              modelValue: w.params.backgroundImageUrl,
                              "onUpdate:modelValue": (d) => w.params.backgroundImageUrl = d,
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "标题颜色" }, {
                          default: l(() => [
                            e(H, {
                              class: "w-full",
                              modelValue: w.params.textColor,
                              "onUpdate:modelValue": (d) => w.params.textColor = d,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "控制栏背景颜色" }, {
                          default: l(() => [
                            e(H, {
                              class: "w-full",
                              modelValue: w.params.controlBarBackgroundColor,
                              "onUpdate:modelValue": (d) => w.params.controlBarBackgroundColor = d,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "控制栏按钮颜色" }, {
                          default: l(() => [
                            e(H, {
                              class: "w-full",
                              modelValue: w.params.controlColor,
                              "onUpdate:modelValue": (d) => w.params.controlColor = d,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "已播放进度颜色" }, {
                          default: l(() => [
                            e(H, {
                              class: "w-full",
                              modelValue: w.params.controlPlayProgressBarColor,
                              "onUpdate:modelValue": (d) => w.params.controlPlayProgressBarColor = d,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(y, { label: "已加载进度颜色" }, {
                          default: l(() => [
                            e(H, {
                              class: "w-full",
                              modelValue: w.params.controlLoadProgressBarColor,
                              "onUpdate:modelValue": (d) => w.params.controlLoadProgressBarColor = d,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ], 64)) : q("", !0)
                    ], 64)) : w.action === B(me).ScriptEnd ? (i(), L(y, {
                      key: 4,
                      label: "业务名称"
                    }, {
                      default: l(() => [
                        e(ne, {
                          modelValue: w.name,
                          "onUpdate:modelValue": (d) => w.name = d,
                          placeholder: "唯一标识，用于和其他业务联动",
                          clearable: "",
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : w.action === B(me).GoToView ? (i(), L(y, {
                      key: 5,
                      label: "聚焦图元"
                    }, {
                      default: l(() => [
                        e(ne, {
                          modelValue: w.value,
                          "onUpdate:modelValue": (d) => w.value = d,
                          placeholder: "要聚焦的目标图元标签或ID",
                          clearable: "",
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : q("", !0),
                    w.where ? (i(), L(y, {
                      key: 6,
                      label: "触发条件"
                    }, {
                      default: l(() => [
                        e(_, {
                          modelValue: w.where.type,
                          "onUpdate:modelValue": (d) => w.where.type = d,
                          options: p,
                          clearable: "",
                          onChange: c
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : q("", !0),
                    w.where && w.where.type === B(Re).CustomMessage ? (i(), R(K, { key: 7 }, [
                      e(y, { label: "事件" }, {
                        default: l(() => [
                          e(_, {
                            modelValue: w.where.value,
                            "onUpdate:modelValue": (d) => w.where.value = d,
                            options: V,
                            clearable: "",
                            onChange: S
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      w.where.value === B(ze).VideoEnded ? (i(), L(y, {
                        key: 0,
                        label: "事件来源"
                      }, {
                        default: l(() => [
                          e(_, {
                            modelValue: w.where.key,
                            "onUpdate:modelValue": (d) => w.where.key = d,
                            options: F.value,
                            clearable: "",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 2
                      }, 1024)) : w.where.value === B(ze).ScriptEnded ? (i(), L(y, {
                        key: 1,
                        label: "业务名称"
                      }, {
                        default: l(() => [
                          e(ne, {
                            modelValue: w.where.key,
                            "onUpdate:modelValue": (d) => w.where.key = d,
                            placeholder: "其他联动业务中定义的唯一标识",
                            clearable: "",
                            onChange: c
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0)
                    ], 64)) : q("", !0)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["header"]))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
}), Ta = /* @__PURE__ */ ge({
  __name: "ScriptsEditor",
  props: {},
  emits: ["change"],
  setup(f, { emit: v }) {
    const P = v, { presetScriptsConfig: a } = meta2d.data(), D = [
      { colKey: "serial-number", title: "序号", width: "100" },
      {
        title: "名称",
        colKey: "name",
        sid: Ce()
      },
      {
        title: "描述",
        colKey: "description",
        sid: Ce()
      }
    ], C = Ae(
      (a == null ? void 0 : a.columns) || D
    ), o = () => {
      C.push({
        title: "",
        colKey: "",
        sid: Ce()
      }), c();
    }, c = (I) => {
      P("change", {
        columns: C,
        scripts: p,
        ...m
      });
    }, g = (I) => {
      C.splice(I, 1), c();
    }, m = Ae({
      show: !1,
      bordered: !1,
      height: null,
      hover: !1,
      showHeader: !0,
      stripe: !1,
      style: {
        evenRowBackgroundColor: "#f8f8f8",
        oddRowBackgroundColor: "#ffffff",
        textColor: "#000000",
        backgroundImageUrl: ""
      }
    });
    a && (m.bordered = a.bordered, m.height = a.height, m.hover = a.hover, m.showHeader = a.showHeader, m.stripe = a.stripe, m.style = a.style, m.show = a.show);
    const p = Ae(
      (a == null ? void 0 : a.scripts) || [
        {
          sid: Ce()
        }
      ]
    ), V = Ve(() => C.filter((I) => I.colKey != "serial-number")), F = (I, r) => {
      p[r] = I, c();
    }, S = () => {
      p.push({
        sid: Ce()
      });
    }, z = (I) => {
      p.splice(I, 0, {
        sid: Ce()
      });
    }, j = (I) => {
      p.splice(I, 1), c();
    };
    return meta2d.on("opened", () => {
      const { presetScriptsConfig: I } = meta2d.data();
      I ? (Array.isArray(I.columns) && C.splice(0, C.length, ...I.columns), Array.isArray(I.scripts) && p.splice(0, p.length, ...I.scripts), m.bordered = I.bordered, m.height = I.height, m.hover = I.hover, m.showHeader = I.showHeader, m.stripe = I.stripe, m.style = I.style) : (C.splice(0, C.length, ...D), p.splice(0, p.length, {
        sid: Ce()
      }), m.bordered = !1, m.height = null, m.hover = !1, m.showHeader = !0, m.stripe = !1, m.style = {
        evenRowBackgroundColor: "",
        oddRowBackgroundColor: "",
        textColor: "",
        backgroundImageUrl: ""
      });
    }), (I, r) => {
      const k = b("t-checkbox"), Z = b("t-space"), ee = b("t-col"), X = b("t-icon"), E = b("t-button"), s = b("t-row"), h = b("t-input"), G = b("t-collapse-panel"), Y = b("t-switch"), N = b("t-form-item"), $ = b("t-color-picker"), A = b("t-form"), y = b("t-collapse");
      return i(), L(y, {
        defaultExpandAll: "",
        class: "meta-collapse"
      }, {
        default: l(() => [
          e(G, { header: "表格列" }, {
            headerRightContent: l(() => [
              e(Z, { size: "small" }, {
                default: l(() => [
                  e(k, {
                    modelValue: m.show,
                    "onUpdate:modelValue": r[0] || (r[0] = (M) => m.show = M),
                    onChange: c
                  }, {
                    default: l(() => r[9] || (r[9] = [
                      J("显示")
                    ])),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            default: l(() => [
              e(s, { justify: "start" }, {
                default: l(() => [
                  e(ee, { span: 5 }, {
                    default: l(() => r[10] || (r[10] = [
                      x("div", null, "名称", -1)
                    ])),
                    _: 1
                  }),
                  e(ee, { span: 5 }, {
                    default: l(() => r[11] || (r[11] = [
                      x("div", null, "字段", -1)
                    ])),
                    _: 1
                  }),
                  e(ee, { span: 2 }, {
                    default: l(() => [
                      e(E, {
                        variant: "text",
                        onClick: o
                      }, {
                        default: l(() => [
                          e(X, { name: "add" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (i(!0), R(K, null, oe(C, (M, O) => (i(), L(s, {
                key: O,
                justify: "start",
                gutter: 4,
                style: { "margin-bottom": "4px" }
              }, {
                default: l(() => [
                  e(ee, { span: 5 }, {
                    default: l(() => [
                      e(h, {
                        modelValue: M.title,
                        "onUpdate:modelValue": (Q) => M.title = Q,
                        onChange: c
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  e(ee, { span: 5 }, {
                    default: l(() => [
                      e(h, {
                        modelValue: M.colKey,
                        "onUpdate:modelValue": (Q) => M.colKey = Q,
                        onChange: c
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  e(ee, { span: 2 }, {
                    default: l(() => [
                      e(E, {
                        variant: "text",
                        onClick: (Q) => g(O)
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
          e(G, { header: "样式" }, {
            default: l(() => [
              e(A, { labelAlign: "left" }, {
                default: l(() => [
                  e(N, { label: "边框" }, {
                    default: l(() => [
                      e(Y, {
                        modelValue: m.bordered,
                        "onUpdate:modelValue": r[1] || (r[1] = (M) => m.bordered = M),
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N, { label: "悬停" }, {
                    default: l(() => [
                      e(Y, {
                        modelValue: m.hover,
                        "onUpdate:modelValue": r[2] || (r[2] = (M) => m.hover = M),
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N, { label: "显示表头" }, {
                    default: l(() => [
                      e(Y, {
                        modelValue: m.showHeader,
                        "onUpdate:modelValue": r[3] || (r[3] = (M) => m.showHeader = M),
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N, { label: "斑马纹" }, {
                    default: l(() => [
                      e(Y, {
                        modelValue: m.stripe,
                        "onUpdate:modelValue": r[4] || (r[4] = (M) => m.stripe = M),
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N, { label: "行默认背景" }, {
                    default: l(() => [
                      e($, {
                        modelValue: m.style.evenRowBackgroundColor,
                        "onUpdate:modelValue": r[5] || (r[5] = (M) => m.style.evenRowBackgroundColor = M),
                        class: "w-full",
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  m.stripe ? (i(), L(N, {
                    key: 0,
                    label: "奇数行背景"
                  }, {
                    default: l(() => [
                      e($, {
                        modelValue: m.style.oddRowBackgroundColor,
                        "onUpdate:modelValue": r[6] || (r[6] = (M) => m.style.oddRowBackgroundColor = M),
                        class: "w-full",
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : q("", !0),
                  e(N, { label: "字体颜色" }, {
                    default: l(() => [
                      e($, {
                        modelValue: m.style.textColor,
                        "onUpdate:modelValue": r[7] || (r[7] = (M) => m.style.textColor = M),
                        class: "w-full",
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N, { label: "背景图片" }, {
                    default: l(() => [
                      e(h, {
                        modelValue: m.style.backgroundImageUrl,
                        "onUpdate:modelValue": r[8] || (r[8] = (M) => m.style.backgroundImageUrl = M),
                        class: "w-full",
                        clearable: "",
                        onChange: c
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          (i(!0), R(K, null, oe(p, (M, O) => (i(), L(G, {
            key: M.sid,
            header: `指令-${O + 1}-${M.sid}`
          }, {
            headerRightContent: l(() => [
              e(Z, { size: "small" }, {
                default: l(() => [
                  O == p.length - 1 ? (i(), L(E, {
                    key: 0,
                    theme: "primary",
                    size: "small",
                    onClick: S
                  }, {
                    default: l(() => r[12] || (r[12] = [
                      J("追加")
                    ])),
                    _: 1
                  })) : (i(), L(E, {
                    key: 1,
                    theme: "warning",
                    size: "small",
                    onClick: (Q) => z(O)
                  }, {
                    default: l(() => r[13] || (r[13] = [
                      J("插入")
                    ])),
                    _: 2
                  }, 1032, ["onClick"])),
                  O > 0 ? (i(), L(E, {
                    key: 2,
                    theme: "danger",
                    size: "small",
                    onClick: (Q) => j(O)
                  }, {
                    default: l(() => r[14] || (r[14] = [
                      J("删除")
                    ])),
                    _: 2
                  }, 1032, ["onClick"])) : q("", !0)
                ]),
                _: 2
              }, 1024)
            ]),
            default: l(() => [
              (i(), L($a, {
                key: M.sid,
                fields: V.value,
                defaultScript: M,
                scripts: p,
                onChange: (Q) => F(Q, O)
              }, null, 8, ["fields", "defaultScript", "scripts", "onChange"]))
            ]),
            _: 2
          }, 1032, ["header"]))), 128))
        ]),
        _: 1
      });
    };
  }
}), Ma = { class: "props-panel" }, Fa = { class: "props-panel" }, Ia = { class: "props-panel" }, Ba = /* @__PURE__ */ ge({
  __name: "FileProps",
  setup(f) {
    const v = Ae({
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
      wsMsgHandlers: [],
      lockState: 0
      /* None */
    }), P = Ae({
      grid: !1,
      gridSize: 10,
      gridRotate: void 0,
      gridColor: void 0,
      rule: !0
    }), a = [
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
      },
      {
        label: "预设脚本",
        value: 4,
        slot: "preset-script"
      }
    ], D = [
      {
        label: "未锁定",
        value: 0
        /* None */
      },
      {
        label: "禁止拖拽/编辑图元；图元可选中、高亮、触发事件等",
        value: 1
        /* DisableEdit */
      },
      {
        label: "禁止编辑图元、禁止左键移动画布；图元可选中、高亮、触发事件等",
        value: 2
        /* DisableMove */
      },
      {
        label: "禁止缩放画布",
        value: 3
        /* DisableScale */
      },
      {
        label: "禁止左键移动和缩放画布",
        value: 4
        /* DisableMoveScale */
      },
      {
        label: "画布不能移动和缩放，图元不能触发任何事件",
        value: 10
        /* Disable */
      }
    ];
    Le(() => {
      const s = meta2d.data();
      v.name = s.name || "", v.background = s.background, v.color = s.color, v.lineCross = s.lineCross, v.backgroundImage = s.backgroundImage, v.grid = s.grid, v.gridSize = s.gridSize, v.gridRotate = s.gridRotate, v.gridColor = s.gridColor, v.rule = s.rule, v.ruleColor = s.ruleColor, v.bkImage = s.bkImage, v.wsUrl = s.wsUrl, v.busName = s.busName, v.msgTypes = s.msgTypes || [], v.onMessageJsCode = s.onMessageJsCode, v.wsMsgFields = s.wsMsgFields || [], v.wsMsgHandlers = s.wsMsgHandlers || [], v.lockState = s.lockState || 0, Object.assign(P, meta2d.getOptions());
    });
    const C = (s) => {
      v.lineCross ? wa(!0) : xa(), Object.assign(meta2d.store.data, v), meta2d.store.patchFlagsBackground = !0, meta2d.setGrid({
        grid: v.grid,
        gridSize: v.gridSize,
        gridRotate: v.gridRotate,
        gridColor: v.gridColor
      }), meta2d.setRule({
        rule: v.rule,
        ruleColor: v.ruleColor
      }), s == "bkImage" && meta2d.setBackgroundImage(v.bkImage), meta2d.render();
    }, o = ae(), { uploadValue: c, sizeLimit: g, headers: m } = el(), p = (s) => {
      var h;
      console.log("upload success: ", s), s.response && (v.bkImage = s.response.url || ((h = s.response.data) == null ? void 0 : h.fileurl), C("bkImage"));
    }, V = (s) => {
      console.log("upload fail: ", s);
    }, F = (s) => {
      const h = v[s];
      if (s == "wsUrl" && !(h != null && h.startsWith("ws://"))) {
        v[s] = "";
        return;
      }
      Object.assign(meta2d.store.data, v);
    }, { resolver: S } = Bl(v), z = () => {
      const s = v.msgTypes.map((Y) => Number(Y)).filter((Y) => !isNaN(Y)), h = Il.getInstance(v.wsUrl, {
        busName: v.busName,
        msgTypes: s,
        enableLog: !1,
        onReady: () => {
          console.log("%c连接成功！", "color: green; font-weight: bold;"), pl.success({
            title: "连接成功！"
          });
        }
      });
      h.connect();
      const G = v.onMessageJsCode;
      h.subscribe(v.busName, s, (Y) => {
        try {
          G ? new Function("data", G)(Y) : S(Y);
        } catch (N) {
          console.log("error: ", N);
        }
      });
    }, j = ae(), I = () => {
      j.value && j.value.open(v.onMessageJsCode);
    }, r = (s) => {
      v.onMessageJsCode = s, F("onMessageJsCode");
    }, k = () => {
      v.wsMsgFields.push({
        label: "",
        value: ""
      });
    }, Z = (s) => {
      v.wsMsgFields.splice(s, 1);
    }, ee = () => {
      F("wsMsgFields");
    }, X = (s) => {
      console.log("handlers: ", s), v.wsMsgHandlers = s, F("wsMsgHandlers");
    }, E = (s) => {
      console.log("preset script config: ", s), v.presetScriptsConfig = s, Object.assign(meta2d.store.data, v);
    };
    return (s, h) => {
      const G = b("t-input"), Y = b("t-form-item"), N = b("t-divider"), $ = b("t-switch"), A = b("t-input-number"), y = b("t-color-picker"), M = b("t-upload"), O = b("t-tooltip"), Q = b("t-select"), ue = b("t-form"), U = b("t-tag-input"), _ = b("t-button"), ne = b("t-space"), re = b("t-collapse-panel"), fe = b("t-icon"), H = b("t-col"), t = b("t-row"), w = b("t-collapse");
      return i(), R("div", null, [
        e(Ye, { tabs: a }, {
          "pen-props": l(() => [
            x("div", Ma, [
              e(ue, { "label-align": "left" }, {
                default: l(() => [
                  e(Y, {
                    label: "名称",
                    name: "name"
                  }, {
                    default: l(() => [
                      e(G, {
                        modelValue: v.name,
                        "onUpdate:modelValue": h[0] || (h[0] = (n) => v.name = n),
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N),
                  e(Y, {
                    label: "网格",
                    name: "grid"
                  }, {
                    default: l(() => [
                      e($, {
                        modelValue: v.grid,
                        "onUpdate:modelValue": h[1] || (h[1] = (n) => v.grid = n),
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "网格大小",
                    name: "gridSize"
                  }, {
                    default: l(() => [
                      e(A, {
                        modelValue: v.gridSize,
                        "onUpdate:modelValue": h[2] || (h[2] = (n) => v.gridSize = n),
                        min: 0,
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "网格角度",
                    name: "gridRotate"
                  }, {
                    default: l(() => [
                      e(A, {
                        modelValue: v.gridRotate,
                        "onUpdate:modelValue": h[3] || (h[3] = (n) => v.gridRotate = n),
                        modelModifiers: { number: !0 },
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "网格颜色",
                    name: "gridColor"
                  }, {
                    default: l(() => [
                      e(y, {
                        class: "w-full",
                        modelValue: v.gridColor,
                        "onUpdate:modelValue": h[4] || (h[4] = (n) => v.gridColor = n),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N),
                  e(Y, {
                    label: "标尺",
                    name: "rule"
                  }, {
                    default: l(() => [
                      e($, {
                        modelValue: v.rule,
                        "onUpdate:modelValue": h[5] || (h[5] = (n) => v.rule = n),
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "标尺颜色",
                    name: "ruleColor"
                  }, {
                    default: l(() => [
                      e(y, {
                        class: "w-full",
                        modelValue: v.ruleColor,
                        "onUpdate:modelValue": h[6] || (h[6] = (n) => v.ruleColor = n),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(N),
                  e(Y, {
                    label: "背景颜色",
                    name: "background"
                  }, {
                    default: l(() => [
                      e(y, {
                        class: "w-full",
                        modelValue: v.background,
                        "onUpdate:modelValue": h[7] || (h[7] = (n) => v.background = n),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "图元默认颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(y, {
                        class: "w-full",
                        modelValue: v.color,
                        "onUpdate:modelValue": h[8] || (h[8] = (n) => v.color = n),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        clearable: "",
                        "color-modes": ["monochrome"],
                        onChange: C
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, { label: "背景图片" }, {
                    default: l(() => [
                      e(M, {
                        ref_key: "uploadRef",
                        ref: o,
                        modelValue: B(c),
                        "onUpdate:modelValue": h[9] || (h[9] = (n) => xe(c) ? c.value = n : null),
                        action: s.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: B(m),
                        name: "object",
                        sizeLimit: B(g),
                        theme: "image",
                        tips: "请选择单张小于1MB的图片上传",
                        accept: "image/*",
                        onFail: V,
                        onSuccess: p
                      }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "背景图片地址",
                    name: "bkImage"
                  }, {
                    default: l(() => [
                      e(G, {
                        modelValue: v.bkImage,
                        "onUpdate:modelValue": h[10] || (h[10] = (n) => v.bkImage = n),
                        clearable: "",
                        onChange: h[11] || (h[11] = (n) => C("bkImage"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(Y, {
                    label: "连线相交弯曲",
                    name: "lineCross"
                  }, {
                    default: l(() => [
                      e(O, { content: "当直线或折线两两相交时，其中相交的交点会自动弯曲显示" }, {
                        default: l(() => [
                          e($, {
                            modelValue: v.lineCross,
                            "onUpdate:modelValue": h[12] || (h[12] = (n) => v.lineCross = n),
                            onChange: C
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(N),
                  e(Y, {
                    label: "预览时锁定",
                    name: "lockState"
                  }, {
                    default: l(() => [
                      e(O, { content: "仅预览时有效" }, {
                        default: l(() => [
                          e(Q, {
                            modelValue: v.lockState,
                            "onUpdate:modelValue": h[13] || (h[13] = (n) => v.lockState = n),
                            options: D,
                            clearable: "",
                            onChange: C
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
            Ge(s.$slots, "struct", {}, void 0, !0)
          ]),
          "comm-props": l(() => [
            x("div", Fa, [
              e(w, {
                defaultExpandAll: "",
                class: "meta-collapse"
              }, {
                default: l(() => [
                  e(re, {
                    value: "0",
                    header: "WebSocket"
                  }, {
                    default: l(() => [
                      e(ue, {
                        data: v,
                        "label-align": "left",
                        size: "small",
                        labelWidth: "80px"
                      }, {
                        default: l(() => [
                          e(Y, {
                            label: "地址",
                            name: "wsUrl"
                          }, {
                            default: l(() => [
                              e(G, {
                                modelValue: v.wsUrl,
                                "onUpdate:modelValue": h[14] || (h[14] = (n) => v.wsUrl = n),
                                clearable: "",
                                placeholder: "ws:// 开头，不符合则不保存",
                                onBlur: h[15] || (h[15] = (n) => F("wsUrl"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(Y, {
                            label: "消息名称",
                            name: "busName"
                          }, {
                            default: l(() => [
                              e(G, {
                                modelValue: v.busName,
                                "onUpdate:modelValue": h[16] || (h[16] = (n) => v.busName = n),
                                clearable: "",
                                onChange: h[17] || (h[17] = (n) => F("busName"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(Y, {
                            label: "消息类型",
                            name: "msgTypes"
                          }, {
                            default: l(() => [
                              e(U, {
                                modelValue: v.msgTypes,
                                "onUpdate:modelValue": h[18] || (h[18] = (n) => v.msgTypes = n),
                                clearable: "",
                                placeholder: "消息类型, 数字, 回车添加",
                                onChange: h[19] || (h[19] = (n) => F("msgTypes"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(N),
                          e(ne, null, {
                            default: l(() => [
                              e(_, { onClick: z }, {
                                default: l(() => h[20] || (h[20] = [
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
                  e(re, { header: "消息处理代码" }, {
                    default: l(() => [
                      e(_, {
                        block: "",
                        onClick: I
                      }, {
                        default: l(() => h[21] || (h[21] = [
                          J("编辑代码")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(re, { header: "消息状态字段" }, {
                    headerRightContent: l(() => [
                      e(O, {
                        content: "用于消息处理器的触发条件",
                        placement: "top-right"
                      }, {
                        default: l(() => [
                          e(_, { variant: "text" }, {
                            default: l(() => [
                              e(fe, { name: "help" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    default: l(() => [
                      e(_, {
                        block: "",
                        onClick: k
                      }, {
                        default: l(() => h[22] || (h[22] = [
                          J("新增")
                        ])),
                        _: 1
                      }),
                      h[23] || (h[23] = x("br", null, null, -1)),
                      (i(!0), R(K, null, oe(v.wsMsgFields, (n, d) => (i(), L(t, {
                        key: d,
                        justify: "start",
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(H, { span: 10 }, {
                            default: l(() => [
                              e(G, {
                                modelValue: n.value,
                                "onUpdate:modelValue": (T) => n.value = T,
                                onChange: ee
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024),
                          e(H, { span: 2 }, {
                            default: l(() => [
                              e(_, {
                                variant: "text",
                                onClick: (T) => Z(d)
                              }, {
                                default: l(() => [
                                  e(fe, { name: "delete" })
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
                  e(re, { header: "消息处理队列" }, {
                    headerRightContent: l(() => [
                      e(O, {
                        content: "【消息处理代码】存在时，此处的设置无效",
                        placement: "top-right"
                      }, {
                        default: l(() => [
                          e(_, { variant: "text" }, {
                            default: l(() => [
                              e(fe, { name: "help" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    default: l(() => [
                      e(La, {
                        wsMsgFields: v.wsMsgFields,
                        wsMsgHandlers: v.wsMsgHandlers,
                        onChange: X
                      }, null, 8, ["wsMsgFields", "wsMsgHandlers"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          "preset-script": l(() => [
            x("div", Ia, [
              e(Ta, { onChange: E })
            ])
          ]),
          _: 3
        }),
        e(Pa, {
          ref_key: "codeEditor",
          ref: j,
          onConfirm: r
        }, null, 512)
      ]);
    };
  }
}), Da = /* @__PURE__ */ he(Ba, [["__scopeId", "data-v-2ee2a5a3"]]), Ea = [
  { x: -10, duration: 100 },
  { x: 10, duration: 80 },
  { x: -10, duration: 50 },
  { x: 10, duration: 30 },
  { x: 0, duration: 300 }
], Ra = [
  { y: -10, duration: 100 },
  { y: 10, duration: 80 },
  { y: -10, duration: 50 },
  { y: 10, duration: 30 },
  { y: 0, duration: 300 }
], za = [
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
], Oa = [
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
], Na = [
  {
    duration: 1e3,
    rotate: 360
  }
], Ha = [
  {
    duration: 1e3,
    rotate: -360
  }
], Ga = [
  //   {
  //     duration: 1000,
  //     progress: 0.5,
  //   },
  {
    duration: 2e3,
    progress: 1
  }
], ja = [
  {
    duration: 1e3,
    color: "green"
  },
  {
    duration: 2e3,
    color: "red"
  }
], Vl = [
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
], hl = [
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
], wl = {
  moveXFrames: Ea,
  moveYFrames: Ra,
  rotateXFrames: za,
  scaleFrames: Oa,
  processFrames: Ga,
  colorFrames: ja,
  rotateFrames: Na,
  rotateFrames2: Ha
}, Ya = { class: "props-panel__editor" }, Wa = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, Qa = /* @__PURE__ */ ge({
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
  setup(f, { emit: v }) {
    const P = v, a = (C) => {
      P("propChange", C);
    }, D = (C) => {
      P("propChange", C);
    };
    return (C, o) => {
      const c = b("t-input-number"), g = b("t-form-item"), m = b("t-color-picker"), p = b("t-option"), V = b("t-select"), F = b("t-slider"), S = b("t-divider"), z = b("t-switch"), j = b("t-input"), I = b("t-form");
      return i(), R("div", Ya, [
        e(I, { "label-align": "left" }, {
          default: l(() => [
            e(g, {
              label: "时长(ms)",
              name: "duration"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.duration,
                  "onUpdate:modelValue": o[0] || (o[0] = (r) => f.data.duration = r),
                  min: 0,
                  onChange: o[1] || (o[1] = (r) => a("duration"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "偏移X",
              name: "x"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.x,
                  "onUpdate:modelValue": o[2] || (o[2] = (r) => f.data.x = r),
                  placeholder: "px",
                  onChange: o[3] || (o[3] = (r) => a("x"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "偏移Y",
              name: "y"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.y,
                  "onUpdate:modelValue": o[4] || (o[4] = (r) => f.data.y = r),
                  placeholder: "px",
                  onChange: o[5] || (o[5] = (r) => a("y"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "颜色",
              name: "color"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.color,
                  "onUpdate:modelValue": o[6] || (o[6] = (r) => f.data.color = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[7] || (o[7] = (r) => a("color"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "浮动颜色",
              name: "hoverColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.hoverColor,
                  "onUpdate:modelValue": o[8] || (o[8] = (r) => f.data.hoverColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[9] || (o[9] = (r) => a("hoverColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "选中颜色",
              name: "activeColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.activeColor,
                  "onUpdate:modelValue": o[10] || (o[10] = (r) => f.data.activeColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[11] || (o[11] = (r) => a("activeColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "背景",
              name: "background"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.background,
                  "onUpdate:modelValue": o[12] || (o[12] = (r) => f.data.background = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[13] || (o[13] = (r) => a("background"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "线条",
              name: "dash"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.dash,
                  "onUpdate:modelValue": o[14] || (o[14] = (r) => f.data.dash = r),
                  onChange: o[15] || (o[15] = (r) => a("dash"))
                }, {
                  default: l(() => [
                    (i(), L(p, {
                      key: 0,
                      value: 0,
                      label: "实线"
                    })),
                    (i(), L(p, {
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
            e(g, {
              label: "线条宽度",
              name: "lineWidth"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.lineWidth,
                  "onUpdate:modelValue": o[16] || (o[16] = (r) => f.data.lineWidth = r),
                  onChange: o[17] || (o[17] = (r) => a("lineWidth"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "圆角",
              name: "borderRadius"
            }, {
              default: l(() => [
                e(c, {
                  min: 0,
                  max: 1,
                  step: 0.01,
                  modelValue: f.data.borderRadius,
                  "onUpdate:modelValue": o[18] || (o[18] = (r) => f.data.borderRadius = r),
                  onChange: o[19] || (o[19] = (r) => a("borderRadius"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "不透明度",
              name: "globalAlpha"
            }, {
              default: l(() => [
                e(F, {
                  modelValue: f.data.globalAlpha,
                  "onUpdate:modelValue": o[20] || (o[20] = (r) => f.data.globalAlpha = r),
                  min: 0,
                  max: 1,
                  step: 0.01,
                  onChange: o[21] || (o[21] = (r) => a("globalAlpha"))
                }, null, 8, ["modelValue"]),
                x("span", Wa, ce(f.data.globalAlpha), 1)
              ]),
              _: 1
            }),
            e(g, {
              label: "阴影颜色",
              name: "shadowColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.shadowColor,
                  "onUpdate:modelValue": o[22] || (o[22] = (r) => f.data.shadowColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[23] || (o[23] = (r) => a("shadowColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "阴影模糊",
              name: "shadowBlur"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.shadowBlur,
                  "onUpdate:modelValue": o[24] || (o[24] = (r) => f.data.shadowBlur = r),
                  min: 0,
                  onChange: o[25] || (o[25] = (r) => a("shadowBlur"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "阴影X偏移",
              name: "shadowOffsetX"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.shadowOffsetX,
                  "onUpdate:modelValue": o[26] || (o[26] = (r) => f.data.shadowOffsetX = r),
                  onChange: o[27] || (o[27] = (r) => a("shadowOffsetX"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "阴影Y偏移",
              name: "shadowOffsetY"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.shadowOffsetY,
                  "onUpdate:modelValue": o[28] || (o[28] = (r) => f.data.shadowOffsetY = r),
                  onChange: o[29] || (o[29] = (r) => a("shadowOffsetY"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(S),
            e(g, {
              label: "文字阴影",
              name: "textHasShadow"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.textHasShadow,
                  "onUpdate:modelValue": o[30] || (o[30] = (r) => f.data.textHasShadow = r),
                  onChange: o[31] || (o[31] = (r) => a("textHasShadow"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "文本",
              name: "text"
            }, {
              default: l(() => [
                e(j, {
                  modelValue: f.data.text,
                  "onUpdate:modelValue": o[32] || (o[32] = (r) => f.data.text = r),
                  clearable: "",
                  onChange: o[33] || (o[33] = (r) => a("text"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "字体",
              name: "fontSize"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.fontSize,
                  "onUpdate:modelValue": o[34] || (o[34] = (r) => f.data.fontSize = r),
                  onChange: o[35] || (o[35] = (r) => a("fontSize"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "文字颜色类型",
              name: "textType"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.textType,
                  "onUpdate:modelValue": o[36] || (o[36] = (r) => f.data.textType = r),
                  onChange: o[37] || (o[37] = (r) => a("textType"))
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
            [1, 2].includes(f.data.textType) ? (i(), L(g, {
              key: 0,
              label: "文字渐变",
              name: "textGradientColors"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.textGradientColors,
                  "onUpdate:modelValue": o[38] || (o[38] = (r) => f.data.textGradientColors = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["linear-gradient"],
                  clearable: "",
                  onChange: o[39] || (o[39] = (r) => a("textGradientColors"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (i(), L(g, {
              key: 1,
              label: "文字颜色",
              name: "textColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.textColor,
                  "onUpdate:modelValue": o[40] || (o[40] = (r) => f.data.textColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[41] || (o[41] = (r) => a("textColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })),
            e(g, {
              label: "文本风格",
              name: "fontStyle"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.fontStyle,
                  "onUpdate:modelValue": o[42] || (o[42] = (r) => f.data.fontStyle = r),
                  onChange: o[43] || (o[43] = (r) => a("fontStyle"))
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
            e(g, {
              label: "文本粗细",
              name: "fontWeight"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.fontWeight,
                  "onUpdate:modelValue": o[44] || (o[44] = (r) => f.data.fontWeight = r),
                  onChange: o[45] || (o[45] = (r) => a("fontWeight"))
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
            e(g, {
              label: "换行",
              name: "whiteSpace"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.whiteSpace,
                  "onUpdate:modelValue": o[46] || (o[46] = (r) => f.data.whiteSpace = r),
                  onChange: o[47] || (o[47] = (r) => a("whiteSpace"))
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
            e(g, {
              label: "超出省略",
              name: "ellipsis"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.ellipsis,
                  "onUpdate:modelValue": o[48] || (o[48] = (r) => f.data.ellipsis = r),
                  onChange: o[49] || (o[49] = (r) => a("ellipsis"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "下划线",
              name: "textDecoration"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.textDecoration,
                  "onUpdate:modelValue": o[50] || (o[50] = (r) => f.data.textDecoration = r),
                  onChange: o[51] || (o[51] = (r) => a("textDecoration"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "下划线颜色",
              name: "textDecorationColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.textDecorationColor,
                  "onUpdate:modelValue": o[52] || (o[52] = (r) => f.data.textDecorationColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[53] || (o[53] = (r) => a("textDecorationColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "删除线",
              name: "textStrickout"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.textStrickout,
                  "onUpdate:modelValue": o[54] || (o[54] = (r) => f.data.textStrickout = r),
                  onChange: o[55] || (o[55] = (r) => a("textStrickout"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "删除线颜色",
              name: "textStrickoutColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.textStrickoutColor,
                  "onUpdate:modelValue": o[56] || (o[56] = (r) => f.data.textStrickoutColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[57] || (o[57] = (r) => a("textStrickoutColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "文字水平对齐",
              name: "textAlign"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.textAlign,
                  "onUpdate:modelValue": o[58] || (o[58] = (r) => f.data.textAlign = r),
                  onChange: o[59] || (o[59] = (r) => a("textAlign"))
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
            e(g, {
              label: "文字垂直对齐",
              name: "textBaseline"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.textBaseline,
                  "onUpdate:modelValue": o[60] || (o[60] = (r) => f.data.textBaseline = r),
                  onChange: o[61] || (o[61] = (r) => a("textBaseline"))
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
            e(S),
            e(g, {
              label: "宽",
              name: "width"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.width,
                  "onUpdate:modelValue": o[62] || (o[62] = (r) => f.data.width = r),
                  onChange: o[63] || (o[63] = (r) => D("width"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "高",
              name: "height"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.height,
                  "onUpdate:modelValue": o[64] || (o[64] = (r) => f.data.height = r),
                  onChange: o[65] || (o[65] = (r) => D("height"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "旋转角度",
              name: "rotate"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.rotate,
                  "onUpdate:modelValue": o[66] || (o[66] = (r) => f.data.rotate = r),
                  onChange: o[67] || (o[67] = (r) => a("rotate"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(S),
            e(g, {
              label: "进度",
              name: "progress"
            }, {
              default: l(() => [
                e(c, {
                  modelValue: f.data.progress,
                  "onUpdate:modelValue": o[68] || (o[68] = (r) => f.data.progress = r),
                  step: 0.1,
                  min: 0,
                  max: 1,
                  onChange: o[69] || (o[69] = (r) => a("progress"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "进度颜色",
              name: "progressColor"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.progressColor,
                  "onUpdate:modelValue": o[70] || (o[70] = (r) => f.data.progressColor = r),
                  "show-primary-color-preview": !1,
                  format: "CSS",
                  "color-modes": ["monochrome"],
                  clearable: "",
                  onChange: o[71] || (o[71] = (r) => a("progressColor"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "渐变颜色",
              name: "progressGradientColors"
            }, {
              default: l(() => [
                e(m, {
                  class: "w-full",
                  modelValue: f.data.progressGradientColors,
                  "onUpdate:modelValue": o[72] || (o[72] = (r) => f.data.progressGradientColors = r),
                  "show-primary-color-preview": !1,
                  clearable: "",
                  format: "CSS",
                  "color-modes": ["linear-gradient"],
                  onChange: o[73] || (o[73] = (r) => a("progressGradientColors"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "垂直进度",
              name: "verticalProgress"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.verticalProgress,
                  "onUpdate:modelValue": o[74] || (o[74] = (r) => f.data.verticalProgress = r),
                  onChange: o[75] || (o[75] = (r) => a("verticalProgress"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "反向进度",
              name: "reverseProgress"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.reverseProgress,
                  "onUpdate:modelValue": o[76] || (o[76] = (r) => f.data.reverseProgress = r),
                  onChange: o[77] || (o[77] = (r) => a("reverseProgress"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "水平翻转",
              name: "flipX"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.flipX,
                  "onUpdate:modelValue": o[78] || (o[78] = (r) => f.data.flipX = r),
                  onChange: o[79] || (o[79] = (r) => a("flipX"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(g, {
              label: "垂直翻转",
              name: "flipY"
            }, {
              default: l(() => [
                e(z, {
                  modelValue: f.data.flipY,
                  "onUpdate:modelValue": o[80] || (o[80] = (r) => f.data.flipY = r),
                  onChange: o[81] || (o[81] = (r) => a("flipY"))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            e(S),
            f.data.penName == "combine" ? (i(), L(g, {
              key: 2,
              label: "状态",
              name: "status"
            }, {
              default: l(() => [
                e(V, {
                  modelValue: f.data.showChild,
                  "onUpdate:modelValue": o[82] || (o[82] = (r) => f.data.showChild = r),
                  onChange: o[83] || (o[83] = (r) => a("showChild"))
                }, {
                  default: l(() => [
                    (i(!0), R(K, null, oe(f.statusList, (r, k) => (i(), L(p, {
                      key: r.value,
                      value: k,
                      label: r.label
                    }, null, 8, ["value", "label"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            })) : q("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}), Cl = /* @__PURE__ */ he(Qa, [["__scopeId", "data-v-b82ab405"]]), Ja = /* @__PURE__ */ ge({
  __name: "EventEditor",
  props: {
    defaultEventsValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["change"],
  setup(f, { emit: v }) {
    const P = f, a = ae(
      P.defaultEventsValue
    );
    Be(
      () => P.defaultEventsValue,
      (ee) => {
        ee ? a.value = ee : a.value = [];
      }
    );
    const D = [
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
    ], C = [
      {
        label: "打开链接",
        value: te.Link
      },
      {
        label: "更改属性",
        value: te.SetProps
      },
      {
        label: "执行动画",
        value: te.StartAnimate
      },
      {
        label: "暂停动画",
        value: te.PauseAnimate
      },
      {
        label: "停止动画",
        value: te.StopAnimate
      },
      {
        label: "执行JS代码",
        value: te.JS
      },
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
      {
        label: "对话框",
        value: te.Dialog
      }
    ], o = [
      {
        label: "视频",
        value: me.Video
      },
      {
        label: "弹窗文字",
        value: me.ShowText
      }
      // {
      //   label: '',
      //   value: '',
      // }
    ], c = [
      {
        label: "模态",
        value: "modal"
      },
      {
        label: "全屏",
        value: "full-screen"
      }
    ], g = () => {
      a.value.push({
        name: "",
        action: 0,
        value: "",
        params: "",
        where: {},
        extend: {}
      });
    }, m = (ee) => {
      a.value = a.value.filter((X) => X !== ee), V();
    }, p = v, V = () => {
      p("change", a.value);
    }, F = (ee) => {
      console.log("action change: ", ee), ee.action == te.JS && (ee.params = {
        url: "",
        action: ""
        // ExtendAction.Video,
      }, ee.value = ""), V();
    }, S = (ee, X) => {
      const E = Dl[ee];
      E && (X.value = E), V();
    }, z = [
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
    ], j = ae([]), I = () => {
      if (j.value.length >= 6) {
        ye.warning("最多只能添加6个属性");
        return;
      }
      j.value.push({
        prop: "",
        value: ""
      });
    }, r = (ee) => {
      const X = j.value.indexOf(ee);
      j.value.splice(X, 1);
    }, k = (ee) => {
      const X = {};
      j.value.forEach((E) => {
        X[E.prop] = E.value;
      }), ee.value = X, p("change", a.value);
    }, Z = (ee) => {
      const X = a.value[Number(ee)];
      X && X.value && typeof X.value == "object" && (j.value = Object.keys(X.value).map((E) => ({
        prop: E,
        value: X.value[E]
      })));
    };
    return (ee, X) => {
      const E = b("t-button"), s = b("t-select"), h = b("t-form-item"), G = b("t-input"), Y = b("t-col"), N = b("t-icon"), $ = b("t-row"), A = b("t-input-number"), y = b("t-textarea"), M = b("t-color-picker"), O = b("t-form"), Q = b("t-collapse-panel"), ue = b("t-collapse");
      return i(), R(K, null, [
        X[3] || (X[3] = x("br", null, null, -1)),
        e(E, {
          block: "",
          theme: "primary",
          onClick: g
        }, {
          default: l(() => X[0] || (X[0] = [
            J("添加事件")
          ])),
          _: 1
        }),
        e(ue, {
          class: "meta-collapse",
          "expand-mutex": "",
          onChange: Z
        }, {
          default: l(() => [
            (i(!0), R(K, null, oe(a.value, (U) => (i(), L(Q, { header: "事件" }, {
              headerRightContent: l(() => [
                e(E, {
                  size: "small",
                  variant: "outline",
                  theme: "danger",
                  style: { marginLeft: "8px" },
                  onClick: (_) => m(U)
                }, {
                  default: l(() => [
                    e(N, { name: "delete" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              default: l(() => [
                e(O, { labelAlign: "left" }, {
                  default: l(() => [
                    e(h, { label: "事件类型" }, {
                      default: l(() => [
                        e(s, {
                          modelValue: U.name,
                          "onUpdate:modelValue": (_) => U.name = _,
                          options: D,
                          onChange: V
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    e(h, { label: "事件行为" }, {
                      default: l(() => [
                        e(s, {
                          modelValue: U.action,
                          "onUpdate:modelValue": (_) => U.action = _,
                          options: C,
                          onChange: (_) => F(U)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                      ]),
                      _: 2
                    }, 1024),
                    U.action === B(te).Link ? (i(), L(h, {
                      key: 0,
                      label: "链接地址"
                    }, {
                      default: l(() => [
                        e(G, {
                          modelValue: U.value,
                          "onUpdate:modelValue": (_) => U.value = _,
                          clearable: "",
                          onChange: V
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : q("", !0),
                    U.action === B(te).SetProps ? (i(), R(K, { key: 1 }, [
                      e(h, { label: "目标" }, {
                        default: l(() => [
                          e(G, {
                            modelValue: U.params,
                            "onUpdate:modelValue": (_) => U.params = _,
                            placeholder: "可输入目标图元的ID/Tag",
                            clearable: "",
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      e($, { justify: "start" }, {
                        default: l(() => [
                          e(Y, { span: 5 }, {
                            default: l(() => X[1] || (X[1] = [
                              x("div", null, "属性", -1)
                            ])),
                            _: 1
                          }),
                          e(Y, { span: 5 }, {
                            default: l(() => X[2] || (X[2] = [
                              x("div", null, "值", -1)
                            ])),
                            _: 1
                          }),
                          e(Y, { span: 2 }, {
                            default: l(() => [
                              e(E, {
                                variant: "text",
                                onClick: I
                              }, {
                                default: l(() => [
                                  e(N, { name: "add" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      (i(!0), R(K, null, oe(j.value, (_, ne) => (i(), L($, {
                        key: ne,
                        justify: "start",
                        gutter: 4,
                        style: { "margin-bottom": "4px" }
                      }, {
                        default: l(() => [
                          e(Y, { span: 5 }, {
                            default: l(() => [
                              e(s, {
                                modelValue: _.prop,
                                "onUpdate:modelValue": (re) => _.prop = re,
                                options: z,
                                onChange: (re) => k(U)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(Y, { span: 5 }, {
                            default: l(() => [
                              e(G, {
                                modelValue: _.value,
                                "onUpdate:modelValue": (re) => _.value = re,
                                onChange: (re) => k(U)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 2
                          }, 1024),
                          e(Y, { span: 2 }, {
                            default: l(() => [
                              e(E, {
                                variant: "text",
                                onClick: (re) => r(_)
                              }, {
                                default: l(() => [
                                  e(N, { name: "delete" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ], 64)) : q("", !0),
                    [
                      B(te).PauseAnimate,
                      B(te).StopAnimate,
                      B(te).StartAnimate
                    ].includes(U.action) ? (i(), L(h, {
                      key: 2,
                      label: "目标"
                    }, {
                      default: l(() => [
                        e(G, {
                          modelValue: U.value,
                          "onUpdate:modelValue": (_) => U.value = _,
                          placeholder: "可输入目标图元的ID/Tag",
                          clearable: "",
                          onChange: V
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)) : q("", !0),
                    U.action === B(te).Dialog ? (i(), R(K, { key: 3 }, [
                      e(h, { label: "窗口标题" }, {
                        default: l(() => [
                          e(G, {
                            modelValue: U.value,
                            "onUpdate:modelValue": (_) => U.value = _,
                            clearable: "",
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      e(h, { label: "URL" }, {
                        default: l(() => [
                          e(G, {
                            modelValue: U.params,
                            "onUpdate:modelValue": (_) => U.params = _,
                            clearable: "",
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      U.extend ? (i(), L(h, {
                        key: 0,
                        label: "窗口宽度"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: U.extend.width,
                            "onUpdate:modelValue": (_) => U.extend.width = _,
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      U.extend ? (i(), L(h, {
                        key: 1,
                        label: "窗口高度"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: U.extend.height,
                            "onUpdate:modelValue": (_) => U.extend.height = _,
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      U.extend ? (i(), L(h, {
                        key: 2,
                        label: "X偏移"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: U.extend.x,
                            "onUpdate:modelValue": (_) => U.extend.x = _,
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0),
                      U.extend ? (i(), L(h, {
                        key: 3,
                        label: "Y偏移"
                      }, {
                        default: l(() => [
                          e(A, {
                            modelValue: U.extend.y,
                            "onUpdate:modelValue": (_) => U.extend.y = _,
                            onChange: V
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)) : q("", !0)
                    ], 64)) : U.action === B(te).JS ? (i(), R(K, { key: 4 }, [
                      e(h, { label: "扩展行为" }, {
                        default: l(() => [
                          e(s, {
                            modelValue: U.params.action,
                            "onUpdate:modelValue": (_) => U.params.action = _,
                            options: o,
                            onChange: (_) => S(_, U)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ]),
                        _: 2
                      }, 1024),
                      [B(me).Video, B(me).ShowText].includes(U.params.action) ? (i(), R(K, { key: 0 }, [
                        e(h, { label: "窗口标题" }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.title,
                              "onUpdate:modelValue": (_) => U.params.title = _,
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        U.params.action === B(me).Video ? (i(), L(h, {
                          key: 0,
                          label: "视频URL"
                        }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.url,
                              "onUpdate:modelValue": (_) => U.params.url = _,
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        U.params.action === B(me).ShowText ? (i(), L(h, {
                          key: 1,
                          label: "文本"
                        }, {
                          default: l(() => [
                            e(y, {
                              modelValue: U.params.text,
                              "onUpdate:modelValue": (_) => U.params.text = _
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        U.params ? (i(), L(h, {
                          key: 2,
                          label: "窗口宽度"
                        }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.width,
                              "onUpdate:modelValue": (_) => U.params.width = _,
                              placeholder: "示例：320, '500px', '80%'",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        U.params && U.params.action == B(me).ShowText ? (i(), L(h, {
                          key: 3,
                          label: "文本高度"
                        }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.height,
                              "onUpdate:modelValue": (_) => U.params.height = _,
                              placeholder: "示例：320, '500px', '80%'",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        U.params ? (i(), L(h, {
                          key: 4,
                          label: "对话框类型"
                        }, {
                          default: l(() => [
                            e(s, {
                              modelValue: U.params.mode,
                              "onUpdate:modelValue": (_) => U.params.mode = _,
                              clearable: "",
                              options: c
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        U.params ? (i(), L(h, {
                          key: 5,
                          label: "标题栏上间距"
                        }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.headerMarginTop,
                              "onUpdate:modelValue": (_) => U.params.headerMarginTop = _,
                              placeholder: "示例：'10px'",
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        U.params ? (i(), L(h, {
                          key: 6,
                          label: "内容下间距"
                        }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.contentPaddingBottom,
                              "onUpdate:modelValue": (_) => U.params.contentPaddingBottom = _,
                              placeholder: "示例：'10px'",
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        e(h, { label: "背景颜色" }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.backgroundColor,
                              "onUpdate:modelValue": (_) => U.params.backgroundColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(h, { label: "背景图片" }, {
                          default: l(() => [
                            e(G, {
                              modelValue: U.params.backgroundImageUrl,
                              "onUpdate:modelValue": (_) => U.params.backgroundImageUrl = _,
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(h, { label: "标题颜色" }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.titleColor,
                              "onUpdate:modelValue": (_) => U.params.titleColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        U.params.action === B(me).ShowText ? (i(), L(h, {
                          key: 7,
                          label: "文本颜色"
                        }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.textColor,
                              "onUpdate:modelValue": (_) => U.params.textColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : q("", !0),
                        e(h, { label: "控制栏背景颜色" }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.controlBarBackgroundColor,
                              "onUpdate:modelValue": (_) => U.params.controlBarBackgroundColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(h, { label: "控制栏按钮颜色" }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.controlColor,
                              "onUpdate:modelValue": (_) => U.params.controlColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(h, { label: "已播放进度颜色" }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.controlPlayProgressBarColor,
                              "onUpdate:modelValue": (_) => U.params.controlPlayProgressBarColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(h, { label: "已加载进度颜色" }, {
                          default: l(() => [
                            e(M, {
                              class: "w-full",
                              modelValue: U.params.controlLoadProgressBarColor,
                              "onUpdate:modelValue": (_) => U.params.controlLoadProgressBarColor = _,
                              "show-primary-color-preview": !1,
                              format: "CSS",
                              "color-modes": ["monochrome"],
                              clearable: "",
                              onChange: V
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ], 64)) : q("", !0)
                    ], 64)) : q("", !0)
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
}), Xa = /* @__PURE__ */ he(Ja, [["__scopeId", "data-v-94e1adb2"]]), Ka = { class: "" }, qa = { class: "props-panel" }, Za = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, et = { class: "props-panel" }, lt = { class: "props-panel" }, at = { class: "button__wrapper" }, tt = { class: "props-panel" }, sl = "meta2d_tmp_copy_string", ot = /* @__PURE__ */ ge({
  __name: "PenProps",
  setup(f) {
    const v = Ve(() => [
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
    ].filter((H) => H.slot == "image" ? a.value.name == H.slot : !0)), { selections: P } = je(), a = ae(), D = ae(), C = ae(1), o = Ve(() => {
      var H;
      return ((H = a.value) == null ? void 0 : H.name) == "line";
    });
    Le(() => {
      C.value = 1, c();
    });
    const c = () => {
      O.value = "", a.value = P.pen || {}, a.value.globalAlpha == null && (a.value.globalAlpha = 1), a.value.tags || (a.value.tags = []), D.value = meta2d.getPenRect(a.value), C.value == 2 && (["image"].includes(a.value.name) || (C.value = 1));
    }, g = Ve(() => {
      var H;
      return ((H = a.value) == null ? void 0 : H.name) != "combine" ? [] : a.value.children.map((t, w) => ({
        label: `状态${w + 1}`,
        value: t
      }));
    }), m = (H = !1) => {
      if (a.value.animateType == "x-custom" && a.value.pathFrames) {
        let t = a.value.pathAnimateControl;
        (!t || !t.play) && (a.value.pathAnimateControl = El(a.value, a.value.pathFrames), t = a.value.pathAnimateControl), H ? t.play() : t.stop();
        return;
      }
      H ? meta2d.startAnimate(a.value.id) : meta2d.stopAnimate(a.value.id);
    }, p = ae(!1), V = ae([]), F = () => {
      V.value = Pe(a.value.frames || []), p.value = !0;
    }, S = () => {
      console.log("custom frames: ", V.value), a.value.frames = Pe(V.value), p.value = !1, il(() => {
        V.value = [];
      });
    }, z = () => {
      V.value.push({
        duration: 100,
        globalAlpha: 1,
        penName: a.value.name
      });
    }, j = (H) => {
      const t = V.value.indexOf(H);
      t > -1 && V.value.splice(t, 1);
    }, I = Be(() => {
      var H;
      return (H = P.pen) == null ? void 0 : H.id;
    }, c), r = [void 0, [5, 5]], k = (H) => {
      const t = { id: a.value.id };
      if (t[H] = a.value[H], H === "dash" && (t.lineDash = r[t[H]]), H == "animateType") {
        console.log("animate type: ", t);
        const w = t.animateType, n = wl[w];
        t.frames = n;
      }
      console.log("change value: ", t), meta2d.setValue(t, { render: !0 }), console.log("meta2d: ", meta2d);
    }, Z = (H) => {
      const t = { id: a.value.id };
      t[H] = D.value[H], meta2d.setValue(t, { render: !0 });
    }, ee = () => {
      meta2d.top(), meta2d.render();
    }, X = () => {
      meta2d.bottom(), meta2d.render();
    }, E = () => {
      meta2d.up(), meta2d.render();
    }, s = () => {
      meta2d.down(), meta2d.render();
    };
    Ze(() => {
      I();
    });
    const h = ae(), { uploadValue: G, sizeLimit: Y, headers: N } = el(), $ = (H) => {
      var t;
      console.log("upload success: ", H), H.response && (a.value.image = H.response.url || ((t = H.response.data) == null ? void 0 : t.fileurl), k("image"));
    }, A = (H) => {
      console.log("upload fail: ", H);
    }, y = () => {
      Rl(a.value.id).then((H) => {
        console.log("copy id: ", H), ye.success({ content: "复制成功" });
      });
    }, M = (H) => {
      a.value.events = H;
    }, O = ae(""), Q = () => {
      const H = [], t = a.value.anchors, w = a.value.width, n = a.value.height;
      Array.isArray(t) && t.forEach((d) => {
        H.push({ x: d.x * w, y: d.y * n });
      }), console.log("path: ", H), O.value = JSON.stringify(H, null, 2);
    }, ue = () => {
      console.log("on copy: ", O.value), localStorage.setItem(sl, O.value);
    }, U = () => {
      console.log("create path frames: ", a.value);
      function H(t) {
        try {
          const w = JSON.parse(t);
          if (console.log("剪切板数据: ", w), Array.isArray(w)) {
            const n = w.map((d, T) => {
              if (T > 0) {
                const W = w[T - 1], de = d.x - W.x, se = d.y - W.y;
                return { x: de, y: se };
              }
            }).filter((d) => d);
            console.log("paths: ", n), a.value.pathFrames = n.map((d) => ({
              x: d.x,
              y: d.y,
              duration: 1e4
            }));
          }
          ye.success({ content: "生成成功" });
        } catch (w) {
          console.log("JSON 解析失败: ", w), ye.error({ content: "生成失败, 请检查操作是否正确" });
        }
      }
      if (!navigator.clipboard) {
        const t = localStorage.getItem(sl);
        if (t) {
          H(t);
          return;
        }
        ye.error({ content: "无法访问剪切板" });
        return;
      }
      navigator.clipboard.readText().then((t) => {
        H(t);
      }).catch((t) => {
        console.error("读取剪切板数据失败:", t), ye.error({ content: "生成失败, 无法访问剪切板" });
      });
    }, _ = ae(!1), ne = () => {
      _.value = !0;
    }, re = () => {
      _.value = !1;
    }, fe = (H) => {
      a.value.pathFrames.splice(H, 1);
    };
    return (H, t) => {
      const w = b("t-color-picker"), n = b("t-form-item"), d = b("t-option"), T = b("t-select"), W = b("t-input-number"), de = b("t-slider"), se = b("t-divider"), ve = b("t-switch"), be = b("t-input"), De = b("t-upload"), le = b("t-button"), pe = b("t-space"), we = b("t-form"), tl = b("t-tag"), yl = b("t-tooltip"), Ee = b("t-collapse-panel"), We = b("t-collapse"), Qe = b("t-icon"), xl = b("t-tag-input"), kl = b("t-typography-text"), ol = b("t-drawer");
      return i(), R("div", Ka, [
        a.value ? (i(), L(Ye, {
          key: 0,
          tabs: v.value,
          defaultValue: C.value,
          onChange: t[124] || (t[124] = (u) => C.value = u)
        }, Sl({
          pen: l(() => [
            x("div", qa, [
              e(we, { "label-align": "left" }, {
                default: l(() => [
                  e(n, {
                    label: "颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.color,
                        "onUpdate:modelValue": t[0] || (t[0] = (u) => a.value.color = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[1] || (t[1] = (u) => k("color"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "浮动颜色",
                    name: "hoverColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.hoverColor,
                        "onUpdate:modelValue": t[2] || (t[2] = (u) => a.value.hoverColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[3] || (t[3] = (u) => k("hoverColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "选中颜色",
                    name: "activeColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.activeColor,
                        "onUpdate:modelValue": t[4] || (t[4] = (u) => a.value.activeColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[5] || (t[5] = (u) => k("activeColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "背景",
                    name: "background"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.background,
                        "onUpdate:modelValue": t[6] || (t[6] = (u) => a.value.background = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[7] || (t[7] = (u) => k("background"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "线条",
                    name: "dash"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.dash,
                        "onUpdate:modelValue": t[8] || (t[8] = (u) => a.value.dash = u),
                        onChange: t[9] || (t[9] = (u) => k("dash"))
                      }, {
                        default: l(() => [
                          (i(), L(d, {
                            key: 0,
                            value: 0,
                            label: "实线"
                          })),
                          (i(), L(d, {
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
                  e(n, {
                    label: "线条宽度",
                    name: "lineWidth"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.lineWidth,
                        "onUpdate:modelValue": t[10] || (t[10] = (u) => a.value.lineWidth = u),
                        onChange: t[11] || (t[11] = (u) => k("lineWidth"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "圆角",
                    name: "borderRadius"
                  }, {
                    default: l(() => [
                      e(W, {
                        min: 0,
                        max: 1,
                        step: 0.01,
                        modelValue: a.value.borderRadius,
                        "onUpdate:modelValue": t[12] || (t[12] = (u) => a.value.borderRadius = u),
                        onChange: t[13] || (t[13] = (u) => k("borderRadius"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "不透明度",
                    name: "globalAlpha"
                  }, {
                    default: l(() => [
                      e(de, {
                        modelValue: a.value.globalAlpha,
                        "onUpdate:modelValue": t[14] || (t[14] = (u) => a.value.globalAlpha = u),
                        min: 0,
                        max: 1,
                        step: 0.01,
                        onChange: t[15] || (t[15] = (u) => k("globalAlpha"))
                      }, null, 8, ["modelValue"]),
                      x("span", Za, ce(a.value.globalAlpha), 1)
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "阴影颜色",
                    name: "shadowColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.shadowColor,
                        "onUpdate:modelValue": t[16] || (t[16] = (u) => a.value.shadowColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[17] || (t[17] = (u) => k("shadowColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "阴影模糊",
                    name: "shadowBlur"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.shadowBlur,
                        "onUpdate:modelValue": t[18] || (t[18] = (u) => a.value.shadowBlur = u),
                        min: 0,
                        onChange: t[19] || (t[19] = (u) => k("shadowBlur"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "阴影X偏移",
                    name: "shadowOffsetX"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.shadowOffsetX,
                        "onUpdate:modelValue": t[20] || (t[20] = (u) => a.value.shadowOffsetX = u),
                        onChange: t[21] || (t[21] = (u) => k("shadowOffsetX"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "阴影Y偏移",
                    name: "shadowOffsetY"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.shadowOffsetY,
                        "onUpdate:modelValue": t[22] || (t[22] = (u) => a.value.shadowOffsetY = u),
                        onChange: t[23] || (t[23] = (u) => k("shadowOffsetY"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(se),
                  e(n, {
                    label: "文字阴影",
                    name: "textHasShadow"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.textHasShadow,
                        "onUpdate:modelValue": t[24] || (t[24] = (u) => a.value.textHasShadow = u),
                        onChange: t[25] || (t[25] = (u) => k("textHasShadow"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "文本",
                    name: "text"
                  }, {
                    default: l(() => [
                      e(be, {
                        modelValue: a.value.text,
                        "onUpdate:modelValue": t[26] || (t[26] = (u) => a.value.text = u),
                        clearable: "",
                        onChange: t[27] || (t[27] = (u) => k("text"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "字体",
                    name: "fontSize"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.fontSize,
                        "onUpdate:modelValue": t[28] || (t[28] = (u) => a.value.fontSize = u),
                        onChange: t[29] || (t[29] = (u) => k("fontSize"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "文字颜色类型",
                    name: "textType"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.textType,
                        "onUpdate:modelValue": t[30] || (t[30] = (u) => a.value.textType = u),
                        onChange: t[31] || (t[31] = (u) => k("textType"))
                      }, {
                        default: l(() => [
                          e(d, {
                            key: "hex",
                            value: 0,
                            label: "纯色"
                          }),
                          e(d, {
                            key: "rgb",
                            value: 1,
                            label: "线性渐变"
                          }),
                          e(d, {
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
                  [1, 2].includes(a.value.textType) ? (i(), L(n, {
                    key: 0,
                    label: "文字渐变",
                    name: "textGradientColors"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.textGradientColors,
                        "onUpdate:modelValue": t[32] || (t[32] = (u) => a.value.textGradientColors = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["linear-gradient"],
                        clearable: "",
                        onChange: t[33] || (t[33] = (u) => k("textGradientColors"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })) : (i(), L(n, {
                    key: 1,
                    label: "文字颜色",
                    name: "textColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.textColor,
                        "onUpdate:modelValue": t[34] || (t[34] = (u) => a.value.textColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[35] || (t[35] = (u) => k("textColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })),
                  e(n, {
                    label: "文本风格",
                    name: "fontStyle"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.fontStyle,
                        "onUpdate:modelValue": t[36] || (t[36] = (u) => a.value.fontStyle = u),
                        onChange: t[37] || (t[37] = (u) => k("fontStyle"))
                      }, {
                        default: l(() => [
                          e(d, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(d, {
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
                  e(n, {
                    label: "文本粗细",
                    name: "fontWeight"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.fontWeight,
                        "onUpdate:modelValue": t[38] || (t[38] = (u) => a.value.fontWeight = u),
                        onChange: t[39] || (t[39] = (u) => k("fontWeight"))
                      }, {
                        default: l(() => [
                          e(d, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(d, {
                            key: "bold",
                            value: "bold",
                            label: "加粗"
                          }),
                          e(d, {
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
                  e(n, {
                    label: "换行",
                    name: "whiteSpace"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.whiteSpace,
                        "onUpdate:modelValue": t[40] || (t[40] = (u) => a.value.whiteSpace = u),
                        onChange: t[41] || (t[41] = (u) => k("whiteSpace"))
                      }, {
                        default: l(() => [
                          e(d, {
                            key: "normal",
                            value: "normal",
                            label: "常规"
                          }),
                          e(d, {
                            key: "nowrap",
                            value: "nowrap",
                            label: "不换行"
                          }),
                          e(d, {
                            key: "pre-line",
                            value: "pre-line",
                            label: "换行符换行"
                          }),
                          e(d, {
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
                  e(n, {
                    label: "超出省略",
                    name: "ellipsis"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.ellipsis,
                        "onUpdate:modelValue": t[42] || (t[42] = (u) => a.value.ellipsis = u),
                        onChange: t[43] || (t[43] = (u) => k("ellipsis"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "下划线",
                    name: "textDecoration"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.textDecoration,
                        "onUpdate:modelValue": t[44] || (t[44] = (u) => a.value.textDecoration = u),
                        onChange: t[45] || (t[45] = (u) => k("textDecoration"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "下划线颜色",
                    name: "textDecorationColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.textDecorationColor,
                        "onUpdate:modelValue": t[46] || (t[46] = (u) => a.value.textDecorationColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[47] || (t[47] = (u) => k("textDecorationColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "删除线",
                    name: "textStrickout"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.textStrickout,
                        "onUpdate:modelValue": t[48] || (t[48] = (u) => a.value.textStrickout = u),
                        onChange: t[49] || (t[49] = (u) => k("textStrickout"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "删除线颜色",
                    name: "textStrickoutColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.textStrickoutColor,
                        "onUpdate:modelValue": t[50] || (t[50] = (u) => a.value.textStrickoutColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[51] || (t[51] = (u) => k("textStrickoutColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "文字水平对齐",
                    name: "textAlign"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.textAlign,
                        "onUpdate:modelValue": t[52] || (t[52] = (u) => a.value.textAlign = u),
                        onChange: t[53] || (t[53] = (u) => k("textAlign"))
                      }, {
                        default: l(() => [
                          e(d, {
                            key: "left",
                            value: "left",
                            label: "左对齐"
                          }),
                          e(d, {
                            key: "center",
                            value: "center",
                            label: "居中"
                          }),
                          e(d, {
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
                  e(n, {
                    label: "文字垂直对齐",
                    name: "textBaseline"
                  }, {
                    default: l(() => [
                      e(T, {
                        modelValue: a.value.textBaseline,
                        "onUpdate:modelValue": t[54] || (t[54] = (u) => a.value.textBaseline = u),
                        onChange: t[55] || (t[55] = (u) => k("textBaseline"))
                      }, {
                        default: l(() => [
                          e(d, {
                            key: "top",
                            value: "top",
                            label: "顶部对齐"
                          }),
                          e(d, {
                            key: "middle",
                            value: "middle",
                            label: "居中"
                          }),
                          e(d, {
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
                  e(se),
                  e(n, {
                    label: "X",
                    name: "x"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: D.value.x,
                        "onUpdate:modelValue": t[56] || (t[56] = (u) => D.value.x = u),
                        onChange: t[57] || (t[57] = (u) => Z("x"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "Y",
                    name: "y"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: D.value.y,
                        "onUpdate:modelValue": t[58] || (t[58] = (u) => D.value.y = u),
                        onChange: t[59] || (t[59] = (u) => Z("y"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "宽",
                    name: "width"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: D.value.width,
                        "onUpdate:modelValue": t[60] || (t[60] = (u) => D.value.width = u),
                        onChange: t[61] || (t[61] = (u) => Z("width"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "高",
                    name: "height"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: D.value.height,
                        "onUpdate:modelValue": t[62] || (t[62] = (u) => D.value.height = u),
                        onChange: t[63] || (t[63] = (u) => Z("height"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "锁定宽高比",
                    name: "ratio"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.ratio,
                        "onUpdate:modelValue": t[64] || (t[64] = (u) => a.value.ratio = u),
                        onChange: t[65] || (t[65] = (u) => k("ratio"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "旋转角度",
                    name: "rotate"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.rotate,
                        "onUpdate:modelValue": t[66] || (t[66] = (u) => a.value.rotate = u),
                        onChange: t[67] || (t[67] = (u) => k("rotate"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(se),
                  e(n, {
                    label: "进度",
                    name: "progress"
                  }, {
                    default: l(() => [
                      e(W, {
                        modelValue: a.value.progress,
                        "onUpdate:modelValue": t[68] || (t[68] = (u) => a.value.progress = u),
                        step: 0.1,
                        min: 0,
                        max: 1,
                        onChange: t[69] || (t[69] = (u) => k("progress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "进度颜色",
                    name: "progressColor"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.progressColor,
                        "onUpdate:modelValue": t[70] || (t[70] = (u) => a.value.progressColor = u),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        clearable: "",
                        onChange: t[71] || (t[71] = (u) => k("progressColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "渐变颜色",
                    name: "progressGradientColors"
                  }, {
                    default: l(() => [
                      e(w, {
                        class: "w-full",
                        modelValue: a.value.progressGradientColors,
                        "onUpdate:modelValue": t[72] || (t[72] = (u) => a.value.progressGradientColors = u),
                        "show-primary-color-preview": !1,
                        clearable: "",
                        format: "CSS",
                        "color-modes": ["linear-gradient"],
                        onChange: t[73] || (t[73] = (u) => k("progressGradientColors"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "垂直进度",
                    name: "verticalProgress"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.verticalProgress,
                        "onUpdate:modelValue": t[74] || (t[74] = (u) => a.value.verticalProgress = u),
                        onChange: t[75] || (t[75] = (u) => k("verticalProgress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "反向进度",
                    name: "reverseProgress"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.reverseProgress,
                        "onUpdate:modelValue": t[76] || (t[76] = (u) => a.value.reverseProgress = u),
                        onChange: t[77] || (t[77] = (u) => k("reverseProgress"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "水平翻转",
                    name: "flipX"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.flipX,
                        "onUpdate:modelValue": t[78] || (t[78] = (u) => a.value.flipX = u),
                        onChange: t[79] || (t[79] = (u) => k("flipX"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "垂直翻转",
                    name: "flipY"
                  }, {
                    default: l(() => [
                      e(ve, {
                        modelValue: a.value.flipY,
                        "onUpdate:modelValue": t[80] || (t[80] = (u) => a.value.flipY = u),
                        onChange: t[81] || (t[81] = (u) => k("flipY"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(se, null, {
                    default: l(() => t[127] || (t[127] = [
                      J("图片")
                    ])),
                    _: 1
                  }),
                  e(n, { label: "背景图片" }, {
                    default: l(() => [
                      e(De, {
                        ref_key: "uploadRef",
                        ref: h,
                        modelValue: B(G),
                        "onUpdate:modelValue": t[82] || (t[82] = (u) => xe(G) ? G.value = u : null),
                        action: H.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: B(N),
                        name: "object",
                        sizeLimit: B(Y),
                        theme: "image",
                        tips: "请选择单张小于1MB的图片上传",
                        accept: "image/*",
                        onFail: A,
                        onSuccess: $
                      }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "背景图片地址",
                    name: "backgroundImage"
                  }, {
                    default: l(() => [
                      e(be, {
                        modelValue: a.value.image,
                        "onUpdate:modelValue": t[83] || (t[83] = (u) => a.value.image = u),
                        clearable: "",
                        onChange: t[84] || (t[84] = (u) => k("image"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(se),
                  a.value.name == "combine" && a.value.showChild != null ? (i(), R(K, { key: 2 }, [
                    e(n, {
                      label: "",
                      name: "status"
                    }, {
                      default: l(() => [
                        e(T, {
                          modelValue: a.value.showChild,
                          "onUpdate:modelValue": t[85] || (t[85] = (u) => a.value.showChild = u),
                          onChange: t[86] || (t[86] = (u) => k("showChild"))
                        }, {
                          default: l(() => [
                            (i(!0), R(K, null, oe(g.value, (u, $e) => (i(), L(d, {
                              key: u.value,
                              value: $e,
                              label: u.label
                            }, null, 8, ["value", "label"]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(se)
                  ], 64)) : q("", !0),
                  e(pe, { size: "4px" }, {
                    default: l(() => [
                      e(le, { onClick: ee }, {
                        default: l(() => t[128] || (t[128] = [
                          J("置顶")
                        ])),
                        _: 1
                      }),
                      e(le, { onClick: X }, {
                        default: l(() => t[129] || (t[129] = [
                          J("置底")
                        ])),
                        _: 1
                      }),
                      e(le, { onClick: E }, {
                        default: l(() => t[130] || (t[130] = [
                          J("上一层")
                        ])),
                        _: 1
                      }),
                      e(le, { onClick: s }, {
                        default: l(() => t[131] || (t[131] = [
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
            x("div", lt, [
              e(We, { "default-value": [0] }, {
                default: l(() => [
                  e(Ee, {
                    header: "动画",
                    name: "animate"
                  }, {
                    default: l(() => [
                      e(we, { "label-align": "left" }, {
                        default: l(() => [
                          o.value ? (i(), R(K, { key: 0 }, [
                            e(n, {
                              label: "动画效果",
                              name: "lineAnimateType"
                            }, {
                              default: l(() => [
                                e(T, {
                                  modelValue: a.value.lineAnimateType,
                                  "onUpdate:modelValue": t[92] || (t[92] = (u) => a.value.lineAnimateType = u),
                                  clearable: "",
                                  onChange: t[93] || (t[93] = (u) => k("lineAnimateType"))
                                }, {
                                  default: l(() => [
                                    (i(!0), R(K, null, oe(B(hl), (u) => (i(), L(d, {
                                      key: u.value,
                                      value: u.value,
                                      label: u.label
                                    }, null, 8, ["value", "label"]))), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            e(n, {
                              label: "反向流动",
                              name: "reverse"
                            }, {
                              default: l(() => [
                                e(ve, {
                                  modelValue: a.value.animateReverse,
                                  "onUpdate:modelValue": t[94] || (t[94] = (u) => a.value.animateReverse = u),
                                  onChange: t[95] || (t[95] = (u) => k("animateReverse"))
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            e(n, {
                              label: "线宽",
                              name: "animateLineWidth"
                            }, {
                              default: l(() => [
                                e(W, {
                                  modelValue: a.value.animateLineWidth,
                                  "onUpdate:modelValue": t[96] || (t[96] = (u) => a.value.animateLineWidth = u),
                                  onChange: t[97] || (t[97] = (u) => k("animateLineWidth"))
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            e(n, {
                              label: "速度",
                              name: "animateSpan"
                            }, {
                              default: l(() => [
                                e(W, {
                                  modelValue: a.value.animateSpan,
                                  "onUpdate:modelValue": t[98] || (t[98] = (u) => a.value.animateSpan = u),
                                  min: 1,
                                  max: 5,
                                  onChange: t[99] || (t[99] = (u) => k("animateSpan"))
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            e(n, {
                              label: "颜色",
                              name: "color"
                            }, {
                              default: l(() => [
                                e(w, {
                                  class: "w-full",
                                  modelValue: a.value.animateColor,
                                  "onUpdate:modelValue": t[100] || (t[100] = (u) => a.value.animateColor = u),
                                  "show-primary-color-preview": !1,
                                  format: "CSS",
                                  "color-modes": ["monochrome"],
                                  onChange: t[101] || (t[101] = (u) => k("animateColor"))
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            e(n, {
                              label: "动画发光",
                              name: "animateShadow"
                            }, {
                              default: l(() => [
                                e(ve, {
                                  modelValue: a.value.animateShadow,
                                  "onUpdate:modelValue": t[102] || (t[102] = (u) => a.value.animateShadow = u),
                                  onChange: t[103] || (t[103] = (u) => k("animateShadow"))
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            e(n, {
                              label: "发光颜色",
                              name: "animateShadowColor"
                            }, {
                              default: l(() => [
                                e(w, {
                                  class: "w-full",
                                  modelValue: a.value.animateShadowColor,
                                  "onUpdate:modelValue": t[104] || (t[104] = (u) => a.value.animateShadowColor = u),
                                  "show-primary-color-preview": !1,
                                  format: "CSS",
                                  "color-modes": ["monochrome"],
                                  onChange: t[105] || (t[105] = (u) => k("animateShadowColor"))
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ], 64)) : (i(), R(K, { key: 1 }, [
                            e(n, {
                              label: "动画效果",
                              name: "animateType"
                            }, {
                              default: l(() => [
                                e(T, {
                                  modelValue: a.value.animateType,
                                  "onUpdate:modelValue": t[106] || (t[106] = (u) => a.value.animateType = u),
                                  clearable: "",
                                  onChange: t[107] || (t[107] = (u) => k("animateType"))
                                }, {
                                  default: l(() => [
                                    (i(!0), R(K, null, oe(B(Vl), (u) => (i(), L(d, {
                                      key: u.value,
                                      value: u.value,
                                      label: u.label
                                    }, null, 8, ["value", "label"]))), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            a.value.animateType == "x-custom" ? (i(), L(n, {
                              key: 0,
                              label: "自定义动画帧"
                            }, {
                              default: l(() => {
                                var u;
                                return [
                                  x("div", at, [
                                    e(le, {
                                      variant: "text",
                                      theme: "primary",
                                      onClick: F
                                    }, {
                                      default: l(() => t[132] || (t[132] = [
                                        J("编辑 ")
                                      ])),
                                      _: 1
                                    }),
                                    t[136] || (t[136] = x("br", null, null, -1)),
                                    e(tl, {
                                      theme: "danger",
                                      style: { "margin-left": "20px" }
                                    }, {
                                      default: l(() => t[133] || (t[133] = [
                                        J("或者")
                                      ])),
                                      _: 1
                                    }),
                                    e(yl, { content: "选中线条提取路径后复制，会覆盖已设置的动画" }, {
                                      default: l(() => [
                                        e(le, {
                                          variant: "text",
                                          theme: "primary",
                                          onClick: U
                                        }, {
                                          default: l(() => t[134] || (t[134] = [
                                            J(" 从剪切板生成路径动画 ")
                                          ])),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    (u = a.value.pathFrames) != null && u.length ? (i(), L(le, {
                                      key: 0,
                                      variant: "text",
                                      theme: "primary",
                                      onClick: ne
                                    }, {
                                      default: l(() => t[135] || (t[135] = [
                                        J("编辑路径 ")
                                      ])),
                                      _: 1
                                    })) : q("", !0)
                                  ])
                                ];
                              }),
                              _: 1
                            })) : q("", !0)
                          ], 64)),
                          e(n, {
                            label: "自动播放",
                            name: "autoPlay"
                          }, {
                            default: l(() => [
                              e(ve, {
                                modelValue: a.value.autoPlay,
                                "onUpdate:modelValue": t[108] || (t[108] = (u) => a.value.autoPlay = u),
                                onChange: t[109] || (t[109] = (u) => k("autoPlay"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(n, {
                            label: "循环次数",
                            name: "animateCycle"
                          }, {
                            default: l(() => [
                              e(W, {
                                modelValue: a.value.animateCycle,
                                "onUpdate:modelValue": t[110] || (t[110] = (u) => a.value.animateCycle = u),
                                min: 0,
                                onChange: t[111] || (t[111] = (u) => k("animateCycle"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(n, {
                            label: "保持动画状态",
                            name: "keepAnimateState"
                          }, {
                            default: l(() => [
                              e(ve, {
                                modelValue: a.value.keepAnimateState,
                                "onUpdate:modelValue": t[112] || (t[112] = (u) => a.value.keepAnimateState = u),
                                onChange: t[113] || (t[113] = (u) => k("keepAnimateState"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(se),
                          e(pe, null, {
                            default: l(() => [
                              e(le, {
                                onClick: t[114] || (t[114] = (u) => m(!0))
                              }, {
                                default: l(() => t[137] || (t[137] = [
                                  J("播放")
                                ])),
                                _: 1
                              }),
                              e(le, {
                                onClick: t[115] || (t[115] = (u) => m())
                              }, {
                                default: l(() => t[138] || (t[138] = [
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
                  }),
                  a.value.name == "video" ? (i(), L(Ee, {
                    key: 0,
                    header: "视频"
                  }, {
                    default: l(() => [
                      e(we, { "label-align": "left" }, {
                        default: l(() => [
                          e(n, {
                            label: "视频地址",
                            name: "video"
                          }, {
                            default: l(() => [
                              e(be, {
                                modelValue: a.value.video,
                                "onUpdate:modelValue": t[116] || (t[116] = (u) => a.value.video = u),
                                placeholder: "视频地址不能为空",
                                clearable: "",
                                onChange: t[117] || (t[117] = (u) => k("video"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          e(n, {
                            label: "自动播放",
                            name: "autoPlay"
                          }, {
                            default: l(() => [
                              e(ve, {
                                modelValue: a.value.autoPlay,
                                "onUpdate:modelValue": t[118] || (t[118] = (u) => a.value.autoPlay = u),
                                onChange: t[119] || (t[119] = (u) => k("autoPlay"))
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : q("", !0)
                ]),
                _: 1
              })
            ])
          ]),
          struct: l(() => [
            Ge(H.$slots, "struct", { pen: a.value }, void 0, !0)
          ]),
          data: l(() => [
            x("div", tt, [
              e(we, { "label-align": "left" }, {
                default: l(() => [
                  e(n, {
                    label: "ID",
                    name: "data"
                  }, {
                    default: l(() => [
                      e(tl, {
                        maxWidth: "100%",
                        style: { flex: "1", width: "0" }
                      }, {
                        default: l(() => [
                          J(ce(a.value.id), 1)
                        ]),
                        _: 1
                      }),
                      e(le, {
                        theme: "primary",
                        variant: "text",
                        style: { "margin-left": "10px" },
                        onClick: y
                      }, {
                        default: l(() => [
                          e(Qe, { name: "copy" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "描述",
                    name: "description"
                  }, {
                    default: l(() => [
                      e(be, {
                        modelValue: a.value.description,
                        "onUpdate:modelValue": t[120] || (t[120] = (u) => a.value.description = u),
                        maxlength: "50",
                        clearable: "",
                        onChange: t[121] || (t[121] = (u) => k("description"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(n, {
                    label: "标签",
                    name: "tags"
                  }, {
                    default: l(() => [
                      e(xl, {
                        modelValue: a.value.tags,
                        "onUpdate:modelValue": t[122] || (t[122] = (u) => a.value.tags = u),
                        clearable: "",
                        placeholder: "按回车添加标签，最多10个",
                        max: 10,
                        onChange: t[123] || (t[123] = (u) => k("tags"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  a.value.name == "line" ? (i(), R(K, { key: 0 }, [
                    e(n, {
                      label: "",
                      name: "description"
                    }, {
                      default: l(() => [
                        e(le, {
                          theme: "primary",
                          onClick: Q
                        }, {
                          default: l(() => t[139] || (t[139] = [
                            J("提取轨迹")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    O.value ? (i(), L(n, { key: 0 }, {
                      default: l(() => [
                        e(kl, {
                          code: "",
                          copyable: { onCopy: ue }
                        }, {
                          default: l(() => [
                            J(ce(O.value), 1)
                          ]),
                          _: 1
                        }, 8, ["copyable"])
                      ]),
                      _: 1
                    })) : q("", !0)
                  ], 64)) : q("", !0)
                ]),
                _: 1
              })
            ])
          ]),
          event: l(() => [
            e(Xa, {
              defaultEventsValue: a.value.events,
              onChange: M
            }, null, 8, ["defaultEventsValue"])
          ]),
          _: 2
        }, [
          ["image"].includes(a.value.name) ? {
            name: "image",
            fn: l(() => [
              x("div", et, [
                e(we, { "label-align": "left" }, {
                  default: l(() => [
                    e(n, {
                      label: "图片上传",
                      name: "image"
                    }, {
                      default: l(() => [
                        e(De, {
                          ref_key: "uploadRef",
                          ref: h,
                          modelValue: B(G),
                          "onUpdate:modelValue": t[87] || (t[87] = (u) => xe(G) ? G.value = u : null),
                          action: H.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                          headers: B(N),
                          name: "object",
                          sizeLimit: B(Y),
                          theme: "image",
                          tips: "请选择单张小于1MB的图片上传",
                          accept: "image/*",
                          onFail: A,
                          onSuccess: $
                        }, null, 8, ["modelValue", "action", "headers", "sizeLimit"])
                      ]),
                      _: 1
                    }),
                    e(n, {
                      label: "图片地址",
                      name: "image"
                    }, {
                      default: l(() => [
                        e(be, {
                          modelValue: a.value.image,
                          "onUpdate:modelValue": t[88] || (t[88] = (u) => a.value.image = u),
                          clearable: "",
                          onChange: t[89] || (t[89] = (u) => k("image"))
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    e(n, {
                      label: "保持比例",
                      name: "imageRatio"
                    }, {
                      default: l(() => [
                        e(ve, {
                          modelValue: a.value.imageRatio,
                          "onUpdate:modelValue": t[90] || (t[90] = (u) => a.value.imageRatio = u),
                          onChange: t[91] || (t[91] = (u) => k("imageRatio"))
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
        ]), 1032, ["tabs", "defaultValue"])) : q("", !0),
        e(ol, {
          visible: p.value,
          "onUpdate:visible": t[125] || (t[125] = (u) => p.value = u),
          header: "自定义动画帧",
          size: "20%",
          onConfirm: S
        }, {
          default: l(() => [
            e(le, {
              block: "",
              theme: "primary",
              onClick: z
            }, {
              default: l(() => t[140] || (t[140] = [
                J("新增动画帧")
              ])),
              _: 1
            }),
            e(We, {
              class: "meta-collapse",
              "expand-mutex": ""
            }, {
              default: l(() => [
                (i(!0), R(K, null, oe(V.value, (u) => (i(), L(Ee, { header: "动画帧" }, {
                  headerRightContent: l(() => [
                    e(le, {
                      size: "small",
                      variant: "outline",
                      theme: "danger",
                      style: { marginLeft: "8px" },
                      onClick: ($e) => j(u)
                    }, {
                      default: l(() => [
                        e(Qe, { name: "delete" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: l(() => [
                    e(Cl, {
                      data: u,
                      statusList: g.value
                    }, null, 8, ["data", "statusList"])
                  ]),
                  _: 2
                }, 1024))), 256))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["visible"]),
        e(ol, {
          visible: _.value,
          "onUpdate:visible": t[126] || (t[126] = (u) => _.value = u),
          header: "自定义路径",
          size: "20%",
          onConfirm: re
        }, {
          default: l(() => [
            a.value && a.value.pathFrames ? (i(), L(We, {
              key: 0,
              class: "meta-collapse",
              "expand-mutex": ""
            }, {
              default: l(() => [
                (i(!0), R(K, null, oe(a.value.pathFrames, (u, $e) => (i(), L(Ee, {
                  header: `路径-${$e + 1}`
                }, {
                  headerRightContent: l(() => [
                    e(le, {
                      size: "small",
                      variant: "outline",
                      theme: "danger",
                      style: { marginLeft: "8px" },
                      onClick: (Ue) => fe($e)
                    }, {
                      default: l(() => [
                        e(Qe, { name: "delete" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  default: l(() => [
                    e(we, { "label-align": "left" }, {
                      default: l(() => [
                        e(n, {
                          label: "时长(ms)",
                          name: "duration"
                        }, {
                          default: l(() => [
                            e(W, {
                              modelValue: u.duration,
                              "onUpdate:modelValue": (Ue) => u.duration = Ue,
                              min: 0
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(n, {
                          label: "偏移X",
                          name: "x"
                        }, {
                          default: l(() => [
                            e(W, {
                              modelValue: u.x,
                              "onUpdate:modelValue": (Ue) => u.x = Ue,
                              placeholder: "px"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024),
                        e(n, {
                          label: "偏移Y",
                          name: "y"
                        }, {
                          default: l(() => [
                            e(W, {
                              modelValue: u.y,
                              "onUpdate:modelValue": (Ue) => u.y = Ue,
                              placeholder: "px"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["header"]))), 256))
              ]),
              _: 1
            })) : q("", !0)
          ]),
          _: 1
        }, 8, ["visible"])
      ]);
    };
  }
}), nt = /* @__PURE__ */ he(ot, [["__scopeId", "data-v-90fe218d"]]), dt = { class: "props-panel" }, ut = {
  class: "ml-16",
  style: { width: "50px", "line-height": "30px" }
}, rt = { class: "props-panel" }, st = /* @__PURE__ */ ge({
  __name: "PensProps",
  setup(f) {
    const v = [
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
    ], { selections: P } = je(), a = ae({
      globalAlpha: 1
    }), D = ae();
    Le(() => {
      C();
    });
    const C = () => {
      D.value = meta2d.getPenRect(a.value);
    }, o = Ve(() => {
      var E;
      return (E = P.pens) == null ? void 0 : E.every((s) => s.type === 1);
    }), c = Ve(() => {
      var E;
      return (E = P.pens) == null ? void 0 : E.every((s) => !s.type);
    }), g = Ve(() => {
      var E;
      return ((E = P.pens) == null ? void 0 : E.length) || 0;
    }), m = Be(() => P.pens, C), p = [void 0, [5, 5]], V = (E) => {
      var s;
      if ((s = P.pens) != null && s.length) {
        const h = a.value[E];
        P.pens.forEach((G) => {
          const Y = { id: G.id };
          if (Y[E] = h, E === "dash")
            Y.lineDash = p[Y[E]];
          else if (E == "animateType") {
            const N = Y.animateType, $ = wl[N];
            Y.frames = $;
          }
          meta2d.setValue(Y, { render: !1 });
        }), meta2d.render();
      }
    }, F = (E = !1) => {
      var s;
      (s = P.pens) == null || s.forEach((h) => {
        E ? meta2d.startAnimate(h.id) : meta2d.stopAnimate(h.id);
      });
    }, S = [
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
    ], z = (E) => {
      const s = P.pens;
      s != null && s.length && meta2d.alignNodes(E.value, s);
    };
    Ze(() => {
      m();
    });
    const j = ae(!1), I = ae([]), r = () => {
      I.value = Pe(a.value.frames || []), j.value = !0;
    }, k = () => {
      a.value.frames = Pe(I.value), V("frames"), j.value = !1, il(() => {
        I.value = [];
      });
    }, Z = () => {
      I.value.push({
        duration: 100,
        globalAlpha: 1
      });
    }, ee = (E) => {
      const s = I.value.indexOf(E);
      s > -1 && I.value.splice(s, 1);
    }, X = () => {
      meta2d.inactive();
    };
    return (E, s) => {
      const h = b("t-input"), G = b("t-form-item"), Y = b("t-color-picker"), N = b("t-option"), $ = b("t-select"), A = b("t-input-number"), y = b("t-slider"), M = b("t-divider"), O = b("t-icon"), Q = b("t-button"), ue = b("t-collapse-panel"), U = b("t-collapse"), _ = b("t-tooltip"), ne = b("t-space"), re = b("t-form"), fe = b("t-alert"), H = b("t-switch"), t = b("t-statistic"), w = b("t-drawer");
      return i(), L(Ye, { tabs: v }, {
        "pen-props": l(() => [
          x("div", dt, [
            a.value ? (i(), L(re, {
              key: 0,
              "label-align": "left"
            }, {
              default: l(() => [
                e(G, {
                  label: "文本",
                  name: "text"
                }, {
                  default: l(() => [
                    e(h, {
                      modelValue: a.value.text,
                      "onUpdate:modelValue": s[0] || (s[0] = (n) => a.value.text = n),
                      onChange: s[1] || (s[1] = (n) => V("text"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(G, {
                  label: "颜色",
                  name: "color"
                }, {
                  default: l(() => [
                    e(Y, {
                      class: "w-full",
                      modelValue: a.value.color,
                      "onUpdate:modelValue": s[2] || (s[2] = (n) => a.value.color = n),
                      "show-primary-color-preview": !1,
                      format: "CSS",
                      "color-modes": ["monochrome"],
                      onChange: s[3] || (s[3] = (n) => V("color"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(G, {
                  label: "背景",
                  name: "background"
                }, {
                  default: l(() => [
                    e(Y, {
                      class: "w-full",
                      modelValue: a.value.background,
                      "onUpdate:modelValue": s[4] || (s[4] = (n) => a.value.background = n),
                      "show-primary-color-preview": !1,
                      format: "CSS",
                      "color-modes": ["monochrome"],
                      onChange: s[5] || (s[5] = (n) => V("background"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(G, {
                  label: "线条",
                  name: "dash"
                }, {
                  default: l(() => [
                    e($, {
                      modelValue: a.value.dash,
                      "onUpdate:modelValue": s[6] || (s[6] = (n) => a.value.dash = n),
                      onChange: s[7] || (s[7] = (n) => V("dash"))
                    }, {
                      default: l(() => [
                        (i(), L(N, {
                          key: 0,
                          value: 0,
                          label: "实线"
                        })),
                        (i(), L(N, {
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
                e(G, {
                  label: "线条宽度",
                  name: "lineWidth"
                }, {
                  default: l(() => [
                    e(A, {
                      modelValue: a.value.lineWidth,
                      "onUpdate:modelValue": s[8] || (s[8] = (n) => a.value.lineWidth = n),
                      onChange: s[9] || (s[9] = (n) => V("lineWidth"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(G, {
                  label: "圆角",
                  name: "borderRadius"
                }, {
                  default: l(() => [
                    e(A, {
                      min: 0,
                      max: 1,
                      step: 0.01,
                      modelValue: a.value.borderRadius,
                      "onUpdate:modelValue": s[10] || (s[10] = (n) => a.value.borderRadius = n),
                      onChange: s[11] || (s[11] = (n) => V("borderRadius"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(G, {
                  label: "不透明度",
                  name: "globalAlpha"
                }, {
                  default: l(() => [
                    e(y, {
                      modelValue: a.value.globalAlpha,
                      "onUpdate:modelValue": s[12] || (s[12] = (n) => a.value.globalAlpha = n),
                      min: 0,
                      max: 1,
                      step: 0.01,
                      onChange: s[13] || (s[13] = (n) => V("globalAlpha"))
                    }, null, 8, ["modelValue"]),
                    x("span", ut, ce(a.value.globalAlpha), 1)
                  ]),
                  _: 1
                }),
                e(M),
                e(G, {
                  label: "文字水平对齐",
                  name: "textAlign"
                }, {
                  default: l(() => [
                    e($, {
                      modelValue: a.value.textAlign,
                      "onUpdate:modelValue": s[14] || (s[14] = (n) => a.value.textAlign = n),
                      onChange: s[15] || (s[15] = (n) => V("textAlign"))
                    }, {
                      default: l(() => [
                        e(N, {
                          key: "left",
                          value: "left",
                          label: "左对齐"
                        }),
                        e(N, {
                          key: "center",
                          value: "center",
                          label: "居中"
                        }),
                        e(N, {
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
                e(G, {
                  label: "文字垂直对齐",
                  name: "textBaseline"
                }, {
                  default: l(() => [
                    e($, {
                      modelValue: a.value.textBaseline,
                      "onUpdate:modelValue": s[16] || (s[16] = (n) => a.value.textBaseline = n),
                      onChange: s[17] || (s[17] = (n) => V("textBaseline"))
                    }, {
                      default: l(() => [
                        e(N, {
                          key: "top",
                          value: "top",
                          label: "顶部对齐"
                        }),
                        e(N, {
                          key: "middle",
                          value: "middle",
                          label: "居中"
                        }),
                        e(N, {
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
                e(U, {
                  "expand-icon": "",
                  borderless: "",
                  defaultExpandAll: ""
                }, {
                  default: l(() => [
                    e(ue, {
                      value: "0",
                      header: "对齐"
                    }, {
                      default: l(() => [
                        (i(), R(K, null, oe(S, (n, d) => e(Q, {
                          key: d,
                          shape: "square",
                          variant: "outline",
                          style: { "margin-right": "4px" },
                          onClick: (T) => z(n)
                        }, {
                          default: l(() => [
                            e(O, {
                              name: n.icon
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
                e(M),
                e(ne, null, {
                  default: l(() => [
                    e(_, { content: "清空高亮图元" }, {
                      default: l(() => [
                        e(Q, { onClick: X }, {
                          default: l(() => s[39] || (s[39] = [
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
            })) : q("", !0)
          ])
        ]),
        "struct-props": l(() => [
          Ge(E.$slots, "struct", { pen: a.value }, void 0, !0)
        ]),
        "animation-props": l(() => [
          x("div", rt, [
            o.value || c.value ? (i(), L(re, {
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
                e(M),
                c.value ? (i(), R(K, { key: 0 }, [
                  e(G, {
                    label: "动画效果",
                    name: "animateType"
                  }, {
                    default: l(() => [
                      e($, {
                        modelValue: a.value.animateType,
                        "onUpdate:modelValue": s[18] || (s[18] = (n) => a.value.animateType = n),
                        clearable: "",
                        onChange: s[19] || (s[19] = (n) => V("animateType"))
                      }, {
                        default: l(() => [
                          (i(!0), R(K, null, oe(B(Vl), (n) => (i(), L(N, {
                            key: n.value,
                            value: n.value,
                            label: n.label
                          }, null, 8, ["value", "label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  a.value.animateType == "x-custom" ? (i(), L(G, {
                    key: 0,
                    label: "自定义动画帧"
                  }, {
                    default: l(() => [
                      e(Q, {
                        variant: "text",
                        theme: "primary",
                        onClick: r
                      }, {
                        default: l(() => s[40] || (s[40] = [
                          J("编辑 ")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : q("", !0)
                ], 64)) : o.value ? (i(), R(K, { key: 1 }, [
                  e(G, {
                    label: "动画效果",
                    name: "lineAnimateType"
                  }, {
                    default: l(() => [
                      e($, {
                        modelValue: a.value.lineAnimateType,
                        "onUpdate:modelValue": s[20] || (s[20] = (n) => a.value.lineAnimateType = n),
                        clearable: "",
                        onChange: s[21] || (s[21] = (n) => V("lineAnimateType"))
                      }, {
                        default: l(() => [
                          (i(!0), R(K, null, oe(B(hl), (n) => (i(), L(N, {
                            key: n.value,
                            value: n.value,
                            label: n.label
                          }, null, 8, ["value", "label"]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(G, {
                    label: "反向流动",
                    name: "reverse"
                  }, {
                    default: l(() => [
                      e(H, {
                        modelValue: a.value.animateReverse,
                        "onUpdate:modelValue": s[22] || (s[22] = (n) => a.value.animateReverse = n),
                        onChange: s[23] || (s[23] = (n) => V("animateReverse"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(G, {
                    label: "线宽",
                    name: "animateLineWidth"
                  }, {
                    default: l(() => [
                      e(A, {
                        modelValue: a.value.animateLineWidth,
                        "onUpdate:modelValue": s[24] || (s[24] = (n) => a.value.animateLineWidth = n),
                        onChange: s[25] || (s[25] = (n) => V("animateLineWidth"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(G, {
                    label: "速度",
                    name: "animateSpan"
                  }, {
                    default: l(() => [
                      e(A, {
                        modelValue: a.value.animateSpan,
                        "onUpdate:modelValue": s[26] || (s[26] = (n) => a.value.animateSpan = n),
                        min: 1,
                        max: 5,
                        onChange: s[27] || (s[27] = (n) => V("animateSpan"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(G, {
                    label: "颜色",
                    name: "color"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: a.value.animateColor,
                        "onUpdate:modelValue": s[28] || (s[28] = (n) => a.value.animateColor = n),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        onChange: s[29] || (s[29] = (n) => V("animateColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(G, {
                    label: "动画发光",
                    name: "animateShadow"
                  }, {
                    default: l(() => [
                      e(H, {
                        modelValue: a.value.animateShadow,
                        "onUpdate:modelValue": s[30] || (s[30] = (n) => a.value.animateShadow = n),
                        onChange: s[31] || (s[31] = (n) => V("animateShadow"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  e(G, {
                    label: "发光颜色",
                    name: "animateShadowColor"
                  }, {
                    default: l(() => [
                      e(Y, {
                        class: "w-full",
                        modelValue: a.value.animateShadowColor,
                        "onUpdate:modelValue": s[32] || (s[32] = (n) => a.value.animateShadowColor = n),
                        "show-primary-color-preview": !1,
                        format: "CSS",
                        "color-modes": ["monochrome"],
                        onChange: s[33] || (s[33] = (n) => V("animateShadowColor"))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ], 64)) : q("", !0),
                e(G, {
                  label: "自动播放",
                  name: "autoPlay"
                }, {
                  default: l(() => [
                    e(H, {
                      modelValue: a.value.autoPlay,
                      "onUpdate:modelValue": s[34] || (s[34] = (n) => a.value.autoPlay = n),
                      onChange: s[35] || (s[35] = (n) => V("autoPlay"))
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                e(M),
                x("div", null, [
                  e(t, {
                    title: "图元总数",
                    value: g.value,
                    trend: "increase",
                    color: "orange"
                  }, null, 8, ["value"])
                ]),
                e(ne, null, {
                  default: l(() => [
                    e(_, { content: "对大量图元执行动画时存在性能问题，请谨慎操作" }, {
                      default: l(() => [
                        e(Q, {
                          onClick: s[36] || (s[36] = (n) => F(!0))
                        }, {
                          default: l(() => s[41] || (s[41] = [
                            J("播放")
                          ])),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    e(_, { content: "" }, {
                      default: l(() => [
                        e(Q, {
                          onClick: s[37] || (s[37] = (n) => F())
                        }, {
                          default: l(() => s[42] || (s[42] = [
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
            })) : (i(), L(fe, {
              key: 1,
              theme: "error"
            }, {
              default: l(() => s[43] || (s[43] = [
                J(" 只能对同一类型的图元批量设置动画 ")
              ])),
              _: 1
            })),
            e(w, {
              visible: j.value,
              "onUpdate:visible": s[38] || (s[38] = (n) => j.value = n),
              header: "自定义动画帧",
              size: "20%",
              onConfirm: k
            }, {
              default: l(() => [
                e(Q, {
                  block: "",
                  theme: "primary",
                  onClick: Z
                }, {
                  default: l(() => s[44] || (s[44] = [
                    J("新增动画帧")
                  ])),
                  _: 1
                }),
                e(U, {
                  class: "meta-collapse",
                  "expand-mutex": ""
                }, {
                  default: l(() => [
                    (i(!0), R(K, null, oe(I.value, (n) => (i(), L(ue, { header: "动画帧" }, {
                      headerRightContent: l(() => [
                        e(Q, {
                          size: "small",
                          variant: "outline",
                          theme: "danger",
                          style: { marginLeft: "8px" },
                          onClick: (d) => ee(n)
                        }, {
                          default: l(() => [
                            e(O, { name: "delete" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      default: l(() => [
                        e(Cl, { data: n }, null, 8, ["data"])
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
}), it = /* @__PURE__ */ he(st, [["__scopeId", "data-v-86a3cc64"]]), mt = ["onClick"], pt = { class: "tdesign-demo-block-row" }, Xe = /* @__PURE__ */ ge({
  __name: "Structure",
  props: {},
  setup(f) {
    let v = ae(meta2d.data());
    const P = Ve(() => {
      const m = v.value.pens;
      return m.filter((p) => {
        if (!p.parentId) {
          if (p.children) {
            const V = [];
            p.children.forEach((F) => {
              const S = m.find((z) => z.id === F);
              S && V.push(S);
            }), p.list = V;
          }
          return !0;
        }
      });
    }), a = () => {
      v.value = meta2d.data();
    }, { selections: D } = je(), C = ae([]);
    Be(D, (m) => {
      const { mode: p } = m;
      p == 1 && m.pen ? C.value = [m.pen.id] : C.value = [];
    }, {
      immediate: !0
    }), Le(() => {
      meta2d.on("add", a), meta2d.on("delete", a), meta2d.on("clear", a);
    }), Ze(() => {
      meta2d.off("add", a), meta2d.off("delete", a);
    });
    const o = (m, p) => {
      const V = {
        1: "git-commit",
        combine: "folder",
        image: "image"
      }, F = V[p.data.type] || V[p.data.name] || "rectangle";
      return m(jl, { name: F });
    }, c = (m) => {
      m.data.visible = m.data.visible === !1, m.setData(m.data), meta2d.setValue({
        id: m.data.id,
        visible: m.data.visible
      });
    }, g = (m) => {
      const p = meta2d.findOne(m.data.id);
      p && (meta2d.active([p]), meta2d.render(), meta2d.gotoView(p));
    };
    return (m, p) => {
      const V = b("t-icon"), F = b("t-tree");
      return i(), L(F, {
        hover: "",
        line: "",
        "expand-all": "",
        activable: "",
        actived: C.value,
        "onUpdate:actived": p[0] || (p[0] = (S) => C.value = S),
        data: P.value,
        keys: { label: "name", value: "id", children: "list" },
        icon: o,
        scroll: {
          rowHeight: 34,
          bufferSize: 30,
          threshold: 50,
          type: "virtual"
        },
        style: { padding: "10px", height: "100%" }
      }, {
        label: l(({ node: S }) => [
          x("span", {
            onClick: (z) => g(S)
          }, ce(S.label) + " - " + ce(S.data.text || S.data.description || S.value), 9, mt)
        ]),
        operations: l(({ node: S }) => [
          x("div", pt, [
            e(V, {
              name: S.data.visible !== !1 ? "browse" : "browse-off",
              onClick: (z) => c(S)
            }, null, 8, ["name", "onClick"])
          ])
        ]),
        _: 1
      }, 8, ["actived", "data"]);
    };
  }
}), ft = {
  key: 0,
  class: "app-props"
}, vt = /* @__PURE__ */ ge({
  __name: "Props",
  setup(f) {
    const { selections: v } = je(), P = Ve(() => [Se.File, Se.Pen, Se.Pens].includes(
      v.mode
    ));
    return (a, D) => P.value ? (i(), R("div", ft, [
      Oe(e(Da, _e({
        key: "file",
        class: "props__file"
      }, a.$attrs), {
        struct: l(() => [
          e(Xe, Fe(He(a.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ne, B(v).mode === B(Se).File]
      ]),
      Oe(e(nt, _e({
        key: "pen",
        class: "props__pen"
      }, a.$attrs), {
        struct: l(() => [
          e(Xe, Fe(He(a.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ne, B(v).mode === B(Se).Pen]
      ]),
      Oe(e(it, _e({
        key: "pens",
        class: "props__pens"
      }, a.$attrs), {
        struct: l(() => [
          e(Xe, Fe(He(a.$attrs)), null, 16)
        ]),
        _: 1
      }, 16), [
        [Ne, B(v).mode === B(Se).Pens]
      ])
    ])) : q("", !0);
  }
}), gt = /* @__PURE__ */ he(vt, [["__scopeId", "data-v-5839971c"]]), ct = [
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
      },
      {
        name: "视频",
        icon: "l-shipin",
        id: "d-1-1",
        data: {
          name: "video",
          x: 100,
          y: 100,
          width: 300,
          height: 200,
          video: "https://video.699pic.com/videos/17/69/11/a_aa3jeKZ0D63g1556176911_10s.mp4",
          autoPlay: !0
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
], bt = { class: "graphics" }, Vt = ["onDragstart"], ht = ["src"], wt = {
  key: 1,
  class: "l-icon",
  "aria-hidden": "true"
}, Ct = ["xlink:href"], yt = ["onDragstart"], xt = ["src"], kt = {
  key: 1,
  class: "l-icon",
  "aria-hidden": "true"
}, At = ["xlink:href"], Ut = /* @__PURE__ */ ge({
  __name: "Graphics",
  setup(f) {
    const v = Ve(() => {
      const C = [];
      return zl.forEach((o) => {
        const c = o.name.split("-");
        let g = "其他";
        c.length > 1 && (g = c[0]);
        const m = C.find((p) => p.name == g);
        m ? m.children.push(o) : C.push({
          name: g,
          children: [o]
        });
      }), C;
    }), P = [
      ...ct,
      {
        name: "电路元件分组",
        show: !0,
        style: "group",
        list: v.value
      },
      {
        name: "电路元件组合(包含状态)",
        show: !0,
        style: "group",
        list: Ol
      }
    ];
    function a(C, o) {
      if (!C || !o) return;
      const c = [], g = [C];
      for (; g.length; ) {
        const m = g.shift();
        c.push(m);
        for (const p of o)
          p.parentId == m.id && g.push(p);
      }
      return c;
    }
    const D = (C, o) => {
      var c;
      if (o) {
        if (C.stopPropagation(), o.icon.endsWith("svg"))
          if (o.type == "combine-json") {
            console.log("load json: ", o, Je);
            const g = Je.pens.find((p) => {
              if (p.description == o.name && !p.parentId)
                return !0;
            }), m = a(g, Je.pens);
            console.log("combine pens: ", g, m), m && (o.data = Pe(m));
          } else {
            Nl(o.icon, o);
            return;
          }
        console.log("elem: ", o), C instanceof DragEvent ? (c = C.dataTransfer) == null || c.setData("Meta2d", JSON.stringify(o.data)) : meta2d.canvas.addCaches = [o.data];
      }
    };
    return (C, o) => {
      const c = b("t-tag"), g = b("t-tooltip"), m = b("t-collapse-panel"), p = b("t-collapse");
      return i(), R("div", bt, [
        e(p, { defaultValue: [0, 6] }, {
          default: l(() => [
            (i(), R(K, null, oe(P, (V) => e(m, {
              header: V.name,
              key: V.name,
              class: _l({
                "has--group": V.style == "group"
              })
            }, {
              default: l(() => [
                V.style === "group" ? (i(), L(p, {
                  key: 0,
                  header: V.name
                }, {
                  default: l(() => [
                    (i(!0), R(K, null, oe(V.list, (F) => (i(), L(m, {
                      class: "is--subpanel",
                      header: F.name
                    }, {
                      headerRightContent: l(() => [
                        e(c, { theme: "success" }, {
                          default: l(() => [
                            J(ce(F.children.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: l(() => [
                        (i(!0), R(K, null, oe(F.children, (S) => (i(), R("div", {
                          key: S.name,
                          class: "graphic",
                          draggable: !0,
                          onDragstart: (z) => D(z, S)
                        }, [
                          e(g, {
                            content: S.name
                          }, {
                            default: l(() => {
                              var z;
                              return [
                                (z = S.icon) != null && z.endsWith("svg") ? (i(), R("img", {
                                  key: 0,
                                  src: S.icon,
                                  style: { width: "100%", height: "48px" }
                                }, null, 8, ht)) : (i(), R("svg", wt, [
                                  x("use", {
                                    "xlink:href": "#" + S.icon
                                  }, null, 8, Ct)
                                ]))
                              ];
                            }),
                            _: 2
                          }, 1032, ["content"])
                        ], 40, Vt))), 128))
                      ]),
                      _: 2
                    }, 1032, ["header"]))), 256))
                  ]),
                  _: 2
                }, 1032, ["header"])) : (i(!0), R(K, { key: 1 }, oe(V.list, (F) => (i(), R("div", {
                  key: F.name,
                  class: "graphic",
                  draggable: !0,
                  onDragstart: (S) => D(S, F)
                }, [
                  e(g, {
                    content: F.name
                  }, {
                    default: l(() => {
                      var S;
                      return [
                        (S = F.icon) != null && S.endsWith("svg") ? (i(), R("img", {
                          key: 0,
                          class: "icon__image",
                          src: F.icon,
                          alt: "",
                          srcset: ""
                        }, null, 8, xt)) : (i(), R("svg", kt, [
                          x("use", {
                            "xlink:href": "#" + F.icon
                          }, null, 8, At)
                        ])),
                        x("p", null, ce(F.name), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["content"])
                ], 40, yt))), 128))
              ]),
              _: 2
            }, 1032, ["header", "class"])), 64))
          ]),
          _: 1
        })
      ]);
    };
  }
}), St = /* @__PURE__ */ he(Ut, [["__scopeId", "data-v-4ad49cf5"]]), _t = { class: "panel__wrapper" }, Pt = { class: "panel__wrapper" }, Lt = /* @__PURE__ */ ge({
  __name: "GraphicsManager",
  props: {},
  setup(f) {
    const v = [
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
    ], P = ae(2), {
      blueprintList: a,
      componentList: D,
      visible: C,
      folderName: o,
      showAddFolder: c,
      deleteMyPen: g,
      confirm: m,
      close: p,
      selectMode: V,
      selectType: F,
      deleteFolder: S,
      getTree: z,
      fileName: j,
      saveImageComponent: I
    } = ml(), r = (A) => {
      const y = v.find((M) => M.value === A);
      if (y && y.code) {
        const M = y.code;
        z(M);
      }
    }, k = Ve(() => {
      let A = [];
      return F.value == "paper" ? A = a.value : A = D.value, A.map((y) => ({
        label: y.dictName,
        value: y.id
      }));
    }), { uploadValue: Z, headers: ee, sizeLimit: X, handleFail: E } = el();
    let s = null;
    const h = (A) => {
      console.log("set folder: ", A), s = A;
    }, G = (A) => {
      var y, M, O;
      if (A.response) {
        const ue = {
          name: "image",
          image: A.response.url || ((y = A.response.data) == null ? void 0 : y.fileurl),
          relativePath: (M = A.response.data) == null ? void 0 : M.relativePath,
          fileName: (O = A.response.data) == null ? void 0 : O.fileName,
          width: 100,
          height: 100,
          x: 100,
          y: 100
        };
        I(s, ue);
      }
    }, Y = async (A, y) => {
      var O;
      if (!y || !y.data)
        return;
      A.stopPropagation();
      let M;
      try {
        typeof y.data == "string" ? M = JSON.parse(y.data) : typeof y.data == "object" && (M = y.data);
      } catch (Q) {
        console.log("dragStart error: ", Q);
      }
      M && (A instanceof DragEvent ? (O = A.dataTransfer) == null || O.setData("Meta2d", JSON.stringify(M)) : meta2d.canvas.addCaches = [M]);
    }, N = (A) => {
      console.log("addDiagram: ", A), A.children || (A.children = []), meta2d.clear(), meta2d.emit("clear");
    }, $ = (A) => {
      const y = pl("warning", {
        content: "系统可能不会保存您所做的更改，是否继续？",
        title: "提示",
        placement: "top-right",
        duration: 0,
        closeBtn: !0,
        footer(M) {
          return M(
            "div",
            {
              style: "text-align: right"
            },
            [
              M(
                Yl,
                {
                  onClick: () => {
                    let O;
                    try {
                      O = JSON.parse(A.data);
                    } catch (Q) {
                      console.log("open diagram error: ", Q);
                    }
                    meta2d.open(O), meta2d.emit("clear"), meta2d.fitView(), y.then((Q) => {
                      Q.close(), meta2d.render(!0);
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
    return (A, y) => {
      const M = b("t-icon"), O = b("t-button"), Q = b("t-tooltip"), ue = b("t-popconfirm"), U = b("t-image"), _ = b("t-col"), ne = b("t-row"), re = b("t-empty"), fe = b("t-collapse-panel"), H = b("t-collapse"), t = b("t-upload"), w = b("t-input"), n = b("t-select"), d = b("t-dialog");
      return i(), R(K, null, [
        e(Ye, {
          modelValue: P.value,
          "onUpdate:modelValue": y[3] || (y[3] = (T) => P.value = T),
          tabs: v,
          onChange: r
        }, {
          graphics: l(() => [
            e(St)
          ]),
          diagrams: l(() => [
            x("div", _t, [
              e(O, {
                block: "",
                variant: "outline",
                onClick: y[0] || (y[0] = (T) => B(c)("paper"))
              }, {
                default: l(() => [
                  e(M, {
                    name: "add",
                    slot: "icon"
                  }),
                  y[8] || (y[8] = J(" 新建目录 "))
                ]),
                _: 1
              }),
              y[9] || (y[9] = x("br", null, null, -1)),
              B(a).length ? (i(), L(H, {
                key: 0,
                defaultExpandAll: ""
              }, {
                default: l(() => [
                  (i(!0), R(K, null, oe(B(a), (T) => (i(), L(fe, {
                    value: T.id,
                    header: T.dictName
                  }, {
                    headerRightContent: l(() => [
                      e(Q, { content: "新建图纸，将清空画布" }, {
                        default: l(() => [
                          e(O, {
                            size: "small",
                            variant: "outline",
                            style: { marginLeft: "8px" },
                            onClick: (W) => N(T)
                          }, {
                            default: l(() => [
                              e(M, { name: "chart-add" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      e(Q, { content: "删除目录" }, {
                        default: l(() => [
                          e(ue, {
                            theme: "danger",
                            content: "操作后无法恢复, 确定要删除吗?",
                            onConfirm: (W) => B(S)(T, "paper")
                          }, {
                            default: l(() => [
                              e(O, {
                                size: "small",
                                variant: "outline",
                                theme: "danger",
                                style: { marginLeft: "8px" }
                              }, {
                                default: l(() => [
                                  e(M, { name: "delete" })
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
                      T.data.length ? (i(), L(ne, {
                        key: 0,
                        gutter: [10, 10]
                      }, {
                        default: l(() => [
                          (i(!0), R(K, null, oe(T.data, (W, de) => (i(), L(_, {
                            key: de,
                            span: 6,
                            onClick: (se) => $(W)
                          }, {
                            default: l(() => [
                              e(Q, { content: "单击打开图纸" }, {
                                default: l(() => [
                                  e(U, {
                                    overlayTrigger: "hover",
                                    src: W.cover,
                                    fit: "contain",
                                    style: { width: "100px", height: "100px" }
                                  }, {
                                    overlayContent: l(() => [
                                      e(ue, {
                                        theme: "danger",
                                        content: "操作后无法恢复, 确定要删除吗?",
                                        onConfirm: (se) => B(g)(W, "paper")
                                      }, {
                                        default: l(() => [
                                          e(O, {
                                            size: "small",
                                            variant: "outline",
                                            theme: "danger",
                                            style: { float: "right" },
                                            onClick: dl(() => null, ["stop"])
                                          }, {
                                            default: l(() => [
                                              e(M, { name: "delete" })
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
                      }, 1024)) : (i(), L(re, {
                        key: 1,
                        description: ""
                      }))
                    ]),
                    _: 2
                  }, 1032, ["value", "header"]))), 256))
                ]),
                _: 1
              })) : (i(), L(re, {
                key: 1,
                description: ""
              }))
            ])
          ]),
          "my-pens": l(() => [
            x("div", Pt, [
              e(O, {
                block: "",
                variant: "outline",
                onClick: y[1] || (y[1] = (T) => B(c)("component"))
              }, {
                default: l(() => [
                  e(M, {
                    name: "add",
                    slot: "icon"
                  }),
                  y[10] || (y[10] = J(" 新建目录 "))
                ]),
                _: 1
              }),
              y[11] || (y[11] = x("br", null, null, -1)),
              B(D).length ? (i(), L(H, {
                key: 0,
                defaultExpandAll: ""
              }, {
                default: l(() => [
                  (i(!0), R(K, null, oe(B(D), (T) => (i(), L(fe, {
                    value: T.id,
                    header: T.dictName
                  }, {
                    headerRightContent: l(() => [
                      e(t, {
                        ref_for: !0,
                        ref: "uploadRef",
                        modelValue: B(Z),
                        "onUpdate:modelValue": y[2] || (y[2] = (W) => xe(Z) ? Z.value = W : null),
                        action: A.$attrs.uploadUrl || "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
                        headers: B(ee),
                        sizeLimit: B(X),
                        name: "object",
                        theme: "custom",
                        accept: "image/*",
                        style: { display: "inline-flex" },
                        onFail: B(E),
                        onSuccess: G
                      }, {
                        default: l(() => [
                          e(Q, { content: "请选择单张小于1MB的图片上传" }, {
                            default: l(() => [
                              e(O, {
                                size: "small",
                                variant: "outline",
                                style: { marginLeft: "8px" },
                                onClick: (W) => h(T)
                              }, {
                                default: l(() => [
                                  e(M, { name: "upload" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "action", "headers", "sizeLimit", "onFail"]),
                      e(Q, { content: "删除目录" }, {
                        default: l(() => [
                          e(ue, {
                            theme: "danger",
                            content: "操作后无法恢复, 确定要删除吗?",
                            onConfirm: (W) => B(S)(T, "component")
                          }, {
                            default: l(() => [
                              e(O, {
                                size: "small",
                                variant: "outline",
                                theme: "danger",
                                style: { marginLeft: "8px" }
                              }, {
                                default: l(() => [
                                  e(M, { name: "delete" })
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
                      T.data.length ? (i(), L(ne, {
                        key: 0,
                        gutter: [10, 10]
                      }, {
                        default: l(() => [
                          (i(!0), R(K, null, oe(T.data, (W, de) => (i(), L(_, {
                            key: de,
                            span: 6,
                            draggable: !0,
                            onDragstart: (se) => Y(se, W)
                          }, {
                            default: l(() => [
                              e(Q, {
                                content: W.name
                              }, {
                                default: l(() => [
                                  e(U, {
                                    src: W.cover,
                                    overlayTrigger: "hover",
                                    fit: "contain",
                                    style: { width: "100px", height: "100px" }
                                  }, {
                                    overlayContent: l(() => [
                                      e(ue, {
                                        theme: "danger",
                                        content: "操作后无法恢复, 确定要删除吗?",
                                        onConfirm: (se) => B(g)(W, "component")
                                      }, {
                                        default: l(() => [
                                          e(O, {
                                            size: "small",
                                            variant: "outline",
                                            theme: "danger",
                                            style: { float: "right" },
                                            onClick: dl(() => null, ["stop"])
                                          }, {
                                            default: l(() => [
                                              e(M, { name: "delete" })
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
                      }, 1024)) : (i(), L(re, { key: 1 }))
                    ]),
                    _: 2
                  }, 1032, ["value", "header"]))), 256))
                ]),
                _: 1
              })) : (i(), L(re, {
                key: 1,
                description: ""
              }))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        e(d, {
          visible: B(C),
          "onUpdate:visible": y[7] || (y[7] = (T) => xe(C) ? C.value = T : null),
          header: B(V) ? "选择目录" : "新建目录",
          onConfirm: B(m),
          onClosed: B(p)
        }, {
          default: l(() => [
            B(V) ? (i(), R(K, { key: 1 }, [
              e(n, {
                modelValue: B(o),
                "onUpdate:modelValue": y[5] || (y[5] = (T) => xe(o) ? o.value = T : null),
                options: k.value
              }, null, 8, ["modelValue", "options"]),
              y[12] || (y[12] = x("br", null, null, -1)),
              e(w, {
                modelValue: B(j),
                "onUpdate:modelValue": y[6] || (y[6] = (T) => xe(j) ? j.value = T : null),
                placeholder: "请输入图纸/组件名称"
              }, null, 8, ["modelValue"])
            ], 64)) : (i(), L(w, {
              key: 0,
              modelValue: B(o),
              "onUpdate:modelValue": y[4] || (y[4] = (T) => xe(o) ? o.value = T : null),
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
}), $t = /* @__PURE__ */ he(Lt, [["__scopeId", "data-v-46eee7b7"]]), Tt = { class: "app-page" }, Mt = { class: "designer" }, Ft = /* @__PURE__ */ ge({
  __name: "Index",
  emits: ["view", "ready"],
  setup(f, { emit: v }) {
    let P;
    function a() {
      P && clearTimeout(P), P = setTimeout(() => {
        const g = meta2d.data();
        localStorage.setItem("meta2d", JSON.stringify(g)), P = void 0;
      }, 100);
    }
    const D = v, C = (g) => {
      D("view", g);
    }, o = ae(!1), c = (g) => {
      D("ready", g), o.value = !0;
    };
    return Le(() => {
      meta2d.on("scale", a), meta2d.on("add", a), meta2d.on("opened", a), meta2d.on("undo", a), meta2d.on("redo", a), meta2d.on("add", a), meta2d.on("delete", a), meta2d.on("rotatePens", a), meta2d.on("translatePens", a);
    }), (g, m) => (i(), R("div", Tt, [
      o.value ? (i(), L(Va, _e({ key: 0 }, g.$attrs, { onView: C }), null, 16)) : q("", !0),
      x("div", Mt, [
        e($t, Fe(He(g.$attrs)), null, 16),
        e(Hl, _e(g.$attrs, { onReady: c }), null, 16),
        o.value ? (i(), L(gt, Fe(_e({ key: 0 }, g.$attrs)), null, 16)) : q("", !0)
      ])
    ]));
  }
}), Et = /* @__PURE__ */ he(Ft, [["__scopeId", "data-v-7081acbb"]]);
export {
  Et as default
};
//# sourceMappingURL=Index-ljWVZhlp.mjs.map
