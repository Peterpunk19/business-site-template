module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  71029,
  (a, b, c) => {
    "use strict";
    c._ = function (a) {
      return a && a.__esModule ? a : { default: a };
    };
  },
  64240,
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
  84707,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(11857);
    a.n(d("[project]/node_modules/next/dist/client/app-dir/link.js"));
  },
  97647,
  (a) => {
    "use strict";
    var b = a.i(84707);
    a.n(b);
  },
  95936,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return i;
      },
      useLinkStatus: function () {
        return h.useLinkStatus;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(64240),
      g = a.r(7997),
      h = f._(a.r(97647));
    function i(a) {
      let b = a.legacyBehavior,
        c =
          "string" == typeof a.children ||
          "number" == typeof a.children ||
          "string" == typeof a.children?.type,
        d = a.children?.type?.$$typeof === Symbol.for("react.client.reference");
      return (
        !b ||
          c ||
          d ||
          (a.children?.type?.$$typeof === Symbol.for("react.lazy")
            ? console.error(
                "Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag.",
              )
            : console.error(
                "Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.",
              )),
        (0, g.jsx)(h.default, { ...a })
      );
    }
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  94701,
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
      m = (0, b.instrumentModuleGetter)(() => a.r(13953)),
      n = (0, b.instrumentModuleGetter)(() => a.r(57591)),
      o = [
        "",
        {
          children: [
            "__PAGE__",
            {},
            {
              metadata: {
                twitter: [
                  async () => {
                    let a = (0, d.interopDefault)(await m());
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
                    let a = (0, d.interopDefault)(await n());
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
              page: [(0, b.instrumentModuleGetter)(() => a.r(28004)), "[project]/src/app/page.tsx"],
            },
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
      p = a.r.bind(a),
      q = a.l.bind(a),
      r = (0, c.createAppPageEntrypoint)({
        tree: o,
        page: "/page",
        pathname: "/",
        require: p,
        loadChunk: q,
        interopDefault: d.interopDefault,
      }),
      s = r.__next_app__,
      t = r.routeModule,
      u = r.handler;
    (a.s(["__next_app__", 0, s, "handler", 0, u, "routeModule", 0, t], 34183), a.i(34183));
    var v = a.i(22922);
    a.s(
      [
        "ClientPageRoot",
        () => v.ClientPageRoot,
        "ClientSegmentRoot",
        () => v.ClientSegmentRoot,
        "Fragment",
        () => v.Fragment,
        "HTTPAccessFallbackBoundary",
        () => v.HTTPAccessFallbackBoundary,
        "InstantValidation",
        () => v.InstantValidation,
        "LayoutRouter",
        () => v.LayoutRouter,
        "LoadingBoundaryProvider",
        () => v.LoadingBoundaryProvider,
        "Postpone",
        () => v.Postpone,
        "RenderFromTemplateContext",
        () => v.RenderFromTemplateContext,
        "RootLayoutBoundary",
        () => v.RootLayoutBoundary,
        "SegmentViewNode",
        () => v.SegmentViewNode,
        "SegmentViewStateNode",
        () => v.SegmentViewStateNode,
        "__next_app__",
        0,
        s,
        "captureOwnerStack",
        () => v.captureOwnerStack,
        "collectPrefetchHints",
        () => v.collectPrefetchHints,
        "collectSegmentData",
        () => v.collectSegmentData,
        "createElement",
        () => v.createElement,
        "createMetadataComponents",
        () => v.createMetadataComponents,
        "createPrerenderParamsForClientSegment",
        () => v.createPrerenderParamsForClientSegment,
        "createPrerenderSearchParamsForClientPage",
        () => v.createPrerenderSearchParamsForClientPage,
        "createServerParamsForServerSegment",
        () => v.createServerParamsForServerSegment,
        "createServerSearchParamsForServerPage",
        () => v.createServerSearchParamsForServerPage,
        "createTemporaryReferenceSet",
        () => v.createTemporaryReferenceSet,
        "decodeAction",
        () => v.decodeAction,
        "decodeFormState",
        () => v.decodeFormState,
        "decodeReply",
        () => v.decodeReply,
        "handler",
        0,
        u,
        "isEmptyHTMLPrelude",
        () => v.isEmptyHTMLPrelude,
        "patchFetch",
        () => v.patchFetch,
        "preconnect",
        () => v.preconnect,
        "preloadFont",
        () => v.preloadFont,
        "preloadStyle",
        () => v.preloadStyle,
        "prerender",
        () => v.prerender,
        "prerenderToNodeStream",
        () => v.prerenderToNodeStream,
        "renderToPipeableStream",
        () => v.renderToPipeableStream,
        "renderToReadableStream",
        () => v.renderToReadableStream,
        "routeModule",
        0,
        t,
        "serverHooks",
        () => v.serverHooks,
        "taintObjectReference",
        () => v.taintObjectReference,
      ],
      94701,
    );
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kau6lw._.js.map
