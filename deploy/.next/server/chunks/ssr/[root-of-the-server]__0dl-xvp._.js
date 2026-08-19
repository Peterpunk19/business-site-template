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
  59002,
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
                    "appointments",
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
                                (0, b.instrumentModuleGetter)(() => a.r(31992)),
                                "[project]/src/app/admin/(dashboard)/appointments/[id]/page.tsx",
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
        page: "/admin/(dashboard)/appointments/[id]/page",
        pathname: "/admin/appointments/[id]",
        require: o,
        loadChunk: p,
        interopDefault: d.interopDefault,
      }),
      r = q.__next_app__,
      s = q.routeModule,
      t = q.handler;
    (a.s(["__next_app__", 0, r, "handler", 0, t, "routeModule", 0, s], 12667), a.i(12667));
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
      59002,
    );
  },
  98102,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(7997),
          e = a.i(95936);
        a.i(70396);
        var f = a.i(73727),
          g = a.i(66253),
          h = a.i(26593),
          i = a.i(43373),
          j = a.i(39175),
          k = a.i(83286),
          l = a.i(16923),
          m = b([g, h]);
        async function n({ params: a }) {
          let { id: b } = await a,
            c = await (0, g.getAppointmentById)(b);
          c || (0, f.notFound)();
          let m = [c.status, ...i.appointmentStatusTransitions[c.status]],
            o = i.appointmentStatusTransitions[c.status].length > 0;
          return (0, d.jsx)("main", {
            className: "px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
            children: (0, d.jsxs)("div", {
              className: "mx-auto max-w-4xl",
              children: [
                (0, d.jsx)(e.default, {
                  href: "/admin/appointments",
                  className: "text-sm font-semibold text-brand-700 transition hover:text-brand-900",
                  children: "← Volver a citas",
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
                          children: c.name,
                        }),
                        (0, d.jsx)("p", {
                          className: "mt-2 text-slate-600",
                          children: "Solicitud de cita",
                        }),
                      ],
                    }),
                    (0, d.jsx)("div", {
                      className: "shrink-0",
                      children: (0, d.jsx)(j.AppointmentStatusBadge, { status: c.status }),
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
                          children: "Información de la cita",
                        }),
                        (0, d.jsxs)("dl", {
                          className: "mt-6 grid gap-6 sm:grid-cols-2",
                          children: [
                            (0, d.jsxs)("div", {
                              children: [
                                (0, d.jsx)("dt", {
                                  className: "text-sm text-slate-500",
                                  children: "Servicio",
                                }),
                                (0, d.jsx)("dd", {
                                  className: "mt-1 break-words font-semibold text-slate-950",
                                  children: (0, k.getServiceName)(c.serviceId),
                                }),
                              ],
                            }),
                            (0, d.jsxs)("div", {
                              children: [
                                (0, d.jsx)("dt", {
                                  className: "text-sm text-slate-500",
                                  children: "Fecha",
                                }),
                                (0, d.jsx)("dd", {
                                  className: "mt-1 font-semibold text-slate-950",
                                  children: (0, l.formatDateObjectForMexico)(c.preferredDate),
                                }),
                              ],
                            }),
                            (0, d.jsxs)("div", {
                              children: [
                                (0, d.jsx)("dt", {
                                  className: "text-sm text-slate-500",
                                  children: "Hora preferida",
                                }),
                                (0, d.jsx)("dd", {
                                  className: "mt-1 font-semibold text-slate-950",
                                  children: (0, l.formatTime)(c.preferredTime),
                                }),
                              ],
                            }),
                            (0, d.jsxs)("div", {
                              children: [
                                (0, d.jsx)("dt", {
                                  className: "text-sm text-slate-500",
                                  children: "Solicitud recibida",
                                }),
                                (0, d.jsx)("dd", {
                                  className: "mt-1 font-semibold text-slate-950",
                                  children: (0, l.formatDateObjectForMexico)(c.createdAt),
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.message &&
                          (0, d.jsxs)("div", {
                            className: "mt-8 border-t border-slate-100 pt-6",
                            children: [
                              (0, d.jsx)("p", {
                                className: "text-sm text-slate-500",
                                children: "Comentarios",
                              }),
                              (0, d.jsx)("p", {
                                className:
                                  "mt-2 break-words whitespace-pre-wrap leading-7 text-slate-700",
                                children: c.message,
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
                              children: "Paciente",
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
                                      children: c.name,
                                    }),
                                  ],
                                }),
                                (0, d.jsxs)("div", {
                                  children: [
                                    (0, d.jsx)("p", {
                                      className: "text-sm text-slate-500",
                                      children: "Teléfono",
                                    }),
                                    (0, d.jsx)("a", {
                                      href: `tel:${c.phone.replace(/\D/g, "")}`,
                                      className:
                                        "mt-1 block break-words font-semibold text-brand-700 transition hover:text-brand-900",
                                      children: c.phone,
                                    }),
                                  ],
                                }),
                                c.email &&
                                  (0, d.jsxs)("div", {
                                    children: [
                                      (0, d.jsx)("p", {
                                        className: "text-sm text-slate-500",
                                        children: "Correo",
                                      }),
                                      (0, d.jsx)("a", {
                                        href: `mailto:${c.email}`,
                                        className:
                                          "mt-1 block break-all font-semibold text-brand-700 transition hover:text-brand-900",
                                        children: c.email,
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
                              children: "Estado de la cita",
                            }),
                            o
                              ? (0, d.jsxs)(d.Fragment, {
                                  children: [
                                    (0, d.jsx)("p", {
                                      className: "mt-2 text-sm leading-6 text-slate-500",
                                      children:
                                        "Actualiza el estado según el seguimiento de la cita.",
                                    }),
                                    (0, d.jsxs)("form", {
                                      action: h.updateAppointmentStatus,
                                      className: "mt-5 space-y-4",
                                      children: [
                                        (0, d.jsx)("input", {
                                          type: "hidden",
                                          name: "id",
                                          value: c.id,
                                        }),
                                        (0, d.jsx)("select", {
                                          name: "status",
                                          defaultValue: c.status,
                                          className:
                                            "\n                        w-full\n                        rounded-xl\n                        border border-slate-200\n                        bg-white\n                        px-4 py-3\n                        text-base\n                        text-slate-900\n                        outline-none\n                        transition\n                        focus:border-brand-500\n                        focus:ring-2\n                        focus:ring-brand-100\n                      ",
                                          children: m.map((a) =>
                                            (0, d.jsx)(
                                              "option",
                                              { value: a, children: i.appointmentStatusLabels[a] },
                                              a,
                                            ),
                                          ),
                                        }),
                                        (0, d.jsx)("button", {
                                          type: "submit",
                                          className:
                                            "\n                        w-full\n                        rounded-xl\n                        bg-brand-700\n                        px-5 py-3\n                        font-semibold\n                        text-white\n                        transition\n                        hover:bg-brand-800\n                        focus-visible:outline-none\n                        focus-visible:ring-2\n                        focus-visible:ring-brand-600\n                        focus-visible:ring-offset-2\n                      ",
                                          children: "Guardar estado",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, d.jsxs)("div", {
                                  className: "mt-5 rounded-xl bg-slate-50 p-4",
                                  children: [
                                    (0, d.jsxs)("p", {
                                      className: "text-sm text-slate-600",
                                      children: [
                                        "Esta cita está marcada como",
                                        " ",
                                        (0, d.jsx)("strong", {
                                          className: "font-semibold text-slate-900",
                                          children: i.appointmentStatusLabels[c.status],
                                        }),
                                        ".",
                                      ],
                                    }),
                                    (0, d.jsx)("p", {
                                      className: "mt-2 text-sm text-slate-500",
                                      children: "No hay más cambios de estado disponibles.",
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
          });
        }
        (([g, h] = m.then ? (await m)() : m), a.s(["default", 0, n]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  31992,
  function (a) {
    a.n(a.i(98102));
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
  39175,
  (a) => {
    "use strict";
    var b = a.i(7997);
    let c = {
        PENDING: "Pendiente",
        CONFIRMED: "Confirmada",
        CANCELLED: "Cancelada",
        COMPLETED: "Completada",
      },
      d = {
        PENDING: "bg-amber-50 text-amber-700 ring-amber-600/20",
        CONFIRMED: "bg-blue-50 text-blue-700 ring-blue-600/20",
        CANCELLED: "bg-red-50 text-red-700 ring-red-600/20",
        COMPLETED: "bg-green-50 text-green-700 ring-green-600/20",
      };
    a.s([
      "AppointmentStatusBadge",
      0,
      function ({ status: a }) {
        return (0, b.jsx)("span", {
          className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${d[a]}`,
          children: c[a],
        });
      },
    ]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0dl-xvp._.js.map
