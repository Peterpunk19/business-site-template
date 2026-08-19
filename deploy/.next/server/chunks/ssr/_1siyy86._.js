module.exports = [
  56901,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(97235),
          e = a.i(26593),
          f = b([d, e]);
        (([d, e] = f.then ? (await f)() : f), a.s([]), c());
      } catch (a) {
        c(a);
      }
    }, !1),
  65768,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(56901),
          e = a.i(97235),
          f = a.i(26593),
          g = b([d, e, f]);
        (([d, e, f] = g.then ? (await g)() : g),
          a.s([
            "0085bbba4cb325987436193e393e07cc14a6337dde",
            () => e.logout,
            "40db0ddebcf1915f80fcf66af11ec387a3e566e9a9",
            () => f.updateAppointmentStatus,
          ]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  44085,
  (a) => {
    a.v((b) =>
      Promise.all(
        [
          "server/chunks/ssr/node_modules_next_dist_compiled_react-dom_server_node_01kl_q7.js",
          "server/chunks/ssr/[root-of-the-server]__0q-4y-r._.js",
        ].map((b) => a.l(b)),
      ).then(() => b(30227)),
    );
  },
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
  26593,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(37936),
          e = a.i(18558),
          f = a.i(98426),
          g = a.i(66253),
          h = a.i(43373),
          i = a.i(41988),
          j = a.i(83286),
          k = a.i(16923),
          l = a.i(13095),
          m = b([f, g]);
        [f, g] = m.then ? (await m)() : m;
        let o = new Set(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"]);
        async function n(a) {
          await (0, f.requireAdmin)();
          let b = a.get("id"),
            c = a.get("status");
          if ("string" != typeof b || "string" != typeof c || !o.has(c))
            throw Error("Invalid appointment status update.");
          let d = await (0, g.getAppointmentById)(b);
          if (!d) throw Error("Appointment not found.");
          if (!(0, h.canTransitionAppointmentStatus)(d.status, c))
            throw Error(`Invalid status transition from ${d.status} to ${c}.`);
          if ((await (0, g.updateAppointmentStatus)(b, c), d.email)) {
            let a = {
              email: d.email,
              name: d.name,
              serviceName: (0, j.getServiceName)(d.serviceId),
              date: (0, k.formatDateObjectForMexico)(d.preferredDate),
              time: (0, k.formatTime)(d.preferredTime),
            };
            try {
              ("CONFIRMED" === c && (await (0, i.sendAppointmentConfirmedEmail)(a)),
                "CANCELLED" === c && (await (0, i.sendAppointmentCancelledEmail)(a)));
            } catch (a) {
              console.error("Appointment status updated but notification email failed:", a);
            }
          }
          ((0, e.revalidatePath)("/admin"),
            (0, e.revalidatePath)("/admin/appointments"),
            (0, e.revalidatePath)(`/admin/appointments/${b}`));
        }
        ((0, l.ensureServerEntryExports)([n]),
          (0, d.registerServerReference)(n, "40db0ddebcf1915f80fcf66af11ec387a3e566e9a9", null),
          a.s(["updateAppointmentStatus", 0, n]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
  43373,
  (a) => {
    "use strict";
    let b = {
      PENDING: ["CONFIRMED", "CANCELLED"],
      CONFIRMED: ["COMPLETED", "CANCELLED"],
      COMPLETED: [],
      CANCELLED: [],
    };
    a.s([
      "appointmentStatusLabels",
      0,
      {
        PENDING: "Pendiente",
        CONFIRMED: "Confirmada",
        COMPLETED: "Completada",
        CANCELLED: "Cancelada",
      },
      "appointmentStatusTransitions",
      0,
      b,
      "canTransitionAppointmentStatus",
      0,
      function (a, c) {
        return a === c || b[a].includes(c);
      },
    ]);
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
  41988,
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
      k = a.i(63818);
    function l() {
      let a = process.env.EMAIL_FROM;
      if (!a) throw Error("Missing EMAIL_FROM environment variable.");
      return a;
    }
    async function m(a) {
      let m = (0, b.getResend)(),
        { error: n } = await m.emails.send({
          from: l(),
          to: a.email,
          subject: "Tu cita ha sido confirmada",
          react: (function ({ name: a, serviceName: b, date: c, time: l }) {
            return (0, d.jsxs)(e.Html, {
              children: [
                (0, d.jsx)(f.Head, {}),
                (0, d.jsx)(g.Preview, { children: "Tu cita ha sido confirmada" }),
                (0, d.jsx)(h.Body, {
                  children: (0, d.jsxs)(i.Container, {
                    children: [
                      (0, d.jsx)(j.Heading, { children: "Tu cita ha sido confirmada" }),
                      (0, d.jsxs)(k.Text, { children: ["Hola ", a, ","] }),
                      (0, d.jsx)(k.Text, {
                        children: "El consultorio confirmó tu solicitud de cita.",
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Servicio:" }), " ", b],
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Fecha:" }), " ", c],
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Hora:" }), " ", l],
                      }),
                      (0, d.jsx)(k.Text, {
                        children: "Te recomendamos llegar unos minutos antes de tu cita.",
                      }),
                    ],
                  }),
                }),
              ],
            });
          })({ name: a.name, serviceName: a.serviceName, date: a.date, time: a.time }),
          replyTo: c.businessConfig.contact.email,
        });
      if (n) throw Error(`Confirmation email failed: ${n.message}`);
    }
    async function n(a) {
      let m = (0, b.getResend)(),
        { error: n } = await m.emails.send({
          from: l(),
          to: a.email,
          subject: "Actualización de tu solicitud de cita",
          react: (function ({ name: a, serviceName: b, date: c, time: l }) {
            return (0, d.jsxs)(e.Html, {
              children: [
                (0, d.jsx)(f.Head, {}),
                (0, d.jsx)(g.Preview, { children: "Actualización de tu solicitud de cita" }),
                (0, d.jsx)(h.Body, {
                  children: (0, d.jsxs)(i.Container, {
                    children: [
                      (0, d.jsx)(j.Heading, { children: "Tu solicitud fue cancelada" }),
                      (0, d.jsxs)(k.Text, { children: ["Hola ", a, ","] }),
                      (0, d.jsx)(k.Text, {
                        children: "La solicitud de cita que realizaste ha sido cancelada.",
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Servicio:" }), " ", b],
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Fecha solicitada:" }), " ", c],
                      }),
                      (0, d.jsxs)(k.Text, {
                        children: [(0, d.jsx)("strong", { children: "Hora:" }), " ", l],
                      }),
                      (0, d.jsx)(k.Text, {
                        children:
                          "Puedes comunicarte con el consultorio para solicitar una nueva fecha.",
                      }),
                    ],
                  }),
                }),
              ],
            });
          })({ name: a.name, serviceName: a.serviceName, date: a.date, time: a.time }),
          replyTo: c.businessConfig.contact.email,
        });
      if (n) throw Error(`Cancellation email failed: ${n.message}`);
    }
    a.s(["sendAppointmentCancelledEmail", 0, n, "sendAppointmentConfirmedEmail", 0, m], 41988);
  },
  97235,
  (a) =>
    a.a(async (b, c) => {
      try {
        var d = a.i(37936),
          e = a.i(77607),
          f = a.i(13095),
          g = b([e]);
        async function h() {
          await (0, e.signOut)({ redirectTo: "/admin/login" });
        }
        (([e] = g.then ? (await g)() : g),
          (0, f.ensureServerEntryExports)([h]),
          (0, d.registerServerReference)(h, "0085bbba4cb325987436193e393e07cc14a6337dde", null),
          a.s(["logout", 0, h]),
          c());
      } catch (a) {
        c(a);
      }
    }, !1),
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
  83286,
  (a) => {
    "use strict";
    var b = a.i(47410);
    a.s([
      "getServiceName",
      0,
      function (a) {
        return b.services.find((b) => b.id === a)?.name ?? a;
      },
    ]);
  },
];

//# sourceMappingURL=_1siyy86._.js.map
