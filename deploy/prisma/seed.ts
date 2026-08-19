import "dotenv/config";

import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.business.upsert({
    where: {
      slug: "dr-ortega-estetica-dental",
    },
    update: {
      name: "Dr. Ortega Estética Dental",
    },
    create: {
      slug: "dr-ortega-estetica-dental",
      name: "Dr. Ortega Estética Dental",
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME?.trim() || "Administrador";

  if (!adminEmail) {
    throw new Error("Falta ADMIN_EMAIL");
  }

  const existingAdmin = await prisma.user.findUnique({
    where: {
      email: adminEmail,
    },
  });

  if (!existingAdmin) {
    if (!adminPassword) {
      throw new Error("El usuario admin no existe y falta ADMIN_PASSWORD");
    }

    if (adminPassword.length < 8) {
      throw new Error("ADMIN_PASSWORD debe tener al menos 8 caracteres");
    }

    const passwordHash = await bcrypt.hash(adminPassword, 12);

    await prisma.user.create({
      data: {
        name: adminName,
        email: adminEmail,
        passwordHash,
        role: "ADMIN",
        isActive: true,
      },
    });

    console.log(`Usuario admin creado: ${adminEmail}`);
  } else {
    console.log(`Usuario admin ya existe: ${adminEmail}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
  });
