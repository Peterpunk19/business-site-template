(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  95187,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      callServer: function () {
        return o.callServer;
      },
      createServerReference: function () {
        return s.createServerReference;
      },
      findSourceMapURL: function () {
        return i.findSourceMapURL;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(32120),
      i = e.r(92245),
      s = e.r(35326);
  },
  22016,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(90809),
      i = e.r(43476),
      s = o._(e.r(71645)),
      l = e.r(95057),
      u = e.r(8372),
      c = e.r(18581),
      d = e.r(18967),
      f = e.r(5550),
      p = e.r(88540),
      m = e.r(91949),
      h = e.r(73668),
      b = e.r(9396);
    function g(t) {
      var r;
      let n,
        a,
        o,
        [g, x] = (0, s.useOptimistic)(m.IDLE_LINK_STATUS),
        v = (0, s.useRef)(null),
        {
          href: j,
          as: C,
          children: P,
          prefetch: w = null,
          passHref: S,
          replace: N,
          shallow: E,
          scroll: T,
          onClick: O,
          onMouseEnter: _,
          onTouchStart: R,
          legacyBehavior: M = !1,
          onNavigate: k,
          transitionTypes: A,
          ref: D,
          unstable_dynamicOnHover: L,
          ...U
        } = t;
      ((n = P),
        M &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, i.jsx)("a", { children: n })));
      let $ = s.default.useContext(u.AppRouterContext),
        z = !1 !== w,
        I = !1 === w ? "none" : !0 === w ? "full" : "auto",
        F =
          "none" !== I
            ? "auto" === I
              ? b.FetchStrategy.PPR
              : b.FetchStrategy.Full
            : b.FetchStrategy.PPR,
        B = "string" == typeof (r = C || j) ? r : (0, l.formatUrl)(r);
      if (M) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = s.default.Children.only(n);
      }
      let G = M ? a && "object" == typeof a && a.ref : D,
        K,
        W = s.default.useCallback(
          (e) => (
            null !== $ && (v.current = (0, m.mountLinkInstance)(e, B, $, F, z, x, K)),
            () => {
              (v.current && ((0, m.unmountLinkForCurrentNavigation)(v.current), (v.current = null)),
                (0, m.unmountPrefetchableInstance)(e));
            }
          ),
          [z, B, $, F, x, K],
        ),
        X = {
          ref: (0, c.useMergedRef)(W, G),
          onClick(t) {
            (M || "function" != typeof O || O(t),
              M && a.props && "function" == typeof a.props.onClick && a.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, n, a, o, i, l, u = "none") {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) && "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      a && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(99781);
                    s.default.startTransition(() => {
                      f(
                        r,
                        a ? "replace" : "push",
                        !1 === o ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default,
                        n.current,
                        l,
                        u,
                      );
                    });
                  }
                })(t, B, v, N, T, k, A, I));
          },
          onMouseEnter(e) {
            (M || "function" != typeof _ || _(e),
              M && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e),
              $ && z && (0, m.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (M || "function" != typeof R || R(e),
              M && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e),
              $ && z && (0, m.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(B)
          ? (X.href = B)
          : (M && !S && ("a" !== a.type || "href" in a.props)) || (X.href = (0, f.addBasePath)(B)),
        (o = M ? s.default.cloneElement(a, X) : (0, i.jsx)("a", { ...U, ...X, children: n })),
        (0, i.jsx)(y.Provider, { value: g, children: o })
      );
    }
    let y = (0, s.createContext)(m.IDLE_LINK_STATUS),
      x = () => (0, s.useContext)(y);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(71645);
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else (e && (r.current = o(e, n)), t && (a.current = o(t, n)));
        },
        [e, t],
      );
    }
    function o(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  73668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(18967),
      a = e.r(52817);
    function o(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, a.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    function o(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
      }
      return t;
    }
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, i(e));
        else t.set(r, i(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        a = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        u = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r && ((u = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(o.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || i.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), a && "/" !== a[0] && (a = "/" + a))
          : u || (u = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${a}${c}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function u(e) {
      return s(e);
    }
  },
  18967,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return y;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return b;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return C;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && s.test(e);
      };
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await m(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let h = "u" > typeof performance,
      b =
        h &&
        ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class g extends Error {}
    class y extends Error {}
    class x extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class v extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class j extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function C(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  18566,
  (e, t, r) => {
    t.exports = e.r(76562);
  },
  64358,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22016),
      n = e.i(18566),
      a = e.i(71645),
      o = e.i(33871),
      i = e.i(57138);
    let s = [
      { label: "Dashboard", href: "/admin" },
      { label: "Citas", href: "/admin/appointments" },
      { label: "Mensajes", href: "/admin/messages" },
    ];
    e.s([
      "AdminMobileNavigation",
      0,
      function () {
        let e = (0, n.usePathname)(),
          [l, u] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            if (!l) return;
            let e = document.body.style.overflow;
            return (
              (document.body.style.overflow = "hidden"),
              () => {
                document.body.style.overflow = e;
              }
            );
          }, [l]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("button", {
                type: "button",
                "aria-label": l ? "Cerrar menú" : "Abrir menú",
                "aria-expanded": l,
                "aria-controls": "admin-mobile-menu",
                onClick: () => u((e) => !e),
                className:
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden",
                children: (0, t.jsx)("span", {
                  "aria-hidden": "true",
                  className: "text-xl",
                  children: l ? "×" : "☰",
                }),
              }),
              l &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      "aria-label": "Cerrar menú",
                      onClick: () => u(!1),
                      className: "fixed inset-0 z-40 bg-slate-950/40 lg:hidden",
                    }),
                    (0, t.jsxs)("aside", {
                      id: "admin-mobile-menu",
                      className:
                        "\n              fixed\n              inset-y-0\n              left-0\n              z-50\n              flex\n              h-dvh\n              w-[min(85vw,320px)]\n              flex-col\n              bg-white\n              shadow-2xl\n              lg:hidden\n            ",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex items-center justify-between border-b border-slate-100 px-5 py-5",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "text-xs font-semibold uppercase tracking-[0.18em] text-brand-700",
                                  children: "Administración",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mt-1 font-bold text-slate-950",
                                  children: o.businessConfig.shortName,
                                }),
                              ],
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              "aria-label": "Cerrar menú",
                              onClick: () => u(!1),
                              className:
                                "inline-flex h-10 w-10 items-center justify-center rounded-xl text-xl text-slate-500 transition hover:bg-slate-100",
                              children: "×",
                            }),
                          ],
                        }),
                        (0, t.jsx)("nav", {
                          "aria-label": "Administración",
                          className: "flex-1 space-y-1 overflow-y-auto p-4",
                          children: s.map((n) => {
                            let a = "/admin" === n.href ? "/admin" === e : e.startsWith(n.href);
                            return (0, t.jsx)(
                              r.default,
                              {
                                href: n.href,
                                onClick: () => u(!1),
                                "aria-current": a ? "page" : void 0,
                                className: `block rounded-xl px-4 py-3 text-sm font-medium transition ${a ? "bg-brand-50 text-brand-800" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"}`,
                                children: n.label,
                              },
                              n.href,
                            );
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "border-t border-slate-100 p-4",
                          children: (0, t.jsx)("form", {
                            action: i.logout,
                            children: (0, t.jsx)("button", {
                              type: "submit",
                              className:
                                "w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950",
                              children: "Cerrar sesión",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      },
    ]);
  },
  13185,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22016),
      n = e.i(18566),
      a = e.i(33871),
      o = e.i(57138);
    let i = [
      { label: "Dashboard", href: "/admin" },
      { label: "Citas", href: "/admin/appointments" },
      { label: "Mensajes", href: "/admin/messages" },
    ];
    e.s([
      "AdminSidebar",
      0,
      function () {
        let e = (0, n.usePathname)();
        return (0, t.jsxs)("aside", {
          className: "hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex",
          children: [
            (0, t.jsxs)("div", {
              className: "border-b border-slate-100 px-6 py-6",
              children: [
                (0, t.jsx)("p", {
                  className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand-700",
                  children: "Administración",
                }),
                (0, t.jsx)("p", {
                  className: "mt-2 font-bold text-slate-950",
                  children: a.businessConfig.shortName,
                }),
              ],
            }),
            (0, t.jsx)("nav", {
              "aria-label": "Administración",
              className: "flex-1 space-y-1 p-4",
              children: i.map((n) => {
                let a = "/admin" === n.href ? "/admin" === e : e.startsWith(n.href);
                return (0, t.jsx)(
                  r.default,
                  {
                    href: n.href,
                    "aria-current": a ? "page" : void 0,
                    className: `block rounded-xl px-4 py-3 text-sm font-medium transition ${a ? "bg-brand-50 text-brand-800" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"}`,
                    children: n.label,
                  },
                  n.href,
                );
              }),
            }),
            (0, t.jsx)("div", {
              className: "border-t border-slate-100 p-4",
              children: (0, t.jsx)("form", {
                action: o.logout,
                children: (0, t.jsx)("button", {
                  type: "submit",
                  className:
                    "w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                  children: "Cerrar sesión",
                }),
              }),
            }),
          ],
        });
      },
    ]);
  },
  33871,
  57138,
  (e) => {
    "use strict";
    e.s(
      [
        "businessConfig",
        0,
        {
          slug: "dr-ortega-estetica-dental",
          url: "https://drortegaesteticadental.com",
          name: "Dr. Ortega Estética Dental",
          shortName: "Estética Dental",
          description:
            "Atención odontológica profesional enfocada en el cuidado, prevención y bienestar de tu sonrisa.",
          professional: {
            name: "Dr. Salvador Ortega",
            title: "Cirujano Dentista",
            license: "CEU-10481267",
            license2: "2407012002A00271",
            description:
              "Brindamos atención odontológica profesional, cercana y personalizada, enfocándonos en la prevención, diagnóstico y tratamiento de problemas dentales.",
            image: "/images/professional.webp",
          },
          contact: { phone: "9614286042", whatsapp: "9612177142", email: "dr.ortega32@gmail.com" },
          location: {
            address: "1er Piso, 468, entre 3a y 4a Sur, 2a Poniente sur, El Centro",
            city: "Tuxtla Gutiérrez",
            state: "Chiapas",
            postalCode: "29000",
            googleMapsUrl: "https://maps.app.goo.gl/mxb2UzRdMVWvruCb7",
            latitude: 16.7507841,
            longitude: -93.1211064,
            googleMapsEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3820.5201586372555!2d-93.1184869!3d16.750777300000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f4db73eadb%3A0x4963c49223895bd5!2sDr%20Ortega%20Estetica%20Dental!5e0!3m2!1ses!2smx!4v1786655812810!5m2!1ses!2smx",
          },
          schedule: [
            {
              label: "Lunes a viernes",
              days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "10:00",
              closes: "19:00",
            },
            { label: "Sábado", days: ["Saturday"], opens: "10:00", closes: "17:00" },
          ],
          social: {
            facebook: "https://www.facebook.com/DrOrtegaEsteticaDental32",
            instagram: "https://www.instagram.com/drortega_esteticadental",
            tiktok: "https://tiktok.com/@...",
          },
          notifications: { email: "pedrod.beltran@gmail.com" },
          branding: { logo: "/images/logo.png", heroImage: "/images/hero.webp" },
          seo: {
            title: "Dentista en Tuxtla Gutiérrez | Dr. Ortega Estética Dental",
            description:
              "Consultorio dental en Tuxtla Gutiérrez, Chiapas. Atención odontológica profesional, limpieza dental, blanqueamiento, ortodoncia y valoración dental.",
            keywords: [
              "dentista en Tuxtla Gutiérrez",
              "dentista Tuxtla",
              "consultorio dental Tuxtla Gutiérrez",
              "odontólogo Tuxtla Gutiérrez",
              "limpieza dental Tuxtla",
              "blanqueamiento dental Tuxtla",
              "ortodoncia Tuxtla Gutiérrez",
            ],
          },
          locale: { language: "es-MX", openGraphLocale: "es_MX", country: "MX" },
          structuredData: { type: "Dentist" },
        },
      ],
      33871,
    );
    var t = e.i(95187);
    let r = (0, t.createServerReference)(
      "0085bbba4cb325987436193e393e07cc14a6337dde",
      t.callServer,
      void 0,
      t.findSourceMapURL,
      "logout",
    );
    e.s(["logout", 0, r], 57138);
  },
]);
