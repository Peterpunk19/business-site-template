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
  19209,
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
                        "__PAGE__",
                        {},
                        {
                          metadata: {},
                          page: [
                            (0, b.instrumentModuleGetter)(() => a.r(16118)),
                            "[project]/src/app/admin/(dashboard)/messages/page.tsx",
                          ],
                        },
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
        page: "/admin/(dashboard)/messages/page",
        pathname: "/admin/messages",
        require: o,
        loadChunk: p,
        interopDefault: d.interopDefault,
      }),
      r = q.__next_app__,
      s = q.routeModule,
      t = q.handler;
    (a.s(["__next_app__", 0, r, "handler", 0, t, "routeModule", 0, s], 12484), a.i(12484));
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
      19209,
    );
  },
  86615,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(7997),
          e = a.i(95936);
        a.i(59281);
        var f = a.i(49618),
          g = a.i(5382),
          h = a.i(29296),
          i = a.i(73724),
          j = a.i(45380),
          k = b([g, h]);
        async function l({ searchParams: a }) {
          let b = await a,
            c = b.search?.trim() || void 0,
            k = Object.values(f.ContactMessageStatus).includes(b.status) ? b.status : void 0,
            m = await (0, h.getBusinessIdBySlug)(j.businessConfig.slug),
            n = await (0, g.getContactMessages)({ businessId: m, search: c, status: k });
          return (0, d.jsx)("main", {
            className: "px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
            children: (0, d.jsxs)("div", {
              className: "mx-auto max-w-7xl",
              children: [
                (0, d.jsxs)("div", {
                  children: [
                    (0, d.jsx)("h1", {
                      className: "text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl",
                      children: "Mensajes",
                    }),
                    (0, d.jsx)("p", {
                      className: "mt-2 text-slate-600",
                      children: "Consulta y administra los mensajes recibidos.",
                    }),
                  ],
                }),
                (0, d.jsxs)("form", {
                  method: "get",
                  className:
                    "\n            mt-6 grid gap-3\n            rounded-2xl\n            border border-slate-200\n            bg-white p-4\n            md:grid-cols-[minmax(0,1fr)_220px_auto]\n          ",
                  children: [
                    (0, d.jsx)("input", {
                      type: "search",
                      name: "search",
                      defaultValue: c,
                      placeholder: "Buscar por nombre, teléfono, correo o asunto",
                      className:
                        "\n              rounded-xl\n              border border-slate-200\n              px-4 py-3\n              text-base\n              outline-none\n              focus:border-brand-500\n              focus:ring-2\n              focus:ring-brand-100\n            ",
                    }),
                    (0, d.jsxs)("select", {
                      name: "status",
                      defaultValue: k ?? "",
                      className:
                        "\n              rounded-xl\n              border border-slate-200\n              bg-white\n              px-4 py-3\n              text-base\n              outline-none\n              focus:border-brand-500\n              focus:ring-2\n              focus:ring-brand-100\n            ",
                      children: [
                        (0, d.jsx)("option", { value: "", children: "Todos los estados" }),
                        (0, d.jsx)("option", { value: "UNREAD", children: "Nuevos" }),
                        (0, d.jsx)("option", { value: "READ", children: "Leídos" }),
                        (0, d.jsx)("option", { value: "ARCHIVED", children: "Archivados" }),
                      ],
                    }),
                    (0, d.jsx)("button", {
                      type: "submit",
                      className:
                        "\n              w-full\n              rounded-xl\n              bg-brand-700\n              px-5 py-3\n              font-semibold\n              text-white\n              transition\n              hover:bg-brand-800\n              md:w-auto\n            ",
                      children: "Filtrar",
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className:
                    "mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
                  children:
                    0 === n.length
                      ? (0, d.jsx)("p", {
                          className: "px-6 py-10 text-center text-sm text-slate-500",
                          children: "No se encontraron mensajes.",
                        })
                      : (0, d.jsxs)(d.Fragment, {
                          children: [
                            (0, d.jsx)("div", {
                              className: "divide-y divide-slate-100 md:hidden",
                              children: n.map((a) =>
                                (0, d.jsxs)(
                                  e.default,
                                  {
                                    href: `/admin/messages/${a.id}`,
                                    className: "block p-5 transition hover:bg-slate-50",
                                    children: [
                                      (0, d.jsxs)("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [
                                          (0, d.jsxs)("div", {
                                            className: "min-w-0",
                                            children: [
                                              (0, d.jsx)("p", {
                                                className: "font-semibold text-slate-950",
                                                children: a.name,
                                              }),
                                              (0, d.jsx)("p", {
                                                className: "mt-1 truncate text-sm text-slate-600",
                                                children: a.subject || "Sin asunto",
                                              }),
                                            ],
                                          }),
                                          (0, d.jsx)(i.MessageStatusBadge, { status: a.status }),
                                        ],
                                      }),
                                      (0, d.jsxs)("div", {
                                        className: "mt-4 space-y-1 text-sm text-slate-500",
                                        children: [
                                          a.phone && (0, d.jsx)("p", { children: a.phone }),
                                          a.email &&
                                            (0, d.jsx)("p", {
                                              className: "truncate",
                                              children: a.email,
                                            }),
                                        ],
                                      }),
                                      (0, d.jsx)("p", {
                                        className: "mt-4 text-sm font-semibold text-brand-700",
                                        children: "Ver detalle →",
                                      }),
                                    ],
                                  },
                                  a.id,
                                ),
                              ),
                            }),
                            (0, d.jsx)("div", {
                              className: "hidden overflow-x-auto md:block",
                              children: (0, d.jsxs)("table", {
                                className: "min-w-full divide-y divide-slate-200",
                                children: [
                                  (0, d.jsx)("thead", {
                                    className: "bg-slate-50",
                                    children: (0, d.jsxs)("tr", {
                                      children: [
                                        (0, d.jsx)("th", {
                                          className:
                                            "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                                          children: "Nombre",
                                        }),
                                        (0, d.jsx)("th", {
                                          className:
                                            "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                                          children: "Teléfono",
                                        }),
                                        (0, d.jsx)("th", {
                                          className:
                                            "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                                          children: "Asunto",
                                        }),
                                        (0, d.jsx)("th", {
                                          className:
                                            "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                                          children: "Estado",
                                        }),
                                        (0, d.jsx)("th", { className: "px-6 py-4" }),
                                      ],
                                    }),
                                  }),
                                  (0, d.jsx)("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: n.map((a) =>
                                      (0, d.jsxs)(
                                        "tr",
                                        {
                                          className: "hover:bg-slate-50",
                                          children: [
                                            (0, d.jsxs)("td", {
                                              className: "px-6 py-5",
                                              children: [
                                                (0, d.jsx)("p", {
                                                  className: "font-semibold text-slate-950",
                                                  children: a.name,
                                                }),
                                                a.email &&
                                                  (0, d.jsx)("p", {
                                                    className: "mt-1 text-sm text-slate-500",
                                                    children: a.email,
                                                  }),
                                              ],
                                            }),
                                            (0, d.jsx)("td", {
                                              className: "px-6 py-5",
                                              children: (0, d.jsx)("p", {
                                                className: "font-semibold text-slate-950",
                                                children: a.phone || "Sin teléfono",
                                              }),
                                            }),
                                            (0, d.jsx)("td", {
                                              className: "px-6 py-5",
                                              children: (0, d.jsx)("p", {
                                                className: "font-semibold text-slate-950",
                                                children: a.subject || "Sin asunto",
                                              }),
                                            }),
                                            (0, d.jsx)("td", {
                                              className: "px-6 py-5",
                                              children: (0, d.jsx)(i.MessageStatusBadge, {
                                                status: a.status,
                                              }),
                                            }),
                                            (0, d.jsx)("td", {
                                              className: "px-6 py-5 text-right",
                                              children: (0, d.jsx)(e.default, {
                                                href: `/admin/messages/${a.id}`,
                                                className:
                                                  "text-sm font-semibold text-brand-700 hover:text-brand-900",
                                                children: "Ver detalle",
                                              }),
                                            }),
                                          ],
                                        },
                                        a.id,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                }),
              ],
            }),
          });
        }
        (([g, h] = k.then ? (await k)() : k), a.s(["default", 0, l]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  16118,
  function (a) {
    a.n(a.i(86615));
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
  29296,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(66518),
          e = b([d]);
        async function f(a) {
          let b = await d.prisma.business.findUnique({ where: { slug: a }, select: { id: !0 } });
          if (!b) throw Error(`Business "${a}" could not be found.`);
          return b.id;
        }
        (([d] = e.then ? (await e)() : e), a.s(["getBusinessIdBySlug", 0, f]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  5382,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(66518),
          e = a.i(29296),
          f = b([d, e]);
        async function g({ businessSlug: a, contact: b }) {
          let c = await (0, e.getBusinessIdBySlug)(a);
          if (!c) throw Error(`Business "${a}" could not be found.`);
          return d.prisma.contactMessage.create({
            data: {
              businessId: c,
              name: b.name,
              email: b.email,
              phone: b.phone || null,
              subject: b.subject || null,
              message: b.message,
              status: "UNREAD",
            },
            select: { id: !0 },
          });
        }
        async function h({ businessId: a, search: b, status: c }) {
          return d.prisma.contactMessage.findMany({
            where: {
              businessId: a,
              ...(c && { status: c }),
              ...(b && {
                OR: [
                  { name: { contains: b, mode: "insensitive" } },
                  { phone: { contains: b } },
                  { email: { contains: b, mode: "insensitive" } },
                  { subject: { contains: b, mode: "insensitive" } },
                ],
              }),
            },
            orderBy: { createdAt: "desc" },
            select: {
              id: !0,
              name: !0,
              phone: !0,
              email: !0,
              subject: !0,
              status: !0,
              createdAt: !0,
            },
          });
        }
        async function i(a) {
          return d.prisma.contactMessage.findUnique({ where: { id: a } });
        }
        async function j(a) {
          return d.prisma.contactMessage.updateMany({
            where: { id: a, status: "UNREAD" },
            data: { status: "READ" },
          });
        }
        async function k(a, b) {
          return d.prisma.contactMessage.update({ where: { id: a }, data: { status: b } });
        }
        (([d, e] = f.then ? (await f)() : f),
          a.s([
            "getContactMessageById",
            0,
            i,
            "getContactMessages",
            0,
            h,
            "markContactMessageAsRead",
            0,
            j,
            "saveContactMessage",
            0,
            g,
            "updateContactMessageStatus",
            0,
            k,
          ]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  49618,
  (a) => {
    "use strict";
    a.s([
      "AppointmentStatus",
      0,
      {
        PENDING: "PENDING",
        CONFIRMED: "CONFIRMED",
        CANCELLED: "CANCELLED",
        COMPLETED: "COMPLETED",
      },
      "ContactMessageStatus",
      0,
      { UNREAD: "UNREAD", READ: "READ", ARCHIVED: "ARCHIVED" },
    ]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00qhoqf._.js.map
