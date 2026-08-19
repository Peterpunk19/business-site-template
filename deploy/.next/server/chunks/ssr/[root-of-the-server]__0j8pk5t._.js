module.exports = [
  84941,
  (a, b, c) => {
    b.exports = a.x("@prisma/client-2c3a283f134fdcb6/runtime/client", () =>
      require("@prisma/client-2c3a283f134fdcb6/runtime/client"),
    );
  },
  18707,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/[externals]_@prisma_client_runtime_query_compiler_fast_bg_postgresql_mjs_0g93mc6._.js",
        ].map((b) => a.l(b)),
      ).then(() => b(7142)),
    );
  },
  80599,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/19bi_client_runtime_query_compiler_fast_bg_postgresql_wasm-base64_mjs_19w6fdh._.js",
        ].map((b) => a.l(b)),
      ).then(() => b(17734)),
    );
  },
  54799,
  (a, b, c) => {
    b.exports = a.x("crypto", () => require("crypto"));
  },
  16005,
  (a) => {
    a.v((b) =>
      Promise.all(
        ["server/chunks/ssr/[externals]_node_buffer_00a6lhv._.js"].map((b) => a.l(b)),
      ).then(() => b(51615)),
    );
  },
  50227,
  (a, b, c) => {
    b.exports = a.x("node:path", () => require("node:path"));
  },
  57764,
  (a, b, c) => {
    b.exports = a.x("node:url", () => require("node:url"));
  },
  23862,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = await a.y("pg-587764f78a6c7a9c");
        (a.n(d), c());
      } catch (a) {
        c(a);
      }
    }, !0),
  88254,
  (a) => {
    "use strict";
    a.s(["AdminMobileNavigation", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AdminMobileNavigation() from the server but AdminMobileNavigation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/admin/AdminMobileNavigation.tsx",
      "AdminMobileNavigation",
    );
  },
  18546,
  (a) => {
    "use strict";
    var b = a.i(88254);
    a.n(b);
  },
  99247,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(18546);
    a.s([
      "AdminHeader",
      0,
      function ({ userName: a }) {
        return (0, b.jsx)("header", {
          className: "sticky top-0 z-30 border-b border-slate-200 bg-white",
          children: (0, b.jsx)("div", {
            className: "flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
            children: (0, b.jsxs)("div", {
              className: "flex min-w-0 items-center gap-3",
              children: [
                (0, b.jsx)(c.AdminMobileNavigation, {}),
                (0, b.jsxs)("div", {
                  className: "min-w-0",
                  children: [
                    (0, b.jsx)("p", {
                      className: "text-xs text-slate-500 sm:text-sm",
                      children: "Panel administrativo",
                    }),
                    (0, b.jsx)("p", {
                      className: "truncate font-semibold text-slate-950",
                      children: a,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      },
    ]);
  },
  36019,
  (a) => {
    "use strict";
    a.s(["AdminSidebar", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AdminSidebar() from the server but AdminSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/admin/AdminSidebar.tsx",
      "AdminSidebar",
    );
  },
  58986,
  (a) => {
    "use strict";
    var b = a.i(36019);
    a.n(b);
  },
  5621,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(7997);
        a.i(70396);
        var e = a.i(73727),
          f = a.i(77607),
          g = a.i(99247),
          h = a.i(58986),
          i = b([f]);
        async function j({ children: a }) {
          let b = await (0, f.auth)();
          return (
            b?.user || (0, e.redirect)("/admin/login"),
            "ADMIN" !== b.user.role && (0, e.redirect)("/"),
            (0, d.jsxs)("div", {
              className: "min-h-screen bg-slate-50 lg:flex",
              children: [
                (0, d.jsx)(h.AdminSidebar, {}),
                (0, d.jsxs)("div", {
                  className: "min-w-0 flex-1 lg:min-h-screen",
                  children: [
                    (0, d.jsx)(g.AdminHeader, { userName: b.user.name }),
                    (0, d.jsx)("div", { className: "min-w-0", children: a }),
                  ],
                }),
              ],
            })
          );
        }
        (([f] = i.then ? (await i)() : i), a.s(["default", 0, j]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  37637,
  function (a) {
    a.n(a.i(5621));
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j8pk5t._.js.map
