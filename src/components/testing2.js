!(function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var o = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.i = function (t) {
      return t;
    }),
    (e.d = function (t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = "/dist/"),
    e((e.s = 0));
})([
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      i.d(e, "eventBus", function () {
        return d;
      });
    var n = i(11),
      o = i(9),
      s = i.n(o),
      r = i(10),
      a = i(8),
      l = i(4),
      u = i.n(l),
      c = i(5),
      h = i.n(c);
    n.a.use(r.a), n.a.component("Template", u.a), n.a.component("Welcome", h.a);
    var p = new r.a({ routes: a.a, mode: "history" }),
      d = new n.a();
    new n.a({
      el: "#app",
      router: p,
      render: function (t) {
        return t(s.a);
      },
    });
  },
  function (t, e) {
    t.exports = function () {
      var t = [];
      return (
        (t.toString = function () {
          for (var t = [], e = 0; e < this.length; e++) {
            var i = this[e];
            i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1]);
          }
          return t.join("");
        }),
        (t.i = function (e, i) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var n = {}, o = 0; o < this.length; o++) {
            var s = this[o][0];
            "number" == typeof s && (n[s] = !0);
          }
          for (o = 0; o < e.length; o++) {
            var r = e[o];
            ("number" == typeof r[0] && n[r[0]]) ||
              (i && !r[2]
                ? (r[2] = i)
                : i && (r[2] = "(" + r[2] + ") and (" + i + ")"),
              t.push(r));
          }
        }),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, i, n, o) {
      var s,
        r = (t = t || {}),
        a = typeof t.default;
      ("object" !== a && "function" !== a) || ((s = t), (r = t.default));
      var l = "function" == typeof r ? r.options : r;
      e && ((l.render = e.render), (l.staticRenderFns = e.staticRenderFns)),
        n && (l._scopeId = n);
      var u;
      if (
        (o
          ? ((u = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)),
                t ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(o);
            }),
            (l._ssrRegister = u))
          : i && (u = i),
        u)
      ) {
        var c = l.functional,
          h = c ? l.render : l.beforeCreate;
        c
          ? (l.render = function (t, e) {
              return u.call(e), h(t, e);
            })
          : (l.beforeCreate = h ? [].concat(h, u) : [u]);
      }
      return { esModule: s, exports: r, options: l };
    };
  },
  function (t, e, i) {
    function n(t) {
      for (var e = 0; e < t.length; e++) {
        var i = t[e],
          n = c[i.id];
        if (n) {
          n.refs++;
          for (var o = 0; o < n.parts.length; o++) n.parts[o](i.parts[o]);
          for (; o < i.parts.length; o++) n.parts.push(s(i.parts[o]));
          n.parts.length > i.parts.length && (n.parts.length = i.parts.length);
        } else {
          for (var r = [], o = 0; o < i.parts.length; o++)
            r.push(s(i.parts[o]));
          c[i.id] = { id: i.id, refs: 1, parts: r };
        }
      }
    }
    function o() {
      var t = document.createElement("style");
      return (t.type = "text/css"), h.appendChild(t), t;
    }
    function s(t) {
      var e,
        i,
        n = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
      if (n) {
        if (f) return m;
        n.parentNode.removeChild(n);
      }
      if (y) {
        var s = d++;
        (n = p || (p = o())),
          (e = r.bind(null, n, s, !1)),
          (i = r.bind(null, n, s, !0));
      } else
        (n = o()),
          (e = a.bind(null, n)),
          (i = function () {
            n.parentNode.removeChild(n);
          });
      return (
        e(t),
        function (n) {
          if (n) {
            if (
              n.css === t.css &&
              n.media === t.media &&
              n.sourceMap === t.sourceMap
            )
              return;
            e((t = n));
          } else i();
        }
      );
    }
    function r(t, e, i, n) {
      var o = i ? "" : n.css;
      if (t.styleSheet) t.styleSheet.cssText = _(e, o);
      else {
        var s = document.createTextNode(o),
          r = t.childNodes;
        r[e] && t.removeChild(r[e]),
          r.length ? t.insertBefore(s, r[e]) : t.appendChild(s);
      }
    }
    function a(t, e) {
      var i = e.css,
        n = e.media,
        o = e.sourceMap;
      if (
        (n && t.setAttribute("media", n),
        o &&
          ((i += "\n/*# sourceURL=" + o.sources[0] + " */"),
          (i +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            " */")),
        t.styleSheet)
      )
        t.styleSheet.cssText = i;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
    var l = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !l)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var u = i(24),
      c = {},
      h = l && (document.head || document.getElementsByTagName("head")[0]),
      p = null,
      d = 0,
      f = !1,
      m = function () {},
      y =
        "undefined" != typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    t.exports = function (t, e, i) {
      f = i;
      var o = u(t, e);
      return (
        n(o),
        function (e) {
          for (var i = [], s = 0; s < o.length; s++) {
            var r = o[s],
              a = c[r.id];
            a.refs--, i.push(a);
          }
          e ? ((o = u(t, e)), n(o)) : (o = []);
          for (var s = 0; s < i.length; s++) {
            var a = i[s];
            if (0 === a.refs) {
              for (var l = 0; l < a.parts.length; l++) a.parts[l]();
              delete c[a.id];
            }
          }
        }
      );
    };
    var _ = (function () {
      var t = [];
      return function (e, i) {
        return (t[e] = i), t.filter(Boolean).join("\n");
      };
    })();
  },
  function (t, e, i) {
    function n(t) {
      i(22);
    }
    var o = i(2)(i(13), i(18), n, null, null);
    t.exports = o.exports;
  },
  function (t, e, i) {
    var n = i(2)(i(14), i(20), null, null, null);
    t.exports = n.exports;
  },
  function (t, e, i) {
    var n;
    !(function (o, s) {
      void 0 !==
        (n = function () {
          return s();
        }.call(e, i, e, t)) && (t.exports = n);
    })(0, function () {
      "use strict";
      function t(t) {
        t(e);
      }
      var e;
      /**
       *  Tone.js
       *  @author Yotam Mann
       *  @license http://opensource.org/licenses/MIT MIT License
       *  @copyright 2014-2017 Yotam Mann
       */
      return (
        (function (t) {
          e = (function () {
            var t = function () {
              if (!(this instanceof t))
                throw new Error(
                  "constructor needs to be called with the 'new' keyword"
                );
            };
            return (
              (t.prototype.toString = function () {
                var e, i, n;
                for (e in t)
                  if (
                    ((i = e[0].match(/^[A-Z]$/)),
                    (n = t[e] === this.constructor),
                    t.isFunction(t[e]) && i && n)
                  )
                    return e;
                return "Tone";
              }),
              (t.prototype.dispose = function () {
                return this;
              }),
              (t.prototype.set = function (e, i, n) {
                var o, s, r, a, l, u, c;
                t.isObject(e)
                  ? (n = i)
                  : t.isString(e) && ((o = {}), (o[e] = i), (e = o));
                t: for (s in e) {
                  if (((i = e[s]), (r = this), -1 !== s.indexOf("."))) {
                    for (a = s.split("."), l = 0; l < a.length - 1; l++)
                      if ((r = r[a[l]]) instanceof t) {
                        a.splice(0, l + 1), (u = a.join(".")), r.set(u, i);
                        continue t;
                      }
                    s = a[a.length - 1];
                  }
                  (c = r[s]),
                    t.isUndef(c) ||
                      ((t.Signal && c instanceof t.Signal) ||
                      (t.Param && c instanceof t.Param)
                        ? c.value !== i &&
                          (t.isUndef(n) ? (c.value = i) : c.rampTo(i, n))
                        : c instanceof AudioParam
                        ? c.value !== i && (c.value = i)
                        : t.TimeBase && c instanceof t.TimeBase
                        ? (r[s] = i)
                        : c instanceof t
                        ? c.set(i)
                        : c !== i && (r[s] = i));
                }
                return this;
              }),
              (t.prototype.get = function (e) {
                var i, n, o, s, r, a, l, u, c;
                for (
                  t.isUndef(e)
                    ? (e = this._collectDefaults(this.constructor))
                    : t.isString(e) && (e = [e]),
                    i = {},
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  if (
                    ((o = e[n]), (s = this), (r = i), -1 !== o.indexOf("."))
                  ) {
                    for (a = o.split("."), l = 0; l < a.length - 1; l++)
                      (u = a[l]), (r[u] = r[u] || {}), (r = r[u]), (s = s[u]);
                    o = a[a.length - 1];
                  }
                  (c = s[o]),
                    t.isObject(e[o])
                      ? (r[o] = c.get())
                      : t.Signal && c instanceof t.Signal
                      ? (r[o] = c.value)
                      : t.Param && c instanceof t.Param
                      ? (r[o] = c.value)
                      : c instanceof AudioParam
                      ? (r[o] = c.value)
                      : c instanceof t
                      ? (r[o] = c.get())
                      : t.isFunction(c) || t.isUndef(c) || (r[o] = c);
                }
                return i;
              }),
              (t.prototype._collectDefaults = function (e) {
                var i,
                  n,
                  o = [];
                if (
                  (t.isUndef(e.defaults) || (o = Object.keys(e.defaults)),
                  !t.isUndef(e._super))
                )
                  for (
                    i = this._collectDefaults(e._super), n = 0;
                    n < i.length;
                    n++
                  )
                    -1 === o.indexOf(i[n]) && o.push(i[n]);
                return o;
              }),
              (t.defaults = function (e, i, n) {
                var o,
                  s = {};
                if (1 === e.length && t.isObject(e[0])) s = e[0];
                else for (o = 0; o < i.length; o++) s[i[o]] = e[o];
                return t.isUndef(n.defaults)
                  ? t.isObject(n)
                    ? t.defaultArg(s, n)
                    : s
                  : t.defaultArg(s, n.defaults);
              }),
              (t.defaultArg = function (e, i) {
                var n, o, s;
                if (t.isObject(e) && t.isObject(i)) {
                  n = {};
                  for (o in e) n[o] = t.defaultArg(i[o], e[o]);
                  for (s in i) n[s] = t.defaultArg(e[s], i[s]);
                  return n;
                }
                return t.isUndef(e) ? i : e;
              }),
              (t.connectSeries = function () {
                var e,
                  i,
                  n = arguments[0];
                for (e = 1; e < arguments.length; e++)
                  (i = arguments[e]), n.connect(i), (n = i);
                return t;
              }),
              (t.isUndef = function (t) {
                return void 0 === t;
              }),
              (t.isFunction = function (t) {
                return "function" == typeof t;
              }),
              (t.isNumber = function (t) {
                return "number" == typeof t;
              }),
              (t.isObject = function (t) {
                return (
                  "[object Object]" === Object.prototype.toString.call(t) &&
                  t.constructor === Object
                );
              }),
              (t.isBoolean = function (t) {
                return "boolean" == typeof t;
              }),
              (t.isArray = function (t) {
                return Array.isArray(t);
              }),
              (t.isString = function (t) {
                return "string" == typeof t;
              }),
              (t.isNote = function (e) {
                return (
                  t.isString(e) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(e)
                );
              }),
              (t.noOp = function () {}),
              (t.prototype._readOnly = function (t) {
                if (Array.isArray(t))
                  for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
                else
                  Object.defineProperty(this, t, {
                    writable: !1,
                    enumerable: !0,
                  });
              }),
              (t.prototype._writable = function (t) {
                if (Array.isArray(t))
                  for (var e = 0; e < t.length; e++) this._writable(t[e]);
                else Object.defineProperty(this, t, { writable: !0 });
              }),
              (t.State = {
                Started: "started",
                Stopped: "stopped",
                Paused: "paused",
              }),
              (t.equalPowerScale = function (t) {
                var e = 0.5 * Math.PI;
                return Math.sin(t * e);
              }),
              (t.dbToGain = function (t) {
                return Math.pow(10, t / 20);
              }),
              (t.gainToDb = function (t) {
                return (Math.log(t) / Math.LN10) * 20;
              }),
              (t.intervalToFrequencyRatio = function (t) {
                return Math.pow(2, t / 12);
              }),
              (t.prototype.now = function () {
                return t.context.now();
              }),
              (t.now = function () {
                return t.context.now();
              }),
              (t.isPast = function (e) {
                e < t.context.currentTime &&
                  console.warn(
                    "Time '" +
                      e +
                      "' is in the past. Scheduled time must be â‰¥ AudioContext.currentTime"
                  );
              }),
              (t.extend = function (e, i) {
                function n() {}
                t.isUndef(i) && (i = t),
                  (n.prototype = i.prototype),
                  (e.prototype = new n()),
                  (e.prototype.constructor = e),
                  (e._super = i);
              }),
              Object.defineProperty(t, "context", {
                get: function () {
                  return window.TONE_AUDIO_CONTEXT;
                },
                set: function (e) {
                  t.Context && e instanceof t.Context
                    ? (window.TONE_AUDIO_CONTEXT = e)
                    : (window.TONE_AUDIO_CONTEXT = new t.Context(e)),
                    t.Context.emit("init", window.TONE_AUDIO_CONTEXT);
                },
              }),
              Object.defineProperty(t.prototype, "context", {
                get: function () {
                  return t.context;
                },
              }),
              (t.setContext = function (e) {
                t.context = e;
              }),
              Object.defineProperty(t.prototype, "blockTime", {
                get: function () {
                  return 128 / this.context.sampleRate;
                },
              }),
              Object.defineProperty(t.prototype, "sampleTime", {
                get: function () {
                  return 1 / this.context.sampleRate;
                },
              }),
              Object.defineProperty(t, "supported", {
                get: function () {
                  var t =
                      window.hasOwnProperty("AudioContext") ||
                      window.hasOwnProperty("webkitAudioContext"),
                    e = window.hasOwnProperty("Promise"),
                    i = window.hasOwnProperty("Worker");
                  return t && e && i;
                },
              }),
              Object.defineProperty(t, "initialized", {
                get: function () {
                  return !t.isUndef(window.TONE_AUDIO_CONTEXT);
                },
              }),
              (t.getContext = function (e) {
                if (t.initialized) e(t.context);
                else {
                  var i = function () {
                    e(t.context), t.Context.off("init", i);
                  };
                  t.Context.on("init", i);
                }
                return t;
              }),
              (t.version = "r12-dev"),
              t
            );
          })();
        })(),
        t(function (t) {
          return (
            (t.Emitter = function () {
              t.call(this), (this._events = {});
            }),
            t.extend(t.Emitter),
            (t.Emitter.prototype.on = function (t, e) {
              var i,
                n,
                o = t.split(/\W+/);
              for (i = 0; i < o.length; i++)
                (n = o[i]),
                  this._events.hasOwnProperty(n) || (this._events[n] = []),
                  this._events[n].push(e);
              return this;
            }),
            (t.Emitter.prototype.once = function (t, e) {
              var i = function () {
                e.apply(this, arguments), this.off(t, i);
              }.bind(this);
              return this.on(t, i), this;
            }),
            (t.Emitter.prototype.off = function (e, i) {
              var n,
                o,
                s,
                r = e.split(/\W+/);
              for (n = 0; n < r.length; n++)
                if (((e = r[n]), this._events.hasOwnProperty(e)))
                  if (t.isUndef(i)) this._events[e] = [];
                  else
                    for (o = this._events[e], s = 0; s < o.length; s++)
                      o[s] === i && o.splice(s, 1);
              return this;
            }),
            (t.Emitter.prototype.emit = function (t) {
              var e, i, n, o;
              if (
                this._events &&
                ((e = Array.apply(null, arguments).slice(1)),
                this._events.hasOwnProperty(t))
              )
                for (
                  i = this._events[t].slice(0), n = 0, o = i.length;
                  n < o;
                  n++
                )
                  i[n].apply(this, e);
              return this;
            }),
            (t.Emitter.mixin = function (e) {
              var i,
                n,
                o,
                s = ["on", "once", "off", "emit"];
              for (e._events = {}, i = 0; i < s.length; i++)
                (n = s[i]), (o = t.Emitter.prototype[n]), (e[n] = o);
              return t.Emitter;
            }),
            (t.Emitter.prototype.dispose = function () {
              return (
                t.prototype.dispose.call(this), (this._events = null), this
              );
            }),
            t.Emitter
          );
        }),
        t(function (t) {
          return (
            (t.Timeline = function () {
              var e = t.defaults(arguments, ["memory"], t.Timeline);
              t.call(this), (this._timeline = []), (this.memory = e.memory);
            }),
            t.extend(t.Timeline),
            (t.Timeline.defaults = { memory: 1 / 0 }),
            Object.defineProperty(t.Timeline.prototype, "length", {
              get: function () {
                return this._timeline.length;
              },
            }),
            (t.Timeline.prototype.add = function (e) {
              var i, n;
              if (t.isUndef(e.time))
                throw new Error(
                  "Tone.Timeline: events must have a time attribute"
                );
              return (
                (e.time = e.time.valueOf()),
                (i = this._search(e.time)),
                this._timeline.splice(i + 1, 0, e),
                this.length > this.memory &&
                  ((n = this.length - this.memory),
                  this._timeline.splice(0, n)),
                this
              );
            }),
            (t.Timeline.prototype.remove = function (t) {
              var e = this._timeline.indexOf(t);
              return -1 !== e && this._timeline.splice(e, 1), this;
            }),
            (t.Timeline.prototype.get = function (e, i) {
              i = t.defaultArg(i, "time");
              var n = this._search(e, i);
              return -1 !== n ? this._timeline[n] : null;
            }),
            (t.Timeline.prototype.peek = function () {
              return this._timeline[0];
            }),
            (t.Timeline.prototype.shift = function () {
              return this._timeline.shift();
            }),
            (t.Timeline.prototype.getAfter = function (e, i) {
              i = t.defaultArg(i, "time");
              var n = this._search(e, i);
              return n + 1 < this._timeline.length
                ? this._timeline[n + 1]
                : null;
            }),
            (t.Timeline.prototype.getBefore = function (e, i) {
              var n, o;
              return (
                (i = t.defaultArg(i, "time")),
                (n = this._timeline.length) > 0 && this._timeline[n - 1][i] < e
                  ? this._timeline[n - 1]
                  : ((o = this._search(e, i)),
                    o - 1 >= 0 ? this._timeline[o - 1] : null)
              );
            }),
            (t.Timeline.prototype.cancel = function (t) {
              var e, i;
              if (this._timeline.length > 1)
                if ((e = this._search(t)) >= 0)
                  if (this._timeline[e].time === t) {
                    for (i = e; i >= 0 && this._timeline[i].time === t; i--)
                      e = i;
                    this._timeline = this._timeline.slice(0, e);
                  } else this._timeline = this._timeline.slice(0, e + 1);
                else this._timeline = [];
              else
                1 === this._timeline.length &&
                  this._timeline[0].time >= t &&
                  (this._timeline = []);
              return this;
            }),
            (t.Timeline.prototype.cancelBefore = function (t) {
              var e = this._search(t);
              return (
                e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this
              );
            }),
            (t.Timeline.prototype.previousEvent = function (t) {
              var e = this._timeline.indexOf(t);
              return e > 0 ? this._timeline[e - 1] : null;
            }),
            (t.Timeline.prototype._search = function (e, i) {
              var n, o, s, r, a, l, u, c;
              if (0 === this._timeline.length) return -1;
              if (
                ((i = t.defaultArg(i, "time")),
                (n = 0),
                (o = this._timeline.length),
                (s = o),
                o > 0 && this._timeline[o - 1][i] <= e)
              )
                return o - 1;
              for (; n < s; ) {
                if (
                  ((r = Math.floor(n + (s - n) / 2)),
                  (a = this._timeline[r]),
                  (l = this._timeline[r + 1]),
                  a[i] === e)
                ) {
                  for (u = r; u < this._timeline.length; u++)
                    (c = this._timeline[u]), c[i] === e && (r = u);
                  return r;
                }
                if (a[i] < e && l[i] > e) return r;
                a[i] > e ? (s = r) : (n = r + 1);
              }
              return -1;
            }),
            (t.Timeline.prototype._iterate = function (e, i, n) {
              (i = t.defaultArg(i, 0)),
                (n = t.defaultArg(n, this._timeline.length - 1)),
                this._timeline.slice(i, n + 1).forEach(
                  function (t) {
                    e.call(this, t);
                  }.bind(this)
                );
            }),
            (t.Timeline.prototype.forEach = function (t) {
              return this._iterate(t), this;
            }),
            (t.Timeline.prototype.forEachBefore = function (t, e) {
              var i = this._search(t);
              return -1 !== i && this._iterate(e, 0, i), this;
            }),
            (t.Timeline.prototype.forEachAfter = function (t, e) {
              var i = this._search(t);
              return this._iterate(e, i + 1), this;
            }),
            (t.Timeline.prototype.forEachFrom = function (t, e) {
              for (
                var i = this._search(t);
                i >= 0 && this._timeline[i].time >= t;

              )
                i--;
              return this._iterate(e, i + 1), this;
            }),
            (t.Timeline.prototype.forEachAtTime = function (t, e) {
              var i = this._search(t);
              return (
                -1 !== i &&
                  this._iterate(
                    function (i) {
                      i.time === t && e.call(this, i);
                    },
                    0,
                    i
                  ),
                this
              );
            }),
            (t.Timeline.prototype.dispose = function () {
              return (
                t.prototype.dispose.call(this), (this._timeline = null), this
              );
            }),
            t.Timeline
          );
        }),
        t(function (t) {
          var e;
          t.supported &&
            (!window.hasOwnProperty("OfflineAudioContext") &&
              window.hasOwnProperty("webkitOfflineAudioContext") &&
              (window.OfflineAudioContext = window.webkitOfflineAudioContext),
            (e = new OfflineAudioContext(1, 1, 44100)),
            e.startRendering() instanceof Promise ||
              ((OfflineAudioContext.prototype._native_startRendering =
                OfflineAudioContext.prototype.startRendering),
              (OfflineAudioContext.prototype.startRendering = function () {
                return new Promise(
                  function (t) {
                    (this.oncomplete = function (e) {
                      t(e.renderedBuffer);
                    }),
                      this._native_startRendering();
                  }.bind(this)
                );
              })));
        }),
        t(function (t) {
          var e, i, n;
          if (t.supported) {
            !window.hasOwnProperty("AudioContext") &&
              window.hasOwnProperty("webkitAudioContext") &&
              (window.AudioContext = window.webkitAudioContext),
              AudioContext.prototype.close ||
                (AudioContext.prototype.close = function () {
                  return t.isFunction(this.suspend)
                    ? this.suspend()
                    : Promise.resolve();
                }),
              AudioContext.prototype.resume ||
                (AudioContext.prototype.resume = function () {
                  return Promise.resolve();
                }),
              !AudioContext.prototype.createGain &&
                AudioContext.prototype.createGainNode &&
                (AudioContext.prototype.createGain =
                  AudioContext.prototype.createGainNode),
              !AudioContext.prototype.createDelay &&
                AudioContext.prototype.createDelayNode &&
                (AudioContext.prototype.createDelay =
                  AudioContext.prototype.createDelayNode),
              (e = !1),
              (i = new OfflineAudioContext(1, 1, 44100)),
              (n = new Uint32Array([
                1179011410, 48, 1163280727, 544501094, 16, 131073, 44100,
                176400, 1048580, 1635017060, 8, 0, 0, 0, 0,
              ]).buffer);
            try {
              i.decodeAudioData(n) instanceof Promise && (e = !0);
            } catch (t) {
              e = !1;
            }
            e ||
              ((AudioContext.prototype._native_decodeAudioData =
                AudioContext.prototype.decodeAudioData),
              (AudioContext.prototype.decodeAudioData = function (t) {
                return new Promise(
                  function (e, i) {
                    this._native_decodeAudioData(t, e, i);
                  }.bind(this)
                );
              }));
          }
        }),
        t(function (t) {
          (t.Context = function () {
            var i, n;
            if (
              (t.Emitter.call(this),
              (i = t.defaults(arguments, ["context"], t.Context)),
              !i.context &&
                ((i.context = new window.AudioContext()), !i.context))
            )
              throw new Error(
                "could not create AudioContext. Possibly too many AudioContexts running already."
              );
            this._context = i.context;
            for (n in this._context) this._defineProperty(this._context, n);
            (this._latencyHint = i.latencyHint),
              (this._constants = {}),
              (this.lookAhead = i.lookAhead),
              (this._computedUpdateInterval = 0),
              (this._ticker = new e(
                this.emit.bind(this, "tick"),
                i.clockSource,
                i.updateInterval
              )),
              (this._timeouts = new t.Timeline()),
              (this._timeoutIds = 0),
              this.on("tick", this._timeoutLoop.bind(this));
          }),
            t.extend(t.Context, t.Emitter),
            t.Emitter.mixin(t.Context),
            (t.Context.defaults = {
              clockSource: "worker",
              latencyHint: "interactive",
              lookAhead: 0.1,
              updateInterval: 0.03,
            }),
            (t.Context.prototype._defineProperty = function (e, i) {
              t.isUndef(this[i]) &&
                Object.defineProperty(this, i, {
                  get: function () {
                    return "function" == typeof e[i] ? e[i].bind(e) : e[i];
                  },
                  set: function (t) {
                    e[i] = t;
                  },
                });
            }),
            (t.Context.prototype.now = function () {
              return this._context.currentTime + this.lookAhead;
            }),
            (t.Context.prototype.ready = function () {
              return new Promise(
                function (t) {
                  "running" === this._context.state
                    ? t()
                    : this._context.resume().then(function () {
                        t();
                      });
                }.bind(this)
              );
            }),
            (t.Context.prototype.close = function () {
              return this._context.close().then(
                function () {
                  t.Context.emit("close", this);
                }.bind(this)
              );
            }),
            (t.Context.prototype.getConstant = function (t) {
              var e, i, n, o;
              if (this._constants[t]) return this._constants[t];
              for (
                e = this._context.createBuffer(
                  1,
                  128,
                  this._context.sampleRate
                ),
                  i = e.getChannelData(0),
                  n = 0;
                n < i.length;
                n++
              )
                i[n] = t;
              return (
                (o = this._context.createBufferSource()),
                (o.channelCount = 1),
                (o.channelCountMode = "explicit"),
                (o.buffer = e),
                (o.loop = !0),
                o.start(0),
                (this._constants[t] = o),
                o
              );
            }),
            (t.Context.prototype._timeoutLoop = function () {
              for (
                var t = this.now();
                this._timeouts &&
                this._timeouts.length &&
                this._timeouts.peek().time <= t;

              )
                this._timeouts.shift().callback();
            }),
            (t.Context.prototype.setTimeout = function (t, e) {
              this._timeoutIds++;
              var i = this.now();
              return (
                this._timeouts.add({
                  callback: t,
                  time: i + e,
                  id: this._timeoutIds,
                }),
                this._timeoutIds
              );
            }),
            (t.Context.prototype.clearTimeout = function (t) {
              return (
                this._timeouts.forEach(function (e) {
                  e.id === t && this.remove(e);
                }),
                this
              );
            }),
            Object.defineProperty(t.Context.prototype, "updateInterval", {
              get: function () {
                return this._ticker.updateInterval;
              },
              set: function (t) {
                this._ticker.updateInterval = t;
              },
            }),
            Object.defineProperty(t.Context.prototype, "clockSource", {
              get: function () {
                return this._ticker.type;
              },
              set: function (t) {
                this._ticker.type = t;
              },
            }),
            Object.defineProperty(t.Context.prototype, "latencyHint", {
              get: function () {
                return this._latencyHint;
              },
              set: function (e) {
                var i = e;
                if (((this._latencyHint = e), t.isString(e)))
                  switch (e) {
                    case "interactive":
                      (i = 0.1), (this._context.latencyHint = e);
                      break;
                    case "playback":
                      (i = 0.8), (this._context.latencyHint = e);
                      break;
                    case "balanced":
                      (i = 0.25), (this._context.latencyHint = e);
                      break;
                    case "fastest":
                      (this._context.latencyHint = "interactive"), (i = 0.01);
                  }
                (this.lookAhead = i), (this.updateInterval = i / 3);
              },
            }),
            (t.Context.prototype.dispose = function () {
              return this.close().then(
                function () {
                  t.Emitter.prototype.dispose.call(this),
                    this._ticker.dispose(),
                    (this._ticker = null),
                    this._timeouts.dispose(),
                    (this._timeouts = null);
                  for (var e in this._constants)
                    this._constants[e].disconnect();
                  this._constants = null;
                }.bind(this)
              );
            });
          var e = function (e, i, n) {
            (this._type = i),
              (this._updateInterval = n),
              (this._callback = t.defaultArg(e, t.noOp)),
              this._createClock();
          };
          return (
            (e.Type = {
              Worker: "worker",
              Timeout: "timeout",
              Offline: "offline",
            }),
            (e.prototype._createWorker = function () {
              var t, e, i;
              (window.URL = window.URL || window.webkitURL),
                (t = new Blob([
                  "var timeoutTime = " +
                    (1e3 * this._updateInterval).toFixed(1) +
                    ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();",
                ])),
                (e = URL.createObjectURL(t)),
                (i = new Worker(e)),
                (i.onmessage = this._callback.bind(this)),
                (this._worker = i);
            }),
            (e.prototype._createTimeout = function () {
              this._timeout = setTimeout(
                function () {
                  this._createTimeout(), this._callback();
                }.bind(this),
                1e3 * this._updateInterval
              );
            }),
            (e.prototype._createClock = function () {
              if (this._type === e.Type.Worker)
                try {
                  this._createWorker();
                } catch (t) {
                  (this._type = e.Type.Timeout), this._createClock();
                }
              else this._type === e.Type.Timeout && this._createTimeout();
            }),
            Object.defineProperty(e.prototype, "updateInterval", {
              get: function () {
                return this._updateInterval;
              },
              set: function (t) {
                (this._updateInterval = Math.max(t, 128 / 44100)),
                  this._type === e.Type.Worker &&
                    this._worker.postMessage(Math.max(1e3 * t, 1));
              },
            }),
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (t) {
                this._disposeClock(), (this._type = t), this._createClock();
              },
            }),
            (e.prototype._disposeClock = function () {
              this._timeout &&
                (clearTimeout(this._timeout), (this._timeout = null)),
                this._worker &&
                  (this._worker.terminate(),
                  (this._worker.onmessage = null),
                  (this._worker = null));
            }),
            (e.prototype.dispose = function () {
              this._disposeClock(), (this._callback = null);
            }),
            t.getContext(function () {
              function e(e, i, o) {
                if (e.input)
                  (o = t.defaultArg(o, 0)),
                    t.isArray(e.input)
                      ? this.connect(e.input[o])
                      : this.connect(e.input, i, o);
                else
                  try {
                    e instanceof AudioNode
                      ? n.call(this, e, i, o)
                      : n.call(this, e, i);
                  } catch (t) {
                    throw new Error(
                      "error connecting to node: " + e + "\n" + t
                    );
                  }
              }
              function i(e, i, n) {
                if (e && e.input && t.isArray(e.input))
                  (n = t.defaultArg(n, 0)), this.disconnect(e.input[n], i, 0);
                else if (e && e.input) this.disconnect(e.input, i, n);
                else
                  try {
                    o.apply(this, arguments);
                  } catch (t) {
                    throw new Error(
                      "error disconnecting node: " + e + "\n" + t
                    );
                  }
              }
              var n = AudioNode.prototype.connect,
                o = AudioNode.prototype.disconnect;
              AudioNode.prototype.connect !== e &&
                ((AudioNode.prototype.connect = e),
                (AudioNode.prototype.disconnect = i));
            }),
            t.supported && !t.initialized
              ? ((t.context = new t.Context()),
                window.TONE_SILENCE_VERSION_LOGGING ||
                  console.log(
                    "%c * Tone.js " + t.version + " * ",
                    "background: #000; color: #fff"
                  ))
              : t.supported ||
                console.warn("This browser does not support Tone.js"),
            t.Context
          );
        }),
        t(function (t) {
          return (
            (t.AudioNode = function () {
              t.call(this);
              var e = t.defaults(arguments, ["context"], {
                context: t.context,
              });
              this._context = e.context;
            }),
            t.extend(t.AudioNode),
            Object.defineProperty(t.AudioNode.prototype, "context", {
              get: function () {
                return this._context;
              },
            }),
            (t.AudioNode.prototype.createInsOuts = function (t, e) {
              1 === t
                ? (this.input = this.context.createGain())
                : t > 1 && (this.input = new Array(t)),
                1 === e
                  ? (this.output = this.context.createGain())
                  : e > 1 && (this.output = new Array(e));
            }),
            Object.defineProperty(t.AudioNode.prototype, "numberOfInputs", {
              get: function () {
                return this.input
                  ? t.isArray(this.input)
                    ? this.input.length
                    : 1
                  : 0;
              },
            }),
            Object.defineProperty(t.AudioNode.prototype, "numberOfOutputs", {
              get: function () {
                return this.output
                  ? t.isArray(this.output)
                    ? this.output.length
                    : 1
                  : 0;
              },
            }),
            (t.AudioNode.prototype.connect = function (e, i, n) {
              return (
                t.isArray(this.output)
                  ? ((i = t.defaultArg(i, 0)), this.output[i].connect(e, 0, n))
                  : this.output.connect(e, i, n),
                this
              );
            }),
            (t.AudioNode.prototype.disconnect = function (e, i, n) {
              t.isArray(this.output)
                ? t.isNumber(e)
                  ? this.output[e].disconnect()
                  : ((i = t.defaultArg(i, 0)),
                    this.output[i].disconnect(e, 0, n))
                : this.output.disconnect.apply(this.output, arguments);
            }),
            (t.AudioNode.prototype.chain = function () {
              var t,
                e,
                i = this;
              for (t = 0; t < arguments.length; t++)
                (e = arguments[t]), i.connect(e), (i = e);
              return this;
            }),
            (t.AudioNode.prototype.fan = function () {
              for (var t = 0; t < arguments.length; t++)
                this.connect(arguments[t]);
              return this;
            }),
            window.AudioNode &&
              ((AudioNode.prototype.chain = t.AudioNode.prototype.chain),
              (AudioNode.prototype.fan = t.AudioNode.prototype.fan)),
            (t.AudioNode.prototype.dispose = function () {
              return (
                t.isUndef(this.input) ||
                  (this.input instanceof AudioNode && this.input.disconnect(),
                  (this.input = null)),
                t.isUndef(this.output) ||
                  (this.output instanceof AudioNode && this.output.disconnect(),
                  (this.output = null)),
                (this._context = null),
                this
              );
            }),
            t.AudioNode
          );
        }),
        t(function (t) {
          return (
            (t.SignalBase = function () {
              t.AudioNode.call(this);
            }),
            t.extend(t.SignalBase, t.AudioNode),
            (t.SignalBase.prototype.connect = function (e, i, n) {
              return (
                (t.Signal && t.Signal === e.constructor) ||
                (t.Param && t.Param === e.constructor) ||
                (t.TimelineSignal && t.TimelineSignal === e.constructor)
                  ? (e._param.cancelScheduledValues(0),
                    (e._param.value = 0),
                    (e.overridden = !0))
                  : e instanceof AudioParam &&
                    (e.cancelScheduledValues(0), (e.value = 0)),
                t.AudioNode.prototype.connect.call(this, e, i, n),
                this
              );
            }),
            t.SignalBase
          );
        }),
        t(function (t) {
          return (
            (t.WaveShaper = function (e, i) {
              t.SignalBase.call(this),
                (this._shaper =
                  this.input =
                  this.output =
                    this.context.createWaveShaper()),
                (this._curve = null),
                Array.isArray(e)
                  ? (this.curve = e)
                  : isFinite(e) || t.isUndef(e)
                  ? (this._curve = new Float32Array(t.defaultArg(e, 1024)))
                  : t.isFunction(e) &&
                    ((this._curve = new Float32Array(t.defaultArg(i, 1024))),
                    this.setMap(e));
            }),
            t.extend(t.WaveShaper, t.SignalBase),
            (t.WaveShaper.prototype.setMap = function (t) {
              var e, i, n;
              for (e = 0, i = this._curve.length; e < i; e++)
                (n = (e / (i - 1)) * 2 - 1), (this._curve[e] = t(n, e));
              return (this._shaper.curve = this._curve), this;
            }),
            Object.defineProperty(t.WaveShaper.prototype, "curve", {
              get: function () {
                return this._shaper.curve;
              },
              set: function (t) {
                (this._curve = new Float32Array(t)),
                  (this._shaper.curve = this._curve);
              },
            }),
            Object.defineProperty(t.WaveShaper.prototype, "oversample", {
              get: function () {
                return this._shaper.oversample;
              },
              set: function (t) {
                if (-1 === ["none", "2x", "4x"].indexOf(t))
                  throw new RangeError(
                    "Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'"
                  );
                this._shaper.oversample = t;
              },
            }),
            (t.WaveShaper.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._shaper.disconnect(),
                (this._shaper = null),
                (this._curve = null),
                this
              );
            }),
            t.WaveShaper
          );
        }),
        t(function (t) {
          return (
            (t.TimeBase = function (e, i) {
              if (!(this instanceof t.TimeBase)) return new t.TimeBase(e, i);
              if (
                ((this._val = e),
                (this._units = i),
                t.isUndef(this._units) &&
                  t.isString(this._val) &&
                  parseFloat(this._val) == this._val &&
                  "+" !== this._val.charAt(0))
              )
                (this._val = parseFloat(this._val)),
                  (this._units = this._defaultUnits);
              else if (e && e.constructor === this.constructor)
                (this._val = e._val), (this._units = e._units);
              else if (e instanceof t.TimeBase)
                switch (this._defaultUnits) {
                  case "s":
                    this._val = e.toSeconds();
                    break;
                  case "i":
                    this._val = e.toTicks();
                    break;
                  case "hz":
                    this._val = e.toFrequency();
                    break;
                  case "midi":
                    this._val = e.toMidi();
                    break;
                  default:
                    throw new Error(
                      "Unrecognized default units " + this._defaultUnits
                    );
                }
            }),
            t.extend(t.TimeBase),
            (t.TimeBase.prototype._expressions = {
              n: {
                regexp: /^(\d+)n(\.?)$/i,
                method: function (t, e) {
                  t = parseInt(t);
                  var i = "." === e ? 1.5 : 1;
                  return 1 === t
                    ? this._beatsToUnits(this._getTimeSignature()) * i
                    : this._beatsToUnits(4 / t) * i;
                },
              },
              t: {
                regexp: /^(\d+)t$/i,
                method: function (t) {
                  return (
                    (t = parseInt(t)), this._beatsToUnits(8 / (3 * parseInt(t)))
                  );
                },
              },
              m: {
                regexp: /^(\d+)m$/i,
                method: function (t) {
                  return this._beatsToUnits(
                    parseInt(t) * this._getTimeSignature()
                  );
                },
              },
              i: {
                regexp: /^(\d+)i$/i,
                method: function (t) {
                  return this._ticksToUnits(parseInt(t));
                },
              },
              hz: {
                regexp: /^(\d+(?:\.\d+)?)hz$/i,
                method: function (t) {
                  return this._frequencyToUnits(parseFloat(t));
                },
              },
              tr: {
                regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
                method: function (t, e, i) {
                  var n = 0;
                  return (
                    t &&
                      "0" !== t &&
                      (n += this._beatsToUnits(
                        this._getTimeSignature() * parseFloat(t)
                      )),
                    e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))),
                    i &&
                      "0" !== i &&
                      (n += this._beatsToUnits(parseFloat(i) / 4)),
                    n
                  );
                },
              },
              s: {
                regexp: /^(\d+(?:\.\d+)?s)$/,
                method: function (t) {
                  return this._secondsToUnits(parseFloat(t));
                },
              },
              samples: {
                regexp: /^(\d+)samples$/,
                method: function (t) {
                  return parseInt(t) / this.context.sampleRate;
                },
              },
              default: {
                regexp: /^(\d+(?:\.\d+)?)$/,
                method: function (t) {
                  return this._expressions[this._defaultUnits].method.call(
                    this,
                    t
                  );
                },
              },
            }),
            (t.TimeBase.prototype._defaultUnits = "s"),
            (t.TimeBase.prototype._getBpm = function () {
              return t.Transport ? t.Transport.bpm.value : 120;
            }),
            (t.TimeBase.prototype._getTimeSignature = function () {
              return t.Transport ? t.Transport.timeSignature : 4;
            }),
            (t.TimeBase.prototype._getPPQ = function () {
              return t.Transport ? t.Transport.PPQ : 192;
            }),
            (t.TimeBase.prototype._now = function () {
              return t.now();
            }),
            (t.TimeBase.prototype._frequencyToUnits = function (t) {
              return 1 / t;
            }),
            (t.TimeBase.prototype._beatsToUnits = function (t) {
              return (60 / this._getBpm()) * t;
            }),
            (t.TimeBase.prototype._secondsToUnits = function (t) {
              return t;
            }),
            (t.TimeBase.prototype._ticksToUnits = function (t) {
              return t * (this._beatsToUnits(1) / this._getPPQ());
            }),
            (t.TimeBase.prototype._noArg = function () {
              return this._now();
            }),
            (t.TimeBase.prototype.valueOf = function () {
              var e, i, n;
              if (t.isUndef(this._val)) return this._noArg();
              if (t.isString(this._val) && t.isUndef(this._units))
                for (e in this._expressions)
                  if (this._expressions[e].regexp.test(this._val.trim())) {
                    this._units = e;
                    break;
                  }
              return t.isUndef(this._units)
                ? this._val
                : ((i = this._expressions[this._units]),
                  (n = this._val.toString().trim().match(i.regexp)),
                  n
                    ? i.method.apply(this, n.slice(1))
                    : i.method.call(this, parseFloat(this._val)));
            }),
            (t.TimeBase.prototype.toSeconds = function () {
              return this.valueOf();
            }),
            (t.TimeBase.prototype.toFrequency = function () {
              return 1 / this.toSeconds();
            }),
            (t.TimeBase.prototype.toSamples = function () {
              return this.toSeconds() * this.context.sampleRate;
            }),
            (t.TimeBase.prototype.toMilliseconds = function () {
              return 1e3 * this.toSeconds();
            }),
            (t.TimeBase.prototype.dispose = function () {
              (this._val = null), (this._units = null);
            }),
            t.TimeBase
          );
        }),
        t(function (t) {
          var e, i;
          return (
            (t.Frequency = function (e, i) {
              if (!(this instanceof t.Frequency)) return new t.Frequency(e, i);
              t.TimeBase.call(this, e, i);
            }),
            t.extend(t.Frequency, t.TimeBase),
            (t.Frequency.prototype._expressions = Object.assign(
              {},
              t.TimeBase.prototype._expressions,
              {
                midi: {
                  regexp: /^(\d+(?:\.\d+)?midi)/,
                  method: function (e) {
                    return "midi" === this._defaultUnits
                      ? e
                      : t.Frequency.mtof(e);
                  },
                },
                note: {
                  regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                  method: function (i, n) {
                    var o = e[i.toLowerCase()],
                      s = o + 12 * (parseInt(n) + 1);
                    return "midi" === this._defaultUnits
                      ? s
                      : t.Frequency.mtof(s);
                  },
                },
                tr: {
                  regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                  method: function (t, e, i) {
                    var n = 1;
                    return (
                      t &&
                        "0" !== t &&
                        (n *= this._beatsToUnits(
                          this._getTimeSignature() * parseFloat(t)
                        )),
                      e &&
                        "0" !== e &&
                        (n *= this._beatsToUnits(parseFloat(e))),
                      i &&
                        "0" !== i &&
                        (n *= this._beatsToUnits(parseFloat(i) / 4)),
                      n
                    );
                  },
                },
              }
            )),
            (t.Frequency.prototype.transpose = function (e) {
              return (
                (this._expr = function (e, i) {
                  return e() * t.intervalToFrequencyRatio(i);
                }.bind(this, this._expr, e)),
                this
              );
            }),
            (t.Frequency.prototype.harmonize = function (e) {
              return (
                (this._expr = function (e, i) {
                  var n,
                    o = e(),
                    s = [];
                  for (n = 0; n < i.length; n++)
                    s[n] = o * t.intervalToFrequencyRatio(i[n]);
                  return s;
                }.bind(this, this._expr, e)),
                this
              );
            }),
            (t.Frequency.prototype.toMidi = function () {
              return t.Frequency.ftom(this.valueOf());
            }),
            (t.Frequency.prototype.toNote = function () {
              var e = this.toFrequency(),
                n = Math.log(e / t.Frequency.A4) / Math.LN2,
                o = Math.round(12 * n) + 57,
                s = Math.floor(o / 12);
              return s < 0 && (o += -12 * s), i[o % 12] + s.toString();
            }),
            (t.Frequency.prototype.toSeconds = function () {
              return 1 / t.TimeBase.prototype.toSeconds.call(this);
            }),
            (t.Frequency.prototype.toFrequency = function () {
              return t.TimeBase.prototype.toFrequency.call(this);
            }),
            (t.Frequency.prototype.toTicks = function () {
              var e = this._beatsToUnits(1),
                i = this.valueOf() / e;
              return Math.floor(i * t.Transport.PPQ);
            }),
            (t.Frequency.prototype._noArg = function () {
              return 0;
            }),
            (t.Frequency.prototype._frequencyToUnits = function (t) {
              return t;
            }),
            (t.Frequency.prototype._ticksToUnits = function (e) {
              return 1 / ((60 * e) / (t.Transport.bpm.value * t.Transport.PPQ));
            }),
            (t.Frequency.prototype._beatsToUnits = function (e) {
              return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e);
            }),
            (t.Frequency.prototype._secondsToUnits = function (t) {
              return 1 / t;
            }),
            (t.Frequency.prototype._defaultUnits = "hz"),
            (e = {
              cbb: -2,
              cb: -1,
              c: 0,
              "c#": 1,
              cx: 2,
              dbb: 0,
              db: 1,
              d: 2,
              "d#": 3,
              dx: 4,
              ebb: 2,
              eb: 3,
              e: 4,
              "e#": 5,
              ex: 6,
              fbb: 3,
              fb: 4,
              f: 5,
              "f#": 6,
              fx: 7,
              gbb: 5,
              gb: 6,
              g: 7,
              "g#": 8,
              gx: 9,
              abb: 7,
              ab: 8,
              a: 9,
              "a#": 10,
              ax: 11,
              bbb: 9,
              bb: 10,
              b: 11,
              "b#": 12,
              bx: 13,
            }),
            (i = [
              "C",
              "C#",
              "D",
              "D#",
              "E",
              "F",
              "F#",
              "G",
              "G#",
              "A",
              "A#",
              "B",
            ]),
            (t.Frequency.A4 = 440),
            (t.Frequency.mtof = function (e) {
              return t.Frequency.A4 * Math.pow(2, (e - 69) / 12);
            }),
            (t.Frequency.ftom = function (e) {
              return (
                69 + Math.round((12 * Math.log(e / t.Frequency.A4)) / Math.LN2)
              );
            }),
            t.Frequency
          );
        }),
        t(function (t) {
          return (
            (t.Time = function (e, i) {
              if (!(this instanceof t.Time)) return new t.Time(e, i);
              t.TimeBase.call(this, e, i);
            }),
            t.extend(t.Time, t.TimeBase),
            (t.Time.prototype._expressions = Object.assign(
              {},
              t.TimeBase.prototype._expressions,
              {
                quantize: {
                  regexp: /^@(.+)/,
                  method: function (e) {
                    if (t.Transport) {
                      var i = new this.constructor(e);
                      return t.Transport.nextSubdivision(i);
                    }
                    return 0;
                  },
                },
                now: {
                  regexp: /^\+(.+)/,
                  method: function (t) {
                    return this._now() + new this.constructor(t);
                  },
                },
              }
            )),
            (t.Time.prototype.quantize = function (e, i) {
              var n, o, s, r, a;
              return (
                (i = t.defaultArg(i, 1)),
                (n = new this.constructor(e)),
                (o = this.valueOf()),
                (s = Math.round(o / n)),
                (r = s * n),
                (a = r - o),
                o + a * i
              );
            }),
            (t.Time.prototype.toNotation = function () {
              var e,
                i,
                n,
                o,
                s = this.toSeconds(),
                r = ["1m"];
              for (e = 1; e < 8; e++)
                (i = Math.pow(2, e)),
                  r.push(i + "n."),
                  r.push(i + "n"),
                  r.push(i + "t");
              return (
                r.push("0"),
                (n = r[0]),
                (o = t.Time(r[0]).toSeconds()),
                r.forEach(function (e) {
                  var i = t.Time(e).toSeconds();
                  Math.abs(i - s) < Math.abs(o - s) && ((n = e), (o = i));
                }),
                n
              );
            }),
            (t.Time.prototype.toBarsBeatsSixteenths = function () {
              var t,
                e = this._beatsToUnits(1),
                i = this.valueOf() / e,
                n = Math.floor(i / this._getTimeSignature()),
                o = (i % 1) * 4;
              return (
                (i = Math.floor(i) % this._getTimeSignature()),
                (o = o.toString()),
                o.length > 3 && (o = parseFloat(parseFloat(o).toFixed(3))),
                (t = [n, i, o]),
                t.join(":")
              );
            }),
            (t.Time.prototype.toTicks = function () {
              var t = this._beatsToUnits(1),
                e = this.valueOf() / t;
              return Math.round(e * this._getPPQ());
            }),
            (t.Time.prototype.toSeconds = function () {
              return this.valueOf();
            }),
            (t.Time.prototype.toMidi = function () {
              return t.Frequency.ftom(this.toFrequency());
            }),
            t.Time
          );
        }),
        t(function (t) {
          return (
            (t.TransportTime = function (e, i) {
              if (!(this instanceof t.TransportTime))
                return new t.TransportTime(e, i);
              t.Time.call(this, e, i);
            }),
            t.extend(t.TransportTime, t.Time),
            (t.TransportTime.prototype._now = function () {
              return t.Transport.seconds;
            }),
            t.TransportTime
          );
        }),
        t(function (t) {
          return (
            (t.Type = {
              Default: "number",
              Time: "time",
              Frequency: "frequency",
              TransportTime: "transportTime",
              Ticks: "ticks",
              NormalRange: "normalRange",
              AudioRange: "audioRange",
              Decibels: "db",
              Interval: "interval",
              BPM: "bpm",
              Positive: "positive",
              Gain: "gain",
              Cents: "cents",
              Degrees: "degrees",
              MIDI: "midi",
              BarsBeatsSixteenths: "barsBeatsSixteenths",
              Samples: "samples",
              Hertz: "hertz",
              Note: "note",
              Milliseconds: "milliseconds",
              Seconds: "seconds",
              Notation: "notation",
            }),
            (t.prototype.toSeconds = function (e) {
              return t.isNumber(e)
                ? e
                : t.isUndef(e)
                ? this.now()
                : t.isString(e)
                ? new t.Time(e).toSeconds()
                : e instanceof t.TimeBase
                ? e.toSeconds()
                : void 0;
            }),
            (t.prototype.toFrequency = function (e) {
              return t.isNumber(e)
                ? e
                : t.isString(e) || t.isUndef(e)
                ? new t.Frequency(e).valueOf()
                : e instanceof t.TimeBase
                ? e.toFrequency()
                : void 0;
            }),
            (t.prototype.toTicks = function (e) {
              return t.isNumber(e) || t.isString(e)
                ? new t.TransportTime(e).toTicks()
                : t.isUndef(e)
                ? t.Transport.ticks
                : e instanceof t.TimeBase
                ? e.toTicks()
                : void 0;
            }),
            t
          );
        }),
        t(function (t) {
          function e(e) {
            e._events || (e._events = new t.Timeline(1e3));
          }
          var i = function (t, e, i, n, o) {
              return i + (e - i) * Math.exp(-(o - t) / n);
            },
            n = function (t, e, i, n, o) {
              return e + ((o - t) / (i - t)) * (n - e);
            },
            o = function (t, e, i, n, o) {
              return e * Math.pow(n / e, (o - t) / (i - t));
            },
            s = {
              Linear: "linearRampToValueAtTime",
              Exponential: "exponentialRampToValueAtTime",
              Target: "setTargetAtTime",
              SetValue: "setValueAtTime",
            };
          t.supported &&
            (Object.defineProperty(AudioParam.prototype, "value", {
              get: function () {
                var e = t.context.currentTime;
                return this.getValueAtTime(e);
              },
              set: function (e) {
                this._initialValue = e;
                var i = t.context.currentTime;
                this.setValueAtTime(e, i);
              },
            }),
            AudioParam.prototype.hasOwnProperty("defaultValue") ||
              Object.defineProperty(AudioParam.prototype, "defaultValue", {
                get: function () {
                  return 1;
                },
              }),
            AudioParam.prototype.hasOwnProperty("minValue") ||
              Object.defineProperty(AudioParam.prototype, "minValue", {
                get: function () {
                  return -3.4028235e38;
                },
              }),
            AudioParam.prototype.hasOwnProperty("maxValue") ||
              Object.defineProperty(AudioParam.prototype, "maxValue", {
                get: function () {
                  return 3.4028235e38;
                },
              }),
            [
              "setValueAtTime",
              "linearRampToValueAtTime",
              "exponentialRampToValueAtTime",
            ].forEach(function (t) {
              var i = "_native_" + t;
              AudioParam.prototype[i] ||
                ((AudioParam.prototype[i] = AudioParam.prototype[t]),
                (AudioParam.prototype[t] = function (n, o) {
                  if ((e(this), t === s.Exponential)) {
                    var r = this._events.get(o);
                    if (r && this.getValueAtTime(r.time) <= 0)
                      throw new Error(
                        "exponentialRampToValueAtTime must ramp from a value > 0"
                      );
                  }
                  return (
                    this._events.add({ type: t, time: o, value: n }),
                    AudioParam.prototype[i].call(this, n, o)
                  );
                }));
            }),
            AudioParam.prototype._native_setTargetAtTime ||
              ((AudioParam.prototype._native_setTargetAtTime =
                AudioParam.prototype.setTargetAtTime),
              (AudioParam.prototype.setTargetAtTime = function (t, i, n) {
                return (
                  e(this),
                  this._events.add({
                    type: s.Target,
                    value: t,
                    time: i,
                    constant: n,
                  }),
                  this._native_setTargetAtTime(t, i, n)
                );
              })),
            AudioParam.prototype._native_setValueCurveAtTime ||
              ((AudioParam.prototype._native_setValueCurveAtTime =
                AudioParam.prototype.setValueCurveAtTime),
              (AudioParam.prototype.setValueCurveAtTime = function (t, i, n) {
                var o, r;
                for (
                  e(this),
                    this._events.add({
                      type: s.SetValue,
                      value: t[0],
                      time: i,
                    }),
                    o = n / (t.length - 1),
                    r = 1;
                  r < t.length;
                  r++
                )
                  this._events.add({
                    type: s.Linear,
                    value: t[r],
                    time: i + r * o,
                  });
                return this._native_setValueCurveAtTime(t, i, n);
              })),
            AudioParam.prototype._native_cancelScheduledValues ||
              ((AudioParam.prototype._native_cancelScheduledValues =
                AudioParam.prototype.cancelScheduledValues),
              (AudioParam.prototype.cancelScheduledValues = function (t) {
                return (
                  e(this),
                  this._events.cancel(t),
                  this._native_cancelScheduledValues(t)
                );
              })),
            AudioParam.prototype._native_cancelAndHoldAtTime ||
              ((AudioParam.prototype._native_cancelAndHoldAtTime =
                AudioParam.prototype.cancelAndHoldAtTime),
              (AudioParam.prototype.cancelAndHoldAtTime = function (t) {
                var i, n, o;
                return (
                  e(this),
                  (i = this.getValueAtTime(t)),
                  (n = this._events.get(t)),
                  (o = this._events.getAfter(t)),
                  n && n.time === t
                    ? o
                      ? this._events.cancel(o.time)
                      : this._events.cancel(t + 1e-6)
                    : o &&
                      (this._events.cancel(o.time),
                      this._native_cancelAndHoldAtTime ||
                        this._native_cancelScheduledValues(t),
                      o.type === s.Linear
                        ? this._native_cancelAndHoldAtTime
                          ? this._events.add({
                              type: s.Linear,
                              value: i,
                              time: t,
                            })
                          : this.linearRampToValueAtTime(i, t)
                        : o.type === s.Exponential &&
                          (this._native_cancelAndHoldAtTime
                            ? this._events.add({
                                type: s.Exponential,
                                value: i,
                                time: t,
                              })
                            : this.exponentialRampToValueAtTime(i, t))),
                  this._events.add({ type: s.SetValue, value: i, time: t }),
                  this._native_cancelAndHoldAtTime
                    ? this._native_cancelAndHoldAtTime(t)
                    : this._native_setValueAtTime(i, t)
                );
              })),
            (AudioParam.prototype.getValueAtTime = function (r) {
              var a, l, u, c, h;
              return (
                e(this),
                (a = this._events.getAfter(r)),
                (l = this._events.get(r)),
                (u = t.defaultArg(this._initialValue, this.defaultValue)),
                null === l
                  ? u
                  : l.type === s.Target
                  ? ((c = this._events.getBefore(l.time)),
                    (h = null === c ? u : c.value),
                    i(l.time, h, l.value, l.constant, r))
                  : null === a
                  ? l.value
                  : a.type === s.Linear
                  ? n(l.time, l.value, a.time, a.value, r)
                  : a.type === s.Exponential
                  ? o(l.time, l.value, a.time, a.value, r)
                  : l.value
              );
            }));
        }),
        t(function (t) {
          return (
            (t.Param = function () {
              var e = t.defaults(
                arguments,
                ["param", "units", "convert"],
                t.Param
              );
              t.AudioNode.call(this),
                (this._param = this.input = e.param),
                (this.units = e.units),
                (this.convert = e.convert),
                (this.overridden = !1),
                t.isUndef(e.value) || (this.value = e.value);
            }),
            t.extend(t.Param, t.AudioNode),
            (t.Param.defaults = {
              units: t.Type.Default,
              convert: !0,
              param: void 0,
            }),
            Object.defineProperty(t.Param.prototype, "value", {
              get: function () {
                return this._toUnits(this._param.value);
              },
              set: function (t) {
                var e = this._fromUnits(t);
                this._param.cancelScheduledValues(0), (this._param.value = e);
              },
            }),
            Object.defineProperty(t.Param.prototype, "minValue", {
              get: function () {
                return this.units === t.Type.Time ||
                  this.units === t.Type.Frequency ||
                  this.units === t.Type.NormalRange ||
                  this.units === t.Type.Positive ||
                  this.units === t.Type.BPM
                  ? 0
                  : this.units === t.Type.AudioRange
                  ? -1
                  : this.units === t.Type.Decibels
                  ? -1 / 0
                  : this._param.minValue;
              },
            }),
            Object.defineProperty(t.Param.prototype, "maxValue", {
              get: function () {
                return this.units === t.Type.NormalRange ||
                  this.units === t.Type.AudioRange
                  ? 1
                  : this._param.maxValue;
              },
            }),
            (t.Param.prototype._fromUnits = function (e) {
              if (!this.convert && !t.isUndef(this.convert)) return e;
              switch (this.units) {
                case t.Type.Time:
                  return this.toSeconds(e);
                case t.Type.Frequency:
                  return this.toFrequency(e);
                case t.Type.Decibels:
                  return t.dbToGain(e);
                case t.Type.NormalRange:
                  return Math.min(Math.max(e, 0), 1);
                case t.Type.AudioRange:
                  return Math.min(Math.max(e, -1), 1);
                case t.Type.Positive:
                  return Math.max(e, 0);
                default:
                  return e;
              }
            }),
            (t.Param.prototype._toUnits = function (e) {
              if (!this.convert && !t.isUndef(this.convert)) return e;
              switch (this.units) {
                case t.Type.Decibels:
                  return t.gainToDb(e);
                default:
                  return e;
              }
            }),
            (t.Param.prototype._minOutput = 1e-5),
            (t.Param.prototype.setValueAtTime = function (e, i) {
              return (
                (i = this.toSeconds(i)),
                t.isPast(i),
                this._param.setValueAtTime(this._fromUnits(e), i),
                this
              );
            }),
            (t.Param.prototype.getValueAtTime = function (t) {
              return (
                (t = this.toSeconds(t)),
                this._fromUnits(this._param.getValueAtTime(t))
              );
            }),
            (t.Param.prototype.setRampPoint = function (t) {
              t = this.toSeconds(t);
              var e = this.getValueAtTime(t);
              return (
                this.cancelAndHoldAtTime(t),
                0 === e && (e = this._minOutput),
                this._param.setValueAtTime(e, t),
                this
              );
            }),
            (t.Param.prototype.linearRampToValueAtTime = function (e, i) {
              return (
                (e = this._fromUnits(e)),
                (i = this.toSeconds(i)),
                t.isPast(i),
                this._param.linearRampToValueAtTime(e, i),
                this
              );
            }),
            (t.Param.prototype.exponentialRampToValueAtTime = function (e, i) {
              return (
                (e = this._fromUnits(e)),
                (e = Math.max(this._minOutput, e)),
                (i = this.toSeconds(i)),
                t.isPast(i),
                this._param.exponentialRampToValueAtTime(e, i),
                this
              );
            }),
            (t.Param.prototype.exponentialRampTo = function (t, e, i) {
              return (
                (i = this.toSeconds(i)),
                this.setRampPoint(i),
                this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)),
                this
              );
            }),
            (t.Param.prototype.linearRampTo = function (t, e, i) {
              return (
                (i = this.toSeconds(i)),
                this.setRampPoint(i),
                this.linearRampToValueAtTime(t, i + this.toSeconds(e)),
                this
              );
            }),
            (t.Param.prototype.targetRampTo = function (t, e, i) {
              return (
                (i = this.toSeconds(i)),
                this.setRampPoint(i),
                this.exponentialAppraochValueAtTime(t, i, e),
                this
              );
            }),
            (t.Param.prototype.exponentialAppraochValueAtTime = function (
              e,
              i,
              n
            ) {
              var o = Math.log(this.toSeconds(n) + 1) / Math.log(200);
              return (
                (i = this.toSeconds(i)),
                t.isPast(i),
                this.setTargetAtTime(e, i, o)
              );
            }),
            (t.Param.prototype.setTargetAtTime = function (t, e, i) {
              if (((t = this._fromUnits(t)), i <= 0))
                throw new Error("timeConstant must be greater than 0");
              return this._param.setTargetAtTime(t, this.toSeconds(e), i), this;
            }),
            (t.Param.prototype.setValueCurveAtTime = function (e, i, n, o) {
              var s, r;
              for (
                o = t.defaultArg(o, 1),
                  n = this.toSeconds(n),
                  i = this.toSeconds(i),
                  this.setValueAtTime(e[0] * o, i),
                  s = n / (e.length - 1),
                  r = 1;
                r < e.length;
                r++
              )
                this._param.linearRampToValueAtTime(
                  this._fromUnits(e[r] * o),
                  i + r * s
                );
              return this;
            }),
            (t.Param.prototype.cancelScheduledValues = function (t) {
              return this._param.cancelScheduledValues(this.toSeconds(t)), this;
            }),
            (t.Param.prototype.cancelAndHoldAtTime = function (t) {
              return this._param.cancelAndHoldAtTime(this.toSeconds(t)), this;
            }),
            (t.Param.prototype.rampTo = function (e, i, n) {
              return (
                (i = t.defaultArg(i, 0.1)),
                this.units === t.Type.Frequency ||
                this.units === t.Type.BPM ||
                this.units === t.Type.Decibels
                  ? this.exponentialRampTo(e, i, n)
                  : this.linearRampTo(e, i, n),
                this
              );
            }),
            (t.Param.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                (this._param = null),
                this
              );
            }),
            t.Param
          );
        }),
        t(function (t) {
          return (
            (t.Gain = function () {
              var e = t.defaults(arguments, ["gain", "units"], t.Gain);
              t.AudioNode.call(this),
                (this.input =
                  this.output =
                  this._gainNode =
                    this.context.createGain()),
                (this.gain = new t.Param({
                  param: this._gainNode.gain,
                  units: e.units,
                  value: e.gain,
                  convert: e.convert,
                })),
                this._readOnly("gain");
            }),
            t.extend(t.Gain, t.AudioNode),
            (t.Gain.defaults = { gain: 1, convert: !0 }),
            (t.Gain.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this),
                this._gainNode.disconnect(),
                (this._gainNode = null),
                this._writable("gain"),
                this.gain.dispose(),
                (this.gain = null);
            }),
            t.Gain
          );
        }),
        t(function (t) {
          if (t.supported && !window.ConstantSourceNode) {
            var e = function (t) {
              var e, i, n, o;
              for (
                this.context = t,
                  e = t.createBuffer(1, 128, t.sampleRate),
                  i = e.getChannelData(0),
                  n = 0;
                n < i.length;
                n++
              )
                i[n] = 1;
              (this._bufferSource = t.createBufferSource()),
                (this._bufferSource.channelCount = 1),
                (this._bufferSource.channelCountMode = "explicit"),
                (this._bufferSource.buffer = e),
                (this._bufferSource.loop = !0),
                (o = this._output = t.createGain()),
                (this.offset = o.gain),
                this._bufferSource.connect(o);
            };
            (e.prototype.start = function (t) {
              return this._bufferSource.start(t), this;
            }),
              (e.prototype.stop = function (t) {
                return this._bufferSource.stop(t), this;
              }),
              (e.prototype.connect = function () {
                return (
                  this._output.connect.apply(this._output, arguments), this
                );
              }),
              (e.prototype.disconnect = function () {
                return (
                  this._output.disconnect.apply(this._output, arguments), this
                );
              }),
              (AudioContext.prototype.createConstantSource = function () {
                return new e(this);
              }),
              (t.Context.prototype.createConstantSource = function () {
                return new e(this);
              });
          }
        }),
        t(function (t) {
          return (
            (t.Signal = function () {
              var e = t.defaults(arguments, ["value", "units"], t.Signal),
                i = t.context.createConstantSource();
              i.start(0),
                (e.param = i.offset),
                t.Param.call(this, e),
                (this.output = i),
                (this.input = this._param = this.output.offset);
            }),
            t.extend(t.Signal, t.Param),
            (t.Signal.defaults = {
              value: 0,
              units: t.Type.Default,
              convert: !0,
            }),
            (t.Signal.prototype.connect = t.SignalBase.prototype.connect),
            (t.Signal.prototype.dispose = function () {
              return t.Param.prototype.dispose.call(this), this;
            }),
            t.Signal
          );
        }),
        t(function (t) {
          return (
            (t.TimelineSignal = function () {
              var e = t.defaults(arguments, ["value", "units"], t.Signal);
              t.Signal.call(this, e),
                (this._events = new t.Timeline(100)),
                (this._initial = this._fromUnits(this._param.value)),
                (this.value = e.value),
                delete this.input;
            }),
            t.extend(t.TimelineSignal, t.Signal),
            (t.TimelineSignal.Type = {
              Linear: "linear",
              Exponential: "exponential",
              Target: "target",
              Set: "set",
            }),
            Object.defineProperty(t.TimelineSignal.prototype, "value", {
              get: function () {
                var t = this.now(),
                  e = this.getValueAtTime(t);
                return this._toUnits(e);
              },
              set: function (t) {
                if (this._events) {
                  var e = this._fromUnits(t);
                  (this._initial = e),
                    this.cancelScheduledValues(),
                    (this._param.value = e);
                }
              },
            }),
            (t.TimelineSignal.prototype.setValueAtTime = function (e, i) {
              return (
                (e = this._fromUnits(e)),
                (i = this.toSeconds(i)),
                this._events.add({
                  type: t.TimelineSignal.Type.Set,
                  value: e,
                  time: i,
                }),
                this._param.setValueAtTime(e, i),
                this
              );
            }),
            (t.TimelineSignal.prototype.linearRampToValueAtTime = function (
              e,
              i
            ) {
              return (
                (e = this._fromUnits(e)),
                (i = this.toSeconds(i)),
                this._events.add({
                  type: t.TimelineSignal.Type.Linear,
                  value: e,
                  time: i,
                }),
                this._param.linearRampToValueAtTime(e, i),
                this
              );
            }),
            (t.TimelineSignal.prototype.exponentialRampToValueAtTime =
              function (e, i) {
                var n, o;
                return (
                  (i = this.toSeconds(i)),
                  (n = this._searchBefore(i)),
                  n &&
                    0 === n.value &&
                    this.setValueAtTime(this._minOutput, n.time),
                  (e = this._fromUnits(e)),
                  (o = Math.max(e, this._minOutput)),
                  this._events.add({
                    type: t.TimelineSignal.Type.Exponential,
                    value: o,
                    time: i,
                  }),
                  e < this._minOutput
                    ? (this._param.exponentialRampToValueAtTime(
                        this._minOutput,
                        i - this.sampleTime
                      ),
                      this.setValueAtTime(0, i))
                    : this._param.exponentialRampToValueAtTime(e, i),
                  this
                );
              }),
            (t.TimelineSignal.prototype.setTargetAtTime = function (e, i, n) {
              return (
                (e = this._fromUnits(e)),
                (e = Math.max(this._minOutput, e)),
                (n = Math.max(this._minOutput, n)),
                (i = this.toSeconds(i)),
                this._events.add({
                  type: t.TimelineSignal.Type.Target,
                  value: e,
                  time: i,
                  constant: n,
                }),
                this._param.setTargetAtTime(e, i, n),
                this
              );
            }),
            (t.TimelineSignal.prototype.setValueCurveAtTime = function (
              e,
              i,
              n,
              o
            ) {
              var s, r;
              for (
                o = t.defaultArg(o, 1),
                  n = this.toSeconds(n),
                  i = this.toSeconds(i),
                  s = n / (e.length - 1),
                  this.setValueAtTime(e[0] * o, i),
                  r = 1;
                r < e.length;
                r++
              )
                this.linearRampToValueAtTime(e[r] * o, i + r * s);
              return this;
            }),
            (t.TimelineSignal.prototype.cancelScheduledValues = function (t) {
              return (
                (t = this.toSeconds(t)),
                this._events.cancel(t),
                this._param.cancelScheduledValues(t),
                this
              );
            }),
            (t.TimelineSignal.prototype.cancelAndHoldAtTime = function (t) {
              return this.setRampPoint(this.toSeconds(t)), this;
            }),
            (t.TimelineSignal.prototype.setRampPoint = function (e) {
              var i, n, o;
              return (
                (e = this.toSeconds(e)),
                (i = this._toUnits(this.getValueAtTime(e))),
                (n = this._searchBefore(e)),
                n && n.time === e
                  ? this.cancelScheduledValues(e + this.sampleTime)
                  : (o = this._searchAfter(e)) &&
                    (this.cancelScheduledValues(e),
                    o.type === t.TimelineSignal.Type.Linear
                      ? this.linearRampToValueAtTime(i, e)
                      : o.type === t.TimelineSignal.Type.Exponential &&
                        this.exponentialRampToValueAtTime(i, e)),
                this.setValueAtTime(i, e),
                this
              );
            }),
            (t.TimelineSignal.prototype.linearRampToValueBetween = function (
              t,
              e,
              i
            ) {
              return (
                this.setRampPoint(e), this.linearRampToValueAtTime(t, i), this
              );
            }),
            (t.TimelineSignal.prototype.exponentialRampToValueBetween =
              function (t, e, i) {
                return (
                  this.setRampPoint(e),
                  this.exponentialRampToValueAtTime(t, i),
                  this
                );
              }),
            (t.TimelineSignal.prototype._searchBefore = function (t) {
              return this._events.get(t);
            }),
            (t.TimelineSignal.prototype._searchAfter = function (t) {
              return this._events.getAfter(t);
            }),
            (t.TimelineSignal.prototype.getValueAtTime = function (e) {
              var i, n, o, s, r;
              return (
                (e = this.toSeconds(e)),
                (i = this._searchAfter(e)),
                (n = this._searchBefore(e)),
                (o = this._initial),
                null === n
                  ? (o = this._initial)
                  : n.type === t.TimelineSignal.Type.Target
                  ? ((s = this._events.getBefore(n.time)),
                    (r = null === s ? this._initial : s.value),
                    (o = this._exponentialApproach(
                      n.time,
                      r,
                      n.value,
                      n.constant,
                      e
                    )))
                  : (o =
                      null === i
                        ? n.value
                        : i.type === t.TimelineSignal.Type.Linear
                        ? this._linearInterpolate(
                            n.time,
                            n.value,
                            i.time,
                            i.value,
                            e
                          )
                        : i.type === t.TimelineSignal.Type.Exponential
                        ? this._exponentialInterpolate(
                            n.time,
                            n.value,
                            i.time,
                            i.value,
                            e
                          )
                        : n.value),
                o
              );
            }),
            (t.TimelineSignal.prototype.connect =
              t.SignalBase.prototype.connect),
            (t.TimelineSignal.prototype._exponentialApproach = function (
              t,
              e,
              i,
              n,
              o
            ) {
              return i + (e - i) * Math.exp(-(o - t) / n);
            }),
            (t.TimelineSignal.prototype._linearInterpolate = function (
              t,
              e,
              i,
              n,
              o
            ) {
              return e + ((o - t) / (i - t)) * (n - e);
            }),
            (t.TimelineSignal.prototype._exponentialInterpolate = function (
              t,
              e,
              i,
              n,
              o
            ) {
              return (
                (e = Math.max(this._minOutput, e)) *
                Math.pow(n / e, (o - t) / (i - t))
              );
            }),
            (t.TimelineSignal.prototype.dispose = function () {
              t.Signal.prototype.dispose.call(this),
                this._events.dispose(),
                (this._events = null);
            }),
            t.TimelineSignal
          );
        }),
        t(function (t) {
          return (
            (t.Pow = function (e) {
              t.SignalBase.call(this),
                (this._exp = t.defaultArg(e, 1)),
                (this._expScaler =
                  this.input =
                  this.output =
                    new t.WaveShaper(this._expFunc(this._exp), 8192));
            }),
            t.extend(t.Pow, t.SignalBase),
            Object.defineProperty(t.Pow.prototype, "value", {
              get: function () {
                return this._exp;
              },
              set: function (t) {
                (this._exp = t),
                  this._expScaler.setMap(this._expFunc(this._exp));
              },
            }),
            (t.Pow.prototype._expFunc = function (t) {
              return function (e) {
                return Math.pow(Math.abs(e), t);
              };
            }),
            (t.Pow.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._expScaler.dispose(),
                (this._expScaler = null),
                this
              );
            }),
            t.Pow
          );
        }),
        t(function (t) {
          return (
            (t.Envelope = function () {
              var e = t.defaults(
                arguments,
                ["attack", "decay", "sustain", "release"],
                t.Envelope
              );
              t.AudioNode.call(this),
                (this.attack = e.attack),
                (this.decay = e.decay),
                (this.sustain = e.sustain),
                (this.release = e.release),
                (this._attackCurve = "linear"),
                (this._releaseCurve = "exponential"),
                (this._sig = this.output = new t.Signal(0)),
                (this.attackCurve = e.attackCurve),
                (this.releaseCurve = e.releaseCurve);
            }),
            t.extend(t.Envelope, t.AudioNode),
            (t.Envelope.defaults = {
              attack: 0.01,
              decay: 0.1,
              sustain: 0.5,
              release: 1,
              attackCurve: "linear",
              releaseCurve: "exponential",
            }),
            Object.defineProperty(t.Envelope.prototype, "value", {
              get: function () {
                return this.getValueAtTime(this.now());
              },
            }),
            Object.defineProperty(t.Envelope.prototype, "attackCurve", {
              get: function () {
                if (t.isString(this._attackCurve)) return this._attackCurve;
                if (t.isArray(this._attackCurve)) {
                  for (var e in t.Envelope.Type)
                    if (t.Envelope.Type[e].In === this._attackCurve) return e;
                  return this._attackCurve;
                }
              },
              set: function (e) {
                if (t.Envelope.Type.hasOwnProperty(e)) {
                  var i = t.Envelope.Type[e];
                  t.isObject(i)
                    ? (this._attackCurve = i.In)
                    : (this._attackCurve = i);
                } else {
                  if (!t.isArray(e))
                    throw new Error("Tone.Envelope: invalid curve: " + e);
                  this._attackCurve = e;
                }
              },
            }),
            Object.defineProperty(t.Envelope.prototype, "releaseCurve", {
              get: function () {
                if (t.isString(this._releaseCurve)) return this._releaseCurve;
                if (t.isArray(this._releaseCurve)) {
                  for (var e in t.Envelope.Type)
                    if (t.Envelope.Type[e].Out === this._releaseCurve) return e;
                  return this._releaseCurve;
                }
              },
              set: function (e) {
                if (t.Envelope.Type.hasOwnProperty(e)) {
                  var i = t.Envelope.Type[e];
                  t.isObject(i)
                    ? (this._releaseCurve = i.Out)
                    : (this._releaseCurve = i);
                } else {
                  if (!t.isArray(e))
                    throw new Error("Tone.Envelope: invalid curve: " + e);
                  this._releaseCurve = e;
                }
              },
            }),
            (t.Envelope.prototype.triggerAttack = function (e, i) {
              var n, o, s, r, a, l, u, c, h;
              return (
                (e = this.toSeconds(e)),
                (n = this.toSeconds(this.attack)),
                (o = n),
                (s = this.toSeconds(this.decay)),
                (i = t.defaultArg(i, 1)),
                (r = this.getValueAtTime(e)),
                r > 0 && ((a = 1 / o), (l = 1 - r), (o = l / a)),
                "linear" === this._attackCurve
                  ? this._sig.linearRampTo(i, o, e)
                  : "exponential" === this._attackCurve
                  ? this._sig.targetRampTo(i, o, e)
                  : o > 0 &&
                    (this._sig.cancelAndHoldAtTime(e),
                    (u = this._attackCurve),
                    o < n &&
                      ((c = 1 - o / n),
                      (h = Math.floor(c * this._attackCurve.length)),
                      (u = this._attackCurve.slice(h)),
                      (u[0] = r)),
                    this._sig.setValueCurveAtTime(u, e, o, i)),
                s && this._sig.targetRampTo(i * this.sustain, s, o + e),
                this
              );
            }),
            (t.Envelope.prototype.triggerRelease = function (e) {
              var i, n, o;
              return (
                (e = this.toSeconds(e)),
                (i = this.getValueAtTime(e)),
                i > 0 &&
                  ((n = this.toSeconds(this.release)),
                  "linear" === this._releaseCurve
                    ? this._sig.linearRampTo(0, n, e)
                    : "exponential" === this._releaseCurve
                    ? this._sig.targetRampTo(0, n, e)
                    : ((o = this._releaseCurve),
                      t.isArray(o) &&
                        (this._sig.cancelAndHoldAtTime(e),
                        this._sig.setValueCurveAtTime(o, e, n, i)))),
                this
              );
            }),
            (t.Envelope.prototype.getValueAtTime = function (t) {
              return this._sig.getValueAtTime(t);
            }),
            (t.Envelope.prototype.triggerAttackRelease = function (t, e, i) {
              return (
                (e = this.toSeconds(e)),
                this.triggerAttack(e, i),
                this.triggerRelease(e + this.toSeconds(t)),
                this
              );
            }),
            (t.Envelope.prototype.cancel = function (t) {
              return this._sig.cancelScheduledValues(t), this;
            }),
            (t.Envelope.prototype.connect = t.Signal.prototype.connect),
            (function () {
              function e(t) {
                var e,
                  i = new Array(t.length);
                for (e = 0; e < t.length; e++) i[e] = 1 - t[e];
                return i;
              }
              var i,
                n,
                o,
                s,
                r,
                a,
                l,
                u,
                c,
                h,
                p,
                d = 128,
                f = [];
              for (i = 0; i < d; i++)
                f[i] = Math.sin((i / 127) * (Math.PI / 2));
              for (o = [], s = 6.4, i = 0; i < 127; i++)
                (n = i / 127),
                  (r = Math.sin(n * (2 * Math.PI) * s - Math.PI / 2) + 1),
                  (o[i] = r / 10 + 0.83 * n);
              for (o[127] = 1, a = [], l = 5, i = 0; i < d; i++)
                a[i] = Math.ceil((i / 127) * l) / l;
              for (u = [], i = 0; i < d; i++)
                (n = i / 127), (u[i] = 0.5 * (1 - Math.cos(Math.PI * n)));
              for (c = [], i = 0; i < d; i++)
                (n = i / 127),
                  (h = 4 * Math.pow(n, 3) + 0.2),
                  (p = Math.cos(h * Math.PI * 2 * n)),
                  (c[i] = Math.abs(p * (1 - n)));
              t.Envelope.Type = {
                linear: "linear",
                exponential: "exponential",
                bounce: { In: e(c), Out: c },
                cosine: {
                  In: f,
                  Out: (function (t) {
                    return t.slice(0).reverse();
                  })(f),
                },
                step: { In: a, Out: e(a) },
                ripple: { In: o, Out: e(o) },
                sine: { In: u, Out: e(u) },
              };
            })(),
            (t.Envelope.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._sig.dispose(),
                (this._sig = null),
                (this._attackCurve = null),
                (this._releaseCurve = null),
                this
              );
            }),
            t.Envelope
          );
        }),
        t(function (t) {
          return (
            (t.AmplitudeEnvelope = function () {
              t.Envelope.apply(this, arguments),
                (this.input = this.output = new t.Gain()),
                this._sig.connect(this.output.gain);
            }),
            t.extend(t.AmplitudeEnvelope, t.Envelope),
            (t.AmplitudeEnvelope.prototype.dispose = function () {
              return t.Envelope.prototype.dispose.call(this), this;
            }),
            t.AmplitudeEnvelope
          );
        }),
        t(function (t) {
          t.supported &&
            (AnalyserNode.prototype.getFloatTimeDomainData ||
              (AnalyserNode.prototype.getFloatTimeDomainData = function (t) {
                var e,
                  i = new Uint8Array(t.length);
                for (this.getByteTimeDomainData(i), e = 0; e < i.length; e++)
                  t[e] = (i[e] - 128) / 128;
              }));
        }),
        t(function (t) {
          return (
            (t.Analyser = function () {
              var e = t.defaults(arguments, ["type", "size"], t.Analyser);
              t.AudioNode.call(this),
                (this._analyser =
                  this.input =
                  this.output =
                    this.context.createAnalyser()),
                (this._type = e.type),
                (this._buffer = null),
                (this.size = e.size),
                (this.type = e.type);
            }),
            t.extend(t.Analyser, t.AudioNode),
            (t.Analyser.defaults = { size: 1024, type: "fft", smoothing: 0.8 }),
            (t.Analyser.Type = { Waveform: "waveform", FFT: "fft" }),
            (t.Analyser.prototype.getValue = function () {
              return (
                this._type === t.Analyser.Type.FFT
                  ? this._analyser.getFloatFrequencyData(this._buffer)
                  : this._type === t.Analyser.Type.Waveform &&
                    this._analyser.getFloatTimeDomainData(this._buffer),
                this._buffer
              );
            }),
            Object.defineProperty(t.Analyser.prototype, "size", {
              get: function () {
                return this._analyser.frequencyBinCount;
              },
              set: function (t) {
                (this._analyser.fftSize = 2 * t),
                  (this._buffer = new Float32Array(t));
              },
            }),
            Object.defineProperty(t.Analyser.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (e) {
                if (e !== t.Analyser.Type.Waveform && e !== t.Analyser.Type.FFT)
                  throw new TypeError("Tone.Analyser: invalid type: " + e);
                this._type = e;
              },
            }),
            Object.defineProperty(t.Analyser.prototype, "smoothing", {
              get: function () {
                return this._analyser.smoothingTimeConstant;
              },
              set: function (t) {
                this._analyser.smoothingTimeConstant = t;
              },
            }),
            (t.Analyser.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this),
                this._analyser.disconnect(),
                (this._analyser = null),
                (this._buffer = null);
            }),
            t.Analyser
          );
        }),
        t(function (t) {
          return (
            (t.Compressor = function () {
              var e = t.defaults(
                arguments,
                ["threshold", "ratio"],
                t.Compressor
              );
              t.AudioNode.call(this),
                (this._compressor =
                  this.input =
                  this.output =
                    this.context.createDynamicsCompressor()),
                (this.threshold = new t.Param({
                  param: this._compressor.threshold,
                  units: t.Type.Decibels,
                  convert: !1,
                })),
                (this.attack = new t.Param(
                  this._compressor.attack,
                  t.Type.Time
                )),
                (this.release = new t.Param(
                  this._compressor.release,
                  t.Type.Time
                )),
                (this.knee = new t.Param({
                  param: this._compressor.knee,
                  units: t.Type.Decibels,
                  convert: !1,
                })),
                (this.ratio = new t.Param({
                  param: this._compressor.ratio,
                  convert: !1,
                })),
                this._readOnly([
                  "knee",
                  "release",
                  "attack",
                  "ratio",
                  "threshold",
                ]),
                this.set(e);
            }),
            t.extend(t.Compressor, t.AudioNode),
            (t.Compressor.defaults = {
              ratio: 12,
              threshold: -24,
              release: 0.25,
              attack: 0.003,
              knee: 30,
            }),
            (t.Compressor.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable([
                  "knee",
                  "release",
                  "attack",
                  "ratio",
                  "threshold",
                ]),
                this._compressor.disconnect(),
                (this._compressor = null),
                this.attack.dispose(),
                (this.attack = null),
                this.release.dispose(),
                (this.release = null),
                this.threshold.dispose(),
                (this.threshold = null),
                this.ratio.dispose(),
                (this.ratio = null),
                this.knee.dispose(),
                (this.knee = null),
                this
              );
            }),
            t.Compressor
          );
        }),
        t(function (t) {
          return (
            (t.Add = function (e) {
              t.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._sum =
                  this.input[0] =
                  this.input[1] =
                  this.output =
                    new t.Gain()),
                (this._param = this.input[1] = new t.Signal(e)),
                this._param.connect(this._sum);
            }),
            t.extend(t.Add, t.Signal),
            (t.Add.prototype.dispose = function () {
              return (
                t.Signal.prototype.dispose.call(this),
                this._sum.dispose(),
                (this._sum = null),
                this
              );
            }),
            t.Add
          );
        }),
        t(function (t) {
          return (
            (t.Multiply = function (e) {
              t.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._mult = this.input[0] = this.output = new t.Gain()),
                (this._param = this.input[1] = this.output.gain),
                (this._param.value = t.defaultArg(e, 0));
            }),
            t.extend(t.Multiply, t.Signal),
            (t.Multiply.prototype.dispose = function () {
              return (
                t.Signal.prototype.dispose.call(this),
                this._mult.dispose(),
                (this._mult = null),
                (this._param = null),
                this
              );
            }),
            t.Multiply
          );
        }),
        t(function (t) {
          return (
            (t.Negate = function () {
              t.SignalBase.call(this),
                (this._multiply =
                  this.input =
                  this.output =
                    new t.Multiply(-1));
            }),
            t.extend(t.Negate, t.SignalBase),
            (t.Negate.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._multiply.dispose(),
                (this._multiply = null),
                this
              );
            }),
            t.Negate
          );
        }),
        t(function (t) {
          return (
            (t.Subtract = function (e) {
              t.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._sum = this.input[0] = this.output = new t.Gain()),
                (this._neg = new t.Negate()),
                (this._param = this.input[1] = new t.Signal(e)),
                this._param.chain(this._neg, this._sum);
            }),
            t.extend(t.Subtract, t.Signal),
            (t.Subtract.prototype.dispose = function () {
              return (
                t.Signal.prototype.dispose.call(this),
                this._neg.dispose(),
                (this._neg = null),
                this._sum.disconnect(),
                (this._sum = null),
                this
              );
            }),
            t.Subtract
          );
        }),
        t(function (t) {
          return (
            (t.EqualPowerGain = function () {
              t.SignalBase.call(this),
                (this._eqPower =
                  this.input =
                  this.output =
                    new t.WaveShaper(
                      function (e) {
                        return Math.abs(e) < 0.001 ? 0 : t.equalPowerScale(e);
                      }.bind(this),
                      4096
                    ));
            }),
            t.extend(t.EqualPowerGain, t.SignalBase),
            (t.EqualPowerGain.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._eqPower.dispose(),
                (this._eqPower = null),
                this
              );
            }),
            t.EqualPowerGain
          );
        }),
        t(function (t) {
          return (
            (t.CrossFade = function (e) {
              t.AudioNode.call(this),
                this.createInsOuts(2, 1),
                (this.a = this.input[0] = new t.Gain()),
                (this.b = this.input[1] = new t.Gain()),
                (this.fade = new t.Signal(
                  t.defaultArg(e, 0.5),
                  t.Type.NormalRange
                )),
                (this._equalPowerA = new t.EqualPowerGain()),
                (this._equalPowerB = new t.EqualPowerGain()),
                (this._one = this.context.getConstant(1)),
                (this._invert = new t.Subtract()),
                this.a.connect(this.output),
                this.b.connect(this.output),
                this.fade.chain(this._equalPowerB, this.b.gain),
                this._one.connect(this._invert, 0, 0),
                this.fade.connect(this._invert, 0, 1),
                this._invert.chain(this._equalPowerA, this.a.gain),
                this._readOnly("fade");
            }),
            t.extend(t.CrossFade, t.AudioNode),
            (t.CrossFade.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable("fade"),
                this._equalPowerA.dispose(),
                (this._equalPowerA = null),
                this._equalPowerB.dispose(),
                (this._equalPowerB = null),
                this.fade.dispose(),
                (this.fade = null),
                this._invert.dispose(),
                (this._invert = null),
                (this._one = null),
                this.a.dispose(),
                (this.a = null),
                this.b.dispose(),
                (this.b = null),
                this
              );
            }),
            t.CrossFade
          );
        }),
        t(function (t) {
          return (
            (t.Filter = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "type", "rolloff"],
                t.Filter
              );
              t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._filters = []),
                (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                (this.detune = new t.Signal(0, t.Type.Cents)),
                (this.gain = new t.Signal({ value: e.gain, convert: !1 })),
                (this.Q = new t.Signal(e.Q)),
                (this._type = e.type),
                (this._rolloff = e.rolloff),
                (this.rolloff = e.rolloff),
                this._readOnly(["detune", "frequency", "gain", "Q"]);
            }),
            t.extend(t.Filter, t.AudioNode),
            (t.Filter.defaults = {
              type: "lowpass",
              frequency: 350,
              rolloff: -12,
              Q: 1,
              gain: 0,
            }),
            Object.defineProperty(t.Filter.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (t) {
                var e;
                if (
                  -1 ===
                  [
                    "lowpass",
                    "highpass",
                    "bandpass",
                    "lowshelf",
                    "highshelf",
                    "notch",
                    "allpass",
                    "peaking",
                  ].indexOf(t)
                )
                  throw new TypeError("Tone.Filter: invalid type " + t);
                for (this._type = t, e = 0; e < this._filters.length; e++)
                  this._filters[e].type = t;
              },
            }),
            Object.defineProperty(t.Filter.prototype, "rolloff", {
              get: function () {
                return this._rolloff;
              },
              set: function (e) {
                var i, n, o, s, r, a;
                if (
                  ((e = parseInt(e, 10)),
                  (i = [-12, -24, -48, -96]),
                  -1 === (n = i.indexOf(e)))
                )
                  throw new RangeError(
                    "Tone.Filter: rolloff can only be -12, -24, -48 or -96"
                  );
                for (
                  n += 1, this._rolloff = e, this.input.disconnect(), o = 0;
                  o < this._filters.length;
                  o++
                )
                  this._filters[o].disconnect(), (this._filters[o] = null);
                for (this._filters = new Array(n), s = 0; s < n; s++)
                  (r = this.context.createBiquadFilter()),
                    (r.type = this._type),
                    this.frequency.connect(r.frequency),
                    this.detune.connect(r.detune),
                    this.Q.connect(r.Q),
                    this.gain.connect(r.gain),
                    (this._filters[s] = r);
                (a = [this.input].concat(this._filters).concat([this.output])),
                  t.connectSeries.apply(t, a);
              },
            }),
            (t.Filter.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this);
              for (var e = 0; e < this._filters.length; e++)
                this._filters[e].disconnect(), (this._filters[e] = null);
              return (
                (this._filters = null),
                this._writable(["detune", "frequency", "gain", "Q"]),
                this.frequency.dispose(),
                this.Q.dispose(),
                (this.frequency = null),
                (this.Q = null),
                this.detune.dispose(),
                (this.detune = null),
                this.gain.dispose(),
                (this.gain = null),
                this
              );
            }),
            t.Filter
          );
        }),
        t(function (t) {
          return (
            (t.MultibandSplit = function () {
              var e = t.defaults(
                arguments,
                ["lowFrequency", "highFrequency"],
                t.MultibandSplit
              );
              t.AudioNode.call(this),
                (this.input = new t.Gain()),
                (this.output = new Array(3)),
                (this.low = this.output[0] = new t.Filter(0, "lowpass")),
                (this._lowMidFilter = new t.Filter(0, "highpass")),
                (this.mid = this.output[1] = new t.Filter(0, "lowpass")),
                (this.high = this.output[2] = new t.Filter(0, "highpass")),
                (this.lowFrequency = new t.Signal(
                  e.lowFrequency,
                  t.Type.Frequency
                )),
                (this.highFrequency = new t.Signal(
                  e.highFrequency,
                  t.Type.Frequency
                )),
                (this.Q = new t.Signal(e.Q)),
                this.input.fan(this.low, this.high),
                this.input.chain(this._lowMidFilter, this.mid),
                this.lowFrequency.connect(this.low.frequency),
                this.lowFrequency.connect(this._lowMidFilter.frequency),
                this.highFrequency.connect(this.mid.frequency),
                this.highFrequency.connect(this.high.frequency),
                this.Q.connect(this.low.Q),
                this.Q.connect(this._lowMidFilter.Q),
                this.Q.connect(this.mid.Q),
                this.Q.connect(this.high.Q),
                this._readOnly([
                  "high",
                  "mid",
                  "low",
                  "highFrequency",
                  "lowFrequency",
                ]);
            }),
            t.extend(t.MultibandSplit, t.AudioNode),
            (t.MultibandSplit.defaults = {
              lowFrequency: 400,
              highFrequency: 2500,
              Q: 1,
            }),
            (t.MultibandSplit.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable([
                  "high",
                  "mid",
                  "low",
                  "highFrequency",
                  "lowFrequency",
                ]),
                this.low.dispose(),
                (this.low = null),
                this._lowMidFilter.dispose(),
                (this._lowMidFilter = null),
                this.mid.dispose(),
                (this.mid = null),
                this.high.dispose(),
                (this.high = null),
                this.lowFrequency.dispose(),
                (this.lowFrequency = null),
                this.highFrequency.dispose(),
                (this.highFrequency = null),
                this.Q.dispose(),
                (this.Q = null),
                this
              );
            }),
            t.MultibandSplit
          );
        }),
        t(function (t) {
          return (
            (t.EQ3 = function () {
              var e = t.defaults(arguments, ["low", "mid", "high"], t.EQ3);
              t.AudioNode.call(this),
                (this.output = new t.Gain()),
                (this._multibandSplit = this.input =
                  new t.MultibandSplit({
                    lowFrequency: e.lowFrequency,
                    highFrequency: e.highFrequency,
                  })),
                (this._lowGain = new t.Gain(e.low, t.Type.Decibels)),
                (this._midGain = new t.Gain(e.mid, t.Type.Decibels)),
                (this._highGain = new t.Gain(e.high, t.Type.Decibels)),
                (this.low = this._lowGain.gain),
                (this.mid = this._midGain.gain),
                (this.high = this._highGain.gain),
                (this.Q = this._multibandSplit.Q),
                (this.lowFrequency = this._multibandSplit.lowFrequency),
                (this.highFrequency = this._multibandSplit.highFrequency),
                this._multibandSplit.low.chain(this._lowGain, this.output),
                this._multibandSplit.mid.chain(this._midGain, this.output),
                this._multibandSplit.high.chain(this._highGain, this.output),
                this._readOnly([
                  "low",
                  "mid",
                  "high",
                  "lowFrequency",
                  "highFrequency",
                ]);
            }),
            t.extend(t.EQ3, t.AudioNode),
            (t.EQ3.defaults = {
              low: 0,
              mid: 0,
              high: 0,
              lowFrequency: 400,
              highFrequency: 2500,
            }),
            (t.EQ3.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable([
                  "low",
                  "mid",
                  "high",
                  "lowFrequency",
                  "highFrequency",
                ]),
                this._multibandSplit.dispose(),
                (this._multibandSplit = null),
                (this.lowFrequency = null),
                (this.highFrequency = null),
                this._lowGain.dispose(),
                (this._lowGain = null),
                this._midGain.dispose(),
                (this._midGain = null),
                this._highGain.dispose(),
                (this._highGain = null),
                (this.low = null),
                (this.mid = null),
                (this.high = null),
                (this.Q = null),
                this
              );
            }),
            t.EQ3
          );
        }),
        t(function (t) {
          return (
            (t.Scale = function (e, i) {
              t.SignalBase.call(this),
                (this._outputMin = t.defaultArg(e, 0)),
                (this._outputMax = t.defaultArg(i, 1)),
                (this._scale = this.input = new t.Multiply(1)),
                (this._add = this.output = new t.Add(0)),
                this._scale.connect(this._add),
                this._setRange();
            }),
            t.extend(t.Scale, t.SignalBase),
            Object.defineProperty(t.Scale.prototype, "min", {
              get: function () {
                return this._outputMin;
              },
              set: function (t) {
                (this._outputMin = t), this._setRange();
              },
            }),
            Object.defineProperty(t.Scale.prototype, "max", {
              get: function () {
                return this._outputMax;
              },
              set: function (t) {
                (this._outputMax = t), this._setRange();
              },
            }),
            (t.Scale.prototype._setRange = function () {
              (this._add.value = this._outputMin),
                (this._scale.value = this._outputMax - this._outputMin);
            }),
            (t.Scale.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._add.dispose(),
                (this._add = null),
                this._scale.dispose(),
                (this._scale = null),
                this
              );
            }),
            t.Scale
          );
        }),
        t(function (t) {
          return (
            (t.ScaleExp = function (e, i, n) {
              t.SignalBase.call(this),
                (this._scale = this.output = new t.Scale(e, i)),
                (this._exp = this.input = new t.Pow(t.defaultArg(n, 2))),
                this._exp.connect(this._scale);
            }),
            t.extend(t.ScaleExp, t.SignalBase),
            Object.defineProperty(t.ScaleExp.prototype, "exponent", {
              get: function () {
                return this._exp.value;
              },
              set: function (t) {
                this._exp.value = t;
              },
            }),
            Object.defineProperty(t.ScaleExp.prototype, "min", {
              get: function () {
                return this._scale.min;
              },
              set: function (t) {
                this._scale.min = t;
              },
            }),
            Object.defineProperty(t.ScaleExp.prototype, "max", {
              get: function () {
                return this._scale.max;
              },
              set: function (t) {
                this._scale.max = t;
              },
            }),
            (t.ScaleExp.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._scale.dispose(),
                (this._scale = null),
                this._exp.dispose(),
                (this._exp = null),
                this
              );
            }),
            t.ScaleExp
          );
        }),
        t(function (t) {
          return (
            (t.Delay = function () {
              var e,
                i = t.defaults(arguments, ["delayTime", "maxDelay"], t.Delay);
              t.AudioNode.call(this),
                (e = Math.max(
                  this.toSeconds(i.maxDelay),
                  this.toSeconds(i.delayTime)
                )),
                (this._delayNode =
                  this.input =
                  this.output =
                    this.context.createDelay(e)),
                (this.delayTime = new t.Param({
                  param: this._delayNode.delayTime,
                  units: t.Type.Time,
                  value: i.delayTime,
                })),
                this._readOnly("delayTime");
            }),
            t.extend(t.Delay, t.AudioNode),
            (t.Delay.defaults = { maxDelay: 1, delayTime: 0 }),
            (t.Delay.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._delayNode.disconnect(),
                (this._delayNode = null),
                this._writable("delayTime"),
                (this.delayTime = null),
                this
              );
            }),
            t.Delay
          );
        }),
        t(function (t) {
          return (
            (t.FeedbackCombFilter = function () {
              var e = t.defaults(
                arguments,
                ["delayTime", "resonance"],
                t.FeedbackCombFilter
              );
              t.AudioNode.call(this),
                (this._delay =
                  this.input =
                  this.output =
                    new t.Delay(e.delayTime)),
                (this.delayTime = this._delay.delayTime),
                (this._feedback = new t.Gain(e.resonance, t.Type.NormalRange)),
                (this.resonance = this._feedback.gain),
                this._delay.chain(this._feedback, this._delay),
                this._readOnly(["resonance", "delayTime"]);
            }),
            t.extend(t.FeedbackCombFilter, t.AudioNode),
            (t.FeedbackCombFilter.defaults = {
              delayTime: 0.1,
              resonance: 0.5,
            }),
            (t.FeedbackCombFilter.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable(["resonance", "delayTime"]),
                this._delay.dispose(),
                (this._delay = null),
                (this.delayTime = null),
                this._feedback.dispose(),
                (this._feedback = null),
                (this.resonance = null),
                this
              );
            }),
            t.FeedbackCombFilter
          );
        }),
        t(function (t) {
          return (
            (t.FFT = function () {
              var e = t.defaults(arguments, ["size"], t.FFT);
              (e.type = t.Analyser.Type.FFT),
                t.AudioNode.call(this),
                (this._analyser = this.input = this.output = new t.Analyser(e));
            }),
            t.extend(t.FFT, t.AudioNode),
            (t.FFT.defaults = { size: 1024 }),
            (t.FFT.prototype.getValue = function () {
              return this._analyser.getValue();
            }),
            Object.defineProperty(t.FFT.prototype, "size", {
              get: function () {
                return this._analyser.size;
              },
              set: function (t) {
                this._analyser.size = t;
              },
            }),
            (t.FFT.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                (this._analyser = null);
            }),
            t.FFT
          );
        }),
        t(function (t) {
          return (
            (t.Abs = function () {
              t.SignalBase.call(this),
                (this._abs =
                  this.input =
                  this.output =
                    new t.WaveShaper(function (t) {
                      return Math.abs(t) < 0.001 ? 0 : Math.abs(t);
                    }, 1024));
            }),
            t.extend(t.Abs, t.SignalBase),
            (t.Abs.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._abs.dispose(),
                (this._abs = null),
                this
              );
            }),
            t.Abs
          );
        }),
        t(function (t) {
          return (
            (t.Follower = function () {
              var e = t.defaults(arguments, ["attack", "release"], t.Follower);
              t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._abs = new t.Abs()),
                (this._filter = this.context.createBiquadFilter()),
                (this._filter.type = "lowpass"),
                (this._filter.frequency.value = 0),
                (this._filter.Q.value = -100),
                (this._frequencyValues = new t.WaveShaper()),
                (this._sub = new t.Subtract()),
                (this._delay = new t.Delay(this.blockTime)),
                (this._mult = new t.Multiply(1e4)),
                (this._attack = e.attack),
                (this._release = e.release),
                this.input.chain(this._abs, this._filter, this.output),
                this._abs.connect(this._sub, 0, 1),
                this._filter.chain(this._delay, this._sub),
                this._sub.chain(
                  this._mult,
                  this._frequencyValues,
                  this._filter.frequency
                ),
                this._setAttackRelease(this._attack, this._release);
            }),
            t.extend(t.Follower, t.AudioNode),
            (t.Follower.defaults = { attack: 0.05, release: 0.5 }),
            (t.Follower.prototype._setAttackRelease = function (e, i) {
              var n = this.blockTime;
              (e = t.Time(e).toFrequency()),
                (i = t.Time(i).toFrequency()),
                (e = Math.max(e, n)),
                (i = Math.max(i, n)),
                this._frequencyValues.setMap(function (t) {
                  return t <= 0 ? e : i;
                });
            }),
            Object.defineProperty(t.Follower.prototype, "attack", {
              get: function () {
                return this._attack;
              },
              set: function (t) {
                (this._attack = t),
                  this._setAttackRelease(this._attack, this._release);
              },
            }),
            Object.defineProperty(t.Follower.prototype, "release", {
              get: function () {
                return this._release;
              },
              set: function (t) {
                (this._release = t),
                  this._setAttackRelease(this._attack, this._release);
              },
            }),
            (t.Follower.prototype.connect = t.Signal.prototype.connect),
            (t.Follower.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._filter.disconnect(),
                (this._filter = null),
                this._frequencyValues.disconnect(),
                (this._frequencyValues = null),
                this._delay.dispose(),
                (this._delay = null),
                this._sub.disconnect(),
                (this._sub = null),
                this._abs.dispose(),
                (this._abs = null),
                this._mult.dispose(),
                (this._mult = null),
                (this._curve = null),
                this
              );
            }),
            t.Follower
          );
        }),
        t(function (t) {
          return (
            (t.ScaledEnvelope = function () {
              var e = t.defaults(
                arguments,
                ["attack", "decay", "sustain", "release"],
                t.Envelope
              );
              t.Envelope.call(this, e),
                (e = t.defaultArg(e, t.ScaledEnvelope.defaults)),
                (this._exp = this.output = new t.Pow(e.exponent)),
                (this._scale = this.output = new t.Scale(e.min, e.max)),
                this._sig.chain(this._exp, this._scale);
            }),
            t.extend(t.ScaledEnvelope, t.Envelope),
            (t.ScaledEnvelope.defaults = { min: 0, max: 1, exponent: 1 }),
            Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
              get: function () {
                return this._scale.min;
              },
              set: function (t) {
                this._scale.min = t;
              },
            }),
            Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
              get: function () {
                return this._scale.max;
              },
              set: function (t) {
                this._scale.max = t;
              },
            }),
            Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
              get: function () {
                return this._exp.value;
              },
              set: function (t) {
                this._exp.value = t;
              },
            }),
            (t.ScaledEnvelope.prototype.dispose = function () {
              return (
                t.Envelope.prototype.dispose.call(this),
                this._scale.dispose(),
                (this._scale = null),
                this._exp.dispose(),
                (this._exp = null),
                this
              );
            }),
            t.ScaledEnvelope
          );
        }),
        t(function (t) {
          return (
            (t.FrequencyEnvelope = function () {
              var e = t.defaults(
                arguments,
                ["attack", "decay", "sustain", "release"],
                t.Envelope
              );
              t.ScaledEnvelope.call(this, e),
                (e = t.defaultArg(e, t.FrequencyEnvelope.defaults)),
                (this._octaves = e.octaves),
                (this.baseFrequency = e.baseFrequency),
                (this.octaves = e.octaves);
            }),
            t.extend(t.FrequencyEnvelope, t.Envelope),
            (t.FrequencyEnvelope.defaults = {
              baseFrequency: 200,
              octaves: 4,
              exponent: 2,
            }),
            Object.defineProperty(
              t.FrequencyEnvelope.prototype,
              "baseFrequency",
              {
                get: function () {
                  return this._scale.min;
                },
                set: function (t) {
                  (this._scale.min = this.toFrequency(t)),
                    (this.octaves = this._octaves);
                },
              }
            ),
            Object.defineProperty(t.FrequencyEnvelope.prototype, "octaves", {
              get: function () {
                return this._octaves;
              },
              set: function (t) {
                (this._octaves = t),
                  (this._scale.max = this.baseFrequency * Math.pow(2, t));
              },
            }),
            Object.defineProperty(t.FrequencyEnvelope.prototype, "exponent", {
              get: function () {
                return this._exp.value;
              },
              set: function (t) {
                this._exp.value = t;
              },
            }),
            (t.FrequencyEnvelope.prototype.dispose = function () {
              return t.ScaledEnvelope.prototype.dispose.call(this), this;
            }),
            t.FrequencyEnvelope
          );
        }),
        t(function (t) {
          return (
            (t.GreaterThanZero = function () {
              t.SignalBase.call(this),
                (this._thresh = this.output =
                  new t.WaveShaper(function (t) {
                    return t <= 0 ? 0 : 1;
                  }, 127)),
                (this._scale = this.input = new t.Multiply(1e4)),
                this._scale.connect(this._thresh);
            }),
            t.extend(t.GreaterThanZero, t.SignalBase),
            (t.GreaterThanZero.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._scale.dispose(),
                (this._scale = null),
                this._thresh.dispose(),
                (this._thresh = null),
                this
              );
            }),
            t.GreaterThanZero
          );
        }),
        t(function (t) {
          return (
            (t.GreaterThan = function (e) {
              t.Signal.call(this),
                this.createInsOuts(2, 0),
                (this._param = this.input[0] = new t.Subtract(e)),
                (this.input[1] = this._param.input[1]),
                (this._gtz = this.output = new t.GreaterThanZero()),
                this._param.connect(this._gtz);
            }),
            t.extend(t.GreaterThan, t.Signal),
            (t.GreaterThan.prototype.dispose = function () {
              return (
                t.Signal.prototype.dispose.call(this),
                this._gtz.dispose(),
                (this._gtz = null),
                this
              );
            }),
            t.GreaterThan
          );
        }),
        t(function (t) {
          return (
            (t.Gate = function () {
              var e = t.defaults(
                arguments,
                ["threshold", "attack", "release"],
                t.Gate
              );
              t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._follower = new t.Follower(e.attack, e.release)),
                (this._gt = new t.GreaterThan(t.dbToGain(e.threshold))),
                this.input.connect(this.output),
                this.input.chain(this._gt, this._follower, this.output.gain);
            }),
            t.extend(t.Gate, t.AudioNode),
            (t.Gate.defaults = { attack: 0.1, release: 0.1, threshold: -40 }),
            Object.defineProperty(t.Gate.prototype, "threshold", {
              get: function () {
                return t.gainToDb(this._gt.value);
              },
              set: function (e) {
                this._gt.value = t.dbToGain(e);
              },
            }),
            Object.defineProperty(t.Gate.prototype, "attack", {
              get: function () {
                return this._follower.attack;
              },
              set: function (t) {
                this._follower.attack = t;
              },
            }),
            Object.defineProperty(t.Gate.prototype, "release", {
              get: function () {
                return this._follower.release;
              },
              set: function (t) {
                this._follower.release = t;
              },
            }),
            (t.Gate.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._follower.dispose(),
                this._gt.dispose(),
                (this._follower = null),
                (this._gt = null),
                this
              );
            }),
            t.Gate
          );
        }),
        t(function (t) {
          function e(t) {
            return function (e, i) {
              var n, o, s;
              return (
                (i = this.toSeconds(i)),
                t.apply(this, arguments),
                (n = this._events.get(i)),
                (o = this._events.previousEvent(n)),
                (s = this._getTickUntilEvent(o, i - this.sampleTime)),
                (n.ticks = Math.max(s, 0)),
                this
              );
            };
          }
          return (
            (t.TickSignal = function (e) {
              (e = t.defaultArg(e, 1)),
                t.TimelineSignal.call(this, { units: t.Type.Ticks, value: e }),
                (this._events.memory = 1 / 0);
            }),
            t.extend(t.TickSignal, t.TimelineSignal),
            (t.TickSignal.prototype.setValueAtTime = e(
              t.TimelineSignal.prototype.setValueAtTime
            )),
            (t.TickSignal.prototype.linearRampToValueAtTime = e(
              t.TimelineSignal.prototype.linearRampToValueAtTime
            )),
            (t.TickSignal.prototype.setTargetAtTime = function (t, e, i) {
              var n, o, s, r, a;
              for (
                e = this.toSeconds(e),
                  this.setRampPoint(e),
                  t = this._fromUnits(t),
                  n = this._events.get(e),
                  o = 5,
                  s = 0;
                s <= o;
                s++
              )
                (r = i * s + e),
                  (a = this._exponentialApproach(n.time, n.value, t, i, r)),
                  this.linearRampToValueAtTime(this._toUnits(a), r);
              return this;
            }),
            (t.TickSignal.prototype.exponentialRampToValueAtTime = function (
              t,
              e
            ) {
              var i, n, o, s, r, a;
              for (
                e = this.toSeconds(e),
                  t = this._fromUnits(t),
                  i = this._events.get(e),
                  null === i && (i = { value: this._initial, time: 0 }),
                  n = 5,
                  o = (e - i.time) / n,
                  s = 0;
                s <= n;
                s++
              )
                (r = o * s + i.time),
                  (a = this._exponentialInterpolate(i.time, i.value, e, t, r)),
                  this.linearRampToValueAtTime(this._toUnits(a), r);
              return this;
            }),
            (t.TickSignal.prototype._getTickUntilEvent = function (t, e) {
              var i, n;
              return (
                null === t && (t = { ticks: 0, time: 0 }),
                (i = this.getValueAtTime(t.time)),
                (n = this.getValueAtTime(e)),
                0.5 * (e - t.time) * (i + n) + t.ticks
              );
            }),
            (t.TickSignal.prototype.getTickAtTime = function (t) {
              t = this.toSeconds(t);
              var e = this._events.get(t);
              return this._getTickUntilEvent(e, t);
            }),
            (t.TickSignal.prototype.getDurationOfTicks = function (t, e) {
              e = this.toSeconds(e);
              var i = this.getTickAtTime(e);
              return this.getTimeOfTick(i + t) - e;
            }),
            (t.TickSignal.prototype.getTimeOfTick = function (e) {
              var i,
                n,
                o,
                s,
                r,
                a,
                l = this._events.get(e, "ticks"),
                u = this._events.getAfter(e, "ticks");
              return l && l.ticks === e
                ? l.time
                : l &&
                  u &&
                  u.type === t.TimelineSignal.Type.Linear &&
                  l.value !== u.value
                ? ((i = this.getValueAtTime(l.time)),
                  (n = this.getValueAtTime(u.time)),
                  (o = (n - i) / (u.time - l.time)),
                  (s = Math.sqrt(Math.pow(i, 2) - 2 * o * (l.ticks - e))),
                  (r = (-i + s) / o),
                  (a = (-i - s) / o),
                  (r > 0 ? r : a) + l.time)
                : l
                ? 0 === l.value
                  ? 1 / 0
                  : l.time + (e - l.ticks) / l.value
                : e / this._initial;
            }),
            t.TickSignal
          );
        }),
        t(function (t) {
          return (
            (t.TimelineState = function (e) {
              t.Timeline.call(this), (this._initial = e);
            }),
            t.extend(t.TimelineState, t.Timeline),
            (t.TimelineState.prototype.getValueAtTime = function (t) {
              var e = this.get(t);
              return null !== e ? e.state : this._initial;
            }),
            (t.TimelineState.prototype.setStateAtTime = function (t, e) {
              return this.add({ state: t, time: e }), this;
            }),
            t.TimelineState
          );
        }),
        t(function (t) {
          return (
            (t.Clock = function () {
              var e = t.defaults(arguments, ["callback", "frequency"], t.Clock);
              t.Emitter.call(this),
                (this.callback = e.callback),
                (this._nextTick = 0),
                (this._lastState = t.State.Stopped),
                (this.frequency = new t.TickSignal(
                  e.frequency,
                  t.Type.Frequency
                )),
                this._readOnly("frequency"),
                (this.ticks = 0),
                (this._state = new t.TimelineState(t.State.Stopped)),
                (this._boundLoop = this._loop.bind(this)),
                this.context.on("tick", this._boundLoop);
            }),
            t.extend(t.Clock, t.Emitter),
            (t.Clock.defaults = { callback: t.noOp, frequency: 1 }),
            Object.defineProperty(t.Clock.prototype, "state", {
              get: function () {
                return this._state.getValueAtTime(this.now());
              },
            }),
            (t.Clock.prototype.start = function (e, i) {
              return (
                (e = this.toSeconds(e)),
                this._state.getValueAtTime(e) !== t.State.Started &&
                  (this._state.setStateAtTime(t.State.Started, e),
                  (this._state.get(e).offset = i)),
                this
              );
            }),
            (t.Clock.prototype.stop = function (e) {
              return (
                (e = this.toSeconds(e)),
                this._state.cancel(e),
                this._state.setStateAtTime(t.State.Stopped, e),
                this
              );
            }),
            (t.Clock.prototype.pause = function (e) {
              return (
                (e = this.toSeconds(e)),
                this._state.getValueAtTime(e) === t.State.Started &&
                  this._state.setStateAtTime(t.State.Paused, e),
                this
              );
            }),
            (t.Clock.prototype._loop = function () {
              var e,
                i = this.now() + this.context.updateInterval,
                n = this._state.get(i);
              if (n) {
                if (n.state !== this._lastState)
                  switch (((this._lastState = n.state), n.state)) {
                    case t.State.Started:
                      t.isUndef(n.offset) || (this.ticks = n.offset),
                        (this._nextTick = n.time),
                        this.emit("start", n.time, this.ticks);
                      break;
                    case t.State.Stopped:
                      (this.ticks = 0), this.emit("stop", n.time);
                      break;
                    case t.State.Paused:
                      this.emit("pause", n.time);
                  }
                for (; i > this._nextTick && this._state; )
                  if (
                    ((e = this._nextTick),
                    this.frequency &&
                      ((this._nextTick += this.frequency.getDurationOfTicks(
                        1,
                        this._nextTick
                      )),
                      n.state === t.State.Started))
                  )
                    try {
                      this.callback(e), this.ticks++;
                    } catch (t) {
                      throw (this.ticks++, t);
                    }
              }
            }),
            (t.Clock.prototype.getStateAtTime = function (t) {
              return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
            }),
            (t.Clock.prototype.dispose = function () {
              t.Emitter.prototype.dispose.call(this),
                this.context.off("tick", this._boundLoop),
                this._writable("frequency"),
                this.frequency.dispose(),
                (this.frequency = null),
                (this._boundLoop = null),
                (this._nextTick = 1 / 0),
                (this.callback = null),
                this._state.dispose(),
                (this._state = null);
            }),
            t.Clock
          );
        }),
        t(function (t) {
          (t.IntervalTimeline = function () {
            t.call(this), (this._root = null), (this._length = 0);
          }),
            t.extend(t.IntervalTimeline),
            (t.IntervalTimeline.prototype.add = function (i) {
              if (t.isUndef(i.time) || t.isUndef(i.duration))
                throw new Error(
                  "Tone.IntervalTimeline: events must have time and duration parameters"
                );
              i.time = i.time.valueOf();
              var n = new e(i.time, i.time + i.duration, i);
              for (
                null === this._root ? (this._root = n) : this._root.insert(n),
                  this._length++;
                null !== n;

              )
                n.updateHeight(),
                  n.updateMax(),
                  this._rebalance(n),
                  (n = n.parent);
              return this;
            }),
            (t.IntervalTimeline.prototype.remove = function (t) {
              var e, i, n;
              if (null !== this._root)
                for (
                  e = [], this._root.search(t.time, e), i = 0;
                  i < e.length;
                  i++
                )
                  if (((n = e[i]), n.event === t)) {
                    this._removeNode(n), this._length--;
                    break;
                  }
              return this;
            }),
            Object.defineProperty(t.IntervalTimeline.prototype, "length", {
              get: function () {
                return this._length;
              },
            }),
            (t.IntervalTimeline.prototype.cancel = function (t) {
              return (
                this.forEachAfter(
                  t,
                  function (t) {
                    this.remove(t);
                  }.bind(this)
                ),
                this
              );
            }),
            (t.IntervalTimeline.prototype._setRoot = function (t) {
              (this._root = t),
                null !== this._root && (this._root.parent = null);
            }),
            (t.IntervalTimeline.prototype._replaceNodeInParent = function (
              t,
              e
            ) {
              null !== t.parent
                ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
                  this._rebalance(t.parent))
                : this._setRoot(e);
            }),
            (t.IntervalTimeline.prototype._removeNode = function (t) {
              var e, i;
              if (null === t.left && null === t.right)
                this._replaceNodeInParent(t, null);
              else if (null === t.right) this._replaceNodeInParent(t, t.left);
              else if (null === t.left) this._replaceNodeInParent(t, t.right);
              else {
                if (t.getBalance() > 0)
                  if (null === t.left.right)
                    (e = t.left), (e.right = t.right), (i = e);
                  else {
                    for (e = t.left.right; null !== e.right; ) e = e.right;
                    (e.parent.right = e.left),
                      (i = e.parent),
                      (e.left = t.left),
                      (e.right = t.right);
                  }
                else if (null === t.right.left)
                  (e = t.right), (e.left = t.left), (i = e);
                else {
                  for (e = t.right.left; null !== e.left; ) e = e.left;
                  (e.parent = e.parent),
                    (e.parent.left = e.right),
                    (i = e.parent),
                    (e.left = t.left),
                    (e.right = t.right);
                }
                null !== t.parent
                  ? t.isLeftChild()
                    ? (t.parent.left = e)
                    : (t.parent.right = e)
                  : this._setRoot(e),
                  this._rebalance(i);
              }
              t.dispose();
            }),
            (t.IntervalTimeline.prototype._rotateLeft = function (t) {
              var e = t.parent,
                i = t.isLeftChild(),
                n = t.right;
              (t.right = n.left),
                (n.left = t),
                null !== e
                  ? i
                    ? (e.left = n)
                    : (e.right = n)
                  : this._setRoot(n);
            }),
            (t.IntervalTimeline.prototype._rotateRight = function (t) {
              var e = t.parent,
                i = t.isLeftChild(),
                n = t.left;
              (t.left = n.right),
                (n.right = t),
                null !== e
                  ? i
                    ? (e.left = n)
                    : (e.right = n)
                  : this._setRoot(n);
            }),
            (t.IntervalTimeline.prototype._rebalance = function (t) {
              var e = t.getBalance();
              e > 1
                ? t.left.getBalance() < 0
                  ? this._rotateLeft(t.left)
                  : this._rotateRight(t)
                : e < -1 &&
                  (t.right.getBalance() > 0
                    ? this._rotateRight(t.right)
                    : this._rotateLeft(t));
            }),
            (t.IntervalTimeline.prototype.get = function (t) {
              var e, i, n;
              if (
                null !== this._root &&
                ((e = []), this._root.search(t, e), e.length > 0)
              ) {
                for (i = e[0], n = 1; n < e.length; n++)
                  e[n].low > i.low && (i = e[n]);
                return i.event;
              }
              return null;
            }),
            (t.IntervalTimeline.prototype.forEach = function (t) {
              var e, i, n;
              if (null !== this._root)
                for (
                  e = [],
                    this._root.traverse(function (t) {
                      e.push(t);
                    }),
                    i = 0;
                  i < e.length;
                  i++
                )
                  (n = e[i].event) && t(n);
              return this;
            }),
            (t.IntervalTimeline.prototype.forEachAtTime = function (t, e) {
              var i, n, o;
              if (null !== this._root)
                for (
                  i = [], this._root.search(t, i), n = i.length - 1;
                  n >= 0;
                  n--
                )
                  (o = i[n].event) && e(o);
              return this;
            }),
            (t.IntervalTimeline.prototype.forEachAfter = function (t, e) {
              var i, n, o;
              if (null !== this._root)
                for (
                  i = [], this._root.searchAfter(t, i), n = i.length - 1;
                  n >= 0;
                  n--
                )
                  (o = i[n].event), e(o);
              return this;
            }),
            (t.IntervalTimeline.prototype.dispose = function () {
              var t,
                e = [];
              for (
                null !== this._root &&
                  this._root.traverse(function (t) {
                    e.push(t);
                  }),
                  t = 0;
                t < e.length;
                t++
              )
                e[t].dispose();
              return (e = null), (this._root = null), this;
            });
          var e = function (t, e, i) {
            (this.event = i),
              (this.low = t),
              (this.high = e),
              (this.max = this.high),
              (this._left = null),
              (this._right = null),
              (this.parent = null),
              (this.height = 0);
          };
          return (
            (e.prototype.insert = function (t) {
              t.low <= this.low
                ? null === this.left
                  ? (this.left = t)
                  : this.left.insert(t)
                : null === this.right
                ? (this.right = t)
                : this.right.insert(t);
            }),
            (e.prototype.search = function (t, e) {
              t > this.max ||
                (null !== this.left && this.left.search(t, e),
                this.low <= t && this.high > t && e.push(this),
                this.low > t ||
                  (null !== this.right && this.right.search(t, e)));
            }),
            (e.prototype.searchAfter = function (t, e) {
              this.low >= t &&
                (e.push(this),
                null !== this.left && this.left.searchAfter(t, e)),
                null !== this.right && this.right.searchAfter(t, e);
            }),
            (e.prototype.traverse = function (t) {
              t(this),
                null !== this.left && this.left.traverse(t),
                null !== this.right && this.right.traverse(t);
            }),
            (e.prototype.updateHeight = function () {
              null !== this.left && null !== this.right
                ? (this.height =
                    Math.max(this.left.height, this.right.height) + 1)
                : null !== this.right
                ? (this.height = this.right.height + 1)
                : null !== this.left
                ? (this.height = this.left.height + 1)
                : (this.height = 0);
            }),
            (e.prototype.updateMax = function () {
              (this.max = this.high),
                null !== this.left &&
                  (this.max = Math.max(this.max, this.left.max)),
                null !== this.right &&
                  (this.max = Math.max(this.max, this.right.max));
            }),
            (e.prototype.getBalance = function () {
              var t = 0;
              return (
                null !== this.left && null !== this.right
                  ? (t = this.left.height - this.right.height)
                  : null !== this.left
                  ? (t = this.left.height + 1)
                  : null !== this.right && (t = -(this.right.height + 1)),
                t
              );
            }),
            (e.prototype.isLeftChild = function () {
              return null !== this.parent && this.parent.left === this;
            }),
            Object.defineProperty(e.prototype, "left", {
              get: function () {
                return this._left;
              },
              set: function (t) {
                (this._left = t),
                  null !== t && (t.parent = this),
                  this.updateHeight(),
                  this.updateMax();
              },
            }),
            Object.defineProperty(e.prototype, "right", {
              get: function () {
                return this._right;
              },
              set: function (t) {
                (this._right = t),
                  null !== t && (t.parent = this),
                  this.updateHeight(),
                  this.updateMax();
              },
            }),
            (e.prototype.dispose = function () {
              (this.parent = null),
                (this._left = null),
                (this._right = null),
                (this.event = null);
            }),
            t.IntervalTimeline
          );
        }),
        t(function (t) {
          return (
            (t.Ticks = function (e, i) {
              if (!(this instanceof t.Ticks)) return new t.Ticks(e, i);
              t.TransportTime.call(this, e, i);
            }),
            t.extend(t.Ticks, t.TransportTime),
            (t.Ticks.prototype._defaultUnits = "i"),
            (t.Ticks.prototype._now = function () {
              return t.Transport.ticks;
            }),
            (t.Ticks.prototype._beatsToUnits = function (t) {
              return this._getPPQ() * t;
            }),
            (t.Ticks.prototype._secondsToUnits = function (t) {
              return (t / (60 / this._getBpm())) * this._getPPQ();
            }),
            (t.Ticks.prototype._ticksToUnits = function (t) {
              return t;
            }),
            (t.Ticks.prototype.toTicks = function () {
              return this.valueOf();
            }),
            (t.Ticks.prototype.toSeconds = function () {
              return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
            }),
            t.Ticks
          );
        }),
        t(function (t) {
          return (
            (t.TransportEvent = function (e, i) {
              (i = t.defaultArg(i, t.TransportEvent.defaults)),
                t.call(this),
                (this.Transport = e),
                (this.id = t.TransportEvent._eventId++),
                (this.time = t.Ticks(i.time)),
                (this.callback = i.callback),
                (this._once = i.once);
            }),
            t.extend(t.TransportEvent),
            (t.TransportEvent.defaults = { once: !1, callback: t.noOp }),
            (t.TransportEvent._eventId = 0),
            (t.TransportEvent.prototype.invoke = function (t) {
              this.callback &&
                (this.callback(t),
                this._once && this.Transport && this.Transport.clear(this.id));
            }),
            (t.TransportEvent.prototype.dispose = function () {
              return (
                t.prototype.dispose.call(this),
                (this.Transport = null),
                (this.callback = null),
                (this.time = null),
                this
              );
            }),
            t.TransportEvent
          );
        }),
        t(function (t) {
          return (
            (t.TransportRepeatEvent = function (e, i) {
              t.TransportEvent.call(this, e, i),
                (i = t.defaultArg(i, t.TransportRepeatEvent.defaults)),
                (this.duration = t.Ticks(i.duration)),
                (this._interval = t.Ticks(i.interval)),
                (this._currentId = -1),
                (this._nextId = -1),
                (this._nextTick = this.time),
                (this._boundRestart = this._restart.bind(this)),
                this.Transport.on("start loopStart", this._boundRestart),
                this._restart();
            }),
            t.extend(t.TransportRepeatEvent, t.TransportEvent),
            (t.TransportRepeatEvent.defaults = {
              duration: 1 / 0,
              interval: 1,
            }),
            (t.TransportRepeatEvent.prototype.invoke = function (e) {
              this._createEvents(),
                t.TransportEvent.prototype.invoke.call(this, e);
            }),
            (t.TransportRepeatEvent.prototype._createEvents = function () {
              var e = this.Transport.ticks;
              e >= this.time &&
                e >= this._nextTick &&
                this._nextTick + this._interval < this.time + this.duration &&
                ((this._nextTick += this._interval),
                (this._currentId = this._nextId),
                (this._nextId = this.Transport.scheduleOnce(
                  this.invoke.bind(this),
                  t.Ticks(this._nextTick)
                )));
            }),
            (t.TransportRepeatEvent.prototype._restart = function () {
              this.Transport.clear(this._currentId),
                this.Transport.clear(this._nextId);
              var e = this.Transport.ticks;
              (this._nextTick = this.time),
                e > this.time &&
                  (this._nextTick =
                    this.time +
                    Math.ceil((e - this.time) / this._interval) *
                      this._interval),
                (this._currentId = this.Transport.scheduleOnce(
                  this.invoke.bind(this),
                  t.Ticks(this._nextTick)
                )),
                (this._nextTick += this._interval),
                (this._nextId = this.Transport.scheduleOnce(
                  this.invoke.bind(this),
                  t.Ticks(this._nextTick)
                ));
            }),
            (t.TransportRepeatEvent.prototype.dispose = function () {
              return (
                this.Transport.clear(this._currentId),
                this.Transport.clear(this._nextId),
                this.Transport.off("start loopStart", this._boundRestart),
                (this._boundCreateEvents = null),
                t.TransportEvent.prototype.dispose.call(this),
                (this.duration = null),
                (this._interval = null),
                this
              );
            }),
            t.TransportRepeatEvent
          );
        }),
        t(function (t) {
          (t.Transport = function () {
            t.Emitter.call(this),
              t.getContext(
                function () {
                  (this.loop = !1),
                    (this._loopStart = 0),
                    (this._loopEnd = 0),
                    (this._ppq = e.defaults.PPQ),
                    (this._clock = new t.Clock({
                      callback: this._processTick.bind(this),
                      frequency: 0,
                    })),
                    this._bindClockEvents(),
                    (this.bpm = this._clock.frequency),
                    (this.bpm._toUnits = this._toUnits.bind(this)),
                    (this.bpm._fromUnits = this._fromUnits.bind(this)),
                    (this.bpm.units = t.Type.BPM),
                    (this.bpm.value = e.defaults.bpm),
                    this._readOnly("bpm"),
                    (this._timeSignature = e.defaults.timeSignature),
                    (this._scheduledEvents = {}),
                    (this._timeline = new t.Timeline()),
                    (this._repeatedEvents = new t.IntervalTimeline()),
                    (this._syncedSignals = []),
                    (this._swingTicks = e.defaults.PPQ / 2),
                    (this._swingAmount = 0);
                }.bind(this)
              );
          }),
            t.extend(t.Transport, t.Emitter),
            (t.Transport.defaults = {
              bpm: 120,
              swing: 0,
              swingSubdivision: "8n",
              timeSignature: 4,
              loopStart: 0,
              loopEnd: "4m",
              PPQ: 192,
            }),
            (t.Transport.prototype._processTick = function (e) {
              var i,
                n,
                o = this._clock.ticks;
              this._swingAmount > 0 &&
                o % this._ppq != 0 &&
                o % (2 * this._swingTicks) != 0 &&
                ((i = (o % (2 * this._swingTicks)) / (2 * this._swingTicks)),
                (n = Math.sin(i * Math.PI) * this._swingAmount),
                (e += t.Ticks((2 * this._swingTicks) / 3).toSeconds() * n)),
                this.loop &&
                  o >= this._loopEnd &&
                  (this.emit("loopEnd", e),
                  (this._clock.ticks = this._loopStart),
                  (o = this._loopStart),
                  this.emit("loopStart", e, this.seconds),
                  this.emit("loop", e)),
                this._timeline.forEachAtTime(o, function (t) {
                  t.invoke(e);
                });
            }),
            (t.Transport.prototype.schedule = function (e, i) {
              var n = new t.TransportEvent(this, {
                time: t.TransportTime(i),
                callback: e,
              });
              return this._addEvent(n, this._timeline);
            }),
            (t.Transport.prototype.scheduleRepeat = function (e, i, n, o) {
              var s = new t.TransportRepeatEvent(this, {
                callback: e,
                interval: t.Time(i),
                time: t.TransportTime(n),
                duration: t.Time(t.defaultArg(o, 1 / 0)),
              });
              return this._addEvent(s, this._repeatedEvents);
            }),
            (t.Transport.prototype.scheduleOnce = function (e, i) {
              var n = new t.TransportEvent(this, {
                time: t.TransportTime(i),
                callback: e,
                once: !0,
              });
              return this._addEvent(n, this._timeline);
            }),
            (t.Transport.prototype.clear = function (t) {
              if (this._scheduledEvents.hasOwnProperty(t)) {
                var e = this._scheduledEvents[t.toString()];
                e.timeline.remove(e.event),
                  e.event.dispose(),
                  delete this._scheduledEvents[t.toString()];
              }
              return this;
            }),
            (t.Transport.prototype._addEvent = function (t, e) {
              return (
                (this._scheduledEvents[t.id.toString()] = {
                  event: t,
                  timeline: e,
                }),
                e.add(t),
                t.id
              );
            }),
            (t.Transport.prototype.cancel = function (e) {
              return (
                (e = t.defaultArg(e, 0)),
                (e = this.toTicks(e)),
                this._timeline.cancel(e),
                this._repeatedEvents.cancel(e),
                this
              );
            }),
            (t.Transport.prototype._bindClockEvents = function () {
              this._clock.on(
                "start",
                function (e, i) {
                  (i = t.Ticks(this._clock.ticks).toSeconds()),
                    this.emit("start", e, i);
                }.bind(this)
              ),
                this._clock.on(
                  "stop",
                  function (t) {
                    this.emit("stop", t);
                  }.bind(this)
                ),
                this._clock.on(
                  "pause",
                  function (t) {
                    this.emit("pause", t);
                  }.bind(this)
                );
            }),
            Object.defineProperty(t.Transport.prototype, "state", {
              get: function () {
                return this._clock.getStateAtTime(this.now());
              },
            }),
            (t.Transport.prototype.start = function (e, i) {
              return (
                t.isUndef(i) || (i = this.toTicks(i)),
                this._clock.start(e, i),
                this
              );
            }),
            (t.Transport.prototype.stop = function (t) {
              return this._clock.stop(t), this;
            }),
            (t.Transport.prototype.pause = function (t) {
              return this._clock.pause(t), this;
            }),
            (t.Transport.prototype.toggle = function (e) {
              return (
                (e = this.toSeconds(e)),
                this._clock.getStateAtTime(e) !== t.State.Started
                  ? this.start(e)
                  : this.stop(e),
                this
              );
            }),
            Object.defineProperty(t.Transport.prototype, "timeSignature", {
              get: function () {
                return this._timeSignature;
              },
              set: function (e) {
                t.isArray(e) && (e = (e[0] / e[1]) * 4),
                  (this._timeSignature = e);
              },
            }),
            Object.defineProperty(t.Transport.prototype, "loopStart", {
              get: function () {
                return t.Ticks(this._loopStart).toSeconds();
              },
              set: function (t) {
                this._loopStart = this.toTicks(t);
              },
            }),
            Object.defineProperty(t.Transport.prototype, "loopEnd", {
              get: function () {
                return t.Ticks(this._loopEnd).toSeconds();
              },
              set: function (t) {
                this._loopEnd = this.toTicks(t);
              },
            }),
            (t.Transport.prototype.setLoopPoints = function (t, e) {
              return (this.loopStart = t), (this.loopEnd = e), this;
            }),
            Object.defineProperty(t.Transport.prototype, "swing", {
              get: function () {
                return this._swingAmount;
              },
              set: function (t) {
                this._swingAmount = t;
              },
            }),
            Object.defineProperty(t.Transport.prototype, "swingSubdivision", {
              get: function () {
                return t.Ticks(this._swingTicks).toNotation();
              },
              set: function (t) {
                this._swingTicks = this.toTicks(t);
              },
            }),
            Object.defineProperty(t.Transport.prototype, "position", {
              get: function () {
                return t.Ticks(this.ticks).toBarsBeatsSixteenths();
              },
              set: function (t) {
                var e = this.toTicks(t);
                this.ticks = e;
              },
            }),
            Object.defineProperty(t.Transport.prototype, "seconds", {
              get: function () {
                return t.Ticks(this.ticks).toSeconds();
              },
              set: function (t) {
                var e = this.toTicks(t);
                this.ticks = e;
              },
            }),
            Object.defineProperty(t.Transport.prototype, "progress", {
              get: function () {
                return this.loop
                  ? (this.ticks - this._loopStart) /
                      (this._loopEnd - this._loopStart)
                  : 0;
              },
            }),
            Object.defineProperty(t.Transport.prototype, "ticks", {
              get: function () {
                return this._clock.ticks;
              },
              set: function (e) {
                if (this._clock.ticks !== e) {
                  var i = this.now();
                  this.state === t.State.Started
                    ? (this.emit("stop", i),
                      (this._clock.ticks = e),
                      this.emit("start", i, this.seconds))
                    : (this._clock.ticks = e);
                }
              },
            }),
            Object.defineProperty(t.Transport.prototype, "PPQ", {
              get: function () {
                return this._ppq;
              },
              set: function (t) {
                var e = this.bpm.value;
                (this._ppq = t), (this.bpm.value = e);
              },
            }),
            (t.Transport.prototype._fromUnits = function (t) {
              return 1 / (60 / t / this.PPQ);
            }),
            (t.Transport.prototype._toUnits = function (t) {
              return (t / this.PPQ) * 60;
            }),
            (t.Transport.prototype.nextSubdivision = function (e) {
              var i, n, o;
              return (
                (e = this.toSeconds(e)),
                this.state !== t.State.Started
                  ? 0
                  : ((i = this._clock._nextTick),
                    (n = t.Time(this.ticks, "i")),
                    (o = e - (n % e)),
                    0 === o && (o = e),
                    i + o)
              );
            }),
            (t.Transport.prototype.syncSignal = function (e, i) {
              i ||
                (i =
                  0 !== e._param.value
                    ? e._param.value / this.bpm._param.value
                    : 0);
              var n = new t.Gain(i);
              return (
                this.bpm.chain(n, e._param),
                this._syncedSignals.push({
                  ratio: n,
                  signal: e,
                  initial: e._param.value,
                }),
                (e._param.value = 0),
                this
              );
            }),
            (t.Transport.prototype.unsyncSignal = function (t) {
              var e, i;
              for (e = this._syncedSignals.length - 1; e >= 0; e--)
                (i = this._syncedSignals[e]),
                  i.signal === t &&
                    (i.ratio.dispose(),
                    (i.signal._param.value = i.initial),
                    this._syncedSignals.splice(e, 1));
              return this;
            }),
            (t.Transport.prototype.dispose = function () {
              return (
                t.Emitter.prototype.dispose.call(this),
                this._clock.dispose(),
                (this._clock = null),
                this._writable("bpm"),
                (this.bpm = null),
                this._timeline.dispose(),
                (this._timeline = null),
                this._repeatedEvents.dispose(),
                (this._repeatedEvents = null),
                this
              );
            });
          var e = t.Transport;
          return (
            (t.Transport = new e()),
            t.Context.on("init", function (i) {
              i.Transport instanceof e
                ? (t.Transport = i.Transport)
                : (t.Transport = new e()),
                (i.Transport = t.Transport);
            }),
            t.Context.on("close", function (t) {
              t.Transport instanceof e && t.Transport.dispose();
            }),
            t.Transport
          );
        }),
        t(function (t) {
          return (
            (t.Volume = function () {
              var e = t.defaults(arguments, ["volume"], t.Volume);
              t.AudioNode.call(this),
                (this.output = this.input =
                  new t.Gain(e.volume, t.Type.Decibels)),
                (this._unmutedVolume = e.volume),
                (this.volume = this.output.gain),
                this._readOnly("volume"),
                (this.mute = e.mute);
            }),
            t.extend(t.Volume, t.AudioNode),
            (t.Volume.defaults = { volume: 0, mute: !1 }),
            Object.defineProperty(t.Volume.prototype, "mute", {
              get: function () {
                return this.volume.value === -1 / 0;
              },
              set: function (t) {
                !this.mute && t
                  ? ((this._unmutedVolume = this.volume.value),
                    (this.volume.value = -1 / 0))
                  : this.mute &&
                    !t &&
                    (this.volume.value = this._unmutedVolume);
              },
            }),
            (t.Volume.prototype.dispose = function () {
              return (
                this.input.dispose(),
                t.AudioNode.prototype.dispose.call(this),
                this._writable("volume"),
                this.volume.dispose(),
                (this.volume = null),
                this
              );
            }),
            t.Volume
          );
        }),
        t(function (t) {
          (t.Master = function () {
            t.AudioNode.call(this),
              t.getContext(
                function () {
                  this.createInsOuts(1, 0),
                    (this._volume = this.output = new t.Volume()),
                    (this.volume = this._volume.volume),
                    this._readOnly("volume"),
                    this.input.chain(this.output, this.context.destination);
                }.bind(this)
              );
          }),
            t.extend(t.Master, t.AudioNode),
            (t.Master.defaults = { volume: 0, mute: !1 }),
            Object.defineProperty(t.Master.prototype, "mute", {
              get: function () {
                return this._volume.mute;
              },
              set: function (t) {
                this._volume.mute = t;
              },
            }),
            (t.Master.prototype.chain = function () {
              this.input.disconnect(),
                this.input.chain.apply(this.input, arguments),
                arguments[arguments.length - 1].connect(this.output);
            }),
            (t.Master.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this),
                this._writable("volume"),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null);
            }),
            (t.AudioNode.prototype.toMaster = function () {
              return this.connect(t.Master), this;
            }),
            window.AudioNode &&
              (AudioNode.prototype.toMaster = function () {
                return this.connect(t.Master), this;
              });
          var e = t.Master;
          return (
            (t.Master = new e()),
            t.Context.on("init", function (i) {
              i.Master instanceof e
                ? (t.Master = i.Master)
                : (t.Master = new e()),
                (i.Master = t.Master);
            }),
            t.Context.on("close", function (t) {
              t.Master instanceof e && t.Master.dispose();
            }),
            t.Master
          );
        }),
        t(function (t) {
          return (
            (t.Source = function (e) {
              (e = t.defaultArg(e, t.Source.defaults)),
                t.AudioNode.call(this),
                (this._volume = this.output = new t.Volume(e.volume)),
                (this.volume = this._volume.volume),
                this._readOnly("volume"),
                (this._state = new t.TimelineState(t.State.Stopped)),
                (this._state.memory = 100),
                (this._synced = !1),
                (this._scheduled = []),
                (this._volume.output.output.channelCount = 2),
                (this._volume.output.output.channelCountMode = "explicit"),
                (this.mute = e.mute);
            }),
            t.extend(t.Source, t.AudioNode),
            (t.Source.defaults = { volume: 0, mute: !1 }),
            Object.defineProperty(t.Source.prototype, "state", {
              get: function () {
                return this._synced
                  ? t.Transport.state === t.State.Started
                    ? this._state.getValueAtTime(t.Transport.seconds)
                    : t.State.Stopped
                  : this._state.getValueAtTime(this.now());
              },
            }),
            Object.defineProperty(t.Source.prototype, "mute", {
              get: function () {
                return this._volume.mute;
              },
              set: function (t) {
                this._volume.mute = t;
              },
            }),
            (t.Source.prototype._start = t.noOp),
            (t.Source.prototype._stop = t.noOp),
            (t.Source.prototype.start = function (e, i, n) {
              var o, s;
              return (
                (e =
                  t.isUndef(e) && this._synced
                    ? t.Transport.seconds
                    : this.toSeconds(e)),
                this.retrigger ||
                  this._state.getValueAtTime(e) !== t.State.Started ||
                  this.stop(e),
                this._state.setStateAtTime(t.State.Started, e),
                this._synced
                  ? ((o = this._state.get(e)),
                    (o.offset = t.defaultArg(i, 0)),
                    (o.duration = n),
                    (s = t.Transport.schedule(
                      function (t) {
                        this._start(t, i, n);
                      }.bind(this),
                      e
                    )),
                    this._scheduled.push(s))
                  : this._start.apply(this, arguments),
                this
              );
            }),
            (t.Source.prototype.stop = function (e) {
              if (
                ((e =
                  t.isUndef(e) && this._synced
                    ? t.Transport.seconds
                    : this.toSeconds(e)),
                this._synced)
              ) {
                var i = t.Transport.schedule(this._stop.bind(this), e);
                this._scheduled.push(i);
              } else this._stop.apply(this, arguments);
              return (
                this._state.cancel(e),
                this._state.setStateAtTime(t.State.Stopped, e),
                this
              );
            }),
            (t.Source.prototype.sync = function () {
              return (
                (this._synced = !0),
                (this._syncedStart = function (e, i) {
                  var n, o, s;
                  i > 0 &&
                    (n = this._state.get(i)) &&
                    n.state === t.State.Started &&
                    n.time !== i &&
                    ((o = i - this.toSeconds(n.time)),
                    n.duration && (s = this.toSeconds(n.duration) - o),
                    this._start(e, this.toSeconds(n.offset) + o, s));
                }.bind(this)),
                (this._syncedStop = function (e) {
                  this._state.getValueAtTime(t.Transport.seconds) ===
                    t.State.Started && this._stop(e);
                }.bind(this)),
                t.Transport.on("start loopStart", this._syncedStart),
                t.Transport.on("stop pause loopEnd", this._syncedStop),
                this
              );
            }),
            (t.Source.prototype.unsync = function () {
              var e, i;
              for (
                this._synced &&
                  (t.Transport.off("stop pause loopEnd", this._syncedStop),
                  t.Transport.off("start loopStart", this._syncedStart)),
                  this._synced = !1,
                  e = 0;
                e < this._scheduled.length;
                e++
              )
                (i = this._scheduled[e]), t.Transport.clear(i);
              return (this._scheduled = []), this._state.cancel(0), this;
            }),
            (t.Source.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this),
                this.unsync(),
                (this._scheduled = null),
                this._writable("volume"),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null),
                this._state.dispose(),
                (this._state = null);
            }),
            t.Source
          );
        }),
        t(function (t) {
          return (
            (t.Oscillator = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "type"],
                t.Oscillator
              );
              t.Source.call(this, e),
                (this._oscillator = null),
                (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                (this._wave = null),
                (this._partials = t.defaultArg(e.partials, [1])),
                (this._phase = e.phase),
                (this._type = null),
                (this.type = e.type),
                (this.phase = this._phase),
                this._readOnly(["frequency", "detune"]);
            }),
            t.extend(t.Oscillator, t.Source),
            (t.Oscillator.defaults = {
              type: "sine",
              frequency: 440,
              detune: 0,
              phase: 0,
              partials: [],
            }),
            (t.Oscillator.Type = {
              Sine: "sine",
              Triangle: "triangle",
              Sawtooth: "sawtooth",
              Square: "square",
              Custom: "custom",
            }),
            (t.Oscillator.prototype._start = function (e) {
              (this._oscillator = this.context.createOscillator()),
                this._oscillator.setPeriodicWave(this._wave),
                this._oscillator.connect(this.output),
                this.frequency.connect(this._oscillator.frequency),
                this.detune.connect(this._oscillator.detune),
                (e = this.toSeconds(e)),
                t.isPast(e),
                this._oscillator.start(e);
            }),
            (t.Oscillator.prototype._stop = function (e) {
              return (
                this._oscillator &&
                  ((e = this.toSeconds(e)),
                  t.isPast(e),
                  this._oscillator.stop(e),
                  (this._oscillator = null)),
                this
              );
            }),
            (t.Oscillator.prototype.syncFrequency = function () {
              return t.Transport.syncSignal(this.frequency), this;
            }),
            (t.Oscillator.prototype.unsyncFrequency = function () {
              return t.Transport.unsyncSignal(this.frequency), this;
            }),
            Object.defineProperty(t.Oscillator.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (t) {
                var e = this._getRealImaginary(t, this._phase),
                  i = this.context.createPeriodicWave(e[0], e[1]);
                (this._wave = i),
                  null !== this._oscillator &&
                    this._oscillator.setPeriodicWave(this._wave),
                  (this._type = t);
              },
            }),
            (t.Oscillator.prototype._getRealImaginary = function (e, i) {
              var n,
                o,
                s,
                r,
                a = 2048,
                l = new Float32Array(a),
                u = new Float32Array(a),
                c = 1;
              for (
                e === t.Oscillator.Type.Custom
                  ? ((c = this._partials.length + 1), (a = c))
                  : (n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e)) &&
                    ((c = parseInt(n[2]) + 1),
                    (e = n[1]),
                    (c = Math.max(c, 2)),
                    (a = c)),
                  o = 1;
                o < a;
                ++o
              ) {
                switch (((s = 2 / (o * Math.PI)), e)) {
                  case t.Oscillator.Type.Sine:
                    r = o <= c ? 1 : 0;
                    break;
                  case t.Oscillator.Type.Square:
                    r = 1 & o ? 2 * s : 0;
                    break;
                  case t.Oscillator.Type.Sawtooth:
                    r = s * (1 & o ? 1 : -1);
                    break;
                  case t.Oscillator.Type.Triangle:
                    r = 1 & o ? s * s * 2 * (((o - 1) >> 1) & 1 ? -1 : 1) : 0;
                    break;
                  case t.Oscillator.Type.Custom:
                    r = this._partials[o - 1];
                    break;
                  default:
                    throw new TypeError("Tone.Oscillator: invalid type: " + e);
                }
                0 !== r
                  ? ((l[o] = -r * Math.sin(i * o)),
                    (u[o] = r * Math.cos(i * o)))
                  : ((l[o] = 0), (u[o] = 0));
              }
              return [l, u];
            }),
            (t.Oscillator.prototype._inverseFFT = function (t, e, i) {
              var n,
                o = 0,
                s = t.length;
              for (n = 0; n < s; n++)
                o += t[n] * Math.cos(n * i) + e[n] * Math.sin(n * i);
              return o;
            }),
            (t.Oscillator.prototype._getInitialValue = function () {
              var t,
                e = this._getRealImaginary(this._type, 0),
                i = e[0],
                n = e[1],
                o = 0,
                s = 2 * Math.PI;
              for (t = 0; t < 8; t++)
                o = Math.max(this._inverseFFT(i, n, (t / 8) * s), o);
              return -this._inverseFFT(i, n, this._phase) / o;
            }),
            Object.defineProperty(t.Oscillator.prototype, "partials", {
              get: function () {
                return this._type !== t.Oscillator.Type.Custom
                  ? []
                  : this._partials;
              },
              set: function (e) {
                (this._partials = e), (this.type = t.Oscillator.Type.Custom);
              },
            }),
            Object.defineProperty(t.Oscillator.prototype, "phase", {
              get: function () {
                return this._phase * (180 / Math.PI);
              },
              set: function (t) {
                (this._phase = (t * Math.PI) / 180), (this.type = this._type);
              },
            }),
            (t.Oscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                null !== this._oscillator &&
                  (this._oscillator.disconnect(), (this._oscillator = null)),
                (this._wave = null),
                this._writable(["frequency", "detune"]),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                (this._partials = null),
                this
              );
            }),
            t.Oscillator
          );
        }),
        t(function (t) {
          return (
            (t.AudioToGain = function () {
              t.SignalBase.call(this),
                (this._norm =
                  this.input =
                  this.output =
                    new t.WaveShaper(function (t) {
                      return (t + 1) / 2;
                    }));
            }),
            t.extend(t.AudioToGain, t.SignalBase),
            (t.AudioToGain.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._norm.dispose(),
                (this._norm = null),
                this
              );
            }),
            t.AudioToGain
          );
        }),
        t(function (t) {
          return (
            (t.Zero = function () {
              t.SignalBase.call(this),
                (this._gain = this.input = this.output = new t.Gain()),
                this.context.getConstant(0).connect(this._gain);
            }),
            t.extend(t.Zero, t.SignalBase),
            (t.Zero.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._gain.dispose(),
                (this._gain = null),
                this
              );
            }),
            t.Zero
          );
        }),
        t(function (t) {
          return (
            (t.LFO = function () {
              var e = t.defaults(arguments, ["frequency", "min", "max"], t.LFO);
              t.AudioNode.call(this),
                (this._oscillator = new t.Oscillator({
                  frequency: e.frequency,
                  type: e.type,
                })),
                (this.frequency = this._oscillator.frequency),
                (this.amplitude = this._oscillator.volume),
                (this.amplitude.units = t.Type.NormalRange),
                (this.amplitude.value = e.amplitude),
                (this._stoppedSignal = new t.Signal(0, t.Type.AudioRange)),
                (this._zeros = new t.Zero()),
                (this._stoppedValue = 0),
                (this._a2g = new t.AudioToGain()),
                (this._scaler = this.output = new t.Scale(e.min, e.max)),
                (this._units = t.Type.Default),
                (this.units = e.units),
                this._oscillator.chain(this._a2g, this._scaler),
                this._zeros.connect(this._a2g),
                this._stoppedSignal.connect(this._a2g),
                this._readOnly(["amplitude", "frequency"]),
                (this.phase = e.phase);
            }),
            t.extend(t.LFO, t.AudioNode),
            (t.LFO.defaults = {
              type: "sine",
              min: 0,
              max: 1,
              phase: 0,
              frequency: "4n",
              amplitude: 1,
              units: t.Type.Default,
            }),
            (t.LFO.prototype.start = function (t) {
              return (
                (t = this.toSeconds(t)),
                this._stoppedSignal.setValueAtTime(0, t),
                this._oscillator.start(t),
                this
              );
            }),
            (t.LFO.prototype.stop = function (t) {
              return (
                (t = this.toSeconds(t)),
                this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
                this._oscillator.stop(t),
                this
              );
            }),
            (t.LFO.prototype.sync = function () {
              return (
                this._oscillator.sync(), this._oscillator.syncFrequency(), this
              );
            }),
            (t.LFO.prototype.unsync = function () {
              return (
                this._oscillator.unsync(),
                this._oscillator.unsyncFrequency(),
                this
              );
            }),
            Object.defineProperty(t.LFO.prototype, "min", {
              get: function () {
                return this._toUnits(this._scaler.min);
              },
              set: function (t) {
                (t = this._fromUnits(t)), (this._scaler.min = t);
              },
            }),
            Object.defineProperty(t.LFO.prototype, "max", {
              get: function () {
                return this._toUnits(this._scaler.max);
              },
              set: function (t) {
                (t = this._fromUnits(t)), (this._scaler.max = t);
              },
            }),
            Object.defineProperty(t.LFO.prototype, "type", {
              get: function () {
                return this._oscillator.type;
              },
              set: function (t) {
                (this._oscillator.type = t),
                  (this._stoppedValue = this._oscillator._getInitialValue()),
                  (this._stoppedSignal.value = this._stoppedValue);
              },
            }),
            Object.defineProperty(t.LFO.prototype, "phase", {
              get: function () {
                return this._oscillator.phase;
              },
              set: function (t) {
                (this._oscillator.phase = t),
                  (this._stoppedValue = this._oscillator._getInitialValue()),
                  (this._stoppedSignal.value = this._stoppedValue);
              },
            }),
            Object.defineProperty(t.LFO.prototype, "units", {
              get: function () {
                return this._units;
              },
              set: function (t) {
                var e = this.min,
                  i = this.max;
                (this._units = t), (this.min = e), (this.max = i);
              },
            }),
            Object.defineProperty(t.LFO.prototype, "mute", {
              get: function () {
                return this._oscillator.mute;
              },
              set: function (t) {
                this._oscillator.mute = t;
              },
            }),
            Object.defineProperty(t.LFO.prototype, "state", {
              get: function () {
                return this._oscillator.state;
              },
            }),
            (t.LFO.prototype.connect = function (e) {
              return (
                (e.constructor !== t.Signal &&
                  e.constructor !== t.Param &&
                  e.constructor !== t.TimelineSignal) ||
                  ((this.convert = e.convert), (this.units = e.units)),
                t.Signal.prototype.connect.apply(this, arguments),
                this
              );
            }),
            (t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits),
            (t.LFO.prototype._toUnits = t.Param.prototype._toUnits),
            (t.LFO.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable(["amplitude", "frequency"]),
                this._oscillator.dispose(),
                (this._oscillator = null),
                this._stoppedSignal.dispose(),
                (this._stoppedSignal = null),
                this._zeros.dispose(),
                (this._zeros = null),
                this._scaler.dispose(),
                (this._scaler = null),
                this._a2g.dispose(),
                (this._a2g = null),
                (this.frequency = null),
                (this.amplitude = null),
                this
              );
            }),
            t.LFO
          );
        }),
        t(function (t) {
          return (
            (t.Limiter = function () {
              var e = t.defaults(arguments, ["threshold"], t.Limiter);
              t.AudioNode.call(this),
                (this._compressor =
                  this.input =
                  this.output =
                    new t.Compressor({
                      attack: 0.001,
                      decay: 0.001,
                      threshold: e.threshold,
                    })),
                (this.threshold = this._compressor.threshold),
                this._readOnly("threshold");
            }),
            t.extend(t.Limiter, t.AudioNode),
            (t.Limiter.defaults = { threshold: -12 }),
            (t.Limiter.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._compressor.dispose(),
                (this._compressor = null),
                this._writable("threshold"),
                (this.threshold = null),
                this
              );
            }),
            t.Limiter
          );
        }),
        t(function (t) {
          return (
            (t.LowpassCombFilter = function () {
              var e = t.defaults(
                arguments,
                ["delayTime", "resonance", "dampening"],
                t.LowpassCombFilter
              );
              t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._delay = this.input = new t.Delay(e.delayTime)),
                (this.delayTime = this._delay.delayTime),
                (this._lowpass = this.output =
                  this.context.createBiquadFilter()),
                (this._lowpass.Q.value = -3.0102999566398125),
                (this._lowpass.type = "lowpass"),
                (this.dampening = new t.Param({
                  param: this._lowpass.frequency,
                  units: t.Type.Frequency,
                  value: e.dampening,
                })),
                (this._feedback = new t.Gain(e.resonance, t.Type.NormalRange)),
                (this.resonance = this._feedback.gain),
                this._delay.chain(this._lowpass, this._feedback, this._delay),
                this._readOnly(["dampening", "resonance", "delayTime"]);
            }),
            t.extend(t.LowpassCombFilter, t.AudioNode),
            (t.LowpassCombFilter.defaults = {
              delayTime: 0.1,
              resonance: 0.5,
              dampening: 3e3,
            }),
            (t.LowpassCombFilter.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable(["dampening", "resonance", "delayTime"]),
                this.dampening.dispose(),
                (this.dampening = null),
                this.resonance.dispose(),
                (this.resonance = null),
                this._delay.dispose(),
                (this._delay = null),
                (this.delayTime = null),
                this._lowpass.disconnect(),
                (this._lowpass = null),
                this._feedback.disconnect(),
                (this._feedback = null),
                this
              );
            }),
            t.LowpassCombFilter
          );
        }),
        t(function (t) {
          return (
            (t.Merge = function () {
              t.AudioNode.call(this),
                this.createInsOuts(2, 0),
                (this.left = this.input[0] = new t.Gain()),
                (this.right = this.input[1] = new t.Gain()),
                (this._merger = this.output =
                  this.context.createChannelMerger(2)),
                this.left.connect(this._merger, 0, 0),
                this.right.connect(this._merger, 0, 1),
                (this.left.channelCount = 1),
                (this.right.channelCount = 1),
                (this.left.channelCountMode = "explicit"),
                (this.right.channelCountMode = "explicit");
            }),
            t.extend(t.Merge, t.AudioNode),
            (t.Merge.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this.left.dispose(),
                (this.left = null),
                this.right.dispose(),
                (this.right = null),
                this._merger.disconnect(),
                (this._merger = null),
                this
              );
            }),
            t.Merge
          );
        }),
        t(function (t) {
          return (
            (t.Meter = function () {
              var e = t.defaults(arguments, ["smoothing"], t.Meter);
              t.AudioNode.call(this),
                (this.input =
                  this.output =
                  this._analyser =
                    new t.Analyser("waveform", 1024)),
                (this.smoothing = e.smoothing);
            }),
            t.extend(t.Meter, t.AudioNode),
            (t.Meter.defaults = { smoothing: 0.8 }),
            (t.Meter.prototype.getLevel = function () {
              var t, e;
              return (
                (this._analyser.type = "fft"),
                (t = this._analyser.getValue()),
                (e = 28),
                Math.max.apply(this, t) + e
              );
            }),
            (t.Meter.prototype.getValue = function () {
              return (
                (this._analyser.type = "waveform"), this._analyser.getValue()[0]
              );
            }),
            Object.defineProperty(t.Meter.prototype, "smoothing", {
              get: function () {
                return this._analyser.smoothing;
              },
              set: function (t) {
                this._analyser.smoothing = t;
              },
            }),
            (t.Meter.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                (this._analyser = null),
                this
              );
            }),
            t.Meter
          );
        }),
        t(function (t) {
          return (
            (t.Split = function () {
              t.AudioNode.call(this),
                this.createInsOuts(0, 2),
                (this._splitter = this.input =
                  this.context.createChannelSplitter(2)),
                (this._splitter.channelCount = 2),
                (this._splitter.channelCountMode = "explicit"),
                (this.left = this.output[0] = new t.Gain()),
                (this.right = this.output[1] = new t.Gain()),
                this._splitter.connect(this.left, 0, 0),
                this._splitter.connect(this.right, 1, 0);
            }),
            t.extend(t.Split, t.AudioNode),
            (t.Split.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._splitter.disconnect(),
                this.left.dispose(),
                (this.left = null),
                this.right.dispose(),
                (this.right = null),
                (this._splitter = null),
                this
              );
            }),
            t.Split
          );
        }),
        t(function (t) {
          return (
            (t.MidSideSplit = function () {
              t.AudioNode.call(this),
                this.createInsOuts(0, 2),
                (this._split = this.input = new t.Split()),
                (this._midAdd = new t.Add()),
                (this.mid = this.output[0] = new t.Multiply(Math.SQRT1_2)),
                (this._sideSubtract = new t.Subtract()),
                (this.side = this.output[1] = new t.Multiply(Math.SQRT1_2)),
                this._split.connect(this._midAdd, 0, 0),
                this._split.connect(this._midAdd, 1, 1),
                this._split.connect(this._sideSubtract, 0, 0),
                this._split.connect(this._sideSubtract, 1, 1),
                this._midAdd.connect(this.mid),
                this._sideSubtract.connect(this.side);
            }),
            t.extend(t.MidSideSplit, t.AudioNode),
            (t.MidSideSplit.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this.mid.dispose(),
                (this.mid = null),
                this.side.dispose(),
                (this.side = null),
                this._midAdd.dispose(),
                (this._midAdd = null),
                this._sideSubtract.dispose(),
                (this._sideSubtract = null),
                this._split.dispose(),
                (this._split = null),
                this
              );
            }),
            t.MidSideSplit
          );
        }),
        t(function (t) {
          return (
            (t.MidSideMerge = function () {
              t.AudioNode.call(this),
                this.createInsOuts(2, 0),
                (this.mid = this.input[0] = new t.Gain()),
                (this._left = new t.Add()),
                (this._timesTwoLeft = new t.Multiply(Math.SQRT1_2)),
                (this.side = this.input[1] = new t.Gain()),
                (this._right = new t.Subtract()),
                (this._timesTwoRight = new t.Multiply(Math.SQRT1_2)),
                (this._merge = this.output = new t.Merge()),
                this.mid.connect(this._left, 0, 0),
                this.side.connect(this._left, 0, 1),
                this.mid.connect(this._right, 0, 0),
                this.side.connect(this._right, 0, 1),
                this._left.connect(this._timesTwoLeft),
                this._right.connect(this._timesTwoRight),
                this._timesTwoLeft.connect(this._merge, 0, 0),
                this._timesTwoRight.connect(this._merge, 0, 1);
            }),
            t.extend(t.MidSideMerge, t.AudioNode),
            (t.MidSideMerge.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this.mid.dispose(),
                (this.mid = null),
                this.side.dispose(),
                (this.side = null),
                this._left.dispose(),
                (this._left = null),
                this._timesTwoLeft.dispose(),
                (this._timesTwoLeft = null),
                this._right.dispose(),
                (this._right = null),
                this._timesTwoRight.dispose(),
                (this._timesTwoRight = null),
                this._merge.dispose(),
                (this._merge = null),
                this
              );
            }),
            t.MidSideMerge
          );
        }),
        t(function (t) {
          return (
            (t.MidSideCompressor = function (e) {
              t.AudioNode.call(this),
                (e = t.defaultArg(e, t.MidSideCompressor.defaults)),
                (this._midSideSplit = this.input = new t.MidSideSplit()),
                (this._midSideMerge = this.output = new t.MidSideMerge()),
                (this.mid = new t.Compressor(e.mid)),
                (this.side = new t.Compressor(e.side)),
                this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
                this._midSideSplit.side.chain(
                  this.side,
                  this._midSideMerge.side
                ),
                this._readOnly(["mid", "side"]);
            }),
            t.extend(t.MidSideCompressor, t.AudioNode),
            (t.MidSideCompressor.defaults = {
              mid: {
                ratio: 3,
                threshold: -24,
                release: 0.03,
                attack: 0.02,
                knee: 16,
              },
              side: {
                ratio: 6,
                threshold: -30,
                release: 0.25,
                attack: 0.03,
                knee: 10,
              },
            }),
            (t.MidSideCompressor.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable(["mid", "side"]),
                this.mid.dispose(),
                (this.mid = null),
                this.side.dispose(),
                (this.side = null),
                this._midSideSplit.dispose(),
                (this._midSideSplit = null),
                this._midSideMerge.dispose(),
                (this._midSideMerge = null),
                this
              );
            }),
            t.MidSideCompressor
          );
        }),
        t(function (t) {
          return (
            (t.Mono = function () {
              t.AudioNode.call(this),
                this.createInsOuts(1, 0),
                (this._merge = this.output = new t.Merge()),
                this.input.connect(this._merge, 0, 0),
                this.input.connect(this._merge, 0, 1),
                (this.input.gain.value = t.dbToGain(-10));
            }),
            t.extend(t.Mono),
            (t.Mono.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._merge.dispose(),
                (this._merge = null),
                this
              );
            }),
            t.Mono
          );
        }),
        t(function (t) {
          return (
            (t.MultibandCompressor = function (e) {
              t.AudioNode.call(this),
                (e = t.defaultArg(arguments, t.MultibandCompressor.defaults)),
                (this._splitter = this.input =
                  new t.MultibandSplit({
                    lowFrequency: e.lowFrequency,
                    highFrequency: e.highFrequency,
                  })),
                (this.lowFrequency = this._splitter.lowFrequency),
                (this.highFrequency = this._splitter.highFrequency),
                (this.output = new t.Gain()),
                (this.low = new t.Compressor(e.low)),
                (this.mid = new t.Compressor(e.mid)),
                (this.high = new t.Compressor(e.high)),
                this._splitter.low.chain(this.low, this.output),
                this._splitter.mid.chain(this.mid, this.output),
                this._splitter.high.chain(this.high, this.output),
                this._readOnly([
                  "high",
                  "mid",
                  "low",
                  "highFrequency",
                  "lowFrequency",
                ]);
            }),
            t.extend(t.MultibandCompressor, t.AudioNode),
            (t.MultibandCompressor.defaults = {
              low: t.Compressor.defaults,
              mid: t.Compressor.defaults,
              high: t.Compressor.defaults,
              lowFrequency: 250,
              highFrequency: 2e3,
            }),
            (t.MultibandCompressor.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._splitter.dispose(),
                this._writable([
                  "high",
                  "mid",
                  "low",
                  "highFrequency",
                  "lowFrequency",
                ]),
                this.low.dispose(),
                this.mid.dispose(),
                this.high.dispose(),
                (this._splitter = null),
                (this.low = null),
                (this.mid = null),
                (this.high = null),
                (this.lowFrequency = null),
                (this.highFrequency = null),
                this
              );
            }),
            t.MultibandCompressor
          );
        }),
        t(function (t) {
          if (t.supported && !window.StereoPannerNode) {
            var e = function (e) {
              var i, n, o, s, r, a, l;
              (this.context = e),
                (this.pan = new t.Signal(0, t.Type.AudioRange)),
                (i = new t.WaveShaper(function (e) {
                  return t.equalPowerScale((e + 1) / 2);
                }, 4096)),
                (n = new t.WaveShaper(function (e) {
                  return t.equalPowerScale(1 - (e + 1) / 2);
                }, 4096)),
                (o = new t.Gain()),
                (s = new t.Gain()),
                (r = this.input = new t.Split()),
                (a = new t.Zero()),
                a.fan(i, n),
                (l = this.output = new t.Merge()),
                r.left.chain(o, l.left),
                r.right.chain(s, l.right),
                this.pan.chain(n, o.gain),
                this.pan.chain(i, s.gain);
            };
            (e.prototype.disconnect = function () {
              this.output.disconnect.apply(this.output, arguments);
            }),
              (e.prototype.connect = function () {
                this.output.connect.apply(this.output, arguments);
              }),
              (AudioContext.prototype.createStereoPanner = function () {
                return new e(this);
              }),
              (t.Context.prototype.createStereoPanner = function () {
                return new e(this);
              });
          }
        }),
        t(function (t) {
          return (
            (t.Panner = function (e) {
              t.AudioNode.call(this),
                (this._panner =
                  this.input =
                  this.output =
                    this.context.createStereoPanner()),
                (this.pan = this._panner.pan),
                (this.pan.value = t.defaultArg(e, 0)),
                this._readOnly("pan");
            }),
            t.extend(t.Panner, t.AudioNode),
            (t.Panner.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable("pan"),
                this._panner.disconnect(),
                (this._panner = null),
                (this.pan = null),
                this
              );
            }),
            t.Panner
          );
        }),
        t(function (t) {
          return (
            (t.Panner3D = function () {
              var e = t.defaults(
                arguments,
                ["positionX", "positionY", "positionZ"],
                t.Panner3D
              );
              t.AudioNode.call(this),
                (this._panner =
                  this.input =
                  this.output =
                    this.context.createPanner()),
                (this._panner.panningModel = e.panningModel),
                (this._panner.maxDistance = e.maxDistance),
                (this._panner.distanceModel = e.distanceModel),
                (this._panner.coneOuterGain = e.coneOuterGain),
                (this._panner.coneOuterAngle = e.coneOuterAngle),
                (this._panner.coneInnerAngle = e.coneInnerAngle),
                (this._panner.refDistance = e.refDistance),
                (this._panner.rolloffFactor = e.rolloffFactor),
                (this._orientation = [
                  e.orientationX,
                  e.orientationY,
                  e.orientationZ,
                ]),
                (this._position = [e.positionX, e.positionY, e.positionZ]),
                (this.orientationX = e.orientationX),
                (this.orientationY = e.orientationY),
                (this.orientationZ = e.orientationZ),
                (this.positionX = e.positionX),
                (this.positionY = e.positionY),
                (this.positionZ = e.positionZ);
            }),
            t.extend(t.Panner3D, t.AudioNode),
            (t.Panner3D.defaults = {
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              orientationX: 0,
              orientationY: 0,
              orientationZ: 0,
              panningModel: "equalpower",
              maxDistance: 1e4,
              distanceModel: "inverse",
              coneOuterGain: 0,
              coneOuterAngle: 360,
              coneInnerAngle: 360,
              refDistance: 1,
              rolloffFactor: 1,
            }),
            (t.Panner3D.prototype._rampTimeConstant = 0.01),
            (t.Panner3D.prototype.setPosition = function (t, e, i) {
              if (this._panner.positionX) {
                var n = this.now();
                this._panner.positionX.setTargetAtTime(
                  t,
                  n,
                  this._rampTimeConstant
                ),
                  this._panner.positionY.setTargetAtTime(
                    e,
                    n,
                    this._rampTimeConstant
                  ),
                  this._panner.positionZ.setTargetAtTime(
                    i,
                    n,
                    this._rampTimeConstant
                  );
              } else this._panner.setPosition(t, e, i);
              return (
                (this._position = Array.prototype.slice.call(arguments)), this
              );
            }),
            (t.Panner3D.prototype.setOrientation = function (t, e, i) {
              if (this._panner.orientationX) {
                var n = this.now();
                this._panner.orientationX.setTargetAtTime(
                  t,
                  n,
                  this._rampTimeConstant
                ),
                  this._panner.orientationY.setTargetAtTime(
                    e,
                    n,
                    this._rampTimeConstant
                  ),
                  this._panner.orientationZ.setTargetAtTime(
                    i,
                    n,
                    this._rampTimeConstant
                  );
              } else this._panner.setOrientation(t, e, i);
              return (
                (this._orientation = Array.prototype.slice.call(arguments)),
                this
              );
            }),
            Object.defineProperty(t.Panner3D.prototype, "positionX", {
              set: function (t) {
                (this._position[0] = t),
                  this.setPosition.apply(this, this._position);
              },
              get: function () {
                return this._position[0];
              },
            }),
            Object.defineProperty(t.Panner3D.prototype, "positionY", {
              set: function (t) {
                (this._position[1] = t),
                  this.setPosition.apply(this, this._position);
              },
              get: function () {
                return this._position[1];
              },
            }),
            Object.defineProperty(t.Panner3D.prototype, "positionZ", {
              set: function (t) {
                (this._position[2] = t),
                  this.setPosition.apply(this, this._position);
              },
              get: function () {
                return this._position[2];
              },
            }),
            Object.defineProperty(t.Panner3D.prototype, "orientationX", {
              set: function (t) {
                (this._orientation[0] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[0];
              },
            }),
            Object.defineProperty(t.Panner3D.prototype, "orientationY", {
              set: function (t) {
                (this._orientation[1] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[1];
              },
            }),
            Object.defineProperty(t.Panner3D.prototype, "orientationZ", {
              set: function (t) {
                (this._orientation[2] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[2];
              },
            }),
            (t.Panner3D._aliasProperty = function (e) {
              Object.defineProperty(t.Panner3D.prototype, e, {
                set: function (t) {
                  this._panner[e] = t;
                },
                get: function () {
                  return this._panner[e];
                },
              });
            }),
            t.Panner3D._aliasProperty("panningModel"),
            t.Panner3D._aliasProperty("refDistance"),
            t.Panner3D._aliasProperty("rolloffFactor"),
            t.Panner3D._aliasProperty("distanceModel"),
            t.Panner3D._aliasProperty("coneInnerAngle"),
            t.Panner3D._aliasProperty("coneOuterAngle"),
            t.Panner3D._aliasProperty("coneOuterGain"),
            t.Panner3D._aliasProperty("maxDistance"),
            (t.Panner3D.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._panner.disconnect(),
                (this._panner = null),
                (this._orientation = null),
                (this._position = null),
                this
              );
            }),
            t.Panner3D
          );
        }),
        t(function (t) {
          return (
            (t.PanVol = function () {
              var e = t.defaults(arguments, ["pan", "volume"], t.PanVol);
              t.AudioNode.call(this),
                (this._panner = this.input = new t.Panner(e.pan)),
                (this.pan = this._panner.pan),
                (this._volume = this.output = new t.Volume(e.volume)),
                (this.volume = this._volume.volume),
                this._panner.connect(this._volume),
                (this.mute = e.mute),
                this._readOnly(["pan", "volume"]);
            }),
            t.extend(t.PanVol, t.AudioNode),
            (t.PanVol.defaults = { pan: 0, volume: 0, mute: !1 }),
            Object.defineProperty(t.PanVol.prototype, "mute", {
              get: function () {
                return this._volume.mute;
              },
              set: function (t) {
                this._volume.mute = t;
              },
            }),
            (t.PanVol.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._writable(["pan", "volume"]),
                this._panner.dispose(),
                (this._panner = null),
                (this.pan = null),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null),
                this
              );
            }),
            t.PanVol
          );
        }),
        t(function (t) {
          return (
            (t.Solo = function () {
              var e = t.defaults(arguments, ["solo"], t.Solo);
              t.AudioNode.call(this),
                (this.input = this.output = new t.Gain()),
                (this._soloBind = this._soloed.bind(this)),
                this.context.on("solo", this._soloBind),
                (this.solo = e.solo);
            }),
            t.extend(t.Solo, t.AudioNode),
            (t.Solo.defaults = { solo: !1 }),
            Object.defineProperty(t.Solo.prototype, "solo", {
              get: function () {
                return this._isSoloed();
              },
              set: function (t) {
                t ? this._addSolo() : this._removeSolo(),
                  this.context.emit("solo", this);
              },
            }),
            Object.defineProperty(t.Solo.prototype, "muted", {
              get: function () {
                return 0 === this.input.gain.value;
              },
            }),
            (t.Solo.prototype._addSolo = function () {
              t.isArray(this.context._currentSolo) ||
                (this.context._currentSolo = []),
                this._isSoloed() || this.context._currentSolo.push(this);
            }),
            (t.Solo.prototype._removeSolo = function () {
              if (this._isSoloed()) {
                var t = this.context._currentSolo.indexOf(this);
                this.context._currentSolo.splice(t, 1);
              }
            }),
            (t.Solo.prototype._isSoloed = function () {
              return (
                !!t.isArray(this.context._currentSolo) &&
                0 !== this.context._currentSolo.length &&
                -1 !== this.context._currentSolo.indexOf(this)
              );
            }),
            (t.Solo.prototype._noSolos = function () {
              return (
                !t.isArray(this.context._currentSolo) ||
                0 === this.context._currentSolo.length
              );
            }),
            (t.Solo.prototype._soloed = function () {
              this._isSoloed()
                ? (this.input.gain.value = 1)
                : this._noSolos()
                ? (this.input.gain.value = 1)
                : (this.input.gain.value = 0);
            }),
            (t.Solo.prototype.dispose = function () {
              return (
                this.context.off("solo", this._soloBind),
                this._removeSolo(),
                (this._soloBind = null),
                t.AudioNode.prototype.dispose.call(this),
                this
              );
            }),
            t.Solo
          );
        }),
        t(function (t) {
          return (
            (t.Waveform = function () {
              var e = t.defaults(arguments, ["size"], t.Waveform);
              (e.type = t.Analyser.Type.Waveform),
                t.AudioNode.call(this),
                (this._analyser = this.input = this.output = new t.Analyser(e));
            }),
            t.extend(t.Waveform, t.AudioNode),
            (t.Waveform.defaults = { size: 1024 }),
            (t.Waveform.prototype.getValue = function () {
              return this._analyser.getValue();
            }),
            Object.defineProperty(t.Waveform.prototype, "size", {
              get: function () {
                return this._analyser.size;
              },
              set: function (t) {
                this._analyser.size = t;
              },
            }),
            (t.Waveform.prototype.dispose = function () {
              t.AudioNode.prototype.dispose.call(this),
                this._analyser.dispose(),
                (this._analyser = null);
            }),
            t.Waveform
          );
        }),
        t(function (t) {
          return (
            (t.CtrlInterpolate = function () {
              var e = t.defaults(
                arguments,
                ["values", "index"],
                t.CtrlInterpolate
              );
              t.call(this), (this.values = e.values), (this.index = e.index);
            }),
            t.extend(t.CtrlInterpolate),
            (t.CtrlInterpolate.defaults = { index: 0, values: [] }),
            Object.defineProperty(t.CtrlInterpolate.prototype, "value", {
              get: function () {
                var t,
                  e,
                  i,
                  n = this.index;
                return (
                  (n = Math.min(n, this.values.length - 1)),
                  (t = Math.floor(n)),
                  (e = this.values[t]),
                  (i = this.values[Math.ceil(n)]),
                  this._interpolate(n - t, e, i)
                );
              },
            }),
            (t.CtrlInterpolate.prototype._interpolate = function (e, i, n) {
              var o, s, r, a;
              if (t.isArray(i)) {
                for (o = [], s = 0; s < i.length; s++)
                  o[s] = this._interpolate(e, i[s], n[s]);
                return o;
              }
              if (t.isObject(i)) {
                r = {};
                for (a in i) r[a] = this._interpolate(e, i[a], n[a]);
                return r;
              }
              return (
                (i = this._toNumber(i)),
                (n = this._toNumber(n)),
                (1 - e) * i + e * n
              );
            }),
            (t.CtrlInterpolate.prototype._toNumber = function (e) {
              return t.isNumber(e) ? e : this.toSeconds(e);
            }),
            (t.CtrlInterpolate.prototype.dispose = function () {
              this.values = null;
            }),
            t.CtrlInterpolate
          );
        }),
        t(function (t) {
          return (
            (t.CtrlMarkov = function (e, i) {
              t.call(this),
                (this.values = t.defaultArg(e, {})),
                (this.value = t.defaultArg(i, Object.keys(this.values)[0]));
            }),
            t.extend(t.CtrlMarkov),
            (t.CtrlMarkov.prototype.next = function () {
              var e, i, n, o, s, r, a;
              if (this.values.hasOwnProperty(this.value))
                if (((e = this.values[this.value]), t.isArray(e)))
                  for (
                    i = this._getProbDistribution(e),
                      n = Math.random(),
                      o = 0,
                      s = 0;
                    s < i.length;
                    s++
                  )
                    (r = i[s]),
                      n > o &&
                        n < o + r &&
                        ((a = e[s]),
                        t.isObject(a)
                          ? (this.value = a.value)
                          : (this.value = a)),
                      (o += r);
                else this.value = e;
              return this.value;
            }),
            (t.CtrlMarkov.prototype._getProbDistribution = function (e) {
              var i,
                n,
                o,
                s = [],
                r = 0,
                a = !1;
              for (i = 0; i < e.length; i++)
                (n = e[i]),
                  t.isObject(n)
                    ? ((a = !0), (s[i] = n.probability))
                    : (s[i] = 1 / e.length),
                  (r += s[i]);
              if (a) for (o = 0; o < s.length; o++) s[o] = s[o] / r;
              return s;
            }),
            (t.CtrlMarkov.prototype.dispose = function () {
              this.values = null;
            }),
            t.CtrlMarkov
          );
        }),
        t(function (t) {
          return (
            (t.CtrlPattern = function () {
              var e = t.defaults(arguments, ["values", "type"], t.CtrlPattern);
              t.call(this),
                (this.values = e.values),
                (this.index = 0),
                (this._type = null),
                (this._shuffled = null),
                (this._direction = null),
                (this.type = e.type);
            }),
            t.extend(t.CtrlPattern),
            (t.CtrlPattern.Type = {
              Up: "up",
              Down: "down",
              UpDown: "upDown",
              DownUp: "downUp",
              AlternateUp: "alternateUp",
              AlternateDown: "alternateDown",
              Random: "random",
              RandomWalk: "randomWalk",
              RandomOnce: "randomOnce",
            }),
            (t.CtrlPattern.defaults = {
              type: t.CtrlPattern.Type.Up,
              values: [],
            }),
            Object.defineProperty(t.CtrlPattern.prototype, "value", {
              get: function () {
                if (0 !== this.values.length) {
                  if (1 === this.values.length) return this.values[0];
                  this.index = Math.min(this.index, this.values.length - 1);
                  var e = this.values[this.index];
                  return (
                    this.type === t.CtrlPattern.Type.RandomOnce &&
                      (this.values.length !== this._shuffled.length &&
                        this._shuffleValues(),
                      (e = this.values[this._shuffled[this.index]])),
                    e
                  );
                }
              },
            }),
            Object.defineProperty(t.CtrlPattern.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (e) {
                (this._type = e),
                  (this._shuffled = null),
                  this._type === t.CtrlPattern.Type.Up ||
                  this._type === t.CtrlPattern.Type.UpDown ||
                  this._type === t.CtrlPattern.Type.RandomOnce ||
                  this._type === t.CtrlPattern.Type.AlternateUp
                    ? (this.index = 0)
                    : (this._type !== t.CtrlPattern.Type.Down &&
                        this._type !== t.CtrlPattern.Type.DownUp &&
                        this._type !== t.CtrlPattern.Type.AlternateDown) ||
                      (this.index = this.values.length - 1),
                  this._type === t.CtrlPattern.Type.UpDown ||
                  this._type === t.CtrlPattern.Type.AlternateUp
                    ? (this._direction = t.CtrlPattern.Type.Up)
                    : (this._type !== t.CtrlPattern.Type.DownUp &&
                        this._type !== t.CtrlPattern.Type.AlternateDown) ||
                      (this._direction = t.CtrlPattern.Type.Down),
                  this._type === t.CtrlPattern.Type.RandomOnce
                    ? this._shuffleValues()
                    : this._type === t.CtrlPattern.Random &&
                      (this.index = Math.floor(
                        Math.random() * this.values.length
                      ));
              },
            }),
            (t.CtrlPattern.prototype.next = function () {
              var e = this.type;
              return (
                e === t.CtrlPattern.Type.Up
                  ? ++this.index >= this.values.length && (this.index = 0)
                  : e === t.CtrlPattern.Type.Down
                  ? --this.index < 0 && (this.index = this.values.length - 1)
                  : e === t.CtrlPattern.Type.UpDown ||
                    e === t.CtrlPattern.Type.DownUp
                  ? (this._direction === t.CtrlPattern.Type.Up
                      ? this.index++
                      : this.index--,
                    this.index < 0
                      ? ((this.index = 1),
                        (this._direction = t.CtrlPattern.Type.Up))
                      : this.index >= this.values.length &&
                        ((this.index = this.values.length - 2),
                        (this._direction = t.CtrlPattern.Type.Down)))
                  : e === t.CtrlPattern.Type.Random
                  ? (this.index = Math.floor(
                      Math.random() * this.values.length
                    ))
                  : e === t.CtrlPattern.Type.RandomWalk
                  ? Math.random() < 0.5
                    ? (this.index--, (this.index = Math.max(this.index, 0)))
                    : (this.index++,
                      (this.index = Math.min(
                        this.index,
                        this.values.length - 1
                      )))
                  : e === t.CtrlPattern.Type.RandomOnce
                  ? ++this.index >= this.values.length &&
                    ((this.index = 0), this._shuffleValues())
                  : e === t.CtrlPattern.Type.AlternateUp
                  ? (this._direction === t.CtrlPattern.Type.Up
                      ? ((this.index += 2),
                        (this._direction = t.CtrlPattern.Type.Down))
                      : ((this.index -= 1),
                        (this._direction = t.CtrlPattern.Type.Up)),
                    this.index >= this.values.length &&
                      ((this.index = 0),
                      (this._direction = t.CtrlPattern.Type.Up)))
                  : e === t.CtrlPattern.Type.AlternateDown &&
                    (this._direction === t.CtrlPattern.Type.Up
                      ? ((this.index += 1),
                        (this._direction = t.CtrlPattern.Type.Down))
                      : ((this.index -= 2),
                        (this._direction = t.CtrlPattern.Type.Up)),
                    this.index < 0 &&
                      ((this.index = this.values.length - 1),
                      (this._direction = t.CtrlPattern.Type.Down))),
                this.value
              );
            }),
            (t.CtrlPattern.prototype._shuffleValues = function () {
              var t,
                e,
                i = [];
              for (this._shuffled = [], t = 0; t < this.values.length; t++)
                i[t] = t;
              for (; i.length > 0; )
                (e = i.splice(Math.floor(i.length * Math.random()), 1)),
                  this._shuffled.push(e[0]);
            }),
            (t.CtrlPattern.prototype.dispose = function () {
              (this._shuffled = null), (this.values = null);
            }),
            t.CtrlPattern
          );
        }),
        t(function (t) {
          return (
            (t.CtrlRandom = function () {
              var e = t.defaults(arguments, ["min", "max"], t.CtrlRandom);
              t.call(this),
                (this.min = e.min),
                (this.max = e.max),
                (this.integer = e.integer);
            }),
            t.extend(t.CtrlRandom),
            (t.CtrlRandom.defaults = { min: 0, max: 1, integer: !1 }),
            Object.defineProperty(t.CtrlRandom.prototype, "value", {
              get: function () {
                var t = this.toSeconds(this.min),
                  e = this.toSeconds(this.max),
                  i = Math.random(),
                  n = i * t + (1 - i) * e;
                return this.integer && (n = Math.floor(n)), n;
              },
            }),
            t.CtrlRandom
          );
        }),
        t(function (t) {
          t.supported &&
            (AudioBuffer.prototype.copyToChannel ||
              ((AudioBuffer.prototype.copyToChannel = function (t, e, i) {
                var n,
                  o = this.getChannelData(e);
                for (i = i || 0, n = 0; n < o.length; n++) o[n + i] = t[n];
              }),
              (AudioBuffer.prototype.copyFromChannel = function (t, e, i) {
                var n,
                  o = this.getChannelData(e);
                for (i = i || 0, n = 0; n < t.length; n++) t[n] = o[n + i];
              })));
        }),
        t(function (t) {
          return (
            (t.Buffer = function () {
              var e = t.defaults(
                arguments,
                ["url", "onload", "onerror"],
                t.Buffer
              );
              t.call(this),
                (this._buffer = null),
                (this._reversed = e.reverse),
                (this._xhr = null),
                (this._onload = t.noOp),
                e.url instanceof AudioBuffer || e.url instanceof t.Buffer
                  ? (this.set(e.url),
                    e.onload &&
                      (this.loaded
                        ? e.onload(this)
                        : (this._onload = e.onload)))
                  : t.isString(e.url) && this.load(e.url, e.onload, e.onerror);
            }),
            t.extend(t.Buffer),
            (t.Buffer.defaults = { url: void 0, reverse: !1 }),
            (t.Buffer.prototype.set = function (e) {
              return (
                e instanceof t.Buffer
                  ? e.loaded
                    ? (this._buffer = e.get())
                    : (e._onload = function () {
                        this.set(e), this._onload(this);
                      }.bind(this))
                  : (this._buffer = e),
                this
              );
            }),
            (t.Buffer.prototype.get = function () {
              return this._buffer;
            }),
            (t.Buffer.prototype.load = function (e, i, n) {
              return new Promise(
                function (o, s) {
                  this._xhr = t.Buffer.load(
                    e,
                    function (t) {
                      (this._xhr = null),
                        this.set(t),
                        o(this),
                        this._onload(this),
                        i && i(this);
                    }.bind(this),
                    function (t) {
                      (this._xhr = null), s(t), n && n(t);
                    }.bind(this)
                  );
                }.bind(this)
              );
            }),
            (t.Buffer.prototype.dispose = function () {
              return (
                t.prototype.dispose.call(this),
                (this._buffer = null),
                this._xhr &&
                  (t.Buffer._removeFromDownloadQueue(this._xhr),
                  this._xhr.abort(),
                  (this._xhr = null)),
                this
              );
            }),
            Object.defineProperty(t.Buffer.prototype, "loaded", {
              get: function () {
                return this.length > 0;
              },
            }),
            Object.defineProperty(t.Buffer.prototype, "duration", {
              get: function () {
                return this._buffer ? this._buffer.duration : 0;
              },
            }),
            Object.defineProperty(t.Buffer.prototype, "length", {
              get: function () {
                return this._buffer ? this._buffer.length : 0;
              },
            }),
            Object.defineProperty(t.Buffer.prototype, "numberOfChannels", {
              get: function () {
                return this._buffer ? this._buffer.numberOfChannels : 0;
              },
            }),
            (t.Buffer.prototype.fromArray = function (t) {
              var e,
                i = t[0].length > 0,
                n = i ? t.length : 1,
                o = i ? t[0].length : t.length,
                s = this.context.createBuffer(n, o, this.context.sampleRate);
              for (i || 1 !== n || (t = [t]), e = 0; e < n; e++)
                s.copyToChannel(t[e], e);
              return (this._buffer = s), this;
            }),
            (t.Buffer.prototype.toMono = function (e) {
              var i, n, o, s, r;
              if (t.isNumber(e)) this.fromArray(this.toArray(e));
              else {
                for (
                  i = new Float32Array(this.length),
                    n = this.numberOfChannels,
                    o = 0;
                  o < n;
                  o++
                )
                  for (s = this.toArray(o), r = 0; r < s.length; r++)
                    i[r] += s[r];
                (i = i.map(function (t) {
                  return t / n;
                })),
                  this.fromArray(i);
              }
              return this;
            }),
            (t.Buffer.prototype.toArray = function (e) {
              var i, n;
              if (t.isNumber(e)) return this.getChannelData(e);
              if (1 === this.numberOfChannels) return this.toArray(0);
              for (i = [], n = 0; n < this.numberOfChannels; n++)
                i[n] = this.getChannelData(n);
              return i;
            }),
            (t.Buffer.prototype.getChannelData = function (t) {
              return this._buffer.getChannelData(t);
            }),
            (t.Buffer.prototype.slice = function (e, i) {
              var n, o, s, r;
              for (
                i = t.defaultArg(i, this.duration),
                  n = Math.floor(this.context.sampleRate * this.toSeconds(e)),
                  o = Math.floor(this.context.sampleRate * this.toSeconds(i)),
                  s = [],
                  r = 0;
                r < this.numberOfChannels;
                r++
              )
                s[r] = this.toArray(r).slice(n, o);
              return new t.Buffer().fromArray(s);
            }),
            (t.Buffer.prototype._reverse = function () {
              if (this.loaded)
                for (var t = 0; t < this.numberOfChannels; t++)
                  Array.prototype.reverse.call(this.getChannelData(t));
              return this;
            }),
            Object.defineProperty(t.Buffer.prototype, "reverse", {
              get: function () {
                return this._reversed;
              },
              set: function (t) {
                this._reversed !== t && ((this._reversed = t), this._reverse());
              },
            }),
            t.Emitter.mixin(t.Buffer),
            (t.Buffer._downloadQueue = []),
            (t.Buffer.baseUrl = ""),
            (t.Buffer.fromArray = function (e) {
              return new t.Buffer().fromArray(e);
            }),
            (t.Buffer._removeFromDownloadQueue = function (e) {
              var i = t.Buffer._downloadQueue.indexOf(e);
              -1 !== i && t.Buffer._downloadQueue.splice(i, 1);
            }),
            (t.Buffer.load = function (e, i, n) {
              function o(e) {
                if (
                  (t.Buffer._removeFromDownloadQueue(c),
                  t.Buffer.emit("error", e),
                  !n)
                )
                  throw e;
                n(e);
              }
              function s() {
                var e,
                  i = 0;
                for (e = 0; e < t.Buffer._downloadQueue.length; e++)
                  i += t.Buffer._downloadQueue[e].progress;
                t.Buffer.emit("progress", i / t.Buffer._downloadQueue.length);
              }
              var r, a, l, u, c;
              if (
                ((i = t.defaultArg(i, t.noOp)), (r = e.match(/\[(.+\|?)+\]$/)))
              ) {
                for (a = r[1].split("|"), l = a[0], u = 0; u < a.length; u++)
                  if (t.Buffer.supportsType(a[u])) {
                    l = a[u];
                    break;
                  }
                e = e.replace(r[0], l);
              }
              return (
                (c = new XMLHttpRequest()),
                c.open("GET", t.Buffer.baseUrl + e, !0),
                (c.responseType = "arraybuffer"),
                (c.progress = 0),
                t.Buffer._downloadQueue.push(c),
                c.addEventListener("load", function () {
                  200 === c.status
                    ? t.context
                        .decodeAudioData(c.response)
                        .then(function (e) {
                          (c.progress = 1),
                            s(),
                            i(e),
                            t.Buffer._removeFromDownloadQueue(c),
                            0 === t.Buffer._downloadQueue.length &&
                              t.Buffer.emit("load");
                        })
                        .catch(function () {
                          t.Buffer._removeFromDownloadQueue(c),
                            o("Tone.Buffer: could not decode audio data: " + e);
                        })
                    : o("Tone.Buffer: could not locate file: " + e);
                }),
                c.addEventListener("error", o),
                c.addEventListener("progress", function (t) {
                  t.lengthComputable &&
                    ((c.progress = (t.loaded / t.total) * 0.95), s());
                }),
                c.send(),
                c
              );
            }),
            (t.Buffer.cancelDownloads = function () {
              return (
                t.Buffer._downloadQueue.slice().forEach(function (e) {
                  t.Buffer._removeFromDownloadQueue(e), e.abort();
                }),
                t.Buffer
              );
            }),
            (t.Buffer.supportsType = function (t) {
              var e = t.split(".");
              return (
                (e = e[e.length - 1]),
                "" !== document.createElement("audio").canPlayType("audio/" + e)
              );
            }),
            (t.loaded = function () {
              function e() {
                t.Buffer.off("load", i), t.Buffer.off("error", n);
              }
              var i, n;
              return new Promise(function (e, o) {
                (i = function () {
                  e();
                }),
                  (n = function () {
                    o();
                  }),
                  t.Buffer.on("load", i),
                  t.Buffer.on("error", n);
              })
                .then(e)
                .catch(function (t) {
                  throw (e(), new Error(t));
                });
            }),
            t.Buffer
          );
        }),
        t(function (t) {
          return (
            (t.Buffers = function (e) {
              var i,
                n,
                o = Array.prototype.slice.call(arguments);
              o.shift(),
                (i = t.defaults(o, ["onload", "baseUrl"], t.Buffers)),
                t.call(this),
                (this._buffers = {}),
                (this.baseUrl = i.baseUrl),
                (this._loadingCount = 0);
              for (n in e)
                this._loadingCount++,
                  this.add(n, e[n], this._bufferLoaded.bind(this, i.onload));
            }),
            t.extend(t.Buffers),
            (t.Buffers.defaults = { onload: t.noOp, baseUrl: "" }),
            (t.Buffers.prototype.has = function (t) {
              return this._buffers.hasOwnProperty(t);
            }),
            (t.Buffers.prototype.get = function (t) {
              if (this.has(t)) return this._buffers[t];
              throw new Error("Tone.Buffers: no buffer named " + t);
            }),
            (t.Buffers.prototype._bufferLoaded = function (t) {
              0 == --this._loadingCount && t && t(this);
            }),
            Object.defineProperty(t.Buffers.prototype, "loaded", {
              get: function () {
                var t,
                  e,
                  i = !0;
                for (t in this._buffers) (e = this.get(t)), (i = i && e.loaded);
                return i;
              },
            }),
            (t.Buffers.prototype.add = function (e, i, n) {
              return (
                (n = t.defaultArg(n, t.noOp)),
                i instanceof t.Buffer
                  ? ((this._buffers[e] = i), n(this))
                  : i instanceof AudioBuffer
                  ? ((this._buffers[e] = new t.Buffer(i)), n(this))
                  : t.isString(i) &&
                    (this._buffers[e] = new t.Buffer(this.baseUrl + i, n)),
                this
              );
            }),
            (t.Buffers.prototype.dispose = function () {
              t.prototype.dispose.call(this);
              for (var e in this._buffers) this._buffers[e].dispose();
              return (this._buffers = null), this;
            }),
            t.Buffers
          );
        }),
        t(function (t) {
          var e = {};
          return (
            (t.prototype.send = function (i, n) {
              e.hasOwnProperty(i) || (e[i] = this.context.createGain()),
                (n = t.defaultArg(n, 0));
              var o = new t.Gain(n, t.Type.Decibels);
              return this.output.connect(o), o.connect(e[i]), o;
            }),
            (t.prototype.receive = function (t, i) {
              return (
                e.hasOwnProperty(t) || (e[t] = this.context.createGain()),
                e[t].connect(this, 0, i),
                this
              );
            }),
            t.Context.on("init", function (t) {
              t.Buses ? (e = t.Buses) : ((e = {}), (t.Buses = e));
            }),
            t
          );
        }),
        t(function (t) {
          return (
            (t.Draw = function () {
              t.call(this),
                (this._events = new t.Timeline()),
                (this.expiration = 0.25),
                (this.anticipation = 0.008),
                (this._boundDrawLoop = this._drawLoop.bind(this));
            }),
            t.extend(t.Draw),
            (t.Draw.prototype.schedule = function (t, e) {
              return (
                this._events.add({ callback: t, time: this.toSeconds(e) }),
                1 === this._events.length &&
                  requestAnimationFrame(this._boundDrawLoop),
                this
              );
            }),
            (t.Draw.prototype.cancel = function (t) {
              return this._events.cancel(this.toSeconds(t)), this;
            }),
            (t.Draw.prototype._drawLoop = function () {
              for (
                var e, i = t.now();
                this._events.length &&
                this._events.peek().time - this.anticipation <= i;

              )
                (e = this._events.shift()),
                  i - e.time <= this.expiration && e.callback();
              this._events.length > 0 &&
                requestAnimationFrame(this._boundDrawLoop);
            }),
            (t.Draw = new t.Draw()),
            t.Draw
          );
        }),
        t(function (t) {
          (t.Listener = function () {
            t.call(this),
              (this._orientation = [0, 0, 0, 0, 0, 0]),
              (this._position = [0, 0, 0]),
              t.getContext(
                function () {
                  this.set(e.defaults);
                }.bind(this)
              );
          }),
            t.extend(t.Listener),
            (t.Listener.defaults = {
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              forwardX: 0,
              forwardY: 0,
              forwardZ: 1,
              upX: 0,
              upY: 1,
              upZ: 0,
            }),
            (t.Listener.prototype._rampTimeConstant = 0.01),
            (t.Listener.prototype.setPosition = function (t, e, i) {
              if (this.context.listener.positionX) {
                var n = this.now();
                this.context.listener.positionX.setTargetAtTime(
                  t,
                  n,
                  this._rampTimeConstant
                ),
                  this.context.listener.positionY.setTargetAtTime(
                    e,
                    n,
                    this._rampTimeConstant
                  ),
                  this.context.listener.positionZ.setTargetAtTime(
                    i,
                    n,
                    this._rampTimeConstant
                  );
              } else this.context.listener.setPosition(t, e, i);
              return (
                (this._position = Array.prototype.slice.call(arguments)), this
              );
            }),
            (t.Listener.prototype.setOrientation = function (t, e, i, n, o, s) {
              if (this.context.listener.forwardX) {
                var r = this.now();
                this.context.listener.forwardX.setTargetAtTime(
                  t,
                  r,
                  this._rampTimeConstant
                ),
                  this.context.listener.forwardY.setTargetAtTime(
                    e,
                    r,
                    this._rampTimeConstant
                  ),
                  this.context.listener.forwardZ.setTargetAtTime(
                    i,
                    r,
                    this._rampTimeConstant
                  ),
                  this.context.listener.upX.setTargetAtTime(
                    n,
                    r,
                    this._rampTimeConstant
                  ),
                  this.context.listener.upY.setTargetAtTime(
                    o,
                    r,
                    this._rampTimeConstant
                  ),
                  this.context.listener.upZ.setTargetAtTime(
                    s,
                    r,
                    this._rampTimeConstant
                  );
              } else this.context.listener.setOrientation(t, e, i, n, o, s);
              return (
                (this._orientation = Array.prototype.slice.call(arguments)),
                this
              );
            }),
            Object.defineProperty(t.Listener.prototype, "positionX", {
              set: function (t) {
                (this._position[0] = t),
                  this.setPosition.apply(this, this._position);
              },
              get: function () {
                return this._position[0];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "positionY", {
              set: function (t) {
                (this._position[1] = t),
                  this.setPosition.apply(this, this._position);
              },
              get: function () {
                return this._position[1];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "positionZ", {
              set: function (t) {
                (this._position[2] = t),
                  this.setPosition.apply(this, this._position);
              },
              get: function () {
                return this._position[2];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "forwardX", {
              set: function (t) {
                (this._orientation[0] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[0];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "forwardY", {
              set: function (t) {
                (this._orientation[1] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[1];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "forwardZ", {
              set: function (t) {
                (this._orientation[2] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[2];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "upX", {
              set: function (t) {
                (this._orientation[3] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[3];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "upY", {
              set: function (t) {
                (this._orientation[4] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[4];
              },
            }),
            Object.defineProperty(t.Listener.prototype, "upZ", {
              set: function (t) {
                (this._orientation[5] = t),
                  this.setOrientation.apply(this, this._orientation);
              },
              get: function () {
                return this._orientation[5];
              },
            }),
            (t.Listener.prototype.dispose = function () {
              return (this._orientation = null), (this._position = null), this;
            });
          var e = t.Listener;
          return (
            (t.Listener = new e()),
            t.Context.on("init", function (i) {
              i.Listener instanceof e
                ? (t.Listener = i.Listener)
                : (t.Listener = new e()),
                (i.Listener = t.Listener);
            }),
            t.Listener
          );
        }),
        t(function (t) {
          return (
            (t.OfflineContext = function (e, i, n) {
              var o = new OfflineAudioContext(e, i * n, n);
              t.Context.call(this, {
                context: o,
                clockSource: "offline",
                lookAhead: 0,
                updateInterval: 128 / n,
              }),
                (this._duration = i),
                (this._currentTime = 0);
            }),
            t.extend(t.OfflineContext, t.Context),
            (t.OfflineContext.prototype.now = function () {
              return this._currentTime;
            }),
            (t.OfflineContext.prototype.render = function () {
              for (; this._duration - this._currentTime >= 0; )
                this.emit("tick"), (this._currentTime += this.blockTime);
              return this._context.startRendering();
            }),
            (t.OfflineContext.prototype.close = function () {
              return (this._context = null), Promise.resolve();
            }),
            t.OfflineContext
          );
        }),
        t(function (t) {
          return (
            (t.Offline = function (e, i) {
              var n,
                o = t.context.sampleRate,
                s = t.context,
                r = new t.OfflineContext(2, i, o);
              return (
                (t.context = r),
                e(t.Transport),
                (n = r.render()),
                (t.context = s),
                n.then(function (e) {
                  return new t.Buffer(e);
                })
              );
            }),
            t.Offline
          );
        }),
        t(function (t) {
          return (
            (t.Effect = function () {
              var e = t.defaults(arguments, ["wet"], t.Effect);
              t.AudioNode.call(this),
                this.createInsOuts(1, 1),
                (this._dryWet = new t.CrossFade(e.wet)),
                (this.wet = this._dryWet.fade),
                (this.effectSend = new t.Gain()),
                (this.effectReturn = new t.Gain()),
                this.input.connect(this._dryWet.a),
                this.input.connect(this.effectSend),
                this.effectReturn.connect(this._dryWet.b),
                this._dryWet.connect(this.output),
                this._readOnly(["wet"]);
            }),
            t.extend(t.Effect, t.AudioNode),
            (t.Effect.defaults = { wet: 1 }),
            (t.Effect.prototype.connectEffect = function (t) {
              return this.effectSend.chain(t, this.effectReturn), this;
            }),
            (t.Effect.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._dryWet.dispose(),
                (this._dryWet = null),
                this.effectSend.dispose(),
                (this.effectSend = null),
                this.effectReturn.dispose(),
                (this.effectReturn = null),
                this._writable(["wet"]),
                (this.wet = null),
                this
              );
            }),
            t.Effect
          );
        }),
        t(function (t) {
          return (
            (t.AutoFilter = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "baseFrequency", "octaves"],
                t.AutoFilter
              );
              t.Effect.call(this, e),
                (this._lfo = new t.LFO({
                  frequency: e.frequency,
                  amplitude: e.depth,
                })),
                (this.depth = this._lfo.amplitude),
                (this.frequency = this._lfo.frequency),
                (this.filter = new t.Filter(e.filter)),
                (this._octaves = 0),
                this.connectEffect(this.filter),
                this._lfo.connect(this.filter.frequency),
                (this.type = e.type),
                this._readOnly(["frequency", "depth"]),
                (this.octaves = e.octaves),
                (this.baseFrequency = e.baseFrequency);
            }),
            t.extend(t.AutoFilter, t.Effect),
            (t.AutoFilter.defaults = {
              frequency: 1,
              type: "sine",
              depth: 1,
              baseFrequency: 200,
              octaves: 2.6,
              filter: { type: "lowpass", rolloff: -12, Q: 1 },
            }),
            (t.AutoFilter.prototype.start = function (t) {
              return this._lfo.start(t), this;
            }),
            (t.AutoFilter.prototype.stop = function (t) {
              return this._lfo.stop(t), this;
            }),
            (t.AutoFilter.prototype.sync = function (t) {
              return this._lfo.sync(t), this;
            }),
            (t.AutoFilter.prototype.unsync = function () {
              return this._lfo.unsync(), this;
            }),
            Object.defineProperty(t.AutoFilter.prototype, "type", {
              get: function () {
                return this._lfo.type;
              },
              set: function (t) {
                this._lfo.type = t;
              },
            }),
            Object.defineProperty(t.AutoFilter.prototype, "baseFrequency", {
              get: function () {
                return this._lfo.min;
              },
              set: function (t) {
                (this._lfo.min = this.toFrequency(t)),
                  (this.octaves = this._octaves);
              },
            }),
            Object.defineProperty(t.AutoFilter.prototype, "octaves", {
              get: function () {
                return this._octaves;
              },
              set: function (t) {
                (this._octaves = t),
                  (this._lfo.max = this.baseFrequency * Math.pow(2, t));
              },
            }),
            (t.AutoFilter.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._lfo.dispose(),
                (this._lfo = null),
                this.filter.dispose(),
                (this.filter = null),
                this._writable(["frequency", "depth"]),
                (this.frequency = null),
                (this.depth = null),
                this
              );
            }),
            t.AutoFilter
          );
        }),
        t(function (t) {
          return (
            (t.AutoPanner = function () {
              var e = t.defaults(arguments, ["frequency"], t.AutoPanner);
              t.Effect.call(this, e),
                (this._lfo = new t.LFO({
                  frequency: e.frequency,
                  amplitude: e.depth,
                  min: -1,
                  max: 1,
                })),
                (this.depth = this._lfo.amplitude),
                (this._panner = new t.Panner()),
                (this.frequency = this._lfo.frequency),
                this.connectEffect(this._panner),
                this._lfo.connect(this._panner.pan),
                (this.type = e.type),
                this._readOnly(["depth", "frequency"]);
            }),
            t.extend(t.AutoPanner, t.Effect),
            (t.AutoPanner.defaults = { frequency: 1, type: "sine", depth: 1 }),
            (t.AutoPanner.prototype.start = function (t) {
              return this._lfo.start(t), this;
            }),
            (t.AutoPanner.prototype.stop = function (t) {
              return this._lfo.stop(t), this;
            }),
            (t.AutoPanner.prototype.sync = function (t) {
              return this._lfo.sync(t), this;
            }),
            (t.AutoPanner.prototype.unsync = function () {
              return this._lfo.unsync(), this;
            }),
            Object.defineProperty(t.AutoPanner.prototype, "type", {
              get: function () {
                return this._lfo.type;
              },
              set: function (t) {
                this._lfo.type = t;
              },
            }),
            (t.AutoPanner.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._lfo.dispose(),
                (this._lfo = null),
                this._panner.dispose(),
                (this._panner = null),
                this._writable(["depth", "frequency"]),
                (this.frequency = null),
                (this.depth = null),
                this
              );
            }),
            t.AutoPanner
          );
        }),
        t(function (t) {
          return (
            (t.AutoWah = function () {
              var e = t.defaults(
                arguments,
                ["baseFrequency", "octaves", "sensitivity"],
                t.AutoWah
              );
              t.Effect.call(this, e),
                (this.follower = new t.Follower(e.follower)),
                (this._sweepRange = new t.ScaleExp(0, 1, 0.5)),
                (this._baseFrequency = e.baseFrequency),
                (this._octaves = e.octaves),
                (this._inputBoost = new t.Gain()),
                (this._bandpass = new t.Filter({
                  rolloff: -48,
                  frequency: 0,
                  Q: e.Q,
                })),
                (this._peaking = new t.Filter(0, "peaking")),
                (this._peaking.gain.value = e.gain),
                (this.gain = this._peaking.gain),
                (this.Q = this._bandpass.Q),
                this.effectSend.chain(
                  this._inputBoost,
                  this.follower,
                  this._sweepRange
                ),
                this._sweepRange.connect(this._bandpass.frequency),
                this._sweepRange.connect(this._peaking.frequency),
                this.effectSend.chain(
                  this._bandpass,
                  this._peaking,
                  this.effectReturn
                ),
                this._setSweepRange(),
                (this.sensitivity = e.sensitivity),
                this._readOnly(["gain", "Q"]);
            }),
            t.extend(t.AutoWah, t.Effect),
            (t.AutoWah.defaults = {
              baseFrequency: 100,
              octaves: 6,
              sensitivity: 0,
              Q: 2,
              gain: 2,
              follower: { attack: 0.3, release: 0.5 },
            }),
            Object.defineProperty(t.AutoWah.prototype, "octaves", {
              get: function () {
                return this._octaves;
              },
              set: function (t) {
                (this._octaves = t), this._setSweepRange();
              },
            }),
            Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
              get: function () {
                return this._baseFrequency;
              },
              set: function (t) {
                (this._baseFrequency = t), this._setSweepRange();
              },
            }),
            Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
              get: function () {
                return t.gainToDb(1 / this._inputBoost.gain.value);
              },
              set: function (e) {
                this._inputBoost.gain.value = 1 / t.dbToGain(e);
              },
            }),
            (t.AutoWah.prototype._setSweepRange = function () {
              (this._sweepRange.min = this._baseFrequency),
                (this._sweepRange.max = Math.min(
                  this._baseFrequency * Math.pow(2, this._octaves),
                  this.context.sampleRate / 2
                ));
            }),
            (t.AutoWah.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this.follower.dispose(),
                (this.follower = null),
                this._sweepRange.dispose(),
                (this._sweepRange = null),
                this._bandpass.dispose(),
                (this._bandpass = null),
                this._peaking.dispose(),
                (this._peaking = null),
                this._inputBoost.dispose(),
                (this._inputBoost = null),
                this._writable(["gain", "Q"]),
                (this.gain = null),
                (this.Q = null),
                this
              );
            }),
            t.AutoWah
          );
        }),
        t(function (t) {
          return (
            (t.Modulo = function (e) {
              t.SignalBase.call(this),
                this.createInsOuts(1, 0),
                (this._shaper = new t.WaveShaper(Math.pow(2, 16))),
                (this._multiply = new t.Multiply()),
                (this._subtract = this.output = new t.Subtract()),
                (this._modSignal = new t.Signal(e)),
                this.input.fan(this._shaper, this._subtract),
                this._modSignal.connect(this._multiply, 0, 0),
                this._shaper.connect(this._multiply, 0, 1),
                this._multiply.connect(this._subtract, 0, 1),
                this._setWaveShaper(e);
            }),
            t.extend(t.Modulo, t.SignalBase),
            (t.Modulo.prototype._setWaveShaper = function (t) {
              this._shaper.setMap(function (e) {
                return Math.floor((e + 1e-4) / t);
              });
            }),
            Object.defineProperty(t.Modulo.prototype, "value", {
              get: function () {
                return this._modSignal.value;
              },
              set: function (t) {
                (this._modSignal.value = t), this._setWaveShaper(t);
              },
            }),
            (t.Modulo.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._shaper.dispose(),
                (this._shaper = null),
                this._multiply.dispose(),
                (this._multiply = null),
                this._subtract.dispose(),
                (this._subtract = null),
                this._modSignal.dispose(),
                (this._modSignal = null),
                this
              );
            }),
            t.Modulo
          );
        }),
        t(function (t) {
          return (
            (t.BitCrusher = function () {
              var e,
                i = t.defaults(arguments, ["bits"], t.BitCrusher);
              t.Effect.call(this, i),
                (e = 1 / Math.pow(2, i.bits - 1)),
                (this._subtract = new t.Subtract()),
                (this._modulo = new t.Modulo(e)),
                (this._bits = i.bits),
                this.effectSend.fan(this._subtract, this._modulo),
                this._modulo.connect(this._subtract, 0, 1),
                this._subtract.connect(this.effectReturn);
            }),
            t.extend(t.BitCrusher, t.Effect),
            (t.BitCrusher.defaults = { bits: 4 }),
            Object.defineProperty(t.BitCrusher.prototype, "bits", {
              get: function () {
                return this._bits;
              },
              set: function (t) {
                this._bits = t;
                var e = 1 / Math.pow(2, t - 1);
                this._modulo.value = e;
              },
            }),
            (t.BitCrusher.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._subtract.dispose(),
                (this._subtract = null),
                this._modulo.dispose(),
                (this._modulo = null),
                this
              );
            }),
            t.BitCrusher
          );
        }),
        t(function (t) {
          return (
            (t.Chebyshev = function () {
              var e = t.defaults(arguments, ["order"], t.Chebyshev);
              t.Effect.call(this, e),
                (this._shaper = new t.WaveShaper(4096)),
                (this._order = e.order),
                this.connectEffect(this._shaper),
                (this.order = e.order),
                (this.oversample = e.oversample);
            }),
            t.extend(t.Chebyshev, t.Effect),
            (t.Chebyshev.defaults = { order: 1, oversample: "none" }),
            (t.Chebyshev.prototype._getCoefficient = function (t, e, i) {
              return i.hasOwnProperty(e)
                ? i[e]
                : ((i[e] =
                    0 === e
                      ? 0
                      : 1 === e
                      ? t
                      : 2 * t * this._getCoefficient(t, e - 1, i) -
                        this._getCoefficient(t, e - 2, i)),
                  i[e]);
            }),
            Object.defineProperty(t.Chebyshev.prototype, "order", {
              get: function () {
                return this._order;
              },
              set: function (t) {
                var e, i, n, o;
                for (
                  this._order = t, e = new Array(4096), i = e.length, n = 0;
                  n < i;
                  ++n
                )
                  (o = (2 * n) / i - 1),
                    (e[n] = 0 === o ? 0 : this._getCoefficient(o, t, {}));
                this._shaper.curve = e;
              },
            }),
            Object.defineProperty(t.Chebyshev.prototype, "oversample", {
              get: function () {
                return this._shaper.oversample;
              },
              set: function (t) {
                this._shaper.oversample = t;
              },
            }),
            (t.Chebyshev.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._shaper.dispose(),
                (this._shaper = null),
                this
              );
            }),
            t.Chebyshev
          );
        }),
        t(function (t) {
          return (
            (t.StereoEffect = function () {
              t.AudioNode.call(this);
              var e = t.defaults(arguments, ["wet"], t.Effect);
              this.createInsOuts(1, 1),
                (this._dryWet = new t.CrossFade(e.wet)),
                (this.wet = this._dryWet.fade),
                (this._split = new t.Split()),
                (this.effectSendL = this._split.left),
                (this.effectSendR = this._split.right),
                (this._merge = new t.Merge()),
                (this.effectReturnL = this._merge.left),
                (this.effectReturnR = this._merge.right),
                this.input.connect(this._split),
                this.input.connect(this._dryWet, 0, 0),
                this._merge.connect(this._dryWet, 0, 1),
                this._dryWet.connect(this.output),
                this._readOnly(["wet"]);
            }),
            t.extend(t.StereoEffect, t.Effect),
            (t.StereoEffect.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._dryWet.dispose(),
                (this._dryWet = null),
                this._split.dispose(),
                (this._split = null),
                this._merge.dispose(),
                (this._merge = null),
                (this.effectSendL = null),
                (this.effectSendR = null),
                (this.effectReturnL = null),
                (this.effectReturnR = null),
                this._writable(["wet"]),
                (this.wet = null),
                this
              );
            }),
            t.StereoEffect
          );
        }),
        t(function (t) {
          return (
            (t.Chorus = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "delayTime", "depth"],
                t.Chorus
              );
              t.StereoEffect.call(this, e),
                (this._depth = e.depth),
                (this._delayTime = e.delayTime / 1e3),
                (this._lfoL = new t.LFO({
                  frequency: e.frequency,
                  min: 0,
                  max: 1,
                })),
                (this._lfoR = new t.LFO({
                  frequency: e.frequency,
                  min: 0,
                  max: 1,
                  phase: 180,
                })),
                (this._delayNodeL = new t.Delay()),
                (this._delayNodeR = new t.Delay()),
                (this.frequency = this._lfoL.frequency),
                this.effectSendL.chain(this._delayNodeL, this.effectReturnL),
                this.effectSendR.chain(this._delayNodeR, this.effectReturnR),
                this.effectSendL.connect(this.effectReturnL),
                this.effectSendR.connect(this.effectReturnR),
                this._lfoL.connect(this._delayNodeL.delayTime),
                this._lfoR.connect(this._delayNodeR.delayTime),
                this._lfoL.start(),
                this._lfoR.start(),
                this._lfoL.frequency.connect(this._lfoR.frequency),
                (this.depth = this._depth),
                (this.frequency.value = e.frequency),
                (this.type = e.type),
                this._readOnly(["frequency"]),
                (this.spread = e.spread);
            }),
            t.extend(t.Chorus, t.StereoEffect),
            (t.Chorus.defaults = {
              frequency: 1.5,
              delayTime: 3.5,
              depth: 0.7,
              type: "sine",
              spread: 180,
            }),
            Object.defineProperty(t.Chorus.prototype, "depth", {
              get: function () {
                return this._depth;
              },
              set: function (t) {
                this._depth = t;
                var e = this._delayTime * t;
                (this._lfoL.min = Math.max(this._delayTime - e, 0)),
                  (this._lfoL.max = this._delayTime + e),
                  (this._lfoR.min = Math.max(this._delayTime - e, 0)),
                  (this._lfoR.max = this._delayTime + e);
              },
            }),
            Object.defineProperty(t.Chorus.prototype, "delayTime", {
              get: function () {
                return 1e3 * this._delayTime;
              },
              set: function (t) {
                (this._delayTime = t / 1e3), (this.depth = this._depth);
              },
            }),
            Object.defineProperty(t.Chorus.prototype, "type", {
              get: function () {
                return this._lfoL.type;
              },
              set: function (t) {
                (this._lfoL.type = t), (this._lfoR.type = t);
              },
            }),
            Object.defineProperty(t.Chorus.prototype, "spread", {
              get: function () {
                return this._lfoR.phase - this._lfoL.phase;
              },
              set: function (t) {
                (this._lfoL.phase = 90 - t / 2),
                  (this._lfoR.phase = t / 2 + 90);
              },
            }),
            (t.Chorus.prototype.dispose = function () {
              return (
                t.StereoEffect.prototype.dispose.call(this),
                this._lfoL.dispose(),
                (this._lfoL = null),
                this._lfoR.dispose(),
                (this._lfoR = null),
                this._delayNodeL.dispose(),
                (this._delayNodeL = null),
                this._delayNodeR.dispose(),
                (this._delayNodeR = null),
                this._writable("frequency"),
                (this.frequency = null),
                this
              );
            }),
            t.Chorus
          );
        }),
        t(function (t) {
          return (
            (t.Convolver = function () {
              var e = t.defaults(arguments, ["url", "onload"], t.Convolver);
              t.Effect.call(this, e),
                (this._convolver = this.context.createConvolver()),
                (this._buffer = new t.Buffer(
                  e.url,
                  function (t) {
                    (this._convolver.buffer = t.get()), e.onload();
                  }.bind(this)
                )),
                this.connectEffect(this._convolver);
            }),
            t.extend(t.Convolver, t.Effect),
            (t.Convolver.defaults = { onload: t.noOp }),
            Object.defineProperty(t.Convolver.prototype, "buffer", {
              get: function () {
                return this._buffer.get();
              },
              set: function (t) {
                this._buffer.set(t),
                  (this._convolver.buffer = this._buffer.get());
              },
            }),
            (t.Convolver.prototype.load = function (t, e) {
              return this._buffer.load(
                t,
                function (t) {
                  (this.buffer = t), e && e();
                }.bind(this)
              );
            }),
            (t.Convolver.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._convolver.disconnect(),
                (this._convolver = null),
                this._buffer.dispose(),
                (this._buffer = null),
                this
              );
            }),
            t.Convolver
          );
        }),
        t(function (t) {
          return (
            (t.Distortion = function () {
              var e = t.defaults(arguments, ["distortion"], t.Distortion);
              t.Effect.call(this, e),
                (this._shaper = new t.WaveShaper(4096)),
                (this._distortion = e.distortion),
                this.connectEffect(this._shaper),
                (this.distortion = e.distortion),
                (this.oversample = e.oversample);
            }),
            t.extend(t.Distortion, t.Effect),
            (t.Distortion.defaults = { distortion: 0.4, oversample: "none" }),
            Object.defineProperty(t.Distortion.prototype, "distortion", {
              get: function () {
                return this._distortion;
              },
              set: function (t) {
                var e, i;
                (this._distortion = t),
                  (e = 100 * t),
                  (i = Math.PI / 180),
                  this._shaper.setMap(function (t) {
                    return Math.abs(t) < 0.001
                      ? 0
                      : ((3 + e) * t * 20 * i) / (Math.PI + e * Math.abs(t));
                  });
              },
            }),
            Object.defineProperty(t.Distortion.prototype, "oversample", {
              get: function () {
                return this._shaper.oversample;
              },
              set: function (t) {
                this._shaper.oversample = t;
              },
            }),
            (t.Distortion.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._shaper.dispose(),
                (this._shaper = null),
                this
              );
            }),
            t.Distortion
          );
        }),
        t(function (t) {
          return (
            (t.FeedbackEffect = function () {
              var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
              t.Effect.call(this, e),
                (this._feedbackGain = new t.Gain(
                  e.feedback,
                  t.Type.NormalRange
                )),
                (this.feedback = this._feedbackGain.gain),
                this.effectReturn.chain(this._feedbackGain, this.effectSend),
                this._readOnly(["feedback"]);
            }),
            t.extend(t.FeedbackEffect, t.Effect),
            (t.FeedbackEffect.defaults = { feedback: 0.125 }),
            (t.FeedbackEffect.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._writable(["feedback"]),
                this._feedbackGain.dispose(),
                (this._feedbackGain = null),
                (this.feedback = null),
                this
              );
            }),
            t.FeedbackEffect
          );
        }),
        t(function (t) {
          return (
            (t.FeedbackDelay = function () {
              var e = t.defaults(
                arguments,
                ["delayTime", "feedback"],
                t.FeedbackDelay
              );
              t.FeedbackEffect.call(this, e),
                (this._delayNode = new t.Delay(e.delayTime)),
                (this.delayTime = this._delayNode.delayTime),
                this.connectEffect(this._delayNode),
                this._readOnly(["delayTime"]);
            }),
            t.extend(t.FeedbackDelay, t.FeedbackEffect),
            (t.FeedbackDelay.defaults = { delayTime: 0.25 }),
            (t.FeedbackDelay.prototype.dispose = function () {
              return (
                t.FeedbackEffect.prototype.dispose.call(this),
                this._delayNode.dispose(),
                (this._delayNode = null),
                this._writable(["delayTime"]),
                (this.delayTime = null),
                this
              );
            }),
            t.FeedbackDelay
          );
        }),
        t(function (t) {
          var e = [
              1557 / 44100,
              1617 / 44100,
              1491 / 44100,
              1422 / 44100,
              1277 / 44100,
              1356 / 44100,
              1188 / 44100,
              1116 / 44100,
            ],
            i = [225, 556, 441, 341];
          return (
            (t.Freeverb = function () {
              var n,
                o,
                s,
                r,
                a,
                l,
                u = t.defaults(
                  arguments,
                  ["roomSize", "dampening"],
                  t.Freeverb
                );
              for (
                t.StereoEffect.call(this, u),
                  this.roomSize = new t.Signal(u.roomSize, t.Type.NormalRange),
                  this.dampening = new t.Signal(u.dampening, t.Type.Frequency),
                  this._combFilters = [],
                  this._allpassFiltersL = [],
                  this._allpassFiltersR = [],
                  n = 0;
                n < i.length;
                n++
              )
                (o = this.context.createBiquadFilter()),
                  (o.type = "allpass"),
                  (o.frequency.value = i[n]),
                  this._allpassFiltersL.push(o);
              for (s = 0; s < i.length; s++)
                (r = this.context.createBiquadFilter()),
                  (r.type = "allpass"),
                  (r.frequency.value = i[s]),
                  this._allpassFiltersR.push(r);
              for (a = 0; a < e.length; a++)
                (l = new t.LowpassCombFilter(e[a])),
                  a < e.length / 2
                    ? this.effectSendL.chain(l, this._allpassFiltersL[0])
                    : this.effectSendR.chain(l, this._allpassFiltersR[0]),
                  this.roomSize.connect(l.resonance),
                  this.dampening.connect(l.dampening),
                  this._combFilters.push(l);
              t.connectSeries.apply(t, this._allpassFiltersL),
                t.connectSeries.apply(t, this._allpassFiltersR),
                this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(
                  this.effectReturnL
                ),
                this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(
                  this.effectReturnR
                ),
                this._readOnly(["roomSize", "dampening"]);
            }),
            t.extend(t.Freeverb, t.StereoEffect),
            (t.Freeverb.defaults = { roomSize: 0.7, dampening: 3e3 }),
            (t.Freeverb.prototype.dispose = function () {
              var e, i, n;
              for (
                t.StereoEffect.prototype.dispose.call(this), e = 0;
                e < this._allpassFiltersL.length;
                e++
              )
                this._allpassFiltersL[e].disconnect(),
                  (this._allpassFiltersL[e] = null);
              for (
                this._allpassFiltersL = null, i = 0;
                i < this._allpassFiltersR.length;
                i++
              )
                this._allpassFiltersR[i].disconnect(),
                  (this._allpassFiltersR[i] = null);
              for (
                this._allpassFiltersR = null, n = 0;
                n < this._combFilters.length;
                n++
              )
                this._combFilters[n].dispose(), (this._combFilters[n] = null);
              return (
                (this._combFilters = null),
                this._writable(["roomSize", "dampening"]),
                this.roomSize.dispose(),
                (this.roomSize = null),
                this.dampening.dispose(),
                (this.dampening = null),
                this
              );
            }),
            t.Freeverb
          );
        }),
        t(function (t) {
          var e = [0.06748, 0.06404, 0.08212, 0.09004],
            i = [0.773, 0.802, 0.753, 0.733],
            n = [347, 113, 37];
          return (
            (t.JCReverb = function () {
              var o,
                s,
                r,
                a,
                l = t.defaults(arguments, ["roomSize"], t.JCReverb);
              for (
                t.StereoEffect.call(this, l),
                  this.roomSize = new t.Signal(l.roomSize, t.Type.NormalRange),
                  this._scaleRoomSize = new t.Scale(-0.733, 0.197),
                  this._allpassFilters = [],
                  this._feedbackCombFilters = [],
                  o = 0;
                o < n.length;
                o++
              )
                (s = this.context.createBiquadFilter()),
                  (s.type = "allpass"),
                  (s.frequency.value = n[o]),
                  this._allpassFilters.push(s);
              for (r = 0; r < e.length; r++)
                (a = new t.FeedbackCombFilter(e[r], 0.1)),
                  this._scaleRoomSize.connect(a.resonance),
                  (a.resonance.value = i[r]),
                  this._allpassFilters[this._allpassFilters.length - 1].connect(
                    a
                  ),
                  r < e.length / 2
                    ? a.connect(this.effectReturnL)
                    : a.connect(this.effectReturnR),
                  this._feedbackCombFilters.push(a);
              this.roomSize.connect(this._scaleRoomSize),
                t.connectSeries.apply(t, this._allpassFilters),
                this.effectSendL.connect(this._allpassFilters[0]),
                this.effectSendR.connect(this._allpassFilters[0]),
                this._readOnly(["roomSize"]);
            }),
            t.extend(t.JCReverb, t.StereoEffect),
            (t.JCReverb.defaults = { roomSize: 0.5 }),
            (t.JCReverb.prototype.dispose = function () {
              var e, i;
              for (
                t.StereoEffect.prototype.dispose.call(this), e = 0;
                e < this._allpassFilters.length;
                e++
              )
                this._allpassFilters[e].disconnect(),
                  (this._allpassFilters[e] = null);
              for (
                this._allpassFilters = null, i = 0;
                i < this._feedbackCombFilters.length;
                i++
              )
                this._feedbackCombFilters[i].dispose(),
                  (this._feedbackCombFilters[i] = null);
              return (
                (this._feedbackCombFilters = null),
                this._writable(["roomSize"]),
                this.roomSize.dispose(),
                (this.roomSize = null),
                this._scaleRoomSize.dispose(),
                (this._scaleRoomSize = null),
                this
              );
            }),
            t.JCReverb
          );
        }),
        t(function (t) {
          return (
            (t.MidSideEffect = function () {
              t.Effect.apply(this, arguments),
                (this._midSideSplit = new t.MidSideSplit()),
                (this._midSideMerge = new t.MidSideMerge()),
                (this.midSend = this._midSideSplit.mid),
                (this.sideSend = this._midSideSplit.side),
                (this.midReturn = this._midSideMerge.mid),
                (this.sideReturn = this._midSideMerge.side),
                this.effectSend.connect(this._midSideSplit),
                this._midSideMerge.connect(this.effectReturn);
            }),
            t.extend(t.MidSideEffect, t.Effect),
            (t.MidSideEffect.prototype.dispose = function () {
              return (
                t.Effect.prototype.dispose.call(this),
                this._midSideSplit.dispose(),
                (this._midSideSplit = null),
                this._midSideMerge.dispose(),
                (this._midSideMerge = null),
                (this.midSend = null),
                (this.sideSend = null),
                (this.midReturn = null),
                (this.sideReturn = null),
                this
              );
            }),
            t.MidSideEffect
          );
        }),
        t(function (t) {
          return (
            (t.Phaser = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "octaves", "baseFrequency"],
                t.Phaser
              );
              t.StereoEffect.call(this, e),
                (this._lfoL = new t.LFO(e.frequency, 0, 1)),
                (this._lfoR = new t.LFO(e.frequency, 0, 1)),
                (this._lfoR.phase = 180),
                (this._baseFrequency = e.baseFrequency),
                (this._octaves = e.octaves),
                (this.Q = new t.Signal(e.Q, t.Type.Positive)),
                (this._filtersL = this._makeFilters(
                  e.stages,
                  this._lfoL,
                  this.Q
                )),
                (this._filtersR = this._makeFilters(
                  e.stages,
                  this._lfoR,
                  this.Q
                )),
                (this.frequency = this._lfoL.frequency),
                (this.frequency.value = e.frequency),
                this.effectSendL.connect(this._filtersL[0]),
                this.effectSendR.connect(this._filtersR[0]),
                this._filtersL[e.stages - 1].connect(this.effectReturnL),
                this._filtersR[e.stages - 1].connect(this.effectReturnR),
                this._lfoL.frequency.connect(this._lfoR.frequency),
                (this.baseFrequency = e.baseFrequency),
                (this.octaves = e.octaves),
                this._lfoL.start(),
                this._lfoR.start(),
                this._readOnly(["frequency", "Q"]);
            }),
            t.extend(t.Phaser, t.StereoEffect),
            (t.Phaser.defaults = {
              frequency: 0.5,
              octaves: 3,
              stages: 10,
              Q: 10,
              baseFrequency: 350,
            }),
            (t.Phaser.prototype._makeFilters = function (e, i, n) {
              var o,
                s,
                r = new Array(e);
              for (o = 0; o < e; o++)
                (s = this.context.createBiquadFilter()),
                  (s.type = "allpass"),
                  n.connect(s.Q),
                  i.connect(s.frequency),
                  (r[o] = s);
              return t.connectSeries.apply(t, r), r;
            }),
            Object.defineProperty(t.Phaser.prototype, "octaves", {
              get: function () {
                return this._octaves;
              },
              set: function (t) {
                this._octaves = t;
                var e = this._baseFrequency * Math.pow(2, t);
                (this._lfoL.max = e), (this._lfoR.max = e);
              },
            }),
            Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
              get: function () {
                return this._baseFrequency;
              },
              set: function (t) {
                (this._baseFrequency = t),
                  (this._lfoL.min = t),
                  (this._lfoR.min = t),
                  (this.octaves = this._octaves);
              },
            }),
            (t.Phaser.prototype.dispose = function () {
              var e, i;
              for (
                t.StereoEffect.prototype.dispose.call(this),
                  this._writable(["frequency", "Q"]),
                  this.Q.dispose(),
                  this.Q = null,
                  this._lfoL.dispose(),
                  this._lfoL = null,
                  this._lfoR.dispose(),
                  this._lfoR = null,
                  e = 0;
                e < this._filtersL.length;
                e++
              )
                this._filtersL[e].disconnect(), (this._filtersL[e] = null);
              for (this._filtersL = null, i = 0; i < this._filtersR.length; i++)
                this._filtersR[i].disconnect(), (this._filtersR[i] = null);
              return (this._filtersR = null), (this.frequency = null), this;
            }),
            t.Phaser
          );
        }),
        t(function (t) {
          return (
            (t.StereoXFeedbackEffect = function () {
              var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
              t.StereoEffect.call(this, e),
                (this.feedback = new t.Signal(e.feedback, t.Type.NormalRange)),
                (this._feedbackLR = new t.Gain()),
                (this._feedbackRL = new t.Gain()),
                this.effectReturnL.chain(this._feedbackLR, this.effectSendR),
                this.effectReturnR.chain(this._feedbackRL, this.effectSendL),
                this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain),
                this._readOnly(["feedback"]);
            }),
            t.extend(t.StereoXFeedbackEffect, t.StereoEffect),
            (t.StereoXFeedbackEffect.prototype.dispose = function () {
              return (
                t.StereoEffect.prototype.dispose.call(this),
                this._writable(["feedback"]),
                this.feedback.dispose(),
                (this.feedback = null),
                this._feedbackLR.dispose(),
                (this._feedbackLR = null),
                this._feedbackRL.dispose(),
                (this._feedbackRL = null),
                this
              );
            }),
            t.StereoXFeedbackEffect
          );
        }),
        t(function (t) {
          return (
            (t.PingPongDelay = function () {
              var e = t.defaults(
                arguments,
                ["delayTime", "feedback"],
                t.PingPongDelay
              );
              t.StereoXFeedbackEffect.call(this, e),
                (this._leftDelay = new t.Delay(0, e.maxDelayTime)),
                (this._rightDelay = new t.Delay(0, e.maxDelayTime)),
                (this._rightPreDelay = new t.Delay(0, e.maxDelayTime)),
                (this.delayTime = new t.Signal(e.delayTime, t.Type.Time)),
                this.effectSendL.chain(this._leftDelay, this.effectReturnL),
                this.effectSendR.chain(
                  this._rightPreDelay,
                  this._rightDelay,
                  this.effectReturnR
                ),
                this.delayTime.fan(
                  this._leftDelay.delayTime,
                  this._rightDelay.delayTime,
                  this._rightPreDelay.delayTime
                ),
                this._feedbackLR.disconnect(),
                this._feedbackLR.connect(this._rightDelay),
                this._readOnly(["delayTime"]);
            }),
            t.extend(t.PingPongDelay, t.StereoXFeedbackEffect),
            (t.PingPongDelay.defaults = { delayTime: 0.25, maxDelayTime: 1 }),
            (t.PingPongDelay.prototype.dispose = function () {
              return (
                t.StereoXFeedbackEffect.prototype.dispose.call(this),
                this._leftDelay.dispose(),
                (this._leftDelay = null),
                this._rightDelay.dispose(),
                (this._rightDelay = null),
                this._rightPreDelay.dispose(),
                (this._rightPreDelay = null),
                this._writable(["delayTime"]),
                this.delayTime.dispose(),
                (this.delayTime = null),
                this
              );
            }),
            t.PingPongDelay
          );
        }),
        t(function (t) {
          return (
            (t.PitchShift = function () {
              var e,
                i = t.defaults(arguments, ["pitch"], t.PitchShift);
              t.FeedbackEffect.call(this, i),
                (this._frequency = new t.Signal(0)),
                (this._delayA = new t.Delay(0, 1)),
                (this._lfoA = new t.LFO({
                  min: 0,
                  max: 0.1,
                  type: "sawtooth",
                }).connect(this._delayA.delayTime)),
                (this._delayB = new t.Delay(0, 1)),
                (this._lfoB = new t.LFO({
                  min: 0,
                  max: 0.1,
                  type: "sawtooth",
                  phase: 180,
                }).connect(this._delayB.delayTime)),
                (this._crossFade = new t.CrossFade()),
                (this._crossFadeLFO = new t.LFO({
                  min: 0,
                  max: 1,
                  type: "triangle",
                  phase: 90,
                }).connect(this._crossFade.fade)),
                (this._feedbackDelay = new t.Delay(i.delayTime)),
                (this.delayTime = this._feedbackDelay.delayTime),
                this._readOnly("delayTime"),
                (this._pitch = i.pitch),
                (this._windowSize = i.windowSize),
                this._delayA.connect(this._crossFade.a),
                this._delayB.connect(this._crossFade.b),
                this._frequency.fan(
                  this._lfoA.frequency,
                  this._lfoB.frequency,
                  this._crossFadeLFO.frequency
                ),
                this.effectSend.fan(this._delayA, this._delayB),
                this._crossFade.chain(this._feedbackDelay, this.effectReturn),
                (e = this.now()),
                this._lfoA.start(e),
                this._lfoB.start(e),
                this._crossFadeLFO.start(e),
                (this.windowSize = this._windowSize);
            }),
            t.extend(t.PitchShift, t.FeedbackEffect),
            (t.PitchShift.defaults = {
              pitch: 0,
              windowSize: 0.1,
              delayTime: 0,
              feedback: 0,
            }),
            Object.defineProperty(t.PitchShift.prototype, "pitch", {
              get: function () {
                return this._pitch;
              },
              set: function (e) {
                this._pitch = e;
                var i = 0;
                e < 0
                  ? ((this._lfoA.min = 0),
                    (this._lfoA.max = this._windowSize),
                    (this._lfoB.min = 0),
                    (this._lfoB.max = this._windowSize),
                    (i = t.intervalToFrequencyRatio(e - 1) + 1))
                  : ((this._lfoA.min = this._windowSize),
                    (this._lfoA.max = 0),
                    (this._lfoB.min = this._windowSize),
                    (this._lfoB.max = 0),
                    (i = t.intervalToFrequencyRatio(e) - 1)),
                  (this._frequency.value = i * (1.2 / this._windowSize));
              },
            }),
            Object.defineProperty(t.PitchShift.prototype, "windowSize", {
              get: function () {
                return this._windowSize;
              },
              set: function (t) {
                (this._windowSize = this.toSeconds(t)),
                  (this.pitch = this._pitch);
              },
            }),
            (t.PitchShift.prototype.dispose = function () {
              return (
                t.FeedbackEffect.prototype.dispose.call(this),
                this._frequency.dispose(),
                (this._frequency = null),
                this._delayA.disconnect(),
                (this._delayA = null),
                this._delayB.disconnect(),
                (this._delayB = null),
                this._lfoA.dispose(),
                (this._lfoA = null),
                this._lfoB.dispose(),
                (this._lfoB = null),
                this._crossFade.dispose(),
                (this._crossFade = null),
                this._crossFadeLFO.dispose(),
                (this._crossFadeLFO = null),
                this._writable("delayTime"),
                this._feedbackDelay.dispose(),
                (this._feedbackDelay = null),
                (this.delayTime = null),
                this
              );
            }),
            t.PitchShift
          );
        }),
        t(function (t) {
          return (
            (t.StereoFeedbackEffect = function () {
              var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
              t.StereoEffect.call(this, e),
                (this.feedback = new t.Signal(e.feedback, t.Type.NormalRange)),
                (this._feedbackL = new t.Gain()),
                (this._feedbackR = new t.Gain()),
                this.effectReturnL.chain(this._feedbackL, this.effectSendL),
                this.effectReturnR.chain(this._feedbackR, this.effectSendR),
                this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
                this._readOnly(["feedback"]);
            }),
            t.extend(t.StereoFeedbackEffect, t.StereoEffect),
            (t.StereoFeedbackEffect.prototype.dispose = function () {
              return (
                t.StereoEffect.prototype.dispose.call(this),
                this._writable(["feedback"]),
                this.feedback.dispose(),
                (this.feedback = null),
                this._feedbackL.dispose(),
                (this._feedbackL = null),
                this._feedbackR.dispose(),
                (this._feedbackR = null),
                this
              );
            }),
            t.StereoFeedbackEffect
          );
        }),
        t(function (t) {
          return (
            (t.StereoWidener = function () {
              var e = t.defaults(arguments, ["width"], t.StereoWidener);
              t.MidSideEffect.call(this, e),
                (this.width = new t.Signal(e.width, t.Type.NormalRange)),
                this._readOnly(["width"]),
                (this._twoTimesWidthMid = new t.Multiply(2)),
                (this._twoTimesWidthSide = new t.Multiply(2)),
                (this._midMult = new t.Multiply()),
                this._twoTimesWidthMid.connect(this._midMult, 0, 1),
                this.midSend.chain(this._midMult, this.midReturn),
                (this._oneMinusWidth = new t.Subtract()),
                this._oneMinusWidth.connect(this._twoTimesWidthMid),
                this.context.getConstant(1).connect(this._oneMinusWidth, 0, 0),
                this.width.connect(this._oneMinusWidth, 0, 1),
                (this._sideMult = new t.Multiply()),
                this.width.connect(this._twoTimesWidthSide),
                this._twoTimesWidthSide.connect(this._sideMult, 0, 1),
                this.sideSend.chain(this._sideMult, this.sideReturn);
            }),
            t.extend(t.StereoWidener, t.MidSideEffect),
            (t.StereoWidener.defaults = { width: 0.5 }),
            (t.StereoWidener.prototype.dispose = function () {
              return (
                t.MidSideEffect.prototype.dispose.call(this),
                this._writable(["width"]),
                this.width.dispose(),
                (this.width = null),
                this._midMult.dispose(),
                (this._midMult = null),
                this._sideMult.dispose(),
                (this._sideMult = null),
                this._twoTimesWidthMid.dispose(),
                (this._twoTimesWidthMid = null),
                this._twoTimesWidthSide.dispose(),
                (this._twoTimesWidthSide = null),
                this._oneMinusWidth.dispose(),
                (this._oneMinusWidth = null),
                this
              );
            }),
            t.StereoWidener
          );
        }),
        t(function (t) {
          return (
            (t.Tremolo = function () {
              var e = t.defaults(arguments, ["frequency", "depth"], t.Tremolo);
              t.StereoEffect.call(this, e),
                (this._lfoL = new t.LFO({ phase: e.spread, min: 1, max: 0 })),
                (this._lfoR = new t.LFO({ phase: e.spread, min: 1, max: 0 })),
                (this._amplitudeL = new t.Gain()),
                (this._amplitudeR = new t.Gain()),
                (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                (this.depth = new t.Signal(e.depth, t.Type.NormalRange)),
                this._readOnly(["frequency", "depth"]),
                this.effectSendL.chain(this._amplitudeL, this.effectReturnL),
                this.effectSendR.chain(this._amplitudeR, this.effectReturnR),
                this._lfoL.connect(this._amplitudeL.gain),
                this._lfoR.connect(this._amplitudeR.gain),
                this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
                this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
                (this.type = e.type),
                (this.spread = e.spread);
            }),
            t.extend(t.Tremolo, t.StereoEffect),
            (t.Tremolo.defaults = {
              frequency: 10,
              type: "sine",
              depth: 0.5,
              spread: 180,
            }),
            (t.Tremolo.prototype.start = function (t) {
              return this._lfoL.start(t), this._lfoR.start(t), this;
            }),
            (t.Tremolo.prototype.stop = function (t) {
              return this._lfoL.stop(t), this._lfoR.stop(t), this;
            }),
            (t.Tremolo.prototype.sync = function (t) {
              return this._lfoL.sync(t), this._lfoR.sync(t), this;
            }),
            (t.Tremolo.prototype.unsync = function () {
              return this._lfoL.unsync(), this._lfoR.unsync(), this;
            }),
            Object.defineProperty(t.Tremolo.prototype, "type", {
              get: function () {
                return this._lfoL.type;
              },
              set: function (t) {
                (this._lfoL.type = t), (this._lfoR.type = t);
              },
            }),
            Object.defineProperty(t.Tremolo.prototype, "spread", {
              get: function () {
                return this._lfoR.phase - this._lfoL.phase;
              },
              set: function (t) {
                (this._lfoL.phase = 90 - t / 2),
                  (this._lfoR.phase = t / 2 + 90);
              },
            }),
            (t.Tremolo.prototype.dispose = function () {
              return (
                t.StereoEffect.prototype.dispose.call(this),
                this._writable(["frequency", "depth"]),
                this._lfoL.dispose(),
                (this._lfoL = null),
                this._lfoR.dispose(),
                (this._lfoR = null),
                this._amplitudeL.dispose(),
                (this._amplitudeL = null),
                this._amplitudeR.dispose(),
                (this._amplitudeR = null),
                (this.frequency = null),
                (this.depth = null),
                this
              );
            }),
            t.Tremolo
          );
        }),
        t(function (t) {
          return (
            (t.Vibrato = function () {
              var e = t.defaults(arguments, ["frequency", "depth"], t.Vibrato);
              t.Effect.call(this, e),
                (this._delayNode = new t.Delay(0, e.maxDelay)),
                (this._lfo = new t.LFO({
                  type: e.type,
                  min: 0,
                  max: e.maxDelay,
                  frequency: e.frequency,
                  phase: -90,
                })
                  .start()
                  .connect(this._delayNode.delayTime)),
                (this.frequency = this._lfo.frequency),
                (this.depth = this._lfo.amplitude),
                (this.depth.value = e.depth),
                this._readOnly(["frequency", "depth"]),
                this.effectSend.chain(this._delayNode, this.effectReturn);
            }),
            t.extend(t.Vibrato, t.Effect),
            (t.Vibrato.defaults = {
              maxDelay: 0.005,
              frequency: 5,
              depth: 0.1,
              type: "sine",
            }),
            Object.defineProperty(t.Vibrato.prototype, "type", {
              get: function () {
                return this._lfo.type;
              },
              set: function (t) {
                this._lfo.type = t;
              },
            }),
            (t.Vibrato.prototype.dispose = function () {
              t.Effect.prototype.dispose.call(this),
                this._delayNode.dispose(),
                (this._delayNode = null),
                this._lfo.dispose(),
                (this._lfo = null),
                this._writable(["frequency", "depth"]),
                (this.frequency = null),
                (this.depth = null);
            }),
            t.Vibrato
          );
        }),
        t(function (t) {
          return (
            (t.Event = function () {
              var e = t.defaults(arguments, ["callback", "value"], t.Event);
              t.call(this),
                (this._loop = e.loop),
                (this.callback = e.callback),
                (this.value = e.value),
                (this._loopStart = this.toTicks(e.loopStart)),
                (this._loopEnd = this.toTicks(e.loopEnd)),
                (this._state = new t.TimelineState(t.State.Stopped)),
                (this._playbackRate = 1),
                (this._startOffset = 0),
                (this._probability = e.probability),
                (this._humanize = e.humanize),
                (this.mute = e.mute),
                (this.playbackRate = e.playbackRate);
            }),
            t.extend(t.Event),
            (t.Event.defaults = {
              callback: t.noOp,
              loop: !1,
              loopEnd: "1m",
              loopStart: 0,
              playbackRate: 1,
              value: null,
              probability: 1,
              mute: !1,
              humanize: !1,
            }),
            (t.Event.prototype._rescheduleEvents = function (e) {
              return (
                (e = t.defaultArg(e, -1)),
                this._state.forEachFrom(
                  e,
                  function (e) {
                    var i, n, o, s;
                    e.state === t.State.Started &&
                      (t.isUndef(e.id) || t.Transport.clear(e.id),
                      (n =
                        e.time +
                        Math.round(this.startOffset / this._playbackRate)),
                      this._loop
                        ? ((i = 1 / 0),
                          t.isNumber(this._loop) &&
                            (i = this._loop * this._getLoopDuration()),
                          (o = this._state.getAfter(n)),
                          null !== o && (i = Math.min(i, o.time - n)),
                          i !== 1 / 0 &&
                            (this._state.setStateAtTime(
                              t.State.Stopped,
                              n + i + 1
                            ),
                            (i = t.Ticks(i))),
                          (s = t.Ticks(this._getLoopDuration())),
                          (e.id = t.Transport.scheduleRepeat(
                            this._tick.bind(this),
                            s,
                            t.Ticks(n),
                            i
                          )))
                        : (e.id = t.Transport.schedule(
                            this._tick.bind(this),
                            t.Ticks(n)
                          )));
                  }.bind(this)
                ),
                this
              );
            }),
            Object.defineProperty(t.Event.prototype, "state", {
              get: function () {
                return this._state.getValueAtTime(t.Transport.ticks);
              },
            }),
            Object.defineProperty(t.Event.prototype, "startOffset", {
              get: function () {
                return this._startOffset;
              },
              set: function (t) {
                this._startOffset = t;
              },
            }),
            Object.defineProperty(t.Event.prototype, "probability", {
              get: function () {
                return this._probability;
              },
              set: function (t) {
                this._probability = t;
              },
            }),
            Object.defineProperty(t.Event.prototype, "humanize", {
              get: function () {
                return this._humanize;
              },
              set: function (t) {
                this._humanize = t;
              },
            }),
            (t.Event.prototype.start = function (e) {
              return (
                (e = this.toTicks(e)),
                this._state.getValueAtTime(e) === t.State.Stopped &&
                  (this._state.add({
                    state: t.State.Started,
                    time: e,
                    id: void 0,
                  }),
                  this._rescheduleEvents(e)),
                this
              );
            }),
            (t.Event.prototype.stop = function (e) {
              var i, n;
              return (
                this.cancel(e),
                (e = this.toTicks(e)),
                this._state.getValueAtTime(e) === t.State.Started &&
                  (this._state.setStateAtTime(t.State.Stopped, e),
                  (i = this._state.getBefore(e)),
                  (n = e),
                  null !== i && (n = i.time),
                  this._rescheduleEvents(n)),
                this
              );
            }),
            (t.Event.prototype.cancel = function (e) {
              return (
                (e = t.defaultArg(e, -1 / 0)),
                (e = this.toTicks(e)),
                this._state.forEachFrom(e, function (e) {
                  t.Transport.clear(e.id);
                }),
                this._state.cancel(e),
                this
              );
            }),
            (t.Event.prototype._tick = function (e) {
              if (
                !this.mute &&
                this._state.getValueAtTime(t.Transport.ticks) ===
                  t.State.Started
              ) {
                if (this.probability < 1 && Math.random() > this.probability)
                  return;
                if (this.humanize) {
                  var i = 0.02;
                  t.isBoolean(this.humanize) ||
                    (i = this.toSeconds(this.humanize)),
                    (e += (2 * Math.random() - 1) * i);
                }
                this.callback(e, this.value);
              }
            }),
            (t.Event.prototype._getLoopDuration = function () {
              return Math.round(
                (this._loopEnd - this._loopStart) / this._playbackRate
              );
            }),
            Object.defineProperty(t.Event.prototype, "loop", {
              get: function () {
                return this._loop;
              },
              set: function (t) {
                (this._loop = t), this._rescheduleEvents();
              },
            }),
            Object.defineProperty(t.Event.prototype, "playbackRate", {
              get: function () {
                return this._playbackRate;
              },
              set: function (t) {
                (this._playbackRate = t), this._rescheduleEvents();
              },
            }),
            Object.defineProperty(t.Event.prototype, "loopEnd", {
              get: function () {
                return t.Ticks(this._loopEnd).toSeconds();
              },
              set: function (t) {
                (this._loopEnd = this.toTicks(t)),
                  this._loop && this._rescheduleEvents();
              },
            }),
            Object.defineProperty(t.Event.prototype, "loopStart", {
              get: function () {
                return t.Ticks(this._loopStart).toSeconds();
              },
              set: function (t) {
                (this._loopStart = this.toTicks(t)),
                  this._loop && this._rescheduleEvents();
              },
            }),
            Object.defineProperty(t.Event.prototype, "progress", {
              get: function () {
                var e, i, n;
                return this._loop
                  ? ((e = t.Transport.ticks),
                    (i = this._state.get(e)),
                    null !== i && i.state === t.State.Started
                      ? ((n = this._getLoopDuration()), ((e - i.time) % n) / n)
                      : 0)
                  : 0;
              },
            }),
            (t.Event.prototype.dispose = function () {
              this.cancel(),
                this._state.dispose(),
                (this._state = null),
                (this.callback = null),
                (this.value = null);
            }),
            t.Event
          );
        }),
        t(function (t) {
          return (
            (t.Loop = function () {
              var e = t.defaults(arguments, ["callback", "interval"], t.Loop);
              t.call(this),
                (this._event = new t.Event({
                  callback: this._tick.bind(this),
                  loop: !0,
                  loopEnd: e.interval,
                  playbackRate: e.playbackRate,
                  probability: e.probability,
                })),
                (this.callback = e.callback),
                (this.iterations = e.iterations);
            }),
            t.extend(t.Loop),
            (t.Loop.defaults = {
              interval: "4n",
              callback: t.noOp,
              playbackRate: 1,
              iterations: 1 / 0,
              probability: !0,
              mute: !1,
            }),
            (t.Loop.prototype.start = function (t) {
              return this._event.start(t), this;
            }),
            (t.Loop.prototype.stop = function (t) {
              return this._event.stop(t), this;
            }),
            (t.Loop.prototype.cancel = function (t) {
              return this._event.cancel(t), this;
            }),
            (t.Loop.prototype._tick = function (t) {
              this.callback(t);
            }),
            Object.defineProperty(t.Loop.prototype, "state", {
              get: function () {
                return this._event.state;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "progress", {
              get: function () {
                return this._event.progress;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "interval", {
              get: function () {
                return this._event.loopEnd;
              },
              set: function (t) {
                this._event.loopEnd = t;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "playbackRate", {
              get: function () {
                return this._event.playbackRate;
              },
              set: function (t) {
                this._event.playbackRate = t;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "humanize", {
              get: function () {
                return this._event.humanize;
              },
              set: function (t) {
                this._event.humanize = t;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "probability", {
              get: function () {
                return this._event.probability;
              },
              set: function (t) {
                this._event.probability = t;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "mute", {
              get: function () {
                return this._event.mute;
              },
              set: function (t) {
                this._event.mute = t;
              },
            }),
            Object.defineProperty(t.Loop.prototype, "iterations", {
              get: function () {
                return !0 === this._event.loop ? 1 / 0 : this._event.loop;
              },
              set: function (t) {
                this._event.loop = t === 1 / 0 || t;
              },
            }),
            (t.Loop.prototype.dispose = function () {
              this._event.dispose(),
                (this._event = null),
                (this.callback = null);
            }),
            t.Loop
          );
        }),
        t(function (t) {
          return (
            (t.Part = function () {
              var e,
                i = t.defaults(arguments, ["callback", "events"], t.Part);
              for (
                t.Event.call(this, i), this._events = [], e = 0;
                e < i.events.length;
                e++
              )
                Array.isArray(i.events[e])
                  ? this.add(i.events[e][0], i.events[e][1])
                  : this.add(i.events[e]);
            }),
            t.extend(t.Part, t.Event),
            (t.Part.defaults = {
              callback: t.noOp,
              loop: !1,
              loopEnd: "1m",
              loopStart: 0,
              playbackRate: 1,
              probability: 1,
              humanize: !1,
              mute: !1,
              events: [],
            }),
            (t.Part.prototype.start = function (e, i) {
              var n = this.toTicks(e);
              return (
                this._state.getValueAtTime(n) !== t.State.Started &&
                  ((i = this._loop
                    ? t.defaultArg(i, this._loopStart)
                    : t.defaultArg(i, 0)),
                  (i = this.toTicks(i)),
                  this._state.add({
                    state: t.State.Started,
                    time: n,
                    offset: i,
                  }),
                  this._forEach(function (t) {
                    this._startNote(t, n, i);
                  })),
                this
              );
            }),
            (t.Part.prototype._startNote = function (e, i, n) {
              (i -= n),
                this._loop
                  ? e.startOffset >= this._loopStart &&
                    e.startOffset < this._loopEnd
                    ? (e.startOffset < n && (i += this._getLoopDuration()),
                      e.start(t.Ticks(i)))
                    : e.startOffset < this._loopStart &&
                      e.startOffset >= n &&
                      ((e.loop = !1), e.start(t.Ticks(i)))
                  : e.startOffset >= n && e.start(t.Ticks(i));
            }),
            Object.defineProperty(t.Part.prototype, "startOffset", {
              get: function () {
                return this._startOffset;
              },
              set: function (t) {
                (this._startOffset = t),
                  this._forEach(function (t) {
                    t.startOffset += this._startOffset;
                  });
              },
            }),
            (t.Part.prototype.stop = function (e) {
              var i = this.toTicks(e);
              return (
                this._state.cancel(i),
                this._state.setStateAtTime(t.State.Stopped, i),
                this._forEach(function (t) {
                  t.stop(e);
                }),
                this
              );
            }),
            (t.Part.prototype.at = function (e, i) {
              var n, o, s;
              for (
                e = t.TransportTime(e), n = t.Ticks(1).toSeconds(), o = 0;
                o < this._events.length;
                o++
              )
                if (
                  ((s = this._events[o]),
                  Math.abs(e.toTicks() - s.startOffset) < n)
                )
                  return t.isUndef(i) || (s.value = i), s;
              return t.isUndef(i)
                ? null
                : (this.add(e, i), this._events[this._events.length - 1]);
            }),
            (t.Part.prototype.add = function (e, i) {
              e.hasOwnProperty("time") && ((i = e), (e = i.time)),
                (e = this.toTicks(e));
              var n;
              return (
                i instanceof t.Event
                  ? ((n = i), (n.callback = this._tick.bind(this)))
                  : (n = new t.Event({
                      callback: this._tick.bind(this),
                      value: i,
                    })),
                (n.startOffset = e),
                n.set({
                  loopEnd: this.loopEnd,
                  loopStart: this.loopStart,
                  loop: this.loop,
                  humanize: this.humanize,
                  playbackRate: this.playbackRate,
                  probability: this.probability,
                }),
                this._events.push(n),
                this._restartEvent(n),
                this
              );
            }),
            (t.Part.prototype._restartEvent = function (e) {
              this._state.forEach(
                function (i) {
                  i.state === t.State.Started
                    ? this._startNote(e, i.time, i.offset)
                    : e.stop(t.Ticks(i.time));
                }.bind(this)
              );
            }),
            (t.Part.prototype.remove = function (e, i) {
              var n, o;
              for (
                e.hasOwnProperty("time") && ((i = e), (e = i.time)),
                  e = this.toTicks(e),
                  n = this._events.length - 1;
                n >= 0;
                n--
              )
                (o = this._events[n]),
                  o instanceof t.Part
                    ? o.remove(e, i)
                    : o.startOffset === e &&
                      (t.isUndef(i) || (!t.isUndef(i) && o.value === i)) &&
                      (this._events.splice(n, 1), o.dispose());
              return this;
            }),
            (t.Part.prototype.removeAll = function () {
              return (
                this._forEach(function (t) {
                  t.dispose();
                }),
                (this._events = []),
                this
              );
            }),
            (t.Part.prototype.cancel = function (t) {
              return (
                this._forEach(function (e) {
                  e.cancel(t);
                }),
                this._state.cancel(this.toTicks(t)),
                this
              );
            }),
            (t.Part.prototype._forEach = function (e, i) {
              var n, o;
              if (this._events)
                for (
                  i = t.defaultArg(i, this), n = this._events.length - 1;
                  n >= 0;
                  n--
                )
                  (o = this._events[n]),
                    o instanceof t.Part ? o._forEach(e, i) : e.call(i, o);
              return this;
            }),
            (t.Part.prototype._setAll = function (t, e) {
              this._forEach(function (i) {
                i[t] = e;
              });
            }),
            (t.Part.prototype._tick = function (t, e) {
              this.mute || this.callback(t, e);
            }),
            (t.Part.prototype._testLoopBoundries = function (e) {
              e.startOffset < this._loopStart || e.startOffset >= this._loopEnd
                ? e.cancel(0)
                : e.state === t.State.Stopped && this._restartEvent(e);
            }),
            Object.defineProperty(t.Part.prototype, "probability", {
              get: function () {
                return this._probability;
              },
              set: function (t) {
                (this._probability = t), this._setAll("probability", t);
              },
            }),
            Object.defineProperty(t.Part.prototype, "humanize", {
              get: function () {
                return this._humanize;
              },
              set: function (t) {
                (this._humanize = t), this._setAll("humanize", t);
              },
            }),
            Object.defineProperty(t.Part.prototype, "loop", {
              get: function () {
                return this._loop;
              },
              set: function (t) {
                (this._loop = t),
                  this._forEach(function (e) {
                    (e._loopStart = this._loopStart),
                      (e._loopEnd = this._loopEnd),
                      (e.loop = t),
                      this._testLoopBoundries(e);
                  });
              },
            }),
            Object.defineProperty(t.Part.prototype, "loopEnd", {
              get: function () {
                return t.Ticks(this._loopEnd).toSeconds();
              },
              set: function (t) {
                (this._loopEnd = this.toTicks(t)),
                  this._loop &&
                    this._forEach(function (e) {
                      (e.loopEnd = t), this._testLoopBoundries(e);
                    });
              },
            }),
            Object.defineProperty(t.Part.prototype, "loopStart", {
              get: function () {
                return t.Ticks(this._loopStart).toSeconds();
              },
              set: function (t) {
                (this._loopStart = this.toTicks(t)),
                  this._loop &&
                    this._forEach(function (t) {
                      (t.loopStart = this.loopStart),
                        this._testLoopBoundries(t);
                    });
              },
            }),
            Object.defineProperty(t.Part.prototype, "playbackRate", {
              get: function () {
                return this._playbackRate;
              },
              set: function (t) {
                (this._playbackRate = t), this._setAll("playbackRate", t);
              },
            }),
            Object.defineProperty(t.Part.prototype, "length", {
              get: function () {
                return this._events.length;
              },
            }),
            (t.Part.prototype.dispose = function () {
              return (
                this.removeAll(),
                this._state.dispose(),
                (this._state = null),
                (this.callback = null),
                (this._events = null),
                this
              );
            }),
            t.Part
          );
        }),
        t(function (t) {
          return (
            (t.Pattern = function () {
              var e = t.defaults(
                arguments,
                ["callback", "values", "pattern"],
                t.Pattern
              );
              t.Loop.call(this, e),
                (this._pattern = new t.CtrlPattern({
                  values: e.values,
                  type: e.pattern,
                  index: e.index,
                }));
            }),
            t.extend(t.Pattern, t.Loop),
            (t.Pattern.defaults = {
              pattern: t.CtrlPattern.Type.Up,
              callback: t.noOp,
              values: [],
            }),
            (t.Pattern.prototype._tick = function (t) {
              this.callback(t, this._pattern.value), this._pattern.next();
            }),
            Object.defineProperty(t.Pattern.prototype, "index", {
              get: function () {
                return this._pattern.index;
              },
              set: function (t) {
                this._pattern.index = t;
              },
            }),
            Object.defineProperty(t.Pattern.prototype, "values", {
              get: function () {
                return this._pattern.values;
              },
              set: function (t) {
                this._pattern.values = t;
              },
            }),
            Object.defineProperty(t.Pattern.prototype, "value", {
              get: function () {
                return this._pattern.value;
              },
            }),
            Object.defineProperty(t.Pattern.prototype, "pattern", {
              get: function () {
                return this._pattern.type;
              },
              set: function (t) {
                this._pattern.type = t;
              },
            }),
            (t.Pattern.prototype.dispose = function () {
              t.Loop.prototype.dispose.call(this),
                this._pattern.dispose(),
                (this._pattern = null);
            }),
            t.Pattern
          );
        }),
        t(function (t) {
          return (
            (t.Sequence = function () {
              var e,
                i = t.defaults(
                  arguments,
                  ["callback", "events", "subdivision"],
                  t.Sequence
                ),
                n = i.events;
              if (
                (delete i.events,
                t.Part.call(this, i),
                (this._subdivision = this.toTicks(i.subdivision)),
                t.isUndef(i.loopEnd) &&
                  !t.isUndef(n) &&
                  (this._loopEnd = n.length * this._subdivision),
                (this._loop = !0),
                !t.isUndef(n))
              )
                for (e = 0; e < n.length; e++) this.add(e, n[e]);
            }),
            t.extend(t.Sequence, t.Part),
            (t.Sequence.defaults = { subdivision: "4n" }),
            Object.defineProperty(t.Sequence.prototype, "subdivision", {
              get: function () {
                return t.Ticks(this._subdivision).toSeconds();
              },
            }),
            (t.Sequence.prototype.at = function (e, i) {
              return (
                t.isArray(i) && this.remove(e),
                t.Part.prototype.at.call(this, this._indexTime(e), i)
              );
            }),
            (t.Sequence.prototype.add = function (e, i) {
              if (null === i) return this;
              if (t.isArray(i)) {
                var n = Math.round(this._subdivision / i.length);
                i = new t.Sequence(this._tick.bind(this), i, t.Ticks(n));
              }
              return (
                t.Part.prototype.add.call(this, this._indexTime(e), i), this
              );
            }),
            (t.Sequence.prototype.remove = function (e, i) {
              return (
                t.Part.prototype.remove.call(this, this._indexTime(e), i), this
              );
            }),
            (t.Sequence.prototype._indexTime = function (e) {
              return e instanceof t.TransportTime
                ? e
                : t.Ticks(e * this._subdivision + this.startOffset).toSeconds();
            }),
            (t.Sequence.prototype.dispose = function () {
              return t.Part.prototype.dispose.call(this), this;
            }),
            t.Sequence
          );
        }),
        t(function (t) {
          return (
            (t.PulseOscillator = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "width"],
                t.Oscillator
              );
              t.Source.call(this, e),
                (this.width = new t.Signal(e.width, t.Type.NormalRange)),
                (this._widthGate = new t.Gain()),
                (this._sawtooth = new t.Oscillator({
                  frequency: e.frequency,
                  detune: e.detune,
                  type: "sawtooth",
                  phase: e.phase,
                })),
                (this.frequency = this._sawtooth.frequency),
                (this.detune = this._sawtooth.detune),
                (this._thresh = new t.WaveShaper(function (t) {
                  return t < 0 ? -1 : 1;
                })),
                this._sawtooth.chain(this._thresh, this.output),
                this.width.chain(this._widthGate, this._thresh),
                this._readOnly(["width", "frequency", "detune"]);
            }),
            t.extend(t.PulseOscillator, t.Source),
            (t.PulseOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              width: 0.2,
            }),
            (t.PulseOscillator.prototype._start = function (t) {
              (t = this.toSeconds(t)),
                this._sawtooth.start(t),
                this._widthGate.gain.setValueAtTime(1, t);
            }),
            (t.PulseOscillator.prototype._stop = function (t) {
              (t = this.toSeconds(t)),
                this._sawtooth.stop(t),
                this._widthGate.gain.setValueAtTime(0, t);
            }),
            Object.defineProperty(t.PulseOscillator.prototype, "phase", {
              get: function () {
                return this._sawtooth.phase;
              },
              set: function (t) {
                this._sawtooth.phase = t;
              },
            }),
            Object.defineProperty(t.PulseOscillator.prototype, "type", {
              get: function () {
                return "pulse";
              },
            }),
            Object.defineProperty(t.PulseOscillator.prototype, "partials", {
              get: function () {
                return [];
              },
            }),
            (t.PulseOscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this._sawtooth.dispose(),
                (this._sawtooth = null),
                this._writable(["width", "frequency", "detune"]),
                this.width.dispose(),
                (this.width = null),
                this._widthGate.dispose(),
                (this._widthGate = null),
                this._thresh.dispose(),
                (this._thresh = null),
                (this.frequency = null),
                (this.detune = null),
                this
              );
            }),
            t.PulseOscillator
          );
        }),
        t(function (t) {
          return (
            (t.PWMOscillator = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "modulationFrequency"],
                t.PWMOscillator
              );
              t.Source.call(this, e),
                (this._pulse = new t.PulseOscillator(e.modulationFrequency)),
                (this._pulse._sawtooth.type = "sine"),
                (this._modulator = new t.Oscillator({
                  frequency: e.frequency,
                  detune: e.detune,
                  phase: e.phase,
                })),
                (this._scale = new t.Multiply(2)),
                (this.frequency = this._modulator.frequency),
                (this.detune = this._modulator.detune),
                (this.modulationFrequency = this._pulse.frequency),
                this._modulator.chain(this._scale, this._pulse.width),
                this._pulse.connect(this.output),
                this._readOnly(["modulationFrequency", "frequency", "detune"]);
            }),
            t.extend(t.PWMOscillator, t.Source),
            (t.PWMOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              modulationFrequency: 0.4,
            }),
            (t.PWMOscillator.prototype._start = function (t) {
              (t = this.toSeconds(t)),
                this._modulator.start(t),
                this._pulse.start(t);
            }),
            (t.PWMOscillator.prototype._stop = function (t) {
              (t = this.toSeconds(t)),
                this._modulator.stop(t),
                this._pulse.stop(t);
            }),
            Object.defineProperty(t.PWMOscillator.prototype, "type", {
              get: function () {
                return "pwm";
              },
            }),
            Object.defineProperty(t.PWMOscillator.prototype, "partials", {
              get: function () {
                return [];
              },
            }),
            Object.defineProperty(t.PWMOscillator.prototype, "phase", {
              get: function () {
                return this._modulator.phase;
              },
              set: function (t) {
                this._modulator.phase = t;
              },
            }),
            (t.PWMOscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this._pulse.dispose(),
                (this._pulse = null),
                this._scale.dispose(),
                (this._scale = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this._writable(["modulationFrequency", "frequency", "detune"]),
                (this.frequency = null),
                (this.detune = null),
                (this.modulationFrequency = null),
                this
              );
            }),
            t.PWMOscillator
          );
        }),
        t(function (t) {
          return (
            (t.FMOscillator = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "type", "modulationType"],
                t.FMOscillator
              );
              t.Source.call(this, e),
                (this._carrier = new t.Oscillator(e.frequency, e.type)),
                (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                (this.detune = this._carrier.detune),
                (this.detune.value = e.detune),
                (this.modulationIndex = new t.Multiply(e.modulationIndex)),
                (this.modulationIndex.units = t.Type.Positive),
                (this._modulator = new t.Oscillator(
                  e.frequency,
                  e.modulationType
                )),
                (this.harmonicity = new t.Multiply(e.harmonicity)),
                (this.harmonicity.units = t.Type.Positive),
                (this._modulationNode = new t.Gain(0)),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.frequency.chain(
                  this.modulationIndex,
                  this._modulationNode
                ),
                this._modulator.connect(this._modulationNode.gain),
                this._modulationNode.connect(this._carrier.frequency),
                this._carrier.connect(this.output),
                this.detune.connect(this._modulator.detune),
                (this.phase = e.phase),
                this._readOnly([
                  "modulationIndex",
                  "frequency",
                  "detune",
                  "harmonicity",
                ]);
            }),
            t.extend(t.FMOscillator, t.Source),
            (t.FMOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              modulationIndex: 2,
              modulationType: "square",
              harmonicity: 1,
            }),
            (t.FMOscillator.prototype._start = function (t) {
              (t = this.toSeconds(t)),
                this._modulator.start(t),
                this._carrier.start(t);
            }),
            (t.FMOscillator.prototype._stop = function (t) {
              (t = this.toSeconds(t)),
                this._modulator.stop(t),
                this._carrier.stop(t);
            }),
            Object.defineProperty(t.FMOscillator.prototype, "type", {
              get: function () {
                return this._carrier.type;
              },
              set: function (t) {
                this._carrier.type = t;
              },
            }),
            Object.defineProperty(t.FMOscillator.prototype, "modulationType", {
              get: function () {
                return this._modulator.type;
              },
              set: function (t) {
                this._modulator.type = t;
              },
            }),
            Object.defineProperty(t.FMOscillator.prototype, "phase", {
              get: function () {
                return this._carrier.phase;
              },
              set: function (t) {
                (this._carrier.phase = t), (this._modulator.phase = t);
              },
            }),
            Object.defineProperty(t.FMOscillator.prototype, "partials", {
              get: function () {
                return this._carrier.partials;
              },
              set: function (t) {
                this._carrier.partials = t;
              },
            }),
            (t.FMOscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this._writable([
                  "modulationIndex",
                  "frequency",
                  "detune",
                  "harmonicity",
                ]),
                this.frequency.dispose(),
                (this.frequency = null),
                (this.detune = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                this.modulationIndex.dispose(),
                (this.modulationIndex = null),
                this
              );
            }),
            t.FMOscillator
          );
        }),
        t(function (t) {
          return (
            (t.AMOscillator = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "type", "modulationType"],
                t.AMOscillator
              );
              t.Source.call(this, e),
                (this._carrier = new t.Oscillator(e.frequency, e.type)),
                (this.frequency = this._carrier.frequency),
                (this.detune = this._carrier.detune),
                (this.detune.value = e.detune),
                (this._modulator = new t.Oscillator(
                  e.frequency,
                  e.modulationType
                )),
                (this._modulationScale = new t.AudioToGain()),
                (this.harmonicity = new t.Multiply(e.harmonicity)),
                (this.harmonicity.units = t.Type.Positive),
                (this._modulationNode = new t.Gain(0)),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.detune.connect(this._modulator.detune),
                this._modulator.chain(
                  this._modulationScale,
                  this._modulationNode.gain
                ),
                this._carrier.chain(this._modulationNode, this.output),
                (this.phase = e.phase),
                this._readOnly(["frequency", "detune", "harmonicity"]);
            }),
            t.extend(t.AMOscillator, t.Oscillator),
            (t.AMOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              modulationType: "square",
              harmonicity: 1,
            }),
            (t.AMOscillator.prototype._start = function (t) {
              (t = this.toSeconds(t)),
                this._modulator.start(t),
                this._carrier.start(t);
            }),
            (t.AMOscillator.prototype._stop = function (t) {
              (t = this.toSeconds(t)),
                this._modulator.stop(t),
                this._carrier.stop(t);
            }),
            Object.defineProperty(t.AMOscillator.prototype, "type", {
              get: function () {
                return this._carrier.type;
              },
              set: function (t) {
                this._carrier.type = t;
              },
            }),
            Object.defineProperty(t.AMOscillator.prototype, "modulationType", {
              get: function () {
                return this._modulator.type;
              },
              set: function (t) {
                this._modulator.type = t;
              },
            }),
            Object.defineProperty(t.AMOscillator.prototype, "phase", {
              get: function () {
                return this._carrier.phase;
              },
              set: function (t) {
                (this._carrier.phase = t), (this._modulator.phase = t);
              },
            }),
            Object.defineProperty(t.AMOscillator.prototype, "partials", {
              get: function () {
                return this._carrier.partials;
              },
              set: function (t) {
                this._carrier.partials = t;
              },
            }),
            (t.AMOscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this._writable(["frequency", "detune", "harmonicity"]),
                (this.frequency = null),
                (this.detune = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                this._modulationScale.dispose(),
                (this._modulationScale = null),
                this
              );
            }),
            t.AMOscillator
          );
        }),
        t(function (t) {
          return (
            (t.FatOscillator = function () {
              var e = t.defaults(
                arguments,
                ["frequency", "type", "spread"],
                t.FatOscillator
              );
              t.Source.call(this, e),
                (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
                (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                (this._oscillators = []),
                (this._spread = e.spread),
                (this._type = e.type),
                (this._phase = e.phase),
                (this._partials = t.defaultArg(e.partials, [])),
                (this.count = e.count),
                this._readOnly(["frequency", "detune"]);
            }),
            t.extend(t.FatOscillator, t.Source),
            (t.FatOscillator.defaults = {
              frequency: 440,
              detune: 0,
              phase: 0,
              spread: 20,
              count: 3,
              type: "sawtooth",
            }),
            (t.FatOscillator.prototype._start = function (t) {
              (t = this.toSeconds(t)),
                this._forEach(function (e) {
                  e.start(t);
                });
            }),
            (t.FatOscillator.prototype._stop = function (t) {
              (t = this.toSeconds(t)),
                this._forEach(function (e) {
                  e.stop(t);
                });
            }),
            (t.FatOscillator.prototype._forEach = function (t) {
              for (var e = 0; e < this._oscillators.length; e++)
                t.call(this, this._oscillators[e], e);
            }),
            Object.defineProperty(t.FatOscillator.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (t) {
                (this._type = t),
                  this._forEach(function (e) {
                    e.type = t;
                  });
              },
            }),
            Object.defineProperty(t.FatOscillator.prototype, "spread", {
              get: function () {
                return this._spread;
              },
              set: function (t) {
                var e, i;
                (this._spread = t),
                  this._oscillators.length > 1 &&
                    ((e = -t / 2),
                    (i = t / (this._oscillators.length - 1)),
                    this._forEach(function (t, n) {
                      t.detune.value = e + i * n;
                    }));
              },
            }),
            Object.defineProperty(t.FatOscillator.prototype, "count", {
              get: function () {
                return this._oscillators.length;
              },
              set: function (e) {
                var i, n;
                if (((e = Math.max(e, 1)), this._oscillators.length !== e)) {
                  for (
                    this._forEach(function (t) {
                      t.dispose();
                    }),
                      this._oscillators = [],
                      i = 0;
                    i < e;
                    i++
                  )
                    (n = new t.Oscillator()),
                      this.type === t.Oscillator.Type.Custom
                        ? (n.partials = this._partials)
                        : (n.type = this._type),
                      (n.phase = this._phase),
                      (n.volume.value = -6 - 1.1 * e),
                      this.frequency.connect(n.frequency),
                      this.detune.connect(n.detune),
                      n.connect(this.output),
                      (this._oscillators[i] = n);
                  (this.spread = this._spread),
                    this.state === t.State.Started &&
                      this._forEach(function (t) {
                        t.start();
                      });
                }
              },
            }),
            Object.defineProperty(t.FatOscillator.prototype, "phase", {
              get: function () {
                return this._phase;
              },
              set: function (t) {
                (this._phase = t),
                  this._forEach(function (e) {
                    e.phase = t;
                  });
              },
            }),
            Object.defineProperty(t.FatOscillator.prototype, "partials", {
              get: function () {
                return this._partials;
              },
              set: function (e) {
                (this._partials = e),
                  (this._type = t.Oscillator.Type.Custom),
                  this._forEach(function (t) {
                    t.partials = e;
                  });
              },
            }),
            (t.FatOscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this._writable(["frequency", "detune"]),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                this._forEach(function (t) {
                  t.dispose();
                }),
                (this._oscillators = null),
                (this._partials = null),
                this
              );
            }),
            t.FatOscillator
          );
        }),
        t(function (t) {
          (t.OmniOscillator = function () {
            var e = t.defaults(
              arguments,
              ["frequency", "type"],
              t.OmniOscillator
            );
            t.Source.call(this, e),
              (this.frequency = new t.Signal(e.frequency, t.Type.Frequency)),
              (this.detune = new t.Signal(e.detune, t.Type.Cents)),
              (this._sourceType = void 0),
              (this._oscillator = null),
              (this.type = e.type),
              this._readOnly(["frequency", "detune"]),
              this.set(e);
          }),
            t.extend(t.OmniOscillator, t.Source),
            (t.OmniOscillator.defaults = {
              frequency: 440,
              detune: 0,
              type: "sine",
              phase: 0,
            });
          var e = {
            Pulse: "PulseOscillator",
            PWM: "PWMOscillator",
            Osc: "Oscillator",
            FM: "FMOscillator",
            AM: "AMOscillator",
            Fat: "FatOscillator",
          };
          return (
            (t.OmniOscillator.prototype._start = function (t) {
              this._oscillator.start(t);
            }),
            (t.OmniOscillator.prototype._stop = function (t) {
              this._oscillator.stop(t);
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "type", {
              get: function () {
                var t = "";
                return (
                  this._sourceType === e.FM
                    ? (t = "fm")
                    : this._sourceType === e.AM
                    ? (t = "am")
                    : this._sourceType === e.Fat && (t = "fat"),
                  t + this._oscillator.type
                );
              },
              set: function (t) {
                "fm" === t.substr(0, 2)
                  ? (this._createNewOscillator(e.FM),
                    (this._oscillator.type = t.substr(2)))
                  : "am" === t.substr(0, 2)
                  ? (this._createNewOscillator(e.AM),
                    (this._oscillator.type = t.substr(2)))
                  : "fat" === t.substr(0, 3)
                  ? (this._createNewOscillator(e.Fat),
                    (this._oscillator.type = t.substr(3)))
                  : "pwm" === t
                  ? this._createNewOscillator(e.PWM)
                  : "pulse" === t
                  ? this._createNewOscillator(e.Pulse)
                  : (this._createNewOscillator(e.Osc),
                    (this._oscillator.type = t));
              },
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "partials", {
              get: function () {
                return this._oscillator.partials;
              },
              set: function (t) {
                this._oscillator.partials = t;
              },
            }),
            (t.OmniOscillator.prototype.set = function (e, i) {
              return (
                "type" === e
                  ? (this.type = i)
                  : t.isObject(e) &&
                    e.hasOwnProperty("type") &&
                    (this.type = e.type),
                t.prototype.set.apply(this, arguments),
                this
              );
            }),
            (t.OmniOscillator.prototype._createNewOscillator = function (e) {
              var i, n, o;
              e !== this._sourceType &&
                ((this._sourceType = e),
                (i = t[e]),
                (n = this.now()),
                null !== this._oscillator &&
                  ((o = this._oscillator),
                  o.stop(n),
                  this.context.setTimeout(function () {
                    o.dispose(), (o = null);
                  }, this.blockTime)),
                (this._oscillator = new i()),
                this.frequency.connect(this._oscillator.frequency),
                this.detune.connect(this._oscillator.detune),
                this._oscillator.connect(this.output),
                this.state === t.State.Started && this._oscillator.start(n));
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "phase", {
              get: function () {
                return this._oscillator.phase;
              },
              set: function (t) {
                this._oscillator.phase = t;
              },
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "width", {
              get: function () {
                if (this._sourceType === e.Pulse) return this._oscillator.width;
              },
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "count", {
              get: function () {
                if (this._sourceType === e.Fat) return this._oscillator.count;
              },
              set: function (t) {
                this._sourceType === e.Fat && (this._oscillator.count = t);
              },
            }),
            Object.defineProperty(t.OmniOscillator.prototype, "spread", {
              get: function () {
                if (this._sourceType === e.Fat) return this._oscillator.spread;
              },
              set: function (t) {
                this._sourceType === e.Fat && (this._oscillator.spread = t);
              },
            }),
            Object.defineProperty(
              t.OmniOscillator.prototype,
              "modulationType",
              {
                get: function () {
                  if (this._sourceType === e.FM || this._sourceType === e.AM)
                    return this._oscillator.modulationType;
                },
                set: function (t) {
                  (this._sourceType !== e.FM && this._sourceType !== e.AM) ||
                    (this._oscillator.modulationType = t);
                },
              }
            ),
            Object.defineProperty(
              t.OmniOscillator.prototype,
              "modulationIndex",
              {
                get: function () {
                  if (this._sourceType === e.FM)
                    return this._oscillator.modulationIndex;
                },
              }
            ),
            Object.defineProperty(t.OmniOscillator.prototype, "harmonicity", {
              get: function () {
                if (this._sourceType === e.FM || this._sourceType === e.AM)
                  return this._oscillator.harmonicity;
              },
            }),
            Object.defineProperty(
              t.OmniOscillator.prototype,
              "modulationFrequency",
              {
                get: function () {
                  if (this._sourceType === e.PWM)
                    return this._oscillator.modulationFrequency;
                },
              }
            ),
            (t.OmniOscillator.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this._writable(["frequency", "detune"]),
                this.detune.dispose(),
                (this.detune = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this._oscillator.dispose(),
                (this._oscillator = null),
                (this._sourceType = null),
                this
              );
            }),
            t.OmniOscillator
          );
        }),
        t(function (t) {
          return (
            (t.Instrument = function (e) {
              (e = t.defaultArg(e, t.Instrument.defaults)),
                t.AudioNode.call(this),
                (this._volume = this.output = new t.Volume(e.volume)),
                (this.volume = this._volume.volume),
                this._readOnly("volume");
            }),
            t.extend(t.Instrument, t.AudioNode),
            (t.Instrument.defaults = { volume: 0 }),
            (t.Instrument.prototype.triggerAttack = t.noOp),
            (t.Instrument.prototype.triggerRelease = t.noOp),
            (t.Instrument.prototype.triggerAttackRelease = function (
              t,
              e,
              i,
              n
            ) {
              return (
                (i = this.toSeconds(i)),
                (e = this.toSeconds(e)),
                this.triggerAttack(t, i, n),
                this.triggerRelease(i + e),
                this
              );
            }),
            (t.Instrument.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._volume.dispose(),
                (this._volume = null),
                this._writable(["volume"]),
                (this.volume = null),
                this
              );
            }),
            t.Instrument
          );
        }),
        t(function (t) {
          return (
            (t.Monophonic = function (e) {
              (e = t.defaultArg(e, t.Monophonic.defaults)),
                t.Instrument.call(this, e),
                (this.portamento = e.portamento);
            }),
            t.extend(t.Monophonic, t.Instrument),
            (t.Monophonic.defaults = { portamento: 0 }),
            (t.Monophonic.prototype.triggerAttack = function (t, e, i) {
              return (
                (e = this.toSeconds(e)),
                this._triggerEnvelopeAttack(e, i),
                this.setNote(t, e),
                this
              );
            }),
            (t.Monophonic.prototype.triggerRelease = function (t) {
              return (
                (t = this.toSeconds(t)), this._triggerEnvelopeRelease(t), this
              );
            }),
            (t.Monophonic.prototype._triggerEnvelopeAttack = function () {}),
            (t.Monophonic.prototype._triggerEnvelopeRelease = function () {}),
            (t.Monophonic.prototype.setNote = function (t, e) {
              var i, n;
              return (
                (e = this.toSeconds(e)),
                this.portamento > 0
                  ? ((i = this.frequency.value),
                    this.frequency.setValueAtTime(i, e),
                    (n = this.toSeconds(this.portamento)),
                    this.frequency.exponentialRampToValueAtTime(t, e + n))
                  : this.frequency.setValueAtTime(t, e),
                this
              );
            }),
            t.Monophonic
          );
        }),
        t(function (t) {
          return (
            (t.Synth = function (e) {
              (e = t.defaultArg(e, t.Synth.defaults)),
                t.Monophonic.call(this, e),
                (this.oscillator = new t.OmniOscillator(e.oscillator)),
                (this.frequency = this.oscillator.frequency),
                (this.detune = this.oscillator.detune),
                (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                this.oscillator.chain(this.envelope, this.output),
                this.oscillator.start(),
                this._readOnly([
                  "oscillator",
                  "frequency",
                  "detune",
                  "envelope",
                ]);
            }),
            t.extend(t.Synth, t.Monophonic),
            (t.Synth.defaults = {
              oscillator: { type: "triangle" },
              envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 1 },
            }),
            (t.Synth.prototype._triggerEnvelopeAttack = function (t, e) {
              return this.envelope.triggerAttack(t, e), this;
            }),
            (t.Synth.prototype._triggerEnvelopeRelease = function (t) {
              return this.envelope.triggerRelease(t), this;
            }),
            (t.Synth.prototype.dispose = function () {
              return (
                t.Monophonic.prototype.dispose.call(this),
                this._writable([
                  "oscillator",
                  "frequency",
                  "detune",
                  "envelope",
                ]),
                this.oscillator.dispose(),
                (this.oscillator = null),
                this.envelope.dispose(),
                (this.envelope = null),
                (this.frequency = null),
                (this.detune = null),
                this
              );
            }),
            t.Synth
          );
        }),
        t(function (t) {
          return (
            (t.AMSynth = function (e) {
              (e = t.defaultArg(e, t.AMSynth.defaults)),
                t.Monophonic.call(this, e),
                (this._carrier = new t.Synth()),
                (this._carrier.volume.value = -10),
                (this.oscillator = this._carrier.oscillator),
                (this.envelope = this._carrier.envelope.set(e.envelope)),
                (this._modulator = new t.Synth()),
                (this._modulator.volume.value = -10),
                (this.modulation = this._modulator.oscillator.set(
                  e.modulation
                )),
                (this.modulationEnvelope = this._modulator.envelope.set(
                  e.modulationEnvelope
                )),
                (this.frequency = new t.Signal(440, t.Type.Frequency)),
                (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                (this.harmonicity = new t.Multiply(e.harmonicity)),
                (this.harmonicity.units = t.Type.Positive),
                (this._modulationScale = new t.AudioToGain()),
                (this._modulationNode = new t.Gain()),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.detune.fan(this._carrier.detune, this._modulator.detune),
                this._modulator.chain(
                  this._modulationScale,
                  this._modulationNode.gain
                ),
                this._carrier.chain(this._modulationNode, this.output),
                this._readOnly([
                  "frequency",
                  "harmonicity",
                  "oscillator",
                  "envelope",
                  "modulation",
                  "modulationEnvelope",
                  "detune",
                ]);
            }),
            t.extend(t.AMSynth, t.Monophonic),
            (t.AMSynth.defaults = {
              harmonicity: 3,
              detune: 0,
              oscillator: { type: "sine" },
              envelope: { attack: 0.01, decay: 0.01, sustain: 1, release: 0.5 },
              modulation: { type: "square" },
              modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5,
              },
            }),
            (t.AMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerAttack(t, e),
                this.modulationEnvelope.triggerAttack(t, e),
                this
              );
            }),
            (t.AMSynth.prototype._triggerEnvelopeRelease = function (t) {
              return (
                this.envelope.triggerRelease(t),
                this.modulationEnvelope.triggerRelease(t),
                this
              );
            }),
            (t.AMSynth.prototype.dispose = function () {
              return (
                t.Monophonic.prototype.dispose.call(this),
                this._writable([
                  "frequency",
                  "harmonicity",
                  "oscillator",
                  "envelope",
                  "modulation",
                  "modulationEnvelope",
                  "detune",
                ]),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._modulationScale.dispose(),
                (this._modulationScale = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                (this.oscillator = null),
                (this.envelope = null),
                (this.modulationEnvelope = null),
                (this.modulation = null),
                this
              );
            }),
            t.AMSynth
          );
        }),
        t(function (t) {
          return (
            (t.MonoSynth = function (e) {
              (e = t.defaultArg(e, t.MonoSynth.defaults)),
                t.Monophonic.call(this, e),
                (this.oscillator = new t.OmniOscillator(e.oscillator)),
                (this.frequency = this.oscillator.frequency),
                (this.detune = this.oscillator.detune),
                (this.filter = new t.Filter(e.filter)),
                (this.filterEnvelope = new t.FrequencyEnvelope(
                  e.filterEnvelope
                )),
                (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                this.oscillator.chain(this.filter, this.envelope, this.output),
                this.oscillator.start(),
                this.filterEnvelope.connect(this.filter.frequency),
                this._readOnly([
                  "oscillator",
                  "frequency",
                  "detune",
                  "filter",
                  "filterEnvelope",
                  "envelope",
                ]);
            }),
            t.extend(t.MonoSynth, t.Monophonic),
            (t.MonoSynth.defaults = {
              frequency: "C4",
              detune: 0,
              oscillator: { type: "square" },
              filter: { Q: 6, type: "lowpass", rolloff: -24 },
              envelope: { attack: 0.005, decay: 0.1, sustain: 0.9, release: 1 },
              filterEnvelope: {
                attack: 0.06,
                decay: 0.2,
                sustain: 0.5,
                release: 2,
                baseFrequency: 200,
                octaves: 7,
                exponent: 2,
              },
            }),
            (t.MonoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
              return (
                this.envelope.triggerAttack(t, e),
                this.filterEnvelope.triggerAttack(t),
                this
              );
            }),
            (t.MonoSynth.prototype._triggerEnvelopeRelease = function (t) {
              return (
                this.envelope.triggerRelease(t),
                this.filterEnvelope.triggerRelease(t),
                this
              );
            }),
            (t.MonoSynth.prototype.dispose = function () {
              return (
                t.Monophonic.prototype.dispose.call(this),
                this._writable([
                  "oscillator",
                  "frequency",
                  "detune",
                  "filter",
                  "filterEnvelope",
                  "envelope",
                ]),
                this.oscillator.dispose(),
                (this.oscillator = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this.filterEnvelope.dispose(),
                (this.filterEnvelope = null),
                this.filter.dispose(),
                (this.filter = null),
                (this.frequency = null),
                (this.detune = null),
                this
              );
            }),
            t.MonoSynth
          );
        }),
        t(function (t) {
          return (
            (t.DuoSynth = function (e) {
              (e = t.defaultArg(e, t.DuoSynth.defaults)),
                t.Monophonic.call(this, e),
                (this.voice0 = new t.MonoSynth(e.voice0)),
                (this.voice0.volume.value = -10),
                (this.voice1 = new t.MonoSynth(e.voice1)),
                (this.voice1.volume.value = -10),
                (this._vibrato = new t.LFO(e.vibratoRate, -50, 50)),
                this._vibrato.start(),
                (this.vibratoRate = this._vibrato.frequency),
                (this._vibratoGain = new t.Gain(
                  e.vibratoAmount,
                  t.Type.Positive
                )),
                (this.vibratoAmount = this._vibratoGain.gain),
                (this.frequency = new t.Signal(440, t.Type.Frequency)),
                (this.harmonicity = new t.Multiply(e.harmonicity)),
                (this.harmonicity.units = t.Type.Positive),
                this.frequency.connect(this.voice0.frequency),
                this.frequency.chain(this.harmonicity, this.voice1.frequency),
                this._vibrato.connect(this._vibratoGain),
                this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
                this.voice0.connect(this.output),
                this.voice1.connect(this.output),
                this._readOnly([
                  "voice0",
                  "voice1",
                  "frequency",
                  "vibratoAmount",
                  "vibratoRate",
                ]);
            }),
            t.extend(t.DuoSynth, t.Monophonic),
            (t.DuoSynth.defaults = {
              vibratoAmount: 0.5,
              vibratoRate: 5,
              harmonicity: 1.5,
              voice0: {
                volume: -10,
                portamento: 0,
                oscillator: { type: "sine" },
                filterEnvelope: {
                  attack: 0.01,
                  decay: 0,
                  sustain: 1,
                  release: 0.5,
                },
                envelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 },
              },
              voice1: {
                volume: -10,
                portamento: 0,
                oscillator: { type: "sine" },
                filterEnvelope: {
                  attack: 0.01,
                  decay: 0,
                  sustain: 1,
                  release: 0.5,
                },
                envelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 },
              },
            }),
            (t.DuoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
              return (
                (t = this.toSeconds(t)),
                this.voice0.envelope.triggerAttack(t, e),
                this.voice1.envelope.triggerAttack(t, e),
                this.voice0.filterEnvelope.triggerAttack(t),
                this.voice1.filterEnvelope.triggerAttack(t),
                this
              );
            }),
            (t.DuoSynth.prototype._triggerEnvelopeRelease = function (t) {
              return (
                this.voice0.triggerRelease(t),
                this.voice1.triggerRelease(t),
                this
              );
            }),
            (t.DuoSynth.prototype.dispose = function () {
              return (
                t.Monophonic.prototype.dispose.call(this),
                this._writable([
                  "voice0",
                  "voice1",
                  "frequency",
                  "vibratoAmount",
                  "vibratoRate",
                ]),
                this.voice0.dispose(),
                (this.voice0 = null),
                this.voice1.dispose(),
                (this.voice1 = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this._vibratoGain.dispose(),
                (this._vibratoGain = null),
                (this._vibrato = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this.vibratoAmount.dispose(),
                (this.vibratoAmount = null),
                (this.vibratoRate = null),
                this
              );
            }),
            t.DuoSynth
          );
        }),
        t(function (t) {
          return (
            (t.FMSynth = function (e) {
              (e = t.defaultArg(e, t.FMSynth.defaults)),
                t.Monophonic.call(this, e),
                (this._carrier = new t.Synth(e.carrier)),
                (this._carrier.volume.value = -10),
                (this.oscillator = this._carrier.oscillator),
                (this.envelope = this._carrier.envelope.set(e.envelope)),
                (this._modulator = new t.Synth(e.modulator)),
                (this._modulator.volume.value = -10),
                (this.modulation = this._modulator.oscillator.set(
                  e.modulation
                )),
                (this.modulationEnvelope = this._modulator.envelope.set(
                  e.modulationEnvelope
                )),
                (this.frequency = new t.Signal(440, t.Type.Frequency)),
                (this.detune = new t.Signal(e.detune, t.Type.Cents)),
                (this.harmonicity = new t.Multiply(e.harmonicity)),
                (this.harmonicity.units = t.Type.Positive),
                (this.modulationIndex = new t.Multiply(e.modulationIndex)),
                (this.modulationIndex.units = t.Type.Positive),
                (this._modulationNode = new t.Gain(0)),
                this.frequency.connect(this._carrier.frequency),
                this.frequency.chain(
                  this.harmonicity,
                  this._modulator.frequency
                ),
                this.frequency.chain(
                  this.modulationIndex,
                  this._modulationNode
                ),
                this.detune.fan(this._carrier.detune, this._modulator.detune),
                this._modulator.connect(this._modulationNode.gain),
                this._modulationNode.connect(this._carrier.frequency),
                this._carrier.connect(this.output),
                this._readOnly([
                  "frequency",
                  "harmonicity",
                  "modulationIndex",
                  "oscillator",
                  "envelope",
                  "modulation",
                  "modulationEnvelope",
                  "detune",
                ]);
            }),
            t.extend(t.FMSynth, t.Monophonic),
            (t.FMSynth.defaults = {
              harmonicity: 3,
              modulationIndex: 10,
              detune: 0,
              oscillator: { type: "sine" },
              envelope: { attack: 0.01, decay: 0.01, sustain: 1, release: 0.5 },
              modulation: { type: "square" },
              modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5,
              },
            }),
            (t.FMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerAttack(t, e),
                this.modulationEnvelope.triggerAttack(t),
                this
              );
            }),
            (t.FMSynth.prototype._triggerEnvelopeRelease = function (t) {
              return (
                (t = this.toSeconds(t)),
                this.envelope.triggerRelease(t),
                this.modulationEnvelope.triggerRelease(t),
                this
              );
            }),
            (t.FMSynth.prototype.dispose = function () {
              return (
                t.Monophonic.prototype.dispose.call(this),
                this._writable([
                  "frequency",
                  "harmonicity",
                  "modulationIndex",
                  "oscillator",
                  "envelope",
                  "modulation",
                  "modulationEnvelope",
                  "detune",
                ]),
                this._carrier.dispose(),
                (this._carrier = null),
                this._modulator.dispose(),
                (this._modulator = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this.detune.dispose(),
                (this.detune = null),
                this.modulationIndex.dispose(),
                (this.modulationIndex = null),
                this.harmonicity.dispose(),
                (this.harmonicity = null),
                this._modulationNode.dispose(),
                (this._modulationNode = null),
                (this.oscillator = null),
                (this.envelope = null),
                (this.modulationEnvelope = null),
                (this.modulation = null),
                this
              );
            }),
            t.FMSynth
          );
        }),
        t(function (t) {
          return (
            (t.MembraneSynth = function (e) {
              (e = t.defaultArg(e, t.MembraneSynth.defaults)),
                t.Instrument.call(this, e),
                (this.oscillator = new t.OmniOscillator(e.oscillator).start()),
                (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                (this.octaves = e.octaves),
                (this.pitchDecay = e.pitchDecay),
                this.oscillator.chain(this.envelope, this.output),
                this._readOnly(["oscillator", "envelope"]);
            }),
            t.extend(t.MembraneSynth, t.Instrument),
            (t.MembraneSynth.defaults = {
              pitchDecay: 0.05,
              octaves: 10,
              oscillator: { type: "sine" },
              envelope: {
                attack: 0.001,
                decay: 0.4,
                sustain: 0.01,
                release: 1.4,
                attackCurve: "exponential",
              },
            }),
            (t.MembraneSynth.prototype.triggerAttack = function (t, e, i) {
              (e = this.toSeconds(e)), (t = this.toFrequency(t));
              var n = t * this.octaves;
              return (
                this.oscillator.frequency.setValueAtTime(n, e),
                this.oscillator.frequency.exponentialRampToValueAtTime(
                  t,
                  e + this.toSeconds(this.pitchDecay)
                ),
                this.envelope.triggerAttack(e, i),
                this
              );
            }),
            (t.MembraneSynth.prototype.triggerRelease = function (t) {
              return this.envelope.triggerRelease(t), this;
            }),
            (t.MembraneSynth.prototype.dispose = function () {
              return (
                t.Instrument.prototype.dispose.call(this),
                this._writable(["oscillator", "envelope"]),
                this.oscillator.dispose(),
                (this.oscillator = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this
              );
            }),
            t.MembraneSynth
          );
        }),
        t(function (t) {
          var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
          return (
            (t.MetalSynth = function (i) {
              var n, o, s;
              for (
                i = t.defaultArg(i, t.MetalSynth.defaults),
                  t.Instrument.call(this, i),
                  this.frequency = new t.Signal(i.frequency, t.Type.Frequency),
                  this._oscillators = [],
                  this._freqMultipliers = [],
                  this._amplitue = new t.Gain(0).connect(this.output),
                  this._highpass = new t.Filter({
                    type: "highpass",
                    Q: -3.0102999566398125,
                  }).connect(this._amplitue),
                  this._octaves = i.octaves,
                  this._filterFreqScaler = new t.Scale(i.resonance, 7e3),
                  this.envelope = new t.Envelope({
                    attack: i.envelope.attack,
                    attackCurve: "linear",
                    decay: i.envelope.decay,
                    sustain: 0,
                    release: i.envelope.release,
                  }).chain(this._filterFreqScaler, this._highpass.frequency),
                  this.envelope.connect(this._amplitue.gain),
                  n = 0;
                n < e.length;
                n++
              )
                (o = new t.FMOscillator({
                  type: "square",
                  modulationType: "square",
                  harmonicity: i.harmonicity,
                  modulationIndex: i.modulationIndex,
                })),
                  o.connect(this._highpass).start(),
                  (this._oscillators[n] = o),
                  (s = new t.Multiply(e[n])),
                  (this._freqMultipliers[n] = s),
                  this.frequency.chain(s, o.frequency);
              this.octaves = i.octaves;
            }),
            t.extend(t.MetalSynth, t.Instrument),
            (t.MetalSynth.defaults = {
              frequency: 200,
              envelope: { attack: 0.001, decay: 1.4, release: 0.2 },
              harmonicity: 5.1,
              modulationIndex: 32,
              resonance: 4e3,
              octaves: 1.5,
            }),
            (t.MetalSynth.prototype.triggerAttack = function (e, i) {
              return (
                (e = this.toSeconds(e)),
                (i = t.defaultArg(i, 1)),
                this.envelope.triggerAttack(e, i),
                this
              );
            }),
            (t.MetalSynth.prototype.triggerRelease = function (t) {
              return (
                (t = this.toSeconds(t)), this.envelope.triggerRelease(t), this
              );
            }),
            (t.MetalSynth.prototype.triggerAttackRelease = function (t, e, i) {
              return (
                (e = this.toSeconds(e)),
                (t = this.toSeconds(t)),
                this.triggerAttack(e, i),
                this.triggerRelease(e + t),
                this
              );
            }),
            Object.defineProperty(t.MetalSynth.prototype, "modulationIndex", {
              get: function () {
                return this._oscillators[0].modulationIndex.value;
              },
              set: function (t) {
                for (var e = 0; e < this._oscillators.length; e++)
                  this._oscillators[e].modulationIndex.value = t;
              },
            }),
            Object.defineProperty(t.MetalSynth.prototype, "harmonicity", {
              get: function () {
                return this._oscillators[0].harmonicity.value;
              },
              set: function (t) {
                for (var e = 0; e < this._oscillators.length; e++)
                  this._oscillators[e].harmonicity.value = t;
              },
            }),
            Object.defineProperty(t.MetalSynth.prototype, "resonance", {
              get: function () {
                return this._filterFreqScaler.min;
              },
              set: function (t) {
                (this._filterFreqScaler.min = t),
                  (this.octaves = this._octaves);
              },
            }),
            Object.defineProperty(t.MetalSynth.prototype, "octaves", {
              get: function () {
                return this._octaves;
              },
              set: function (t) {
                (this._octaves = t),
                  (this._filterFreqScaler.max =
                    this._filterFreqScaler.min * Math.pow(2, t));
              },
            }),
            (t.MetalSynth.prototype.dispose = function () {
              t.Instrument.prototype.dispose.call(this);
              for (var e = 0; e < this._oscillators.length; e++)
                this._oscillators[e].dispose(),
                  this._freqMultipliers[e].dispose();
              (this._oscillators = null),
                (this._freqMultipliers = null),
                this.frequency.dispose(),
                (this.frequency = null),
                this._filterFreqScaler.dispose(),
                (this._filterFreqScaler = null),
                this._amplitue.dispose(),
                (this._amplitue = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this._highpass.dispose(),
                (this._highpass = null);
            }),
            t.MetalSynth
          );
        }),
        t(function (t) {
          return (
            (t.BufferSource = function () {
              var e = t.defaults(
                arguments,
                ["buffer", "onload"],
                t.BufferSource
              );
              t.AudioNode.call(this),
                (this.onended = e.onended),
                (this._startTime = -1),
                (this._stopTime = -1),
                (this._gainNode = this.output = new t.Gain()),
                (this._source = this.context.createBufferSource()),
                this._source.connect(this._gainNode),
                (this._buffer = new t.Buffer(e.buffer, e.onload)),
                (this.playbackRate = new t.Param(
                  this._source.playbackRate,
                  t.Type.Positive
                )),
                (this.fadeIn = e.fadeIn),
                (this.fadeOut = e.fadeOut),
                (this.curve = e.curve),
                (this._gain = 1),
                (this._onendedTimeout = -1),
                (this.loop = e.loop),
                (this.loopStart = e.loopStart),
                (this.loopEnd = e.loopEnd),
                (this.playbackRate.value = e.playbackRate);
            }),
            t.extend(t.BufferSource, t.AudioNode),
            (t.BufferSource.defaults = {
              onended: t.noOp,
              onload: t.noOp,
              loop: !1,
              loopStart: 0,
              loopEnd: 0,
              fadeIn: 0,
              fadeOut: 0,
              curve: "linear",
              playbackRate: 1,
            }),
            Object.defineProperty(t.BufferSource.prototype, "state", {
              get: function () {
                var e = this.now();
                return -1 !== this._startTime &&
                  e >= this._startTime &&
                  e < this._stopTime
                  ? t.State.Started
                  : t.State.Stopped;
              },
            }),
            (t.BufferSource.prototype.start = function (e, i, n, o, s) {
              var r, a, l, u;
              if (-1 !== this._startTime)
                throw new Error("Tone.BufferSource can only be started once.");
              if (!this.buffer.loaded)
                throw new Error(
                  "Tone.BufferSource: buffer is either not set or not loaded."
                );
              return (
                (e = this.toSeconds(e)),
                (i = this.loop
                  ? t.defaultArg(i, this.loopStart)
                  : t.defaultArg(i, 0)),
                (i = this.toSeconds(i)),
                (o = t.defaultArg(o, 1)),
                (this._gain = o),
                (s = this.toSeconds(t.defaultArg(s, this.fadeIn))),
                (this.fadeIn = s),
                s > 0
                  ? (this._gainNode.gain.setValueAtTime(0, e),
                    "linear" === this.curve
                      ? this._gainNode.gain.linearRampToValueAtTime(
                          this._gain,
                          e + s
                        )
                      : this._gainNode.gain.exponentialAppraochValueAtTime(
                          this._gain,
                          e,
                          s
                        ))
                  : this._gainNode.gain.setValueAtTime(o, e),
                (this._startTime = e),
                (r = this.toSeconds(
                  t.defaultArg(
                    n,
                    this.buffer.duration - (i % this.buffer.duration)
                  )
                )),
                (r = Math.max(r, 0)),
                (!this.loop || (this.loop && !t.isUndef(n))) &&
                  (this.loop ||
                    (r = Math.min(
                      r,
                      this.buffer.duration - (i % this.buffer.duration)
                    )),
                  this.stop(e + r, this.fadeOut)),
                this.loop &&
                  ((a = this.loopEnd || this.buffer.duration),
                  (l = this.loopStart),
                  (u = a - l),
                  i > a && (i = ((i - l) % u) + l)),
                (this._source.buffer = this.buffer.get()),
                (this._source.loopEnd = this.loopEnd || this.buffer.duration),
                t.isPast(e),
                this._source.start(e, i),
                this
              );
            }),
            (t.BufferSource.prototype.stop = function (e, i) {
              var n, o;
              if (!this.buffer.loaded)
                throw new Error(
                  "Tone.BufferSource: buffer is either not set or not loaded."
                );
              if (
                ((e = this.toSeconds(e)),
                -1 === this._stopTime || this._stopTime > e)
              ) {
                if (e <= this._startTime)
                  return (
                    this._gainNode.gain.cancelScheduledValues(e),
                    (this._gainNode.gain.value = 0),
                    this
                  );
                (e = Math.max(
                  this._startTime + this.fadeIn + this.sampleTime,
                  e
                )),
                  this._gainNode.gain.cancelScheduledValues(e),
                  (this._stopTime = e),
                  (i = this.toSeconds(t.defaultArg(i, this.fadeOut))),
                  (n = e - this._startTime - this.fadeIn - this.sampleTime),
                  this.loop || (n = Math.min(n, this.buffer.duration)),
                  (i = Math.min(n, i)),
                  (o = e - i),
                  i > this.sampleTime
                    ? (this._gainNode.gain.setValueAtTime(this._gain, o),
                      "linear" === this.curve
                        ? this._gainNode.gain.linearRampToValueAtTime(0, e)
                        : this._gainNode.gain.exponentialAppraochValueAtTime(
                            0,
                            o,
                            i
                          ))
                    : this._gainNode.gain.setValueAtTime(0, e),
                  t.context.clearTimeout(this._onendedTimeout),
                  (this._onendedTimeout = t.context.setTimeout(
                    this._onended.bind(this),
                    this._stopTime - this.now()
                  ));
              }
              return this;
            }),
            (t.BufferSource.prototype._onended = function () {
              var t = "exponential" === this.curve ? 2 * this.fadeOut : 0;
              this._source.stop(this._stopTime + t), this.onended(this);
            }),
            Object.defineProperty(t.BufferSource.prototype, "loopStart", {
              get: function () {
                return this._source.loopStart;
              },
              set: function (t) {
                this._source.loopStart = this.toSeconds(t);
              },
            }),
            Object.defineProperty(t.BufferSource.prototype, "loopEnd", {
              get: function () {
                return this._source.loopEnd;
              },
              set: function (t) {
                this._source.loopEnd = this.toSeconds(t);
              },
            }),
            Object.defineProperty(t.BufferSource.prototype, "buffer", {
              get: function () {
                return this._buffer;
              },
              set: function (t) {
                this._buffer.set(t);
              },
            }),
            Object.defineProperty(t.BufferSource.prototype, "loop", {
              get: function () {
                return this._source.loop;
              },
              set: function (t) {
                this._source.loop = t;
              },
            }),
            (t.BufferSource.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                (this.onended = null),
                this._source.disconnect(),
                (this._source = null),
                this._gainNode.dispose(),
                (this._gainNode = null),
                this._buffer.dispose(),
                (this._buffer = null),
                (this._startTime = -1),
                (this.playbackRate = null),
                t.context.clearTimeout(this._onendedTimeout),
                this
              );
            }),
            t.BufferSource
          );
        }),
        t(function (t) {
          function e() {
            for (var e in o) s[e] = new t.Buffer().fromArray(o[e]);
          }
          var i, n, o, s;
          return (
            (t.Noise = function () {
              var e = t.defaults(arguments, ["type"], t.Noise);
              t.Source.call(this, e),
                (this._source = null),
                (this._type = e.type),
                (this._playbackRate = e.playbackRate);
            }),
            t.extend(t.Noise, t.Source),
            (t.Noise.defaults = { type: "white", playbackRate: 1 }),
            Object.defineProperty(t.Noise.prototype, "type", {
              get: function () {
                return this._type;
              },
              set: function (e) {
                if (this._type !== e) {
                  if (!(e in s))
                    throw new TypeError("Tone.Noise: invalid type: " + e);
                  if (((this._type = e), this.state === t.State.Started)) {
                    var i = this.now();
                    this._stop(i), this._start(i);
                  }
                }
              },
            }),
            Object.defineProperty(t.Noise.prototype, "playbackRate", {
              get: function () {
                return this._playbackRate;
              },
              set: function (t) {
                (this._playbackRate = t),
                  this._source && (this._source.playbackRate.value = t);
              },
            }),
            (t.Noise.prototype._start = function (e) {
              var i = s[this._type];
              (this._source = new t.BufferSource(i).connect(this.output)),
                (this._source.loop = !0),
                (this._source.playbackRate.value = this._playbackRate),
                this._source.start(
                  this.toSeconds(e),
                  Math.random() * (i.duration - 0.001)
                );
            }),
            (t.Noise.prototype._stop = function (t) {
              this._source &&
                (this._source.stop(this.toSeconds(t)), (this._source = null));
            }),
            (t.Noise.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                null !== this._source &&
                  (this._source.disconnect(), (this._source = null)),
                (this._buffer = null),
                this
              );
            }),
            (i = 220500),
            (n = 2),
            (o = {
              pink: (function () {
                var t,
                  e,
                  o,
                  s,
                  r,
                  a,
                  l,
                  u,
                  c,
                  h,
                  p,
                  d = [];
                for (t = 0; t < n; t++)
                  for (
                    e = new Float32Array(i),
                      d[t] = e,
                      o = s = r = a = l = u = c = 0,
                      h = 0;
                    h < i;
                    h++
                  )
                    (p = 2 * Math.random() - 1),
                      (o = 0.99886 * o + 0.0555179 * p),
                      (s = 0.99332 * s + 0.0750759 * p),
                      (r = 0.969 * r + 0.153852 * p),
                      (a = 0.8665 * a + 0.3104856 * p),
                      (l = 0.55 * l + 0.5329522 * p),
                      (u = -0.7616 * u - 0.016898 * p),
                      (e[h] = o + s + r + a + l + u + c + 0.5362 * p),
                      (e[h] *= 0.11),
                      (c = 0.115926 * p);
                return d;
              })(),
              brown: (function () {
                var t,
                  e,
                  o,
                  s,
                  r,
                  a = [];
                for (t = 0; t < n; t++)
                  for (
                    e = new Float32Array(i), a[t] = e, o = 0, s = 0;
                    s < i;
                    s++
                  )
                    (r = 2 * Math.random() - 1),
                      (e[s] = (o + 0.02 * r) / 1.02),
                      (o = e[s]),
                      (e[s] *= 3.5);
                return a;
              })(),
              white: (function () {
                var t,
                  e,
                  o,
                  s = [];
                for (t = 0; t < n; t++)
                  for (e = new Float32Array(i), s[t] = e, o = 0; o < i; o++)
                    e[o] = 2 * Math.random() - 1;
                return s;
              })(),
            }),
            (s = {}),
            t.getContext(e),
            t.Context.on("init", e),
            t.Noise
          );
        }),
        t(function (t) {
          return (
            (t.NoiseSynth = function (e) {
              (e = t.defaultArg(e, t.NoiseSynth.defaults)),
                t.Instrument.call(this, e),
                (this.noise = new t.Noise()),
                (this.envelope = new t.AmplitudeEnvelope(e.envelope)),
                this.noise.chain(this.envelope, this.output),
                this.noise.start(),
                this._readOnly(["noise", "envelope"]);
            }),
            t.extend(t.NoiseSynth, t.Instrument),
            (t.NoiseSynth.defaults = {
              noise: { type: "white" },
              envelope: { attack: 0.005, decay: 0.1, sustain: 0 },
            }),
            (t.NoiseSynth.prototype.triggerAttack = function (t, e) {
              return this.envelope.triggerAttack(t, e), this;
            }),
            (t.NoiseSynth.prototype.triggerRelease = function (t) {
              return this.envelope.triggerRelease(t), this;
            }),
            (t.NoiseSynth.prototype.triggerAttackRelease = function (t, e, i) {
              return (
                (e = this.toSeconds(e)),
                (t = this.toSeconds(t)),
                this.triggerAttack(e, i),
                this.triggerRelease(e + t),
                this
              );
            }),
            (t.NoiseSynth.prototype.dispose = function () {
              return (
                t.Instrument.prototype.dispose.call(this),
                this._writable(["noise", "envelope"]),
                this.noise.dispose(),
                (this.noise = null),
                this.envelope.dispose(),
                (this.envelope = null),
                this
              );
            }),
            t.NoiseSynth
          );
        }),
        t(function (t) {
          return (
            (t.PluckSynth = function (e) {
              (e = t.defaultArg(e, t.PluckSynth.defaults)),
                t.Instrument.call(this, e),
                (this._noise = new t.Noise("pink")),
                (this.attackNoise = e.attackNoise),
                (this._lfcf = new t.LowpassCombFilter({
                  resonance: e.resonance,
                  dampening: e.dampening,
                })),
                (this.resonance = this._lfcf.resonance),
                (this.dampening = this._lfcf.dampening),
                this._noise.connect(this._lfcf),
                this._lfcf.connect(this.output),
                this._readOnly(["resonance", "dampening"]);
            }),
            t.extend(t.PluckSynth, t.Instrument),
            (t.PluckSynth.defaults = {
              attackNoise: 1,
              dampening: 4e3,
              resonance: 0.9,
            }),
            (t.PluckSynth.prototype.triggerAttack = function (t, e) {
              (t = this.toFrequency(t)), (e = this.toSeconds(e));
              var i = 1 / t;
              return (
                this._lfcf.delayTime.setValueAtTime(i, e),
                this._noise.start(e),
                this._noise.stop(e + i * this.attackNoise),
                this
              );
            }),
            (t.PluckSynth.prototype.dispose = function () {
              return (
                t.Instrument.prototype.dispose.call(this),
                this._noise.dispose(),
                this._lfcf.dispose(),
                (this._noise = null),
                (this._lfcf = null),
                this._writable(["resonance", "dampening"]),
                (this.dampening = null),
                (this.resonance = null),
                this
              );
            }),
            t.PluckSynth
          );
        }),
        t(function (t) {
          return (
            (t.PolySynth = function () {
              var e,
                i,
                n = t.defaults(arguments, ["polyphony", "voice"], t.PolySynth);
              for (
                t.Instrument.call(this, n),
                  n = t.defaultArg(n, t.Instrument.defaults),
                  n.polyphony = Math.min(
                    t.PolySynth.MAX_POLYPHONY,
                    n.polyphony
                  ),
                  this.voices = new Array(n.polyphony),
                  this._triggers = new Array(n.polyphony),
                  this.detune = new t.Signal(n.detune, t.Type.Cents),
                  this._readOnly("detune"),
                  e = 0;
                e < n.polyphony;
                e++
              ) {
                if (
                  !(
                    (i = new n.voice(arguments[2], arguments[3])) instanceof
                    t.Monophonic
                  )
                )
                  throw new Error(
                    "Synth constructor must be instance of Tone.Monophonic"
                  );
                (this.voices[e] = i),
                  i.connect(this.output),
                  i.hasOwnProperty("detune") && this.detune.connect(i.detune),
                  (this._triggers[e] = { release: -1, note: null, voice: i });
              }
            }),
            t.extend(t.PolySynth, t.Instrument),
            (t.PolySynth.defaults = {
              polyphony: 4,
              volume: 0,
              detune: 0,
              voice: t.Synth,
            }),
            (t.PolySynth.prototype.triggerAttack = function (t, e, i) {
              var n, o, s, r;
              for (
                Array.isArray(t) || (t = [t]), e = this.toSeconds(e), n = 0;
                n < t.length;
                n++
              ) {
                for (
                  o = t[n], s = this._triggers[0], r = 1;
                  r < this._triggers.length;
                  r++
                )
                  this._triggers[r].release < s.release &&
                    (s = this._triggers[r]);
                (s.release = 1 / 0),
                  (s.note = JSON.stringify(o)),
                  s.voice.triggerAttack(o, e, i);
              }
              return this;
            }),
            (t.PolySynth.prototype.triggerAttackRelease = function (
              e,
              i,
              n,
              o
            ) {
              var s, r;
              if (
                ((n = this.toSeconds(n)),
                this.triggerAttack(e, n, o),
                t.isArray(i) && t.isArray(e))
              )
                for (s = 0; s < e.length; s++)
                  (r = i[Math.min(s, i.length - 1)]),
                    this.triggerRelease(e[s], n + this.toSeconds(r));
              else this.triggerRelease(e, n + this.toSeconds(i));
              return this;
            }),
            (t.PolySynth.prototype.triggerRelease = function (t, e) {
              var i, n, o, s;
              for (
                Array.isArray(t) || (t = [t]), e = this.toSeconds(e), i = 0;
                i < t.length;
                i++
              )
                for (
                  n = JSON.stringify(t[i]), o = 0;
                  o < this._triggers.length;
                  o++
                )
                  (s = this._triggers[o]),
                    s.note === n &&
                      s.release > e &&
                      (s.voice.triggerRelease(e), (s.release = e));
              return this;
            }),
            (t.PolySynth.prototype.set = function (t, e, i) {
              for (var n = 0; n < this.voices.length; n++)
                this.voices[n].set(t, e, i);
              return this;
            }),
            (t.PolySynth.prototype.get = function (t) {
              return this.voices[0].get(t);
            }),
            (t.PolySynth.prototype.releaseAll = function (t) {
              var e, i;
              for (t = this.toSeconds(t), e = 0; e < this._triggers.length; e++)
                (i = this._triggers[e]),
                  i.release > t && ((i.release = t), i.voice.triggerRelease(t));
              return this;
            }),
            (t.PolySynth.prototype.dispose = function () {
              t.Instrument.prototype.dispose.call(this);
              for (var e = 0; e < this.voices.length; e++)
                this.voices[e].dispose(), (this.voices[e] = null);
              return (
                this._writable("detune"),
                this.detune.dispose(),
                (this.detune = null),
                (this.voices = null),
                (this._triggers = null),
                this
              );
            }),
            (t.PolySynth.MAX_POLYPHONY = 20),
            t.PolySynth
          );
        }),
        t(function (t) {
          return (
            (t.Sampler = function (e) {
              var i,
                n,
                o,
                s,
                r = Array.prototype.slice.call(arguments);
              r.shift(),
                (i = t.defaults(r, ["onload", "baseUrl"], t.Sampler)),
                t.Instrument.call(this, i),
                (n = {});
              for (o in e)
                if (t.isNote(o)) (s = t.Frequency(o).toMidi()), (n[s] = e[o]);
                else {
                  if (isNaN(parseFloat(o)))
                    throw new Error(
                      "Tone.Sampler: url keys must be the note's pitch"
                    );
                  n[o] = e[o];
                }
              (this._buffers = new t.Buffers(n, i.onload, i.baseUrl)),
                (this._activeSources = {}),
                (this.attack = i.attack),
                (this.release = i.release);
            }),
            t.extend(t.Sampler, t.Instrument),
            (t.Sampler.defaults = {
              attack: 0,
              release: 0.1,
              onload: t.noOp,
              baseUrl: "",
            }),
            (t.Sampler.prototype._findClosest = function (t) {
              for (var e = 0; e < 24; ) {
                if (this._buffers.has(t + e)) return -e;
                if (this._buffers.has(t - e)) return e;
                e++;
              }
              return null;
            }),
            (t.Sampler.prototype.triggerAttack = function (e, i, n) {
              var o,
                s,
                r,
                a = t.Frequency(e).toMidi(),
                l = this._findClosest(a);
              return (
                null !== l &&
                  ((o = a - l),
                  (s = this._buffers.get(o)),
                  (r = new t.BufferSource({
                    buffer: s,
                    playbackRate: t.intervalToFrequencyRatio(l),
                    fadeIn: this.attack,
                    fadeOut: this.release,
                    curve: "exponential",
                  }).connect(this.output)),
                  r.start(i, 0, s.duration, n),
                  t.isArray(this._activeSources[a]) ||
                    (this._activeSources[a] = []),
                  this._activeSources[a].push({ note: a, source: r })),
                this
              );
            }),
            (t.Sampler.prototype.triggerRelease = function (e, i) {
              var n,
                o = t.Frequency(e).toMidi();
              return (
                this._activeSources[o] &&
                  this._activeSources[o].length &&
                  ((n = this._activeSources[o].shift().source),
                  (i = this.toSeconds(i)),
                  n.stop(i + this.release, this.release)),
                this
              );
            }),
            (t.Sampler.prototype.releaseAll = function (t) {
              var e, i, n;
              t = this.toSeconds(t);
              for (e in this._activeSources)
                for (i = this._activeSources[e]; i.length; )
                  (n = i.shift().source),
                    n.stop(t + this.release, this.release);
              return this;
            }),
            (t.Sampler.prototype.triggerAttackRelease = function (t, e, i, n) {
              return (
                (i = this.toSeconds(i)),
                (e = this.toSeconds(e)),
                this.triggerAttack(t, i, n),
                this.triggerRelease(t, i + e),
                this
              );
            }),
            (t.Sampler.prototype.add = function (e, i, n) {
              if (t.isNote(e)) {
                var o = t.Frequency(e).toMidi();
                this._buffers.add(o, i, n);
              } else {
                if (isNaN(parseFloat(e)))
                  throw new Error(
                    "Tone.Sampler: note must be the note's pitch. Instead got " +
                      e
                  );
                this._buffers.add(e, i, n);
              }
            }),
            Object.defineProperty(t.Sampler.prototype, "loaded", {
              get: function () {
                return this._buffers.loaded;
              },
            }),
            (t.Sampler.prototype.dispose = function () {
              t.Instrument.prototype.dispose.call(this),
                this._buffers.dispose(),
                (this._buffers = null);
              for (var e in this._activeSources)
                this._activeSources[e].forEach(function (t) {
                  t.source.dispose();
                });
              return (this._activeSources = null), this;
            }),
            t.Sampler
          );
        }),
        t(function (t) {
          t.supported &&
            (OscillatorNode.prototype.setPeriodicWave ||
              (OscillatorNode.prototype.setPeriodicWave =
                OscillatorNode.prototype.setWaveTable),
            AudioContext.prototype.createPeriodicWave ||
              (AudioContext.prototype.createPeriodicWave =
                AudioContext.prototype.createWaveTable));
        }),
        t(function (t) {
          return (
            (t.GainToAudio = function () {
              t.SignalBase.call(this),
                (this._norm =
                  this.input =
                  this.output =
                    new t.WaveShaper(function (t) {
                      return 2 * Math.abs(t) - 1;
                    }));
            }),
            t.extend(t.GainToAudio, t.SignalBase),
            (t.GainToAudio.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._norm.dispose(),
                (this._norm = null),
                this
              );
            }),
            t.GainToAudio
          );
        }),
        t(function (t) {
          return (
            (t.Normalize = function (e, i) {
              t.SignalBase.call(this),
                (this._inputMin = t.defaultArg(e, 0)),
                (this._inputMax = t.defaultArg(i, 1)),
                (this._sub = this.input = new t.Add(0)),
                (this._div = this.output = new t.Multiply(1)),
                this._sub.connect(this._div),
                this._setRange();
            }),
            t.extend(t.Normalize, t.SignalBase),
            Object.defineProperty(t.Normalize.prototype, "min", {
              get: function () {
                return this._inputMin;
              },
              set: function (t) {
                (this._inputMin = t), this._setRange();
              },
            }),
            Object.defineProperty(t.Normalize.prototype, "max", {
              get: function () {
                return this._inputMax;
              },
              set: function (t) {
                (this._inputMax = t), this._setRange();
              },
            }),
            (t.Normalize.prototype._setRange = function () {
              (this._sub.value = -this._inputMin),
                (this._div.value = 1 / (this._inputMax - this._inputMin));
            }),
            (t.Normalize.prototype.dispose = function () {
              return (
                t.SignalBase.prototype.dispose.call(this),
                this._sub.dispose(),
                (this._sub = null),
                this._div.dispose(),
                (this._div = null),
                this
              );
            }),
            t.Normalize
          );
        }),
        t(function (t) {
          return (
            (t.TransportTimelineSignal = function () {
              t.TimelineSignal.apply(this, arguments),
                (this.output = this._outputSig = new t.Signal(this._initial)),
                (this._lastVal = this.value),
                (this._synced = t.Transport.scheduleRepeat(
                  this._onTick.bind(this),
                  "1i"
                )),
                (this._bindAnchorValue = this._anchorValue.bind(this)),
                t.Transport.on("start stop pause", this._bindAnchorValue),
                (this._events.memory = 1 / 0);
            }),
            t.extend(t.TransportTimelineSignal, t.TimelineSignal),
            (t.TransportTimelineSignal.prototype._onTick = function (e) {
              var i = this.getValueAtTime(t.Transport.seconds);
              this._lastVal !== i &&
                ((this._lastVal = i),
                this._outputSig.linearRampToValueAtTime(i, e));
            }),
            (t.TransportTimelineSignal.prototype._anchorValue = function (e) {
              var i = this.getValueAtTime(t.Transport.ticks);
              return (
                (this._lastVal = i),
                this._outputSig.cancelScheduledValues(e),
                this._outputSig.setValueAtTime(i, e),
                this
              );
            }),
            (t.TransportTimelineSignal.prototype.getValueAtTime = function (e) {
              return (
                (e = this.toTicks(e)),
                t.TimelineSignal.prototype.getValueAtTime.call(this, e)
              );
            }),
            (t.TransportTimelineSignal.prototype.setValueAtTime = function (
              e,
              i
            ) {
              return (
                (i = this.toTicks(i)),
                t.TimelineSignal.prototype.setValueAtTime.call(this, e, i),
                this
              );
            }),
            (t.TransportTimelineSignal.prototype.linearRampToValueAtTime =
              function (e, i) {
                return (
                  (i = this.toTicks(i)),
                  t.TimelineSignal.prototype.linearRampToValueAtTime.call(
                    this,
                    e,
                    i
                  ),
                  this
                );
              }),
            (t.TransportTimelineSignal.prototype.exponentialRampToValueAtTime =
              function (e, i) {
                return (
                  (i = this.toTicks(i)),
                  t.TimelineSignal.prototype.exponentialRampToValueAtTime.call(
                    this,
                    e,
                    i
                  ),
                  this
                );
              }),
            (t.TransportTimelineSignal.prototype.setTargetAtTime = function (
              e,
              i,
              n
            ) {
              return (
                (i = this.toTicks(i)),
                t.TimelineSignal.prototype.setTargetAtTime.call(this, e, i, n),
                this
              );
            }),
            (t.TransportTimelineSignal.prototype.cancelScheduledValues =
              function (e) {
                return (
                  (e = this.toTicks(e)),
                  t.TimelineSignal.prototype.cancelScheduledValues.call(
                    this,
                    e
                  ),
                  this
                );
              }),
            (t.TransportTimelineSignal.prototype.setValueCurveAtTime =
              function (e, i, n, o) {
                return (
                  (i = this.toTicks(i)),
                  (n = this.toTicks(n)),
                  t.TimelineSignal.prototype.setValueCurveAtTime.call(
                    this,
                    e,
                    i,
                    n,
                    o
                  ),
                  this
                );
              }),
            (t.TransportTimelineSignal.prototype.dispose = function () {
              t.Transport.clear(this._synced),
                t.Transport.off("start stop pause", this._syncedCallback),
                this._events.cancel(0),
                t.TimelineSignal.prototype.dispose.call(this),
                this._outputSig.dispose(),
                (this._outputSig = null);
            }),
            t.TransportTimelineSignal
          );
        }),
        t(function (t) {
          return (
            (t.GrainPlayer = function () {
              var e = t.defaults(arguments, ["url", "onload"], t.GrainPlayer);
              t.Source.call(this, e),
                (this.buffer = new t.Buffer(e.url, e.onload)),
                (this._clock = new t.Clock(this._tick.bind(this), e.grainSize)),
                (this._loopStart = 0),
                (this._loopEnd = 0),
                (this._activeSources = []),
                (this._playbackRate = e.playbackRate),
                (this._grainSize = e.grainSize),
                (this._overlap = e.overlap),
                (this.detune = e.detune),
                (this.overlap = e.overlap),
                (this.loop = e.loop),
                (this.playbackRate = e.playbackRate),
                (this.grainSize = e.grainSize),
                (this.loopStart = e.loopStart),
                (this.loopEnd = e.loopEnd),
                (this.reverse = e.reverse),
                this._clock.on("stop", this._onstop.bind(this));
            }),
            t.extend(t.GrainPlayer, t.Source),
            (t.GrainPlayer.defaults = {
              onload: t.noOp,
              overlap: 0.1,
              grainSize: 0.2,
              playbackRate: 1,
              detune: 0,
              loop: !1,
              loopStart: 0,
              loopEnd: 0,
              reverse: !1,
            }),
            (t.GrainPlayer.prototype._start = function (e, i, n) {
              (i = t.defaultArg(i, 0)),
                (i = this.toSeconds(i)),
                (e = this.toSeconds(e)),
                (this._offset = i),
                this._clock.start(e),
                n && this.stop(e + this.toSeconds(n));
            }),
            (t.GrainPlayer.prototype._stop = function (t) {
              this._clock.stop(t);
            }),
            (t.GrainPlayer.prototype._onstop = function (t) {
              this._activeSources.forEach(function (e) {
                e.stop(t, 0);
              });
            }),
            (t.GrainPlayer.prototype._tick = function (e) {
              var i = this._offset < this._overlap ? 0 : this._overlap,
                n = new t.BufferSource({
                  buffer: this.buffer,
                  fadeIn: i,
                  fadeOut: this._overlap,
                  loop: this.loop,
                  loopStart: this._loopStart,
                  loopEnd: this._loopEnd,
                  playbackRate: t.intervalToFrequencyRatio(this.detune / 100),
                }).connect(this.output);
              n.start(e, this._offset),
                (this._offset += this.grainSize),
                n.stop(e + this.grainSize),
                this._activeSources.push(n),
                (n.onended = function () {
                  var t = this._activeSources.indexOf(n);
                  -1 !== t && this._activeSources.splice(t, 1);
                }.bind(this));
            }),
            (t.GrainPlayer.prototype.seek = function (t, e) {
              return (
                (this._offset = this.toSeconds(t)),
                this._tick(this.toSeconds(e)),
                this
              );
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "playbackRate", {
              get: function () {
                return this._playbackRate;
              },
              set: function (t) {
                (this._playbackRate = t), (this.grainSize = this._grainSize);
              },
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "loopStart", {
              get: function () {
                return this._loopStart;
              },
              set: function (t) {
                this._loopStart = this.toSeconds(t);
              },
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "loopEnd", {
              get: function () {
                return this._loopEnd;
              },
              set: function (t) {
                this._loopEnd = this.toSeconds(t);
              },
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "reverse", {
              get: function () {
                return this.buffer.reverse;
              },
              set: function (t) {
                this.buffer.reverse = t;
              },
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "grainSize", {
              get: function () {
                return this._grainSize;
              },
              set: function (t) {
                (this._grainSize = this.toSeconds(t)),
                  (this._clock.frequency.value =
                    this._playbackRate / this._grainSize);
              },
            }),
            Object.defineProperty(t.GrainPlayer.prototype, "overlap", {
              get: function () {
                return this._overlap;
              },
              set: function (t) {
                this._overlap = this.toSeconds(t);
              },
            }),
            (t.GrainPlayer.prototype.dispose = function () {
              return (
                t.Source.prototype.dispose.call(this),
                this.buffer.dispose(),
                (this.buffer = null),
                this._clock.dispose(),
                (this._clock = null),
                this._activeSources.forEach(function (t) {
                  t.dispose();
                }),
                (this._activeSources = null),
                this
              );
            }),
            t.GrainPlayer
          );
        }),
        t(function (t) {
          return (
            (t.Player = function (e) {
              var i;
              e instanceof t.Buffer && e.loaded
                ? ((e = e.get()), (i = t.Player.defaults))
                : (i = t.defaults(arguments, ["url", "onload"], t.Player)),
                t.Source.call(this, i),
                (this.autostart = i.autostart),
                (this._buffer = new t.Buffer({
                  url: i.url,
                  onload: this._onload.bind(this, i.onload),
                  reverse: i.reverse,
                })),
                e instanceof AudioBuffer && this._buffer.set(e),
                (this._loop = i.loop),
                (this._loopStart = i.loopStart),
                (this._loopEnd = i.loopEnd),
                (this._playbackRate = i.playbackRate),
                (this.retrigger = i.retrigger),
                (this.fadeIn = i.fadeIn),
                (this.fadeOut = i.fadeOut);
            }),
            t.extend(t.Player, t.Source),
            (t.Player.defaults = {
              onload: t.noOp,
              playbackRate: 1,
              loop: !1,
              autostart: !1,
              loopStart: 0,
              loopEnd: 0,
              retrigger: !1,
              reverse: !1,
              fadeIn: 0,
              fadeOut: 0,
            }),
            (t.Player.prototype.load = function (t, e) {
              return this._buffer.load(t, this._onload.bind(this, e));
            }),
            (t.Player.prototype._onload = function (e) {
              (e = t.defaultArg(e, t.noOp)),
                e(this),
                this.autostart && this.start();
            }),
            (t.Player.prototype._start = function (e, i, n) {
              var o, s;
              return (
                (i = this._loop
                  ? t.defaultArg(i, this._loopStart)
                  : t.defaultArg(i, 0)),
                (i = this.toSeconds(i)),
                (n = t.defaultArg(n, Math.max(this._buffer.duration - i, 0))),
                (n = this.toSeconds(n)),
                (e = this.toSeconds(e)),
                (o = new t.BufferSource({
                  buffer: this._buffer,
                  loop: this._loop,
                  loopStart: this._loopStart,
                  loopEnd: this._loopEnd,
                  playbackRate: this._playbackRate,
                  fadeIn: this.fadeIn,
                  fadeOut: this.fadeOut,
                }).connect(this.output)),
                this._loop ||
                  this._synced ||
                  this._state.setStateAtTime(t.State.Stopped, e + n),
                (s = this._state.get(e)),
                (s.source = o),
                this._loop ? o.start(e, i) : o.start(e, i, n),
                this
              );
            }),
            (t.Player.prototype._stop = function (t) {
              var e, i;
              return (
                (t = this.toSeconds(t)),
                (e = this._state.get(t)),
                (i = e ? e.time : 0),
                (i = this.retrigger ? 0 : i),
                this._state.forEachFrom(i, function (e) {
                  e.source && e.source.stop(t);
                }),
                this
              );
            }),
            (t.Player.prototype.seek = function (e, i) {
              return (
                (i = this.toSeconds(i)),
                this._state.getValueAtTime(i) === t.State.Started &&
                  ((e = this.toSeconds(e)), this._stop(i), this._start(i, e)),
                this
              );
            }),
            (t.Player.prototype.setLoopPoints = function (t, e) {
              return (this.loopStart = t), (this.loopEnd = e), this;
            }),
            Object.defineProperty(t.Player.prototype, "loopStart", {
              get: function () {
                return this._loopStart;
              },
              set: function (e) {
                this._loopStart = e;
                var i = this._state.get(t.now());
                i && i.source && (i.source.loopStart = this.toSeconds(e));
              },
            }),
            Object.defineProperty(t.Player.prototype, "loopEnd", {
              get: function () {
                return this._loopEnd;
              },
              set: function (e) {
                this._loopEnd = e;
                var i = this._state.get(t.now());
                i && i.source && (i.source.loopEnd = this.toSeconds(e));
              },
            }),
            Object.defineProperty(t.Player.prototype, "buffer", {
              get: function () {
                return this._buffer;
              },
              set: function (t) {
                this._buffer.set(t);
              },
            }),
            Object.defineProperty(t.Player.prototype, "loop", {
              get: function () {
                return this._loop;
              },
              set: function (e) {
                this._loop = e;
                var i = this._state.get(t.now());
                i && i.source && (i.source.loop = e);
              },
            }),
            Object.defineProperty(t.Player.prototype, "playbackRate", {
              get: function () {
                return this._playbackRate;
              },
              set: function (e) {
                this._playbackRate = e;
                var i = this._state.get(t.now());
                i && i.source && (i.source.playbackRate.value = e);
              },
            }),
            Object.defineProperty(t.Player.prototype, "reverse", {
              get: function () {
                return this._buffer.reverse;
              },
              set: function (t) {
                this._buffer.reverse = t;
              },
            }),
            Object.defineProperty(t.Player.prototype, "loaded", {
              get: function () {
                return this._buffer.loaded;
              },
            }),
            (t.Player.prototype.dispose = function () {
              return (
                this._state.forEach(function (t) {
                  t.source && (t.source.disconnect(), (t.source = null));
                }),
                t.Source.prototype.dispose.call(this),
                this._buffer.dispose(),
                (this._buffer = null),
                this
              );
            }),
            t.Player
          );
        }),
        t(function (t) {
          return (
            (t.Players = function (e) {
              var i,
                n,
                o = Array.prototype.slice.call(arguments);
              o.shift(),
                (i = t.defaults(o, ["onload"], t.Players)),
                t.call(this),
                (this._volume = this.output = new t.Volume(i.volume)),
                (this.volume = this._volume.volume),
                this._readOnly("volume"),
                (this._volume.output.output.channelCount = 2),
                (this._volume.output.output.channelCountMode = "explicit"),
                (this.mute = i.mute),
                (this._players = {}),
                (this._loadingCount = 0),
                (this._fadeIn = i.fadeIn),
                (this._fadeOut = i.fadeOut);
              for (n in e)
                this._loadingCount++,
                  this.add(n, e[n], this._bufferLoaded.bind(this, i.onload));
            }),
            t.extend(t.Players, t.AudioNode),
            (t.Players.defaults = {
              volume: 0,
              mute: !1,
              onload: t.noOp,
              fadeIn: 0,
              fadeOut: 0,
            }),
            (t.Players.prototype._bufferLoaded = function (t) {
              0 == --this._loadingCount && t && t(this);
            }),
            Object.defineProperty(t.Players.prototype, "mute", {
              get: function () {
                return this._volume.mute;
              },
              set: function (t) {
                this._volume.mute = t;
              },
            }),
            Object.defineProperty(t.Players.prototype, "fadeIn", {
              get: function () {
                return this._fadeIn;
              },
              set: function (t) {
                (this._fadeIn = t),
                  this._forEach(function (e) {
                    e.fadeIn = t;
                  });
              },
            }),
            Object.defineProperty(t.Players.prototype, "fadeOut", {
              get: function () {
                return this._fadeOut;
              },
              set: function (t) {
                (this._fadeOut = t),
                  this._forEach(function (e) {
                    e.fadeOut = t;
                  });
              },
            }),
            Object.defineProperty(t.Players.prototype, "state", {
              get: function () {
                var e = !1;
                return (
                  this._forEach(function (i) {
                    e = e || i.state === t.State.Started;
                  }),
                  e ? t.State.Started : t.State.Stopped
                );
              },
            }),
            (t.Players.prototype.has = function (t) {
              return this._players.hasOwnProperty(t);
            }),
            (t.Players.prototype.get = function (t) {
              if (this.has(t)) return this._players[t];
              throw new Error("Tone.Players: no player named " + t);
            }),
            (t.Players.prototype._forEach = function (t) {
              for (var e in this._players) t(this._players[e], e);
              return this;
            }),
            Object.defineProperty(t.Players.prototype, "loaded", {
              get: function () {
                var t = !0;
                return (
                  this._forEach(function (e) {
                    t = t && e.loaded;
                  }),
                  t
                );
              },
            }),
            (t.Players.prototype.add = function (e, i, n) {
              return (
                (this._players[e] = new t.Player(i, n).connect(this.output)),
                (this._players[e].fadeIn = this._fadeIn),
                (this._players[e].fadeOut = this._fadeOut),
                this
              );
            }),
            (t.Players.prototype.stopAll = function (t) {
              this._forEach(function (e) {
                e.stop(t);
              });
            }),
            (t.Players.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this._volume.dispose(),
                (this._volume = null),
                this._writable("volume"),
                (this.volume = null),
                (this.output = null),
                this._forEach(function (t) {
                  t.dispose();
                }),
                (this._players = null),
                this
              );
            }),
            t.Players
          );
        }),
        t(function (t) {
          return (
            (t.UserMedia = function () {
              var e = t.defaults(arguments, ["volume"], t.UserMedia);
              t.AudioNode.call(this),
                (this._mediaStream = null),
                (this._stream = null),
                (this._device = null),
                (this._volume = this.output = new t.Volume(e.volume)),
                (this.volume = this._volume.volume),
                this._readOnly("volume"),
                (this.mute = e.mute);
            }),
            t.extend(t.UserMedia, t.AudioNode),
            (t.UserMedia.defaults = { volume: 0, mute: !1 }),
            (t.UserMedia.prototype.open = function (e) {
              return t.UserMedia.enumerateDevices().then(
                function (i) {
                  var n, o;
                  if (t.isNumber(e)) n = i[e];
                  else if (
                    !(n = i.find(function (t) {
                      return t.label === e || t.deviceId === e;
                    })) &&
                    i.length > 0
                  )
                    n = i[0];
                  else if (!n && !t.isUndef(e))
                    throw new Error("Tone.UserMedia: no matching device: " + e);
                  return (
                    (this._device = n),
                    (o = {
                      audio: {
                        echoCancellation: !1,
                        sampleRate: this.context.sampleRate,
                      },
                    }),
                    n && (o.audio.deviceId = n.deviceId),
                    navigator.mediaDevices.getUserMedia(o).then(
                      function (t) {
                        return (
                          this._stream ||
                            ((this._stream = t),
                            (this._mediaStream =
                              this.context.createMediaStreamSource(t)),
                            this._mediaStream.connect(this.output)),
                          this
                        );
                      }.bind(this)
                    )
                  );
                }.bind(this)
              );
            }),
            (t.UserMedia.prototype.close = function () {
              return (
                this._stream &&
                  (this._stream.getAudioTracks().forEach(function (t) {
                    t.stop();
                  }),
                  (this._stream = null),
                  this._mediaStream.disconnect(),
                  (this._mediaStream = null)),
                (this._device = null),
                this
              );
            }),
            (t.UserMedia.enumerateDevices = function () {
              return navigator.mediaDevices
                .enumerateDevices()
                .then(function (t) {
                  return t.filter(function (t) {
                    return "audioinput" === t.kind;
                  });
                });
            }),
            Object.defineProperty(t.UserMedia.prototype, "state", {
              get: function () {
                return this._stream && this._stream.active
                  ? t.State.Started
                  : t.State.Stopped;
              },
            }),
            Object.defineProperty(t.UserMedia.prototype, "deviceId", {
              get: function () {
                if (this._device) return this._device.deviceId;
              },
            }),
            Object.defineProperty(t.UserMedia.prototype, "groupId", {
              get: function () {
                if (this._device) return this._device.groupId;
              },
            }),
            Object.defineProperty(t.UserMedia.prototype, "label", {
              get: function () {
                if (this._device) return this._device.label;
              },
            }),
            Object.defineProperty(t.UserMedia.prototype, "mute", {
              get: function () {
                return this._volume.mute;
              },
              set: function (t) {
                this._volume.mute = t;
              },
            }),
            (t.UserMedia.prototype.dispose = function () {
              return (
                t.AudioNode.prototype.dispose.call(this),
                this.close(),
                this._writable("volume"),
                this._volume.dispose(),
                (this._volume = null),
                (this.volume = null),
                this
              );
            }),
            Object.defineProperty(t.UserMedia, "supported", {
              get: function () {
                return (
                  !t.isUndef(navigator.mediaDevices) &&
                  t.isFunction(navigator.mediaDevices.getUserMedia)
                );
              },
            }),
            t.UserMedia
          );
        }),
        t(function (t) {
          return (
            (t.Midi = function (e, i) {
              if (!(this instanceof t.Midi)) return new t.Midi(e, i);
              t.Frequency.call(this, e, i);
            }),
            t.extend(t.Midi, t.Frequency),
            (t.Midi.prototype._defaultUnits = "midi"),
            (t.Midi.prototype._frequencyToUnits = function (e) {
              return t.Frequency.ftom(
                t.Frequency.prototype._frequencyToUnits.call(this, e)
              );
            }),
            (t.Midi.prototype._ticksToUnits = function (e) {
              return t.Frequency.ftom(
                t.Frequency.prototype._ticksToUnits.call(this, e)
              );
            }),
            (t.Midi.prototype._beatsToUnits = function (e) {
              return t.Frequency.ftom(
                t.Frequency.prototype._beatsToUnits.call(this, e)
              );
            }),
            (t.Midi.prototype._secondsToUnits = function (e) {
              return t.Frequency.ftom(
                t.Frequency.prototype._secondsToUnits.call(this, e)
              );
            }),
            (t.Midi.prototype.toMidi = function () {
              return this.valueOf();
            }),
            (t.Midi.prototype.toFrequency = function () {
              return t.Frequency.mtof(this.toMidi());
            }),
            t.Midi
          );
        }),
        e
      );
    });
  },
  function (t, e, i) {
    var n, o, s;
    /**
     *  StartAudioContext.js
     *  @author Yotam Mann
     *  @license http://opensource.org/licenses/MIT MIT License
     *  @copyright 2016 Yotam Mann
     */
    !(function (i, r) {
      (o = []),
        (n = r),
        void 0 !== (s = "function" == typeof n ? n.apply(e, o) : n) &&
          (t.exports = s);
    })(0, function () {
      function t(t) {
        var e = t.createBuffer(1, 1, t.sampleRate),
          i = t.createBufferSource();
        (i.buffer = e),
          i.connect(t.destination),
          i.start(0),
          t.resume && t.resume();
      }
      function e(t) {
        return "running" === t.state;
      }
      function i(t, i) {
        function n() {
          e(t) ? i() : (requestAnimationFrame(n), t.resume && t.resume());
        }
        e(t) ? i() : n();
      }
      function n(t, e, i) {
        if (Array.isArray(t) || (NodeList && t instanceof NodeList))
          for (var o = 0; o < t.length; o++) n(t[o], e, i);
        else if ("string" == typeof t) n(document.querySelectorAll(t), e, i);
        else if (t.jquery && "function" == typeof t.toArray)
          n(t.toArray(), e, i);
        else if (Element && t instanceof Element) {
          var r = new s(t, i);
          e.push(r);
        }
      }
      function o(t, e, o) {
        var s = new Promise(function (e) {
            i(t, e);
          }),
          r = [];
        return (
          e || (e = document.body),
          n(e, r, t),
          s.then(function () {
            for (var t = 0; t < r.length; t++) r[t].dispose();
            (r = null), o && o();
          }),
          s
        );
      }
      var s = function (t, e) {
        (this._dragged = !1),
          (this._element = t),
          (this._bindedMove = this._moved.bind(this)),
          (this._bindedEnd = this._ended.bind(this, e)),
          t.addEventListener("touchstart", this._bindedEnd),
          t.addEventListener("touchmove", this._bindedMove),
          t.addEventListener("touchend", this._bindedEnd),
          t.addEventListener("mouseup", this._bindedEnd);
      };
      return (
        (s.prototype._moved = function (t) {
          this._dragged = !0;
        }),
        (s.prototype._ended = function (e) {
          this._dragged || t(e), (this._dragged = !1);
        }),
        (s.prototype.dispose = function () {
          this._element.removeEventListener("touchstart", this._bindedEnd),
            this._element.removeEventListener("touchmove", this._bindedMove),
            this._element.removeEventListener("touchend", this._bindedEnd),
            this._element.removeEventListener("mouseup", this._bindedEnd),
            (this._bindedMove = null),
            (this._bindedEnd = null),
            (this._element = null);
        }),
        o
      );
    });
  },
  function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return a;
    });
    var n = i(5),
      o = i.n(n),
      s = i(4),
      r = i.n(s),
      a = [
        { name: "template", path: "/", component: r.a },
        { name: "welcome", path: "/welcome", component: o.a },
      ];
  },
  function (t, e, i) {
    function n(t) {
      i(23), i(21);
    }
    var o = i(2)(i(12), i(19), n, null, null);
    t.exports = o.exports;
  },
  function (t, e, i) {
    "use strict";
    function n(t, e) {}
    function o(t) {
      return Object.prototype.toString.call(t).indexOf("Error") > -1;
    }
    function s(t, e) {
      switch (typeof e) {
        case "undefined":
          return;
        case "object":
          return e;
        case "function":
          return e(t);
        case "boolean":
          return e ? t.params : void 0;
      }
    }
    function r(t, e, i) {
      void 0 === e && (e = {});
      var n,
        o = i || a;
      try {
        n = o(t || "");
      } catch (t) {
        n = {};
      }
      for (var s in e) {
        var r = e[s];
        n[s] = Array.isArray(r) ? r.slice() : r;
      }
      return n;
    }
    function a(t) {
      var e = {};
      return (t = t.trim().replace(/^(\?|#|&)/, ""))
        ? (t.split("&").forEach(function (t) {
            var i = t.replace(/\+/g, " ").split("="),
              n = Et(i.shift()),
              o = i.length > 0 ? Et(i.join("=")) : null;
            void 0 === e[n]
              ? (e[n] = o)
              : Array.isArray(e[n])
              ? e[n].push(o)
              : (e[n] = [e[n], o]);
          }),
          e)
        : e;
    }
    function l(t) {
      var e = t
        ? Object.keys(t)
            .map(function (e) {
              var i = t[e];
              if (void 0 === i) return "";
              if (null === i) return Mt(e);
              if (Array.isArray(i)) {
                var n = [];
                return (
                  i.forEach(function (t) {
                    void 0 !== t &&
                      (null === t
                        ? n.push(Mt(e))
                        : n.push(Mt(e) + "=" + Mt(t)));
                  }),
                  n.join("&")
                );
              }
              return Mt(e) + "=" + Mt(i);
            })
            .filter(function (t) {
              return t.length > 0;
            })
            .join("&")
        : null;
      return e ? "?" + e : "";
    }
    function u(t, e, i, n) {
      var o = n && n.options.stringifyQuery,
        s = {
          name: e.name || (t && t.name),
          meta: (t && t.meta) || {},
          path: e.path || "/",
          hash: e.hash || "",
          query: e.query || {},
          params: e.params || {},
          fullPath: h(e, o),
          matched: t ? c(t) : [],
        };
      return i && (s.redirectedFrom = h(i, o)), Object.freeze(s);
    }
    function c(t) {
      for (var e = []; t; ) e.unshift(t), (t = t.parent);
      return e;
    }
    function h(t, e) {
      var i = t.path,
        n = t.query;
      void 0 === n && (n = {});
      var o = t.hash;
      void 0 === o && (o = "");
      var s = e || l;
      return (i || "/") + s(n) + o;
    }
    function p(t, e) {
      return e === Dt
        ? t === e
        : !!e &&
            (t.path && e.path
              ? t.path.replace(qt, "") === e.path.replace(qt, "") &&
                t.hash === e.hash &&
                d(t.query, e.query)
              : !(!t.name || !e.name) &&
                t.name === e.name &&
                t.hash === e.hash &&
                d(t.query, e.query) &&
                d(t.params, e.params));
    }
    function d(t, e) {
      void 0 === t && (t = {}), void 0 === e && (e = {});
      var i = Object.keys(t),
        n = Object.keys(e);
      return (
        i.length === n.length &&
        i.every(function (i) {
          var n = t[i],
            o = e[i];
          return "object" == typeof n && "object" == typeof o
            ? d(n, o)
            : String(n) === String(o);
        })
      );
    }
    function f(t, e) {
      return (
        0 === t.path.replace(qt, "/").indexOf(e.path.replace(qt, "/")) &&
        (!e.hash || t.hash === e.hash) &&
        m(t.query, e.query)
      );
    }
    function m(t, e) {
      for (var i in e) if (!(i in t)) return !1;
      return !0;
    }
    function y(t) {
      if (
        !(
          t.metaKey ||
          t.altKey ||
          t.ctrlKey ||
          t.shiftKey ||
          t.defaultPrevented ||
          (void 0 !== t.button && 0 !== t.button)
        )
      ) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
          if (/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))
            return;
        }
        return t.preventDefault && t.preventDefault(), !0;
      }
    }
    function _(t) {
      if (t)
        for (var e, i = 0; i < t.length; i++) {
          if (((e = t[i]), "a" === e.tag)) return e;
          if (e.children && (e = _(e.children))) return e;
        }
    }
    function v(t) {
      if (!v.installed) {
        (v.installed = !0), (Ot = t);
        var e = function (t) {
            return void 0 !== t;
          },
          i = function (t, i) {
            var n = t.$options._parentVnode;
            e(n) &&
              e((n = n.data)) &&
              e((n = n.registerRouteInstance)) &&
              n(t, i);
          };
        t.mixin({
          beforeCreate: function () {
            e(this.$options.router)
              ? ((this._routerRoot = this),
                (this._router = this.$options.router),
                this._router.init(this),
                t.util.defineReactive(
                  this,
                  "_route",
                  this._router.history.current
                ))
              : (this._routerRoot =
                  (this.$parent && this.$parent._routerRoot) || this),
              i(this, this);
          },
          destroyed: function () {
            i(this);
          },
        }),
          Object.defineProperty(t.prototype, "$router", {
            get: function () {
              return this._routerRoot._router;
            },
          }),
          Object.defineProperty(t.prototype, "$route", {
            get: function () {
              return this._routerRoot._route;
            },
          }),
          t.component("router-view", Ct),
          t.component("router-link", jt);
        var n = t.config.optionMergeStrategies;
        n.beforeRouteEnter =
          n.beforeRouteLeave =
          n.beforeRouteUpdate =
            n.created;
      }
    }
    function g(t, e, i) {
      var n = t.charAt(0);
      if ("/" === n) return t;
      if ("?" === n || "#" === n) return e + t;
      var o = e.split("/");
      (i && o[o.length - 1]) || o.pop();
      for (var s = t.replace(/^\//, "").split("/"), r = 0; r < s.length; r++) {
        var a = s[r];
        ".." === a ? o.pop() : "." !== a && o.push(a);
      }
      return "" !== o[0] && o.unshift(""), o.join("/");
    }
    function b(t) {
      var e = "",
        i = "",
        n = t.indexOf("#");
      n >= 0 && ((e = t.slice(n)), (t = t.slice(0, n)));
      var o = t.indexOf("?");
      return (
        o >= 0 && ((i = t.slice(o + 1)), (t = t.slice(0, o))),
        { path: t, query: i, hash: e }
      );
    }
    function S(t) {
      return t.replace(/\/\//g, "/");
    }
    function x(t, e) {
      for (
        var i, n = [], o = 0, s = 0, r = "", a = (e && e.delimiter) || "/";
        null != (i = Ht.exec(t));

      ) {
        var l = i[0],
          u = i[1],
          c = i.index;
        if (((r += t.slice(s, c)), (s = c + l.length), u)) r += u[1];
        else {
          var h = t[s],
            p = i[2],
            d = i[3],
            f = i[4],
            m = i[5],
            y = i[6],
            _ = i[7];
          r && (n.push(r), (r = ""));
          var v = null != p && null != h && h !== p,
            g = "+" === y || "*" === y,
            b = "?" === y || "*" === y,
            S = i[2] || a,
            x = f || m;
          n.push({
            name: d || o++,
            prefix: p || "",
            delimiter: S,
            optional: b,
            repeat: g,
            partial: v,
            asterisk: !!_,
            pattern: x ? P(x) : _ ? ".*" : "[^" + A(S) + "]+?",
          });
        }
      }
      return s < t.length && (r += t.substr(s)), r && n.push(r), n;
    }
    function w(t, e) {
      return k(x(t, e));
    }
    function T(t) {
      return encodeURI(t).replace(/[\/?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function F(t) {
      return encodeURI(t).replace(/[?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function k(t) {
      for (var e = new Array(t.length), i = 0; i < t.length; i++)
        "object" == typeof t[i] &&
          (e[i] = new RegExp("^(?:" + t[i].pattern + ")$"));
      return function (i, n) {
        for (
          var o = "",
            s = i || {},
            r = n || {},
            a = r.pretty ? T : encodeURIComponent,
            l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l];
          if ("string" != typeof u) {
            var c,
              h = s[u.name];
            if (null == h) {
              if (u.optional) {
                u.partial && (o += u.prefix);
                continue;
              }
              throw new TypeError('Expected "' + u.name + '" to be defined');
            }
            if (Vt(h)) {
              if (!u.repeat)
                throw new TypeError(
                  'Expected "' +
                    u.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(h) +
                    "`"
                );
              if (0 === h.length) {
                if (u.optional) continue;
                throw new TypeError(
                  'Expected "' + u.name + '" to not be empty'
                );
              }
              for (var p = 0; p < h.length; p++) {
                if (((c = a(h[p])), !e[l].test(c)))
                  throw new TypeError(
                    'Expected all "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but received `' +
                      JSON.stringify(c) +
                      "`"
                  );
                o += (0 === p ? u.prefix : u.delimiter) + c;
              }
            } else {
              if (((c = u.asterisk ? F(h) : a(h)), !e[l].test(c)))
                throw new TypeError(
                  'Expected "' +
                    u.name +
                    '" to match "' +
                    u.pattern +
                    '", but received "' +
                    c +
                    '"'
                );
              o += u.prefix + c;
            }
          } else o += u;
        }
        return o;
      };
    }
    function A(t) {
      return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function P(t) {
      return t.replace(/([=!:$\/()])/g, "\\$1");
    }
    function O(t, e) {
      return (t.keys = e), t;
    }
    function C(t) {
      return t.sensitive ? "" : "i";
    }
    function B(t, e) {
      var i = t.source.match(/\((?!\?)/g);
      if (i)
        for (var n = 0; n < i.length; n++)
          e.push({
            name: n,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return O(t, e);
    }
    function X(t, e, i) {
      for (var n = [], o = 0; o < t.length; o++) n.push(E(t[o], e, i).source);
      return O(new RegExp("(?:" + n.join("|") + ")", C(i)), e);
    }
    function R(t, e, i) {
      return M(x(t, i), e, i);
    }
    function M(t, e, i) {
      Vt(e) || ((i = e || i), (e = [])), (i = i || {});
      for (
        var n = i.strict, o = !1 !== i.end, s = "", r = 0;
        r < t.length;
        r++
      ) {
        var a = t[r];
        if ("string" == typeof a) s += A(a);
        else {
          var l = A(a.prefix),
            u = "(?:" + a.pattern + ")";
          e.push(a),
            a.repeat && (u += "(?:" + l + u + ")*"),
            (u = a.optional
              ? a.partial
                ? l + "(" + u + ")?"
                : "(?:" + l + "(" + u + "))?"
              : l + "(" + u + ")"),
            (s += u);
        }
      }
      var c = A(i.delimiter || "/"),
        h = s.slice(-c.length) === c;
      return (
        n || (s = (h ? s.slice(0, -c.length) : s) + "(?:" + c + "(?=$))?"),
        (s += o ? "$" : n && h ? "" : "(?=" + c + "|$)"),
        O(new RegExp("^" + s, C(i)), e)
      );
    }
    function E(t, e, i) {
      return (
        Vt(e) || ((i = e || i), (e = [])),
        (i = i || {}),
        t instanceof RegExp ? B(t, e) : Vt(t) ? X(t, e, i) : R(t, e, i)
      );
    }
    function q(t, e, i) {
      try {
        return (Qt[t] || (Qt[t] = $t.compile(t)))(e || {}, { pretty: !0 });
      } catch (t) {
        return "";
      }
    }
    function D(t, e, i, n) {
      var o = e || [],
        s = i || Object.create(null),
        r = n || Object.create(null);
      t.forEach(function (t) {
        N(o, s, r, t);
      });
      for (var a = 0, l = o.length; a < l; a++)
        "*" === o[a] && (o.push(o.splice(a, 1)[0]), l--, a--);
      return { pathList: o, pathMap: s, nameMap: r };
    }
    function N(t, e, i, n, o, s) {
      var r = n.path,
        a = n.name,
        l = j(r, o),
        u = n.pathToRegexpOptions || {};
      "boolean" == typeof n.caseSensitive && (u.sensitive = n.caseSensitive);
      var c = {
        path: l,
        regex: L(l, u),
        components: n.components || { default: n.component },
        instances: {},
        name: a,
        parent: o,
        matchAs: s,
        redirect: n.redirect,
        beforeEnter: n.beforeEnter,
        meta: n.meta || {},
        props:
          null == n.props ? {} : n.components ? n.props : { default: n.props },
      };
      if (
        (n.children &&
          n.children.forEach(function (n) {
            var o = s ? S(s + "/" + n.path) : void 0;
            N(t, e, i, n, c, o);
          }),
        void 0 !== n.alias)
      ) {
        (Array.isArray(n.alias) ? n.alias : [n.alias]).forEach(function (s) {
          var r = { path: s, children: n.children };
          N(t, e, i, r, o, c.path || "/");
        });
      }
      e[c.path] || (t.push(c.path), (e[c.path] = c)), a && (i[a] || (i[a] = c));
    }
    function L(t, e) {
      var i = $t(t, [], e);
      return i;
    }
    function j(t, e) {
      return (
        (t = t.replace(/\/$/, "")),
        "/" === t[0] ? t : null == e ? t : S(e.path + "/" + t)
      );
    }
    function I(t, e, i, n) {
      var o = "string" == typeof t ? { path: t } : t;
      if (o.name || o._normalized) return o;
      if (!o.path && o.params && e) {
        (o = V({}, o)), (o._normalized = !0);
        var s = V(V({}, e.params), o.params);
        if (e.name) (o.name = e.name), (o.params = s);
        else if (e.matched.length) {
          var a = e.matched[e.matched.length - 1].path;
          o.path = q(a, s, "path " + e.path);
        }
        return o;
      }
      var l = b(o.path || ""),
        u = (e && e.path) || "/",
        c = l.path ? g(l.path, u, i || o.append) : u,
        h = r(l.query, o.query, n && n.options.parseQuery),
        p = o.hash || l.hash;
      return (
        p && "#" !== p.charAt(0) && (p = "#" + p),
        { _normalized: !0, path: c, query: h, hash: p }
      );
    }
    function V(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function $(t, e) {
      function i(t) {
        D(t, l, c, h);
      }
      function n(t, i, n) {
        var o = I(t, i, !1, e),
          s = o.name;
        if (s) {
          var a = h[s];
          if (!a) return r(null, o);
          var u = a.regex.keys
            .filter(function (t) {
              return !t.optional;
            })
            .map(function (t) {
              return t.name;
            });
          if (
            ("object" != typeof o.params && (o.params = {}),
            i && "object" == typeof i.params)
          )
            for (var p in i.params)
              !(p in o.params) &&
                u.indexOf(p) > -1 &&
                (o.params[p] = i.params[p]);
          if (a)
            return (
              (o.path = q(a.path, o.params, 'named route "' + s + '"')),
              r(a, o, n)
            );
        } else if (o.path) {
          o.params = {};
          for (var d = 0; d < l.length; d++) {
            var f = l[d],
              m = c[f];
            if (z(m.regex, o.path, o.params)) return r(m, o, n);
          }
        }
        return r(null, o);
      }
      function o(t, i) {
        var o = t.redirect,
          s = "function" == typeof o ? o(u(t, i, null, e)) : o;
        if (
          ("string" == typeof s && (s = { path: s }),
          !s || "object" != typeof s)
        )
          return r(null, i);
        var a = s,
          l = a.name,
          c = a.path,
          p = i.query,
          d = i.hash,
          f = i.params;
        if (
          ((p = a.hasOwnProperty("query") ? a.query : p),
          (d = a.hasOwnProperty("hash") ? a.hash : d),
          (f = a.hasOwnProperty("params") ? a.params : f),
          l)
        ) {
          h[l];
          return n(
            { _normalized: !0, name: l, query: p, hash: d, params: f },
            void 0,
            i
          );
        }
        if (c) {
          var m = U(c, t);
          return n(
            {
              _normalized: !0,
              path: q(m, f, 'redirect route with path "' + m + '"'),
              query: p,
              hash: d,
            },
            void 0,
            i
          );
        }
        return r(null, i);
      }
      function s(t, e, i) {
        var o = q(i, e.params, 'aliased route with path "' + i + '"'),
          s = n({ _normalized: !0, path: o });
        if (s) {
          var a = s.matched,
            l = a[a.length - 1];
          return (e.params = s.params), r(l, e);
        }
        return r(null, e);
      }
      function r(t, i, n) {
        return t && t.redirect
          ? o(t, n || i)
          : t && t.matchAs
          ? s(t, i, t.matchAs)
          : u(t, i, n, e);
      }
      var a = D(t),
        l = a.pathList,
        c = a.pathMap,
        h = a.nameMap;
      return { match: n, addRoutes: i };
    }
    function z(t, e, i) {
      var n = e.match(t);
      if (!n) return !1;
      if (!i) return !0;
      for (var o = 1, s = n.length; o < s; ++o) {
        var r = t.keys[o - 1],
          a = "string" == typeof n[o] ? decodeURIComponent(n[o]) : n[o];
        r && (i[r.name] = a);
      }
      return !0;
    }
    function U(t, e) {
      return g(t, e.parent ? e.parent.path : "/", !0);
    }
    function G() {
      window.addEventListener("popstate", function (t) {
        H(), t.state && t.state.key && nt(t.state.key);
      });
    }
    function W(t, e, i, n) {
      if (t.app) {
        var o = t.options.scrollBehavior;
        o &&
          t.app.$nextTick(function () {
            var t = Q(),
              s = o(e, i, n ? t : null);
            if (s) {
              var r = "object" == typeof s;
              if (r && "string" == typeof s.selector) {
                var a = document.querySelector(s.selector);
                if (a) {
                  var l =
                    s.offset && "object" == typeof s.offset ? s.offset : {};
                  (l = K(l)), (t = Z(a, l));
                } else Y(s) && (t = J(s));
              } else r && Y(s) && (t = J(s));
              t && window.scrollTo(t.x, t.y);
            }
          });
      }
    }
    function H() {
      var t = it();
      t && (Zt[t] = { x: window.pageXOffset, y: window.pageYOffset });
    }
    function Q() {
      var t = it();
      if (t) return Zt[t];
    }
    function Z(t, e) {
      var i = document.documentElement,
        n = i.getBoundingClientRect(),
        o = t.getBoundingClientRect();
      return { x: o.left - n.left - e.x, y: o.top - n.top - e.y };
    }
    function Y(t) {
      return tt(t.x) || tt(t.y);
    }
    function J(t) {
      return {
        x: tt(t.x) ? t.x : window.pageXOffset,
        y: tt(t.y) ? t.y : window.pageYOffset,
      };
    }
    function K(t) {
      return { x: tt(t.x) ? t.x : 0, y: tt(t.y) ? t.y : 0 };
    }
    function tt(t) {
      return "number" == typeof t;
    }
    function et() {
      return Jt.now().toFixed(3);
    }
    function it() {
      return Kt;
    }
    function nt(t) {
      Kt = t;
    }
    function ot(t, e) {
      H();
      var i = window.history;
      try {
        e
          ? i.replaceState({ key: Kt }, "", t)
          : ((Kt = et()), i.pushState({ key: Kt }, "", t));
      } catch (i) {
        window.location[e ? "replace" : "assign"](t);
      }
    }
    function st(t) {
      ot(t, !0);
    }
    function rt(t, e, i) {
      var n = function (o) {
        o >= t.length
          ? i()
          : t[o]
          ? e(t[o], function () {
              n(o + 1);
            })
          : n(o + 1);
      };
      n(0);
    }
    function at(t) {
      return function (e, i, n) {
        var s = !1,
          r = 0,
          a = null;
        lt(t, function (t, e, i, l) {
          if ("function" == typeof t && void 0 === t.cid) {
            (s = !0), r++;
            var u,
              c = ct(function (e) {
                e.__esModule && e.default && (e = e.default),
                  (t.resolved = "function" == typeof e ? e : Ot.extend(e)),
                  (i.components[l] = e),
                  --r <= 0 && n();
              }),
              h = ct(function (t) {
                var e = "Failed to resolve async component " + l + ": " + t;
                a || ((a = o(t) ? t : new Error(e)), n(a));
              });
            try {
              u = t(c, h);
            } catch (t) {
              h(t);
            }
            if (u)
              if ("function" == typeof u.then) u.then(c, h);
              else {
                var p = u.component;
                p && "function" == typeof p.then && p.then(c, h);
              }
          }
        }),
          s || n();
      };
    }
    function lt(t, e) {
      return ut(
        t.map(function (t) {
          return Object.keys(t.components).map(function (i) {
            return e(t.components[i], t.instances[i], t, i);
          });
        })
      );
    }
    function ut(t) {
      return Array.prototype.concat.apply([], t);
    }
    function ct(t) {
      var e = !1;
      return function () {
        for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n];
        if (!e) return (e = !0), t.apply(this, i);
      };
    }
    function ht(t) {
      if (!t)
        if (It) {
          var e = document.querySelector("base");
          (t = (e && e.getAttribute("href")) || "/"),
            (t = t.replace(/^https?:\/\/[^\/]+/, ""));
        } else t = "/";
      return "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "");
    }
    function pt(t, e) {
      var i,
        n = Math.max(t.length, e.length);
      for (i = 0; i < n && t[i] === e[i]; i++);
      return {
        updated: e.slice(0, i),
        activated: e.slice(i),
        deactivated: t.slice(i),
      };
    }
    function dt(t, e, i, n) {
      var o = lt(t, function (t, n, o, s) {
        var r = ft(t, e);
        if (r)
          return Array.isArray(r)
            ? r.map(function (t) {
                return i(t, n, o, s);
              })
            : i(r, n, o, s);
      });
      return ut(n ? o.reverse() : o);
    }
    function ft(t, e) {
      return "function" != typeof t && (t = Ot.extend(t)), t.options[e];
    }
    function mt(t) {
      return dt(t, "beforeRouteLeave", _t, !0);
    }
    function yt(t) {
      return dt(t, "beforeRouteUpdate", _t);
    }
    function _t(t, e) {
      if (e)
        return function () {
          return t.apply(e, arguments);
        };
    }
    function vt(t, e, i) {
      return dt(t, "beforeRouteEnter", function (t, n, o, s) {
        return gt(t, o, s, e, i);
      });
    }
    function gt(t, e, i, n, o) {
      return function (s, r, a) {
        return t(s, r, function (t) {
          a(t),
            "function" == typeof t &&
              n.push(function () {
                bt(t, e.instances, i, o);
              });
        });
      };
    }
    function bt(t, e, i, n) {
      e[i]
        ? t(e[i])
        : n() &&
          setTimeout(function () {
            bt(t, e, i, n);
          }, 16);
    }
    function St(t) {
      var e = window.location.pathname;
      return (
        t && 0 === e.indexOf(t) && (e = e.slice(t.length)),
        (e || "/") + window.location.search + window.location.hash
      );
    }
    function xt(t) {
      var e = St(t);
      if (!/^\/#/.test(e)) return window.location.replace(S(t + "/#" + e)), !0;
    }
    function wt() {
      var t = Tt();
      return "/" === t.charAt(0) || (kt("/" + t), !1);
    }
    function Tt() {
      var t = window.location.href,
        e = t.indexOf("#");
      return -1 === e ? "" : t.slice(e + 1);
    }
    function Ft(t) {
      window.location.hash = t;
    }
    function kt(t) {
      var e = window.location.href,
        i = e.indexOf("#"),
        n = i >= 0 ? e.slice(0, i) : e;
      window.location.replace(n + "#" + t);
    }
    function At(t, e) {
      return (
        t.push(e),
        function () {
          var i = t.indexOf(e);
          i > -1 && t.splice(i, 1);
        }
      );
    }
    function Pt(t, e, i) {
      var n = "hash" === i ? "#" + e : e;
      return t ? S(t + "/" + n) : n;
    }
    var Ot,
      Ct = {
        name: "router-view",
        functional: !0,
        props: { name: { type: String, default: "default" } },
        render: function (t, e) {
          var i = e.props,
            n = e.children,
            o = e.parent,
            r = e.data;
          r.routerView = !0;
          for (
            var a = o.$createElement,
              l = i.name,
              u = o.$route,
              c = o._routerViewCache || (o._routerViewCache = {}),
              h = 0,
              p = !1;
            o && o._routerRoot !== o;

          )
            o.$vnode && o.$vnode.data.routerView && h++,
              o._inactive && (p = !0),
              (o = o.$parent);
          if (((r.routerViewDepth = h), p)) return a(c[l], r, n);
          var d = u.matched[h];
          if (!d) return (c[l] = null), a();
          var f = (c[l] = d.components[l]);
          return (
            (r.registerRouteInstance = function (t, e) {
              var i = d.instances[l];
              ((e && i !== t) || (!e && i === t)) && (d.instances[l] = e);
            }),
            ((r.hook || (r.hook = {})).prepatch = function (t, e) {
              d.instances[l] = e.componentInstance;
            }),
            (r.props = s(u, d.props && d.props[l])),
            a(f, r, n)
          );
        },
      },
      Bt = /[!'()*]/g,
      Xt = function (t) {
        return "%" + t.charCodeAt(0).toString(16);
      },
      Rt = /%2C/g,
      Mt = function (t) {
        return encodeURIComponent(t).replace(Bt, Xt).replace(Rt, ",");
      },
      Et = decodeURIComponent,
      qt = /\/?$/,
      Dt = u(null, { path: "/" }),
      Nt = [String, Object],
      Lt = [String, Array],
      jt = {
        name: "router-link",
        props: {
          to: { type: Nt, required: !0 },
          tag: { type: String, default: "a" },
          exact: Boolean,
          append: Boolean,
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          event: { type: Lt, default: "click" },
        },
        render: function (t) {
          var e = this,
            i = this.$router,
            n = this.$route,
            o = i.resolve(this.to, n, this.append),
            s = o.location,
            r = o.route,
            a = o.href,
            l = {},
            c = i.options.linkActiveClass,
            h = i.options.linkExactActiveClass,
            d = null == c ? "router-link-active" : c,
            m = null == h ? "router-link-exact-active" : h,
            v = null == this.activeClass ? d : this.activeClass,
            g = null == this.exactActiveClass ? m : this.exactActiveClass,
            b = s.path ? u(null, s, null, i) : r;
          (l[g] = p(n, b)), (l[v] = this.exact ? l[g] : f(n, b));
          var S = function (t) {
              y(t) && (e.replace ? i.replace(s) : i.push(s));
            },
            x = { click: y };
          Array.isArray(this.event)
            ? this.event.forEach(function (t) {
                x[t] = S;
              })
            : (x[this.event] = S);
          var w = { class: l };
          if ("a" === this.tag) (w.on = x), (w.attrs = { href: a });
          else {
            var T = _(this.$slots.default);
            if (T) {
              T.isStatic = !1;
              var F = Ot.util.extend;
              (T.data = F({}, T.data)).on = x;
              (T.data.attrs = F({}, T.data.attrs)).href = a;
            } else w.on = x;
          }
          return t(this.tag, w, this.$slots.default);
        },
      },
      It = "undefined" != typeof window,
      Vt =
        Array.isArray ||
        function (t) {
          return "[object Array]" == Object.prototype.toString.call(t);
        },
      $t = E,
      zt = x,
      Ut = w,
      Gt = k,
      Wt = M,
      Ht = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
    ($t.parse = zt),
      ($t.compile = Ut),
      ($t.tokensToFunction = Gt),
      ($t.tokensToRegExp = Wt);
    var Qt = Object.create(null),
      Zt = Object.create(null),
      Yt =
        It &&
        (function () {
          var t = window.navigator.userAgent;
          return (
            ((-1 === t.indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history
          );
        })(),
      Jt =
        It && window.performance && window.performance.now
          ? window.performance
          : Date,
      Kt = et(),
      te = function (t, e) {
        (this.router = t),
          (this.base = ht(e)),
          (this.current = Dt),
          (this.pending = null),
          (this.ready = !1),
          (this.readyCbs = []),
          (this.readyErrorCbs = []),
          (this.errorCbs = []);
      };
    (te.prototype.listen = function (t) {
      this.cb = t;
    }),
      (te.prototype.onReady = function (t, e) {
        this.ready
          ? t()
          : (this.readyCbs.push(t), e && this.readyErrorCbs.push(e));
      }),
      (te.prototype.onError = function (t) {
        this.errorCbs.push(t);
      }),
      (te.prototype.transitionTo = function (t, e, i) {
        var n = this,
          o = this.router.match(t, this.current);
        this.confirmTransition(
          o,
          function () {
            n.updateRoute(o),
              e && e(o),
              n.ensureURL(),
              n.ready ||
                ((n.ready = !0),
                n.readyCbs.forEach(function (t) {
                  t(o);
                }));
          },
          function (t) {
            i && i(t),
              t &&
                !n.ready &&
                ((n.ready = !0),
                n.readyErrorCbs.forEach(function (e) {
                  e(t);
                }));
          }
        );
      }),
      (te.prototype.confirmTransition = function (t, e, i) {
        var s = this,
          r = this.current,
          a = function (t) {
            o(t) &&
              (s.errorCbs.length
                ? s.errorCbs.forEach(function (e) {
                    e(t);
                  })
                : (n(!1, "uncaught error during route navigation:"),
                  console.error(t))),
              i && i(t);
          };
        if (p(t, r) && t.matched.length === r.matched.length)
          return this.ensureURL(), a();
        var l = pt(this.current.matched, t.matched),
          u = l.updated,
          c = l.deactivated,
          h = l.activated,
          d = [].concat(
            mt(c),
            this.router.beforeHooks,
            yt(u),
            h.map(function (t) {
              return t.beforeEnter;
            }),
            at(h)
          );
        this.pending = t;
        var f = function (e, i) {
          if (s.pending !== t) return a();
          try {
            e(t, r, function (t) {
              !1 === t || o(t)
                ? (s.ensureURL(!0), a(t))
                : "string" == typeof t ||
                  ("object" == typeof t &&
                    ("string" == typeof t.path || "string" == typeof t.name))
                ? (a(),
                  "object" == typeof t && t.replace ? s.replace(t) : s.push(t))
                : i(t);
            });
          } catch (t) {
            a(t);
          }
        };
        rt(d, f, function () {
          var i = [];
          rt(
            vt(h, i, function () {
              return s.current === t;
            }).concat(s.router.resolveHooks),
            f,
            function () {
              if (s.pending !== t) return a();
              (s.pending = null),
                e(t),
                s.router.app &&
                  s.router.app.$nextTick(function () {
                    i.forEach(function (t) {
                      t();
                    });
                  });
            }
          );
        });
      }),
      (te.prototype.updateRoute = function (t) {
        var e = this.current;
        (this.current = t),
          this.cb && this.cb(t),
          this.router.afterHooks.forEach(function (i) {
            i && i(t, e);
          });
      });
    var ee = (function (t) {
        function e(e, i) {
          var n = this;
          t.call(this, e, i);
          var o = e.options.scrollBehavior;
          o && G(),
            window.addEventListener("popstate", function (t) {
              var i = n.current;
              n.transitionTo(St(n.base), function (t) {
                o && W(e, t, i, !0);
              });
            });
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.go = function (t) {
            window.history.go(t);
          }),
          (e.prototype.push = function (t, e, i) {
            var n = this,
              o = this,
              s = o.current;
            this.transitionTo(
              t,
              function (t) {
                ot(S(n.base + t.fullPath)), W(n.router, t, s, !1), e && e(t);
              },
              i
            );
          }),
          (e.prototype.replace = function (t, e, i) {
            var n = this,
              o = this,
              s = o.current;
            this.transitionTo(
              t,
              function (t) {
                st(S(n.base + t.fullPath)), W(n.router, t, s, !1), e && e(t);
              },
              i
            );
          }),
          (e.prototype.ensureURL = function (t) {
            if (St(this.base) !== this.current.fullPath) {
              var e = S(this.base + this.current.fullPath);
              t ? ot(e) : st(e);
            }
          }),
          (e.prototype.getCurrentLocation = function () {
            return St(this.base);
          }),
          e
        );
      })(te),
      ie = (function (t) {
        function e(e, i, n) {
          t.call(this, e, i), (n && xt(this.base)) || wt();
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.setupListeners = function () {
            var t = this;
            window.addEventListener("hashchange", function () {
              wt() &&
                t.transitionTo(Tt(), function (t) {
                  kt(t.fullPath);
                });
            });
          }),
          (e.prototype.push = function (t, e, i) {
            this.transitionTo(
              t,
              function (t) {
                Ft(t.fullPath), e && e(t);
              },
              i
            );
          }),
          (e.prototype.replace = function (t, e, i) {
            this.transitionTo(
              t,
              function (t) {
                kt(t.fullPath), e && e(t);
              },
              i
            );
          }),
          (e.prototype.go = function (t) {
            window.history.go(t);
          }),
          (e.prototype.ensureURL = function (t) {
            var e = this.current.fullPath;
            Tt() !== e && (t ? Ft(e) : kt(e));
          }),
          (e.prototype.getCurrentLocation = function () {
            return Tt();
          }),
          e
        );
      })(te),
      ne = (function (t) {
        function e(e, i) {
          t.call(this, e, i), (this.stack = []), (this.index = -1);
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.push = function (t, e, i) {
            var n = this;
            this.transitionTo(
              t,
              function (t) {
                (n.stack = n.stack.slice(0, n.index + 1).concat(t)),
                  n.index++,
                  e && e(t);
              },
              i
            );
          }),
          (e.prototype.replace = function (t, e, i) {
            var n = this;
            this.transitionTo(
              t,
              function (t) {
                (n.stack = n.stack.slice(0, n.index).concat(t)), e && e(t);
              },
              i
            );
          }),
          (e.prototype.go = function (t) {
            var e = this,
              i = this.index + t;
            if (!(i < 0 || i >= this.stack.length)) {
              var n = this.stack[i];
              this.confirmTransition(n, function () {
                (e.index = i), e.updateRoute(n);
              });
            }
          }),
          (e.prototype.getCurrentLocation = function () {
            var t = this.stack[this.stack.length - 1];
            return t ? t.fullPath : "/";
          }),
          (e.prototype.ensureURL = function () {}),
          e
        );
      })(te),
      oe = function (t) {
        void 0 === t && (t = {}),
          (this.app = null),
          (this.apps = []),
          (this.options = t),
          (this.beforeHooks = []),
          (this.resolveHooks = []),
          (this.afterHooks = []),
          (this.matcher = $(t.routes || [], this));
        var e = t.mode || "hash";
        switch (
          ((this.fallback = "history" === e && !Yt && !1 !== t.fallback),
          this.fallback && (e = "hash"),
          It || (e = "abstract"),
          (this.mode = e),
          e)
        ) {
          case "history":
            this.history = new ee(this, t.base);
            break;
          case "hash":
            this.history = new ie(this, t.base, this.fallback);
            break;
          case "abstract":
            this.history = new ne(this, t.base);
        }
      },
      se = { currentRoute: {} };
    (oe.prototype.match = function (t, e, i) {
      return this.matcher.match(t, e, i);
    }),
      (se.currentRoute.get = function () {
        return this.history && this.history.current;
      }),
      (oe.prototype.init = function (t) {
        var e = this;
        if ((this.apps.push(t), !this.app)) {
          this.app = t;
          var i = this.history;
          if (i instanceof ee) i.transitionTo(i.getCurrentLocation());
          else if (i instanceof ie) {
            var n = function () {
              i.setupListeners();
            };
            i.transitionTo(i.getCurrentLocation(), n, n);
          }
          i.listen(function (t) {
            e.apps.forEach(function (e) {
              e._route = t;
            });
          });
        }
      }),
      (oe.prototype.beforeEach = function (t) {
        return At(this.beforeHooks, t);
      }),
      (oe.prototype.beforeResolve = function (t) {
        return At(this.resolveHooks, t);
      }),
      (oe.prototype.afterEach = function (t) {
        return At(this.afterHooks, t);
      }),
      (oe.prototype.onReady = function (t, e) {
        this.history.onReady(t, e);
      }),
      (oe.prototype.onError = function (t) {
        this.history.onError(t);
      }),
      (oe.prototype.push = function (t, e, i) {
        this.history.push(t, e, i);
      }),
      (oe.prototype.replace = function (t, e, i) {
        this.history.replace(t, e, i);
      }),
      (oe.prototype.go = function (t) {
        this.history.go(t);
      }),
      (oe.prototype.back = function () {
        this.go(-1);
      }),
      (oe.prototype.forward = function () {
        this.go(1);
      }),
      (oe.prototype.getMatchedComponents = function (t) {
        var e = t ? (t.matched ? t : this.resolve(t).route) : this.currentRoute;
        return e
          ? [].concat.apply(
              [],
              e.matched.map(function (t) {
                return Object.keys(t.components).map(function (e) {
                  return t.components[e];
                });
              })
            )
          : [];
      }),
      (oe.prototype.resolve = function (t, e, i) {
        var n = I(t, e || this.history.current, i, this),
          o = this.match(n, e),
          s = o.redirectedFrom || o.fullPath;
        return {
          location: n,
          route: o,
          href: Pt(this.history.base, s, this.mode),
          normalizedTo: n,
          resolved: o,
        };
      }),
      (oe.prototype.addRoutes = function (t) {
        this.matcher.addRoutes(t),
          this.history.current !== Dt &&
            this.history.transitionTo(this.history.getCurrentLocation());
      }),
      Object.defineProperties(oe.prototype, se),
      (oe.install = v),
      (oe.version = "2.7.0"),
      It && window.Vue && window.Vue.use(oe),
      (e.a = oe);
  },
  function (t, e, i) {
    "use strict";
    (function (t) {
      /*!
       * Vue.js v2.4.2
       * (c) 2014-2017 Evan You
       * Released under the MIT License.
       */
      function i(t) {
        return void 0 === t || null === t;
      }
      function n(t) {
        return void 0 !== t && null !== t;
      }
      function o(t) {
        return !0 === t;
      }
      function s(t) {
        return !1 === t;
      }
      function r(t) {
        return (
          "string" == typeof t || "number" == typeof t || "boolean" == typeof t
        );
      }
      function a(t) {
        return null !== t && "object" == typeof t;
      }
      function l(t) {
        return "[object Object]" === No.call(t);
      }
      function u(t) {
        return "[object RegExp]" === No.call(t);
      }
      function c(t) {
        var e = parseFloat(t);
        return e >= 0 && Math.floor(e) === e && isFinite(t);
      }
      function h(t) {
        return null == t
          ? ""
          : "object" == typeof t
          ? JSON.stringify(t, null, 2)
          : String(t);
      }
      function p(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
      }
      function d(t, e) {
        for (
          var i = Object.create(null), n = t.split(","), o = 0;
          o < n.length;
          o++
        )
          i[n[o]] = !0;
        return e
          ? function (t) {
              return i[t.toLowerCase()];
            }
          : function (t) {
              return i[t];
            };
      }
      function f(t, e) {
        if (t.length) {
          var i = t.indexOf(e);
          if (i > -1) return t.splice(i, 1);
        }
      }
      function m(t, e) {
        return Io.call(t, e);
      }
      function y(t) {
        var e = Object.create(null);
        return function (i) {
          return e[i] || (e[i] = t(i));
        };
      }
      function _(t, e) {
        function i(i) {
          var n = arguments.length;
          return n ? (n > 1 ? t.apply(e, arguments) : t.call(e, i)) : t.call(e);
        }
        return (i._length = t.length), i;
      }
      function v(t, e) {
        e = e || 0;
        for (var i = t.length - e, n = new Array(i); i--; ) n[i] = t[i + e];
        return n;
      }
      function g(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      }
      function b(t) {
        for (var e = {}, i = 0; i < t.length; i++) t[i] && g(e, t[i]);
        return e;
      }
      function S(t, e, i) {}
      function x(t, e) {
        if (t === e) return !0;
        var i = a(t),
          n = a(e);
        if (!i || !n) return !i && !n && String(t) === String(e);
        try {
          var o = Array.isArray(t),
            s = Array.isArray(e);
          if (o && s)
            return (
              t.length === e.length &&
              t.every(function (t, i) {
                return x(t, e[i]);
              })
            );
          if (o || s) return !1;
          var r = Object.keys(t),
            l = Object.keys(e);
          return (
            r.length === l.length &&
            r.every(function (i) {
              return x(t[i], e[i]);
            })
          );
        } catch (t) {
          return !1;
        }
      }
      function w(t, e) {
        for (var i = 0; i < t.length; i++) if (x(t[i], e)) return i;
        return -1;
      }
      function T(t) {
        var e = !1;
        return function () {
          e || ((e = !0), t.apply(this, arguments));
        };
      }
      function F(t) {
        var e = (t + "").charCodeAt(0);
        return 36 === e || 95 === e;
      }
      function k(t, e, i, n) {
        Object.defineProperty(t, e, {
          value: i,
          enumerable: !!n,
          writable: !0,
          configurable: !0,
        });
      }
      function A(t) {
        if (!ts.test(t)) {
          var e = t.split(".");
          return function (t) {
            for (var i = 0; i < e.length; i++) {
              if (!t) return;
              t = t[e[i]];
            }
            return t;
          };
        }
      }
      function P(t, e, i) {
        if (Jo.errorHandler) Jo.errorHandler.call(null, t, e, i);
        else {
          if (!ns || "undefined" == typeof console) throw t;
          console.error(t);
        }
      }
      function O(t) {
        return "function" == typeof t && /native code/.test(t.toString());
      }
      function C(t) {
        Ss.target && xs.push(Ss.target), (Ss.target = t);
      }
      function B() {
        Ss.target = xs.pop();
      }
      function X(t, e, i) {
        t.__proto__ = e;
      }
      function R(t, e, i) {
        for (var n = 0, o = i.length; n < o; n++) {
          var s = i[n];
          k(t, s, e[s]);
        }
      }
      function M(t, e) {
        if (a(t)) {
          var i;
          return (
            m(t, "__ob__") && t.__ob__ instanceof As
              ? (i = t.__ob__)
              : ks.shouldConvert &&
                !ys() &&
                (Array.isArray(t) || l(t)) &&
                Object.isExtensible(t) &&
                !t._isVue &&
                (i = new As(t)),
            e && i && i.vmCount++,
            i
          );
        }
      }
      function E(t, e, i, n, o) {
        var s = new Ss(),
          r = Object.getOwnPropertyDescriptor(t, e);
        if (!r || !1 !== r.configurable) {
          var a = r && r.get,
            l = r && r.set,
            u = !o && M(i);
          Object.defineProperty(t, e, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var e = a ? a.call(t) : i;
              return (
                Ss.target &&
                  (s.depend(), u && u.dep.depend(), Array.isArray(e) && N(e)),
                e
              );
            },
            set: function (e) {
              var n = a ? a.call(t) : i;
              e === n ||
                (e !== e && n !== n) ||
                (l ? l.call(t, e) : (i = e), (u = !o && M(e)), s.notify());
            },
          });
        }
      }
      function q(t, e, i) {
        if (Array.isArray(t) && c(e))
          return (t.length = Math.max(t.length, e)), t.splice(e, 1, i), i;
        if (m(t, e)) return (t[e] = i), i;
        var n = t.__ob__;
        return t._isVue || (n && n.vmCount)
          ? i
          : n
          ? (E(n.value, e, i), n.dep.notify(), i)
          : ((t[e] = i), i);
      }
      function D(t, e) {
        if (Array.isArray(t) && c(e)) return void t.splice(e, 1);
        var i = t.__ob__;
        t._isVue ||
          (i && i.vmCount) ||
          (m(t, e) && (delete t[e], i && i.dep.notify()));
      }
      function N(t) {
        for (var e = void 0, i = 0, n = t.length; i < n; i++)
          (e = t[i]),
            e && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && N(e);
      }
      function L(t, e) {
        if (!e) return t;
        for (var i, n, o, s = Object.keys(e), r = 0; r < s.length; r++)
          (i = s[r]),
            (n = t[i]),
            (o = e[i]),
            m(t, i) ? l(n) && l(o) && L(n, o) : q(t, i, o);
        return t;
      }
      function j(t, e, i) {
        return i
          ? t || e
            ? function () {
                var n = "function" == typeof e ? e.call(i) : e,
                  o = "function" == typeof t ? t.call(i) : void 0;
                return n ? L(n, o) : o;
              }
            : void 0
          : e
          ? t
            ? function () {
                return L(
                  "function" == typeof e ? e.call(this) : e,
                  "function" == typeof t ? t.call(this) : t
                );
              }
            : e
          : t;
      }
      function I(t, e) {
        return e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
      }
      function V(t, e) {
        var i = Object.create(t || null);
        return e ? g(i, e) : i;
      }
      function $(t) {
        var e = t.props;
        if (e) {
          var i,
            n,
            o,
            s = {};
          if (Array.isArray(e))
            for (i = e.length; i--; )
              "string" == typeof (n = e[i]) &&
                ((o = $o(n)), (s[o] = { type: null }));
          else if (l(e))
            for (var r in e)
              (n = e[r]), (o = $o(r)), (s[o] = l(n) ? n : { type: n });
          t.props = s;
        }
      }
      function z(t) {
        var e = t.inject;
        if (Array.isArray(e))
          for (var i = (t.inject = {}), n = 0; n < e.length; n++)
            i[e[n]] = e[n];
      }
      function U(t) {
        var e = t.directives;
        if (e)
          for (var i in e) {
            var n = e[i];
            "function" == typeof n && (e[i] = { bind: n, update: n });
          }
      }
      function G(t, e, i) {
        function n(n) {
          var o = Ps[n] || Os;
          l[n] = o(t[n], e[n], i, n);
        }
        "function" == typeof e && (e = e.options), $(e), z(e), U(e);
        var o = e.extends;
        if ((o && (t = G(t, o, i)), e.mixins))
          for (var s = 0, r = e.mixins.length; s < r; s++)
            t = G(t, e.mixins[s], i);
        var a,
          l = {};
        for (a in t) n(a);
        for (a in e) m(t, a) || n(a);
        return l;
      }
      function W(t, e, i, n) {
        if ("string" == typeof i) {
          var o = t[e];
          if (m(o, i)) return o[i];
          var s = $o(i);
          if (m(o, s)) return o[s];
          var r = zo(s);
          if (m(o, r)) return o[r];
          return o[i] || o[s] || o[r];
        }
      }
      function H(t, e, i, n) {
        var o = e[t],
          s = !m(i, t),
          r = i[t];
        if (
          (Y(Boolean, o.type) &&
            (s && !m(o, "default")
              ? (r = !1)
              : Y(String, o.type) || ("" !== r && r !== Go(t)) || (r = !0)),
          void 0 === r)
        ) {
          r = Q(n, o, t);
          var a = ks.shouldConvert;
          (ks.shouldConvert = !0), M(r), (ks.shouldConvert = a);
        }
        return r;
      }
      function Q(t, e, i) {
        if (m(e, "default")) {
          var n = e.default;
          return t &&
            t.$options.propsData &&
            void 0 === t.$options.propsData[i] &&
            void 0 !== t._props[i]
            ? t._props[i]
            : "function" == typeof n && "Function" !== Z(e.type)
            ? n.call(t)
            : n;
        }
      }
      function Z(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
      }
      function Y(t, e) {
        if (!Array.isArray(e)) return Z(e) === Z(t);
        for (var i = 0, n = e.length; i < n; i++)
          if (Z(e[i]) === Z(t)) return !0;
        return !1;
      }
      function J(t) {
        return new Cs(void 0, void 0, void 0, String(t));
      }
      function K(t) {
        var e = new Cs(
          t.tag,
          t.data,
          t.children,
          t.text,
          t.elm,
          t.context,
          t.componentOptions,
          t.asyncFactory
        );
        return (
          (e.ns = t.ns),
          (e.isStatic = t.isStatic),
          (e.key = t.key),
          (e.isComment = t.isComment),
          (e.isCloned = !0),
          e
        );
      }
      function tt(t) {
        for (var e = t.length, i = new Array(e), n = 0; n < e; n++)
          i[n] = K(t[n]);
        return i;
      }
      function et(t) {
        function e() {
          var t = arguments,
            i = e.fns;
          if (!Array.isArray(i)) return i.apply(null, arguments);
          for (var n = i.slice(), o = 0; o < n.length; o++) n[o].apply(null, t);
        }
        return (e.fns = t), e;
      }
      function it(t, e, n, o, s) {
        var r, a, l, u;
        for (r in t)
          (a = t[r]),
            (l = e[r]),
            (u = Ms(r)),
            i(a) ||
              (i(l)
                ? (i(a.fns) && (a = t[r] = et(a)),
                  n(u.name, a, u.once, u.capture, u.passive))
                : a !== l && ((l.fns = a), (t[r] = l)));
        for (r in e) i(t[r]) && ((u = Ms(r)), o(u.name, e[r], u.capture));
      }
      function nt(t, e, s) {
        function r() {
          s.apply(this, arguments), f(a.fns, r);
        }
        var a,
          l = t[e];
        i(l)
          ? (a = et([r]))
          : n(l.fns) && o(l.merged)
          ? ((a = l), a.fns.push(r))
          : (a = et([l, r])),
          (a.merged = !0),
          (t[e] = a);
      }
      function ot(t, e, o) {
        var s = e.options.props;
        if (!i(s)) {
          var r = {},
            a = t.attrs,
            l = t.props;
          if (n(a) || n(l))
            for (var u in s) {
              var c = Go(u);
              st(r, l, u, c, !0) || st(r, a, u, c, !1);
            }
          return r;
        }
      }
      function st(t, e, i, o, s) {
        if (n(e)) {
          if (m(e, i)) return (t[i] = e[i]), s || delete e[i], !0;
          if (m(e, o)) return (t[i] = e[o]), s || delete e[o], !0;
        }
        return !1;
      }
      function rt(t) {
        for (var e = 0; e < t.length; e++)
          if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
        return t;
      }
      function at(t) {
        return r(t) ? [J(t)] : Array.isArray(t) ? ut(t) : void 0;
      }
      function lt(t) {
        return n(t) && n(t.text) && s(t.isComment);
      }
      function ut(t, e) {
        var s,
          a,
          l,
          u = [];
        for (s = 0; s < t.length; s++)
          (a = t[s]),
            i(a) ||
              "boolean" == typeof a ||
              ((l = u[u.length - 1]),
              Array.isArray(a)
                ? u.push.apply(u, ut(a, (e || "") + "_" + s))
                : r(a)
                ? lt(l)
                  ? (l.text += String(a))
                  : "" !== a && u.push(J(a))
                : lt(a) && lt(l)
                ? (u[u.length - 1] = J(l.text + a.text))
                : (o(t._isVList) &&
                    n(a.tag) &&
                    i(a.key) &&
                    n(e) &&
                    (a.key = "__vlist" + e + "_" + s + "__"),
                  u.push(a)));
        return u;
      }
      function ct(t, e) {
        return (
          t.__esModule && t.default && (t = t.default), a(t) ? e.extend(t) : t
        );
      }
      function ht(t, e, i, n, o) {
        var s = Rs();
        return (
          (s.asyncFactory = t),
          (s.asyncMeta = { data: e, context: i, children: n, tag: o }),
          s
        );
      }
      function pt(t, e, s) {
        if (o(t.error) && n(t.errorComp)) return t.errorComp;
        if (n(t.resolved)) return t.resolved;
        if (o(t.loading) && n(t.loadingComp)) return t.loadingComp;
        if (!n(t.contexts)) {
          var r = (t.contexts = [s]),
            l = !0,
            u = function () {
              for (var t = 0, e = r.length; t < e; t++) r[t].$forceUpdate();
            },
            c = T(function (i) {
              (t.resolved = ct(i, e)), l || u();
            }),
            h = T(function (e) {
              n(t.errorComp) && ((t.error = !0), u());
            }),
            p = t(c, h);
          return (
            a(p) &&
              ("function" == typeof p.then
                ? i(t.resolved) && p.then(c, h)
                : n(p.component) &&
                  "function" == typeof p.component.then &&
                  (p.component.then(c, h),
                  n(p.error) && (t.errorComp = ct(p.error, e)),
                  n(p.loading) &&
                    ((t.loadingComp = ct(p.loading, e)),
                    0 === p.delay
                      ? (t.loading = !0)
                      : setTimeout(function () {
                          i(t.resolved) &&
                            i(t.error) &&
                            ((t.loading = !0), u());
                        }, p.delay || 200)),
                  n(p.timeout) &&
                    setTimeout(function () {
                      i(t.resolved) && h(null);
                    }, p.timeout))),
            (l = !1),
            t.loading ? t.loadingComp : t.resolved
          );
        }
        t.contexts.push(s);
      }
      function dt(t) {
        if (Array.isArray(t))
          for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (n(i) && n(i.componentOptions)) return i;
          }
      }
      function ft(t) {
        (t._events = Object.create(null)), (t._hasHookEvent = !1);
        var e = t.$options._parentListeners;
        e && _t(t, e);
      }
      function mt(t, e, i) {
        i ? Xs.$once(t, e) : Xs.$on(t, e);
      }
      function yt(t, e) {
        Xs.$off(t, e);
      }
      function _t(t, e, i) {
        (Xs = t), it(e, i || {}, mt, yt, t);
      }
      function vt(t, e) {
        var i = {};
        if (!t) return i;
        for (var n = [], o = 0, s = t.length; o < s; o++) {
          var r = t[o];
          if (
            (r.context !== e && r.functionalContext !== e) ||
            !r.data ||
            null == r.data.slot
          )
            n.push(r);
          else {
            var a = r.data.slot,
              l = i[a] || (i[a] = []);
            "template" === r.tag ? l.push.apply(l, r.children) : l.push(r);
          }
        }
        return n.every(gt) || (i.default = n), i;
      }
      function gt(t) {
        return t.isComment || " " === t.text;
      }
      function bt(t, e) {
        e = e || {};
        for (var i = 0; i < t.length; i++)
          Array.isArray(t[i]) ? bt(t[i], e) : (e[t[i].key] = t[i].fn);
        return e;
      }
      function St(t) {
        var e = t.$options,
          i = e.parent;
        if (i && !e.abstract) {
          for (; i.$options.abstract && i.$parent; ) i = i.$parent;
          i.$children.push(t);
        }
        (t.$parent = i),
          (t.$root = i ? i.$root : t),
          (t.$children = []),
          (t.$refs = {}),
          (t._watcher = null),
          (t._inactive = null),
          (t._directInactive = !1),
          (t._isMounted = !1),
          (t._isDestroyed = !1),
          (t._isBeingDestroyed = !1);
      }
      function xt(t, e, i) {
        (t.$el = e),
          t.$options.render || (t.$options.render = Rs),
          At(t, "beforeMount");
        var n;
        return (
          (n = function () {
            t._update(t._render(), i);
          }),
          (t._watcher = new $s(t, n, S)),
          (i = !1),
          null == t.$vnode && ((t._isMounted = !0), At(t, "mounted")),
          t
        );
      }
      function wt(t, e, i, n, o) {
        var s = !!(
          o ||
          t.$options._renderChildren ||
          n.data.scopedSlots ||
          t.$scopedSlots !== Ko
        );
        if (
          ((t.$options._parentVnode = n),
          (t.$vnode = n),
          t._vnode && (t._vnode.parent = n),
          (t.$options._renderChildren = o),
          (t.$attrs = n.data && n.data.attrs),
          (t.$listeners = i),
          e && t.$options.props)
        ) {
          ks.shouldConvert = !1;
          for (
            var r = t._props, a = t.$options._propKeys || [], l = 0;
            l < a.length;
            l++
          ) {
            var u = a[l];
            r[u] = H(u, t.$options.props, e, t);
          }
          (ks.shouldConvert = !0), (t.$options.propsData = e);
        }
        if (i) {
          var c = t.$options._parentListeners;
          (t.$options._parentListeners = i), _t(t, i, c);
        }
        s && ((t.$slots = vt(o, n.context)), t.$forceUpdate());
      }
      function Tt(t) {
        for (; t && (t = t.$parent); ) if (t._inactive) return !0;
        return !1;
      }
      function Ft(t, e) {
        if (e) {
          if (((t._directInactive = !1), Tt(t))) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
          t._inactive = !1;
          for (var i = 0; i < t.$children.length; i++) Ft(t.$children[i]);
          At(t, "activated");
        }
      }
      function kt(t, e) {
        if (!((e && ((t._directInactive = !0), Tt(t))) || t._inactive)) {
          t._inactive = !0;
          for (var i = 0; i < t.$children.length; i++) kt(t.$children[i]);
          At(t, "deactivated");
        }
      }
      function At(t, e) {
        var i = t.$options[e];
        if (i)
          for (var n = 0, o = i.length; n < o; n++)
            try {
              i[n].call(t);
            } catch (i) {
              P(i, t, e + " hook");
            }
        t._hasHookEvent && t.$emit("hook:" + e);
      }
      function Pt() {
        (Is = qs.length = Ds.length = 0), (Ns = {}), (Ls = js = !1);
      }
      function Ot() {
        js = !0;
        var t, e;
        for (
          qs.sort(function (t, e) {
            return t.id - e.id;
          }),
            Is = 0;
          Is < qs.length;
          Is++
        )
          (t = qs[Is]), (e = t.id), (Ns[e] = null), t.run();
        var i = Ds.slice(),
          n = qs.slice();
        Pt(), Xt(i), Ct(n), _s && Jo.devtools && _s.emit("flush");
      }
      function Ct(t) {
        for (var e = t.length; e--; ) {
          var i = t[e],
            n = i.vm;
          n._watcher === i && n._isMounted && At(n, "updated");
        }
      }
      function Bt(t) {
        (t._inactive = !1), Ds.push(t);
      }
      function Xt(t) {
        for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), Ft(t[e], !0);
      }
      function Rt(t) {
        var e = t.id;
        if (null == Ns[e]) {
          if (((Ns[e] = !0), js)) {
            for (var i = qs.length - 1; i > Is && qs[i].id > t.id; ) i--;
            qs.splice(i + 1, 0, t);
          } else qs.push(t);
          Ls || ((Ls = !0), gs(Ot));
        }
      }
      function Mt(t) {
        zs.clear(), Et(t, zs);
      }
      function Et(t, e) {
        var i,
          n,
          o = Array.isArray(t);
        if ((o || a(t)) && Object.isExtensible(t)) {
          if (t.__ob__) {
            var s = t.__ob__.dep.id;
            if (e.has(s)) return;
            e.add(s);
          }
          if (o) for (i = t.length; i--; ) Et(t[i], e);
          else for (n = Object.keys(t), i = n.length; i--; ) Et(t[n[i]], e);
        }
      }
      function qt(t, e, i) {
        (Us.get = function () {
          return this[e][i];
        }),
          (Us.set = function (t) {
            this[e][i] = t;
          }),
          Object.defineProperty(t, i, Us);
      }
      function Dt(t) {
        t._watchers = [];
        var e = t.$options;
        e.props && Nt(t, e.props),
          e.methods && zt(t, e.methods),
          e.data ? Lt(t) : M((t._data = {}), !0),
          e.computed && It(t, e.computed),
          e.watch && e.watch !== hs && Ut(t, e.watch);
      }
      function Nt(t, e) {
        var i = t.$options.propsData || {},
          n = (t._props = {}),
          o = (t.$options._propKeys = []),
          s = !t.$parent;
        ks.shouldConvert = s;
        for (var r in e)
          !(function (s) {
            o.push(s);
            var r = H(s, e, i, t);
            E(n, s, r), s in t || qt(t, "_props", s);
          })(r);
        ks.shouldConvert = !0;
      }
      function Lt(t) {
        var e = t.$options.data;
        (e = t._data = "function" == typeof e ? jt(e, t) : e || {}),
          l(e) || (e = {});
        for (
          var i = Object.keys(e),
            n = t.$options.props,
            o = (t.$options.methods, i.length);
          o--;

        ) {
          var s = i[o];
          (n && m(n, s)) || F(s) || qt(t, "_data", s);
        }
        M(e, !0);
      }
      function jt(t, e) {
        try {
          return t.call(e);
        } catch (t) {
          return P(t, e, "data()"), {};
        }
      }
      function It(t, e) {
        var i = (t._computedWatchers = Object.create(null));
        for (var n in e) {
          var o = e[n],
            s = "function" == typeof o ? o : o.get;
          (i[n] = new $s(t, s || S, S, Gs)), n in t || Vt(t, n, o);
        }
      }
      function Vt(t, e, i) {
        "function" == typeof i
          ? ((Us.get = $t(e)), (Us.set = S))
          : ((Us.get = i.get ? (!1 !== i.cache ? $t(e) : i.get) : S),
            (Us.set = i.set ? i.set : S)),
          Object.defineProperty(t, e, Us);
      }
      function $t(t) {
        return function () {
          var e = this._computedWatchers && this._computedWatchers[t];
          if (e)
            return e.dirty && e.evaluate(), Ss.target && e.depend(), e.value;
        };
      }
      function zt(t, e) {
        t.$options.props;
        for (var i in e) t[i] = null == e[i] ? S : _(e[i], t);
      }
      function Ut(t, e) {
        for (var i in e) {
          var n = e[i];
          if (Array.isArray(n))
            for (var o = 0; o < n.length; o++) Gt(t, i, n[o]);
          else Gt(t, i, n);
        }
      }
      function Gt(t, e, i, n) {
        return (
          l(i) && ((n = i), (i = i.handler)),
          "string" == typeof i && (i = t[i]),
          t.$watch(e, i, n)
        );
      }
      function Wt(t) {
        var e = t.$options.provide;
        e && (t._provided = "function" == typeof e ? e.call(t) : e);
      }
      function Ht(t) {
        var e = Qt(t.$options.inject, t);
        e &&
          ((ks.shouldConvert = !1),
          Object.keys(e).forEach(function (i) {
            E(t, i, e[i]);
          }),
          (ks.shouldConvert = !0));
      }
      function Qt(t, e) {
        if (t) {
          for (
            var i = Object.create(null),
              n = vs ? Reflect.ownKeys(t) : Object.keys(t),
              o = 0;
            o < n.length;
            o++
          )
            for (var s = n[o], r = t[s], a = e; a; ) {
              if (a._provided && r in a._provided) {
                i[s] = a._provided[r];
                break;
              }
              a = a.$parent;
            }
          return i;
        }
      }
      function Zt(t, e, i, o, s) {
        var r = {},
          a = t.options.props;
        if (n(a)) for (var l in a) r[l] = H(l, a, e || {});
        else n(i.attrs) && Yt(r, i.attrs), n(i.props) && Yt(r, i.props);
        var u = Object.create(o),
          c = function (t, e, i, n) {
            return ne(u, t, e, i, n, !0);
          },
          h = t.options.render.call(null, c, {
            data: i,
            props: r,
            children: s,
            parent: o,
            listeners: i.on || {},
            injections: Qt(t.options.inject, o),
            slots: function () {
              return vt(s, o);
            },
          });
        return (
          h instanceof Cs &&
            ((h.functionalContext = o),
            (h.functionalOptions = t.options),
            i.slot && ((h.data || (h.data = {})).slot = i.slot)),
          h
        );
      }
      function Yt(t, e) {
        for (var i in e) t[$o(i)] = e[i];
      }
      function Jt(t, e, s, r, l) {
        if (!i(t)) {
          var u = s.$options._base;
          if ((a(t) && (t = u.extend(t)), "function" == typeof t)) {
            var c;
            if (i(t.cid) && ((c = t), void 0 === (t = pt(c, u, s))))
              return ht(c, e, s, r, l);
            (e = e || {}), ve(t), n(e.model) && ie(t.options, e);
            var h = ot(e, t, l);
            if (o(t.options.functional)) return Zt(t, h, e, s, r);
            var p = e.on;
            if (((e.on = e.nativeOn), o(t.options.abstract))) {
              var d = e.slot;
              (e = {}), d && (e.slot = d);
            }
            te(e);
            var f = t.options.name || l;
            return new Cs(
              "vue-component-" + t.cid + (f ? "-" + f : ""),
              e,
              void 0,
              void 0,
              void 0,
              s,
              { Ctor: t, propsData: h, listeners: p, tag: l, children: r },
              c
            );
          }
        }
      }
      function Kt(t, e, i, o) {
        var s = t.componentOptions,
          r = {
            _isComponent: !0,
            parent: e,
            propsData: s.propsData,
            _componentTag: s.tag,
            _parentVnode: t,
            _parentListeners: s.listeners,
            _renderChildren: s.children,
            _parentElm: i || null,
            _refElm: o || null,
          },
          a = t.data.inlineTemplate;
        return (
          n(a) &&
            ((r.render = a.render), (r.staticRenderFns = a.staticRenderFns)),
          new s.Ctor(r)
        );
      }
      function te(t) {
        t.hook || (t.hook = {});
        for (var e = 0; e < Hs.length; e++) {
          var i = Hs[e],
            n = t.hook[i],
            o = Ws[i];
          t.hook[i] = n ? ee(o, n) : o;
        }
      }
      function ee(t, e) {
        return function (i, n, o, s) {
          t(i, n, o, s), e(i, n, o, s);
        };
      }
      function ie(t, e) {
        var i = (t.model && t.model.prop) || "value",
          o = (t.model && t.model.event) || "input";
        (e.props || (e.props = {}))[i] = e.model.value;
        var s = e.on || (e.on = {});
        n(s[o])
          ? (s[o] = [e.model.callback].concat(s[o]))
          : (s[o] = e.model.callback);
      }
      function ne(t, e, i, n, s, a) {
        return (
          (Array.isArray(i) || r(i)) && ((s = n), (n = i), (i = void 0)),
          o(a) && (s = Zs),
          oe(t, e, i, n, s)
        );
      }
      function oe(t, e, i, o, s) {
        if (n(i) && n(i.__ob__)) return Rs();
        if ((n(i) && n(i.is) && (e = i.is), !e)) return Rs();
        Array.isArray(o) &&
          "function" == typeof o[0] &&
          ((i = i || {}), (i.scopedSlots = { default: o[0] }), (o.length = 0)),
          s === Zs ? (o = at(o)) : s === Qs && (o = rt(o));
        var r, a;
        if ("string" == typeof e) {
          var l;
          (a = Jo.getTagNamespace(e)),
            (r = Jo.isReservedTag(e)
              ? new Cs(Jo.parsePlatformTagName(e), i, o, void 0, void 0, t)
              : n((l = W(t.$options, "components", e)))
              ? Jt(l, i, t, o, e)
              : new Cs(e, i, o, void 0, void 0, t));
        } else r = Jt(e, i, t, o);
        return n(r) ? (a && se(r, a), r) : Rs();
      }
      function se(t, e) {
        if (((t.ns = e), "foreignObject" !== t.tag && n(t.children)))
          for (var o = 0, s = t.children.length; o < s; o++) {
            var r = t.children[o];
            n(r.tag) && i(r.ns) && se(r, e);
          }
      }
      function re(t, e) {
        var i, o, s, r, l;
        if (Array.isArray(t) || "string" == typeof t)
          for (i = new Array(t.length), o = 0, s = t.length; o < s; o++)
            i[o] = e(t[o], o);
        else if ("number" == typeof t)
          for (i = new Array(t), o = 0; o < t; o++) i[o] = e(o + 1, o);
        else if (a(t))
          for (
            r = Object.keys(t), i = new Array(r.length), o = 0, s = r.length;
            o < s;
            o++
          )
            (l = r[o]), (i[o] = e(t[l], l, o));
        return n(i) && (i._isVList = !0), i;
      }
      function ae(t, e, i, n) {
        var o = this.$scopedSlots[t];
        if (o) return (i = i || {}), n && (i = g(g({}, n), i)), o(i) || e;
        var s = this.$slots[t];
        return s || e;
      }
      function le(t) {
        return W(this.$options, "filters", t, !0) || Ho;
      }
      function ue(t, e, i) {
        var n = Jo.keyCodes[e] || i;
        return Array.isArray(n) ? -1 === n.indexOf(t) : n !== t;
      }
      function ce(t, e, i, n, o) {
        if (i)
          if (a(i)) {
            Array.isArray(i) && (i = b(i));
            var s;
            for (var r in i)
              !(function (r) {
                if ("class" === r || "style" === r || jo(r)) s = t;
                else {
                  var a = t.attrs && t.attrs.type;
                  s =
                    n || Jo.mustUseProp(e, a, r)
                      ? t.domProps || (t.domProps = {})
                      : t.attrs || (t.attrs = {});
                }
                if (!(r in s) && ((s[r] = i[r]), o)) {
                  (t.on || (t.on = {}))["update:" + r] = function (t) {
                    i[r] = t;
                  };
                }
              })(r);
          } else;
        return t;
      }
      function he(t, e) {
        var i = this._staticTrees[t];
        return i && !e
          ? Array.isArray(i)
            ? tt(i)
            : K(i)
          : ((i = this._staticTrees[t] =
              this.$options.staticRenderFns[t].call(this._renderProxy)),
            de(i, "__static__" + t, !1),
            i);
      }
      function pe(t, e, i) {
        return de(t, "__once__" + e + (i ? "_" + i : ""), !0), t;
      }
      function de(t, e, i) {
        if (Array.isArray(t))
          for (var n = 0; n < t.length; n++)
            t[n] && "string" != typeof t[n] && fe(t[n], e + "_" + n, i);
        else fe(t, e, i);
      }
      function fe(t, e, i) {
        (t.isStatic = !0), (t.key = e), (t.isOnce = i);
      }
      function me(t, e) {
        if (e)
          if (l(e)) {
            var i = (t.on = t.on ? g({}, t.on) : {});
            for (var n in e) {
              var o = i[n],
                s = e[n];
              i[n] = o ? [].concat(s, o) : s;
            }
          } else;
        return t;
      }
      function ye(t) {
        (t._vnode = null), (t._staticTrees = null);
        var e = (t.$vnode = t.$options._parentVnode),
          i = e && e.context;
        (t.$slots = vt(t.$options._renderChildren, i)),
          (t.$scopedSlots = Ko),
          (t._c = function (e, i, n, o) {
            return ne(t, e, i, n, o, !1);
          }),
          (t.$createElement = function (e, i, n, o) {
            return ne(t, e, i, n, o, !0);
          });
        var n = e && e.data;
        E(t, "$attrs", n && n.attrs, null, !0),
          E(t, "$listeners", t.$options._parentListeners, null, !0);
      }
      function _e(t, e) {
        var i = (t.$options = Object.create(t.constructor.options));
        (i.parent = e.parent),
          (i.propsData = e.propsData),
          (i._parentVnode = e._parentVnode),
          (i._parentListeners = e._parentListeners),
          (i._renderChildren = e._renderChildren),
          (i._componentTag = e._componentTag),
          (i._parentElm = e._parentElm),
          (i._refElm = e._refElm),
          e.render &&
            ((i.render = e.render), (i.staticRenderFns = e.staticRenderFns));
      }
      function ve(t) {
        var e = t.options;
        if (t.super) {
          var i = ve(t.super);
          if (i !== t.superOptions) {
            t.superOptions = i;
            var n = ge(t);
            n && g(t.extendOptions, n),
              (e = t.options = G(i, t.extendOptions)),
              e.name && (e.components[e.name] = t);
          }
        }
        return e;
      }
      function ge(t) {
        var e,
          i = t.options,
          n = t.extendOptions,
          o = t.sealedOptions;
        for (var s in i)
          i[s] !== o[s] && (e || (e = {}), (e[s] = be(i[s], n[s], o[s])));
        return e;
      }
      function be(t, e, i) {
        if (Array.isArray(t)) {
          var n = [];
          (i = Array.isArray(i) ? i : [i]), (e = Array.isArray(e) ? e : [e]);
          for (var o = 0; o < t.length; o++)
            (e.indexOf(t[o]) >= 0 || i.indexOf(t[o]) < 0) && n.push(t[o]);
          return n;
        }
        return t;
      }
      function Se(t) {
        this._init(t);
      }
      function xe(t) {
        t.use = function (t) {
          var e = this._installedPlugins || (this._installedPlugins = []);
          if (e.indexOf(t) > -1) return this;
          var i = v(arguments, 1);
          return (
            i.unshift(this),
            "function" == typeof t.install
              ? t.install.apply(t, i)
              : "function" == typeof t && t.apply(null, i),
            e.push(t),
            this
          );
        };
      }
      function we(t) {
        t.mixin = function (t) {
          return (this.options = G(this.options, t)), this;
        };
      }
      function Te(t) {
        t.cid = 0;
        var e = 1;
        t.extend = function (t) {
          t = t || {};
          var i = this,
            n = i.cid,
            o = t._Ctor || (t._Ctor = {});
          if (o[n]) return o[n];
          var s = t.name || i.options.name,
            r = function (t) {
              this._init(t);
            };
          return (
            (r.prototype = Object.create(i.prototype)),
            (r.prototype.constructor = r),
            (r.cid = e++),
            (r.options = G(i.options, t)),
            (r.super = i),
            r.options.props && Fe(r),
            r.options.computed && ke(r),
            (r.extend = i.extend),
            (r.mixin = i.mixin),
            (r.use = i.use),
            Zo.forEach(function (t) {
              r[t] = i[t];
            }),
            s && (r.options.components[s] = r),
            (r.superOptions = i.options),
            (r.extendOptions = t),
            (r.sealedOptions = g({}, r.options)),
            (o[n] = r),
            r
          );
        };
      }
      function Fe(t) {
        var e = t.options.props;
        for (var i in e) qt(t.prototype, "_props", i);
      }
      function ke(t) {
        var e = t.options.computed;
        for (var i in e) Vt(t.prototype, i, e[i]);
      }
      function Ae(t) {
        Zo.forEach(function (e) {
          t[e] = function (t, i) {
            return i
              ? ("component" === e &&
                  l(i) &&
                  ((i.name = i.name || t), (i = this.options._base.extend(i))),
                "directive" === e &&
                  "function" == typeof i &&
                  (i = { bind: i, update: i }),
                (this.options[e + "s"][t] = i),
                i)
              : this.options[e + "s"][t];
          };
        });
      }
      function Pe(t) {
        return t && (t.Ctor.options.name || t.tag);
      }
      function Oe(t, e) {
        return Array.isArray(t)
          ? t.indexOf(e) > -1
          : "string" == typeof t
          ? t.split(",").indexOf(e) > -1
          : !!u(t) && t.test(e);
      }
      function Ce(t, e, i) {
        for (var n in t) {
          var o = t[n];
          if (o) {
            var s = Pe(o.componentOptions);
            s && !i(s) && (o !== e && Be(o), (t[n] = null));
          }
        }
      }
      function Be(t) {
        t && t.componentInstance.$destroy();
      }
      function Xe(t) {
        for (var e = t.data, i = t, o = t; n(o.componentInstance); )
          (o = o.componentInstance._vnode), o.data && (e = Re(o.data, e));
        for (; n((i = i.parent)); ) i.data && (e = Re(e, i.data));
        return Me(e.staticClass, e.class);
      }
      function Re(t, e) {
        return {
          staticClass: Ee(t.staticClass, e.staticClass),
          class: n(t.class) ? [t.class, e.class] : e.class,
        };
      }
      function Me(t, e) {
        return n(t) || n(e) ? Ee(t, qe(e)) : "";
      }
      function Ee(t, e) {
        return t ? (e ? t + " " + e : t) : e || "";
      }
      function qe(t) {
        return Array.isArray(t)
          ? De(t)
          : a(t)
          ? Ne(t)
          : "string" == typeof t
          ? t
          : "";
      }
      function De(t) {
        for (var e, i = "", o = 0, s = t.length; o < s; o++)
          n((e = qe(t[o]))) && "" !== e && (i && (i += " "), (i += e));
        return i;
      }
      function Ne(t) {
        var e = "";
        for (var i in t) t[i] && (e && (e += " "), (e += i));
        return e;
      }
      function Le(t) {
        return Sr(t) ? "svg" : "math" === t ? "math" : void 0;
      }
      function je(t) {
        if (!ns) return !0;
        if (wr(t)) return !1;
        if (((t = t.toLowerCase()), null != Tr[t])) return Tr[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1
          ? (Tr[t] =
              e.constructor === window.HTMLUnknownElement ||
              e.constructor === window.HTMLElement)
          : (Tr[t] = /HTMLUnknownElement/.test(e.toString()));
      }
      function Ie(t) {
        if ("string" == typeof t) {
          var e = document.querySelector(t);
          return e || document.createElement("div");
        }
        return t;
      }
      function Ve(t, e) {
        var i = document.createElement(t);
        return "select" !== t
          ? i
          : (e.data &&
              e.data.attrs &&
              void 0 !== e.data.attrs.multiple &&
              i.setAttribute("multiple", "multiple"),
            i);
      }
      function $e(t, e) {
        return document.createElementNS(gr[t], e);
      }
      function ze(t) {
        return document.createTextNode(t);
      }
      function Ue(t) {
        return document.createComment(t);
      }
      function Ge(t, e, i) {
        t.insertBefore(e, i);
      }
      function We(t, e) {
        t.removeChild(e);
      }
      function He(t, e) {
        t.appendChild(e);
      }
      function Qe(t) {
        return t.parentNode;
      }
      function Ze(t) {
        return t.nextSibling;
      }
      function Ye(t) {
        return t.tagName;
      }
      function Je(t, e) {
        t.textContent = e;
      }
      function Ke(t, e, i) {
        t.setAttribute(e, i);
      }
      function ti(t, e) {
        var i = t.data.ref;
        if (i) {
          var n = t.context,
            o = t.componentInstance || t.elm,
            s = n.$refs;
          e
            ? Array.isArray(s[i])
              ? f(s[i], o)
              : s[i] === o && (s[i] = void 0)
            : t.data.refInFor
            ? Array.isArray(s[i])
              ? s[i].indexOf(o) < 0 && s[i].push(o)
              : (s[i] = [o])
            : (s[i] = o);
        }
      }
      function ei(t, e) {
        return (
          t.key === e.key &&
          ((t.tag === e.tag &&
            t.isComment === e.isComment &&
            n(t.data) === n(e.data) &&
            ii(t, e)) ||
            (o(t.isAsyncPlaceholder) &&
              t.asyncFactory === e.asyncFactory &&
              i(e.asyncFactory.error)))
        );
      }
      function ii(t, e) {
        if ("input" !== t.tag) return !0;
        var i;
        return (
          (n((i = t.data)) && n((i = i.attrs)) && i.type) ===
          (n((i = e.data)) && n((i = i.attrs)) && i.type)
        );
      }
      function ni(t, e, i) {
        var o,
          s,
          r = {};
        for (o = e; o <= i; ++o) (s = t[o].key), n(s) && (r[s] = o);
        return r;
      }
      function oi(t, e) {
        (t.data.directives || e.data.directives) && si(t, e);
      }
      function si(t, e) {
        var i,
          n,
          o,
          s = t === Ar,
          r = e === Ar,
          a = ri(t.data.directives, t.context),
          l = ri(e.data.directives, e.context),
          u = [],
          c = [];
        for (i in l)
          (n = a[i]),
            (o = l[i]),
            n
              ? ((o.oldValue = n.value),
                li(o, "update", e, t),
                o.def && o.def.componentUpdated && c.push(o))
              : (li(o, "bind", e, t), o.def && o.def.inserted && u.push(o));
        if (u.length) {
          var h = function () {
            for (var i = 0; i < u.length; i++) li(u[i], "inserted", e, t);
          };
          s ? nt(e.data.hook || (e.data.hook = {}), "insert", h) : h();
        }
        if (
          (c.length &&
            nt(e.data.hook || (e.data.hook = {}), "postpatch", function () {
              for (var i = 0; i < c.length; i++)
                li(c[i], "componentUpdated", e, t);
            }),
          !s)
        )
          for (i in a) l[i] || li(a[i], "unbind", t, t, r);
      }
      function ri(t, e) {
        var i = Object.create(null);
        if (!t) return i;
        var n, o;
        for (n = 0; n < t.length; n++)
          (o = t[n]),
            o.modifiers || (o.modifiers = Cr),
            (i[ai(o)] = o),
            (o.def = W(e.$options, "directives", o.name, !0));
        return i;
      }
      function ai(t) {
        return (
          t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        );
      }
      function li(t, e, i, n, o) {
        var s = t.def && t.def[e];
        if (s)
          try {
            s(i.elm, t, i, n, o);
          } catch (n) {
            P(n, i.context, "directive " + t.name + " " + e + " hook");
          }
      }
      function ui(t, e) {
        var o = e.componentOptions;
        if (
          !(
            (n(o) && !1 === o.Ctor.options.inheritAttrs) ||
            (i(t.data.attrs) && i(e.data.attrs))
          )
        ) {
          var s,
            r,
            a = e.elm,
            l = t.data.attrs || {},
            u = e.data.attrs || {};
          n(u.__ob__) && (u = e.data.attrs = g({}, u));
          for (s in u) (r = u[s]), l[s] !== r && ci(a, s, r);
          rs && u.value !== l.value && ci(a, "value", u.value);
          for (s in l)
            i(u[s]) &&
              (yr(s)
                ? a.removeAttributeNS(mr, _r(s))
                : dr(s) || a.removeAttribute(s));
        }
      }
      function ci(t, e, i) {
        fr(e)
          ? vr(i)
            ? t.removeAttribute(e)
            : t.setAttribute(e, e)
          : dr(e)
          ? t.setAttribute(e, vr(i) || "false" === i ? "false" : "true")
          : yr(e)
          ? vr(i)
            ? t.removeAttributeNS(mr, _r(e))
            : t.setAttributeNS(mr, e, i)
          : vr(i)
          ? t.removeAttribute(e)
          : t.setAttribute(e, i);
      }
      function hi(t, e) {
        var o = e.elm,
          s = e.data,
          r = t.data;
        if (
          !(
            i(s.staticClass) &&
            i(s.class) &&
            (i(r) || (i(r.staticClass) && i(r.class)))
          )
        ) {
          var a = Xe(e),
            l = o._transitionClasses;
          n(l) && (a = Ee(a, qe(l))),
            a !== o._prevClass &&
              (o.setAttribute("class", a), (o._prevClass = a));
        }
      }
      function pi(t) {
        function e() {
          (r || (r = [])).push(t.slice(f, o).trim()), (f = o + 1);
        }
        var i,
          n,
          o,
          s,
          r,
          a = !1,
          l = !1,
          u = !1,
          c = !1,
          h = 0,
          p = 0,
          d = 0,
          f = 0;
        for (o = 0; o < t.length; o++)
          if (((n = i), (i = t.charCodeAt(o)), a))
            39 === i && 92 !== n && (a = !1);
          else if (l) 34 === i && 92 !== n && (l = !1);
          else if (u) 96 === i && 92 !== n && (u = !1);
          else if (c) 47 === i && 92 !== n && (c = !1);
          else if (
            124 !== i ||
            124 === t.charCodeAt(o + 1) ||
            124 === t.charCodeAt(o - 1) ||
            h ||
            p ||
            d
          ) {
            switch (i) {
              case 34:
                l = !0;
                break;
              case 39:
                a = !0;
                break;
              case 96:
                u = !0;
                break;
              case 40:
                d++;
                break;
              case 41:
                d--;
                break;
              case 91:
                p++;
                break;
              case 93:
                p--;
                break;
              case 123:
                h++;
                break;
              case 125:
                h--;
            }
            if (47 === i) {
              for (
                var m = o - 1, y = void 0;
                m >= 0 && " " === (y = t.charAt(m));
                m--
              );
              (y && Mr.test(y)) || (c = !0);
            }
          } else void 0 === s ? ((f = o + 1), (s = t.slice(0, o).trim())) : e();
        if ((void 0 === s ? (s = t.slice(0, o).trim()) : 0 !== f && e(), r))
          for (o = 0; o < r.length; o++) s = di(s, r[o]);
        return s;
      }
      function di(t, e) {
        var i = e.indexOf("(");
        return i < 0
          ? '_f("' + e + '")(' + t + ")"
          : '_f("' + e.slice(0, i) + '")(' + t + "," + e.slice(i + 1);
      }
      function fi(t) {
        console.error("[Vue compiler]: " + t);
      }
      function mi(t, e) {
        return t
          ? t
              .map(function (t) {
                return t[e];
              })
              .filter(function (t) {
                return t;
              })
          : [];
      }
      function yi(t, e, i) {
        (t.props || (t.props = [])).push({ name: e, value: i });
      }
      function _i(t, e, i) {
        (t.attrs || (t.attrs = [])).push({ name: e, value: i });
      }
      function vi(t, e, i, n, o, s) {
        (t.directives || (t.directives = [])).push({
          name: e,
          rawName: i,
          value: n,
          arg: o,
          modifiers: s,
        });
      }
      function gi(t, e, i, n, o, s) {
        n && n.capture && (delete n.capture, (e = "!" + e)),
          n && n.once && (delete n.once, (e = "~" + e)),
          n && n.passive && (delete n.passive, (e = "&" + e));
        var r;
        n && n.native
          ? (delete n.native, (r = t.nativeEvents || (t.nativeEvents = {})))
          : (r = t.events || (t.events = {}));
        var a = { value: i, modifiers: n },
          l = r[e];
        Array.isArray(l)
          ? o
            ? l.unshift(a)
            : l.push(a)
          : (r[e] = l ? (o ? [a, l] : [l, a]) : a);
      }
      function bi(t, e, i) {
        var n = Si(t, ":" + e) || Si(t, "v-bind:" + e);
        if (null != n) return pi(n);
        if (!1 !== i) {
          var o = Si(t, e);
          if (null != o) return JSON.stringify(o);
        }
      }
      function Si(t, e) {
        var i;
        if (null != (i = t.attrsMap[e]))
          for (var n = t.attrsList, o = 0, s = n.length; o < s; o++)
            if (n[o].name === e) {
              n.splice(o, 1);
              break;
            }
        return i;
      }
      function xi(t, e, i) {
        var n = i || {},
          o = n.number,
          s = n.trim,
          r = "$$v";
        s && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
          o && (r = "_n(" + r + ")");
        var a = wi(e, r);
        t.model = {
          value: "(" + e + ")",
          expression: '"' + e + '"',
          callback: "function ($$v) {" + a + "}",
        };
      }
      function wi(t, e) {
        var i = Ti(t);
        return null === i.idx
          ? t + "=" + e
          : "$set(" + i.exp + ", " + i.idx + ", " + e + ")";
      }
      function Ti(t) {
        if (
          ((ir = t),
          (er = ir.length),
          (or = sr = rr = 0),
          t.indexOf("[") < 0 || t.lastIndexOf("]") < er - 1)
        )
          return { exp: t, idx: null };
        for (; !ki(); ) (nr = Fi()), Ai(nr) ? Oi(nr) : 91 === nr && Pi(nr);
        return { exp: t.substring(0, sr), idx: t.substring(sr + 1, rr) };
      }
      function Fi() {
        return ir.charCodeAt(++or);
      }
      function ki() {
        return or >= er;
      }
      function Ai(t) {
        return 34 === t || 39 === t;
      }
      function Pi(t) {
        var e = 1;
        for (sr = or; !ki(); )
          if (((t = Fi()), Ai(t))) Oi(t);
          else if ((91 === t && e++, 93 === t && e--, 0 === e)) {
            rr = or;
            break;
          }
      }
      function Oi(t) {
        for (var e = t; !ki() && (t = Fi()) !== e; );
      }
      function Ci(t, e, i) {
        ar = i;
        var n = e.value,
          o = e.modifiers,
          s = t.tag,
          r = t.attrsMap.type;
        if (t.component) return xi(t, n, o), !1;
        if ("select" === s) Ri(t, n, o);
        else if ("input" === s && "checkbox" === r) Bi(t, n, o);
        else if ("input" === s && "radio" === r) Xi(t, n, o);
        else if ("input" === s || "textarea" === s) Mi(t, n, o);
        else if (!Jo.isReservedTag(s)) return xi(t, n, o), !1;
        return !0;
      }
      function Bi(t, e, i) {
        var n = i && i.number,
          o = bi(t, "value") || "null",
          s = bi(t, "true-value") || "true",
          r = bi(t, "false-value") || "false";
        yi(
          t,
          "checked",
          "Array.isArray(" +
            e +
            ")?_i(" +
            e +
            "," +
            o +
            ")>-1" +
            ("true" === s ? ":(" + e + ")" : ":_q(" + e + "," + s + ")")
        ),
          gi(
            t,
            qr,
            "var $$a=" +
              e +
              ",$$el=$event.target,$$c=$$el.checked?(" +
              s +
              "):(" +
              r +
              ");if(Array.isArray($$a)){var $$v=" +
              (n ? "_n(" + o + ")" : o) +
              ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" +
              e +
              "=$$a.concat($$v))}else{$$i>-1&&(" +
              e +
              "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" +
              wi(e, "$$c") +
              "}",
            null,
            !0
          );
      }
      function Xi(t, e, i) {
        var n = i && i.number,
          o = bi(t, "value") || "null";
        (o = n ? "_n(" + o + ")" : o),
          yi(t, "checked", "_q(" + e + "," + o + ")"),
          gi(t, qr, wi(e, o), null, !0);
      }
      function Ri(t, e, i) {
        var n = i && i.number,
          o =
            'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
            (n ? "_n(val)" : "val") +
            "})",
          s = "var $$selectedVal = " + o + ";";
        (s =
          s +
          " " +
          wi(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]")),
          gi(t, "change", s, null, !0);
      }
      function Mi(t, e, i) {
        var n = t.attrsMap.type,
          o = i || {},
          s = o.lazy,
          r = o.number,
          a = o.trim,
          l = !s && "range" !== n,
          u = s ? "change" : "range" === n ? Er : "input",
          c = "$event.target.value";
        a && (c = "$event.target.value.trim()"), r && (c = "_n(" + c + ")");
        var h = wi(e, c);
        l && (h = "if($event.target.composing)return;" + h),
          yi(t, "value", "(" + e + ")"),
          gi(t, u, h, null, !0),
          (a || r) && gi(t, "blur", "$forceUpdate()");
      }
      function Ei(t) {
        var e;
        n(t[Er]) &&
          ((e = ss ? "change" : "input"),
          (t[e] = [].concat(t[Er], t[e] || [])),
          delete t[Er]),
          n(t[qr]) &&
            ((e = cs ? "click" : "change"),
            (t[e] = [].concat(t[qr], t[e] || [])),
            delete t[qr]);
      }
      function qi(t, e, i, n, o) {
        if (i) {
          var s = e,
            r = lr;
          e = function (i) {
            null !==
              (1 === arguments.length ? s(i) : s.apply(null, arguments)) &&
              Di(t, e, n, r);
          };
        }
        lr.addEventListener(t, e, ps ? { capture: n, passive: o } : n);
      }
      function Di(t, e, i, n) {
        (n || lr).removeEventListener(t, e, i);
      }
      function Ni(t, e) {
        if (!i(t.data.on) || !i(e.data.on)) {
          var n = e.data.on || {},
            o = t.data.on || {};
          (lr = e.elm), Ei(n), it(n, o, qi, Di, e.context);
        }
      }
      function Li(t, e) {
        if (!i(t.data.domProps) || !i(e.data.domProps)) {
          var o,
            s,
            r = e.elm,
            a = t.data.domProps || {},
            l = e.data.domProps || {};
          n(l.__ob__) && (l = e.data.domProps = g({}, l));
          for (o in a) i(l[o]) && (r[o] = "");
          for (o in l)
            if (
              ((s = l[o]),
              ("textContent" !== o && "innerHTML" !== o) ||
                (e.children && (e.children.length = 0), s !== a[o]))
            )
              if ("value" === o) {
                r._value = s;
                var u = i(s) ? "" : String(s);
                ji(r, e, u) && (r.value = u);
              } else r[o] = s;
        }
      }
      function ji(t, e, i) {
        return !t.composing && ("option" === e.tag || Ii(t, i) || Vi(t, i));
      }
      function Ii(t, e) {
        var i = !0;
        try {
          i = document.activeElement !== t;
        } catch (t) {}
        return i && t.value !== e;
      }
      function Vi(t, e) {
        var i = t.value,
          o = t._vModifiers;
        return n(o) && o.number
          ? p(i) !== p(e)
          : n(o) && o.trim
          ? i.trim() !== e.trim()
          : i !== e;
      }
      function $i(t) {
        var e = zi(t.style);
        return t.staticStyle ? g(t.staticStyle, e) : e;
      }
      function zi(t) {
        return Array.isArray(t) ? b(t) : "string" == typeof t ? Lr(t) : t;
      }
      function Ui(t, e) {
        var i,
          n = {};
        if (e)
          for (var o = t; o.componentInstance; )
            (o = o.componentInstance._vnode),
              o.data && (i = $i(o.data)) && g(n, i);
        (i = $i(t.data)) && g(n, i);
        for (var s = t; (s = s.parent); ) s.data && (i = $i(s.data)) && g(n, i);
        return n;
      }
      function Gi(t, e) {
        var o = e.data,
          s = t.data;
        if (
          !(i(o.staticStyle) && i(o.style) && i(s.staticStyle) && i(s.style))
        ) {
          var r,
            a,
            l = e.elm,
            u = s.staticStyle,
            c = s.normalizedStyle || s.style || {},
            h = u || c,
            p = zi(e.data.style) || {};
          e.data.normalizedStyle = n(p.__ob__) ? g({}, p) : p;
          var d = Ui(e, !0);
          for (a in h) i(d[a]) && Vr(l, a, "");
          for (a in d) (r = d[a]) !== h[a] && Vr(l, a, null == r ? "" : r);
        }
      }
      function Wi(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(" ") > -1
              ? e.split(/\s+/).forEach(function (e) {
                  return t.classList.add(e);
                })
              : t.classList.add(e);
          else {
            var i = " " + (t.getAttribute("class") || "") + " ";
            i.indexOf(" " + e + " ") < 0 &&
              t.setAttribute("class", (i + e).trim());
          }
      }
      function Hi(t, e) {
        if (e && (e = e.trim()))
          if (t.classList)
            e.indexOf(" ") > -1
              ? e.split(/\s+/).forEach(function (e) {
                  return t.classList.remove(e);
                })
              : t.classList.remove(e),
              t.classList.length || t.removeAttribute("class");
          else {
            for (
              var i = " " + (t.getAttribute("class") || "") + " ",
                n = " " + e + " ";
              i.indexOf(n) >= 0;

            )
              i = i.replace(n, " ");
            (i = i.trim()),
              i ? t.setAttribute("class", i) : t.removeAttribute("class");
          }
      }
      function Qi(t) {
        if (t) {
          if ("object" == typeof t) {
            var e = {};
            return !1 !== t.css && g(e, Gr(t.name || "v")), g(e, t), e;
          }
          return "string" == typeof t ? Gr(t) : void 0;
        }
      }
      function Zi(t) {
        ta(function () {
          ta(t);
        });
      }
      function Yi(t, e) {
        var i = t._transitionClasses || (t._transitionClasses = []);
        i.indexOf(e) < 0 && (i.push(e), Wi(t, e));
      }
      function Ji(t, e) {
        t._transitionClasses && f(t._transitionClasses, e), Hi(t, e);
      }
      function Ki(t, e, i) {
        var n = tn(t, e),
          o = n.type,
          s = n.timeout,
          r = n.propCount;
        if (!o) return i();
        var a = o === Hr ? Yr : Kr,
          l = 0,
          u = function () {
            t.removeEventListener(a, c), i();
          },
          c = function (e) {
            e.target === t && ++l >= r && u();
          };
        setTimeout(function () {
          l < r && u();
        }, s + 1),
          t.addEventListener(a, c);
      }
      function tn(t, e) {
        var i,
          n = window.getComputedStyle(t),
          o = n[Zr + "Delay"].split(", "),
          s = n[Zr + "Duration"].split(", "),
          r = en(o, s),
          a = n[Jr + "Delay"].split(", "),
          l = n[Jr + "Duration"].split(", "),
          u = en(a, l),
          c = 0,
          h = 0;
        return (
          e === Hr
            ? r > 0 && ((i = Hr), (c = r), (h = s.length))
            : e === Qr
            ? u > 0 && ((i = Qr), (c = u), (h = l.length))
            : ((c = Math.max(r, u)),
              (i = c > 0 ? (r > u ? Hr : Qr) : null),
              (h = i ? (i === Hr ? s.length : l.length) : 0)),
          {
            type: i,
            timeout: c,
            propCount: h,
            hasTransform: i === Hr && ea.test(n[Zr + "Property"]),
          }
        );
      }
      function en(t, e) {
        for (; t.length < e.length; ) t = t.concat(t);
        return Math.max.apply(
          null,
          e.map(function (e, i) {
            return nn(e) + nn(t[i]);
          })
        );
      }
      function nn(t) {
        return 1e3 * Number(t.slice(0, -1));
      }
      function on(t, e) {
        var o = t.elm;
        n(o._leaveCb) && ((o._leaveCb.cancelled = !0), o._leaveCb());
        var s = Qi(t.data.transition);
        if (!i(s) && !n(o._enterCb) && 1 === o.nodeType) {
          for (
            var r = s.css,
              l = s.type,
              u = s.enterClass,
              c = s.enterToClass,
              h = s.enterActiveClass,
              d = s.appearClass,
              f = s.appearToClass,
              m = s.appearActiveClass,
              y = s.beforeEnter,
              _ = s.enter,
              v = s.afterEnter,
              g = s.enterCancelled,
              b = s.beforeAppear,
              S = s.appear,
              x = s.afterAppear,
              w = s.appearCancelled,
              F = s.duration,
              k = Es,
              A = Es.$vnode;
            A && A.parent;

          )
            (A = A.parent), (k = A.context);
          var P = !k._isMounted || !t.isRootInsert;
          if (!P || S || "" === S) {
            var O = P && d ? d : u,
              C = P && m ? m : h,
              B = P && f ? f : c,
              X = P ? b || y : y,
              R = P && "function" == typeof S ? S : _,
              M = P ? x || v : v,
              E = P ? w || g : g,
              q = p(a(F) ? F.enter : F),
              D = !1 !== r && !rs,
              N = an(R),
              L = (o._enterCb = T(function () {
                D && (Ji(o, B), Ji(o, C)),
                  L.cancelled ? (D && Ji(o, O), E && E(o)) : M && M(o),
                  (o._enterCb = null);
              }));
            t.data.show ||
              nt(t.data.hook || (t.data.hook = {}), "insert", function () {
                var e = o.parentNode,
                  i = e && e._pending && e._pending[t.key];
                i && i.tag === t.tag && i.elm._leaveCb && i.elm._leaveCb(),
                  R && R(o, L);
              }),
              X && X(o),
              D &&
                (Yi(o, O),
                Yi(o, C),
                Zi(function () {
                  Yi(o, B),
                    Ji(o, O),
                    L.cancelled ||
                      N ||
                      (rn(q) ? setTimeout(L, q) : Ki(o, l, L));
                })),
              t.data.show && (e && e(), R && R(o, L)),
              D || N || L();
          }
        }
      }
      function sn(t, e) {
        function o() {
          w.cancelled ||
            (t.data.show ||
              ((s.parentNode._pending || (s.parentNode._pending = {}))[t.key] =
                t),
            f && f(s),
            b &&
              (Yi(s, c),
              Yi(s, d),
              Zi(function () {
                Yi(s, h),
                  Ji(s, c),
                  w.cancelled || S || (rn(x) ? setTimeout(w, x) : Ki(s, u, w));
              })),
            m && m(s, w),
            b || S || w());
        }
        var s = t.elm;
        n(s._enterCb) && ((s._enterCb.cancelled = !0), s._enterCb());
        var r = Qi(t.data.transition);
        if (i(r)) return e();
        if (!n(s._leaveCb) && 1 === s.nodeType) {
          var l = r.css,
            u = r.type,
            c = r.leaveClass,
            h = r.leaveToClass,
            d = r.leaveActiveClass,
            f = r.beforeLeave,
            m = r.leave,
            y = r.afterLeave,
            _ = r.leaveCancelled,
            v = r.delayLeave,
            g = r.duration,
            b = !1 !== l && !rs,
            S = an(m),
            x = p(a(g) ? g.leave : g),
            w = (s._leaveCb = T(function () {
              s.parentNode &&
                s.parentNode._pending &&
                (s.parentNode._pending[t.key] = null),
                b && (Ji(s, h), Ji(s, d)),
                w.cancelled ? (b && Ji(s, c), _ && _(s)) : (e(), y && y(s)),
                (s._leaveCb = null);
            }));
          v ? v(o) : o();
        }
      }
      function rn(t) {
        return "number" == typeof t && !isNaN(t);
      }
      function an(t) {
        if (i(t)) return !1;
        var e = t.fns;
        return n(e)
          ? an(Array.isArray(e) ? e[0] : e)
          : (t._length || t.length) > 1;
      }
      function ln(t, e) {
        !0 !== e.data.show && on(e);
      }
      function un(t, e, i) {
        var n = e.value,
          o = t.multiple;
        if (!o || Array.isArray(n)) {
          for (var s, r, a = 0, l = t.options.length; a < l; a++)
            if (((r = t.options[a]), o))
              (s = w(n, cn(r)) > -1), r.selected !== s && (r.selected = s);
            else if (x(cn(r), n))
              return void (t.selectedIndex !== a && (t.selectedIndex = a));
          o || (t.selectedIndex = -1);
        }
      }
      function cn(t) {
        return "_value" in t ? t._value : t.value;
      }
      function hn(t) {
        t.target.composing = !0;
      }
      function pn(t) {
        t.target.composing &&
          ((t.target.composing = !1), dn(t.target, "input"));
      }
      function dn(t, e) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(e, !0, !0), t.dispatchEvent(i);
      }
      function fn(t) {
        return !t.componentInstance || (t.data && t.data.transition)
          ? t
          : fn(t.componentInstance._vnode);
      }
      function mn(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? mn(dt(e.children)) : t;
      }
      function yn(t) {
        var e = {},
          i = t.$options;
        for (var n in i.propsData) e[n] = t[n];
        var o = i._parentListeners;
        for (var s in o) e[$o(s)] = o[s];
        return e;
      }
      function _n(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
          return t("keep-alive", { props: e.componentOptions.propsData });
      }
      function vn(t) {
        for (; (t = t.parent); ) if (t.data.transition) return !0;
      }
      function gn(t, e) {
        return e.key === t.key && e.tag === t.tag;
      }
      function bn(t) {
        return t.isComment && t.asyncFactory;
      }
      function Sn(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
      }
      function xn(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
      }
      function wn(t) {
        var e = t.data.pos,
          i = t.data.newPos,
          n = e.left - i.left,
          o = e.top - i.top;
        if (n || o) {
          t.data.moved = !0;
          var s = t.elm.style;
          (s.transform = s.WebkitTransform =
            "translate(" + n + "px," + o + "px)"),
            (s.transitionDuration = "0s");
        }
      }
      function Tn(t, e) {
        var i = e ? ga(e) : _a;
        if (i.test(t)) {
          for (var n, o, s = [], r = (i.lastIndex = 0); (n = i.exec(t)); ) {
            (o = n.index), o > r && s.push(JSON.stringify(t.slice(r, o)));
            var a = pi(n[1].trim());
            s.push("_s(" + a + ")"), (r = o + n[0].length);
          }
          return (
            r < t.length && s.push(JSON.stringify(t.slice(r))), s.join("+")
          );
        }
      }
      function Fn(t, e) {
        var i = (e.warn, Si(t, "class"));
        i && (t.staticClass = JSON.stringify(i));
        var n = bi(t, "class", !1);
        n && (t.classBinding = n);
      }
      function kn(t) {
        var e = "";
        return (
          t.staticClass && (e += "staticClass:" + t.staticClass + ","),
          t.classBinding && (e += "class:" + t.classBinding + ","),
          e
        );
      }
      function An(t, e) {
        var i = (e.warn, Si(t, "style"));
        if (i) {
          t.staticStyle = JSON.stringify(Lr(i));
        }
        var n = bi(t, "style", !1);
        n && (t.styleBinding = n);
      }
      function Pn(t) {
        var e = "";
        return (
          t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
          t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
          e
        );
      }
      function On(t, e) {
        e.value && yi(t, "textContent", "_s(" + e.value + ")");
      }
      function Cn(t, e) {
        e.value && yi(t, "innerHTML", "_s(" + e.value + ")");
      }
      function Bn(t, e) {
        var i = e ? il : el;
        return t.replace(i, function (t) {
          return tl[t];
        });
      }
      function Xn(t, e) {
        function i(e) {
          (c += e), (t = t.substring(e));
        }
        function n(t, i, n) {
          var o, a;
          if (
            (null == i && (i = c),
            null == n && (n = c),
            t && (a = t.toLowerCase()),
            t)
          )
            for (o = r.length - 1; o >= 0 && r[o].lowerCasedTag !== a; o--);
          else o = 0;
          if (o >= 0) {
            for (var l = r.length - 1; l >= o; l--)
              e.end && e.end(r[l].tag, i, n);
            (r.length = o), (s = o && r[o - 1].tag);
          } else
            "br" === a
              ? e.start && e.start(t, [], !0, i, n)
              : "p" === a &&
                (e.start && e.start(t, [], !1, i, n), e.end && e.end(t, i, n));
        }
        for (
          var o,
            s,
            r = [],
            a = e.expectHTML,
            l = e.isUnaryTag || Wo,
            u = e.canBeLeftOpenTag || Wo,
            c = 0;
          t;

        ) {
          if (((o = t), s && Ja(s))) {
            var h = 0,
              p = s.toLowerCase(),
              d =
                Ka[p] ||
                (Ka[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
              f = t.replace(d, function (t, i, n) {
                return (
                  (h = n.length),
                  Ja(p) ||
                    "noscript" === p ||
                    (i = i
                      .replace(/<!--([\s\S]*?)-->/g, "$1")
                      .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                  ol(p, i) && (i = i.slice(1)),
                  e.chars && e.chars(i),
                  ""
                );
              });
            (c += t.length - f.length), (t = f), n(p, c - h, c);
          } else {
            var m = t.indexOf("<");
            if (0 === m) {
              if (La.test(t)) {
                var y = t.indexOf("--\x3e");
                if (y >= 0) {
                  e.shouldKeepComment && e.comment(t.substring(4, y)), i(y + 3);
                  continue;
                }
              }
              if (ja.test(t)) {
                var _ = t.indexOf("]>");
                if (_ >= 0) {
                  i(_ + 2);
                  continue;
                }
              }
              var v = t.match(Na);
              if (v) {
                i(v[0].length);
                continue;
              }
              var g = t.match(Da);
              if (g) {
                var b = c;
                i(g[0].length), n(g[1], b, c);
                continue;
              }
              var S = (function () {
                var e = t.match(Ea);
                if (e) {
                  var n = { tagName: e[1], attrs: [], start: c };
                  i(e[0].length);
                  for (var o, s; !(o = t.match(qa)) && (s = t.match(Xa)); )
                    i(s[0].length), n.attrs.push(s);
                  if (o)
                    return (
                      (n.unarySlash = o[1]), i(o[0].length), (n.end = c), n
                    );
                }
              })();
              if (S) {
                !(function (t) {
                  var i = t.tagName,
                    o = t.unarySlash;
                  a && ("p" === s && ka(i) && n(s), u(i) && s === i && n(i));
                  for (
                    var c = l(i) || !!o,
                      h = t.attrs.length,
                      p = new Array(h),
                      d = 0;
                    d < h;
                    d++
                  ) {
                    var f = t.attrs[d];
                    Ia &&
                      -1 === f[0].indexOf('""') &&
                      ("" === f[3] && delete f[3],
                      "" === f[4] && delete f[4],
                      "" === f[5] && delete f[5]);
                    var m = f[3] || f[4] || f[5] || "";
                    p[d] = { name: f[1], value: Bn(m, e.shouldDecodeNewlines) };
                  }
                  c ||
                    (r.push({
                      tag: i,
                      lowerCasedTag: i.toLowerCase(),
                      attrs: p,
                    }),
                    (s = i)),
                    e.start && e.start(i, p, c, t.start, t.end);
                })(S),
                  ol(s, t) && i(1);
                continue;
              }
            }
            var x = void 0,
              w = void 0,
              T = void 0;
            if (m >= 0) {
              for (
                w = t.slice(m);
                !(
                  Da.test(w) ||
                  Ea.test(w) ||
                  La.test(w) ||
                  ja.test(w) ||
                  (T = w.indexOf("<", 1)) < 0
                );

              )
                (m += T), (w = t.slice(m));
              (x = t.substring(0, m)), i(m);
            }
            m < 0 && ((x = t), (t = "")), e.chars && x && e.chars(x);
          }
          if (t === o) {
            e.chars && e.chars(t);
            break;
          }
        }
        n();
      }
      function Rn(t, e) {
        function i(t) {
          t.pre && (a = !1), Wa(t.tag) && (l = !1);
        }
        (Va = e.warn || fi),
          (Wa = e.isPreTag || Wo),
          (Ha = e.mustUseProp || Wo),
          (Qa = e.getTagNamespace || Wo),
          (za = mi(e.modules, "transformNode")),
          (Ua = mi(e.modules, "preTransformNode")),
          (Ga = mi(e.modules, "postTransformNode")),
          ($a = e.delimiters);
        var n,
          o,
          s = [],
          r = !1 !== e.preserveWhitespace,
          a = !1,
          l = !1;
        return (
          Xn(t, {
            warn: Va,
            expectHTML: e.expectHTML,
            isUnaryTag: e.isUnaryTag,
            canBeLeftOpenTag: e.canBeLeftOpenTag,
            shouldDecodeNewlines: e.shouldDecodeNewlines,
            shouldKeepComment: e.comments,
            start: function (t, r, u) {
              var c = (o && o.ns) || Qa(t);
              ss && "svg" === c && (r = Jn(r));
              var h = {
                type: 1,
                tag: t,
                attrsList: r,
                attrsMap: Qn(r),
                parent: o,
                children: [],
              };
              c && (h.ns = c), Yn(h) && !ys() && (h.forbidden = !0);
              for (var p = 0; p < Ua.length; p++) Ua[p](h, e);
              if ((a || (Mn(h), h.pre && (a = !0)), Wa(h.tag) && (l = !0), a))
                En(h);
              else {
                Nn(h),
                  Ln(h),
                  $n(h),
                  qn(h),
                  (h.plain = !h.key && !r.length),
                  Dn(h),
                  zn(h),
                  Un(h);
                for (var d = 0; d < za.length; d++) za[d](h, e);
                Gn(h);
              }
              if (
                (n
                  ? s.length ||
                    (n.if &&
                      (h.elseif || h.else) &&
                      Vn(n, { exp: h.elseif, block: h }))
                  : (n = h),
                o && !h.forbidden)
              )
                if (h.elseif || h.else) jn(h, o);
                else if (h.slotScope) {
                  o.plain = !1;
                  var f = h.slotTarget || '"default"';
                  (o.scopedSlots || (o.scopedSlots = {}))[f] = h;
                } else o.children.push(h), (h.parent = o);
              u ? i(h) : ((o = h), s.push(h));
              for (var m = 0; m < Ga.length; m++) Ga[m](h, e);
            },
            end: function () {
              var t = s[s.length - 1],
                e = t.children[t.children.length - 1];
              e && 3 === e.type && " " === e.text && !l && t.children.pop(),
                (s.length -= 1),
                (o = s[s.length - 1]),
                i(t);
            },
            chars: function (t) {
              if (
                o &&
                (!ss || "textarea" !== o.tag || o.attrsMap.placeholder !== t)
              ) {
                var e = o.children;
                if (
                  (t =
                    l || t.trim()
                      ? Zn(o)
                        ? t
                        : pl(t)
                      : r && e.length
                      ? " "
                      : "")
                ) {
                  var i;
                  !a && " " !== t && (i = Tn(t, $a))
                    ? e.push({ type: 2, expression: i, text: t })
                    : (" " === t && e.length && " " === e[e.length - 1].text) ||
                      e.push({ type: 3, text: t });
                }
              }
            },
            comment: function (t) {
              o.children.push({ type: 3, text: t, isComment: !0 });
            },
          }),
          n
        );
      }
      function Mn(t) {
        null != Si(t, "v-pre") && (t.pre = !0);
      }
      function En(t) {
        var e = t.attrsList.length;
        if (e)
          for (var i = (t.attrs = new Array(e)), n = 0; n < e; n++)
            i[n] = {
              name: t.attrsList[n].name,
              value: JSON.stringify(t.attrsList[n].value),
            };
        else t.pre || (t.plain = !0);
      }
      function qn(t) {
        var e = bi(t, "key");
        e && (t.key = e);
      }
      function Dn(t) {
        var e = bi(t, "ref");
        e && ((t.ref = e), (t.refInFor = Wn(t)));
      }
      function Nn(t) {
        var e;
        if ((e = Si(t, "v-for"))) {
          var i = e.match(al);
          if (!i) return;
          t.for = i[2].trim();
          var n = i[1].trim(),
            o = n.match(ll);
          o
            ? ((t.alias = o[1].trim()),
              (t.iterator1 = o[2].trim()),
              o[3] && (t.iterator2 = o[3].trim()))
            : (t.alias = n);
        }
      }
      function Ln(t) {
        var e = Si(t, "v-if");
        if (e) (t.if = e), Vn(t, { exp: e, block: t });
        else {
          null != Si(t, "v-else") && (t.else = !0);
          var i = Si(t, "v-else-if");
          i && (t.elseif = i);
        }
      }
      function jn(t, e) {
        var i = In(e.children);
        i && i.if && Vn(i, { exp: t.elseif, block: t });
      }
      function In(t) {
        for (var e = t.length; e--; ) {
          if (1 === t[e].type) return t[e];
          t.pop();
        }
      }
      function Vn(t, e) {
        t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
      }
      function $n(t) {
        null != Si(t, "v-once") && (t.once = !0);
      }
      function zn(t) {
        if ("slot" === t.tag) t.slotName = bi(t, "name");
        else {
          var e = bi(t, "slot");
          e && (t.slotTarget = '""' === e ? '"default"' : e),
            "template" === t.tag && (t.slotScope = Si(t, "scope"));
        }
      }
      function Un(t) {
        var e;
        (e = bi(t, "is")) && (t.component = e),
          null != Si(t, "inline-template") && (t.inlineTemplate = !0);
      }
      function Gn(t) {
        var e,
          i,
          n,
          o,
          s,
          r,
          a,
          l = t.attrsList;
        for (e = 0, i = l.length; e < i; e++)
          if (((n = o = l[e].name), (s = l[e].value), rl.test(n)))
            if (
              ((t.hasBindings = !0),
              (r = Hn(n)),
              r && (n = n.replace(hl, "")),
              cl.test(n))
            )
              (n = n.replace(cl, "")),
                (s = pi(s)),
                (a = !1),
                r &&
                  (r.prop &&
                    ((a = !0),
                    "innerHtml" === (n = $o(n)) && (n = "innerHTML")),
                  r.camel && (n = $o(n)),
                  r.sync && gi(t, "update:" + $o(n), wi(s, "$event"))),
                a || (!t.component && Ha(t.tag, t.attrsMap.type, n))
                  ? yi(t, n, s)
                  : _i(t, n, s);
            else if (sl.test(n))
              (n = n.replace(sl, "")), gi(t, n, s, r, !1, Va);
            else {
              n = n.replace(rl, "");
              var u = n.match(ul),
                c = u && u[1];
              c && (n = n.slice(0, -(c.length + 1))), vi(t, n, o, s, c, r);
            }
          else {
            _i(t, n, JSON.stringify(s));
          }
      }
      function Wn(t) {
        for (var e = t; e; ) {
          if (void 0 !== e.for) return !0;
          e = e.parent;
        }
        return !1;
      }
      function Hn(t) {
        var e = t.match(hl);
        if (e) {
          var i = {};
          return (
            e.forEach(function (t) {
              i[t.slice(1)] = !0;
            }),
            i
          );
        }
      }
      function Qn(t) {
        for (var e = {}, i = 0, n = t.length; i < n; i++)
          e[t[i].name] = t[i].value;
        return e;
      }
      function Zn(t) {
        return "script" === t.tag || "style" === t.tag;
      }
      function Yn(t) {
        return (
          "style" === t.tag ||
          ("script" === t.tag &&
            (!t.attrsMap.type || "text/javascript" === t.attrsMap.type))
        );
      }
      function Jn(t) {
        for (var e = [], i = 0; i < t.length; i++) {
          var n = t[i];
          dl.test(n.name) || ((n.name = n.name.replace(fl, "")), e.push(n));
        }
        return e;
      }
      function Kn(t, e) {
        t &&
          ((Za = ml(e.staticKeys || "")),
          (Ya = e.isReservedTag || Wo),
          eo(t),
          io(t, !1));
      }
      function to(t) {
        return d(
          "type,tag,attrsList,attrsMap,plain,parent,children,attrs" +
            (t ? "," + t : "")
        );
      }
      function eo(t) {
        if (((t.static = no(t)), 1 === t.type)) {
          if (
            !Ya(t.tag) &&
            "slot" !== t.tag &&
            null == t.attrsMap["inline-template"]
          )
            return;
          for (var e = 0, i = t.children.length; e < i; e++) {
            var n = t.children[e];
            eo(n), n.static || (t.static = !1);
          }
          if (t.ifConditions)
            for (var o = 1, s = t.ifConditions.length; o < s; o++) {
              var r = t.ifConditions[o].block;
              eo(r), r.static || (t.static = !1);
            }
        }
      }
      function io(t, e) {
        if (1 === t.type) {
          if (
            ((t.static || t.once) && (t.staticInFor = e),
            t.static &&
              t.children.length &&
              (1 !== t.children.length || 3 !== t.children[0].type))
          )
            return void (t.staticRoot = !0);
          if (((t.staticRoot = !1), t.children))
            for (var i = 0, n = t.children.length; i < n; i++)
              io(t.children[i], e || !!t.for);
          if (t.ifConditions)
            for (var o = 1, s = t.ifConditions.length; o < s; o++)
              io(t.ifConditions[o].block, e);
        }
      }
      function no(t) {
        return (
          2 !== t.type &&
          (3 === t.type ||
            !(
              !t.pre &&
              (t.hasBindings ||
                t.if ||
                t.for ||
                Lo(t.tag) ||
                !Ya(t.tag) ||
                oo(t) ||
                !Object.keys(t).every(Za))
            ))
        );
      }
      function oo(t) {
        for (; t.parent; ) {
          if (((t = t.parent), "template" !== t.tag)) return !1;
          if (t.for) return !0;
        }
        return !1;
      }
      function so(t, e, i) {
        var n = e ? "nativeOn:{" : "on:{";
        for (var o in t) {
          n += '"' + o + '":' + ro(o, t[o]) + ",";
        }
        return n.slice(0, -1) + "}";
      }
      function ro(t, e) {
        if (!e) return "function(){}";
        if (Array.isArray(e))
          return (
            "[" +
            e
              .map(function (e) {
                return ro(t, e);
              })
              .join(",") +
            "]"
          );
        var i = _l.test(e.value),
          n = yl.test(e.value);
        if (e.modifiers) {
          var o = "",
            s = "",
            r = [];
          for (var a in e.modifiers)
            bl[a] ? ((s += bl[a]), vl[a] && r.push(a)) : r.push(a);
          r.length && (o += ao(r)), s && (o += s);
          return (
            "function($event){" +
            o +
            (i
              ? e.value + "($event)"
              : n
              ? "(" + e.value + ")($event)"
              : e.value) +
            "}"
          );
        }
        return i || n ? e.value : "function($event){" + e.value + "}";
      }
      function ao(t) {
        return (
          "if(!('button' in $event)&&" + t.map(lo).join("&&") + ")return null;"
        );
      }
      function lo(t) {
        var e = parseInt(t, 10);
        if (e) return "$event.keyCode!==" + e;
        var i = vl[t];
        return (
          "_k($event.keyCode," +
          JSON.stringify(t) +
          (i ? "," + JSON.stringify(i) : "") +
          ")"
        );
      }
      function uo(t, e) {
        t.wrapListeners = function (t) {
          return "_g(" + t + "," + e.value + ")";
        };
      }
      function co(t, e) {
        t.wrapData = function (i) {
          return (
            "_b(" +
            i +
            ",'" +
            t.tag +
            "'," +
            e.value +
            "," +
            (e.modifiers && e.modifiers.prop ? "true" : "false") +
            (e.modifiers && e.modifiers.sync ? ",true" : "") +
            ")"
          );
        };
      }
      function ho(t, e) {
        var i = new xl(e);
        return {
          render: "with(this){return " + (t ? po(t, i) : '_c("div")') + "}",
          staticRenderFns: i.staticRenderFns,
        };
      }
      function po(t, e) {
        if (t.staticRoot && !t.staticProcessed) return fo(t, e);
        if (t.once && !t.onceProcessed) return mo(t, e);
        if (t.for && !t.forProcessed) return vo(t, e);
        if (t.if && !t.ifProcessed) return yo(t, e);
        if ("template" !== t.tag || t.slotTarget) {
          if ("slot" === t.tag) return Bo(t, e);
          var i;
          if (t.component) i = Xo(t.component, t, e);
          else {
            var n = t.plain ? void 0 : go(t, e),
              o = t.inlineTemplate ? null : Fo(t, e, !0);
            i =
              "_c('" +
              t.tag +
              "'" +
              (n ? "," + n : "") +
              (o ? "," + o : "") +
              ")";
          }
          for (var s = 0; s < e.transforms.length; s++)
            i = e.transforms[s](t, i);
          return i;
        }
        return Fo(t, e) || "void 0";
      }
      function fo(t, e) {
        return (
          (t.staticProcessed = !0),
          e.staticRenderFns.push("with(this){return " + po(t, e) + "}"),
          "_m(" +
            (e.staticRenderFns.length - 1) +
            (t.staticInFor ? ",true" : "") +
            ")"
        );
      }
      function mo(t, e) {
        if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return yo(t, e);
        if (t.staticInFor) {
          for (var i = "", n = t.parent; n; ) {
            if (n.for) {
              i = n.key;
              break;
            }
            n = n.parent;
          }
          return i
            ? "_o(" + po(t, e) + "," + e.onceId++ + (i ? "," + i : "") + ")"
            : po(t, e);
        }
        return fo(t, e);
      }
      function yo(t, e, i, n) {
        return (t.ifProcessed = !0), _o(t.ifConditions.slice(), e, i, n);
      }
      function _o(t, e, i, n) {
        function o(t) {
          return i ? i(t, e) : t.once ? mo(t, e) : po(t, e);
        }
        if (!t.length) return n || "_e()";
        var s = t.shift();
        return s.exp
          ? "(" + s.exp + ")?" + o(s.block) + ":" + _o(t, e, i, n)
          : "" + o(s.block);
      }
      function vo(t, e, i, n) {
        var o = t.for,
          s = t.alias,
          r = t.iterator1 ? "," + t.iterator1 : "",
          a = t.iterator2 ? "," + t.iterator2 : "";
        return (
          (t.forProcessed = !0),
          (n || "_l") +
            "((" +
            o +
            "),function(" +
            s +
            r +
            a +
            "){return " +
            (i || po)(t, e) +
            "})"
        );
      }
      function go(t, e) {
        var i = "{",
          n = bo(t, e);
        n && (i += n + ","),
          t.key && (i += "key:" + t.key + ","),
          t.ref && (i += "ref:" + t.ref + ","),
          t.refInFor && (i += "refInFor:true,"),
          t.pre && (i += "pre:true,"),
          t.component && (i += 'tag:"' + t.tag + '",');
        for (var o = 0; o < e.dataGenFns.length; o++) i += e.dataGenFns[o](t);
        if (
          (t.attrs && (i += "attrs:{" + Ro(t.attrs) + "},"),
          t.props && (i += "domProps:{" + Ro(t.props) + "},"),
          t.events && (i += so(t.events, !1, e.warn) + ","),
          t.nativeEvents && (i += so(t.nativeEvents, !0, e.warn) + ","),
          t.slotTarget && (i += "slot:" + t.slotTarget + ","),
          t.scopedSlots && (i += xo(t.scopedSlots, e) + ","),
          t.model &&
            (i +=
              "model:{value:" +
              t.model.value +
              ",callback:" +
              t.model.callback +
              ",expression:" +
              t.model.expression +
              "},"),
          t.inlineTemplate)
        ) {
          var s = So(t, e);
          s && (i += s + ",");
        }
        return (
          (i = i.replace(/,$/, "") + "}"),
          t.wrapData && (i = t.wrapData(i)),
          t.wrapListeners && (i = t.wrapListeners(i)),
          i
        );
      }
      function bo(t, e) {
        var i = t.directives;
        if (i) {
          var n,
            o,
            s,
            r,
            a = "directives:[",
            l = !1;
          for (n = 0, o = i.length; n < o; n++) {
            (s = i[n]), (r = !0);
            var u = e.directives[s.name];
            u && (r = !!u(t, s, e.warn)),
              r &&
                ((l = !0),
                (a +=
                  '{name:"' +
                  s.name +
                  '",rawName:"' +
                  s.rawName +
                  '"' +
                  (s.value
                    ? ",value:(" +
                      s.value +
                      "),expression:" +
                      JSON.stringify(s.value)
                    : "") +
                  (s.arg ? ',arg:"' + s.arg + '"' : "") +
                  (s.modifiers
                    ? ",modifiers:" + JSON.stringify(s.modifiers)
                    : "") +
                  "},"));
          }
          return l ? a.slice(0, -1) + "]" : void 0;
        }
      }
      function So(t, e) {
        var i = t.children[0];
        if (1 === i.type) {
          var n = ho(i, e.options);
          return (
            "inlineTemplate:{render:function(){" +
            n.render +
            "},staticRenderFns:[" +
            n.staticRenderFns
              .map(function (t) {
                return "function(){" + t + "}";
              })
              .join(",") +
            "]}"
          );
        }
      }
      function xo(t, e) {
        return (
          "scopedSlots:_u([" +
          Object.keys(t)
            .map(function (i) {
              return wo(i, t[i], e);
            })
            .join(",") +
          "])"
        );
      }
      function wo(t, e, i) {
        return e.for && !e.forProcessed
          ? To(t, e, i)
          : "{key:" +
              t +
              ",fn:function(" +
              String(e.attrsMap.scope) +
              "){return " +
              ("template" === e.tag ? Fo(e, i) || "void 0" : po(e, i)) +
              "}}";
      }
      function To(t, e, i) {
        var n = e.for,
          o = e.alias,
          s = e.iterator1 ? "," + e.iterator1 : "",
          r = e.iterator2 ? "," + e.iterator2 : "";
        return (
          (e.forProcessed = !0),
          "_l((" +
            n +
            "),function(" +
            o +
            s +
            r +
            "){return " +
            wo(t, e, i) +
            "})"
        );
      }
      function Fo(t, e, i, n, o) {
        var s = t.children;
        if (s.length) {
          var r = s[0];
          if (
            1 === s.length &&
            r.for &&
            "template" !== r.tag &&
            "slot" !== r.tag
          )
            return (n || po)(r, e);
          var a = i ? ko(s, e.maybeComponent) : 0,
            l = o || Po;
          return (
            "[" +
            s
              .map(function (t) {
                return l(t, e);
              })
              .join(",") +
            "]" +
            (a ? "," + a : "")
          );
        }
      }
      function ko(t, e) {
        for (var i = 0, n = 0; n < t.length; n++) {
          var o = t[n];
          if (1 === o.type) {
            if (
              Ao(o) ||
              (o.ifConditions &&
                o.ifConditions.some(function (t) {
                  return Ao(t.block);
                }))
            ) {
              i = 2;
              break;
            }
            (e(o) ||
              (o.ifConditions &&
                o.ifConditions.some(function (t) {
                  return e(t.block);
                }))) &&
              (i = 1);
          }
        }
        return i;
      }
      function Ao(t) {
        return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
      }
      function Po(t, e) {
        return 1 === t.type
          ? po(t, e)
          : 3 === t.type && t.isComment
          ? Co(t)
          : Oo(t);
      }
      function Oo(t) {
        return (
          "_v(" +
          (2 === t.type ? t.expression : Mo(JSON.stringify(t.text))) +
          ")"
        );
      }
      function Co(t) {
        return "_e(" + JSON.stringify(t.text) + ")";
      }
      function Bo(t, e) {
        var i = t.slotName || '"default"',
          n = Fo(t, e),
          o = "_t(" + i + (n ? "," + n : ""),
          s =
            t.attrs &&
            "{" +
              t.attrs
                .map(function (t) {
                  return $o(t.name) + ":" + t.value;
                })
                .join(",") +
              "}",
          r = t.attrsMap["v-bind"];
        return (
          (!s && !r) || n || (o += ",null"),
          s && (o += "," + s),
          r && (o += (s ? "" : ",null") + "," + r),
          o + ")"
        );
      }
      function Xo(t, e, i) {
        var n = e.inlineTemplate ? null : Fo(e, i, !0);
        return "_c(" + t + "," + go(e, i) + (n ? "," + n : "") + ")";
      }
      function Ro(t) {
        for (var e = "", i = 0; i < t.length; i++) {
          var n = t[i];
          e += '"' + n.name + '":' + Mo(n.value) + ",";
        }
        return e.slice(0, -1);
      }
      function Mo(t) {
        return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      function Eo(t, e) {
        try {
          return new Function(t);
        } catch (i) {
          return e.push({ err: i, code: t }), S;
        }
      }
      function qo(t) {
        var e = Object.create(null);
        return function (i, n, o) {
          n = n || {};
          var s = n.delimiters ? String(n.delimiters) + i : i;
          if (e[s]) return e[s];
          var r = t(i, n),
            a = {},
            l = [];
          return (
            (a.render = Eo(r.render, l)),
            (a.staticRenderFns = r.staticRenderFns.map(function (t) {
              return Eo(t, l);
            })),
            (e[s] = a)
          );
        };
      }
      function Do(t) {
        if (t.outerHTML) return t.outerHTML;
        var e = document.createElement("div");
        return e.appendChild(t.cloneNode(!0)), e.innerHTML;
      }
      var No = Object.prototype.toString,
        Lo = d("slot,component", !0),
        jo = d("key,ref,slot,is"),
        Io = Object.prototype.hasOwnProperty,
        Vo = /-(\w)/g,
        $o = y(function (t) {
          return t.replace(Vo, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        zo = y(function (t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }),
        Uo = /([^-])([A-Z])/g,
        Go = y(function (t) {
          return t.replace(Uo, "$1-$2").replace(Uo, "$1-$2").toLowerCase();
        }),
        Wo = function (t, e, i) {
          return !1;
        },
        Ho = function (t) {
          return t;
        },
        Qo = "data-server-rendered",
        Zo = ["component", "directive", "filter"],
        Yo = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
        ],
        Jo = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: Wo,
          isReservedAttr: Wo,
          isUnknownElement: Wo,
          getTagNamespace: S,
          parsePlatformTagName: Ho,
          mustUseProp: Wo,
          _lifecycleHooks: Yo,
        },
        Ko = Object.freeze({}),
        ts = /[^\w.$]/,
        es = S,
        is = "__proto__" in {},
        ns = "undefined" != typeof window,
        os = ns && window.navigator.userAgent.toLowerCase(),
        ss = os && /msie|trident/.test(os),
        rs = os && os.indexOf("msie 9.0") > 0,
        as = os && os.indexOf("edge/") > 0,
        ls = os && os.indexOf("android") > 0,
        us = os && /iphone|ipad|ipod|ios/.test(os),
        cs = os && /chrome\/\d+/.test(os) && !as,
        hs = {}.watch,
        ps = !1;
      if (ns)
        try {
          var ds = {};
          Object.defineProperty(ds, "passive", {
            get: function () {
              ps = !0;
            },
          }),
            window.addEventListener("test-passive", null, ds);
        } catch (t) {}
      var fs,
        ms,
        ys = function () {
          return (
            void 0 === fs &&
              (fs = !ns && void 0 !== t && "server" === t.process.env.VUE_ENV),
            fs
          );
        },
        _s = ns && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        vs =
          "undefined" != typeof Symbol &&
          O(Symbol) &&
          "undefined" != typeof Reflect &&
          O(Reflect.ownKeys),
        gs = (function () {
          function t() {
            n = !1;
            var t = i.slice(0);
            i.length = 0;
            for (var e = 0; e < t.length; e++) t[e]();
          }
          var e,
            i = [],
            n = !1;
          if ("undefined" != typeof Promise && O(Promise)) {
            var o = Promise.resolve(),
              s = function (t) {
                console.error(t);
              };
            e = function () {
              o.then(t).catch(s), us && setTimeout(S);
            };
          } else if (
            "undefined" == typeof MutationObserver ||
            (!O(MutationObserver) &&
              "[object MutationObserverConstructor]" !==
                MutationObserver.toString())
          )
            e = function () {
              setTimeout(t, 0);
            };
          else {
            var r = 1,
              a = new MutationObserver(t),
              l = document.createTextNode(String(r));
            a.observe(l, { characterData: !0 }),
              (e = function () {
                (r = (r + 1) % 2), (l.data = String(r));
              });
          }
          return function (t, o) {
            var s;
            if (
              (i.push(function () {
                if (t)
                  try {
                    t.call(o);
                  } catch (t) {
                    P(t, o, "nextTick");
                  }
                else s && s(o);
              }),
              n || ((n = !0), e()),
              !t && "undefined" != typeof Promise)
            )
              return new Promise(function (t, e) {
                s = t;
              });
          };
        })();
      ms =
        "undefined" != typeof Set && O(Set)
          ? Set
          : (function () {
              function t() {
                this.set = Object.create(null);
              }
              return (
                (t.prototype.has = function (t) {
                  return !0 === this.set[t];
                }),
                (t.prototype.add = function (t) {
                  this.set[t] = !0;
                }),
                (t.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                t
              );
            })();
      var bs = 0,
        Ss = function () {
          (this.id = bs++), (this.subs = []);
        };
      (Ss.prototype.addSub = function (t) {
        this.subs.push(t);
      }),
        (Ss.prototype.removeSub = function (t) {
          f(this.subs, t);
        }),
        (Ss.prototype.depend = function () {
          Ss.target && Ss.target.addDep(this);
        }),
        (Ss.prototype.notify = function () {
          for (var t = this.subs.slice(), e = 0, i = t.length; e < i; e++)
            t[e].update();
        }),
        (Ss.target = null);
      var xs = [],
        ws = Array.prototype,
        Ts = Object.create(ws);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        function (t) {
          var e = ws[t];
          k(Ts, t, function () {
            for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n];
            var o,
              s = e.apply(this, i),
              r = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                o = i;
                break;
              case "splice":
                o = i.slice(2);
            }
            return o && r.observeArray(o), r.dep.notify(), s;
          });
        }
      );
      var Fs = Object.getOwnPropertyNames(Ts),
        ks = { shouldConvert: !0 },
        As = function (t) {
          if (
            ((this.value = t),
            (this.dep = new Ss()),
            (this.vmCount = 0),
            k(t, "__ob__", this),
            Array.isArray(t))
          ) {
            (is ? X : R)(t, Ts, Fs), this.observeArray(t);
          } else this.walk(t);
        };
      (As.prototype.walk = function (t) {
        for (var e = Object.keys(t), i = 0; i < e.length; i++)
          E(t, e[i], t[e[i]]);
      }),
        (As.prototype.observeArray = function (t) {
          for (var e = 0, i = t.length; e < i; e++) M(t[e]);
        });
      var Ps = Jo.optionMergeStrategies;
      (Ps.data = function (t, e, i) {
        return i
          ? j(t, e, i)
          : e && "function" != typeof e
          ? t
          : j.call(this, t, e);
      }),
        Yo.forEach(function (t) {
          Ps[t] = I;
        }),
        Zo.forEach(function (t) {
          Ps[t + "s"] = V;
        }),
        (Ps.watch = function (t, e) {
          if ((t === hs && (t = void 0), e === hs && (e = void 0), !e))
            return Object.create(t || null);
          if (!t) return e;
          var i = {};
          g(i, t);
          for (var n in e) {
            var o = i[n],
              s = e[n];
            o && !Array.isArray(o) && (o = [o]),
              (i[n] = o ? o.concat(s) : Array.isArray(s) ? s : [s]);
          }
          return i;
        }),
        (Ps.props =
          Ps.methods =
          Ps.inject =
          Ps.computed =
            function (t, e) {
              if (!t) return e;
              var i = Object.create(null);
              return g(i, t), e && g(i, e), i;
            }),
        (Ps.provide = j);
      var Os = function (t, e) {
          return void 0 === e ? t : e;
        },
        Cs = function (t, e, i, n, o, s, r, a) {
          (this.tag = t),
            (this.data = e),
            (this.children = i),
            (this.text = n),
            (this.elm = o),
            (this.ns = void 0),
            (this.context = s),
            (this.functionalContext = void 0),
            (this.key = e && e.key),
            (this.componentOptions = r),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = a),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1);
        },
        Bs = { child: {} };
      (Bs.child.get = function () {
        return this.componentInstance;
      }),
        Object.defineProperties(Cs.prototype, Bs);
      var Xs,
        Rs = function (t) {
          void 0 === t && (t = "");
          var e = new Cs();
          return (e.text = t), (e.isComment = !0), e;
        },
        Ms = y(function (t) {
          var e = "&" === t.charAt(0);
          t = e ? t.slice(1) : t;
          var i = "~" === t.charAt(0);
          t = i ? t.slice(1) : t;
          var n = "!" === t.charAt(0);
          return (
            (t = n ? t.slice(1) : t),
            { name: t, once: i, capture: n, passive: e }
          );
        }),
        Es = null,
        qs = [],
        Ds = [],
        Ns = {},
        Ls = !1,
        js = !1,
        Is = 0,
        Vs = 0,
        $s = function (t, e, i, n) {
          (this.vm = t),
            t._watchers.push(this),
            n
              ? ((this.deep = !!n.deep),
                (this.user = !!n.user),
                (this.lazy = !!n.lazy),
                (this.sync = !!n.sync))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = i),
            (this.id = ++Vs),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new ms()),
            (this.newDepIds = new ms()),
            (this.expression = ""),
            "function" == typeof e
              ? (this.getter = e)
              : ((this.getter = A(e)),
                this.getter || (this.getter = function () {})),
            (this.value = this.lazy ? void 0 : this.get());
        };
      ($s.prototype.get = function () {
        C(this);
        var t,
          e = this.vm;
        try {
          t = this.getter.call(e, e);
        } catch (t) {
          if (!this.user) throw t;
          P(t, e, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && Mt(t), B(), this.cleanupDeps();
        }
        return t;
      }),
        ($s.prototype.addDep = function (t) {
          var e = t.id;
          this.newDepIds.has(e) ||
            (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this));
        }),
        ($s.prototype.cleanupDeps = function () {
          for (var t = this, e = this.deps.length; e--; ) {
            var i = t.deps[e];
            t.newDepIds.has(i.id) || i.removeSub(t);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }),
        ($s.prototype.update = function () {
          this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Rt(this);
        }),
        ($s.prototype.run = function () {
          if (this.active) {
            var t = this.get();
            if (t !== this.value || a(t) || this.deep) {
              var e = this.value;
              if (((this.value = t), this.user))
                try {
                  this.cb.call(this.vm, t, e);
                } catch (t) {
                  P(
                    t,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              else this.cb.call(this.vm, t, e);
            }
          }
        }),
        ($s.prototype.evaluate = function () {
          (this.value = this.get()), (this.dirty = !1);
        }),
        ($s.prototype.depend = function () {
          for (var t = this, e = this.deps.length; e--; ) t.deps[e].depend();
        }),
        ($s.prototype.teardown = function () {
          var t = this;
          if (this.active) {
            this.vm._isBeingDestroyed || f(this.vm._watchers, this);
            for (var e = this.deps.length; e--; ) t.deps[e].removeSub(t);
            this.active = !1;
          }
        });
      var zs = new ms(),
        Us = { enumerable: !0, configurable: !0, get: S, set: S },
        Gs = { lazy: !0 },
        Ws = {
          init: function (t, e, i, n) {
            if (!t.componentInstance || t.componentInstance._isDestroyed) {
              (t.componentInstance = Kt(t, Es, i, n)).$mount(
                e ? t.elm : void 0,
                e
              );
            } else if (t.data.keepAlive) {
              var o = t;
              Ws.prepatch(o, o);
            }
          },
          prepatch: function (t, e) {
            var i = e.componentOptions;
            wt(
              (e.componentInstance = t.componentInstance),
              i.propsData,
              i.listeners,
              e,
              i.children
            );
          },
          insert: function (t) {
            var e = t.context,
              i = t.componentInstance;
            i._isMounted || ((i._isMounted = !0), At(i, "mounted")),
              t.data.keepAlive && (e._isMounted ? Bt(i) : Ft(i, !0));
          },
          destroy: function (t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? kt(e, !0) : e.$destroy());
          },
        },
        Hs = Object.keys(Ws),
        Qs = 1,
        Zs = 2,
        Ys = 0;
      !(function (t) {
        t.prototype._init = function (t) {
          var e = this;
          (e._uid = Ys++),
            (e._isVue = !0),
            t && t._isComponent
              ? _e(e, t)
              : (e.$options = G(ve(e.constructor), t || {}, e)),
            (e._renderProxy = e),
            (e._self = e),
            St(e),
            ft(e),
            ye(e),
            At(e, "beforeCreate"),
            Ht(e),
            Dt(e),
            Wt(e),
            At(e, "created"),
            e.$options.el && e.$mount(e.$options.el);
        };
      })(Se),
        (function (t) {
          var e = {};
          e.get = function () {
            return this._data;
          };
          var i = {};
          (i.get = function () {
            return this._props;
          }),
            Object.defineProperty(t.prototype, "$data", e),
            Object.defineProperty(t.prototype, "$props", i),
            (t.prototype.$set = q),
            (t.prototype.$delete = D),
            (t.prototype.$watch = function (t, e, i) {
              var n = this;
              if (l(e)) return Gt(n, t, e, i);
              (i = i || {}), (i.user = !0);
              var o = new $s(n, t, e, i);
              return (
                i.immediate && e.call(n, o.value),
                function () {
                  o.teardown();
                }
              );
            });
        })(Se),
        (function (t) {
          var e = /^hook:/;
          (t.prototype.$on = function (t, i) {
            var n = this,
              o = this;
            if (Array.isArray(t))
              for (var s = 0, r = t.length; s < r; s++) n.$on(t[s], i);
            else
              (o._events[t] || (o._events[t] = [])).push(i),
                e.test(t) && (o._hasHookEvent = !0);
            return o;
          }),
            (t.prototype.$once = function (t, e) {
              function i() {
                n.$off(t, i), e.apply(n, arguments);
              }
              var n = this;
              return (i.fn = e), n.$on(t, i), n;
            }),
            (t.prototype.$off = function (t, e) {
              var i = this,
                n = this;
              if (!arguments.length)
                return (n._events = Object.create(null)), n;
              if (Array.isArray(t)) {
                for (var o = 0, s = t.length; o < s; o++) i.$off(t[o], e);
                return n;
              }
              var r = n._events[t];
              if (!r) return n;
              if (1 === arguments.length) return (n._events[t] = null), n;
              for (var a, l = r.length; l--; )
                if ((a = r[l]) === e || a.fn === e) {
                  r.splice(l, 1);
                  break;
                }
              return n;
            }),
            (t.prototype.$emit = function (t) {
              var e = this,
                i = e._events[t];
              if (i) {
                i = i.length > 1 ? v(i) : i;
                for (var n = v(arguments, 1), o = 0, s = i.length; o < s; o++)
                  try {
                    i[o].apply(e, n);
                  } catch (i) {
                    P(i, e, 'event handler for "' + t + '"');
                  }
              }
              return e;
            });
        })(Se),
        (function (t) {
          (t.prototype._update = function (t, e) {
            var i = this;
            i._isMounted && At(i, "beforeUpdate");
            var n = i.$el,
              o = i._vnode,
              s = Es;
            (Es = i),
              (i._vnode = t),
              o
                ? (i.$el = i.__patch__(o, t))
                : ((i.$el = i.__patch__(
                    i.$el,
                    t,
                    e,
                    !1,
                    i.$options._parentElm,
                    i.$options._refElm
                  )),
                  (i.$options._parentElm = i.$options._refElm = null)),
              (Es = s),
              n && (n.__vue__ = null),
              i.$el && (i.$el.__vue__ = i),
              i.$vnode &&
                i.$parent &&
                i.$vnode === i.$parent._vnode &&
                (i.$parent.$el = i.$el);
          }),
            (t.prototype.$forceUpdate = function () {
              var t = this;
              t._watcher && t._watcher.update();
            }),
            (t.prototype.$destroy = function () {
              var t = this;
              if (!t._isBeingDestroyed) {
                At(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
                var e = t.$parent;
                !e ||
                  e._isBeingDestroyed ||
                  t.$options.abstract ||
                  f(e.$children, t),
                  t._watcher && t._watcher.teardown();
                for (var i = t._watchers.length; i--; )
                  t._watchers[i].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--,
                  (t._isDestroyed = !0),
                  t.__patch__(t._vnode, null),
                  At(t, "destroyed"),
                  t.$off(),
                  t.$el && (t.$el.__vue__ = null);
              }
            });
        })(Se),
        (function (t) {
          (t.prototype.$nextTick = function (t) {
            return gs(t, this);
          }),
            (t.prototype._render = function () {
              var t = this,
                e = t.$options,
                i = e.render,
                n = e.staticRenderFns,
                o = e._parentVnode;
              if (t._isMounted)
                for (var s in t.$slots) t.$slots[s] = tt(t.$slots[s]);
              (t.$scopedSlots = (o && o.data.scopedSlots) || Ko),
                n && !t._staticTrees && (t._staticTrees = []),
                (t.$vnode = o);
              var r;
              try {
                r = i.call(t._renderProxy, t.$createElement);
              } catch (e) {
                P(e, t, "render function"), (r = t._vnode);
              }
              return r instanceof Cs || (r = Rs()), (r.parent = o), r;
            }),
            (t.prototype._o = pe),
            (t.prototype._n = p),
            (t.prototype._s = h),
            (t.prototype._l = re),
            (t.prototype._t = ae),
            (t.prototype._q = x),
            (t.prototype._i = w),
            (t.prototype._m = he),
            (t.prototype._f = le),
            (t.prototype._k = ue),
            (t.prototype._b = ce),
            (t.prototype._v = J),
            (t.prototype._e = Rs),
            (t.prototype._u = bt),
            (t.prototype._g = me);
        })(Se);
      var Js = [String, RegExp, Array],
        Ks = {
          name: "keep-alive",
          abstract: !0,
          props: { include: Js, exclude: Js },
          created: function () {
            this.cache = Object.create(null);
          },
          destroyed: function () {
            var t = this;
            for (var e in t.cache) Be(t.cache[e]);
          },
          watch: {
            include: function (t) {
              Ce(this.cache, this._vnode, function (e) {
                return Oe(t, e);
              });
            },
            exclude: function (t) {
              Ce(this.cache, this._vnode, function (e) {
                return !Oe(t, e);
              });
            },
          },
          render: function () {
            var t = dt(this.$slots.default),
              e = t && t.componentOptions;
            if (e) {
              var i = Pe(e);
              if (
                i &&
                ((this.include && !Oe(this.include, i)) ||
                  (this.exclude && Oe(this.exclude, i)))
              )
                return t;
              var n =
                null == t.key
                  ? e.Ctor.cid + (e.tag ? "::" + e.tag : "")
                  : t.key;
              this.cache[n]
                ? (t.componentInstance = this.cache[n].componentInstance)
                : (this.cache[n] = t),
                (t.data.keepAlive = !0);
            }
            return t;
          },
        },
        tr = { KeepAlive: Ks };
      !(function (t) {
        var e = {};
        (e.get = function () {
          return Jo;
        }),
          Object.defineProperty(t, "config", e),
          (t.util = {
            warn: es,
            extend: g,
            mergeOptions: G,
            defineReactive: E,
          }),
          (t.set = q),
          (t.delete = D),
          (t.nextTick = gs),
          (t.options = Object.create(null)),
          Zo.forEach(function (e) {
            t.options[e + "s"] = Object.create(null);
          }),
          (t.options._base = t),
          g(t.options.components, tr),
          xe(t),
          we(t),
          Te(t),
          Ae(t);
      })(Se),
        Object.defineProperty(Se.prototype, "$isServer", { get: ys }),
        Object.defineProperty(Se.prototype, "$ssrContext", {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        (Se.version = "2.4.2");
      var er,
        ir,
        nr,
        or,
        sr,
        rr,
        ar,
        lr,
        ur,
        cr = d("style,class"),
        hr = d("input,textarea,option,select"),
        pr = function (t, e, i) {
          return (
            ("value" === i && hr(t) && "button" !== e) ||
            ("selected" === i && "option" === t) ||
            ("checked" === i && "input" === t) ||
            ("muted" === i && "video" === t)
          );
        },
        dr = d("contenteditable,draggable,spellcheck"),
        fr = d(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
        ),
        mr = "http://www.w3.org/1999/xlink",
        yr = function (t) {
          return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
        },
        _r = function (t) {
          return yr(t) ? t.slice(6, t.length) : "";
        },
        vr = function (t) {
          return null == t || !1 === t;
        },
        gr = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        },
        br = d(
          "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
        ),
        Sr = d(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          !0
        ),
        xr = function (t) {
          return "pre" === t;
        },
        wr = function (t) {
          return br(t) || Sr(t);
        },
        Tr = Object.create(null),
        Fr = Object.freeze({
          createElement: Ve,
          createElementNS: $e,
          createTextNode: ze,
          createComment: Ue,
          insertBefore: Ge,
          removeChild: We,
          appendChild: He,
          parentNode: Qe,
          nextSibling: Ze,
          tagName: Ye,
          setTextContent: Je,
          setAttribute: Ke,
        }),
        kr = {
          create: function (t, e) {
            ti(e);
          },
          update: function (t, e) {
            t.data.ref !== e.data.ref && (ti(t, !0), ti(e));
          },
          destroy: function (t) {
            ti(t, !0);
          },
        },
        Ar = new Cs("", {}, []),
        Pr = ["create", "activate", "update", "remove", "destroy"],
        Or = {
          create: oi,
          update: oi,
          destroy: function (t) {
            oi(t, Ar);
          },
        },
        Cr = Object.create(null),
        Br = [kr, Or],
        Xr = { create: ui, update: ui },
        Rr = { create: hi, update: hi },
        Mr = /[\w).+\-_$\]]/,
        Er = "__r",
        qr = "__c",
        Dr = { create: Ni, update: Ni },
        Nr = { create: Li, update: Li },
        Lr = y(function (t) {
          var e = {},
            i = /;(?![^(]*\))/g,
            n = /:(.+)/;
          return (
            t.split(i).forEach(function (t) {
              if (t) {
                var i = t.split(n);
                i.length > 1 && (e[i[0].trim()] = i[1].trim());
              }
            }),
            e
          );
        }),
        jr = /^--/,
        Ir = /\s*!important$/,
        Vr = function (t, e, i) {
          if (jr.test(e)) t.style.setProperty(e, i);
          else if (Ir.test(i))
            t.style.setProperty(e, i.replace(Ir, ""), "important");
          else {
            var n = zr(e);
            if (Array.isArray(i))
              for (var o = 0, s = i.length; o < s; o++) t.style[n] = i[o];
            else t.style[n] = i;
          }
        },
        $r = ["Webkit", "Moz", "ms"],
        zr = y(function (t) {
          if (
            ((ur = ur || document.createElement("div").style),
            "filter" !== (t = $o(t)) && t in ur)
          )
            return t;
          for (
            var e = t.charAt(0).toUpperCase() + t.slice(1), i = 0;
            i < $r.length;
            i++
          ) {
            var n = $r[i] + e;
            if (n in ur) return n;
          }
        }),
        Ur = { create: Gi, update: Gi },
        Gr = y(function (t) {
          return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active",
          };
        }),
        Wr = ns && !rs,
        Hr = "transition",
        Qr = "animation",
        Zr = "transition",
        Yr = "transitionend",
        Jr = "animation",
        Kr = "animationend";
      Wr &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((Zr = "WebkitTransition"), (Yr = "webkitTransitionEnd")),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((Jr = "WebkitAnimation"), (Kr = "webkitAnimationEnd")));
      var ta =
          ns && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout,
        ea = /\b(transform|all)(,|$)/,
        ia = ns
          ? {
              create: ln,
              activate: ln,
              remove: function (t, e) {
                !0 !== t.data.show ? sn(t, e) : e();
              },
            }
          : {},
        na = [Xr, Rr, Dr, Nr, Ur, ia],
        oa = na.concat(Br),
        sa = (function (t) {
          function e(t) {
            return new Cs(C.tagName(t).toLowerCase(), {}, [], void 0, t);
          }
          function s(t, e) {
            function i() {
              0 == --i.listeners && a(t);
            }
            return (i.listeners = e), i;
          }
          function a(t) {
            var e = C.parentNode(t);
            n(e) && C.removeChild(e, t);
          }
          function l(t, e, i, s, r) {
            if (((t.isRootInsert = !r), !u(t, e, i, s))) {
              var a = t.data,
                l = t.children,
                c = t.tag;
              n(c)
                ? ((t.elm = t.ns
                    ? C.createElementNS(t.ns, c)
                    : C.createElement(c, t)),
                  _(t),
                  f(t, l, e),
                  n(a) && y(t, e),
                  p(i, t.elm, s))
                : o(t.isComment)
                ? ((t.elm = C.createComment(t.text)), p(i, t.elm, s))
                : ((t.elm = C.createTextNode(t.text)), p(i, t.elm, s));
            }
          }
          function u(t, e, i, s) {
            var r = t.data;
            if (n(r)) {
              var a = n(t.componentInstance) && r.keepAlive;
              if (
                (n((r = r.hook)) && n((r = r.init)) && r(t, !1, i, s),
                n(t.componentInstance))
              )
                return c(t, e), o(a) && h(t, e, i, s), !0;
            }
          }
          function c(t, e) {
            n(t.data.pendingInsert) &&
              (e.push.apply(e, t.data.pendingInsert),
              (t.data.pendingInsert = null)),
              (t.elm = t.componentInstance.$el),
              m(t) ? (y(t, e), _(t)) : (ti(t), e.push(t));
          }
          function h(t, e, i, o) {
            for (var s, r = t; r.componentInstance; )
              if (
                ((r = r.componentInstance._vnode),
                n((s = r.data)) && n((s = s.transition)))
              ) {
                for (s = 0; s < P.activate.length; ++s) P.activate[s](Ar, r);
                e.push(r);
                break;
              }
            p(i, t.elm, o);
          }
          function p(t, e, i) {
            n(t) &&
              (n(i)
                ? i.parentNode === t && C.insertBefore(t, e, i)
                : C.appendChild(t, e));
          }
          function f(t, e, i) {
            if (Array.isArray(e))
              for (var n = 0; n < e.length; ++n) l(e[n], i, t.elm, null, !0);
            else r(t.text) && C.appendChild(t.elm, C.createTextNode(t.text));
          }
          function m(t) {
            for (; t.componentInstance; ) t = t.componentInstance._vnode;
            return n(t.tag);
          }
          function y(t, e) {
            for (var i = 0; i < P.create.length; ++i) P.create[i](Ar, t);
            (k = t.data.hook),
              n(k) &&
                (n(k.create) && k.create(Ar, t), n(k.insert) && e.push(t));
          }
          function _(t) {
            for (var e, i = t; i; )
              n((e = i.context)) &&
                n((e = e.$options._scopeId)) &&
                C.setAttribute(t.elm, e, ""),
                (i = i.parent);
            n((e = Es)) &&
              e !== t.context &&
              n((e = e.$options._scopeId)) &&
              C.setAttribute(t.elm, e, "");
          }
          function v(t, e, i, n, o, s) {
            for (; n <= o; ++n) l(i[n], s, t, e);
          }
          function g(t) {
            var e,
              i,
              o = t.data;
            if (n(o))
              for (
                n((e = o.hook)) && n((e = e.destroy)) && e(t), e = 0;
                e < P.destroy.length;
                ++e
              )
                P.destroy[e](t);
            if (n((e = t.children)))
              for (i = 0; i < t.children.length; ++i) g(t.children[i]);
          }
          function b(t, e, i, o) {
            for (; i <= o; ++i) {
              var s = e[i];
              n(s) && (n(s.tag) ? (S(s), g(s)) : a(s.elm));
            }
          }
          function S(t, e) {
            if (n(e) || n(t.data)) {
              var i,
                o = P.remove.length + 1;
              for (
                n(e) ? (e.listeners += o) : (e = s(t.elm, o)),
                  n((i = t.componentInstance)) &&
                    n((i = i._vnode)) &&
                    n(i.data) &&
                    S(i, e),
                  i = 0;
                i < P.remove.length;
                ++i
              )
                P.remove[i](t, e);
              n((i = t.data.hook)) && n((i = i.remove)) ? i(t, e) : e();
            } else a(t.elm);
          }
          function x(t, e, o, s, r) {
            for (
              var a,
                u,
                c,
                h,
                p = 0,
                d = 0,
                f = e.length - 1,
                m = e[0],
                y = e[f],
                _ = o.length - 1,
                g = o[0],
                S = o[_],
                x = !r;
              p <= f && d <= _;

            )
              i(m)
                ? (m = e[++p])
                : i(y)
                ? (y = e[--f])
                : ei(m, g)
                ? (w(m, g, s), (m = e[++p]), (g = o[++d]))
                : ei(y, S)
                ? (w(y, S, s), (y = e[--f]), (S = o[--_]))
                : ei(m, S)
                ? (w(m, S, s),
                  x && C.insertBefore(t, m.elm, C.nextSibling(y.elm)),
                  (m = e[++p]),
                  (S = o[--_]))
                : ei(y, g)
                ? (w(y, g, s),
                  x && C.insertBefore(t, y.elm, m.elm),
                  (y = e[--f]),
                  (g = o[++d]))
                : (i(a) && (a = ni(e, p, f)),
                  (u = n(g.key) ? a[g.key] : null),
                  i(u)
                    ? (l(g, s, t, m.elm), (g = o[++d]))
                    : ((c = e[u]),
                      ei(c, g)
                        ? (w(c, g, s),
                          (e[u] = void 0),
                          x && C.insertBefore(t, c.elm, m.elm),
                          (g = o[++d]))
                        : (l(g, s, t, m.elm), (g = o[++d]))));
            p > f
              ? ((h = i(o[_ + 1]) ? null : o[_ + 1].elm), v(t, h, o, d, _, s))
              : d > _ && b(t, e, p, f);
          }
          function w(t, e, s, r) {
            if (t !== e) {
              var a = (e.elm = t.elm);
              if (o(t.isAsyncPlaceholder))
                return void (n(e.asyncFactory.resolved)
                  ? F(t.elm, e, s)
                  : (e.isAsyncPlaceholder = !0));
              if (
                o(e.isStatic) &&
                o(t.isStatic) &&
                e.key === t.key &&
                (o(e.isCloned) || o(e.isOnce))
              )
                return void (e.componentInstance = t.componentInstance);
              var l,
                u = e.data;
              n(u) && n((l = u.hook)) && n((l = l.prepatch)) && l(t, e);
              var c = t.children,
                h = e.children;
              if (n(u) && m(e)) {
                for (l = 0; l < P.update.length; ++l) P.update[l](t, e);
                n((l = u.hook)) && n((l = l.update)) && l(t, e);
              }
              i(e.text)
                ? n(c) && n(h)
                  ? c !== h && x(a, c, h, s, r)
                  : n(h)
                  ? (n(t.text) && C.setTextContent(a, ""),
                    v(a, null, h, 0, h.length - 1, s))
                  : n(c)
                  ? b(a, c, 0, c.length - 1)
                  : n(t.text) && C.setTextContent(a, "")
                : t.text !== e.text && C.setTextContent(a, e.text),
                n(u) && n((l = u.hook)) && n((l = l.postpatch)) && l(t, e);
            }
          }
          function T(t, e, i) {
            if (o(i) && n(t.parent)) t.parent.data.pendingInsert = e;
            else for (var s = 0; s < e.length; ++s) e[s].data.hook.insert(e[s]);
          }
          function F(t, e, i) {
            if (o(e.isComment) && n(e.asyncFactory))
              return (e.elm = t), (e.isAsyncPlaceholder = !0), !0;
            e.elm = t;
            var s = e.tag,
              r = e.data,
              a = e.children;
            if (
              n(r) &&
              (n((k = r.hook)) && n((k = k.init)) && k(e, !0),
              n((k = e.componentInstance)))
            )
              return c(e, i), !0;
            if (n(s)) {
              if (n(a))
                if (t.hasChildNodes()) {
                  for (var l = !0, u = t.firstChild, h = 0; h < a.length; h++) {
                    if (!u || !F(u, a[h], i)) {
                      l = !1;
                      break;
                    }
                    u = u.nextSibling;
                  }
                  if (!l || u) return !1;
                } else f(e, a, i);
              if (n(r))
                for (var p in r)
                  if (!B(p)) {
                    y(e, i);
                    break;
                  }
            } else t.data !== e.text && (t.data = e.text);
            return !0;
          }
          var k,
            A,
            P = {},
            O = t.modules,
            C = t.nodeOps;
          for (k = 0; k < Pr.length; ++k)
            for (P[Pr[k]] = [], A = 0; A < O.length; ++A)
              n(O[A][Pr[k]]) && P[Pr[k]].push(O[A][Pr[k]]);
          var B = d("attrs,style,class,staticClass,staticStyle,key");
          return function (t, s, r, a, u, c) {
            if (i(s)) return void (n(t) && g(t));
            var h = !1,
              p = [];
            if (i(t)) (h = !0), l(s, p, u, c);
            else {
              var d = n(t.nodeType);
              if (!d && ei(t, s)) w(t, s, p, a);
              else {
                if (d) {
                  if (
                    (1 === t.nodeType &&
                      t.hasAttribute(Qo) &&
                      (t.removeAttribute(Qo), (r = !0)),
                    o(r) && F(t, s, p))
                  )
                    return T(s, p, !0), t;
                  t = e(t);
                }
                var f = t.elm,
                  y = C.parentNode(f);
                if (
                  (l(s, p, f._leaveCb ? null : y, C.nextSibling(f)),
                  n(s.parent))
                ) {
                  for (var _ = s.parent; _; ) (_.elm = s.elm), (_ = _.parent);
                  if (m(s))
                    for (var v = 0; v < P.create.length; ++v)
                      P.create[v](Ar, s.parent);
                }
                n(y) ? b(y, [t], 0, 0) : n(t.tag) && g(t);
              }
            }
            return T(s, p, h), s.elm;
          };
        })({ nodeOps: Fr, modules: oa }),
        ra = d("text,number,password,search,email,tel,url");
      rs &&
        document.addEventListener("selectionchange", function () {
          var t = document.activeElement;
          t && t.vmodel && dn(t, "input");
        });
      var aa = {
          inserted: function (t, e, i) {
            if ("select" === i.tag) {
              var n = function () {
                un(t, e, i.context);
              };
              n(),
                (ss || as) && setTimeout(n, 0),
                (t._vOptions = [].map.call(t.options, cn));
            } else
              ("textarea" === i.tag || ra(t.type)) &&
                ((t._vModifiers = e.modifiers),
                e.modifiers.lazy ||
                  (t.addEventListener("change", pn),
                  ls ||
                    (t.addEventListener("compositionstart", hn),
                    t.addEventListener("compositionend", pn)),
                  rs && (t.vmodel = !0)));
          },
          componentUpdated: function (t, e, i) {
            if ("select" === i.tag) {
              un(t, e, i.context);
              var n = t._vOptions;
              (t._vOptions = [].map.call(t.options, cn)).some(function (t, e) {
                return !x(t, n[e]);
              }) && dn(t, "change");
            }
          },
        },
        la = {
          bind: function (t, e, i) {
            var n = e.value;
            i = fn(i);
            var o = i.data && i.data.transition,
              s = (t.__vOriginalDisplay =
                "none" === t.style.display ? "" : t.style.display);
            n && o
              ? ((i.data.show = !0),
                on(i, function () {
                  t.style.display = s;
                }))
              : (t.style.display = n ? s : "none");
          },
          update: function (t, e, i) {
            var n = e.value;
            n !== e.oldValue &&
              ((i = fn(i)),
              i.data && i.data.transition
                ? ((i.data.show = !0),
                  n
                    ? on(i, function () {
                        t.style.display = t.__vOriginalDisplay;
                      })
                    : sn(i, function () {
                        t.style.display = "none";
                      }))
                : (t.style.display = n ? t.__vOriginalDisplay : "none"));
          },
          unbind: function (t, e, i, n, o) {
            o || (t.style.display = t.__vOriginalDisplay);
          },
        },
        ua = { model: aa, show: la },
        ca = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        },
        ha = {
          name: "transition",
          props: ca,
          abstract: !0,
          render: function (t) {
            var e = this,
              i = this.$options._renderChildren;
            if (
              i &&
              ((i = i.filter(function (t) {
                return t.tag || bn(t);
              })),
              i.length)
            ) {
              var n = this.mode,
                o = i[0];
              if (vn(this.$vnode)) return o;
              var s = mn(o);
              if (!s) return o;
              if (this._leaving) return _n(t, o);
              var a = "__transition-" + this._uid + "-";
              s.key =
                null == s.key
                  ? s.isComment
                    ? a + "comment"
                    : a + s.tag
                  : r(s.key)
                  ? 0 === String(s.key).indexOf(a)
                    ? s.key
                    : a + s.key
                  : s.key;
              var l = ((s.data || (s.data = {})).transition = yn(this)),
                u = this._vnode,
                c = mn(u);
              if (
                (s.data.directives &&
                  s.data.directives.some(function (t) {
                    return "show" === t.name;
                  }) &&
                  (s.data.show = !0),
                c && c.data && !gn(s, c) && !bn(c))
              ) {
                var h = c && (c.data.transition = g({}, l));
                if ("out-in" === n)
                  return (
                    (this._leaving = !0),
                    nt(h, "afterLeave", function () {
                      (e._leaving = !1), e.$forceUpdate();
                    }),
                    _n(t, o)
                  );
                if ("in-out" === n) {
                  if (bn(s)) return u;
                  var p,
                    d = function () {
                      p();
                    };
                  nt(l, "afterEnter", d),
                    nt(l, "enterCancelled", d),
                    nt(h, "delayLeave", function (t) {
                      p = t;
                    });
                }
              }
              return o;
            }
          },
        },
        pa = g({ tag: String, moveClass: String }, ca);
      delete pa.mode;
      var da = {
          props: pa,
          render: function (t) {
            for (
              var e = this.tag || this.$vnode.data.tag || "span",
                i = Object.create(null),
                n = (this.prevChildren = this.children),
                o = this.$slots.default || [],
                s = (this.children = []),
                r = yn(this),
                a = 0;
              a < o.length;
              a++
            ) {
              var l = o[a];
              if (l.tag)
                if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
                  s.push(l),
                    (i[l.key] = l),
                    ((l.data || (l.data = {})).transition = r);
                else;
            }
            if (n) {
              for (var u = [], c = [], h = 0; h < n.length; h++) {
                var p = n[h];
                (p.data.transition = r),
                  (p.data.pos = p.elm.getBoundingClientRect()),
                  i[p.key] ? u.push(p) : c.push(p);
              }
              (this.kept = t(e, null, u)), (this.removed = c);
            }
            return t(e, null, s);
          },
          beforeUpdate: function () {
            this.__patch__(this._vnode, this.kept, !1, !0),
              (this._vnode = this.kept);
          },
          updated: function () {
            var t = this.prevChildren,
              e = this.moveClass || (this.name || "v") + "-move";
            if (t.length && this.hasMove(t[0].elm, e)) {
              t.forEach(Sn), t.forEach(xn), t.forEach(wn);
              var i = document.body;
              i.offsetHeight;
              t.forEach(function (t) {
                if (t.data.moved) {
                  var i = t.elm,
                    n = i.style;
                  Yi(i, e),
                    (n.transform =
                      n.WebkitTransform =
                      n.transitionDuration =
                        ""),
                    i.addEventListener(
                      Yr,
                      (i._moveCb = function t(n) {
                        (n && !/transform$/.test(n.propertyName)) ||
                          (i.removeEventListener(Yr, t),
                          (i._moveCb = null),
                          Ji(i, e));
                      })
                    );
                }
              });
            }
          },
          methods: {
            hasMove: function (t, e) {
              if (!Wr) return !1;
              if (this._hasMove) return this._hasMove;
              var i = t.cloneNode();
              t._transitionClasses &&
                t._transitionClasses.forEach(function (t) {
                  Hi(i, t);
                }),
                Wi(i, e),
                (i.style.display = "none"),
                this.$el.appendChild(i);
              var n = tn(i);
              return this.$el.removeChild(i), (this._hasMove = n.hasTransform);
            },
          },
        },
        fa = { Transition: ha, TransitionGroup: da };
      (Se.config.mustUseProp = pr),
        (Se.config.isReservedTag = wr),
        (Se.config.isReservedAttr = cr),
        (Se.config.getTagNamespace = Le),
        (Se.config.isUnknownElement = je),
        g(Se.options.directives, ua),
        g(Se.options.components, fa),
        (Se.prototype.__patch__ = ns ? sa : S),
        (Se.prototype.$mount = function (t, e) {
          return (t = t && ns ? Ie(t) : void 0), xt(this, t, e);
        }),
        setTimeout(function () {
          Jo.devtools && _s && _s.emit("init", Se);
        }, 0);
      var ma,
        ya =
          !!ns &&
          (function (t, e) {
            var i = document.createElement("div");
            return (
              (i.innerHTML = '<div a="' + t + '"/>'), i.innerHTML.indexOf(e) > 0
            );
          })("\n", "&#10;"),
        _a = /\{\{((?:.|\n)+?)\}\}/g,
        va = /[-.*+?^${}()|[\]\/\\]/g,
        ga = y(function (t) {
          var e = t[0].replace(va, "\\$&"),
            i = t[1].replace(va, "\\$&");
          return new RegExp(e + "((?:.|\\n)+?)" + i, "g");
        }),
        ba = { staticKeys: ["staticClass"], transformNode: Fn, genData: kn },
        Sa = { staticKeys: ["staticStyle"], transformNode: An, genData: Pn },
        xa = [ba, Sa],
        wa = { model: Ci, text: On, html: Cn },
        Ta = d(
          "area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
        ),
        Fa = d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        ka = d(
          "address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
        ),
        Aa = {
          expectHTML: !0,
          modules: xa,
          directives: wa,
          isPreTag: xr,
          isUnaryTag: Ta,
          mustUseProp: pr,
          canBeLeftOpenTag: Fa,
          isReservedTag: wr,
          getTagNamespace: Le,
          staticKeys: (function (t) {
            return t
              .reduce(function (t, e) {
                return t.concat(e.staticKeys || []);
              }, [])
              .join(",");
          })(xa),
        },
        Pa = {
          decode: function (t) {
            return (
              (ma = ma || document.createElement("div")),
              (ma.innerHTML = t),
              ma.textContent
            );
          },
        },
        Oa = /([^\s"'<>\/=]+)/,
        Ca = /(?:=)/,
        Ba = [
          /"([^"]*)"+/.source,
          /'([^']*)'+/.source,
          /([^\s"'=<>`]+)/.source,
        ],
        Xa = new RegExp(
          "^\\s*" +
            Oa.source +
            "(?:\\s*(" +
            Ca.source +
            ")\\s*(?:" +
            Ba.join("|") +
            "))?"
        ),
        Ra = "[a-zA-Z_][\\w\\-\\.]*",
        Ma = "((?:" + Ra + "\\:)?" + Ra + ")",
        Ea = new RegExp("^<" + Ma),
        qa = /^\s*(\/?)>/,
        Da = new RegExp("^<\\/" + Ma + "[^>]*>"),
        Na = /^<!DOCTYPE [^>]+>/i,
        La = /^<!--/,
        ja = /^<!\[/,
        Ia = !1;
      "x".replace(/x(.)?/g, function (t, e) {
        Ia = "" === e;
      });
      var Va,
        $a,
        za,
        Ua,
        Ga,
        Wa,
        Ha,
        Qa,
        Za,
        Ya,
        Ja = d("script,style,textarea", !0),
        Ka = {},
        tl = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
        },
        el = /&(?:lt|gt|quot|amp);/g,
        il = /&(?:lt|gt|quot|amp|#10);/g,
        nl = d("pre,textarea", !0),
        ol = function (t, e) {
          return t && nl(t) && "\n" === e[0];
        },
        sl = /^@|^v-on:/,
        rl = /^v-|^@|^:/,
        al = /(.*?)\s+(?:in|of)\s+(.*)/,
        ll = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
        ul = /:(.*)$/,
        cl = /^:|^v-bind:/,
        hl = /\.[^.]+/g,
        pl = y(Pa.decode),
        dl = /^xmlns:NS\d+/,
        fl = /^NS\d+:/,
        ml = y(to),
        yl = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
        _l =
          /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
        vl = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46],
        },
        gl = function (t) {
          return "if(" + t + ")return null;";
        },
        bl = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: gl("$event.target !== $event.currentTarget"),
          ctrl: gl("!$event.ctrlKey"),
          shift: gl("!$event.shiftKey"),
          alt: gl("!$event.altKey"),
          meta: gl("!$event.metaKey"),
          left: gl("'button' in $event && $event.button !== 0"),
          middle: gl("'button' in $event && $event.button !== 1"),
          right: gl("'button' in $event && $event.button !== 2"),
        },
        Sl = { on: uo, bind: co, cloak: S },
        xl = function (t) {
          (this.options = t),
            (this.warn = t.warn || fi),
            (this.transforms = mi(t.modules, "transformCode")),
            (this.dataGenFns = mi(t.modules, "genData")),
            (this.directives = g(g({}, Sl), t.directives));
          var e = t.isReservedTag || Wo;
          (this.maybeComponent = function (t) {
            return !e(t.tag);
          }),
            (this.onceId = 0),
            (this.staticRenderFns = []);
        },
        wl =
          (new RegExp(
            "\\b" +
              "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments"
                .split(",")
                .join("\\b|\\b") +
              "\\b"
          ),
          new RegExp(
            "\\b" +
              "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
              "\\s*\\([^\\)]*\\)"
          ),
          (function (t) {
            return function (e) {
              function i(i, n) {
                var o = Object.create(e),
                  s = [],
                  r = [];
                if (
                  ((o.warn = function (t, e) {
                    (e ? r : s).push(t);
                  }),
                  n)
                ) {
                  n.modules &&
                    (o.modules = (e.modules || []).concat(n.modules)),
                    n.directives &&
                      (o.directives = g(
                        Object.create(e.directives),
                        n.directives
                      ));
                  for (var a in n)
                    "modules" !== a && "directives" !== a && (o[a] = n[a]);
                }
                var l = t(i, o);
                return (l.errors = s), (l.tips = r), l;
              }
              return { compile: i, compileToFunctions: qo(i) };
            };
          })(function (t, e) {
            var i = Rn(t.trim(), e);
            Kn(i, e);
            var n = ho(i, e);
            return {
              ast: i,
              render: n.render,
              staticRenderFns: n.staticRenderFns,
            };
          })),
        Tl = wl(Aa),
        Fl = Tl.compileToFunctions,
        kl = y(function (t) {
          var e = Ie(t);
          return e && e.innerHTML;
        }),
        Al = Se.prototype.$mount;
      (Se.prototype.$mount = function (t, e) {
        if (
          (t = t && Ie(t)) === document.body ||
          t === document.documentElement
        )
          return this;
        var i = this.$options;
        if (!i.render) {
          var n = i.template;
          if (n)
            if ("string" == typeof n) "#" === n.charAt(0) && (n = kl(n));
            else {
              if (!n.nodeType) return this;
              n = n.innerHTML;
            }
          else t && (n = Do(t));
          if (n) {
            var o = Fl(
                n,
                {
                  shouldDecodeNewlines: ya,
                  delimiters: i.delimiters,
                  comments: i.comments,
                },
                this
              ),
              s = o.render,
              r = o.staticRenderFns;
            (i.render = s), (i.staticRenderFns = r);
          }
        }
        return Al.call(this, t, e);
      }),
        (Se.compile = Fl),
        (e.a = Se);
    }.call(e, i(25)));
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    i(0);
    e.default = {
      name: "app",
      components: {},
      data: function () {
        return {};
      },
      created: function () {
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          ? (this.$router.push("/welcome"),
            console.log(
              "%c Mobile App Created by Matt McCorkle ",
              "background: black; color: gold"
            ))
          : (this.$router.push("/"),
            console.log(
              "%c Desktop App Created by Matt McCorkle ",
              "background: black; color: gold"
            ));
      },
      methods: {},
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7),
      o = i.n(n),
      s = i(6),
      r = i.n(s);
    i(0);
    e.default = {
      data: function () {
        return {
          stopColor: "white",
          playColor: "yellow",
          SkeletonDance: "Summon The Music Demon",
          WelcomeText: !0,
          discoLogo: !0,
          Subtitle: !0,
          showNavBar: !1,
          showSection: !0,
          showHelp: !1,
          section1control: !1,
          section2control: !1,
          section3control: !1,
          FutureFit: "Loading...",
          LoadingText1: "Loading, Please Wait A Moment",
          LoadingText2: "Loading, Please Wait A Moment",
          LoadingText3: "Loading, Please Wait A Moment",
          textTiming: 500,
          startStopTrigger: !1,
          ambience1Boolean: !1,
          ambience2Boolean: !1,
          ambience3Boolean: !1,
          ambience4Boolean: !1,
          ambience1Disable: !0,
          ambience2Disable: !0,
          ambience3Disable: !0,
          ambience4Disable: !0,
          ambience1Vol: -10,
          ambience2Vol: -5,
          ambience3Vol: -5,
          ambience4Vol: -5,
          ambience1Player: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.025,
            loopEnd: 21.061,
            volume: 6,
          }).toMaster(),
          ambience2Player: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.025,
            loopEnd: 16.601,
            volume: 6,
          }).toMaster(),
          ambience3Player: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.045,
            loopEnd: 26.76,
            volume: 6,
          }).toMaster(),
          ambience4Player: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.025,
            loopEnd: 25.513,
            volume: 6,
          }).toMaster(),
          SFX1Boolean: !0,
          SFX2Boolean: !0,
          SFX3Boolean: !0,
          SFX4Boolean: !0,
          SFX5Boolean: !0,
          SFX6Boolean: !0,
          SFX7Boolean: !1,
          SFX8Boolean: !1,
          SFX9Boolean: !1,
          SFX10Boolean: !1,
          SFX11Boolean: !1,
          SFX12Boolean: !1,
          SFX13Boolean: !1,
          SFX14Boolean: !1,
          SFX15Boolean: !1,
          SFX16Boolean: !1,
          SFX17Boolean: !1,
          SFX18Boolean: !1,
          SFX19Boolean: !1,
          SFX20Boolean: !1,
          SFX21Boolean: !1,
          SFX22Boolean: !1,
          SFX23Boolean: !1,
          SFX24Boolean: !1,
          SFX25Boolean: !1,
          SFX26Boolean: !1,
          SFX27Boolean: !1,
          SFX28Boolean: !1,
          SFX1Disable: !0,
          SFX2Disable: !0,
          SFX3Disable: !0,
          SFX4Disable: !0,
          SFX5Disable: !0,
          SFX6Disable: !0,
          SFX7Disable: !0,
          SFX8Disable: !0,
          SFX9Disable: !0,
          SFX10Disable: !0,
          SFX11Disable: !0,
          SFX12Disable: !0,
          SFX13Disable: !0,
          SFX14Disable: !0,
          SFX15Disable: !0,
          SFX16Disable: !0,
          SFX17Disable: !0,
          SFX18Disable: !0,
          SFX19Disable: !0,
          SFX20Disable: !0,
          SFX21Disable: !0,
          SFX22Disable: !0,
          SFX23Disable: !0,
          SFX24Disable: !0,
          SFX25Disable: !0,
          SFX26Disable: !0,
          SFXPlayer1: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.04,
            loopEnd: 35.283,
            retrigger: !1,
            autostart: !1,
          }).toMaster(),
          SFXPlayer2: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.04,
            loopEnd: 35.283,
            retrigger: !1,
            autostart: !1,
          }).toMaster(),
          SFXPlayer3: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.04,
            loopEnd: 35.283,
            retrigger: !1,
            autostart: !1,
          }).toMaster(),
          SFXPlayer4: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.04,
            loopEnd: 35.283,
            retrigger: !1,
            autostart: !1,
          }).toMaster(),
          SFXPlayer5: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.04,
            loopEnd: 35.283,
            retrigger: !1,
            autostart: !1,
          }).toMaster(),
          SFXPlayer6: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.04,
            loopEnd: 35.283,
            retrigger: !1,
            autostart: !1,
          }).toMaster(),
          SFXPlayer7: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 2,
          }),
          SFXPlayer8: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 2,
          }),
          SFXPlayer9: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 10,
          }),
          SFXPlayer10: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            retrigger: !0,
            volume: 6,
          }),
          SFXPlayer11: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 10,
          }),
          SFXPlayer12: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 6,
          }),
          SFXPlayer13: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 6,
          }),
          SFXPlayer14: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 12,
          }),
          SFXPlayer15: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 6,
          }),
          SFXPlayer16: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
          }),
          SFXPlayer17: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 4,
          }),
          SFXPlayer18: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 4,
          }),
          SFXPlayer19: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: -2,
          }),
          SFXPlayer20: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 4,
          }),
          SFXPlayer21: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
          }),
          SFXPlayer22: new r.a.Player({
            playbackRate: 1,
            loop: !0,
            loopStart: 0.2,
            loopEnd: 3.6,
            retrigger: !0,
            volume: 6,
          }),
          SFXPlayer23: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 4,
          }),
          SFXPlayer24: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !1,
          }),
          SFXPlayer25: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
          }),
          SFXPlayer26: new r.a.Player({
            playbackRate: 1,
            loop: !1,
            retrigger: !0,
            volume: 4,
          }),
          SFX1BooleanRepeat1: !1,
          SFX1BooleanRepeat2: !1,
          SFX1BooleanRepeat3: !1,
          SFX1BooleanRepeat4: !1,
          SFX2BooleanRepeat1: !1,
          SFX2BooleanRepeat2: !1,
          SFX2BooleanRepeat3: !1,
          SFX2BooleanRepeat4: !1,
          SFX3BooleanRepeat1: !1,
          SFX3BooleanRepeat2: !1,
          SFX3BooleanRepeat3: !1,
          SFX3BooleanRepeat4: !1,
          SFX4BooleanRepeat1: !1,
          SFX4BooleanRepeat2: !1,
          SFX4BooleanRepeat3: !1,
          SFX4BooleanRepeat4: !1,
          SFX5BooleanRepeat1: !1,
          SFX5BooleanRepeat2: !1,
          SFX5BooleanRepeat3: !1,
          SFX5BooleanRepeat4: !1,
          SFX6BooleanRepeat1: !1,
          SFX6BooleanRepeat2: !1,
          SFX6BooleanRepeat3: !1,
          SFX6BooleanRepeat4: !1,
          SFX8BooleanRepeat: !1,
          SFX9BooleanRepeat: !1,
          SFX10BooleanRepeat: !1,
          SFX11BooleanRepeat: !1,
          SFX12BooleanRepeat: !1,
          SFX13BooleanRepeat: !1,
          SFX14BooleanRepeat: !1,
          SFX15BooleanRepeat: !1,
          SFX16BooleanRepeat: !1,
          SFX1MODEL: 1,
          SFX2MODEL: 1,
          SFX3MODEL: 1,
          SFX4MODEL: 1,
          SFX5MODEL: 0,
          SFX6MODEL: 0,
          musicReverb: 0,
          musicVol: -5,
          MusicVolumeMaster: new r.a.Volume(0),
          masterTempo: 120,
          sfxChorus: 0,
          fxChorus: new r.a.Chorus(4, 3, 0.5),
          sfxDelay: 0,
          masterReverb: 0,
          SFXverb: 0,
          fxConvolver: new r.a.Convolver("../src/assets/cookieverb.wav"),
          masterDistort: 0,
          fxDistort: new r.a.Distortion(0.4),
          masterCompressor: new r.a.Limiter(-3),
          evilLFO: new r.a.LFO({
            type: "sine",
            min: -14,
            max: 0,
            phase: 0,
            frequency: 0.1,
            amplitude: 0.5,
            units: r.a.Type.Default,
          }).start(),
          musicDestroy: 0,
          musicDestroyDistortion: new r.a.Distortion(0.6),
          destroyIt: !0,
          autoFilter: new r.a.AutoFilter({
            frequency: 10,
            type: "sine",
            depth: 1,
            baseFrequency: 1e3,
            octaves: 4,
            filter: { type: "lowpass", rolloff: -24, Q: 1 },
          })
            .toMaster()
            .start(),
          musicFilter: 0,
          nukeID: void 0,
          sfxVol: 0,
          SFXSubVolume: new r.a.Volume(),
          SFXSubVolumeControl: new r.a.Volume(),
          MEOW: !1,
          startAudioBoolean: !0,
        };
      },
      mounted: function () {},
      created: function () {
        this.audioLoading(),
          this.bufferLoading(),
          this.audioRouting(),
          r.a.Master.chain(this.masterCompressor),
          (r.a.Transport.bpm.value = 120),
          (r.a.Transport.loop = !0),
          setTimeout(this.startStop, 100);
      },
      computed: {
        Section1Class: function () {
          return {
            "btn btn-blackwhiteneg": this.section1control,
            "btn btn-transparent": !this.section1control,
          };
        },
        Section2Class: function () {
          return {
            "btn btn-blackwhiteneg": this.section2control,
            "btn btn-transparent": !this.section2control,
          };
        },
        Section3Class: function () {
          return {
            "btn btn-blackwhiteneg": this.section3control,
            "btn btn-transparent": !this.section3control,
          };
        },
        ambience1Class: function () {
          return {
            "btn btn-success": this.ambience1Boolean,
            "btn btn-danger": !this.ambience1Boolean,
            disabled: this.ambience1Disable,
          };
        },
        ambience2Class: function () {
          return {
            "btn btn-success": this.ambience2Boolean,
            "btn btn-danger": !this.ambience2Boolean,
            disabled: this.ambience2Disable,
          };
        },
        ambience3Class: function () {
          return {
            "btn btn-success": this.ambience3Boolean,
            "btn btn-danger": !this.ambience3Boolean,
            disabled: this.ambience3Disable,
          };
        },
        ambience4Class: function () {
          return {
            "btn btn-success": this.ambience4Boolean,
            "btn btn-danger": !this.ambience4Boolean,
            disabled: this.ambience4Disable,
          };
        },
        ambience1Icon: function () {
          return {
            "fa fa-toggle-on": this.ambience1Boolean,
            "fa fa-toggle-off": !this.ambience1Boolean,
          };
        },
        ambience2Icon: function () {
          return {
            "fa fa-toggle-on": this.ambience2Boolean,
            "fa fa-toggle-off": !this.ambience2Boolean,
          };
        },
        ambience3Icon: function () {
          return {
            "fa fa-toggle-on": this.ambience3Boolean,
            "fa fa-toggle-off": !this.ambience3Boolean,
          };
        },
        ambience4Icon: function () {
          return {
            "fa fa-toggle-on": this.ambience4Boolean,
            "fa fa-toggle-off": !this.ambience4Boolean,
          };
        },
        SFX1Class: function () {
          return {
            "btn btn-danger": this.SFX1Boolean,
            "btn btn-success": !this.SFX1Boolean,
            disabled: this.SFX1Disable,
          };
        },
        SFX2Class: function () {
          return {
            "btn btn-danger": this.SFX2Boolean,
            "btn btn-success": !this.SFX2Boolean,
            disabled: this.SFX2Disable,
          };
        },
        SFX3Class: function () {
          return {
            "btn btn-danger": this.SFX3Boolean,
            "btn btn-success": !this.SFX3Boolean,
            disabled: this.SFX3Disable,
          };
        },
        SFX4Class: function () {
          return {
            "btn btn-danger": this.SFX4Boolean,
            "btn btn-success": !this.SFX4Boolean,
            disabled: this.SFX4Disable,
          };
        },
        SFX5Class: function () {
          return {
            "btn btn-danger": this.SFX5Boolean,
            "btn btn-success": !this.SFX5Boolean,
            disabled: this.SFX5Disable,
          };
        },
        SFX6Class: function () {
          return {
            "btn btn-danger": this.SFX6Boolean,
            "btn btn-success": !this.SFX6Boolean,
            disabled: this.SFX6Disable,
          };
        },
        SFX7Class: function () {
          return {
            "btn btn-success": this.SFX7Boolean,
            "btn btn-danger": !this.SFX7Boolean,
            disabled: this.SFX7Disable,
          };
        },
        SFX8Class: function () {
          return {
            "btn btn-success": this.SFX8Boolean,
            "btn btn-danger": !this.SFX8Boolean,
            disabled: this.SFX8Disable,
          };
        },
        SFX9Class: function () {
          return {
            "btn btn-success": this.SFX9Boolean,
            "btn btn-danger": !this.SFX9Boolean,
            disabled: this.SFX9Disable,
          };
        },
        SFX10Class: function () {
          return {
            "btn btn-success": this.SFX10Boolean,
            "btn btn-danger": !this.SFX10Boolean,
            disabled: this.SFX10Disable,
          };
        },
        SFX11Class: function () {
          return {
            "btn btn-success": this.SFX11Boolean,
            "btn btn-danger": !this.SFX11Boolean,
            disabled: this.SFX11Disable,
          };
        },
        SFX12Class: function () {
          return {
            "btn btn-success": this.SFX12Boolean,
            "btn btn-danger": !this.SFX12Boolean,
            disabled: this.SFX12Disable,
          };
        },
        SFX13Class: function () {
          return {
            "btn btn-success": this.SFX13Boolean,
            "btn btn-danger": !this.SFX13Boolean,
            disabled: this.SFX13Disable,
          };
        },
        SFX14Class: function () {
          return {
            "btn btn-success": this.SFX14Boolean,
            "btn btn-danger": !this.SFX14Boolean,
            disabled: this.SFX14Disable,
          };
        },
        SFX15Class: function () {
          return {
            "btn btn-success": this.SFX15Boolean,
            "btn btn-danger": !this.SFX15Boolean,
            disabled: this.SFX15Disable,
          };
        },
        SFX16Class: function () {
          return {
            "btn btn-success": this.SFX16Boolean,
            "btn btn-danger": !this.SFX16Boolean,
            disabled: this.SFX16Disable,
          };
        },
        SFX17Class: function () {
          return {
            "btn btn-success": this.SFX17Boolean,
            "btn btn-danger": !this.SFX17Boolean,
            disabled: this.SFX17Disable,
          };
        },
        SFX18Class: function () {
          return {
            "btn btn-success": this.SFX18Boolean,
            "btn btn-danger": !this.SFX18Boolean,
            disabled: this.SFX18Disable,
          };
        },
        SFX19Class: function () {
          return {
            "btn btn-success": this.SFX19Boolean,
            "btn btn-danger": !this.SFX19Boolean,
            disabled: this.SFX19Disable,
          };
        },
        SFX20Class: function () {
          return {
            "btn btn-success": this.SFX20Boolean,
            "btn btn-danger": !this.SFX20Boolean,
            disabled: this.SFX20Disable,
          };
        },
        SFX21Class: function () {
          return {
            "btn btn-success": this.SFX21Boolean,
            "btn btn-danger": !this.SFX21Boolean,
            disabled: this.SFX21Disable,
          };
        },
        SFX22Class: function () {
          return {
            "btn btn-success": this.SFX22Boolean,
            "btn btn-danger": !this.SFX22Boolean,
            disabled: this.SFX22Disable,
          };
        },
        SFX23Class: function () {
          return {
            "btn btn-success": this.SFX23Boolean,
            "btn btn-danger": !this.SFX23Boolean,
            disabled: this.SFX23Disable,
          };
        },
        SFX24Class: function () {
          return {
            "btn btn-success": this.SFX24Boolean,
            "btn btn-danger": !this.SFX24Boolean,
            disabled: this.SFX24Disable,
          };
        },
        SFX25Class: function () {
          return {
            "btn btn-success": this.SFX25Boolean,
            "btn btn-danger": !this.SFX25Boolean,
            disabled: this.SFX25Disable,
          };
        },
        SFX26Class: function () {
          return {
            "btn btn-success": this.SFX26Boolean,
            "btn btn-danger": !this.SFX26Boolean,
            disabled: this.SFX26Disable,
          };
        },
        SFX27Class: function () {
          return {
            "btn btn-success": this.SFX27Boolean,
            "btn btn-danger": !this.SFX27Boolean,
          };
        },
        SFX28Class: function () {
          return {
            "btn btn-success": this.SFX28Boolean,
            "btn btn-danger": !this.SFX28Boolean,
          };
        },
        SFX1ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX1BooleanRepeat,
            "btn btn-blackwhite": !this.SFX1BooleanRepeat,
          };
        },
        SFX2ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX2BooleanRepeat,
            "btn btn-blackwhite": !this.SFX2BooleanRepeat,
          };
        },
        SFX3ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX3BooleanRepeat,
            "btn btn-blackwhite": !this.SFX3BooleanRepeat,
          };
        },
        SFX4ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX4BooleanRepeat,
            "btn btn-blackwhite": !this.SFX4BooleanRepeat,
          };
        },
        SFX5ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX5BooleanRepeat,
            "btn btn-blackwhite": !this.SFX5BooleanRepeat,
          };
        },
        SFX6ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX6BooleanRepeat,
            "btn btn-blackwhite": !this.SFX6BooleanRepeat,
          };
        },
        SFX7ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX7BooleanRepeat,
            "btn btn-blackwhite": !this.SFX7BooleanRepeat,
          };
        },
        SFX8ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX8BooleanRepeat,
            "btn btn-blackwhite": !this.SFX8BooleanRepeat,
          };
        },
        SFX9ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX9BooleanRepeat,
            "btn btn-blackwhite": !this.SFX9BooleanRepeat,
          };
        },
        SFX10ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX10BooleanRepeat,
            "btn btn-blackwhite": !this.SFX10BooleanRepeat,
          };
        },
        SFX11ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX11BooleanRepeat,
            "btn btn-blackwhite": !this.SFX11BooleanRepeat,
          };
        },
        SFX12ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX12BooleanRepeat,
            "btn btn-blackwhite": !this.SFX12BooleanRepeat,
          };
        },
        SFX13ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX13BooleanRepeat,
            "btn btn-blackwhite": !this.SFX13BooleanRepeat,
          };
        },
        SFX14ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX14BooleanRepeat,
            "btn btn-blackwhite": !this.SFX14BooleanRepeat,
          };
        },
        SFX15ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX15BooleanRepeat,
            "btn btn-blackwhite": !this.SFX15BooleanRepeat,
          };
        },
        SFX16ClassRepeat: function () {
          return {
            "btn btn-success": this.SFX16BooleanRepeat,
            "btn btn-blackwhite": !this.SFX16BooleanRepeat,
          };
        },
        destroyClass: function () {
          return {
            "btn btn-danger": this.destroyIt,
            "btn btn-success": !this.destroyIt,
          };
        },
        musicNukeIcon: function () {
          return {
            "fa fa-bolt lg": this.destroyIt,
            "fa fa-bolt lg fa-counter-spin fa-fw": !this.destroyIt,
          };
        },
        startStopIcon: function () {
          return {
            "fa fa-stop": this.startStopTrigger,
            "fa fa-play": !this.startStopTrigger,
          };
        },
        startStopClass: function () {
          return {
            "btn btn-danger": this.startStopTrigger,
            "btn btn-success": !this.startStopTrigger,
          };
        },
        musicVolume1: function () {
          (this.SFXPlayer1.volume.value = this.musicVol),
            (this.SFXPlayer1.mute = this.SFX1Boolean),
            (this.SFXPlayer1.playbackRate = this.SFX1MODEL);
        },
        musicVolume2: function () {
          (this.SFXPlayer2.volume.value = this.musicVol),
            (this.SFXPlayer2.mute = this.SFX2Boolean),
            (this.SFXPlayer2.playbackRate = this.SFX1MODEL);
        },
        musicVolume3: function () {
          (this.SFXPlayer3.volume.value = this.musicVol),
            (this.SFXPlayer3.mute = this.SFX3Boolean),
            (this.SFXPlayer3.playbackRate = this.SFX1MODEL);
        },
        musicVolume4: function () {
          (this.SFXPlayer4.volume.value = this.musicVol),
            (this.SFXPlayer4.mute = this.SFX4Boolean),
            (this.SFXPlayer4.playbackRate = this.SFX1MODEL);
        },
        musicVolume5: function () {
          (this.SFXPlayer5.volume.value = this.musicVol),
            (this.SFXPlayer5.mute = this.SFX5Boolean),
            (this.SFXPlayer5.playbackRate = this.SFX1MODEL);
        },
        musicVolume6: function () {
          (this.SFXPlayer6.volume.value = this.musicVol),
            (this.SFXPlayer6.mute = this.SFX6Boolean),
            (this.SFXPlayer6.playbackRate = this.SFX1MODEL);
        },
        audioMixing: function () {
          (this.fxConvolver.wet.value = this.musicReverb / 100),
            (this.fxChorus.wet.value = this.sfxChorus / 100),
            (this.musicDestroyDistortion.wet.value = this.musicDestroy / 100),
            (this.autoFilter.wet.value = this.musicFilter / 100),
            (this.fxDistort.wet.value = this.masterDistort / 100),
            (this.evilLFO.frequency.value = this.masterDistort / 50),
            (this.SFXSubVolumeControl.volume.value = this.sfxVol);
        },
        ambienceMixing: function () {
          (this.ambience1Player.volume.value = this.ambience1Vol),
            (this.ambience2Player.volume.value = this.ambience2Vol),
            (this.ambience3Player.volume.value = this.ambience3Vol),
            (this.ambience4Player.volume.value = this.ambience4Vol);
        },
      },
      methods: {
        startAudio: function () {
          o()(r.a.context, "#ambienceBtns");
        },
        bufferLoading: function () {
          var t = this;
          r.a.Buffer.on("progress", function () {
            t.bufferProgress++;
          }),
            r.a.Buffer.on("load", function () {
              setTimeout(t.musicStart, 100),
                t.FutureFitFunc2(),
                (t.LoadingText2 = "Add Some Horrible Sounds"),
                (t.LoadingText3 = "Play The Skeleton Song");
            });
        },
        FutureFitFunc2: function () {
          this.FutureFit = "Halloween";
        },
        musicStart: function () {
          this.SFXPlayer1.start(),
            this.SFXPlayer2.start(),
            this.SFXPlayer3.start(),
            this.SFXPlayer4.start(),
            this.SFXPlayer5.start(),
            this.SFXPlayer6.start(),
            this.SFXPlayer1.connect(this.MusicVolumeMaster),
            this.SFXPlayer2.connect(this.MusicVolumeMaster),
            this.SFXPlayer3.connect(this.MusicVolumeMaster),
            this.SFXPlayer4.connect(this.MusicVolumeMaster),
            this.SFXPlayer5.connect(this.MusicVolumeMaster),
            this.SFXPlayer6.connect(this.MusicVolumeMaster),
            this.MusicVolumeMaster.chain(
              this.fxChorus,
              this.fxConvolver,
              this.musicDestroyDistortion,
              this.autoFilter,
              r.a.Master
            );
        },
        audioRouting: function () {
          this.SFXPlayer7.connect(this.SFXSubVolume),
            this.SFXPlayer8.connect(this.SFXSubVolume),
            this.SFXPlayer9.connect(this.SFXSubVolume),
            this.SFXPlayer10.connect(this.SFXSubVolume),
            this.SFXPlayer11.connect(this.SFXSubVolume),
            this.SFXPlayer12.connect(this.SFXSubVolume),
            this.SFXPlayer13.connect(this.SFXSubVolume),
            this.SFXPlayer14.connect(this.SFXSubVolume),
            this.SFXPlayer15.connect(this.SFXSubVolume),
            this.SFXPlayer16.connect(this.SFXSubVolume),
            this.SFXPlayer17.connect(this.SFXSubVolume),
            this.SFXPlayer18.connect(this.SFXSubVolume),
            this.SFXPlayer19.connect(this.SFXSubVolume),
            this.SFXPlayer20.connect(this.SFXSubVolume),
            this.SFXPlayer21.connect(this.SFXSubVolume),
            this.SFXPlayer22.connect(this.SFXSubVolume),
            this.SFXPlayer23.connect(this.SFXSubVolume),
            this.SFXPlayer24.connect(this.SFXSubVolume),
            this.SFXPlayer25.connect(this.SFXSubVolume),
            this.SFXPlayer26.connect(this.SFXSubVolume),
            this.SFXSubVolume.chain(
              this.fxDistort,
              this.SFXSubVolumeControl,
              r.a.Master
            ),
            this.evilLFO.connect(this.SFXSubVolume.volume);
        },
        audioLoading: function () {
          var t = this;
          this.ambience1Player.load("../src/assets/storm.mp3", function () {
            t.ambience1Disable = !1;
          }),
            this.ambience2Player.load(
              "../src/assets/graveyard.mp3",
              function () {
                t.ambience2Disable = !1;
              }
            ),
            this.ambience3Player.load("../src/assets/sewer.mp3", function () {
              t.ambience3Disable = !1;
            }),
            this.ambience4Player.load("../src/assets/lab.mp3", function () {
              (t.ambience4Disable = !1),
                (t.LoadingText1 = "Choose Your Background Theme");
            }),
            this.SFXPlayer11.load("../src/assets/evillaugh.mp3", function () {
              t.SFX11Disable = !1;
            }),
            this.SFXPlayer21.load("../src/assets/whisper.mp3", function () {
              t.SFX21Disable = !1;
            }),
            this.SFXPlayer9.load("../src/assets/clapsquish.mp3", function () {
              t.SFX9Disable = !1;
            }),
            this.SFXPlayer7.load("../src/assets/zombiegrowl.mp3", function () {
              t.SFX7Disable = !1;
            }),
            this.SFXPlayer8.load("../src/assets/zombieangry.mp3", function () {
              t.SFX8Disable = !1;
            }),
            this.SFXPlayer12.load("../src/assets/monster.mp3", function () {
              t.SFX12Disable = !1;
            }),
            this.SFXPlayer10.load("../src/assets/bird.mp3", function () {
              t.SFX10Disable = !1;
            }),
            this.SFXPlayer13.load("../src/assets/chainsaw.mp3", function () {
              t.SFX13Disable = !1;
            }),
            this.SFXPlayer14.load("../src/assets/knife.mp3", function () {
              t.SFX14Disable = !1;
            }),
            this.SFXPlayer15.load("../src/assets/knifecut.mp3", function () {
              t.SFX15Disable = !1;
            }),
            this.SFXPlayer16.load("../src/assets/match.mp3", function () {
              t.SFX16Disable = !1;
            }),
            this.SFXPlayer23.load("../src/assets/scarymetal.mp3", function () {
              t.SFX23Disable = !1;
            }),
            this.SFXPlayer17.load("../src/assets/wormhole.mp3", function () {
              t.SFX17Disable = !1;
            }),
            this.SFXPlayer18.load("../src/assets/drama.mp3", function () {
              t.SFX18Disable = !1;
            }),
            this.SFXPlayer19.load("../src/assets/creation.mp3", function () {
              t.SFX19Disable = !1;
            }),
            this.SFXPlayer20.load("../src/assets/saturn.mp3", function () {
              t.SFX20Disable = !1;
            }),
            this.SFXPlayer22.load("../src/assets/insects.mp3", function () {
              t.SFX22Disable = !1;
            }),
            this.SFXPlayer24.load("../src/assets/biosuit.mp3", function () {
              t.SFX24Disable = !1;
            }),
            this.SFXPlayer25.load("../src/assets/screams.mp3", function () {
              t.SFX25Disable = !1;
            }),
            this.SFXPlayer26.load("../src/assets/sub.mp3", function () {
              t.SFX26Disable = !1;
            }),
            this.SFXPlayer1.load("../src/assets/accordion.mp3", function () {
              t.SFX1Disable = !1;
            }),
            this.SFXPlayer2.load("../src/assets/bass.mp3", function () {
              t.SFX2Disable = !1;
            }),
            this.SFXPlayer3.load("../src/assets/sax.mp3", function () {
              t.SFX3Disable = !1;
            }),
            this.SFXPlayer4.load("../src/assets/mando.mp3", function () {
              t.SFX4Disable = !1;
            }),
            this.SFXPlayer5.load("../src/assets/fiddle.mp3", function () {
              t.SFX5Disable = !1;
            }),
            this.SFXPlayer6.load("../src/assets/gtr.mp3", function () {
              t.SFX6Disable = !1;
            });
        },
        destroyFunc: function () {
          this.destroyIt = !this.destroyIt;
          var t = [1500, 2200, 3500, 1e4, 15e3],
            e = t[Math.floor(Math.random() * t.length)];
          !1 === this.destroyIt
            ? ((this.sfxChorus = 85),
              (this.musicReverb = 85),
              (this.musicDestroy = 35),
              (this.SFX1MODEL = 0.2),
              (this.musicFilter = 70),
              (this.nukeID = setInterval(this.nukeTiming, e)),
              (this.SkeletonDance = "That's The Spirit"),
              this.SFXPlayer23.start())
            : !0 === this.destroyIt &&
              ((this.sfxChorus = 0),
              (this.musicReverb = 0),
              (this.musicDestroy = 0),
              (this.SFX1MODEL = 1),
              (this.musicFilter = 0),
              clearInterval(this.nukeID),
              (this.SkeletonDance = "Summon The Music Demon"));
        },
        nukeTiming: function () {
          var t = [
              0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3,
              1.5, 1.8, 2,
            ],
            e = t[Math.floor(Math.random() * t.length)];
          (this.SFX1MODEL = e), console.log(e);
        },
        SFX7Repeat: function () {
          this.SFX7BooleanRepeat = !this.SFX7BooleanRepeat;
        },
        SFX8Repeat: function () {
          this.SFX8BooleanRepeat = !this.SFX8BooleanRepeat;
        },
        SFX9Repeat: function () {
          this.SFX9BooleanRepeat = !this.SFX9BooleanRepeat;
        },
        SFX10Repeat: function () {
          this.SFX10BooleanRepeat = !this.SFX10BooleanRepeat;
        },
        SFX11Repeat: function () {
          this.SFX11BooleanRepeat = !this.SFX11BooleanRepeat;
        },
        SFX12Repeat: function () {
          this.SFX12BooleanRepeat = !this.SFX12BooleanRepeat;
        },
        SFX13Repeat: function () {
          this.SFX13BooleanRepeat = !this.SFX13BooleanRepeat;
        },
        SFX14Repeat: function () {
          this.SFX14BooleanRepeat = !this.SFX14BooleanRepeat;
        },
        SFX15Repeat: function () {
          this.SFX15BooleanRepeat = !this.SFX15BooleanRepeat;
        },
        SFX16Repeat: function () {
          this.SFX16BooleanRepeat = !this.SFX16BooleanRepeat;
        },
        SFX1: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX1Boolean = !this.SFX1Boolean),
            !0 === this.SFX1Boolean
              ? (this.SFXPlayer1.mute = !0)
              : !1 === this.SFX1Boolean && (this.SFXPlayer1.mute = !1);
        },
        SFX2: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX2Boolean = !this.SFX2Boolean),
            !0 === this.SFX2Boolean
              ? (this.SFXPlayer2.mute = !0)
              : !1 === this.SFX2Boolean && (this.SFXPlayer2.mute = !1);
        },
        SFX3: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX3Boolean = !this.SFX3Boolean),
            !0 === this.SFX3Boolean
              ? (this.SFXPlayer3.mute = !0)
              : !1 === this.SFX3Boolean && (this.SFXPlayer3.mute = !1);
        },
        SFX4: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX4Boolean = !this.SFX4Boolean),
            !0 === this.SFX4Boolean
              ? (this.SFXPlayer4.mute = !0)
              : !1 === this.SFX4Boolean && (this.SFXPlayer4.mute = !1);
        },
        SFX5: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX5Boolean = !0),
            this.SFXPlayer5.start(),
            setTimeout(this.SFX5false, 100);
        },
        SFX6: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX6Boolean = !0),
            this.SFXPlayer6.start(),
            setTimeout(this.SFX6false, 100);
        },
        SFX7: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX7Boolean = !0),
            this.SFXPlayer7.start(),
            setTimeout(this.SFX7false, 1e3);
        },
        SFX8: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX8Boolean = !0),
            this.SFXPlayer8.start(),
            setTimeout(this.SFX8false, 500);
        },
        SFX9: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX9Boolean = !0),
            this.SFXPlayer9.start(),
            setTimeout(this.SFX9false, 850);
        },
        SFX10: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX10Boolean = !this.SFX10Boolean),
            !0 === this.SFX10Boolean
              ? this.SFXPlayer10.start()
              : !1 === this.SFX10Boolean && this.SFXPlayer10.stop(),
            setTimeout(this.SFX24false, 2270);
        },
        SFX11: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX11Boolean = !0),
            this.SFXPlayer11.start(),
            setTimeout(this.SFX11false, 3800);
        },
        SFX12: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX12Boolean = !0),
            this.SFXPlayer12.start(),
            setTimeout(this.SFX12false, 4e3);
        },
        SFX13: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX13Boolean = !0),
            this.SFXPlayer13.start(),
            setTimeout(this.SFX13false, 4e3);
        },
        SFX14: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX14Boolean = !0),
            this.SFXPlayer14.start(),
            setTimeout(this.SFX14false, 1e3);
        },
        SFX15: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX15Boolean = !0),
            this.SFXPlayer15.start(),
            setTimeout(this.SFX15false, 1300);
        },
        SFX16: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX16Boolean = !0),
            this.SFXPlayer16.start(),
            setTimeout(this.SFX16false, 2500);
        },
        SFX17: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX17Boolean = !0),
            this.SFXPlayer17.start(),
            setTimeout(this.SFX17false, 1900);
        },
        SFX18: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX18Boolean = !0),
            this.SFXPlayer18.start(),
            setTimeout(this.SFX18false, 5e3);
        },
        SFX19: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX19Boolean = !0),
            this.SFXPlayer19.start(),
            setTimeout(this.SFX19false, 6e3);
        },
        SFX20: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX20Boolean = !0),
            this.SFXPlayer20.start(),
            setTimeout(this.SFX20false, 4e3);
        },
        SFX21: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX21Boolean = !0),
            this.SFXPlayer21.start(),
            setTimeout(this.SFX21false, 3700);
        },
        SFX22: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX22Boolean = !this.SFX22Boolean),
            !0 === this.SFX22Boolean
              ? this.SFXPlayer22.start()
              : !1 === this.SFX22Boolean && this.SFXPlayer22.stop(),
            setTimeout(this.SFX24false, 2270);
        },
        SFX23: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX23Boolean = !0),
            this.SFXPlayer23.start(),
            setTimeout(this.SFX23false, 800);
        },
        SFX24: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX24Boolean = !this.SFX24Boolean),
            !0 === this.SFX24Boolean
              ? this.SFXPlayer24.start()
              : !1 === this.SFX24Boolean && this.SFXPlayer24.stop(),
            setTimeout(this.SFX24false, 15e3);
        },
        SFX25: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX25Boolean = !0),
            this.SFXPlayer25.start(),
            setTimeout(this.SFX25false, 3e3);
        },
        SFX26: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.SFX26Boolean = !0),
            this.SFXPlayer26.start(),
            setTimeout(this.SFX26false, 5700);
        },
        ambience1Func: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.ambience1Boolean = !this.ambience1Boolean),
            !0 === this.ambience1Boolean
              ? this.ambience1Player.start()
              : !1 === this.ambience1Boolean && this.ambience1Player.stop();
        },
        ambience2Func: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.ambience2Boolean = !this.ambience2Boolean),
            !0 === this.ambience2Boolean
              ? this.ambience2Player.start()
              : !1 === this.ambience2Boolean && this.ambience2Player.stop();
        },
        ambience3Func: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.ambience3Boolean = !this.ambience3Boolean),
            !0 === this.ambience3Boolean
              ? this.ambience3Player.start()
              : !1 === this.ambience3Boolean && this.ambience3Player.stop();
        },
        ambience4Func: function () {
          this.startAudioBoolean &&
            (this.startAudio(), (this.startAudioBoolean = !1)),
            (this.ambience4Boolean = !this.ambience4Boolean),
            !0 === this.ambience4Boolean
              ? this.ambience4Player.start()
              : !1 === this.ambience4Boolean && this.ambience4Player.stop();
        },
        startStop: function () {
          r.a.Transport.start();
        },
        showSectionPage: function () {
          this.showSection = !0;
        },
        hideSectionPage: function () {
          this.showSection = !1;
        },
        showHelpPage: function () {
          this.showHelp = !0;
        },
        hideHelpPage: function () {
          this.showHelp = !1;
        },
        showDiscoPage: function () {
          this.discoLogo = !0;
        },
        hideDiscoPage: function () {
          this.discoLogo = !1;
        },
        SFX1false: function () {
          this.SFX1Boolean = !1;
        },
        SFX2false: function () {
          this.SFX2Boolean = !1;
        },
        SFX3false: function () {
          this.SFX3Boolean = !1;
        },
        SFX4false: function () {
          this.SFX4Boolean = !1;
        },
        SFX5false: function () {
          this.SFX5Boolean = !1;
        },
        SFX6false: function () {
          this.SFX6Boolean = !1;
        },
        SFX7false: function () {
          this.SFX7Boolean = !1;
        },
        SFX8false: function () {
          this.SFX8Boolean = !1;
        },
        SFX9false: function () {
          this.SFX9Boolean = !1;
        },
        SFX10false: function () {
          this.SFX10Boolean = !1;
        },
        SFX11false: function () {
          this.SFX11Boolean = !1;
        },
        SFX12false: function () {
          this.SFX12Boolean = !1;
        },
        SFX13false: function () {
          this.SFX13Boolean = !1;
        },
        SFX14false: function () {
          this.SFX14Boolean = !1;
        },
        SFX15false: function () {
          this.SFX15Boolean = !1;
        },
        SFX16false: function () {
          this.SFX16Boolean = !1;
        },
        SFX17false: function () {
          this.SFX17Boolean = !1;
        },
        SFX18false: function () {
          this.SFX18Boolean = !1;
        },
        SFX19false: function () {
          this.SFX19Boolean = !1;
        },
        SFX20false: function () {
          this.SFX20Boolean = !1;
        },
        SFX21false: function () {
          this.SFX21Boolean = !1;
        },
        SFX22false: function () {
          this.SFX22Boolean = !1;
        },
        SFX23false: function () {
          this.SFX23Boolean = !1;
        },
        SFX24false: function () {
          this.SFX24Boolean = !1;
        },
        SFX25false: function () {
          this.SFX25Boolean = !1;
        },
        SFX26false: function () {
          this.SFX26Boolean = !1;
        },
        SFX27false: function () {
          this.SFX27Boolean = !1;
        },
        SFX28false: function () {
          this.SFX28Boolean = !1;
        },
        goToHelp: function () {
          var t = this;
          this.SFXPlayer11.start(),
            setTimeout(this.hideSectionPage, 100),
            setTimeout(this.hideDiscoPage, 100),
            setTimeout(function () {
              t.FutureFit = "";
            }, 600),
            setTimeout(function () {
              t.FutureFit = "Ha";
            }, 800),
            setTimeout(function () {
              t.FutureFit = "Ha ha";
            }, 1e3),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha";
            }, 1200),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha ha";
            }, 1400),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha";
            }, 1600),
            setTimeout(function () {
              t.FutureFit = "Ha ha";
            }, 1800),
            setTimeout(function () {
              t.FutureFit = "Ha";
            }, 2e3),
            setTimeout(function () {
              t.FutureFit = "Ha ha";
            }, 2200),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha";
            }, 2400),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha ha";
            }, 2600),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha";
            }, 2800),
            setTimeout(function () {
              t.FutureFit = "Ha ha";
            }, 3e3),
            setTimeout(function () {
              t.FutureFit = "Ha";
            }, 3200),
            setTimeout(function () {
              t.FutureFit = "Ha ha";
            }, 3400),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha";
            }, 3600),
            setTimeout(function () {
              t.FutureFit = "Ha ha ha ha";
            }, 3800),
            setTimeout(this.showDiscoPage, 600),
            setTimeout(this.showHelpPage, 3e3);
        },
        goToHome: function () {
          var t = this;
          setTimeout(function () {
            t.FutureFit = "Halloween";
          }, 390),
            setTimeout(this.showSectionPage, 400),
            setTimeout(this.hideHelpPage, 100);
        },
      },
    };
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7),
      o = i.n(n),
      s = i(6),
      r = i.n(s);
    e.default = {
      data: function () {
        return { showmobileguide: !0, bellBoolean: !1 };
      },
      created: function () {
        (window.AudioContext =
          window.AudioContext || window.webkitAudioContext),
          setTimeout(this.bellTrue, 1500);
      },
      computed: {
        bellSlash: function () {
          return {
            "fa fa-bell fa-2x": this.bellBoolean,
            "fa fa-bell-slash fa-2x": !this.bellBoolean,
          };
        },
      },
      methods: {
        bellTrue: function () {
          this.bellBoolean = !0;
        },
        startAudio: function () {
          (r.a.context = new AudioContext()), o()(r.a.context, "#playButton");
        },
      },
    };
  },
  function (t, e, i) {
    (e = t.exports = i(1)()),
      e.push([
        t.i,
        "@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);",
        "",
      ]),
      e.push([
        t.i,
        "@media (max-width:349px){.text{fill:none;stroke-width:8;stroke-linejoin:round;stroke-dasharray:80 190;stroke-dashoffset:0;-webkit-animation:stroke 8s infinite linear;animation:stroke 8s infinite linear}.text:nth-child(3n+1){stroke:#ffb817;-webkit-animation-delay:-2.66667s;animation-delay:-2.66667s}.text:nth-child(3n+2){stroke:#e84b46;-webkit-animation-delay:-5.33333s;animation-delay:-5.33333s}.text:nth-child(3n+3){stroke:#000;-webkit-animation-delay:-8s;animation-delay:-8s}@-webkit-keyframes stroke{to{stroke-dashoffset:-270}}@keyframes stroke{to{stroke-dashoffset:-270}}#discoTitle{background:#000;font:12em/0 avenir,Arial;text-transform:uppercase;font-weight:800;margin:0;padding-right:0;padding-left:0;margin-top:-20px}#svgTitle{width:100%;height:100%}}@media (min-width:350px) and (max-width:600px){.text{fill:none;stroke-width:6;stroke-linejoin:round;stroke-dasharray:80 190;stroke-dashoffset:0;-webkit-animation:stroke 6s infinite linear;animation:stroke 6s infinite linear}.text:nth-child(3n+1){stroke:#ffb817;-webkit-animation-delay:-2s;animation-delay:-2s}.text:nth-child(3n+2){stroke:#e84b46;-webkit-animation-delay:-4s;animation-delay:-4s}.text:nth-child(3n+3){stroke:#000;-webkit-animation-delay:-6s;animation-delay:-6s}@-webkit-keyframes stroke{to{stroke-dashoffset:-270}}@keyframes stroke{to{stroke-dashoffset:-270}}#discoTitle{background:#000;font:12em/0 avenir,Arial;text-transform:uppercase;font-weight:800;padding-right:0;padding-left:0;margin-bottom:0}#svgTitle{width:100%;height:100%}}@media (min-width:600px) and (max-width:768px){.text{fill:none;stroke-width:6;stroke-linejoin:round;stroke-dasharray:60 144;stroke-dashoffset:0;-webkit-animation:stroke 5s infinite linear;animation:stroke 5s infinite linear}.text:nth-child(3n+1){stroke:#ffb817;-webkit-animation-delay:-1.66667s;animation-delay:-1.66667s}.text:nth-child(3n+2){stroke:#e84b46;-webkit-animation-delay:-3.33333s;animation-delay:-3.33333s}.text:nth-child(3n+3){stroke:#000;-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes stroke{to{stroke-dashoffset:-204}}@keyframes stroke{to{stroke-dashoffset:-204}}#discoTitle{background:#000;font:12em/0 avenir,Arial;text-transform:uppercase;font-weight:800;padding-right:0;padding-left:0;margin-bottom:0}#svgTitle{width:100%;height:100%}}@media (min-width:769px) and (max-width:1024px){.text{fill:none;stroke-width:7;stroke-linejoin:round;stroke-dasharray:40 86;stroke-dashoffset:0;-webkit-animation:stroke 5s infinite linear;animation:stroke 5s infinite linear}.text:nth-child(3n+1){stroke:#ffb817;-webkit-animation-delay:-1.66667s;animation-delay:-1.66667s}.text:nth-child(3n+2){stroke:#e84b46;-webkit-animation-delay:-3.33333s;animation-delay:-3.33333s}.text:nth-child(3n+3){stroke:#000;-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes stroke{to{stroke-dashoffset:-126}}@keyframes stroke{to{stroke-dashoffset:-126}}#discoTitle{background:#000;font:12em/0 avenir,Arial;text-transform:uppercase;font-weight:800;margin:0}.br{display:none}#svgTitle{width:100%;height:100%}}@media (min-width:1024px) and (max-width:1399px){.text{fill:none;stroke-width:5;stroke-linejoin:round;stroke-dasharray:40 86;stroke-dashoffset:0;-webkit-animation:stroke 5s infinite linear;animation:stroke 5s infinite linear}.text:nth-child(3n+1){stroke:#ffb817;-webkit-animation-delay:-1.66667s;animation-delay:-1.66667s}.text:nth-child(3n+2){stroke:#e84b46;-webkit-animation-delay:-3.33333s;animation-delay:-3.33333s}.text:nth-child(3n+3){stroke:#000;-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes stroke{to{stroke-dashoffset:-126}}@keyframes stroke{to{stroke-dashoffset:-126}}#discoTitle{background:#000;font:11em/0 avenir,Arial;text-transform:uppercase;font-weight:800;margin:0}.br{display:none}#svgTitle{width:100%;height:100%}}@media (min-width:1400px){.text{fill:none;stroke-width:4;stroke-linejoin:round;stroke-dasharray:40 86;stroke-dashoffset:0;-webkit-animation:stroke 5s infinite linear;animation:stroke 5s infinite linear}.text:nth-child(3n+1){stroke:#ffb817;-webkit-animation-delay:-1.66667s;animation-delay:-1.66667s}.text:nth-child(3n+2){stroke:#e84b46;-webkit-animation-delay:-3.33333s;animation-delay:-3.33333s}.text:nth-child(3n+3){stroke:#000;-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes stroke{to{stroke-dashoffset:-126}}@keyframes stroke{to{stroke-dashoffset:-126}}#discoTitle{background:#000;font:10em/0 avenir,Arial;text-transform:uppercase;font-weight:800;margin-top:100px}.br{display:none}#svgTitle{width:100%;height:100%}}",
        "",
      ]);
  },
  function (t, e, i) {
    (e = t.exports = i(1)()), e.push([t.i, "", ""]);
  },
  function (t, e, i) {
    (e = t.exports = i(1)()),
      e.push([
        t.i,
        "body{background-color:#000}#app{font-family:avenir,Arial;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;margin-top:10px;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.4)}button:focus,input:focus{outline:none!important}#evilSlider{font-color:white}.btn,.btn:active,.btn:active:focus,.btn:active:hover,.btn:focus,.btn:hover{text-shadow:0 4px 4px rgba(0,0,0,.2);border-radius:6px}.btn-success,.btn-success:active,.btn-success:active:focus,.btn-success:active:hover,.btn-success:focus,.btn-success:hover{text-shadow:0 2px 1px rgba(0,0,0,.2);border-radius:6px}.badge,.badge:active,.badge:active:focus,.badge:active:hover,.badge:focus,.badge:hover{text-shadow:0 1px 1px rgba(0,0,0,.2)}#Section1BodyText,#Section1TitleText,#Section2BodyText{text-shadow:0 4px 2px rgba(255,184,23,.3)}#MusicNukeBtn{text-shadow:0 5px 2px rgba(255,184,23,.3)}h1{margin-top:0}h1,h2{font-family:roboto-condensed,avenir}h3,h4,h5{margin-top:0}h3,h4,h5,ul{font-family:roboto-condensed,avenir}ul{padding:0}li{font-family:roboto-condensed,avenir;display:inline-block;margin:0}a{color:#42b983}select option{color:#333}@media (min-width:0px) and (max-width:349px){#noPadding{padding-right:0;padding-left:0;max-width:300px}#welcomeInfoText{margin-top:50px;font-size:26px;color:red;font-weight:700}#welcomeMobileText{color:#fff;font-size:18px}#playButton{margin-top:20px;font-size:18px;border-width:1px}#svgTitle{margin-top:12px;margin-bottom:4px}#FutureTitleText{font-size:50px;text-align:center;margin-top:50px}#FutureFitText{font-size:22px}#Section1PullUp{margin-top:20px}#Section1TitleText{margin-top:-20px;margin-bottom:10px}#Section1BodyText,#Section1TitleText{font-size:16px;text-align:center;color:#fff}#Section1BodyText{margin-top:80px;margin-bottom:0}#Section2TitleText{margin-top:100px;margin-bottom:10px}#Section2BodyText,#Section2TitleText{font-size:16px;text-align:center;color:#fff}#Section2BodyText{margin-top:18px;margin-bottom:8px}#ambienceBtns{width:120px;font-size:14px;font-weight:700}#ambienceBadges{font-size:12px;background-color:pink;color:#000}#Evilizor{margin-top:20px;margin-bottom:0}#SFXBtnRepeat{width:80px;margin-left:-8px}#SFXBtn,#SFXBtnRepeat{font-size:12px;font-weight:700;padding:6px}#SFXBtn{width:110px;margin-top:10px}#SFXRepearSlider{margin-top:4px;margin-left:-10px}#SFXRepeatBadge{font-size:9px;margin-bottom:6px;margin-left:-10px;background-color:orange;color:#000}#audioBadge{font-size:14px;background-color:#fff;color:#000}#MusicNukeBtn{width:100%;margin-top:10px;margin-bottom:0;font-size:14px;border-color:#e84b46;border-width:4px;background-color:transparent;color:#fff;font-weight:700}#helpBtn{margin-top:40px;font-size:16px;margin-bottom:20px}#helpBtnHome{margin-top:0;font-size:16px}#mattMcCorkle{margin-top:-10px;font-size:16px;margin-bottom:30px}#shoutOuts{font-size:14px}#shoutOutPullDown{margin-top:-50px}#mc_embed_signup{margin-bottom:-20px;background:#fff;font:14px avenir;width:100%;border-color:#fff;background-color:#000}#mce-EMAIL{padding:4px 10px;margin-top:0;width:180px;border-width:4px}#mc-embedded-subscribe,#mce-EMAIL{font:12px avenir;font-weight:800;border-radius:10px;background-color:#000}#mc-embedded-subscribe{padding:2px 10px;margin-top:-2px;border-width:3px;border-color:#fff}}@media (min-width:350px) and (max-width:600px){#noPadding{padding-right:0;padding-left:0;max-width:400px}#welcomeInfoText{margin-top:50px;font-size:30px;color:red;font-weight:700}#welcomeMobileText{color:#fff;font-size:18px}#playButton{margin-top:20px;font-size:20px;border-width:1px}#svgTitle{margin-top:0}#FutureTitleText{font-size:50px;text-align:center;margin-top:50px}#FutureFitText{font-size:22px}#Section1PullUp{margin-top:20px}#Section1TitleText{margin-top:-20px;margin-bottom:10px}#Section1BodyText,#Section1TitleText{font-size:20px;text-align:center;color:#fff}#Section1BodyText{margin-top:80px;margin-bottom:0}#Section2TitleText{margin-top:100px;margin-bottom:10px;font-size:22px;text-align:center;color:#fff}#Section2BodyText{margin-top:18px;margin-bottom:8px;font-size:20px;text-align:center;color:#fff}#ambienceBtns{width:140px;font-size:16px;font-weight:700}#ambienceBadges{font-size:14px;background-color:pink;color:#000}#Evilizor{margin-top:20px;margin-bottom:0}#SFXBtnRepeat{width:90px;margin-left:-8px}#SFXBtn,#SFXBtnRepeat{font-size:14px;font-weight:700;padding:6px}#SFXBtn{width:40%;margin-top:10px;margin-left:10px}#SFXRepearSlider{margin-top:4px}#SFXRepeatBadge{font-size:11px;margin-left:-12px;margin-bottom:6px;background-color:orange;color:#000}#audioBadge{font-size:16px;background-color:#fff;color:#000}#MusicNukeBtn{width:310px;margin-top:20px;margin-bottom:10px;font-size:20px;border-color:#e84b46;border-width:4px;background-color:transparent;color:#fff;font-weight:700;padding:6px}#helpBtn{margin-top:40px;font-size:18px;margin-bottom:20px}#helpBtnHome{margin-top:0;font-size:16px}#mattMcCorkle{margin-top:20px;font-size:20px}#shoutOuts{font-size:18px}#shoutOutPullDown{margin-top:-20px}#mc_embed_signup{background:#fff;font:14px avenir;width:100%;border-color:#fff;background-color:#000}#mce-EMAIL{padding:4px 10px;margin-top:0;width:200px;border-width:4px}#mc-embedded-subscribe,#mce-EMAIL{font:14px avenir;font-weight:800;border-radius:10px;background-color:#000}#mc-embedded-subscribe{padding:2px 10px;margin-top:-2px;border-width:3px;border-color:#fff}}@media (min-width:600px) and (max-width:768px){#noPadding{padding-right:0;padding-left:0;max-width:600px}#welcomeInfoText{margin-top:50px;font-size:30px;color:red;font-weight:700}#welcomeMobileText{color:#fff;font-size:18px}#playButton{margin-top:20px;font-size:20px;border-width:1px}#svgTitle{margin-top:0}#FutureTitleText{font-size:50px;text-align:center;margin-top:50px}#FutureFitText{font-size:22px}#Section1PullUp{margin-top:20px}#Section1TitleText{margin-top:-20px;margin-bottom:10px}#Section1BodyText,#Section1TitleText{font-size:22px;text-align:center;color:#fff}#Section1BodyText{margin-top:80px;margin-bottom:0}#Section2TitleText{margin-top:100px;margin-bottom:10px;font-size:30px;text-align:center;color:#fff}#Section2BodyText{margin-top:18px;margin-bottom:8px;font-size:22px;text-align:center;color:#fff}#ambienceBtns{width:270px;font-size:20px;font-weight:700}#ambienceBadges{font-size:14px;background-color:pink;color:#000}#Evilizor{margin-top:10px;margin-bottom:0}#SFXBtnRepeat{width:160px}#SFXBtn,#SFXBtnRepeat{font-size:18px;font-weight:700;padding:6px}#SFXBtn{width:200px;margin-top:10px;margin-left:10px}#SFXRepearSlider{margin-top:4px}#SFXRepeatBadge{font-size:16px;margin-bottom:6px;background-color:orange;color:#000}#audioBadge{font-size:20px;background-color:#fff;color:#000}#MusicNukeBtn{width:560px;margin-top:10px;margin-bottom:0;font-size:20px;border-color:#e84b46;border-width:4px;background-color:transparent;color:#fff;font-weight:700}#helpBtn{margin-top:40px;font-size:18px;margin-bottom:20px}#helpBtnHome{margin-top:20px;font-size:20px}#mattMcCorkle{margin-top:30px;font-size:30px}#shoutOuts{font-size:25px}#shoutOutPullDown{margin-top:40px}#mc_embed_signup{background:#fff;font:20px avenir;width:100%;border-color:#fff;background-color:#000}#mce-EMAIL{padding:4px 10px;margin-top:0;width:300px;border-width:4px}#mc-embedded-subscribe,#mce-EMAIL{font:20px avenir;font-weight:800;border-radius:10px;background-color:#000}#mc-embedded-subscribe{padding:2px 10px;margin-top:-4px;border-width:3px;border-color:#fff}}@media (min-width:769px) and (max-width:1024px){#noPadding{padding-right:0;padding-left:0;max-width:800px}#welcomeInfoText{margin-top:50px;font-size:32px;color:red;font-weight:700}#welcomeMobileText{color:#fff;font-size:22px}#playButton{margin-top:20px;font-size:22px;border-width:1px}#svgTitle{margin-top:10px;margin-bottom:0}#Section1PullUp{margin-top:-40px}#Section1TitleText{margin-top:40px}#Section1BodyText,#Section1TitleText{margin-bottom:0;font-size:32px;text-align:center;color:#fff}#Section1BodyText{margin-top:14px}#Section2TitleText{margin-top:40px;margin-bottom:0}#Section2BodyText,#Section2TitleText{font-size:32px;text-align:center;color:#fff}#Section2BodyText{margin-top:30px;margin-bottom:10px}#ambienceBtns{width:326px;font-size:28px;font-weight:700}#ambienceBadges{font-size:18px;background-color:pink;color:#000}#Evilizor{margin-top:0;margin-bottom:10px}#SFXBtnRepeat{width:180px}#SFXBtn,#SFXBtnRepeat{font-size:24px;font-weight:700}#SFXBtn{width:235px;margin-top:10px;margin-left:10px}#SFXRepearSlider{margin-top:4px}#SFXRepeatBadge{font-size:20px;margin-bottom:6px;background-color:orange;color:#000}#playbtnSidebySide{font-size:25px;border-radius:8px;padding:0 6px;vertical-align:middle;height:45px;width:45px;margin-top:-20px;border-width:4px;background-color:transparent}#audioBadge{font-size:22px;background-color:#fff;color:#000}#MusicNukeBtn{width:712px;margin-top:30px;margin-bottom:10px;font-size:30px;border-color:#e84b46;border-width:4px;background-color:transparent;color:#fff;font-weight:700}#helpBtn{margin-top:40px;font-size:22px;margin-bottom:20px}#helpBtnHome{margin-top:20px;font-size:22px}#mattMcCorkle{margin-top:30px;font-size:30px}#shoutOuts{font-size:25px}#shoutOutPullDown{margin-top:40px}#mc_embed_signup{background:#fff;font:20px avenir;width:100%;border-color:#fff;background-color:#000}#mce-EMAIL{padding:4px 10px;margin-top:0;width:350px;border-width:4px}#mc-embedded-subscribe,#mce-EMAIL{font:20px avenir;font-weight:800;border-radius:10px;background-color:#000}#mc-embedded-subscribe{padding:2px 10px;margin-top:-4px;border-width:3px;border-color:#fff}}@media (min-width:1024px) and (max-width:1399px){#noPadding{padding-right:0;padding-left:0;max-width:900px}#welcomeInfoText{margin-top:50px;font-size:34px;color:red;font-weight:700}#welcomeMobileText{color:#fff;font-size:24px}#playButton{margin-top:20px;font-size:24px;border-width:1px}#svgTitle{margin-top:10px;margin-bottom:0}#Section1PullUp{margin-top:-50px}#Section1TitleText{margin-top:40px}#Section1BodyText,#Section1TitleText{margin-bottom:0;font-size:32px;text-align:center;color:#fff}#Section1BodyText{margin-top:14px}#Section2TitleText{margin-top:40px;font-size:34px}#Section2BodyText,#Section2TitleText{margin-bottom:0;text-align:center;color:#fff}#Section2BodyText{margin-top:30px;font-size:32px}#ambienceBtns{width:385px;font-size:28px;font-weight:700}#ambienceBadges{font-size:18px;background-color:pink;color:#000}#Evilizor{margin-top:20px;margin-bottom:20px}#SFXBtnRepeat{width:226px}#SFXBtn,#SFXBtnRepeat{font-size:24px;font-weight:700;padding:6px}#SFXBtn{width:200px;margin-top:10px;margin-left:10px}#SFXRepearSlider{margin-top:4px}#SFXRepeatBadge{font-size:20px;margin-bottom:6px;background-color:orange;color:#000}#playbtnSidebySide{font-size:25px;border-radius:8px;padding:0 6px;vertical-align:middle;height:45px;width:45px;margin-top:-20px;border-width:4px;background-color:transparent}#audioBadge{font-size:22px;background-color:#fff;color:#000}#MusicNukeBtn{width:826px;margin-top:30px;margin-bottom:10px;font-size:30px;border-color:#e84b46;border-width:6px;background-color:transparent;color:#fff;font-weight:700}#helpBtn{margin-top:40px;font-size:24px;margin-bottom:20px}#helpBtnHome{margin-top:20px;font-size:24px}#mattMcCorkle{margin-top:30px;font-size:30px}#shoutOuts{font-size:25px}#shoutOutPullDown{margin-top:40px}#mc_embed_signup{background:#fff;font:22px avenir;width:100%;border-color:#fff;background-color:#000}#mce-EMAIL{padding:4px 10px;margin-top:0;width:350px;border-width:4px}#mc-embedded-subscribe,#mce-EMAIL{font:22px avenir;font-weight:800;border-radius:10px;background-color:#000}#mc-embedded-subscribe{padding:2px 10px;margin-top:-4px;border-width:3px;border-color:#fff}}@media (min-width:1400px){#noPadding{padding-right:0;padding-left:0;max-width:1000px}#welcomeInfoText{margin-top:50px;font-size:40px;color:red;font-weight:700}#welcomeMobileText{color:#fff;font-size:26px}#playButton{margin-top:20px;font-size:30px;border-width:1px}#svgTitle{margin-top:-80px;margin-bottom:0}#Section1PullUp{margin-top:0}#Section1TitleText{margin-top:-20px;margin-bottom:10px}#Section1BodyText,#Section1TitleText{font-size:32px;text-align:center;color:#fff}#Section1BodyText{margin-top:14px;margin-bottom:0}#Section2TitleText{font-size:40px}#Section2BodyText,#Section2TitleText{margin-top:30px;margin-bottom:0;text-align:center;color:#fff}#Section2BodyText{font-size:32px}#ambienceBtns{width:390px;font-size:28px;font-weight:700}#ambienceBadges{font-size:18px;background-color:pink;color:#000}#Evilizor{margin-top:20px;margin-bottom:20px}#SFXBtnRepeat{width:220px}#SFXBtn,#SFXBtnRepeat{font-size:24px;font-weight:700}#SFXBtn{width:215px;margin-top:10px;margin-left:10px}#SFXRepearSlider{margin-top:4px}#SFXRepeatBadge{font-size:20px;margin-bottom:6px;background-color:orange;color:#000}#playbtnSidebySide{font-size:25px;border-radius:8px;padding:0 6px;vertical-align:middle;height:45px;width:45px;margin-top:-20px;border-width:4px;background-color:transparent}#audioBadge{font-size:20px;background-color:#fff;color:#000}#MusicNukeBtn{width:890px;margin-top:30px;margin-bottom:10px;font-size:30px;border-color:#e84b46;border-width:6px;background-color:transparent;color:#fff;font-weight:700}#helpBtn{margin-top:40px;font-size:26px;margin-bottom:20px}#helpBtnHome{margin-top:0;font-size:26px}#mattMcCorkle{color:red;margin-top:30px;font-size:30px}#shoutOuts{font-size:25px}#shoutOutPullDown{margin-top:40px}#mc_embed_signup{background:#fff;font:22px avenir;width:100%;border-color:#fff;background-color:#000}#mce-EMAIL{padding:4px 10px;margin-top:0;width:350px;border-width:4px}#mc-embedded-subscribe,#mce-EMAIL{font:22px avenir;font-weight:800;border-radius:10px;background-color:#000}#mc-embedded-subscribe{padding:2px 10px;margin-top:-4px;border-width:3px;border-color:#fff}}.btn-info{color:#07cbff;background-color:#1ed7ff;border-color:#1ed7ff}.btn-info,.btn-info.active,.btn-info:active,.btn-info:active:focus .open>.dropdown-toggle.btn-info,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#1ed7ff;border-color:#1ed7ff}.btn-success{color:#fff;background-color:#5ce826;border-color:#5ce826}.btn-success,.btn-success.active,.btn-success:active,.btn-success:active:focus .open>.dropdown-toggle.btn-success,.btn-success:focus,.btn-success:hover{color:#000;background-color:#5ce826;border-color:#5ce826}.btn-warning,.btn-warning:active,.btn-warning:active:focus .btn-warning.active,.btn-warning:focus,.btn-warning:hover,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ffb817;border-color:#ffb817}.btn-danger,.btn-danger.active,.btn-danger:active,.btn-danger:active:focus .open>.dropdown-toggle.btn-danger,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#e84b46;border-color:#e84b46}.btn-primary,.btn-primary.active,.btn-primary:active,.btn-primary:active:focus .open>.dropdown-toggle.btn-primary,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#9776ff;border-color:#9776ff}.btn-accent,.btn-accent.active,.btn-accent:active,.btn-accent:active:focus .open>.dropdown-toggle.btn-accent,.btn-accent:focus,.btn-accent:hover{color:#fff;background-color:#6b8cff;border-color:#6b8cff}.btn-blackwhite,.btn-blackwhite.active,.btn-blackwhite:active,.btn-blackwhite:active:focus .open>.dropdown-toggle.btn-blackwhite,.btn-blackwhite:focus,.btn-blackwhite:hover{color:#fff;background-color:#000;border-color:#fff}.btn-blackwhiteneg,.btn-blackwhiteneg.active,.btn-blackwhiteneg:active,.btn-blackwhiteneg:active:focus .open>.dropdown-toggle.btn-blackwhiteneg,.btn-blackwhiteneg:focus,.btn-blackwhiteneg:hover{color:#000;background-color:#ffb817;border-color:#ffb817}.btn-transparent,.btn-transparent.active,.btn-transparent:active,.btn-transparent:active:focus .open>.dropdown-toggle.btn-transparent,.btn-transparent:focus,.btn-transparent:hover{color:#fff;background-color:transparent;border-color:#fff;border-width:1px}.animated.rubberBand{-webkit-animation-duration:1.5s;animation-duration:1.5s}.animated.rollOut{-webkit-animation-duration:.75s;animation-duration:.75s}.animated.pulse{-webkit-animation-duration:.3s;animation-duration:.3s}.animated.hinge{-webkit-animation-duration:1.75s;animation-duration:1.75s}.animated.fadeIn,.animated.fadeOut{-webkit-animation-duration:.2s;animation-duration:.2s}.fade-enter{opacity:0}.fade-enter-active{transition:opacity .5s}.fade-leave-active{transition:opacity .5s;opacity:0}.fa-counter-spin{-webkit-animation:spin-counter .2s infinite linear;animation:spin-counter .2s infinite linear}@-webkit-keyframes spin-counter{0%{-webkit-transform:rotate(359deg)}to{-webkit-transform:rotate(0deg)}}@keyframes spin-counter{0%{transform:rotate(359deg)}to{transform:rotate(0deg)}}@media (min-width:1400px){input[class=dangerRanger]{-webkit-appearance:none;background-color:#e84b46;height:8px;width:200px;margin:auto;border-radius:10px}input[class=dangerRanger]::-ms-track{background-color:#e84b46;height:8px;width:200px;margin:auto;border-radius:10px}}@media (max-width:1399px){input[class=dangerRanger]{-webkit-appearance:none;background-color:#e84b46;height:8px;width:125px;margin:auto;border-radius:10px}input[class=dangerRanger]::-ms-track{background-color:#e84b46;height:8px;width:125px;margin:auto;border-radius:10px}}@media (max-width:500px){input[class=dangerRanger]{-webkit-appearance:none;background-color:#e84b46;height:8px;width:100px;margin:auto;border-radius:10px}input[class=dangerRanger]::-ms-track{background-color:#e84b46;height:4px;width:100px;margin:auto;border-radius:10px}}input[class=dangerRanger]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:35px;height:35px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(50%,#abd3ee),color-stop(100%,red),color-stop(100%,#d5ebfb))}input[class=dangerRanger]::-moz-range-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:35px;height:35px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(50%,#abd3ee),color-stop(100%,red),color-stop(100%,#d5ebfb))}input[class=dangerRanger]::-ms-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:30px;height:30px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(50%,#abd3ee),color-stop(100%,red),color-stop(100%,#d5ebfb))}input[class=dangerRanger]::-ms-fill-upper{background:blue}input[class=dangerRanger]::-ms-fill-lower{background:#fff}input[class=dangerRanger2]{-webkit-appearance:none;background-color:red;height:8px;width:200px;margin:auto;border-radius:10px}input[class=dangerRanger2]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:35px;height:35px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(100%,red),color-stop(100%,red),color-stop(100%,#d5ebfb))}input[class=dangerRanger2]::-moz-range-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:35px;height:35px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(100%,red),color-stop(100%,red),color-stop(100%,#d5ebfb))}@media (min-width:1400px){input[class=warningRanger]{-webkit-appearance:none;background-color:#ffb817;height:8px;width:160px;margin:auto;border-radius:10px}}@media (max-width:1399px){input[class=warningRanger]{-webkit-appearance:none;background-color:#ffb817;height:8px;width:150px;margin:auto;border-radius:10px}}@media (max-width:800px){input[class=warningRanger]{-webkit-appearance:none;background-color:#ffb817;height:8px;width:85px;margin:auto;border-radius:10px}}@media (max-width:500px){input[class=warningRanger]{-webkit-appearance:none;background-color:#ffb817;height:8px;width:80px;margin:auto;border-radius:10px}}input[class=warningRanger]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:35px;height:35px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#ffb817),color-stop(50%,#abd3ee),color-stop(100%,#ffb817),color-stop(100%,#d5ebfb))}input[class=warningRanger]::-moz-range-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:35px;height:35px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#ffb817),color-stop(50%,#abd3ee),color-stop(100%,#ffb817),color-stop(100%,#d5ebfb))}input[class=primaryRanger]{-webkit-appearance:none;background-color:#9776ff;height:4px;width:80px;margin:auto}input[class=primaryRanger]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:30px;height:30px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#9776ff),color-stop(50%,#abd3ee),color-stop(100%,#9776ff),color-stop(100%,#d5ebfb))}input[class=successRanger]{-webkit-appearance:none;background-color:#5ce826;height:4px;width:80px;margin:auto}input[class=successRanger]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:30px;height:30px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#5ce826),color-stop(50%,#abd3ee),color-stop(100%,#5ce826),color-stop(100%,#d5ebfb))}input[class=infoRanger]{-webkit-appearance:none;background-color:#1ed7ff;height:4px;width:80px;margin:auto}input[class=infoRanger]::-webkit-slider-thumb{-webkit-appearance:none;position:relative;top:0;z-index:1;width:30px;height:30px;cursor:pointer;box-shadow:0 8px 10px 1px rgba(0,0,0,.6);border-radius:40px;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,red),color-stop(%,#abd3ee),color-stop(100%,#1ed7ff),color-stop(100%,#d5ebfb))}",
        "",
      ]);
  },
  function (t, e) {
    t.exports = {
      render: function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          [
            i(
              "transition",
              {
                attrs: {
                  appear: "",
                  "enter-active-class": "animated zoomIn",
                  "leave-active-class": "animated pulse",
                  mode: "out-in",
                },
              },
              [
                i(
                  "div",
                  { staticClass: "container", attrs: { id: "noPadding" } },
                  [
                    i(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.discoLogo,
                            expression: "discoLogo",
                          },
                        ],
                        attrs: { id: "discoTitle" },
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass: "col-xs-12 text-center",
                            attrs: { id: "noPadding" },
                          },
                          [
                            i(
                              "svg",
                              {
                                attrs: {
                                  id: "svgTitle",
                                  viewBox: "0 0 1200 200",
                                },
                              },
                              [
                                i("symbol", { attrs: { id: "s-text" } }, [
                                  i(
                                    "text",
                                    {
                                      attrs: {
                                        "text-anchor": "middle",
                                        x: "600",
                                        y: "50",
                                        dy: ".65em",
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n\t\t\t\t\t\t    " +
                                          t._s(t.FutureFit) +
                                          "\n\t\t\t\t\t\t    "
                                      ),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                i("use", {
                                  staticClass: "text",
                                  attrs: { "xlink:href": "#s-text" },
                                }),
                                t._v(" "),
                                i("use", {
                                  staticClass: "text",
                                  attrs: { "xlink:href": "#s-text" },
                                }),
                                t._v(" "),
                                i("use", {
                                  staticClass: "text",
                                  attrs: { "xlink:href": "#s-text" },
                                }),
                                t._v(" "),
                                i("use", {
                                  staticClass: "text",
                                  attrs: { "xlink:href": "#s-text" },
                                }),
                                t._v(" "),
                                i("use", {
                                  staticClass: "text",
                                  attrs: { "xlink:href": "#s-text" },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            t._v(" "),
            i(
              "transition",
              {
                attrs: {
                  appear: "",
                  "enter-active-class": "animated zoomIn",
                  "leave-active-class": "animated fadeOut",
                  mode: "out-in",
                },
              },
              [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showHelp,
                        expression: "showHelp",
                      },
                    ],
                    staticClass: "container-fluid",
                    attrs: { id: "noPadding" },
                  },
                  [
                    i(
                      "p",
                      {
                        staticStyle: { color: "red" },
                        attrs: { id: "mattMcCorkle" },
                      },
                      [
                        i("strong", [t._v(" Created by: ")]),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: {
                              href: "https://www.mattmccorkle.com",
                              target: "_blank",
                            },
                          },
                          [i("u", [t._v("Matt McCorkle")])]
                        ),
                        t._v("\n  \t\t\t\t\t@\n  \t\t\t\t\t"),
                        i(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: {
                              href: "https://www.newinc.org",
                              target: "_blank",
                            },
                          },
                          [i("u", [t._v("NEW INC")])]
                        ),
                      ]
                    ),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i(
                      "p",
                      {
                        staticStyle: { color: "red" },
                        attrs: { id: "mattMcCorkle" },
                      },
                      [
                        i("strong", [t._v(" Music by: ")]),
                        t._v(" "),
                        i("br"),
                        t._v('\n  \t\t\t\t\t"The Skeleton Rag" \n\t\t\t\t\t'),
                        i("br"),
                        t._v("\n  \t\t\t\t\tfrom \n  \t\t\t\t\t"),
                        i(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: {
                              href: "http://www.samreidermusic.com/",
                              target: "_blank",
                            },
                          },
                          [i("u", [t._v("\n  \t\t\t\t\tSam Reider's")])]
                        ),
                        t._v(" "),
                        i("br"),
                        t._v("\n  \t\t\t\t\tupcoming recording \n  \t\t\t\t\t"),
                        i("br"),
                        t._v(" "),
                        i("strong", [t._v(' "Too Hot To Sleep" ')]),
                      ]
                    ),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i("div", { attrs: { id: "shoutOutPullDown" } }, [
                      i("p", { attrs: { id: "shoutOuts" } }, [
                        i(
                          "a",
                          {
                            staticStyle: { color: "red" },
                            attrs: {
                              href: "https://tonejs.github.io/",
                              target: "_blank",
                            },
                          },
                          [
                            t._v("Special thanks to "),
                            i("u", [t._v("Tone.js")]),
                            t._v(" by Yotam Mann"),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      i("p"),
                    ]),
                    t._v(" "),
                    i(
                      "p",
                      {
                        staticStyle: { color: "red" },
                        attrs: { id: "mattMcCorkle" },
                      },
                      [
                        t._v(
                          " Stay in touch for new project releases! \n\t\t\t\t"
                        ),
                        i("br"),
                      ]
                    ),
                    t._v(" "),
                    i("div", { attrs: { id: "mc_embed_signup" } }, [
                      i(
                        "form",
                        {
                          staticClass: "validate",
                          attrs: {
                            action:
                              "https://space.us12.list-manage.com/subscribe/post?u=cc407290614bbaa2daa32fe9e&id=219d3ce36c",
                            method: "post",
                            id: "mc-embedded-subscribe-form",
                            name: "mc-embedded-subscribe-form",
                            target: "_blank",
                            novalidate: "",
                          },
                        },
                        [
                          i(
                            "div",
                            { attrs: { id: "mc_embed_signup_scroll" } },
                            [
                              i("input", {
                                staticClass: "email",
                                attrs: {
                                  type: "email",
                                  value: "",
                                  name: "EMAIL",
                                  id: "mce-EMAIL",
                                  placeholder: "email address",
                                  required: "",
                                },
                              }),
                              t._v(" "),
                              i(
                                "div",
                                {
                                  staticStyle: {
                                    position: "absolute",
                                    left: "-5000px",
                                  },
                                  attrs: { "aria-hidden": "true" },
                                },
                                [
                                  i("input", {
                                    attrs: {
                                      type: "text",
                                      name: "b_cc407290614bbaa2daa32fe9e_219d3ce36c",
                                      tabindex: "-1",
                                      value: "",
                                    },
                                  }),
                                ]
                              ),
                              t._v(" "),
                              i("input", {
                                staticClass: "btn btn-info",
                                attrs: {
                                  type: "submit",
                                  value: "Subscribe!",
                                  name: "subscribe",
                                  id: "mc-embedded-subscribe",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "btn btn-blackwhiteneg",
                        attrs: { id: "helpBtnHome" },
                        on: { click: t.goToHome },
                      },
                      [i("strong", [t._v(" Now Take Me Back! ")])]
                    ),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i("br"),
                  ]
                ),
              ]
            ),
            t._v(" "),
            i(
              "transition",
              {
                attrs: {
                  appear: "",
                  "enter-active-class": "animated zoomIn",
                  "leave-active-class": "animated zoomOut",
                  mode: "out-in",
                },
              },
              [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showSection,
                        expression: "showSection",
                      },
                    ],
                    staticClass: "container-fluid",
                    attrs: { id: "noPadding" },
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass: "col-xs-12 col-xs-offset-0",
                        attrs: { id: "Section1PullUp" },
                      },
                      [
                        i("p", { attrs: { id: "Section1TitleText" } }, [
                          i("strong", [t._v(" " + t._s(t.LoadingText1) + " ")]),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i("div", { staticClass: "col-xs-6" }, [
                            i(
                              "button",
                              {
                                class: t.ambience1Class,
                                attrs: { id: "ambienceBtns" },
                                on: { click: t.ambience1Func },
                              },
                              [
                                i("i", {
                                  class: t.ambience1Icon,
                                  staticStyle: { color: "white" },
                                }),
                                t._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tFierce Storm\n\t\t\t\t\t\t\t\t\t\t"
                                ),
                              ]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.ambience1Vol,
                                  expression: "ambience1Vol",
                                },
                              ],
                              staticClass: "dangerRanger",
                              attrs: {
                                type: "range",
                                "": t.ambienceMixing,
                                max: "5",
                                min: "-30",
                                step: "1",
                              },
                              domProps: { value: t.ambience1Vol },
                              on: {
                                __r: function (e) {
                                  t.ambience1Vol = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "ambienceBadges" },
                              },
                              [t._v("Volume " + t._s(t.ambience1Vol) + " dB")]
                            ),
                          ]),
                          t._v(" "),
                          i(
                            "button",
                            {
                              class: t.ambience2Class,
                              attrs: { id: "ambienceBtns" },
                              on: { click: t.ambience2Func },
                            },
                            [
                              i("i", {
                                class: t.ambience2Icon,
                                staticStyle: { color: "white" },
                              }),
                              t._v(
                                "\n\t\t\t\t\t\t\t\t\t\tGraveyard\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                            ]
                          ),
                          t._v(" "),
                          i("br"),
                          t._v(" "),
                          i("br"),
                          t._v(" "),
                          i("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.ambience2Vol,
                                expression: "ambience2Vol",
                              },
                            ],
                            staticClass: "dangerRanger",
                            attrs: {
                              type: "range",
                              "": t.ambienceMixing,
                              max: "5",
                              min: "-20",
                              step: "1",
                            },
                            domProps: { value: t.ambience2Vol },
                            on: {
                              __r: function (e) {
                                t.ambience2Vol = e.target.value;
                              },
                            },
                          }),
                          i("br"),
                          i(
                            "span",
                            {
                              staticClass: "badge",
                              attrs: { id: "ambienceBadges" },
                            },
                            [t._v("Volume " + t._s(t.ambience2Vol) + " dB")]
                          ),
                        ]),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i("div", { staticClass: "col-xs-6" }, [
                            i(
                              "button",
                              {
                                class: t.ambience3Class,
                                attrs: { id: "ambienceBtns" },
                                on: { click: t.ambience3Func },
                              },
                              [
                                i("i", {
                                  class: t.ambience3Icon,
                                  staticStyle: { color: "white" },
                                }),
                                t._v(
                                  "\n\t\t\t\t\t\t\t\t\t\tSewer\n\t\t\t\t\t\t\t\t\t\t"
                                ),
                              ]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.ambience3Vol,
                                  expression: "ambience3Vol",
                                },
                              ],
                              staticClass: "dangerRanger",
                              attrs: {
                                type: "range",
                                "": t.ambienceMixing,
                                max: "5",
                                min: "-20",
                                step: "1",
                              },
                              domProps: { value: t.ambience3Vol },
                              on: {
                                __r: function (e) {
                                  t.ambience3Vol = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "ambienceBadges" },
                              },
                              [t._v("Volume " + t._s(t.ambience3Vol) + " dB")]
                            ),
                          ]),
                          t._v(" "),
                          i(
                            "button",
                            {
                              class: t.ambience4Class,
                              attrs: { id: "ambienceBtns" },
                              on: { click: t.ambience4Func },
                            },
                            [
                              i("i", {
                                class: t.ambience4Icon,
                                staticStyle: { color: "white" },
                              }),
                              t._v(
                                "\n\t\t\t\t\t\t\t\t\t\tLaboratory\n\t\t\t\t\t\t\t\t\t\t"
                              ),
                            ]
                          ),
                          t._v(" "),
                          i("br"),
                          t._v(" "),
                          i("br"),
                          t._v(" "),
                          i("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.ambience4Vol,
                                expression: "ambience4Vol",
                              },
                            ],
                            staticClass: "dangerRanger",
                            attrs: {
                              type: "range",
                              "": t.ambienceMixing,
                              max: "5",
                              min: "-20",
                              step: "1",
                            },
                            domProps: { value: t.ambience4Vol },
                            on: {
                              __r: function (e) {
                                t.ambience4Vol = e.target.value;
                              },
                            },
                          }),
                          i("br"),
                          i(
                            "span",
                            {
                              staticClass: "badge",
                              attrs: { id: "ambienceBadges" },
                            },
                            [t._v("Volume " + t._s(t.ambience4Vol) + " dB")]
                          ),
                        ]),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i("p", { attrs: { id: "Section2BodyText" } }, [
                          i("strong", [t._v(" " + t._s(t.LoadingText3) + " ")]),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i("div", { staticClass: "col-xs-4" }, [
                            i(
                              "button",
                              {
                                class: t.SFX1Class,
                                attrs: {
                                  id: "SFXBtnRepeat",
                                  "": t.musicVolume1,
                                },
                                on: {
                                  click: function (e) {
                                    t.SFX1Boolean = !t.SFX1Boolean;
                                  },
                                },
                              },
                              [t._v("\n\t\t\t\t\t\t\tAccordion\n\t\t\t\t\t\t")]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i(
                              "button",
                              {
                                class: t.SFX2Class,
                                attrs: {
                                  id: "SFXBtnRepeat",
                                  "": t.musicVolume2,
                                },
                                on: {
                                  click: function (e) {
                                    t.SFX2Boolean = !t.SFX2Boolean;
                                  },
                                },
                              },
                              [t._v("\n\t\t\t\t\t\t\tBass\n\t\t\t\t\t\t")]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i(
                              "button",
                              {
                                class: t.SFX3Class,
                                attrs: {
                                  id: "SFXBtnRepeat",
                                  "": t.musicVolume3,
                                },
                                on: {
                                  click: function (e) {
                                    t.SFX3Boolean = !t.SFX3Boolean;
                                  },
                                },
                              },
                              [t._v("\n\t\t\t\t\t\t\tSaxophone\n\t\t\t\t\t\t")]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                          ]),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i("div", { staticClass: "col-xs-4" }, [
                            i(
                              "button",
                              {
                                class: t.SFX4Class,
                                attrs: {
                                  id: "SFXBtnRepeat",
                                  "": t.musicVolume4,
                                },
                                on: {
                                  click: function (e) {
                                    t.SFX4Boolean = !t.SFX4Boolean;
                                  },
                                },
                              },
                              [t._v("\n\t\t\t\t\t\t\tMandolin\n\t\t\t\t\t\t")]
                            ),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i(
                              "button",
                              {
                                class: t.SFX5Class,
                                attrs: {
                                  id: "SFXBtnRepeat",
                                  "": t.musicVolume5,
                                },
                                on: {
                                  click: function (e) {
                                    t.SFX5Boolean = !t.SFX5Boolean;
                                  },
                                },
                              },
                              [t._v("\n\t\t\t\t\t\t\tFiddle\n\t\t\t\t\t\t")]
                            ),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i(
                              "button",
                              {
                                class: t.SFX6Class,
                                attrs: {
                                  id: "SFXBtnRepeat",
                                  "": t.musicVolume6,
                                },
                                on: {
                                  click: function (e) {
                                    t.SFX6Boolean = !t.SFX6Boolean;
                                  },
                                },
                              },
                              [t._v("\n\t\t\t\t\t\t\tGuitar\n\t\t\t\t\t\t")]
                            ),
                            t._v(" "),
                            i("br"),
                          ]),
                        ]),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.destroyClass,
                            attrs: { id: "MusicNukeBtn", "": t.audioMixing },
                            on: { click: t.destroyFunc },
                          },
                          [
                            i("i", {
                              class: t.musicNukeIcon,
                              style: {
                                color: t.destroyIt ? t.stopColor : t.playColor,
                              },
                            }),
                            t._v(" "),
                            i("strong", [t._v(t._s(t.SkeletonDance))]),
                            t._v(" "),
                            i("i", {
                              class: t.musicNukeIcon,
                              style: {
                                color: t.destroyIt ? t.stopColor : t.playColor,
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i("div", { staticClass: "col-xs-4" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.SFX1MODEL,
                                  expression: "SFX1MODEL",
                                },
                              ],
                              staticClass: "warningRanger",
                              attrs: {
                                id: "SFXRepearSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "2",
                                min: ".1",
                                step: ".1",
                              },
                              domProps: { value: t.SFX1MODEL },
                              on: {
                                __r: function (e) {
                                  t.SFX1MODEL = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "SFXRepeatBadge" },
                              },
                              [t._v("Music Speed " + t._s(t.SFX1MODEL) + "x ")]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.sfxChorus,
                                  expression: "sfxChorus",
                                },
                              ],
                              staticClass: "warningRanger",
                              attrs: {
                                id: "SFXRepearSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "100",
                                min: "0",
                                step: "1",
                              },
                              domProps: { value: t.sfxChorus },
                              on: {
                                __r: function (e) {
                                  t.sfxChorus = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "SFXRepeatBadge" },
                              },
                              [t._v("Music Chorus " + t._s(t.sfxChorus) + "% ")]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.musicReverb,
                                  expression: "musicReverb",
                                },
                              ],
                              staticClass: "warningRanger",
                              attrs: {
                                id: "SFXRepearSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "100",
                                min: "0",
                                step: "1",
                              },
                              domProps: { value: t.musicReverb },
                              on: {
                                __r: function (e) {
                                  t.musicReverb = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "SFXRepeatBadge" },
                              },
                              [
                                t._v(
                                  "Music Reverb " + t._s(t.musicReverb) + "% "
                                ),
                              ]
                            ),
                            t._v(" "),
                            i("br"),
                            t._v(" "),
                            i("br"),
                          ]),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i("div", { staticClass: "col-xs-4" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.musicVol,
                                  expression: "musicVol",
                                },
                              ],
                              staticClass: "warningRanger",
                              attrs: {
                                id: "SFXRepearSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "5",
                                min: "-20",
                                step: "1",
                              },
                              domProps: { value: t.musicVol },
                              on: {
                                __r: function (e) {
                                  t.musicVol = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "SFXRepeatBadge" },
                              },
                              [t._v("Music Volume " + t._s(t.musicVol) + "dB ")]
                            ),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.musicFilter,
                                  expression: "musicFilter",
                                },
                              ],
                              staticClass: "warningRanger",
                              attrs: {
                                id: "SFXRepearSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "100",
                                min: "0",
                                step: "1",
                              },
                              domProps: { value: t.musicFilter },
                              on: {
                                __r: function (e) {
                                  t.musicFilter = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "SFXRepeatBadge" },
                              },
                              [t._v("Music Warp " + t._s(t.musicFilter) + "% ")]
                            ),
                            t._v(" "),
                            i("br"),
                          ]),
                          t._v(" "),
                          i("div", { staticClass: "col-xs-4" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.musicDestroy,
                                  expression: "musicDestroy",
                                },
                              ],
                              staticClass: "warningRanger",
                              attrs: {
                                id: "SFXRepearSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "100",
                                min: "0",
                                step: "1",
                              },
                              domProps: { value: t.musicDestroy },
                              on: {
                                __r: function (e) {
                                  t.musicDestroy = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                attrs: { id: "SFXRepeatBadge" },
                              },
                              [
                                t._v(
                                  "Music Destroy " + t._s(t.musicDestroy) + "%"
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i(
                          "div",
                          {
                            staticClass: "col-xs-12",
                            attrs: { id: "Evilizor" },
                          },
                          [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.masterDistort,
                                  expression: "masterDistort",
                                },
                              ],
                              staticClass: "dangerRanger2",
                              attrs: {
                                id: "evilSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "100",
                                min: "0",
                                step: "1",
                              },
                              domProps: { value: t.masterDistort },
                              on: {
                                __r: function (e) {
                                  t.masterDistort = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                staticStyle: { "background-color": "red" },
                                attrs: { id: "audioBadge" },
                              },
                              [
                                i("span", { staticStyle: { color: "white" } }, [
                                  t._v(
                                    " Sound Effect EVIL-IZOR " +
                                      t._s(t.masterDistort) +
                                      "% "
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        i("p", { attrs: { id: "Section1BodyText" } }, [
                          i("strong", [t._v(" " + t._s(t.LoadingText2) + " ")]),
                        ]),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX11Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX11 },
                          },
                          [t._v("\n\t\t\t\t\t \tLaugh\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX21Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX21 },
                          },
                          [t._v("\n\t\t\t\t\t\tGhost Whisper\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX25Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX25 },
                          },
                          [t._v("\n\t\t\t\t\t\tScreams\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX22Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX22 },
                          },
                          [t._v("\n\t\t\t\t\t\tInsect Swarm\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX9Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX9 },
                          },
                          [t._v("\n\t\t\t\t\t\tGouge\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX7Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX7 },
                          },
                          [t._v("\n\t\t\t\t\t\tZombie Growl\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX8Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX8 },
                          },
                          [t._v("\n\t\t\t\t\t\tAngry Zombie\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX12Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX12 },
                          },
                          [t._v("\n\t\t\t\t\t\tAngry Beast\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX10Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX10 },
                          },
                          [t._v("\n\t\t\t\t\t\tCrow\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX13Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX13 },
                          },
                          [t._v("\n\t\t\t\t\t\tChainsaw\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX14Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX14 },
                          },
                          [t._v("\n\t\t\t\t\t\tKnife\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX15Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX15 },
                          },
                          [t._v("\n\t\t\t\t\t\tMedical Saw\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX16Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX16 },
                          },
                          [t._v("\n\t\t\t\t\t\tTorch\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX23Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX23 },
                          },
                          [t._v("\n\t\t\t\t\t\tContraption\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX17Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX17 },
                          },
                          [t._v("\n\t\t\t\t\t\tWormhole\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX18Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX18 },
                          },
                          [t._v("\n\t\t\t\t\t\tDrama\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX19Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX19 },
                          },
                          [t._v("\n\t\t\t\t\t\tInterdimensional\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX20Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX20 },
                          },
                          [t._v("\n\t\t\t\t\t\tSaturn\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX24Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX24 },
                          },
                          [t._v("\n\t\t\t\t\t\tBio Suit\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i(
                          "button",
                          {
                            class: t.SFX26Class,
                            attrs: { id: "SFXBtn" },
                            on: { click: t.SFX26 },
                          },
                          [t._v("\n\t\t\t\t\t\tNeeds A Sub\n\t\t\t\t\t")]
                        ),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i("br"),
                        t._v(" "),
                        i(
                          "div",
                          {
                            staticClass: "col-xs-12",
                            attrs: { id: "Evilizor" },
                          },
                          [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.sfxVol,
                                  expression: "sfxVol",
                                },
                              ],
                              staticClass: "dangerRanger2",
                              attrs: {
                                id: "evilSlider",
                                type: "range",
                                "": t.audioMixing,
                                max: "5",
                                min: "-5",
                                step: "1",
                              },
                              domProps: { value: t.sfxVol },
                              on: {
                                __r: function (e) {
                                  t.sfxVol = e.target.value;
                                },
                              },
                            }),
                            i("br"),
                            i(
                              "span",
                              {
                                staticClass: "badge",
                                staticStyle: { "background-color": "red" },
                                attrs: { id: "audioBadge" },
                              },
                              [
                                i("span", { staticStyle: { color: "white" } }, [
                                  t._v(
                                    " Horrible Sounds Volume " +
                                      t._s(t.sfxVol) +
                                      "dB "
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    i(
                      "button",
                      {
                        staticClass: "btn btn-blackwhiteneg",
                        attrs: { id: "helpBtn", "": t.audioMixing },
                        on: { click: t.goToHelp },
                      },
                      [i("strong", [t._v(" Why Make Such A Thing? ")])]
                    ),
                    t._v(" "),
                    i("br"),
                    t._v(" "),
                    i("br"),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      staticRenderFns: [],
    };
  },
  function (t, e) {
    t.exports = {
      render: function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { attrs: { id: "app" } },
          [
            i(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [i("router-view")],
              1
            ),
          ],
          1
        );
      },
      staticRenderFns: [],
    };
  },
  function (t, e) {
    t.exports = {
      render: function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "container-fluid", attrs: { id: "noPadding" } },
          [
            i(
              "div",
              { staticClass: "col-xs-12 col-xs-offset-0" },
              [
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showmobileguide,
                        expression: "showmobileguide",
                      },
                    ],
                    key: "mobileinfo",
                  },
                  [
                    i("p", { attrs: { id: "welcomeInfoText" } }, [
                      t._v(
                        " \n\t\t\t\t\tA Horrifying Halloween Sound Experiment.\n\t\t\t\t"
                      ),
                    ]),
                  ]
                ),
                t._v(" "),
                i(
                  "router-link",
                  {
                    attrs: {
                      to: "/",
                      tag: "li",
                      "active-class": "active",
                      exact: "",
                    },
                  },
                  [
                    i(
                      "button",
                      {
                        staticClass: "btn btn-blackwhite btn-lg",
                        attrs: { id: "playButton" },
                        on: { click: t.startAudio },
                      },
                      [i("strong", [t._v(" Click To Scare, If You Dare. ")])]
                    ),
                  ]
                ),
                t._v(" "),
                i("br"),
                t._v(" "),
                i("br"),
                t._v(" "),
                i(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showmobileguide,
                        expression: "showmobileguide",
                      },
                    ],
                    key: "mobileinfo",
                  },
                  [
                    i("p", { attrs: { id: "welcomeMobileText" } }, [
                      i("i", { class: t.bellSlash }),
                      t._v(" "),
                      i("br"),
                      t._v(" \n\t\t      \tPlease make sure your "),
                      i("strong", [t._v(" mute button is off ")]),
                      t._v(" and volume is engaged.\n\t\t\t\t"),
                      i("br"),
                      t._v(" "),
                      i("br"),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]
        );
      },
      staticRenderFns: [],
    };
  },
  function (t, e, i) {
    var n = i(15);
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    i(3)("1bcc727a", n, !0);
  },
  function (t, e, i) {
    var n = i(16);
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    i(3)("2f91fc78", n, !0);
  },
  function (t, e, i) {
    var n = i(17);
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    i(3)("2308e570", n, !0);
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var i = [], n = {}, o = 0; o < e.length; o++) {
        var s = e[o],
          r = s[0],
          a = s[1],
          l = s[2],
          u = s[3],
          c = { id: t + ":" + o, css: a, media: l, sourceMap: u };
        n[r] ? n[r].parts.push(c) : i.push((n[r] = { id: r, parts: [c] }));
      }
      return i;
    };
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
]);
//# sourceMappingURL=build.js.map
