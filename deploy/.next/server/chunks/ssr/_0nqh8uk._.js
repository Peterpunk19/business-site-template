module.exports = [
  67161,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    let d = a.r(33354),
      e = a.r(46058),
      f = a.r(87924),
      g = e._(a.r(72131)),
      h = d._(a.r(35112)),
      i = d._(a.r(58018)),
      j = a.r(94915),
      k = a.r(345),
      l = a.r(4486),
      m = a.r(53773),
      n = d._(a.r(2305)),
      o = a.r(8591),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function q(a, b, c, d, e, f, g) {
      let h = a?.src;
      a &&
        a["data-loaded-src"] !== h &&
        ((a["data-loaded-src"] = h),
        ("decode" in a ? a.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (a.parentElement && a.isConnected) {
              if (("empty" !== b && e(!0), c?.current)) {
                let b = new Event("load");
                Object.defineProperty(b, "target", { writable: !1, value: a });
                let d = !1,
                  e = !1;
                c.current({
                  ...b,
                  nativeEvent: b,
                  currentTarget: a,
                  target: a,
                  isDefaultPrevented: () => d,
                  isPropagationStopped: () => e,
                  persist: () => {},
                  preventDefault: () => {
                    ((d = !0), b.preventDefault());
                  },
                  stopPropagation: () => {
                    ((e = !0), b.stopPropagation());
                  },
                });
              }
              d?.current && d.current(a);
            }
          }));
    }
    function r(a) {
      return g.use ? { fetchPriority: a } : { fetchpriority: a };
    }
    globalThis.__NEXT_IMAGE_IMPORTED = !0;
    let s = g.useEffect,
      t = (0, g.forwardRef)(
        (
          {
            src: a,
            srcSet: b,
            sizes: c,
            height: d,
            width: e,
            decoding: h,
            className: i,
            style: j,
            fetchPriority: k,
            placeholder: l,
            loading: m,
            unoptimized: n,
            fill: p,
            onLoadRef: t,
            onLoadingCompleteRef: u,
            setBlurComplete: v,
            setShowAltText: w,
            sizesInput: x,
            onLoad: y,
            onError: z,
            ...A
          },
          B,
        ) => {
          let C = (0, g.useRef)(!1),
            D = (0, g.useRef)(null);
          s(() => {
            let { current: a } = C,
              { current: b } = D;
            a ||
              null === b ||
              (z && (b.src = b.src), b.complete && q(b, l, t, u, v, n, x), (C.current = !0));
          }, [a, l, t, u, z, n, x]);
          let E = (0, o.useMergedRef)(B, D);
          return (0, f.jsx)("img", {
            ...A,
            ...r(k),
            loading: m,
            width: e,
            height: d,
            decoding: h,
            "data-nimg": p ? "fill" : "1",
            className: i,
            style: j,
            sizes: c,
            srcSet: b,
            src: a,
            ref: E,
            onLoad: (a) => {
              q(a.currentTarget, l, t, u, v, n, x);
            },
            onError: (a) => {
              (w(!0), "empty" !== l && v(!0), z && z(a));
            },
          });
        },
      );
    function u({ isAppRouter: a, imgAttributes: b }) {
      let c = {
        as: "image",
        imageSrcSet: b.srcSet,
        imageSizes: b.sizes,
        crossOrigin: b.crossOrigin,
        referrerPolicy: b.referrerPolicy,
        ...r(b.fetchPriority),
      };
      return a && h.default.preload
        ? (h.default.preload(b.src, c), null)
        : (0, f.jsx)(i.default, {
            children: (0, f.jsx)(
              "link",
              { rel: "preload", href: b.srcSet ? void 0 : b.src, ...c },
              "__nimg-" + b.src + b.srcSet + b.sizes,
            ),
          });
    }
    let v = (0, g.forwardRef)((a, b) => {
      let c = (0, g.useContext)(m.RouterContext),
        d = (0, g.useContext)(l.ImageConfigContext),
        e = (0, g.useMemo)(() => {
          let a = p || d || k.imageConfigDefault,
            b = [...a.deviceSizes, ...a.imageSizes].sort((a, b) => a - b),
            c = a.deviceSizes.sort((a, b) => a - b),
            e = a.qualities?.sort((a, b) => a - b);
          return {
            ...a,
            allSizes: b,
            deviceSizes: c,
            qualities: e,
            localPatterns: d?.localPatterns,
          };
        }, [d]),
        { onLoad: h, onLoadingComplete: i } = a,
        o = (0, g.useRef)(h);
      (0, g.useEffect)(() => {
        o.current = h;
      }, [h]);
      let q = (0, g.useRef)(i);
      (0, g.useEffect)(() => {
        q.current = i;
      }, [i]);
      let [r, s] = (0, g.useState)(!1),
        [v, w] = (0, g.useState)(!1),
        { props: x, meta: y } = (0, j.getImgProps)(a, {
          defaultLoader: n.default,
          imgConf: e,
          blurComplete: r,
          showAltText: v,
        });
      return (0, f.jsxs)(f.Fragment, {
        children: [
          (0, f.jsx)(t, {
            ...x,
            unoptimized: y.unoptimized,
            placeholder: y.placeholder,
            fill: y.fill,
            onLoadRef: o,
            onLoadingCompleteRef: q,
            setBlurComplete: s,
            setShowAltText: w,
            sizesInput: a.sizes,
            ref: b,
          }),
          y.preload ? (0, f.jsx)(u, { isAppRouter: !c, imgAttributes: x }) : null,
        ],
      });
    });
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  92966,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored.contexts.HeadManagerContext;
  },
  58018,
  (a, b, c) => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    var d = {
      default: function () {
        return p;
      },
      defaultHead: function () {
        return l;
      },
    };
    for (var e in d) Object.defineProperty(c, e, { enumerable: !0, get: d[e] });
    let f = a.r(33354),
      g = a.r(46058),
      h = a.r(87924),
      i = g._(a.r(72131)),
      j = f._(a.r(94613)),
      k = a.r(92966);
    function l() {
      return [
        (0, h.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, h.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
      ];
    }
    function m(a, b) {
      return "string" == typeof b || "number" == typeof b
        ? a
        : b.type === i.default.Fragment
          ? a.concat(
              i.default.Children.toArray(b.props.children).reduce(
                (a, b) => ("string" == typeof b || "number" == typeof b ? a : a.concat(b)),
                [],
              ),
            )
          : a.concat(b);
    }
    let n = ["name", "httpEquiv", "charSet", "itemProp"];
    function o(a) {
      let b, c, d, e;
      return a
        .reduce(m, [])
        .reverse()
        .concat(l().reverse())
        .filter(
          ((b = new Set()),
          (c = new Set()),
          (d = new Set()),
          (e = {}),
          (a) => {
            let f = !0,
              g = !1;
            if (a.key && "number" != typeof a.key && a.key.indexOf("$") > 0) {
              g = !0;
              let c = a.key.slice(a.key.indexOf("$") + 1);
              b.has(c) ? (f = !1) : b.add(c);
            }
            switch (a.type) {
              case "title":
              case "base":
                c.has(a.type) ? (f = !1) : c.add(a.type);
                break;
              case "meta":
                for (let b = 0, c = n.length; b < c; b++) {
                  let c = n[b];
                  if (a.props.hasOwnProperty(c))
                    if ("charSet" === c) d.has(c) ? (f = !1) : d.add(c);
                    else {
                      let b = a.props[c],
                        d = e[c] || new Set();
                      ("name" !== c || !g) && d.has(b) ? (f = !1) : (d.add(b), (e[c] = d));
                    }
                }
            }
            return f;
          }),
        )
        .reverse()
        .map((a, b) => {
          let c = a.key || b;
          return i.default.cloneElement(a, { key: c });
        });
    }
    let p = function ({ children: a }) {
      let b = (0, i.useContext)(k.HeadManagerContext);
      return (0, h.jsx)(j.default, { reduceComponentsToState: o, headManager: b, children: a });
    };
    ("function" == typeof c.default || ("object" == typeof c.default && null !== c.default)) &&
      void 0 === c.default.__esModule &&
      (Object.defineProperty(c.default, "__esModule", { value: !0 }),
      Object.assign(c.default, c),
      (b.exports = c.default));
  },
  4987,
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
  345,
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
  94915,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "getImgProps", {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let d = a.r(68063),
      e = a.r(4987),
      f = a.r(345),
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
  4486,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored.contexts.ImageConfigContext;
  },
  53773,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored.contexts.RouterContext;
  },
  35444,
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
  2305,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return g;
        },
      }));
    let d = a.r(35444),
      e = a.r(68063);
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
  94613,
  (a, b, c) => {
    "use strict";
    (Object.defineProperty(c, "__esModule", { value: !0 }),
      Object.defineProperty(c, "default", {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    let d = a.r(72131),
      e = () => {};
    function f(a) {
      let { headManager: b, reduceComponentsToState: c } = a;
      return (
        b?.mountedInstances?.add(a.children),
        (function () {
          if (b && b.mountedInstances) {
            let a = d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));
            b.updateHead(c(a));
          }
        })(),
        e(),
        e(),
        null
      );
    }
  },
  41720,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(38246),
      d = a.i(72131);
    let e = [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Galería", href: "#galeria" },
      { label: "Ubicación", href: "#ubicacion" },
      { label: "Contacto", href: "#contacto" },
    ];
    a.s(
      [
        "MobileNavigation",
        0,
        function () {
          let [a, f] = (0, d.useState)(!1);
          function g() {
            f(!1);
          }
          return (0, b.jsxs)("div", {
            className: "relative lg:hidden",
            children: [
              (0, b.jsxs)("button", {
                type: "button",
                onClick: () => f((a) => !a),
                "aria-expanded": a,
                "aria-controls": "mobile-navigation",
                "aria-label": a ? "Cerrar menú de navegación" : "Abrir menú de navegación",
                className:
                  "flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-slate-200 transition active:bg-slate-100 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                children: [
                  (0, b.jsx)("span", { className: "sr-only", children: "Menú" }),
                  (0, b.jsxs)("div", {
                    className: "space-y-1.5",
                    children: [
                      (0, b.jsx)("span", { className: "block h-0.5 w-5 bg-slate-900" }),
                      (0, b.jsx)("span", { className: "block h-0.5 w-5 bg-slate-900" }),
                      (0, b.jsx)("span", { className: "block h-0.5 w-5 bg-slate-900" }),
                    ],
                  }),
                ],
              }),
              a &&
                (0, b.jsx)("div", {
                  id: "mobile-navigation",
                  className:
                    "fixed left-0 right-0 top-20 z-50 border-t border-slate-100 bg-white shadow-lg",
                  children: (0, b.jsxs)("nav", {
                    "aria-label": "Navegación móvil",
                    className: "mx-auto flex max-w-7xl flex-col px-4 py-6",
                    children: [
                      e.map((a) =>
                        (0, b.jsx)(
                          c.default,
                          {
                            href: a.href,
                            onClick: g,
                            className:
                              "border-b border-slate-100 py-4 font-medium text-slate-700 transition active:text-brand-700 hover:text-brand-700 focus-visible:outline-none focus-visible:text-brand-700 last:border-0",
                            children: a.label,
                          },
                          a.href,
                        ),
                      ),
                      (0, b.jsx)(c.default, {
                        href: "#citas",
                        onClick: g,
                        className:
                          "mt-5 rounded-full bg-brand-700 px-6 py-3 text-center font-semibold text-white transition active:bg-brand-800 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                        children: "Agendar cita",
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
      ],
      41720,
    );
  },
  84443,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(50944),
      e = a.i(5050);
    let f = (0, e.createServerReference)(
        "600e2b4015879486fdd6c9664a5cae026703eedb36",
        e.callServer,
        void 0,
        e.findSourceMapURL,
        "createAppointment",
      ),
      g = [
        {
          id: "cleaning",
          name: "Limpieza dental",
          description:
            "Eliminación de sarro y placa bacteriana para mantener una sonrisa limpia y saludable.",
          image: "/images/services/cleaning.webp",
          imageAlt: "Procedimiento profesional de limpieza dental",
        },
        {
          id: "whitening",
          name: "Blanqueamiento dental",
          description:
            "Tratamiento profesional para mejorar el tono de los dientes y realzar tu sonrisa.",
          image: "/images/services/whitening.webp",
          imageAlt: "Resultado de tratamiento de blanqueamiento dental",
          price: 2500,
          promotionalPrice: 1990,
          promotionLabel: "Promoción especial",
          promotionDescription: "Precio especial durante agosto.",
          promotionValidUntil: "2026-08-31",
          featured: !0,
        },
        {
          id: "orthodontics",
          name: "Ortodoncia",
          description:
            "Tratamientos personalizados para mejorar la posición y función de tus dientes.",
          image: "/images/services/orthodontics.webp",
          imageAlt: "Tratamiento dental de ortodoncia",
        },
        {
          id: "implants",
          name: "Implantes dentales",
          description:
            "Soluciones para reemplazar piezas dentales y recuperar funcionalidad y estética.",
          image: "/images/services/cleaning.webp",
          imageAlt: "Tratamiento con implante dental",
        },
        {
          id: "restorations",
          name: "Restauraciones",
          description: "Tratamientos para recuperar dientes afectados por caries o daños.",
          image: "/images/services/cleaning.webp",
          imageAlt: "Restauración estética de una pieza dental",
        },
        {
          id: "evaluation",
          name: "Valoración dental",
          description:
            "Evaluación profesional para conocer el estado de tu salud bucal y definir el tratamiento adecuado.",
          image: "/images/services/cleaning.webp",
          imageAlt: "Dentista realizando una valoración dental",
        },
      ],
      h = { success: !1 };
    a.s(
      [
        "AppointmentForm",
        0,
        function ({ minDate: a, maxDate: e }) {
          let i = (0, d.useSearchParams)().get("service"),
            j = g.find((a) => a.id === i),
            [k, l, m] = (0, c.useActionState)(f, h),
            n = (0, c.useRef)(null);
          return (
            (0, c.useEffect)(() => {
              k.success && n.current?.reset();
            }, [k.success]),
            (0, b.jsxs)(b.Fragment, {
              children: [
                j &&
                  (0, b.jsxs)("div", {
                    className: "mb-6 rounded-2xl border border-brand-100 bg-brand-50 p-4",
                    children: [
                      (0, b.jsx)("p", {
                        className: "text-sm font-medium text-brand-700",
                        children: "Servicio seleccionado",
                      }),
                      (0, b.jsx)("p", {
                        className: "mt-1 font-semibold text-slate-950",
                        children: j.name,
                      }),
                    ],
                  }),
                (0, b.jsxs)("form", {
                  ref: n,
                  action: l,
                  className: "space-y-6",
                  children: [
                    (0, b.jsxs)("div", {
                      className: "hidden",
                      "aria-hidden": "true",
                      children: [
                        (0, b.jsx)("label", { htmlFor: "website", children: "Website" }),
                        (0, b.jsx)("input", {
                          id: "website",
                          name: "website",
                          type: "text",
                          tabIndex: -1,
                          autoComplete: "off",
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("label", {
                          htmlFor: "name",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Nombre",
                        }),
                        (0, b.jsx)("input", {
                          id: "name",
                          name: "name",
                          type: "text",
                          maxLength: 100,
                          required: !0,
                          "aria-invalid": !!k.errors?.name,
                          "aria-describedby": k.errors?.name ? "name-error" : void 0,
                          placeholder: "Tu nombre",
                          className:
                            "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                        }),
                        k.errors?.name &&
                          (0, b.jsx)("p", {
                            id: "name-error",
                            className: "mt-2 text-sm text-red-600",
                            children: k.errors.name[0],
                          }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "grid gap-6 sm:grid-cols-2",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("label", {
                              htmlFor: "phone",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Teléfono",
                            }),
                            (0, b.jsx)("input", {
                              id: "phone",
                              name: "phone",
                              type: "tel",
                              required: !0,
                              inputMode: "numeric",
                              autoComplete: "tel",
                              maxLength: 10,
                              pattern: "[0-9]{10}",
                              "aria-invalid": !!k.errors?.phone,
                              "aria-describedby": k.errors?.phone ? "phone-error" : void 0,
                              placeholder: "9610000000",
                              onInput: (a) => {
                                a.currentTarget.value = a.currentTarget.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);
                              },
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            k.errors?.phone &&
                              (0, b.jsx)("p", {
                                id: "phone-error",
                                className: "mt-2 text-sm text-red-600",
                                children: k.errors.phone[0],
                              }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("label", {
                              htmlFor: "email",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Correo",
                            }),
                            (0, b.jsx)("input", {
                              id: "email",
                              name: "email",
                              type: "email",
                              autoComplete: "email",
                              "aria-invalid": !!k.errors?.email,
                              "aria-describedby": k.errors?.email ? "email-error" : void 0,
                              placeholder: "correo@ejemplo.com",
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            k.errors?.email &&
                              (0, b.jsx)("p", {
                                id: "email-error",
                                className: "mt-2 text-sm text-red-600",
                                children: k.errors.email[0],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("label", {
                          htmlFor: "service",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Servicio",
                        }),
                        (0, b.jsxs)("select", {
                          id: "service",
                          name: "service",
                          required: !0,
                          defaultValue: j?.id ?? "",
                          "aria-invalid": !!k.errors?.service,
                          "aria-describedby": k.errors?.service ? "service-error" : void 0,
                          className:
                            "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                          children: [
                            (0, b.jsx)("option", {
                              value: "",
                              disabled: !0,
                              children: "Selecciona un servicio",
                            }),
                            g.map((a) =>
                              (0, b.jsx)("option", { value: a.id, children: a.name }, a.id),
                            ),
                          ],
                        }),
                        k.errors?.service &&
                          (0, b.jsx)("p", {
                            id: "service-error",
                            className: "mt-2 text-sm text-red-600",
                            children: k.errors.service[0],
                          }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "grid gap-6 sm:grid-cols-2",
                      children: [
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("label", {
                              htmlFor: "preferredDate",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Fecha preferida",
                            }),
                            (0, b.jsx)("input", {
                              id: "preferredDate",
                              name: "preferredDate",
                              type: "date",
                              required: !0,
                              min: a,
                              max: e,
                              "aria-invalid": !!k.errors?.preferredDate,
                              "aria-describedby": k.errors?.preferredDate
                                ? "preferredDate-error"
                                : void 0,
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            k.errors?.preferredDate &&
                              (0, b.jsx)("p", {
                                id: "preferredDate-error",
                                className: "mt-2 text-sm text-red-600",
                                children: k.errors.preferredDate[0],
                              }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          children: [
                            (0, b.jsx)("label", {
                              htmlFor: "preferredTime",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Horario preferido",
                            }),
                            (0, b.jsx)("input", {
                              id: "preferredTime",
                              name: "preferredTime",
                              type: "time",
                              required: !0,
                              "aria-invalid": !!k.errors?.preferredTime,
                              "aria-describedby": k.errors?.preferredTime
                                ? "preferredTime-error"
                                : void 0,
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            k.errors?.preferredTime &&
                              (0, b.jsx)("p", {
                                id: "preferredTime-error",
                                className: "mt-2 text-sm text-red-600",
                                children: k.errors.preferredTime[0],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("label", {
                          htmlFor: "message",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Comentarios",
                        }),
                        (0, b.jsx)("textarea", {
                          id: "message",
                          name: "message",
                          rows: 4,
                          maxLength: 500,
                          "aria-invalid": !!k.errors?.message,
                          "aria-describedby": k.errors?.message ? "message-error" : void 0,
                          placeholder: "Cuéntanos brevemente cómo podemos ayudarte.",
                          className:
                            "w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                        }),
                        k.errors?.message &&
                          (0, b.jsx)("p", {
                            id: "message-error",
                            className: "mt-2 text-sm text-red-600",
                            children: k.errors.message[0],
                          }),
                      ],
                    }),
                    k.message &&
                      (0, b.jsx)("div", {
                        role: "status",
                        "aria-live": "polite",
                        className: `rounded-xl p-4 text-sm ${k.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
                        children: k.message,
                      }),
                    (0, b.jsx)("button", {
                      type: "submit",
                      disabled: m,
                      className:
                        "w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
                      children: m ? "Enviando solicitud..." : "Solicitar cita",
                    }),
                  ],
                }),
              ],
            })
          );
        },
      ],
      84443,
    );
  },
  56161,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(5050);
    let e = (0, d.createServerReference)(
        "6001e9b266bfb46213136d22da8eaadc79ea65cf68",
        d.callServer,
        void 0,
        d.findSourceMapURL,
        "createContactMessage",
      ),
      f = { success: !1 };
    a.s(
      [
        "ContactForm",
        0,
        function () {
          let [a, d, g] = (0, c.useActionState)(e, f),
            h = (0, c.useRef)(null);
          return (
            (0, c.useEffect)(() => {
              a.success && h.current?.reset();
            }, [a.success]),
            (0, b.jsxs)("form", {
              ref: h,
              action: d,
              className: "space-y-6",
              children: [
                (0, b.jsxs)("div", {
                  className: "hidden",
                  "aria-hidden": "true",
                  children: [
                    (0, b.jsx)("label", { htmlFor: "contact-website", children: "Website" }),
                    (0, b.jsx)("input", {
                      id: "contact-website",
                      name: "website",
                      type: "text",
                      tabIndex: -1,
                      autoComplete: "off",
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "grid gap-6 sm:grid-cols-2",
                  children: [
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("label", {
                          htmlFor: "contact-name",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Nombre",
                        }),
                        (0, b.jsx)("input", {
                          id: "contact-name",
                          name: "name",
                          required: !0,
                          type: "text",
                          maxLength: 100,
                          "aria-invalid": !!a.errors?.name,
                          "aria-describedby": a.errors?.name ? "contact-name-error" : void 0,
                          placeholder: "Tu nombre",
                          className:
                            "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                        }),
                        a.errors?.name &&
                          (0, b.jsx)("p", {
                            id: "contact-name-error",
                            className: "mt-2 text-sm text-red-600",
                            children: a.errors.name[0],
                          }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      children: [
                        (0, b.jsx)("label", {
                          htmlFor: "contact-phone",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Teléfono",
                        }),
                        (0, b.jsx)("input", {
                          id: "contact-phone",
                          name: "phone",
                          type: "tel",
                          required: !0,
                          inputMode: "numeric",
                          autoComplete: "tel",
                          maxLength: 10,
                          pattern: "[0-9]{10}",
                          "aria-invalid": !!a.errors?.phone,
                          "aria-describedby": a.errors?.phone ? "contact-phone-error" : void 0,
                          placeholder: "9610000000",
                          onInput: (a) => {
                            a.currentTarget.value = a.currentTarget.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                          },
                          className:
                            "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                        }),
                        a.errors?.phone &&
                          (0, b.jsx)("p", {
                            id: "contact-phone-error",
                            className: "mt-2 text-sm text-red-600",
                            children: a.errors.phone[0],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("label", {
                      htmlFor: "contact-email",
                      className: "mb-2 block text-sm font-medium text-slate-700",
                      children: "Correo",
                    }),
                    (0, b.jsx)("input", {
                      id: "contact-email",
                      name: "email",
                      type: "email",
                      autoComplete: "email",
                      required: !0,
                      "aria-invalid": !!a.errors?.email,
                      "aria-describedby": a.errors?.email ? "contact-email-error" : void 0,
                      placeholder: "correo@ejemplo.com",
                      className:
                        "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                    }),
                    a.errors?.email &&
                      (0, b.jsx)("p", {
                        id: "contact-email-error",
                        className: "mt-2 text-sm text-red-600",
                        children: a.errors.email[0],
                      }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("label", {
                      htmlFor: "contact-subject",
                      className: "mb-2 block text-sm font-medium text-slate-700",
                      children: "Asunto",
                    }),
                    (0, b.jsx)("input", {
                      id: "contact-subject",
                      name: "subject",
                      type: "text",
                      maxLength: 150,
                      "aria-invalid": !!a.errors?.subject,
                      "aria-describedby": a.errors?.subject ? "contact-subject-error" : void 0,
                      placeholder: "¿En qué podemos ayudarte?",
                      className:
                        "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                    }),
                    a.errors?.subject &&
                      (0, b.jsx)("p", {
                        id: "contact-subject-error",
                        className: "mt-2 text-sm text-red-600",
                        children: a.errors.subject[0],
                      }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  children: [
                    (0, b.jsx)("label", {
                      htmlFor: "contact-message",
                      className: "mb-2 block text-sm font-medium text-slate-700",
                      children: "Mensaje",
                    }),
                    (0, b.jsx)("textarea", {
                      id: "contact-message",
                      name: "message",
                      required: !0,
                      maxLength: 1e3,
                      rows: 5,
                      "aria-invalid": !!a.errors?.message,
                      "aria-describedby": a.errors?.message ? "contact-message-error" : void 0,
                      placeholder: "Escribe tu mensaje...",
                      className:
                        "w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                    }),
                    a.errors?.message &&
                      (0, b.jsx)("p", {
                        id: "contact-message-error",
                        className: "mt-2 text-sm text-red-600",
                        children: a.errors.message[0],
                      }),
                  ],
                }),
                a.message &&
                  (0, b.jsx)("div", {
                    role: "status",
                    "aria-live": "polite",
                    className: `rounded-xl p-4 text-sm ${a.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
                    children: a.message,
                  }),
                (0, b.jsx)("button", {
                  type: "submit",
                  disabled: g,
                  className:
                    "w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
                  children: g ? "Enviando..." : "Enviar mensaje",
                }),
              ],
            })
          );
        },
      ],
      56161,
    );
  },
];

//# sourceMappingURL=_0nqh8uk._.js.map
