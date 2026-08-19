(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  95187,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      callServer: function () {
        return a.callServer;
      },
      createServerReference: function () {
        return s.createServerReference;
      },
      findSourceMapURL: function () {
        return o.findSourceMapURL;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(32120),
      o = e.r(92245),
      s = e.r(35326);
  },
  22016,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(90809),
      o = e.r(43476),
      s = a._(e.r(71645)),
      l = e.r(95057),
      c = e.r(8372),
      d = e.r(18581),
      u = e.r(18967),
      f = e.r(5550),
      m = e.r(88540),
      p = e.r(91949),
      b = e.r(73668),
      h = e.r(9396);
    function g(t) {
      var r;
      let n,
        i,
        a,
        [g, v] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
        y = (0, s.useRef)(null),
        {
          href: j,
          as: w,
          children: _,
          prefetch: S = null,
          passHref: P,
          replace: N,
          shallow: E,
          scroll: C,
          onClick: O,
          onMouseEnter: R,
          onTouchStart: T,
          legacyBehavior: M = !1,
          onNavigate: k,
          transitionTypes: A,
          ref: I,
          unstable_dynamicOnHover: L,
          ...z
        } = t;
      ((n = _),
        M &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, o.jsx)("a", { children: n })));
      let D = s.default.useContext(c.AppRouterContext),
        $ = !1 !== S,
        F = !1 === S ? "none" : !0 === S ? "full" : "auto",
        U =
          "none" !== F
            ? "auto" === F
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        q = "string" == typeof (r = w || j) ? r : (0, l.formatUrl)(r);
      if (M) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        i = s.default.Children.only(n);
      }
      let B = M ? i && "object" == typeof i && i.ref : I,
        W,
        G = s.default.useCallback(
          (e) => (
            null !== D && (y.current = (0, p.mountLinkInstance)(e, q, D, U, $, v, W)),
            () => {
              (y.current && ((0, p.unmountLinkForCurrentNavigation)(y.current), (y.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [$, q, D, U, v, W],
        ),
        K = {
          ref: (0, d.useMergedRef)(G, B),
          onClick(t) {
            (M || "function" != typeof O || O(t),
              M && i.props && "function" == typeof i.props.onClick && i.props.onClick(t),
              !D ||
                t.defaultPrevented ||
                (function (t, r, n, i, a, o, l, c = "none") {
                  if ("u" > typeof window) {
                    let d,
                      { nodeName: u } = t.currentTarget;
                    if (
                      ("A" === u.toUpperCase() &&
                        (((d = t.currentTarget.getAttribute("target")) && "_self" !== d) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, b.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(99781);
                    s.default.startTransition(() => {
                      f(
                        r,
                        i ? "replace" : "push",
                        !1 === a ? m.ScrollBehavior.NoScroll : m.ScrollBehavior.Default,
                        n.current,
                        l,
                        c,
                      );
                    });
                  }
                })(t, q, y, N, C, k, A, F));
          },
          onMouseEnter(e) {
            (M || "function" != typeof R || R(e),
              M && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e),
              D && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (M || "function" != typeof T || T(e),
              M && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e),
              D && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(q)
          ? (K.href = q)
          : (M && !P && ("a" !== i.type || "href" in i.props)) || (K.href = (0, f.addBasePath)(q)),
        (a = M ? s.default.cloneElement(i, K) : (0, o.jsx)("a", { ...z, ...K, children: n })),
        (0, o.jsx)(x.Provider, { value: g, children: a })
      );
    }
    let x = (0, s.createContext)(p.IDLE_LINK_STATUS),
      v = () => (0, s.useContext)(x);
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  5500,
  (e, t, r) => {
    "use strict";
    (e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let n = e.r(55682),
      i = e.r(90809),
      a = e.r(43476),
      o = i._(e.r(71645)),
      s = n._(e.r(74080)),
      l = n._(e.r(25633)),
      c = e.r(8927),
      d = e.r(87690),
      u = e.r(18556),
      f = e.r(65856),
      m = n._(e.r(1948)),
      p = e.r(18581),
      b = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function h(e, t, r, n, i, a, o) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    ((n = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((i = !0), t.stopPropagation());
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function g(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let x = "u" < typeof window ? o.useEffect : o.useLayoutEffect,
      v = (0, o.forwardRef)(
        (
          {
            src: e,
            srcSet: t,
            sizes: r,
            height: n,
            width: i,
            decoding: s,
            className: l,
            style: c,
            fetchPriority: d,
            placeholder: u,
            loading: f,
            unoptimized: m,
            fill: b,
            onLoadRef: v,
            onLoadingCompleteRef: y,
            setBlurComplete: j,
            setShowAltText: w,
            sizesInput: _,
            onLoad: S,
            onError: P,
            ...N
          },
          E,
        ) => {
          let C = (0, o.useRef)(!1),
            O = (0, o.useRef)(null);
          x(() => {
            let { current: e } = C,
              { current: t } = O;
            e ||
              null === t ||
              (P && (t.src = t.src), t.complete && h(t, u, v, y, j, m, _), (C.current = !0));
          }, [e, u, v, y, P, m, _]);
          let R = (0, p.useMergedRef)(E, O);
          return (0, a.jsx)("img", {
            ...N,
            ...g(d),
            loading: f,
            width: i,
            height: n,
            decoding: s,
            "data-nimg": b ? "fill" : "1",
            className: l,
            style: c,
            sizes: r,
            srcSet: t,
            src: e,
            ref: R,
            onLoad: (e) => {
              h(e.currentTarget, u, v, y, j, m, _);
            },
            onError: (e) => {
              (w(!0), "empty" !== u && j(!0), P && P(e));
            },
          });
        },
      );
    function y({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...g(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, a.jsx)(l.default, {
            children: (0, a.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let j = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(f.RouterContext),
        n = (0, o.useContext)(u.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = b || n || d.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: s, onLoadingComplete: l } = e,
        p = (0, o.useRef)(s);
      (0, o.useEffect)(() => {
        p.current = s;
      }, [s]);
      let h = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        h.current = l;
      }, [l]);
      let [g, x] = (0, o.useState)(!1),
        [j, w] = (0, o.useState)(!1),
        { props: _, meta: S } = (0, c.getImgProps)(e, {
          defaultLoader: m.default,
          imgConf: i,
          blurComplete: g,
          showAltText: j,
        });
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(v, {
            ..._,
            unoptimized: S.unoptimized,
            placeholder: S.placeholder,
            fill: S.fill,
            onLoadRef: p,
            onLoadingCompleteRef: h,
            setBlurComplete: x,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t,
          }),
          S.preload ? (0, a.jsx)(y, { isAppRouter: !r, imgAttributes: _ }) : null,
        ],
      });
    });
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(71645);
    function i(e, t) {
      let r = (0, n.useRef)(null),
        i = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = i.current;
            t && ((i.current = null), t());
          } else (e && (r.current = a(e, n)), t && (i.current = a(t, n)));
        },
        [e, t],
      );
    }
    function a(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  25633,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      default: function () {
        return b;
      },
      defaultHead: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(55682),
      o = e.r(90809),
      s = e.r(43476),
      l = o._(e.r(71645)),
      c = a._(e.r(98879)),
      d = e.r(42732);
    function u() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                [],
              ),
            )
          : e.concat(t);
    }
    let m = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, n, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(u().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let a = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (a = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (a = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = m.length; t < r; t++) {
                  let r = m[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (a = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !o) && n.has(t) ? (a = !1) : (n.add(t), (i[r] = n));
                    }
                }
            }
            return a;
          }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let b = function ({ children: e }) {
      let t = (0, l.useContext)(d.HeadManagerContext);
      return (0, s.jsx)(c.default, { reduceComponentsToState: p, headManager: t, children: e });
    };
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  88143,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: i,
      blurDataURL: a,
      objectFit: o,
    }) {
      let s = r ? 40 * r : e,
        l = i ? 40 * i : t,
        c = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  87690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return a;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
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
  8927,
  (e, t, r) => {
    "use strict";
    (e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    let n = e.r(43369),
      i = e.r(88143),
      a = e.r(87690),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function c(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: d = !1,
        preload: u = !1,
        loading: f,
        className: m,
        quality: p,
        width: b,
        height: h,
        fill: g = !1,
        style: x,
        overrideSrc: v,
        onLoad: y,
        onLoadingComplete: j,
        placeholder: w = "empty",
        blurDataURL: _,
        fetchPriority: S,
        decoding: P = "async",
        layout: N,
        objectFit: E,
        objectPosition: C,
        lazyBoundary: O,
        lazyRoot: R,
        ...T
      },
      M,
    ) {
      var k;
      let A,
        I,
        L,
        { imgConf: z, showAltText: D, blurComplete: $, defaultLoader: F } = M,
        U = z || a.imageConfigDefault;
      if ("allSizes" in U) A = U;
      else {
        let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
          t = U.deviceSizes.sort((e, t) => e - t),
          r = U.qualities?.sort((e, t) => e - t);
        A = { ...U, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === F)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let q = T.loader || F;
      (delete T.loader, delete T.srcSet);
      let B = "__next_img_default" in q;
      if (B) {
        if ("custom" === A.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = q;
        q = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (N) {
        "fill" === N && (g = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[N];
        e && (x = { ...x, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[N];
        r && !t && (t = r);
      }
      let W = "",
        G = l(b),
        K = l(h);
      if ((k = e) && "object" == typeof k && (s(k) || void 0 !== k.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (((I = t.blurWidth), (L = t.blurHeight), (_ = _ || t.blurDataURL), (W = t.src), !g))
          if (G || K) {
            if (G && !K) {
              let e = G / t.width;
              K = Math.round(t.height * e);
            } else if (!G && K) {
              let e = K / t.height;
              G = Math.round(t.width * e);
            }
          } else ((G = t.width), (K = t.height));
      }
      let V = !d && !u && ("lazy" === f || void 0 === f);
      ((!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) &&
        ((r = !0), (V = !1)),
        A.unoptimized && (r = !0),
        B && !A.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0));
      let X = l(p),
        H = Object.assign(
          g
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: E,
                objectPosition: C,
              }
            : {},
          D ? {} : { color: "transparent" },
          x,
        ),
        Q =
          $ || "empty" === w
            ? null
            : "blur" === w
              ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: G, heightInt: K, blurWidth: I, blurHeight: L, blurDataURL: _ || "", objectFit: H.objectFit })}")`
              : `url("${w}")`,
        J = o.includes(H.objectFit)
          ? "fill" === H.objectFit
            ? "100% 100%"
            : "cover"
          : H.objectFit,
        Y = Q
          ? {
              backgroundSize: J,
              backgroundPosition: H.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Q,
            }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: a,
          sizes: o,
          loader: s,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, n.getDeploymentId)();
              if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) e = void 0;
              else if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let n = new URLSearchParams(t.slice(r + 1));
                  n.get("dpl") || (n.append("dpl", e), (t = t.slice(0, r) + "?" + n.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: c } = (function ({ deviceSizes: e, allSizes: t }, r, n) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n));) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set([r, 2 * r].map((e) => t.find((t) => t >= e) || t[t.length - 1])),
                    ],
                    kind: "x",
                  };
            })(e, i, o),
            d = l.length - 1;
          return {
            sizes: o || "w" !== c ? o : "100vw",
            srcSet: l
              .map(
                (r, n) =>
                  `${s({ config: e, src: t, quality: a, width: r })} ${"w" === c ? r : n + 1}${c}`,
              )
              .join(", "),
            src: s({ config: e, src: t, quality: a, width: l[d] }),
          };
        })({ config: A, src: e, unoptimized: r, width: G, quality: X, sizes: t, loader: q }),
        ee = V ? "lazy" : f;
      return {
        props: {
          ...T,
          loading: ee,
          fetchPriority: S,
          width: G,
          height: K,
          decoding: P,
          className: m,
          style: { ...H, ...Y },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: v || Z.src,
        },
        meta: { unoptimized: r, preload: u || d, placeholder: w, fill: g },
      };
    }
  },
  18556,
  (e, t, r) => {
    "use strict";
    (e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(55682)._(e.r(71645)),
      i = e.r(87690),
      a = n.default.createContext(i.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    (e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce((e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e), t.qualities[0])
        : r;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  1948,
  (e, t, r) => {
    "use strict";
    (e.i(47167),
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(70965),
      i = e.r(43369);
    function a({ config: e, src: t, width: r, quality: o }) {
      let s = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//"))
        if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) s = void 0;
        else {
          let e = t.indexOf("?");
          if (-1 !== e) {
            let r = new URLSearchParams(t.slice(e + 1)),
              n = r.get("dpl");
            if (n) {
              ((s = n), r.delete("dpl"));
              let i = r.toString();
              t = t.slice(0, e) + (i ? "?" + i : "");
            }
          }
        }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let l = (0, n.findClosestQuality)(o, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/") && s ? `&dpl=${s}` : ""}`;
    }
    a.__next_img_default = !0;
    let o = a;
  },
  73668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(18967),
      i = e.r(52817);
    function a(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, i.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return a;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    function a(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e ? (t[r] = n) : Array.isArray(e) ? e.push(n) : (t[r] = [e, n]);
      }
      return t;
    }
    function o(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, o(e));
        else t.set(r, o(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = e.r(90809)._(e.r(98183)),
      o = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        i = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r && ((c = t + (~r.indexOf(":") ? `[${r}]` : r)), e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(a.urlQueryToSearchParams(l))));
      let d = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || o.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), i && "/" !== i[0] && (i = "/" + i))
          : c || (c = ""),
        s && "#" !== s[0] && (s = "#" + s),
        d && "?" !== d[0] && (d = "?" + d),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${n}${c}${i}${d}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return s(e);
    }
  },
  98879,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let n = e.r(71645),
      i = "u" < typeof window,
      a = i ? () => {} : n.useLayoutEffect,
      o = i ? () => {} : n.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), s()),
        a(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        a(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          ),
        ),
        o(
          () => (
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  18967,
  (e, t, r) => {
    "use strict";
    (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return y;
      },
      NormalizeError: function () {
        return x;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return b;
      },
      ST: function () {
        return h;
      },
      WEB_VITALS: function () {
        return a;
      },
      execOnce: function () {
        return o;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return d;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return m;
      },
      stringifyError: function () {
        return w;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function o(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => {
        let t = e.charCodeAt(0);
        return !!((t >= 65 && t <= 90) || (t >= 97 && t <= 122)) && s.test(e);
      };
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function m(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function p(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component ? { pageProps: await p(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let b = "u" > typeof performance,
      h =
        b &&
        ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class g extends Error {}
    class x extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class y extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class j extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function w(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  18566,
  (e, t, r) => {
    t.exports = e.r(76562);
  },
  16759,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22016),
      n = e.i(71645);
    let i = [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Galería", href: "#galeria" },
      { label: "Ubicación", href: "#ubicacion" },
      { label: "Contacto", href: "#contacto" },
    ];
    e.s(
      [
        "MobileNavigation",
        0,
        function () {
          let [e, a] = (0, n.useState)(!1);
          function o() {
            a(!1);
          }
          return (0, t.jsxs)("div", {
            className: "relative lg:hidden",
            children: [
              (0, t.jsxs)("button", {
                type: "button",
                onClick: () => a((e) => !e),
                "aria-expanded": e,
                "aria-controls": "mobile-navigation",
                "aria-label": e ? "Cerrar menú de navegación" : "Abrir menú de navegación",
                className:
                  "flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-slate-200 transition active:bg-slate-100 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                children: [
                  (0, t.jsx)("span", { className: "sr-only", children: "Menú" }),
                  (0, t.jsxs)("div", {
                    className: "space-y-1.5",
                    children: [
                      (0, t.jsx)("span", { className: "block h-0.5 w-5 bg-slate-900" }),
                      (0, t.jsx)("span", { className: "block h-0.5 w-5 bg-slate-900" }),
                      (0, t.jsx)("span", { className: "block h-0.5 w-5 bg-slate-900" }),
                    ],
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  id: "mobile-navigation",
                  className:
                    "fixed left-0 right-0 top-20 z-50 border-t border-slate-100 bg-white shadow-lg",
                  children: (0, t.jsxs)("nav", {
                    "aria-label": "Navegación móvil",
                    className: "mx-auto flex max-w-7xl flex-col px-4 py-6",
                    children: [
                      i.map((e) =>
                        (0, t.jsx)(
                          r.default,
                          {
                            href: e.href,
                            onClick: o,
                            className:
                              "border-b border-slate-100 py-4 font-medium text-slate-700 transition active:text-brand-700 hover:text-brand-700 focus-visible:outline-none focus-visible:text-brand-700 last:border-0",
                            children: e.label,
                          },
                          e.href,
                        ),
                      ),
                      (0, t.jsx)(r.default, {
                        href: "#citas",
                        onClick: o,
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
      16759,
    );
  },
  50663,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(18566),
      i = e.i(95187);
    let a = (0, i.createServerReference)(
        "600e2b4015879486fdd6c9664a5cae026703eedb36",
        i.callServer,
        void 0,
        i.findSourceMapURL,
        "createAppointment",
      ),
      o = [
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
      s = { success: !1 };
    e.s(
      [
        "AppointmentForm",
        0,
        function ({ minDate: e, maxDate: i }) {
          let l = (0, n.useSearchParams)().get("service"),
            c = o.find((e) => e.id === l),
            [d, u, f] = (0, r.useActionState)(a, s),
            m = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              d.success && m.current?.reset();
            }, [d.success]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                c &&
                  (0, t.jsxs)("div", {
                    className: "mb-6 rounded-2xl border border-brand-100 bg-brand-50 p-4",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-sm font-medium text-brand-700",
                        children: "Servicio seleccionado",
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-1 font-semibold text-slate-950",
                        children: c.name,
                      }),
                    ],
                  }),
                (0, t.jsxs)("form", {
                  ref: m,
                  action: u,
                  className: "space-y-6",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "hidden",
                      "aria-hidden": "true",
                      children: [
                        (0, t.jsx)("label", { htmlFor: "website", children: "Website" }),
                        (0, t.jsx)("input", {
                          id: "website",
                          name: "website",
                          type: "text",
                          tabIndex: -1,
                          autoComplete: "off",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "name",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Nombre",
                        }),
                        (0, t.jsx)("input", {
                          id: "name",
                          name: "name",
                          type: "text",
                          maxLength: 100,
                          required: !0,
                          "aria-invalid": !!d.errors?.name,
                          "aria-describedby": d.errors?.name ? "name-error" : void 0,
                          placeholder: "Tu nombre",
                          className:
                            "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                        }),
                        d.errors?.name &&
                          (0, t.jsx)("p", {
                            id: "name-error",
                            className: "mt-2 text-sm text-red-600",
                            children: d.errors.name[0],
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "grid gap-6 sm:grid-cols-2",
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "phone",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Teléfono",
                            }),
                            (0, t.jsx)("input", {
                              id: "phone",
                              name: "phone",
                              type: "tel",
                              required: !0,
                              inputMode: "numeric",
                              autoComplete: "tel",
                              maxLength: 10,
                              pattern: "[0-9]{10}",
                              "aria-invalid": !!d.errors?.phone,
                              "aria-describedby": d.errors?.phone ? "phone-error" : void 0,
                              placeholder: "9610000000",
                              onInput: (e) => {
                                e.currentTarget.value = e.currentTarget.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);
                              },
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            d.errors?.phone &&
                              (0, t.jsx)("p", {
                                id: "phone-error",
                                className: "mt-2 text-sm text-red-600",
                                children: d.errors.phone[0],
                              }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "email",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Correo",
                            }),
                            (0, t.jsx)("input", {
                              id: "email",
                              name: "email",
                              type: "email",
                              autoComplete: "email",
                              "aria-invalid": !!d.errors?.email,
                              "aria-describedby": d.errors?.email ? "email-error" : void 0,
                              placeholder: "correo@ejemplo.com",
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            d.errors?.email &&
                              (0, t.jsx)("p", {
                                id: "email-error",
                                className: "mt-2 text-sm text-red-600",
                                children: d.errors.email[0],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "service",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Servicio",
                        }),
                        (0, t.jsxs)("select", {
                          id: "service",
                          name: "service",
                          required: !0,
                          defaultValue: c?.id ?? "",
                          "aria-invalid": !!d.errors?.service,
                          "aria-describedby": d.errors?.service ? "service-error" : void 0,
                          className:
                            "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                          children: [
                            (0, t.jsx)("option", {
                              value: "",
                              disabled: !0,
                              children: "Selecciona un servicio",
                            }),
                            o.map((e) =>
                              (0, t.jsx)("option", { value: e.id, children: e.name }, e.id),
                            ),
                          ],
                        }),
                        d.errors?.service &&
                          (0, t.jsx)("p", {
                            id: "service-error",
                            className: "mt-2 text-sm text-red-600",
                            children: d.errors.service[0],
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "grid gap-6 sm:grid-cols-2",
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "preferredDate",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Fecha preferida",
                            }),
                            (0, t.jsx)("input", {
                              id: "preferredDate",
                              name: "preferredDate",
                              type: "date",
                              required: !0,
                              min: e,
                              max: i,
                              "aria-invalid": !!d.errors?.preferredDate,
                              "aria-describedby": d.errors?.preferredDate
                                ? "preferredDate-error"
                                : void 0,
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            d.errors?.preferredDate &&
                              (0, t.jsx)("p", {
                                id: "preferredDate-error",
                                className: "mt-2 text-sm text-red-600",
                                children: d.errors.preferredDate[0],
                              }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "preferredTime",
                              className: "mb-2 block text-sm font-medium text-slate-700",
                              children: "Horario preferido",
                            }),
                            (0, t.jsx)("input", {
                              id: "preferredTime",
                              name: "preferredTime",
                              type: "time",
                              required: !0,
                              "aria-invalid": !!d.errors?.preferredTime,
                              "aria-describedby": d.errors?.preferredTime
                                ? "preferredTime-error"
                                : void 0,
                              className:
                                "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                            }),
                            d.errors?.preferredTime &&
                              (0, t.jsx)("p", {
                                id: "preferredTime-error",
                                className: "mt-2 text-sm text-red-600",
                                children: d.errors.preferredTime[0],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "message",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Comentarios",
                        }),
                        (0, t.jsx)("textarea", {
                          id: "message",
                          name: "message",
                          rows: 4,
                          maxLength: 500,
                          "aria-invalid": !!d.errors?.message,
                          "aria-describedby": d.errors?.message ? "message-error" : void 0,
                          placeholder: "Cuéntanos brevemente cómo podemos ayudarte.",
                          className:
                            "w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                        }),
                        d.errors?.message &&
                          (0, t.jsx)("p", {
                            id: "message-error",
                            className: "mt-2 text-sm text-red-600",
                            children: d.errors.message[0],
                          }),
                      ],
                    }),
                    d.message &&
                      (0, t.jsx)("div", {
                        role: "status",
                        "aria-live": "polite",
                        className: `rounded-xl p-4 text-sm ${d.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
                        children: d.message,
                      }),
                    (0, t.jsx)("button", {
                      type: "submit",
                      disabled: f,
                      className:
                        "w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
                      children: f ? "Enviando solicitud..." : "Solicitar cita",
                    }),
                  ],
                }),
              ],
            })
          );
        },
      ],
      50663,
    );
  },
  79241,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(95187);
    let i = (0, n.createServerReference)(
        "6001e9b266bfb46213136d22da8eaadc79ea65cf68",
        n.callServer,
        void 0,
        n.findSourceMapURL,
        "createContactMessage",
      ),
      a = { success: !1 };
    e.s(
      [
        "ContactForm",
        0,
        function () {
          let [e, n, o] = (0, r.useActionState)(i, a),
            s = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              e.success && s.current?.reset();
            }, [e.success]),
            (0, t.jsxs)("form", {
              ref: s,
              action: n,
              className: "space-y-6",
              children: [
                (0, t.jsxs)("div", {
                  className: "hidden",
                  "aria-hidden": "true",
                  children: [
                    (0, t.jsx)("label", { htmlFor: "contact-website", children: "Website" }),
                    (0, t.jsx)("input", {
                      id: "contact-website",
                      name: "website",
                      type: "text",
                      tabIndex: -1,
                      autoComplete: "off",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "grid gap-6 sm:grid-cols-2",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "contact-name",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Nombre",
                        }),
                        (0, t.jsx)("input", {
                          id: "contact-name",
                          name: "name",
                          required: !0,
                          type: "text",
                          maxLength: 100,
                          "aria-invalid": !!e.errors?.name,
                          "aria-describedby": e.errors?.name ? "contact-name-error" : void 0,
                          placeholder: "Tu nombre",
                          className:
                            "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
                        }),
                        e.errors?.name &&
                          (0, t.jsx)("p", {
                            id: "contact-name-error",
                            className: "mt-2 text-sm text-red-600",
                            children: e.errors.name[0],
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          htmlFor: "contact-phone",
                          className: "mb-2 block text-sm font-medium text-slate-700",
                          children: "Teléfono",
                        }),
                        (0, t.jsx)("input", {
                          id: "contact-phone",
                          name: "phone",
                          type: "tel",
                          required: !0,
                          inputMode: "numeric",
                          autoComplete: "tel",
                          maxLength: 10,
                          pattern: "[0-9]{10}",
                          "aria-invalid": !!e.errors?.phone,
                          "aria-describedby": e.errors?.phone ? "contact-phone-error" : void 0,
                          placeholder: "9610000000",
                          onInput: (e) => {
                            e.currentTarget.value = e.currentTarget.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                          },
                          className:
                            "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                        }),
                        e.errors?.phone &&
                          (0, t.jsx)("p", {
                            id: "contact-phone-error",
                            className: "mt-2 text-sm text-red-600",
                            children: e.errors.phone[0],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "contact-email",
                      className: "mb-2 block text-sm font-medium text-slate-700",
                      children: "Correo",
                    }),
                    (0, t.jsx)("input", {
                      id: "contact-email",
                      name: "email",
                      type: "email",
                      autoComplete: "email",
                      required: !0,
                      "aria-invalid": !!e.errors?.email,
                      "aria-describedby": e.errors?.email ? "contact-email-error" : void 0,
                      placeholder: "correo@ejemplo.com",
                      className:
                        "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                    }),
                    e.errors?.email &&
                      (0, t.jsx)("p", {
                        id: "contact-email-error",
                        className: "mt-2 text-sm text-red-600",
                        children: e.errors.email[0],
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "contact-subject",
                      className: "mb-2 block text-sm font-medium text-slate-700",
                      children: "Asunto",
                    }),
                    (0, t.jsx)("input", {
                      id: "contact-subject",
                      name: "subject",
                      type: "text",
                      maxLength: 150,
                      "aria-invalid": !!e.errors?.subject,
                      "aria-describedby": e.errors?.subject ? "contact-subject-error" : void 0,
                      placeholder: "¿En qué podemos ayudarte?",
                      className:
                        "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                    }),
                    e.errors?.subject &&
                      (0, t.jsx)("p", {
                        id: "contact-subject-error",
                        className: "mt-2 text-sm text-red-600",
                        children: e.errors.subject[0],
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "contact-message",
                      className: "mb-2 block text-sm font-medium text-slate-700",
                      children: "Mensaje",
                    }),
                    (0, t.jsx)("textarea", {
                      id: "contact-message",
                      name: "message",
                      required: !0,
                      maxLength: 1e3,
                      rows: 5,
                      "aria-invalid": !!e.errors?.message,
                      "aria-describedby": e.errors?.message ? "contact-message-error" : void 0,
                      placeholder: "Escribe tu mensaje...",
                      className:
                        "w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400",
                    }),
                    e.errors?.message &&
                      (0, t.jsx)("p", {
                        id: "contact-message-error",
                        className: "mt-2 text-sm text-red-600",
                        children: e.errors.message[0],
                      }),
                  ],
                }),
                e.message &&
                  (0, t.jsx)("div", {
                    role: "status",
                    "aria-live": "polite",
                    className: `rounded-xl p-4 text-sm ${e.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
                    children: e.message,
                  }),
                (0, t.jsx)("button", {
                  type: "submit",
                  disabled: o,
                  className:
                    "w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
                  children: o ? "Enviando..." : "Enviar mensaje",
                }),
              ],
            })
          );
        },
      ],
      79241,
    );
  },
]);
