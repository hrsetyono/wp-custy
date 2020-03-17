! function(e) {
  function t(t) {
    for (var n, o, i = t[0], a = t[1], c = 0, s = []; c < i.length; c++) o = i[c], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), r[o] = 0;
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (l && l(t); s.length;) s.shift()()
  }
  var n = {},
    r = {
      0: 0
    };

  function o(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
  }
  o.e = function(e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var i = new Promise((function(t, o) {
          n = r[e] = [t, o]
        }));
        t.push(n[2] = i);
        var a, c = document.createElement("script");
        c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = function(e) {
          return o.p + "" + e + "." + {
            1: "0da14e4ebdf18165c5e3"
          } [e] + ".js"
        }(e);
        var l = new Error;
        a = function(t) {
          c.onerror = c.onload = null, clearTimeout(s);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              l.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")", l.name = "ChunkLoadError", l.type = o, l.request = i, n[1](l)
            }
            r[e] = void 0
          }
        };
        var s = setTimeout((function() {
          a({
            type: "timeout",
            target: c
          })
        }), 12e4);
        c.onerror = c.onload = a, document.head.appendChild(c)
      } return Promise.all(t)
  }, o.m = e, o.c = n, o.d = function(e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, o.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, o.t = function(e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) o.d(n, r, function(t) {
        return e[t]
      }.bind(null, r));
    return n
  }, o.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return o.d(t, "a", t), t
  }, o.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, o.p = "", o.oe = function(e) {
    throw console.error(e), e
  };
  var i = window.blocksyJsonP = window.blocksyJsonP || [],
    a = i.push.bind(i);
  i.push = t, i = i.slice();
  for (var c = 0; c < i.length; c++) t(i[c]);
  var l = a;
  o(o.s = 105)
}([function(e, t) {
  e.exports = window.wp.element
}, function(e, t) {
  e.exports = window.wp.i18n
}, function(e, t, n) {
  var r;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  ! function() {
    "use strict";
    var n = {}.hasOwnProperty;

    function o() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) {
          var i = typeof r;
          if ("string" === i || "number" === i) e.push(r);
          else if (Array.isArray(r) && r.length) {
            var a = o.apply(null, r);
            a && e.push(a)
          } else if ("object" === i)
            for (var c in r) n.call(r, c) && r[c] && e.push(c)
        }
      }
      return e.join(" ")
    }
    e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
      return o
    }.apply(t, [])) || (e.exports = r)
  }()
}, function(e, t, n) {
  "use strict";

  function r() {
    return (r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t) {
  e.exports = React
}, function(e, t) {
  e.exports = function(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  "use strict";
  n.d(t, "a", (function() {
    return p
  })), n.d(t, "b", (function() {
    return f
  }));
  var r = n(13),
    o = n.n(r);

  function i(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(n, !0).forEach((function(t) {
        l(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function s(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  var u = function e(t) {
      t.__CT_KEYS_ORDER__;
      var n = s(t, ["__CT_KEYS_ORDER__"]);
      return Object.keys(n).reduce((function(n, r) {
        return t[r].type ? t[r].options ? c({}, n, {}, e(t[r].options)) : t[r]["inner-options"] ? c({}, n, l({}, r, t[r]), e(t[r]["inner-options"])) : c({}, n, l({}, r, t[r])) : c({}, n, {}, e(t[r]))
      }), {})
    },
    p = function e(t) {
      return Object.keys(t).reduce((function(n, r) {
        return c({}, n, {}, t[r].type ? l({}, r, t[r]) : "__CT_KEYS_ORDER__" === r ? l({}, r, t[r]) : e(t[r]))
      }), {})
    },
    f = function(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = u(e);
      return c({}, t, {}, Object.keys(r).reduce((function(e, a) {
        var s = null;
        if (Object.keys(t).indexOf(a) > -1)(o.a.isString(t[a]) || o.a.isNumber(t[a])) && (s = t[a]), o.a.isObject(t[a]) && (s = c({}, r[a].value || {}, {}, t[a])), o.a.isArray(t[a]) && (s = t[a] ? t[a] : i(r[a].value || []));
        else {
          if (n) return c({}, e, {}, n(a, r[a]));
          s = Object.keys(r[a]).indexOf("value") > -1 ? r[a].value : ""
        }
        return c({}, e, l({}, a, s))
      }), {}))
    }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(12),
    c = n(56),
    l = n.n(c),
    s = n(19),
    u = n(1);

  function p(e) {
    return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function f(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }

  function d() {
    return (d = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function h(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(n, !0).forEach((function(t) {
        w(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function g(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function v(e) {
    return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function y(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function O(e, t) {
    return (O = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var j = n(68),
    _ = function(e) {
      var t = j.keys().map((function(e) {
        return e.replace(/^\.\//, "").replace(/\.js$/, "")
      })).indexOf(e);
      return t > -1 && j.keys()[t]
    },
    E = function(e) {
      var t, n = e.id,
        r = e.option,
        o = e.values,
        i = e.renderingConfig,
        a = -1 === Object.keys(r).indexOf("label") ? (t = n, (t = null == t ? "" : String(t)).charAt(0).toUpperCase() + t.slice(1)).replace(/\_|\-/g, " ") : r.label;
      return a !== a.toString() && (a = Object.keys(a).reduce((function(e, t) {
        return e || (Object(s.a)(Object(s.b)(a[t]), o) ? t : e)
      }), null) || Object.keys(a)[0]), "" === a && (a = !0), i.label || (a = !1), a
    },
    S = function(e) {
      function t() {
        var e, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        return n = function(e, t) {
          return !t || "object" !== p(t) && "function" != typeof t ? y(e) : t
        }(this, (e = v(t)).call.apply(e, [this].concat(o))), w(y(n), "state", {
          device: wp.customize && wp.customize.previewedDevice ? wp.customize.previewedDevice() : "desktop"
        }), w(y(n), "listener", (function() {
          return n.setState({
            device: wp.customize && wp.customize.previewedDevice ? wp.customize.previewedDevice() : "desktop"
          })
        })), n
      }
      var n, o, c;
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && O(e, t)
      }(t, e), n = t, (o = [{
        key: "componentDidMount",
        value: function() {
          var e = this;
          ("ct-typography" === this.props.option.type || this.props.option.responsive) && wp.customize && setTimeout((function() {
            return wp.customize.previewedDevice.bind(e.listener)
          }), 1e3)
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          ("ct-typography" === this.props.option.type || this.props.option.responsive) && wp.customize && wp.customize.previewedDevice.unbind(this.listener)
        }
      }, {
        key: "setDevice",
        value: function(e) {
          this.setState({
            device: e
          }), wp.customize && wp.customize.previewedDevice.set(e)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.props,
            n = t.value,
            o = t.values,
            c = t.onChange,
            s = t.onChangeFor,
            p = t.option,
            m = t.id,
            g = (t.purpose, function(e) {
              var t = {};
              return ctEvents.trigger("blocksy:options:register", t), _(e.type) ? j(_(e.type)).default : t[e.type] ? t[e.type] : null
            }(p)),
            v = p.responsive ? Object(a.c)(n)[this.state.device] : n,
            y = function(e) {
              p.switchDeviceOnChange && wp.customize && wp.customize.previewedDevice() !== p.switchDeviceOnChange && wp.customize.previewedDevice.set(p.switchDeviceOnChange), c(e)
            },
            O = function(t) {
              var r = Object(a.c)(n);
              y(p.responsive ? b({}, r, w({}, e.state.device, t), "desktop" === e.state.device ? Object.keys(r).reduce((function(e, n) {
                return b({}, e, {}, "desktop" !== n && "__changed" !== n && Object.keys(Object(a.c)(p.value)).reduce((function(e, t) {
                  return !!e && Object(a.c)(p.value)[t] === Object(a.c)(p.value).desktop
                }), !0) && -1 === (r.__changed || []).indexOf("tablet") ? w({}, n, t) : {})
              }), {}) : {}, {}, "tablet" === e.state.device ? Object.keys(r).reduce((function(e, n) {
                return b({}, e, {}, "desktop" !== n && "tablet" !== n && "__changed" !== n && Object.keys(Object(a.c)(p.value)).reduce((function(e, t) {
                  return !!e && Object(a.c)(p.value)[t] === Object(a.c)(p.value).desktop
                }), !0) && -1 === (r.__changed || []).indexOf(n) ? w({}, n, t) : {})
              }), {}) : {}, {
                __changed: [].concat(h(r.__changed || []), h("desktop" !== e.state.device ? [e.state.device] : []))
              }) : t)
            };
          if (!g) return Object(r.createElement)("div", null, "Unimplemented option: ", p.type);
          var S = {
              design: !0,
              label: !0,
              wrapperAttr: {}
            },
            k = function() {
              return null
            },
            C = null,
            x = function() {
              return null
            },
            P = function() {
              return {}
            };
          S = b({}, S, {}, g.renderingConfig || {}), p.design && (S.design = p.design), g.LabelToolbar && (k = g.LabelToolbar), g.ControlEnd && (x = g.ControlEnd), g.MetaWrapper && (C = g.MetaWrapper), g.sectionClassName && (P = g.sectionClassName);
          var I = Object(r.createElement)(g, d({
            key: m
          }, {
            option: b({}, p, {
              value: p.responsive ? Object(a.c)(p.value || "")[this.state.device] : p.value || ""
            }),
            value: v,
            id: m,
            values: o,
            onChangeFor: s,
            device: this.state.device,
            onChange: O
          }));
          if (!S.design || "none" === S.design) return I;
          var D = E({
              id: m,
              option: p,
              values: o,
              renderingConfig: S
            }),
            A = -1 !== Object.keys(p).indexOf("desc") && p.desc,
            T = "boolean" == typeof S.design ? "block" : S.design;
          if ("compact" === S.design) return Object(r.createElement)("section", null, D && Object(r.createElement)("label", null, D), (p.responsive && Object(a.b)(this.state.device, p.responsive) || !p.responsive) && I);
          var N = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              o = t.wrapperAttr,
              c = (o = void 0 === o ? {} : o).className,
              s = f(o, ["className"]);
            return f(t, ["wrapperAttr"]), Object(r.createElement)("div", d({
              className: i()("ct-control", c, {}),
              "data-design": T
            }, p.divider ? {
              "data-divider": p.divider
            } : {}, b({}, p.responsive && !Object(a.b)(e.state.device, p.responsive) || "disabled" === p.state ? {
              "data-state": "disabled"
            } : {}), b({}, p.wrapperAttr || {}, {}, s)), Object(r.createElement)("header", null, D && Object(r.createElement)("label", null, D), "ct-image-picker" !== p.type && "ct-layers" !== p.type && "ct-image-uploader" !== p.type && "ct-panel" !== p.type && e.props.hasRevertButton && !p.disableRevertButton && Object(r.createElement)("button", {
              type: "button",
              disabled: l()(p.value, n),
              className: "ct-revert",
              onClick: function() {
                return y(p.value)
              }
            }), Object(r.createElement)(k, {
              option: p,
              value: v,
              id: m,
              onChange: O
            }), p.responsive && "block" === T && Object(r.createElement)(a.a, {
              device: e.state.device,
              responsiveDescriptor: p.responsive,
              setDevice: function(t) {
                return e.setDevice(t)
              }
            })), p.responsive && !Object(a.b)(e.state.device, p.responsive) && Object(r.createElement)("div", {
              className: "ct-disabled-notification"
            }, p.disabledDeviceMessage || Object(u.__)("Option can't be edited for current device", "blocksy")), (p.responsive && Object(a.b)(e.state.device, p.responsive) || !p.responsive) && Object(r.createElement)(r.Fragment, null, Object(r.createElement)("section", {
              className: i()({
                "ct-responsive-container": p.responsive && "inline" === T
              }, P({
                design: T,
                option: p
              }))
            }, p.responsive && "inline" === T && Object(r.createElement)(a.a, {
              device: e.state.device,
              responsiveDescriptor: p.responsive,
              setDevice: function(t) {
                return e.setDevice(t)
              }
            }), I), Object(r.createElement)(x, null), A && Object(r.createElement)("div", {
              dangerouslySetInnerHTML: {
                __html: A
              },
              className: "ct-option-description"
            })))
          };
          return C ? Object(r.createElement)(C, {
            id: m,
            option: p,
            value: v,
            onChangeFor: s,
            values: o,
            getActualOption: N
          }) : N()
        }
      }]) && g(n.prototype, o), c && g(n, c), t
    }(r.Component);
  t.a = S
}, function(e, t) {
  e.exports = function(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  "use strict";
  n.d(t, "b", (function() {
    return l
  })), n.d(t, "c", (function() {
    return s
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var l = function(e, t) {
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(n, !0).forEach((function(t) {
            c(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }({
        desktop: !0,
        tablet: !0,
        mobile: !0
      }, "boolean" == typeof t ? {} : t)[e]
    },
    s = function(e) {
      return Object.keys(e).indexOf("desktop") > -1 ? e : {
        desktop: e,
        tablet: e,
        mobile: e
      }
    };
  t.a = function(e) {
    var t = e.device,
      n = e.setDevice,
      o = e.responsiveDescriptor;
    return Object(r.createElement)("div", {
      className: "ct-control-options"
    }, Object(r.createElement)("ul", {
      className: "ct-responsive-controls ct-devices"
    }, ["desktop", "tablet", "mobile"].map((function(e) {
      return Object(r.createElement)("li", {
        onClick: function() {
          return n(e)
        },
        className: i()({
          active: e === t,
          "ct-disabled": !l(e, o)
        }, "ct-".concat(e)),
        key: e
      })
    }))))
  }
}, function(e, t) {
  e.exports = window._
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return b
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function c() {
    return (c = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function l(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function u(e) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function p(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function f(e, t) {
    return (f = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var h = {
      disabled: !1,
      useCapture: !0,
      display: "block"
    },
    m = function(e, t) {
      "function" == typeof e ? e(t) : e.current = t
    },
    b = function(e) {
      function t() {
        var e, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
        return n = function(e, t) {
          return !t || "object" !== a(t) && "function" != typeof t ? p(e) : t
        }(this, (e = u(t)).call.apply(e, [this].concat(i))), d(p(n), "childNode", Object(r.createRef)()), d(p(n), "checkIsInside", (function(e) {
          return [n.childNode].concat(l(n.props.additionalRefs || [])).reduce((function(t, n) {
            return t || (n && n.current ? n.current.contains(e.target) : t)
          }), !1)
        })), d(p(n), "onMouseDown", (function(e) {
          var t = n.props.useCapture;
          n.checkIsInside(e) || (n.removeMouseUp && (n.removeMouseUp(), n.removeMouseUp = null), document.addEventListener("mouseup", n.onMouseUp, t), n.removeMouseUp = function() {
            document.removeEventListener("mouseup", n.onMouseUp, t)
          })
        })), d(p(n), "onMouseUp", (function(e) {
          var t = n.props.onOutsideClick;
          n.removeMouseUp && (n.removeMouseUp(), n.removeMouseUp = null), n.checkIsInside(e) || t(e)
        })), d(p(n), "setChildNodeRef", (function(e) {
          n.props.wrapperProps && n.props.wrapperProps.ref && n.props.wrapperProps.ref(e), m(n.childNode, e)
        })), n
      }
      var n, o, h;
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && f(e, t)
      }(t, e), n = t, (o = [{
        key: "componentDidMount",
        value: function() {
          var e = this.props,
            t = e.disabled,
            n = e.useCapture;
          t || this.addMouseDownEventListener(n)
        }
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function(e) {
          var t = e.disabled,
            n = e.useCapture;
          this.props.disabled !== t && (t ? this.removeEventListeners() : this.addMouseDownEventListener(n))
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.removeEventListeners()
        }
      }, {
        key: "addMouseDownEventListener",
        value: function(e) {
          var t = this;
          document.addEventListener("mousedown", this.onMouseDown, e), this.removeMouseDown = function() {
            document.removeEventListener("mousedown", t.onMouseDown, e)
          }
        }
      }, {
        key: "removeEventListeners",
        value: function() {
          this.removeMouseDown && this.removeMouseDown(), this.removeMouseUp && this.removeMouseUp()
        }
      }, {
        key: "render",
        value: function() {
          var e = this.props,
            t = e.children,
            n = (e.display, e.className),
            o = e.wrapperProps;
          return Object(r.createElement)("div", c({
            className: i()(n)
          }, o || {}, {
            ref: this.setChildNodeRef
          }), t)
        }
      }]) && s(n.prototype, o), h && s(n, h), t
    }(r.Component);
  b.defaultProps = h
}, function(e, t, n) {
  "use strict";
  (function(e) {
    n.d(t, "a", (function() {
      return Ye
    })), n.d(t, "b", (function() {
      return Ge
    }));
    var r = n(3),
      o = n(11),
      i = n(6),
      a = n(7),
      c = n(4),
      l = n.n(c),
      s = n(43),
      u = n.n(s),
      p = void 0,
      f = void 0,
      d = [],
      h = function(e) {
        return "undefined" != typeof window && window.requestAnimationFrame(e)
      },
      m = function(e) {
        return "undefined" != typeof window && window.cancelAnimationFrame(e)
      },
      b = void 0,
      g = function() {
        return Date.now()
      },
      v = function(e, t) {
        return f = {
          fn: e,
          transform: t
        }
      },
      y = function(e) {
        return d = e
      },
      O = function(e) {
        return p = e
      },
      w = function(e) {
        return b = e
      },
      j = function(e) {
        return e
      },
      _ = {
        transparent: 0,
        aliceblue: 4042850303,
        antiquewhite: 4209760255,
        aqua: 16777215,
        aquamarine: 2147472639,
        azure: 4043309055,
        beige: 4126530815,
        bisque: 4293182719,
        black: 255,
        blanchedalmond: 4293643775,
        blue: 65535,
        blueviolet: 2318131967,
        brown: 2771004159,
        burlywood: 3736635391,
        burntsienna: 3934150143,
        cadetblue: 1604231423,
        chartreuse: 2147418367,
        chocolate: 3530104575,
        coral: 4286533887,
        cornflowerblue: 1687547391,
        cornsilk: 4294499583,
        crimson: 3692313855,
        cyan: 16777215,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 3095792639,
        darkgray: 2846468607,
        darkgreen: 6553855,
        darkgrey: 2846468607,
        darkkhaki: 3182914559,
        darkmagenta: 2332068863,
        darkolivegreen: 1433087999,
        darkorange: 4287365375,
        darkorchid: 2570243327,
        darkred: 2332033279,
        darksalmon: 3918953215,
        darkseagreen: 2411499519,
        darkslateblue: 1211993087,
        darkslategray: 793726975,
        darkslategrey: 793726975,
        darkturquoise: 13554175,
        darkviolet: 2483082239,
        deeppink: 4279538687,
        deepskyblue: 12582911,
        dimgray: 1768516095,
        dimgrey: 1768516095,
        dodgerblue: 512819199,
        firebrick: 2988581631,
        floralwhite: 4294635775,
        forestgreen: 579543807,
        fuchsia: 4278255615,
        gainsboro: 3705462015,
        ghostwhite: 4177068031,
        gold: 4292280575,
        goldenrod: 3668254975,
        gray: 2155905279,
        green: 8388863,
        greenyellow: 2919182335,
        grey: 2155905279,
        honeydew: 4043305215,
        hotpink: 4285117695,
        indianred: 3445382399,
        indigo: 1258324735,
        ivory: 4294963455,
        khaki: 4041641215,
        lavender: 3873897215,
        lavenderblush: 4293981695,
        lawngreen: 2096890111,
        lemonchiffon: 4294626815,
        lightblue: 2916673279,
        lightcoral: 4034953471,
        lightcyan: 3774873599,
        lightgoldenrodyellow: 4210742015,
        lightgray: 3553874943,
        lightgreen: 2431553791,
        lightgrey: 3553874943,
        lightpink: 4290167295,
        lightsalmon: 4288707327,
        lightseagreen: 548580095,
        lightskyblue: 2278488831,
        lightslategray: 2005441023,
        lightslategrey: 2005441023,
        lightsteelblue: 2965692159,
        lightyellow: 4294959359,
        lime: 16711935,
        limegreen: 852308735,
        linen: 4210091775,
        magenta: 4278255615,
        maroon: 2147483903,
        mediumaquamarine: 1724754687,
        mediumblue: 52735,
        mediumorchid: 3126187007,
        mediumpurple: 2473647103,
        mediumseagreen: 1018393087,
        mediumslateblue: 2070474495,
        mediumspringgreen: 16423679,
        mediumturquoise: 1221709055,
        mediumvioletred: 3340076543,
        midnightblue: 421097727,
        mintcream: 4127193855,
        mistyrose: 4293190143,
        moccasin: 4293178879,
        navajowhite: 4292783615,
        navy: 33023,
        oldlace: 4260751103,
        olive: 2155872511,
        olivedrab: 1804477439,
        orange: 4289003775,
        orangered: 4282712319,
        orchid: 3664828159,
        palegoldenrod: 4008225535,
        palegreen: 2566625535,
        paleturquoise: 2951671551,
        palevioletred: 3681588223,
        papayawhip: 4293907967,
        peachpuff: 4292524543,
        peru: 3448061951,
        pink: 4290825215,
        plum: 3718307327,
        powderblue: 2967529215,
        purple: 2147516671,
        rebeccapurple: 1714657791,
        red: 4278190335,
        rosybrown: 3163525119,
        royalblue: 1097458175,
        saddlebrown: 2336560127,
        salmon: 4202722047,
        sandybrown: 4104413439,
        seagreen: 780883967,
        seashell: 4294307583,
        sienna: 2689740287,
        silver: 3233857791,
        skyblue: 2278484991,
        slateblue: 1784335871,
        slategray: 1887473919,
        slategrey: 1887473919,
        snow: 4294638335,
        springgreen: 16744447,
        steelblue: 1182971135,
        tan: 3535047935,
        teal: 8421631,
        thistle: 3636451583,
        tomato: 4284696575,
        turquoise: 1088475391,
        violet: 4001558271,
        wheat: 4125012991,
        white: 4294967295,
        whitesmoke: 4126537215,
        yellow: 4294902015,
        yellowgreen: 2597139199
      },
      E = function() {
        function e() {}
        return e.create = function(t, n) {
          if ("function" == typeof t) return t;
          if (b && t.output && "string" == typeof t.output[0]) return b(t);
          if (Array.isArray(t)) return e.create({
            range: t,
            output: n
          });
          var r = t.output,
            o = t.range || [0, 1],
            i = t.easing || function(e) {
              return e
            },
            a = "extend",
            c = t.map;
          void 0 !== t.extrapolateLeft ? a = t.extrapolateLeft : void 0 !== t.extrapolate && (a = t.extrapolate);
          var l = "extend";
          return void 0 !== t.extrapolateRight ? l = t.extrapolateRight : void 0 !== t.extrapolate && (l = t.extrapolate),
            function(e) {
              var t = function(e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1
              }(e, o);
              return function(e, t, n, r, o, i, a, c, l) {
                var s = l ? l(e) : e;
                if (s < t) {
                  if ("identity" === a) return s;
                  "clamp" === a && (s = t)
                }
                if (s > n) {
                  if ("identity" === c) return s;
                  "clamp" === c && (s = n)
                }
                if (r === o) return r;
                if (t === n) return e <= t ? r : o;
                t === -1 / 0 ? s = -s : n === 1 / 0 ? s -= t : s = (s - t) / (n - t);
                s = i(s), r === -1 / 0 ? s = -s : o === 1 / 0 ? s += r : s = s * (o - r) + r;
                return s
              }(e, o[t], o[t + 1], r[t], r[t + 1], i, a, l, c)
            }
        }, e
      }();
    var S = "[-+]?\\d*\\.?\\d+",
      k = S + "%";

    function C() {
      return "\\(\\s*(" + Array.prototype.slice.call(arguments).join(")\\s*,\\s*(") + ")\\s*\\)"
    }
    var x = new RegExp("rgb" + C(S, S, S)),
      P = new RegExp("rgba" + C(S, S, S, S)),
      I = new RegExp("hsl" + C(S, k, k)),
      D = new RegExp("hsla" + C(S, k, k, S)),
      A = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      T = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      N = /^#([0-9a-fA-F]{6})$/,
      M = /^#([0-9a-fA-F]{8})$/;

    function R(e, t, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function z(e, t, n) {
      var r = n < .5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - r,
        i = R(o, r, e + 1 / 3),
        a = R(o, r, e),
        c = R(o, r, e - 1 / 3);
      return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * c) << 8
    }

    function L(e) {
      var t = parseInt(e, 10);
      return t < 0 ? 0 : t > 255 ? 255 : t
    }

    function F(e) {
      return (parseFloat(e) % 360 + 360) % 360 / 360
    }

    function B(e) {
      var t = parseFloat(e);
      return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
    }

    function V(e) {
      var t = parseFloat(e);
      return t < 0 ? 0 : t > 100 ? 1 : t / 100
    }

    function H(e) {
      var t, n, r = "number" == typeof(t = e) ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (n = N.exec(t)) ? parseInt(n[1] + "ff", 16) >>> 0 : _.hasOwnProperty(t) ? _[t] : (n = x.exec(t)) ? (L(n[1]) << 24 | L(n[2]) << 16 | L(n[3]) << 8 | 255) >>> 0 : (n = P.exec(t)) ? (L(n[1]) << 24 | L(n[2]) << 16 | L(n[3]) << 8 | B(n[4])) >>> 0 : (n = A.exec(t)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0 : (n = M.exec(t)) ? parseInt(n[1], 16) >>> 0 : (n = T.exec(t)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0 : (n = I.exec(t)) ? (255 | z(F(n[1]), V(n[2]), V(n[3]))) >>> 0 : (n = D.exec(t)) ? (z(F(n[1]), V(n[2]), V(n[3])) | B(n[4])) >>> 0 : null;
      return null === r ? e : "rgba(" + ((4278190080 & (r = r || 0)) >>> 24) + ", " + ((16711680 & r) >>> 16) + ", " + ((65280 & r) >>> 8) + ", " + (255 & r) / 255 + ")"
    }
    var U = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      W = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
      K = new RegExp("(" + Object.keys(_).join("|") + ")", "g");
    var q = function() {
        function e() {}
        var t = e.prototype;
        return t.attach = function() {}, t.detach = function() {}, t.getValue = function() {}, t.getAnimatedValue = function() {
          return this.getValue()
        }, t.addChild = function(e) {}, t.removeChild = function(e) {}, t.getChildren = function() {
          return []
        }, e
      }(),
      Y = function(e) {
        return Object.keys(e).map((function(t) {
          return e[t]
        }))
      },
      G = function(t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return (e = t.call.apply(t, [this].concat(r)) || this).children = [], e.getChildren = function() {
            return e.children
          }, e.getPayload = function(t) {
            return void 0 === t && (t = void 0), void 0 !== t && e.payload ? e.payload[t] : e.payload || Object(i.a)(Object(i.a)(e))
          }, e
        }
        Object(o.a)(n, t);
        var r = n.prototype;
        return r.addChild = function(e) {
          0 === this.children.length && this.attach(), this.children.push(e)
        }, r.removeChild = function(t) {
          var n = this.children.indexOf(t); - 1 !== n ? (this.children.splice(n, 1), 0 === this.children.length && this.detach()) : "production" !== e.env.NODEENV && console.warn("Trying to remove a child that doesn't exist")
        }, n
      }(q),
      X = function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return (t = e.call.apply(e, [this].concat(r)) || this).payload = [], t.getAnimatedValue = function() {
            return t.getValue()
          }, t.attach = function() {
            return t.payload.forEach((function(e) {
              return e instanceof q && e.addChild(Object(i.a)(Object(i.a)(t)))
            }))
          }, t.detach = function() {
            return t.payload.forEach((function(e) {
              return e instanceof q && e.removeChild(Object(i.a)(Object(i.a)(t)))
            }))
          }, t
        }
        return Object(o.a)(t, e), t
      }(G),
      $ = function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return (t = e.call.apply(e, [this].concat(r)) || this).payload = {}, t.getAnimatedValue = function() {
            return t.getValue(!0)
          }, t.attach = function() {
            return Y(t.payload).forEach((function(e) {
              return e instanceof q && e.addChild(Object(i.a)(Object(i.a)(t)))
            }))
          }, t.detach = function() {
            return Y(t.payload).forEach((function(e) {
              return e instanceof q && e.removeChild(Object(i.a)(Object(i.a)(t)))
            }))
          }, t
        }
        return Object(o.a)(t, e), t.prototype.getValue = function(e) {
          void 0 === e && (e = !1);
          var t = {};
          for (var n in this.payload) {
            var r = this.payload[n];
            (!e || r instanceof q) && (t[n] = r instanceof q ? r[e ? "getAnimatedValue" : "getValue"]() : r)
          }
          return t
        }, t
      }(G),
      Z = function(e) {
        function t(n, r, o) {
          var a;
          return (a = e.call(this) || this).getValue = function() {
            var e;
            return (e = a).calc.apply(e, a.payload.map((function(e) {
              return e.getValue()
            })))
          }, a.updateConfig = function(e, t) {
            return a.calc = E.create(e, t)
          }, a.interpolate = function(e, n) {
            return new t(Object(i.a)(Object(i.a)(a)), e, n)
          }, a.payload = n instanceof X && !n.updateConfig ? n.payload : Array.isArray(n) ? n : [n], a.calc = E.create(r, o), a
        }
        return Object(o.a)(t, e), t
      }(X);
    var J = function(e) {
        function t(t) {
          var n;
          return (n = e.call(this) || this).getValue = function() {
            return n.value
          }, n.updateStyles = function() {
            return function e(t, n) {
              "function" == typeof t.update ? n.add(t) : t.getChildren().forEach((function(t) {
                return e(t, n)
              }))
            }(Object(i.a)(Object(i.a)(n)), n.animatedStyles)
          }, n.updateValue = function(e) {
            return n.flush(n.value = e)
          }, n.interpolate = function(e, t) {
            return new Z(Object(i.a)(Object(i.a)(n)), e, t)
          }, n.value = t, n.animatedStyles = new Set, n.done = !1, n.startPosition = t, n.lastPosition = t, n.lastVelocity = void 0, n.lastTime = void 0, n.controller = void 0, n
        }
        Object(o.a)(t, e);
        var n = t.prototype;
        return n.flush = function() {
          0 === this.animatedStyles.size && this.updateStyles(), this.animatedStyles.forEach((function(e) {
            return e.update()
          }))
        }, n.prepare = function(e) {
          void 0 === this.controller && (this.controller = e), this.controller === e && (this.startPosition = this.value, this.lastPosition = this.value, this.lastVelocity = e.isActive ? this.lastVelocity : void 0, this.lastTime = e.isActive ? this.lastTime : void 0, this.done = !1, this.animatedStyles.clear())
        }, t
      }(G),
      Q = function(e) {
        function t(n) {
          var r;
          return (r = e.call(this) || this).setValue = function(e) {
            return e.length === r.payload.length && e.forEach((function(e, t) {
              return r.payload[t].setValue(e)
            }))
          }, r.getValue = function() {
            return r.payload.map((function(e) {
              return e.getValue()
            }))
          }, r.interpolate = function(e, t) {
            return new Z(Object(i.a)(Object(i.a)(r)), e, t)
          }, r.payload = n instanceof t ? n.payload : n.map((function(e) {
            return new J(e)
          })), r
        }
        return Object(o.a)(t, e), t
      }(X);

    function ee(e, t) {
      return null == e ? t : e
    }

    function te(e) {
      return void 0 !== e ? Array.isArray(e) ? e : [e] : []
    }

    function ne(e, t) {
      if (typeof e != typeof t) return !1;
      if ("string" == typeof e || "number" == typeof e) return e === t;
      var n;
      for (n in e)
        if (!(n in t)) return !1;
      for (n in t)
        if (e[n] !== t[n]) return !1;
      return void 0 !== n || e === t
    }

    function re(e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
      return "function" == typeof e ? e.apply(void 0, [t].concat(r)) : e
    }

    function oe(e) {
      return Object.keys(e).map((function(t) {
        return e[t]
      }))
    }

    function ie(e) {
      var t = function(e) {
          return e.to, e.from, e.config, e.native, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.impl, e.inject, e.delay, e.attach, e.destroyed, e.track, e.interpolateTo, e.autoStart, Object(a.a)(e, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "track", "interpolateTo", "autoStart"])
        }(e),
        n = Object.keys(e).reduce((function(n, o) {
          var i;
          return void 0 !== t[o] ? n : Object(r.a)({}, n, ((i = {})[o] = e[o], i))
        }), {});
      return Object(r.a)({
        to: t
      }, n)
    }

    function ae(e, t) {
      var n, o = t[0],
        i = t[1];
      return Object(r.a)({}, e, ((n = {})[o] = new(Array.isArray(i) ? Q : J)(i), n))
    }

    function ce(e) {
      var t = e.from,
        n = e.to,
        o = e.native,
        i = Object.entries(Object(r.a)({}, t, n));
      return o ? i.reduce(ae, {}) : Object(r.a)({}, t, n)
    }

    function le(e, t) {
      return t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e
    }
    var se = function(e) {
        return "auto" === e
      },
      ue = function(e, t) {
        return function(n, o) {
          var i, a = o[0],
            c = o[1];
          return Object(r.a)({}, n, ((i = {})[a] = "auto" === c ? ~a.indexOf("height") ? t : e : c, i))
        }
      };
    var pe = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      fe = ["Webkit", "Ms", "Moz", "O"];

    function de(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
    }
    pe = Object.keys(pe).reduce((function(e, t) {
      return fe.forEach((function(n) {
        return e[function(e, t) {
          return e + t.charAt(0).toUpperCase() + t.substring(1)
        }(n, t)] = e[t]
      })), e
    }), pe);
    var he = {};
    j("div"), w((function(e) {
      var t = e.output.map((function(e) {
          return e.replace(W, H)
        })).map((function(e) {
          return e.replace(K, H)
        })),
        n = t[0].match(U).map((function() {
          return []
        }));
      t.forEach((function(e) {
        e.match(U).forEach((function(e, t) {
          return n[t].push(+e)
        }))
      }));
      var o = t[0].match(U).map((function(t, o) {
        return E.create(Object(r.a)({}, e, {
          output: n[o]
        }))
      }));
      return /^rgb/.test(t[0]),
        function(e) {
          var n = 0;
          return t[0].replace(U, (function() {
            return o[n++](e)
          })).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (function(e, t, n, r, o) {
            return "rgba(" + Math.round(t) + ", " + Math.round(n) + ", " + Math.round(r) + ", " + o + ")"
          }))
        }
    })), y(_), O((function(e, t) {
      var n = e.from,
        o = e.to,
        i = e.children;
      if (oe(o).some(se) || oe(n).some(se)) {
        var a = i(ce(e));
        if (a) {
          var c = a.props.style;
          return l.a.createElement(a.type, Object(r.a)({
            key: a.key ? a.key : void 0
          }, a.props, {
            style: Object(r.a)({}, c, {
              position: "absolute",
              visibility: "hidden"
            }),
            ref: function(i) {
              if (i) {
                var a, c, l = u.a.findDOMNode(i),
                  s = getComputedStyle(l);
                if ("border-box" === s.boxSizing) a = l.offsetWidth, c = l.offsetHeight;
                else {
                  var p = parseFloat(s.paddingLeft || 0) + parseFloat(s.paddingRight || 0),
                    f = parseFloat(s.paddingTop || 0) + parseFloat(s.paddingBottom || 0),
                    d = parseFloat(s.borderLeftWidth || 0) + parseFloat(s.borderRightWidth || 0),
                    h = parseFloat(s.borderTopWidth || 0) + parseFloat(s.borderBottomWidth || 0);
                  a = l.offsetWidth - p - d, c = l.offsetHeight - f - h
                }
                var m = ue(a, c);
                t(Object(r.a)({}, e, {
                  from: Object.entries(n).reduce(m, n),
                  to: Object.entries(o).reduce(m, o)
                }))
              }
            }
          }))
        }
      }
    })), v((function(e, t) {
      if (!e.nodeType || void 0 === e.setAttribute) return !1;
      var n = t.style,
        r = t.children,
        o = t.scrollTop,
        i = t.scrollLeft,
        c = Object(a.a)(t, ["style", "children", "scrollTop", "scrollLeft"]);
      for (var l in void 0 !== o && (e.scrollTop = o), void 0 !== i && (e.scrollLeft = i), void 0 !== r && (e.textContent = r), n)
        if (n.hasOwnProperty(l)) {
          var s = 0 === l.indexOf("--"),
            u = de(l, n[l], s);
          "float" === l && (l = "cssFloat"), s ? e.style.setProperty(l, u) : e.style[l] = u
        } for (var p in c) {
        var f = he[p] || (he[p] = p.replace(/([A-Z])/g, (function(e) {
          return "-" + e.toLowerCase()
        })));
        void 0 !== e.getAttribute(f) && e.setAttribute(f, c[p])
      }
    }), (function(e) {
      return e
    }));
    var me, be, ge, ve, ye, Oe, we, je, _e, Ee, Se, ke, Ce, xe, Pe, Ie, De, Ae, Te, Ne, Me, Re, ze = function(e) {
        function t(t) {
          var n;
          return n = e.call(this) || this, !(t = t || {}).transform || t.transform instanceof q || (t = f.transform(t)), n.payload = t, n
        }
        return Object(o.a)(t, e), t
      }($),
      Le = function(e) {
        function t(t, n) {
          var o;
          return o = e.call(this) || this, t.style && (t = Object(r.a)({}, t, {
            style: new ze(t.style)
          })), o.payload = t, o.update = n, o.attach(), o
        }
        return Object(o.a)(t, e), t
      }($),
      Fe = function() {
        function e(e, t) {
          var n = this;
          void 0 === t && (t = {
            native: !0,
            track: !0,
            interpolateTo: !0,
            autoStart: !0
          }), this.getValues = function() {
            return n.props.native ? n.interpolations : n.animatedProps
          }, this.raf = function() {
            for (me = g(), be = !0, ge = !0, ve = 0; ve < n.configs.length; ve++)
              if ((Oe = n.configs[ve]).delay && me - n.startTime < Oe.delay) be = !1;
              else {
                for (ye = 0; ye < Oe.animatedValues.length; ye++)
                  if (we = Oe.animatedValues[ye], je = we.lastPosition, _e = Oe.fromValues[ye], Ee = Oe.parent.track && Oe.parent.track.getPayload(ye), Se = Ee ? Ee.getValue() : Oe.toValues[ye], !we.done)
                    if (Oe.immediate || "string" == typeof _e || "string" == typeof Se) we.updateValue(Se), we.done = !0;
                    else {
                      if (ge = !1, Oe.duration) je = _e + Oe.easing((me - n.startTime - Oe.delay) / Oe.duration) * (Se - _e), ke = me >= n.startTime + Oe.delay + Oe.duration;
                      else {
                        for (Ce = void 0 !== we.lastTime ? we.lastTime : me, xe = void 0 !== we.lastVelocity ? we.lastVelocity : Oe.initialVelocity, me > Ce + 64 && (Ce = me), Pe = Math.floor(me - Ce), Te = 0; Te < Pe; ++Te) Ie = -Oe.tension * (je - Se), De = -Oe.friction * xe, Ae = (Ie + De) / Oe.mass, je += 1 * (xe += 1 * Ae / 1e3) / 1e3;
                        Ne = !(!Oe.clamp || 0 === Oe.tension) && (_e < Se ? je > Se : je < Se), Me = Math.abs(xe) <= Oe.precision, Re = 0 === Oe.tension || Math.abs(Se - je) <= Oe.precision, ke = Ne || Me && Re, we.lastVelocity = xe, we.lastTime = me
                      }
                      Oe.parent.track && !Ee.done && (ke = !1), ke ? (we.value !== Se && (je = Se), we.done = !0) : be = !1, we.updateValue(je), we.lastPosition = je
                    }! n.props.onFrame && n.props.native || (n.animatedProps[Oe.name] = Oe.interpolation.getValue())
              } if (!n.props.onFrame && n.props.native || (!n.props.native && n.onUpdate && n.onUpdate(), n.props.onFrame && n.props.onFrame(n.animatedProps)), be) return n.debouncedOnEnd({
              finished: !0,
              noChange: ge
            });
            n.frame = h(n.raf)
          }, this.dependents = new Set, this.isActive = !1, this.hasChanged = !1, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.animatedProps = {}, this.configs = [], this.frame = void 0, this.startTime = void 0, this.lastTime = void 0, this.update(Object(r.a)({}, e, t))
        }
        var t = e.prototype;
        return t.update = function(e) {
          var t = this;
          this.props = Object(r.a)({}, this.props, e);
          var n = this.props.interpolateTo ? ie(this.props) : this.props,
            o = n.from,
            i = void 0 === o ? {} : o,
            a = n.to,
            c = void 0 === a ? {} : a,
            l = n.config,
            s = void 0 === l ? {} : l,
            u = n.delay,
            p = void 0 === u ? 0 : u,
            f = n.reverse,
            h = n.attach,
            m = n.reset,
            b = n.immediate,
            g = (n.native, n.onFrame, n.track, n.autoStart);
          if (f) {
            var v = [c, i];
            i = v[0], c = v[1]
          }
          this.hasChanged = !1;
          var y = h && h(this),
            O = m ? {} : this.merged;
          if (this.merged = Object(r.a)({}, i, O, c), this.animations = Object.entries(this.merged).reduce((function(e, n, o) {
              var a, c, l, u, f, h = n[0],
                g = n[1],
                v = !m && e[h] || {},
                O = g;
              y && y.animations[h] && (g = (a = y.animations[h]).parent);
              var w = g instanceof q;
              w || (c = Array.isArray(g), u = "number" == typeof g, l = "string" == typeof g && !g.startsWith("#") && !/\d/.test(g) && !d[g], f = !u && !l && !c);
              var j = w ? g.getPayload() : g;
              if (w || !ne(v.changes, j)) {
                var _, E, S;
                t.hasChanged = !0;
                var k = void 0 !== i[h] ? i[h] : g,
                  C = re(s, h);
                if (w) {
                  if (E = v.parent || new g.constructor(g.getValue()), S = v.interpolation || E, a && a.interpolation.calc) {
                    var x = {
                      output: [S.calc ? S.calc(E.value) : a.interpolation.calc(0), O]
                    };
                    S.calc ? S.updateConfig(x) : S = E.interpolate(x), E.value = 0
                  }
                } else if (u || l) E = S = v.parent || new J(k);
                else if (c) E = S = v.parent || new Q(k);
                else if (f) {
                  var P = v.interpolation && v.interpolation.calc(v.parent.value);
                  v.parent ? (E = v.parent).value = 0 : E = new J(0);
                  var I = {
                    output: [void 0 !== P ? P : k, g]
                  };
                  v.interpolation ? (S = v.interpolation, v.interpolation.updateConfig(I)) : S = E.interpolate(I), g = 1
                }
                E.controller = t, w && g.controller !== t && g.controller.dependents.add(t), E.track = w ? g : void 0, re(b, h) && (E.value = g);
                var D = te(E.getPayload()),
                  A = te(E.getValue()),
                  T = te(w ? g.getValue() : g);
                return D.forEach((function(e) {
                  return e.prepare(t)
                })), Object(r.a)({}, e, ((_ = {})[h] = Object(r.a)({}, v, {
                  name: h,
                  parent: E,
                  interpolation: S,
                  animatedValues: D,
                  fromValues: A,
                  toValues: T,
                  changes: j,
                  immediate: re(b, h),
                  delay: ee(C.delay, p || 0),
                  initialVelocity: ee(C.velocity, 0),
                  clamp: ee(C.clamp, !1),
                  precision: ee(C.precision, .01),
                  tension: ee(C.tension, 170),
                  friction: ee(C.friction, 26),
                  mass: ee(C.mass, 1),
                  duration: ee(C.duration, 0),
                  easing: ee(C.easing, (function(e) {
                    return e
                  }))
                }), _))
              }
              return e
            }), this.animations), this.hasChanged)
            for (var w in this.configs = oe(this.animations), this.animatedProps = {}, this.interpolations = {}, this.animations) this.interpolations[w] = this.animations[w].interpolation, this.animatedProps[w] = this.animations[w].interpolation.getValue();
          for (var j = arguments.length, _ = new Array(j > 1 ? j - 1 : 0), E = 1; E < j; E++) _[E - 1] = arguments[E];
          return (g || _.length) && this.start.apply(this, _), this.getValues()
        }, t.start = function(e, t) {
          if (this.startTime = g(), this.isActive && this.stop(), this.isActive = !0, this.onEnd = "function" == typeof e && e, this.onUpdate = t, this.props.onStart && this.props.onStart(), this.frame = h(this.raf), this.props.track) {
            var n = this.dependents,
              o = Array.isArray(n),
              i = 0;
            for (n = o ? n : n[Symbol.iterator]();;) {
              var a;
              if (o) {
                if (i >= n.length) break;
                a = n[i++]
              } else {
                if ((i = n.next()).done) break;
                a = i.value
              }
              var c = a;
              c.update(Object(r.a)({}, c.props, c.merged), !0)
            }
          }
        }, t.stop = function(e) {
          void 0 === e && (e = !1), Oe = void 0, we = void 0, _e = void 0, Ee = void 0, Se = void 0, e && oe(this.animations).forEach((function(e) {
            return e.changes = void 0
          })), this.isActive = !1, m(this.frame), this.debouncedOnEnd({
            finished: e
          })
        }, t.debouncedOnEnd = function(e) {
          this.isActive = !1;
          var t = this.onEnd;
          this.onEnd = null, t && t(e)
        }, e
      }();

    function Be(e) {
      var t = function(t) {
        function n(e) {
          var n;
          return (n = t.call(this) || this).callback = function() {
            n.node && (!1 === f.fn(n.node, n.propsAnimated.getAnimatedValue(), Object(i.a)(Object(i.a)(n))) && n.forceUpdate())
          }, n.attachProps(e), n
        }
        Object(o.a)(n, t);
        var c = n.prototype;
        return c.componentWillUnmount = function() {
          this.propsAnimated && this.propsAnimated.detach()
        }, c.setNativeProps = function(e) {
          !1 === f.fn(this.node, e, this) && this.forceUpdate()
        }, c.attachProps = function(e) {
          e.forwardRef;
          var t = Object(a.a)(e, ["forwardRef"]),
            n = this.propsAnimated;
          this.propsAnimated = new Le(t, this.callback), n && n.detach()
        }, c.shouldComponentUpdate = function(e) {
          var t = e.style,
            n = Object(a.a)(e, ["style"]),
            r = this.props,
            o = r.style;
          return (!ne(Object(a.a)(r, ["style"]), n) || !ne(o, t)) && (this.attachProps(e), !0)
        }, c.render = function() {
          var t = this,
            n = (this.props.forwardRef, this.propsAnimated.getValue()),
            o = (n.scrollTop, n.scrollLeft, Object(a.a)(n, ["scrollTop", "scrollLeft"]));
          return l.a.createElement(e, Object(r.a)({}, o, {
            ref: function(e) {
              return t.node = le(e, t.props.forwardRef)
            }
          }))
        }, n
      }(l.a.Component);
      return l.a.forwardRef((function(e, n) {
        return l.a.createElement(t, Object(r.a)({}, e, {
          forwardRef: n
        }))
      }))
    }
    l.a.version.split(".");
    var Ve = function(e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(o)) || this).state = {
          lastProps: {
            from: {},
            to: {}
          },
          propsChanged: !1,
          internal: !1
        }, t.controller = new Fe(null, null), t.didUpdate = !1, t.didInject = !1, t.finished = !0, t.start = function() {
          t.finished = !1;
          var e = t.mounted;
          t.controller.start((function(n) {
            return t.finish(Object(r.a)({}, n, {
              wasMounted: e
            }))
          }), t.update)
        }, t.stop = function() {
          return t.controller.stop(!0)
        }, t.update = function() {
          return t.setState({
            internal: !0
          })
        }, t.finish = function(e) {
          var n = e.finished,
            r = e.noChange,
            o = e.wasMounted;
          t.finished = !0, t.mounted && n && (!t.props.onRest || !o && r || t.props.onRest(t.controller.merged), t.didInject && (t.afterInject = ce(t.props), t.setState({
            internal: !0
          })), t.mounted && (t.didInject || t.props.after) && t.setState({
            internal: !0
          }), t.didInject = !1)
        }, t
      }
      Object(o.a)(t, e);
      var n = t.prototype;
      return n.componentDidMount = function() {
        this.componentDidUpdate(), this.mounted = !0
      }, n.componentWillUnmount = function() {
        this.mounted = !1, this.stop()
      }, t.getDerivedStateFromProps = function(e, t) {
        var n = t.internal,
          r = t.lastProps,
          o = e.from,
          i = e.to,
          a = e.reset,
          c = e.force;
        return {
          propsChanged: !ne(i, r.to) || !ne(o, r.from) || a && !n || c && !n,
          lastProps: e,
          internal: !1
        }
      }, n.render = function() {
        var e = this,
          t = this.props,
          n = (t.native, t.onFrame, t.children),
          o = this.state.propsChanged;
        if (this.props.inject && o && !this.injectProps) {
          var i = this.props.inject(this.props, (function(t) {
            e.injectProps = t, e.setState({
              internal: !0
            })
          }));
          if (i) return i
        }(this.injectProps || o) && (this.didInject = !1, this.injectProps ? (this.controller.update(this.injectProps), this.didInject = !0) : o && this.controller.update(this.props), this.didUpdate = !0, this.afterInject = void 0, this.injectProps = void 0);
        var a = Object(r.a)({}, this.controller.getValues(), this.afterInject);
        return this.finished && (a = Object(r.a)({}, a, this.props.after)), a && Object.keys(a).length ? n(a) : null
      }, n.componentDidUpdate = function() {
        this.didUpdate && this.start(), this.didUpdate = !1
      }, t
    }(l.a.Component);
    Ve.defaultProps = {
      from: {},
      to: {},
      config: {
        tension: 170,
        friction: 26
      },
      native: !1,
      immediate: !1,
      reset: !1,
      force: !1,
      inject: p
    };
    var He = function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (t = e.call.apply(e, [this].concat(r)) || this).first = !0, t.instances = new Set, t.hook = function(e, n, r, o) {
          return t.instances.add(e), (o ? n === r - 1 : 0 === n) ? void 0 : Array.from(t.instances)[o ? n + 1 : n - 1]
        }, t
      }
      Object(o.a)(t, e);
      var n = t.prototype;
      return n.render = function() {
        var e = this,
          t = this.props,
          n = t.items,
          o = t.children,
          i = t.from,
          c = void 0 === i ? {} : i,
          s = t.initial,
          u = t.reverse,
          p = t.keys,
          f = t.delay,
          d = t.onRest,
          h = Object(a.a)(t, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]),
          m = te(n);
        return te(m).map((function(t, n) {
          return l.a.createElement(Ve, Object(r.a)({
            onRest: 0 === n ? d : null,
            key: "function" == typeof p ? p(t) : te(p)[n],
            from: e.first && void 0 !== s ? s || {} : c
          }, h, {
            delay: 0 === n && f || void 0,
            attach: function(t) {
              return e.hook(t, n, m.length, u)
            },
            children: function(e) {
              var r = o(t, n);
              return r ? r(e) : null
            }
          }))
        }))
      }, n.componentDidUpdate = function(e) {
        this.first = !1, e.items !== this.props.items && this.instances.clear()
      }, t
    }(l.a.PureComponent);
    He.defaultProps = {
      keys: function(e) {
        return e
      }
    };
    var Ue = function(e) {
      function t() {
        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(o)) || this).guid = 0, t.state = {
          props: {},
          oldProps: {},
          resolve: function() {
            return null
          },
          last: !0,
          index: 0
        }, t.next = function(e, n, o) {
          return void 0 === n && (n = !0), void 0 === o && (o = 0), t.running = !0, new Promise((function(i) {
            t.mounted && t.setState((function(a) {
              return {
                props: e,
                oldProps: Object(r.a)({}, t.state.props),
                resolve: i,
                last: n,
                index: o
              }
            }), (function() {
              return t.running = !1
            }))
          }))
        }, t
      }
      Object(o.a)(t, e);
      var n = t.prototype;
      return n.componentDidMount = function() {
        this.mounted = !0, this.componentDidUpdate({})
      }, n.componentWillUnmount = function() {
        this.mounted = !1
      }, n.componentDidUpdate = function(e) {
        var t = this,
          n = this.props,
          r = n.states,
          o = n.filter,
          i = n.state;
        (e.state !== this.props.state || this.props.reset && !this.running || !ne(r[i], e.states[e.state])) && r && i && r[i] && function() {
          var e = ++t.guid,
            n = r[i];
          if (n)
            if (Array.isArray(n))
              for (var a = Promise.resolve(), c = function(r) {
                  var i = r,
                    c = n[i],
                    l = i === n.length - 1;
                  a = a.then((function() {
                    return e === t.guid && t.next(o(c), l, i)
                  }))
                }, l = 0; l < n.length; l++) c(l);
            else if ("function" == typeof n) {
            var s = 0;
            n((function(n, r) {
              return void 0 === r && (r = !1), e === t.guid && t.next(o(n), r, s++)
            }), (function() {
              return h((function() {
                return t.instance && t.instance.stop()
              }))
            }), t.props)
          } else t.next(o(r[i]))
        }()
      }, n.render = function() {
        var e = this,
          t = this.state,
          n = t.props,
          o = (t.oldProps, t.resolve),
          i = t.last,
          c = t.index;
        if (!n || 0 === Object.keys(n).length) return null;
        var s = this.props,
          u = (s.state, s.filter, s.states, s.config),
          p = s.primitive,
          f = s.onRest,
          d = s.forwardRef,
          h = Object(a.a)(s, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]);
        return Array.isArray(u) && (u = u[c]), l.a.createElement(p, Object(r.a)({
          ref: function(t) {
            return e.instance = le(t, d)
          },
          config: u
        }, h, n, {
          onRest: function(e) {
            o(e), f && i && f(e)
          }
        }))
      }, t
    }(l.a.PureComponent);
    Ue.defaultProps = {
      state: "__default"
    };
    var We = l.a.forwardRef((function(e, t) {
      return l.a.createElement(Ue, Object(r.a)({}, e, {
        forwardRef: t
      }))
    }));
    We.create = function(e) {
      return function(t, n) {
        var o;
        return void 0 === n && (n = function(e) {
            return e
          }), ("function" == typeof t || Array.isArray(t)) && ((o = {}).__default = t, t = o),
          function(o) {
            return l.a.createElement(Ue, Object(r.a)({
              primitive: e,
              states: t,
              filter: n
            }, o))
          }
      }
    }, We.Spring = function(e) {
      return We.create(Ve)(e, ie)
    }, We.Trail = function(e) {
      return We.create(He)(e, ie)
    };
    var Ke = 0,
      qe = function(e) {
        var t = e.items,
          n = e.keys,
          o = Object(a.a)(e, ["items", "keys"]);
        return t = te(void 0 !== t ? t : null), n = "function" == typeof n ? t.map(n) : te(n), Object(r.a)({
          items: t,
          keys: n.map((function(e) {
            return String(e)
          }))
        }, o)
      },
      Ye = function(e) {
        Object(o.a)(n, e);
        var t = n.prototype;

        function n(t) {
          var n;
          return (n = e.call(this, t) || this).destroyItem = function(e, t, r) {
            return function(o) {
              var i = n.props,
                a = i.onRest,
                c = i.onDestroyed;
              n.mounted && (c && c(e), n.setState((function(e) {
                return {
                  deleted: e.deleted.filter((function(e) {
                    return e.key !== t
                  }))
                }
              })), a && a(e, r, o))
            }
          }, n.state = {
            first: !0,
            transitions: [],
            current: {},
            deleted: [],
            prevProps: t
          }, n
        }
        return t.componentDidMount = function() {
          this.mounted = !0
        }, t.componentWillUnmount = function() {
          this.mounted = !1
        }, n.getDerivedStateFromProps = function(e, t) {
          var n = t.first,
            o = t.prevProps,
            i = Object(a.a)(t, ["first", "prevProps"]),
            c = qe(e),
            l = c.items,
            s = c.keys,
            u = c.initial,
            p = c.from,
            f = c.enter,
            d = c.leave,
            h = c.update,
            m = c.trail,
            b = void 0 === m ? 0 : m,
            g = c.unique,
            v = c.config,
            y = qe(o),
            O = y.keys,
            w = y.items,
            j = Object(r.a)({}, i.current),
            _ = i.deleted.concat(),
            E = Object.keys(j),
            S = new Set(E),
            k = new Set(s),
            C = s.filter((function(e) {
              return !S.has(e)
            })),
            x = i.transitions.filter((function(e) {
              return !e.destroyed && !k.has(e.originalKey)
            })).map((function(e) {
              return e.originalKey
            })),
            P = s.filter((function(e) {
              return S.has(e)
            })),
            I = 0;
          C.forEach((function(e) {
            g && _.find((function(t) {
              return t.originalKey === e
            })) && (_ = _.filter((function(t) {
              return t.originalKey !== e
            })));
            var t = s.indexOf(e),
              r = l[t];
            j[e] = {
              state: "enter",
              originalKey: e,
              key: g ? String(e) : Ke++,
              item: r,
              trail: I += b,
              config: re(v, r, "enter"),
              from: re(n && void 0 !== u ? u || {} : p, r),
              to: re(f, r)
            }
          })), x.forEach((function(e) {
            var t = O.indexOf(e),
              n = w[t];
            _.push(Object(r.a)({}, j[e], {
              state: "leave",
              destroyed: !0,
              left: O[Math.max(0, t - 1)],
              right: O[Math.min(O.length, t + 1)],
              trail: I += b,
              config: re(v, n, "leave"),
              to: re(d, n)
            })), delete j[e]
          })), P.forEach((function(e) {
            var t = s.indexOf(e),
              n = l[t];
            j[e] = Object(r.a)({}, j[e], {
              item: n,
              state: "update",
              trail: I += b,
              config: re(v, n, "update"),
              to: re(h, n)
            })
          }));
          var D = s.map((function(e) {
            return j[e]
          }));
          return _.forEach((function(e) {
            var t, n = e.left,
              r = e.right,
              o = Object(a.a)(e, ["left", "right"]); - 1 !== (t = D.findIndex((function(e) {
              return e.originalKey === n
            }))) && (t += 1), -1 === t && (t = D.findIndex((function(e) {
              return e.originalKey === r
            }))), -1 === t && (t = _.findIndex((function(e) {
              return e.originalKey === n
            }))), -1 === t && (t = _.findIndex((function(e) {
              return e.originalKey === r
            }))), t = Math.max(0, t), D = D.slice(0, t).concat([o], D.slice(t))
          })), {
            first: n && 0 === C.length,
            transitions: D,
            current: j,
            deleted: _,
            prevProps: e
          }
        }, t.render = function() {
          var e = this,
            t = this.props,
            n = (t.initial, t.from, t.enter, t.leave, t.update, t.onDestroyed, t.keys, t.items, t.onFrame),
            o = t.onRest,
            i = t.onStart,
            c = (t.trail, t.config, t.children),
            s = (t.unique, t.reset),
            u = Object(a.a)(t, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);
          return this.state.transitions.map((function(t, a) {
            var p, f = t.state,
              d = t.key,
              h = t.item,
              m = t.from,
              b = t.to,
              g = t.trail,
              v = t.config,
              y = t.destroyed;
            return l.a.createElement(We, Object(r.a)({
              reset: s && "enter" === f,
              primitive: Ve,
              state: f,
              filter: ie,
              states: (p = {}, p[f] = b, p),
              key: d,
              onRest: y ? e.destroyItem(h, d, f) : o && function(e) {
                return o(h, f, e)
              },
              onStart: i && function() {
                return i(h, f)
              },
              onFrame: n && function(e) {
                return n(h, f, e)
              },
              delay: g,
              config: v
            }, u, {
              from: m,
              children: function(e) {
                var t = c(h, f, a);
                return t ? t(e) : null
              }
            }))
          }))
        }, n
      }(l.a.PureComponent);
    Ye.defaultProps = {
      keys: function(e) {
        return e
      },
      unique: !1,
      reset: !1
    };
    var Ge = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].reduce((function(e, t) {
      return e[t] = Be(t), e
    }), Be)
  }).call(this, n(69))
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "PanelMetaWrapper", (function() {
    return d
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(21),
    c = n.n(a),
    l = n(22),
    s = n(46),
    u = n(15),
    p = n(18);

  function f(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var d = function(e) {
      var t = e.id,
        n = e.option,
        o = e.getActualOption,
        i = e.value,
        a = Object(r.useContext)(p.a),
        c = a.panelsState,
        l = a.panelsHelpers,
        s = a.panelsDispatch,
        u = a.containerRef,
        d = t;
      return Object(r.useEffect)((function() {
        if (!c.previousPanel && l.isTransitioningFor(t))
          if (l.isOpenFor(t)) {
            if (!u.current.closest('[id="customize-theme-controls"]').querySelector(".ct-tmp-panel-wrapper")) {
              var e = document.createElement("div");
              e.classList.add("ct-tmp-panel-wrapper"), u.current.closest('[id="customize-theme-controls"]').appendChild(e)
            }
            u.current.closest(".accordion-section-content").classList.add("ct-panel-open");
            var n = u.current.closest("ul").querySelector(".customize-section-description-container h3");
            s({
              type: "PANEL_RECEIVE_TITLE",
              payload: {
                titlePrefix: "".concat(n.querySelector("span").innerText, " ▸ ").concat(n.innerText.split("\n")[n.innerText.split("\n").length - 1])
              }
            })
          } else !u.current.closest(".accordion-section-content") || u.current.closest(".accordion-section-content").classList.contains("ct-panel-open"), u.current.closest(".accordion-section-content").classList.remove("ct-panel-open"), setTimeout((function() {
            return (u.current.querySelector("button") ? u.current.querySelector("button") : u.current).focus()
          }))
      }), [c, t, l]), Object(r.useEffect)((function() {
        return function() {
          f(document.querySelectorAll(".control-section.ct-panel-open:not(.open)")).map((function(e) {
            return e.classList.remove("ct-panel-open")
          }))
        }
      }), []), o({
        open: function() {
          return l.open(t)
        },
        wrapperAttr: {
          className: "".concat(n.switch ? "yes" === i ? "ct-click-allowed" : "" : "ct-click-allowed", " ct-panel"),
          onClick: function() {
            n.switch && "yes" !== i || l.open(d)
          }
        }
      })
    },
    h = function(e, t) {
      for (var n in t)
        if (t[n] !== e[n]) return !1;
      return !0
    };
  var m = function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h,
        o = {};
      return function(i) {
        return void 0 !== t && n(o, i) ? t : (o = i, t = Object(r.createElement)(e, Object.assign({}, i)))
      }
    }((function(e) {
      var t = e.option,
        n = e.id,
        o = (e.onChange, e.getValues),
        i = e.onChangeFor,
        a = -1 === Object.keys(t).indexOf("label") ? (n || "").replace(/./, (function(e) {
          return e.toUpperCase()
        })).replace(/\_|\-/g, " ") : t.label,
        s = Object(r.useContext)(p.a),
        d = s.panelsState,
        h = d.titlePrefix,
        m = d.previousPanel,
        b = s.panelsHelpers,
        g = s.containerRef;
      return g.current && g.current.closest('[id="customize-theme-controls"]').querySelector(".ct-tmp-panel-wrapper") ? Object(r.createPortal)(Object(r.createElement)(u.a, {
        items: b.isOpenFor(n),
        from: {
          transform: "translate3d(100%,0,0)"
        },
        enter: {
          transform: "translate3d(0,0,0)"
        },
        leave: m === n ? {
          transform: "translate3d(-100%,0,0)"
        } : {
          transform: "translate3d(100%,0,0)"
        },
        config: function(e, t) {
          return {
            duration: 180,
            easing: c()(.645, .045, .355, 1)
          }
        },
        onRest: function(e) {
          b.stopTransitioning(), e || m || f(g.current.closest('[id="customize-theme-controls"]').querySelectorAll(".ct-tmp-panel-wrapper")).map((function(e) {
            return e.parentNode.removeChild(e)
          }))
        }
      }, (function(e) {
        return e && function(e) {
          return Object(r.createElement)("div", {
            style: e,
            className: "ct-customizer-panel"
          }, Object(r.createElement)("div", {
            className: "customize-panel-actions"
          }, Object(r.createElement)("button", {
            onClick: function(e) {
              e.stopPropagation(), b.close()
            },
            type: "button",
            className: "customize-section-back"
          }), Object(r.createElement)("h3", null, Object(r.createElement)("span", null, h), a)), Object(r.createElement)("div", {
            className: "customizer-panel-content"
          }, Object(r.createElement)(l.a, {
            purpose: "customizer",
            onChange: function(e, t) {
              return i(e, t)
            },
            options: t["inner-options"],
            value: o()
          })))
        }
      })), g.current.closest('[id="customize-theme-controls"]').querySelector(".ct-tmp-panel-wrapper")) : null
    })),
    b = function(e) {
      var t = e.id,
        n = e.getValues,
        o = e.values,
        a = e.onChangeFor,
        c = e.option,
        l = e.value,
        u = e.view,
        f = void 0 === u ? "normal" : u,
        d = e.onChange,
        h = Object(r.useContext)(p.a),
        b = h.panelsState,
        g = (b.isOpen, b.isTransitioning, h.panelsHelpers);
      return "simple" === f ? g.isTransitioningFor(t) || g.isOpenFor(t) ? Object(r.createElement)(m, {
        id: t,
        getValues: function() {
          return n ? n() : o
        },
        onChangeFor: a,
        option: c
      }) : null : Object(r.createElement)("div", {
        className: "ct-customizer-panel-container"
      }, Object(r.createElement)("div", {
        className: i()("ct-customizer-panel-option")
      }, c.switch && Object(r.createElement)(s.default, {
        value: l,
        onChange: d,
        onClick: function(e) {
          return e.stopPropagation()
        }
      }), Object(r.createElement)("button", {
        type: "button"
      })), (g.isTransitioningFor(t) || g.isOpenFor(t)) && Object(r.createElement)(m, {
        id: t,
        getValues: function() {
          return n ? n() : o
        },
        onChangeFor: a,
        option: c
      }))
    };
  b.renderingConfig = {
    design: "inline"
  }, b.MetaWrapper = d, t.default = b
}, function(e, t) {
  e.exports = window.jQuery
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    o = n(33),
    i = n.n(o);

  function a(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  wp.customize.bind("ready", (function() {
    wp.customize.previewer.bind("ct-initiate-deep-link", (function(e) {
      var t = a(e.split(":"), 2),
        n = t[0],
        r = (t[1], Object.values(wp.customize.section._value).find((function(e) {
          return e.expanded()
        })));
      if (!r || r.id !== n) return e, void wp.customize.section(n).expand();
      i.a.trigger("ct-deep-link-start", e)
    }))
  })), n.d(t, "a", (function() {
    return c
  }));
  var c = Object(r.createContext)({
    titlePrefix: "",
    isOpen: !1,
    isTransitioning: !1,
    previousPanel: !1
  })
}, function(e, t, n) {
  "use strict";
  n.d(t, "b", (function() {
    return s
  })), n.d(t, "a", (function() {
    return u
  }));
  var r = function(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    },
    o = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
    i = function(e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function(e, t) {
        var n = [],
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          o = !0, i = e
        } finally {
          try {
            !r && c.return && c.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    a = function(e) {
      return Array.isArray(e) ? e : Array.from(e)
    },
    c = function e(t, n, r) {
      var o = (t = "string" == typeof t ? t.split("/") : [t]).shift();
      return void 0 === n[o] ? r : t.length ? e(t = t.join("/"), n[o], r) : n[o]
    },
    l = function(e) {
      return "string" == typeof e && (e = e.split("/")), e.length > 1 && e.pop(), e
    },
    s = function(e) {
      return e.all || e.any || (e = {
        all: e
      }), e
    },
    u = function e(t, n) {
      var s = Object.values(t)[0],
        u = function(e) {
          return 0 === e.indexOf("any") ? "any" : 0 === e.indexOf("all") && "all"
        },
        p = Object.keys(s).map((function(t, p) {
          var f = Object.values(s)[p];
          return "all" === u(t) || "any" === u(t) ? e(r({}, t, f), n) : function(e, t, n) {
            var s = function(e, t) {
              var n = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                return c(e, n)
              };
              if (e.indexOf(":") > -1) {
                var s = null;
                if (function(e) {
                    var u = a(e),
                      p = u[0],
                      f = u.slice(1);
                    if ("responsive" === (f = f.join(":")) && (s = n(p, o({}, t, r({}, l(p), c(l(p), t)[t.wp_customizer_current_view] || c(l(p), t))))), "truthy" === f && (s = n(p) ? "yes" : "no"), f.indexOf("array-ids:") > -1) {
                      var d = f.split(":"),
                        h = i(d, 3),
                        m = (h[0], h[1]),
                        b = h[2],
                        g = n(p).find((function(e) {
                          return e.id === m
                        }));
                      s = g && c(b, g) || "no"
                    }
                    if (f.indexOf("json:") > -1 && (s = n(p + "/" + f.split(":")[1]).toString()), "array_length" === f) {
                      var v = n(p);
                      s = (v || []).length.toString()
                    }
                    if (!s) throw new Error("Unknown matcher received. Please verify for typos. The received matcher: " + f + ".")
                  }(e.split(":")), s) return s;
                e = e.split(":")[0]
              }
              var u = n(e);
              return !!u && u.toString()
            }(t, n);
            if (s = s.toString(), e = e.toString(), !s) return !1;
            if (e.indexOf("|") > -1) return 0 === e.indexOf("!") ? -1 === e.substring(1).split("|").map((function(e) {
              return e.trim()
            })).includes(s.trim()) : e.split("|").map((function(e) {
              return e.trim()
            })).indexOf(s.trim()) > -1;
            if (0 === e.indexOf("!")) return s !== e.substring(1).trim();
            if (0 === e.indexOf("*")) return s.indexOf(e.trim().substring(1).trim()) > -1;
            return s === e.trim()
          }(f, t, n)
        }));
      return "all" === u(Object.keys(t)[0]) ? p.every((function(e) {
        return !!e
      })) : "any" === u(Object.keys(t)[0]) ? p.some((function(e) {
        return !!e
      })) : void 0
    }
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "fontFamilyToCSSFamily", (function() {
    return r
  })), n.d(t, "findSourceTypeFor", (function() {
    return i
  })), n.d(t, "findSelectedFontFamily", (function() {
    return a
  })), n.d(t, "decideVariationToSelect", (function() {
    return c
  })), n.d(t, "humanizeVariationsShort", (function() {
    return l
  })), n.d(t, "humanizeVariations", (function() {
    return s
  }));
  var r = function(e) {
      return "System Default" === e ? "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" : e
    },
    o = function(e, t) {
      return Object.values(t).find((function(t) {
        return t.families.map((function(e) {
          return e.family
        })).indexOf(e) > -1
      }))
    },
    i = function(e, t) {
      var n = o(e, t);
      return !!n && n.type
    },
    a = function(e, t) {
      return o(e, t).families.find((function(t) {
        return t.family === e
      }))
    },
    c = function(e, t) {
      return e.all_variations.indexOf(t.variation) > -1 ? t.variation : e.all_variations.indexOf("n4") > -1 ? "n4" : e.all_variations[0]
    },
    l = function(e) {
      return {
        n1: "100",
        i1: "100",
        n2: "200",
        i2: "200",
        n3: "300",
        i3: "300",
        n4: "400",
        i4: "400",
        n5: "500",
        i5: "500",
        n6: "600",
        i6: "600",
        n7: "700",
        i7: "700",
        n8: "800",
        i8: "800",
        n9: "900",
        i9: "900",
        Default: "Default"
      } [e]
    },
    s = function(e) {
      return {
        n1: "Thin 100",
        i1: "Thin 100 Italic",
        n2: "Extra-Light 200",
        i2: "Extra-Light 200 Italic",
        n3: "Light 300",
        i3: "Light 300 Italic",
        n4: "Regular",
        i4: "Regular 400 Italic",
        n5: "Medium 500",
        i5: "Medium 500 Italic",
        n6: "Semi-Bold 600",
        i6: "Semi-Bold 600 Italic",
        n7: "Bold 700",
        i7: "Bold 700 Italic",
        n8: "Extra-Bold 800",
        i8: "Extra-Bold 800 Italic",
        n9: "Ultra-Bold 900",
        i9: "Ultra-Bold 900 Italic",
        Default: "Default Weight"
      } [e]
    }
}, function(e, t) {
  var n = 4,
    r = .001,
    o = 1e-7,
    i = 10,
    a = 11,
    c = 1 / (a - 1),
    l = "function" == typeof Float32Array;

  function s(e, t) {
    return 1 - 3 * t + 3 * e
  }

  function u(e, t) {
    return 3 * t - 6 * e
  }

  function p(e) {
    return 3 * e
  }

  function f(e, t, n) {
    return ((s(t, n) * e + u(t, n)) * e + p(t)) * e
  }

  function d(e, t, n) {
    return 3 * s(t, n) * e * e + 2 * u(t, n) * e + p(t)
  }

  function h(e) {
    return e
  }
  e.exports = function(e, t, s, u) {
    if (!(0 <= e && e <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    if (e === t && s === u) return h;
    for (var p = l ? new Float32Array(a) : new Array(a), m = 0; m < a; ++m) p[m] = f(m * c, e, s);

    function b(t) {
      for (var l = 0, u = 1, h = a - 1; u !== h && p[u] <= t; ++u) l += c;
      --u;
      var m = l + (t - p[u]) / (p[u + 1] - p[u]) * c,
        b = d(m, e, s);
      return b >= r ? function(e, t, r, o) {
        for (var i = 0; i < n; ++i) {
          var a = d(t, r, o);
          if (0 === a) return t;
          t -= (f(t, r, o) - e) / a
        }
        return t
      }(t, m, e, s) : 0 === b ? m : function(e, t, n, r, a) {
        var c, l, s = 0;
        do {
          (c = f(l = t + (n - t) / 2, r, a) - e) > 0 ? n = l : t = l
        } while (Math.abs(c) > o && ++s < i);
        return l
      }(t, l, l + c, e, s)
    }
    return function(e) {
      return 0 === e ? 0 : 1 === e ? 1 : f(b(e), t, u)
    }
  }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    o = n(9),
    i = n(19),
    a = n(34);

  function c(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var l = function(e, t) {
      return !e
    },
    s = function() {
      var e = c(Object(r.useReducer)(l, !0), 2)[1];
      return Object(r.useMemo)((function() {
        return function() {
          e(null)
        }
      }), [e])
    };

  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(n, !0).forEach((function(t) {
        f(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var d = function(e) {
      var t = e.renderingChunk,
        n = e.value,
        o = e.onChange,
        c = e.purpose,
        l = e.hasRevertButton,
        u = s(),
        d = Object(a.b)().currentView;
      return Object(r.useEffect)((function() {
        t.map((function(e) {
          return e.global && Object.keys(e.condition).map((function(e) {
            return wp.customize(e, (function(e) {
              return e.bind((function(e) {
                return setTimeout((function() {
                  return u()
                }))
              }))
            }))
          }))
        }))
      }), []), t.map((function(e) {
        return Object(i.a)(Object(i.b)(e.condition), e.global ? Object.keys(e.condition).reduce((function(e, t) {
          return p({}, e, f({}, t, wp.customize(t)()))
        }), {}) : p({}, n, {
          wp_customizer_current_view: d
        })) ? Object(r.createElement)(P, {
          purpose: c,
          key: e.id,
          onChange: o,
          options: e.options,
          value: n,
          hasRevertButton: l
        }) : []
      }))
    },
    h = n(2),
    m = n.n(h);

  function b(e) {
    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function g(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function v(e) {
    return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function y(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function O(e, t) {
    return (O = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var w = function(e) {
    function t() {
      var e, n;
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      return n = function(e, t) {
          return !t || "object" !== b(t) && "function" != typeof t ? y(e) : t
        }(this, (e = v(t)).call.apply(e, [this].concat(o))),
        function(e, t, n) {
          t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n
        }(y(n), "state", {
          currentTab: 0
        }), n
    }
    var n, o, a;
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && O(e, t)
    }(t, e), n = t, (o = [{
      key: "render",
      value: function() {
        var e = this,
          t = this.props.renderingChunk.filter((function(t) {
            return !t.condition || Object(i.a)(Object(i.b)(t.condition), e.props.value)
          })),
          n = t[this.state.currentTab];
        return Object(r.createElement)("div", {
          className: "ct-tabs"
        }, Object(r.createElement)("ul", null, t.map((function(e, t) {
          return {
            singleTab: e,
            index: t
          }
        })).map((function(t) {
          var n = t.singleTab,
            o = t.index;
          return Object(r.createElement)("li", {
            key: n.id,
            onClick: function() {
              return e.setState({
                currentTab: o
              })
            },
            className: m()({
              active: o === e.state.currentTab
            })
          }, n.title ? n.title : n.id)
        }))), Object(r.createElement)("div", {
          className: "ct-current-tab"
        }, Object(r.createElement)(P, {
          purpose: this.props.purpose,
          key: n.id,
          onChange: function(t, n) {
            return e.props.onChange(t, n)
          },
          options: n.options,
          value: this.props.value
        })))
      }
    }]) && g(n.prototype, o), a && g(n, a), t
  }(r.Component);

  function j() {
    return (j = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  var _ = function(e) {
      var t = e.renderingChunk,
        n = e.value,
        o = e.onChange,
        i = e.purpose,
        a = e.hasRevertButton;
      return t.map((function(e) {
        return Object(r.createElement)("div", j({
          key: e.id,
          className: "ct-controls-group"
        }, e.attr || {}), Object(r.createElement)(P, {
          purpose: i,
          onChange: o,
          options: e.options,
          value: n,
          hasRevertButton: a
        }))
      }))
    },
    E = function(e) {
      var t = e.value,
        n = e.renderingChunk,
        o = e.onChange,
        i = e.purpose,
        a = e.hasRevertButton,
        c = null;
      return "ct-condition" === n[0].type && (c = d), "tab" === n[0].type && (c = w), "ct-group" === n[0].type && (c = _), c ? Object(r.createElement)(c, {
        purpose: i,
        onChange: o,
        value: t,
        renderingChunk: n,
        hasRevertButton: a
      }) : Object(r.createElement)("div", null, "Unknown container type.")
    },
    S = n(8);

  function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function x(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var P = t.a = function(e) {
    var t = e.options,
      n = e.value,
      i = e.onChange,
      a = e.purpose,
      c = void 0 === a ? "default" : a,
      l = e.hasRevertButton,
      s = void 0 === l || l,
      u = e.renderOptions,
      p = void 0 === u ? null : u;
    if (p) return p({
      value: n,
      onChange: i
    });
    var f = Object(r.useMemo)((function() {
      var e = Object(S.a)(t);
      return x(e.__CT_KEYS_ORDER__ ? Object.keys(e.__CT_KEYS_ORDER__).map((function(e) {
        return parseInt(e, 10)
      })).sort((function(e, t) {
        return e - t
      })).map((function(t) {
        return e.__CT_KEYS_ORDER__[t]
      })) : Object.keys(e)).filter((function(e) {
        return "__CT_KEYS_ORDER__" !== e
      })).map((function(t) {
        return function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? k(n, !0).forEach((function(t) {
              C(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(n).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }({}, e[t], {
          id: t
        })
      })).reduce((function(e, t, n) {
        if (0 === e.length) return [
          [t]
        ];
        var r = e[e.length - 1];
        return (r[0].options && r[0].type === t.type || "ct-tab-group" === t.type || "ct-tab-group-sync" === t.type) && "box" !== t.type && "ct-popup" !== t.type ? [].concat(x(e.slice(0, -1)), [
          [].concat(x(r), [t])
        ]) : [].concat(x(e), [
          [t]
        ])
      }), [])
    }), [t]);
    return Object(r.createElement)(r.Fragment, null, f.map((function(e) {
      return e[0].options || "ct-tab-group-sync" === e[0].type ? Object(r.createElement)(E, {
        key: e[0].id,
        value: n,
        renderingChunk: e,
        onChange: i,
        purpose: c,
        hasRevertButton: s
      }) : Object(r.createElement)(o.a, {
        hasRevertButton: s,
        purpose: c,
        key: e[0].id,
        id: e[0].id,
        value: n[e[0].id],
        values: n,
        option: e[0],
        onChangeFor: function(e, t) {
          return i(e, t)
        },
        onChange: function(t) {
          return i(e[0].id, t)
        }
      })
    })))
  }
}, function(e, t) {
  function n() {
    return e.exports = n = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }, n.apply(this, arguments)
  }
  e.exports = n
}, function(e, t, n) {
  "use strict";
  var r = n(57),
    o = n.n(r),
    i = n(23),
    a = n.n(i),
    c = n(27),
    l = n.n(c),
    s = n(5),
    u = n.n(s),
    p = n(10),
    f = n.n(p),
    d = n(4),
    h = n(51),
    m = n(58),
    b = n.n(m)()({
      setReferenceNode: void 0,
      referenceNode: void 0
    }),
    g = function(e) {
      function t() {
        var t;
        return t = e.call(this) || this, f()(u()(u()(t)), "setReferenceNode", (function(e) {
          e && t.state.context.referenceNode !== e && t.setState((function(t) {
            var n = t.context;
            return {
              context: a()({}, n, {
                referenceNode: e
              })
            }
          }))
        })), t.state = {
          context: {
            setReferenceNode: t.setReferenceNode,
            referenceNode: void 0
          }
        }, t
      }
      return l()(t, e), t.prototype.render = function() {
        return d.createElement(b.Provider, {
          value: this.state.context
        }, this.props.children)
      }, t
    }(d.Component),
    v = function(e) {
      return Array.isArray(e) ? e[0] : e
    },
    y = function(e) {
      if ("function" == typeof e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return e.apply(void 0, n)
      }
    },
    O = {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      pointerEvents: "none"
    },
    w = {},
    j = function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return t = e.call.apply(e, [this].concat(r)) || this, f()(u()(u()(t)), "state", {
          data: void 0,
          placement: void 0
        }), f()(u()(u()(t)), "popperInstance", void 0), f()(u()(u()(t)), "popperNode", null), f()(u()(u()(t)), "arrowNode", null), f()(u()(u()(t)), "setPopperNode", (function(e) {
          e && t.popperNode !== e && (y(t.props.innerRef, e), t.popperNode = e, t.updatePopperInstance())
        })), f()(u()(u()(t)), "setArrowNode", (function(e) {
          t.arrowNode = e
        })), f()(u()(u()(t)), "updateStateModifier", {
          enabled: !0,
          order: 900,
          fn: function(e) {
            var n = e.placement;
            return t.setState({
              data: e,
              placement: n
            }), e
          }
        }), f()(u()(u()(t)), "getOptions", (function() {
          return {
            placement: t.props.placement,
            eventsEnabled: t.props.eventsEnabled,
            positionFixed: t.props.positionFixed,
            modifiers: a()({}, t.props.modifiers, {
              arrow: a()({}, t.props.modifiers && t.props.modifiers.arrow, {
                enabled: !!t.arrowNode,
                element: t.arrowNode
              }),
              applyStyle: {
                enabled: !1
              },
              updateStateModifier: t.updateStateModifier
            })
          }
        })), f()(u()(u()(t)), "getPopperStyle", (function() {
          return t.popperNode && t.state.data ? a()({
            position: t.state.data.offsets.popper.position
          }, t.state.data.styles) : O
        })), f()(u()(u()(t)), "getPopperPlacement", (function() {
          return t.state.data ? t.state.placement : void 0
        })), f()(u()(u()(t)), "getArrowStyle", (function() {
          return t.arrowNode && t.state.data ? t.state.data.arrowStyles : w
        })), f()(u()(u()(t)), "getOutOfBoundariesState", (function() {
          return t.state.data ? t.state.data.hide : void 0
        })), f()(u()(u()(t)), "destroyPopperInstance", (function() {
          t.popperInstance && (t.popperInstance.destroy(), t.popperInstance = null)
        })), f()(u()(u()(t)), "updatePopperInstance", (function() {
          t.destroyPopperInstance();
          var e = u()(u()(t)).popperNode,
            n = t.props.referenceElement;
          n && e && (t.popperInstance = new h.a(n, e, t.getOptions()))
        })), f()(u()(u()(t)), "scheduleUpdate", (function() {
          t.popperInstance && t.popperInstance.scheduleUpdate()
        })), t
      }
      l()(t, e);
      var n = t.prototype;
      return n.componentDidUpdate = function(e, t) {
        this.props.placement !== e.placement || this.props.referenceElement !== e.referenceElement || this.props.positionFixed !== e.positionFixed ? this.updatePopperInstance() : this.props.eventsEnabled !== e.eventsEnabled && this.popperInstance && (this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners()), t.placement !== this.state.placement && this.scheduleUpdate()
      }, n.componentWillUnmount = function() {
        y(this.props.innerRef, null), this.destroyPopperInstance()
      }, n.render = function() {
        return v(this.props.children)({
          ref: this.setPopperNode,
          style: this.getPopperStyle(),
          placement: this.getPopperPlacement(),
          outOfBoundaries: this.getOutOfBoundariesState(),
          scheduleUpdate: this.scheduleUpdate,
          arrowProps: {
            ref: this.setArrowNode,
            style: this.getArrowStyle()
          }
        })
      }, t
    }(d.Component);
  f()(j, "defaultProps", {
    placement: "bottom",
    eventsEnabled: !0,
    referenceElement: void 0,
    positionFixed: !1
  });
  h.a.placements;

  function _(e) {
    var t = e.referenceElement,
      n = o()(e, ["referenceElement"]);
    return d.createElement(b.Consumer, null, (function(e) {
      var r = e.referenceNode;
      return d.createElement(j, a()({
        referenceElement: void 0 !== t ? t : r
      }, n))
    }))
  }
  var E = n(59),
    S = n.n(E),
    k = function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return t = e.call.apply(e, [this].concat(r)) || this, f()(u()(u()(t)), "refHandler", (function(e) {
          y(t.props.innerRef, e), y(t.props.setReferenceNode, e)
        })), t
      }
      return l()(t, e), t.prototype.render = function() {
        return S()(Boolean(this.props.setReferenceNode), "`Reference` should not be used outside of a `Manager` component."), v(this.props.children)({
          ref: this.refHandler
        })
      }, t
    }(d.Component);

  function C(e) {
    return d.createElement(b.Consumer, null, (function(t) {
      var n = t.setReferenceNode;
      return d.createElement(k, a()({
        setReferenceNode: n
      }, e))
    }))
  }
  n.d(t, "b", (function() {
    return _
  })), n.d(t, "a", (function() {
    return g
  })), n.d(t, "c", (function() {
    return C
  }))
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(28),
    i = n(7),
    a = n(3),
    c = n(6),
    l = n(11),
    s = (n(39), n(4)),
    u = n.n(s);
  n(52);

  function p(e) {
    return null != e && "object" == typeof e && 1 === e.nodeType
  }

  function f(e, t) {
    return (!t || "hidden" !== e) && ("visible" !== e && "clip" !== e)
  }

  function d(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      var n = getComputedStyle(e, null);
      return f(n.overflowY, t) || f(n.overflowX, t)
    }
    return !1
  }

  function h(e, t, n, r, o, i, a, c) {
    return i < e && a > t || i > e && a < t ? 0 : i <= e && c <= n || a >= t && c >= n ? i - e - r : a > t && c < n || i < e && c > n ? a - t + o : 0
  }
  var m, b = function(e, t) {
      var n = t.scrollMode,
        r = t.block,
        o = t.inline,
        i = t.boundary,
        a = t.skipOverflowHiddenElements,
        c = "function" == typeof i ? i : function(e) {
          return e !== i
        };
      if (!p(e)) throw new TypeError("Invalid target");
      for (var l = document.scrollingElement || document.documentElement, s = [], u = e; p(u) && c(u);) {
        if ((u = u.parentNode) === l) {
          s.push(u);
          break
        }
        u === document.body && d(u) && !d(document.documentElement) || d(u, a) && s.push(u)
      }
      for (var f = window.visualViewport ? visualViewport.width : innerWidth, m = window.visualViewport ? visualViewport.height : innerHeight, b = window.scrollX || pageXOffset, g = window.scrollY || pageYOffset, v = e.getBoundingClientRect(), y = v.height, O = v.width, w = v.top, j = v.right, _ = v.bottom, E = v.left, S = "start" === r || "nearest" === r ? w : "end" === r ? _ : w + y / 2, k = "center" === o ? E + O / 2 : "end" === o ? j : E, C = [], x = 0; x < s.length; x++) {
        var P = s[x],
          I = P.getBoundingClientRect(),
          D = I.height,
          A = I.width,
          T = I.top,
          N = I.right,
          M = I.bottom,
          R = I.left;
        if ("if-needed" === n && w >= 0 && E >= 0 && _ <= m && j <= f && w >= T && _ <= M && E >= R && j <= N) return C;
        var z = getComputedStyle(P),
          L = parseInt(z.borderLeftWidth, 10),
          F = parseInt(z.borderTopWidth, 10),
          B = parseInt(z.borderRightWidth, 10),
          V = parseInt(z.borderBottomWidth, 10),
          H = 0,
          U = 0,
          W = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - L - B : 0,
          K = "offsetHeight" in P ? P.offsetHeight - P.clientHeight - F - V : 0;
        if (l === P) H = "start" === r ? S : "end" === r ? S - m : "nearest" === r ? h(g, g + m, m, F, V, g + S, g + S + y, y) : S - m / 2, U = "start" === o ? k : "center" === o ? k - f / 2 : "end" === o ? k - f : h(b, b + f, f, L, B, b + k, b + k + O, O), H = Math.max(0, H + g), U = Math.max(0, U + b);
        else {
          H = "start" === r ? S - T - F : "end" === r ? S - M + V + K : "nearest" === r ? h(T, M, D, F, V + K, S, S + y, y) : S - (T + D / 2) + K / 2, U = "start" === o ? k - R - L : "center" === o ? k - (R + A / 2) + W / 2 : "end" === o ? k - N + B + W : h(R, N, A, L, B + W, k, k + O, O);
          var q = P.scrollLeft,
            Y = P.scrollTop;
          S += Y - (H = Math.max(0, Math.min(Y + H, P.scrollHeight - D + K))), k += q - (U = Math.max(0, Math.min(q + U, P.scrollWidth - A + W)))
        }
        C.push({
          el: P,
          top: H,
          left: U
        })
      }
      return C
    },
    g = "undefined" == typeof document ? null : document.getElementById("a11y-status-message");

  function v(e) {
    var t = function() {
      if (g) return g;
      return (g = document.createElement("div")).setAttribute("id", "a11y-status-message"), g.setAttribute("role", "status"), g.setAttribute("aria-live", "polite"), g.setAttribute("aria-relevant", "additions text"), Object.assign(g.style, {
        border: "0",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px"
      }), document.body.appendChild(g), g
    }();
    e && (m && (clearTimeout(m), m = null), t.textContent = e, m = setTimeout((function() {
      t.textContent = "", m = null
    }), 500))
  }
  var y = 0,
    O = 2,
    w = 3,
    j = 4,
    _ = 5,
    E = 6,
    S = 7,
    k = 8,
    C = 9,
    x = 10,
    P = 11,
    I = 12,
    D = 13,
    A = 14,
    T = Object.freeze({
      unknown: y,
      mouseUp: 1,
      itemMouseEnter: O,
      keyDownArrowUp: w,
      keyDownArrowDown: j,
      keyDownEscape: _,
      keyDownEnter: E,
      keyDownHome: S,
      keyDownEnd: k,
      clickItem: C,
      blurInput: x,
      changeInput: P,
      keyDownSpaceButton: I,
      clickButton: D,
      blurButton: A,
      controlledPropUpdatedSelectedItem: 15,
      touchEnd: 16
    }),
    N = 0;

  function M(e) {
    return "function" == typeof e ? e : R
  }

  function R() {}

  function z(e, t) {
    return e === t || e.contains && e.contains(t)
  }

  function L() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
      return t.some((function(t) {
        return t && t.apply(void 0, [e].concat(r)), e.preventDownshiftDefault || e.hasOwnProperty("nativeEvent") && e.nativeEvent.preventDownshiftDefault
      }))
    }
  }

  function F(e, t) {
    return !(e = Array.isArray(e) ? e[0] : e) && t ? t : e
  }

  function B(e) {
    return "string" == typeof e.type
  }

  function V(e) {
    return e.props
  }
  var H = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];

  function U(e) {
    void 0 === e && (e = {});
    var t = {};
    return H.forEach((function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    })), t
  }

  function W(e) {
    var t = e.key,
      n = e.keyCode;
    return n >= 37 && n <= 40 && 0 !== t.indexOf("Arrow") ? "Arrow" + t : t
  }

  function K(e, t, n) {
    var r = n - 1;
    ("number" != typeof t || t < 0 || t >= n) && (t = e > 0 ? -1 : r + 1);
    var o = t + e;
    return o < 0 ? o = r : o > r && (o = 0), o
  }
  var q = function(e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.id = n.props.id || "downshift-" + String(N++), n.menuId = n.props.menuId || n.id + "-menu", n.labelId = n.props.labelId || n.id + "-label", n.inputId = n.props.inputId || n.id + "-input", n.getItemId = n.props.getItemId || function(e) {
        return n.id + "-item-" + e
      }, n.input = null, n.items = [], n.itemCount = null, n.previousResultCount = 0, n.timeoutIds = [], n.internalSetTimeout = function(e, t) {
        var r = setTimeout((function() {
          n.timeoutIds = n.timeoutIds.filter((function(e) {
            return e !== r
          })), e()
        }), t);
        n.timeoutIds.push(r)
      }, n.setItemCount = function(e) {
        n.itemCount = e
      }, n.unsetItemCount = function() {
        n.itemCount = null
      }, n.setHighlightedIndex = function(e, t) {
        void 0 === e && (e = n.props.defaultHighlightedIndex), void 0 === t && (t = {}), t = U(t), n.internalSetState(Object(a.a)({
          highlightedIndex: e
        }, t))
      }, n.clearSelection = function(e) {
        n.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: n.props.defaultHighlightedIndex,
          isOpen: n.props.defaultIsOpen
        }, e)
      }, n.selectItem = function(e, t, r) {
        t = U(t), n.internalSetState(Object(a.a)({
          isOpen: n.props.defaultIsOpen,
          highlightedIndex: n.props.defaultHighlightedIndex,
          selectedItem: e,
          inputValue: n.props.itemToString(e)
        }, t), r)
      }, n.selectItemAtIndex = function(e, t, r) {
        var o = n.items[e];
        null != o && n.selectItem(o, t, r)
      }, n.selectHighlightedItem = function(e, t) {
        return n.selectItemAtIndex(n.getState().highlightedIndex, e, t)
      }, n.internalSetState = function(e, t) {
        var r, o, i = {},
          c = "function" == typeof e;
        return !c && e.hasOwnProperty("inputValue") && n.props.onInputValueChange(e.inputValue, Object(a.a)({}, n.getStateAndHelpers(), e)), n.setState((function(t) {
          t = n.getState(t);
          var l = c ? e(t) : e;
          l = n.props.stateReducer(t, l), r = l.hasOwnProperty("selectedItem");
          var s = {},
            u = {};
          return r && l.selectedItem !== t.selectedItem && (o = l.selectedItem), l.type = l.type || y, Object.keys(l).forEach((function(e) {
            t[e] !== l[e] && (i[e] = l[e]), "type" !== e && (u[e] = l[e], n.isControlledProp(e) || (s[e] = l[e]))
          })), c && l.hasOwnProperty("inputValue") && n.props.onInputValueChange(l.inputValue, Object(a.a)({}, n.getStateAndHelpers(), l)), s
        }), (function() {
          M(t)(), Object.keys(i).length > 1 && n.props.onStateChange(i, n.getStateAndHelpers()), r && n.props.onSelect(e.selectedItem, n.getStateAndHelpers()), void 0 !== o && n.props.onChange(o, n.getStateAndHelpers()), n.props.onUserAction(i, n.getStateAndHelpers())
        }))
      }, n.rootRef = function(e) {
        return n._rootNode = e
      }, n.getRootProps = function(e, t) {
        var r, o = void 0 === e ? {} : e,
          c = o.refKey,
          l = void 0 === c ? "ref" : c,
          s = Object(i.a)(o, ["refKey"]),
          u = (void 0 === t ? {} : t).suppressRefError,
          p = void 0 !== u && u;
        n.getRootProps.called = !0, n.getRootProps.refKey = l, n.getRootProps.suppressRefError = p;
        var f = n.getState().isOpen;
        return Object(a.a)(((r = {})[l] = n.rootRef, r.role = "combobox", r["aria-expanded"] = f, r["aria-haspopup"] = "listbox", r["aria-owns"] = f ? n.menuId : null, r["aria-labelledby"] = n.labelId, r), s)
      }, n.keyDownHandlers = {
        ArrowDown: function(e) {
          var t = this;
          if (e.preventDefault(), this.getState().isOpen) {
            var n = e.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(n, {
              type: j
            })
          } else this.internalSetState({
            isOpen: !0,
            type: j
          }, (function() {
            var e = t.getItemCount();
            e > 0 && t.setHighlightedIndex(K(1, t.getState().highlightedIndex, e), {
              type: j
            })
          }))
        },
        ArrowUp: function(e) {
          var t = this;
          if (e.preventDefault(), this.getState().isOpen) {
            var n = e.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(n, {
              type: w
            })
          } else this.internalSetState({
            isOpen: !0,
            type: w
          }, (function() {
            var e = t.getItemCount();
            e > 0 && t.setHighlightedIndex(K(-1, t.getState().highlightedIndex, e), {
              type: j
            })
          }))
        },
        Enter: function(e) {
          var t = this.getState(),
            n = t.isOpen,
            r = t.highlightedIndex;
          if (n && null != r) {
            e.preventDefault();
            var o = this.items[r],
              i = this.getItemNodeFromIndex(r);
            if (null == o || i && i.hasAttribute("disabled")) return;
            this.selectHighlightedItem({
              type: E
            })
          }
        },
        Escape: function(e) {
          e.preventDefault(), this.reset({
            type: _,
            selectedItem: null,
            inputValue: ""
          })
        }
      }, n.buttonKeyDownHandlers = Object(a.a)({}, n.keyDownHandlers, {
        " ": function(e) {
          e.preventDefault(), this.toggleMenu({
            type: I
          })
        }
      }), n.inputKeyDownHandlers = Object(a.a)({}, n.keyDownHandlers, {
        Home: function(e) {
          this.highlightFirstOrLastIndex(e, !0, {
            type: S
          })
        },
        End: function(e) {
          this.highlightFirstOrLastIndex(e, !1, {
            type: k
          })
        }
      }), n.getToggleButtonProps = function(e) {
        var t = void 0 === e ? {} : e,
          r = t.onClick,
          o = (t.onPress, t.onKeyDown),
          c = t.onKeyUp,
          l = t.onBlur,
          s = Object(i.a)(t, ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"]),
          u = n.getState().isOpen,
          p = {
            onClick: L(r, n.buttonHandleClick),
            onKeyDown: L(o, n.buttonHandleKeyDown),
            onKeyUp: L(c, n.buttonHandleKeyUp),
            onBlur: L(l, n.buttonHandleBlur)
          },
          f = s.disabled ? {} : p;
        return Object(a.a)({
          type: "button",
          role: "button",
          "aria-label": u ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, f, s)
      }, n.buttonHandleKeyUp = function(e) {
        e.preventDefault()
      }, n.buttonHandleKeyDown = function(e) {
        var t = W(e);
        n.buttonKeyDownHandlers[t] && n.buttonKeyDownHandlers[t].call(Object(c.a)(n), e)
      }, n.buttonHandleClick = function(e) {
        e.preventDefault(), n.props.environment.document.activeElement === n.props.environment.document.body && e.target.focus(), n.internalSetTimeout((function() {
          return n.toggleMenu({
            type: D
          })
        }))
      }, n.buttonHandleBlur = function(e) {
        var t = e.target;
        n.internalSetTimeout((function() {
          n.isMouseDown || null != n.props.environment.document.activeElement && n.props.environment.document.activeElement.id === n.inputId || n.props.environment.document.activeElement === t || n.reset({
            type: A
          })
        }))
      }, n.getLabelProps = function(e) {
        return Object(a.a)({
          htmlFor: n.inputId,
          id: n.labelId
        }, e)
      }, n.getInputProps = function(e) {
        var t = void 0 === e ? {} : e,
          r = t.onKeyDown,
          o = t.onBlur,
          c = t.onChange,
          l = t.onInput,
          s = (t.onChangeText, Object(i.a)(t, ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"])),
          u = {};
        var p, f = n.getState(),
          d = f.inputValue,
          h = f.isOpen,
          m = f.highlightedIndex;
        s.disabled || ((p = {}).onChange = L(c, l, n.inputHandleChange), p.onKeyDown = L(r, n.inputHandleKeyDown), p.onBlur = L(o, n.inputHandleBlur), u = p);
        return Object(a.a)({
          "aria-autocomplete": "list",
          "aria-activedescendant": h && "number" == typeof m && m >= 0 ? n.getItemId(m) : null,
          "aria-controls": h ? n.menuId : null,
          "aria-labelledby": n.labelId,
          autoComplete: "off",
          value: d,
          id: n.inputId
        }, u, s)
      }, n.inputHandleKeyDown = function(e) {
        var t = W(e);
        t && n.inputKeyDownHandlers[t] && n.inputKeyDownHandlers[t].call(Object(c.a)(n), e)
      }, n.inputHandleChange = function(e) {
        n.internalSetState({
          type: P,
          isOpen: !0,
          inputValue: e.target.value,
          highlightedIndex: n.props.defaultHighlightedIndex
        })
      }, n.inputHandleTextChange = function(e) {
        n.internalSetState({
          type: P,
          isOpen: !0,
          inputValue: e,
          highlightedIndex: n.props.defaultHighlightedIndex
        })
      }, n.inputHandleBlur = function() {
        n.internalSetTimeout((function() {
          var e = n.props.environment.document && !!n.props.environment.document.activeElement && !!n.props.environment.document.activeElement.dataset && n.props.environment.document.activeElement.dataset.toggle && n._rootNode && n._rootNode.contains(n.props.environment.document.activeElement);
          n.isMouseDown || e || n.reset({
            type: x
          })
        }))
      }, n.menuRef = function(e) {
        n._menuNode = e
      }, n.getMenuProps = function(e, t) {
        var r, o = void 0 === e ? {} : e,
          c = o.refKey,
          l = void 0 === c ? "ref" : c,
          s = o.ref,
          u = Object(i.a)(o, ["refKey", "ref"]),
          p = (void 0 === t ? {} : t).suppressRefError,
          f = void 0 !== p && p;
        return n.getMenuProps.called = !0, n.getMenuProps.refKey = l, n.getMenuProps.suppressRefError = f, Object(a.a)(((r = {})[l] = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach((function(e) {
              e && e.apply(void 0, n)
            }))
          }
        }(s, n.menuRef), r.role = "listbox", r["aria-labelledby"] = u && u["aria-label"] ? null : n.labelId, r.id = n.menuId, r), u)
      }, n.getItemProps = function(e) {
        var t, r = void 0 === e ? {} : e,
          o = r.onMouseMove,
          c = r.onMouseDown,
          l = r.onClick,
          s = (r.onPress, r.index),
          u = r.item,
          p = void 0 === u ? void 0 : u,
          f = Object(i.a)(r, ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"]);
        void 0 === s ? (n.items.push(p), s = n.items.indexOf(p)) : n.items[s] = p;
        var d = l,
          h = ((t = {
            onMouseMove: L(o, (function() {
              s !== n.getState().highlightedIndex && (n.setHighlightedIndex(s, {
                type: O
              }), n.avoidScrolling = !0, n.internalSetTimeout((function() {
                return n.avoidScrolling = !1
              }), 250))
            })),
            onMouseDown: L(c, (function(e) {
              e.preventDefault()
            }))
          }).onClick = L(d, (function() {
            n.selectItemAtIndex(s, {
              type: C
            })
          })), t),
          m = f.disabled ? {
            onMouseDown: h.onMouseDown
          } : h;
        return Object(a.a)({
          id: n.getItemId(s),
          role: "option",
          "aria-selected": n.getState().highlightedIndex === s
        }, m, f)
      }, n.clearItems = function() {
        n.items = []
      }, n.reset = function(e, t) {
        void 0 === e && (e = {}), e = U(e), n.internalSetState((function(t) {
          var r = t.selectedItem;
          return Object(a.a)({
            isOpen: n.props.defaultIsOpen,
            highlightedIndex: n.props.defaultHighlightedIndex,
            inputValue: n.props.itemToString(r)
          }, e)
        }), t)
      }, n.toggleMenu = function(e, t) {
        void 0 === e && (e = {}), e = U(e), n.internalSetState((function(t) {
          var r = t.isOpen;
          return Object(a.a)({
            isOpen: !r
          }, r && {
            highlightedIndex: n.props.defaultHighlightedIndex
          }, e)
        }), (function() {
          var r = n.getState(),
            o = r.isOpen,
            i = r.highlightedIndex;
          o && n.getItemCount() > 0 && "number" == typeof i && n.setHighlightedIndex(i, e), M(t)()
        }))
      }, n.openMenu = function(e) {
        n.internalSetState({
          isOpen: !0
        }, e)
      }, n.closeMenu = function(e) {
        n.internalSetState({
          isOpen: !1
        }, e)
      }, n.updateStatus = function(e, t) {
        var n;

        function r() {
          n && clearTimeout(n)
        }

        function o() {
          for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
          r(), n = setTimeout((function() {
            n = null, e.apply(void 0, i)
          }), t)
        }
        return o.cancel = r, o
      }((function() {
        var e = n.getState(),
          t = n.items[e.highlightedIndex],
          r = n.getItemCount(),
          o = n.props.getA11yStatusMessage(Object(a.a)({
            itemToString: n.props.itemToString,
            previousResultCount: n.previousResultCount,
            resultCount: r,
            highlightedItem: t
          }, e));
        n.previousResultCount = r, v(o)
      }), 200);
      var r = n.props,
        o = r.defaultHighlightedIndex,
        l = r.initialHighlightedIndex,
        s = void 0 === l ? o : l,
        u = r.defaultIsOpen,
        p = r.initialIsOpen,
        f = void 0 === p ? u : p,
        d = r.initialInputValue,
        h = void 0 === d ? "" : d,
        m = r.initialSelectedItem,
        b = void 0 === m ? null : m,
        g = n.getState({
          highlightedIndex: s,
          isOpen: f,
          inputValue: h,
          selectedItem: b
        });
      return null != g.selectedItem && void 0 === n.props.initialInputValue && (g.inputValue = n.props.itemToString(g.selectedItem)), n.state = g, n
    }
    Object(l.a)(t, e);
    var n = t.prototype;
    return n.internalClearTimeouts = function() {
      this.timeoutIds.forEach((function(e) {
        clearTimeout(e)
      })), this.timeoutIds = []
    }, n.getState = function(e) {
      var t = this;
      return void 0 === e && (e = this.state), Object.keys(e).reduce((function(n, r) {
        return n[r] = t.isControlledProp(r) ? t.props[r] : e[r], n
      }), {})
    }, n.isControlledProp = function(e) {
      return void 0 !== this.props[e]
    }, n.getItemCount = function() {
      var e = this.items.length;
      return null != this.itemCount ? e = this.itemCount : void 0 !== this.props.itemCount && (e = this.props.itemCount), e
    }, n.getItemNodeFromIndex = function(e) {
      return this.props.environment.document.getElementById(this.getItemId(e))
    }, n.scrollHighlightedItemIntoView = function() {
      var e = this.getItemNodeFromIndex(this.getState().highlightedIndex);
      this.props.scrollIntoView(e, this._menuNode)
    }, n.moveHighlightedIndex = function(e, t) {
      var n = this.getItemCount();
      if (n > 0) {
        var r = K(e, this.getState().highlightedIndex, n);
        this.setHighlightedIndex(r, t)
      }
    }, n.highlightFirstOrLastIndex = function(e, t, n) {
      var r = this.getItemCount() - 1;
      r < 0 || !this.getState().isOpen || (e.preventDefault(), this.setHighlightedIndex(t ? 0 : r, n))
    }, n.getStateAndHelpers = function() {
      var e = this.getState(),
        t = e.highlightedIndex,
        n = e.inputValue,
        r = e.selectedItem,
        o = e.isOpen,
        i = this.props.itemToString,
        a = this.id,
        c = this.getRootProps,
        l = this.getToggleButtonProps,
        s = this.getLabelProps,
        u = this.getMenuProps,
        p = this.getInputProps,
        f = this.getItemProps,
        d = this.openMenu,
        h = this.closeMenu,
        m = this.toggleMenu,
        b = this.selectItem,
        g = this.selectItemAtIndex,
        v = this.selectHighlightedItem,
        y = this.setHighlightedIndex,
        O = this.clearSelection,
        w = this.clearItems;
      return {
        getRootProps: c,
        getToggleButtonProps: l,
        getLabelProps: s,
        getMenuProps: u,
        getInputProps: p,
        getItemProps: f,
        reset: this.reset,
        openMenu: d,
        closeMenu: h,
        toggleMenu: m,
        selectItem: b,
        selectItemAtIndex: g,
        selectHighlightedItem: v,
        setHighlightedIndex: y,
        clearSelection: O,
        clearItems: w,
        setItemCount: this.setItemCount,
        unsetItemCount: this.unsetItemCount,
        setState: this.internalSetState,
        itemToString: i,
        id: a,
        highlightedIndex: t,
        inputValue: n,
        isOpen: o,
        selectedItem: r
      }
    }, n.componentDidMount = function() {
      var e = this;
      var t = function(t, n) {
          void 0 === n && (n = !0);
          var r = e.props.environment.document;
          return [e._rootNode, e._menuNode].some((function(e) {
            return e && (z(e, t) || n && z(e, r.activeElement))
          }))
        },
        n = function() {
          e.isMouseDown = !0
        },
        r = function(n) {
          e.isMouseDown = !1, !t(n.target) && e.getState().isOpen && e.reset({
            type: 1
          }, (function() {
            return e.props.onOuterClick(e.getStateAndHelpers())
          }))
        },
        o = function() {
          e.isTouchMove = !1
        },
        i = function() {
          e.isTouchMove = !0
        },
        a = function(n) {
          var r = t(n.target, !1);
          e.isTouchMove || r || !e.getState().isOpen || e.reset({
            type: 16
          }, (function() {
            return e.props.onOuterClick(e.getStateAndHelpers())
          }))
        };
      this.props.environment.addEventListener("mousedown", n), this.props.environment.addEventListener("mouseup", r), this.props.environment.addEventListener("touchstart", o), this.props.environment.addEventListener("touchmove", i), this.props.environment.addEventListener("touchend", a), this.cleanup = function() {
        e.internalClearTimeouts(), e.updateStatus.cancel(), e.props.environment.removeEventListener("mousedown", n), e.props.environment.removeEventListener("mouseup", r), e.props.environment.removeEventListener("touchstart", o), e.props.environment.removeEventListener("touchmove", i), e.props.environment.removeEventListener("touchend", a)
      }
    }, n.shouldScroll = function(e, t) {
      var n = (void 0 === this.props.highlightedIndex ? this.getState() : this.props).highlightedIndex,
        r = (void 0 === t.highlightedIndex ? e : t).highlightedIndex;
      return n && this.getState().isOpen && !e.isOpen || n !== r
    }, n.componentDidUpdate = function(e, t) {
      this.isControlledProp("selectedItem") && this.props.selectedItemChanged(e.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: 15,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(t, e) && this.scrollHighlightedItemIntoView(), this.updateStatus()
    }, n.componentWillUnmount = function() {
      this.cleanup()
    }, n.render = function() {
      var e = F(this.props.children, R);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1, this.getInputProps.called = !1;
      var t = F(e(this.getStateAndHelpers()));
      return t ? this.getRootProps.called || this.props.suppressRefError ? t : B(t) ? u.a.cloneElement(t, this.getRootProps(V(t))) : void 0 : null
    }, t
  }(s.Component);
  q.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: function(e) {
      var t = e.isOpen,
        n = e.selectedItem,
        r = e.resultCount,
        o = e.previousResultCount,
        i = e.itemToString;
      return t ? r ? r !== o ? r + " result" + (1 === r ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : n ? i(n) : ""
    },
    itemToString: function(e) {
      return null == e ? "" : String(e)
    },
    onStateChange: R,
    onInputValueChange: R,
    onUserAction: R,
    onChange: R,
    onSelect: R,
    onOuterClick: R,
    selectedItemChanged: function(e, t) {
      return e !== t
    },
    environment: "undefined" == typeof window ? {} : window,
    stateReducer: function(e, t) {
      return t
    },
    suppressRefError: !1,
    scrollIntoView: function(e, t) {
      null !== e && b(e, {
        boundary: t,
        block: "nearest",
        scrollMode: "if-needed"
      }).forEach((function(e) {
        var t = e.el,
          n = e.top,
          r = e.left;
        t.scrollTop = n, t.scrollLeft = r
      }))
    }
  }, q.stateChangeTypes = T;
  var Y = q,
    G = n(2),
    X = n.n(G);

  function $() {
    return ($ = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  t.default = function(e) {
    var t = e.value,
      n = e.option,
      i = n.choices,
      a = n.tabletChoices,
      c = n.mobileChoices,
      l = n.placeholder,
      s = e.onChange,
      u = e.device,
      p = void 0 === u ? "desktop" : u,
      f = i;
    "tablet" === p && a && (f = a), "mobile" === p && c && (f = c);
    var d = Object(o.a)(f);
    return 0 === d.length ? null : Object(r.createElement)(Y, {
      selectedItem: t,
      onChange: function(e) {
        return s(e)
      },
      itemToString: function(e) {
        return e && d.find((function(t) {
          return t.key === e
        })) ? d.find((function(t) {
          return t.key === e
        })).value : ""
      }
    }, (function(e) {
      var t = e.getInputProps,
        n = e.getItemProps,
        o = (e.getLabelProps, e.getMenuProps),
        i = e.isOpen,
        a = (e.inputValue, e.highlightedIndex),
        c = e.selectedItem,
        s = e.openMenu;
      return Object(r.createElement)("div", {
        className: "ct-select-input"
      }, Object(r.createElement)("input", $({}, t({
        onFocus: function() {
          return s()
        },
        onClick: function() {
          return s()
        }
      }), {
        placeholder: l || "Select value...",
        readOnly: !0,
        disabled: 0 === d.length
      })), i && Object(r.createElement)("div", o({
        className: "ct-select-dropdown"
      }), d.map((function(e, t) {
        return Object(r.createElement)("div", n({
          key: e.key,
          index: t,
          item: e.key,
          className: X()("ct-select-dropdown-item", {
            active: a === t,
            selected: c === e.key
          })
        }), e.value)
      }))))
    }))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "getNoColorPropFor", (function() {
    return g
  })), n.d(t, "default", (function() {
    return y
  }));
  var r = n(0),
    o = n(44),
    i = n(2),
    a = n.n(i),
    c = n(1);

  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function s() {
    return (s = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function u(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function f(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(n, !0).forEach((function(t) {
        b(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var g = function(e) {
      return e.noColorTransparent ? "transparent" : "CT_CSS_SKIP_RULE"
    },
    v = function(e, t) {
      if (e && t) {
        var n = e.closest(".ct-color-modal-wrapper").getBoundingClientRect();
        e.nextElementSibling.getBoundingClientRect();
        return t = t.getBoundingClientRect(), e = e.getBoundingClientRect(), {
          left: t.left + t.width / 2 - n.left - e.width / 2
        }
      }
    },
    y = function(e) {
      function t() {
        var e, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return n = function(e, t) {
          return !t || "object" !== l(t) && "function" != typeof t ? f(e) : t
        }(this, (e = p(t)).call.apply(e, [this].concat(i))), b(f(n), "arrow", Object(r.createRef)()), b(f(n), "getValueForPicker", (function() {
          return n.props.value.color === g(n.props.option) ? "" : n.props.value.color.indexOf(g(n.props.option)) > -1 && n.props.picker.inherit ? getComputedStyle(document.documentElement).getPropertyValue(n.props.picker.inherit.replace(/var\(/, "").replace(/\)/, "")).trim().replace(/\s/g, "") : n.props.value.color.indexOf("var") > -1 ? getComputedStyle(document.documentElement).getPropertyValue(n.props.value.color.replace(/var\(/, "").replace(/\)/, "")).trim().replace(/\s/g, "") : n.props.value.color
        })), n
      }
      var n, i, h;
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && d(e, t)
      }(t, e), n = t, (i = [{
        key: "render",
        value: function() {
          var e, t = this;
          return Object(r.createElement)(r.Fragment, null, this.props.el && !this.props.option.skipArrow && Object(r.createElement)("span", {
            className: "ct-arrow",
            ref: this.arrow,
            style: m({}, v(this.arrow.current, this.props.el.current), {}, this.props.style ? {
              opacity: this.props.style.opacity
            } : {})
          }), Object(r.createElement)("div", s({
            tabIndex: "0",
            className: "ct-color-picker-modal"
          }, m({}, this.props.style ? {
            style: this.props.style
          } : {}), {
            onMouseDown: function(e) {
              return e.nativeEvent.stopImmediatePropagation()
            }
          }), !this.props.option.predefined && Object(r.createElement)("div", {
            className: "ct-color-picker-top"
          }, Object(r.createElement)("ul", {
            className: "ct-color-picker-skins"
          }, ["main", "mainDark", "mainLight", "sub", "subLight", 'color', 'panelColor'].map((function(e) {
            return Object(r.createElement)("li", {
              key: e,
              style: {
                background: getComputedStyle(document.documentElement).getPropertyValue("--".concat(e)).trim()
              },
              className: a()({
                active: t.props.value.color === "var(--".concat(e, ")")
              }),
              onClick: function() {
                return t.props.onChange(m({}, t.props.value, {
                  color: "var(--".concat(e, ")")
                }))
              }
            }, Object(r.createElement)("div", {
              className: "ct-tooltip-top"
            }, {
              main: "Color 1",
              mainDark: "Color 2",
              mainLight: "Color 3",
              sub: "Color 4",
              subLight: "Color 5",
            } [e]))
          })), !this.props.option.skipNoColorPill && Object(r.createElement)("li", {
            onClick: function() {
              return t.props.onChange(m({}, t.props.value, {
                color: g(t.props.option)
              }))
            },
            className: a()("ct-no-color-pill", {
              active: this.props.value.color === g(this.props.option)
            })
          }, Object(r.createElement)("i", {
            className: "ct-tooltip-top"
          }, Object(c.__)("No Color", "blocksy")))), !this.props.option.skipEditPalette && Object(r.createElement)("a", s({
            className: "ct-edit-palette"
          }, (e = "color", m({
            target: "_blank",
            href: "".concat(window.ct_localizations ? window.ct_localizations.customizer_url : "").concat(encodeURIComponent("[section]=".concat(e)))
          }, wp && wp.customize && wp.customize.section ? {
            onClick: function(t) {
              t.preventDefault(), wp.customize.section(e).expand()
            }
          } : {}))), Object(r.createElement)("span", null, Object(r.createElement)("svg", {
            viewBox: "0 0 30 30"
          }, Object(r.createElement)("path", {
            d: "M15,0V15L7.5,2Z",
            fill: "#ede604"
          }), Object(r.createElement)("path", {
            d: "M22.5,2,28,7.5,15,15Z",
            fill: "#50b517"
          }), Object(r.createElement)("path", {
            d: "M15,0l7.5,2L15,15Z",
            fill: "#9ed110"
          }), Object(r.createElement)("path", {
            d: "M15,30V15l7.5,13Z",
            fill: "#cc42a2"
          }), Object(r.createElement)("path", {
            d: "M7.5,28,2,22.5,15,15Z",
            fill: "#ff5800"
          }), Object(r.createElement)("path", {
            d: "M15,30,7.5,28,15,15Z",
            fill: "#ff3ba7"
          }), Object(r.createElement)("path", {
            d: "M30,15H15L28,7.5Z",
            fill: "#179067"
          }), Object(r.createElement)("path", {
            d: "M28,22.5,22.5,28,15,15Z",
            fill: "#9f49ac"
          }), Object(r.createElement)("path", {
            d: "M30,15l-2,7.5L15,15Z",
            fill: "#476eaf"
          }), Object(r.createElement)("path", {
            d: "M0,15H15L2,22.5Z",
            fill: "#ff8100"
          }), Object(r.createElement)("path", {
            d: "M2,7.5,7.5,2,15,15Z",
            fill: "#fc0"
          }), Object(r.createElement)("path", {
            d: "M0,15,2,7.5,15,15Z",
            fill: "#feac00"
          }))), Object(r.createElement)("i", {
            className: "ct-tooltip-top"
          }, Object(c.__)("Edit Palette", "blocksy")))), Object(r.createElement)(o.default, {
            onChange: function(e) {
              return t.props.onChange(e)
            },
            value: m({}, this.props.value, {
              color: this.getValueForPicker()
            })
          })))
        }
      }]) && u(n.prototype, i), h && u(n, h), t
    }(r.Component)
}, function(e, t) {
  e.exports = function(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  n.d(t, "a", (function() {
    return o
  }));
  var o = function(e) {
    return Array.isArray(e) ? e : Object.keys(e).reduce((function(t, n) {
      return [].concat(r(t), [{
        key: n,
        value: e[n]
      }])
    }), [])
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  n.r(t), n.d(t, "getDefaultFonts", (function() {
    return o
  }));
  var o = function(e) {
    var t = e.isDefault;
    return {
      system: {
        type: "system",
        families: [].concat(r(t ? [] : ["Default"]), ["System Default", "Arial", "Verdana", "Trebuchet", "Georgia", "Times New Roman", "Palatino", "Helvetica", "Calibri", "Myriad Pro", "Lucida", "Gill Sans", "Impact", "Serif", "monospace"]).map((function(e) {
          return {
            source: "system",
            family: e,
            variations: [],
            all_variations: [].concat(r("Default" === e ? ["Default"] : []), ["n1", "i1", "n2", "i2", "n3", "i3", "n4", "i4", "n5", "i5", "n6", "i6", "n7", "i7", "n8", "i8", "n9", "i9"])
          }
        }))
      }
    }
  }
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "patternsList", (function() {
    return p
  })), n.d(t, "getUrlForPattern", (function() {
    return f
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(1),
    c = n(9);

  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(n, !0).forEach((function(t) {
        u(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var p = [{
      id: "type-1",
      title: Object(a.__)("Hideout", "blocksy"),
      src: "patterns/hideout.svg"
    }, {
      id: "type-2",
      title: Object(a.__)("Triangles", "blocksy"),
      src: "patterns/triangles.svg"
    }, {
      id: "type-3",
      title: Object(a.__)("Bubbles", "blocksy"),
      src: "patterns/bubbles.svg"
    }, {
      id: "type-4",
      title: Object(a.__)("Wiggle", "blocksy"),
      src: "patterns/wiggle.svg"
    }, {
      id: "type-5",
      title: Object(a.__)("Polka Dots", "blocksy"),
      src: "patterns/polka-dots.svg"
    }, {
      id: "type-6",
      title: Object(a.__)("Overlaping Circles", "blocksy"),
      src: "patterns/overlaping-circles.svg"
    }, {
      id: "type-7",
      title: Object(a.__)("Texture", "blocksy"),
      src: "patterns/texture.svg"
    }, {
      id: "type-8",
      title: Object(a.__)("Diagonal Lines", "blocksy"),
      src: "patterns/diagonal-lines.svg"
    }, {
      id: "type-9",
      title: Object(a.__)("Rain", "blocksy"),
      src: "patterns/rain.svg"
    }, {
      id: "type-10",
      title: Object(a.__)("Stripes", "blocksy"),
      src: "patterns/stripes.svg"
    }, {
      id: "type-11",
      title: Object(a.__)("Diagonal Stripes", "blocksy"),
      src: "patterns/diagonal-stripes.svg"
    }, {
      id: "type-12",
      title: Object(a.__)("Intersecting Circles", "blocksy"),
      src: "patterns/intersecting-circles.svg"
    }, {
      id: "type-13",
      title: Object(a.__)("Bank Note", "blocksy"),
      src: "patterns/bank-note.svg"
    }, {
      id: "type-14",
      title: Object(a.__)("Zig Zag", "blocksy"),
      src: "patterns/zig-zag.svg"
    }, {
      id: "type-15",
      title: Object(a.__)("Endless Clouds", "blocksy"),
      src: "patterns/endless-clouds.svg"
    }, {
      id: "type-16",
      title: Object(a.__)("Honey Comb", "blocksy"),
      src: "patterns/honey-comb.svg"
    }, {
      id: "type-17",
      title: Object(a.__)("Cross Stripes", "blocksy"),
      src: "patterns/cross-stripes.svg"
    }, {
      id: "type-18",
      title: Object(a.__)("Autumn", "blocksy"),
      src: "patterns/autumn.svg"
    }],
    f = function(e) {
      return (window.ct_localizations || ct_customizer_localizations).static_public_url + "images/".concat(p.find((function(t) {
        return t.id === e
      })).src)
    };
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      o = e.onChange;
    return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("ul", {
      className: "ct-patterns-list"
    }, p.map((function(e) {
      return Object(r.createElement)("li", {
        onClick: function() {
          return o(s({}, n, {
            background_pattern: e.id
          }))
        },
        className: i()({
          active: e.id === n.background_pattern
        }),
        key: e.id,
        title: e.title
      }, Object(r.createElement)("img", {
        src: (window.ct_localizations || ct_customizer_localizations).static_public_url + "images/".concat(e.src)
      }))
    }))), Object(r.createElement)(c.a, {
      value: n.patternColor,
      values: n,
      option: {
        id: "patternColor",
        label: Object(a.__)("Pattern Color", "blocksy"),
        type: "ct-color-picker",
        design: "inline",
        value: t.value.patternColor,
        pickers: [{
          title: Object(a.__)("Initial", "blocksy"),
          id: "default"
        }],
        skipNoColorPill: !0,
        skipArrow: !0
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return o(s({}, n, {
          patternColor: e
        }))
      }
    }))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(26),
    i = n(15),
    a = n(21),
    c = n.n(a),
    l = n(2),
    s = n.n(l);

  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(n, !0).forEach((function(t) {
        f(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      a = e.onChange,
      l = e.picker,
      u = e.onPickingChange,
      d = e.stopTransitioning,
      h = e.innerRef,
      m = e.isTransitioning,
      b = e.isPicking,
      g = Object(r.useRef)();
    return t.inline_modal ? Object(r.createElement)("div", {
      ref: g,
      className: "ct-color-picker-single"
    }, g && g.current && Object(r.createPortal)(Object(r.createElement)(o.default, {
      option: t,
      onChange: a,
      picker: l,
      value: n
    }), g.current.closest(".ct-single-palette") ? g.current.closest(".ct-single-palette").querySelector(".ct-color-modal-wrapper") : g.current.closest(".ct-color-modal-wrapper") ? g.current.closest(".ct-color-modal-wrapper") : g.current.closest(".ct-control").querySelector(".ct-color-modal-wrapper"))) : Object(r.createElement)("div", {
      ref: function(e) {
        g.current = e, h && (h.current = e)
      },
      className: s()("ct-color-picker-single", f({}, "ct-no-color", (n || {}).color === Object(o.getNoColorPropFor)(t)))
    }, Object(r.createElement)("span", {
      tabIndex: "0"
    }, Object(r.createElement)("span", {
      tabIndex: "0",
      onClick: function(e) {
        e.stopPropagation();
        var t = b ? b.split(":")[0] === l.id ? null : "".concat(l.id, ":").concat(b.split(":")[0]) : l.id;
        u(t)
      },
      style: -1 === (n || {}).color.indexOf(Object(o.getNoColorPropFor)(t)) ? {
        background: (n || {}).color
      } : p({}, l.inherit && (n || {}).color !== Object(o.getNoColorPropFor)(t) ? {
        background: l.inherit
      } : {})
    }, Object(r.createElement)("i", {
      className: "ct-tooltip-top"
    }, l.title))), (m === l.id || (b || "").split(":")[0] === l.id) && Object(r.createPortal)(Object(r.createElement)(i.a, {
      items: b,
      onRest: function() {
        return d()
      },
      config: {
        duration: 100,
        easing: c()(.25, .1, .25, 1)
      },
      from: -1 === (b || "").indexOf(":") ? {
        transform: "scale3d(0.95, 0.95, 1)",
        opacity: 0
      } : {
        opacity: 1
      },
      enter: -1 === (b || "").indexOf(":") ? {
        transform: "scale3d(1, 1, 1)",
        opacity: 1
      } : {
        opacity: 1
      },
      leave: -1 === (b || "").indexOf(":") ? {
        transform: "scale3d(0.95, 0.95, 1)",
        opacity: 0
      } : {
        opacity: 1
      }
    }, (function(e) {
      return (e || "").split(":")[0] === l.id && function(e) {
        return Object(r.createElement)(o.default, {
          style: e,
          option: t,
          onChange: a,
          picker: l,
          value: n,
          el: g
        })
      }
    })), g.current.closest(".ct-single-palette") ? g.current.closest(".ct-single-palette").querySelector(".ct-color-modal-wrapper") : g.current.closest(".ct-color-modal-wrapper") ? g.current.closest(".ct-color-modal-wrapper") : g.current.closest(".ct-control").querySelector(".ct-color-modal-wrapper")))
  }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    o = n(60),
    i = n.n(o);

  function a() {
    return (a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function c(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }

  function l(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function s(e) {
    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function f(e) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function d(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function h(e, t) {
    return (h = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var b = {
      nextSibling: null,
      activeComponent: null
    },
    g = function(e) {
      function t() {
        var e, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        return n = function(e, t) {
          return !t || "object" !== s(t) && "function" != typeof t ? d(e) : t
        }(this, (e = f(t)).call.apply(e, [this].concat(o))), m(d(n), "sortable", null), n
      }
      var n, o, g;
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && h(e, t)
      }(t, e), n = t, (o = [{
        key: "componentDidMount",
        value: function() {
          var e = this,
            t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(n, !0).forEach((function(t) {
                  m(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
              }
              return e
            }({}, this.props.options);
          ["onChoose", "onStart", "onEnd", "onAdd", "onUpdate", "onSort", "onRemove", "onFilter", "onMove", "onClone"].forEach((function(n) {
            var r = t[n];
            t[n] = function() {
              for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
              var a = o[0];
              if ("onChoose" === n) b.nextSibling = a.item.nextElementSibling, b.activeComponent = e;
              else if (("onAdd" === n || "onUpdate" === n) && e.props.onChange) {
                var c = e.sortable.toArray(),
                  u = b.activeComponent,
                  p = u.sortable.toArray(),
                  f = b.nextSibling && null !== b.nextSibling.parentNode ? b.nextSibling : null;
                if (a.from.insertBefore(a.item, f), u !== e) {
                  var d = u.props.options || {};
                  "object" === s(d.group) && "clone" === d.group.pull && l(a.item.parentNode.children).filter((function(e) {
                    return e.dataset.id === a.item.dataset.id && e !== a.item
                  })).map((function(e) {
                    return e.remove()
                  })), u.props.onChange && u.props.onChange(p, u.sortable, a)
                }
                e.props.onChange && e.props.onChange(c, e.sortable, a)
              }
              if ("move" === a.type) {
                var h = o[0],
                  m = o[1],
                  g = !r || r(h, m);
                return g
              }
              setTimeout((function() {
                r && r(a)
              }), 0)
            }
          })), this.sortable = i.a.create(this.node, t)
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.sortable && (this.sortable.destroy(), this.sortable = null)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.props,
            n = t.tag,
            o = (t.options, t.onChange, c(t, ["tag", "options", "onChange"]));
          return Object(r.createElement)(n, a({}, o, {
            ref: function(t) {
              return e.node = t
            }
          }))
        }
      }]) && p(n.prototype, o), g && p(n, g), t
    }(r.Component);
  m(g, "defaultProps", {
    options: {},
    tag: "div",
    style: {}
  }), t.a = g
}, function(e, t) {
  e.exports = window.ctEvents
}, function(e, t, n) {
  "use strict";
  n.d(t, "b", (function() {
    return a
  })), n.d(t, "a", (function() {
    return c
  }));
  var r = n(0);

  function o(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var i = Object(r.createContext)(),
    a = (Object(r.createContext)(), function() {
      return Object(r.useContext)(i) || {}
    }),
    c = function() {
      var e = o(Object(r.useState)(wp.customize && wp.customize.previewedDevice ? wp.customize.previewedDevice() : "desktop"), 2),
        t = e[0],
        n = e[1],
        i = function() {
          n(wp.customize && wp.customize.previewedDevice ? "desktop" === wp.customize.previewedDevice() ? "desktop" : "mobile" : "desktop")
        };
      return Object(r.useEffect)((function() {
        if (wp.customize) return setTimeout((function() {
            return wp.customize.previewedDevice.bind(i)
          }), 1e3),
          function() {
            wp.customize && wp.customize.previewedDevice.unbind(i)
          }
      }), []), [t, function(e) {
        n(e), wp.customize && wp.customize.previewedDevice.set(e)
      }]
    }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    o = n(13),
    i = n.n(o),
    a = n(1),
    c = n(2),
    l = n.n(c);
  t.a = function(e) {
    e.disabled, e.className;
    var t = e.value,
      n = e.onBlur,
      o = e.onChange,
      c = e.placeholder,
      s = void 0 === c ? Object(a.__)("Default", "blocksy") : c;
    return Object(r.createElement)("input", {
      type: "text",
      value: t,
      onKeyDown: function(e) {
        i.a.contains([46, 8, 9, 27, 13, 110, 190, 27], e.keyCode) || 65 == e.keyCode && !0 === e.ctrlKey || 109 == e.keyCode || 189 == e.keyCode || 173 == e.keyCode || 67 == e.keyCode && !0 === e.ctrlKey || 88 == e.keyCode && !0 === e.ctrlKey || e.keyCode >= 35 && e.keyCode <= 39 && 38 !== e.keyCode && 40 !== e.keyCode || (38 === e.keyCode && i.a.isNumber(parseInt(t, 10)) && o(parseInt(t, 10) + (e.shiftKey ? 10 : 1), !0), 40 === e.keyCode && i.a.isNumber(parseInt(t, 10)) && o(parseInt(t, 10) - (e.shiftKey ? 10 : 1), !0), (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault())
      },
      onChange: function(e) {
        var t = e.target.value;
        return o(t)
      },
      placeholder: s,
      onBlur: function() {
        return n && n
      },
      className: l()({
        inactive: "auto" === t
      })
    })
  }
}, function(e, t, n) {
  ! function(e, t, n, r) {
    "use strict";

    function o(e, t) {
      return e(t = {
        exports: {}
      }, t.exports), t.exports
    }
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var i = o((function(e) {
        function t() {
          return e.exports = t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }, t.apply(this, arguments)
        }
        e.exports = t
      })),
      a = function(e) {
        if (Array.isArray(e)) return e
      },
      c = function(e, t) {
        var n = [],
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          o = !0, i = e
        } finally {
          try {
            r || null == c.return || c.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      },
      l = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      s = function(e, t) {
        return a(e) || c(e, t) || l()
      },
      u = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      },
      p = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          })))), r.forEach((function(t) {
            u(e, t, n[t])
          }))
        }
        return e
      },
      f = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      };

    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    var h = function(e, t, n) {
        return t && d(e.prototype, t), n && d(e, n), e
      },
      m = o((function(e) {
        function t(e) {
          return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function n(r) {
          return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = n = function(e) {
            return t(e)
          } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
          }, n(r)
        }
        e.exports = n
      })),
      b = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      },
      g = function(e, t) {
        return !t || "object" !== m(t) && "function" != typeof t ? b(e) : t
      },
      v = o((function(e) {
        function t(n) {
          return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }, t(n)
        }
        e.exports = t
      })),
      y = o((function(e) {
        function t(n, r) {
          return e.exports = t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(n, r)
        }
        e.exports = t
      })),
      O = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && y(e, t)
      },
      w = function(e, t, n, r, o, i, a, c) {
        if (void 0 === t) throw new Error("invariant requires an error message argument");
        if (!e) {
          var l;
          if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          else {
            var s = [n, r, o, i, a, c],
              u = 0;
            (l = new Error(t.replace(/%s/g, (function() {
              return s[u++]
            })))).name = "Invariant Violation"
          }
          throw l.framesToPop = 1, l
        }
      },
      j = function() {
        function e() {
          f(this, e), u(this, "refs", {})
        }
        return h(e, [{
          key: "add",
          value: function(e, t) {
            this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
          }
        }, {
          key: "remove",
          value: function(e, t) {
            var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
          }
        }, {
          key: "isActive",
          value: function() {
            return this.active
          }
        }, {
          key: "getActive",
          value: function() {
            var e = this;
            return this.refs[this.active.collection].find((function(t) {
              return t.node.sortableInfo.index == e.active.index
            }))
          }
        }, {
          key: "getIndex",
          value: function(e, t) {
            return this.refs[e].indexOf(t)
          }
        }, {
          key: "getOrderedRefs",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
            return this.refs[e].sort(_)
          }
        }]), e
      }();

    function _(e, t) {
      return e.node.sortableInfo.index - t.node.sortableInfo.index
    }
    var E = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      },
      S = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      },
      k = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      },
      C = function(e) {
        return E(e) || S(e) || k()
      };

    function x(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return Object.keys(e).reduce((function(t, r) {
        return -1 === n.indexOf(r) && (t[r] = e[r]), t
      }), {})
    }
    var P = {
        end: ["touchend", "touchcancel", "mouseup"],
        move: ["touchmove", "mousemove"],
        start: ["touchstart", "mousedown"]
      },
      I = function() {
        if ("undefined" == typeof window || "undefined" == typeof document) return "";
        var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
          t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
        switch (t) {
          case "ms":
            return "ms";
          default:
            return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
        }
      }();

    function D(e, t) {
      Object.keys(t).forEach((function(n) {
        e.style[n] = t[n]
      }))
    }

    function A(e, t) {
      e.style["".concat(I, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)")
    }

    function T(e, t) {
      e.style["".concat(I, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms")
    }

    function N(e, t) {
      for (; e;) {
        if (t(e)) return e;
        e = e.parentNode
      }
      return null
    }

    function M(e, t, n) {
      return Math.max(e, Math.min(n, t))
    }

    function R(e) {
      return "px" === e.substr(-2) ? parseFloat(e) : 0
    }

    function z(e, t) {
      var n = t.displayName || t.name;
      return n ? "".concat(e, "(").concat(n, ")") : e
    }

    function L(e, t) {
      var n = e.getBoundingClientRect();
      return {
        top: n.top + t.top,
        left: n.left + t.left
      }
    }

    function F(e) {
      return e.touches && e.touches.length ? {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      } : e.changedTouches && e.changedTouches.length ? {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      } : {
        x: e.pageX,
        y: e.pageY
      }
    }

    function B(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        left: 0,
        top: 0
      };
      if (e) {
        var r = {
          left: n.left + e.offsetLeft,
          top: n.top + e.offsetTop
        };
        return e.parentNode === t ? r : B(e.parentNode, t, r)
      }
    }

    function V(e) {
      var t = e.lockOffset,
        n = e.width,
        r = e.height,
        o = t,
        i = t,
        a = "px";
      if ("string" == typeof t) {
        var c = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
        w(null !== c, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', t), o = parseFloat(t), i = parseFloat(t), a = c[1]
      }
      return w(isFinite(o) && isFinite(i), "lockOffset value should be a finite. Given %s", t), "%" === a && (o = o * n / 100, i = i * r / 100), {
        x: o,
        y: i
      }
    }

    function H(e) {
      return e instanceof HTMLElement ? function(e) {
        var t = window.getComputedStyle(e),
          n = /(auto|scroll)/;
        return ["overflow", "overflowX", "overflowY"].find((function(e) {
          return n.test(t[e])
        }))
      }(e) ? e : H(e.parentNode) : null
    }
    var U = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      W = {
        Anchor: "A",
        Button: "BUTTON",
        Canvas: "CANVAS",
        Input: "INPUT",
        Option: "OPTION",
        Textarea: "TEXTAREA",
        Select: "SELECT"
      };

    function K(e) {
      var n, o, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        withRef: !1
      };
      return o = n = function(n) {
        function o() {
          return f(this, o), g(this, v(o).apply(this, arguments))
        }
        return O(o, n), h(o, [{
          key: "componentDidMount",
          value: function() {
            r.findDOMNode(this).sortableHandle = !0
          }
        }, {
          key: "getWrappedInstance",
          value: function() {
            return w(a.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
          }
        }, {
          key: "render",
          value: function() {
            var n = a.withRef ? "wrappedInstance" : null;
            return t.createElement(e, i({
              ref: n
            }, this.props))
          }
        }]), o
      }(t.Component), u(n, "displayName", z("sortableHandle", e)), o
    }

    function q(e) {
      return null != e.sortableHandle
    }
    var Y = function() {
        function e(t, n) {
          f(this, e), this.container = t, this.onScrollCallback = n
        }
        return h(e, [{
          key: "clear",
          value: function() {
            clearInterval(this.interval), this.interval = null
          }
        }, {
          key: "update",
          value: function(e) {
            var t = this,
              n = e.translate,
              r = e.minTranslate,
              o = e.maxTranslate,
              i = e.width,
              a = e.height,
              c = {
                x: 0,
                y: 0
              },
              l = {
                x: 1,
                y: 1
              },
              s = 10,
              u = 10,
              p = this.container,
              f = p.scrollTop,
              d = p.scrollLeft,
              h = p.scrollHeight,
              m = p.scrollWidth,
              b = 0 === f,
              g = h - f - p.clientHeight == 0,
              v = 0 === d,
              y = m - d - p.clientWidth == 0;
            n.y >= o.y - a / 2 && !g ? (c.y = 1, l.y = u * Math.abs((o.y - a / 2 - n.y) / a)) : n.x >= o.x - i / 2 && !y ? (c.x = 1, l.x = s * Math.abs((o.x - i / 2 - n.x) / i)) : n.y <= r.y + a / 2 && !b ? (c.y = -1, l.y = u * Math.abs((n.y - a / 2 - r.y) / a)) : n.x <= r.x + i / 2 && !v && (c.x = -1, l.x = s * Math.abs((n.x - i / 2 - r.x) / i)), this.interval && (this.clear(), this.isAutoScrolling = !1), 0 === c.x && 0 === c.y || (this.interval = setInterval((function() {
              t.isAutoScrolling = !0;
              var e = {
                left: l.x * c.x,
                top: l.y * c.y
              };
              t.container.scrollTop += e.top, t.container.scrollLeft += e.left, t.onScrollCallback(e)
            }), 5))
          }
        }]), e
      }(),
      G = {
        axis: n.oneOf(["x", "y", "xy"]),
        contentWindow: n.any,
        disableAutoscroll: n.bool,
        distance: n.number,
        getContainer: n.func,
        getHelperDimensions: n.func,
        helperClass: n.string,
        helperContainer: n.oneOfType([n.func, "undefined" == typeof HTMLElement ? n.any : n.instanceOf(HTMLElement)]),
        hideSortableGhost: n.bool,
        keyboardSortingTransitionDuration: n.number,
        lockAxis: n.string,
        lockOffset: n.oneOfType([n.number, n.string, n.arrayOf(n.oneOfType([n.number, n.string]))]),
        lockToContainerEdges: n.bool,
        onSortEnd: n.func,
        onSortMove: n.func,
        onSortOver: n.func,
        onSortStart: n.func,
        pressDelay: n.number,
        pressThreshold: n.number,
        shouldCancelStart: n.func,
        transitionDuration: n.number,
        updateBeforeSortStart: n.func,
        useDragHandle: n.bool,
        useWindowAsScrollContainer: n.bool
      },
      X = {
        axis: "y",
        disableAutoscroll: !1,
        distance: 0,
        getHelperDimensions: function(e) {
          var t = e.node;
          return {
            height: t.offsetHeight,
            width: t.offsetWidth
          }
        },
        hideSortableGhost: !0,
        lockOffset: "50%",
        lockToContainerEdges: !1,
        pressDelay: 0,
        pressThreshold: 5,
        shouldCancelStart: function(e) {
          return -1 !== [W.Input, W.Textarea, W.Select, W.Option, W.Button].indexOf(e.target.tagName) || !!N(e.target, (function(e) {
            return "true" === e.contentEditable
          }))
        },
        transitionDuration: 300,
        useWindowAsScrollContainer: !1
      },
      $ = Object.keys(G);

    function Z(e) {
      var o, a, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        withRef: !1
      };
      return a = o = function(n) {
        function o(e) {
          var t;
          return f(this, o), t = g(this, v(o).call(this, e)), u(b(b(t)), "handleStart", (function(e) {
              var n = t.props,
                r = n.distance,
                o = n.shouldCancelStart;
              if (2 !== e.button && !o(e)) {
                t.touched = !0, t.position = F(e);
                var i = N(e.target, (function(e) {
                  return null != e.sortableInfo
                }));
                if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
                  var a = t.props.useDragHandle,
                    c = i.sortableInfo,
                    l = c.index,
                    s = c.collection;
                  if (c.disabled) return;
                  if (a && !N(e.target, q)) return;
                  t.manager.active = {
                      collection: s,
                      index: l
                    },
                    function(e) {
                      return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length
                    }(e) || e.target.tagName !== W.Anchor || e.preventDefault(), r || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout((function() {
                      return t.handlePress(e)
                    }), t.props.pressDelay))
                }
              }
            })), u(b(b(t)), "nodeIsChild", (function(e) {
              return e.sortableInfo.manager === t.manager
            })), u(b(b(t)), "handleMove", (function(e) {
              var n = t.props,
                r = n.distance,
                o = n.pressThreshold;
              if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
                var i = F(e),
                  a = {
                    x: t.position.x - i.x,
                    y: t.position.y - i.y
                  },
                  c = Math.abs(a.x) + Math.abs(a.y);
                t.delta = a, r || o && !(c >= o) ? r && c >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
              }
            })), u(b(b(t)), "handleEnd", (function() {
              t.touched = !1, t.cancel()
            })), u(b(b(t)), "cancel", (function() {
              var e = t.props.distance;
              t.state.sorting || (e || clearTimeout(t.pressTimer), t.manager.active = null)
            })), u(b(b(t)), "handlePress", (function(e) {
              try {
                var n = t.manager.getActive(),
                  r = function() {
                    if (n) {
                      var r = function() {
                          var n, r, o, s, b, g, v = d.sortableInfo.index,
                            y = (n = d, {
                              bottom: R((r = window.getComputedStyle(n)).marginBottom),
                              left: R(r.marginLeft),
                              right: R(r.marginRight),
                              top: R(r.marginTop)
                            }),
                            O = t.scrollContainer.getBoundingClientRect(),
                            w = a({
                              collection: h,
                              index: v,
                              node: d
                            });
                          if (t.node = d, t.margin = y, t.width = w.width, t.height = w.height, t.marginOffset = {
                              x: t.margin.left + t.margin.right,
                              y: Math.max(t.margin.top, t.margin.bottom)
                            }, t.boundingClientRect = d.getBoundingClientRect(), t.containerBoundingRect = O, t.index = v, t.newIndex = v, t.axis = {
                              x: i.indexOf("x") >= 0,
                              y: i.indexOf("y") >= 0
                            }, t.offsetEdge = B(d, t.container), t.initialOffset = F(m ? p({}, e, {
                              pageX: t.boundingClientRect.left,
                              pageY: t.boundingClientRect.top
                            }) : e), t.initialScroll = {
                              left: t.scrollContainer.scrollLeft,
                              top: t.scrollContainer.scrollTop
                            }, t.initialWindowScroll = {
                              left: window.pageXOffset,
                              top: window.pageYOffset
                            }, t.helper = t.helperContainer.appendChild((s = "input, textarea, select, canvas, [contenteditable]", b = (o = d).querySelectorAll(s), g = o.cloneNode(!0), C(g.querySelectorAll(s)).forEach((function(e, t) {
                              "file" !== e.type && (e.value = b[t].value), "radio" === e.type && e.name && (e.name = "__sortableClone__".concat(e.name)), e.tagName === W.Canvas && b[t].width > 0 && b[t].height > 0 && e.getContext("2d").drawImage(b[t], 0, 0)
                            })), g)), D(t.helper, {
                              boxSizing: "border-box",
                              height: "".concat(t.height, "px"),
                              left: "".concat(t.boundingClientRect.left - y.left, "px"),
                              pointerEvents: "none",
                              position: "fixed",
                              top: "".concat(t.boundingClientRect.top - y.top, "px"),
                              width: "".concat(t.width, "px")
                            }), m && t.helper.focus(), l && (t.sortableGhost = d, D(d, {
                              opacity: 0,
                              visibility: "hidden"
                            })), t.minTranslate = {}, t.maxTranslate = {}, m) {
                            var j = f ? {
                                top: 0,
                                left: 0,
                                width: t.contentWindow.innerWidth,
                                height: t.contentWindow.innerHeight
                              } : t.containerBoundingRect,
                              _ = j.top,
                              E = j.left,
                              S = j.width,
                              k = _ + j.height,
                              x = E + S;
                            t.axis.x && (t.minTranslate.x = E - t.boundingClientRect.left, t.maxTranslate.x = x - (t.boundingClientRect.left + t.width)), t.axis.y && (t.minTranslate.y = _ - t.boundingClientRect.top, t.maxTranslate.y = k - (t.boundingClientRect.top + t.height))
                          } else t.axis.x && (t.minTranslate.x = (f ? 0 : O.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (f ? t.contentWindow.innerWidth : O.left + O.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (f ? 0 : O.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (f ? t.contentWindow.innerHeight : O.top + O.height) - t.boundingClientRect.top - t.height / 2);
                          c && c.split(" ").forEach((function(e) {
                            return t.helper.classList.add(e)
                          })), t.listenerNode = e.touches ? d : t.contentWindow, m ? (t.listenerNode.addEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.addEventListener("keydown", t.handleKeyDown)) : (P.move.forEach((function(e) {
                            return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                          })), P.end.forEach((function(e) {
                            return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                          }))), t.setState({
                            sorting: !0,
                            sortingIndex: v
                          }), u && u({
                            node: d,
                            index: v,
                            collection: h,
                            isKeySorting: m
                          }, e), m && t.keyMove(0)
                        },
                        o = t.props,
                        i = o.axis,
                        a = o.getHelperDimensions,
                        c = o.helperClass,
                        l = o.hideSortableGhost,
                        s = o.updateBeforeSortStart,
                        u = o.onSortStart,
                        f = o.useWindowAsScrollContainer,
                        d = n.node,
                        h = n.collection,
                        m = t.manager.isKeySorting,
                        b = function() {
                          if ("function" == typeof s) {
                            t._awaitingUpdateBeforeSortStart = !0;
                            var n = function(e, t) {
                              try {
                                var n = e()
                              } catch (e) {
                                return t(!0, e)
                              }
                              return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value)
                            }((function() {
                              var t = d.sortableInfo.index;
                              return Promise.resolve(s({
                                collection: h,
                                index: t,
                                node: d,
                                isKeySorting: m
                              }, e)).then((function() {}))
                            }), (function(e, n) {
                              if (t._awaitingUpdateBeforeSortStart = !1, e) throw n;
                              return n
                            }));
                            if (n && n.then) return n.then((function() {}))
                          }
                        }();
                      return b && b.then ? b.then(r) : r()
                    }
                  }();
                return Promise.resolve(r && r.then ? r.then((function() {})) : void 0)
              } catch (e) {
                return Promise.reject(e)
              }
            })), u(b(b(t)), "handleSortMove", (function(e) {
              var n = t.props.onSortMove;
              "function" == typeof e.preventDefault && e.preventDefault(), t.updateHelperPosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
            })), u(b(b(t)), "handleSortEnd", (function(e) {
              var n = t.props,
                r = n.hideSortableGhost,
                o = n.onSortEnd,
                i = t.manager,
                a = i.active.collection,
                c = i.isKeySorting,
                l = t.manager.refs[a];
              t.listenerNode && (c ? (t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("keydown", t.handleKeyDown)) : (P.move.forEach((function(e) {
                return t.listenerNode.removeEventListener(e, t.handleSortMove)
              })), P.end.forEach((function(e) {
                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
              })))), t.helper.parentNode.removeChild(t.helper), r && t.sortableGhost && D(t.sortableGhost, {
                opacity: "",
                visibility: ""
              });
              for (var s = 0, u = l.length; s < u; s++) {
                var p = l[s],
                  f = p.node;
                p.edgeOffset = null, p.boundingClientRect = null, A(f, null), T(f, null), p.translate = null
              }
              t.autoScroller.clear(), t.manager.active = null, t.manager.isKeySorting = !1, t.setState({
                sorting: !1,
                sortingIndex: null
              }), "function" == typeof o && o({
                collection: a,
                newIndex: t.newIndex,
                oldIndex: t.index,
                isKeySorting: c
              }, e), t.touched = !1
            })), u(b(b(t)), "autoscroll", (function() {
              var e = t.props.disableAutoscroll,
                n = t.manager.isKeySorting;
              if (!e) {
                if (n) {
                  var r = p({}, t.translate),
                    o = 0,
                    i = 0;
                  return t.axis.x && (r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x)), o = t.translate.x - r.x), t.axis.y && (r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y)), i = t.translate.y - r.y), t.translate = r, A(t.helper, t.translate), t.scrollContainer.scrollLeft += o, void(t.scrollContainer.scrollTop += i)
                }
                t.autoScroller.update({
                  height: t.height,
                  maxTranslate: t.maxTranslate,
                  minTranslate: t.minTranslate,
                  translate: t.translate,
                  width: t.width
                })
              }
            })), u(b(b(t)), "onAutoScroll", (function(e) {
              t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
            })), u(b(b(t)), "handleKeyDown", (function(e) {
              var n = e.keyCode,
                r = t.props.shouldCancelStart;
              if ((!t.manager.active || t.manager.isKeySorting) && (t.manager.active || n === U.SPACE && !r(e) && t.isValidSortingTarget(e))) switch (e.stopPropagation(), e.preventDefault(), n) {
                case U.SPACE:
                  t.manager.active ? t.keyDrop(e) : t.keyLift(e);
                  break;
                case U.DOWN:
                case U.RIGHT:
                  t.keyMove(1);
                  break;
                case U.UP:
                case U.LEFT:
                  t.keyMove(-1);
                  break;
                case U.ESC:
                  t.newIndex = t.manager.active.index, t.keyDrop(e)
              }
            })), u(b(b(t)), "keyLift", (function(e) {
              var n = e.target,
                r = N(n, (function(e) {
                  return null != e.sortableInfo
                })).sortableInfo,
                o = r.index,
                i = r.collection;
              t.initialFocusedNode = n, t.manager.isKeySorting = !0, t.manager.active = {
                index: o,
                collection: i
              }, t.handlePress(e)
            })), u(b(b(t)), "keyMove", (function(e) {
              var n = t.manager.getOrderedRefs(),
                r = n[n.length - 1].node.sortableInfo.index,
                o = t.newIndex + e,
                i = t.newIndex;
              if (!(o < 0 || o > r)) {
                t.prevIndex = i, t.newIndex = o;
                var a = function(e, t, n) {
                    return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e
                  }(t.newIndex, t.prevIndex, t.index),
                  c = n.find((function(e) {
                    return e.node.sortableInfo.index === a
                  })),
                  l = c.node,
                  s = t.containerScrollDelta,
                  u = c.boundingClientRect || L(l, s),
                  p = c.translate || {
                    x: 0,
                    y: 0
                  },
                  f = u.top + p.y - s.top,
                  d = u.left + p.x - s.left,
                  h = i < o,
                  m = h && t.axis.x ? l.offsetWidth - t.width : 0,
                  b = h && t.axis.y ? l.offsetHeight - t.height : 0;
                t.handleSortMove({
                  pageX: d + m,
                  pageY: f + b,
                  ignoreTransition: 0 === e
                })
              }
            })), u(b(b(t)), "keyDrop", (function(e) {
              t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus()
            })), u(b(b(t)), "handleKeyEnd", (function(e) {
              t.manager.active && t.keyDrop(e)
            })), u(b(b(t)), "isValidSortingTarget", (function(e) {
              var n = t.props.useDragHandle,
                r = e.target,
                o = N(r, (function(e) {
                  return null != e.sortableInfo
                }));
              return o && o.sortableInfo && !o.sortableInfo.disabled && (n ? q(r) : r.sortableInfo)
            })),
            function(e) {
              w(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")
            }(e), t.state = {}, t.manager = new j, t.events = {
              end: t.handleEnd,
              move: t.handleMove,
              start: t.handleStart
            }, t
        }
        return O(o, n), h(o, [{
          key: "getChildContext",
          value: function() {
            return {
              manager: this.manager
            }
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var e = this,
              t = this.props.useWindowAsScrollContainer,
              n = this.getContainer();
            Promise.resolve(n).then((function(n) {
              e.container = n, e.document = e.container.ownerDocument || document;
              var r = e.props.contentWindow || e.document.defaultView || window;
              e.contentWindow = "function" == typeof r ? r() : r, e.scrollContainer = t ? e.document.scrollingElement || e.document.documentElement : H(e.container) || e.container, e.autoScroller = new Y(e.scrollContainer, e.onAutoScroll), Object.keys(e.events).forEach((function(t) {
                return P[t].forEach((function(n) {
                  return e.container.addEventListener(n, e.events[t], !1)
                }))
              })), e.container.addEventListener("keydown", e.handleKeyDown)
            }))
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            var e = this;
            this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper), this.container && (Object.keys(this.events).forEach((function(t) {
              return P[t].forEach((function(n) {
                return e.container.removeEventListener(n, e.events[t])
              }))
            })), this.container.removeEventListener("keydown", this.handleKeyDown))
          }
        }, {
          key: "updateHelperPosition",
          value: function(e) {
            var t = this.props,
              n = t.lockAxis,
              r = t.lockOffset,
              o = t.lockToContainerEdges,
              i = t.transitionDuration,
              a = t.keyboardSortingTransitionDuration,
              c = void 0 === a ? i : a,
              l = this.manager.isKeySorting,
              u = e.ignoreTransition,
              p = F(e),
              f = {
                x: p.x - this.initialOffset.x,
                y: p.y - this.initialOffset.y
              };
            if (f.y -= window.pageYOffset - this.initialWindowScroll.top, f.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = f, o) {
              var d = function(e) {
                  var t = e.height,
                    n = e.width,
                    r = e.lockOffset,
                    o = Array.isArray(r) ? r : [r, r];
                  w(2 === o.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", r);
                  var i = s(o, 2),
                    a = i[0],
                    c = i[1];
                  return [V({
                    height: t,
                    lockOffset: a,
                    width: n
                  }), V({
                    height: t,
                    lockOffset: c,
                    width: n
                  })]
                }({
                  height: this.height,
                  lockOffset: r,
                  width: this.width
                }),
                h = s(d, 2),
                m = h[0],
                b = h[1],
                g = {
                  x: this.width / 2 - m.x,
                  y: this.height / 2 - m.y
                },
                v = {
                  x: this.width / 2 - b.x,
                  y: this.height / 2 - b.y
                };
              f.x = M(this.minTranslate.x + g.x, this.maxTranslate.x - v.x, f.x), f.y = M(this.minTranslate.y + g.y, this.maxTranslate.y - v.y, f.y)
            }
            "x" === n ? f.y = 0 : "y" === n && (f.x = 0), l && c && !u && T(this.helper, c), A(this.helper, f)
          }
        }, {
          key: "animateNodes",
          value: function() {
            var e = this.props,
              t = e.transitionDuration,
              n = e.hideSortableGhost,
              r = e.onSortOver,
              o = this.containerScrollDelta,
              i = this.windowScrollDelta,
              a = this.manager.getOrderedRefs(),
              c = this.offsetEdge.left + this.translate.x + o.left,
              l = this.offsetEdge.top + this.translate.y + o.top,
              s = this.manager.isKeySorting,
              u = this.newIndex;
            this.newIndex = null;
            for (var p = 0, f = a.length; p < f; p++) {
              var d = a[p].node,
                h = d.sortableInfo.index,
                m = d.offsetWidth,
                b = d.offsetHeight,
                g = {
                  height: this.height > b ? b / 2 : this.height / 2,
                  width: this.width > m ? m / 2 : this.width / 2
                },
                v = s && h > this.index && h <= u,
                y = s && h < this.index && h >= u,
                O = {
                  x: 0,
                  y: 0
                },
                w = a[p].edgeOffset;
              w || (w = B(d, this.container), a[p].edgeOffset = w, s && (a[p].boundingClientRect = L(d, o)));
              var j = p < a.length - 1 && a[p + 1],
                _ = p > 0 && a[p - 1];
              j && !j.edgeOffset && (j.edgeOffset = B(j.node, this.container), s && (j.boundingClientRect = L(j.node, o))), h !== this.index ? (t && T(d, t), this.axis.x ? this.axis.y ? y || h < this.index && (c + i.left - g.width <= w.left && l + i.top <= w.top + g.height || l + i.top + g.height <= w.top) ? (O.x = this.width + this.marginOffset.x, w.left + O.x > this.containerBoundingRect.width - g.width && j && (O.x = j.edgeOffset.left - w.left, O.y = j.edgeOffset.top - w.top), null === this.newIndex && (this.newIndex = h)) : (v || h > this.index && (c + i.left + g.width >= w.left && l + i.top + g.height >= w.top || l + i.top + g.height >= w.top + b)) && (O.x = -(this.width + this.marginOffset.x), w.left + O.x < this.containerBoundingRect.left + g.width && _ && (O.x = _.edgeOffset.left - w.left, O.y = _.edgeOffset.top - w.top), this.newIndex = h) : v || h > this.index && c + i.left + g.width >= w.left ? (O.x = -(this.width + this.marginOffset.x), this.newIndex = h) : (y || h < this.index && c + i.left <= w.left + g.width) && (O.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = h)) : this.axis.y && (v || h > this.index && l + i.top + g.height >= w.top ? (O.y = -(this.height + this.marginOffset.y), this.newIndex = h) : (y || h < this.index && l + i.top <= w.top + g.height) && (O.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = h))), A(d, O), a[p].translate = O) : n && (this.sortableGhost = d, D(d, {
                opacity: 0,
                visibility: "hidden"
              }))
            }
            null == this.newIndex && (this.newIndex = this.index), s && (this.newIndex = u);
            var E = s ? this.prevIndex : u;
            r && this.newIndex !== E && r({
              collection: this.manager.active.collection,
              index: this.index,
              newIndex: this.newIndex,
              oldIndex: E,
              isKeySorting: s
            })
          }
        }, {
          key: "getWrappedInstance",
          value: function() {
            return w(c.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
          }
        }, {
          key: "getContainer",
          value: function() {
            var e = this.props.getContainer;
            return "function" != typeof e ? r.findDOMNode(this) : e(c.withRef ? this.getWrappedInstance() : void 0)
          }
        }, {
          key: "render",
          value: function() {
            var n = c.withRef ? "wrappedInstance" : null;
            return t.createElement(e, i({
              ref: n
            }, x(this.props, $)))
          }
        }, {
          key: "helperContainer",
          get: function() {
            var e = this.props.helperContainer;
            return "function" == typeof e ? e() : this.props.helperContainer || this.document.body
          }
        }, {
          key: "containerScrollDelta",
          get: function() {
            return this.props.useWindowAsScrollContainer ? {
              left: 0,
              top: 0
            } : {
              left: this.scrollContainer.scrollLeft - this.initialScroll.left,
              top: this.scrollContainer.scrollTop - this.initialScroll.top
            }
          }
        }, {
          key: "windowScrollDelta",
          get: function() {
            return {
              left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
              top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
            }
          }
        }]), o
      }(t.Component), u(o, "displayName", z("sortableList", e)), u(o, "defaultProps", X), u(o, "propTypes", G), u(o, "childContextTypes", {
        manager: n.object.isRequired
      }), a
    }
    var J = {
        index: n.number.isRequired,
        collection: n.oneOfType([n.number, n.string]),
        disabled: n.bool
      },
      Q = Object.keys(J);

    function ee(e) {
      var o, a, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        withRef: !1
      };
      return a = o = function(n) {
        function o() {
          return f(this, o), g(this, v(o).apply(this, arguments))
        }
        return O(o, n), h(o, [{
          key: "componentDidMount",
          value: function() {
            this.register()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.node && (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index), e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)), e.collection !== this.props.collection && (this.unregister(e.collection), this.register())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.unregister()
          }
        }, {
          key: "register",
          value: function() {
            var e = this.props,
              t = e.collection,
              n = e.disabled,
              o = e.index,
              i = r.findDOMNode(this);
            i.sortableInfo = {
              collection: t,
              disabled: n,
              index: o,
              manager: this.context.manager
            }, this.node = i, this.ref = {
              node: i
            }, this.context.manager.add(t, this.ref)
          }
        }, {
          key: "unregister",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection;
            this.context.manager.remove(e, this.ref)
          }
        }, {
          key: "getWrappedInstance",
          value: function() {
            return w(c.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
          }
        }, {
          key: "render",
          value: function() {
            var n = c.withRef ? "wrappedInstance" : null;
            return t.createElement(e, i({
              ref: n
            }, x(this.props, Q)))
          }
        }]), o
      }(t.Component), u(o, "displayName", z("sortableElement", e)), u(o, "contextTypes", {
        manager: n.object.isRequired
      }), u(o, "propTypes", J), u(o, "defaultProps", {
        collection: 0
      }), a
    }
    e.SortableContainer = Z, e.sortableContainer = Z, e.SortableElement = ee, e.sortableElement = ee, e.SortableHandle = K, e.sortableHandle = K, e.arrayMove = function(e, t, n) {
      return "undefined" != typeof console && console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move"), (e = e.slice()).splice(n < 0 ? e.length + n : n, 0, e.splice(t, 1)[0]), e
    }, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }(t, n(4), n(39), n(43))
}, function(e, t) {
  var n, r;
  n = jQuery, r = {
      options: {
        defaultColor: !1,
        change: !1,
        clear: !1,
        hide: !1,
        palettes: !1,
        width: 300,
        mode: "hsv",
        type: "full",
        slider: "horizontal"
      },
      _create: function() {
        if (n.support.iris) {
          var e = this,
            t = e.element;
          n.extend(e.options, t.data()), e.close = n.proxy(e.close, e), e.initialValue = t.val(), t.addClass("wp-color-picker"), e.pickerContainer = n('<div class="wp-picker-holder" />').insertBefore(t.closest(".ct-color-picker-bottom")), e.wrap = t.parent().prev(".wp-picker-container"), t.iris({
            target: e.pickerContainer,
            hide: !1,
            width: 230,
            mode: e.options.mode,
            palettes: !1,
            change: function(t, r) {
              n.isFunction(e.options.change) && e.options.change.call(this, t, r)
            }
          }), t.val(e.initialValue), e._addListeners()
        }
      },
      _addListeners: function() {
        var e = this;
        e.wrap.on("click.wpcolorpicker", (function(e) {})), e.element.change((function(t) {
          var r = n(this).val();
          "" !== r && "#" !== r || n.isFunction(e.options.clear) && e.options.clear.call(this, t)
        }))
      },
      open: function() {
        this.element.show().iris("toggle").focus(), this.wrap.addClass("wp-picker-active"), n("body").trigger("click.wpcolorpicker").on("click.wpcolorpicker", this.close)
      },
      close: function() {
        this.element.iris("toggle"), this.wrap.removeClass("wp-picker-active"), n("body").off("click.wpcolorpicker", this.close)
      },
      color: function(e) {
        if (void 0 === e) return this.element.iris("option", "color");
        this.element.iris("option", "color", e)
      },
      defaultColor: function(e) {
        if (void 0 === e) return this.options.defaultColor;
        this.options.defaultColor = e
      }
    }, n.widget("wp.ctColorPicker", r),
    function(e) {
      window.Color && (Color.fn.toString = function() {
        if (this._alpha < 1) return this.toCSS("rgba", this._alpha).replace(/\s+/g, "");
        var e = parseInt(this._color, 10).toString(16);
        if (this.error) return "";
        if (e.length < 6)
          for (var t = 6 - e.length - 1; t >= 0; t--) e = "0" + e;
        return "#" + e
      }, Color.fn.isDark = function() {
        var e, t, n, r, o = this.toRgb();
        return e = o.r, t = o.g, n = o.b, r = this._alpha, (299 * e + 587 * t + 114 * n) / 1e3 < 128 && r > .4
      }, e.widget("wp.ctColorPicker", e.wp.ctColorPicker, {
        _addListeners: function() {
          this.wrap.on("click.wpcolorpicker", (function(e) {}))
        }
      }), e.widget("a8c.iris", e.a8c.iris, {
        _create: function() {
          if (this._super(), this.options.alpha = !0, this.element.is(":input"), void 0 !== this.options.alpha && this.options.alpha) {
            var t = this,
              n = (t.element, e('<div class="iris-strip iris-slider iris-alpha-slider"><div class="iris-slider-offset iris-slider-offset-alpha"></div></div>').appendTo(t.picker.find(".iris-picker-inner"))),
              r = n.find(".iris-slider-offset-alpha"),
              o = {
                aContainer: n,
                aSlider: r
              };
            e.each(o, (function(e, n) {
              t.controls[e] = n
            })), t._initControls(), t._change()
          }
        },
        _initControls: function() {
          if (this._super(), this.controls.square.append(jQuery('<div class="iris-square-inner-wrapper"></div>').css({
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            })), this.controls.squareDrag.draggable("option", "containment", this.controls.square.find(".iris-square-inner-wrapper")), this.options.alpha) {
            var e = this;
            e.controls.aSlider.slider({
              orientation: "vertical",
              min: 0,
              max: 100,
              step: 1,
              value: parseInt(100 * e._color._alpha),
              slide: function(t, n) {
                e._color._alpha = parseFloat(n.value / 100), e._change.apply(e, arguments), e.element.trigger("ctalphasliderchange")
              }
            })
          }
        },
        _change: function() {
          this._super();
          var e = this,
            t = e.element;
          if (t.change(), this.options.alpha) {
            var n = e.controls,
              r = parseInt(100 * e._color._alpha),
              o = e._color.toRgb(),
              i = ["rgb(" + o.r + "," + o.g + "," + o.b + ") 0%", "rgba(" + o.r + "," + o.g + "," + o.b + ", 0) 100%"];
            e.options.defaultWidth, e.options.customWidth, e.picker.closest(".wp-picker-container").find(".wp-color-result");
            if (n.aContainer.css({
                background: "linear-gradient(to bottom, " + i.join(", ") + "), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==)"
              }), n.aSlider.slider("value", r), e._color._alpha < 1) {
              var a = n.strip.attr("style").replace(/rgba\(([0-9]+,)(\s+)?([0-9]+,)(\s+)?([0-9]+)(,(\s+)?[0-9\.]+)\)/g, "rgb($1$3$5)");
              n.strip.attr("style", a)
            }
          }(t.data("reset-alpha") || !1) && e.picker.find(".iris-palette-container").on("click.palette", ".iris-palette", (function() {
            e._color._alpha = 1, e.active = "external", e._change()
          }))
        },
        _addInputListeners: function(e) {
          var t = this,
            n = function(n) {
              var r = new Color(e.val()),
                o = e.val();
              e.removeClass("iris-error"), r.error ? "" !== o ? e.addClass("iris-error") : e.css("background-color", "") : r.toString() !== t._color.toString() && ("keyup" === n.type && o.match(/^[0-9a-fA-F]{3}$/) || t._setOption("color", r.toString()))
            };
          e.on("change", n).on("keyup", t._debounce(n, 100))
        }
      }))
    }(jQuery)
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  e.exports = n(72)()
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(1),
    c = n(9),
    l = n(30),
    s = n(41);

  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(n, !0).forEach((function(t) {
        f(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      o = (e.isOpen, e.innerRef, e.placement, e.onChange),
      u = e.setOutsideClickFreezed;
    return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("ul", {
      className: "ct-background-type",
      onMouseUp: function(e) {
        e.preventDefault()
      }
    }, ["color", "pattern", "image"].map((function(e) {
      return Object(r.createElement)("li", {
        "data-type": e,
        key: e,
        className: i()({
          active: e === n.background_type
        }),
        onClick: function() {
          return o(p({}, n, {
            background_type: e
          }))
        }
      }, {
        color: Object(a.__)("Color", "blocksy"),
        pattern: Object(a.__)("Pattern", "blocksy"),
        image: Object(a.__)("Image", "blocksy")
      } [e])
    }))), Object(r.createElement)("div", {
      className: i()({
        "ct-image-tab": "image" === n.background_type,
        "ct-patterns-tab": "pattern" === n.background_type,
        "ct-color-tab": "color" === n.background_type
      })
    }, "pattern" === n.background_type && Object(r.createElement)(l.default, {
      option: t,
      onChange: o,
      value: n
    }), "image" === n.background_type && Object(r.createElement)(s.default, {
      setOutsideClickFreezed: u,
      option: t,
      onChange: o,
      value: n
    }), Object(r.createElement)(c.a, {
      value: n.backgroundColor,
      values: n,
      option: {
        id: "backgroundColor",
        label: "color" !== n.background_type && Object(a.__)("Background Color", "blocksy"),
        type: "ct-color-picker",
        skipNoColorPill: !0,
        design: "inline",
        value: t.value.backgroundColor,
        pickers: [{
          title: Object(a.__)("Initial", "blocksy"),
          id: "default"
        }],
        inline_modal: "color" === n.background_type,
        skipArrow: !0
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return o(p({}, n, {
          backgroundColor: e
        }))
      }
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = (n(2), n(1)),
    i = n(9);

  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(n, !0).forEach((function(t) {
        l(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      a = e.onChange,
      l = e.setOutsideClickFreezed;
    return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(i.a, {
      value: n.background_image,
      values: n,
      option: {
        id: "background_image",
        label: !1,
        type: "ct-image-uploader",
        value: t.value.background_image,
        has_position_picker: !0,
        emptyLabel: Object(o.__)("Select Image", "blocksy"),
        filledLabel: Object(o.__)("Change Image", "blocksy"),
        onFrameOpen: function() {
          l(!0)
        },
        onFrameClose: function() {
          l(!1)
        }
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return a(c({}, n, {
          background_image: e
        }))
      }
    }), Object(r.createElement)(i.a, {
      value: n.background_repeat,
      values: n,
      option: {
        id: "background_repeat",
        label: Object(o.__)("Background Repeat", "blocksy"),
        attr: {
          "data-type": "repeat"
        },
        type: "ct-radio",
        view: "text",
        design: "block",
        value: t.value.background_repeat,
        choices: {
          "no-repeat": '<svg viewBox="0 0 16 16"><rect x="6" y="6" width="4" height="4"/></svg>',
          "repeat-x": '<svg viewBox="0 0 16 16"><rect y="6" width="4" height="4"/><rect x="6" y="6" width="4" height="4"/><rect x="12" y="6" width="4" height="4"/></svg>',
          "repeat-y": '<svg viewBox="0 0 16 16"><rect x="6" width="4" height="4"/><rect x="6" y="6" width="4" height="4"/><rect x="6" y="12" width="4" height="4"/></svg>',
          repeat: '<svg viewBox="0 0 16 16"><path d="M0,0h4v4H0V0z M6,0h4v4H6V0z M12,0h4v4h-4V0z M0,6h4v4H0V6z M6,6h4v4H6V6z M12,6h4v4h-4V6z M0,12h4v4H0V12z M6,12h4v4H6V12zM12,12h4v4h-4V12z"/></svg>'
        }
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return a(c({}, n, {
          background_repeat: e
        }))
      }
    }), Object(r.createElement)(i.a, {
      value: n.background_size,
      values: n,
      option: {
        id: "background_size",
        label: Object(o.__)("Background Size", "blocksy"),
        type: "ct-radio",
        view: "text",
        design: "block",
        value: t.value.background_size,
        choices: {
          auto: Object(o.__)("Auto", "blocksy"),
          cover: Object(o.__)("Cover", "blocksy"),
          contain: Object(o.__)("Contain", "blocksy")
        }
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return a(c({}, n, {
          background_size: e
        }))
      }
    }), Object(r.createElement)(i.a, {
      value: n.background_attachment,
      values: n,
      option: {
        id: "background_size",
        label: Object(o.__)("Background Attachment", "blocksy"),
        type: "ct-radio",
        view: "text",
        design: "block",
        value: t.value.background_attachment,
        choices: {
          scroll: Object(o.__)("Scroll", "blocksy"),
          fixed: Object(o.__)("Fixed", "blocksy"),
          inherit: Object(o.__)("Inherit", "blocksy")
        }
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return a(c({}, n, {
          background_attachment: e
        }))
      }
    }))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(15),
    i = n(21),
    a = n.n(i),
    c = n(2),
    l = n.n(c),
    s = n(9),
    u = n(1);

  function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(n, !0).forEach((function(t) {
        d(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      i = e.onChange,
      c = e.picker,
      p = (e.onPickingChange, e.stopTransitioning),
      d = e.el,
      h = e.isTransitioning,
      m = e.isPicking;
    return (h === c.id || (m || "").split(":")[0] === c.id) && Object(r.createPortal)(Object(r.createElement)(o.a, {
      items: m,
      onRest: function(e) {
        return p()
      },
      config: {
        duration: 100,
        easing: a()(.25, .1, .25, 1)
      },
      from: -1 === (m || "").indexOf(":") ? {
        transform: "scale3d(0.95, 0.95, 1)",
        opacity: 0
      } : {
        opacity: 1
      },
      enter: -1 === (m || "").indexOf(":") ? {
        transform: "scale3d(1, 1, 1)",
        opacity: 1
      } : {
        opacity: 1
      },
      leave: -1 === (m || "").indexOf(":") ? {
        transform: "scale3d(0.95, 0.95, 1)",
        opacity: 0
      } : {
        opacity: 1
      }
    }, (function(e) {
      return (e || "").split(":")[0] === c.id && function(e) {
        return Object(r.createElement)("div", {
          style: e,
          className: "ct-box-shadow-modal",
          onClick: function(e) {
            e.preventDefault(), e.stopPropagation()
          },
          onMouseDownCapture: function(e) {
            e.nativeEvent.stopImmediatePropagation(), e.nativeEvent.stopPropagation()
          },
          onMouseUpCapture: function(e) {
            e.nativeEvent.stopImmediatePropagation(), e.nativeEvent.stopPropagation()
          }
        }, Object(r.createElement)("div", {
          className: "shadow-sliders"
        }, Object(r.createElement)(s.a, {
          value: n.h_offset,
          values: n,
          id: "h_offset",
          option: {
            id: "h_offset",
            label: Object(u.__)("Horizontal Offset", "blocksy"),
            type: "ct-slider",
            steps: "half",
            value: t.value.h_offset,
            min: -100,
            max: 100,
            design: "compact",
            skipInput: !0
          },
          hasRevertButton: !1,
          onChange: function(e) {
            return i(f({}, n, {
              h_offset: e
            }))
          }
        }), Object(r.createElement)(s.a, {
          value: n.v_offset,
          values: n,
          id: "v_offset",
          option: {
            steps: "half",
            id: "v_offset",
            label: Object(u.__)("Vertical Offset", "blocksy"),
            type: "ct-slider",
            value: t.value.v_offset,
            min: -100,
            max: 100,
            design: "compact",
            skipInput: !0
          },
          hasRevertButton: !1,
          onChange: function(e) {
            return i(f({}, n, {
              v_offset: e
            }))
          }
        }), Object(r.createElement)(s.a, {
          value: n.blur,
          values: n,
          id: "blur",
          option: {
            steps: "positive",
            id: "blur",
            label: Object(u.__)("Blur", "blocksy"),
            type: "ct-slider",
            value: t.value.blur,
            min: 0,
            max: 100,
            design: "compact",
            skipInput: !0
          },
          hasRevertButton: !1,
          onChange: function(e) {
            i(f({}, n, {
              blur: e
            }))
          }
        }), Object(r.createElement)(s.a, {
          value: n.spread,
          values: n,
          id: "spread",
          option: {
            steps: "half",
            id: "spread",
            label: Object(u.__)("Spread", "blocksy"),
            type: "ct-slider",
            value: t.value.spread,
            min: -100,
            max: 100,
            design: "compact",
            skipInput: !0
          },
          hasRevertButton: !1,
          onChange: function(e) {
            return i(f({}, n, {
              spread: e
            }))
          }
        })), !t.hide_shadow_placement && Object(r.createElement)("ul", {
          className: "ct-shadow-style"
        }, Object(r.createElement)("li", {
          onClick: function() {
            return i(f({}, n, {
              inset: !1
            }))
          },
          className: l()({
            active: !n.inset
          })
        }, "Outline"), Object(r.createElement)("li", {
          onClick: function() {
            return i(f({}, n, {
              inset: !0
            }))
          },
          className: l()({
            active: n.inset
          })
        }, "Inset")))
      }
    })), d.current.closest(".ct-single-palette") ? d.current.closest(".ct-single-palette").querySelector(".ct-color-modal-wrapper") : d.current.closest(".ct-color-modal-wrapper") ? d.current.closest(".ct-color-modal-wrapper") : d.current.closest(".ct-control").querySelector(".ct-color-modal-wrapper"))
  }
}, function(e, t) {
  e.exports = ReactDOM
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return d
  }));
  var r = n(0),
    o = (n(13), n(17)),
    i = n.n(o);
  n(1);

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function s(e) {
    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function u(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function p(e, t) {
    return (p = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var d = function(e) {
    function t() {
      var e, n;
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
      return n = function(e, t) {
        return !t || "object" !== a(t) && "function" != typeof t ? u(e) : t
      }(this, (e = s(t)).call.apply(e, [this].concat(i))), f(u(n), "el", Object(r.createRef)()), f(u(n), "container", Object(r.createRef)()), n
    }
    var n, o, d;
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && p(e, t)
    }(t, e), n = t, (o = [{
      key: "componentDidMount",
      value: function() {
        var e = this;
        i()(this.container.current).find("input").ctColorPicker({
          change: function(t, n) {
            e.avoidTrigger || n.color.toString() !== e.props.value.color && e.props.onChange(function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(n, !0).forEach((function(t) {
                  f(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
              }
              return e
            }({}, e.props.value, {
              color: n.color.toString()
            }))
          }
        })
      }
    }, {
      key: "componentDidUpdate",
      value: function() {
        var e = this;
        i()(this.container.current).find("input").ctColorPicker("color") !== this.props.value.color.replace(/\s/g, "") && (this.avoidTrigger = !0, i()(this.container.current).find("input").ctColorPicker("color", this.props.value.color), setTimeout((function() {
          e.avoidTrigger = !1
        }), 1e3))
      }
    }, {
      key: "render",
      value: function() {
        return Object(r.createElement)("div", {
          ref: this.container
        }, Object(r.createElement)("div", {
          className: "ct-color-picker-bottom"
        }, Object(r.createElement)("div", {
          className: "ct-color-picker-input"
        }, Object(r.createElement)("input", {
          ref: this.el,
          defaultValue: this.props.value.color,
          type: "text"
        }))))
      }
    }]) && l(n.prototype, o), d && l(n, d), t
  }(r.Component)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(31),
    i = (n(37), n(14)),
    a = n(19);

  function c(e) {
    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function u(e) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function p(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function f(e, t) {
    return (f = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var h = function(e) {
    function t() {
      var e, n;
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      return n = function(e, t) {
        return !t || "object" !== c(t) && "function" != typeof t ? p(e) : t
      }(this, (e = u(t)).call.apply(e, [this].concat(o))), d(p(n), "state", {
        isPicking: null,
        isTransitioning: null
      }), n
    }
    var n, h, m;
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && f(e, t)
    }(t, e), n = t, (h = [{
      key: "render",
      value: function() {
        var e = this;
        return Object(r.createElement)(i.default, {
          useCapture: !1,
          display: "inline-block",
          disabled: !this.state.isPicking,
          className: "ct-color-picker-container",
          onOutsideClick: function() {
            return e.setState({
              isPicking: null,
              isTransitioning: e.state.isPicking
            })
          }
        }, this.props.option.pickers.filter((function(t) {
          return !t.condition || Object(a.a)(Object(a.b)(t.condition), e.props.values)
        })).map((function(t) {
          return Object(r.createElement)(o.default, {
            picker: t,
            key: t.id,
            option: e.props.option,
            isPicking: e.state.isPicking,
            isTransitioning: e.state.isTransitioning,
            onPickingChange: function(n) {
              return e.setState({
                isTransitioning: t.id,
                isPicking: n
              })
            },
            stopTransitioning: function() {
              return e.setState({
                isTransitioning: !1
              })
            },
            onChange: function(n) {
              return e.props.onChange(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? l(n, !0).forEach((function(t) {
                    d(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
                }
                return e
              }({}, e.props.value, d({}, t.id, n)))
            },
            value: e.props.value[t.id] || e.props.option.value[t.id]
          })
        })))
      }
    }]) && s(n.prototype, h), m && s(n, m), t
  }(r.Component);
  d(h, "ControlEnd", (function() {
    return Object(r.createElement)("div", {
      className: "ct-color-modal-wrapper",
      onMouseDown: function(e) {
        e.stopPropagation()
      },
      onMouseUp: function(e) {
        e.stopPropagation()
      }
    })
  })), d(h, "sectionClassName", (function(e) {
    return {
      "ct-responsive-color": "block" === e.design
    }
  })), t.default = h
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var c = function(e) {
      var t = e.option.behavior,
        n = void 0 === t ? "words" : t,
        r = e.value;
      return "words" === n ? "yes" === r : !!r
    },
    l = function(e) {
      var t, n = e.value,
        o = e.option,
        l = void 0 === o ? {} : o,
        s = e.onChange,
        u = e.onClick;
      return Object(r.createElement)("div", {
        className: i()((t = {}, a(t, "ct-option-switch", !0), a(t, "ct-active", c({
          option: l,
          value: n
        })), t)),
        onClick: function(e) {
          u && u(e), s(function(e) {
            var t = e.option,
              n = void 0 === t ? {} : t,
              r = e.option.behavior,
              o = void 0 === r ? "words" : r,
              i = e.value;
            return c({
              option: n,
              value: i
            }) ? "words" === o && "no" : "words" !== o || "yes"
          }({
            option: l,
            value: n
          }))
        }
      }, Object(r.createElement)("span", null))
    };
  l.renderingConfig = {
    design: "inline"
  }, t.default = l
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(29),
    c = n(20),
    l = (n(1), n(21)),
    s = n.n(l),
    u = n(15),
    p = n(50),
    f = n(48),
    d = n(49);
  n(9);

  function h() {
    return (h = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(n, !0).forEach((function(t) {
        g(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function v(e, t, n, r, o, i, a) {
    try {
      var c = e[i](a),
        l = c.value
    } catch (e) {
      return void n(e)
    }
    c.done ? t(l) : Promise.resolve(l).then(r, o)
  }

  function y(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function O(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function w(e) {
    return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var j = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
      t.map((function(t) {
        "function" == typeof t ? t(e) : "object" === w(t) && null !== t && t.hasOwnProperty("current") && (t.current = e)
      }))
    }
  };
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      o = e.innerRef,
      l = e.placement,
      m = e.initialView,
      g = e.currentView,
      w = e.previousView,
      _ = e.setCurrentView,
      E = (e.setInititialView, e.onChange),
      S = e.wrapperProps,
      k = void 0 === S ? {} : S,
      C = O(Object(r.useState)(Object(a.getDefaultFonts)(t)), 2),
      x = C[0],
      P = C[1],
      I = O(Object(r.useState)(!1), 2),
      D = (I[0], I[1], O(Object(r.useState)(""), 2)),
      A = D[0],
      T = D[1],
      N = Object(r.useRef)(),
      M = Object(r.useMemo)((function() {
        return "_" === w ? "static" : "search" === g && "fonts" === w || "search" === w && "fonts" === g ? "static" : "options" === w ? "right" : "fonts" === w && "variations" === g ? "right" : "left"
      }), [g, w]),
      R = Object(r.useRef)(null),
      z = Object(r.useRef)(null),
      L = Object.keys(x).reduce((function(e, t) {
        return [].concat(y(e), y((x[t].families || []).filter((function(e) {
          var t = e.family;
          return function(e, t) {
            var n = t.length,
              r = e.length;
            if (r > n) return !1;
            if (r === n) return e === t;
            e: for (var o = 0, i = 0; o < r; o++) {
              for (var a = e.charCodeAt(o); i < n;)
                if (t.charCodeAt(i++) === a) continue e;
              return !1
            }
            return !0
          }(A.toLowerCase(), t.toLowerCase())
        }))))
      }), []),
      F = function() {
        var e, n = (e = regeneratorRuntime.mark((function e() {
          var n, r, o, i, a;
          return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return (n = new FormData).append("action", "blocksy_get_fonts_list"), e.prev = 2, e.next = 5, fetch(ajaxurl, {
                  method: "POST",
                  body: n
                });
              case 5:
                if (200 !== (r = e.sent).status) {
                  e.next = 13;
                  break
                }
                return e.next = 9, r.json();
              case 9:
                o = e.sent, i = o.success, a = o.data, i && P(b({}, a.fonts, {
                  system: b({}, a.fonts.system, {
                    families: [].concat(y(t.isDefault ? [] : [{
                      source: "system",
                      family: "Default",
                      variations: [],
                      all_variations: ["Default", "n1", "i1", "n2", "i2", "n3", "i3", "n4", "i4", "n5", "i5", "n6", "i6", "n7", "i7", "n8", "i8", "n9", "i9"]
                    }]), y(a.fonts.system.families))
                  })
                }));
              case 13:
                e.next = 17;
                break;
              case 15:
                e.prev = 15, e.t0 = e.catch(2);
              case 17:
              case "end":
                return e.stop()
            }
          }), e, null, [
            [2, 15]
          ])
        })), function() {
          var t = this,
            n = arguments;
          return new Promise((function(r, o) {
            var i = e.apply(t, n);

            function a(e) {
              v(i, r, o, a, c, "next", e)
            }

            function c(e) {
              v(i, r, o, a, c, "throw", e)
            }
            a(void 0)
          }))
        });
        return function() {
          return n.apply(this, arguments)
        }
      }();
    Object(r.useEffect)((function() {
      m && "done" !== m && (T(""), setTimeout((function() {}))), "font_size" === m && setTimeout((function() {
        return z.current && z.current.focus()
      }), 100)
    }), [m]), Object(r.useEffect)((function() {
      F()
    }), []), Object(r.useEffect)((function() {
      "search" === g && R.current.focus()
    }), [g]);
    var B = function(e) {
      E(b({}, n, {
        family: e.family,
        variation: Object(c.decideVariationToSelect)(e, n)
      }))
    };
    return Object(r.createElement)("div", h({
      ref: j(o, N),
      "data-placement": !N.current || N.current && N.current.parentNode.getBoundingClientRect().top - N.current.getBoundingClientRect().height < 60 ? "bottom" : l,
      className: "ct-typography-modal"
    }, k), Object(r.createElement)("ul", {
      className: i()("ct-typography-top", {
        "ct-switch-panel": "options" !== g,
        "ct-static": "_" === w
      })
    }, Object(r.createElement)("li", {
      className: "ct-back",
      onClick: function() {
        return _("options")
      }
    }, Object(r.createElement)("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 15 15"
    }, Object(r.createElement)("path", {
      d: "M14.2,6.8H2.6l4-4c0.3-0.3,0.3-0.8,0-1.1c-0.3-0.3-0.8-0.3-1.1,0L0.2,7l0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1l0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1C0.2,8,0.2,8,0.2,8l5.3,5.3c0.3,0.3,0.8,0.3,1.1,0c0.3-0.3,0.3-0.8,0-1.1l-4-4h11.7c0.4,0,0.8-0.3,0.8-0.8S14.7,6.8,14.2,6.8z"
    }))), Object(r.createElement)("li", {
      className: i()("ct-font", {
        active: "search" === g || "fonts" === g
      }),
      onClick: function() {
        _("fonts" === g ? "search" : "fonts"), T("")
      }
    }, "search" !== g && Object(r.createElement)("span", null, n.family), "search" === g && Object(r.createElement)("input", {
      onClick: function(e) {
        return e.stopPropagation()
      },
      ref: R,
      autofocus: !0,
      value: A,
      onKeyUp: function(e) {
        13 == e.keyCode && L.length > 0 && (B(L[0]), _("options"), T(""))
      },
      onChange: function(e) {
        var t = e.target.value;
        return T(t)
      }
    }), Object(r.createElement)("svg", {
      width: "8",
      height: "8",
      viewBox: "0 0 15 15"
    }, "search" === g && Object(r.createElement)("path", {
      d: "M8.9,7.5l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7.5,6.1L2.9,1.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4.6-4.6l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.9,7.5z"
    }), "search" !== g && Object(r.createElement)("path", {
      d: "M14.6,14.6c-0.6,0.6-1.4,0.6-2,0l-2.5-2.5c-1,0.7-2.2,1-3.5,1C2.9,13.1,0,10.2,0,6.6S2.9,0,6.6,0c3.6,0,6.6,2.9,6.6,6.6c0,1.3-0.4,2.5-1,3.5l2.5,2.5C15.1,13.1,15.1,14,14.6,14.6z M6.6,1.9C4,1.9,1.9,4,1.9,6.6s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C11.3,4,9.2,1.9,6.6,1.9z"
    }))), Object(r.createElement)("li", {
      className: i()("ct-weight", {
        active: "variations" === g
      }),
      onClick: function() {
        return _("variations")
      }
    }, Object(r.createElement)("span", {
      "data-variation": n.variation
    }, Object(c.humanizeVariationsShort)(n.variation)))), Object(r.createElement)(u.a, {
      items: g,
      immediate: "static" === M,
      config: function(e, t) {
        return {
          duration: 210,
          easing: s()(.455, .03, .515, .955)
        }
      },
      from: {
        transform: "left" === M ? "translate3d(100%,0,0)" : "translate3d(-100%,0,0)",
        position: "absolute"
      },
      enter: {
        transform: "translate3d(0,0,0)"
      },
      leave: {
        transform: "left" === M ? "translate3d(-100%,0,0)" : "translate3d(100%,0,0)"
      }
    }, (function(e) {
      return "options" === e ? function(e) {
        return Object(r.createElement)(d.default, {
          sizeRef: z,
          value: n,
          option: t,
          onChange: E,
          props: e
        })
      } : "fonts" === e || "search" === e ? function(t) {
        return Object(r.createElement)(u.b.div, {
          style: t
        }, Object(r.createElement)(p.default, {
          typographyList: x,
          searchTerm: A,
          linearFontsList: L,
          currentView: "".concat(e, ":").concat(w),
          onPickFamily: function(e) {
            B(e)
          },
          value: n
        }))
      } : "variations" === e ? function(e) {
        return Object(r.createElement)(f.default, {
          props: e,
          typographyList: x,
          onChange: function(e) {
            E(e)
          },
          value: n
        })
      } : void 0
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = (n(29), n(20)),
    c = n(15);

  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    e.option;
    var t = e.value,
      n = e.onChange,
      o = e.typographyList,
      u = e.props,
      p = Object(a.findSelectedFontFamily)(t.family, o),
      f = Object(r.useRef)(null);
    return Object(r.useEffect)((function() {
      f.current.scrollTop = (f.current.children[p.all_variations.indexOf(t.variation)] || f.current.children[0]).offsetTop - f.current.offsetTop
    }), []), Object(r.createElement)(c.b.ul, {
      style: u,
      className: "ct-typography-variations",
      ref: f
    }, p.all_variations.map((function(e) {
      return Object(r.createElement)("li", {
        onClick: function() {
          return n(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(n, !0).forEach((function(t) {
                s(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }({}, t, {
            variation: e
          }))
        },
        className: i()({
          active: e === t.variation
        }),
        key: e
      }, Object(r.createElement)("span", {
        className: "ct-variation-name",
        "data-variation": e
      }, Object(a.humanizeVariations)(e)))
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(1),
    c = n(15),
    l = n(9);

  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(n, !0).forEach((function(t) {
        p(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      o = e.sizeRef,
      s = e.onChange,
      p = e.props;
    return Object(r.createElement)(c.b.ul, {
      style: p,
      className: "ct-typography-options"
    }, Object(r.createElement)("li", {
      key: "size"
    }, Object(r.createElement)(l.a, {
      value: n.size,
      values: n,
      id: "size",
      option: {
        id: "size",
        label: Object(a.__)("Font Size", "blocksy"),
        type: "ct-slider",
        value: t.value.size,
        ref: o,
        responsive: t.typography_responsive || !0,
        units: [{
          unit: "px",
          min: 0,
          max: 200
        }, {
          unit: "em",
          min: 0,
          max: 50
        }, {
          unit: "rem",
          min: 0,
          max: 50
        }, {
          unit: "pt",
          min: 0,
          max: 50
        }, {
          unit: "vw",
          min: 0,
          max: 100
        }]
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return s(u({}, n, {
          size: e
        }))
      }
    })), Object(r.createElement)("li", {
      key: "line-height"
    }, Object(r.createElement)(l.a, {
      value: n["line-height"],
      values: n,
      id: "line-height",
      option: {
        id: "line-height",
        label: Object(a.__)("Line Height", "blocksy"),
        type: "ct-slider",
        value: t.value["line-height"],
        responsive: t.typography_responsive || !0,
        units: [{
          unit: "",
          min: 0,
          max: 10,
          decimals: 1
        }, {
          unit: "px",
          min: 0,
          max: 50
        }, {
          unit: "em",
          min: 0,
          max: 50
        }, {
          unit: "pt",
          min: 0,
          max: 50
        }, {
          unit: "%",
          min: 0,
          max: 100
        }]
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return s(u({}, n, {
          "line-height": e
        }))
      }
    })), Object(r.createElement)("li", {
      key: "letter-spacing"
    }, Object(r.createElement)(l.a, {
      value: n["letter-spacing"],
      values: n,
      id: "letter-spacing",
      option: {
        id: "letter-spacing",
        label: Object(a.__)("Letter Spacing", "blocksy"),
        type: "ct-slider",
        value: t.value["letter-spacing"],
        responsive: t.typography_responsive || !0,
        units: [{
          unit: "em",
          min: 0,
          max: 10,
          decimals: 1
        }]
      },
      hasRevertButton: !1,
      onChange: function(e) {
        return s(u({}, n, {
          "letter-spacing": e
        }))
      }
    })), Object(r.createElement)("li", {
      key: "variant",
      className: "ct-typography-variant"
    }, Object(r.createElement)("ul", {
      className: i()("ct-text-transform")
    }, ["capitalize", "uppercase"].map((function(e) {
      return Object(r.createElement)("li", {
        key: e,
        onClick: function() {
          return s(u({}, n, {
            "text-transform": n["text-transform"] === e ? "none" : e
          }))
        },
        className: i()({
          active: e === n["text-transform"]
        }),
        "data-variant": e
      }, Object(r.createElement)("i", {
        className: "ct-tooltip-top"
      }, {
        capitalize: Object(a.__)("Capitalize", "blocksy"),
        uppercase: Object(a.__)("Uppercase", "blocksy")
      } [e]))
    }))), Object(r.createElement)("ul", {
      className: i()("ct-text-decoration")
    }, ["line-through", "underline"].map((function(e) {
      return Object(r.createElement)("li", {
        key: e,
        onClick: function() {
          return s(u({}, n, {
            "text-decoration": n["text-decoration"] === e ? "none" : e
          }))
        },
        className: i()({
          active: e === n["text-decoration"]
        }),
        "data-variant": e
      }, Object(r.createElement)("i", {
        className: "ct-tooltip-top"
      }, {
        "line-through": Object(a.__)("Line Through", "blocksy"),
        underline: Object(a.__)("Underline", "blocksy")
      } [e]))
    })))))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = (n(29), n(20)),
    c = n(3),
    l = n(11),
    s = n(6);

  function u(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++)
      if (e[n] !== t[n]) return !1;
    return !0
  }
  var p = function(e, t) {
      var n;
      void 0 === t && (t = u);
      var r, o = [],
        i = !1;
      return function() {
        for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++) c[l] = arguments[l];
        return i && n === this && t(c, o) ? r : (r = e.apply(this, c), i = !0, n = this, o = c, r)
      }
    },
    f = n(4),
    d = (n(7), "object" == typeof performance && "function" == typeof performance.now ? function() {
      return performance.now()
    } : function() {
      return Date.now()
    });

  function h(e) {
    cancelAnimationFrame(e.id)
  }

  function m(e, t) {
    var n = d();
    var r = {
      id: requestAnimationFrame((function o() {
        d() - n >= t ? e.call(null) : r.id = requestAnimationFrame(o)
      }))
    };
    return r
  }
  var b = null;

  function g(e) {
    if (void 0 === e && (e = !1), null === b || e) {
      var t = document.createElement("div"),
        n = t.style;
      n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
      var r = document.createElement("div"),
        o = r.style;
      return o.width = "100px", o.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft = -10, b = -10 === t.scrollLeft, document.body.removeChild(t), b
    }
    return b
  }
  var v = 150,
    y = function(e, t) {
      return e
    };

  function O(e) {
    var t, n, r = e.getItemOffset,
      o = e.getEstimatedTotalSize,
      i = e.getItemSize,
      a = e.getOffsetForIndexAndAlignment,
      u = e.getStartIndexForOffset,
      d = e.getStopIndexForStartIndex,
      b = e.initInstanceProps,
      O = e.shouldResetStyleCacheOnItemSizeChange,
      j = e.validateProps;
    return n = t = function(e) {
      function t(t) {
        var n;
        return (n = e.call(this, t) || this)._instanceProps = b(n.props, Object(s.a)(Object(s.a)(n))), n._outerRef = void 0, n._resetIsScrollingTimeoutId = null, n.state = {
          instance: Object(s.a)(Object(s.a)(n)),
          isScrolling: !1,
          scrollDirection: "forward",
          scrollOffset: "number" == typeof n.props.initialScrollOffset ? n.props.initialScrollOffset : 0,
          scrollUpdateWasRequested: !1
        }, n._callOnItemsRendered = void 0, n._callOnItemsRendered = p((function(e, t, r, o) {
          return n.props.onItemsRendered({
            overscanStartIndex: e,
            overscanStopIndex: t,
            visibleStartIndex: r,
            visibleStopIndex: o
          })
        })), n._callOnScroll = void 0, n._callOnScroll = p((function(e, t, r) {
          return n.props.onScroll({
            scrollDirection: e,
            scrollOffset: t,
            scrollUpdateWasRequested: r
          })
        })), n._getItemStyle = void 0, n._getItemStyle = function(e) {
          var t, o = n.props,
            a = o.direction,
            c = o.itemSize,
            l = o.layout,
            s = n._getItemStyleCache(O && c, O && l, O && a);
          if (s.hasOwnProperty(e)) t = s[e];
          else {
            var u, p = r(n.props, e, n._instanceProps),
              f = i(n.props, e, n._instanceProps),
              d = "horizontal" === a || "horizontal" === l;
            s[e] = ((u = {
              position: "absolute"
            })["rtl" === a ? "right" : "left"] = d ? p : 0, u.top = d ? 0 : p, u.height = d ? "100%" : f, u.width = d ? f : "100%", t = u)
          }
          return t
        }, n._getItemStyleCache = void 0, n._getItemStyleCache = p((function(e, t, n) {
          return {}
        })), n._onScrollHorizontal = function(e) {
          var t = e.currentTarget,
            r = t.clientWidth,
            o = t.scrollLeft,
            i = t.scrollWidth;
          n.setState((function(e) {
            if (e.scrollOffset === o) return null;
            var t = n.props.direction,
              a = o;
            "rtl" === t && (a = g() ? -o : i - r - o);
            return a = Math.max(0, Math.min(a, i - r)), {
              isScrolling: !0,
              scrollDirection: e.scrollOffset < o ? "forward" : "backward",
              scrollOffset: a,
              scrollUpdateWasRequested: !1
            }
          }), n._resetIsScrollingDebounced)
        }, n._onScrollVertical = function(e) {
          var t = e.currentTarget,
            r = t.clientHeight,
            o = t.scrollHeight,
            i = t.scrollTop;
          n.setState((function(e) {
            if (e.scrollOffset === i) return null;
            var t = Math.max(0, Math.min(i, o - r));
            return {
              isScrolling: !0,
              scrollDirection: e.scrollOffset < t ? "forward" : "backward",
              scrollOffset: t,
              scrollUpdateWasRequested: !1
            }
          }), n._resetIsScrollingDebounced)
        }, n._outerRefSetter = function(e) {
          var t = n.props.outerRef;
          n._outerRef = e, "function" == typeof t ? t(e) : null != t && "object" == typeof t && t.hasOwnProperty("current") && (t.current = e)
        }, n._resetIsScrollingDebounced = function() {
          null !== n._resetIsScrollingTimeoutId && h(n._resetIsScrollingTimeoutId), n._resetIsScrollingTimeoutId = m(n._resetIsScrolling, v)
        }, n._resetIsScrolling = function() {
          n._resetIsScrollingTimeoutId = null, n.setState({
            isScrolling: !1
          }, (function() {
            n._getItemStyleCache(-1, null)
          }))
        }, n
      }
      Object(l.a)(t, e), t.getDerivedStateFromProps = function(e, t) {
        return w(e, t), j(e), null
      };
      var n = t.prototype;
      return n.scrollTo = function(e) {
        e = Math.max(0, e), this.setState((function(t) {
          return t.scrollOffset === e ? null : {
            scrollDirection: t.scrollOffset < e ? "forward" : "backward",
            scrollOffset: e,
            scrollUpdateWasRequested: !0
          }
        }), this._resetIsScrollingDebounced)
      }, n.scrollToItem = function(e, t) {
        void 0 === t && (t = "auto");
        var n = this.props.itemCount,
          r = this.state.scrollOffset;
        e = Math.max(0, Math.min(e, n - 1)), this.scrollTo(a(this.props, e, t, r, this._instanceProps))
      }, n.componentDidMount = function() {
        var e = this.props,
          t = e.direction,
          n = e.initialScrollOffset,
          r = e.layout;
        if ("number" == typeof n && null != this._outerRef) {
          var o = this._outerRef;
          "horizontal" === t || "horizontal" === r ? o.scrollLeft = n : o.scrollTop = n
        }
        this._callPropsCallbacks()
      }, n.componentDidUpdate = function() {
        var e = this.props,
          t = e.direction,
          n = e.layout,
          r = this.state,
          o = r.scrollOffset;
        if (r.scrollUpdateWasRequested && null != this._outerRef) {
          var i = this._outerRef;
          if ("horizontal" === t || "horizontal" === n)
            if ("rtl" === t)
              if (g()) i.scrollLeft = -o;
              else {
                var a = i.clientWidth,
                  c = i.scrollWidth;
                i.scrollLeft = c - a - o
              }
          else i.scrollLeft = o;
          else i.scrollTop = o
        }
        this._callPropsCallbacks()
      }, n.componentWillUnmount = function() {
        null !== this._resetIsScrollingTimeoutId && h(this._resetIsScrollingTimeoutId)
      }, n.render = function() {
        var e = this.props,
          t = e.children,
          n = e.className,
          r = e.direction,
          i = e.height,
          a = e.innerRef,
          l = e.innerElementType,
          s = e.innerTagName,
          u = e.itemCount,
          p = e.itemData,
          d = e.itemKey,
          h = void 0 === d ? y : d,
          m = e.layout,
          b = e.outerElementType,
          g = e.outerTagName,
          v = e.style,
          O = e.useIsScrolling,
          w = e.width,
          j = this.state.isScrolling,
          _ = "horizontal" === r || "horizontal" === m,
          E = _ ? this._onScrollHorizontal : this._onScrollVertical,
          S = this._getRangeToRender(),
          k = S[0],
          C = S[1],
          x = [];
        if (u > 0)
          for (var P = k; P <= C; P++) x.push(Object(f.createElement)(t, {
            data: p,
            key: h(P, p),
            index: P,
            isScrolling: O ? j : void 0,
            style: this._getItemStyle(P)
          }));
        var I = o(this.props, this._instanceProps);
        return Object(f.createElement)(b || g || "div", {
          className: n,
          onScroll: E,
          ref: this._outerRefSetter,
          style: Object(c.a)({
            position: "relative",
            height: i,
            width: w,
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            willChange: "transform",
            direction: r
          }, v)
        }, Object(f.createElement)(l || s || "div", {
          children: x,
          ref: a,
          style: {
            height: _ ? "100%" : I,
            pointerEvents: j ? "none" : void 0,
            width: _ ? I : "100%"
          }
        }))
      }, n._callPropsCallbacks = function() {
        if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
          var e = this._getRangeToRender(),
            t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          this._callOnItemsRendered(t, n, r, o)
        }
        if ("function" == typeof this.props.onScroll) {
          var i = this.state,
            a = i.scrollDirection,
            c = i.scrollOffset,
            l = i.scrollUpdateWasRequested;
          this._callOnScroll(a, c, l)
        }
      }, n._getRangeToRender = function() {
        var e = this.props,
          t = e.itemCount,
          n = e.overscanCount,
          r = this.state,
          o = r.isScrolling,
          i = r.scrollDirection,
          a = r.scrollOffset;
        if (0 === t) return [0, 0, 0, 0];
        var c = u(this.props, a, this._instanceProps),
          l = d(this.props, c, a, this._instanceProps),
          s = o && "backward" !== i ? 1 : Math.max(1, n),
          p = o && "forward" !== i ? 1 : Math.max(1, n);
        return [Math.max(0, c - s), Math.max(0, Math.min(t - 1, l + p)), c, l]
      }, t
    }(f.PureComponent), t.defaultProps = {
      direction: "ltr",
      itemData: void 0,
      layout: "vertical",
      overscanCount: 2,
      useIsScrolling: !1
    }, n
  }
  var w = function(e, t) {
      e.children, e.direction, e.height, e.layout, e.innerTagName, e.outerTagName, e.width, t.instance
    },
    j = O({
      getItemOffset: function(e, t) {
        var n = e.itemSize;
        e.size;
        return t * n
      },
      getItemSize: function(e, t) {
        var n = e.itemSize;
        e.size;
        return n
      },
      getEstimatedTotalSize: function(e) {
        var t = e.itemCount;
        return e.itemSize * t
      },
      getOffsetForIndexAndAlignment: function(e, t, n, r) {
        var o = e.direction,
          i = e.height,
          a = e.itemCount,
          c = e.itemSize,
          l = e.layout,
          s = e.width,
          u = "horizontal" === o || "horizontal" === l ? s : i,
          p = Math.max(0, Math.min(a * c - u, t * c)),
          f = Math.max(0, t * c - u + c);
        switch ("smart" === n && (n = r >= f - u && r <= p + u ? "auto" : "center"), n) {
          case "start":
            return p;
          case "end":
            return f;
          case "center":
            return Math.round(f + (p - f) / 2);
          case "auto":
          default:
            return r >= f && r <= p ? r : r - f < p - r ? f : p
        }
      },
      getStartIndexForOffset: function(e, t) {
        var n = e.itemCount,
          r = e.itemSize;
        return Math.max(0, Math.min(n - 1, Math.floor(t / r)))
      },
      getStopIndexForStartIndex: function(e, t, n) {
        var r = e.direction,
          o = e.height,
          i = e.itemCount,
          a = e.itemSize,
          c = e.layout,
          l = e.width,
          s = t * a,
          u = "horizontal" === r || "horizontal" === c ? l : o;
        return Math.max(0, Math.min(i - 1, t + Math.floor((u + (n - s)) / a)))
      },
      initInstanceProps: function(e) {},
      shouldResetStyleCacheOnItemSizeChange: !0,
      validateProps: function(e) {
        e.itemSize
      }
    });
  var _ = n(63),
    E = n.n(_);
  n(94);

  function S(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function k(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var C = [],
    x = function(e) {
      var t = e.data,
        n = t.linearFontsList,
        o = t.onPickFamily,
        c = t.value,
        l = e.index,
        s = e.style,
        u = n[l];
      return Object(r.createElement)("div", {
        style: s,
        onClick: function() {
          return o(u)
        },
        className: i()("ct-typography-single-font", "ct-".concat(u.source), {
          active: u.family === c.family
        }),
        key: u.family
      }, Object(r.createElement)("span", {
        className: "ct-font-name"
      }, u.family), Object(r.createElement)("span", {
        style: {
          fontFamily: Object(a.fontFamilyToCSSFamily)(u.family)
        },
        className: "ct-font-preview"
      }, "Simply dummy text"))
    };
  t.default = function(e) {
    e.option;
    var t = e.value,
      n = e.onPickFamily,
      o = (e.typographyList, e.linearFontsList),
      i = (e.currentView, e.searchTerm, Object(r.useRef)(null)),
      a = (Object(r.useRef)(null), S(Object(r.useState)(null), 2)),
      c = a[0],
      l = a[1];
    return Object(r.useEffect)((function() {
      t.family && i.current.scrollToItem(o.map((function(e) {
        return e.family
      })).indexOf(t.family), "start")
    }), []), Object(r.createElement)(j, {
      height: 360,
      itemCount: o.length,
      itemSize: 85,
      ref: i,
      width: 283,
      onScroll: function() {
        c && clearTimeout(c), l(setTimeout((function() {
          var e, t = S(i.current._getRangeToRender(), 1)[0],
            n = (Math.ceil(o.length / 25), Math.ceil((t + 1) / 25)),
            r = k(Array(25)).map((function(e, t) {
              return 25 * (n - 1) + t
            })).map((function(e) {
              return o[e]
            })).filter((function(e) {
              return !!e
            })).filter((function(e) {
              var t = e.source,
                n = e.family;
              return -1 === C.indexOf(n) && "google" === t
            }));
          0 !== (e = r).length && (C = [].concat(k(C), k(e.map((function(e) {
            return e.family
          })))), E.a.load({
            google: {
              families: e.map((function(e) {
                return e.family
              }))
            },
            classes: !1,
            text: "abcdefghijklmnopqrstuvwxyz"
          }))
        }), 100))
      },
      itemData: {
        linearFontsList: o,
        onPickFamily: n,
        value: t
      },
      onItemsRendered: function(e) {
        e.overscanStartIndex, e.overscanStopIndex
      },
      className: "ct-typography-fonts"
    }, x)
  }
}, function(e, t, n) {
  "use strict";
  (function(e) {
    for (
      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.15.0
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      var n = "undefined" != typeof window && "undefined" != typeof document, r = ["Edge", "Trident", "Firefox"], o = 0, i = 0; i < r.length; i += 1)
      if (n && navigator.userAgent.indexOf(r[i]) >= 0) {
        o = 1;
        break
      } var a = n && window.Promise ? function(e) {
      var t = !1;
      return function() {
        t || (t = !0, window.Promise.resolve().then((function() {
          t = !1, e()
        })))
      }
    } : function(e) {
      var t = !1;
      return function() {
        t || (t = !0, setTimeout((function() {
          t = !1, e()
        }), o))
      }
    };

    function c(e) {
      return e && "[object Function]" === {}.toString.call(e)
    }

    function l(e, t) {
      if (1 !== e.nodeType) return [];
      var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? n[t] : n
    }

    function s(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function u(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body
      }
      var t = l(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + o + r) ? e : u(s(e))
    }
    var p = n && !(!window.MSInputMethodContext || !document.documentMode),
      f = n && /MSIE 10/.test(navigator.userAgent);

    function d(e) {
      return 11 === e ? p : 10 === e ? f : p || f
    }

    function h(e) {
      if (!e) return document.documentElement;
      for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function m(e) {
      return null !== e.parentNode ? m(e.parentNode) : e
    }

    function b(e, t) {
      if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        o = n ? t : e,
        i = document.createRange();
      i.setStart(r, 0), i.setEnd(o, 0);
      var a, c, l = i.commonAncestorContainer;
      if (e !== l && t !== l || r.contains(o)) return "BODY" === (c = (a = l).nodeName) || "HTML" !== c && h(a.firstElementChild) !== a ? h(l) : l;
      var s = m(e);
      return s.host ? b(s.host, t) : b(e, m(t).host)
    }

    function g(e) {
      var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;
      if ("BODY" === n || "HTML" === n) {
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[t]
      }
      return e[t]
    }

    function v(e, t) {
      var n = "x" === t ? "Left" : "Top",
        r = "Left" === n ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
    }

    function y(e, t, n, r) {
      return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function O(e) {
      var t = e.body,
        n = e.documentElement,
        r = d(10) && getComputedStyle(n);
      return {
        height: y("Height", t, n, r),
        width: y("Width", t, n, r)
      }
    }
    var w = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      },
      j = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      _ = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      },
      E = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      };

    function S(e) {
      return E({}, e, {
        right: e.left + e.width,
        bottom: e.top + e.height
      })
    }

    function k(e) {
      var t = {};
      try {
        if (d(10)) {
          t = e.getBoundingClientRect();
          var n = g(e, "top"),
            r = g(e, "left");
          t.top += n, t.left += r, t.bottom += n, t.right += r
        } else t = e.getBoundingClientRect()
      } catch (e) {}
      var o = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top
        },
        i = "HTML" === e.nodeName ? O(e.ownerDocument) : {},
        a = i.width || e.clientWidth || o.right - o.left,
        c = i.height || e.clientHeight || o.bottom - o.top,
        s = e.offsetWidth - a,
        u = e.offsetHeight - c;
      if (s || u) {
        var p = l(e);
        s -= v(p, "x"), u -= v(p, "y"), o.width -= s, o.height -= u
      }
      return S(o)
    }

    function C(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = d(10),
        o = "HTML" === t.nodeName,
        i = k(e),
        a = k(t),
        c = u(e),
        s = l(t),
        p = parseFloat(s.borderTopWidth, 10),
        f = parseFloat(s.borderLeftWidth, 10);
      n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
      var h = S({
        top: i.top - a.top - p,
        left: i.left - a.left - f,
        width: i.width,
        height: i.height
      });
      if (h.marginTop = 0, h.marginLeft = 0, !r && o) {
        var m = parseFloat(s.marginTop, 10),
          b = parseFloat(s.marginLeft, 10);
        h.top -= p - m, h.bottom -= p - m, h.left -= f - b, h.right -= f - b, h.marginTop = m, h.marginLeft = b
      }
      return (r && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (h = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = g(t, "top"),
          o = g(t, "left"),
          i = n ? -1 : 1;
        return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
      }(h, t)), h
    }

    function x(e) {
      if (!e || !e.parentElement || d()) return document.documentElement;
      for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
      return t || document.documentElement
    }

    function P(e, t, n, r) {
      var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = {
          top: 0,
          left: 0
        },
        a = o ? x(e) : b(e, t);
      if ("viewport" === r) i = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          r = C(e, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          i = Math.max(n.clientHeight, window.innerHeight || 0),
          a = t ? 0 : g(n),
          c = t ? 0 : g(n, "left");
        return S({
          top: a - r.top + r.marginTop,
          left: c - r.left + r.marginLeft,
          width: o,
          height: i
        })
      }(a, o);
      else {
        var c = void 0;
        "scrollParent" === r ? "BODY" === (c = u(s(t))).nodeName && (c = e.ownerDocument.documentElement) : c = "window" === r ? e.ownerDocument.documentElement : r;
        var p = C(c, a, o);
        if ("HTML" !== c.nodeName || function e(t) {
            var n = t.nodeName;
            if ("BODY" === n || "HTML" === n) return !1;
            if ("fixed" === l(t, "position")) return !0;
            var r = s(t);
            return !!r && e(r)
          }(a)) i = p;
        else {
          var f = O(e.ownerDocument),
            d = f.height,
            h = f.width;
          i.top += p.top - p.marginTop, i.bottom = d + p.top, i.left += p.left - p.marginLeft, i.right = h + p.left
        }
      }
      var m = "number" == typeof(n = n || 0);
      return i.left += m ? n : n.left || 0, i.top += m ? n : n.top || 0, i.right -= m ? n : n.right || 0, i.bottom -= m ? n : n.bottom || 0, i
    }

    function I(e, t, n, r, o) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var a = P(n, r, i, o),
        c = {
          top: {
            width: a.width,
            height: t.top - a.top
          },
          right: {
            width: a.right - t.right,
            height: a.height
          },
          bottom: {
            width: a.width,
            height: a.bottom - t.bottom
          },
          left: {
            width: t.left - a.left,
            height: a.height
          }
        },
        l = Object.keys(c).map((function(e) {
          return E({
            key: e
          }, c[e], {
            area: (t = c[e], t.width * t.height)
          });
          var t
        })).sort((function(e, t) {
          return t.area - e.area
        })),
        s = l.filter((function(e) {
          var t = e.width,
            r = e.height;
          return t >= n.clientWidth && r >= n.clientHeight
        })),
        u = s.length > 0 ? s[0].key : l[0].key,
        p = e.split("-")[1];
      return u + (p ? "-" + p : "")
    }

    function D(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return C(n, r ? x(t) : b(t, n), r)
    }

    function A(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return {
        width: e.offsetWidth + r,
        height: e.offsetHeight + n
      }
    }

    function T(e) {
      var t = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      return e.replace(/left|right|bottom|top/g, (function(e) {
        return t[e]
      }))
    }

    function N(e, t, n) {
      n = n.split("-")[0];
      var r = A(e),
        o = {
          width: r.width,
          height: r.height
        },
        i = -1 !== ["right", "left"].indexOf(n),
        a = i ? "top" : "left",
        c = i ? "left" : "top",
        l = i ? "height" : "width",
        s = i ? "width" : "height";
      return o[a] = t[a] + t[l] / 2 - r[l] / 2, o[c] = n === c ? t[c] - r[s] : t[T(c)], o
    }

    function M(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function R(e, t, n) {
      return (void 0 === n ? e : e.slice(0, function(e, t, n) {
        if (Array.prototype.findIndex) return e.findIndex((function(e) {
          return e[t] === n
        }));
        var r = M(e, (function(e) {
          return e[t] === n
        }));
        return e.indexOf(r)
      }(e, "name", n))).forEach((function(e) {
        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = e.function || e.fn;
        e.enabled && c(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
      })), t
    }

    function z() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {}
        };
        e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = N(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
      }
    }

    function L(e, t) {
      return e.some((function(e) {
        var n = e.name;
        return e.enabled && n === t
      }))
    }

    function F(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
        var o = t[r],
          i = o ? "" + o + n : e;
        if (void 0 !== document.body.style[i]) return i
      }
      return null
    }

    function B() {
      return this.state.isDestroyed = !0, L(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function V(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window
    }

    function H(e, t, n, r) {
      n.updateBound = r, V(e).addEventListener("resize", n.updateBound, {
        passive: !0
      });
      var o = u(e);
      return function e(t, n, r, o) {
        var i = "BODY" === t.nodeName,
          a = i ? t.ownerDocument.defaultView : t;
        a.addEventListener(n, r, {
          passive: !0
        }), i || e(u(a.parentNode), n, r, o), o.push(a)
      }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function U() {
      this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function W() {
      var e, t;
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, V(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
        e.removeEventListener("scroll", t.updateBound)
      })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function K(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function q(e, t) {
      Object.keys(t).forEach((function(n) {
        var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (r = "px"), e.style[n] = t[n] + r
      }))
    }
    var Y = n && /Firefox/i.test(navigator.userAgent);

    function G(e, t, n) {
      var r = M(e, (function(e) {
          return e.name === t
        })),
        o = !!r && e.some((function(e) {
          return e.name === n && e.enabled && e.order < r.order
        }));
      if (!o) {
        var i = "`" + t + "`",
          a = "`" + n + "`";
        console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
      }
      return o
    }
    var X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      $ = X.slice(3);

    function Z(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = $.indexOf(e),
        r = $.slice(n + 1).concat($.slice(0, n));
      return t ? r.reverse() : r
    }
    var J = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise"
    };

    function Q(e, t, n, r) {
      var o = [0, 0],
        i = -1 !== ["right", "left"].indexOf(r),
        a = e.split(/(\+|\-)/).map((function(e) {
          return e.trim()
        })),
        c = a.indexOf(M(a, (function(e) {
          return -1 !== e.search(/,|\s/)
        })));
      a[c] && -1 === a[c].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var l = /\s*,\s*|\s+/,
        s = -1 !== c ? [a.slice(0, c).concat([a[c].split(l)[0]]), [a[c].split(l)[1]].concat(a.slice(c + 1))] : [a];
      return (s = s.map((function(e, r) {
        var o = (1 === r ? !i : i) ? "height" : "width",
          a = !1;
        return e.reduce((function(e, t) {
          return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
        }), []).map((function(e) {
          return function(e, t, n, r) {
            var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              i = +o[1],
              a = o[2];
            if (!i) return e;
            if (0 === a.indexOf("%")) {
              var c = void 0;
              switch (a) {
                case "%p":
                  c = n;
                  break;
                case "%":
                case "%r":
                default:
                  c = r
              }
              return S(c)[t] / 100 * i
            }
            if ("vh" === a || "vw" === a) {
              return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
            }
            return i
          }(e, o, t, n)
        }))
      }))).forEach((function(e, t) {
        e.forEach((function(n, r) {
          K(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
        }))
      })), o
    }
    var ee = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function(e) {
              var t = e.placement,
                n = t.split("-")[0],
                r = t.split("-")[1];
              if (r) {
                var o = e.offsets,
                  i = o.reference,
                  a = o.popper,
                  c = -1 !== ["bottom", "top"].indexOf(n),
                  l = c ? "left" : "top",
                  s = c ? "width" : "height",
                  u = {
                    start: _({}, l, i[l]),
                    end: _({}, l, i[l] + i[s] - a[s])
                  };
                e.offsets.popper = E({}, a, u[r])
              }
              return e
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function(e, t) {
              var n = t.offset,
                r = e.placement,
                o = e.offsets,
                i = o.popper,
                a = o.reference,
                c = r.split("-")[0],
                l = void 0;
              return l = K(+n) ? [+n, 0] : Q(n, i, a, c), "left" === c ? (i.top += l[0], i.left -= l[1]) : "right" === c ? (i.top += l[0], i.left += l[1]) : "top" === c ? (i.left += l[0], i.top -= l[1]) : "bottom" === c && (i.left += l[0], i.top += l[1]), e.popper = i, e
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function(e, t) {
              var n = t.boundariesElement || h(e.instance.popper);
              e.instance.reference === n && (n = h(n));
              var r = F("transform"),
                o = e.instance.popper.style,
                i = o.top,
                a = o.left,
                c = o[r];
              o.top = "", o.left = "", o[r] = "";
              var l = P(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
              o.top = i, o.left = a, o[r] = c, t.boundaries = l;
              var s = t.priority,
                u = e.offsets.popper,
                p = {
                  primary: function(e) {
                    var n = u[e];
                    return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), _({}, e, n)
                  },
                  secondary: function(e) {
                    var n = "right" === e ? "left" : "top",
                      r = u[n];
                    return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), _({}, n, r)
                  }
                };
              return s.forEach((function(e) {
                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                u = E({}, u, p[t](e))
              })), e.offsets.popper = u, e
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function(e) {
              var t = e.offsets,
                n = t.popper,
                r = t.reference,
                o = e.placement.split("-")[0],
                i = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(o),
                c = a ? "right" : "bottom",
                l = a ? "left" : "top",
                s = a ? "width" : "height";
              return n[c] < i(r[l]) && (e.offsets.popper[l] = i(r[l]) - n[s]), n[l] > i(r[c]) && (e.offsets.popper[l] = i(r[c])), e
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function(e, t) {
              var n;
              if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var r = t.element;
              if ("string" == typeof r) {
                if (!(r = e.instance.popper.querySelector(r))) return e
              } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
              var o = e.placement.split("-")[0],
                i = e.offsets,
                a = i.popper,
                c = i.reference,
                s = -1 !== ["left", "right"].indexOf(o),
                u = s ? "height" : "width",
                p = s ? "Top" : "Left",
                f = p.toLowerCase(),
                d = s ? "left" : "top",
                h = s ? "bottom" : "right",
                m = A(r)[u];
              c[h] - m < a[f] && (e.offsets.popper[f] -= a[f] - (c[h] - m)), c[f] + m > a[h] && (e.offsets.popper[f] += c[f] + m - a[h]), e.offsets.popper = S(e.offsets.popper);
              var b = c[f] + c[u] / 2 - m / 2,
                g = l(e.instance.popper),
                v = parseFloat(g["margin" + p], 10),
                y = parseFloat(g["border" + p + "Width"], 10),
                O = b - e.offsets.popper[f] - v - y;
              return O = Math.max(Math.min(a[u] - m, O), 0), e.arrowElement = r, e.offsets.arrow = (_(n = {}, f, Math.round(O)), _(n, d, ""), n), e
            },
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function(e, t) {
              if (L(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                r = e.placement.split("-")[0],
                o = T(r),
                i = e.placement.split("-")[1] || "",
                a = [];
              switch (t.behavior) {
                case J.FLIP:
                  a = [r, o];
                  break;
                case J.CLOCKWISE:
                  a = Z(r);
                  break;
                case J.COUNTERCLOCKWISE:
                  a = Z(r, !0);
                  break;
                default:
                  a = t.behavior
              }
              return a.forEach((function(c, l) {
                if (r !== c || a.length === l + 1) return e;
                r = e.placement.split("-")[0], o = T(r);
                var s = e.offsets.popper,
                  u = e.offsets.reference,
                  p = Math.floor,
                  f = "left" === r && p(s.right) > p(u.left) || "right" === r && p(s.left) < p(u.right) || "top" === r && p(s.bottom) > p(u.top) || "bottom" === r && p(s.top) < p(u.bottom),
                  d = p(s.left) < p(n.left),
                  h = p(s.right) > p(n.right),
                  m = p(s.top) < p(n.top),
                  b = p(s.bottom) > p(n.bottom),
                  g = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && b,
                  v = -1 !== ["top", "bottom"].indexOf(r),
                  y = !!t.flipVariations && (v && "start" === i && d || v && "end" === i && h || !v && "start" === i && m || !v && "end" === i && b),
                  O = !!t.flipVariationsByContent && (v && "start" === i && h || v && "end" === i && d || !v && "start" === i && b || !v && "end" === i && m),
                  w = y || O;
                (f || g || w) && (e.flipped = !0, (f || g) && (r = a[l + 1]), w && (i = function(e) {
                  return "end" === e ? "start" : "start" === e ? "end" : e
                }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = E({}, e.offsets.popper, N(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"))
              })), e
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function(e) {
              var t = e.placement,
                n = t.split("-")[0],
                r = e.offsets,
                o = r.popper,
                i = r.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                c = -1 === ["top", "left"].indexOf(n);
              return o[a ? "left" : "top"] = i[n] - (c ? o[a ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = S(o), e
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function(e) {
              if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = M(e.instance.modifiers, (function(e) {
                  return "preventOverflow" === e.name
                })).boundaries;
              if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide) return e;
                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
              } else {
                if (!1 === e.hide) return e;
                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
              }
              return e
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function(e, t) {
              var n = t.x,
                r = t.y,
                o = e.offsets.popper,
                i = M(e.instance.modifiers, (function(e) {
                  return "applyStyle" === e.name
                })).gpuAcceleration;
              void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
              var a = void 0 !== i ? i : t.gpuAcceleration,
                c = h(e.instance.popper),
                l = k(c),
                s = {
                  position: o.position
                },
                u = function(e, t) {
                  var n = e.offsets,
                    r = n.popper,
                    o = n.reference,
                    i = Math.round,
                    a = Math.floor,
                    c = function(e) {
                      return e
                    },
                    l = i(o.width),
                    s = i(r.width),
                    u = -1 !== ["left", "right"].indexOf(e.placement),
                    p = -1 !== e.placement.indexOf("-"),
                    f = t ? u || p || l % 2 == s % 2 ? i : a : c,
                    d = t ? i : c;
                  return {
                    left: f(l % 2 == 1 && s % 2 == 1 && !p && t ? r.left - 1 : r.left),
                    top: d(r.top),
                    bottom: d(r.bottom),
                    right: f(r.right)
                  }
                }(e, window.devicePixelRatio < 2 || !Y),
                p = "bottom" === n ? "top" : "bottom",
                f = "right" === r ? "left" : "right",
                d = F("transform"),
                m = void 0,
                b = void 0;
              if (b = "bottom" === p ? "HTML" === c.nodeName ? -c.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === f ? "HTML" === c.nodeName ? -c.clientWidth + u.right : -l.width + u.right : u.left, a && d) s[d] = "translate3d(" + m + "px, " + b + "px, 0)", s[p] = 0, s[f] = 0, s.willChange = "transform";
              else {
                var g = "bottom" === p ? -1 : 1,
                  v = "right" === f ? -1 : 1;
                s[p] = b * g, s[f] = m * v, s.willChange = p + ", " + f
              }
              var y = {
                "x-placement": e.placement
              };
              return e.attributes = E({}, y, e.attributes), e.styles = E({}, s, e.styles), e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles), e
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function(e) {
              var t, n;
              return q(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
              })), e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles), e
            },
            onLoad: function(e, t, n, r, o) {
              var i = D(o, t, e, n.positionFixed),
                a = I(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
              return t.setAttribute("x-placement", a), q(t, {
                position: n.positionFixed ? "fixed" : "absolute"
              }), n
            },
            gpuAcceleration: void 0
          }
        }
      },
      te = function() {
        function e(t, n) {
          var r = this,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          w(this, e), this.scheduleUpdate = function() {
            return requestAnimationFrame(r.update)
          }, this.update = a(this.update.bind(this)), this.options = E({}, e.Defaults, o), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
          }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, e.Defaults.modifiers, o.modifiers)).forEach((function(t) {
            r.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
          })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
            return E({
              name: e
            }, r.options.modifiers[e])
          })).sort((function(e, t) {
            return e.order - t.order
          })), this.modifiers.forEach((function(e) {
            e.enabled && c(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
          })), this.update();
          var i = this.options.eventsEnabled;
          i && this.enableEventListeners(), this.state.eventsEnabled = i
        }
        return j(e, [{
          key: "update",
          value: function() {
            return z.call(this)
          }
        }, {
          key: "destroy",
          value: function() {
            return B.call(this)
          }
        }, {
          key: "enableEventListeners",
          value: function() {
            return U.call(this)
          }
        }, {
          key: "disableEventListeners",
          value: function() {
            return W.call(this)
          }
        }]), e
      }();
    te.Utils = ("undefined" != typeof window ? window : e).PopperUtils, te.placements = X, te.Defaults = ee, t.a = te
  }).call(this, n(38))
}, function(e, t, n) {
  "use strict";
  e.exports = n(82)
}, function(e, t, n) {
  var r = self.crypto || self.msCrypto;
  e.exports = function(e) {
    e = e || 21;
    for (var t = "", n = r.getRandomValues(new Uint8Array(e)); 0 < e--;) t += "Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-" [63 & n[e]];
    return t
  }
}, function(e, t) {
  e.exports = function(e, t, n) {
    return function(r) {
      if (e[0] === e[1] || t[0] === t[1]) return t[0];
      var o = (t[1] - t[0]) / (e[1] - e[0]),
        i = t[0] + o * (r - e[0]);
      return n ? Math.min(t[1], Math.max(t[0], i)) : i
    }
  }
}, function(e, t) {
  var n = {
    utf8: {
      stringToBytes: function(e) {
        return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
      },
      bytesToString: function(e) {
        return decodeURIComponent(escape(n.bin.bytesToString(e)))
      }
    },
    bin: {
      stringToBytes: function(e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
        return t
      },
      bytesToString: function(e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
        return t.join("")
      }
    }
  };
  e.exports = n
}, function(e, t, n) {
  var r = Array.prototype.slice,
    o = n(66),
    i = n(67),
    a = e.exports = function(e, t, n) {
      return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function(e, t, n) {
        var s, u;
        if (c(e) || c(t)) return !1;
        if (e.prototype !== t.prototype) return !1;
        if (i(e)) return !!i(t) && (e = r.call(e), t = r.call(t), a(e, t, n));
        if (l(e)) {
          if (!l(t)) return !1;
          if (e.length !== t.length) return !1;
          for (s = 0; s < e.length; s++)
            if (e[s] !== t[s]) return !1;
          return !0
        }
        try {
          var p = o(e),
            f = o(t)
        } catch (e) {
          return !1
        }
        if (p.length != f.length) return !1;
        for (p.sort(), f.sort(), s = p.length - 1; s >= 0; s--)
          if (p[s] != f[s]) return !1;
        for (s = p.length - 1; s >= 0; s--)
          if (u = p[s], !a(e[u], t[u], n)) return !1;
        return typeof e == typeof t
      }(e, t, n))
    };

  function c(e) {
    return null == e
  }

  function l(e) {
    return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(e.length > 0 && "number" != typeof e[0]))
  }
}, function(e, t) {
  e.exports = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var r = i(n(4)),
    o = i(n(71));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.default = r.default.createContext || o.default, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  var r = function() {};
  e.exports = r
}, function(e, t, n) {
  var r, o, i;

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  /**!
   * Sortable 1.10.0-rc3
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   */
  i = function() {
    "use strict";

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
        return a(e)
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
      })(t)
    }

    function t(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function n() {
      return (n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
    }

    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function o(e) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? r(o, !0).forEach((function(n) {
          t(e, n, o[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : r(o).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
        }))
      }
      return e
    }

    function i(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }

    function c(e) {
      return function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      }(e) || function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
      }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function l(e) {
      return !!navigator.userAgent.match(e)
    }
    var s = l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
      u = l(/Edge/i),
      p = l(/firefox/i),
      f = l(/safari/i) && !l(/chrome/i) && !l(/android/i),
      d = l(/iP(ad|od|hone)/i),
      h = l(/chrome/i) && l(/android/i),
      m = {
        capture: !1,
        passive: !1
      };

    function b(e, t, n) {
      e.addEventListener(t, n, !s && m)
    }

    function g(e, t, n) {
      e.removeEventListener(t, n, !s && m)
    }

    function v(e, t) {
      if (t) {
        if (">" === t[0] && (t = t.substring(1)), e) try {
          if (e.matches) return e.matches(t);
          if (e.msMatchesSelector) return e.msMatchesSelector(t);
          if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
        } catch (e) {
          return !1
        }
        return !1
      }
    }

    function y(e) {
      return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
    }

    function O(e, t, n, r) {
      if (e) {
        n = n || document;
        do {
          if (null != t && (">" === t[0] ? e.parentNode === n && v(e, t) : v(e, t)) || r && e === n) return e;
          if (e === n) break
        } while (e = y(e))
      }
      return null
    }
    var w, j = /\s+/g;

    function _(e, t, n) {
      if (e && t)
        if (e.classList) e.classList[n ? "add" : "remove"](t);
        else {
          var r = (" " + e.className + " ").replace(j, " ").replace(" " + t + " ", " ");
          e.className = (r + (n ? " " + t : "")).replace(j, " ")
        }
    }

    function E(e, t, n) {
      var r = e && e.style;
      if (r) {
        if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
        t in r || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t), r[t] = n + ("string" == typeof n ? "" : "px")
      }
    }

    function S(e, t) {
      var n = "";
      do {
        var r = E(e, "transform");
        r && "none" !== r && (n = r + " " + n)
      } while (!t && (e = e.parentNode));
      var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix;
      return o && new o(n)
    }

    function k(e, t, n) {
      if (e) {
        var r = e.getElementsByTagName(t),
          o = 0,
          i = r.length;
        if (n)
          for (; o < i; o++) n(r[o], o);
        return r
      }
      return []
    }

    function C() {
      return s ? document.documentElement : document.scrollingElement
    }

    function x(e, t, n, r, o) {
      if (e.getBoundingClientRect || e === window) {
        var i, a, c, l, u, p, f;
        if (e !== window && e !== C() ? (a = (i = e.getBoundingClientRect()).top, c = i.left, l = i.bottom, u = i.right, p = i.height, f = i.width) : (a = 0, c = 0, l = window.innerHeight, u = window.innerWidth, p = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (o = o || e.parentNode, !s))
          do {
            if (o && o.getBoundingClientRect && ("none" !== E(o, "transform") || n && "static" !== E(o, "position"))) {
              var d = o.getBoundingClientRect();
              a -= d.top + parseInt(E(o, "border-top-width")), c -= d.left + parseInt(E(o, "border-left-width")), l = a + i.height, u = c + i.width;
              break
            }
          } while (o = o.parentNode);
        if (r && e !== window) {
          var h = S(o || e),
            m = h && h.a,
            b = h && h.d;
          h && (l = (a /= b) + (p /= b), u = (c /= m) + (f /= m))
        }
        return {
          top: a,
          left: c,
          bottom: l,
          right: u,
          width: f,
          height: p
        }
      }
    }

    function P(e, t, n, r) {
      for (var o = N(e, !0), i = (t || x(e))[n]; o;) {
        var a = x(o)[r];
        if (!("top" === r || "left" === r ? i >= a : i <= a)) return o;
        if (o === C()) break;
        o = N(o, !1)
      }
      return !1
    }

    function I(e, t, n) {
      for (var r = 0, o = 0, i = e.children; o < i.length;) {
        if ("none" !== i[o].style.display && i[o] !== Ne.ghost && i[o] !== Ne.dragged && O(i[o], n.draggable, e, !1)) {
          if (r === t) return i[o];
          r++
        }
        o++
      }
      return null
    }

    function D(e, t) {
      for (var n = e.lastElementChild; n && (n === Ne.ghost || "none" === E(n, "display") || t && !v(n, t));) n = n.previousElementSibling;
      return n || null
    }

    function A(e, t) {
      var n = 0;
      if (!e || !e.parentNode) return -1;
      for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === Ne.clone || t && !v(e, t) || n++;
      return n
    }

    function T(e) {
      var t = 0,
        n = 0,
        r = C();
      if (e)
        do {
          var o = S(e),
            i = o.a,
            a = o.d;
          t += e.scrollLeft * i, n += e.scrollTop * a
        } while (e !== r && (e = e.parentNode));
      return [t, n]
    }

    function N(e, t) {
      if (!e || !e.getBoundingClientRect) return C();
      var n = e,
        r = !1;
      do {
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
          var o = E(n);
          if (n.clientWidth < n.scrollWidth && ("auto" == o.overflowX || "scroll" == o.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == o.overflowY || "scroll" == o.overflowY)) {
            if (!n.getBoundingClientRect || n === document.body) return C();
            if (r || t) return n;
            r = !0
          }
        }
      } while (n = n.parentNode);
      return C()
    }

    function M(e, t) {
      return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
    }

    function R(e, t) {
      return function() {
        if (!w) {
          var n = arguments,
            r = this;
          1 === n.length ? e.call(r, n[0]) : e.apply(r, n), w = setTimeout((function() {
            w = void 0
          }), t)
        }
      }
    }

    function z(e, t, n) {
      e.scrollLeft += t, e.scrollTop += n
    }

    function L(e) {
      var t = window.Polymer,
        n = window.jQuery || window.Zepto;
      return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
    }

    function F(e, t) {
      E(e, "position", "absolute"), E(e, "top", t.top), E(e, "left", t.left), E(e, "width", t.width), E(e, "height", t.height)
    }

    function B(e) {
      E(e, "position", ""), E(e, "top", ""), E(e, "left", ""), E(e, "width", ""), E(e, "height", "")
    }
    var V = "Sortable" + (new Date).getTime();

    function H() {
      var e, t = [];
      return {
        captureAnimationState: function() {
          t = [], this.options.animation && [].slice.call(this.el.children).forEach((function(e) {
            if ("none" !== E(e, "display") && e !== Ne.ghost) {
              t.push({
                target: e,
                rect: x(e)
              });
              var n = x(e);
              if (e.thisAnimationDuration) {
                var r = S(e, !0);
                r && (n.top -= r.f, n.left -= r.e)
              }
              e.fromRect = n
            }
          }))
        },
        addAnimationState: function(e) {
          t.push(e)
        },
        removeAnimationState: function(e) {
          t.splice(function(e, t) {
            for (var n in e)
              if (e.hasOwnProperty(n))
                for (var r in t)
                  if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
            return -1
          }(t, {
            target: e
          }), 1)
        },
        animateAll: function(n) {
          var r = this;
          if (!this.options.animation) return clearTimeout(e), void("function" == typeof n && n());
          var o = !1,
            i = 0;
          t.forEach((function(e) {
            var t = 0,
              n = e.target,
              a = n.fromRect,
              c = x(n),
              l = n.prevFromRect,
              s = n.prevToRect,
              u = e.rect,
              p = S(n, !0);
            p && (c.top -= p.f, c.left -= p.e), n.toRect = c, (P(n, c, "bottom", "top") || P(n, c, "top", "bottom") || P(n, c, "right", "left") || P(n, c, "left", "right")) && (P(n, u, "bottom", "top") || P(n, u, "top", "bottom") || P(n, u, "right", "left") || P(n, u, "left", "right")) && (P(n, a, "bottom", "top") || P(n, a, "top", "bottom") || P(n, a, "right", "left") || P(n, a, "left", "right")) || (n.thisAnimationDuration && M(l, c) && !M(a, c) && (u.top - c.top) / (u.left - c.left) == (a.top - c.top) / (a.left - c.left) && (t = function(e, t, n, r) {
              return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation
            }(u, l, s, r.options)), M(c, a) || (n.prevFromRect = a, n.prevToRect = c, t || (t = r.options.animation), r.animate(n, u, t)), t && (o = !0, i = Math.max(i, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function() {
              n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
            }), t), n.thisAnimationDuration = t))
          })), clearTimeout(e), o ? e = setTimeout((function() {
            "function" == typeof n && n()
          }), i) : "function" == typeof n && n(), t = []
        },
        animate: function(e, t, n) {
          if (n) {
            E(e, "transition", ""), E(e, "transform", "");
            var r = x(e),
              o = S(this.el),
              i = o && o.a,
              a = o && o.d,
              c = (t.left - r.left) / (i || 1),
              l = (t.top - r.top) / (a || 1);
            e.animatingX = !!c, e.animatingY = !!l, E(e, "transform", "translate3d(" + c + "px," + l + "px,0)"),
              function(e) {
                e.offsetWidth
              }(e), E(e, "transition", "transform " + n + "ms" + (this.options.easing ? " " + this.options.easing : "")), E(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout((function() {
                E(e, "transition", ""), E(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
              }), n)
          }
        }
      }
    }
    var U = [],
      W = {
        initializeByDefault: !0
      },
      K = {
        mount: function(e) {
          for (var t in W) !W.hasOwnProperty(t) || t in e || (e[t] = W[t]);
          U.push(e)
        },
        pluginEvent: function(e, t, n) {
          var r = this;
          this.eventCanceled = !1, n.cancel = function() {
            r.eventCanceled = !0
          };
          var i = e + "Global";
          U.forEach((function(r) {
            t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](o({
              sortable: t
            }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](o({
              sortable: t
            }, n)))
          }))
        },
        initializePlugins: function(e, t, r, o) {
          for (var i in U.forEach((function(o) {
              var i = o.pluginName;
              if (e.options[i] || o.initializeByDefault) {
                var a = new o(e, t, e.options);
                a.sortable = e, a.options = e.options, e[i] = a, n(r, a.defaults)
              }
            })), e.options)
            if (e.options.hasOwnProperty(i)) {
              var a = this.modifyOption(e, i, e.options[i]);
              void 0 !== a && (e.options[i] = a)
            }
        },
        getEventProperties: function(e, t) {
          var r = {};
          return U.forEach((function(o) {
            "function" == typeof o.eventProperties && n(r, o.eventProperties.call(t[o.pluginName], e))
          })), r
        },
        modifyOption: function(e, t, n) {
          var r;
          return U.forEach((function(o) {
            e[o.pluginName] && o.optionListeners && "function" == typeof o.optionListeners[t] && (r = o.optionListeners[t].call(e[o.pluginName], n))
          })), r
        }
      };

    function q(e) {
      var t = e.sortable,
        n = e.rootEl,
        r = e.name,
        i = e.targetEl,
        a = e.cloneEl,
        c = e.toEl,
        l = e.fromEl,
        p = e.oldIndex,
        f = e.newIndex,
        d = e.oldDraggableIndex,
        h = e.newDraggableIndex,
        m = e.originalEvent,
        b = e.putSortable,
        g = e.extraEventProperties;
      if (t = t || n && n[V]) {
        var v, y = t.options,
          O = "on" + r.charAt(0).toUpperCase() + r.substr(1);
        !window.CustomEvent || s || u ? (v = document.createEvent("Event")).initEvent(r, !0, !0) : v = new CustomEvent(r, {
          bubbles: !0,
          cancelable: !0
        }), v.to = c || n, v.from = l || n, v.item = i || n, v.clone = a, v.oldIndex = p, v.newIndex = f, v.oldDraggableIndex = d, v.newDraggableIndex = h, v.originalEvent = m, v.pullMode = b ? b.lastPutMode : void 0;
        var w = o({}, g, {}, K.getEventProperties(r, t));
        for (var j in w) v[j] = w[j];
        n && n.dispatchEvent(v), y[O] && y[O].call(t, v)
      }
    }
    var Y = function(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.evt,
        a = i(n, ["evt"]);
      K.pluginEvent.bind(Ne)(e, t, o({
        dragEl: X,
        parentEl: $,
        ghostEl: Z,
        rootEl: J,
        nextEl: Q,
        lastDownEl: ee,
        cloneEl: te,
        cloneHidden: ne,
        dragStarted: pe,
        putSortable: le,
        activeSortable: Ne.active,
        originalEvent: r,
        oldIndex: re,
        oldDraggableIndex: ie,
        newIndex: oe,
        newDraggableIndex: ae,
        hideGhostForTarget: Ie,
        unhideGhostForTarget: De,
        cloneNowHidden: function() {
          ne = !0
        },
        cloneNowShown: function() {
          ne = !1
        },
        dispatchSortableEvent: function(e) {
          G({
            sortable: t,
            name: e,
            originalEvent: r
          })
        }
      }, a))
    };

    function G(e) {
      q(o({
        putSortable: le,
        cloneEl: te,
        targetEl: X,
        rootEl: J,
        oldIndex: re,
        oldDraggableIndex: ie,
        newIndex: oe,
        newDraggableIndex: ae
      }, e))
    }
    if ("undefined" == typeof window || !window.document) throw new Error("Sortable.js requires a window with a document");
    var X, $, Z, J, Q, ee, te, ne, re, oe, ie, ae, ce, le, se, ue, pe, fe, de, he, me, be = !1,
      ge = !1,
      ve = [],
      ye = !1,
      Oe = !1,
      we = [],
      je = !1,
      _e = [],
      Ee = d,
      Se = u || s ? "cssFloat" : "float",
      ke = !h && !d && "draggable" in document.createElement("div"),
      Ce = function() {
        if (s) return !1;
        var e = document.createElement("x");
        return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
      }(),
      xe = function(e, t) {
        var n = E(e),
          r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
          o = I(e, 0, t),
          i = I(e, 1, t),
          a = o && E(o),
          c = i && E(i),
          l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + x(o).width,
          s = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + x(i).width;
        if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (o && a.float && "none" !== a.float) {
          var u = "left" === a.float ? "left" : "right";
          return !i || "both" !== c.clear && c.clear !== u ? "horizontal" : "vertical"
        }
        return o && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || l >= r && "none" === n[Se] || i && "none" === n[Se] && l + s > r) ? "vertical" : "horizontal"
      },
      Pe = function(t) {
        function n(e, t) {
          return function(r, o, i, a) {
            var c = r.options.group.name && o.options.group.name && r.options.group.name === o.options.group.name;
            if (null == e && (t || c)) return !0;
            if (null == e || !1 === e) return !1;
            if (t && "clone" === e) return e;
            if ("function" == typeof e) return n(e(r, o, i, a), t)(r, o, i, a);
            var l = (t ? r : o).options.group.name;
            return !0 === e || "string" == typeof e && e === l || e.join && e.indexOf(l) > -1
          }
        }
        var r = {},
          o = t.group;
        o && "object" == e(o) || (o = {
          name: o
        }), r.name = o.name, r.checkPull = n(o.pull, !0), r.checkPut = n(o.put), r.revertClone = o.revertClone, t.group = r
      },
      Ie = function() {
        !Ce && Z && E(Z, "display", "none")
      },
      De = function() {
        !Ce && Z && E(Z, "display", "")
      };
    document.addEventListener("click", (function(e) {
      if (ge) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), ge = !1, !1
    }), !0);
    var Ae = function(e) {
        if (X) {
          e = e.touches ? e.touches[0] : e;
          var t = (o = e.clientX, i = e.clientY, ve.some((function(e) {
            if (!D(e)) {
              var t = x(e),
                n = e[V].options.emptyInsertThreshold,
                r = o >= t.left - n && o <= t.right + n,
                c = i >= t.top - n && i <= t.bottom + n;
              return n && r && c ? a = e : void 0
            }
          })), a);
          if (t) {
            var n = {};
            for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
            n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[V]._onDragOver(n)
          }
        }
        var o, i, a
      },
      Te = function(e) {
        X && X.parentNode[V]._isOutsideThisEl(e.target)
      };

    function Ne(e, t) {
      if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
      this.el = e, this.options = t = n({}, t), e[V] = this;
      var r = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
          return xe(e, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(e, t) {
          e.setData("Text", t.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
          x: 0,
          y: 0
        },
        supportPointer: !1 !== Ne.supportPointer && "PointerEvent" in window,
        emptyInsertThreshold: 5
      };
      for (var o in K.initializePlugins(this, e, r), r) !(o in t) && (t[o] = r[o]);
      for (var i in Pe(t), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
      this.nativeDraggable = !t.forceFallback && ke, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? b(e, "pointerdown", this._onTapStart) : (b(e, "mousedown", this._onTapStart), b(e, "touchstart", this._onTapStart)), this.nativeDraggable && (b(e, "dragover", this), b(e, "dragenter", this)), ve.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), n(this, H())
    }

    function Me(e, t, n, r, o, i, a, c) {
      var l, p, f = e[V],
        d = f.options.onMove;
      return !window.CustomEvent || s || u ? (l = document.createEvent("Event")).initEvent("move", !0, !0) : l = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
      }), l.to = t, l.from = e, l.dragged = n, l.draggedRect = r, l.related = o || t, l.relatedRect = i || x(t), l.willInsertAfter = c, l.originalEvent = a, e.dispatchEvent(l), d && (p = d.call(f, l, a)), p
    }

    function Re(e) {
      e.draggable = !1
    }

    function ze() {
      je = !1
    }

    function Le(e) {
      for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
      return r.toString(36)
    }

    function Fe(e) {
      return setTimeout(e, 0)
    }

    function Be(e) {
      return clearTimeout(e)
    }
    Ne.prototype = {
      constructor: Ne,
      _isOutsideThisEl: function(e) {
        this.el.contains(e) || e === this.el || (fe = null)
      },
      _getDirection: function(e, t) {
        return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, X) : this.options.direction
      },
      _onTapStart: function(e) {
        if (e.cancelable) {
          var t = this,
            n = this.el,
            r = this.options,
            o = r.preventOnFilter,
            i = e.type,
            a = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e,
            c = (a || e).target,
            l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || c,
            s = r.filter;
          if (function(e) {
              _e.length = 0;
              for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
                var r = t[n];
                r.checked && _e.push(r)
              }
            }(n), !X && !(/mousedown|pointerdown/.test(i) && 0 !== e.button || r.disabled || l.isContentEditable || (c = O(c, r.draggable, n, !1)) && c.animated || ee === c)) {
            if (re = A(c), ie = A(c, r.draggable), "function" == typeof s) {
              if (s.call(this, e, c, this)) return G({
                sortable: t,
                rootEl: l,
                name: "filter",
                targetEl: c,
                toEl: n,
                fromEl: n
              }), Y("filter", t, {
                evt: e
              }), void(o && e.cancelable && e.preventDefault())
            } else if (s && (s = s.split(",").some((function(r) {
                if (r = O(l, r.trim(), n, !1)) return G({
                  sortable: t,
                  rootEl: r,
                  name: "filter",
                  targetEl: c,
                  fromEl: n,
                  toEl: n
                }), Y("filter", t, {
                  evt: e
                }), !0
              })))) return void(o && e.cancelable && e.preventDefault());
            r.handle && !O(l, r.handle, n, !1) || this._prepareDragStart(e, a, c)
          }
        }
      },
      _prepareDragStart: function(e, t, n) {
        var r, o = this,
          i = o.el,
          a = o.options,
          c = i.ownerDocument;
        if (n && !X && n.parentNode === i) {
          J = i, $ = (X = n).parentNode, Q = X.nextSibling, ee = n, ce = a.group, Ne.dragged = X;
          var l = 0,
            f = n.getBoundingClientRect();
          if (f.left + 95 < (t || e).clientX && (l = (t || e).clientX - f.left - 47.5), se = {
              target: X,
              clientX: (t || e).clientX - l,
              clientY: (t || e).clientY
            }, this._lastX = (t || e).clientX - l, this._lastY = (t || e).clientY, X.style["will-change"] = "all", r = function() {
              Y("delayEnded", o, {
                evt: e
              }), Ne.eventCanceled ? o._onDrop() : (o._disableDelayedDragEvents(), !p && o.nativeDraggable && (X.draggable = !0), o._triggerDragStart(e, t), G({
                sortable: o,
                name: "choose",
                originalEvent: e
              }), _(X, a.chosenClass, !0))
            }, a.ignore.split(",").forEach((function(e) {
              k(X, e.trim(), Re)
            })), b(c, "dragover", Ae), b(c, "mousemove", Ae), b(c, "touchmove", Ae), b(c, "mouseup", o._onDrop), b(c, "touchend", o._onDrop), b(c, "touchcancel", o._onDrop), p && this.nativeDraggable && (this.options.touchStartThreshold = 4, X.draggable = !0), Y("delayStart", this, {
              evt: e
            }), !a.delay || a.delayOnTouchOnly && !t || this.nativeDraggable && (u || s)) r();
          else {
            if (Ne.eventCanceled) return void this._onDrop();
            b(c, "mouseup", o._disableDelayedDrag), b(c, "touchend", o._disableDelayedDrag), b(c, "touchcancel", o._disableDelayedDrag), b(c, "mousemove", o._delayedDragTouchMoveHandler), b(c, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && b(c, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(r, a.delay)
          }
        }
      },
      _delayedDragTouchMoveHandler: function(e) {
        var t = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
      },
      _disableDelayedDrag: function() {
        X && Re(X), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
      },
      _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        g(e, "mouseup", this._disableDelayedDrag), g(e, "touchend", this._disableDelayedDrag), g(e, "touchcancel", this._disableDelayedDrag), g(e, "mousemove", this._delayedDragTouchMoveHandler), g(e, "touchmove", this._delayedDragTouchMoveHandler), g(e, "pointermove", this._delayedDragTouchMoveHandler)
      },
      _triggerDragStart: function(e, t) {
        t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? b(document, "pointermove", this._onTouchMove) : b(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (b(X, "dragend", this), b(J, "dragstart", this._onDragStart));
        try {
          document.selection ? Fe((function() {
            document.selection.empty()
          })) : window.getSelection().removeAllRanges()
        } catch (e) {}
      },
      _dragStarted: function(e, t) {
        if (be = !1, J && X) {
          Y("dragStarted", this, {
            evt: t
          }), this.nativeDraggable && b(document, "dragover", Te);
          var n = this.options;
          !e && _(X, n.dragClass, !1), _(X, n.ghostClass, !0), Ne.active = this, e && this._appendGhost(), G({
            sortable: this,
            name: "start",
            originalEvent: t
          })
        } else this._nulling()
      },
      _emulateDragOver: function() {
        if (ue) {
          this._lastX = ue.clientX, this._lastY = ue.clientY, Ie();
          for (var e = document.elementFromPoint(ue.clientX, ue.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ue.clientX, ue.clientY)) !== t;) t = e;
          if (X.parentNode[V]._isOutsideThisEl(e), t)
            do {
              if (t[V] && t[V]._onDragOver({
                  clientX: ue.clientX,
                  clientY: ue.clientY,
                  target: e,
                  rootEl: t
                }) && !this.options.dragoverBubble) break;
              e = t
            } while (t = t.parentNode);
          De()
        }
      },
      _onTouchMove: function(e) {
        if (se) {
          var t = this.options,
            n = t.fallbackTolerance,
            r = t.fallbackOffset,
            o = e.touches ? e.touches[0] : e,
            i = Z && S(Z),
            a = Z && i && i.a,
            c = Z && i && i.d,
            l = Ee && me && T(me),
            s = (o.clientX - se.clientX + r.x) / (a || 1) + (l ? l[0] - we[0] : 0) / (a || 1),
            u = (o.clientY - se.clientY + r.y) / (c || 1) + (l ? l[1] - we[1] : 0) / (c || 1),
            p = e.touches ? "translate3d(" + s + "px," + u + "px,0)" : "translate(" + s + "px," + u + "px)";
          if (!Ne.active && !be) {
            if (n && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < n) return;
            this._onDragStart(e, !0)
          }
          ue = o, E(Z, "webkitTransform", p), E(Z, "mozTransform", p), E(Z, "msTransform", p), E(Z, "transform", p), e.cancelable && e.preventDefault()
        }
      },
      _appendGhost: function() {
        if (!Z) {
          var e = this.options.fallbackOnBody ? document.body : J,
            t = x(X, !0, Ee, !0, e),
            n = this.options;
          if (Ee) {
            for (me = e;
              "static" === E(me, "position") && "none" === E(me, "transform") && me !== document;) me = me.parentNode;
            me !== document.body && me !== document.documentElement ? (me === document && (me = C()), t.top += me.scrollTop, t.left += me.scrollLeft) : me = C(), we = T(me)
          }
          _(Z = X.cloneNode(!0), n.ghostClass, !1), _(Z, n.fallbackClass, !0), _(Z, n.dragClass, !0), E(Z, "transition", ""), E(Z, "transform", ""), E(Z, "box-sizing", "border-box"), E(Z, "margin", 0), E(Z, "top", t.top), E(Z, "left", t.left), E(Z, "width", t.width), E(Z, "height", t.height), E(Z, "opacity", "0.8"), E(Z, "position", Ee ? "absolute" : "fixed"), E(Z, "zIndex", "100000"), E(Z, "pointerEvents", "none"), Ne.ghost = Z, e.appendChild(Z)
        }
      },
      _onDragStart: function(e, t) {
        var n = this,
          r = e.dataTransfer,
          o = n.options;
        Y("dragStart", this, {
          evt: e
        }), Ne.eventCanceled ? this._onDrop() : (Y("setupClone", this), Ne.eventCanceled || ((te = L(X)).draggable = !1, te.style["will-change"] = "", this._hideClone(), _(te, this.options.chosenClass, !1), Ne.clone = te), n.cloneId = Fe((function() {
          Y("clone", n), Ne.eventCanceled || (n.options.removeCloneOnHide || J.insertBefore(te, X), n._hideClone(), G({
            sortable: n,
            name: "clone"
          }))
        })), !t && _(X, o.dragClass, !0), t ? (ge = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (g(document, "mouseup", n._onDrop), g(document, "touchend", n._onDrop), g(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", o.setData && o.setData.call(n, r, X)), b(document, "drop", n), E(X, "transform", "translateZ(0)")), be = !0, n._dragStartId = Fe(n._dragStarted.bind(n, t, e)), b(document, "selectstart", n), pe = !0, f && E(document.body, "user-select", "none"))
      },
      _onDragOver: function(e) {
        var t, n, r, i, a = this.el,
          c = e.target,
          l = this.options,
          s = l.group,
          u = Ne.active,
          p = ce === s,
          f = l.sort,
          d = le || u,
          h = this,
          m = !1;
        if (!je) {
          if (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(), c = O(c, l.draggable, a, !0), R("dragOver"), Ne.eventCanceled) return m;
          if (X.contains(e.target) || c.animated && c.animatingX && c.animatingY || h._ignoreWhileAnimating === c) return F(!1);
          if (ge = !1, u && !l.disabled && (p ? f || (r = !J.contains(X)) : le === this || (this.lastPutMode = ce.checkPull(this, u, X, e)) && s.checkPut(this, u, X, e))) {
            if (i = "vertical" === this._getDirection(e, c), t = x(X), R("dragOverValid"), Ne.eventCanceled) return m;
            if (r) return $ = J, L(), this._hideClone(), R("revert"), Ne.eventCanceled || (Q ? J.insertBefore(X, Q) : J.appendChild(X)), F(!0);
            var b = D(a, l.draggable);
            if (!b || function(e, t, n) {
                var r = x(D(n.el, n.options.draggable));
                return t ? e.clientX > r.right + 10 || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + 10
              }(e, i, this) && !b.animated) {
              if (b === X) return F(!1);
              if (b && a === e.target && (c = b), c && (n = x(c)), !1 !== Me(J, a, X, t, c, n, e, !!c)) return L(), a.appendChild(X), $ = a, B(), F(!0)
            } else if (c.parentNode === a) {
              n = x(c);
              var g, v, y, w = X.parentNode !== a,
                j = ! function(e, t, n) {
                  var r = n ? e.left : e.top,
                    o = n ? e.right : e.bottom,
                    i = n ? e.width : e.height,
                    a = n ? t.left : t.top,
                    c = n ? t.right : t.bottom,
                    l = n ? t.width : t.height;
                  return r === a || o === c || r + i / 2 === a + l / 2
                }(X.animated && X.toRect || t, c.animated && c.toRect || n, i),
                S = i ? "top" : "left",
                k = P(c, null, "top", "top") || P(X, null, "top", "top"),
                C = k ? k.scrollTop : void 0;
              if (fe !== c && (v = n[S], ye = !1, Oe = !j && l.invertSwap || w), 0 !== (g = function(e, t, n, r, o, i, a, c) {
                  var l = r ? e.clientY : e.clientX,
                    s = r ? n.height : n.width,
                    u = r ? n.top : n.left,
                    p = r ? n.bottom : n.right,
                    f = !1;
                  if (!a)
                    if (c && he < s * o) {
                      if (!ye && (1 === de ? l > u + s * i / 2 : l < p - s * i / 2) && (ye = !0), ye) f = !0;
                      else if (1 === de ? l < u + he : l > p - he) return -de
                    } else if (l > u + s * (1 - o) / 2 && l < p - s * (1 - o) / 2) return function(e) {
                    return A(X) < A(e) ? 1 : -1
                  }(t);
                  return (f = f || a) && (l < u + s * i / 2 || l > p - s * i / 2) ? l > u + s / 2 ? 1 : -1 : 0
                }(e, c, n, i, j ? 1 : l.swapThreshold, null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold, Oe, fe === c))) {
                var I = A(X);
                do {
                  I -= g, y = $.children[I]
                } while (y && ("none" === E(y, "display") || y === Z))
              }
              if (0 === g || y === c) return F(!1);
              fe = c, de = g;
              var T = c.nextElementSibling,
                N = !1,
                M = Me(J, a, X, t, c, n, e, N = 1 === g);
              if (!1 !== M) return 1 !== M && -1 !== M || (N = 1 === M), je = !0, setTimeout(ze, 30), L(), N && !T ? a.appendChild(X) : c.parentNode.insertBefore(X, N ? T : c), k && z(k, 0, C - k.scrollTop), $ = X.parentNode, void 0 === v || Oe || (he = Math.abs(v - x(c)[S])), B(), F(!0)
            }
            if (a.contains(X)) return F(!1)
          }
          return !1
        }

        function R(l, s) {
          Y(l, h, o({
            evt: e,
            isOwner: p,
            axis: i ? "vertical" : "horizontal",
            revert: r,
            dragRect: t,
            targetRect: n,
            canSort: f,
            fromSortable: d,
            target: c,
            completed: F,
            onMove: function(n, r) {
              return Me(J, a, X, t, n, x(n), e, r)
            },
            changed: B
          }, s))
        }

        function L() {
          R("dragOverAnimationCapture"), h.captureAnimationState(), h !== d && d.captureAnimationState()
        }

        function F(t) {
          return R("dragOverCompleted", {
            insertion: t
          }), t && (p ? u._hideClone() : u._showClone(h), h !== d && (_(X, le ? le.options.ghostClass : u.options.ghostClass, !1), _(X, l.ghostClass, !0)), le !== h && h !== Ne.active ? le = h : h === Ne.active && le && (le = null), d === h && (h._ignoreWhileAnimating = c), h.animateAll((function() {
            R("dragOverAnimationComplete"), h._ignoreWhileAnimating = null
          })), h !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (c === X && !X.animated || c === a && !c.animated) && (fe = null), l.dragoverBubble || e.rootEl || c === document || (X.parentNode[V]._isOutsideThisEl(e.target), !t && Ae(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0
        }

        function B() {
          oe = A(X), ae = A(X, l.draggable), G({
            sortable: h,
            name: "change",
            toEl: a,
            newIndex: oe,
            newDraggableIndex: ae,
            originalEvent: e
          })
        }
      },
      _ignoreWhileAnimating: null,
      _offMoveEvents: function() {
        g(document, "mousemove", this._onTouchMove), g(document, "touchmove", this._onTouchMove), g(document, "pointermove", this._onTouchMove), g(document, "dragover", Ae), g(document, "mousemove", Ae), g(document, "touchmove", Ae)
      },
      _offUpEvents: function() {
        var e = this.el.ownerDocument;
        g(e, "mouseup", this._onDrop), g(e, "touchend", this._onDrop), g(e, "pointerup", this._onDrop), g(e, "touchcancel", this._onDrop), g(document, "selectstart", this)
      },
      _onDrop: function(e) {
        var t = this.el,
          n = this.options;
        oe = A(X), ae = A(X, n.draggable), Y("drop", this, {
          evt: e
        }), $ = X && X.parentNode, oe = A(X), ae = A(X, n.draggable), Ne.eventCanceled ? this._nulling() : (be = !1, Oe = !1, ye = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Be(this.cloneId), Be(this._dragStartId), this.nativeDraggable && (g(document, "drop", this), g(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), f && E(document.body, "user-select", ""), e && (pe && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), Z && Z.parentNode && Z.parentNode.removeChild(Z), (J === $ || le && "clone" !== le.lastPutMode) && te && te.parentNode && te.parentNode.removeChild(te), X && (this.nativeDraggable && g(X, "dragend", this), Re(X), X.style["will-change"] = "", pe && !be && _(X, le ? le.options.ghostClass : this.options.ghostClass, !1), _(X, this.options.chosenClass, !1), G({
          sortable: this,
          name: "unchoose",
          toEl: $,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: e
        }), J !== $ ? (oe >= 0 && (G({
          rootEl: $,
          name: "add",
          toEl: $,
          fromEl: J,
          originalEvent: e
        }), G({
          sortable: this,
          name: "remove",
          toEl: $,
          originalEvent: e
        }), G({
          rootEl: $,
          name: "sort",
          toEl: $,
          fromEl: J,
          originalEvent: e
        }), G({
          sortable: this,
          name: "sort",
          toEl: $,
          originalEvent: e
        })), le && le.save()) : oe !== re && oe >= 0 && (G({
          sortable: this,
          name: "update",
          toEl: $,
          originalEvent: e
        }), G({
          sortable: this,
          name: "sort",
          toEl: $,
          originalEvent: e
        })), Ne.active ? (null != oe && -1 !== oe || (oe = re, ae = ie), G({
          sortable: this,
          name: "end",
          toEl: $,
          originalEvent: e
        }), this.save()) : G({
          sortable: this,
          name: "end",
          toEl: $,
          originalEvent: e
        }))), this._nulling())
      },
      _nulling: function() {
        Y("nulling", this), J = X = $ = Z = Q = te = ee = ne = se = ue = pe = oe = ae = re = ie = fe = de = le = ce = Ne.dragged = Ne.ghost = Ne.clone = Ne.active = null, _e.forEach((function(e) {
          e.checked = !0
        })), _e.length = 0
      },
      handleEvent: function(e) {
        switch (e.type) {
          case "drop":
          case "dragend":
            this._onDrop(e);
            break;
          case "dragenter":
          case "dragover":
            X && (this._onDragOver(e), function(e) {
              e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault()
            }(e));
            break;
          case "selectstart":
            e.preventDefault()
        }
      },
      toArray: function() {
        for (var e, t = [], n = this.el.children, r = 0, o = n.length, i = this.options; r < o; r++) O(e = n[r], i.draggable, this.el, !1) && t.push(e.getAttribute(i.dataIdAttr) || Le(e));
        return t
      },
      sort: function(e) {
        var t = {},
          n = this.el;
        this.toArray().forEach((function(e, r) {
          var o = n.children[r];
          O(o, this.options.draggable, n, !1) && (t[e] = o)
        }), this), e.forEach((function(e) {
          t[e] && (n.removeChild(t[e]), n.appendChild(t[e]))
        }))
      },
      save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
      },
      closest: function(e, t) {
        return O(e, t || this.options.draggable, this.el, !1)
      },
      option: function(e, t) {
        var n = this.options;
        if (void 0 === t) return n[e];
        var r = K.modifyOption(this, e, t);
        n[e] = void 0 !== r ? r : t, "group" === e && Pe(n)
      },
      destroy: function() {
        Y("destroy", this);
        var e = this.el;
        e[V] = null, g(e, "mousedown", this._onTapStart), g(e, "touchstart", this._onTapStart), g(e, "pointerdown", this._onTapStart), this.nativeDraggable && (g(e, "dragover", this), g(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), (function(e) {
          e.removeAttribute("draggable")
        })), this._onDrop(), ve.splice(ve.indexOf(this.el), 1), this.el = e = null
      },
      _hideClone: function() {
        if (!ne) {
          if (Y("hideClone", this), Ne.eventCanceled) return;
          E(te, "display", "none"), this.options.removeCloneOnHide && te.parentNode && te.parentNode.removeChild(te), ne = !0
        }
      },
      _showClone: function(e) {
        if ("clone" === e.lastPutMode) {
          if (ne) {
            if (Y("showClone", this), Ne.eventCanceled) return;
            J.contains(X) && !this.options.group.revertClone ? J.insertBefore(te, X) : Q ? J.insertBefore(te, Q) : J.appendChild(te), this.options.group.revertClone && this._animate(X, te), E(te, "display", ""), ne = !1
          }
        } else this._hideClone()
      }
    }, b(document, "touchmove", (function(e) {
      (Ne.active || be) && e.cancelable && e.preventDefault()
    })), Ne.utils = {
      on: b,
      off: g,
      css: E,
      find: k,
      is: function(e, t) {
        return !!O(e, t, e, !1)
      },
      extend: function(e, t) {
        if (e && t)
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
      },
      throttle: R,
      closest: O,
      toggleClass: _,
      clone: L,
      index: A,
      nextTick: Fe,
      cancelNextTick: Be,
      detectDirection: xe,
      getChild: I
    }, Ne.get = function(e) {
      return e[V]
    }, Ne.mount = function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      t[0].constructor === Array && (t = t[0]), t.forEach((function(e) {
        if (!e.prototype || !e.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
        e.utils && (Ne.utils = o({}, Ne.utils, {}, e.utils)), K.mount(e)
      }))
    }, Ne.create = function(e, t) {
      return new Ne(e, t)
    }, Ne.version = "1.10.0-rc3";
    var Ve, He, Ue, We, Ke, qe, Ye = [],
      Ge = !1;

    function Xe() {
      Ye.forEach((function(e) {
        clearInterval(e.pid)
      })), Ye = []
    }

    function $e() {
      clearInterval(qe)
    }
    var Ze, Je = R((function(e, t, n, r) {
        if (t.scroll) {
          var o, i = (e.touches ? e.touches[0] : e).clientX,
            a = (e.touches ? e.touches[0] : e).clientY,
            c = t.scrollSensitivity,
            l = t.scrollSpeed,
            s = C(),
            u = !1;
          He !== n && (He = n, Xe(), Ve = t.scroll, o = t.scrollFn, !0 === Ve && (Ve = N(n, !0)));
          var p = 0,
            f = Ve;
          do {
            var d = f,
              h = x(d),
              m = h.top,
              b = h.bottom,
              g = h.left,
              v = h.right,
              y = h.width,
              O = h.height,
              w = void 0,
              j = void 0,
              _ = d.scrollWidth,
              S = d.scrollHeight,
              k = E(d),
              P = d.scrollLeft,
              I = d.scrollTop;
            d === s ? (w = y < _ && ("auto" === k.overflowX || "scroll" === k.overflowX || "visible" === k.overflowX), j = O < S && ("auto" === k.overflowY || "scroll" === k.overflowY || "visible" === k.overflowY)) : (w = y < _ && ("auto" === k.overflowX || "scroll" === k.overflowX), j = O < S && ("auto" === k.overflowY || "scroll" === k.overflowY));
            var D = w && (Math.abs(v - i) <= c && P + y < _) - (Math.abs(g - i) <= c && !!P),
              A = j && (Math.abs(b - a) <= c && I + O < S) - (Math.abs(m - a) <= c && !!I);
            if (!Ye[p])
              for (var T = 0; T <= p; T++) Ye[T] || (Ye[T] = {});
            Ye[p].vx == D && Ye[p].vy == A && Ye[p].el === d || (Ye[p].el = d, Ye[p].vx = D, Ye[p].vy = A, clearInterval(Ye[p].pid), 0 == D && 0 == A || (u = !0, Ye[p].pid = setInterval(function() {
              r && 0 === this.layer && Ne.active._onTouchMove(Ke);
              var t = Ye[this.layer].vy ? Ye[this.layer].vy * l : 0,
                n = Ye[this.layer].vx ? Ye[this.layer].vx * l : 0;
              "function" == typeof o && "continue" !== o.call(Ne.dragged.parentNode[V], n, t, e, Ke, Ye[this.layer].el) || z(Ye[this.layer].el, n, t)
            }.bind({
              layer: p
            }), 24))), p++
          } while (t.bubbleScroll && f !== s && (f = N(f, !1)));
          Ge = u
        }
      }), 30),
      Qe = function(e) {
        var t = e.originalEvent,
          n = e.putSortable,
          r = e.dragEl,
          o = e.activeSortable,
          i = e.dispatchSortableEvent,
          a = e.hideGhostForTarget,
          c = e.unhideGhostForTarget,
          l = n || o;
        a();
        var s = document.elementFromPoint(t.clientX, t.clientY);
        c(), l && !l.el.contains(s) && (i("spill"), this.onSpill({
          dragEl: r,
          putSortable: n
        }))
      };

    function et() {}

    function tt() {}
    et.prototype = {
      startIndex: null,
      dragStart: function(e) {
        var t = e.oldDraggableIndex;
        this.startIndex = t
      },
      onSpill: function(e) {
        var t = e.dragEl,
          n = e.putSortable;
        this.sortable.captureAnimationState(), n && n.captureAnimationState();
        var r = I(this.sortable.el, this.startIndex, this.options);
        r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
      },
      drop: Qe
    }, n(et, {
      pluginName: "revertOnSpill"
    }), tt.prototype = {
      onSpill: function(e) {
        var t = e.dragEl,
          n = e.putSortable || this.sortable;
        n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll()
      },
      drop: Qe
    }, n(tt, {
      pluginName: "removeOnSpill"
    });
    var nt, rt, ot, it, at, ct = [],
      lt = [],
      st = !1,
      ut = !1,
      pt = !1;

    function ft(e, t) {
      lt.forEach((function(n, r) {
        var o = t.children[n.sortableIndex + (e ? Number(r) : 0)];
        o ? t.insertBefore(n, o) : t.appendChild(n)
      }))
    }

    function dt() {
      ct.forEach((function(e) {
        e !== ot && e.parentNode && e.parentNode.removeChild(e)
      }))
    }
    return Ne.mount(new function() {
      function e() {
        for (var e in this.defaults = {
            scroll: !0,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
          }, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
      }
      return e.prototype = {
        dragStarted: function(e) {
          var t = e.originalEvent;
          this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? b(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? b(document, "touchmove", this._handleFallbackAutoScroll) : b(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(e) {
          var t = e.originalEvent;
          this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
        },
        drop: function() {
          this.sortable.nativeDraggable ? g(document, "dragover", this._handleAutoScroll) : (g(document, "pointermove", this._handleFallbackAutoScroll), g(document, "touchmove", this._handleFallbackAutoScroll), g(document, "mousemove", this._handleFallbackAutoScroll)), $e(), Xe(), clearTimeout(w), w = void 0
        },
        nulling: function() {
          Ke = He = Ve = Ge = qe = Ue = We = null, Ye.length = 0
        },
        _handleFallbackAutoScroll: function(e) {
          this._handleAutoScroll(e, !0)
        },
        _handleAutoScroll: function(e, t) {
          var n = this,
            r = (e.touches ? e.touches[0] : e).clientX,
            o = (e.touches ? e.touches[0] : e).clientY,
            i = document.elementFromPoint(r, o);
          if (Ke = e, t || u || s || f) {
            Je(e, this.options, i, t);
            var a = N(i, !0);
            !Ge || qe && r === Ue && o === We || (qe && $e(), qe = setInterval((function() {
              var i = N(document.elementFromPoint(r, o), !0);
              i !== a && (a = i, Xe()), Je(e, n.options, i, t)
            }), 10), Ue = r, We = o)
          } else {
            if (!this.options.bubbleScroll || N(i, !0) === C()) return void Xe();
            Je(e, this.options, N(i, !1), !1)
          }
        }
      }, n(e, {
        pluginName: "scroll",
        initializeByDefault: !0
      })
    }), Ne.mount(tt, et), Ne.mount(new function() {
      function e() {
        this.defaults = {
          swapClass: "sortable-swap-highlight"
        }
      }
      return e.prototype = {
        dragStart: function(e) {
          var t = e.dragEl;
          Ze = t
        },
        dragOverValid: function(e) {
          var t = e.completed,
            n = e.target,
            r = e.onMove,
            o = e.activeSortable,
            i = e.changed,
            a = e.cancel;
          if (o.options.swap) {
            var c = this.sortable.el,
              l = this.options;
            if (n && n !== c) {
              var s = Ze;
              !1 !== r(n) ? (_(n, l.swapClass, !0), Ze = n) : Ze = null, s && s !== Ze && _(s, l.swapClass, !1)
            }
            i(), t(!0), a()
          }
        },
        drop: function(e) {
          var t, n, r, o, i, a, c = e.activeSortable,
            l = e.putSortable,
            s = e.dragEl,
            u = l || this.sortable,
            p = this.options;
          Ze && _(Ze, p.swapClass, !1), Ze && (p.swap || l && l.options.swap) && s !== Ze && (u.captureAnimationState(), u !== c && c.captureAnimationState(), n = Ze, i = (t = s).parentNode, a = n.parentNode, i && a && !i.isEqualNode(n) && !a.isEqualNode(t) && (r = A(t), o = A(n), i.isEqualNode(a) && r < o && o++, i.insertBefore(n, i.children[r]), a.insertBefore(t, a.children[o])), u.animateAll(), u !== c && c.animateAll())
        },
        nulling: function() {
          Ze = null
        }
      }, n(e, {
        pluginName: "swap",
        eventProperties: function() {
          return {
            swapItem: Ze
          }
        }
      })
    }), Ne.mount(new function() {
      function e(e) {
        for (var t in this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
        e.options.supportPointer ? b(document, "pointerup", this._deselectMultiDrag) : (b(document, "mouseup", this._deselectMultiDrag), b(document, "touchend", this._deselectMultiDrag)), b(document, "keydown", this._checkKeyDown), b(document, "keyup", this._checkKeyUp), this.defaults = {
          selectedClass: "sortable-selected",
          multiDragKey: null,
          setData: function(t, n) {
            var r = "";
            ct.length && rt === e ? ct.forEach((function(e, t) {
              r += (t ? ", " : "") + e.textContent
            })) : r = n.textContent, t.setData("Text", r)
          }
        }
      }
      return e.prototype = {
        multiDragKeyDown: !1,
        isMultiDrag: !1,
        delayStartGlobal: function(e) {
          var t = e.dragEl;
          ot = t
        },
        delayEnded: function() {
          this.isMultiDrag = ~ct.indexOf(ot)
        },
        setupClone: function(e) {
          var t = e.sortable,
            n = e.cancel;
          if (this.isMultiDrag) {
            for (var r = 0; r < ct.length; r++) lt.push(L(ct[r])), lt[r].sortableIndex = ct[r].sortableIndex, lt[r].draggable = !1, lt[r].style["will-change"] = "", _(lt[r], this.options.selectedClass, !1), ct[r] === ot && _(lt[r], this.options.chosenClass, !1);
            t._hideClone(), n()
          }
        },
        clone: function(e) {
          var t = e.sortable,
            n = e.rootEl,
            r = e.dispatchSortableEvent,
            o = e.cancel;
          this.isMultiDrag && (this.options.removeCloneOnHide || ct.length && rt === t && (ft(!0, n), r("clone"), o()))
        },
        showClone: function(e) {
          var t = e.cloneNowShown,
            n = e.rootEl,
            r = e.cancel;
          this.isMultiDrag && (ft(!1, n), lt.forEach((function(e) {
            E(e, "display", "")
          })), t(), at = !1, r())
        },
        hideClone: function(e) {
          var t = this,
            n = (e.sortable, e.cloneNowHidden),
            r = e.cancel;
          this.isMultiDrag && (lt.forEach((function(e) {
            E(e, "display", "none"), t.options.removeCloneOnHide && e.parentNode && e.parentNode.removeChild(e)
          })), n(), at = !0, r())
        },
        dragStartGlobal: function(e) {
          e.sortable, !this.isMultiDrag && rt && rt.multiDrag._deselectMultiDrag(), ct.forEach((function(e) {
            e.sortableIndex = A(e)
          })), ct = ct.sort((function(e, t) {
            return e.sortableIndex - t.sortableIndex
          })), pt = !0
        },
        dragStarted: function(e) {
          var t = this,
            n = e.sortable;
          if (this.isMultiDrag) {
            if (this.options.sort && (n.captureAnimationState(), this.options.animation)) {
              ct.forEach((function(e) {
                e !== ot && E(e, "position", "absolute")
              }));
              var r = x(ot, !1, !0, !0);
              ct.forEach((function(e) {
                e !== ot && F(e, r)
              })), ut = !0, st = !0
            }
            n.animateAll((function() {
              ut = !1, st = !1, t.options.animation && ct.forEach((function(e) {
                B(e)
              })), t.options.sort && dt()
            }))
          }
        },
        dragOver: function(e) {
          var t = e.target,
            n = e.completed,
            r = e.cancel;
          ut && ~ct.indexOf(t) && (n(!1), r())
        },
        revert: function(e) {
          var t = e.fromSortable,
            n = e.rootEl,
            r = e.sortable,
            o = e.dragRect;
          ct.length > 1 && (ct.forEach((function(e) {
            r.addAnimationState({
              target: e,
              rect: ut ? x(e) : o
            }), B(e), e.fromRect = o, t.removeAnimationState(e)
          })), ut = !1, function(e, t) {
            ct.forEach((function(n, r) {
              var o = t.children[n.sortableIndex + (e ? Number(r) : 0)];
              o ? t.insertBefore(n, o) : t.appendChild(n)
            }))
          }(!this.options.removeCloneOnHide, n))
        },
        dragOverCompleted: function(e) {
          var t = e.sortable,
            n = e.isOwner,
            r = e.insertion,
            o = e.activeSortable,
            i = e.parentEl,
            a = e.putSortable,
            c = this.options;
          if (r) {
            if (n && o._hideClone(), st = !1, c.animation && ct.length > 1 && (ut || !n && !o.options.sort && !a)) {
              var l = x(ot, !1, !0, !0);
              ct.forEach((function(e) {
                e !== ot && (F(e, l), i.appendChild(e))
              })), ut = !0
            }
            if (!n)
              if (ut || dt(), ct.length > 1) {
                var s = at;
                o._showClone(t), o.options.animation && !at && s && lt.forEach((function(e) {
                  o.addAnimationState({
                    target: e,
                    rect: it
                  }), e.fromRect = it, e.thisAnimationDuration = null
                }))
              } else o._showClone(t)
          }
        },
        dragOverAnimationCapture: function(e) {
          var t = e.dragRect,
            r = e.isOwner,
            o = e.activeSortable;
          if (ct.forEach((function(e) {
              e.thisAnimationDuration = null
            })), o.options.animation && !r && o.multiDrag.isMultiDrag) {
            it = n({}, t);
            var i = S(ot, !0);
            it.top -= i.f, it.left -= i.e
          }
        },
        dragOverAnimationComplete: function() {
          ut && (ut = !1, dt())
        },
        drop: function(e) {
          var t = e.originalEvent,
            n = e.rootEl,
            r = e.parentEl,
            o = e.sortable,
            i = e.dispatchSortableEvent,
            a = e.oldIndex,
            c = e.putSortable,
            l = c || this.sortable;
          if (t) {
            var s = this.options,
              u = r.children;
            if (!pt)
              if (s.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), _(ot, s.selectedClass, !~ct.indexOf(ot)), ~ct.indexOf(ot)) ct.splice(ct.indexOf(ot), 1), nt = null, q({
                sortable: o,
                rootEl: n,
                name: "deselect",
                targetEl: ot,
                originalEvt: t
              });
              else {
                if (ct.push(ot), q({
                    sortable: o,
                    rootEl: n,
                    name: "select",
                    targetEl: ot,
                    originalEvt: t
                  }), (!s.multiDragKey || this.multiDragKeyDown) && t.shiftKey && nt && o.el.contains(nt)) {
                  var p, f, d = A(nt),
                    h = A(ot);
                  if (~d && ~h && d !== h)
                    for (h > d ? (f = d, p = h) : (f = h, p = d + 1); f < p; f++) ~ct.indexOf(u[f]) || (_(u[f], s.selectedClass, !0), ct.push(u[f]), q({
                      sortable: o,
                      rootEl: n,
                      name: "select",
                      targetEl: u[f],
                      originalEvt: t
                    }))
                } else nt = ot;
                rt = l
              } if (pt && this.isMultiDrag) {
              if ((r[V].options.sort || r !== n) && ct.length > 1) {
                var m = x(ot),
                  b = A(ot, ":not(." + this.options.selectedClass + ")");
                if (!st && s.animation && (ot.thisAnimationDuration = null), l.captureAnimationState(), !st && (s.animation && (ot.fromRect = m, ct.forEach((function(e) {
                    if (e.thisAnimationDuration = null, e !== ot) {
                      var t = ut ? x(e) : m;
                      e.fromRect = t, l.addAnimationState({
                        target: e,
                        rect: t
                      })
                    }
                  }))), dt(), ct.forEach((function(e) {
                    u[b] ? r.insertBefore(e, u[b]) : r.appendChild(e), b++
                  })), a === A(ot))) {
                  var g = !1;
                  ct.forEach((function(e) {
                    e.sortableIndex === A(e) || (g = !0)
                  })), g && i("update")
                }
                ct.forEach((function(e) {
                  B(e)
                })), l.animateAll()
              }
              rt = l
            }(n === r || c && "clone" !== c.lastPutMode) && lt.forEach((function(e) {
              e.parentNode && e.parentNode.removeChild(e)
            }))
          }
        },
        nullingGlobal: function() {
          this.isMultiDrag = pt = !1, lt.length = 0
        },
        destroyGlobal: function() {
          this._deselectMultiDrag(), g(document, "pointerup", this._deselectMultiDrag), g(document, "mouseup", this._deselectMultiDrag), g(document, "touchend", this._deselectMultiDrag), g(document, "keydown", this._checkKeyDown), g(document, "keyup", this._checkKeyUp)
        },
        _deselectMultiDrag: function(e) {
          if (!pt && rt === this.sortable && !(e && O(e.target, this.options.draggable, this.sortable.el, !1) || e && 0 !== e.button))
            for (; ct.length;) {
              var t = ct[0];
              _(t, this.options.selectedClass, !1), ct.shift(), q({
                sortable: this.sortable,
                rootEl: this.sortable.el,
                name: "deselect",
                targetEl: t,
                originalEvt: e
              })
            }
        },
        _checkKeyDown: function(e) {
          e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
        },
        _checkKeyUp: function(e) {
          e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
        }
      }, n(e, {
        pluginName: "multiDrag",
        utils: {
          select: function(e) {
            var t = e.parentNode[V];
            t && t.options.multiDrag && !~ct.indexOf(e) && (rt && rt !== t && (rt.multiDrag._deselectMultiDrag(), rt = t), _(e, t.options.selectedClass, !0), ct.push(e))
          },
          deselect: function(e) {
            var t = e.parentNode[V],
              n = ct.indexOf(e);
            t && t.options.multiDrag && ~n && (_(e, t.options.selectedClass, !1), ct.splice(n, 1))
          }
        },
        eventProperties: function() {
          var e = this,
            t = [],
            n = [];
          return ct.forEach((function(r) {
            var o;
            t.push({
              multiDragElement: r,
              index: r.sortableIndex
            }), o = ut && r !== ot ? -1 : ut ? A(r, ":not(." + e.options.selectedClass + ")") : A(r), n.push({
              multiDragElement: r,
              index: o
            })
          })), {
            items: c(ct),
            clones: [].concat(lt),
            oldIndicies: t,
            newIndicies: n
          }
        },
        optionListeners: {
          multiDragKey: function(e) {
            return "ctrl" === (e = e.toLowerCase()) ? e = "Control" : e.length > 1 && (e = e.charAt(0).toUpperCase() + e.substr(1)), e
          }
        }
      })
    }), Ne
  }, "object" === a(t) && void 0 !== e ? e.exports = i() : void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
}, function(e, t) {
  e.exports = window.wp.components
}, function(e, t, n) {
  "use strict";
  const r = (e, t, n) => {
      e.splice(n < 0 ? e.length + n : n, 0, e.splice(t, 1)[0])
    },
    o = (e, t, n) => (e = e.slice(), r(e, t, n), e);
  e.exports = o, e.exports.default = o, e.exports.mutate = r
}, function(e, t, n) {
  var r;
  ! function() {
    function o(e, t, n) {
      return e.call.apply(e.bind, arguments)
    }

    function i(e, t, n) {
      if (!e) throw Error();
      if (2 < arguments.length) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function() {
          var n = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(n, r), e.apply(t, n)
        }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }

    function a(e, t, n) {
      return (a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? o : i).apply(null, arguments)
    }
    var c = Date.now || function() {
      return +new Date
    };

    function l(e, t) {
      this.a = e, this.o = t || e, this.c = this.o.document
    }
    var s = !!window.FontFace;

    function u(e, t, n, r) {
      if (t = e.c.createElement(t), n)
        for (var o in n) n.hasOwnProperty(o) && ("style" == o ? t.style.cssText = n[o] : t.setAttribute(o, n[o]));
      return r && t.appendChild(e.c.createTextNode(r)), t
    }

    function p(e, t, n) {
      (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement), e.insertBefore(n, e.lastChild)
    }

    function f(e) {
      e.parentNode && e.parentNode.removeChild(e)
    }

    function d(e, t, n) {
      t = t || [], n = n || [];
      for (var r = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
        for (var i = !1, a = 0; a < r.length; a += 1)
          if (t[o] === r[a]) {
            i = !0;
            break
          } i || r.push(t[o])
      }
      for (t = [], o = 0; o < r.length; o += 1) {
        for (i = !1, a = 0; a < n.length; a += 1)
          if (r[o] === n[a]) {
            i = !0;
            break
          } i || t.push(r[o])
      }
      e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function h(e, t) {
      for (var n = e.className.split(/\s+/), r = 0, o = n.length; r < o; r++)
        if (n[r] == t) return !0;
      return !1
    }

    function m(e, t, n) {
      function r() {
        c && o && i && (c(a), c = null)
      }
      t = u(e, "link", {
        rel: "stylesheet",
        href: t,
        media: "all"
      });
      var o = !1,
        i = !0,
        a = null,
        c = n || null;
      s ? (t.onload = function() {
        o = !0, r()
      }, t.onerror = function() {
        o = !0, a = Error("Stylesheet failed to load"), r()
      }) : setTimeout((function() {
        o = !0, r()
      }), 0), p(e, "head", t)
    }

    function b(e, t, n, r) {
      var o = e.c.getElementsByTagName("head")[0];
      if (o) {
        var i = u(e, "script", {
            src: t
          }),
          a = !1;
        return i.onload = i.onreadystatechange = function() {
          a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), i.onload = i.onreadystatechange = null, "HEAD" == i.parentNode.tagName && o.removeChild(i))
        }, o.appendChild(i), setTimeout((function() {
          a || (a = !0, n && n(Error("Script load timeout")))
        }), r || 5e3), i
      }
      return null
    }

    function g() {
      this.a = 0, this.c = null
    }

    function v(e) {
      return e.a++,
        function() {
          e.a--, O(e)
        }
    }

    function y(e, t) {
      e.c = t, O(e)
    }

    function O(e) {
      0 == e.a && e.c && (e.c(), e.c = null)
    }

    function w(e) {
      this.a = e || "-"
    }

    function j(e, t) {
      this.c = e, this.f = 4, this.a = "n";
      var n = (t || "n4").match(/^([nio])([1-9])$/i);
      n && (this.a = n[1], this.f = parseInt(n[2], 10))
    }

    function _(e) {
      var t = [];
      e = e.split(/,\s*/);
      for (var n = 0; n < e.length; n++) {
        var r = e[n].replace(/['"]/g, ""); - 1 != r.indexOf(" ") || /^\d/.test(r) ? t.push("'" + r + "'") : t.push(r)
      }
      return t.join(",")
    }

    function E(e) {
      return e.a + e.f
    }

    function S(e) {
      var t = "normal";
      return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
    }

    function k(e) {
      var t = 4,
        n = "n",
        r = null;
      return e && ((r = e.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()), (r = e.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? t = 7 : /[1-9]00/.test(r[1]) && (t = parseInt(r[1].substr(0, 1), 10)))), n + t
    }

    function C(e, t) {
      this.c = e, this.f = e.o.document.documentElement, this.h = t, this.a = new w("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
    }

    function x(e) {
      if (e.g) {
        var t = h(e.f, e.a.c("wf", "active")),
          n = [],
          r = [e.a.c("wf", "loading")];
        t || n.push(e.a.c("wf", "inactive")), d(e.f, n, r)
      }
      P(e, "inactive")
    }

    function P(e, t, n) {
      e.j && e.h[t] && (n ? e.h[t](n.c, E(n)) : e.h[t]())
    }

    function I() {
      this.c = {}
    }

    function D(e, t) {
      this.c = e, this.f = t, this.a = u(this.c, "span", {
        "aria-hidden": "true"
      }, this.f)
    }

    function A(e) {
      p(e.c, "body", e.a)
    }

    function T(e) {
      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + _(e.c) + ";font-style:" + S(e) + ";font-weight:" + e.f + "00;"
    }

    function N(e, t, n, r, o, i) {
      this.g = e, this.j = t, this.a = r, this.c = n, this.f = o || 3e3, this.h = i || void 0
    }

    function M(e, t, n, r, o, i, a) {
      this.v = e, this.B = t, this.c = n, this.a = r, this.s = a || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = i || null, this.m = this.j = this.h = this.g = null, this.g = new D(this.c, this.s), this.h = new D(this.c, this.s), this.j = new D(this.c, this.s), this.m = new D(this.c, this.s), e = T(e = new j(this.a.c + ",serif", E(this.a))), this.g.a.style.cssText = e, e = T(e = new j(this.a.c + ",sans-serif", E(this.a))), this.h.a.style.cssText = e, e = T(e = new j("serif", E(this.a))), this.j.a.style.cssText = e, e = T(e = new j("sans-serif", E(this.a))), this.m.a.style.cssText = e, A(this.g), A(this.h), A(this.j), A(this.m)
    }
    w.prototype.c = function(e) {
      for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
      return t.join(this.a)
    }, N.prototype.start = function() {
      var e = this.c.o.document,
        t = this,
        n = c(),
        r = new Promise((function(r, o) {
          ! function i() {
            c() - n >= t.f ? o() : e.fonts.load(function(e) {
              return S(e) + " " + e.f + "00 300px " + _(e.c)
            }(t.a), t.h).then((function(e) {
              1 <= e.length ? r() : setTimeout(i, 25)
            }), (function() {
              o()
            }))
          }()
        })),
        o = null,
        i = new Promise((function(e, n) {
          o = setTimeout(n, t.f)
        }));
      Promise.race([i, r]).then((function() {
        o && (clearTimeout(o), o = null), t.g(t.a)
      }), (function() {
        t.j(t.a)
      }))
    };
    var R = {
        D: "serif",
        C: "sans-serif"
      },
      z = null;

    function L() {
      if (null === z) {
        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        z = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
      }
      return z
    }

    function F(e, t, n) {
      for (var r in R)
        if (R.hasOwnProperty(r) && t === e.f[R[r]] && n === e.f[R[r]]) return !0;
      return !1
    }

    function B(e) {
      var t, n = e.g.a.offsetWidth,
        r = e.h.a.offsetWidth;
      (t = n === e.f.serif && r === e.f["sans-serif"]) || (t = L() && F(e, n, r)), t ? c() - e.A >= e.w ? L() && F(e, n, r) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? V(e, e.v) : V(e, e.B) : function(e) {
        setTimeout(a((function() {
          B(this)
        }), e), 50)
      }(e) : V(e, e.v)
    }

    function V(e, t) {
      setTimeout(a((function() {
        f(this.g.a), f(this.h.a), f(this.j.a), f(this.m.a), t(this.a)
      }), e), 0)
    }

    function H(e, t, n) {
      this.c = e, this.a = t, this.f = 0, this.m = this.j = !1, this.s = n
    }
    M.prototype.start = function() {
      this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = c(), B(this)
    };
    var U = null;

    function W(e) {
      0 == --e.f && e.j && (e.m ? ((e = e.a).g && d(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), P(e, "active")) : x(e.a))
    }

    function K(e) {
      this.j = e, this.a = new I, this.h = 0, this.f = this.g = !0
    }

    function q(e, t, n, r, o) {
      var i = 0 == --e.h;
      (e.f || e.g) && setTimeout((function() {
        var e = o || null,
          c = r || {};
        if (0 === n.length && i) x(t.a);
        else {
          t.f += n.length, i && (t.j = i);
          var l, s = [];
          for (l = 0; l < n.length; l++) {
            var u = n[l],
              p = c[u.c],
              f = t.a,
              h = u;
            if (f.g && d(f.f, [f.a.c("wf", h.c, E(h).toString(), "loading")]), P(f, "fontloading", h), f = null, null === U)
              if (window.FontFace) {
                h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var m = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                U = h ? 42 < parseInt(h[1], 10) : !m
              } else U = !1;
            f = U ? new N(a(t.g, t), a(t.h, t), t.c, u, t.s, p) : new M(a(t.g, t), a(t.h, t), t.c, u, t.s, e, p), s.push(f)
          }
          for (l = 0; l < s.length; l++) s[l].start()
        }
      }), 0)
    }

    function Y(e, t) {
      this.c = e, this.a = t
    }

    function G(e, t) {
      this.c = e, this.a = t
    }

    function X(e, t) {
      this.c = e || $, this.a = [], this.f = [], this.g = t || ""
    }
    H.prototype.g = function(e) {
      var t = this.a;
      t.g && d(t.f, [t.a.c("wf", e.c, E(e).toString(), "active")], [t.a.c("wf", e.c, E(e).toString(), "loading"), t.a.c("wf", e.c, E(e).toString(), "inactive")]), P(t, "fontactive", e), this.m = !0, W(this)
    }, H.prototype.h = function(e) {
      var t = this.a;
      if (t.g) {
        var n = h(t.f, t.a.c("wf", e.c, E(e).toString(), "active")),
          r = [],
          o = [t.a.c("wf", e.c, E(e).toString(), "loading")];
        n || r.push(t.a.c("wf", e.c, E(e).toString(), "inactive")), d(t.f, r, o)
      }
      P(t, "fontinactive", e), W(this)
    }, K.prototype.load = function(e) {
      this.c = new l(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes,
        function(e, t, n) {
          var r = [],
            o = n.timeout;
          ! function(e) {
            e.g && d(e.f, [e.a.c("wf", "loading")]), P(e, "loading")
          }(t);
          r = function(e, t, n) {
            var r, o = [];
            for (r in t)
              if (t.hasOwnProperty(r)) {
                var i = e.c[r];
                i && o.push(i(t[r], n))
              } return o
          }(e.a, n, e.c);
          var i = new H(e.c, t, o);
          for (e.h = r.length, t = 0, n = r.length; t < n; t++) r[t].load((function(t, n, r) {
            q(e, i, t, n, r)
          }))
        }(this, new C(this.c, e), e)
    }, Y.prototype.load = function(e) {
      var t = this,
        n = t.a.projectId,
        r = t.a.version;
      if (n) {
        var o = t.c.o;
        b(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (r ? "?v=" + r : ""), (function(r) {
          r ? e([]) : (o["__MonotypeConfiguration__" + n] = function() {
            return t.a
          }, function t() {
            if (o["__mti_fntLst" + n]) {
              var r, i = o["__mti_fntLst" + n](),
                a = [];
              if (i)
                for (var c = 0; c < i.length; c++) {
                  var l = i[c].fontfamily;
                  null != i[c].fontStyle && null != i[c].fontWeight ? (r = i[c].fontStyle + i[c].fontWeight, a.push(new j(l, r))) : a.push(new j(l))
                }
              e(a)
            } else setTimeout((function() {
              t()
            }), 50)
          }())
        })).id = "__MonotypeAPIScript__" + n
      } else e([])
    }, G.prototype.load = function(e) {
      var t, n, r = this.a.urls || [],
        o = this.a.families || [],
        i = this.a.testStrings || {},
        a = new g;
      for (t = 0, n = r.length; t < n; t++) m(this.c, r[t], v(a));
      var c = [];
      for (t = 0, n = o.length; t < n; t++)
        if ((r = o[t].split(":"))[1])
          for (var l = r[1].split(","), s = 0; s < l.length; s += 1) c.push(new j(r[0], l[s]));
        else c.push(new j(r[0]));
      y(a, (function() {
        e(c, i)
      }))
    };
    var $ = "https://fonts.googleapis.com/css";

    function Z(e) {
      this.f = e, this.a = [], this.c = {}
    }
    var J = {
        latin: "BESbswy",
        "latin-ext": "çöüğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ"
      },
      Q = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
      },
      ee = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
      },
      te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

    function ne(e, t) {
      this.c = e, this.a = t
    }
    var re = {
      Arimo: !0,
      Cousine: !0,
      Tinos: !0
    };

    function oe(e, t) {
      this.c = e, this.a = t
    }

    function ie(e, t) {
      this.c = e, this.f = t, this.a = []
    }
    ne.prototype.load = function(e) {
      var t = new g,
        n = this.c,
        r = new X(this.a.api, this.a.text),
        o = this.a.families;
      ! function(e, t) {
        for (var n = t.length, r = 0; r < n; r++) {
          var o = t[r].split(":");
          3 == o.length && e.f.push(o.pop());
          var i = "";
          2 == o.length && "" != o[1] && (i = ":"), e.a.push(o.join(i))
        }
      }(r, o);
      var i = new Z(o);
      ! function(e) {
        for (var t = e.f.length, n = 0; n < t; n++) {
          var r = e.f[n].split(":"),
            o = r[0].replace(/\+/g, " "),
            i = ["n4"];
          if (2 <= r.length) {
            var a;
            if (a = [], c = r[1])
              for (var c, l = (c = c.split(",")).length, s = 0; s < l; s++) {
                var u;
                if ((u = c[s]).match(/^[\w-]+$/))
                  if (null == (f = te.exec(u.toLowerCase()))) u = "";
                  else {
                    if (u = null == (u = f[2]) || "" == u ? "n" : ee[u], null == (f = f[1]) || "" == f) f = "4";
                    else var p = Q[f],
                      f = p || (isNaN(f) ? "4" : f.substr(0, 1));
                    u = [u, f].join("")
                  }
                else u = "";
                u && a.push(u)
              }
            0 < a.length && (i = a), 3 == r.length && (a = [], 0 < (r = (r = r[2]) ? r.split(",") : a).length && (r = J[r[0]]) && (e.c[o] = r))
          }
          for (e.c[o] || (r = J[o]) && (e.c[o] = r), r = 0; r < i.length; r += 1) e.a.push(new j(o, i[r]))
        }
      }(i), m(n, function(e) {
        if (0 == e.a.length) throw Error("No fonts to load!");
        if (-1 != e.c.indexOf("kit=")) return e.c;
        for (var t = e.a.length, n = [], r = 0; r < t; r++) n.push(e.a[r].replace(/ /g, "+"));
        return t = e.c + "?family=" + n.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
      }(r), v(t)), y(t, (function() {
        e(i.a, i.c, re)
      }))
    }, oe.prototype.load = function(e) {
      var t = this.a.id,
        n = this.c.o;
      t ? b(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", (function(t) {
        if (t) e([]);
        else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
          t = n.Typekit.config.fn;
          for (var r = [], o = 0; o < t.length; o += 2)
            for (var i = t[o], a = t[o + 1], c = 0; c < a.length; c++) r.push(new j(i, a[c]));
          try {
            n.Typekit.load({
              events: !1,
              classes: !1,
              async: !0
            })
          } catch (e) {}
          e(r)
        }
      }), 2e3) : e([])
    }, ie.prototype.load = function(e) {
      var t = this.f.id,
        n = this.c.o,
        r = this;
      t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
        for (var o = 0, i = n.fonts.length; o < i; ++o) {
          var a = n.fonts[o];
          r.a.push(new j(a.name, k("font-weight:" + a.weight + ";font-style:" + a.style)))
        }
        e(r.a)
      }, b(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(e) {
        return e.o.location.hostname || e.a.location.hostname
      }(this.c) + "/" + t + ".js", (function(t) {
        t && e([])
      }))) : e([])
    };
    var ae = new K(window);
    ae.a.c.custom = function(e, t) {
      return new G(t, e)
    }, ae.a.c.fontdeck = function(e, t) {
      return new ie(t, e)
    }, ae.a.c.monotype = function(e, t) {
      return new Y(t, e)
    }, ae.a.c.typekit = function(e, t) {
      return new oe(t, e)
    }, ae.a.c.google = function(e, t) {
      return new ne(t, e)
    };
    var ce = {
      load: a(ae.load, ae)
    };
    void 0 === (r = function() {
      return ce
    }.call(t, n, t, e)) || (e.exports = r)
  }()
}, function(e, t, n) {
  var r, o, i, a, c;
  r = n(101), o = n(55).utf8, i = n(102), a = n(55).bin, (c = function(e, t) {
    e.constructor == String ? e = t && "binary" === t.encoding ? a.stringToBytes(e) : o.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
    for (var n = r.bytesToWords(e), l = 8 * e.length, s = 1732584193, u = -271733879, p = -1732584194, f = 271733878, d = 0; d < n.length; d++) n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
    n[l >>> 5] |= 128 << l % 32, n[14 + (l + 64 >>> 9 << 4)] = l;
    var h = c._ff,
      m = c._gg,
      b = c._hh,
      g = c._ii;
    for (d = 0; d < n.length; d += 16) {
      var v = s,
        y = u,
        O = p,
        w = f;
      s = h(s, u, p, f, n[d + 0], 7, -680876936), f = h(f, s, u, p, n[d + 1], 12, -389564586), p = h(p, f, s, u, n[d + 2], 17, 606105819), u = h(u, p, f, s, n[d + 3], 22, -1044525330), s = h(s, u, p, f, n[d + 4], 7, -176418897), f = h(f, s, u, p, n[d + 5], 12, 1200080426), p = h(p, f, s, u, n[d + 6], 17, -1473231341), u = h(u, p, f, s, n[d + 7], 22, -45705983), s = h(s, u, p, f, n[d + 8], 7, 1770035416), f = h(f, s, u, p, n[d + 9], 12, -1958414417), p = h(p, f, s, u, n[d + 10], 17, -42063), u = h(u, p, f, s, n[d + 11], 22, -1990404162), s = h(s, u, p, f, n[d + 12], 7, 1804603682), f = h(f, s, u, p, n[d + 13], 12, -40341101), p = h(p, f, s, u, n[d + 14], 17, -1502002290), s = m(s, u = h(u, p, f, s, n[d + 15], 22, 1236535329), p, f, n[d + 1], 5, -165796510), f = m(f, s, u, p, n[d + 6], 9, -1069501632), p = m(p, f, s, u, n[d + 11], 14, 643717713), u = m(u, p, f, s, n[d + 0], 20, -373897302), s = m(s, u, p, f, n[d + 5], 5, -701558691), f = m(f, s, u, p, n[d + 10], 9, 38016083), p = m(p, f, s, u, n[d + 15], 14, -660478335), u = m(u, p, f, s, n[d + 4], 20, -405537848), s = m(s, u, p, f, n[d + 9], 5, 568446438), f = m(f, s, u, p, n[d + 14], 9, -1019803690), p = m(p, f, s, u, n[d + 3], 14, -187363961), u = m(u, p, f, s, n[d + 8], 20, 1163531501), s = m(s, u, p, f, n[d + 13], 5, -1444681467), f = m(f, s, u, p, n[d + 2], 9, -51403784), p = m(p, f, s, u, n[d + 7], 14, 1735328473), s = b(s, u = m(u, p, f, s, n[d + 12], 20, -1926607734), p, f, n[d + 5], 4, -378558), f = b(f, s, u, p, n[d + 8], 11, -2022574463), p = b(p, f, s, u, n[d + 11], 16, 1839030562), u = b(u, p, f, s, n[d + 14], 23, -35309556), s = b(s, u, p, f, n[d + 1], 4, -1530992060), f = b(f, s, u, p, n[d + 4], 11, 1272893353), p = b(p, f, s, u, n[d + 7], 16, -155497632), u = b(u, p, f, s, n[d + 10], 23, -1094730640), s = b(s, u, p, f, n[d + 13], 4, 681279174), f = b(f, s, u, p, n[d + 0], 11, -358537222), p = b(p, f, s, u, n[d + 3], 16, -722521979), u = b(u, p, f, s, n[d + 6], 23, 76029189), s = b(s, u, p, f, n[d + 9], 4, -640364487), f = b(f, s, u, p, n[d + 12], 11, -421815835), p = b(p, f, s, u, n[d + 15], 16, 530742520), s = g(s, u = b(u, p, f, s, n[d + 2], 23, -995338651), p, f, n[d + 0], 6, -198630844), f = g(f, s, u, p, n[d + 7], 10, 1126891415), p = g(p, f, s, u, n[d + 14], 15, -1416354905), u = g(u, p, f, s, n[d + 5], 21, -57434055), s = g(s, u, p, f, n[d + 12], 6, 1700485571), f = g(f, s, u, p, n[d + 3], 10, -1894986606), p = g(p, f, s, u, n[d + 10], 15, -1051523), u = g(u, p, f, s, n[d + 1], 21, -2054922799), s = g(s, u, p, f, n[d + 8], 6, 1873313359), f = g(f, s, u, p, n[d + 15], 10, -30611744), p = g(p, f, s, u, n[d + 6], 15, -1560198380), u = g(u, p, f, s, n[d + 13], 21, 1309151649), s = g(s, u, p, f, n[d + 4], 6, -145523070), f = g(f, s, u, p, n[d + 11], 10, -1120210379), p = g(p, f, s, u, n[d + 2], 15, 718787259), u = g(u, p, f, s, n[d + 9], 21, -343485551), s = s + v >>> 0, u = u + y >>> 0, p = p + O >>> 0, f = f + w >>> 0
    }
    return r.endian([s, u, p, f])
  })._ff = function(e, t, n, r, o, i, a) {
    var c = e + (t & n | ~t & r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
  }, c._gg = function(e, t, n, r, o, i, a) {
    var c = e + (t & r | n & ~r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
  }, c._hh = function(e, t, n, r, o, i, a) {
    var c = e + (t ^ n ^ r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
  }, c._ii = function(e, t, n, r, o, i, a) {
    var c = e + (n ^ (t | ~r)) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + t
  }, c._blocksize = 16, c._digestsize = 16, e.exports = function(e, t) {
    if (null == e) throw new Error("Illegal argument " + e);
    var n = r.wordsToBytes(c(e, t));
    return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : r.bytesToHex(n)
  }
}, function(e, t, n) {
  n.p = ct_localizations.public_url, -1 === navigator.userAgent.indexOf("MSIE") && -1 === navigator.userAgent.indexOf("Trident") || (document.body.insertAdjacentHTML("beforeend", ct_localizations.internet_explorer_template), document.body.classList.add("ct-ie"))
}, function(e, t) {
  function n(e) {
    var t = [];
    for (var n in e) t.push(n);
    return t
  }(e.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
}, function(e, t) {
  var n = "[object Arguments]" == function() {
    return Object.prototype.toString.call(arguments)
  }();

  function r(e) {
    return "[object Arguments]" == Object.prototype.toString.call(e)
  }

  function o(e) {
    return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
  }(t = e.exports = n ? r : o).supported = r, t.unsupported = o
}, function(e, t, n) {
  var r = {
    "./background/BackgroundModal.js": 40,
    "./background/ImagePicker.js": 41,
    "./background/PatternPicker.js": 30,
    "./box-shadow/box-shadow-modal.js": 42,
    "./color-picker/color-picker-iris.js": 44,
    "./color-picker/picker-modal.js": 26,
    "./color-picker/quick-color-picker.js": 37,
    "./color-picker/single-picker.js": 31,
    "./ct-background.js": 70,
    "./ct-border.js": 77,
    "./ct-box-shadow.js": 78,
    "./ct-checkboxes.js": 79,
    "./ct-color-palettes-picker.js": 80,
    "./ct-color-picker.js": 45,
    "./ct-divider.js": 81,
    "./ct-footer-builder.js": 104,
    "./ct-header-builder.js": 103,
    "./ct-image-picker.js": 83,
    "./ct-image-uploader.js": 84,
    "./ct-layers.js": 85,
    "./ct-notification.js": 86,
    "./ct-number.js": 87,
    "./ct-panel.js": 16,
    "./ct-radio.js": 88,
    "./ct-ratio.js": 89,
    "./ct-select.js": 25,
    "./ct-slider.js": 90,
    "./ct-spacing.js": 91,
    "./ct-switch.js": 46,
    "./ct-title.js": 92,
    "./ct-typography.js": 93,
    "./ct-visibility.js": 95,
    "./ct-widget-area.js": 96,
    "./hidden.js": 97,
    "./react-outside-click-handler.js": 14,
    "./text.js": 98,
    "./textarea.js": 99,
    "./typography/FontOptions.js": 49,
    "./typography/FontsList.js": 50,
    "./typography/TypographyModal.js": 47,
    "./typography/VariationsList.js": 48,
    "./typography/default-data.js": 29,
    "./typography/helpers.js": 20,
    "./wp-editor.js": 100
  };

  function o(e) {
    var t = i(e);
    return n(t)
  }

  function i(e) {
    if (!n.o(r, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return r[e]
  }
  o.keys = function() {
    return Object.keys(r)
  }, o.resolve = i, e.exports = o, o.id = 68
}, function(e, t) {
  var n, r, o = e.exports = {};

  function i() {
    throw new Error("setTimeout has not been defined")
  }

  function a() {
    throw new Error("clearTimeout has not been defined")
  }

  function c(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : i
    } catch (e) {
      n = i
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : a
    } catch (e) {
      r = a
    }
  }();
  var l, s = [],
    u = !1,
    p = -1;

  function f() {
    u && l && (u = !1, l.length ? s = l.concat(s) : p = -1, s.length && d())
  }

  function d() {
    if (!u) {
      var e = c(f);
      u = !0;
      for (var t = s.length; t;) {
        for (l = s, s = []; ++p < t;) l && l[p].run();
        p = -1, t = s.length
      }
      l = null, u = !1,
        function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t
  }

  function m() {}
  o.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    s.push(new h(e, t)), 1 !== s.length || u || c(d)
  }, h.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
    return []
  }, o.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, o.cwd = function() {
    return "/"
  }, o.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, o.umask = function() {
    return 0
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(40),
    c = n(14),
    l = n(24),
    s = n(30),
    u = n(1);

  function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function d(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var h = function(e) {
    var t = e.option,
      n = e.value,
      o = e.onChange,
      h = d(Object(r.useState)(!1), 2),
      m = h[0],
      b = h[1],
      g = d(Object(r.useState)(!1), 2),
      v = g[0],
      y = g[1],
      O = Object(r.useRef)();
    return n = function(e) {
      return !e.background_type && e[Object.keys(e)[0]].color ? {
        background_type: "color",
        background_pattern: "type-1",
        background_image: {
          attachment_id: null,
          x: 0,
          y: 0
        },
        background_repeat: "no-repeat",
        background_size: "auto",
        background_attachment: "scroll",
        patternColor: {
          default: {
            color: "#e5e7ea"
          }
        },
        backgroundColor: {
          default: e[Object.keys(e)[0]]
        }
      } : e
    }(n), Object(r.createElement)(l.a, null, Object(r.createElement)("div", {
      ref: O,
      className: i()("ct-background", {
        active: m
      })
    }, Object(r.createElement)(l.c, null, (function(e) {
      var t = e.ref;
      return Object(r.createElement)("div", {
        className: i()("ct-background-preview", {
          "no-color": "color" === n.background_type && "CT_CSS_SKIP_RULE" === n.backgroundColor.default.color
        }),
        ref: t,
        onClick: function(e) {
          e.preventDefault(), b(!m), "color" === n.background_type && "CT_CSS_SKIP_RULE" === n.backgroundColor.default.color && o(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? p(n, !0).forEach((function(t) {
                f(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }({}, n, {
            backgroundColor: {
              default: {
                color: "#ffffff"
              }
            }
          }))
        },
        "data-background-type": n.background_type,
        style: {
          backgroundColor: n.backgroundColor.default.color,
          "--backgroundPosition": "".concat(Math.round(100 * parseFloat(n.background_image.x)), "% ").concat(Math.round(100 * parseFloat(n.background_image.y)), "%"),
          "--patternMask": "pattern" === n.background_type ? "url(".concat(Object(s.getUrlForPattern)(n.background_pattern), ")") : "",
          "--backgroundImage": n.background_image.url ? "url(".concat(n.background_image.url, ")") : "none",
          "--patternColor": n.patternColor.default.color
        }
      }, Object(r.createElement)("i", {
        className: "ct-tooltip-top"
      }, {
        inherit: Object(u.__)("Inherited", "blocksy"),
        pattern: Object(u.__)("Pattern", "blocksy"),
        color: Object(u.__)("Color", "blocksy"),
        image: Object(u.__)("Image", "blocksy")
      } ["color" === n.background_type && "CT_CSS_SKIP_RULE" === n.backgroundColor.default.color ? "inherit" : n.background_type]), "color" === n.background_type && "CT_CSS_SKIP_RULE" === n.backgroundColor.default.color && Object(r.createElement)("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 30 30"
      }, Object(r.createElement)("path", {
        d: "M15 3c-3 0-5.7 1.1-7.8 2.9-.4.3-.5.9-.2 1.4.3.4 1 .5 1.4.2h.1C10.3 5.9 12.5 5 15 5c5.2 0 9.5 3.9 10 9h-3l4 6 4-6h-3.1C26.4 7.9 21.3 3 15 3zM4 10l-4 6h3.1c.5 6.1 5.6 11 11.9 11 3 0 5.7-1.1 7.8-2.9.4-.3.5-1 .2-1.4-.3-.4-1-.5-1.4-.2h-.1c-1.7 1.5-4 2.4-6.5 2.4-5.2 0-9.5-3.9-10-9h3L4 10z"
      })))
    })), O && O.current && Object(r.createElement)(l.b, {
      eventsEnabled: m,
      modifiers: {
        preventOverflow: {
          enabled: !1
        },
        hide: {
          enabled: !1
        }
      }
    }, (function(e) {
      var l = e.ref,
        s = e.placement;
      return O && O.current && Object(r.createPortal)(Object(r.createElement)(c.default, {
        useCapture: !1,
        display: "block",
        disabled: !m || v,
        onOutsideClick: function() {
          setTimeout((function() {
            return b(!1)
          }))
        },
        wrapperProps: {
          ref: l,
          "data-placement": s,
          className: i()("ct-background-modal", {
            active: m
          })
        }
      }, Object(r.createElement)(a.default, {
        onChange: o,
        value: n,
        innerRef: l,
        placement: s,
        option: t,
        isOpen: m,
        setOutsideClickFreezed: y
      })), O.current.closest(".ct-control").querySelector(".ct-background-modal-wrapper"))
    }))))
  };
  h.ControlEnd = function() {
    return Object(r.createElement)("div", {
      className: "ct-background-modal-wrapper",
      onMouseDown: function(e) {
        return e.stopPropagation()
      },
      onMouseUp: function(e) {
        return e.stopPropagation()
      },
      onClick: function(e) {
        return e.stopPropagation()
      }
    })
  }, t.default = h
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var r = n(4),
    o = (a(r), a(n(39))),
    i = a(n(74));
  a(n(75));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function c(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function l(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function s(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  var u = 1073741823;
  t.default = function(e, t) {
    var n, a, p = "__create-react-context-" + (0, i.default)() + "__",
      f = function(e) {
        function n() {
          var t, r;
          c(this, n);
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
          return t = r = l(this, e.call.apply(e, [this].concat(i))), r.emitter = function(e) {
            var t = [];
            return {
              on: function(e) {
                t.push(e)
              },
              off: function(e) {
                t = t.filter((function(t) {
                  return t !== e
                }))
              },
              get: function() {
                return e
              },
              set: function(n, r) {
                e = n, t.forEach((function(t) {
                  return t(e, r)
                }))
              }
            }
          }(r.props.value), l(r, t)
        }
        return s(n, e), n.prototype.getChildContext = function() {
          var e;
          return (e = {})[p] = this.emitter, e
        }, n.prototype.componentWillReceiveProps = function(e) {
          if (this.props.value !== e.value) {
            var n = this.props.value,
              r = e.value,
              o = void 0;
            ((i = n) === (a = r) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) ? o = 0: (o = "function" == typeof t ? t(n, r) : u, 0 !== (o |= 0) && this.emitter.set(e.value, o))
          }
          var i, a
        }, n.prototype.render = function() {
          return this.props.children
        }, n
      }(r.Component);
    f.childContextTypes = ((n = {})[p] = o.default.object.isRequired, n);
    var d = function(t) {
      function n() {
        var e, r;
        c(this, n);
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return e = r = l(this, t.call.apply(t, [this].concat(i))), r.state = {
          value: r.getValue()
        }, r.onUpdate = function(e, t) {
          0 != ((0 | r.observedBits) & t) && r.setState({
            value: r.getValue()
          })
        }, l(r, e)
      }
      return s(n, t), n.prototype.componentWillReceiveProps = function(e) {
        var t = e.observedBits;
        this.observedBits = null == t ? u : t
      }, n.prototype.componentDidMount = function() {
        this.context[p] && this.context[p].on(this.onUpdate);
        var e = this.props.observedBits;
        this.observedBits = null == e ? u : e
      }, n.prototype.componentWillUnmount = function() {
        this.context[p] && this.context[p].off(this.onUpdate)
      }, n.prototype.getValue = function() {
        return this.context[p] ? this.context[p].get() : e
      }, n.prototype.render = function() {
        return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);
        var e
      }, n
    }(r.Component);
    return d.contextTypes = ((a = {})[p] = o.default.object, a), {
      Provider: f,
      Consumer: d
    }
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  var r = n(73);

  function o() {}

  function i() {}
  i.resetWarningCache = o, e.exports = function() {
    function e(e, t, n, o, i, a) {
      if (a !== r) {
        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw c.name = "Invariant Violation", c
      }
    }

    function t() {
      return e
    }
    e.isRequired = e;
    var n = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: i,
      resetWarningCache: o
    };
    return n.PropTypes = n, n
  }
}, function(e, t, n) {
  "use strict";
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
  "use strict";
  (function(t) {
    var n = "__global_unique_id__";
    e.exports = function() {
      return t[n] = (t[n] || 0) + 1
    }
  }).call(this, n(38))
}, function(e, t, n) {
  "use strict";
  var r = n(76);
  e.exports = r
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return function() {
      return e
    }
  }
  var o = function() {};
  o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
    return this
  }, o.thatReturnsArgument = function(e) {
    return e
  }, e.exports = o
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(14),
    i = n(2),
    a = n.n(i),
    c = n(45);

  function l(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(n, !0).forEach((function(t) {
        p(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function f(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var d = function(e, t, n) {
      return Math.max(e, Math.min(t, n))
    },
    h = function(e) {
      var t, n = e.value,
        i = (e.option, e.onChange),
        s = f(Object(r.useState)(!1), 2),
        h = s[0],
        m = s[1];
      return Object(r.createElement)("div", {
        className: a()("ct-border-option")
      }, Object(r.createElement)("div", {
        className: a()("ct-value-changer", (t = {}, p(t, "active", h), p(t, "ct-disabled", "none" === n.style), t))
      }, Object(r.createElement)("input", {
        type: "number",
        value: n.width,
        onChange: function(e) {
          var t = e.target.value;
          return i(u({}, n, {
            width: d(1, 5, parseInt(t, 10) || 1)
          }))
        }
      }), Object(r.createElement)("span", {
        className: "ct-value-divider"
      }), Object(r.createElement)("span", {
        className: "ct-current-value",
        "data-style": n.style,
        onClick: function() {
          return m(!h)
        }
      }, "none" === n.style ? n.style : null), Object(r.createElement)(o.default, {
        disabled: !h,
        onOutsideClick: function() {
          h && m(!1)
        }
      }, Object(r.createElement)("ul", {
        className: "ct-styles-list"
      }, ["solid", "dashed", "dotted", "none"].reduce((function(e, t, n) {
        return [].concat(l(e.slice(0, n % 2 == 0 ? void 0 : -1)), l(n % 2 == 0 ? [
          [t]
        ] : [
          [e[e.length - 1][0], t]
        ]))
      }), []).map((function(e) {
        return Object(r.createElement)("li", {
          key: e[0]
        }, e.map((function(e) {
          return Object(r.createElement)("span", p({
            className: a()({
              active: e === n.style
            }),
            "data-style": e,
            key: e,
            onClick: function() {
              i(u({}, n, {
                style: e
              })), m(!1)
            }
          }, "data-style", e), "none" === e ? e : null)
        })))
      }))))), Object(r.createElement)(c.default, {
        onChange: function(e) {
          return i(u({}, n, {
            color: e.default
          }))
        },
        option: {
          pickers: [{
            id: "default",
            title: "Initial"
          }]
        },
        value: {
          default: n.color
        }
      }))
    };
  h.ControlEnd = function() {
    return Object(r.createElement)("div", {
      className: "ct-color-modal-wrapper",
      onMouseDown: function(e) {
        return e.stopPropagation()
      },
      onMouseUp: function(e) {
        return e.stopPropagation()
      }
    })
  }, t.default = h
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(14),
    i = n(2),
    a = n.n(i),
    c = n(31),
    l = (n(9), n(1)),
    s = (n(24), n(37), n(42));

  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(n, !0).forEach((function(t) {
        f(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function d(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var h = function(e) {
    var t = e.value,
      n = e.option,
      i = e.onChange,
      u = d(Object(r.useState)({
        isPicking: null,
        isTransitioning: null
      }), 2),
      f = u[0],
      h = f.isPicking,
      m = f.isTransitioning,
      b = u[1],
      g = Object(r.useRef)(),
      v = Object(r.useRef)();
    return Object(r.createElement)("div", {
      ref: g,
      className: a()("ct-box-shadow", {
        "ct-disabled": !t.enable
      })
    }, Object(r.createElement)("div", {
      className: "ct-box-shadow-options"
    }, Object(r.createElement)(o.default, {
      useCapture: !1,
      disabled: !h,
      className: "ct-box-shadow-values",
      additionalRefs: [v],
      onOutsideClick: function() {
        console.log("here click outside"), h && b({
          isTransitioning: h.split(":")[0],
          isPicking: null
        })
      },
      wrapperProps: {
        onClick: function(e) {
          if (e.preventDefault(), t.enable) {
            var n = h ? "opts" === h.split(":")[0] ? null : "opts:".concat(h.split(":")[0]) : "opts";
            b({
              isTransitioning: "opts",
              isPicking: n
            })
          }
        }
      }
    }, Object(r.createElement)("button", {
      type: "button",
      className: a()({
        crossed: !t.enable
      }),
      onClick: function(e) {
        e.preventDefault(), e.stopPropagation(), i(p({}, t, {
          enable: !t.enable
        }))
      }
    }, Object(r.createElement)("svg", {
      width: "14px",
      height: "14px",
      viewBox: "0 0 24 24"
    }, Object(r.createElement)("path", {
      d: "M12,4C4.1,4,0,12,0,12s3.1,8,12,8c8.1,0,12-8,12-8S20.1,4,12,4z M12,17c-2.9,0-5-2.2-5-5c0-2.8,2.1-5,5-5s5,2.2,5,5C17,14.8,14.9,17,12,17z M12,9c-1.7,0-3,1.4-3,3c0,1.6,1.3,3,3,3s3-1.4,3-3C15,10.4,13.7,9,12,9z"
    }))), Object(r.createElement)("span", null, Object(r.createElement)("span", null, t.inset ? Object(l.__)("Inset", "blocksy") : Object(l.__)("Outline", "blocksy"))), Object(r.createElement)("i", null, "/"), Object(r.createElement)("span", null, Object(r.createElement)("span", null, t.h_offset)), Object(r.createElement)("i", null, "/"), Object(r.createElement)("span", null, Object(r.createElement)("span", null, t.v_offset)), Object(r.createElement)("i", null, "/"), Object(r.createElement)("span", null, Object(r.createElement)("span", null, t.blur)), Object(r.createElement)("i", null, "/"), Object(r.createElement)("span", null, Object(r.createElement)("span", null, t.spread))), Object(r.createElement)(c.default, {
      innerRef: v,
      picker: {
        id: "default",
        title: "Initial"
      },
      option: {
        pickers: [{
          id: "default",
          title: "Initial"
        }]
      },
      isPicking: h,
      isTransitioning: m,
      onPickingChange: function(e) {
        t.enable && b({
          isTransitioning: "default",
          isPicking: e
        })
      },
      stopTransitioning: function() {
        return b({
          isPicking: h,
          isTransitioning: !1
        })
      },
      onChange: function(e) {
        return i(p({}, t, {
          color: e
        }))
      },
      value: t.color
    })), Object(r.createElement)(s.default, {
      el: g,
      value: t,
      onChange: i,
      option: n,
      isPicking: h,
      isTransitioning: m,
      picker: {
        id: "opts"
      },
      onPickingChange: function(e) {
        t.enable && b({
          isTransitioning: "opts",
          isPicking: e
        })
      },
      stopTransitioning: function() {
        return b({
          isPicking: h,
          isTransitioning: !1
        })
      }
    }))
  };
  h.ControlEnd = function() {
    return Object(r.createElement)("div", {
      className: "ct-color-modal-wrapper",
      onMouseDown: function(e) {
        return e.stopPropagation()
      },
      onMouseUp: function(e) {
        return e.stopPropagation()
      }
    })
  }, t.default = h
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(28),
    i = n(2),
    a = n.n(i);
  n(13);

  function c() {
    return (c = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(n, !0).forEach((function(t) {
        u(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      i = e.onChange,
      l = e.option.view,
      p = void 0 === l ? "checkboxes" : l,
      f = Object(o.a)(t.choices),
      d = t.inline,
      h = void 0 !== d && d;
    return "checkboxes" === p ? Object(r.createElement)("div", c({
      className: "ct-option-checkbox"
    }, h ? u({}, "data-inline", "") : {}, t.attr || {}), f.map((function(e) {
      var o = e.key,
        a = e.value;
      return Object(r.createElement)("label", {
        key: o
      }, Object(r.createElement)("input", {
        type: "checkbox",
        checked: "boolean" == typeof n[o] ? n[o] : "true" === n[o],
        "data-id": o,
        onChange: function(e) {
          e.target.checked;
          return i(s({}, n, u({}, o, !n[o] || 1 === Object.values(n).filter((function(e) {
            return e
          })).length && !t.allow_empty)))
        }
      }), a)
    }))) : Object(r.createElement)("ul", c({
      className: "ct-option-checkbox ct-buttons-group"
    }, h ? u({}, "data-inline", "") : {}, t.attr || {}), f.map((function(e) {
      var o = e.key,
        c = e.value;
      return Object(r.createElement)("li", {
        className: a()({
          active: "boolean" == typeof n[o] ? n[o] : "true" === n[o]
        }),
        "data-id": o,
        key: o,
        onClick: function(e) {
          e.target.checked;
          return i(s({}, n, u({}, o, !n[o] || 1 === Object.values(n).filter((function(e) {
            return e
          })).length && !t.allow_empty)))
        }
      }, c)
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(22),
    i = n(1),
    a = n(2),
    c = n.n(a);

  function l(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }

  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(n, !0).forEach((function(t) {
        p(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.option,
      n = e.value,
      a = e.onChange,
      s = u({}, t.value, {}, n, {
        palettes: n.palettes ? n.palettes : t.value.palettes.map((function(e, t) {
          return 0 === t ? {
            color1: n.color1 || e.color1,
            color2: n.color2 || e.color2,
            color3: n.color3 || e.color3,
            color4: n.color4 || e.color4,
            color5: n.color5 || e.color5,
            id: e.id
          } : e
        }))
      });
    return Object(r.createElement)("div", null, Object(r.createElement)("ul", {
      className: "ct-color-palettes"
    }, s.palettes.map((function(e, n) {
      return Object(r.createElement)("li", {
        onMouseDown: function(e) {
          e.stopPropagation()
        },
        onMouseUp: function(t) {
          t.stopPropagation();
          e.id;
          var n = l(e, ["id"]);
          a(u({}, s, {
            current_palette: e.id
          }, n))
        },
        className: c()("ct-single-palette", {
          active: e.id === s.current_palette
        }),
        key: e.id
      }, Object(r.createElement)("label", {
        onClick: function() {
          e.id, l(e, ["id"])
        }
      }, Object(r.createElement)("input", {
        onChange: function() {},
        checked: s.current_palette === e.id,
        type: "radio"
      }), "Palette ", n + 1), Object(r.createElement)(o.a, {
        hasRevertButton: !1,
        onChange: function(t, n) {
          if ("color" === t) {
            n.id;
            var r = l(n, ["id"]);
            a(u({}, s, {
              palettes: s.palettes.map((function(t) {
                return t.id === e.id ? u({}, t, {}, r) : t
              }))
            }, s.current_palette === e.id ? r : {}))
          }
        },
        value: {
          color: e
        },
        options: {
          color: {
            type: "ct-color-picker",
            predefined: !0,
            design: "none",
            label: !1,
            value: t.value.palettes.find((function(t) {
              return t.id === e.id
            })),
            pickers: [{
              title: Object(i.__)("Color 1", "blocksy"),
              id: "color1"
            }, {
              title: Object(i.__)("Color 2", "blocksy"),
              id: "color2"
            }, {
              title: Object(i.__)("Color 3", "blocksy"),
              id: "color3"
            }, {
              title: Object(i.__)("Color 4", "blocksy"),
              id: "color4"
            }, {
              title: Object(i.__)("Color 5", "blocksy"),
              id: "color5"
            }]
          }
        }
      }), Object(r.createElement)("div", {
        className: "ct-color-modal-wrapper"
      }))
    }))))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a() {
    return (a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function c(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  var l = function(e) {
    var t = e.option.attr,
      n = (t = void 0 === t ? {} : t).class,
      o = c(t, ["class"]);
    return Object(r.createElement)("div", a({
      className: i()("ct-divider", n)
    }, o))
  };
  l.renderingConfig = {
    design: "none"
  }, t.default = l
}, function(e, t, n) {
  "use strict";
  /** @license React v16.8.6
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && Symbol.for,
    o = r ? Symbol.for("react.element") : 60103,
    i = r ? Symbol.for("react.portal") : 60106,
    a = r ? Symbol.for("react.fragment") : 60107,
    c = r ? Symbol.for("react.strict_mode") : 60108,
    l = r ? Symbol.for("react.profiler") : 60114,
    s = r ? Symbol.for("react.provider") : 60109,
    u = r ? Symbol.for("react.context") : 60110,
    p = r ? Symbol.for("react.async_mode") : 60111,
    f = r ? Symbol.for("react.concurrent_mode") : 60111,
    d = r ? Symbol.for("react.forward_ref") : 60112,
    h = r ? Symbol.for("react.suspense") : 60113,
    m = r ? Symbol.for("react.memo") : 60115,
    b = r ? Symbol.for("react.lazy") : 60116;

  function g(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case o:
          switch (e = e.type) {
            case p:
            case f:
            case a:
            case l:
            case c:
            case h:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case u:
                case d:
                case s:
                  return e;
                default:
                  return t
              }
          }
          case b:
          case m:
          case i:
            return t
      }
    }
  }

  function v(e) {
    return g(e) === f
  }
  t.typeOf = g, t.AsyncMode = p, t.ConcurrentMode = f, t.ContextConsumer = u, t.ContextProvider = s, t.Element = o, t.ForwardRef = d, t.Fragment = a, t.Lazy = b, t.Memo = m, t.Portal = i, t.Profiler = l, t.StrictMode = c, t.Suspense = h, t.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === a || e === f || e === l || e === c || e === h || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === m || e.$$typeof === s || e.$$typeof === u || e.$$typeof === d)
  }, t.isAsyncMode = function(e) {
    return v(e) || g(e) === p
  }, t.isConcurrentMode = v, t.isContextConsumer = function(e) {
    return g(e) === u
  }, t.isContextProvider = function(e) {
    return g(e) === s
  }, t.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === o
  }, t.isForwardRef = function(e) {
    return g(e) === d
  }, t.isFragment = function(e) {
    return g(e) === a
  }, t.isLazy = function(e) {
    return g(e) === b
  }, t.isMemo = function(e) {
    return g(e) === m
  }, t.isPortal = function(e) {
    return g(e) === i
  }, t.isProfiler = function(e) {
    return g(e) === l
  }, t.isStrictMode = function(e) {
    return g(e) === c
  }, t.isSuspense = function(e) {
    return g(e) === h
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a() {
    return (a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function s(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  t.default = function(e) {
    var t = e.option,
      n = (t.choices, t.tabletChoices),
      o = t.mobileChoices,
      u = e.option,
      p = e.device,
      f = e.value,
      d = e.onChange,
      h = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(n, !0).forEach((function(t) {
            l(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }({}, u.attr || {}),
      m = h.className,
      b = s(h, ["className"]),
      g = u.choices;
    return "tablet" === p && n && (g = n), "mobile" === p && o && (g = o), Object(r.createElement)("ul", a({}, b, {
      className: i()("ct-image-picker", m)
    }, u.title ? {
      "data-title": ""
    } : {}), Object.keys(g).map((function(e) {
      return Object(r.createElement)("li", {
        className: i()({
          active: e === f
        }),
        title: g[e].title,
        onClick: function() {
          return d(e)
        },
        key: e
      }, -1 === g[e].src.indexOf("<svg") ? Object(r.createElement)("img", {
        src: g[e].src
      }) : Object(r.createElement)("span", {
        dangerouslySetInnerHTML: {
          __html: g[e].src
        }
      }), u.title && Object(r.createElement)("span", null, g[e].title))
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return y
  }));
  var r = n(0),
    o = n(61),
    i = n(2),
    a = n.n(i),
    c = (n(1), n(13)),
    l = n.n(c);

  function s(e) {
    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function u() {
    return (u = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function p(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(n, !0).forEach((function(t) {
        v(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function h(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function m(e) {
    return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function b(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function g(e, t) {
    return (g = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var y = function(e) {
    function t() {
      var e, n;
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t);
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      return n = function(e, t) {
        return !t || "object" !== s(t) && "function" != typeof t ? b(e) : t
      }(this, (e = m(t)).call.apply(e, [this].concat(o))), v(b(n), "params", {
        height: 250,
        width: 250,
        flex_width: !0,
        flex_height: !0
      }), v(b(n), "state", {
        attachment_info: null
      }), v(b(n), "getUrlFor", (function(e) {
        return e ? (e.width < 700 ? e.sizes.full : l.a.max(l.a.values(1 === l.a.keys(e.sizes).length ? e.sizes : l.a.omit(e.sizes, "full")), (function(e) {
          return e.width
        }))).url || e.url : null
      })), v(b(n), "onChange", (function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return n.props.onChange(n.props.option.inline_value ? e || "" : d({}, n.props.value, {
          url: n.getUrlFor(t),
          attachment_id: e
        }))
      })), v(b(n), "getAttachmentId", (function() {
        return n.props.option.inline_value ? n.props.value : n.props.value.attachment_id
      })), v(b(n), "onSelect", (function() {
        var e = n.frame.state().get("selection").first().toJSON();
        (n.props.option.logo || {}).width === e.width && (n.props.option.logo || {}).height === e.height && !(n.props.option.logo || {}).flex_width && !(n.props.option.logo || {}).flex_height || n.props.option.skipCrop, n.setImageFromAttachment(e), n.frame.close()
      })), v(b(n), "onCropped", (function(e) {
        n.setImageFromAttachment(e)
      })), v(b(n), "onSkippedCrop", (function() {
        var e = n.frame.state().get("selection").first().toJSON();
        n.setImageFromAttachment(e)
      })), v(b(n), "updateAttachmentInfo", (function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = n.getAttachmentId();
        t && (!wp.media.attachment(t).get("url") || e ? wp.media.attachment(t).fetch().then((function() {
          return n.setState({
            attachment_info: JSON.parse(JSON.stringify(wp.media.attachment(t).toJSON()))
          })
        })) : n.setState({
          attachment_info: JSON.parse(JSON.stringify(wp.media.attachment(t).toJSON()))
        }), n.detachListener(), wp.media.attachment(t).on("change", n.updateAttachmentInfo))
      })), n
    }
    var n, i, c;
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && g(e, t)
    }(t, e), n = t, (i = [{
      key: "initFrame",
      value: function() {
        var e = this;
        this.frame = wp.media({
          button: {
            text: "Select",
            close: !1
          },
          states: [new wp.media.controller.Library({
            title: "Select logo",
            library: wp.media.query({
              type: "image"
            }),
            multiple: !1,
            date: !1,
            priority: 20,
            suggestedWidth: (this.props.option.logo || {}).width,
            suggestedHeight: (this.props.option.logo || {}).height
          })].concat(p((this.props.option.skipCrop, [])))
        }), this.frame.on("select", this.onSelect, this), this.frame.on("close", (function() {
          e.props.option.onFrameClose && e.props.option.onFrameClose()
        })), this.frame.on("cropped", this.onCropped, this), this.frame.on("skippedcrop", this.onSkippedCrop, this)
      }
    }, {
      key: "openFrame",
      value: function() {
        this.initFrame(), this.frame.setState("library").open(), this.props.option.onFrameOpen && this.props.option.onFrameOpen()
      }
    }, {
      key: "calculateImageSelectOptions",
      value: function(e, t) {
        var n, r, o, i = t.get("control"),
          a = !!parseInt((i.props.option.logo || {}).flex_width, 10),
          c = !!parseInt((i.props.option.logo || {}).flex_height, 10),
          l = e.get("width"),
          s = e.get("height"),
          u = parseInt((i.props.option.logo || {}).width, 10),
          p = parseInt((i.props.option.logo || {}).height, 10),
          f = u / p,
          d = u,
          h = p;
        return t.set("canSkipCrop", !i.mustBeCropped(a, c, u, p, l, s)), l / s > f ? u = (p = s) * f : p = (u = l) / f, o = {
          handles: !0,
          keys: !0,
          instance: !0,
          persistent: !0,
          imageWidth: l,
          imageHeight: s,
          minWidth: d > u ? u : d,
          minHeight: h > p ? p : h,
          x1: n = (l - u) / 2,
          y1: r = (s - p) / 2,
          x2: u + n,
          y2: p + r
        }, !1 === c && !1 === a && (o.aspectRatio = u + ":" + p), !0 === c && (delete o.minHeight, o.maxWidth = l), !0 === a && (delete o.minWidth, o.maxHeight = s), o
      }
    }, {
      key: "mustBeCropped",
      value: function(e, t, n, r, o, i) {
        return !(!0 === e && !0 === t || !0 === e && r === i || !0 === t && n === o || n === o && r === i || o <= n)
      }
    }, {
      key: "setImageFromAttachment",
      value: function(e) {
        this.onChange(e.id, JSON.parse(JSON.stringify(wp.media.attachment(e.id).toJSON()))), this.updateAttachmentInfo()
      }
    }, {
      key: "detachListener",
      value: function() {
        this.getAttachmentId() && wp.media.attachment(this.getAttachmentId()).off("change", this.updateAttachmentInfo)
      }
    }, {
      key: "componentDidMount",
      value: function() {
        this.updateAttachmentInfo()
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.detachListener()
      }
    }, {
      key: "render",
      value: function() {
        var e, t = this;
        return Object(r.createElement)("div", u({
          className: a()("attachment-media-view ct-attachment", (e = {}, v(e, "landscape", this.getAttachmentId() && this.state.attachment_info), v(e, "attachment-media-view-image", this.getAttachmentId() && this.state.attachment_info), e))
        }, this.props.option.attr || {}), this.getAttachmentId() && this.state.attachment_info ? Object(r.createElement)(r.Fragment, null, Object(r.createElement)("div", {
          className: "thumbnail thumbnail-image",
          onClick: function() {
            return !t.props.option.has_position_picker && t.openFrame()
          }
        }, !this.props.option.has_position_picker && Object(r.createElement)("img", {
          className: "attachment-thumb",
          src: this.getUrlFor(this.state.attachment_info),
          draggable: "false",
          alt: ""
        }), this.props.option.has_position_picker && Object(r.createElement)(o.FocalPointPicker, {
          url: this.getUrlFor(this.state.attachment_info),
          dimensions: {
            width: 400,
            height: 100
          },
          value: this.props.value,
          onChange: function(e) {
            t.props.onChange(d({}, t.props.value, {}, e))
          }
        }), Object(r.createElement)("span", {
          onClick: function(e) {
            t.setState({
              attachment_info: null
            }), e.stopPropagation(), t.onChange(null)
          },
          className: "small-remove-button"
        }, "×")), Object(r.createElement)("div", {
          className: "actions"
        }, Object(r.createElement)("button", {
          onClick: function() {
            t.setState({
              attachment_info: null
            }), t.onChange(null)
          },
          type: "button",
          className: "button remove-button"
        }, "Remove"), Object(r.createElement)("button", {
          type: "button",
          className: "button upload-button control-focus",
          onClick: function() {
            return t.openFrame()
          },
          id: "customize-media-control-button-35"
        }, this.props.option.filledLabel || "Change logo"))) : Object(r.createElement)(r.Fragment, null, Object(r.createElement)("div", {
          className: "placeholder"
        }, "No logo selected"), Object(r.createElement)("div", {
          className: "actions"
        }, Object(r.createElement)("button", {
          type: "button",
          onClick: function() {
            return t.openFrame()
          },
          className: "button upload-button",
          id: "customize-media-control-button-50"
        }, this.props.option.emptyLabel || "Select logo"))))
      }
    }]) && h(n.prototype, i), c && h(n, c), t
  }(r.Component)
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return L
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(36),
    c = n(62),
    l = n.n(c),
    s = n(22),
    u = n(8),
    p = n(25),
    f = n(53),
    d = n.n(f);

  function h(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function m(e) {
    return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function b(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function g(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function v(e, t, n) {
    return t && g(e.prototype, t), n && g(e, n), e
  }

  function y(e, t) {
    return !t || "object" !== m(t) && "function" != typeof t ? w(e) : t
  }

  function O(e) {
    return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function w(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function j(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && _(e, t)
  }

  function _(e, t) {
    return (_ = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? E(n, !0).forEach((function(t) {
        k(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var C = function(e) {
      return e.map((function(e) {
        return S({}, e, {}, e.__id ? {} : {
          __id: d()()
        })
      }))
    },
    x = function(e, t) {
      return Object.keys(t.settings).filter((function(t) {
        return !e.find((function(e) {
          return e.id === t
        }))
      }))
    },
    P = function() {
      return {
        currentlyPickedItem: null
      }
    },
    I = Object(r.createContext)(P()),
    D = I.Provider,
    A = I.Consumer,
    T = Object(a.SortableHandle)((function(e) {
      var t = e.items,
        n = e.onChange,
        o = e.toggleOptionsPanel,
        i = e.value;
      return Object(r.createElement)(A, null, (function(e) {
        var a = e.removeForId,
          c = e.addForId,
          l = e.option;
        return Object(r.createElement)("div", {
          className: "ct-layer-controls"
        }, Object(r.createElement)("button", {
          type: "button",
          className: "ct-visibility",
          onClick: function(e) {
            e.stopPropagation(), n(t.map((function(e) {
              return e.__id === i.__id ? S({}, e, {
                enabled: !S({
                  enabled: !0
                }, e).enabled
              }) : e
            })))
          }
        }, Object(r.createElement)("svg", {
          width: "15px",
          height: "15px",
          viewBox: "0 0 24 24"
        }, Object(r.createElement)("path", {
          d: "M12,4C4.1,4,0,12,0,12s3.1,8,12,8c8.1,0,12-8,12-8S20.1,4,12,4z M12,17c-2.9,0-5-2.2-5-5c0-2.8,2.1-5,5-5s5,2.2,5,5C17,14.8,14.9,17,12,17z M12,9c-1.7,0-3,1.4-3,3c0,1.6,1.3,3,3,3s3-1.4,3-3C15,10.4,13.7,9,12,9z"
        }))), Object(r.createElement)("span", null, (l.settings[i.id] || {
          label: i.id
        }).label), l.settings[i.id] && l.settings[i.id].clone && t.filter((function(e) {
          return e.id === i.id
        })).length < 2 && Object(r.createElement)("button", {
          type: "button",
          className: "ct-clone",
          onClick: function() {
            return c(i.id, i)
          }
        }, Object(r.createElement)("svg", {
          width: "11px",
          height: "11px",
          viewBox: "0 0 24 24"
        }, Object(r.createElement)("path", {
          d: "M23,24H7.7c-0.6,0-1-0.4-1-1V7.7c0-0.6,0.4-1,1-1H23c0.6,0,1,0.4,1,1V23C24,23.6,23.6,24,23,24z M8.7,22H22V8.7 H8.7V22z"
        }), Object(r.createElement)("path", {
          d: "M17.3,16.3c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h15.3c0.6,0,1,0.4,1,1V16.3z"
        }))), (l.manageable || l.settings[i.id] && l.settings[i.id].clone && t.filter((function(e) {
          return e.id === i.id
        })).length > 1 || !l.settings[i.id]) && Object(r.createElement)("button", {
          type: "button",
          className: "ct-remove",
          onClick: function() {
            return a(i.__id)
          }
        }), l.settings[i.id] && l.settings[i.id].options && Object(r.createElement)("button", {
          type: "button",
          className: "ct-toggle",
          onClick: function() {
            return o()
          }
        }))
      }))
    })),
    N = function(e) {
      function t() {
        var e, n;
        b(this, t);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        return k(w(n = y(this, (e = O(t)).call.apply(e, [this].concat(o)))), "state", {
          isOpen: !1
        }), n
      }
      return j(t, e), v(t, [{
        key: "render",
        value: function() {
          var e = this,
            t = this.props,
            n = t.value,
            o = t.items,
            a = t.onChange;
          return Object(r.createElement)(A, null, (function(t) {
            var c = t.option;
            return Object(r.createElement)("li", {
              className: i()("ct-layer", k({}, "ct-disabled", !S({
                enabled: !0
              }, n).enabled))
            }, Object(r.createElement)(T, {
              items: o,
              onChange: a,
              value: n,
              toggleOptionsPanel: function() {
                a(o), e.setState((function(e) {
                  return {
                    isOpen: !e.isOpen
                  }
                }))
              }
            }), c.settings[n.id] && c.settings[n.id].options && e.state.isOpen && Object(r.createElement)("div", {
              className: "ct-layer-content"
            }, Object(r.createElement)(s.a, {
              hasRevertButton: !1,
              onChange: function(e, t) {
                a(o.map((function(r) {
                  return r.__id === n.__id ? S({}, r, k({}, e, t)) : r
                })))
              },
              value: Object(u.b)(c.settings[n.id].options, n),
              options: c.settings[n.id].options
            })))
          }))
        }
      }]), t
    }(r.Component),
    M = Object(a.SortableElement)(N),
    R = Object(a.SortableContainer)((function(e) {
      var t = e.items,
        n = e.onChange;
      return Object(r.createElement)(A, null, (function(e) {
        e.option;
        return Object(r.createElement)("ul", {
          className: "ct-layers"
        }, t.map((function(e, o) {
          return Object(r.createElement)(M, {
            key: e.__id,
            index: o,
            onChange: n,
            value: e,
            items: t
          })
        })))
      }))
    })),
    z = function(e) {
      var t = e.value,
        n = e.option,
        o = x(t, n);
      return o.length > 0 ? Object(r.createElement)(A, null, (function(e) {
        var t = e.currentlyPickedItem,
          i = e.setCurrentItem,
          a = e.addCurrentlySelectedItem;
        return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("div", {
          className: "ct-add-layer-controls"
        }, Object(r.createElement)(p.default, {
          onChange: function(e) {
            return i(e)
          },
          option: {
            choices: o.map((function(e) {
              return {
                key: e,
                value: (n.settings[e] || {
                  label: e
                }).label
              }
            }))
          },
          value: t || o[0]
        }), Object(r.createElement)("button", {
          type: "button",
          className: "button",
          onClick: function() {
            return a()
          }
        }, "Add")))
      })) : null
    },
    L = function(e) {
      function t() {
        var e, n;
        b(this, t);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
        return k(w(n = y(this, (e = O(t)).call.apply(e, [this].concat(o)))), "state", P()), k(w(n), "addForId", (function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return n.props.onChange([].concat(h(n.props.value), [S({
            id: e,
            enabled: !0
          }, Object(u.b)(n.props.option.settings[e].options || {}, {}), {}, t, {
            __id: d()()
          })]))
        })), n
      }
      return j(t, e), v(t, [{
        key: "render",
        value: function() {
          var e = this,
            t = this.props.option.manageable ? C(this.props.value) : [].concat(h(C(this.props.value)), h(this.props.option.value.filter((function(t) {
              var n = t.id;
              return -1 === e.props.value.map((function(e) {
                return e.id
              })).indexOf(n)
            })).map((function(e) {
              return S({}, e, {
                enabled: !1
              })
            }))));
          return Object(r.createElement)(D, {
            value: S({}, this.state, {
              addCurrentlySelectedItem: function() {
                var t = e.state.currentlyPickedItem || x(C(e.props.value), e.props.option)[0];
                e.setState({
                  currentlyPickedItem: null
                }), e.addForId(t)
              },
              addForId: function(t, n) {
                return e.addForId(t, n)
              },
              option: this.props.option,
              setCurrentItem: function(t) {
                return e.setState({
                  currentlyPickedItem: t
                })
              },
              removeForId: function(t) {
                return e.props.onChange(C(e.props.value).filter((function(e) {
                  return e.__id !== t
                })))
              }
            })
          }, this.props.option.manageable && Object(r.createElement)(z, {
            value: t,
            option: this.props.option
          }), Object(r.createElement)(R, {
            useDragHandle: !0,
            distance: 3,
            lockAxis: "y",
            items: t,
            onChange: function(t) {
              return e.props.onChange(t)
            },
            helperContainer: function() {
              return document.querySelector("#customize-theme-controls") || document.body
            },
            onSortEnd: function(n) {
              var r = n.oldIndex,
                o = n.newIndex;
              return e.props.onChange(l()(t, r, o))
            }
          }))
        }
      }]), t
    }(r.Component)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0);

  function o() {
    return (o = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var c = function(e) {
    var t = e.option,
      n = t.text,
      c = void 0 === n ? "" : n,
      l = t.attr,
      s = void 0 === l ? {} : l;
    return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("div", o({
      className: "ct-notification"
    }, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(n, !0).forEach((function(t) {
          a(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }({}, s || {})), c))
  };
  c.renderingConfig = {
    design: "none"
  }, t.default = c
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(13),
    i = n.n(o),
    a = n(2),
    c = n.n(a),
    l = n(35);

  function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.value,
      n = e.option,
      o = e.onChange;
    return Object(r.createElement)("div", {
      className: c()("ct-option-number", s({}, "ct-reached-limits", parseInt(t, 10) === parseInt(n.min) || parseInt(t, 10) === parseInt(n.max)))
    }, Object(r.createElement)("a", {
      className: c()("ct-minus", s({}, "ct-disabled", parseInt(t, 10) === parseInt(n.min))),
      onClick: function() {
        return o(Math.min(Math.max(parseInt(t, 10) - 1, n.min || -1 / 0), n.max || 1 / 0))
      }
    }), Object(r.createElement)(l.a, {
      value: t,
      onBlur: function() {
        return parseInt(t, 10) ? o(Math.min(Math.max(t, n.min || -1 / 0), n.max || 1 / 0)) : []
      },
      onChange: function(e, t) {
        return t && i.a.isNumber(parseInt(e, 10)) ? o(Math.min(Math.max(e, n.min || -1 / 0), n.max || 1 / 0)) : o(e)
      }
    }), Object(r.createElement)("a", {
      className: c()("ct-plus", s({}, "ct-disabled", parseInt(t, 10) === parseInt(n.max))),
      onClick: function() {
        return o(Math.min(Math.max(parseInt(t, 10) + 1, n.min || -1 / 0), n.max || 1 / 0))
      }
    }))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return d
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function c() {
    return (c = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function u(e, t) {
    return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }(e) : t
  }

  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function f(e, t) {
    return (f = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var d = function(e) {
    function t() {
      return function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t), u(this, p(t).apply(this, arguments))
    }
    var n, o, a;
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && f(e, t)
    }(t, e), n = t, (o = [{
      key: "renderAsText",
      value: function() {}
    }, {
      key: "renderAsRadio",
      value: function() {
        var e = this,
          t = this.props.option.inline,
          n = void 0 !== t && t;
        return Object(r.createElement)("div", c({
          className: "ct-radio-option"
        }, n ? l({}, "data-inline", "") : {}, this.props.option.attr || {}), Object.keys(this.props.option.choices).map((function(t) {
          return Object(r.createElement)("label", {
            key: t
          }, Object(r.createElement)("input", {
            type: "radio",
            checked: t === e.props.value,
            onChange: function() {
              return e.props.onChange(t)
            }
          }), e.props.option.choices[t])
        })))
      }
    }, {
      key: "render",
      value: function() {
        var e = this;
        if ("radio" === this.props.option.view) return this.renderAsRadio();
        var t = this.props.option.inline,
          n = void 0 !== t && t;
        return Object(r.createElement)("ul", c({
          className: "ct-radio-option ct-buttons-group"
        }, n ? l({}, "data-inline", "") : {}, this.props.option.attr || {}), Object.keys(this.props.option.choices).map((function(t) {
          return Object(r.createElement)("li", c({
            className: i()({
              active: t === e.props.value
            }),
            onClick: function() {
              return e.props.onChange(t)
            },
            key: t,
            dangerouslySetInnerHTML: {
              __html: e.props.option.choices[t]
            }
          }, e.props.singleChoiceProps ? e.props.singleChoiceProps(t) : {}))
        })))
      }
    }]) && s(n.prototype, o), a && s(n, a), t
  }(r.Component)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o);

  function a(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function c(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  t.default = function(e) {
    e.option;
    var t = e.value,
      n = e.onChange,
      o = c(Object(r.useState)(!1), 2),
      l = o[0],
      s = o[1],
      u = ["4/3", "16/9", "2/1"],
      p = ["3/4", "9/16", "1/2"],
      f = !(u.indexOf(t) > -1) && (p.indexOf(t) > -1 || l);
    return Object(r.createElement)("div", {
      className: i()("ct-ratio-picker", {
        reversed: f
      })
    }, Object(r.createElement)("ul", {
      className: "ct-buttons-group"
    }, ["1/1"].concat(a(f ? p : u)).map((function(e) {
      return Object(r.createElement)("li", {
        className: i()({
          active: e === t
        }),
        onClick: function() {
          return n(e)
        }
      }, e)
    }))), Object(r.createElement)("button", {
      onClick: function(e) {
        if (e.preventDefault(), "1/1" !== t) {
          var r = c(t.split("/"), 2),
            o = r[0],
            i = r[1];
          s(+o < +i), n(t.split("/").reverse().join("/"))
        } else s(!f)
      }
    }, Object(r.createElement)("span", null), Object(r.createElement)("i", {
      className: "ct-tooltip-top"
    }, "Reverse")))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return O
  }));
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(54),
    c = n.n(a),
    l = n(14);

  function s(e) {
    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function u() {
    return (u = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function f(e) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function d(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function h(e, t) {
    return (h = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function b(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var g = function(e, t, n) {
      return Math.max(e, Math.min(t, n))
    },
    v = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Math.pow(10, t),
        r = Math.round(e * n + Number.EPSILON) / n;
      return r
    },
    y = function(e) {
      var t = e.option,
        n = e.onChange,
        o = e.is_open,
        i = e.toggleOpen,
        a = e.currentUnit,
        c = e.getNumericValue,
        s = e.getAllowedDecimalPlaces;
      return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("span", {
        onClick: function() {
          return i()
        },
        className: "ct-current-value"
      }, a || "―"), Object(r.createElement)(l.default, {
        onOutsideClick: function() {
          o && i()
        }
      }, Object(r.createElement)("ul", {
        className: "ct-units-list"
      }, t.units.filter((function(e) {
        return e.unit !== a
      })).reduce((function(e, t, n) {
        return [].concat(b(e.slice(0, n % 2 == 0 ? void 0 : -1)), b(n % 2 == 0 ? [
          [t]
        ] : [
          [e[e.length - 1][0], t]
        ]))
      }), []).map((function(e) {
        return Object(r.createElement)("li", {
          key: e[0].unit
        }, e.map((function(e) {
          var o = e.unit;
          return Object(r.createElement)("span", {
            key: o,
            onClick: function() {
              ! function(e) {
                var r = c();
                n("".concat(v(g(t.units.find((function(t) {
                  return t.unit === e
                })).min, t.units.find((function(t) {
                  return t.unit === e
                })).max, "" === r ? -1 / 0 : r), s(e))).concat(e))
              }(o), i()
            }
          }, o || "―")
        })))
      })))))
    },
    O = function(e) {
      function t() {
        var e, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return n = function(e, t) {
          return !t || "object" !== s(t) && "function" != typeof t ? d(e) : t
        }(this, (e = f(t)).call.apply(e, [this].concat(i))), m(d(n), "state", {
          is_dragging: !1,
          is_open: !1
        }), m(d(n), "el", Object(r.createRef)()), m(d(n), "hasUnitsList", (function() {
          return n.props.option.units && n.props.option.units.length > 1
        })), m(d(n), "getAllowedDecimalPlaces", (function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = n.props.option.units ? n.props.option.units.find((function(t) {
              return t.unit === (e || n.getCurrentUnit())
            })).decimals : n.props.option.decimals;
          return 0 === t || t ? t : 0
        })), m(d(n), "withDefault", (function(e, t) {
          return n.props.option.units && n.props.option.units.find((function(t) {
            return t.unit === e
          })) ? e : e || t
        })), m(d(n), "getCurrentUnit", (function() {
          return n.props.option.units ? n.withDefault(n.props.value.toString().replace(/[0-9]/g, "").replace(/\-/g, "").replace(/\./g, "").replace("CT_CSS_SKIP_RULE", ""), n.props.option.units[0].unit) : ""
        })), m(d(n), "getMax", (function() {
          return n.props.option.units ? n.props.option.units.find((function(e) {
            return e.unit === n.getCurrentUnit()
          })).max : n.props.option.max
        })), m(d(n), "getMin", (function() {
          return n.props.option.units ? n.props.option.units.find((function(e) {
            return e.unit === n.getCurrentUnit()
          })).min : n.props.option.min
        })), m(d(n), "getNumericValue", (function() {
          var e = parseFloat(n.props.value, 10);
          return 0 === e ? e : e || ""
        })), m(d(n), "handleMove", (function(e) {
          n.state.is_dragging && n.computeAndSendNewValue(e)
        })), m(d(n), "handleUp", (function() {
          n.setState({
            is_dragging: !1
          }), n.detachEvents()
        })), m(d(n), "handleBlur", (function() {
          if ("CT_CSS_SKIP_RULE" === n.props.option.value) {
            if ("CT_CSS_SKIP_RULE" === n.props.value) return;
            if ("" === n.getNumericValue()) return void n.props.onChange("CT_CSS_SKIP_RULE")
          }
          n.props.onChange("".concat(g(parseFloat(n.getMin(), 10), parseFloat(n.getMax(), 10), parseFloat(n.getNumericValue(), 10))).concat(n.getCurrentUnit()))
        })), m(d(n), "handleChange", (function(e) {
          "CT_CSS_SKIP_RULE" !== n.props.option.value || "" !== e.toString().trim() ? n.props.onChange("".concat(e || n.getMin()).concat(n.getCurrentUnit())) : n.props.onChange("CT_CSS_SKIP_RULE")
        })), n
      }
      var n, o, a;
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && h(e, t)
      }(t, e), n = t, (o = [{
        key: "computeAndSendNewValue",
        value: function(e) {
          var t = e.pageX,
            n = this.el.current.getBoundingClientRect(),
            r = (n.top, n.left),
            o = n.width;
          this.props.onChange("".concat(v(c()([0, o], [parseFloat(this.getMin(), 10), parseFloat(this.getMax(), 10)], !0)(t - r - pageXOffset), this.getAllowedDecimalPlaces())).concat(this.getCurrentUnit()))
        }
      }, {
        key: "attachEvents",
        value: function() {
          document.documentElement.addEventListener("mousemove", this.handleMove, !0), document.documentElement.addEventListener("mouseup", this.handleUp, !0)
        }
      }, {
        key: "detachEvents",
        value: function() {
          document.documentElement.removeEventListener("mousemove", this.handleMove, !0), document.documentElement.removeEventListener("mouseup", this.handleUp, !0)
        }
      }, {
        key: "render",
        value: function() {
          var e, t = this,
            n = "".concat(c()([parseFloat(this.getMin(), 10), parseFloat(this.getMax(), 10)], [0, 100])(g(parseFloat(this.getMin(), 10), parseFloat(this.getMax(), 10), 0 === parseFloat(this.getNumericValue(), 10) ? 0 : parseFloat(this.getNumericValue(), 10) ? parseFloat(this.getNumericValue(), 10) : parseFloat(this.getMin(), 10))));
          return Object(r.createElement)("div", {
            className: "ct-option-slider"
          }, this.props.beforeOption && this.props.beforeOption(), Object(r.createElement)("div", u({
            onMouseDown: function(e) {
              e.pageX, e.pageY, t.attachEvents(), t.setState({
                is_dragging: !0
              })
            },
            onClick: function(e) {
              return t.computeAndSendNewValue(e)
            },
            ref: this.el,
            className: "ct-slider"
          }, this.props.option.steps ? m({}, "data-steps", "") : {}), Object(r.createElement)("div", {
            style: {
              width: "".concat(n, "%")
            }
          }), Object(r.createElement)("span", {
            style: {
              left: "".concat(n, "%")
            }
          }), this.props.option.steps && Object(r.createElement)("section", {
            className: this.props.option.steps
          }, Object(r.createElement)("i", {
            className: "minus"
          }), Object(r.createElement)("i", {
            className: "zero"
          }), Object(r.createElement)("i", {
            className: "plus"
          }))), !this.props.option.skipInput && Object(r.createElement)("div", {
            className: i()("ct-slider-input", (e = {}, m(e, "ct-value-changer", !0), m(e, "no-unit-list", !this.hasUnitsList()), m(e, "active", this.state.is_open), e))
          }, Object(r.createElement)("input", u({
            type: "number"
          }, this.props.option.ref ? {
            ref: this.props.option.ref
          } : {}, {
            step: 1 / Math.pow(10, this.getAllowedDecimalPlaces()),
            value: this.getNumericValue(),
            onBlur: function() {
              return t.handleBlur()
            },
            onChange: function(e) {
              var n = e.target.value;
              return t.handleChange(n)
            }
          })), Object(r.createElement)("span", {
            className: "ct-value-divider"
          }), !this.hasUnitsList() && Object(r.createElement)("span", {
            className: "ct-current-value"
          }, this.withDefault(this.getCurrentUnit(), this.props.option.defaultUnit || "px")), this.hasUnitsList() && Object(r.createElement)(y, {
            option: this.props.option,
            onChange: this.props.onChange,
            is_open: this.state.is_open,
            toggleOpen: function() {
              return t.setState({
                is_open: !t.state.is_open
              })
            },
            currentUnit: this.getCurrentUnit(),
            getNumericValue: this.getNumericValue,
            getAllowedDecimalPlaces: this.getAllowedDecimalPlaces
          })))
        }
      }]) && p(n.prototype, o), a && p(n, a), t
    }(r.Component)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(1),
    i = n(35),
    a = n(2),
    c = n.n(a),
    l = n(14);

  function s(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(n, !0).forEach((function(t) {
        f(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function d(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  t.default = function(e) {
    var t = e.value,
      n = (e.option, e.onChange),
      a = d(Object(r.useState)(!1), 2),
      u = a[0],
      h = a[1],
      m = [{
        unit: "px"
      }, {
        unit: "%"
      }, {
        unit: "em"
      }, {
        unit: "rem"
      }, {
        unit: "pt"
      }],
      b = function() {
        return ["top", "right", "bottom", "left"].find((function(e) {
          return "auto" !== t[e]
        }))
      },
      g = function() {
        return e = t[b()].toString().replace(/[0-9]/g, "").replace(/\./g, ""), m.find((function(t) {
          return t.unit === e
        })) ? e : e || m[0].unit;
        var e
      },
      v = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return "auto" === e ? e : "".concat(0 === parseFloat(e) ? 0 : parseFloat(e) || "").concat(t)
      },
      y = function(e, r) {
        t.linked ? n(p({}, t, {
          top: "auto" === t.top ? t.top : v(e, g()),
          left: "auto" === t.left ? t.left : v(e, g()),
          right: "auto" === t.right ? t.right : v(e, g()),
          bottom: "auto" === t.bottom ? t.bottom : v(e, g())
        })) : n(p({}, t, f({}, r, v(e, g()))))
      };
    return Object(r.createElement)("div", {
      className: c()("ct-option-spacing", {
        linked: t.linked
      })
    }, ["top", "right", "bottom", "left"].map((function(e) {
      return Object(r.createElement)("span", {
        key: e
      }, Object(r.createElement)(i.a, {
        placeholder: "",
        value: v(t[e]),
        onChange: function(t) {
          return y(t, e)
        }
      }), Object(r.createElement)("small", null, {
        top: Object(o.__)("Top", "blocksy"),
        bottom: Object(o.__)("Bottom", "blocksy"),
        left: Object(o.__)("Left", "blocksy"),
        right: Object(o.__)("Right", "blocksy")
      } [e]))
    })), Object(r.createElement)("div", {
      className: c()("ct-spacing-controls ct-value-changer", {
        active: u
      })
    }, Object(r.createElement)("a", {
      onClick: function(e) {
        if (e.preventDefault(), t.linked) n(p({}, t, {
          linked: !1
        }));
        else {
          var r = t[b()];
          n(p({}, t, {
            top: "auto" !== t.top ? r : t.top,
            left: "auto" !== t.left ? r : t.left,
            bottom: "auto" !== t.bottom ? r : t.bottom,
            right: "auto" !== t.right ? r : t.right,
            linked: !0
          }))
        }
      }
    }, Object(r.createElement)("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 15 15"
    }, t.linked ? Object(r.createElement)("path", {
      d: "M12.2,5.5V4.7c0-2.6-2.1-4.7-4.7-4.7S2.8,2.1,2.8,4.7v0.8c-0.9,0-1.6,0.7-1.6,1.6v6.3c0,0.9,0.7,1.6,1.6,1.6h9.5c0.9,0,1.6-0.7,1.6-1.6V7.1C13.8,6.2,13.1,5.5,12.2,5.5z M10.7,5.5H4.3V4.7c0-1.8,1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2V5.5z"
    }) : Object(r.createElement)("path", {
      d: "M12.2,5.5h-1.6H9.9h-5H4.7l0-0.2C4.4,3.5,5.5,1.9,7.3,1.5c1.1-0.2,2.2,0.1,2.8,0.9l1.3-0.9c-1-1.1-2.6-1.8-4.3-1.5C4.5,0.5,2.8,2.9,3.2,5.5H2.8c-0.9,0-1.6,0.7-1.6,1.6v6.3c0,0.9,0.7,1.6,1.6,1.6h9.5c0.9,0,1.6-0.7,1.6-1.6V7.1C13.8,6.2,13.1,5.5,12.2,5.5z"
    }))), Object(r.createElement)("span", {
      className: "ct-value-divider"
    }), Object(r.createElement)("div", {
      onClick: function() {
        return h(!u)
      },
      className: "ct-current-value"
    }, g() || "―"), Object(r.createElement)(l.default, {
      onOutsideClick: function() {
        u && h(!1)
      }
    }, Object(r.createElement)("ul", {
      className: "ct-units-list"
    }, m.filter((function(e) {
      return e.unit !== g()
    })).reduce((function(e, t, n) {
      return [].concat(s(e.slice(0, n % 2 == 0 ? void 0 : -1)), s(n % 2 == 0 ? [
        [t]
      ] : [
        [e[e.length - 1][0], t]
      ]))
    }), []).map((function(e) {
      return Object(r.createElement)("li", {
        key: e[0].unit
      }, e.map((function(e) {
        var o = e.unit;
        return Object(r.createElement)("span", {
          key: o,
          onClick: function() {
            n(p({}, t, {
              top: v(t.top, o),
              left: v(t.left, o),
              right: v(t.right, o),
              bottom: v(t.bottom, o)
            })), h(!1)
          }
        }, o || "―")
      })))
    }))))))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0);

  function o() {
    return (o = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var c = function(e) {
    var t = e.option,
      n = t.label,
      c = void 0 === n ? "" : n,
      l = t.desc,
      s = void 0 === l ? "" : l,
      u = t.attr,
      p = void 0 === u ? {} : u,
      f = t.variation,
      d = void 0 === f ? "simple" : f;
    return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("div", o({
      className: "ct-title"
    }, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(n, !0).forEach((function(t) {
          a(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }({
      "data-type": d
    }, p || {})), Object(r.createElement)("h3", null, c), s && Object(r.createElement)("p", {
      dangerouslySetInnerHTML: {
        __html: s
      }
    })))
  };
  c.renderingConfig = {
    design: "none"
  }, t.default = c
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(2),
    i = n.n(o),
    a = n(47),
    c = n(14),
    l = n(20),
    s = n(12),
    u = n(24),
    p = n(15),
    f = n(21),
    d = n.n(f),
    h = n(1);

  function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(n, !0).forEach((function(t) {
        g(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function v(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  t.default = function(e) {
    var t = e.option,
      n = (t.label, t.desc, t.attr, e.option),
      o = e.value,
      f = e.device,
      m = e.onChange,
      g = v(Object(r.useState)("_:_"), 2),
      y = g[0],
      O = g[1],
      w = v(Object(r.useMemo)((function() {
        return y.split(":")
      }), [y]), 2),
      j = w[0],
      _ = w[1],
      E = Object(r.useCallback)((function(e) {
        return O("".concat(e, ":").concat(j))
      }), [j]),
      S = v(Object(r.useState)({
        isOpen: !1,
        isTransitioning: !1
      }), 2),
      k = S[0],
      C = k.isOpen,
      x = k.isTransitioning,
      P = S[1],
      I = function(e) {
        P((function(t) {
          return b({}, t, {
            isOpen: e,
            isTransitioning: !0
          })
        }))
      };
    return Object(r.createElement)("div", {
      className: i()("ct-typography", {})
    }, Object(r.createElement)(u.a, null, Object(r.createElement)(u.c, null, (function(e) {
      var t = e.ref;
      return Object(r.createElement)("div", {
        ref: t,
        className: "ct-typohraphy-value",
        onClick: function(e) {
          e.preventDefault(), O("options:_"), I("options")
        }
      }, Object(r.createElement)("div", null, Object(r.createElement)("span", {
        onClick: function(e) {
          O("fonts:_"), I("fonts"), e.stopPropagation()
        },
        className: "ct-font"
      }, Object(r.createElement)("span", null, "Default" === o.family ? "Default Family" : o.family)), Object(r.createElement)("i", null, "/"), Object(r.createElement)("span", {
        onClick: function(e) {
          O("options:_"), I("font_size"), e.stopPropagation()
        },
        className: "ct-size"
      }, Object(r.createElement)("span", null, "CT_CSS_SKIP_RULE" === Object(s.c)(o.size)[f] ? Object(h.__)("Default Size", "blocksy") : Object(s.c)(o.size)[f])), Object(r.createElement)("i", null, "/"), Object(r.createElement)("span", {
        onClick: function(e) {
          O("variations:_"), I("variations"), e.stopPropagation()
        },
        className: "ct-weight"
      }, Object(r.createElement)("span", null, Object(l.humanizeVariations)(o.variation)))), Object(r.createElement)("a", null))
    })), (x || C) && Object(r.createElement)(p.a, {
      items: C,
      onRest: function(e) {
        P((function(e) {
          return b({}, e, {
            isTransitioning: !1
          })
        }))
      },
      config: {
        duration: 100,
        easing: d()(.25, .1, .25, 1)
      },
      from: C ? {
        transform: "scale3d(0.95, 0.95, 1)",
        opacity: 0
      } : {
        opacity: 1
      },
      enter: C ? {
        transform: "scale3d(1, 1, 1)",
        opacity: 1
      } : {
        opacity: 1
      },
      leave: C ? {
        opacity: 1
      } : {
        transform: "scale3d(0.95, 0.95, 1)",
        opacity: 0
      }
    }, (function(e) {
      return e && function(t) {
        return Object(r.createElement)(c.default, {
          useCapture: !1,
          display: "block",
          className: "ct-typography-wrapper",
          onOutsideClick: function() {
            I(!1)
          }
        }, Object(r.createElement)(u.b, {
          eventsEnabled: e,
          placements: ["top", "bottom"],
          modifiers: {
            flip: {
              boundariesElement: document.querySelector(".wp-full-overlay-sidebar-content") || document.body
            },
            preventOverflow: {
              enabled: !1,
              padding: 50
            },
            hide: {
              enabled: !1
            }
          }
        }, (function(i) {
          var c = i.ref,
            l = i.placement;
          return Object(r.createElement)(a.default, {
            wrapperProps: {
              style: t
            },
            onChange: m,
            value: o,
            innerRef: c,
            placement: l,
            option: n,
            initialView: e,
            setInititialView: function(e) {
              return I(e)
            },
            currentView: j,
            previousView: _,
            setCurrentView: E
          })
        })))
      }
    }))))
  }
}, function(e, t, n) {
  "use strict";
  (function(e) {
    var t = n(4);

    function r(t) {
      var n;
      n = "undefined" != typeof window ? window : "undefined" != typeof self ? self : e;
      var r, o, i = "undefined" != typeof document && document.attachEvent;
      if (!i) {
        var a = (o = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function(e) {
            return n.setTimeout(e, 20)
          }, function(e) {
            return o(e)
          }),
          c = (r = n.cancelAnimationFrame || n.mozCancelAnimationFrame || n.webkitCancelAnimationFrame || n.clearTimeout, function(e) {
            return r(e)
          }),
          l = function(e) {
            var t = e.__resizeTriggers__,
              n = t.firstElementChild,
              r = t.lastElementChild,
              o = n.firstElementChild;
            r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, o.style.width = n.offsetWidth + 1 + "px", o.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight
          },
          s = function(e) {
            if (!(e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0)) {
              var t = this;
              l(this), this.__resizeRAF__ && c(this.__resizeRAF__), this.__resizeRAF__ = a((function() {
                (function(e) {
                  return e.offsetWidth != e.__resizeLast__.width || e.offsetHeight != e.__resizeLast__.height
                })(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach((function(n) {
                  n.call(t, e)
                })))
              }))
            }
          },
          u = !1,
          p = "",
          f = "animationstart",
          d = "Webkit Moz O ms".split(" "),
          h = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
          m = document.createElement("fakeelement");
        if (void 0 !== m.style.animationName && (u = !0), !1 === u)
          for (var b = 0; b < d.length; b++)
            if (void 0 !== m.style[d[b] + "AnimationName"]) {
              p = "-" + d[b].toLowerCase() + "-", f = h[b], u = !0;
              break
            } var g = "resizeanim",
          v = "@" + p + "keyframes " + g + " { from { opacity: 0; } to { opacity: 0; } } ",
          y = p + "animation: 1ms " + g + "; "
      }
      return {
        addResizeListener: function(e, r) {
          if (i) e.attachEvent("onresize", r);
          else {
            if (!e.__resizeTriggers__) {
              var o = e.ownerDocument,
                a = n.getComputedStyle(e);
              a && "static" == a.position && (e.style.position = "relative"),
                function(e) {
                  if (!e.getElementById("detectElementResize")) {
                    var n = (v || "") + ".resize-triggers { " + (y || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                      r = e.head || e.getElementsByTagName("head")[0],
                      o = e.createElement("style");
                    o.id = "detectElementResize", o.type = "text/css", null != t && o.setAttribute("nonce", t), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(e.createTextNode(n)), r.appendChild(o)
                  }
                }(o), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = o.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), l(e), e.addEventListener("scroll", s, !0), f && (e.__resizeTriggers__.__animationListener__ = function(t) {
                  t.animationName == g && l(e)
                }, e.__resizeTriggers__.addEventListener(f, e.__resizeTriggers__.__animationListener__))
            }
            e.__resizeListeners__.push(r)
          }
        },
        removeResizeListener: function(e, t) {
          if (i) e.detachEvent("onresize", t);
          else if (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), !e.__resizeListeners__.length) {
            e.removeEventListener("scroll", s, !0), e.__resizeTriggers__.__animationListener__ && (e.__resizeTriggers__.removeEventListener(f, e.__resizeTriggers__.__animationListener__), e.__resizeTriggers__.__animationListener__ = null);
            try {
              e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__)
            } catch (e) {}
          }
        }
      }
    }
    var o = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      },
      i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      c = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      },
      l = function(e) {
        function n() {
          var e, t, r;
          o(this, n);
          for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
          return t = r = c(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a))), r.state = {
            height: r.props.defaultHeight || 0,
            width: r.props.defaultWidth || 0
          }, r._onResize = function() {
            var e = r.props,
              t = e.disableHeight,
              n = e.disableWidth,
              o = e.onResize;
            if (r._parentNode) {
              var i = r._parentNode.offsetHeight || 0,
                a = r._parentNode.offsetWidth || 0,
                c = window.getComputedStyle(r._parentNode) || {},
                l = parseInt(c.paddingLeft, 10) || 0,
                s = parseInt(c.paddingRight, 10) || 0,
                u = parseInt(c.paddingTop, 10) || 0,
                p = parseInt(c.paddingBottom, 10) || 0,
                f = i - u - p,
                d = a - l - s;
              (!t && r.state.height !== f || !n && r.state.width !== d) && (r.setState({
                height: i - u - p,
                width: a - l - s
              }), o({
                height: i,
                width: a
              }))
            }
          }, r._setRef = function(e) {
            r._autoSizer = e
          }, c(r, t)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(n, e), i(n, [{
          key: "componentDidMount",
          value: function() {
            var e = this.props.nonce;
            this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode, this._detectElementResize = r(e), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), this._onResize())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize)
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props,
              n = e.children,
              r = e.className,
              o = e.disableHeight,
              i = e.disableWidth,
              c = e.style,
              l = this.state,
              s = l.height,
              u = l.width,
              p = {
                overflow: "visible"
              },
              f = {},
              d = !1;
            return o || (0 === s && (d = !0), p.height = 0, f.height = s), i || (0 === u && (d = !0), p.width = 0, f.width = u), Object(t.createElement)("div", {
              className: r,
              ref: this._setRef,
              style: a({}, p, c)
            }, !d && n(f))
          }
        }]), n
      }(t.PureComponent);
    l.defaultProps = {
      onResize: function() {},
      disableHeight: !1,
      disableWidth: !1,
      style: {}
    }
  }).call(this, n(38))
}, function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "default", (function() {
    return m
  }));
  var r = n(0),
    o = n(28),
    i = n(2),
    a = n.n(i);

  function c(e) {
    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function l() {
    return (l = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function f(e, t) {
    return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }(e) : t
  }

  function d(e) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function h(e, t) {
    return (h = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var m = function(e) {
    function t() {
      return function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, t), f(this, d(t).apply(this, arguments))
    }
    var n, i, c;
    return function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t)
    }(t, e), n = t, (i = [{
      key: "render",
      value: function() {
        var e = this;
        return Object(r.createElement)("ul", l({
          className: "ct-visibility-option ct-devices ct-buttons-group"
        }, this.props.option.attr || {}), Object(o.a)(this.props.option.choices).map((function(t) {
          var n = t.key;
          return t.value, Object(r.createElement)("li", {
            className: a()({
              active: e.props.value[n]
            }, "ct-".concat(n)),
            onClick: function() {
              return e.props.onChange(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? s(n, !0).forEach((function(t) {
                    u(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
                }
                return e
              }({}, e.props.value, u({}, n, !e.props.value[n] || 1 === Object.values(e.props.value).filter((function(e) {
                return e
              })).length && !e.props.option.allow_empty)))
            },
            key: n
          })
        })))
      }
    }]) && p(n.prototype, i), c && p(n, c), t
  }(r.Component)
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0);

  function o(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var i = function(e) {
    e.value, e.option;
    var t = e.option.sidebarId,
      n = void 0 === t ? "ct-footer-sidebar-1" : t,
      i = (e.onChange, Object(r.useRef)());
    return Object(r.useEffect)((function() {
      var e = "widgetAreaSection-".concat(n),
        t = Object.keys(wp.customize.control._value).filter((function(e) {
          return 0 === e.indexOf("widget_") && wp.customize.control(e).section() === "sidebar-widgets-".concat(n)
        })),
        r = new(wp.customize.Section.extend({
          containerParent: jQuery(i.current),
          collapse: function() {},
          embed: function() {
            this.containerParent = wp.customize.ensure(this.containerParent);
            wp.customize.ensure(this.containerPaneParent);
            this.contentContainer.parent().is(this.headContainer) || (this.containerParent.append(this.contentContainer), this.contentContainer[0].classList.add("open"), this.contentContainer[0].querySelector(".customize-section-description-container").remove()), this.deferred.embedded.resolve(), setTimeout((function() {
              t.map((function(e) {
                wp.customize.control(e).embedWidgetControl()
              }))
            }))
          }
        }))(e, {});
      wp.customize.section.add(r);
      new wp.customize.controlConstructor.sidebar_widgets("checkcheck", {
        params: {
          sidebar_id: n,
          priority: 999,
          section: r.id,
          setting: "sidebars_widgets[".concat(n, "]"),
          content: '<li id="customize-control-sidebars_widgets-ct-footer-sidebar-2" class="customize-control customize-control-sidebar_widgets">\t\t<button type="button" class="button add-new-widget" aria-expanded="false" aria-controls="available-widgets">\n\t\t\tAdd a Widget\t\t</button>\n\t\t<button type="button" class="button-link reorder-toggle" aria-label="Reorder widgets" aria-describedby="reorder-widgets-desc-sidebars_widgets-ct-footer-sidebar-2">\n\t\t\t<span class="reorder">Reorder</span>\n\t\t\t<span class="reorder-done">Done</span>\n\t\t</button>\n\t\t<p class="screen-reader-text" id="reorder-widgets-desc-sidebars_widgets-ct-footer-sidebar-2">When in reorder mode, additional controls to reorder widgets will be available in the widgets list above.</p>\n\t\t</li>'
        }
      });
      return t.map((function(t) {
          wp.customize.control(t).section(e)
        })), setTimeout((function() {
          jQuery(i.current.firstElementChild).sortable("option", "containment", "parent")
        }), 1e3),
        function() {
          o(document.querySelectorAll('.customize-pane-parent [id="accordion-section-'.concat(e, '"]'))).map((function(e) {
            return e.remove()
          })), wp.customize.section.remove(r.id)
        }
    }), []), Object(r.createElement)("div", {
      className: "ct-option-widget-area",
      ref: i
    })
  };
  i.renderingConfig = {
    design: "none"
  }, t.default = i
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = function(e) {
      var t = e.option;
      t.text, t.attr;
      return Object(r.createElement)(r.Fragment, null)
    };
  o.renderingConfig = {
    design: "none"
  }, t.default = o
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0);

  function o() {
    return (o = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.value,
      n = e.option,
      c = e.onChange;
    return Object(r.createElement)("div", {
      className: "ct-option-input"
    }, Object(r.createElement)("input", o({
      type: "text",
      value: t
    }, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(n, !0).forEach((function(t) {
          a(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }({}, n.field_attr ? n.field_attr : {}, {}, n.attr && n.attr.placeholder ? {
      placeholder: n.attr.placeholder
    } : {}), {
      onChange: function(e) {
        var t = e.target.value;
        return c(t)
      }
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0);

  function o() {
    return (o = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  t.default = function(e) {
    var t = e.value,
      n = e.option,
      c = e.onChange;
    return Object(r.createElement)("div", {
      className: "ct-option-textarea"
    }, Object(r.createElement)("textarea", o({
      value: t
    }, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(n, !0).forEach((function(t) {
          a(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }({}, n.field_attr ? n.field_attr : {}, {}, n.attr && n.attr.placeholder ? {
      placeholder: n.attr.placeholder
    } : {}), {
      onChange: function(e) {
        var t = e.target.value;
        return c(t)
      }
    })))
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(64),
    i = n.n(o);

  function a() {
    return (a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function c(e) {
    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(n, !0).forEach((function(t) {
        u(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function p(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  t.default = function(e) {
    var t = e.id,
      n = e.value,
      o = e.option,
      l = e.onChange,
      u = Object(r.useRef)(),
      f = (Object(r.useRef)(null), p(Object(r.useState)("".concat(t, "-").concat(i()(Math.random() + "-" + Math.random() + "-" + Math.random()))), 2)),
      d = f[0],
      h = (f[1], Object(r.useCallback)((function() {
        return l(wp.editor.getContent(d))
      }), [d]));
    return Object(r.useEffect)((function() {
      return wp.editor.initialize(d, s({
          quicktags: !0,
          mediaButtons: !0
        }, o, {
          tinymce: s({
            toolbar1: "formatselect,styleselect,bold,italic,bullist,numlist,link,alignleft,aligncenter,alignright,wp_adv",
            toolbar2: "strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help"
          }, "object" === c(o.tinymce) ? o.tinymce : {}, {
            style_formats_merge: !0,
            style_formats: []
          })
        })), setTimeout((function() {
          return window.tinymce.editors[d] && window.tinymce.editors[d].on("change", h)
        })),
        function() {
          window.tinymce.editors[d] && setTimeout((function() {
            window.tinymce.editors[d].off("change", h), wp.editor.remove(d)
          }), 300)
        }
    }), []), Object(r.createElement)("div", a({
      className: "ct-option-editor"
    }, o.attr || {}), Object(r.createElement)("textarea", a({
      style: {
        opacity: 0
      },
      id: d,
      ref: u,
      value: n,
      className: "wp-editor-area"
    }, s({}, o.field_attr ? o.field_attr : {}, {}, o.attr && o.attr.placeholder ? {
      placeholder: o.attr.placeholder
    } : {}), {
      onChange: function(e) {
        var t = e.target.value;
        return l(t)
      }
    })))
  }
}, function(e, t) {
  var n, r;
  n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
    rotl: function(e, t) {
      return e << t | e >>> 32 - t
    },
    rotr: function(e, t) {
      return e << 32 - t | e >>> t
    },
    endian: function(e) {
      if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
      for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
      return e
    },
    randomBytes: function(e) {
      for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
      return t
    },
    bytesToWords: function(e) {
      for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
      return t
    },
    wordsToBytes: function(e) {
      for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
      return t
    },
    bytesToHex: function(e) {
      for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
      return t.join("")
    },
    hexToBytes: function(e) {
      for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
      return t
    },
    bytesToBase64: function(e) {
      for (var t = [], r = 0; r < e.length; r += 3)
        for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * e.length ? t.push(n.charAt(o >>> 6 * (3 - i) & 63)) : t.push("=");
      return t.join("")
    },
    base64ToBytes: function(e) {
      e = e.replace(/[^A-Z0-9+\/]/gi, "");
      for (var t = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(e.charAt(r)) >>> 6 - 2 * o);
      return t
    }
  }, e.exports = r
}, function(e, t) {
  function n(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  e.exports = function(e) {
    return null != e && (n(e) || function(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }(e) || !!e._isBuffer)
  }
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(1),
    i = n(2),
    a = n.n(i),
    c = n(32),
    l = n(18);

  function s() {
    return (s = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function u(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(n, !0).forEach((function(t) {
        d(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function h(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  var m = function(e, t) {
      var n = ct_customizer_localizations.header_builder_data.header.find((function(t) {
        return t.id === e
      }));
      if (!n) return !0;
      var r = !(n.config.allowed_in.length > 0) || n.config.allowed_in.indexOf(t) > -1,
        o = !(n.config.excluded_from.length > 0) || -1 === n.config.excluded_from.indexOf(t);
      return r && o
    },
    b = function(e, t) {
      for (var n in t)
        if (t[n] !== e[n]) return !1;
      return !0
    };
  var g = function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
        o = {};
      return function(i) {
        return void 0 !== t && n(o, i) ? t : (o = i, t = Object(r.createElement)(e, Object.assign({}, i)))
      }
    }((function(e) {
      var t = e.item,
        n = (e.index, e.panelType),
        o = e.onRemove,
        i = e.renderItem,
        c = e.onClick,
        l = e.className,
        s = ct_customizer_localizations.header_builder_data[n].find((function(e) {
          return e.id === t
        }));
      return i ? i({
        item: t,
        itemData: s
      }) : Object(r.createElement)("div", {
        "data-id": t,
        className: a()("ct-builder-item", l, {}),
        onClick: c
      }, s.config.name, Object(r.createElement)("button", {
        className: "ct-btn-remove",
        onClick: function(e) {
          e.preventDefault(), e.stopPropagation(), o()
        }
      }))
    })),
    v = function(e) {
      var t = e.items,
        n = e.draggableId,
        o = e.hasPointers,
        i = void 0 === o || o,
        p = e.className,
        b = e.tagName,
        v = void 0 === b ? "div" : b,
        y = e.direction,
        O = void 0 === y ? "horizontal" : y,
        w = e.group,
        j = void 0 === w ? "header_sortables" : w,
        _ = e.options,
        E = void 0 === _ ? {} : _,
        S = e.propsForItem,
        k = void 0 === S ? function(e) {
          return {}
        } : S,
        C = h(e, ["items", "draggableId", "hasPointers", "className", "tagName", "direction", "group", "options", "propsForItem"]),
        x = Object(r.useContext)(Y),
        P = x.isDragging,
        I = x.setIsDragging,
        D = x.onChange,
        A = x.setList,
        T = x.builderValueDispatch,
        N = Object(r.useContext)(l.a).panelsHelpers;
      return Object(r.createElement)(c.a, s({
        options: f({
          delay: 0,
          group: j,
          fallbackOnBody: !0,
          forceFallback: !0,
          fallbackTolerance: 5,
          filter: ".ct-pointer",
          direction: O,
          touchStartThreshold: 5,
          onStart: function(e) {
            I(e.item.dataset.id), m(e.item.dataset.id, "middle-row") && document.body.classList.add("ct-builder-dragging"), e.from && j && "clone" !== j.pull && e.to.classList.add("ct-is-over")
          },
          onEnd: function() {
            I(!1), document.body.classList.remove("ct-builder-dragging"), u(document.querySelectorAll(".ct-panel-builder .ct-is-over")).map((function(e) {
              return e.classList.remove("ct-is-over")
            }))
          },
          onMove: function(e, t) {
            if (e.from.closest("#ct-option-header-builder-items") && Promise.resolve().then((function() {
                return u(e.from.querySelectorAll('[data-id="'.concat(e.dragged.dataset.id, '"]'))).map((function(e) {
                  e.classList.remove("ct-builder-item"), e.classList.add("ct-item-in-builder")
                }))
              })), u(document.querySelectorAll(".ct-panel-builder .ct-is-over")).map((function(e) {
                return e.classList.remove("ct-is-over")
              })), e.to && e.to.classList.add("ct-is-over"), !m(e.dragged.dataset.id, e.to.dataset.id.split(":")[0])) return !1
          }
        }, E),
        onChange: function(e, t, r) {
          "available-items" !== n && D({
            id: n,
            value: e.filter((function(e) {
              return "__pointer__" !== e && "__filler__" !== e
            }))
          })
        },
        tag: v,
        className: a()("ct-builder-items", p)
      }, C, {
        "data-id": n
      }), ["end", "start-middle"].indexOf(n.split(":")[1]) > -1 && Object(r.createElement)("div", {
        "data-id": "__filler__",
        className: "ct-filler"
      }), i && P && m(P, n.split(":")[0]) && Object(r.createElement)("div", {
        "data-id": "__pointer__",
        className: "ct-pointer"
      }), t.map((function(e, o) {
        return Object(r.createElement)(g, s({
          key: e,
          index: o,
          panelType: "header",
          item: e,
          className: N.isOpenFor("builder_panel_".concat(e)) ? "ct-customizing" : "",
          onClick: function(t) {
            t.stopPropagation(), t.preventDefault(), N.open("builder_panel_".concat(e))
          },
          onRemove: function() {
            N.close(), A(d({}, n, t.filter((function(t) {
              return t !== e
            })))), T({
              type: "REMOVE_ITEM",
              payload: {
                id: e
              }
            })
          }
        }, k(e)))
      })))
    };

  function y() {
    return (y = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  var O = function(e) {
      var t = e.placementName,
        n = e.bar,
        o = (e.direction, n.placements.find((function(e) {
          return e.id === t
        }))),
        i = [o];
      if ("middle" !== t) {
        var a = n.placements.find((function(e) {
          return "middle" === e.id
        }));
        if (a && a.items.length > 0) {
          if ("start" === t) i = [o, n.placements.find((function(e) {
            return "start-middle" === e.id
          }))];
          if ("end" === t) i = [n.placements.find((function(e) {
            return "end-middle" === e.id
          })), o]
        }
      }
      return Object(r.createElement)("li", y({
        className: ["ct-builder-column-".concat(o.id)]
      }, "middle" === o.id ? {
        "data-count": o.items.length
      } : {}), i.map((function(e) {
        return Object(r.createElement)(v, {
          key: e.id,
          className: "middle" === e.id ? "" : "ct-".concat(e.id.indexOf("-") > -1 ? "secondary" : "primary", "-column"),
          draggableId: "".concat(n.id, ":").concat(e.id),
          items: e.items
        })
      })))
    },
    w = function(e) {
      var t = e.bar,
        n = e.direction,
        i = void 0 === n ? "horizontal" : n,
        a = Object(r.useContext)(l.a).panelsHelpers;
      return Object(r.createElement)("li", {
        className: "builder-row"
      }, Object(r.createElement)("div", {
        className: "ct-row-actions",
        onClick: function() {
          return a.open("builder_panel_".concat(t.id))
        }
      }, {
        "top-row": Object(o.__)("Top Row", "blocksy"),
        "middle-row": Object(o.__)("Middle Row", "blocksy"),
        "bottom-row": Object(o.__)("Bottom Row", "blocksy"),
        offcanvas: Object(o.__)("Offcanvas", "blocksy")
      } [t.id]), Object(r.createElement)("ul", {
        className: "row-inner"
      }, ["start", "middle", "end"].filter((function(e) {
        return !!t.placements.find((function(t) {
          return t.id === e
        }))
      })).map((function(e) {
        return Object(r.createElement)(O, {
          key: e,
          bar: t,
          placementName: e,
          direction: i
        })
      }))))
    },
    j = function(e, t) {
      for (var n in t)
        if (t[n] !== e[n]) return !1;
      return !0
    };
  var _ = function(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j,
      o = {};
    return function(i) {
      return void 0 !== t && n(o, i) ? t : (o = i, t = Object(r.createElement)(e, Object.assign({}, i)))
    }
  }((function(e) {
    var t = e.view,
      n = e.builderValueWithView;
    return Object(r.createElement)("div", {
      className: a()("placements-builder", {
        "ct-mobile": "mobile" === t
      })
    }, "mobile" === t && Object(r.createElement)("ul", {
      className: "offcanvas-container"
    }, Object(r.createElement)(w, {
      direction: "vertical",
      bar: n.find((function(e) {
        return "offcanvas" === e.id
      }))
    })), Object(r.createElement)("ul", {
      className: "horizontal-rows"
    }, ["top-row", "middle-row", "bottom-row"].map((function(e) {
      return Object(r.createElement)(w, {
        bar: n.find((function(t) {
          return t.id === e
        })),
        key: e
      })
    }))))
  }));

  function E(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var S = function(e) {
      var t = e.currentView,
        n = e.setCurrentView,
        i = E(Object(r.useState)(!1), 2),
        c = i[0],
        l = i[1];
      return Object(r.useEffect)((function() {
        return function() {
          document.querySelector(".wp-full-overlay").classList.remove("ct-builder-collapsed")
        }
      }), []), Object(r.createElement)("ul", {
        className: "ct-view-switch"
      }, ["desktop", "mobile"].map((function(e) {
        return Object(r.createElement)("li", {
          key: e,
          onClick: function() {
            return n(e)
          },
          className: a()({
            active: t === e
          })
        }, {
          desktop: Object(o.__)("Desktop Header", "blocksy"),
          mobile: Object(o.__)("Mobile Header", "blocksy")
        } [e])
      })), Object(r.createElement)("li", {
        className: "ct-builder-toggle",
        onClick: function() {
          l(!c), c ? document.querySelector(".wp-full-overlay").classList.remove("ct-builder-collapsed") : document.querySelector(".wp-full-overlay").classList.add("ct-builder-collapsed")
        }
      }, c ? Object(o.__)("Show Builder", "blocksy") : Object(o.__)("Hide Builder", "blocksy")))
    },
    k = n(16),
    C = n(8),
    x = n(25),
    P = function(e) {
      var t = e.allBuilderSections,
        n = e.builderValue,
        i = e.builderValueDispatch;
      ct_customizer_localizations.header_builder_data.secondary_items.header, ct_customizer_localizations.header_builder_data.header;
      return Object(r.createElement)(x.default, {
        onChange: function(e) {
          return i({
            type: "PICK_BUILDER_SECTION",
            payload: {
              id: e
            }
          })
        },
        option: {
          placeholder: Object(o.__)("Picker header", "blocksy"),
          choices: t.sections.map((function(e) {
            var t = e.id;
            return {
              key: t,
              value: {
                "type-1": Object(o.__)("Default", "blocksy"),
                "type-2": Object(o.__)("Secondary", "blocksy"),
                "type-3": Object(o.__)("Centered", "blocksy")
              } [t]
            }
          }))
        },
        value: n.id
      })
    };

  function I() {
    return (I = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function D(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var A = function(e) {
    var t = e.builderValue,
      n = e.builderValueDispatch,
      o = e.inlinedItemsFromBuilder,
      i = Object(r.useContext)(Y),
      c = (i.panelsState, i.panelsActions),
      l = i.currentView,
      s = [].concat(D(t.desktop.reduce((function(e, t) {
        t.id;
        var n = t.placements;
        return [].concat(D(e), D((n || []).reduce((function(e, t) {
          t.id;
          var n = t.items;
          return [].concat(D(e), D(n))
        }), [])))
      }), [])), D(t.mobile.reduce((function(e, t) {
        t.id;
        var n = t.placements;
        return [].concat(D(e), D((n || []).reduce((function(e, t) {
          t.id;
          var n = t.items;
          return [].concat(D(e), D(n))
        }), [])))
      }), []))),
      u = ct_customizer_localizations.header_builder_data.secondary_items.header.filter((function(e) {
        return e.config.enabled
      })),
      p = ct_customizer_localizations.header_builder_data.header;
    return Object(r.createElement)(v, {
      options: {
        sort: !1,
        filter: ".ct-item-in-builder"
      },
      group: {
        name: "header_sortables",
        put: !1,
        pull: "clone"
      },
      draggableId: "available-items",
      items: u.map((function(e) {
        return e.id
      })),
      hasPointers: !1,
      propsForItem: function(e) {
        return {
          renderItem: function(e) {
            var i = e.item,
              u = e.itemData,
              f = p.find((function(e) {
                return e.id === i
              })).options,
              d = {
                label: u.config.name,
                "inner-options": f
              },
              h = o.indexOf(i) > -1,
              m = "builder_panel_".concat(i);
            return Object(r.createElement)(k.PanelMetaWrapper, I({
              id: m,
              option: d
            }, c, {
              getActualOption: function(e) {
                var o = e.open,
                  c = e.container;
                return Object(r.createElement)(r.Fragment, null, s.indexOf(i) > -1 && Object(r.createElement)(k.default, {
                  id: m,
                  getValues: function() {
                    var e = t.items.find((function(e) {
                      return e.id === i
                    }));
                    return e && Object.keys(e.values) > 5 ? e.values : Object(C.b)(f, e ? e.values : {})
                  },
                  option: d,
                  onChangeFor: function(e, r) {
                    var o = t.items.find((function(e) {
                      return e.id === i
                    }));
                    n({
                      type: "ITEM_VALUE_ON_CHANGE",
                      payload: {
                        id: i,
                        optionId: e,
                        optionValue: r,
                        values: !o || o && 0 === Object.keys(o.values).length ? Object(C.b)(f, {}) : {}
                      }
                    })
                  },
                  view: "simple"
                }), u.config.devices.indexOf(l) > -1 && Object(r.createElement)("div", {
                  ref: c,
                  "data-id": i,
                  className: a()({
                    "ct-item-in-builder": h,
                    "ct-builder-item": !h
                  }),
                  onClick: function() {
                    return h && o()
                  }
                }, u.config.name))
              }
            }))
          }
        }
      },
      direction: "vertical"
    })
  };

  function T() {
    return (T = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  var N = function(e) {
      var t = e.builderValue,
        n = e.builderValueDispatch,
        o = ct_customizer_localizations.header_builder_data.secondary_items.header,
        i = ct_customizer_localizations.header_builder_data.header,
        a = Object(r.useContext)(Y),
        c = (a.panelsState, a.panelsActions),
        l = i.filter((function(e) {
          var t = e.id;
          return !o.find((function(e) {
            return e.id === t
          }))
        }));
      return Object(r.createElement)(r.Fragment, null, l.map((function(e) {
        var o = {
            label: e.config.name,
            "inner-options": e.options
          },
          i = "builder_panel_".concat(e.id);
        return Object(r.createElement)(k.PanelMetaWrapper, T({
          id: i,
          key: e.id,
          option: o
        }, c, {
          getActualOption: function(a) {
            var c = a.container;
            return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(k.default, {
              id: i,
              getValues: function() {
                var n = t.items.find((function(t) {
                  return t.id === e.id
                }));
                return n && Object.keys(n.values) > 5 ? n.values : Object(C.b)(e.options, n ? n.values : {})
              },
              option: o,
              onChangeFor: function(r, o) {
                var i = t.items.find((function(t) {
                  return t.id === e.id
                }));
                n({
                  type: "ITEM_VALUE_ON_CHANGE",
                  payload: {
                    id: e.id,
                    optionId: r,
                    optionValue: o,
                    values: !i || i && 0 === Object.keys(i.values).length ? Object(C.b)(e.options, {}) : {}
                  }
                })
              },
              view: "simple"
            }), Object(r.createElement)("div", {
              ref: c
            }))
          }
        }))
      })))
    },
    M = function(e) {
      var t = e.allBuilderSections,
        n = e.builderValue,
        i = e.builderValueDispatch,
        a = e.inlinedItemsFromBuilder;
      ct_customizer_localizations.header_builder_data.secondary_items.header, ct_customizer_localizations.header_builder_data.header;
      return Object(r.createElement)("div", {
        className: "ct-available-items"
      }, Object(r.createElement)("h3", {
        className: "ct-title"
      }, Object(o.__)("Global Header", "blocksy")), Object(r.createElement)(P, {
        allBuilderSections: t,
        builderValue: n,
        builderValueDispatch: i
      }), Object(r.createElement)("div", {
        className: "ct-option-description"
      }, Object(o.__)("Set one of these headers as a global one. You can edit them idependently.", "blocksy")), Object(r.createElement)("h3", {
        className: "ct-title"
      }, Object(o.__)("Header Elements", "blocksy")), Object(r.createElement)(A, {
        builderValue: n,
        builderValueDispatch: i,
        inlinedItemsFromBuilder: a
      }), Object(r.createElement)(N, {
        builderValue: n,
        builderValueDispatch: i
      }))
    };

  function R(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? z(n, !0).forEach((function(t) {
        F(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function F(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function B(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  var V = function(e, t) {
      e.__should_refresh__;
      var n = B(e, ["__should_refresh__"]);
      if (!t.onBuilderValueChange) throw new Error("When you dispatch pass onBuilderValueChange fn.");
      var r = {},
        o = n.sections.find((function(e) {
          return e.id === n.current_section
        })),
        i = !1,
        a = !1;
      if ("ITEM_VALUE_ON_CHANGE" === t.type) {
        var c = t.payload,
          l = c.id,
          s = c.optionId,
          u = c.optionValue,
          p = c.values,
          f = void 0 === p ? {} : p,
          d = c.silent;
        a = "".concat(l, ":").concat(s);
        var h = o.items;
        d || wp.customize.previewer && wp.customize.previewer.send("ct:header:receive-value-update", {
          itemId: l,
          optionId: s,
          optionValue: u,
          values: L({}, (h.find((function(e) {
            var t = e.id;
            return l === t
          })) || {
            values: {}
          }).values, {}, f, F({}, s, u))
        }), h.find((function(e) {
          return e.id === l
        })) || (h = [].concat(R(h), [{
          id: l,
          values: {}
        }])), o = L({}, o, {
          items: h.map((function(e) {
            return e.id === l ? L({}, e, {
              values: L({}, e.values, {}, f, F({}, s, u))
            }) : e
          }))
        })
      }
      if ("PICK_BUILDER_SECTION" === t.type && (i = !0, r = {
          current_section: t.payload.id
        }, wp.customize.previewer && wp.customize.previewer.send("ct:header:receive-value-update:all-items", {
          items: n.sections.find((function(e) {
            return e.id === t.payload.id
          })).items,
          oldItems: n.sections.find((function(e) {
            return e.id === n.current_section
          })).items
        })), t.type, "SET_LIST" === t.type) {
        i = !0;
        var m = t.payload,
          b = m.currentView,
          g = m.lists;
        o = L({}, o, F({}, b, o[b].map((function(e) {
          var t = e.id,
            n = e.placements;
          return n.find((function(e) {
            return "middle" === e.id
          })) && 0 === n.find((function(e) {
            return "middle" === e.id
          })).items.length && n.find((function(e) {
            return "start-middle" === e.id
          })) && (n.find((function(e) {
            return "start-middle" === e.id
          })).items.length > 0 || n.find((function(e) {
            return "end-middle" === e.id
          })).items.length > 0) && (g["".concat(t, ":start")] = [].concat(R(g["".concat(t, ":start")] || n.find((function(e) {
            return "start" === e.id
          })).items), R(g["".concat(t, ":start-middle")] || n.find((function(e) {
            return "start-middle" === e.id
          })).items)), g["".concat(t, ":end")] = [].concat(R(g["".concat(t, ":end-middle")] || n.find((function(e) {
            return "end-middle" === e.id
          })).items), R(g["".concat(t, ":end")] || n.find((function(e) {
            return "end" === e.id
          })).items)), g["".concat(t, ":start-middle")] = [], g["".concat(t, ":end-middle")] = []), Object.keys(g).map((function(e) {
            return e.split(":")[0]
          })).indexOf(t) > -1 ? {
            id: t,
            placements: n.map((function(e) {
              var n = e.id,
                r = e.items;
              return g["".concat(t, ":").concat(n)] ? {
                id: n,
                items: g["".concat(t, ":").concat(n)]
              } : {
                id: n,
                items: r
              }
            }))
          } : {
            id: t,
            placements: n
          }
        }))))
      }
      var v = L({}, n, {}, r, {}, i ? {
        __should_refresh__: !0
      } : {
        __should_refresh__: !1
      }, {
        __should_refresh_item__: a,
        sections: n.sections.map((function(e) {
          return e.id === o.id ? o : e
        }))
      });
      return t.onBuilderValueChange(v), v
    },
    H = n(34);

  function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function W(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function K(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function q(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  n.d(t, "DragDropContext", (function() {
    return Y
  }));
  var Y = Object(r.createContext)({}),
    G = function(e) {
      var t = e.value,
        n = (e.option, e.onChange),
        o = q(Object(r.useReducer)(V, t), 2),
        i = o[0],
        a = o[1],
        c = Object(r.useMemo)((function() {
          return i.sections.find((function(e) {
            return e.id === i.current_section
          }))
        }), [i]),
        l = q(Object(r.useState)(!1), 2),
        s = l[0],
        u = l[1],
        p = q(Object(H.a)(), 2),
        f = p[0],
        d = p[1],
        h = c[f].reduce((function(e, t) {
          t.id;
          var n = t.placements;
          return [].concat(K(e), K((n || []).reduce((function(e, t) {
            t.id;
            var n = t.items;
            return [].concat(K(e), K(n))
          }), [])))
        }), []),
        m = Object(r.useCallback)((function(e) {
          return a(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? U(n, !0).forEach((function(t) {
                W(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }({}, e, {
            onBuilderValueChange: n
          }))
        }), [a, n]),
        b = (Object(r.useCallback)((function(e) {
          return []
        }), []), Object(r.useCallback)((function(e) {
          return m({
            type: "SET_LIST",
            onBuilderValueChange: n,
            payload: {
              currentView: f,
              lists: e
            }
          })
        }), [f, n]));
      return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(Y.Provider, {
        value: {
          currentView: f,
          isDragging: s,
          setIsDragging: u,
          setList: b,
          builderValueDispatch: m,
          onChange: function(e) {
            var t = e.id,
              n = e.value;
            return b(W({}, t, n))
          }
        }
      }, Object(r.createElement)(M, {
        allBuilderSections: t,
        builderValue: c,
        inlinedItemsFromBuilder: h,
        builderValueDispatch: m
      }), Object(r.createPortal)(Object(r.createElement)("div", null, Object(r.createElement)(S, {
        currentView: f,
        setCurrentView: d
      }), Object(r.createElement)(_, {
        builderValueWithView: c[f],
        view: f
      })), document.querySelector(".ct-panel-builder"))))
    };
  G.renderingConfig = {
    design: "none"
  };
  t.default = G
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    o = n(1),
    i = n(2),
    a = n.n(i),
    c = n(32),
    l = n(18);

  function s() {
    return (s = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function u(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(n, !0).forEach((function(t) {
        d(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function h(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  var m = function(e, t) {
    for (var n in t)
      if (t[n] !== e[n]) return !1;
    return !0
  };
  var b = function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
        o = {};
      return function(i) {
        return void 0 !== t && n(o, i) ? t : (o = i, t = Object(r.createElement)(e, Object.assign({}, i)))
      }
    }((function(e) {
      var t = e.item,
        n = (e.index, e.panelType),
        o = e.onRemove,
        i = e.renderItem,
        c = e.onClick,
        l = e.className,
        s = ct_customizer_localizations.header_builder_data[n].find((function(e) {
          return e.id === t
        }));
      return i ? i({
        item: t,
        itemData: s
      }) : Object(r.createElement)("div", {
        "data-id": t,
        className: a()("ct-builder-item", l, {}),
        onClick: c
      }, s.config.name, Object(r.createElement)("button", {
        className: "ct-btn-remove",
        onClick: function(e) {
          e.preventDefault(), e.stopPropagation(), o()
        }
      }))
    })),
    g = function(e) {
      var t = e.items,
        n = e.draggableId,
        o = e.hasPointers,
        i = void 0 === o || o,
        p = e.className,
        m = e.tagName,
        g = void 0 === m ? "div" : m,
        v = e.direction,
        y = void 0 === v ? "horizontal" : v,
        O = e.group,
        w = void 0 === O ? "header_sortables" : O,
        j = e.options,
        _ = void 0 === j ? {} : j,
        E = e.propsForItem,
        S = void 0 === E ? function(e) {
          return {}
        } : E,
        k = e.panelType,
        C = void 0 === k ? "footer" : k,
        x = h(e, ["items", "draggableId", "hasPointers", "className", "tagName", "direction", "group", "options", "propsForItem", "panelType"]),
        P = Object(r.useContext)(q),
        I = P.isDragging,
        D = P.setIsDragging,
        A = P.onChange,
        T = P.setList,
        N = P.builderValueDispatch,
        M = Object(r.useContext)(l.a).panelsHelpers;
      return Object(r.createElement)(c.a, s({
        options: f({
          delay: 0,
          group: w,
          fallbackOnBody: !0,
          forceFallback: !0,
          fallbackTolerance: 5,
          filter: ".ct-pointer",
          direction: y,
          touchStartThreshold: 5,
          onStart: function(e) {
            D(e.item.dataset.id), document.body.classList.add("ct-builder-dragging"), e.from && w && "clone" !== w.pull && e.to.classList.add("ct-is-over")
          },
          onEnd: function() {
            D(!1), document.body.classList.remove("ct-builder-dragging"), u(document.querySelectorAll(".ct-panel-builder .ct-is-over")).map((function(e) {
              return e.classList.remove("ct-is-over")
            }))
          },
          onMove: function(e, t) {
            if (e.from.closest("#ct-option-header-builder-items") && Promise.resolve().then((function() {
                return u(e.from.querySelectorAll('[data-id="'.concat(e.dragged.dataset.id, '"]'))).map((function(e) {
                  e.classList.remove("ct-builder-item"), e.classList.add("ct-item-in-builder")
                }))
              })), e.to) {
              if (e.to.children && Array.from(e.to.children).filter((function(e) {
                  return "__pointer__" !== e.dataset.id && "__filler__" !== e.dataset.id
                })).length > 0) return !1;
              u(document.querySelectorAll(".ct-panel-builder .ct-is-over")).map((function(e) {
                return e.classList.remove("ct-is-over")
              })), e.to.classList.add("ct-is-over")
            }
          }
        }, _),
        onChange: function(e, t, r) {
          "available-items" !== n && A({
            id: n,
            value: e.filter((function(e) {
              return "__pointer__" !== e && "__filler__" !== e
            }))
          })
        },
        tag: g,
        className: a()("ct-builder-items", p)
      }, x, {
        "data-id": n
      }), "available-items" !== n && I && Object(r.createElement)("div", {
        "data-id": "__filler__",
        className: "ct-filler"
      }), i && I && Object(r.createElement)("div", {
        "data-id": "__pointer__",
        className: "ct-pointer"
      }), t.map((function(e, o) {
        return Object(r.createElement)(b, s({
          key: e,
          index: o,
          panelType: C,
          item: e,
          className: M.isOpenFor("builder_panel_".concat(e)) ? "ct-customizing" : "",
          onClick: function(t) {
            t.stopPropagation(), t.preventDefault(), M.open("builder_panel_".concat(e))
          },
          onRemove: function() {
            M.close(), T(d({}, n, t.filter((function(t) {
              return t !== e
            })))), N({
              type: "REMOVE_ITEM",
              payload: {
                id: e
              }
            })
          }
        }, S(e)))
      })))
    },
    v = function(e) {
      var t = e.bar,
        n = e.builderValue,
        i = (e.direction, Object(r.useContext)(l.a).panelsHelpers),
        a = n.items[t.id],
        c = (ct_customizer_localizations.header_builder_data.footer.find((function(e) {
          return e.id === t.id
        })), a ? a.values : {}),
        s = "initial";
      return 2 === t.columns.length && (s = c["2_columns_layout"] || {
        desktop: "repeat(2, 1fr)",
        tablet: "initial",
        mobile: "initial"
      }), 3 === t.columns.length && (s = c["3_columns_layout"] || {
        desktop: "repeat(3, 1fr)",
        tablet: "initial",
        mobile: "initial"
      }), 4 === t.columns.length && (s = c["4_columns_layout"] || {
        desktop: "repeat(4, 1fr)",
        tablet: "initial",
        mobile: "initial"
      }), s && s.desktop && (s = s.desktop), Object(r.createElement)("li", {
        className: "builder-row"
      }, Object(r.createElement)("div", {
        className: "ct-row-actions",
        onClick: function() {
          return i.open("builder_panel_".concat(t.id))
        }
      }, {
        "top-row": Object(o.__)("Top Row", "blocksy"),
        "middle-row": Object(o.__)("Middle Row", "blocksy"),
        "bottom-row": Object(o.__)("Bottom Row", "blocksy")
      } [t.id]), Object(r.createElement)("ul", {
        className: "row-inner",
        style: {
          "--gridTemplateColummns": s
        }
      }, t.columns.map((function(e, n) {
        return Object(r.createElement)("li", {
          className: "builder-column",
          key: n
        }, Object(r.createElement)(g, {
          draggableId: "".concat(t.id, ":").concat(n),
          items: e
        }))
      }))))
    },
    y = function(e, t) {
      for (var n in t)
        if (t[n] !== e[n]) return !1;
      return !0
    };
  var O = function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y,
        o = {};
      return function(i) {
        return void 0 !== t && n(o, i) ? t : (o = i, t = Object(r.createElement)(e, Object.assign({}, i)))
      }
    }((function(e) {
      var t = e.builderValue;
      return Object(r.createElement)("div", {
        className: a()("placements-builder")
      }, Object(r.createElement)("ul", {
        className: "horizontal-rows"
      }, ["top-row", "middle-row", "bottom-row"].map((function(e) {
        return Object(r.createElement)(v, {
          builderValue: t,
          bar: t.rows.find((function(t) {
            return t.id === e
          })),
          key: e
        })
      }))))
    })),
    w = n(16),
    j = n(8),
    _ = n(22),
    E = n(25),
    S = function(e) {
      var t = e.allBuilderSections,
        n = e.builderValue,
        i = e.builderValueDispatch;
      ct_customizer_localizations.header_builder_data.secondary_items.footer, ct_customizer_localizations.header_builder_data.footer;
      return Object(r.createElement)(E.default, {
        onChange: function(e) {
          return i({
            type: "PICK_BUILDER_SECTION",
            payload: {
              id: e
            }
          })
        },
        option: {
          placeholder: Object(o.__)("Pick footer", "blocksy"),
          choices: t.sections.map((function(e) {
            var t = e.id;
            return {
              key: t,
              value: {
                "type-1": Object(o.__)("Default", "blocksy"),
                "type-2": Object(o.__)("Secondary", "blocksy"),
                "type-3": Object(o.__)("Centered", "blocksy")
              } [t]
            }
          }))
        },
        value: n.id
      })
    };

  function k() {
    return (k = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function C(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var x = function(e) {
    var t = e.builderValue,
      n = e.builderValueDispatch,
      o = e.inlinedItemsFromBuilder,
      i = e.displayList,
      c = void 0 === i || i,
      l = Object(r.useContext)(q),
      s = (l.panelsState, l.panelsActions),
      u = (l.currentView, t.rows.reduce((function(e, t) {
        var n = t.columns;
        return [].concat(C(e), C((n || []).reduce((function(e, t) {
          return [].concat(C(e), C(t))
        }), [])))
      }), [])),
      p = ct_customizer_localizations.header_builder_data.secondary_items.footer,
      f = ct_customizer_localizations.header_builder_data.footer;
    return Object(r.createElement)(g, {
      options: {
        sort: !1,
        filter: ".ct-item-in-builder"
      },
      group: {
        name: "header_sortables",
        put: !1,
        pull: "clone"
      },
      draggableId: "available-items",
      items: p.map((function(e) {
        return e.id
      })),
      hasPointers: !1,
      panelType: "footer",
      propsForItem: function(e) {
        return {
          renderItem: function(e) {
            var i = e.item,
              l = e.itemData,
              p = f.find((function(e) {
                return e.id === i
              })).options,
              d = {
                label: l.config.name,
                "inner-options": p
              },
              h = o.indexOf(i) > -1,
              m = "builder_panel_".concat(i);
            return Object(r.createElement)(w.PanelMetaWrapper, k({
              id: m,
              option: d
            }, s, {
              getActualOption: function(e) {
                var o = e.open,
                  s = e.container;
                return Object(r.createElement)(r.Fragment, null, u.indexOf(i) > -1 && Object(r.createElement)(w.default, {
                  id: m,
                  getValues: function() {
                    var e = t.items[i];
                    return e && Object.keys(e.values) > 5 ? e.values : Object(j.b)(p, e ? e.values : {})
                  },
                  option: d,
                  onChangeFor: function(e, r) {
                    var o = t.items[i];
                    n({
                      type: "ITEM_VALUE_ON_CHANGE",
                      payload: {
                        id: i,
                        optionId: e,
                        optionValue: r,
                        values: !o || o && 0 === Object.keys(o.values).length ? Object(j.b)(p, {}) : {}
                      }
                    })
                  },
                  view: "simple"
                }), c && Object(r.createElement)("div", {
                  ref: s,
                  "data-id": i,
                  className: a()({
                    "ct-item-in-builder": h,
                    "ct-builder-item": !h
                  }),
                  onClick: function() {
                    return h && o()
                  }
                }, l.config.name))
              }
            }))
          }
        }
      },
      direction: "vertical"
    })
  };

  function P() {
    return (P = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }

  function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function D(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? I(n, !0).forEach((function(t) {
        A(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function T(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var N = function(e) {
    var t = e.builderValue,
      n = e.builderValueDispatch,
      o = ct_customizer_localizations.header_builder_data.secondary_items.footer,
      i = ct_customizer_localizations.header_builder_data.footer,
      a = Object(r.useContext)(q),
      c = (a.panelsState, a.panelsActions),
      l = i.filter((function(e) {
        var t = e.id;
        return !o.find((function(e) {
          return e.id === t
        }))
      }));
    return Object(r.createElement)(r.Fragment, null, l.map((function(e) {
      var o = {
          label: e.config.name,
          "inner-options": e.options
        },
        i = "builder_panel_".concat(e.id);
      return Object(r.createElement)(w.PanelMetaWrapper, P({
        id: i,
        key: e.id,
        option: o
      }, c, {
        getActualOption: function(a) {
          a.container;
          return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(w.default, {
            id: i,
            getValues: function() {
              var n = t.items[e.id],
                r = t.rows.find((function(t) {
                  return t.id === e.id
                })),
                o = !1;
              return r && r.columns.reduce((function(e, t) {
                return [].concat(T(e), [t])
              }), []).join("").indexOf("widget-area") > -1 && (o = !0), n && Object.keys(n.values) > 5 ? D({}, n.values, {}, r ? {
                items_per_row: r.columns.length.toString(),
                has_widget_areas: o ? "yes" : "no"
              } : {}) : D({}, Object(j.b)(e.options, n ? n.values : {}), {}, r ? {
                items_per_row: r.columns.length.toString(),
                has_widget_areas: o ? "yes" : "no"
              } : {})
            },
            option: o,
            onChangeFor: function(r, o) {
              var i = t.items[e.id];
              n({
                type: "ITEM_VALUE_ON_CHANGE",
                payload: {
                  id: e.id,
                  optionId: r,
                  optionValue: o,
                  values: !i || i && 0 === Object.keys(i.values).length ? Object(j.b)(e.options, {}) : {}
                }
              })
            },
            view: "simple"
          }))
        }
      }))
    })))
  };

  function M(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var R = function(e) {
    var t = e.allBuilderSections,
      n = e.builderValue,
      i = e.builderValueDispatch,
      c = e.inlinedItemsFromBuilder,
      l = M(Object(r.useState)("items"), 2),
      s = l[0],
      u = l[1],
      p = (ct_customizer_localizations.header_builder_data.secondary_items.footer, ct_customizer_localizations.header_builder_data.footer, ct_customizer_localizations.header_builder_data.footer_data.footer_options);
    return Object(r.createElement)("div", {
      className: "ct-available-items ct-footer-builder-options"
    }, Object(r.createElement)("h3", {
      className: "ct-title"
    }, Object(o.__)("Global Footer", "blocksy")), Object(r.createElement)(S, {
      allBuilderSections: t,
      builderValue: n,
      builderValueDispatch: i
    }), Object(r.createElement)("div", {
      className: "ct-option-description"
    }, Object(o.__)("Set one of these footers as a global one. You can edit them idependently.", "blocksy")), Object(r.createElement)("div", {
      className: "ct-tabs"
    }, Object(r.createElement)("ul", null, ["items", "options"].map((function(e) {
      return Object(r.createElement)("li", {
        key: e,
        onClick: function(t) {
          t.preventDefault(), u(e)
        },
        className: a()({
          active: e === s
        })
      }, {
        items: Object(o.__)("Elements", "blocksy"),
        options: Object(o.__)("General", "blocksy")
      } [e])
    }))), Object(r.createElement)("div", {
      className: "ct-current-tab"
    }, Object(r.createElement)(x, {
      builderValue: n,
      builderValueDispatch: i,
      inlinedItemsFromBuilder: c,
      displayList: "items" === s
    }), "options" === s && Object(r.createElement)(_.a, {
      onChange: function(e, t) {
        i({
          type: "BUILDER_GLOBAL_SETTING_ON_CHANGE",
          payload: {
            optionId: e,
            optionValue: t
          }
        })
      },
      options: p,
      value: Object(j.b)(p, Array.isArray(n.settings) ? {} : n.settings)
    }))), Object(r.createElement)(N, {
      builderValue: n,
      builderValueDispatch: i
    }))
  };

  function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? z(n, !0).forEach((function(t) {
        F(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function F(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function B(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }
  var V = function(e, t) {
    e.__should_refresh__;
    var n = B(e, ["__should_refresh__"]);
    if (!t.onBuilderValueChange) throw new Error("When you dispatch pass onBuilderValueChange fn.");
    var r = {},
      o = n.sections.find((function(e) {
        return e.id === n.current_section
      })),
      i = !1,
      a = !1;
    if ("BUILDER_GLOBAL_SETTING_ON_CHANGE" === t.type) {
      var c = t.payload,
        l = c.optionId,
        s = c.optionValue;
      c.values, c.silent;
      wp.customize.previewer && wp.customize.previewer.send("ct:footer:receive-value-update", {
        itemId: "global",
        optionId: l,
        optionValue: s,
        values: L({}, o.settings, F({}, l, s))
      }), o = L({}, o, {
        settings: L({}, o.settings, F({}, l, s))
      })
    }
    if ("ITEM_VALUE_ON_CHANGE" === t.type) {
      var u = t.payload,
        p = u.id,
        f = u.optionId,
        d = u.optionValue,
        h = u.values,
        m = void 0 === h ? {} : h,
        b = u.silent;
      a = "".concat(p, ":").concat(f);
      var g = o.items;
      if (!b) {
        var v = g[p] || {
          values: {}
        };
        wp.customize.previewer && wp.customize.previewer.send("ct:footer:receive-value-update", {
          itemId: p,
          optionId: f,
          optionValue: d,
          values: L({}, v.values, {}, m, {}, "top-row" === p || "middle-row" === p || "bottom-row" === p ? {
            items_per_row: o.rows.find((function(e) {
              var t = e.id;
              return p === t
            })).columns.length
          } : {}, {}, "top-row" !== p && "middle-row" !== p && "bottom-row" !== p || "items_per_row" !== f ? {} : {
            items_per_row: parseInt(d, 10)
          }, F({}, f, d))
        })
      }
      "top-row" !== p && "middle-row" !== p && "bottom-row" !== p || "items_per_row" !== f ? (g[p] || (g[p] = {
        id: p,
        values: {}
      }), o = L({}, o, {
        items: L({}, Array.isArray(g) ? {} : g, F({}, p, {
          id: p,
          values: L({}, g[p].values, F({}, f, d))
        }))
      })) : o = L({}, o, {
        rows: o.rows.map((function(e) {
          return e.id === p ? L({}, e, {
            columns: (t = e.columns, n = parseInt(d, 10), t = t.filter((function(e) {
              return e.length > 0
            })), Array.from(Array(n)).map((function(e, n) {
              return Array.isArray(t[n]) ? t[n] : []
            })))
          }) : e;
          var t, n
        }))
      })
    }
    if ("PICK_BUILDER_SECTION" === t.type && (i = !0, r = {
        current_section: t.payload.id
      }, wp.customize.previewer && wp.customize.previewer.send("ct:footer:receive-value-update:all-items", {
        section: n.sections.find((function(e) {
          return e.id === t.payload.id
        })),
        oldSection: n.sections.find((function(e) {
          return e.id === n.current_section
        })),
        items: n.sections.find((function(e) {
          return e.id === t.payload.id
        })).items,
        oldItems: n.sections.find((function(e) {
          return e.id === n.current_section
        })).items
      })), "SET_LIST" === t.type) {
      i = !0;
      var y = t.payload.lists;
      o = L({}, o, {
        rows: o.rows.map((function(e) {
          var t = e.id,
            n = e.columns;
          return Object.keys(y).map((function(e) {
            return e.split(":")[0]
          })).indexOf(t) > -1 ? {
            id: t,
            columns: n.map((function(e, n) {
              return y["".concat(t, ":").concat(n)] ? y["".concat(t, ":").concat(n)] : e
            }))
          } : {
            id: t,
            columns: n
          }
        }))
      })
    }
    t.type;
    var O = L({}, n, {}, r, {}, i ? {
      __should_refresh__: !0
    } : {
      __should_refresh__: !1
    }, {
      __should_refresh_item__: a,
      sections: n.sections.map((function(e) {
        return e.id === o.id ? o : e
      }))
    });
    return t.onBuilderValueChange(O), O
  };

  function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function U(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function W(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function K(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e
      } finally {
        try {
          r || null == c.return || c.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  n.d(t, "DragDropContext", (function() {
    return q
  }));
  var q = Object(r.createContext)({}),
    Y = function(e) {
      var t = e.value,
        n = (e.option, e.onChange),
        i = K(Object(r.useReducer)(V, t), 2),
        a = i[0],
        c = i[1],
        l = K(Object(r.useState)(!1), 2),
        s = l[0],
        u = l[1],
        p = Object(r.useMemo)((function() {
          return a.sections.find((function(e) {
            return e.id === a.current_section
          }))
        }), [a]),
        f = K(Object(r.useState)(!1), 2),
        d = f[0],
        h = f[1],
        m = p.rows.reduce((function(e, t) {
          var n = t.columns;
          return [].concat(W(e), W((n || []).reduce((function(e, t) {
            return [].concat(W(e), W(t))
          }), [])))
        }), []),
        b = Object(r.useCallback)((function(e) {
          return c(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? H(n, !0).forEach((function(t) {
                U(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }({}, e, {
            onBuilderValueChange: n
          }))
        }), [c, n]),
        g = function(e) {
          return b({
            type: "SET_LIST",
            onBuilderValueChange: n,
            payload: {
              lists: e
            }
          })
        };
      return Object(r.useEffect)((function() {
        return function() {
          document.querySelector(".wp-full-overlay").classList.remove("ct-builder-collapsed")
        }
      }), []), Object(r.createElement)(r.Fragment, null, Object(r.createElement)(q.Provider, {
        value: {
          isDragging: d,
          setIsDragging: h,
          setList: g,
          builderValueDispatch: b,
          onChange: function(e) {
            var t = e.id,
              n = e.value;
            return g(U({}, t, n))
          }
        }
      }, Object(r.createElement)(R, {
        allBuilderSections: t,
        builderValue: p,
        inlinedItemsFromBuilder: m,
        builderValueDispatch: b
      }), Object(r.createPortal)(Object(r.createElement)("div", null, Object(r.createElement)("ul", {
        className: "ct-view-switch"
      }, Object(r.createElement)("li", {
        className: "ct-builder-toggle",
        onClick: function() {
          u(!s), s ? document.querySelector(".wp-full-overlay").classList.remove("ct-builder-collapsed") : document.querySelector(".wp-full-overlay").classList.add("ct-builder-collapsed")
        }
      }, s ? Object(o.__)("Show Builder", "blocksy") : Object(o.__)("Hide Builder", "blocksy"))), Object(r.createElement)(O, {
        builderValue: p
      })), document.querySelector(".ct-panel-builder"))))
    };
  Y.renderingConfig = {
    design: "none"
  };
  t.default = Y
}, function(e, t, n) {
  "use strict";
  n.r(t);
  n(65);
  var r = n(17),
    o = n.n(r),
    i = n(0),
    a = n(22);

  function c(e) {
    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(n, !0).forEach((function(t) {
        h(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function u(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
  }

  function f(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }

  function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var m = "__INITIAL__",
    b = function(e) {
      function t() {
        var e, n;
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
        return n = function(e, t) {
          return !t || "object" !== c(t) && "function" != typeof t ? f(e) : t
        }(this, (e = p(t)).call.apply(e, [this].concat(o))), h(f(n), "state", {
          value: m
        }), h(f(n), "input", Object(i.createRef)()), n
      }
      var n, r, l;
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && d(e, t)
      }(t, e), n = t, l = [{
        key: "getDerivedStateFromProps",
        value: function(e, t) {
          return t.value === m ? {
            value: e.value
          } : null
        }
      }], (r = [{
        key: "render",
        value: function() {
          var e = this;
          return Object(i.createElement)("div", {
            className: "ct-options-root"
          }, Object(i.createElement)("input", {
            value: JSON.stringify(Array.isArray(this.state.value) ? {} : this.state.value),
            onChange: function() {},
            name: this.props.input_name,
            id: this.props.input_id,
            type: "hidden",
            ref: this.input
          }), Object(i.createElement)(a.a, {
            hasRevertButton: this.props.hasRevertButton,
            onChange: function(t, n) {
              e.setState((function(e) {
                return {
                  value: s({}, e.value, h({}, t, n))
                }
              })), o()(e.input.current).change()
            },
            value: this.state.value,
            options: this.props.options
          }))
        }
      }]) && u(n.prototype, r), l && u(n, l), t
    }(i.Component),
    g = n(8);

  function v(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var y = function e() {
    return v(document.querySelectorAll(".ct-options-panel")).map((function(t) {
      t.closest('[id="available-widgets"]') || t.ctHasOptions || (t.ctHasOptions = !0, o()(t).on("remove", (function() {
        return setTimeout((function() {
          return e()
        }))
      })), o()(t).on("remove", (function() {
        return function() {
          return e()
        }
      })), Object(i.render)(Object(i.createElement)(b, {
        options: JSON.parse(t.firstElementChild.dataset.ctOptions),
        value: Object(g.b)(JSON.parse(t.firstElementChild.dataset.ctOptions), JSON.parse(t.firstElementChild.value)),
        input_id: t.firstElementChild.id,
        input_name: t.firstElementChild.name,
        hasRevertButton: -1 === Object.keys(t.dataset).indexOf("disableReverseButton")
      }), t))
    }))
  };

  function O(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  o.a && o.a.fn && o()(document).on("widget-added", (function(e, t) {
    ! function(e) {
      if (e.querySelector(".ct-options-panel")) {
        var t = e.querySelector(".ct-options-panel"),
          n = e.querySelector("input.multi_number").value;
        t.innerHTML = t.innerHTML.replace(/__i__|%i%/g, n)
      }
      y()
    }(t[0])
  })), document.addEventListener("DOMContentLoaded", (function() {
    y(), [].concat(O(document.querySelectorAll(".notice-blocksy-plugin")), O(document.querySelectorAll("[data-dismiss]"))).map((function(e) {
      return n.e(1).then(n.bind(null, 106)).then((function(t) {
        return (0, t.mount)(e)
      }))
    }))
  }))
}]);