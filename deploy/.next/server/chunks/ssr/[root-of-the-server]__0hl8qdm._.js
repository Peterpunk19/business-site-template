module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
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
  26090,
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
      m = (0, b.instrumentModuleGetter)(() => a.r(37637)),
      n = [
        "",
        {
          children: [
            "admin",
            {
              children: [
                "(dashboard)",
                {
                  children: [
                    "messages",
                    {
                      children: [
                        "[id]",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              metadata: {},
                              page: [
                                (0, b.instrumentModuleGetter)(() => a.r(29004)),
                                "[project]/src/app/admin/(dashboard)/messages/[id]/page.tsx",
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
                { metadata: {}, layout: [m, "[project]/src/app/admin/(dashboard)/layout.tsx"] },
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
      o = a.r.bind(a),
      p = a.l.bind(a),
      q = (0, c.createAppPageEntrypoint)({
        tree: n,
        page: "/admin/(dashboard)/messages/[id]/page",
        pathname: "/admin/messages/[id]",
        require: o,
        loadChunk: p,
        interopDefault: d.interopDefault,
      }),
      r = q.__next_app__,
      s = q.routeModule,
      t = q.handler;
    (a.s(["__next_app__", 0, r, "handler", 0, t, "routeModule", 0, s], 6934), a.i(6934));
    var u = a.i(22922);
    a.s(
      [
        "ClientPageRoot",
        () => u.ClientPageRoot,
        "ClientSegmentRoot",
        () => u.ClientSegmentRoot,
        "Fragment",
        () => u.Fragment,
        "HTTPAccessFallbackBoundary",
        () => u.HTTPAccessFallbackBoundary,
        "InstantValidation",
        () => u.InstantValidation,
        "LayoutRouter",
        () => u.LayoutRouter,
        "LoadingBoundaryProvider",
        () => u.LoadingBoundaryProvider,
        "Postpone",
        () => u.Postpone,
        "RenderFromTemplateContext",
        () => u.RenderFromTemplateContext,
        "RootLayoutBoundary",
        () => u.RootLayoutBoundary,
        "SegmentViewNode",
        () => u.SegmentViewNode,
        "SegmentViewStateNode",
        () => u.SegmentViewStateNode,
        "__next_app__",
        0,
        r,
        "captureOwnerStack",
        () => u.captureOwnerStack,
        "collectPrefetchHints",
        () => u.collectPrefetchHints,
        "collectSegmentData",
        () => u.collectSegmentData,
        "createElement",
        () => u.createElement,
        "createMetadataComponents",
        () => u.createMetadataComponents,
        "createPrerenderParamsForClientSegment",
        () => u.createPrerenderParamsForClientSegment,
        "createPrerenderSearchParamsForClientPage",
        () => u.createPrerenderSearchParamsForClientPage,
        "createServerParamsForServerSegment",
        () => u.createServerParamsForServerSegment,
        "createServerSearchParamsForServerPage",
        () => u.createServerSearchParamsForServerPage,
        "createTemporaryReferenceSet",
        () => u.createTemporaryReferenceSet,
        "decodeAction",
        () => u.decodeAction,
        "decodeFormState",
        () => u.decodeFormState,
        "decodeReply",
        () => u.decodeReply,
        "handler",
        0,
        t,
        "isEmptyHTMLPrelude",
        () => u.isEmptyHTMLPrelude,
        "patchFetch",
        () => u.patchFetch,
        "preconnect",
        () => u.preconnect,
        "preloadFont",
        () => u.preloadFont,
        "preloadStyle",
        () => u.preloadStyle,
        "prerender",
        () => u.prerender,
        "prerenderToNodeStream",
        () => u.prerenderToNodeStream,
        "renderToPipeableStream",
        () => u.renderToPipeableStream,
        "renderToReadableStream",
        () => u.renderToReadableStream,
        "routeModule",
        0,
        s,
        "serverHooks",
        () => u.serverHooks,
        "taintObjectReference",
        () => u.taintObjectReference,
      ],
      26090,
    );
  },
  99895,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(7997),
          e = a.i(95936);
        a.i(70396);
        var f = a.i(73727),
          g = a.i(5382),
          h = a.i(96203),
          i = a.i(73724),
          j = a.i(16923),
          k = b([g, h]);
        async function l({ params: a }) {
          let { id: b } = await a,
            c = await (0, g.getContactMessageById)(b);
          c || (0, f.notFound)();
          let k = c;
          return (
            "UNREAD" === c.status &&
              (await (0, g.markContactMessageAsRead)(b), (k = { ...c, status: "READ" })),
            (0, d.jsx)("main", {
              className: "px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
              children: (0, d.jsxs)("div", {
                className: "mx-auto max-w-4xl",
                children: [
                  (0, d.jsx)(e.default, {
                    href: "/admin/messages",
                    className:
                      "text-sm font-semibold text-brand-700 transition hover:text-brand-900",
                    children: "← Volver a mensajes",
                  }),
                  (0, d.jsxs)("div", {
                    className:
                      "mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
                    children: [
                      (0, d.jsxs)("div", {
                        className: "min-w-0",
                        children: [
                          (0, d.jsx)("h1", {
                            className:
                              "break-words text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl",
                            children: k.subject || "Sin asunto",
                          }),
                          (0, d.jsxs)("p", {
                            className: "mt-2 text-slate-600",
                            children: ["Mensaje de ", k.name],
                          }),
                        ],
                      }),
                      (0, d.jsx)("div", {
                        className: "shrink-0",
                        children: (0, d.jsx)(i.MessageStatusBadge, { status: k.status }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: "mt-6 grid gap-5 lg:mt-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-6",
                    children: [
                      (0, d.jsxs)("section", {
                        className:
                          "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
                        children: [
                          (0, d.jsx)("h2", {
                            className: "font-bold text-slate-950",
                            children: "Información del mensaje",
                          }),
                          (0, d.jsx)("dl", {
                            className: "mt-6",
                            children: (0, d.jsxs)("div", {
                              children: [
                                (0, d.jsx)("dt", {
                                  className: "text-sm text-slate-500",
                                  children: "Mensaje recibido",
                                }),
                                (0, d.jsx)("dd", {
                                  className: "mt-1 font-semibold text-slate-950",
                                  children: (0, j.formatDateObjectForMexico)(k.createdAt),
                                }),
                              ],
                            }),
                          }),
                          (0, d.jsxs)("div", {
                            className: "mt-8 border-t border-slate-100 pt-6",
                            children: [
                              (0, d.jsx)("p", {
                                className: "text-sm text-slate-500",
                                children: "Mensaje",
                              }),
                              (0, d.jsx)("p", {
                                className:
                                  "mt-2 break-words whitespace-pre-wrap leading-7 text-slate-700",
                                children: k.message,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: "space-y-5 lg:space-y-6",
                        children: [
                          (0, d.jsxs)("section", {
                            className:
                              "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
                            children: [
                              (0, d.jsx)("h2", {
                                className: "font-bold text-slate-950",
                                children: "Datos de contacto",
                              }),
                              (0, d.jsxs)("div", {
                                className: "mt-5 space-y-4",
                                children: [
                                  (0, d.jsxs)("div", {
                                    children: [
                                      (0, d.jsx)("p", {
                                        className: "text-sm text-slate-500",
                                        children: "Nombre",
                                      }),
                                      (0, d.jsx)("p", {
                                        className: "mt-1 break-words font-semibold text-slate-950",
                                        children: k.name,
                                      }),
                                    ],
                                  }),
                                  k.phone &&
                                    (0, d.jsxs)("div", {
                                      children: [
                                        (0, d.jsx)("p", {
                                          className: "text-sm text-slate-500",
                                          children: "Teléfono",
                                        }),
                                        (0, d.jsx)("a", {
                                          href: `tel:${k.phone.replace(/\D/g, "")}`,
                                          className:
                                            "mt-1 block break-words font-semibold text-brand-700 transition hover:text-brand-900",
                                          children: k.phone,
                                        }),
                                      ],
                                    }),
                                  k.email &&
                                    (0, d.jsxs)("div", {
                                      children: [
                                        (0, d.jsx)("p", {
                                          className: "text-sm text-slate-500",
                                          children: "Correo",
                                        }),
                                        (0, d.jsx)("a", {
                                          href: `mailto:${k.email}`,
                                          className:
                                            "mt-1 block break-all font-semibold text-brand-700 transition hover:text-brand-900",
                                          children: k.email,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("section", {
                            className:
                              "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
                            children: [
                              (0, d.jsx)("h2", {
                                className: "font-bold text-slate-950",
                                children: "Acciones",
                              }),
                              (0, d.jsx)("p", {
                                className: "mt-2 text-sm leading-6 text-slate-500",
                                children:
                                  "ARCHIVED" === k.status
                                    ? "Restaura el mensaje si necesitas volver a trabajar con él."
                                    : "Archiva el mensaje cuando ya no necesites tenerlo entre los mensajes activos.",
                              }),
                              "ARCHIVED" === k.status
                                ? (0, d.jsxs)("form", {
                                    action: h.changeContactMessageStatus,
                                    className: "mt-5",
                                    children: [
                                      (0, d.jsx)("input", {
                                        type: "hidden",
                                        name: "id",
                                        value: k.id,
                                      }),
                                      (0, d.jsx)("input", {
                                        type: "hidden",
                                        name: "status",
                                        value: "READ",
                                      }),
                                      (0, d.jsx)("button", {
                                        type: "submit",
                                        className:
                                          "w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50",
                                        children: "Restaurar mensaje",
                                      }),
                                    ],
                                  })
                                : (0, d.jsxs)("form", {
                                    action: h.changeContactMessageStatus,
                                    className: "mt-5",
                                    children: [
                                      (0, d.jsx)("input", {
                                        type: "hidden",
                                        name: "id",
                                        value: k.id,
                                      }),
                                      (0, d.jsx)("input", {
                                        type: "hidden",
                                        name: "status",
                                        value: "ARCHIVED",
                                      }),
                                      (0, d.jsx)("button", {
                                        type: "submit",
                                        className:
                                          "w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50",
                                        children: "Archivar mensaje",
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        (([g, h] = k.then ? (await k)() : k), a.s(["default", 0, l]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  29004,
  function (a) {
    a.n(a.i(99895));
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
  73724,
  (a) => {
    "use strict";
    var b = a.i(7997);
    let c = { UNREAD: "Nuevo", READ: "Leído", ARCHIVED: "Archivado" },
      d = {
        UNREAD: "bg-brand-50 text-brand-700 ring-brand-600/20",
        READ: "bg-slate-100 text-slate-700 ring-slate-500/20",
        ARCHIVED: "bg-slate-50 text-slate-500 ring-slate-400/20",
      };
    a.s([
      "MessageStatusBadge",
      0,
      function ({ status: a }) {
        return (0, b.jsx)("span", {
          className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${d[a]}`,
          children: c[a],
        });
      },
    ]);
  },
  16923,
  (a) => {
    "use strict";
    function b(a = new Date()) {
      let c = new Intl.DateTimeFormat("en-CA", {
          timeZone: "America/Mexico_City",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).formatToParts(a),
        d = c.find((a) => "year" === a.type)?.value,
        e = c.find((a) => "month" === a.type)?.value,
        f = c.find((a) => "day" === a.type)?.value;
      return `${d}-${e}-${f}`;
    }
    a.s([
      "formatDateForMexico",
      0,
      function (a) {
        let b = new Date(`${a}T12:00:00`);
        return new Intl.DateTimeFormat("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(b);
      },
      "formatDateObjectForMexico",
      0,
      function (a) {
        return new Intl.DateTimeFormat("es-MX", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(a);
      },
      "formatTime",
      0,
      function (a) {
        let [b, c] = a.split(":").map(Number),
          d = new Date();
        return (
          d.setHours(b, c, 0, 0),
          new Intl.DateTimeFormat("es-MX", {
            hour: "numeric",
            minute: "2-digit",
            hour12: !0,
          }).format(d)
        );
      },
      "getAppointmentDateRange",
      0,
      function () {
        let a = new Date(),
          c = b(a),
          d = new Date(a);
        return (d.setDate(d.getDate() + 90), { minDate: c, maxDate: b(d) });
      },
      "isAppointmentDateAllowed",
      0,
      function (a) {
        let b = new Date(`${a}T00:00:00`);
        if (Number.isNaN(b.getTime())) return !1;
        let c = new Date();
        c.setHours(0, 0, 0, 0);
        let d = new Date(c);
        return (d.setDate(d.getDate() + 90), b >= c && b <= d);
      },
    ]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hl8qdm._.js.map
