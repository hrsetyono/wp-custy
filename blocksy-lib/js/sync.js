! function(e) {
  var t = {};

  function r(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
  }
  r.m = e, r.c = t, r.d = function(e, t, o) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, r.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r.t = function(e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (r.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var n in e) r.d(o, n, function(t) {
        return e[t]
      }.bind(null, n));
    return o
  }, r.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "", r(r.s = 25)
}([function(e, t) {
  e.exports = window.ctEvents
}, function(e, t, r) {
  "use strict";

  function o(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var r = [],
        o = !0,
        n = !1,
        a = void 0;
      try {
        for (var c, i = e[Symbol.iterator](); !(o = (c = i.next()).done) && (r.push(c.value), !t || r.length !== t); o = !0);
      } catch (e) {
        n = !0, a = e
      } finally {
        try {
          o || null == i.return || i.return()
        } finally {
          if (n) throw a
        }
      }
      return r
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function n(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(r, !0).forEach((function(t) {
        i(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function i(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  r.r(t), r.d(t, "setRatioFor", (function() {
    return s
  })), r.d(t, "getCache", (function() {
    return l
  })), r.d(t, "getFreshHtmlFor", (function() {
    return u
  })), r.d(t, "checkAndReplace", (function() {
    return d
  }));
  var s = function(e, t) {
      var r = (e || "4/3").split("/");
      t.style.paddingBottom = "".concat(Math.round(parseInt(r[1], 10) / parseInt(r[0], 10) * 100), "%")
    },
    l = function() {
      var e = document.createElement("div");
      return e.innerHTML = document.querySelector(".ct-customizer-preview-cache-container").value, e
    },
    u = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "id";
      t || (t = l());
      var o = t.querySelector(".ct-customizer-preview-cache [data-".concat(r, '="').concat(e, '"]')).innerHTML,
        n = document.createElement("div");
      return n.innerHTML = o, n
    },
    d = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      e = c({
        id: null,
        fragment_id: null,
        selector: null,
        parent_selector: null,
        strategy: "append",
        whenInserted: function() {},
        beforeInsert: function(e) {},
        watch: []
      }, e);
      var t = function() {
        var t = wp.customize(e.id)(),
          r = document.querySelector(e.parent_selector);
        if (n(document.querySelectorAll("".concat(e.parent_selector, " ").concat(e.selector))).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "yes" === t) {
          for (var a = u(e.fragment_id); a.firstElementChild;)
            if (e.beforeInsert(a.firstElementChild), "append" === e.strategy && r.appendChild(a.firstElementChild), "firstChild" === e.strategy && r.insertBefore(a.firstElementChild, r.firstElementChild), e.strategy.indexOf("maybeBefore") > -1) {
              var c = o(e.strategy.split(":"), 2),
                i = (c[0], c[1]);
              r.querySelector(i) ? r.insertBefore(a.firstElementChild, r.querySelector(i)) : r.appendChild(a.firstElementChild)
            } e.whenInserted()
        }
      };
      wp.customize(e.id, (function(e) {
        return e.bind((function(e) {
          return t()
        }))
      })), e.watch.map((function(e) {
        return wp.customize(e, (function(e) {
          return e.bind((function() {
            return t()
          }))
        }))
      }))
    }
}, function(e, t, r) {
  "use strict";
  r(0);
  var o = matchMedia("all and (max-width: 689px)"),
    n = matchMedia("all and (max-width: 999px)"),
    a = function() {
      return o.matches ? "mobile" : n.matches ? "tablet" : "desktop"
    };
  a(), o.addListener((function() {
    return a()
  })), n.addListener((function() {
    return a()
  }));

  function c(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  r.d(t, "a", (function() {
    return i
  })), window.__TEMPLATES_MAP__ = {
    offcanvas: {},
    headers: {}
  };
  var i = function(e, t) {
    [].concat(c(document.querySelectorAll("header[data-device] ".concat(e))), c(document.querySelectorAll("#offcanvas ".concat(e)))).map((function(e) {
      return t(e)
    })), ["desktop", "mobile"].map((function(r) {
      var o = document.createElement("div");
      o.innerHTML = __TEMPLATES_MAP__.headers[r];
      var n = o.querySelector(e);
      if (n) {
        var a = document.createElement("div");
        a.appendChild(n.cloneNode(!0)), t(a.firstElementChild), n.parentNode.replaceChild(a.firstElementChild, n), __TEMPLATES_MAP__.headers[r] = o.innerHTML
      }
    }))
  }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "stackingClassesFor", (function() {
    return a
  })), r.d(t, "responsiveClassesFor", (function() {
    return c
  }));
  r(1), r(6);

  function o(e) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }

  function n(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var a = function(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stack",
        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (t.removeAttribute("data-".concat(r.replace(/([A-Z])/g, (function(e) {
          return "-".concat(e[0].toLowerCase())
        })))), o) {
        var a = wp.customize(e)() || {
          desktop: !0,
          mobile: !0,
          tablet: !0
        };
        (a.mobile || a.tablet || a.desktop) && (t.dataset[r] = [].concat(n(a.desktop ? ["desktop"] : []), n(a.tablet ? ["tablet"] : []), n(a.mobile ? ["mobile"] : [])).join(":"))
      }
    },
    c = function(e, t) {
      if (t.classList.remove("ct-hidden-sm", "ct-hidden-md", "ct-hidden-lg"), "object" !== o(e)) {
        if (!wp.customize(e)) return;
        e = wp.customize(e)() || {
          mobile: !1,
          tablet: !0,
          desktop: !0
        }
      }
      e.mobile || t.classList.add("ct-hidden-sm"), e.tablet || t.classList.add("ct-hidden-md"), e.desktop || t.classList.add("ct-hidden-lg")
    };
  wp.customize("footer_reveal", (function(e) {
    return e.bind((function(e) {
      var t = document.querySelector(".site-footer");
      t.removeAttribute("style"), t.removeAttribute("data-footer-reveal"), "yes" === e && (document.body.classList.add("footer-reveal"), t.dataset.footerReveal = "no", ctEvents.trigger("ct:footer-reveal:update"))
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "typographyOption", (function() {
    return f
  })), r.d(t, "getTypographyVariablesFor", (function() {
    return b
  }));
  var o = r(24),
    n = r.n(o);

  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function c(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function i(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var s = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return "" === t.trim() ? e : "".concat(t).concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
    },
    l = function(e) {
      var t = e.variation;
      return "Default" === t ? "CT_CSS_SKIP_RULE" : 100 * parseInt(t[1], 10)
    },
    u = function(e) {
      var t = e.variation;
      return "Default" === t ? "CT_CSS_SKIP_RULE" : "i" === t[0] ? "italic" : "normal"
    },
    d = {},
    p = ["System Default", "Arial", "Verdana", "Trebuchet", "Georgia", "Times New Roman", "Palatino", "Helvetica", "Calibri", "Myriad Pro", "Lucida", "Gill Sans", "Impact", "Serif", "monospace"],
    m = function(e, t) {
      if (!(p.indexOf(e) > -1 || "CT_CSS_SKIP_RULE" === e || "Default" === e || e.indexOf("apple-system") > -1)) {
        if (d[e]) {
          if (d[e].indexOf(t) > -1) return;
          d[e] = [].concat(i(d[e]), [t])
        } else d[e] = [t];
        n.a.load({
          google: {
            families: ["".concat(e, ":").concat(100 * parseInt(t[1], 10)).concat("i" === t[0] ? "i" : "", "&display=swap")]
          },
          classes: !1,
          text: "abcdefghijklmnopqrstuvwxyz"
        })
      }
    },
    f = function(e) {
      var t = e.id,
        r = e.selector,
        o = e.prefix,
        n = void 0 === o ? "" : o;
      return c({}, t, [{
        variable: s("fontFamily", n),
        selector: r,
        extractValue: function(e) {
          return "Default" === e.family ? "CT_CSS_SKIP_RULE" : "System Default" === e.family ? "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" : e.family
        },
        whenDone: function(e, t) {
          var r = t.variation;
          return m(e, r)
        }
      }, {
        variable: s("fontWeight", n),
        selector: r,
        extractValue: l,
        whenDone: function(e, t) {
          var r = t.family,
            o = t.variation;
          return m(r, o)
        }
      }, {
        variable: s("fontStyle", n),
        selector: r,
        extractValue: u,
        whenDone: function(e, t) {
          var r = t.family,
            o = t.variation;
          return m(r, o)
        }
      }, {
        variable: s("textTransform", n),
        selector: r,
        extractValue: function(e) {
          return e["text-transform"]
        }
      }, {
        variable: s("textDecoration", n),
        selector: r,
        extractValue: function(e) {
          return e["text-decoration"]
        }
      }, {
        variable: s("fontSize", n),
        selector: r,
        unit: "",
        responsive: !0,
        extractValue: function(e) {
          return e.size
        }
      }, {
        variable: s("lineHeight", n),
        selector: r,
        unit: "",
        responsive: !0,
        extractValue: function(e) {
          return e["line-height"]
        }
      }, {
        variable: s("letterSpacing", n),
        selector: r,
        unit: "",
        responsive: !0,
        extractValue: function(e) {
          return e["letter-spacing"]
        }
      }])
    },
    b = function() {
      // @new - format the vars
      var hFormattedVars = [ {} ];
      var hRawVars = ct_localizations.typography_sync_vars;
      for( var i = 0, len = hRawVars.length; i < len; i++ ) {
        hFormattedVars.push( f( hRawVars[i] ) );
      }
      // /new

      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(r, !0).forEach((function(t) {
            c(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }( ...hFormattedVars.slice(1) ) // @new
    }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "getPrefixFor", (function() {
    return d
  })), r.d(t, "getOptionFor", (function() {
    return p
  })), r.d(t, "renderHeroSection", (function() {
    return m
  })), r.d(t, "renderHeroSectionTexts", (function() {
    return f
  })), r.d(t, "getHeroVariables", (function() {
    return y
  }));
  var o = r(6),
    n = r(1),
    a = r(4),
    c = r(3);
  r(22);

  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function s(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function l(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var u = {
      blog: "blog_page_title_enabled",
      single_blog_post: "single_blog_post_title_enabled",
      single_page: "single_page_title_enabled",
      search: "search_page_title_enabled",
      categories: "categories_has_page_title",
      woo_categories: "woo_categories_has_page_title"
    },
    d = function() {
      return document.body.classList.contains("blog") && document.body.classList.contains("home") ? "blog" : document.body.classList.contains("single") ? "single_blog_post" : document.body.classList.contains("woocommerce-archive") ? "woo_categories" : document.body.classList.contains("page") || document.body.classList.contains("blog") || document.body.classList.contains("post-type-archive-product") ? "single_page" : document.body.classList.contains("search") ? "search" : !(!document.body.classList.contains("archive") || document.body.classList.contains("author")) && "categories"
    },
    p = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = "".concat(t).concat(t.length > 0 ? "_" : "").concat(e);
      return !!wp.customize(r) && wp.customize(r)()
    },
    m = function(e) {
      if (e === d()) {
        var t = Object(n.getCache)();
        if (!t.querySelector(".ct-customizer-preview-cache [data-hero-section-custom]") && (l(document.querySelectorAll(".hero-section")).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" !== p(document.body.classList.contains("blog") && document.body.classList.contains("home") ? "blog_page_title_enabled" : document.body.classList.contains("single") ? "single_blog_post_title_enabled" : document.body.classList.contains("woocommerce-archive") ? "woo_categories_has_page_title" : document.body.classList.contains("page") || document.body.classList.contains("blog") || document.body.classList.contains("post-type-archive-product") ? "single_page_title_enabled" : document.body.classList.contains("search") ? "search_page_title_enabled" : !(!document.body.classList.contains("archive") || document.body.classList.contains("author")) && "categories_has_page_title"))) {
          var r = p("hero_section", e),
            a = t.querySelector('.ct-customizer-preview-cache .ct-hero-section-cache[data-type="'.concat(r, '"]')).innerHTML,
            c = document.createElement("div");
          for (c.innerHTML = a; c.firstElementChild;) {
            var i = "single_blog_post" === e || "single_page" === e && !document.body.classList.contains("blog") ? document.body.classList.contains("single-product") ? ".woocommerce .summary .price" : "article .entry-content" : document.body.classList.contains("woocommerce-archive") ? "article .entry-content" : ".entries";
            document.body.classList.contains("post-type-archive-product") && (i = ".woo-listing-top"), "single_blog_post" === e && document.querySelector("article .entry-content").parentNode.firstElementChild.classList.contains("share-box") && (i = "article .share-box:first-child");
            var s = document.querySelector("type-1" === r ? i : "#primary.content-area");
            s.parentNode.insertBefore(c.firstElementChild, s)
          }
          if ("color" === p("page_title_bg_type", e) && document.querySelector(".hero-section figure") && document.querySelector(".hero-section figure").parentNode.removeChild(document.querySelector(".hero-section figure")), "type-2" === r && "custom_image" === p("page_title_bg_type", e) && (p("custom_hero_background", e).attachment_id ? wp.media.attachment(p("custom_hero_background", e).attachment_id).fetch().then((function() {
              document.querySelector(".hero-section figure img") && (document.querySelector(".hero-section figure img").removeAttribute("srcset"), document.querySelector(".hero-section figure img").removeAttribute("src"), document.querySelector(".hero-section figure img").removeAttribute("sizes"), document.querySelector(".hero-section figure img").src = wp.media.attachment(p("custom_hero_background", e).attachment_id).get("url"))
            })) : document.querySelector(".hero-section figure") && document.querySelector(".hero-section figure").parentNode.removeChild(document.querySelector(".hero-section figure"))), document.querySelector(".hero-section").removeAttribute("data-parallax"), document.querySelector(".hero-section").dataset.alignment = p("type-1" === r ? "hero_alignment1" : "hero_alignment2", e), "type-2" === r && ("custom_image" === p("page_title_bg_type", e) || "featured_image" === p("page_title_bg_type", e))) {
            var u = p("parallax", e),
              m = [].concat(l(u.desktop ? ["desktop"] : []), l(u.tablet ? ["tablet"] : []), l(u.mobile ? ["mobile"] : []));
            document.querySelector(".hero-section figure") && m.length > 0 && (document.querySelector(".hero-section").dataset.parallax = m.join(":"), window.ctEvents.trigger("blocksy:parallax:init"))
          }
          if ("single_blog_post" === e || "single_page" === e) {
            var b = p("single_meta_elements", e);
            b.author || (l(document.querySelectorAll(".hero-section .entry-meta .avatar-container")).map((function(e) {
              e.parentNode.classList.remove("has-avatar"), e.remove()
            })), l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-author")).map((function(e) {
              return e.remove()
            }))), b.comments || l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-comments")).map((function(e) {
              return e.remove()
            })), b.date || l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-date")).map((function(e) {
              return e.remove()
            })), b.updated || l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-updated-date")).map((function(e) {
              return e.remove()
            })), b.categories || l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-categories")).map((function(e) {
              return e.remove()
            })), b.tags || l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-tags")).map((function(e) {
              return e.remove()
            })), l(document.querySelectorAll(".hero-section .entry-meta")).map((function(e) {
              return 0 === e.children.length && e.remove()
            })), "no" === p("has_meta_label", e) && l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-label")).map((function(e) {
              return e.remove()
            })), "no" === p("has_meta_avatar", e) && l(document.querySelectorAll(".hero-section .entry-meta .avatar-container")).map((function(e) {
              e.parentNode.classList.remove("has-avatar"), e.remove()
            })), [].concat(l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-date .ct-meta-element")), l(document.querySelectorAll(".hero-section .entry-meta .ct-meta-updated-date .ct-meta-element"))).map((function(t) {
              t.innerHTML = window.wp.date.format("default" === p("date_format_source", e) ? t.dataset.defaultFormat : p("single_meta_date_format", e) || "M j, Y", moment(t.dataset.date))
            }))
          }
          f(e), Object(o.a)(document.querySelector(".site-main"))
        }
      }
    },
    f = function(e) {
      if (e === d() && !Object(n.getCache)().querySelector(".ct-customizer-preview-cache [data-hero-section-custom]")) {
        if ("blog" === e)
          if (p("custom_title", e).trim().length > 0)
            if (document.querySelector(".entry-header .page-title")) document.querySelector(".entry-header .page-title").innerHTML = p("custom_title", e);
            else {
              var t = document.createElement("h1");
              t.classList.add("page-title"), t.innerHTML = p("custom_title", e), document.querySelector(".entry-header").appendChild(t)
            }
        else document.querySelector(".entry-header .page-title") && document.querySelector(".entry-header .page-title").parentNode.removeChild(document.querySelector(".entry-header .page-title"));
        if ("blog" === e)
          if (p("custom_description", e).trim().length > 0)
            if (document.querySelector(".entry-header .page-description")) document.querySelector(".entry-header .page-description").innerHTML = p("custom_description", e);
            else {
              var r = document.createElement("div");
              r.classList.add("page-description"), r.innerHTML = p("custom_description", e), document.querySelector(".entry-header").appendChild(r)
            }
        else document.querySelector(".entry-header .page-description") && document.querySelector(".entry-header .page-description").parentNode.removeChild(document.querySelector(".entry-header .page-description"));
        document.querySelector(".entry-header .page-description") && Object(c.responsiveClassesFor)("".concat(e, "_page_excerpt_visibility"), document.querySelector(".entry-header .page-description"))
      }
    },
    b = function(e) {
      var t;
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(r, !0).forEach((function(t) {
            s(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }(s({}, "".concat(e, "_hero_height"), {
        selector: '.hero-section[data-type="type-2"]',
        variable: "minHeight",
        responsive: !0,
        unit: ""
      }), Object(a.typographyOption)({
        id: "".concat(e, "_pageTitleFont"),
        selector: ".entry-header .page-title"
      }), s({}, "".concat(e, "_pageTitleFontColor"), {
        selector: ".entry-header .page-title",
        variable: "color",
        type: "color"
      }), Object(a.typographyOption)({
        id: "".concat(e, "_pageMetaFont"),
        selector: ".entry-header .entry-meta"
      }), s({}, "".concat(e, "_pageMetaFontColor"), [{
        selector: ".entry-header .entry-meta",
        variable: "color",
        type: "color:default"
      }, {
        selector: ".entry-header .entry-meta",
        variable: "colorHover",
        type: "color:hover"
      }]), Object(a.typographyOption)({
        id: "".concat(e, "_pageExcerptFont"),
        selector: ".entry-header .page-description"
      }), (s(t = {}, "".concat(e, "_pageExcerptColor"), {
        selector: ".entry-header .page-description",
        variable: "color",
        type: "color"
      }), s(t, "".concat(e, "_pageTitleOverlay"), {
        selector: '.hero-section[data-type="type-2"]',
        variable: "pageTitleOverlay",
        type: "color"
      }), s(t, "".concat(e, "_pageTitleBackground"), {
        selector: '.hero-section[data-type="type-2"]',
        variable: "pageTitleBackground",
        type: "color"
      }), t))
    },
    y = function() {
      return b(d())
    };
  Object.keys(u).map((function(e) {
    return function(e) {
      [u[e], "".concat(e, "_hero_alignment1"), "".concat(e, "_hero_alignment2"), "".concat(e, "_hero_section"), "".concat(e, "_has_meta_label"), "".concat(e, "_has_meta_avatar"), "".concat(e, "_single_meta_date_format"), "".concat(e, "_date_format_source"), "".concat(e, "_single_meta_elements"), "".concat(e, "_page_title_bg_type"), "".concat(e, "_custom_hero_background"), "".concat(e, "_parallax")].map((function(t) {
        return wp.customize(t, (function(t) {
          return t.bind((function(t) {
            return m(e)
          }))
        }))
      })), ["".concat(e, "_custom_title"), "".concat(e, "_page_excerpt_visibility"), "".concat(e, "_custom_description")].map((function(t) {
        return wp.customize(t, (function(t) {
          return t.bind((function(t) {
            return f(e)
          }))
        }))
      }))
    }(e)
  }))
}, function(e, t, r) {
  "use strict";

  function o(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  r.d(t, "a", (function() {
    return n
  }));
  var n = function(e) {
    return o(e.querySelectorAll(".ct-image-container.ct-lazy")).map((function(e) {
      e.querySelector("img").setAttribute("src", e.querySelector("img").dataset.lazy), e.querySelector("img").dataset.lazySet && e.querySelector("img").setAttribute("srcset", e.querySelector("img").dataset.lazySet), e.classList.remove("ct-lazy"), e.classList.add("ct-lazy-loaded")
    }))
  }
}, function(e, t, r) {
  "use strict";

  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  r.r(t), r.d(t, "handleBackgroundOptionFor", (function() {
    return c
  })), r.d(t, "getBackgroundVariablesFor", (function() {
    return i
  }));
  // @new - add prefix and get background url
  var hAddPrefix = function( value, prefix = '' ) {
    if (prefix.trim() === '') {
      return value;
    }
    return `${prefix}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  };
  var getBackgroundUrl = function( e ) {
    var t = e.background_type,
        r = e.background_image,
        o = e.background_pattern,
        n = e.patternColor,
        c = e.backgroundColor;
    if ("color" === t) return "CT_CSS_SKIP_RULE" !== c.default.color ? "none" : "CT_CSS_SKIP_RULE";
    var i = function(e, t, r) {
      return (r + "").split(e).join(t)
    };
    if ("image" === t) return r.url ? "url(".concat(r.url, ")") : "CT_CSS_SKIP_RULE";
    var s = 1,
      l = n.default.color;
    (
      l.indexOf("var(--main)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--main")),
      l.indexOf("var(--mainDark)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--mainDark")),
      l.indexOf("var(--mainLight)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--mainLight")),
      l.indexOf("var(--sub)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--sub")),
      l.indexOf("var(--subLight)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--subLight")),
      l.indexOf("var(--text)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--text")),
      l.indexOf("var(--textDim)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--textDim")),
      l.indexOf("var(--textInvert)") > -1 && (l = getComputedStyle(document.body).getPropertyValue("--textInvert"))
    );

    l = l.trim(); // @new
    
    if( l.indexOf("rgb") > -1 ) {
      var u = i("rgb(", "", i(")", "", i("rgba(", "", i(" ", "", l)))).split(",");
      l = "#".concat(a(parseInt(u[0], 10))).concat(a(parseInt(u[1], 10))).concat(a(parseInt(u[2], 10))), u.length > 3 && (s = u[3])
    }

    return l = i("#", "", l), 'url("'.concat(i("OPACITY", s, i("COLOR", l, ct_localizations.customizer_sync.svg_patterns[o] || ct_localizations.customizer_sync.svg_patterns["type-1"])), '")')
  };
  // /new
  var a = function(e) {
    var t = e.toString(16);
    return 1 == t.length ? "0" + t : t
  },
  
    // @changed - background sync now only return 2 values --background and --backgroundColor
    c = function(e) {
      var t = e.id,
        r = e.selector;

      var prefix = e.prefix || '';

      return n({}, t, [{
        variable: hAddPrefix("backgroundColor", prefix),
        selector: r,
        extractValue: function(e) {
          return e.backgroundColor.default.color
        }
      }, {
        variable: hAddPrefix("background", prefix),
        selector: r,
        extractValue: function(e) {
          var bg = [];
          var bgColor = e.backgroundColor.default.color;

          switch( e.background_type ) {
            case 'color':
              bg = bgColor;
              break;

            case 'pattern':
              var imageUrl = getBackgroundUrl( e );
              bg = `${bgColor} ${imageUrl}`; 
              break;

            case 'image':
              var imageUrl = getBackgroundUrl( e );
              var bgi = e.background_image;
              var x = Math.round( 100 * parseFloat(bgi.x) );
              var y = Math.round( 100 * parseFloat(bgi.y) );
              var position = `${x}% ${y}%`;
              var repeat = e.background_repeat;
              var attachment = e.background_attachment;

              bg = `${bgColor} ${imageUrl} ${position} ${repeat} ${attachment}`;
              break;
          }

          return bg;
        }
      }, {
        variable: hAddPrefix("backgroundSize", prefix),
        selector: r,
        extractValue: function(e) {
          var t = e.background_type,
            r = e.background_size;
          return "image" !== t ? "CT_CSS_SKIP_RULE" : r
        }
      }, ])
      // /changed
    },
    i = function() {
      // @changed - take the background options from locale
      var hFormattedVars = [ {} ];
      var hRawVars = ct_localizations.background_sync_vars;
      for( var i = 0, len = hRawVars.length; i < len; i++ ) {
        hFormattedVars.push( c( hRawVars[i] ) );
      }
      // /changed
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(r, !0).forEach((function(t) {
            n(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }( ...hFormattedVars.slice(1) ) // @changed
    }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "handleWidgetAreaVariables", (function() {
    return a
  })), r.d(t, "handleWidgetAreaOptions", (function() {
    return c
  }));
  var o = r(0),
    n = r.n(o),
    a = function(e) {
      e.selector;
      return {}
    },
    c = function(e) {
      e.selector;
      var t = e.changeDescriptor;
      t.optionId, t.optionValue, t.values
    };
  n.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["widget-area-1"] = a({
      selector: '[data-column="widget-area-1"]'
    })
  })), n.a.on("ct:footer:sync:item:widget-area-1", (function(e) {
    return c({
      selector: '[data-column="widget-area-1"]',
      changeDescriptor: e
    })
  }))
}, function(e, t) {
  e.exports = window.jQuery
}, function(e, t, r) {
  "use strict";
  r.d(t, "a", (function() {
    return i
  })), r.d(t, "b", (function() {
    return s
  }));
  var o = function(e) {
      if ([e.top, e.right, e.bottom, e.left].reduce((function(e, t) {
          return !!e && !("auto" !== t && t && t.match(/\d/g))
        }), !0)) return "CT_CSS_SKIP_RULE";
      var t = ["auto" !== e.top && e.top.match(/\d/g) ? e.top : 0, "auto" !== e.right && e.right.match(/\d/g) ? e.right : 0, "auto" !== e.bottom && e.bottom.match(/\d/g) ? e.bottom : 0, "auto" !== e.left && e.left.match(/\d/g) ? e.left : 0];
      return t[0] === t[1] && t[0] === t[2] && t[0] === t[3] ? t[0] : t[0] === t[2] && t[1] === t[3] ? "".concat(t[0], " ").concat(t[3]) : t.join(" ")
    },
    n = function(e) {
      if (!e.enable) return "CT_CSS_SKIP_RULE";
      if (0 === parseFloat(e.blur) && 0 === parseFloat(e.spread) && 0 === parseFloat(e.v_offset) && 0 === parseFloat(e.h_offset)) return "CT_CSS_SKIP_RULE";
      var t = [];
      return e.inset && t.push("inset"), t.push("".concat(e.h_offset, "px")), t.push("".concat(e.v_offset, "px")), 0 !== parseFloat(e.blur) && (t.push("".concat(e.blur, "px")), 0 !== parseFloat(e.spread) && t.push("".concat(e.spread, "px"))), 0 === parseFloat(e.blur) && 0 !== parseFloat(e.spread) && (t.push("".concat(e.blur, "px")), t.push("".concat(e.spread, "px"))), t.push(e.color.color), t.join(" ")
    },
    a = function(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop",
        o = {
          desktop: "ct-main-styles-inline-css",
          tablet: "ct-main-styles-tablet-inline-css",
          mobile: "ct-main-styles-mobile-inline-css"
        },
        n = document.querySelector("#".concat(o[r])),
        a = n.innerText,
        c = e.selector || ":root",
        i = null,
        s = a.match(i);
      0 === a.trim().indexOf(i) ? (i = new RegExp("".concat(c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "\\s?{[\\s\\S]*?}"), "gm"), s = a.match(i)) : (i = new RegExp("\\}\\s*?".concat(c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "\\s?{[\\s\\S]*?}"), "gm"), s = a.match(i)), s || (s = (a = "".concat(a, " ").concat(c, " {   }")).match(i)), n.innerText = a.replace(i, s[0].indexOf("--".concat(e.variable, ":")) > -1 ? s[0].replace(new RegExp("--".concat(e.variable, ":[\\s\\S]*?;"), "gm"), t.indexOf("CT_CSS_SKIP_RULE") > -1 || t.indexOf(e.variable) > -1 ? "" : "--".concat(e.variable, ": ").concat(t, ";")) : s[0].replace(new RegExp("".concat(c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "\\s?{"), "gm"), "".concat(c, " {").concat(t.indexOf("CT_CSS_SKIP_RULE") > -1 || t.indexOf(e.variable) > -1 ? "" : "--".concat(e.variable, ": ").concat(t, ";"))))
    },
    c = function(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop",
        c = (e.type || "").indexOf("color") > -1 ? t["color" === e.type ? "default" : e.type.split(":")[1]].color : e.extractValue && !e.responsive ? e.extractValue(t) : t;
      "border" === (e.type || "") && (c = "none" === t.style ? "none" : "".concat(t.width, "px ").concat(t.style, " ").concat(t.color.color)), "spacing" === (e.type || "") && (c = o(t)), "box-shadow" === (e.type || "") && (c = n(t)), a(e, "".concat(c).concat(e.unit || "").concat(e.important ? " !important" : ""), r), e.whenDone && e.whenDone(c, t)
    },
    i = function(e, t) {
      if (e.responsive) {
        var r = t;
        t = e.extractValue ? e.extractValue(t) : t, e.whenDone && e.whenDone(t, r), t = function(e) {
          return e.desktop ? e : {
            desktop: e,
            tablet: e,
            mobile: e
          }
        }(t), e.enabled && "no" === !wp.customize(e.enabled)() && (t.mobile = "0" + (e.unit ? "" : "px"), t.tablet = "0" + (e.unit ? "" : "px"), t.desktop = "0" + (e.unit ? "" : "px")), c(e, t.desktop, "desktop"), c(e, t.tablet, "tablet"), c(e, t.mobile, "mobile")
      } else c(e, t)
    },
    s = function(e) {
      return wp.customize.bind("change", (function(t) {
        return e[t.id] && (Array.isArray(e[t.id]) ? e[t.id] : [e[t.id]]).map((function(e) {
          return i(e, t())
        }))
      }))
    }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "handleRowVariables", (function() {
    return p
  })), r.d(t, "handleRowOptions", (function() {
    return m
  }));
  var o = r(7),
    n = r(0),
    a = r.n(n),
    c = r(4),
    i = r(3);

  function s(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(r, !0).forEach((function(t) {
        d(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function d(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  var p = function(e) {
      var t, r, n = e.selector;
      return u({
        footerItemsGap: {
          selector: "".concat(n, " > div"),
          variable: "itemsGap",
          responsive: !0,
          unit: "px"
        },
        rowTopBottomSpacing: {
          selector: "".concat(n, " > div"),
          variable: "containerSpacing",
          responsive: !0,
          unit: ""
        }
      }, Object(c.typographyOption)({
        id: "footerWidgetsTitleFont",
        selector: "".concat(n, " .widget-title")
      }), {
        footerWidgetsTitleColor: {
          selector: "".concat(n, " .widget-title"),
          variable: "color",
          type: "color",
          responsive: !0
        }
      }, Object(c.typographyOption)({
        id: "footerWidgetsFont",
        selector: "".concat(n, " .ct-widget > *:not(.widget-title)")
      }), {
        rowFontColor: [{
          selector: "".concat(n, " .ct-widget > *:not(.widget-title)"),
          variable: "color",
          type: "color:default",
          responsive: !0
        }, {
          selector: "".concat(n, " .ct-widget > *:not(.widget-title)"),
          variable: "colorHover",
          type: "color:hover",
          responsive: !0
        }],
        footerRowTopDivider: {
          selector: n,
          variable: "borderTop",
          type: "border"
        },
        footerRowBottomDivider: {
          selector: n,
          variable: "borderBottom",
          type: "border"
        },
        footerColumnsDivider: {
          selector: "".concat(n, ' [data-divider="columns"]'),
          variable: "border",
          type: "border"
        }
      }, Object(o.handleBackgroundOptionFor)({
        id: "footerRowBackground",
        selector: n
      }), {}, (t = ["items_per_row", "2_columns_layout", "3_columns_layout", "4_columns_layout"], r = {
        selector: "".concat(n, " > div"),
        variable: "gridTemplateColummns",
        responsive: !0,
        fullValue: !0,
        extractValue: function(e) {
          var t = document.querySelector(n);
          return t && parseInt(e.items_per_row, 10) !== t.querySelectorAll("[data-column]").length && (s(t.querySelectorAll("span[data-column]")).map((function(e) {
            return e.remove()
          })), t.querySelectorAll("[data-column]").length > parseInt(e.items_per_row, 10) && s(Array(t.querySelectorAll("[data-column]").length - parseInt(e.items_per_row, 10))).map((function() {
            return t.querySelector("[data-column]").parentNode.lastElementChild.remove()
          })), t.querySelectorAll("[data-column]").length < parseInt(e.items_per_row, 10) && s(Array(parseInt(e.items_per_row, 10) - t.querySelectorAll("[data-column]").length)).map((function() {
            return t.querySelector('[class*="ct-container"]').insertAdjacentHTML("beforeend", "<span data-column></span>")
          }))), 2 === parseInt(e.items_per_row, 10) ? e["2_columns_layout"] || {
            desktop: "repeat(2, 1fr)",
            tablet: "initial",
            mobile: "initial"
          } : 3 === parseInt(e.items_per_row, 10) ? e["3_columns_layout"] || {
            desktop: "repeat(3, 1fr)",
            tablet: "initial",
            mobile: "initial"
          } : 4 === parseInt(e.items_per_row, 10) ? e["4_columns_layout"] || {
            desktop: "repeat(4, 1fr)",
            tablet: "initial",
            mobile: "initial"
          } : {
            desktop: "initial",
            tablet: "initial",
            mobile: "initial"
          }
        }
      }, t.reduce((function(e, t) {
        return u({}, e, d({}, t, r))
      }), {})))
    },
    m = function(e) {
      var t = e.selector,
        r = e.changeDescriptor,
        o = r.optionId,
        n = r.optionValue,
        a = r.values,
        c = document.querySelector(t);
      if ("footerColumnsDivider" === o && (c.firstElementChild.removeAttribute("data-divider"), "none" !== n.style && (c.firstElementChild.dataset.divider = "columns")), "footerRowVisibility" === o && Object(i.responsiveClassesFor)(n, c), "footerRowTopDivider" === o || "footerRowBottomDivider" === o) {
        c.removeAttribute("data-divider");
        var s = [];
        "none" !== a.footerRowTopDivider.style && s.push("top"), "none" !== a.footerRowBottomDivider.style && s.push("bottom"), s.length > 0 && (c.dataset.divider = s.join(":"))
      }(
      // @changed - disabled this because it ouputs error
      // c.firstElementChild.removeAttribute("data-stack"),
      2 === parseInt(a.items_per_row, 10)) && ("initial" === (a["2_columns_layout"] || {
        desktop: "repeat(2, 1fr)",
        tablet: "initial",
        mobile: "initial"
      }).tablet && (c.firstElementChild.dataset.stack = "tablet"));
      3 === parseInt(a.items_per_row, 10) && ("initial" === (a["3_columns_layout"] || {
        desktop: "repeat(3, 1fr)",
        tablet: "initial",
        mobile: "initial"
      }).tablet && (c.firstElementChild.dataset.stack = "tablet"));
      4 === parseInt(a.items_per_row, 10) && ("initial" === (a["4_columns_layout"] || {
        desktop: "repeat(4, 1fr)",
        tablet: "initial",
        mobile: "initial"
      }).tablet && (c.firstElementChild.dataset.stack = "tablet"))
    };
  a.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["middle-row"] = p({
      selector: '.site-footer [data-row="middle"]'
    })
  })), a.a.on("ct:footer:sync:item:middle-row", (function(e) {
    return m({
      selector: '.site-footer [data-row="middle"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(7),
    n = r(0),
    a = r.n(n),
    c = r(2);
  r(15), r(23);
  var i = function(e) {
    return Object.keys(e).indexOf("desktop") > -1 ? e : {
      desktop: e,
      tablet: e,
      mobile: e
    }
  };

  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function l(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  r.d(t, "handleRowVariables", (function() {
    return u
  })), r.d(t, "handleRowOptions", (function() {
    return d
  }));
  var u = function(e) {
      var t = e.selector;
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(r, !0).forEach((function(t) {
            l(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }({
        headerRowHeight: {
          selector: t,
          variable: "height",
          responsive: !0,
          unit: "px"
        },
        headerRowShadow: {
          selector: t,
          type: "box-shadow",
          variable: "boxShadow",
          responsive: !0
        }
      }, Object(o.handleBackgroundOptionFor)({
        id: "rowBackground",
        selector: t
      }), {
        headerRowTopBorder: {
          selector: "".concat(t, "[data-border]:before"),
          variable: "border",
          type: "border",
          responsive: !0
        },
        headerRowBottomBorder: {
          selector: "".concat(t, "[data-border]:after"),
          variable: "border",
          type: "border",
          responsive: !0
        }
      })
    },
    d = function(e) {
      var t = e.selector,
        r = e.changeDescriptor,
        o = r.optionId,
        n = r.optionValue,
        a = r.values;
      "headerRowWidth" === o && Object(c.a)(t, (function(e) {
        e.firstElementChild.classList.remove("ct-container", "ct-container-fluid"), e.firstElementChild.classList.add("fixed" !== n ? "ct-container-fluid" : "ct-container")
      })), "headerRowBottomBorderFullWidth" !== o && "headerRowBottomBorder" !== o && "headerRowTopBorderFullWidth" !== o && "headerRowTopBorder" !== o || function(e, t) {
        var r = t.headerRowTopBorder,
          o = t.headerRowTopBorderFullWidth,
          n = t.headerRowBottomBorder,
          a = t.headerRowBottomBorderFullWidth;
        Object(c.a)(e, (function(e) {
          e.removeAttribute("data-border");
          var t = i(r),
            c = i(n),
            s = [];
          "none" === t.desktop.style && "none" === t.tablet.style && "none" === t.mobile.style || s.push("yes" === o ? "top-full" : "top"), "none" === c.desktop.style && "none" === c.tablet.style && "none" === c.mobile.style || s.push("yes" === a ? "bottom-full" : "bottom"), s.length > 0 && (e.dataset.border = s.join(":"))
        }))
      }(t, a)
    };
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e["middle-row"] = u({
      selector: 'header [data-row="middle"]'
    })
  })), a.a.on("ct:header:sync:item:middle-row", (function(e) {
    return d({
      selector: 'header [data-row="middle"]',
      changeDescriptor: e
    })
  }))
}, function(e, t) {
  e.exports = window._
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "handleMenuVariables", (function() {
    return l
  })), r.d(t, "handleMenuOptions", (function() {
    return u
  }));
  var o = r(4),
    n = r(0),
    a = r.n(n),
    c = r(2);
  r(3);

  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function s(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  var l = function(e) {
      var t = e.selector;
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(r, !0).forEach((function(t) {
            s(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }({
        headerMenuItemsSpacing: {
          selector: t,
          variable: "menuItemsSpacing",
          unit: "px"
        },
        headerMenuItemsHeight: {
          selector: "".concat(t, " > ul"),
          variable: "height",
          unit: "%"
        }
      }, Object(o.typographyOption)({
        id: "headerMenuFont",
        selector: "".concat(t, " ul")
      }), {
        menuFontColor: [{
          selector: "".concat(t, " > ul > li > a"),
          variable: "color",
          type: "color:default"
        }, {
          selector: "".concat(t, " > ul > li > a"),
          variable: "colorHover",
          type: "color:hover"
        }, {
          selector: "".concat(t, " > ul > li > a"),
          variable: "colorHoverType3",
          type: "color:hover"
        }],
        menuIndicatorColor: {
          selector: t,
          variable: "menuIndicatorActiveColor",
          type: "color:active",
          responsive: !0
        },
        dropdownTopOffset: {
          selector: "".concat(t, " .sub-menu"),
          variable: "marginTop",
          unit: "px"
        },
        dropdownMenuWidth: {
          selector: "".concat(t, " .sub-menu"),
          variable: "width",
          unit: "px"
        },
        dropdownItemsSpacing: {
          selector: "".concat(t, " .sub-menu li"),
          variable: "padding",
          unit: "px"
        }
      }, Object(o.typographyOption)({
        id: "headerDropdownFont",
        selector: "".concat(t, " .sub-menu")
      }), {
        headerDropdownFontColor: [{
          selector: "".concat(t, " .sub-menu"),
          variable: "color",
          type: "color:default",
          responsive: !0
        }, {
          selector: "".concat(t, " .sub-menu"),
          variable: "colorHover",
          type: "color:hover",
          responsive: !0
        }],
        headerDropdownBackground: {
          selector: "".concat(t, " .sub-menu"),
          variable: "backgroundColor",
          type: "color:default",
          responsive: !0
        },
        headerDropdownDivider: {
          selector: "".concat(t, " .sub-menu"),
          variable: "dropDownDivider",
          type: "border"
        },
        headerMenuMargin: {
          selector: t,
          type: "spacing",
          variable: "margin",
          responsive: !0,
          important: !0
        },
        headerDropdownShadow: {
          selector: "".concat(t, " .sub-menu"),
          type: "box-shadow",
          variable: "boxShadow",
          responsive: !0
        },
        headerDropdownRadius: {
          selector: "".concat(t, " .sub-menu"),
          type: "spacing",
          variable: "borderRadius",
          responsive: !0
        }
      })
    },
    u = function(e) {
      var t = e.selector,
        r = e.changeDescriptor,
        o = r.optionId,
        n = r.optionValue;
      "header_menu_type" === o && Object(c.a)(t, (function(e) {
        return e.dataset.type = n
      })), "headerMenuItemsSpacing" === o && (a.a.trigger("ct:header:update"), a.a.trigger("ct:header:render-frame")), "dropdown_animation" === o && Object(c.a)(t, (function(e) {
        return e.dataset.dropdownAnimation = n
      })), "stretch_menu" === o && Object(c.a)(t, (function(e) {
        e.removeAttribute("data-stretch"), "yes" === n && (e.dataset.stretch = "")
      }))
    };
  a.a.on("ct:header:sync:item:menu", (function(e) {
    u({
      selector: '[data-id="menu"]',
      changeDescriptor: e
    })
  })), a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.menu = l({
      selector: '[data-id="menu"]'
    })
  }))
}, function(e, t) {
  e.exports = window.wp.element
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "renderSidebarPosition", (function() {
    return a
  })), r.d(t, "renderSidebar", (function() {
    return c
  }));
  var o = r(1),
    n = r(6),
    a = function(e) {
      document.querySelector("main #primary > .ct-container").dataset.sidebar = e
    },
    c = function(e, t) {
      var r = document.querySelector("main #primary > .ct-container");
      if ("no" === e) return r.querySelector("aside") && r.removeChild(r.querySelector("aside")), document.querySelector("main #primary > .ct-container").removeAttribute("data-sidebar"), void(document.body.classList.contains("single-product") || document.body.classList.remove("sidebar"));
      r.querySelector("aside") && r.removeChild(r.querySelector("aside"));
      var a = Object(o.getCache)().querySelector('.ct-customizer-preview-cache [data-id="sidebar"]').innerHTML,
        c = document.createElement("div");
      for (c.innerHTML = a; c.firstElementChild;) r.appendChild(c.firstElementChild);
      document.querySelector("main #primary > .ct-container").dataset.sidebar = t, document.body.classList.add("sidebar"), ctEvents.trigger("ct:sidebar:update"), Object(n.a)(document.querySelector("main #primary > .ct-container aside"))
    }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "renderSidebar", (function() {
    return n
  }));
  var o = r(3),
    n = function() {
      document.querySelector(".ct-sidebar") && (document.querySelector(".ct-sidebar").parentNode.dataset.type = wp.customize("sidebar_type")(), document.querySelector(".ct-sidebar").removeAttribute("data-widgets"), "yes" === wp.customize("separated_widgets")() && "type-2" === wp.customize("sidebar_type")() && (document.querySelector(".ct-sidebar").dataset.widgets = "separated"))
    };
  wp.customize("separated_widgets", (function(e) {
    return e.bind((function(e) {
      n()
    }))
  })), wp.customize("has_sticky_sidebar", (function(e) {
    return e.bind((function(e) {
      var t = document.querySelector(".ct-sidebar");
      t && (t.removeAttribute("data-sticky"), "yes" === e && (document.querySelector(".ct-sidebar").dataset.sticky = ""))
    }))
  })), wp.customize("sidebar_type", (function(e) {
    return e.bind((function(e) {
      return n()
    }))
  })), wp.customize("sidebar_visibility", (function(e) {
    return e.bind((function(e) {
      document.querySelector(".ct-sidebar") && Object(o.responsiveClassesFor)("sidebar_visibility", document.querySelector(".ct-sidebar").parentNode)
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "getPrefixFor", (function() {
    return a
  })), r.d(t, "getOptionFor", (function() {
    return c
  })), r.d(t, "renderPagination", (function() {
    return i
  })), r.d(t, "getPaginationVariables", (function() {
    return s
  }));
  r(3);

  function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function n(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  wp.customize("paginationDivider", (function(e) {
    return e.bind((function(e) {
      return n(document.querySelectorAll(".ct-pagination")).map((function(t) {
        t.removeAttribute("data-divider"), "none" !== e.style && "infinite_scroll" !== wp.customize("pagination_global_type")() && (t.dataset.divider = "")
      }))
    }))
  }));
  var a = function() {
      return document.body.classList.contains("woocommerce") ? "woo" : "blog"
    },
    c = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return wp.customize("".concat(t).concat(t.length > 0 ? "_" : "").concat(e))()
    },
    i = function(e) {
      e === a() && (document.querySelector(".ct-load-more") && (document.querySelector(".ct-load-more").innerHTML = c("load_more_label", e)), n(document.querySelectorAll(".ct-pagination")).map((function(t) {
        t.removeAttribute("data-divider"), "none" !== c("paginationDivider", e).style && "infinite_scroll" !== c("pagination_global_type", e) && (t.dataset.divider = "")
      })))
    },
    s = function() {
      return e = a(), o(t = {}, "".concat(e, "_paginationSpacing"), {
        selector: ".ct-pagination",
        variable: "spacing",
        responsive: !0,
        unit: "px"
      }), o(t, "".concat(e, "_paginationDivider"), {
        selector: ".ct-pagination[data-divider]",
        variable: "border",
        type: "border"
      }), o(t, "".concat(e, "_simplePaginationFontColor"), [{
        selector: '.ct-pagination[data-type="simple"], .ct-pagination[data-type="nex_prev"]',
        variable: "color",
        type: "color:default"
      }, {
        selector: '.ct-pagination[data-type="simple"], .ct-pagination[data-type="nex_prev"]',
        variable: "colorHover",
        type: "color:hover"
      }, {
        selector: '.ct-pagination[data-type="simple"]',
        variable: "colorActive",
        type: "color:active"
      }]), o(t, "".concat(e, "_paginationButtonText"), [{
        selector: '.ct-pagination[data-type="load_more"]',
        variable: "buttonTextInitialColor",
        type: "color:default"
      }, {
        selector: '.ct-pagination[data-type="load_more"]',
        variable: "buttonTextHoverColor",
        type: "color:hover"
      }]), o(t, "".concat(e, "_paginationButton"), [{
        selector: '.ct-pagination[data-type="load_more"]',
        variable: "buttonInitialColor",
        type: "color:default"
      }, {
        selector: '.ct-pagination[data-type="load_more"]',
        variable: "buttonHoverColor",
        type: "color:hover"
      }]), t;
      var e, t
    };
  Object.keys({
    blog: "blog_page_title_enabled",
    woo: "woo_categories_has_page_title"
  }).map((function(e) {
    return function(e) {
      return ["".concat(e, "_load_more_label"), "".concat(e, "_paginationDivider")].map((function(t) {
        return wp.customize(t, (function(t) {
          return t.bind((function(t) {
            return i(e)
          }))
        }))
      }))
    }(e)
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "getPostListingVariables", (function() {
    return m
  }));
  r(0);
  var o = r(1),
    n = r(6),
    a = r(5),
    c = (r(22), r(4));

  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function s(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function l(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var u = function() {
      return document.body.classList.contains("search") ? "search" : document.body.classList.contains("author") ? "author" : document.body.classList.contains("archive") ? "categories" : "blog"
    },
    d = function(e) {
      return ["".concat(e, "_columns"), "".concat(e, "_structure"), "".concat(e, "_archive_order"), "".concat(e, "_card_type")].map((function(t) {
        return wp.customize(t, (function(t) {
          return t.bind((function(t) {
            return function(e) {
              if (e === u()) {
                l(document.querySelectorAll(".entries")).map((function(t) {
                  var r = Object(a.getOptionFor)("structure", e);
                  t.dataset.layout = r, t.removeAttribute("data-page-structure"), "gutenberg" === r && (t.dataset.pageStructure = "narrow"), "grid" !== r ? t.removeAttribute("data-columns") : t.dataset.columns = Object(a.getOptionFor)("columns", e), t.removeAttribute("data-cards"), "gutenberg" !== r && (t.dataset.cards = Object(a.getOptionFor)("card_type", e))
                }));
                var t = Object(a.getOptionFor)("archive_order", e),
                  r = Object(o.getCache)();
                l(document.querySelectorAll(".entries > article")).map((function(c) {
                  l(c.children).map((function(e) {
                    return c.removeChild(e)
                  }));
                  var i = t.find((function(e) {
                    return "featured_image" === e.id
                  }));
                  if ("simple" === Object(a.getOptionFor)("structure", e) && (t = [i].concat(l(t.filter((function(e) {
                      return "featured_image" !== e.id
                    }))))), t.map((function(t) {
                      if (t.enabled) {
                        var n = r.querySelector('.ct-customizer-preview-cache [data-id="'.concat(c.id, '"] [data-component="').concat(t.id, '"]')).innerHTML,
                          i = document.createElement("div");
                        if (i.innerHTML = n, "excerpt" === t.id && i.querySelector(".entry-excerpt")) {
                          var s = i.querySelector(".entry-excerpt").innerHTML.trim().replace(/\s/g, " ").replace(new RegExp("(([^\\s]+\\s\\s*){".concat(t.excerpt_length || 40, "})(.*)")), "$1");
                          i.querySelector(".entry-excerpt").innerHTML = "".concat(s.trim()).concat(s.trim().length === i.querySelector(".entry-excerpt").innerHTML.trim().length ? "" : "…")
                        }
                        if ("post_meta" === t.id) {
                          if (i.querySelector(".entry-meta").dataset.type = t.meta_type || "simple", "simple" === (t.meta_type || "simple") ? l(i.querySelectorAll(".entry-meta .ct-meta-icon")).map((function(e) {
                              return e.parentNode.removeChild(e)
                            })) : l(i.querySelectorAll(".entry-meta .ct-meta-label")).map((function(e) {
                              return e.parentNode.removeChild(e)
                            })), (t.meta && t.meta.author && "yes" !== t.has_author_avatar || t.meta && !t.meta.author) && (i.querySelector(".entry-meta.has-avatar").classList.remove("has-avatar"), i.querySelector(".entry-meta .avatar-container").remove()), t.meta && !t.meta.author && i.querySelector(".entry-meta .ct-meta-author") && i.querySelector(".entry-meta .ct-meta-author").remove(), t.meta && t.meta.author && "yes" === t.has_author_avatar) {
                            var u = i.querySelector(".entry-meta .avatar-container img");
                            u.height = t.avatar_size || "25", u.width = t.avatar_size || "25"
                          }
                          t.meta && !t.meta.date ? i.querySelector(".entry-meta .ct-meta-date") && i.querySelector(".entry-meta .ct-meta-date").remove() : i.querySelector(".entry-meta .ct-meta-date .ct-meta-element").innerHTML = window.wp.date.format("default" === t.date_format_source ? i.querySelector(".entry-meta .ct-meta-date .ct-meta-element").dataset.defaultFormat : t.date_format || "M j, Y", moment(i.querySelector(".entry-meta .ct-meta-date .ct-meta-element").dataset.date)), t.meta && !t.meta.updated ? i.querySelector(".entry-meta .ct-meta-updated-date") && i.querySelector(".entry-meta .ct-meta-updated-date").remove() : i.querySelector(".entry-meta .ct-meta-updated-date .ct-meta-element").innerHTML = window.wp.date.format("default" === t.date_format_source ? i.querySelector(".entry-meta .ct-meta-date .ct-meta-element").dataset.defaultFormat : t.date_format || "M j, Y", moment(i.querySelector(".entry-meta .ct-meta-updated-date .ct-meta-element").dataset.date)), t.meta && !t.meta.tags && i.querySelector(".entry-meta .ct-meta-tags") && i.querySelector(".entry-meta .ct-meta-tags").remove(), t.meta && !t.meta.categories ? i.querySelector(".entry-meta .ct-meta-categories") && i.querySelector(".entry-meta .ct-meta-categories").remove() : i.querySelector(".entry-meta .ct-meta-categories") && (i.querySelector(".entry-meta .ct-meta-categories").dataset.type = "icons" === (t.meta_type || "simple") ? "simple" : t.category_style || "simple"), t.meta && !t.meta.comments ? i.querySelector(".entry-meta .ct-meta-comments") && i.querySelector(".entry-meta .ct-meta-comments").remove() : i.querySelector(".entry-meta .ct-meta-comments") && "icons" === (t.meta_type || "simple") && (i.querySelector(".entry-meta .ct-meta-comments .ct-meta-element").innerHTML = i.querySelector(".entry-meta .ct-meta-comments .ct-meta-element").innerHTML.replace(/\D/g, "")), i.querySelector(".entry-meta").removeAttribute("data-label"), "icons" !== (t.meta_type || "simple") && "yes" === (t.has_meta_label || "no") && (i.querySelector(".entry-meta").dataset.label = "")
                        }
                        if ("featured_image" === t.id && (Object(o.setRatioFor)(t.thumb_ratio, i.querySelector(".ct-image-container .ct-ratio")), i.querySelector(".ct-image-container").classList.remove("boundless-image"), "yes" === (t.is_boundless || "yes") && "boxed" === Object(a.getOptionFor)("card_type", e) && "gutenberg" !== Object(a.getOptionFor)("structure", e) && i.querySelector(".ct-image-container").classList.add("boundless-image")), "title" === t.id) {
                          var d = document.createElement(t.heading_tag || "h2"),
                            p = i.querySelector(".entry-title");
                          d.innerHTML = p.innerHTML, l(p.attributes).map((function(e) {
                            var t = e.name,
                              r = e.value;
                            return d.setAttribute(t, r)
                          })), p.parentNode.replaceChild(d, p)
                        }
                        for ("read_more" === t.id && (i.querySelector(".entry-button").dataset.type = t.button_type || "simple", i.querySelector(".entry-button").classList.remove("ct-button"), "background" === (t.button_type || "simple") && i.querySelector(".entry-button").classList.add("ct-button"), i.querySelector(".entry-button").dataset.alignment = t.read_more_alignment || "left", i.querySelector(".entry-button").firstChild.textContent = t.read_more_text || "Read More", "no" === (t.read_more_arrow || "no") && i.querySelector(".entry-button svg") && i.querySelector(".entry-button svg").remove()); i.firstElementChild;) c.appendChild(i.firstElementChild)
                      }
                    })), "simple" === Object(a.getOptionFor)("structure", e)) {
                    var s = document.createElement("div");
                    s.classList.add("card-content"), l(c.children).filter((function(e) {
                      return !e.classList.contains("ct-image-container")
                    })).map((function(e) {
                      return s.appendChild(e)
                    })), c.appendChild(s)
                  }
                  if (c.lastElementChild && (c.lastElementChild.classList.contains("ct-image-container") || c.lastElementChild.classList.contains("entry-meta"))) {
                    var u = document.createElement("div");
                    u.classList.add("ct-ghost"), c.insertBefore(u, c.lastElementChild)
                  }
                  Object(n.a)(c)
                }))
              }
            }(e)
          }))
        }))
      }))
    };
  ["blog", "search", "author", "categories"].map((function(e) {
    d(e)
  }));
  var p = function(e) {
      var t, r;
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(r, !0).forEach((function(t) {
            s(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }({}, Object(c.typographyOption)({
        id: "".concat(e, "_cardTitleFont"),
        selector: ".entry-card .entry-title"
      }), (s(t = {}, "".concat(e, "_cardTitleSize"), {
        variable: "cardTitleSize",
        responsive: !0,
        unit: "px"
      }), s(t, "".concat(e, "_cardTitleColor"), [{
        selector: ".entry-card .entry-title",
        variable: "color",
        type: "color:default"
      }, {
        selector: ".entry-card .entry-title",
        variable: "colorHover",
        type: "color:hover"
      }]), s(t, "".concat(e, "_cardExcerptSize"), {
        selector: ".entry-excerpt",
        variable: "cardExcerptSize",
        responsive: !0,
        unit: "px"
      }), s(t, "".concat(e, "_cardExcerptColor"), {
        selector: ".entry-excerpt",
        variable: "color",
        type: "color"
      }), t), Object(c.typographyOption)({
        id: "".concat(e, "_cardMetaFont"),
        selector: ".entry-card .entry-meta"
      }), (s(r = {}, "".concat(e, "_cardMetaColor"), [{
        selector: ".entry-meta",
        variable: "color",
        type: "color:default"
      }, {
        selector: ".entry-meta",
        variable: "colorHover",
        type: "color:hover"
      }]), s(r, "".concat(e, "_cardButtonSimpleTextColor"), [{
        selector: '.entry-button[data-type="simple"]',
        variable: "color",
        type: "color:default"
      }, {
        selector: '.entry-button[data-type="simple"]',
        variable: "colorHover",
        type: "color:hover"
      }]), s(r, "".concat(e, "_cardButtonBackgroundTextColor"), [{
        selector: '.entry-button[data-type="background"]',
        variable: "buttonTextInitialColor",
        type: "color:default"
      }, {
        selector: '.entry-button[data-type="background"]',
        variable: "buttonTextHoverColor",
        type: "color:hover"
      }]), s(r, "".concat(e, "_cardButtonOutlineTextColor"), [{
        selector: '.entry-button[data-type="outline"]',
        variable: "color",
        type: "color:default"
      }, {
        selector: '.entry-button[data-type="outline"]',
        variable: "colorHover",
        type: "color:hover"
      }]), s(r, "".concat(e, "_cardButtonColor"), [{
        selector: ".entry-button",
        variable: "buttonInitialColor",
        type: "color:default"
      }, {
        selector: ".entry-button",
        variable: "buttonHoverColor",
        type: "color:hover"
      }]), s(r, "".concat(e, "_cardBackground"), {
        selector: '[data-cards="boxed"] .entry-card',
        variable: "cardBackground",
        type: "color"
      }), s(r, "".concat(e, "_cardBorder"), {
        selector: '[data-cards="boxed"] .entry-card',
        variable: "border",
        type: "border"
      }), s(r, "".concat(e, "_cardDivider"), {
        selector: '[data-cards="simple"] .entry-card',
        variable: "border",
        type: "border"
      }), s(r, "".concat(e, "_cardsGap"), {
        selector: ".entries",
        variable: "cardsGap",
        responsive: !0,
        unit: "px"
      }), s(r, "".concat(e, "_card_spacing"), {
        selector: '[data-cards="boxed"] .entry-card',
        variable: "cardSpacing",
        responsive: !0,
        unit: "px"
      }), s(r, "".concat(e, "_cardShadow"), {
        selector: '[data-cards="boxed"] .entry-card',
        type: "box-shadow",
        variable: "boxShadow",
        responsive: !0
      }), s(r, "".concat(e, "_cardThumbRadius"), {
        selector: ".entry-card .ct-image-container",
        type: "spacing",
        variable: "borderRadius",
        responsive: !0
      }), s(r, "".concat(e, "_archive_order"), {
        variable: "avatarSize",
        unit: "px",
        extractValue: function(e) {
          return (e.find((function(e) {
            return "post_meta" === e.id && "yes" === e.has_author_avatar && e.meta.author
          })) || {
            avatar_size: 25
          }).avatar_size
        }
      }), r))
    },
    m = function() {
      return p(u())
    }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "getFormsVariablesFor", (function() {
    return o
  }));
  var o = function() {
    return {
      formTextColor: [{
        selector: "form",
        variable: "formTextInitialColor",
        type: "color:default"
      }, {
        selector: "form",
        variable: "formTextFocusColor",
        type: "color:focus"
      }],
      formFontSize: {
        selector: "form",
        variable: "formFontSize",
        unit: ""
      },
      formBackgroundColor: [{
        selector: "form",
        variable: "formBackgroundInitialColor",
        type: "color:default"
      }, {
        selector: "form",
        variable: "formBackgroundFocusColor",
        type: "color:focus"
      }],
      formInputHeight: {
        selector: "form",
        variable: "formInputHeight",
        unit: ""
      },
      formTextAreaHeight: {
        selector: "form textarea",
        variable: "formInputHeight",
        unit: ""
      },
      formBorder: [{
        selector: "form",
        variable: "formBorder",
        type: "border"
      }],
      formBorderFocusColor: [{
        selector: "form",
        variable: "formBorderFocusColor",
        type: "color:focus"
      }],
      selectDropdownTextColor: [{
        selector: ".selectr-container",
        variable: "color",
        type: "color:default"
      }, {
        selector: ".selectr-container",
        variable: "colorHover",
        type: "color:hover"
      }, {
        selector: ".selectr-container",
        variable: "colorActive",
        type: "color:active"
      }],
      selectDropdownItemColor: [{
        selector: ".selectr-container",
        variable: "selectDropdownItemHoverColor",
        type: "color:hover"
      }, {
        selector: ".selectr-container",
        variable: "selectDropdownItemActiveColor",
        type: "color:active"
      }],
      selectDropdownBackground: {
        selector: ".selectr-container",
        variable: "selectDropdownBackground",
        type: "color"
      },
      radioCheckboxColor: [{
        selector: '[type="radio"], [type="checkbox"]',
        variable: "radioCheckboxInitialColor",
        type: "color:default"
      }, {
        selector: '[type="radio"], [type="checkbox"]',
        variable: "radioCheckboxAccentColor",
        type: "color:accent"
      }]
    }
  }
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "replaceCards", (function() {
    return s
  }));
  var o = r(6),
    n = r(1),
    a = r(0),
    c = r.n(a);

  function i(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  Object(n.checkAndReplace)({
    id: "has_shop_breadcrumbs",
    strategy: "firstChild",
    parent_selector: ".woo-listing-top",
    selector: ".woocommerce-breadcrumb",
    fragment_id: "shop-breadcrumbs"
  }), Object(n.checkAndReplace)({
    id: "has_product_breadcrumbs",
    strategy: "firstChild",
    parent_selector: '#primary > [class*="ct-container"] > section',
    selector: ".woocommerce-breadcrumb",
    fragment_id: "shop-breadcrumbs"
  }), Object(n.checkAndReplace)({
    id: "has_shop_sort",
    parent_selector: ".woo-listing-top",
    selector: ".woocommerce-ordering",
    fragment_id: "shop-sort",
    whenInserted: function() {
      return c.a.trigger("ct:custom-select:init")
    }
  }), Object(n.checkAndReplace)({
    id: "has_shop_results_count",
    parent_selector: ".woo-listing-top",
    selector: ".woocommerce-result-count",
    fragment_id: "shop-results-count",
    strategy: "maybeBefore:.woocommerce-ordering"
  });
  var s = function() {
    if (document.querySelector(".shop-entries")) {
      var e = Object(n.getCache)();
      i(document.querySelectorAll(".shop-entries")).map((function(e) {
        return e.innerHTML = ""
      })), i(e.querySelectorAll("[data-product-id]")).map((function(t) {
        for (var r = Object(n.getFreshHtmlFor)(t.dataset.productId, e, "product-id"); r.firstElementChild;) {
          document.querySelector(".shop-entries").appendChild(r.firstElementChild);
          var o = document.querySelector(".shop-entries").lastElementChild;
          "grid" === wp.customize("shop_structure")() && (o.querySelector(".onsale") && o.insertBefore(o.querySelector(".onsale"), o.querySelector("figure")), o.querySelector(".star-rating") && o.insertBefore(o.querySelector(".star-rating"), o.querySelector("figure")), o.querySelector(".price") && o.querySelector(".woo-card-actions").insertBefore(o.querySelector(".price"), o.querySelector(".woo-card-actions").firstElementChild), o.querySelector(".woocommerce-loop-product__title") && o.appendChild(o.querySelector(".woocommerce-loop-product__title")), o.querySelector(".product-categories") && o.appendChild(o.querySelector(".product-categories")), o.querySelector(".woo-card-actions") && o.appendChild(o.querySelector(".woo-card-actions")), o.querySelector(".card-content") && o.removeChild(o.querySelector(".card-content")), o.querySelector("figure")), o.querySelector(".star-rating") && "no" === wp.customize("has_star_rating")() && o.querySelector(".star-rating").parentNode.removeChild(o.querySelector(".star-rating")), o.querySelector(".onsale") && "no" === wp.customize("has_sale_badge")() && o.querySelector(".onsale").parentNode.removeChild(o.querySelector(".onsale")), o.querySelector(".product-categories") && "no" === wp.customize("has_product_categories")() && o.querySelector(".product-categories").parentNode.removeChild(o.querySelector(".product-categories")), "shop-simple" !== wp.customize("shop_structure")() && Object(n.setRatioFor)("custom" === wp.customize("woocommerce_thumbnail_cropping")() ? "".concat(wp.customize("woocommerce_thumbnail_cropping_custom_width")(), "/").concat(wp.customize("woocommerce_thumbnail_cropping_custom_height")()) : "1/1", o.querySelector(".ct-image-container .ct-ratio")), c.a.trigger("ct:archive-product-replace-cards:update", {
            article: o
          })
        }
      })), Object(o.a)(document.querySelector(".shop-entries"))
    }
  };
  wp.customize("has_product_categories", (function(e) {
    return e.bind((function(e) {
      return s()
    }))
  })), wp.customize("has_star_rating", (function(e) {
    return e.bind((function(e) {
      return s()
    }))
  })), wp.customize("has_sale_badge", (function(e) {
    return e.bind((function(e) {
      return s()
    }))
  })), document.addEventListener("DOMContentLoaded", (function() {
    c.a && c.a.on("ct:archive-product-replace-cards:perform", (function() {
      return s()
    }))
  }))
}, function(e, t) {
  e.exports = window.wp.date
}, function(e, t, r) {
  var o;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  ! function() {
    "use strict";
    var r = {}.hasOwnProperty;

    function n() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var o = arguments[t];
        if (o) {
          var a = typeof o;
          if ("string" === a || "number" === a) e.push(o);
          else if (Array.isArray(o) && o.length) {
            var c = n.apply(null, o);
            c && e.push(c)
          } else if ("object" === a)
            for (var i in o) r.call(o, i) && o[i] && e.push(i)
        }
      }
      return e.join(" ")
    }
    e.exports ? (n.default = n, e.exports = n) : void 0 === (o = function() {
      return n
    }.apply(t, [])) || (e.exports = o)
  }()
}, function(e, t, r) {
  var o;
  ! function() {
    function n(e, t, r) {
      return e.call.apply(e.bind, arguments)
    }

    function a(e, t, r) {
      if (!e) throw Error();
      if (2 < arguments.length) {
        var o = Array.prototype.slice.call(arguments, 2);
        return function() {
          var r = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(r, o), e.apply(t, r)
        }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }

    function c(e, t, r) {
      return (c = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : a).apply(null, arguments)
    }
    var i = Date.now || function() {
      return +new Date
    };

    function s(e, t) {
      this.a = e, this.o = t || e, this.c = this.o.document
    }
    var l = !!window.FontFace;

    function u(e, t, r, o) {
      if (t = e.c.createElement(t), r)
        for (var n in r) r.hasOwnProperty(n) && ("style" == n ? t.style.cssText = r[n] : t.setAttribute(n, r[n]));
      return o && t.appendChild(e.c.createTextNode(o)), t
    }

    function d(e, t, r) {
      (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement), e.insertBefore(r, e.lastChild)
    }

    function p(e) {
      e.parentNode && e.parentNode.removeChild(e)
    }

    function m(e, t, r) {
      t = t || [], r = r || [];
      for (var o = e.className.split(/\s+/), n = 0; n < t.length; n += 1) {
        for (var a = !1, c = 0; c < o.length; c += 1)
          if (t[n] === o[c]) {
            a = !0;
            break
          } a || o.push(t[n])
      }
      for (t = [], n = 0; n < o.length; n += 1) {
        for (a = !1, c = 0; c < r.length; c += 1)
          if (o[n] === r[c]) {
            a = !0;
            break
          } a || t.push(o[n])
      }
      e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function f(e, t) {
      for (var r = e.className.split(/\s+/), o = 0, n = r.length; o < n; o++)
        if (r[o] == t) return !0;
      return !1
    }

    function b(e, t, r) {
      function o() {
        i && n && a && (i(c), i = null)
      }
      t = u(e, "link", {
        rel: "stylesheet",
        href: t,
        media: "all"
      });
      var n = !1,
        a = !0,
        c = null,
        i = r || null;
      l ? (t.onload = function() {
        n = !0, o()
      }, t.onerror = function() {
        n = !0, c = Error("Stylesheet failed to load"), o()
      }) : setTimeout((function() {
        n = !0, o()
      }), 0), d(e, "head", t)
    }

    function y(e, t, r, o) {
      var n = e.c.getElementsByTagName("head")[0];
      if (n) {
        var a = u(e, "script", {
            src: t
          }),
          c = !1;
        return a.onload = a.onreadystatechange = function() {
          c || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (c = !0, r && r(null), a.onload = a.onreadystatechange = null, "HEAD" == a.parentNode.tagName && n.removeChild(a))
        }, n.appendChild(a), setTimeout((function() {
          c || (c = !0, r && r(Error("Script load timeout")))
        }), o || 5e3), a
      }
      return null
    }

    function h() {
      this.a = 0, this.c = null
    }

    function v(e) {
      return e.a++,
        function() {
          e.a--, _(e)
        }
    }

    function g(e, t) {
      e.c = t, _(e)
    }

    function _(e) {
      0 == e.a && e.c && (e.c(), e.c = null)
    }

    function w(e) {
      this.a = e || "-"
    }

    function O(e, t) {
      this.c = e, this.f = 4, this.a = "n";
      var r = (t || "n4").match(/^([nio])([1-9])$/i);
      r && (this.a = r[1], this.f = parseInt(r[2], 10))
    }

    function S(e) {
      var t = [];
      e = e.split(/,\s*/);
      for (var r = 0; r < e.length; r++) {
        var o = e[r].replace(/['"]/g, ""); - 1 != o.indexOf(" ") || /^\d/.test(o) ? t.push("'" + o + "'") : t.push(o)
      }
      return t.join(",")
    }

    function j(e) {
      return e.a + e.f
    }

    function C(e) {
      var t = "normal";
      return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
    }

    function x(e) {
      var t = 4,
        r = "n",
        o = null;
      return e && ((o = e.match(/(normal|oblique|italic)/i)) && o[1] && (r = o[1].substr(0, 1).toLowerCase()), (o = e.match(/([1-9]00|normal|bold)/i)) && o[1] && (/bold/i.test(o[1]) ? t = 7 : /[1-9]00/.test(o[1]) && (t = parseInt(o[1].substr(0, 1), 10)))), r + t
    }

    function q(e, t) {
      this.c = e, this.f = e.o.document.documentElement, this.h = t, this.a = new w("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
    }

    function k(e) {
      if (e.g) {
        var t = f(e.f, e.a.c("wf", "active")),
          r = [],
          o = [e.a.c("wf", "loading")];
        t || r.push(e.a.c("wf", "inactive")), m(e.f, r, o)
      }
      P(e, "inactive")
    }

    function P(e, t, r) {
      e.j && e.h[t] && (r ? e.h[t](r.c, j(r)) : e.h[t]())
    }

    function A() {
      this.c = {}
    }

    function z(e, t) {
      this.c = e, this.f = t, this.a = u(this.c, "span", {
        "aria-hidden": "true"
      }, this.f)
    }

    function T(e) {
      d(e.c, "body", e.a)
    }

    function E(e) {
      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + S(e.c) + ";font-style:" + C(e) + ";font-weight:" + e.f + "00;"
    }

    function L(e, t, r, o, n, a) {
      this.g = e, this.j = t, this.a = o, this.c = r, this.f = n || 3e3, this.h = a || void 0
    }

    function D(e, t, r, o, n, a, c) {
      this.v = e, this.B = t, this.c = r, this.a = o, this.s = c || "BESbswy", this.f = {}, this.w = n || 3e3, this.u = a || null, this.m = this.j = this.h = this.g = null, this.g = new z(this.c, this.s), this.h = new z(this.c, this.s), this.j = new z(this.c, this.s), this.m = new z(this.c, this.s), e = E(e = new O(this.a.c + ",serif", j(this.a))), this.g.a.style.cssText = e, e = E(e = new O(this.a.c + ",sans-serif", j(this.a))), this.h.a.style.cssText = e, e = E(e = new O("serif", j(this.a))), this.j.a.style.cssText = e, e = E(e = new O("sans-serif", j(this.a))), this.m.a.style.cssText = e, T(this.g), T(this.h), T(this.j), T(this.m)
    }
    w.prototype.c = function(e) {
      for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r].replace(/[\W_]+/g, "").toLowerCase());
      return t.join(this.a)
    }, L.prototype.start = function() {
      var e = this.c.o.document,
        t = this,
        r = i(),
        o = new Promise((function(o, n) {
          ! function a() {
            i() - r >= t.f ? n() : e.fonts.load(function(e) {
              return C(e) + " " + e.f + "00 300px " + S(e.c)
            }(t.a), t.h).then((function(e) {
              1 <= e.length ? o() : setTimeout(a, 25)
            }), (function() {
              n()
            }))
          }()
        })),
        n = null,
        a = new Promise((function(e, r) {
          n = setTimeout(r, t.f)
        }));
      Promise.race([a, o]).then((function() {
        n && (clearTimeout(n), n = null), t.g(t.a)
      }), (function() {
        t.j(t.a)
      }))
    };
    var I = {
        D: "serif",
        C: "sans-serif"
      },
      H = null;

    function B() {
      if (null === H) {
        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        H = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
      }
      return H
    }

    function F(e, t, r) {
      for (var o in I)
        if (I.hasOwnProperty(o) && t === e.f[I[o]] && r === e.f[I[o]]) return !0;
      return !1
    }

    function M(e) {
      var t, r = e.g.a.offsetWidth,
        o = e.h.a.offsetWidth;
      (t = r === e.f.serif && o === e.f["sans-serif"]) || (t = B() && F(e, r, o)), t ? i() - e.A >= e.w ? B() && F(e, r, o) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? R(e, e.v) : R(e, e.B) : function(e) {
        setTimeout(c((function() {
          M(this)
        }), e), 50)
      }(e) : R(e, e.v)
    }

    function R(e, t) {
      setTimeout(c((function() {
        p(this.g.a), p(this.h.a), p(this.j.a), p(this.m.a), t(this.a)
      }), e), 0)
    }

    function V(e, t, r) {
      this.c = e, this.a = t, this.f = 0, this.m = this.j = !1, this.s = r
    }
    D.prototype.start = function() {
      this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = i(), M(this)
    };
    var N = null;

    function W(e) {
      0 == --e.f && e.j && (e.m ? ((e = e.a).g && m(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), P(e, "active")) : k(e.a))
    }

    function U(e) {
      this.j = e, this.a = new A, this.h = 0, this.f = this.g = !0
    }

    function K(e, t, r, o, n) {
      var a = 0 == --e.h;
      (e.f || e.g) && setTimeout((function() {
        var e = n || null,
          i = o || {};
        if (0 === r.length && a) k(t.a);
        else {
          t.f += r.length, a && (t.j = a);
          var s, l = [];
          for (s = 0; s < r.length; s++) {
            var u = r[s],
              d = i[u.c],
              p = t.a,
              f = u;
            if (p.g && m(p.f, [p.a.c("wf", f.c, j(f).toString(), "loading")]), P(p, "fontloading", f), p = null, null === N)
              if (window.FontFace) {
                f = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var b = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                N = f ? 42 < parseInt(f[1], 10) : !b
              } else N = !1;
            p = N ? new L(c(t.g, t), c(t.h, t), t.c, u, t.s, d) : new D(c(t.g, t), c(t.h, t), t.c, u, t.s, e, d), l.push(p)
          }
          for (s = 0; s < l.length; s++) l[s].start()
        }
      }), 0)
    }

    function G(e, t) {
      this.c = e, this.a = t
    }

    function $(e, t) {
      this.c = e, this.a = t
    }

    function Y(e, t) {
      this.c = e || Q, this.a = [], this.f = [], this.g = t || ""
    }
    V.prototype.g = function(e) {
      var t = this.a;
      t.g && m(t.f, [t.a.c("wf", e.c, j(e).toString(), "active")], [t.a.c("wf", e.c, j(e).toString(), "loading"), t.a.c("wf", e.c, j(e).toString(), "inactive")]), P(t, "fontactive", e), this.m = !0, W(this)
    }, V.prototype.h = function(e) {
      var t = this.a;
      if (t.g) {
        var r = f(t.f, t.a.c("wf", e.c, j(e).toString(), "active")),
          o = [],
          n = [t.a.c("wf", e.c, j(e).toString(), "loading")];
        r || o.push(t.a.c("wf", e.c, j(e).toString(), "inactive")), m(t.f, o, n)
      }
      P(t, "fontinactive", e), W(this)
    }, U.prototype.load = function(e) {
      this.c = new s(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes,
        function(e, t, r) {
          var o = [],
            n = r.timeout;
          ! function(e) {
            e.g && m(e.f, [e.a.c("wf", "loading")]), P(e, "loading")
          }(t);
          o = function(e, t, r) {
            var o, n = [];
            for (o in t)
              if (t.hasOwnProperty(o)) {
                var a = e.c[o];
                a && n.push(a(t[o], r))
              } return n
          }(e.a, r, e.c);
          var a = new V(e.c, t, n);
          for (e.h = o.length, t = 0, r = o.length; t < r; t++) o[t].load((function(t, r, o) {
            K(e, a, t, r, o)
          }))
        }(this, new q(this.c, e), e)
    }, G.prototype.load = function(e) {
      var t = this,
        r = t.a.projectId,
        o = t.a.version;
      if (r) {
        var n = t.c.o;
        y(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + r + ".js" + (o ? "?v=" + o : ""), (function(o) {
          o ? e([]) : (n["__MonotypeConfiguration__" + r] = function() {
            return t.a
          }, function t() {
            if (n["__mti_fntLst" + r]) {
              var o, a = n["__mti_fntLst" + r](),
                c = [];
              if (a)
                for (var i = 0; i < a.length; i++) {
                  var s = a[i].fontfamily;
                  null != a[i].fontStyle && null != a[i].fontWeight ? (o = a[i].fontStyle + a[i].fontWeight, c.push(new O(s, o))) : c.push(new O(s))
                }
              e(c)
            } else setTimeout((function() {
              t()
            }), 50)
          }())
        })).id = "__MonotypeAPIScript__" + r
      } else e([])
    }, $.prototype.load = function(e) {
      var t, r, o = this.a.urls || [],
        n = this.a.families || [],
        a = this.a.testStrings || {},
        c = new h;
      for (t = 0, r = o.length; t < r; t++) b(this.c, o[t], v(c));
      var i = [];
      for (t = 0, r = n.length; t < r; t++)
        if ((o = n[t].split(":"))[1])
          for (var s = o[1].split(","), l = 0; l < s.length; l += 1) i.push(new O(o[0], s[l]));
        else i.push(new O(o[0]));
      g(c, (function() {
        e(i, a)
      }))
    };
    var Q = "https://fonts.googleapis.com/css";

    function X(e) {
      this.f = e, this.a = [], this.c = {}
    }
    var Z = {
        latin: "BESbswy",
        "latin-ext": "çöüğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ"
      },
      J = {
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

    function re(e, t) {
      this.c = e, this.a = t
    }
    var oe = {
      Arimo: !0,
      Cousine: !0,
      Tinos: !0
    };

    function ne(e, t) {
      this.c = e, this.a = t
    }

    function ae(e, t) {
      this.c = e, this.f = t, this.a = []
    }
    re.prototype.load = function(e) {
      var t = new h,
        r = this.c,
        o = new Y(this.a.api, this.a.text),
        n = this.a.families;
      ! function(e, t) {
        for (var r = t.length, o = 0; o < r; o++) {
          var n = t[o].split(":");
          3 == n.length && e.f.push(n.pop());
          var a = "";
          2 == n.length && "" != n[1] && (a = ":"), e.a.push(n.join(a))
        }
      }(o, n);
      var a = new X(n);
      ! function(e) {
        for (var t = e.f.length, r = 0; r < t; r++) {
          var o = e.f[r].split(":"),
            n = o[0].replace(/\+/g, " "),
            a = ["n4"];
          if (2 <= o.length) {
            var c;
            if (c = [], i = o[1])
              for (var i, s = (i = i.split(",")).length, l = 0; l < s; l++) {
                var u;
                if ((u = i[l]).match(/^[\w-]+$/))
                  if (null == (p = te.exec(u.toLowerCase()))) u = "";
                  else {
                    if (u = null == (u = p[2]) || "" == u ? "n" : ee[u], null == (p = p[1]) || "" == p) p = "4";
                    else var d = J[p],
                      p = d || (isNaN(p) ? "4" : p.substr(0, 1));
                    u = [u, p].join("")
                  }
                else u = "";
                u && c.push(u)
              }
            0 < c.length && (a = c), 3 == o.length && (c = [], 0 < (o = (o = o[2]) ? o.split(",") : c).length && (o = Z[o[0]]) && (e.c[n] = o))
          }
          for (e.c[n] || (o = Z[n]) && (e.c[n] = o), o = 0; o < a.length; o += 1) e.a.push(new O(n, a[o]))
        }
      }(a), b(r, function(e) {
        if (0 == e.a.length) throw Error("No fonts to load!");
        if (-1 != e.c.indexOf("kit=")) return e.c;
        for (var t = e.a.length, r = [], o = 0; o < t; o++) r.push(e.a[o].replace(/ /g, "+"));
        return t = e.c + "?family=" + r.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
      }(o), v(t)), g(t, (function() {
        e(a.a, a.c, oe)
      }))
    }, ne.prototype.load = function(e) {
      var t = this.a.id,
        r = this.c.o;
      t ? y(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", (function(t) {
        if (t) e([]);
        else if (r.Typekit && r.Typekit.config && r.Typekit.config.fn) {
          t = r.Typekit.config.fn;
          for (var o = [], n = 0; n < t.length; n += 2)
            for (var a = t[n], c = t[n + 1], i = 0; i < c.length; i++) o.push(new O(a, c[i]));
          try {
            r.Typekit.load({
              events: !1,
              classes: !1,
              async: !0
            })
          } catch (e) {}
          e(o)
        }
      }), 2e3) : e([])
    }, ae.prototype.load = function(e) {
      var t = this.f.id,
        r = this.c.o,
        o = this;
      t ? (r.__webfontfontdeckmodule__ || (r.__webfontfontdeckmodule__ = {}), r.__webfontfontdeckmodule__[t] = function(t, r) {
        for (var n = 0, a = r.fonts.length; n < a; ++n) {
          var c = r.fonts[n];
          o.a.push(new O(c.name, x("font-weight:" + c.weight + ";font-style:" + c.style)))
        }
        e(o.a)
      }, y(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(e) {
        return e.o.location.hostname || e.a.location.hostname
      }(this.c) + "/" + t + ".js", (function(t) {
        t && e([])
      }))) : e([])
    };
    var ce = new U(window);
    ce.a.c.custom = function(e, t) {
      return new $(t, e)
    }, ce.a.c.fontdeck = function(e, t) {
      return new ae(t, e)
    }, ce.a.c.monotype = function(e, t) {
      return new G(t, e)
    }, ce.a.c.typekit = function(e, t) {
      return new ne(t, e)
    }, ce.a.c.google = function(e, t) {
      return new re(t, e)
    };
    var ie = {
      load: c(ce.load, ce)
    };
    void 0 === (o = function() {
      return ie
    }.call(t, r, t, e)) || (e.exports = o)
  }()
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(9),
    n = r.n(o);

  function a(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  n()(document).on("click", ".customize-partial-edit-shortcut-button", (function(e) {
    e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), wp.customize.selectiveRefresh.partial(e.target.closest("[data-customize-partial-id]") ? e.target.closest("[data-customize-partial-id]").dataset.customizePartialId : a(e.target.closest(".customize-partial-edit-shortcut").classList).filter((function(e) {
      return e.length > "customize-partial-edit-shortcut".length
    }))[0].replace(/customize-partial-edit-shortcut-/, "")).showControl()
  }));
  var c = r(26);
  c.keys().forEach(c), (c = r(39)).keys().forEach(c), (c = r(49)).keys().forEach(c), wp.customize.bind("change", (function(e) {
    "header_placements" === e.id && ctEvents.trigger("ct:header:update-variables", e())
  })), wp.customize("blogname", (function(e) {
    return e.bind((function(e) {
      return n()(".site-title a").text(e)
    }))
  })), wp.customize("blogdescription", (function(e) {
    return e.bind((function(e) {
      return n()(".site-description").text(e)
    }))
  }))
}, function(e, t, r) {
  var o = {
    "./bottom-row/sync.js": 27,
    "./button/sync.js": 28,
    "./cart/sync.js": 29,
    "./logo/sync.js": 30,
    "./menu-secondary/sync.js": 31,
    "./menu/sync.js": 14,
    "./middle-row/sync.js": 12,
    "./mobile-menu/sync.js": 32,
    "./offcanvas/sync.js": 33,
    "./search/sync.js": 34,
    "./socials/sync.js": 35,
    "./text/sync.js": 36,
    "./top-row/sync.js": 37,
    "./trigger/sync.js": 38
  };

  function n(e) {
    var t = a(e);
    return r(t)
  }

  function a(e) {
    if (!r.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  n.keys = function() {
    return Object.keys(o)
  }, n.resolve = a, e.exports = n, n.id = 26
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(12),
    n = r(0),
    a = r.n(n);
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e["bottom-row"] = Object(o.handleRowVariables)({
      selector: 'header [data-row="bottom"]'
    })
  })), a.a.on("ct:header:sync:item:bottom-row", (function(e) {
    return Object(o.handleRowOptions)({
      selector: 'header [data-row="bottom"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(2);
  n.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {

    // @new - take Header variable from localization
    for( var itemID in ct_localizations.header_sync_vars ) {
      if (!ct_localizations.header_sync_vars.hasOwnProperty( itemID ) ) continue;

      var item = ct_localizations.header_sync_vars[ itemID ];
      
      // format the items
      var formattedItem = {};
      for( var optionID in item ) {
        if (!item.hasOwnProperty( optionID ) ) continue;

        var option = item[ optionID ];
        // TODO: background and typography still doesn't work
        switch( option.type ) {
          // case 'background':
          //   Object.assign( formattedItem, ...o.handleBackgroundOptionFor({
          //     id: optionID,
          //     selector: option.selector
          //   }) );
          //   break;

          // case 'typography':
          //   Object.assign( formattedItem, ...o.typographyOption({
          //     id: optionID,
          //     selector: option.selector
          //   }) );
          //   break;

          default:
            formattedItem[ optionID ] = option;
            break;
        }
      }

      e[ itemID ] = formattedItem;
    }
    // /new

  })), n.a.on("ct:header:sync:item:button", (function(e) {
    var t = e.optionId,
      r = e.optionValue,
      o = '[data-id="button"]';
    "header_button_type" === t && Object(a.a)(o, (function(e) {
      e.querySelector(".ct-button").dataset.type = r
    })), "header_button_size" === t && Object(a.a)(o, (function(e) {
      e.querySelector(".ct-button").dataset.size = r
    })), "header_button_text" === t && Object(a.a)(o, (function(e) {
      e.querySelector(".ct-button").innerHTML = r
    })), "header_button_effect" === t && Object(a.a)(o, (function(e) {
      var t = e.querySelector(".ct-button");
      t.removeAttribute("data-hover"), "yes" === r && (t.dataset.hover = "")
    })), "header_button_link" === t && Object(a.a)(o, (function(e) {
      e.querySelector(".ct-button").href = r
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(2),
    c = r(3);

  function i(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function l(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  var u = {
    "type-1": '<svg viewBox="0 0 10 10"><path d="M10,8.9L9.6,1c0-0.6-0.4-1-1.1-1H1.4c-0.6,0-1,0.4-1,1L0,8.9l0,0C0,9.6,0.4,10,1,10h7.9C9.6,10,10,9.6,10,8.9L10,8.9zM8.9,9.1H1C0.9,9.1,0.9,9.1,0.9,9L1.2,1l0,0c0-0.1,0-0.1,0.1-0.1h7.2c0.1,0,0.1,0.1,0.1,0.1l0,0l0.4,7.9C9.1,9.1,9.1,9.1,8.9,9.1zM6.5,1.8C6.2,1.8,6.1,2,6.1,2.2v1.3c0,0.6-0.4,1.1-1.1,1.1c-0.6,0-1-0.5-1-1.1V2.2c0-0.2-0.2-0.5-0.5-0.5S3,1.9,3,2.2v1.3c0,1.1,0.9,1.9,1.9,1.9s1.9-0.8,1.9-1.9V2.2C6.9,2,6.8,1.8,6.5,1.8z"/></svg>',
    "type-2": '<svg viewBox="0 0 10 10"><path d="M0.4,0.4C0.2,0.4,0,0.5,0,0.7s0.1,0.4,0.4,0.4l0,0h0.7c0.1,0,0.1,0.1,0.1,0.1l1.6,5.4C3,7.1,3.4,7.4,3.9,7.4H8c0.5,0,0.9-0.4,1.1-0.8L10,3.1c0.1-0.2-0.1-0.4-0.3-0.4H9.6H2.4L1.9,1.1l0,0C1.9,0.6,1.5,0.4,1.1,0.4H0.4zM4.1,8.1c-0.4,0-0.7,0.4-0.7,0.7s0.4,0.7,0.7,0.7s0.7-0.4,0.7-0.7S4.5,8.1,4.1,8.1zM7.8,8.1c-0.4,0-0.7,0.4-0.7,0.7s0.4,0.7,0.7,0.7c0.4,0,0.7-0.4,0.7-0.7S8.2,8.1,7.8,8.1z"/></svg>',
    "type-3": '<svg viewBox="0 0 10 10"><path d="M3,0.7c-0.4,0-0.7,0.2-0.9,0.6L1.1,3.9H0.4c-0.1,0-0.3,0.1-0.4,0.2C0,4.1,0,4.3,0,4.4l1.1,4.2c0.1,0.4,0.5,0.6,0.9,0.6h5.9c0.4,0,0.8-0.3,0.9-0.6L10,4.4c0-0.1,0-0.3-0.1-0.4C9.9,3.9,9.7,3.9,9.6,3.9H8.9L7.8,1.2l0,0C7.6,0.9,7.4,0.7,7,0.7H3zM3,1.6h3.9l1,2.3H2.1L3,1.6z M3.2,5.2c0.3,0,0.4,0.2,0.4,0.4v1.8c0,0.3-0.2,0.4-0.4,0.4C3,7.9,2.8,7.6,2.8,7.4V5.7C2.7,5.4,2.9,5.2,3.2,5.2zM5,5.2c0.3,0,0.4,0.2,0.4,0.4v1.8c0,0.3-0.2,0.4-0.4,0.4c-0.3,0-0.4-0.2-0.4-0.4V5.7C4.6,5.4,4.7,5.2,5,5.2z M6.8,5.2c0.3,0,0.4,0.2,0.4,0.4v1.8c0,0.3-0.2,0.4-0.4,0.4c-0.3,0-0.4-0.2-0.4-0.4V5.7C6.4,5.4,6.6,5.2,6.8,5.2z"/></svg>'
  };
  n.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.cart = {
      cartIconSize: {
        selector: ".ct-header-cart i",
        variable: "iconSize",
        responsive: !0,
        unit: "px"
      },
      cartHeaderIconColor: [{
        selector: ".ct-header-cart > a",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-header-cart > a",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      cartBadgeColor: [{
        selector: ".ct-header-cart",
        variable: "cartBadgeBackground",
        type: "color:background",
        responsive: !0
      }, {
        selector: ".ct-header-cart",
        variable: "cartBadgeText",
        type: "color:text",
        responsive: !0
      }],
      cartDropdownTopOffset: {
        selector: ".ct-cart-content",
        variable: "dropdownTopOffset",
        unit: "px"
      },
      cartFontColor: [{
        selector: ".ct-cart-content",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-cart-content",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      cartDropDownBackground: {
        selector: ".ct-cart-content",
        variable: "backgroundColor",
        type: "color:default",
        responsive: !0
      },
      headerCartMargin: {
        selector: ".ct-header-cart",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    }
  })), n.a.on("ct:header:sync:item:cart", (function(e) {
    var t = e.optionId,
      r = e.optionValue,
      o = (e.values, '[data-id="cart"]');
    "header_cart_visibility" === t && Object(a.a)(o, (function(e) {
      return Object(c.responsiveClassesFor)(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(r, !0).forEach((function(t) {
            l(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }({}, r, {
        desktop: !0
      }), e)
    })), "has_cart_subtotal" === t && Object(a.a)(o, (function(e) {
      if (i(e.querySelectorAll(".ct-cart-total")).map((function(e) {
          return e.remove()
        })), "yes" === r) {
        var t = document.createElement("span");
        t.innerHTML = e.dataset.subtotal, t.classList.add("ct-cart-total"), e.querySelector("a").prepend(t)
      }
    })), "has_cart_badge" === t && Object(a.a)(o, (function(e) {
      e.firstElementChild.removeAttribute("data-skip-badge"), "yes" !== r && (e.firstElementChild.dataset.skipBadge = "")
    })), "mini_cart_type" === t && Object(a.a)(o, (function(e) {
      e.querySelector("a > i").innerHTML = u[r]
    })), "has_cart_dropdown" === t && Object(a.a)(o, (function(e) {
      e.removeAttribute("data-skip-dropdown"), "yes" !== r && (e.dataset.skipDropdown = "")
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(4),
    n = r(2),
    a = r(0),
    c = r.n(a),
    i = r(3);

  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(r, !0).forEach((function(t) {
        u(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function u(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  c.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.logo = l({
      logoMaxHeight: {
        selector: ".custom-logo-link",
        variable: "maxHeight",
        responsive: !0,
        unit: "px"
      }
    }, Object(o.typographyOption)({
      id: "siteTitle",
      selector: ".site-title"
    }), {
      siteTitleColor: [{
        selector: ".site-title",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".site-title",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }]
    }, Object(o.typographyOption)({
      id: "siteTagline",
      selector: ".site-description"
    }), {
      siteTaglineColor: {
        selector: ".site-description",
        variable: "color",
        type: "color:default",
        responsive: !0
      },
      headerLogoMargin: {
        selector: ".site-branding",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    })
  })), c.a.on("ct:header:sync:item:logo", (function(e) {
    var t = e.optionId,
      r = e.optionValue;
    "blogdescription" === t && Object(n.a)('[data-id="logo"]', (function(e) {
      e.querySelector(".site-description") && (e.querySelector(".site-description").innerHTML = r)
    })), "tagline_visibility" === t && Object(n.a)('[data-id="logo"]', (function(e) {
      Object(i.responsiveClassesFor)(l({}, r, {
        desktop: !0
      }), e.querySelector(".site-description"))
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(14),
    n = r(0),
    a = r.n(n);
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e["menu-secondary"] = Object(o.handleMenuVariables)({
      selector: '[data-id="menu-secondary"]'
    })
  })), a.a.on("ct:header:sync:item:menu-secondary", (function(e) {
    Object(o.handleMenuOptions)({
      selector: '[data-id="menu-secondary"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(4),
    n = r(0),
    a = r.n(n),
    c = r(2);

  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function s(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e["mobile-menu"] = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(r, !0).forEach((function(t) {
          s(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(r).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }({}, Object(o.typographyOption)({
      id: "mobileMenuFont",
      selector: ".mobile-menu"
    }), {
      mobileMenuColor: [{
        selector: ".mobile-menu",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".mobile-menu",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      mobileMenuMargin: {
        selector: '[data-id="mobile-menu"]',
        type: "spacing",
        variable: "margin",
        responsive: !0
      }
    })
  })), a.a.on("ct:header:sync:item:mobile-menu", (function(e) {
    var t = e.optionId,
      r = e.optionValue;
    "mobile_menu_type" === t && Object(c.a)('[data-id="mobile-menu"]', (function(e) {
      return e.dataset.type = r
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(7),
    n = r(0),
    a = r.n(n);
  r(2);

  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function i(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.offcanvas = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(r, !0).forEach((function(t) {
          i(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(r).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }({}, Object(o.handleBackgroundOptionFor)({
      id: "offcanvasBackground",
      selector: "#offcanvas"
    }), {
      headerPanelShadow: {
        selector: '[data-behaviour*="side"]',
        type: "box-shadow",
        variable: "boxShadow",
        responsive: !0
      }
    })
  })), a.a.on("ct:header:sync:item:offcanvas", (function(e) {
    var t = e.optionId,
      r = e.optionValue,
      o = e.values;
    if ("offcanvasContentAlignment" === t && (document.querySelector("#offcanvas .content-container").firstElementChild.dataset.align = r), "offcanvas_behavior" === t || "side_panel_position" === t) {
      var n = document.querySelector("#offcanvas");
      a.a.trigger("ct:offcanvas:force-close", {
        container: document.querySelector(document.querySelector(".mobile-menu-toggle").hash),
        onClose: function() {
          return document.querySelector(".mobile-menu-toggle").firstElementChild.classList.remove("close")
        }
      }), setTimeout((function() {
        n.removeAttribute("data-behaviour"), n.classList.add("ct-no-transition"), requestAnimationFrame((function() {
          n.dataset.behaviour = "modal" === o.offcanvas_behavior ? "modal" : "".concat(o.side_panel_position, "-side"), setTimeout((function() {
            n.classList.remove("ct-no-transition")
          }))
        }))
      }), 300)
    }
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(7),
    n = r(0),
    a = r.n(n),
    c = r(2),
    i = r(3);

  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(r, !0).forEach((function(t) {
        u(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function u(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    return; // @changed - all builder sync are now at 1 place, above
    e.search = l({
      searchHeaderIconSize: {
        selector: ".ct-header-search",
        variable: "iconSize",
        responsive: !0,
        unit: "px"
      },
      searchHeaderIconColor: [{
        selector: ".ct-header-search",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-header-search",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      searchHeaderLinkColor: [{
        selector: "#search-modal",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: "#search-modal",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }]
    }, Object(o.handleBackgroundOptionFor)({
      id: "searchHeaderBackground",
      selector: "#search-modal"
    }), {
      headerSearchMargin: {
        selector: ".ct-header-search",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    })
  })), a.a.on("ct:header:sync:item:search", (function(e) {
    var t = e.optionId,
      r = e.optionValue;
    "header_search_visibility" === t && Object(c.a)('[data-id="search"]', (function(e) {
      return Object(i.responsiveClassesFor)(l({}, r, {
        desktop: !0
      }), e)
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(1),
    c = r(2),
    i = r(3);

  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function l(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  n.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.socials = {
      socialsIconSize: {
        selector: ".ct-header-socials",
        variable: "iconSize",
        responsive: !0,
        unit: "px"
      },
      socialsIconSpacing: {
        selector: ".ct-header-socials",
        variable: "spacing",
        responsive: !0,
        unit: "px"
      },
      headerSocialsIconColor: [{
        selector: ".ct-header-socials",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-header-socials",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      headerSocialsIconBackground: [{
        selector: ".ct-header-socials",
        variable: "backgroundColor",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-header-socials",
        variable: "backgroundColorHover",
        type: "color:hover",
        responsive: !0
      }],
      headerSocialsMargin: {
        selector: ".ct-header-socials",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    }
  })), n.a.on("ct:header:sync:item:socials", (function(e) {
    var t = e.optionId,
      r = e.optionValue,
      o = e.values,
      n = '[data-id="socials"]';
    "socialsType" !== t && "socialsFillType" !== t || Object(c.a)(n, (function(e) {
      e.querySelector(".ct-social-box").dataset.icons = "simple" === o.socialsType ? "simple" : "".concat(o.socialsType, "-").concat(o.socialsFillType)
    })), "header_socials" === t && Object(c.a)(n, (function(e) {
      var t = Object(a.getCache)().querySelector('.ct-customizer-preview-cache [data-id="socials-general-cache"]').innerHTML,
        o = document.createElement("div");
      o.innerHTML = t, e.querySelector(".ct-social-box").innerHTML = "", r.map((function(t) {
        var r = t.id;
        t.enabled && e.querySelector(".ct-social-box").appendChild(o.querySelector("[data-network=".concat(r, "]")))
      }))
    })), "visibility" === t && Object(c.a)(n, (function(e) {
      return Object(i.responsiveClassesFor)(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(r, !0).forEach((function(t) {
            l(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }({}, r, {
        desktop: !0
      }), e)
    })), "headerSocialsColor" === t && Object(c.a)(n, (function(e) {
      return e.querySelector(".ct-social-box").dataset.iconsColor = r
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(4),
    n = r(0),
    a = r.n(n),
    c = r(2),
    i = r(3);

  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(r, !0).forEach((function(t) {
        u(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function u(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.text = l({
      headerTextMaxWidth: {
        selector: ".ct-header-text",
        variable: "maxWidth",
        responsive: !0,
        unit: "%"
      }
    }, Object(o.typographyOption)({
      id: "headerTextFont",
      selector: ".ct-header-text"
    }), {
      headerTextColor: [{
        selector: ".ct-header-text",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-header-text",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      headerTextMargin: {
        selector: ".ct-header-text",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    })
  })), a.a.on("ct:header:sync:item:text", (function(e) {
    var t = e.optionId,
      r = e.optionValue;
    "visibility" === t && Object(c.a)('[data-id="text"]', (function(e) {
      return Object(i.responsiveClassesFor)(l({}, r, {
        desktop: !0
      }), e)
    })), "header_text" === t && Object(c.a)('[data-id="text"]', (function(e) {
      e.querySelector(".entry-content").innerHTML = r
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(12),
    n = r(0),
    a = r.n(n);
  a.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e["top-row"] = Object(o.handleRowVariables)({
      selector: 'header [data-row="top"]'
    })
  })), a.a.on("ct:header:sync:item:top-row", (function(e) {
    return Object(o.handleRowOptions)({
      selector: 'header [data-row="top"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(2);
  n.a.on("ct:header:sync:collect-variable-descriptors", (function(e) {
    e.trigger = {
      triggerIconColor: [{
        selector: ".ct-header-trigger",
        variable: "color",
        type: "color:default"
      }, {
        selector: ".ct-header-trigger",
        variable: "colorHover",
        type: "color:hover"
      }],
      triggerMargin: {
        selector: ".ct-header-trigger",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    }
  })), n.a.on("ct:header:sync:item:trigger", (function(e) {
    var t = e.optionId,
      r = e.optionValue;
    "mobile_menu_trigger_type" === t && Object(a.a)('[data-id="trigger"]', (function(e) {
      return e.querySelector(".lines-button").dataset.type = r
    }))
  }))
}, function(e, t, r) {
  var o = {
    "./bottom-row/sync.js": 40,
    "./copyright/sync.js": 41,
    "./menu/sync.js": 42,
    "./middle-row/sync.js": 11,
    "./socials/sync.js": 43,
    "./sync.js": 44,
    "./top-row/sync.js": 45,
    "./widget-area-1/sync.js": 8,
    "./widget-area-2/sync.js": 46,
    "./widget-area-3/sync.js": 47,
    "./widget-area-4/sync.js": 48
  };

  function n(e) {
    var t = a(e);
    return r(t)
  }

  function a(e) {
    if (!r.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  n.keys = function() {
    return Object.keys(o)
  }, n.resolve = a, e.exports = n, n.id = 39
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(11),
    n = r(0),
    a = r.n(n);
  a.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["bottom-row"] = Object(o.handleRowVariables)({
      selector: '.site-footer [data-row="bottom"]'
    })
  })), a.a.on("ct:footer:sync:item:bottom-row", (function(e) {
    return Object(o.handleRowOptions)({
      selector: '.site-footer [data-row="bottom"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(4);

  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function i(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  n.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e.copyright = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(r, !0).forEach((function(t) {
          i(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(r).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }({}, Object(a.typographyOption)({
      id: "copyrightFont",
      selector: ".ct-footer-copyright"
    }), {
      copyrightColor: [{
        selector: ".ct-footer-copyright",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-footer-copyright",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      footerCopyrightAlignment: {
        selector: '[data-column="copyright"]',
        variable: "alignment",
        responsive: !0,
        unit: ""
      },
      copyrightMargin: {
        selector: ".ct-footer-copyright",
        type: "spacing",
        variable: "margin",
        responsive: !0,
        important: !0
      }
    })
  })), n.a.on("ct:footer:sync:item:copyright", (function(e) {
    var t = e.optionId,
      r = e.optionValue;
    "copyright_text" === t && (document.querySelector(".ct-footer-copyright").innerHTML = r.replace("{current_year}", (new Date).getFullYear()).replace("{theme_author}", ct_localizations.customizer_sync.theme_author).replace("{site_title}", ct_localizations.customizer_sync.site_title))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "handleMenuVariables", (function() {
    return s
  })), r.d(t, "handleMenuOptions", (function() {
    return l
  }));
  var o = r(4),
    n = r(0),
    a = r.n(n);
  r(3);

  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function i(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  var s = function(e) {
      var t = e.selector;
      return function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(r, !0).forEach((function(t) {
            i(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }({
        footerMenuItemsSpacing: {
          selector: t,
          variable: "menuItemsSpacing",
          responsive: !0,
          unit: "px"
        },
        footerMenuAlignment: {
          selector: '[data-column="menu"]',
          variable: "alignment",
          responsive: !0,
          unit: ""
        }
      }, Object(o.typographyOption)({
        id: "footerMenuFont",
        selector: "".concat(t, " ul")
      }), {
        footerMenuFontColor: [{
          selector: "".concat(t, " > ul > li > a"),
          variable: "color",
          type: "color:default"
        }, {
          selector: "".concat(t, " > ul > li > a"),
          variable: "colorHover",
          type: "color:hover"
        }],
        footerMenuMargin: {
          selector: t,
          type: "spacing",
          variable: "margin",
          responsive: !0,
          important: !0
        }
      })
    },
    l = function(e) {
      e.selector;
      var t = e.changeDescriptor,
        r = t.optionId,
        o = t.optionValue,
        n = document.querySelector(".footer-menu");
      "stretch_menu" === r && (n.removeAttribute("data-stretch"), "yes" === o && (n.dataset.stretch = ""))
    };
  a.a.on("ct:footer:sync:item:menu", (function(e) {
    l({
      selector: ".footer-menu",
      changeDescriptor: e
    })
  })), a.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e.menu = s({
      selector: ".footer-menu"
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(1);
  r(2), r(3);
  n.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e.socials = {
      socialsIconSize: {
        selector: ".ct-footer-socials",
        variable: "iconSize",
        responsive: !0,
        unit: "px"
      },
      socialsIconSpacing: {
        selector: ".ct-footer-socials",
        variable: "spacing",
        responsive: !0,
        unit: "px"
      },
      footerSocialsAlignment: {
        selector: '[data-column="socials"]',
        variable: "alignment",
        responsive: !0,
        unit: ""
      },
      footerSocialsIconColor: [{
        selector: ".ct-footer-socials",
        variable: "color",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-footer-socials",
        variable: "colorHover",
        type: "color:hover",
        responsive: !0
      }],
      footerSocialsIconBackground: [{
        selector: ".ct-footer-socials",
        variable: "backgroundColor",
        type: "color:default",
        responsive: !0
      }, {
        selector: ".ct-footer-socials",
        variable: "backgroundColorHover",
        type: "color:hover",
        responsive: !0
      }],
      footerSocialsMargin: {
        selector: ".ct-footer-socials",
        type: "spacing",
        variable: "margin",
        responsive: !0
      }
    }
  })), n.a.on("ct:footer:sync:item:socials", (function(e) {
    var t = e.optionId,
      r = e.optionValue,
      o = e.values,
      n = document.querySelector('.site-footer [data-column="socials"]').firstElementChild;
    if ("socialsType" !== t && "socialsFillType" !== t || (n.querySelector(".ct-social-box").dataset.icons = "simple" === o.socialsType ? "simple" : "".concat(o.socialsType, "-").concat(o.socialsFillType)), "footer_socials" === t) {
      var c = Object(a.getCache)().querySelector('.ct-customizer-preview-cache [data-id="socials-general-cache"]').innerHTML,
        i = document.createElement("div");
      i.innerHTML = c, n.querySelector(".ct-social-box").innerHTML = "", r.map((function(e) {
        var t = e.id;
        e.enabled && n.querySelector(".ct-social-box").appendChild(i.querySelector("[data-network=".concat(t, "]")))
      }))
    }
    "footerSocialsColor" === t && (n.querySelector(".ct-social-box").dataset.iconsColor = r)
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(7),
    n = r(0),
    a = r.n(n);

  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function i(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  a.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e.global = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(r, !0).forEach((function(t) {
          i(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(r).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }({
      footerShadow: {
        selector: ".site-footer:before",
        type: "box-shadow",
        variable: "boxShadow",
        responsive: !0
      }
    }, Object(o.handleBackgroundOptionFor)({
      id: "footerBackground",
      selector: "footer"
    }))
  })), a.a.on("ct:footer:sync:item:global", (function(e) {
    if ("has_reveal_effect" === e.optionId) {
      var t = document.querySelector(".site-footer");
      if (t.removeAttribute("style"), t.removeAttribute("data-footer-reveal"), "yes" !== e.optionValue) return;
      document.body.classList.add("footer-reveal"), t.dataset.footerReveal = "no", a.a.trigger("ct:footer-reveal:update")
    }
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(11),
    n = r(0),
    a = r.n(n);
  a.a.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["top-row"] = Object(o.handleRowVariables)({
      selector: '.site-footer [data-row="top"]'
    })
  })), a.a.on("ct:footer:sync:item:top-row", (function(e) {
    return Object(o.handleRowOptions)({
      selector: '.site-footer [data-row="top"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(8);
  ctEvents.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["widget-area-2"] = Object(o.handleWidgetAreaVariables)({
      selector: '[data-column="widget-area-2"]'
    })
  })), ctEvents.on("ct:footer:sync:item:widget-area-2", (function(e) {
    return Object(o.handleWidgetAreaOptions)({
      selector: '[data-column="widget-area-2"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(8);
  ctEvents.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["widget-area-3"] = Object(o.handleWidgetAreaVariables)({
      selector: '[data-column="widget-area-3"]'
    })
  })), ctEvents.on("ct:footer:sync:item:widget-area-3", (function(e) {
    return Object(o.handleWidgetAreaOptions)({
      selector: '[data-column="widget-area-3"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(8);
  ctEvents.on("ct:footer:sync:collect-variable-descriptors", (function(e) {
    e["widget-area-4"] = Object(o.handleWidgetAreaVariables)({
      selector: '[data-column="widget-area-4"]'
    })
  })), ctEvents.on("ct:footer:sync:item:widget-area-4", (function(e) {
    return Object(o.handleWidgetAreaOptions)({
      selector: '[data-column="widget-area-4"]',
      changeDescriptor: e
    })
  }))
}, function(e, t, r) {
  var o = {
    "./archive.js": 50,
    "./back-to-top-link.js": 51,
    "./builder.js": 62,
    "./footer.js": 3,
    "./general.js": 52,
    "./helpers.js": 1,
    "./hero-section.js": 5,
    "./location.js": 53,
    "./misc.js": 54,
    "./pagination.js": 18,
    "./sidebar-helpers.js": 16,
    "./sidebar.js": 17,
    "./single.js": 55,
    "./template-parts/content-loop.js": 19,
    "./variables.js": 56,
    "./variables/background.js": 7,
    "./variables/forms.js": 20,
    "./variables/typography.js": 4,
    "./woocommerce/archive-product.js": 21,
    "./woocommerce/content-product.js": 57,
    "./woocommerce/content-single-product.js": 58,
    "./woocommerce/global.js": 59,
    "./woocommerce/loop/loop-start.js": 60,
    "./woocommerce/single-product/related.js": 61
  };

  function n(e) {
    var t = a(e);
    return r(t)
  }

  function a(e) {
    if (!r.o(o, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw t.code = "MODULE_NOT_FOUND", t
    }
    return o[e]
  }
  n.keys = function() {
    return Object.keys(o)
  }, n.resolve = a, e.exports = n, n.id = 49
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "getPrefixFor", (function() {
    return c
  }));
  r(1);
  var o = r(16),
    n = r(5),
    a = r(17),
    c = function() {
      return document.body.classList.contains("blog") ? "blog" : document.body.classList.contains("single-product") ? "product" : document.body.classList.contains("woocommerce-archive") || document.body.classList.contains("woocommerce-cart") || document.body.classList.contains("woocommerce-checkout") || document.body.classList.contains("woocommerce-account") || document.body.classList.contains("post-type-archive-product") ? "woo" : document.body.classList.contains("search") ? "search" : document.body.classList.contains("author") ? "author" : !!document.body.classList.contains("archive") && "categories"
    },
    i = function(e) {
      ["".concat(e, "_has_sidebar"), "".concat(e, "_sidebar_position"), "".concat(e, "_structure")].map((function(t) {
        return wp.customize(t, (function(t) {
          return t.bind((function(t) {
            return function(e) {
              e === c() && (Object(o.renderSidebar)("yes" === Object(n.getOptionFor)("has_sidebar", e) && "gutenberg" !== Object(n.getOptionFor)("structure", e) ? "yes" : "no", Object(n.getOptionFor)("sidebar_position", e)), Object(a.renderSidebar)(), ctEvents.trigger("ct:custom-select:init"))
            }(e)
          }))
        }))
      }))
    };
  ["blog", "woo", "search", "author", "categories", "product"].map((function(e) {
    return i(e)
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(3),
    n = r(1);
  Object(n.checkAndReplace)({
    id: "has_back_top",
    parent_selector: "body",
    selector: ".ct-back-to-top",
    fragment_id: "back-to-top-link",
    strategy: "maybeBefore:#search-modal",
    watch: ["top_button_type", "top_button_shape", "top_button_alignment", "back_top_visibility"],
    beforeInsert: function(e) {
      return window.scrollY > 500 ? e.classList.add("ct-show") : e.classList.remove("ct-show")
    },
    whenInserted: function() {
      var e = document.querySelector(".ct-back-to-top");
      ctEvents.trigger("ct:back-to-top:mount"), Object(o.responsiveClassesFor)("back_top_visibility", e), e.innerHTML = document.querySelector('.ct-back-to-top [data-top="'.concat(wp.customize("top_button_type")(), '"]')).innerHTML, e.dataset.shape = wp.customize("top_button_shape")(), e.dataset.alignment = wp.customize("top_button_alignment")()
    }
  })
}, function(e, t) {
  wp.customize("content_link_type", (function(e) {
    return e.bind((function(e) {
      return document.body.dataset.link = e
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(9),
    n = r.n(o),
    a = function() {
      setTimeout((function() {
        wp.customize.preview.send("location-change", window.ct_localizations.customizer_sync.future_location)
      }), 500), wp.customize.selectiveRefresh.bind("partial-content-rendered", (function(e) {
        ctEvents.trigger("blocksy:instagram:init"), ctEvents.trigger("ct:images:lazyload:update")
      })), n()(document).on("widget-added", (function(e, t) {}))
    };
  wp.customize.bind("ready", (function() {
    return a()
  })), wp.customize.bind("preview-ready", (function() {
    return a()
  }))
}, function(e, t) {
  wp.customize("has_passepartout", (function(e) {
    return e.bind((function(e) {
      document.body.classList.remove("ct-passepartout"), "yes" === e && document.body.classList.add("ct-passepartout")
    }))
  }));
  var r = function() {
    document.body.dataset.forms = wp.customize("forms_type")().replace("-forms", "")
  };
  wp.customize("forms_type", (function(e) {
    return e.bind((function(e) {
      return r()
    }))
  })), wp.customize("form_elements_panel", (function(e) {
    return e.bind((function(e) {
      return r()
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t), r.d(t, "replaceArticleAndRemoveParts", (function() {
    return y
  }));
  var o = r(6),
    n = r(3),
    a = r(0),
    c = r.n(a),
    i = r(1),
    s = r(5);

  function l(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(r, !0).forEach((function(t) {
        p(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function p(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  var m = function(e) {
      return "type-3" === e ? "narrow" : "type-4" === e ? "normal" : "type-5" === e ? "normal" : "type-6" === e ? "normal:enhanced" : "type-7" === e ? "boundless" : "none"
    },
    f = function(e) {
      return "type-1" === e ? "right" : "type-2" === e ? "left" : "none"
    },
    b = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      t = d({
        bodyClass: "single-post",
        class: "post"
      }, t), e.bind((function(e) {
        if (!Object(i.getCache)().querySelector(".ct-customizer-preview-cache [data-page-structure-custom]") && document.body.classList.contains(t.bodyClass)) {
          "none" !== m(e) ? document.querySelector("article.".concat(t.class)).dataset.pageStructure = m(e) : document.querySelector("article.".concat(t.class)).removeAttribute("data-page-structure");
          var r = document.querySelector('.site-main > .content-area > [class*="ct-container"]');
          if (r.classList.remove("ct-container", "ct-container-boundless"), r.classList.add("type-7" === e ? "ct-container-boundless" : "ct-container"), "none" === f(e)) r.querySelector("aside") && r.removeChild(r.querySelector("aside")), r.removeAttribute("data-sidebar"), document.body.classList.remove("sidebar");
          else {
            document.body.classList.add("sidebar"), r.querySelector("aside") && r.removeChild(r.querySelector("aside")), r.dataset.sidebar = f(e);
            var n = Object(i.getCache)().querySelector('.ct-customizer-preview-cache [data-id="sidebar"]').innerHTML,
              a = document.createElement("div");
            for (a.innerHTML = n; a.firstElementChild;) r.appendChild(a.firstElementChild)
          }
          Object(o.a)(document.querySelector(".site-main")), window.ctEvents.trigger("ct:sidebar:update")
        }
      }))
    },
    y = function() {
      if (document.body.classList.contains("single") || document.body.classList.contains("page")) {
        document.querySelector(".site-main .content-area article").innerHTML = Object(i.getCache)().querySelector(".ct-customizer-preview-cache .single-content-cache > article").innerHTML;
        var e = document.querySelector(".single-post .site-main .content-area article");
        if (e && (e.dataset.content = wp.customize("single_content_style")() || "wide"), "no" === (wp.customize("has_share_box")() || "yes")) {
          l(document.querySelectorAll(".site-main .content-area article .share-box")).map((function(e) {
            return e && e.parentNode.removeChild(e)
          }))
        } else {
          var t = wp.customize("share_box_type")() || "type-1",
            r = wp.customize("share_box1_location")() || {
              top: !1,
              bottom: !0
            },
            a = wp.customize("share_box2_location")() || "right";
          if (!r.top && "type-2" !== t) {
            var u = document.querySelector('.site-main .content-area article .share-box[data-location="top"]');
            u && u.parentNode.removeChild(u)
          }
          if (!r.bottom || "type-2" === t) {
            var d = document.querySelector('.site-main .content-area article .share-box[data-location="bottom"]');
            d && d.parentNode.removeChild(d)
          }
          if ("type-2" === t) {
            var p = document.querySelector('.site-main .content-area article .share-box[data-location="top"]');
            p.dataset.type = t, p.removeAttribute("data-location"), p.dataset.location = a
          }
          "no" === (wp.customize("share_facebook")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="facebook"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" === (wp.customize("share_twitter")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="twitter"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" === (wp.customize("share_vk")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="vk"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" === (wp.customize("share_ok")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="ok"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" === (wp.customize("share_telegram")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="telegram"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" === (wp.customize("share_pinterest")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="pinterest"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), "no" === (wp.customize("share_linkedin")() || "yes") && l(document.querySelectorAll('.site-main .content-area article [data-share-network="linkedin"]')).map((function(e) {
            return e.parentNode.removeChild(e)
          })), l(document.querySelectorAll(".site-main .content-area article .share-box")).map((function(e) {
            var r = e.firstElementChild.children.length;
            0 !== r ? (e.removeAttribute("data-count"), Object(n.responsiveClassesFor)("share_box_visibility", e), "type-1" === t && "a" === e.firstElementChild.tagName.toLowerCase() && e.firstElementChild.remove(), "type-2" === t && (e.dataset.count = r)) : e.parentNode.removeChild(e)
          })), c.a.trigger("ct:single:share-box:update")
        }
        if ("yes" !== (wp.customize("has_author_box")() || "no")) {
          var m = document.querySelector(".site-main .content-area article .author-box");
          m && m.parentNode.removeChild(m)
        } else {
          if ("no" === (wp.customize("single_author_box_social")() || "yes")) {
            var b = document.querySelector(".site-main .content-area article .author-box .author-box-social");
            b && b.parentNode.removeChild(b)
          }
          document.querySelector(".site-main .content-area article .author-box") && Object(n.responsiveClassesFor)("author_box_visibility", document.querySelector(".site-main .content-area article .author-box"))
        }
        if ("no" === (wp.customize("has_post_tags")() || "yes")) {
          var y = document.querySelector(".site-main .content-area article .entry-tags");
          y && y.parentNode.removeChild(y)
        }
        if ("no" === (wp.customize("has_post_nav")() || "yes")) {
          var h = document.querySelector(".site-main .content-area article .post-navigation");
          h && h.parentNode.removeChild(h)
        } else "no" === (wp.customize("has_post_nav_thumb")() || "yes") && l(document.querySelectorAll('.site-main .content-area article .post-navigation [class*="nav-item"] > figure')).map((function(e) {
          return e.parentNode.removeChild(e)
        })), "no" === (wp.customize("has_post_nav_title")() || "yes") && l(document.querySelectorAll('.site-main .content-area article .post-navigation [class*="nav-item"] .item-title')).map((function(e) {
          return e.parentNode.removeChild(e)
        })), document.querySelector(".site-main .content-area article .post-navigation") && Object(n.responsiveClassesFor)("post_nav_visibility", document.querySelector(".site-main .content-area article .post-navigation"));
        if ("no" === (wp.customize("has_featured_image")() || "no")) {
          var v = document.querySelector(".site-main .content-area article .ct-featured-image");
          v && v.remove()
        } else {
          var g = document.querySelector(".site-main .content-area article .ct-featured-image");
          g && g.classList.remove("alignwide"), g && g.classList.remove("ct-boundless"), "none" === f(wp.customize("single_page_structure")()) && "wide" === (wp.customize("single_content_style")() || "wide") && "wide" === wp.customize("single_featured_image_width")() && g.classList.add("alignwide"), "boxed" === (wp.customize("single_content_style")() || "wide") && "yes" === (wp.customize("single_featured_image_boundless")() || "no") && g.classList.add("ct-boundless"), "below" === wp.customize("single_featured_image_location")() && document.querySelector('.site-main .content-area article .hero-section[data-type="type-1"]') && setTimeout((function() {
            document.querySelector(".site-main .content-area article").insertBefore(document.querySelector('.site-main .content-area article .hero-section[data-type="type-1"]'), document.querySelector(".site-main .content-area article .ct-featured-image"))
          })), g && Object(i.setRatioFor)(wp.customize("single_featured_image_ratio")(), g.querySelector(".ct-image-container .ct-ratio")), document.querySelector(".site-main .content-area article .ct-featured-image") && Object(n.responsiveClassesFor)("single_featured_image_visibility", document.querySelector(".site-main .content-area article .ct-featured-image"))
        }
        Object(s.renderHeroSection)(Object(s.getPrefixFor)()), Object(o.a)(document.querySelector(".site-main"))
      }
    };
  wp.customize("single_page_hero_section", (function(e) {
    return e.bind((function(e) {
      return y()
    }))
  })), wp.customize("single_blog_post_hero_section", (function(e) {
    return e.bind((function(e) {
      return y()
    }))
  })), wp.customize("has_share_box", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_box_visibility", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("has_post_nav_title", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("has_post_nav_thumb", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_box1_location", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_box2_location", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_box_type", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_facebook", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_twitter", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_pinterest", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_linkedin", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_vk", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_ok", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("share_telegram", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("has_author_box", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("single_author_box_social", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("author_box_visibility", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("has_post_nav", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("post_nav_visibility", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("has_post_tags", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("has_featured_image", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("single_featured_image_visibility", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("single_featured_image_width", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("single_featured_image_ratio", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("single_featured_image_location", (function(e) {
    return e.bind((function() {
      return y()
    }))
  })), wp.customize("single_content_style", (function(e) {
    return e.bind((function(e) {
      return y()
    }))
  })), wp.customize("single_featured_image_boundless", (function(e) {
    return e.bind((function(e) {
      return y()
    }))
  })), wp.customize("page_content_style", (function(e) {
    return e.bind((function(e) {
      var t = document.querySelector(".page .site-main .content-area article");
      t && (t.dataset.content = e)
    }))
  })), wp.customize("has_post_comments", (function(e) {
    return e.bind((function(e) {
      if (document.body.classList.contains("single") || document.body.classList.contains("page")) {
        var t = document.querySelector(".site-main .ct-comments-container");
        if (t && t.parentNode.removeChild(t), "yes" === e) {
          var r = document.createElement("div");
          r.innerHTML = Object(i.getCache)().querySelector('.ct-customizer-preview-cache [data-part="comments"]').innerHTML, r.firstElementChild && (document.querySelector(".site-main").appendChild(r.firstElementChild), document.querySelector(".site-main .ct-related-posts") && "before" !== wp.customize("related_location")() ? document.querySelector(".site-main .ct-related-posts").parentNode.insertBefore(r.firstElementChild, document.querySelector(".site-main .ct-related-posts")) : document.querySelector(".site-main").appendChild(r.firstElementChild)), Object(o.a)(document.querySelector(".site-main"))
        }
      }
    }))
  }));
  var h = function() {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    if (document.body.classList.contains("single")) {
      var t = document.querySelector(".site-main .ct-related-posts");
      if (t && t.parentNode.removeChild(t), e) {
        var r = document.createElement("div");
        r.innerHTML = Object(i.getCache)().querySelector('.ct-customizer-preview-cache [data-part="related-posts"]').innerHTML, r.firstElementChild && (document.querySelector(".site-main .ct-comments-container") && "after" !== wp.customize("related_location")() ? document.querySelector(".site-main .ct-comments-container").parentNode.insertBefore(r.firstElementChild, document.querySelector(".site-main .ct-comments-container")) : document.querySelector(".site-main").appendChild(r.firstElementChild)), console.log(document.querySelector(".site-main .ct-related-posts ul").children.length), Array.from(new Array(8 - parseInt(wp.customize("related_posts_count")() || 8, 10))).map((function() {
          return document.querySelector(".site-main .ct-related-posts ul").children.length > parseInt(wp.customize("related_posts_count")() || 8, 10) && document.querySelector(".site-main .ct-related-posts ul").removeChild(document.querySelector(".site-main .ct-related-posts ul").lastElementChild)
        })), document.querySelector(".site-main .ct-related-posts ul").dataset.columns = wp.customize("related_posts_columns")() || 3, document.querySelector(".site-main .ct-related-posts .ct-related-posts-label").innerHTML = wp.customize("related_label")();
        var a = wp.customize("related_meta_elements")();
        a.author || (l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .avatar-container")).map((function(e) {
          e.parentNode.classList.remove("has-avatar"), e.remove()
        })), l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-author")).map((function(e) {
          return e.remove()
        }))), a.comments || l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-comments")).map((function(e) {
          return e.remove()
        })), a.date || l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-date")).map((function(e) {
          return e.remove()
        })), a.categories || l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-categories")).map((function(e) {
          return e.remove()
        })), l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta")).map((function(e) {
          return 0 === e.children.length && e.remove()
        })), "no" === wp.customize("has_related_meta_label")() && l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-label")).map((function(e) {
          return e.remove()
        })), [].concat(l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-date .ct-meta-element")), l(document.querySelectorAll(".site-main .ct-related-posts .entry-meta .ct-meta-updated-date .ct-meta-element"))).map((function(e) {
          e.innerHTML = window.wp.date.format("default" === wp.customize("related_date_format_source")() ? e.dataset.defaultFormat : wp.customize("related_meta_date_format")() || "M j, Y", moment(e.dataset.date))
        })), Object(n.responsiveClassesFor)("related_visibility", document.querySelector(".site-main .ct-related-posts")), l(document.querySelectorAll(".ct-related-posts ul[data-columns] .ct-image-container .ct-ratio")).map((function(e) {
          return Object(i.setRatioFor)(wp.customize("related_featured_image_ratio")(), e)
        })), Object(o.a)(document.querySelector(".site-main"))
      }
    }
  };
  wp.customize("has_related_posts", (function(e) {
    return e.bind((function(e) {
      return h("yes" === e)
    }))
  })), wp.customize("related_location", (function(e) {
    return e.bind((function(e) {
      return h()
    }))
  })), wp.customize("related_meta_elements", (function(e) {
    return e.bind((function(e) {
      return h()
    }))
  })), wp.customize("has_related_meta_label", (function(e) {
    return e.bind((function(e) {
      return h()
    }))
  })), wp.customize("related_date_format_source", (function(e) {
    return e.bind((function(e) {
      return h()
    }))
  })), wp.customize("related_meta_date_format", (function(e) {
    return e.bind((function(e) {
      return h()
    }))
  })), wp.customize("single_author_box_type", (function(e) {
    e.bind((function(e) {
      document.querySelector(".site-main .author-box") && (document.querySelector(".site-main .author-box").dataset.type = e)
    }))
  })), wp.customize("related_posts_columns", (function(e) {
    e.bind((function(e) {
      document.querySelector(".site-main .ct-related-posts ul") && (document.querySelector(".site-main .ct-related-posts ul").dataset.columns = e)
    }))
  })), wp.customize("related_posts_count", (function(e) {
    return e.bind((function() {
      return h()
    }))
  })), wp.customize("related_visibility", (function(e) {
    return e.bind((function() {
      return h()
    }))
  })), wp.customize("related_label", (function(e) {
    return e.bind((function() {
      return h()
    }))
  })), wp.customize("related_featured_image_ratio", (function(e) {
    return e.bind((function() {
      return h()
    }))
  })), wp.customize("single_page_structure", (function(e) {
    return b(e, {
      bodyClass: "page",
      class: "page"
    })
  })), wp.customize("single_blog_post_structure", (function(e) {
    return b(e)
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(5),
    n = r(19),
    a = r(4),
    c = r(7),
    i = r(20),
    s = r(18),
    l = r(10);

  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function d(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }
  Object(l.b)(function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(r, !0).forEach((function(t) {
        d(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }({
    colorPalette: [{
      variable: "main",
      type: "color:color1"
    }, {
      variable: "mainDark",
      type: "color:color2"
    }, {
      variable: "mainLight",
      type: "color:color3"
    }, {
      variable: "sub",
      type: "color:color4"
    }, {
      variable: "subLight",
      type: "color:color5"
    }]
  }, Object(o.getHeroVariables)(), {}, Object(n.getPostListingVariables)(), {}, Object(s.getPaginationVariables)(), {}, Object(a.getTypographyVariablesFor)(), {}, Object(c.getBackgroundVariablesFor)(), {}, Object(i.getFormsVariablesFor)(),   
    ct_localizations.sync_vars // @changed
  ))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(1);
  wp.customize("gallery_style", (function(e) {
    return e.bind((function(e) {
      var t = document.querySelector(".product");
      t && (t.classList.remove("thumbs-left"), "horizontal" !== e && document.querySelector(".woocommerce-product-gallery__wrapper") && document.querySelector(".woocommerce-product-gallery__wrapper").children.length > 1 && t.classList.add("thumbs-left"))
    }))
  })), Object(o.checkAndReplace)({
    id: "has_product_single_onsale",
    strategy: "firstChild",
    selector: ".onsale",
    parent_selector: ".single-product .product",
    fragment_id: "single-sale-flash"
  }), Object(o.checkAndReplace)({
    id: "has_product_single_rating",
    strategy: "maybeBefore:.price",
    selector: ".woocommerce-product-rating",
    parent_selector: ".single-product .product .summary",
    fragment_id: "single-rating"
  }), Object(o.checkAndReplace)({
    id: "has_product_single_meta",
    strategy: "append",
    selector: ".product_meta",
    parent_selector: ".single-product .product .summary",
    fragment_id: "single-meta"
  })
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(1);

  function n(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  wp.customize("gallery_style", (function(e) {
    return e.bind((function(e) {
      if (document.body.classList.contains("single-product")) {
        var t = document.querySelector(".product.type-product");
        t.classList.remove("thumbs-left"), "horizontal" !== e && t.querySelector(".flexy-items") && t.classList.add("thumbs-left")
      }
    }))
  })), wp.customize("product_gallery_ratio", (function(e) {
    return e.bind((function(e) {
      if (document.body.classList.contains("single-product")) {
        var t = document.querySelector(".product.type-product");
        (e || "4/3").split("/");
        n(t.querySelectorAll(".flexy-items .ct-image-container .ct-ratio, .ct-product-view > .ct-image-container .ct-ratio")).map((function(t) {
          return Object(o.setRatioFor)(e, t)
        }))
      }
    }))
  }))
}, function(e, t) {
  wp.customize("store_notice_position", (function(e) {
    return e.bind((function(e) {
      document.querySelector(".woocommerce-store-notice") && (document.querySelector(".woocommerce-store-notice").dataset.position = e)
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(21);

  function n(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var a = function() {
    n(document.querySelectorAll(".shop-entries")).map((function(e) {
      var t = wp.customize("shop_structure")();
      e.dataset.layout = t, "grid" === t ? e.dataset.columns = wp.customize("shop_columns")() : e.removeAttribute("data-columns")
    })), Object(o.replaceCards)()
  };
  wp.customize("shop_structure", (function(e) {
    return e.bind((function(e) {
      return a()
    }))
  })), wp.customize("shop_columns", (function(e) {
    return e.bind((function(e) {
      return a()
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(6),
    n = r(1),
    a = r(3);

  function c(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var i = function() {
    if (document.querySelector(".product") && (c(document.querySelectorAll(".related.products")).map((function(e) {
        return e.parentNode.removeChild(e)
      })), "yes" === wp.customize("has_product_related")())) {
      for (var e = Object(n.getFreshHtmlFor)("single-related"); e.firstElementChild;) document.querySelector(".product").appendChild(e.firstElementChild);
      document.querySelector(".product .shop-entries").dataset.columns = wp.customize("related_products_columns")();
      var t = Math.min(8, document.querySelector(".product .shop-entries").children.length) - parseInt(wp.customize("related_products")(), 10);
      t > 0 && c(Array(t)).map((function() {
        return document.querySelector(".product .shop-entries").removeChild(document.querySelector(".product .shop-entries").lastElementChild)
      })), Object(a.responsiveClassesFor)("related_products_visibility", document.querySelector(".product .related")), Object(o.a)(document.querySelector(".shop-entries"))
    }
  };
  wp.customize("has_product_related", (function(e) {
    return e.bind((function(e) {
      return i()
    }))
  })), wp.customize("related_products_columns", (function(e) {
    return e.bind((function(e) {
      return i()
    }))
  })), wp.customize("related_products", (function(e) {
    return e.bind((function(e) {
      return i()
    }))
  })), wp.customize("related_products_visibility", (function(e) {
    return e.bind((function(e) {
      return i()
    }))
  }))
}, function(e, t, r) {
  "use strict";
  r.r(t);
  var o = r(0),
    n = r.n(o),
    a = r(10),
    c = r(13),
    i = r.n(c);

  function s(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(r, !0).forEach((function(t) {
        d(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function d(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function p(e, t) {
    if (null == e) return {};
    var r, o, n = function(e, t) {
      if (null == e) return {};
      var r, o, n = {},
        a = Object.keys(e);
      for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
      return n
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (o = 0; o < a.length; o++) r = a[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
  }
  var m = function e(t) {
      t.__CT_KEYS_ORDER__;
      var r = p(t, ["__CT_KEYS_ORDER__"]);
      return Object.keys(r).reduce((function(r, o) {
        return t[o].type ? t[o].options ? u({}, r, {}, e(t[o].options)) : t[o]["inner-options"] ? u({}, r, d({}, o, t[o]), e(t[o]["inner-options"])) : u({}, r, d({}, o, t[o])) : u({}, r, {}, e(t[o]))
      }), {})
    },
    f = function(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = m(e);
      return u({}, t, {}, Object.keys(o).reduce((function(e, n) {
        var a = null;
        if (Object.keys(t).indexOf(n) > -1)(i.a.isString(t[n]) || i.a.isNumber(t[n])) && (a = t[n]), i.a.isObject(t[n]) && (a = u({}, o[n].value || {}, {}, t[n])), i.a.isArray(t[n]) && (a = t[n] ? t[n] : s(o[n].value || []));
        else {
          if (r) return u({}, e, {}, r(n, o[n]));
          a = Object.keys(o[n]).indexOf("value") > -1 ? o[n].value : ""
        }
        return u({}, e, d({}, n, a))
      }), {}))
    },
    b = r(9),
    y = r.n(b);

  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t && (o = o.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), r.push.apply(r, o)
    }
    return r
  }

  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(r, !0).forEach((function(t) {
        g(e, t, r[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(r).forEach((function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
      }))
    }
    return e
  }

  function g(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function w(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var r = [],
        o = !0,
        n = !1,
        a = void 0;
      try {
        for (var c, i = e[Symbol.iterator](); !(o = (c = i.next()).done) && (r.push(c.value), !t || r.length !== t); o = !0);
      } catch (e) {
        n = !0, a = e
      } finally {
        try {
          o || null == i.return || i.return()
        } finally {
          if (n) throw a
        }
      }
      return r
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function O(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function S(e) {
    return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var j = {},
    C = {},
    x = function e(t, r) {
      if (S(t) !== S(r)) return !1;
      if ("object" !== S(t) && "object" !== S(r)) return t === r;
      for (var o in t) {
        if (t.hasOwnProperty(o) !== r.hasOwnProperty(o)) return !1;
        switch (S(t[o])) {
          case "object":
            if (!e(t[o], r[o])) return !1;
            break;
          default:
            if (t[o] != r[o]) return !1
        }
      }
      for (var o in r)
        if (void 0 === t[o]) return !1;
      return !0
    };
  n.a.trigger("ct:header:sync:collect-variable-descriptors", j), n.a.trigger("ct:footer:sync:collect-variable-descriptors", C);
  n.a.on("ct:header:render-frame", (function() {
    [].concat(O(document.querySelectorAll("#main-container > header [data-id]")), O(document.querySelectorAll("#main-container > header [data-row]")), O(document.querySelectorAll("#main-container > footer [data-shortcut]")), O(document.querySelectorAll("#main-container > footer [data-row]")), O(document.querySelectorAll("#offcanvas .ct-bag-container"))).map((function(e) {
      return function(e) {
        if (!O(e.children).find((function(e) {
            return e.matches(".ct-customizer-shortcut")
          }))) {
          var t = document.createElement("a");
          t.classList.add("ct-customizer-shortcut"), "drop" === e.dataset.shortcut ? t.innerHTML = '\n    <svg viewBox="0 0 24 24"><path d="M3,12c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S3,10.9,3,12z M10,12c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S10,10.9,10,12z\n   M17,12c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S17,10.9,17,12z"/></svg>\n        ' : t.innerHTML = "Edit", e.removeAttribute("data-item-label"), t.addEventListener("click", (function(t) {
            t.preventDefault(), wp.customize.preview.send("ct-initiate-deep-link", e.dataset.location)
          })), e.appendChild(t)
        }
      }(e)
    }))
  })), wp.customize.bind("preview-ready", (function() {
    wp.customize.selectiveRefresh.Partial.prototype.createEditShortcutForPlacement = function() {}, wp.customize.selectiveRefresh.Partial.prototype.ready = function() {
      var e = this;
      _.each(e.placements(), (function(t) {
        e.createEditShortcutForPlacement(t)
      })), y()(document).on("click", e.params.selector, (function(t) {
        t.shiftKey && (t.preventDefault(), _.each(e.placements(), (function(r) {
          y()(r.container).is(t.currentTarget) && e.showControl()
        })))
      }))
    }, wp.customize.selectiveRefresh.Partial.prototype.isRelatedSetting = function(e, t, r) {
      if (_.isString(e) && (e = wp.customize(e)), !e) return !1;
      if (_.indexOf(this.settings(), e.id) > -1 && (this.settings().indexOf("header_placements") > -1 || this.settings().indexOf("footer_placements") > -1)) {
        if (this.id.indexOf(":") > -1) {
          var o = w(this.id.split(":"), 2),
            n = (o[0], o[1]),
            a = ct_customizer_localizations.header_builder_data[this.settings().indexOf("header_placements") > -1 ? "header" : "footer"].find((function(e) {
              return e.id === n
            }));
          if (!a) return !1;
          if (t.__should_refresh_item__) {
            var c = w(t.__should_refresh_item__.split(":"), 2),
              i = c[0],
              s = c[1];
            if (i === n && a.config.selective_refresh.indexOf(s) > -1) return !0
          }
          return !1
        }
        return !!(Object.keys(t).indexOf("__should_refresh__") > -1 && t.__should_refresh__)
      }
      return -1 !== _.indexOf(this.settings(), e.id)
    }, wp.customize.preview.bind("ct:header:receive-value-update", (function(e) {
      var t = e.optionId,
        r = e.optionValue,
        o = e.values,
        c = e.itemId;
      if (n.a.trigger("ct:header:sync:item:".concat(c), {
          itemId: c,
          optionId: t,
          optionValue: r,
          values: o,
          getFullValuesForItem: function() {
            return {}
          }
        }), j[c] && j[c][t]) {
        var i = j[c][t];
        (Array.isArray(i) ? i : [i]).map((function(e) {
          return Object(a.a)(e, r)
        }))
      }
    })), wp.customize.preview.bind("ct:footer:receive-value-update", (function(e) {
      var t = e.optionId,
        r = e.optionValue,
        o = e.values,
        c = e.itemId;
      if (n.a.trigger("ct:footer:sync:item:".concat(c), {
          itemId: c,
          optionId: t,
          optionValue: r,
          values: o,
          getFullValuesForItem: function() {
            return {}
          }
        }), C[c] && C[c][t]) {
        var i = C[c][t];
        (Array.isArray(i) ? i : [i]).map((function(e) {
          return Object(a.a)(e, e.fullValue ? o : r)
        }))
      }
    })), wp.customize.preview.bind("ct:header:receive-value-update:all-items", (function(e) {
      var t = e.items,
        r = e.oldItems;
      ct_customizer_localizations.header_builder_data.header.map((function(e) {
        var o = e.id,
          n = e.options,
          c = t.find((function(e) {
            return e.id === o
          })),
          i = r.find((function(e) {
            return e.id === o
          }));
        if (c || i) {
          var s = f(n, {}, (function(e, t) {
            var r = (c ? c.values : null) || {},
              o = (i ? i.values : null) || {};
            return -1 === Object.keys(r).indexOf(e) && -1 === Object.keys(o).indexOf(e) ? {} : x(r[e] || t.value, o[e] || t.value) ? {} : g({}, e, r[e] || t.value)
          }));
          Object.keys(s).map((function(e) {
            if (j[o]) {
              var t = j[o][e];
              t && (Array.isArray(t) ? t : [t]).map((function(t) {
                return Object(a.a)(t, s[e])
              }))
            }
          }))
        }
      }))
    })), wp.customize.preview.bind("ct:footer:receive-value-update:all-items", (function(e) {
      var t = e.section,
        r = e.oldSection,
        o = t.items,
        n = t.settings,
        c = r.items,
        i = r.settings,
        s = f(ct_customizer_localizations.header_builder_data.footer_data.footer_options, {}, (function(e, t) {
          var r = n || null || {},
            o = i || null || {};
          return -1 === Object.keys(r).indexOf(e) && -1 === Object.keys(o).indexOf(e) ? {} : x(r[e] || t.value, o[e] || t.value) ? {} : g({}, e, r[e] || t.value)
        }));
      Object.keys(s).map((function(e) {
        if (C.global) {
          var t = C.global[e];
          t && (Array.isArray(t) ? t : [t]).map((function(t) {
            return Object(a.a)(t, s[e])
          }))
        }
      })), ct_customizer_localizations.header_builder_data.footer.map((function(e) {
        var n = e.id,
          i = e.options,
          s = t.rows.find((function(e) {
            return e.id === n
          })),
          l = r.rows.find((function(e) {
            return e.id === n
          })),
          u = o[n],
          d = c[n];
        if (u || d || "middle-row" === n || "bottom-row" === n || "top-row" === n) {
          var p = f(i, {}, (function(e, t) {
            var r = v({}, (u ? u.values : null) || {}, {}, s ? {
                items_per_row: s.columns.length
              } : {}),
              o = v({}, (d ? d.values : null) || {}, {}, l ? {
                items_per_row: l.columns.length
              } : {});
            return -1 === Object.keys(r).indexOf(e) && -1 === Object.keys(o).indexOf(e) ? {} : x(r[e] || t.value, o[e] || t.value) ? {} : g({}, e, r[e] || t.value)
          }));
          Object.keys(p).map((function(e) {
            if (C[n]) {
              var t = C[n][e];
              t && (Array.isArray(t) ? t : [t]).map((function(t) {
                return Object(a.a)(t, t.fullValue ? p : p[e])
              }))
            }
          }))
        }
      }))
    }))
  }))
}]);