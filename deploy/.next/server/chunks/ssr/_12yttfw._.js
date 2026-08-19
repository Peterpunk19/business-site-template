module.exports = [
  46058,
  (a, b, c) => {
    "use strict";
    function d(a) {
      if ("function" != typeof WeakMap) return null;
      var b = new WeakMap(),
        c = new WeakMap();
      return (d = function (a) {
        return a ? c : b;
      })(a);
    }
    c._ = function (a, b) {
      if (!b && a && a.__esModule) return a;
      if (null === a || ("object" != typeof a && "function" != typeof a)) return { default: a };
      var c = d(b);
      if (c && c.has(a)) return c.get(a);
      var e = { __proto__: null },
        f = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var g in a)
        if ("default" !== g && Object.prototype.hasOwnProperty.call(a, g)) {
          var h = f ? Object.getOwnPropertyDescriptor(a, g) : null;
          h && (h.get || h.set) ? Object.defineProperty(e, g, h) : (e[g] = a[g]);
        }
      return ((e.default = a), c && c.set(a, e), e);
    };
  },
  5050,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      callServer: function () {
        return f.callServer;
      },
      createServerReference: function () {
        return h.createServerReference;
      },
      findSourceMapURL: function () {
        return g.findSourceMapURL;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(20611),
      g = a.r(1722),
      h = a.r(38783);
  },
  20611,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "callServer", {
        enumerable: !0,
        get: function () {
          return g;
        },
      }));
    let d = a.r(72131),
      e = a.r(88347),
      f = a.r(90841);
    async function g(a, b) {
      return new Promise((c, g) => {
        (0, d.startTransition)(() => {
          (0, f.dispatchAppRouterAction)({
            type: e.ACTION_SERVER_ACTION,
            actionId: a,
            actionArgs: b,
            resolve: c,
            reject: g,
          });
        });
      });
    }
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  1722,
  (a, b, c) => {
    "use strict";
    let d;
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "findSourceMapURL", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  88347,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d,
      e,
      f = {
        ACTION_HMR_REFRESH: function () {
          return l;
        },
        ACTION_NAVIGATE: function () {
          return i;
        },
        ACTION_REFRESH: function () {
          return h;
        },
        ACTION_RESTORE: function () {
          return j;
        },
        ACTION_SERVER_ACTION: function () {
          return m;
        },
        ACTION_SERVER_PATCH: function () {
          return k;
        },
        PrefetchKind: function () {
          return n;
        },
        ScrollBehavior: function () {
          return o;
        },
      };
    for (var g in f) Object.defineProperty(c, g, { enumerable: !0, get: f[g] });
    let h = "refresh",
      i = "navigate",
      j = "restore",
      k = "server-patch",
      l = "hmr-refresh",
      m = "server-action";
    var n = (((d = {}).AUTO = "auto"), (d.FULL = "full"), d),
      o = (((e = {})[(e.Default = 0)] = "Default"), (e[(e.NoScroll = 1)] = "NoScroll"), e);
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  90841,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      dispatchAppRouterAction: function () {
        return i;
      },
      dispatchGestureState: function () {
        return j;
      },
      refreshOnInstantNavigationUnlock: function () {
        return h;
      },
      useActionQueue: function () {
        return k;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(46058)._(a.r(72131)),
      g = a.r(67009);
    a.r(88347);
    function h() {}
    function i(a) {
      !0;
      throw Object.defineProperty(
        Error("Internal Next.js error: Router action dispatched before initialization."),
        "__NEXT_ERROR_CODE",
        { value: "E668", enumerable: !1, configurable: !0 },
      );
    }
    function j(a) {
      !0;
      throw Object.defineProperty(
        Error("Internal Next.js error: Router action dispatched before initialization."),
        "__NEXT_ERROR_CODE",
        { value: "E668", enumerable: !1, configurable: !0 },
      );
    }
    function k(a) {
      let [b, c] = f.default.useState(a.state),
        [d, e] = (0, f.useOptimistic)(b),
        h = (0, f.useMemo)(() => d, [d]);
      return (0, g.isThenable)(h) ? (0, f.use)(h) : h;
    }
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  67009,
  (a, b, c) => {
    "use strict";
    function d(a) {
      return null !== a && "object" == typeof a && "then" in a && "function" == typeof a.then;
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "isThenable", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  35026,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(5050);
    let e = (0, d.createServerReference)(
        "6042fea897fbb0ddd7eaf6ad6b47c357b55b703422",
        d.callServer,
        void 0,
        d.findSourceMapURL,
        "login",
      ),
      f = {};
    a.s(
      [
        "LoginForm",
        0,
        function () {
          let [a, d, g] = (0, c.useActionState)(e, f);
          return (0, b.jsxs)("form", {
            action: d,
            className: "space-y-5",
            children: [
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)("label", {
                    htmlFor: "email",
                    className: "mb-2 block text-sm font-medium text-slate-700",
                    children: "Correo electrónico",
                  }),
                  (0, b.jsx)("input", {
                    id: "email",
                    name: "email",
                    type: "email",
                    required: !0,
                    autoComplete: "email",
                    placeholder: "correo@ejemplo.com",
                    className:
                      "\n            w-full\n            rounded-xl\n            border\n            border-slate-200\n            px-4\n            py-3\n            text-base\n            outline-none\n            transition\n            focus:border-brand-500\n            focus:ring-2\n            focus:ring-brand-100\n          ",
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)("label", {
                    htmlFor: "password",
                    className: "mb-2 block text-sm font-medium text-slate-700",
                    children: "Contraseña",
                  }),
                  (0, b.jsx)("input", {
                    id: "password",
                    name: "password",
                    type: "password",
                    required: !0,
                    autoComplete: "current-password",
                    className:
                      "\n            w-full\n            rounded-xl\n            border\n            border-slate-200\n            px-4\n            py-3\n            text-base\n            outline-none\n            transition\n            focus:border-brand-500\n            focus:ring-2\n            focus:ring-brand-100\n          ",
                  }),
                ],
              }),
              a.error &&
                (0, b.jsx)("div", {
                  role: "alert",
                  className: "rounded-xl bg-red-50 p-4 text-sm text-red-700",
                  children: a.error,
                }),
              (0, b.jsx)("button", {
                type: "submit",
                disabled: g,
                className:
                  "\n          w-full\n          rounded-xl\n          bg-brand-700\n          px-6\n          py-3\n          font-semibold\n          text-white\n          transition\n          hover:bg-brand-800\n          disabled:cursor-not-allowed\n          disabled:opacity-60\n        ",
                children: g ? "Iniciando sesión..." : "Iniciar sesión",
              }),
            ],
          });
        },
      ],
      35026,
    );
  },
];

//# sourceMappingURL=_12yttfw._.js.map
