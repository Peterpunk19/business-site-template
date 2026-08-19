(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  95187,
  (e, r, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var t = {
      callServer: function () {
        return a.callServer;
      },
      createServerReference: function () {
        return l.createServerReference;
      },
      findSourceMapURL: function () {
        return s.findSourceMapURL;
      },
    };
    for (var o in t) Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    let a = e.r(32120),
      s = e.r(92245),
      l = e.r(35326);
  },
  93403,
  (e) => {
    "use strict";
    var r = e.i(43476),
      n = e.i(71645),
      t = e.i(95187);
    let o = (0, t.createServerReference)(
        "6042fea897fbb0ddd7eaf6ad6b47c357b55b703422",
        t.callServer,
        void 0,
        t.findSourceMapURL,
        "login",
      ),
      a = {};
    e.s(
      [
        "LoginForm",
        0,
        function () {
          let [e, t, s] = (0, n.useActionState)(o, a);
          return (0, r.jsxs)("form", {
            action: t,
            className: "space-y-5",
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("label", {
                    htmlFor: "email",
                    className: "mb-2 block text-sm font-medium text-slate-700",
                    children: "Correo electrónico",
                  }),
                  (0, r.jsx)("input", {
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
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("label", {
                    htmlFor: "password",
                    className: "mb-2 block text-sm font-medium text-slate-700",
                    children: "Contraseña",
                  }),
                  (0, r.jsx)("input", {
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
              e.error &&
                (0, r.jsx)("div", {
                  role: "alert",
                  className: "rounded-xl bg-red-50 p-4 text-sm text-red-700",
                  children: e.error,
                }),
              (0, r.jsx)("button", {
                type: "submit",
                disabled: s,
                className:
                  "\n          w-full\n          rounded-xl\n          bg-brand-700\n          px-6\n          py-3\n          font-semibold\n          text-white\n          transition\n          hover:bg-brand-800\n          disabled:cursor-not-allowed\n          disabled:opacity-60\n        ",
                children: s ? "Iniciando sesión..." : "Iniciar sesión",
              }),
            ],
          });
        },
      ],
      93403,
    );
  },
]);
