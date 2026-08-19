module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  4920,
  (a) => {
    "use strict";
    var b = a.i(12948),
      c = a.i(67436),
      d = a.i(94331);
    a.i(70408);
    let e = (0, b.instrumentModuleGetter)(() => a.r(68611)),
      f = (0, b.instrumentModuleGetter)(() => a.r(13953)),
      g = (0, b.instrumentModuleGetter)(() => a.r(57591)),
      h = (0, b.instrumentModuleGetter)(() => a.r(50645)),
      i = (0, b.instrumentModuleGetter)(() => a.r(43619)),
      j = (0, b.instrumentModuleGetter)(() => a.r(13718)),
      k = (0, b.instrumentModuleGetter)(() => a.r(18198)),
      l = (0, b.instrumentModuleGetter)(() => a.r(62212)),
      m = [
        "",
        {
          children: [
            "admin",
            {
              children: [
                "(auth)",
                {
                  children: [
                    "login",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          metadata: {},
                          page: [
                            (0, b.instrumentModuleGetter)(() => a.r(48088)),
                            "[project]/src/app/admin/(auth)/login/page.tsx",
                          ],
                        },
                        [],
                      ],
                    },
                    { metadata: {} },
                    [],
                  ],
                },
                { metadata: {} },
                [],
              ],
            },
            { metadata: {} },
            [],
          ],
        },
        {
          metadata: {
            icon: [
              async () => {
                let a = (0, d.interopDefault)(await e());
                return [
                  {
                    url: `/favicon.ico?${a.src.split("/").splice(-1)[0]}`,
                    sizes: `${a.width}x${a.height}`,
                    type: "image/x-icon",
                  },
                ];
              },
            ],
            twitter: [
              async () => {
                let a = (0, d.interopDefault)(await f());
                return [
                  {
                    url: `/twitter-image.jpg?${a.src.split("/").splice(-1)[0]}`,
                    width: a.width,
                    height: a.height,
                    type: "image/jpeg",
                  },
                ];
              },
            ],
            openGraph: [
              async () => {
                let a = (0, d.interopDefault)(await g());
                return [
                  {
                    url: `/opengraph-image.jpg?${a.src.split("/").splice(-1)[0]}`,
                    width: a.width,
                    height: a.height,
                    type: "image/jpeg",
                  },
                ];
              },
            ],
          },
          layout: [h, "[project]/src/app/layout.tsx"],
          "not-found": [
            i,
            "[project]/node_modules/next/dist/client/components/builtin/not-found.js",
          ],
          forbidden: [j, "[project]/node_modules/next/dist/client/components/builtin/forbidden.js"],
          unauthorized: [
            k,
            "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js",
          ],
          "global-error": [
            l,
            "[project]/node_modules/next/dist/client/components/builtin/global-error.js",
          ],
        },
        [],
      ],
      n = a.r.bind(a),
      o = a.l.bind(a),
      p = (0, c.createAppPageEntrypoint)({
        tree: m,
        page: "/admin/(auth)/login/page",
        pathname: "/admin/login",
        require: n,
        loadChunk: o,
        interopDefault: d.interopDefault,
      }),
      q = p.__next_app__,
      r = p.routeModule,
      s = p.handler;
    (a.s(["__next_app__", 0, q, "handler", 0, s, "routeModule", 0, r], 97924), a.i(97924));
    var t = a.i(22922);
    a.s(
      [
        "ClientPageRoot",
        () => t.ClientPageRoot,
        "ClientSegmentRoot",
        () => t.ClientSegmentRoot,
        "Fragment",
        () => t.Fragment,
        "HTTPAccessFallbackBoundary",
        () => t.HTTPAccessFallbackBoundary,
        "InstantValidation",
        () => t.InstantValidation,
        "LayoutRouter",
        () => t.LayoutRouter,
        "LoadingBoundaryProvider",
        () => t.LoadingBoundaryProvider,
        "Postpone",
        () => t.Postpone,
        "RenderFromTemplateContext",
        () => t.RenderFromTemplateContext,
        "RootLayoutBoundary",
        () => t.RootLayoutBoundary,
        "SegmentViewNode",
        () => t.SegmentViewNode,
        "SegmentViewStateNode",
        () => t.SegmentViewStateNode,
        "__next_app__",
        0,
        q,
        "captureOwnerStack",
        () => t.captureOwnerStack,
        "collectPrefetchHints",
        () => t.collectPrefetchHints,
        "collectSegmentData",
        () => t.collectSegmentData,
        "createElement",
        () => t.createElement,
        "createMetadataComponents",
        () => t.createMetadataComponents,
        "createPrerenderParamsForClientSegment",
        () => t.createPrerenderParamsForClientSegment,
        "createPrerenderSearchParamsForClientPage",
        () => t.createPrerenderSearchParamsForClientPage,
        "createServerParamsForServerSegment",
        () => t.createServerParamsForServerSegment,
        "createServerSearchParamsForServerPage",
        () => t.createServerSearchParamsForServerPage,
        "createTemporaryReferenceSet",
        () => t.createTemporaryReferenceSet,
        "decodeAction",
        () => t.decodeAction,
        "decodeFormState",
        () => t.decodeFormState,
        "decodeReply",
        () => t.decodeReply,
        "handler",
        0,
        s,
        "isEmptyHTMLPrelude",
        () => t.isEmptyHTMLPrelude,
        "patchFetch",
        () => t.patchFetch,
        "preconnect",
        () => t.preconnect,
        "preloadFont",
        () => t.preloadFont,
        "preloadStyle",
        () => t.preloadStyle,
        "prerender",
        () => t.prerender,
        "prerenderToNodeStream",
        () => t.prerenderToNodeStream,
        "renderToPipeableStream",
        () => t.renderToPipeableStream,
        "renderToReadableStream",
        () => t.renderToReadableStream,
        "routeModule",
        0,
        r,
        "serverHooks",
        () => t.serverHooks,
        "taintObjectReference",
        () => t.taintObjectReference,
      ],
      4920,
    );
  },
  13341,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(7997);
        a.i(70396);
        var e = a.i(73727),
          f = a.i(77607),
          g = a.i(90715),
          h = a.i(45380),
          i = b([f]);
        async function j() {
          let a = await (0, f.auth)();
          return (
            a?.user && (0, e.redirect)("/admin"),
            (0, d.jsx)("main", {
              className: "flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12",
              children: (0, d.jsx)("div", {
                className: "w-full max-w-md",
                children: (0, d.jsxs)("div", {
                  className: "rounded-3xl bg-white p-8 shadow-sm",
                  children: [
                    (0, d.jsxs)("div", {
                      className: "mb-8 text-center",
                      children: [
                        (0, d.jsx)("p", {
                          className:
                            "text-sm font-semibold uppercase tracking-wider text-brand-700",
                          children: "Administración",
                        }),
                        (0, d.jsx)("h1", {
                          className: "mt-3 text-2xl font-bold text-slate-950",
                          children: h.businessConfig.name,
                        }),
                        (0, d.jsx)("p", {
                          className: "mt-2 text-sm text-slate-500",
                          children: "Inicia sesión para administrar citas y mensajes.",
                        }),
                      ],
                    }),
                    (0, d.jsx)(g.LoginForm, {}),
                  ],
                }),
              }),
            })
          );
        }
        (([f] = i.then ? (await i)() : i), a.s(["default", 0, j]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  48088,
  function (a) {
    a.n(a.i(13341));
  },
  10585,
  (a) => {
    a.v(
      "/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis.NEXT_CLIENT_ASSET_SUFFIX || ""),
    );
  },
  68611,
  (a) => {
    "use strict";
    let b = { src: a.i(10585).default, width: 256, height: 256 };
    a.s(["default", 0, b]);
  },
  74258,
  (a) => {
    a.v(
      "/_next/static/media/opengraph-image.1awujl2oj6fti.jpg" +
        (globalThis.NEXT_CLIENT_ASSET_SUFFIX || ""),
    );
  },
  57591,
  (a) => {
    "use strict";
    let b = { src: a.i(74258).default, width: 1100, height: 624 };
    a.s(["default", 0, b]);
  },
  67116,
  (a) => {
    a.v(
      "/_next/static/media/twitter-image.1awujl2oj6fti.jpg" +
        (globalThis.NEXT_CLIENT_ASSET_SUFFIX || ""),
    );
  },
  13953,
  (a) => {
    "use strict";
    let b = { src: a.i(67116).default, width: 1100, height: 624 };
    a.s(["default", 0, b]);
  },
  18872,
  (a) => {
    "use strict";
    a.s(["LoginForm", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call LoginForm() from the server but LoginForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/features/auth/components/LoginForm.tsx",
      "LoginForm",
    );
  },
  90715,
  (a) => {
    "use strict";
    var b = a.i(18872);
    a.n(b);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1mcx2pu._.js.map
