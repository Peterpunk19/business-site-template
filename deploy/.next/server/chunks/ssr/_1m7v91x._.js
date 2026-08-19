module.exports = [
  49053,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(97235),
          e = b([d]);
        (([d] = e.then ? (await e)() : e), a.s([]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  19244,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(49053),
          e = a.i(97235),
          f = b([d, e]);
        (([d, e] = f.then ? (await f)() : f),
          a.s(["0085bbba4cb325987436193e393e07cc14a6337dde", () => e.logout]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  13095,
  (a, b, c) => {
    "use strict";
    function d(a) {
      for (let b = 0; b < a.length; b++) {
        let c = a[b];
        if ("function" != typeof c)
          throw Object.defineProperty(
            Error(`A "use server" file can only export async functions, found ${typeof c}.
Read more: https://nextjs.org/docs/messages/invalid-use-server-value`),
            "__NEXT_ERROR_CODE",
            { value: "E352", enumerable: !1, configurable: !0 },
          );
      }
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "ensureServerEntryExports", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  37936,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "registerServerReference", {
        enumerable: !0,
        get: function () {
          return d.registerServerReference;
        },
      }));
    let d = a.r(11857);
  },
  97235,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(37936),
          e = a.i(77607),
          f = a.i(13095),
          g = b([e]);
        async function h() {
          await (0, e.signOut)({ redirectTo: "/admin/login" });
        }
        (([e] = g.then ? (await g)() : g),
          (0, f.ensureServerEntryExports)([h]),
          (0, d.registerServerReference)(h, "0085bbba4cb325987436193e393e07cc14a6337dde", null),
          a.s(["logout", 0, h]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
];

//# sourceMappingURL=_1m7v91x._.js.map
