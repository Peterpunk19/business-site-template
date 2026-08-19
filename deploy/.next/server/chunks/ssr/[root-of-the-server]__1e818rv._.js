module.exports = [
  84941,
  (a, b, c) => {
    b.exports = a.x("@prisma/client-2c3a283f134fdcb6/runtime/client", () =>
      require("@prisma/client-2c3a283f134fdcb6/runtime/client"),
    );
  },
  50227,
  (a, b, c) => {
    b.exports = a.x("node:path", () => require("node:path"));
  },
  57764,
  (a, b, c) => {
    b.exports = a.x("node:url", () => require("node:url"));
  },
  23862,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = await a.y("pg-587764f78a6c7a9c");
        (a.n(d), c());
      } catch (a) {
        c(a);
      }
    }, !0),
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
  47410,
  (a) => {
    "use strict";
    a.s([
      "services",
      0,
      [
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
    ]);
  },
  12320,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(37936),
          e = a.i(45380),
          f = a.i(47410),
          g = a.i(66253),
          h = a.i(53182),
          i = a.i(70086),
          j = a.i(16923),
          k = a.i(13095),
          l = b([g]);
        async function m(a, b) {
          if (b.get("website"))
            return { success: !0, message: "Tu solicitud fue enviada correctamente." };
          let c = {
              name: b.get("name"),
              phone: b.get("phone"),
              email: b.get("email"),
              service: b.get("service"),
              preferredDate: b.get("preferredDate"),
              preferredTime: b.get("preferredTime"),
              message: b.get("message"),
            },
            d = h.appointmentSchema.safeParse(c);
          if (!d.success)
            return {
              success: !1,
              message: "Revisa los campos del formulario.",
              errors: d.error.flatten().fieldErrors,
            };
          let k = (0, j.formatDateForMexico)(d.data.preferredDate),
            l = (0, j.formatTime)(d.data.preferredTime),
            m = f.services.find((a) => a.id === d.data.service);
          if (!m) return { success: !1, message: "El servicio seleccionado no es válido." };
          try {
            await (0, g.saveAppointment)({
              businessSlug: e.businessConfig.slug,
              appointment: d.data,
            });
          } catch (a) {
            return (
              console.error("Error saving appointment:", a),
              { success: !1, message: "No pudimos registrar tu solicitud. Inténtalo nuevamente." }
            );
          }
          try {
            await (0, i.sendAppointmentNotification)({
              name: d.data.name,
              phone: d.data.phone,
              email: d.data.email,
              serviceName: m.name,
              preferredDate: k,
              preferredTime: l,
              message: d.data.message,
            });
          } catch (a) {
            console.error("Appointment saved but notification email failed:", a);
          }
          if (d.data.email)
            try {
              await (0, i.sendAppointmentConfirmation)({
                email: d.data.email,
                name: d.data.name,
                serviceName: m.name,
                preferredDate: d.data.preferredDate,
                preferredTime: d.data.preferredTime,
              });
            } catch (a) {
              console.error("Appointment confirmation email failed:", a);
            }
          return {
            success: !0,
            message:
              "Tu solicitud fue enviada correctamente. Nos comunicaremos contigo para confirmar la cita.",
          };
        }
        (([g] = l.then ? (await l)() : l),
          (0, k.ensureServerEntryExports)([m]),
          (0, d.registerServerReference)(m, "600e2b4015879486fdd6c9664a5cae026703eedb36", null),
          a.s(["createAppointment", 0, m]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  25230,
  (a) => {
    "use strict";
    var b = a.i(53112);
    let c = b.z.object({
      name: b.z
        .string()
        .trim()
        .min(2, "Ingresa tu nombre.")
        .max(100, "El nombre es demasiado largo."),
      phone: b.z
        .string()
        .trim()
        .regex(/^\d{10}$/, "El teléfono debe contener exactamente 10 dígitos."),
      email: b.z
        .string()
        .trim()
        .pipe(b.z.email({ error: "Ingresa un correo válido." })),
      subject: b.z
        .string()
        .trim()
        .max(150, "El asunto es demasiado largo.")
        .optional()
        .or(b.z.literal("")),
      message: b.z
        .string()
        .trim()
        .min(10, "Escribe un mensaje un poco más detallado.")
        .max(1e3, "El mensaje no puede superar 1000 caracteres."),
    });
    a.s(["contactSchema", 0, c]);
  },
  66253,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(66518),
          e = a.i(29296),
          f = b([d, e]);
        async function g({ businessSlug: a, appointment: b }) {
          let c = await (0, e.getBusinessIdBySlug)(a);
          if (!c) throw Error(`Business "${a}" could not be found.`);
          return d.prisma.appointmentRequest.create({
            data: {
              businessId: c,
              name: b.name,
              phone: b.phone,
              email: b.email || null,
              serviceId: b.service,
              preferredDate: new Date(`${b.preferredDate}T00:00:00`),
              preferredTime: b.preferredTime,
              message: b.message || null,
              status: "PENDING",
            },
            select: { id: !0 },
          });
        }
        async function h({ search: a, status: b } = {}) {
          return d.prisma.appointmentRequest.findMany({
            where: {
              ...(b && { status: b }),
              ...(a && {
                OR: [
                  { name: { contains: a, mode: "insensitive" } },
                  { phone: { contains: a } },
                  { email: { contains: a, mode: "insensitive" } },
                ],
              }),
            },
            orderBy: { createdAt: "desc" },
            select: {
              id: !0,
              name: !0,
              phone: !0,
              email: !0,
              serviceId: !0,
              preferredDate: !0,
              preferredTime: !0,
              status: !0,
              createdAt: !0,
            },
          });
        }
        async function i(a) {
          return d.prisma.appointmentRequest.findUnique({ where: { id: a } });
        }
        async function j(a, b) {
          return d.prisma.appointmentRequest.update({ where: { id: a }, data: { status: b } });
        }
        (([d, e] = f.then ? (await f)() : f),
          a.s([
            "getAppointmentById",
            0,
            i,
            "getAppointments",
            0,
            h,
            "saveAppointment",
            0,
            g,
            "updateAppointmentStatus",
            0,
            j,
          ]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  53182,
  (a) => {
    "use strict";
    var b = a.i(53112),
      c = a.i(16923);
    let d = b.z.object({
      name: b.z
        .string()
        .trim()
        .min(2, "Ingresa tu nombre.")
        .max(100, "El nombre es demasiado largo."),
      phone: b.z
        .string()
        .trim()
        .regex(/^\d{10}$/, "El teléfono debe contener exactamente 10 dígitos."),
      email: b.z
        .string()
        .trim()
        .transform((a) => a || void 0)
        .pipe(b.z.email({ error: "Ingresa un correo válido." }).optional()),
      service: b.z.string().min(1, "Selecciona un servicio."),
      preferredDate: b.z
        .string()
        .min(1, "Selecciona una fecha.")
        .refine(c.isAppointmentDateAllowed, {
          message: "Selecciona una fecha dentro de los próximos 90 días.",
        }),
      preferredTime: b.z.string().min(1, "Selecciona un horario."),
      message: b.z
        .string()
        .trim()
        .max(500, "El mensaje no puede superar 500 caracteres.")
        .optional(),
    });
    a.s(["appointmentSchema", 0, d]);
  },
  70086,
  (a) => {
    "use strict";
    var b = a.i(96348),
      c = a.i(45380),
      d = a.i(7997),
      e = a.i(94456),
      f = a.i(60323),
      g = a.i(77885),
      h = a.i(12943),
      i = a.i(53887),
      j = a.i(45605),
      k = a.i(63818),
      l = a.i(83105),
      m = a.i(717);
    let n = m.forwardRef(({ style: a, ...b }, c) =>
      (0, d.jsx)("hr", {
        ...b,
        ref: c,
        style: {
          width: "100%",
          border: "none",
          borderColor: "transparent",
          borderTop: "1px solid #eaeaea",
          ...a,
        },
      }),
    );
    ((n.displayName = "Hr"), (0, l.markAsElement)(n));
    let o = m.forwardRef(({ children: a, style: b = {}, ...c }, e) => {
      let f = {},
        g = {};
      for (let a in b) {
        if (!Object.hasOwn(b, a)) continue;
        let c = b[a];
        "padding" === a ||
        "paddingTop" === a ||
        "paddingRight" === a ||
        "paddingBottom" === a ||
        "paddingLeft" === a
          ? (f[a] = c)
          : (g[a] = c);
      }
      return (0, d.jsx)("table", {
        align: "center",
        width: "100%",
        border: 0,
        cellPadding: "0",
        cellSpacing: "0",
        role: "presentation",
        ...c,
        ref: e,
        style: g,
        children: (0, d.jsx)("tbody", {
          children: (0, d.jsx)("tr", { children: (0, d.jsx)("td", { style: f, children: a }) }),
        }),
      });
    });
    function p() {
      let a = process.env.EMAIL_FROM;
      if (!a) throw Error("Missing EMAIL_FROM environment variable.");
      return a;
    }
    async function q(a) {
      let l = (0, b.getResend)(),
        { error: m } = await l.emails.send({
          from: p(),
          to: c.businessConfig.notifications.email,
          subject: `Nueva solicitud de cita - ${a.name}`,
          react: (function ({
            name: a,
            phone: b,
            email: c,
            serviceName: l,
            preferredDate: m,
            preferredTime: p,
            message: q,
          }) {
            return (0, d.jsxs)(e.Html, {
              children: [
                (0, d.jsx)(f.Head, {}),
                (0, d.jsxs)(g.Preview, { children: ["Nueva solicitud de cita de ", a] }),
                (0, d.jsx)(h.Body, {
                  children: (0, d.jsxs)(i.Container, {
                    children: [
                      (0, d.jsx)(j.Heading, { children: "Nueva solicitud de cita" }),
                      (0, d.jsx)(k.Text, {
                        children: "Se recibió una nueva solicitud desde la página web.",
                      }),
                      (0, d.jsx)(n, {}),
                      (0, d.jsxs)(o, {
                        children: [
                          (0, d.jsxs)(k.Text, {
                            children: [(0, d.jsx)("strong", { children: "Paciente:" }), " ", a],
                          }),
                          (0, d.jsxs)(k.Text, {
                            children: [(0, d.jsx)("strong", { children: "Teléfono:" }), " ", b],
                          }),
                          c &&
                            (0, d.jsxs)(k.Text, {
                              children: [(0, d.jsx)("strong", { children: "Correo:" }), " ", c],
                            }),
                          (0, d.jsxs)(k.Text, {
                            children: [(0, d.jsx)("strong", { children: "Servicio:" }), " ", l],
                          }),
                          (0, d.jsxs)(k.Text, {
                            children: [(0, d.jsx)("strong", { children: "Fecha:" }), " ", m],
                          }),
                          (0, d.jsxs)(k.Text, {
                            children: [(0, d.jsx)("strong", { children: "Hora:" }), " ", p],
                          }),
                          q &&
                            (0, d.jsxs)(k.Text, {
                              children: [
                                (0, d.jsx)("strong", { children: "Comentarios:" }),
                                " ",
                                q,
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
          })(a),
        });
      if (m) throw Error(`Appointment notification could not be sent: ${m.message}`);
    }
    async function r({ email: a, name: c, serviceName: l, preferredDate: m, preferredTime: n }) {
      let o = (0, b.getResend)(),
        { error: q } = await o.emails.send({
          from: p(),
          to: a,
          subject: "Recibimos tu solicitud de cita",
          react: (function ({ name: a, serviceName: b, preferredDate: c, preferredTime: l }) {
            return (0, d.jsxs)(e.Html, {
              children: [
                (0, d.jsx)(f.Head, {}),
                (0, d.jsx)(g.Preview, { children: "Recibimos tu solicitud de cita" }),
                (0, d.jsx)(h.Body, {
                  children: (0, d.jsxs)(i.Container, {
                    children: [
                      (0, d.jsx)(j.Heading, { children: "Recibimos tu solicitud" }),
                      (0, d.jsxs)(k.Text, { children: ["Hola ", a, ","] }),
                      (0, d.jsx)(k.Text, { children: "Hemos recibido tu solicitud de cita." }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Servicio:" }), " ", b],
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Fecha preferida:" }), " ", c],
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [
                          (0, d.jsx)("strong", { children: "Horario preferido:" }),
                          " ",
                          l,
                        ],
                      }),
                      (0, d.jsx)(k.Text, {
                        children:
                          "La cita aún no está confirmada. Nos comunicaremos contigo para confirmar disponibilidad.",
                      }),
                    ],
                  }),
                }),
              ],
            });
          })({ name: c, serviceName: l, preferredDate: m, preferredTime: n }),
        });
      if (q) throw Error(`Appointment confirmation could not be sent: ${q.message}`);
    }
    ((o.displayName = "Section"),
      (0, l.markAsElement)(o),
      a.s(["sendAppointmentConfirmation", 0, r, "sendAppointmentNotification", 0, q], 70086));
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
  97281,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(37936),
          e = a.i(45380),
          f = a.i(25230),
          g = a.i(5382),
          h = a.i(13095),
          i = b([g]);
        async function j(a, b) {
          if (b.get("website"))
            return { success: !0, message: "Tu mensaje fue enviado correctamente." };
          let c = {
              name: b.get("name"),
              phone: b.get("phone"),
              email: b.get("email"),
              subject: b.get("subject"),
              message: b.get("message"),
            },
            d = f.contactSchema.safeParse(c);
          if (!d.success)
            return {
              success: !1,
              message: "Revisa los campos del formulario.",
              errors: d.error.flatten().fieldErrors,
            };
          try {
            return (
              await (0, g.saveContactMessage)({
                businessSlug: e.businessConfig.slug,
                contact: d.data,
              }),
              {
                success: !0,
                message:
                  "Tu mensaje fue enviado correctamente. Nos comunicaremos contigo lo antes posible.",
              }
            );
          } catch (a) {
            return (
              console.error("Error creating contact message:", a),
              { success: !1, message: "No pudimos enviar tu mensaje. Inténtalo nuevamente." }
            );
          }
        }
        (([g] = i.then ? (await i)() : i),
          (0, h.ensureServerEntryExports)([j]),
          (0, d.registerServerReference)(j, "6001e9b266bfb46213136d22da8eaadc79ea65cf68", null),
          a.s(["createContactMessage", 0, j]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  34030,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(12320),
          e = a.i(97281),
          f = b([d, e]);
        (([d, e] = f.then ? (await f)() : f), a.s([]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  99204,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(34030),
          e = a.i(12320),
          f = a.i(97281),
          g = b([d, e, f]);
        (([d, e, f] = g.then ? (await g)() : g),
          a.s([
            "6001e9b266bfb46213136d22da8eaadc79ea65cf68",
            () => f.createContactMessage,
            "600e2b4015879486fdd6c9664a5cae026703eedb36",
            () => e.createAppointment,
          ]),
          c());
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1e818rv._.js.map
