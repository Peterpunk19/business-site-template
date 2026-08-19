module.exports = [
  70406,
  (e, t, r) => {
    t.exports = e.x("next/dist/compiled/@opentelemetry/api", () =>
      require("next/dist/compiled/@opentelemetry/api"),
    );
  },
  18622,
  (e, t, r) => {
    t.exports = e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js", () =>
      require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  20635,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/action-async-storage.external.js", () =>
      require("next/dist/server/app-render/action-async-storage.external.js"),
    );
  },
  24725,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/after-task-async-storage.external.js", () =>
      require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  56704,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/work-async-storage.external.js", () =>
      require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  32319,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/app-render/work-unit-async-storage.external.js", () =>
      require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  59043,
  (e, t, r) => {
    t.exports = e.x("next/dist/server/runtime-reacts.external.js", () =>
      require("next/dist/server/runtime-reacts.external.js"),
    );
  },
  93695,
  (e, t, r) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  81111,
  (e, t, r) => {
    t.exports = e.x("node:stream", () => require("node:stream"));
  },
  70943,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      getOrigin: function () {
        return s;
      },
      resolveArray: function () {
        return i;
      },
      resolveAsArrayOrUndefined: function () {
        return n;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    function i(e) {
      return Array.isArray(e) ? e : [e];
    }
    function n(e) {
      if (null != e) return i(e);
    }
    function s(e) {
      let t;
      if ("string" == typeof e)
        try {
          t = (e = new URL(e)).origin;
        } catch {}
      return t;
    }
  },
  73853,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      resolveManifest: function () {
        return l;
      },
      resolveRobots: function () {
        return n;
      },
      resolveRouteData: function () {
        return d;
      },
      resolveSitemap: function () {
        return s;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    let i = e.r(70943);
    function n(e) {
      let t = "";
      for (let r of Array.isArray(e.rules) ? e.rules : [e.rules]) {
        for (let e of (0, i.resolveArray)(r.userAgent || ["*"]))
          t += `User-Agent: ${e}
`;
        if (r.allow)
          for (let e of (0, i.resolveArray)(r.allow))
            t += `Allow: ${e}
`;
        if (r.disallow)
          for (let e of (0, i.resolveArray)(r.disallow))
            t += `Disallow: ${e}
`;
        if (
          (r.crawlDelay &&
            (t += `Crawl-delay: ${r.crawlDelay}
`),
          r.other)
        )
          for (let e of Object.keys(r.other)) {
            let a = r.other[e];
            if (null != a)
              for (let r of Array.isArray(a) ? a : [a])
                t += `${e}: ${r}
`;
          }
        t += "\n";
      }
      return (
        e.host &&
          (t += `Host: ${e.host}
`),
        e.sitemap &&
          (0, i.resolveArray)(e.sitemap).forEach((e) => {
            t += `Sitemap: ${e}
`;
          }),
        t
      );
    }
    function s(e) {
      let t = e.some((e) => Object.keys(e.alternates ?? {}).length > 0),
        r = e.some((e) => {
          var t;
          return !!(null == (t = e.images) ? void 0 : t.length);
        }),
        a = e.some((e) => {
          var t;
          return !!(null == (t = e.videos) ? void 0 : t.length);
        }),
        o = "";
      for (let l of ((o += '<?xml version="1.0" encoding="UTF-8"?>\n'),
      (o += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'),
      r && (o += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),
      a && (o += ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),
      t ? (o += ' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n') : (o += ">\n"),
      e)) {
        var i, n, s;
        ((o += "<url>\n"),
          (o += `<loc>${l.url}</loc>
`));
        let e = null == (i = l.alternates) ? void 0 : i.languages;
        if (e && Object.keys(e).length)
          for (let t in e)
            o += `<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;
        if (null == (n = l.images) ? void 0 : n.length)
          for (let e of l.images)
            o += `<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;
        if (null == (s = l.videos) ? void 0 : s.length)
          for (let e of l.videos)
            o += [
              "<video:video>",
              `<video:title>${e.title}</video:title>`,
              `<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,
              `<video:description>${e.description}</video:description>`,
              e.content_loc && `<video:content_loc>${e.content_loc}</video:content_loc>`,
              e.player_loc && `<video:player_loc>${e.player_loc}</video:player_loc>`,
              e.duration && `<video:duration>${e.duration}</video:duration>`,
              e.view_count && `<video:view_count>${e.view_count}</video:view_count>`,
              e.tag && `<video:tag>${e.tag}</video:tag>`,
              e.rating && `<video:rating>${e.rating}</video:rating>`,
              e.expiration_date &&
                `<video:expiration_date>${e.expiration_date}</video:expiration_date>`,
              e.publication_date &&
                `<video:publication_date>${e.publication_date}</video:publication_date>`,
              e.family_friendly &&
                `<video:family_friendly>${e.family_friendly}</video:family_friendly>`,
              e.requires_subscription &&
                `<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,
              e.live && `<video:live>${e.live}</video:live>`,
              e.restriction &&
                `<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,
              e.platform &&
                `<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,
              e.uploader &&
                `<video:uploader${e.uploader.info && ` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,
              `</video:video>
`,
            ]
              .filter(Boolean)
              .join("\n");
        if (l.lastModified) {
          let e = l.lastModified instanceof Date ? l.lastModified.toISOString() : l.lastModified;
          o += `<lastmod>${e}</lastmod>
`;
        }
        (l.changeFrequency &&
          (o += `<changefreq>${l.changeFrequency}</changefreq>
`),
          "number" == typeof l.priority &&
            (o += `<priority>${l.priority}</priority>
`),
          (o += "</url>\n"));
      }
      return o + "</urlset>\n";
    }
    function l(e) {
      return JSON.stringify(e);
    }
    function d(e, t) {
      return "robots" === t ? n(e) : "sitemap" === t ? s(e) : "manifest" === t ? l(e) : "";
    }
  },
  38613,
  (e) => {
    "use strict";
    var t = e.i(89171),
      r = e.i(64043);
    function a() {
      return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${r.businessConfig.url}/sitemap.xml`,
      };
    }
    e.s(["default", 0, a], 39621);
    var o = e.i(73853);
    async function i() {
      let e = await a(),
        r = (0, o.resolveRouteData)(e, "robots");
      return new t.NextResponse(r, {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    }
    (e.s(["GET", 0, i], 48737), e.i(48737), e.i(39621), e.s(["GET", 0, i], 38613));
  },
  77067,
  (e) => {
    "use strict";
    var t = e.i(47909),
      r = e.i(74017),
      a = e.i(96250),
      o = e.i(59756),
      i = e.i(61916),
      n = e.i(74677),
      s = e.i(69741),
      l = e.i(16795),
      d = e.i(87718),
      u = e.i(95169),
      c = e.i(47587),
      p = e.i(66012),
      m = e.i(70101),
      v = e.i(26937),
      g = e.i(10372),
      f = e.i(93695);
    e.i(52474);
    var h = e.i(220);
    let x = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/robots.txt/route",
          pathname: "/robots.txt",
          filename: "robots--route-entry",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/robots--route-entry.js",
        nextConfigOutput: "standalone",
        userland: () => e.r(38613),
        ...{},
      }),
      { workAsyncStorage: y, workUnitAsyncStorage: w, serverHooks: b } = x;
    async function R(e, t, a) {
      (a.requestMeta && (0, o.setRequestMeta)(e, a.requestMeta),
        x.isDev &&
          (0, o.addRequestMeta)(e, "devRequestTimingInternalsEnd", process.hrtime.bigint()));
      let y = "/robots.txt/route";
      y = y.replace(/\/index$/, "") || "/";
      let w = await x.prepare(e, t, { srcPage: y, multiZoneDraftMode: !1 });
      if (!w)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: b,
          deploymentId: R,
          params: _,
          nextConfig: C,
          parsedUrl: A,
          isDraftMode: E,
          prerenderManifest: T,
          routerServerContext: $,
          isOnDemandRevalidate: q,
          revalidateOnlyGenerated: O,
          resolvedPathname: S,
          clientReferenceManifest: D,
          serverActionsManifest: k,
        } = w,
        P = (0, s.normalizeAppPath)(y),
        j = !!(T.dynamicRoutes[P] || T.routes[S]),
        M = async () => (
          (null == $ ? void 0 : $.render404)
            ? await $.render404(e, t, A, !1)
            : t.end("This page could not be found"),
          null
        );
      if (j && !E) {
        let e = !!T.routes[S],
          t = T.dynamicRoutes[P];
        if (t && !1 === t.fallback && !e) {
          if (C.adapterPath) return await M();
          throw new f.NoFallbackError();
        }
      }
      let N = null;
      !j || x.isDev || E || (N = "/index" === (N = S) ? "/" : N);
      let U = !0 === x.isDev || !j,
        H = j && !U;
      k &&
        D &&
        (0, n.setManifestsSingleton)({
          page: y,
          clientReferenceManifest: D,
          serverActionsManifest: k,
        });
      let I = e.method || "GET",
        G = (0, i.getTracer)(),
        z = G.getActiveScopeSpan(),
        F = !!(null == $ ? void 0 : $.isWrappedByNextServer),
        L = !!(0, o.getRequestMeta)(e, "minimalMode"),
        B =
          (0, o.getRequestMeta)(e, "incrementalCache") || (await x.getIncrementalCache(e, C, T, L));
      (null == B || B.resetRequestCache(), (globalThis.__incrementalCache = B));
      let K = {
          params: _,
          previewProps: T.preview,
          renderOpts: {
            experimental: {
              authInterrupts: !!C.experimental.authInterrupts,
              useCacheTimeout: C.experimental.useCacheTimeout,
            },
            cacheComponents: !!C.cacheComponents,
            validationLevel: C.experimental.instantInsights.validationLevel,
            supportsDynamicResponse: U,
            incrementalCache: B,
            hmrRefreshHash: (0, o.getRequestMeta)(e, "hmrRefreshHash"),
            cacheLifeProfiles: C.cacheLife,
            staticPageGenerationTimeout: C.staticPageGenerationTimeout,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a, o) => x.onRequestError(e, t, a, o, $),
          },
          sharedContext: { buildId: b, deploymentId: R },
        },
        X = new l.NodeNextRequest(e),
        V = new l.NodeNextResponse(t),
        W = d.NextRequestAdapter.fromNodeNextRequest(X, (0, d.signalFromNodeResponse)(t)),
        J = async ({ previousCacheEntry: r }) => {
          try {
            if (!L && q && O && !r)
              return (
                (t.statusCode = 404),
                t.setHeader("x-nextjs-cache", "REVALIDATED"),
                t.end("This page could not be found"),
                null
              );
            let o = await x.handle(W, K);
            e.fetchMetrics = K.renderOpts.fetchMetrics;
            let i = K.renderOpts.pendingWaitUntil;
            i && a.waitUntil && (a.waitUntil(i), (i = void 0));
            let n = K.renderOpts.collectedTags;
            if (!j) return (await (0, p.sendResponse)(X, V, o, i), null);
            {
              let e = await o.blob(),
                t = (0, m.toNodeOutgoingHttpHeaders)(o.headers);
              (n && (t[g.NEXT_CACHE_TAGS_HEADER] = n),
                !t["content-type"] && e.type && (t["content-type"] = e.type));
              let r =
                  void 0 !== K.renderOpts.collectedRevalidate &&
                  !(K.renderOpts.collectedRevalidate >= g.INFINITE_CACHE) &&
                  K.renderOpts.collectedRevalidate,
                a =
                  void 0 === K.renderOpts.collectedExpire ||
                  K.renderOpts.collectedExpire >= g.INFINITE_CACHE
                    ? !1 !== r && r > 0
                      ? C.expireTime
                      : void 0
                    : K.renderOpts.collectedExpire;
              return {
                value: {
                  kind: h.CachedRouteKind.APP_ROUTE,
                  status: o.status,
                  body: Buffer.from(await e.arrayBuffer()),
                  headers: t,
                },
                cacheControl: { revalidate: r, expire: a },
              };
            }
          } catch (t) {
            throw (
              (null == r ? void 0 : r.isStale) &&
                (await x.onRequestError(
                  e,
                  t,
                  {
                    routerKind: "App Router",
                    routePath: y,
                    routeType: "route",
                    revalidateReason: (0, c.getRevalidateReason)({
                      isStaticGeneration: H,
                      isOnDemandRevalidate: q,
                    }),
                  },
                  !1,
                  $,
                )),
              t
            );
          }
        },
        Z = async (o, n) => {
          try {
            var s, l;
            let o = await x.handleResponse({
              req: e,
              nextConfig: C,
              cacheKey: N,
              routeKind: r.RouteKind.APP_ROUTE,
              isFallback: !1,
              prerenderManifest: T,
              isRoutePPREnabled: !1,
              isOnDemandRevalidate: q,
              revalidateOnlyGenerated: O,
              responseGenerator: J,
              waitUntil: a.waitUntil,
              isMinimalMode: L,
            });
            if (!j) return;
            if (
              (null == o || null == (s = o.value) ? void 0 : s.kind) !== h.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == o || null == (l = o.value) ? void 0 : l.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (L ||
              t.setHeader(
                "x-nextjs-cache",
                q ? "REVALIDATED" : o.isMiss ? "MISS" : o.isStale ? "STALE" : "HIT",
              ),
              E &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let i = (0, m.fromNodeOutgoingHttpHeaders)(o.value.headers);
            ((L && j) || i.delete(g.NEXT_CACHE_TAGS_HEADER),
              !o.cacheControl ||
                t.getHeader("Cache-Control") ||
                i.get("Cache-Control") ||
                i.set("Cache-Control", (0, v.getCacheControlHeader)(o.cacheControl)),
              await (0, p.sendResponse)(
                X,
                V,
                new Response(o.value.body, { headers: i, status: o.value.status || 200 }),
              ));
            return;
          } catch (t) {
            if (
              (t instanceof f.NoFallbackError ||
                (await x.onRequestError(
                  e,
                  t,
                  {
                    routerKind: "App Router",
                    routePath: P,
                    routeType: "route",
                    revalidateReason: (0, c.getRevalidateReason)({
                      isStaticGeneration: H,
                      isOnDemandRevalidate: q,
                    }),
                  },
                  !1,
                  $,
                )),
              j)
            )
              throw t;
            await (0, p.sendResponse)(X, V, new Response(null, { status: 500 }));
            return;
          } finally {
            (() => {
              if (!o) return;
              let e = t.statusCode;
              (o.setAttributes({ "http.status_code": e, "next.rsc": !1 }),
                e &&
                  e >= 500 &&
                  (o.setStatus({ code: i.SpanStatusCode.ERROR }),
                  o.setAttribute("error.type", e.toString())));
              let r = G.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== u.BaseServerSpan.handleRequest)
                return console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route") || P,
                s = `${I} ${a}`;
              (o.setAttributes({ "next.route": a, "http.route": a, "next.span_name": s }),
                o.updateName(s),
                n && n !== o && (n.setAttribute("http.route", a), n.updateName(s)));
            })();
          }
        };
      if (F && z) await Z(z, void 0);
      else {
        let t = G.getActiveScopeSpan();
        await G.withPropagatedContext(
          e.headers,
          () =>
            G.trace(
              u.BaseServerSpan.handleRequest,
              {
                spanName: `${I} ${y}`,
                kind: i.SpanKind.SERVER,
                attributes: { "http.method": I, "http.target": e.url },
              },
              (e) => Z(e, t),
            ),
          void 0,
          !F,
        );
      }
    }
    e.s([
      "handler",
      0,
      R,
      "patchFetch",
      0,
      function () {
        return (0, a.patchFetch)({ workAsyncStorage: y, workUnitAsyncStorage: w });
      },
      "routeModule",
      0,
      x,
      "serverHooks",
      0,
      b,
      "workAsyncStorage",
      0,
      y,
      "workUnitAsyncStorage",
      0,
      w,
    ]);
  },
  64043,
  (e) => {
    "use strict";
    e.s([
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
    ]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0skklts._.js.map
