module.exports = [
  43489,
  (a, b, c) => {
    let { createClientModuleProxy: d } = a.r(11857);
    a.n(d("[project]/node_modules/next/dist/client/image-component.js"));
  },
  18409,
  (a) => {
    "use strict";
    var b = a.i(43489);
    a.n(b);
  },
  53200,
  (a, b, c) => {
    "use strict";
    function d(a, b) {
      let c = a || 75;
      return b?.qualities?.length
        ? b.qualities.reduce((a, b) => (Math.abs(b - c) < Math.abs(a - c) ? b : a), b.qualities[0])
        : c;
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  37763,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return g;
        },
      }));
    let d = a.r(53200),
      e = a.r(29945);
    function f({ config: a, src: b, width: c, quality: g }) {
      let h = (0, e.getDeploymentId)();
      if (b.startsWith("/") && !b.startsWith("//"))
        if (b.includes("/_next/static/immutable") && !(0, e.getAssetToken)()) h = void 0;
        else {
          let a = b.indexOf("?");
          if (-1 !== a) {
            let c = new URLSearchParams(b.slice(a + 1)),
              d = c.get("dpl");
            if (d) {
              ((h = d), c.delete("dpl"));
              let e = c.toString();
              b = b.slice(0, a) + (e ? "?" + e : "");
            }
          }
        }
      if (
        b.startsWith("/") &&
        b.includes("?") &&
        a.localPatterns?.length === 1 &&
        "**" === a.localPatterns[0].pathname &&
        "" === a.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${b}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let i = (0, d.findClosestQuality)(g, a);
      return `${a.path}?url=${encodeURIComponent(b)}&w=${c}&q=${i}${b.startsWith("/") && h ? `&dpl=${h}` : ""}`;
    }
    f.__next_img_default = !0;
    let g = f;
  },
  50858,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return k;
      },
      getImageProps: function () {
        return j;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(71029),
      g = a.r(87713),
      h = a.r(18409),
      i = f._(a.r(37763));
    function j(a) {
      let { props: b } = (0, g.getImgProps)(a, {
        defaultLoader: i.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [a, c] of Object.entries(b)) void 0 === c && delete b[a];
      return { props: b };
    }
    let k = h.Image;
  },
  3236,
  (a, b, c) => {
    b.exports = a.r(50858);
  },
  29945,
  (a, b, c) => {
    "use strict";
    let d;
    Object.defineProperty(c, "__esModule", { value: !0 });
    var e = {
      getAssetToken: function () {
        return i;
      },
      getAssetTokenQuery: function () {
        return j;
      },
      getDeploymentId: function () {
        return g;
      },
      getDeploymentIdQuery: function () {
        return h;
      },
    };
    for (var f in e) Object.defineProperty(c, f, { enumerable: !0, get: e[f] });
    function g() {
      return d;
    }
    function h(a = !1) {
      return d ? `${a ? "&" : "?"}dpl=${d}` : "";
    }
    function i() {
      return !1;
    }
    function j(a = !1) {
      return "";
    }
    d = void 0;
  },
  1359,
  (a, b, c) => {
    "use strict";
    function d({
      widthInt: a,
      heightInt: b,
      blurWidth: c,
      blurHeight: e,
      blurDataURL: f,
      objectFit: g,
    }) {
      let h = c ? 40 * c : a,
        i = e ? 40 * e : b,
        j = h && i ? `viewBox='0 0 ${h} ${i}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${j}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${j ? "none" : "contain" === g ? "xMidYMid" : "cover" === g ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${f}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
  },
  53549,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      VALID_LOADERS: function () {
        return f;
      },
      imageConfigDefault: function () {
        return g;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = ["default", "imgix", "cloudinary", "akamai", "custom"],
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  87713,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "getImgProps", {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let d = a.r(29945),
      e = a.r(1359),
      f = a.r(53549),
      g = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function h(a) {
      return void 0 !== a.default;
    }
    function i(a) {
      return void 0 === a
        ? a
        : "number" == typeof a
          ? Number.isFinite(a)
            ? a
            : NaN
          : "string" == typeof a && /^[0-9]+$/.test(a)
            ? parseInt(a, 10)
            : NaN;
    }
    function j(
      {
        src: a,
        sizes: b,
        unoptimized: c = !1,
        priority: k = !1,
        preload: l = !1,
        loading: m,
        className: n,
        quality: o,
        width: p,
        height: q,
        fill: r = !1,
        style: s,
        overrideSrc: t,
        onLoad: u,
        onLoadingComplete: v,
        placeholder: w = "empty",
        blurDataURL: x,
        fetchPriority: y,
        decoding: z = "async",
        layout: A,
        objectFit: B,
        objectPosition: C,
        lazyBoundary: D,
        lazyRoot: E,
        ...F
      },
      G,
    ) {
      var H;
      let I,
        J,
        K,
        { imgConf: L, showAltText: M, blurComplete: N, defaultLoader: O } = G,
        P = L || f.imageConfigDefault;
      if ("allSizes" in P) I = P;
      else {
        let a = [...P.deviceSizes, ...P.imageSizes].sort((a, b) => a - b),
          b = P.deviceSizes.sort((a, b) => a - b),
          c = P.qualities?.sort((a, b) => a - b);
        I = { ...P, allSizes: a, deviceSizes: b, qualities: c };
      }
      if (void 0 === O)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let Q = F.loader || O;
      (delete F.loader, delete F.srcSet);
      let R = "__next_img_default" in Q;
      if (R) {
        if ("custom" === I.loader)
          throw Object.defineProperty(
            Error(`Image with src "${a}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let a = Q;
        Q = (b) => {
          let { config: c, ...d } = b;
          return a(d);
        };
      }
      if (A) {
        "fill" === A && (r = !0);
        let a = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[A];
        a && (s = { ...s, ...a });
        let c = { responsive: "100vw", fill: "100vw" }[A];
        c && !b && (b = c);
      }
      let S = "",
        T = i(p),
        U = i(q);
      if ((H = a) && "object" == typeof H && (h(H) || void 0 !== H.src)) {
        let b = h(a) ? a.default : a;
        if (!b.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(b)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!b.height || !b.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(b)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (((J = b.blurWidth), (K = b.blurHeight), (x = x || b.blurDataURL), (S = b.src), !r))
          if (T || U) {
            if (T && !U) {
              let a = T / b.width;
              U = Math.round(b.height * a);
            } else if (!T && U) {
              let a = U / b.height;
              T = Math.round(b.width * a);
            }
          } else ((T = b.width), (U = b.height));
      }
      let V = !k && !l && ("lazy" === m || void 0 === m);
      ((!(a = "string" == typeof a ? a : S) || a.startsWith("data:") || a.startsWith("blob:")) &&
        ((c = !0), (V = !1)),
        I.unoptimized && (c = !0),
        R && !I.dangerouslyAllowSVG && a.split("?", 1)[0].endsWith(".svg") && (c = !0));
      let W = i(o),
        X = Object.assign(
          r
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: B,
                objectPosition: C,
              }
            : {},
          M ? {} : { color: "transparent" },
          s,
        ),
        Y =
          N || "empty" === w
            ? null
            : "blur" === w
              ? `url("data:image/svg+xml;charset=utf-8,${(0, e.getImageBlurSvg)({ widthInt: T, heightInt: U, blurWidth: J, blurHeight: K, blurDataURL: x || "", objectFit: X.objectFit })}")`
              : `url("${w}")`,
        Z = g.includes(X.objectFit)
          ? "fill" === X.objectFit
            ? "100% 100%"
            : "cover"
          : X.objectFit,
        $ = Y
          ? {
              backgroundSize: Z,
              backgroundPosition: X.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Y,
            }
          : {},
        _ = (function ({
          config: a,
          src: b,
          unoptimized: c,
          width: e,
          quality: f,
          sizes: g,
          loader: h,
        }) {
          if (c) {
            if (b.startsWith("/") && !b.startsWith("//")) {
              let a = (0, d.getDeploymentId)();
              if (b.includes("/_next/static/immutable") && !(0, d.getAssetToken)()) a = void 0;
              else if (a) {
                let c = b.indexOf("?");
                if (-1 !== c) {
                  let d = new URLSearchParams(b.slice(c + 1));
                  d.get("dpl") || (d.append("dpl", a), (b = b.slice(0, c) + "?" + d.toString()));
                } else b += `?dpl=${a}`;
              }
            }
            return { src: b, srcSet: void 0, sizes: void 0 };
          }
          let { widths: i, kind: j } = (function ({ deviceSizes: a, allSizes: b }, c, d) {
              if (d) {
                let c = /(^|\s)(1?\d?\d)vw/g,
                  e = [];
                for (let a; (a = c.exec(d));) e.push(parseInt(a[2]));
                if (e.length) {
                  let c = 0.01 * Math.min(...e);
                  return { widths: b.filter((b) => b >= a[0] * c), kind: "w" };
                }
                return { widths: b, kind: "w" };
              }
              return "number" != typeof c
                ? { widths: a, kind: "w" }
                : {
                    widths: [
                      ...new Set([c, 2 * c].map((a) => b.find((b) => b >= a) || b[b.length - 1])),
                    ],
                    kind: "x",
                  };
            })(a, e, g),
            k = i.length - 1;
          return {
            sizes: g || "w" !== j ? g : "100vw",
            srcSet: i
              .map(
                (c, d) =>
                  `${h({ config: a, src: b, quality: f, width: c })} ${"w" === j ? c : d + 1}${j}`,
              )
              .join(", "),
            src: h({ config: a, src: b, quality: f, width: i[k] }),
          };
        })({ config: I, src: a, unoptimized: c, width: T, quality: W, sizes: b, loader: Q }),
        aa = V ? "lazy" : m;
      return {
        props: {
          ...F,
          loading: aa,
          fetchPriority: y,
          width: T,
          height: U,
          decoding: z,
          className: n,
          style: { ...X, ...$ },
          sizes: _.sizes,
          srcSet: _.srcSet,
          src: t || _.src,
        },
        meta: { unoptimized: c, preload: l || k, placeholder: w, fill: r },
      };
    }
  },
  16939,
  (a) => {
    "use strict";
    a.s(["MobileNavigation", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call MobileNavigation() from the server but MobileNavigation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/layout/MobileNavigation.tsx",
      "MobileNavigation",
    );
  },
  64197,
  (a) => {
    "use strict";
    var b = a.i(16939);
    a.n(b);
  },
  88928,
  (a) => {
    "use strict";
    a.s(["AppointmentForm", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call AppointmentForm() from the server but AppointmentForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/features/appointments/components/AppointmentForm.tsx",
      "AppointmentForm",
    );
  },
  84214,
  (a) => {
    "use strict";
    var b = a.i(88928);
    a.n(b);
  },
  43947,
  (a) => {
    "use strict";
    a.s(["ContactForm", () => b]);
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call ContactForm() from the server but ContactForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/features/contact/components/ContactForm.tsx",
      "ContactForm",
    );
  },
  45890,
  (a) => {
    "use strict";
    var b = a.i(43947);
    a.n(b);
  },
  60168,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(95936);
    function d({ children: a, className: c = "" }) {
      return (0, b.jsx)("div", {
        className: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${c}`,
        children: a,
      });
    }
    var e = a.i(64197),
      f = a.i(45380);
    let g = [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Galería", href: "#galeria" },
      { label: "Ubicación", href: "#ubicacion" },
      { label: "Contacto", href: "#contacto" },
    ];
    function h() {
      return (0, b.jsx)("header", {
        className: "sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur",
        children: (0, b.jsx)(d, {
          children: (0, b.jsxs)("div", {
            className: "flex h-20 items-center justify-between",
            children: [
              (0, b.jsxs)(c.default, {
                href: "#inicio",
                className:
                  "flex min-w-0 flex-col rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2",
                children: [
                  (0, b.jsx)("span", {
                    className: "truncate text-lg font-bold text-slate-950 sm:text-xl",
                    children: f.businessConfig.name,
                  }),
                  (0, b.jsx)("span", {
                    className: "truncate text-xs text-slate-500",
                    children: f.businessConfig.professional.name,
                  }),
                ],
              }),
              (0, b.jsx)("nav", {
                "aria-label": "Navegación principal",
                className: "hidden items-center gap-7 lg:flex",
                children: g.map((a) =>
                  (0, b.jsx)(
                    c.default,
                    {
                      href: a.href,
                      className:
                        "rounded-sm text-sm font-medium text-slate-600 transition hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                      children: a.label,
                    },
                    a.href,
                  ),
                ),
              }),
              (0, b.jsx)("div", {
                className: "hidden lg:block",
                children: (0, b.jsx)(c.default, {
                  href: "#citas",
                  className:
                    "rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                  children: "Agendar cita",
                }),
              }),
              (0, b.jsx)(e.MobileNavigation, {}),
            ],
          }),
        }),
      });
    }
    var i = a.i(717),
      j = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
      k = i.default.createContext && i.default.createContext(j),
      l = ["attr", "size", "title"];
    function m() {
      return (m = Object.assign.bind()).apply(null, arguments);
    }
    function n(a, b) {
      var c = Object.keys(a);
      if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(a);
        (b &&
          (d = d.filter(function (b) {
            return Object.getOwnPropertyDescriptor(a, b).enumerable;
          })),
          c.push.apply(c, d));
      }
      return c;
    }
    function o(a) {
      for (var b = 1; b < arguments.length; b++) {
        var c = null != arguments[b] ? arguments[b] : {};
        b % 2
          ? n(Object(c), !0).forEach(function (b) {
              var d, e, f;
              ((d = a),
                (e = b),
                (f = c[b]),
                (e = (function (a) {
                  var b = (function (a, b) {
                    if ("object" != typeof a || !a) return a;
                    var c = a[Symbol.toPrimitive];
                    if (void 0 !== c) {
                      var d = c.call(a, b || "default");
                      if ("object" != typeof d) return d;
                      throw TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === b ? String : Number)(a);
                  })(a, "string");
                  return "symbol" == typeof b ? b : b + "";
                })(e)) in d
                  ? Object.defineProperty(d, e, {
                      value: f,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (d[e] = f));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
            : n(Object(c)).forEach(function (b) {
                Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
              });
      }
      return a;
    }
    function p(a) {
      return (b) =>
        i.default.createElement(
          q,
          m({ attr: o({}, a.attr) }, b),
          (function a(b) {
            return (
              b &&
              b.map((b, c) => i.default.createElement(b.tag, o({ key: c }, b.attr), a(b.child)))
            );
          })(a.child),
        );
    }
    function q(a) {
      var b = (b) => {
        var c,
          d = a.attr,
          e = a.size,
          f = a.title,
          g = (function (a, b) {
            if (null == a) return {};
            var c,
              d,
              e = (function (a, b) {
                if (null == a) return {};
                var c = {};
                for (var d in a)
                  if ({}.hasOwnProperty.call(a, d)) {
                    if (-1 !== b.indexOf(d)) continue;
                    c[d] = a[d];
                  }
                return c;
              })(a, b);
            if (Object.getOwnPropertySymbols) {
              var f = Object.getOwnPropertySymbols(a);
              for (d = 0; d < f.length; d++)
                ((c = f[d]),
                  -1 === b.indexOf(c) && {}.propertyIsEnumerable.call(a, c) && (e[c] = a[c]));
            }
            return e;
          })(a, l),
          h = e || b.size || "1em";
        return (
          b.className && (c = b.className),
          a.className && (c = (c ? c + " " : "") + a.className),
          i.default.createElement(
            "svg",
            m({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, b.attr, d, g, {
              className: c,
              style: o(o({ color: a.color || b.color }, b.style), a.style),
              height: h,
              width: h,
              xmlns: "http://www.w3.org/2000/svg",
            }),
            f && i.default.createElement("title", null, f),
            a.children,
          )
        );
      };
      return void 0 !== k ? i.default.createElement(k.Consumer, null, (a) => b(a)) : b(j);
    }
    function r(a) {
      return p({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
            },
            child: [],
          },
        ],
      })(a);
    }
    function s(a) {
      return p({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
            },
            child: [],
          },
        ],
      })(a);
    }
    function t(a) {
      return p({
        tag: "svg",
        attr: { viewBox: "0 0 320 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
            },
            child: [],
          },
        ],
      })(a);
    }
    function u({ facebook: a, instagram: c, tiktok: d, variant: e = "light", className: f = "" }) {
      let g = [
        { label: "Facebook", href: a, icon: t },
        { label: "Instagram", href: c, icon: s },
        { label: "TikTok", href: d, icon: r },
      ].filter((a) => !!a.href);
      if (0 === g.length) return null;
      let h =
        "dark" === e
          ? "border-white/20 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white focus-visible:ring-offset-brand-950"
          : "border-slate-200 text-slate-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 focus-visible:ring-brand-600 focus-visible:ring-offset-white";
      return (0, b.jsx)("div", {
        className: `flex flex-wrap gap-3 ${f}`,
        children: g.map((a) => {
          let c = a.icon;
          return (0, b.jsxs)(
            "a",
            {
              href: a.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": `Visitar ${a.label}`,
              className: `
              inline-flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              transition
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-offset-2
              ${h}
            `,
              children: [
                (0, b.jsx)(c, { "aria-hidden": "true", className: "h-5 w-5" }),
                (0, b.jsx)("span", { className: "sr-only", children: a.label }),
              ],
            },
            a.label,
          );
        }),
      });
    }
    function v() {
      let a = new Date().getFullYear();
      return (0, b.jsx)("footer", {
        className: "bg-brand-950 py-12 text-white",
        children: (0, b.jsxs)(d, {
          children: [
            (0, b.jsxs)("div", {
              className: "grid gap-10 md:grid-cols-3",
              children: [
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("p", {
                      className: "text-lg font-bold",
                      children: f.businessConfig.name,
                    }),
                    (0, b.jsx)("p", {
                      className: "mt-3 max-w-sm text-sm leading-6 text-white/70",
                      children: f.businessConfig.description,
                    }),
                    (0, b.jsx)(u, {
                      facebook: f.businessConfig.social.facebook,
                      instagram: f.businessConfig.social.instagram,
                      tiktok: f.businessConfig.social.tiktok,
                      variant: "dark",
                      className: "mt-5",
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("p", { className: "font-semibold", children: "Contacto" }),
                    (0, b.jsxs)("div", {
                      className: "mt-4 space-y-2 text-sm text-white/70",
                      children: [
                        (0, b.jsx)("p", { children: f.businessConfig.contact.phone }),
                        (0, b.jsx)("p", { children: f.businessConfig.contact.email }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("p", { className: "font-semibold", children: "Ubicación" }),
                    (0, b.jsxs)("p", {
                      className: "mt-4 text-sm leading-6 text-white/70",
                      children: [
                        f.businessConfig.location.address,
                        (0, b.jsx)("br", {}),
                        f.businessConfig.location.city,
                        ", ",
                        f.businessConfig.location.state,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, b.jsx)("div", {
              className: "mt-10 border-t border-white/30 pt-6",
              children: (0, b.jsxs)("p", {
                className: "text-sm text-white/70",
                children: ["© ", a, " ", f.businessConfig.name, ". Todos los derechos reservados."],
              }),
            }),
          ],
        }),
      });
    }
    var w = a.i(3236);
    function x({
      href: a,
      children: d,
      variant: e = "primary",
      external: f = !1,
      fullWidthOnMobile: g = !1,
    }) {
      let h = `
  inline-flex
  items-center
  justify-center
  rounded-full
  px-6
  py-3
  font-semibold
  transition
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-brand-600
  focus-visible:ring-offset-2
  ${g ? "w-full sm:w-auto" : ""}
  ${{ primary: "bg-brand-700 text-white shadow-sm hover:bg-brand-800", secondary: "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50" }[e]}
`;
      return f
        ? (0, b.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            className: h,
            children: d,
          })
        : (0, b.jsx)(c.default, { href: a, className: h, children: d });
    }
    function y(a, b) {
      let c = a.replace(/\D/g, ""),
        d = `https://wa.me/${c}`;
      return b ? `${d}?text=${encodeURIComponent(b)}` : d;
    }
    function z() {
      let a = y(
        f.businessConfig.contact.whatsapp,
        "Hola, quisiera solicitar información sobre los servicios del consultorio.",
      );
      return (0, b.jsx)("section", {
        id: "inicio",
        className:
          "\n        scroll-mt-24\n        overflow-hidden\n        bg-gradient-to-b\n        from-brand-50\n        to-white\n        py-12\n        sm:py-16\n        md:py-24\n      ",
        children: (0, b.jsx)(d, {
          children: (0, b.jsxs)("div", {
            className: "grid items-center gap-12 lg:grid-cols-2",
            children: [
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)("span", {
                    className:
                      "\n                mb-4\n                inline-flex\n                rounded-full\n                border\n                border-brand-100\n                bg-white\n                px-4\n                py-2\n                text-sm\n                font-medium\n                text-brand-700\n                shadow-sm\n              ",
                    children: "Atención odontológica profesional",
                  }),
                  (0, b.jsxs)("h1", {
                    className:
                      "max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl",
                    children: [
                      "Cuida tu sonrisa con atención ",
                      (0, b.jsx)("span", { className: "text-brand-700", children: "profesional" }),
                    ],
                  }),
                  (0, b.jsx)("p", {
                    className: "mt-6 max-w-xl text-lg leading-8 text-slate-600",
                    children: f.businessConfig.description,
                  }),
                  (0, b.jsxs)("div", {
                    className: "mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4",
                    children: [
                      (0, b.jsx)(x, {
                        href: "#citas",
                        fullWidthOnMobile: !0,
                        children: "Solicitar cita",
                      }),
                      (0, b.jsx)(x, {
                        href: a,
                        variant: "secondary",
                        external: !0,
                        fullWidthOnMobile: !0,
                        children: "WhatsApp",
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600",
                    children: [
                      (0, b.jsx)("span", { children: "✓ Atención personalizada" }),
                      (0, b.jsx)("span", { children: "✓ Consultorio profesional" }),
                      (0, b.jsx)("span", { children: "✓ Citas por WhatsApp" }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)("div", {
                className: "relative",
                children: [
                  (0, b.jsx)("div", {
                    className:
                      "relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-slate-200/60",
                    children: (0, b.jsx)(w.default, {
                      src:
                        f.businessConfig.branding.heroImage ??
                        f.businessConfig.professional.image ??
                        "/images/hero.webp",
                      alt: f.businessConfig.professional.name,
                      fill: !0,
                      sizes: "(max-width: 1023px) 100vw, 50vw",
                      preload: !0,
                      className: "object-cover",
                    }),
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "\n                absolute\n                -bottom-5\n                left-4\n                right-4\n                rounded-2xl\n                border\n                border-white/60\n                bg-white/95\n                p-4\n                shadow-lg\n                backdrop-blur\n                sm:left-6\n                sm:right-auto\n                sm:min-w-64\n              ",
                    children: [
                      (0, b.jsx)("p", {
                        className: "font-semibold text-slate-950",
                        children: f.businessConfig.professional.name,
                      }),
                      (0, b.jsx)("p", {
                        className: "mt-1 text-sm text-slate-600",
                        children: f.businessConfig.professional.title,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    function A({ eyebrow: a, title: c, description: d, align: e = "left" }) {
      return (0, b.jsxs)("div", {
        className: `max-w-2xl ${"center" === e ? "mx-auto text-center" : ""}`,
        children: [
          a &&
            (0, b.jsx)("span", {
              className: "text-sm font-semibold uppercase tracking-wider text-brand-700",
              children: a,
            }),
          (0, b.jsx)("h2", {
            className: "mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl",
            children: c,
          }),
          d && (0, b.jsx)("p", { className: "mt-4 text-lg leading-8 text-slate-600", children: d }),
        ],
      });
    }
    function B() {
      return (0, b.jsx)("section", {
        id: "nosotros",
        className: "scroll-mt-24 py-16 md:py-24",
        children: (0, b.jsx)(d, {
          children: (0, b.jsxs)("div", {
            className: "grid items-center gap-12 lg:grid-cols-2",
            children: [
              (0, b.jsx)("div", {
                className: "relative",
                children: (0, b.jsx)("div", {
                  className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100",
                  children: (0, b.jsx)(w.default, {
                    src: f.businessConfig.professional.image ?? "/images/professional.webp",
                    alt: f.businessConfig.professional.name,
                    fill: !0,
                    sizes: "(min-width: 1024px) 50vw, 100vw",
                    className: "object-cover",
                  }),
                }),
              }),
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)(A, {
                    eyebrow: "Sobre nosotros",
                    title: f.businessConfig.professional.name,
                    description: f.businessConfig.professional.description,
                  }),
                  (0, b.jsxs)("div", {
                    className: "mt-8 space-y-5",
                    children: [
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("p", {
                            className: "text-sm font-medium text-slate-500",
                            children: "Especialidad",
                          }),
                          (0, b.jsx)("p", {
                            className: "mt-1 text-lg font-semibold text-slate-900",
                            children: f.businessConfig.professional.title,
                          }),
                        ],
                      }),
                      f.businessConfig.professional.license &&
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("p", {
                              className: "text-sm font-medium text-slate-500",
                              children: "Cédula profesional",
                            }),
                            (0, b.jsx)("p", {
                              className: "mt-1 text-lg font-semibold text-slate-900",
                              children: f.businessConfig.professional.license,
                            }),
                          ],
                        }),
                      f.businessConfig.professional.license2 &&
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("p", {
                              className: "text-sm font-medium text-slate-500",
                              children: "COFEPRIS",
                            }),
                            (0, b.jsx)("p", {
                              className: "mt-1 text-lg font-semibold text-slate-900",
                              children: f.businessConfig.professional.license2,
                            }),
                          ],
                        }),
                      (0, b.jsxs)("div", {
                        className: "grid gap-4 pt-3 sm:grid-cols-2",
                        children: [
                          (0, b.jsxs)("div", {
                            className: "rounded-2xl border border-brand-100 bg-brand-50/60 p-5",
                            children: [
                              (0, b.jsx)("p", {
                                className: "font-semibold text-brand-900",
                                children: "Atención personalizada",
                              }),
                              (0, b.jsx)("p", {
                                className: "mt-2 text-sm leading-6 text-slate-600",
                                children:
                                  "Cada paciente recibe una valoración de acuerdo con sus necesidades.",
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            className: "rounded-2xl border border-brand-100 bg-brand-50/60 p-5",
                            children: [
                              (0, b.jsx)("p", {
                                className: "font-semibold text-brand-900",
                                children: "Prevención y cuidado",
                              }),
                              (0, b.jsx)("p", {
                                className: "mt-2 text-sm leading-6 text-slate-600",
                                children:
                                  "Buscamos cuidar la salud dental mediante prevención y seguimiento.",
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
        }),
      });
    }
    function C(a) {
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0,
      }).format(a);
    }
    function D({ service: a }) {
      var c;
      let d,
        e =
          void 0 !== a.promotionalPrice ||
          void 0 !== a.promotionLabel ||
          void 0 !== a.promotionDescription;
      return (0, b.jsxs)("article", {
        className: `
        group
        overflow-hidden
        rounded-3xl
        border
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-slate-200/60
        ${a.featured ? "border-brand-200 ring-1 ring-brand-100" : "border-slate-100"}
      `,
        children: [
          a.image &&
            (0, b.jsxs)("div", {
              className: "relative aspect-[4/3] overflow-hidden bg-slate-100",
              children: [
                (0, b.jsx)(w.default, {
                  src: a.image,
                  alt: a.imageAlt || a.name,
                  fill: !0,
                  sizes:
                    "\n              (min-width: 1024px) 33vw,\n              (min-width: 640px) 50vw,\n              100vw\n            ",
                  className:
                    "\n              object-cover\n              transition\n              duration-500\n              group-hover:scale-105\n            ",
                }),
                e &&
                  (0, b.jsx)("div", {
                    className: "absolute left-4 top-4",
                    children: (0, b.jsx)("span", {
                      className:
                        "inline-flex rounded-full bg-brand-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm",
                      children: a.promotionLabel ?? "Promoción",
                    }),
                  }),
              ],
            }),
          (0, b.jsxs)("div", {
            className: "p-6",
            children: [
              (0, b.jsx)("h3", { className: "text-xl font-bold text-slate-950", children: a.name }),
              (0, b.jsx)("p", {
                className: "mt-3 leading-7 text-slate-600",
                children: a.description,
              }),
              e &&
                (0, b.jsxs)("div", {
                  className: "mt-5 rounded-2xl border border-brand-100 bg-brand-50/70 p-4",
                  children: [
                    void 0 !== a.price &&
                      void 0 !== a.promotionalPrice &&
                      (0, b.jsxs)("div", {
                        className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                        children: [
                          (0, b.jsx)("span", {
                            className: "text-sm text-slate-500 line-through",
                            children: C(a.price),
                          }),
                          (0, b.jsx)("span", {
                            className: "text-2xl font-bold text-brand-800",
                            children: C(a.promotionalPrice),
                          }),
                        ],
                      }),
                    void 0 === a.price &&
                      void 0 !== a.promotionalPrice &&
                      (0, b.jsx)("p", {
                        className: "text-2xl font-bold text-brand-800",
                        children: C(a.promotionalPrice),
                      }),
                    a.promotionDescription &&
                      (0, b.jsx)("p", {
                        className: "mt-2 text-sm leading-6 text-slate-600",
                        children: a.promotionDescription,
                      }),
                    a.promotionValidUntil &&
                      (0, b.jsxs)("p", {
                        className: "mt-2 text-xs font-medium text-brand-800",
                        children: [
                          "Válida hasta el ",
                          ((c = a.promotionValidUntil),
                          (d = new Date(`${c}T12:00:00`)),
                          new Intl.DateTimeFormat("es-MX", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }).format(d)),
                        ],
                      }),
                  ],
                }),
              (0, b.jsxs)("a", {
                href: "#citas",
                className:
                  "\n            mt-5\n            inline-flex\n            items-center\n            gap-2\n            text-sm\n            font-semibold\n            text-brand-700\n            transition\n            hover:text-brand-900\n            focus-visible:outline-none\n            focus-visible:ring-2\n            focus-visible:ring-brand-600\n            focus-visible:ring-offset-2\n          ",
                children: [
                  "Solicitar cita",
                  (0, b.jsx)("span", { "aria-hidden": "true", children: "→" }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    var E = a.i(47410);
    function F() {
      return (0, b.jsx)("section", {
        id: "servicios",
        className: "scroll-mt-20 bg-slate-50 py-16 md:py-24",
        children: (0, b.jsxs)(d, {
          children: [
            (0, b.jsx)(A, {
              eyebrow: "Nuestros servicios",
              title: "Tratamientos para cuidar tu sonrisa",
              description: "Conoce algunos de los servicios disponibles en el consultorio.",
              align: "center",
            }),
            (0, b.jsx)("div", {
              className: "mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3",
              children: E.services.map((a) => (0, b.jsx)(D, { service: a }, a.id)),
            }),
          ],
        }),
      });
    }
    let G = [
      {
        id: "clinic-1",
        src: "/images/gallery/clinic-1.webp",
        alt: "Instalaciones del consultorio",
      },
      {
        id: "clinic-2",
        src: "/images/gallery/clinic-2.webp",
        alt: "Área de atención odontológica",
      },
      { id: "clinic-3", src: "/images/gallery/clinic-3.webp", alt: "Equipo del consultorio" },
      { id: "clinic-4", src: "/images/gallery/clinic-4.webp", alt: "Consultorio dental" },
    ];
    function H() {
      return (0, b.jsx)("section", {
        id: "galeria",
        className: "scroll-mt-20 py-16 md:py-24",
        children: (0, b.jsxs)(d, {
          children: [
            (0, b.jsx)(A, {
              eyebrow: "Galería",
              title: "Conoce nuestro consultorio",
              description: "Un espacio preparado para brindar atención profesional y cómoda.",
              align: "center",
            }),
            (0, b.jsx)("div", {
              className: "mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-4",
              children: G.map((a, c) =>
                (0, b.jsx)(
                  "div",
                  {
                    className: `relative overflow-hidden rounded-2xl bg-slate-100 sm:rounded-3xl ${0 === c ? "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[500px]" : "aspect-square"}`,
                    children: (0, b.jsx)(w.default, {
                      src: a.src,
                      alt: a.alt,
                      fill: !0,
                      sizes:
                        0 === c
                          ? "(min-width: 1024px) 50vw, 100vw"
                          : "(min-width: 1024px) 25vw, 50vw",
                      className: "object-cover transition duration-500 hover:scale-105",
                    }),
                  },
                  a.id,
                ),
              ),
            }),
          ],
        }),
      });
    }
    function I() {
      return (0, b.jsx)("section", {
        className: "scroll-mt-24 bg-brand-50/50 py-16 md:py-24",
        children: (0, b.jsx)(d, {
          children: (0, b.jsxs)("div", {
            className: "grid gap-12 lg:grid-cols-2 lg:items-center",
            children: [
              (0, b.jsx)(A, {
                eyebrow: "Horarios",
                title: "Estamos disponibles para atenderte",
                description:
                  "Consulta nuestros horarios de atención y solicita una cita en el horario que mejor se adapte a ti.",
              }),
              (0, b.jsx)("div", {
                className: "overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm",
                children: f.businessConfig.schedule.map((a, c) =>
                  (0, b.jsxs)(
                    "div",
                    {
                      className: `flex items-center justify-between gap-6 px-6 py-5 ${c !== f.businessConfig.schedule.length - 1 ? "border-b border-slate-100" : ""}`,
                      children: [
                        (0, b.jsx)("span", {
                          className: "font-medium text-slate-700",
                          children: a.label,
                        }),
                        (0, b.jsxs)("span", {
                          className: "text-right font-semibold text-brand-700",
                          children: [a.opens, " - ", a.closes],
                        }),
                      ],
                    },
                    a.label,
                  ),
                ),
              }),
            ],
          }),
        }),
      });
    }
    function J() {
      let { location: a, contact: c } = f.businessConfig;
      return (0, b.jsx)("section", {
        id: "ubicacion",
        className: "scroll-mt-20 py-16 md:py-24",
        children: (0, b.jsxs)(d, {
          children: [
            (0, b.jsx)(A, {
              eyebrow: "Ubicación",
              title: "Visítanos",
              description:
                "Encuentra fácilmente nuestro consultorio y comunícate con nosotros para solicitar información.",
              align: "center",
            }),
            (0, b.jsxs)("div", {
              className:
                "mt-12 grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm lg:grid-cols-2",
              children: [
                (0, b.jsx)("div", {
                  className: "min-h-[320px] bg-slate-100 sm:min-h-[400px]",
                  children: (0, b.jsx)("iframe", {
                    title: `Ubicaci\xf3n de ${f.businessConfig.name}`,
                    src: a.googleMapsEmbedUrl,
                    width: "100%",
                    height: "100%",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                    className: "min-h-[320px] border-0 sm:min-h-[400px]",
                    allowFullScreen: !0,
                  }),
                }),
                (0, b.jsxs)("div", {
                  className: "flex flex-col justify-center p-8 md:p-12",
                  children: [
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("p", {
                          className: "text-sm font-medium text-slate-500",
                          children: "Dirección",
                        }),
                        (0, b.jsx)("p", {
                          className: "mt-2 text-lg font-semibold text-slate-950",
                          children: a.address,
                        }),
                        (0, b.jsxs)("p", {
                          className: "mt-1 text-slate-600",
                          children: [a.city, ", ", a.state],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "mt-8",
                      children: [
                        (0, b.jsx)("p", {
                          className: "text-sm font-medium text-slate-500",
                          children: "Teléfono",
                        }),
                        (0, b.jsx)("a", {
                          href: `tel:${c.phone.replace(/\D/g, "")}`,
                          className:
                            "mt-1 block font-semibold text-slate-950 transition hover:text-brand-700",
                          children: c.phone,
                        }),
                      ],
                    }),
                    a.googleMapsUrl &&
                      (0, b.jsx)("a", {
                        href: a.googleMapsUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "mt-8 inline-flex w-fit rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                        children: "Cómo llegar",
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    function K({ className: a }) {
      return (0, b.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        className: a,
        fill: "currentColor",
        children: (0, b.jsx)("path", {
          d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z",
        }),
      });
    }
    function L() {
      let a = y(
        f.businessConfig.contact.whatsapp,
        `Hola, quisiera solicitar informaci\xf3n sobre ${f.businessConfig.name}.`,
      );
      return (0, b.jsx)("a", {
        href: a,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Contactar por WhatsApp",
        className:
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2",
        children: (0, b.jsx)(K, { className: "h-7 w-7" }),
      });
    }
    var M = a.i(84214),
      N = a.i(16923);
    function O() {
      let { minDate: a, maxDate: c } = (0, N.getAppointmentDateRange)(),
        e = y(
          f.businessConfig.contact.whatsapp,
          `Hola, quisiera solicitar informaci\xf3n sobre ${f.businessConfig.name}.`,
        );
      return (0, b.jsx)("section", {
        id: "citas",
        className: "scroll-mt-24 bg-slate-50 py-16 md:py-24",
        children: (0, b.jsx)(d, {
          children: (0, b.jsxs)("div", {
            className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr]",
            children: [
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)(A, {
                    eyebrow: "Citas",
                    title: "Solicita tu próxima cita",
                    description:
                      "Selecciona el servicio, fecha y horario que prefieras. Nos comunicaremos contigo para confirmar disponibilidad.",
                  }),
                  (0, b.jsxs)("div", {
                    className: "mt-8 rounded-3xl border border-brand-100 bg-brand-50 p-6",
                    children: [
                      (0, b.jsx)("p", {
                        className: "font-semibold text-slate-950",
                        children: "¿Prefieres WhatsApp?",
                      }),
                      (0, b.jsx)("p", {
                        className: "mt-2 text-sm leading-6 text-slate-600",
                        children: "También puedes comunicarte directamente con nosotros.",
                      }),
                      (0, b.jsx)("a", {
                        href: e,
                        className:
                          "mt-4 inline-block font-semibold text-brand-800 transition hover:text-brand-600",
                        children: f.businessConfig.contact.whatsapp,
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8",
                children: (0, b.jsx)(i.Suspense, {
                  fallback: (0, b.jsx)("div", {
                    className: "py-12 text-center text-sm text-slate-500",
                    children: "Cargando formulario...",
                  }),
                  children: (0, b.jsx)(M.AppointmentForm, { minDate: a, maxDate: c }),
                }),
              }),
            ],
          }),
        }),
      });
    }
    var P = a.i(45890);
    function Q() {
      let { contact: a, location: c, social: e } = f.businessConfig;
      return (0, b.jsx)("section", {
        id: "contacto",
        className: "scroll-mt-24 py-16 md:py-24",
        children: (0, b.jsx)(d, {
          children: (0, b.jsxs)("div", {
            className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr]",
            children: [
              (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)(A, {
                    eyebrow: "Contacto",
                    title: "Estamos para ayudarte",
                    description: "Envíanos un mensaje y nos pondremos en contacto contigo.",
                  }),
                  (0, b.jsxs)("div", {
                    className: "mt-8 space-y-6",
                    children: [
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("p", {
                            className: "text-sm font-medium text-slate-500",
                            children: "Teléfono",
                          }),
                          (0, b.jsx)("a", {
                            href: `tel:${a.phone.replace(/\D/g, "")}`,
                            className:
                              "mt-1 block font-semibold text-slate-950 transition hover:text-brand-700",
                            children: a.phone,
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("p", {
                            className: "text-sm font-medium text-slate-500",
                            children: "Correo",
                          }),
                          (0, b.jsx)("a", {
                            href: `mailto:${a.email}`,
                            className:
                              "mt-1 block font-semibold text-slate-950 transition hover:text-brand-700",
                            children: a.email,
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("p", {
                            className: "text-sm font-medium text-slate-500",
                            children: "Dirección",
                          }),
                          (0, b.jsx)("p", {
                            className: "mt-1 font-semibold text-slate-950",
                            children: c.address,
                          }),
                          (0, b.jsxs)("p", {
                            className: "text-slate-600",
                            children: [c.city, ", ", c.state],
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("p", {
                            className: "text-sm font-medium text-slate-500",
                            children: "Redes sociales",
                          }),
                          (0, b.jsx)(u, {
                            facebook: e.facebook,
                            instagram: e.instagram,
                            tiktok: e.tiktok,
                            className: "mt-3",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm md:p-8",
                children: (0, b.jsx)(P.ContactForm, {}),
              }),
            ],
          }),
        }),
      });
    }
    a.s(
      [
        "default",
        0,
        function () {
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(h, {}),
              (0, b.jsxs)("main", {
                id: "main-content",
                tabIndex: -1,
                children: [
                  (0, b.jsx)(z, {}),
                  (0, b.jsx)(B, {}),
                  (0, b.jsx)(F, {}),
                  (0, b.jsx)(H, {}),
                  (0, b.jsx)(I, {}),
                  (0, b.jsx)(O, {}),
                  (0, b.jsx)(J, {}),
                  (0, b.jsx)(Q, {}),
                ],
              }),
              (0, b.jsx)(v, {}),
              (0, b.jsx)(L, {}),
            ],
          });
        },
      ],
      60168,
    );
  },
  28004,
  function (a) {
    a.n(a.i(60168));
  },
];

//# sourceMappingURL=_0w3whp7._.js.map
